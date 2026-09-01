export const EXPERIMENTS = [
  {
    id: "rag",
    name: "RAG",
    objective: "Ground LLM answers in real, retrievable documents instead of memorised training data.",
    concept:
      "Documents are embedded into vectors and stored in a vector database. At query time, the most relevant chunks are retrieved and passed to the LLM as context.",
    status: "Active",
  },
  {
    id: "tool-calling",
    name: "AI Tool Calling",
    objective: "Let an agent decide when to invoke an external function instead of only generating text.",
    concept:
      "The model is given a set of tool definitions with expected arguments. When a request matches a tool's purpose, the model emits a structured call instead of a plain answer.",
    status: "Active",
  },
  {
    id: "mcp",
    name: "MCP",
    objective: "Standardise how agents connect to external tools and data sources.",
    concept:
      "MCP servers expose tools and resources through a common protocol, so an agent can plug into new systems (files, APIs, databases) without bespoke integration code each time.",
    status: "Exploring",
  },
  {
    id: "multi-step-agents",
    name: "Multi-Step AI Agents",
    objective: "Chain reasoning, retrieval, and tool calls across several steps to complete a larger task.",
    concept:
      "Instead of a single prompt-response, the agent loops: plan a step, act, observe the result, and decide the next step until the goal is met or it needs human input.",
    status: "Active",
  },
];
