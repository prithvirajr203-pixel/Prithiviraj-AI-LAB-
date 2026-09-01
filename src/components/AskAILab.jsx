import { useState, useRef, useEffect } from "react";
import { Send, Bot, User, Trash2 } from "lucide-react";
import SectionHeading from "./SectionHeading";
import PanelFrame from "./PanelFrame";
import { PORTFOLIO_SYSTEM_PROMPT } from "../data/portfolioSystemPrompt";

const WELCOME = {
  role: "agent",
  text: "Hi! I'm Prithiviraj's AI portfolio assistant. Ask me about his projects, skills, AI work, achievements, or how to get in touch. I'm powered by Groq and have access to his portfolio knowledge.",
};

const SAMPLE_QUESTIONS = [
  "Tell me about Prithiviraj",
  "Show me his projects",
  "What are his AI skills?",
  "Tell me about Gesture YOLO",
  "Tell me about FlyRank",
  "How can I contact him?",
];

export default function AskAILab() {
  const [messages, setMessages] = useState([WELCOME]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const scrollRef = useRef(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages]);

  const ask = async (question) => {
    const q = question.trim();
    if (!q || loading) return;

    // Clear any previous errors
    setError("");

    // Add user message
    const userMessage = { role: "user", text: q };
    setMessages((m) => [...m, userMessage]);
    setInput("");
    setLoading(true);

    try {
      // Add typing indicator
      const typingMessage = { role: "agent", text: "", isTyping: true };
      setMessages((m) => [...m, typingMessage]);

      // Prepare conversation history for context (limit to last 6 messages to keep tokens reasonable)
      const conversationHistory = messages
        .filter((m) => !m.isTyping)
        .slice(-6)
        .map((m) => ({
          role: m.role === "user" ? "user" : "assistant",
          content: m.text,
        }))
        .concat([
          {
            role: "user",
            content: q,
          },
        ]);

      // Call the backend serverless function
      const response = await fetch("/.netlify/functions/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: [
            {
              role: "system",
              content: PORTFOLIO_SYSTEM_PROMPT,
            },
            ...conversationHistory,
          ],
        }),
      });

      if (!response.ok) {
        throw new Error(`API error: ${response.status}`);
      }

      const data = await response.json();

      if (data.error) {
        throw new Error(data.error);
      }

      // Remove typing indicator and add actual response
      setMessages((m) => m.filter((msg) => !msg.isTyping));
      setMessages((m) => [...m, { role: "agent", text: data.message }]);
    } catch (err) {
      console.error("Error calling Groq API:", err);
      // Remove typing indicator on error
      setMessages((m) => m.filter((msg) => !msg.isTyping));

      const errorMessage =
        err.message || "Sorry, I'm having trouble connecting to the AI service right now. You can still explore the portfolio or use the Contact section.";
      setError(errorMessage);
      setMessages((m) => [
        ...m,
        {
          role: "agent",
          text: errorMessage,
          isError: true,
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const clearConversation = () => {
    setMessages([WELCOME]);
    setInput("");
    setError("");
  };

  return (
    <section className="px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          eyebrow="Ask My AI Lab"
          title="AI Portfolio Assistant — Powered by Groq"
          description="This chatbot uses Groq's fast LLMs and my portfolio knowledge base to answer questions about my projects, skills, achievements, and work. Ask anything!"
        />

        <PanelFrame label="ai-portfolio-assistant — groq-powered">
          <div ref={scrollRef} className="flex max-h-80 flex-col gap-4 overflow-y-auto pr-1">
            {messages.map((m, i) => (
              <div key={i} className={`flex gap-3 ${m.role === "user" ? "flex-row-reverse text-right" : ""}`}>
                <span
                  className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border ${
                    m.role === "agent" ? "border-violet/50 bg-violet/10 text-violet" : "border-cyan/50 bg-cyan/10 text-cyan"
                  }`}
                >
                  {m.role === "agent" ? <Bot className="h-3.5 w-3.5" /> : <User className="h-3.5 w-3.5" />}
                </span>
                <p
                  className={`max-w-[80%] rounded-xl border border-hairline px-3.5 py-2.5 text-sm leading-relaxed ${
                    m.isError
                      ? "border-rose/50 bg-rose/10 text-rose"
                      : m.role === "agent"
                        ? "bg-panel-raised text-ink-dim"
                        : "bg-cyan/10 text-ink"
                  }`}
                >
                  {m.isTyping ? (
                    <span className="flex items-center gap-1.5 py-0.5">
                      <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-ink-faint [animation-delay:-0.3s]" />
                      <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-ink-faint [animation-delay:-0.15s]" />
                      <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-ink-faint" />
                    </span>
                  ) : (
                    m.text
                  )}
                </p>
              </div>
            ))}
          </div>

          {error && (
            <div className="mt-4 rounded-lg border border-rose/30 bg-rose/5 px-3 py-2 text-sm text-rose">
              {error}
            </div>
          )}

          <div className="mt-5 flex flex-wrap gap-2">
            {SAMPLE_QUESTIONS.map((q) => (
              <button
                key={q}
                onClick={() => ask(q)}
                disabled={loading}
                className="focus-ring mono-label rounded-full border border-hairline bg-panel-raised px-3 py-1.5 text-[10.5px] text-ink-dim transition-all hover:-translate-y-0.5 hover:border-cyan/50 hover:text-ink hover:shadow-[0_4px_16px_-4px_rgba(79,224,203,0.35)] disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:translate-y-0"
              >
                {q}
              </button>
            ))}
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              ask(input);
            }}
            className="mt-5 flex items-center gap-2 border-t border-hairline pt-5"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                // Allow Shift+Enter for new line in future (textarea version)
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  ask(input);
                }
              }}
              placeholder="Ask about my projects, skills, or how to connect..."
              className="focus-ring w-full rounded-lg border border-hairline bg-void px-3.5 py-2.5 text-sm text-ink placeholder:text-ink-faint disabled:cursor-not-allowed disabled:opacity-50"
              disabled={loading}
            />
            <button
              type="submit"
              aria-label="Send message"
              disabled={loading || !input.trim()}
              className="focus-ring flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-violet text-void transition-transform hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-50"
            >
              <Send className="h-4 w-4" />
            </button>
            <button
              type="button"
              aria-label="Clear conversation"
              onClick={clearConversation}
              className="focus-ring flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-hairline bg-panel-raised text-ink-dim transition-colors hover:border-cyan/50 hover:text-ink"
            >
              <Trash2 className="h-4 w-4" />
            </button>
          </form>
        </PanelFrame>
      </div>
    </section>
  );
}
