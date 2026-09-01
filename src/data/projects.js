export const PROJECTS = [
  {
    id: "esec-assistant",
    name: "ESEC AI College Assistant",
    tagline: "WhatsApp & web RAG chatbot for campus queries",
    problem:
      "Students and visitors repeatedly ask the same questions about courses, admissions, and campus facilities, with no always-on way to get accurate answers.",
    solution:
      "A retrieval-augmented chatbot available on WhatsApp and the web that answers from the college's own knowledge base instead of guessing.",
    aiRole:
      "Retrieves relevant chunks from an embedded knowledge base and grounds every answer in that retrieved context before generating a response.",
    tech: ["Jina AI Embeddings", "Qdrant", "Groq", "n8n", "WhatsApp API"],
    status: "In Progress",
    workflow: ["Input", "AI Processing", "Knowledge Retrieval", "Decision", "Output"],
  },
  {
    id: "voice-support-agent",
    name: "AI Voice Customer Support Agent",
    tagline: "Voice-driven agent for first-line customer queries",
    problem:
      "Small support teams can't staff phone lines around the clock, and routine queries take up time better spent on complex cases.",
    solution:
      "A voice AI agent that listens, understands intent, and either resolves a query directly or routes it to the right tool or person.",
    aiRole:
      "Converts speech to intent, decides which action fits the request, and can hand off to a human when the case falls outside its scope.",
    tech: ["LLM", "Speech-to-Text", "Intent Detection", "n8n", "Tool Calling"],
    status: "Concept / In Progress",
    workflow: ["Input", "AI Processing", "Knowledge/Tools", "Decision", "Output"],
  },
  {
    id: "gesture-yolo",
    name: "Gesture YOLO",
    tagline: "Real-time gesture recognition for assistive computing",
    problem:
      "People with limited mobility or in hands-free contexts need a reliable way to control a computer without a keyboard or mouse.",
    solution:
      "A YOLO-based computer vision system that recognises hand gestures in real time and maps them to system commands.",
    aiRole:
      "Runs object detection on live video to classify gestures frame by frame and triggers the mapped action with low latency.",
    tech: ["YOLO", "Python", "OpenCV", "Computer Vision"],
    status: "Completed",
    workflow: ["Input", "AI Processing", "Knowledge/Tools", "Decision", "Output"],
  },
  {
    id: "smartstudy-os",
    name: "SmartStudy OS",
    tagline: "AI flashcard & quiz generation tool",
    problem:
      "Turning raw study material into effective flashcards and quizzes is slow and easy to put off.",
    solution:
      "An AI-assisted study tool that generates flashcards and quizzes from a student's own notes, deployed with an Android build.",
    aiRole:
      "Reads source material and generates structured question–answer pairs, then adapts follow-up questions to what the student got wrong.",
    tech: ["LLM", "Railway", "Capacitor", "Android"],
    status: "Deployed",
    workflow: ["Input", "AI Processing", "Knowledge/Tools", "Decision", "Output"],
  },
  {
    id: "traffic-management",
    name: "Traffic Management System",
    tagline: "Vision-based traffic flow monitoring",
    problem:
      "Fixed-timer traffic signals don't adapt to real congestion, causing unnecessary delays at intersections.",
    solution:
      "A computer-vision system that reads live traffic density and informs signal timing decisions accordingly.",
    aiRole:
      "Detects and counts vehicles from camera feeds to estimate congestion, feeding that signal into a decision layer.",
    tech: ["Computer Vision", "Python", "Object Detection"],
    status: "Concept",
    workflow: ["Input", "AI Processing", "Knowledge/Tools", "Decision", "Output"],
  },
];
