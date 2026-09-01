/**
 * Netlify Serverless Function: Chat
 * 
 * This function handles all Groq API calls securely from the backend.
 * The frontend calls this endpoint to send messages and receive AI responses.
 * 
 * Deployment:
 * - Place this file at: netlify/functions/chat.js
 * - Set GROQ_API_KEY in Netlify environment variables
 * - The function will be available at: /.netlify/functions/chat
 */

export default async (req, _context) => {
  // Only allow POST requests
  if (req.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
      headers: { "Content-Type": "application/json" },
    });
  }

  try {
    const { messages } = await req.json();

    // Validate input
    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return new Response(
        JSON.stringify({ error: "Messages array is required and must not be empty" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    // Get API key from environment (set in Netlify dashboard)
    const apiKey = process.env.GROQ_API_KEY;
    if (!apiKey) {
      console.error("GROQ_API_KEY not set in environment variables");
      return new Response(
        JSON.stringify({
          error: "AI service is not configured. Please contact the portfolio owner.",
        }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }

    // Call Groq API
    // Note: Model names change over time. Check https://console.groq.com/docs/models for current available models
    // If you get a "model_decommissioned" error, replace the model name with a currently available one
    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "openai/gpt-oss-120b", // Current, non-deprecated Groq model
        messages: messages,
        temperature: 0.7,
        max_tokens: 1024,
        top_p: 0.9,
      }),
    });

    // Check if Groq API call was successful
    if (!response.ok) {
      const error = await response.json();
      console.error("Groq API error:", error);

      // Check for decommissioned model error
      if (error.error?.code === "model_decommissioned") {
        return new Response(
          JSON.stringify({
            error: "The AI model being used has been updated. Please contact the portfolio owner to update it. Visit https://console.groq.com/docs/models for current available models.",
            details: error.error?.message || "Model decommissioned",
          }),
          {
            status: response.status,
            headers: { "Content-Type": "application/json" },
          }
        );
      }

      // Return a user-friendly error message
      return new Response(
        JSON.stringify({
          error: "Sorry, I'm having trouble connecting to the AI service right now. Please try again in a moment.",
          details: error.error?.message || "Unknown error",
        }),
        {
          status: response.status,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    const data = await response.json();

    // Extract the assistant's response
    const assistantMessage =
      data.choices?.[0]?.message?.content || "Sorry, I couldn't generate a response.";

    // Return the message to the frontend
    return new Response(
      JSON.stringify({
        success: true,
        message: assistantMessage,
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      }
    );
  } catch (error) {
    console.error("Error in chat function:", error);

    // Return error without exposing internals
    return new Response(
      JSON.stringify({
        error: "An error occurred while processing your request. Please try again.",
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
};
