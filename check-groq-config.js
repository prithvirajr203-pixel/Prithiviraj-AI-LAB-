/**
 * Diagnostic tool to check Groq API configuration
 * Run with: node check-groq-config.js
 */

import "dotenv/config.js";

const apiKey = process.env.GROQ_API_KEY;

console.log("🔍 Groq Configuration Diagnostic Tool\n");
console.log("=" .repeat(50));

// Check API Key
if (!apiKey) {
  console.error("❌ GROQ_API_KEY not found!");
  console.log("\n📝 Setup Instructions:");
  console.log("1. Go to https://console.groq.com/keys");
  console.log("2. Create a new API key (or use existing one)");
  console.log("3. Create/edit .env.local in your project root");
  console.log("4. Add: GROQ_API_KEY=your_key_here");
  console.log("5. Save and try again\n");
  process.exit(1);
}

console.log("✅ GROQ_API_KEY is set\n");

// Verify API Key format
if (!apiKey.startsWith("gsk_")) {
  console.warn("⚠️  WARNING: API key doesn't start with 'gsk_'");
  console.log("   Make sure you copied the full key from https://console.groq.com/keys\n");
}

// Test API connection
console.log("🧪 Testing API connection...");
console.log("   Attempting to list available models...\n");

try {
  const response = await fetch("https://api.groq.com/openai/v1/models", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${apiKey}`,
    },
  });

  if (!response.ok) {
    const error = await response.json();
    console.error("❌ API Error:", error);
    console.log("\n📋 Troubleshooting:");
    console.log("1. Verify your API key is correct");
    console.log("2. Visit https://console.groq.com/keys to check");
    console.log("3. Ensure the key hasn't been revoked");
    console.log("4. Make sure your Groq account is active\n");
    process.exit(1);
  }

  const data = await response.json();
  const models = data.data || [];

  if (models.length === 0) {
    console.error("❌ No models available for this API key");
    console.log("\n💡 This might mean:");
    console.log("   - Your account is on a free tier with limited access");
    console.log("   - You haven't been granted access to any models yet");
    console.log("   - Check your account status at https://console.groq.com\n");
    process.exit(1);
  }

  console.log("✅ SUCCESS! Available models:\n");
  models.forEach((model, i) => {
    console.log(`   ${i + 1}. ${model.id}`);
  });

  console.log(`\n📝 Update Instructions:`);
  console.log("1. Edit netlify/functions/chat.js");
  console.log(`2. Change model: "${models[0].id}"`);
  console.log("3. Edit test-groq.js (same change)");
  console.log("4. Run: node test-groq.js\n");
} catch (err) {
  console.error("❌ Network Error:", err.message);
  console.log("\n📋 Troubleshooting:");
  console.log("1. Check your internet connection");
  console.log("2. Verify Groq API is accessible");
  console.log("3. Try https://api.groq.com in your browser\n");
  process.exit(1);
}
