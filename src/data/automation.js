export const AUTOMATION_STAGES = [
  "User Request",
  "AI Agent",
  "Intent Detection",
  "Knowledge Retrieval",
  "Tool Selection",
  "Action",
  "Response",
];

export const AUTOMATION_EXAMPLES = [
  {
    id: "customer-support",
    name: "Customer Support",
    description:
      "A query comes in, the agent detects intent, pulls relevant help-center context, and either answers directly or escalates to a human.",
  },
  {
    id: "content-automation",
    name: "Content Automation",
    description:
      "A content brief triggers drafting, review, and scheduled publishing across channels with a human-in-the-loop approval gate.",
  },
  {
    id: "approval-workflow",
    name: "Approval Workflow",
    description:
      "An action is proposed, held for approval via a notification, and only executed once a human confirms — keeping automation reversible.",
  },
  {
    id: "college-assistant",
    name: "College Assistant",
    description:
      "A student's question is matched against the college knowledge base and answered on WhatsApp or web without staff intervention.",
  },
  {
    id: "social-automation",
    name: "Social Media Automation",
    description:
      "Scheduled and event-triggered posts are generated, queued for approval, and published automatically once confirmed.",
  },
];
