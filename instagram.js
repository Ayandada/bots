const GRAPH_API_URL = "https://graph.instagram.com/v21.0";

// Rate limiting: max 200 calls per hour
let callCount = 0;
let lastReset = Date.now();

function checkRateLimit() {
  const now = Date.now();
  if (now - lastReset > 3600000) { // Reset every hour
    callCount = 0;
    lastReset = now;
  }
  if (callCount >= 190) { // Leave 10 buffer
    console.warn("⚠️ Approaching Instagram API rate limit!");
    return false;
  }
  callCount++;
  return true;
}

async function sendMessage(recipientId, messageText) {
  if (!checkRateLimit()) {
    console.error("❌ Rate limit reached. Skipping message.");
    return false;
  }

  const accessToken = process.env.INSTAGRAM_ACCESS_TOKEN;
  const pageId = process.env.INSTAGRAM_PAGE_ID;

  try {
    const response = await fetch(`${GRAPH_API_URL}/${pageId}/messages`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${accessToken}`
      },
      body: JSON.stringify({
        recipient: { id: recipientId },
        message: { text: messageText }
      })
    });

    const data = await response.json();

    if (!response.ok) {
      console.error("Instagram API error:", JSON.stringify(data));
      return false;
    }

    console.log(`✅ Reply sent to ${recipientId}`);
    return true;
  } catch (error) {
    console.error("Failed to send message:", error.message);
    return false;
  }
}

module.exports = { sendMessage };
