/**
 * Vercel Serverless Function: Chat
 *
 * This function handles all Groq API calls securely from the backend.
 * The frontend calls this endpoint to send messages and receive AI responses.
 *
 * Deployment (Vercel):
 * - Place this file at: api/chat.js
 * - Vercel automatically exposes it at: /api/chat
 * - Set GROQ_API_KEY in Vercel Project Settings -> Environment Variables
 */

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  try {
    const { messages } = req.body || {};

    // Validate input
    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      res.status(400).json({ error: "Messages array is required and must not be empty" });
      return;
    }

    // Get API key from environment (set in Vercel dashboard)
    const apiKey = process.env.GROQ_API_KEY;
    if (!apiKey) {
      console.error("GROQ_API_KEY not set in environment variables");
      res.status(500).json({
        error: "AI service is not configured. Please contact the portfolio owner.",
      });
      return;
    }

    // Call Groq API
    const groqResponse = await fetch("https://api.groq.com/openai/v1/chat/completions", {
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

    if (!groqResponse.ok) {
      const error = await groqResponse.json();
      console.error("Groq API error:", error);

      if (error.error?.code === "model_decommissioned") {
        res.status(groqResponse.status).json({
          error:
            "The AI model being used has been updated. Please contact the portfolio owner to update it. Visit https://console.groq.com/docs/models for current available models.",
          details: error.error?.message || "Model decommissioned",
        });
        return;
      }

      res.status(groqResponse.status).json({
        error: "Sorry, I'm having trouble connecting to the AI service right now. Please try again in a moment.",
        details: error.error?.message || "Unknown error",
      });
      return;
    }

    const data = await groqResponse.json();

    const assistantMessage =
      data.choices?.[0]?.message?.content || "Sorry, I couldn't generate a response.";

    res.status(200).json({
      success: true,
      message: assistantMessage,
    });
  } catch (error) {
    console.error("Error in chat function:", error);

    res.status(500).json({
      error: "An error occurred while processing your request. Please try again.",
    });
  }
}