export const AGENT_STAGES = [
  {
    id: "user",
    label: "User",
    short: "Sends a request",
    explanation:
      "A person states a goal in plain language — a question, a task, or a command. No rigid syntax is required; the agent is responsible for making sense of it.",
  },
  {
    id: "agent",
    label: "AI Agent",
    short: "Interprets & plans",
    explanation:
      "The agent (an LLM with an instruction set) reads the request, decides what it actually needs to do, and breaks it into steps instead of answering blindly.",
  },
  {
    id: "reasoning",
    label: "Reasoning",
    short: "Thinks step by step",
    explanation:
      "Before acting, the agent reasons about the plan: what information is missing, which tool applies, and what order of operations gets to a correct result.",
  },
  {
    id: "knowledge",
    label: "Knowledge",
    short: "Retrieves context",
    explanation:
      "If the answer depends on facts the model wasn't trained on, the agent retrieves relevant context — documents, embeddings, or a vector database — before responding.",
  },
  {
    id: "tools",
    label: "Tools",
    short: "Calls real systems",
    explanation:
      "The agent invokes external tools or APIs — search, a database, an automation platform like n8n, or an MCP server — to act on the world, not just describe it.",
  },
  {
    id: "action",
    label: "Action",
    short: "Executes the step",
    explanation:
      "The chosen tool runs: a message is sent, a record is created, a workflow is triggered. This is where the agent moves from planning to doing.",
  },
  {
    id: "result",
    label: "Result",
    short: "Returns the outcome",
    explanation:
      "The outcome is checked against the original goal and handed back to the user — or fed back into another reasoning loop if the task needs more steps.",
  },
];
