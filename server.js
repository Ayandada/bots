require("dotenv").config();
const express = require("express");
const { generateReply } = require("./gemini");
const { sendMessage } = require("./instagram");

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;
const VERIFY_TOKEN = process.env.VERIFY_TOKEN || "pallavi_boutique_verify_2025";

// Track processed message IDs to avoid duplicate replies
const processedMessages = new Set();
const MAX_PROCESSED = 1000;

// ========================
//  WEBHOOK VERIFICATION
// ========================
// Meta sends a GET request to verify your webhook URL
app.get("/webhook", (req, res) => {
  console.log("🔍 Webhook Verification Attempt:", JSON.stringify(req.query, null, 2));
  
  const mode = req.query["hub.mode"];
  const token = req.query["hub.verify_token"];
  const challenge = req.query["hub.challenge"];

  if (mode === "subscribe" && token === VERIFY_TOKEN) {
    console.log("✅ Webhook verified successfully!");
    return res.status(200).send(challenge);
  }

  console.warn(`❌ Webhook verification failed. Expected: "${VERIFY_TOKEN}", Received: "${token}"`);
  return res.sendStatus(403);
});

// ========================
//  INCOMING MESSAGES
// ========================
// Meta sends a POST request when someone DMs the Instagram account
app.post("/webhook", async (req, res) => {
  // Always respond 200 quickly to prevent Meta from retrying
  res.sendStatus(200);

  try {
    const body = req.body;
    console.log("📥 Incoming Webhook:", JSON.stringify(body, null, 2));

    if (body.object !== "instagram") return;

    const entries = body.entry || [];

    for (const entry of entries) {
      const messaging = entry.messaging || [];

      // Process messages in parallel (Viral-Proofing)
      // We don't await the whole loop so that every user gets an instant reply
      messaging.forEach(async (event) => {
        try {
          const senderId = event.sender.id;
          const messageId = event.message?.mid;
          
          if (!event.message || event.message.is_echo) return;

          // Deduplicate
          if (processedMessages.has(messageId)) return;
          processedMessages.add(messageId);

          // Prevent memory leak
          if (processedMessages.size > MAX_PROCESSED) {
            const iterator = processedMessages.values();
            for (let i = 0; i < 500; i++) {
              processedMessages.delete(iterator.next().value);
            }
          }

          // 1. EXTRACT CONTEXT (TEXT OR SHARED POST)
          let messageText = event.message.text || "";
          let context = "";

          if (event.message.attachments) {
            for (const attachment of event.message.attachments) {
              if ((attachment.type === "ig_post" || attachment.type === "share") && attachment.payload.title) {
                context = `[USER SHARED A POST/REEL: "${attachment.payload.title}"] `;
              }
            }
          }

          const fullQuery = (context + messageText).trim();
          if (!fullQuery) return;

          console.log(`📩 Background processing for ${senderId}: "${fullQuery}"`);

          // Generate AI reply
          const reply = await generateReply(senderId, fullQuery);
          
          // Send it back via Instagram
          await sendMessage(senderId, reply);
          console.log(`🤖 Reply sent to ${senderId}`);

        } catch (err) {
          console.error("Background message error:", err.message);
        }
      });
    }
  } catch (error) {
    console.error("Webhook processing error:", error.message);
  }
});

// ========================
//  HEALTH CHECK
// ========================
app.get("/", (req, res) => {
  res.json({
    status: "running",
    bot: "Pallavi Boutique Instagram DM Bot",
    uptime: Math.floor(process.uptime()) + "s"
  });
});

// ========================
//  START SERVER
// ========================
app.listen(PORT, () => {
  console.log(`
  ╔══════════════════════════════════════════╗
  ║  Pallavi Boutique IG Bot is LIVE! 🚀    ║
  ║  Port: ${PORT}                              ║
  ║  Webhook: /webhook                       ║
  ╚══════════════════════════════════════════╝
  `);
});
