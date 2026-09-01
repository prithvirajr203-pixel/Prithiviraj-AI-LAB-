export default {
  async fetch(request) {
    // GET = test the API
    if (request.method === "GET") {
      return Response.json({
        success: true,
        message: "Chat API is working!",
      });
    }

    // POST = chat
    if (request.method !== "POST") {
      return Response.json(
        { error: "Method not allowed" },
        { status: 405 }
      );
    }

    try {
      const body = await request.json();
      const messages = body?.messages;

      if (!Array.isArray(messages) || messages.length === 0) {
        return Response.json(
          {
            error: "Messages array is required and must not be empty",
          },
          { status: 400 }
        );
      }

      const apiKey = process.env.GROQ_API_KEY;

      if (!apiKey) {
        console.error("GROQ_API_KEY is missing");

        return Response.json(
          {
            error: "GROQ_API_KEY is not configured on Vercel",
          },
          { status: 500 }
        );
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
        console.error("Groq API error:", data);

        return Response.json(
          {
            error:
              data?.error?.message ||
              "Groq API request failed",
          },
          { status: groqResponse.status }
        );
      }

      const assistantMessage =
        data?.choices?.[0]?.message?.content ||
        "Sorry, I couldn't generate a response.";

      return Response.json({
        success: true,
        message: assistantMessage,
      });
    } catch (error) {
      console.error("Chat API error:", error);

      return Response.json(
        {
          error: "An error occurred while processing your request.",
        },
        { status: 500 }
      );
    }
  },
};