require("dotenv").config();
const { GoogleGenerativeAI } = require("@google/generative-ai");
const { getCatalogContext } = require("./catalog");

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// Store last 5 messages per user for conversation context
const conversationHistory = new Map();
const MAX_HISTORY = 5;

const SYSTEM_PROMPT = `You are the heartbeat of Pallavi Boutique's Instagram—warm, passionate about Indian wear, and incredibly helpful. You aren't just an "assistant"; you are a curator who loves helping women find their perfect fit.

STRICT RULE: Only output the final customer-facing message. DO NOT include any thinking, internal reasoning, or technical analysis in your response.

TONE & PERSONALITY:
- Warm & Welcoming: Use words like "Lovely," "Absolutely," "Certainly."
- Boutique Vibe: Use "We" (The Pallavi Boutique family) instead of "I".
- Style Passion: Occasionally add a tiny compliment like "That color is a total bestseller!" or "This set has such a royal vibe."
- Natural & Human: Don't sound like a robot. If someone says hi, give a warm welcome.

LANGUAGE RULES:
1. Default to clean, professional English. It's our brand's standard.
2. However, if the customer speaks in Hindi or uses Hinglish (e.g., "Price kya hai?"), feel free to reply in a mix of English/Hindi to match their comfort level. Stay polite and high-end.

COMMUNICATION RULES:
1. Keep replies SHORT and snappy (2-3 sentences max). DMs should be quick.
2. Always provide specific prices and sizes from the catalog.
3. You MUST include the direct product "Link" whenever you mention a specific item.
4. For complex requests (custom stitching measurements, bulk wedding orders, or serious complaints), say: "I’d love for Pallavi ji to handle this personally for you! Let me connect you with her directly 🙏"

CATALOG DATA:
${getCatalogContext()}`;

function getHistory(userId) {
  if (!conversationHistory.has(userId)) {
    conversationHistory.set(userId, []);
  }
  return conversationHistory.get(userId);
}

function addToHistory(userId, role, text) {
  const history = getHistory(userId);
  history.push({ role, parts: [{ text }] });
  if (history.length > MAX_HISTORY * 2) {
    history.splice(0, 2); // Remove oldest pair
  }
}

async function generateReply(userId, userMessage) {
  let attempts = 0;
  const MAX_ATTEMPTS = 5;
  let modelId = "gemma-4-31b-it"; // MAIN BRAIN (Tier 1)

  while (attempts < MAX_ATTEMPTS) {
    try {
      attempts++;
      
      const model = genAI.getGenerativeModel({ model: modelId });

      const history = getHistory(userId);
      
      // Manually construct the full prompt context for Gemma (more stable than startChat)
      let fullPrompt = `[SYSTEM INSTRUCTIONS: ${SYSTEM_PROMPT}]\n\n`;
      
      // Add past memory
      history.forEach(turn => {
        const role = turn.role === "user" ? "Customer" : "Curator";
        fullPrompt += `${role}: ${turn.parts[0].text}\n`;
      });
      
      // Add current message
      fullPrompt += `Customer: ${userMessage}\nCurator:`;

      const result = await model.generateContent(fullPrompt);
      const reply = result.response.text().trim();

      // STRICT PERSONA LOCK: Filter out any internal reasoning blocks
      const cleanReply = reply
        .replace(/^(User Question|Goal|I need to|Thinking|Thought|Reasoning|Internal|Analysis|Context):[\s\S]*?(?=\w)/gi, "")
        .replace(/^[*\s]+(Thinking|Thought|Reasoning)[\s\S]*?\n/gi, "")
        .trim();

      // Save to history
      addToHistory(userId, "user", userMessage);
      addToHistory(userId, "model", cleanReply);

      return cleanReply;
    } catch (error) {
      const isQuota = error.message.includes("429") || error.message.includes("Quota");
      const isBusy = error.message.includes("503") || error.message.includes("500") || error.message.includes("API key");
      
      console.log(`⚠️ Model ${modelId} error (Attempt ${attempts}/${MAX_ATTEMPTS}): ${error.message}`);
      
      // TIERED FALLBACK ENGINE
      if (modelId === "gemma-4-31b-it") {
        console.log("🔄 Swapping to Backup (Tier 2): Gemma 4 26B.");
        modelId = "gemma-4-26b-a4b-it";
      } else if (modelId === "gemma-4-26b-a4b-it") {
        console.log("🔄 Swapping to Final Insurance (Tier 3): Gemma 3 27B.");
        modelId = "gemma-3-27b-it";
      }

      const waitTime = isQuota ? (attempts * 5000) : 1000;
      console.log(`⏳ Cooldown ${waitTime/1000}s...`);
      await new Promise(res => setTimeout(res, waitTime));
      
      if (attempts >= MAX_ATTEMPTS) break;
    }
  }
  return "Sorry, I'm having a little trouble right now! Please DM us again in a bit or WhatsApp us directly 🙏";
}

module.exports = { generateReply };
