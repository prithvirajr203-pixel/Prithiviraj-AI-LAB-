/**
 * Vercel Serverless Function
 * Endpoint: /api/chat
 */

export default async function handler(req, res) {
  // Test endpoint
  if (req.method === "GET") {
    return res.status(200).json({
      success: true,
      message: "Chat API is working!",
    });
  }

  // Only POST for actual chat
  if (req.method !== "POST") {
    return res.status(405).json({
      error: "Method not allowed",
    });
  }

  try {
    const { messages } = req.body || {};

    if (!Array.isArray(messages) || messages.length === 0) {
      return res.status(400).json({
        error: "Messages array is required and must not be empty",
      });
    }

    const apiKey = process.env.GROQ_API_KEY;

    if (!apiKey) {
      console.error("GROQ_API_KEY is missing");

      return res.status(500).json({
        error: "GROQ_API_KEY is not configured on Vercel",
      });
    }

    const groqResponse = await fetch(
      "https://api.groq.com/openai/v1/chat/completions",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model: "openai/gpt-oss-120b",
          messages,
          temperature: 0.7,
          max_tokens: 1024,
          top_p: 0.9,
        }),
      }
    );

    const data = await groqResponse.json();

    if (!groqResponse.ok) {
      console.error("Groq error:", data);

      return res.status(groqResponse.status).json({
        error:
          data?.error?.message ||
          "Groq API request failed",
      });
    }

    const assistantMessage =
      data?.choices?.[0]?.message?.content ||
      "Sorry, I couldn't generate a response.";

    return res.status(200).json({
      success: true,
      message: assistantMessage,
    });
  } catch (error) {
    console.error("Chat API error:", error);

    return res.status(500).json({
      error: "An error occurred while processing your request.",
    });
  }
}