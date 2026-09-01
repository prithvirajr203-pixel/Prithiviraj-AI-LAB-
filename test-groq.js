/**
 * Quick test script to verify Groq API integration
 * Run with: node test-groq.js
 */

import "dotenv/config.js";
import { PORTFOLIO_SYSTEM_PROMPT } from "./src/data/portfolioSystemPrompt.js";

const apiKey = process.env.GROQ_API_KEY;

if (!apiKey) {
  console.error("❌ ERROR: GROQ_API_KEY not found in environment variables");
  console.error("Make sure .env.local exists with GROQ_API_KEY=your_key_here");
  process.exit(1);
}

console.log("✅ API Key found");
console.log("📤 Sending test question to Groq API...\n");

const testQuestion = "Tell me about Prithiviraj";

const messages = [
  {
    role: "system",
    content: PORTFOLIO_SYSTEM_PROMPT,
  },
  {
    role: "user",
    content: testQuestion,
  },
];

try {
  const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: "openai/gpt-oss-120b",
      messages: messages,
      temperature: 0.7,
      max_tokens: 1024,
      top_p: 0.9,
    }),
  });

  if (!response.ok) {
    const error = await response.json();
    console.error("❌ Groq API Error:", error);
    process.exit(1);
  }

  const data = await response.json();
  const aiResponse = data.choices?.[0]?.message?.content;

  if (!aiResponse) {
    console.error("❌ No response from Groq");
    process.exit(1);
  }

  console.log("✅ SUCCESS! Groq API is working correctly!\n");
  console.log("📝 Test Question:");
  console.log(`   "${testQuestion}"\n`);
  console.log("🤖 AI Response:");
  console.log(`   ${aiResponse}\n`);
  console.log("✨ The chatbot is ready to use!\n");
} catch (err) {
  console.error("❌ Error:", err.message);
  process.exit(1);
}
