const { generateReply } = require("./gemini");

(async () => {
  console.log("=== NUCLEAR VIRAL STRESS TEST: 30 SEQUENTIAL DMs ===\n");
  
  const scenarios = Array.from({ length: 30 }, (_, i) => ({
    u: `Viral_User_${i + 1}`,
    q: [
      "Price of blue set?",
      "Do you have XXL?",
      "Can I get a discount for my wedding?",
      "Is the link working?",
      "Fabric details please.",
      "Any yellow outfits?",
      "How to order?",
      "Store location?",
      "Pista sharara link?",
      "Silk suit price?",
      "Do you sell unstitched?",
      "Custom fitting available?",
      "Latest collection link?",
      "Black suit price?",
      "Engagement ideas?"
    ][i % 15]
  }));

  console.log(`🚀 Launching 30-message NUCLEAR wave (Staggered 500ms)...\n`);

  const startTime = Date.now();
  const results = [];

  for (const s of scenarios) {
    console.log(`💬 Processing ${s.u}...`);
    try {
      const reply = await generateReply(s.u, s.q);
      results.push({ user: s.u, query: s.q, reply });
    } catch (err) {
      results.push({ user: s.u, query: s.q, reply: "FAILED: " + err.message });
    }
    // Stagger to simulate real arrival and avoid API firewall blocks
    await new Promise(r => setTimeout(r, 500));
  }

  const endTime = Date.now();
  console.log("\n--- TEST SUMMARY ---\n");

  results.forEach((res, i) => {
    console.log(`[${i+1}/30] 👤 ${res.user}: "${res.query}"`);
    console.log(`🤖 Bot: "${res.reply.substring(0, 80)}..."\n`);
  });

  console.log(`✅ NUCLEAR TEST COMPLETE: 30 DMs processed in ${((endTime - startTime)/1000).toFixed(2)} seconds.`);
})();
