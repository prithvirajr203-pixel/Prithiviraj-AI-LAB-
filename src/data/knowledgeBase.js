// This is a local, static knowledge base — not a live LLM connection.
// It matches simple keywords to pre-written answers for the demo chat.

export const SAMPLE_QUESTIONS = [
  "What is Agentic AI?",
  "What projects has Prithiviraj built?",
  "Which project uses YOLO?",
  "What tools does Prithiviraj use?",
  "What is RAG?",
  "What is MCP?",
];

const ENTRIES = [
  {
    keywords: ["agentic", "agent ai", "what is agentic"],
    answer:
      "Agentic AI refers to AI systems that don't just answer questions — they reason about a goal, plan steps, call tools, and take action to reach an outcome, often across multiple steps without a human directing each one.",
  },
  {
    keywords: ["project", "built", "portfolio", "work"],
    answer:
      "Prithiviraj has built the ESEC AI College Assistant, an AI Voice Customer Support Agent, Gesture YOLO, SmartStudy OS, and a Traffic Management System. See the AI Projects section above for details on each.",
  },
  {
    keywords: ["yolo", "gesture", "vision"],
    answer:
      "Gesture YOLO uses YOLO-based object detection for real-time gesture recognition, built for assistive, hands-free computer control.",
  },
  {
    keywords: ["tool", "stack", "technology", "technologies", "use"],
    answer:
      "The toolkit spans Python, YOLO, LLMs, AI agents, RAG, tool calling, MCP, n8n, Qdrant and vector databases, plus React, Vite, JavaScript, Git, and GitHub. Full list in the Tech Stack section.",
  },
  {
    keywords: ["rag", "retrieval"],
    answer:
      "RAG (Retrieval-Augmented Generation) grounds an LLM's answers in retrieved documents instead of relying only on what it memorised during training — reducing hallucination and keeping answers current.",
  },
  {
    keywords: ["mcp", "model context protocol"],
    answer:
      "MCP (Model Context Protocol) is a standard way for an AI agent to connect to external tools and data sources, so the same agent can plug into different systems without custom glue code for each one.",
  },
  {
    keywords: ["tool calling", "function calling"],
    answer:
      "Tool calling lets an LLM decide, mid-conversation, that it needs to invoke a specific function or API — like a search, a database query, or a workflow trigger — and pass it structured arguments.",
  },
  {
    keywords: ["hello", "hi", "hey"],
    answer:
      "Hey — I'm the local demo agent for this lab. Ask me about Agentic AI, RAG, MCP, or Prithiviraj's projects and tools.",
  },
];

const FALLBACK =
  "I don't have a prepared answer for that in this local demo. Try asking about Agentic AI, RAG, MCP, tool calling, or Prithiviraj's projects and tech stack.";

export function getLocalAnswer(question) {
  const q = question.toLowerCase();
  const hit = ENTRIES.find((entry) => entry.keywords.some((k) => q.includes(k)));
  return hit ? hit.answer : FALLBACK;
}
