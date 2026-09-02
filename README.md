# Prithiviraj AI Lab — AI Portfolio Assistant

An interactive AI-powered portfolio assistant built with **React, Vite, Tailwind CSS, Netlify Functions, and Groq**.

The assistant allows visitors, recruiters, and employers to ask natural-language questions about Prithiviraj's projects, technical skills, achievements, AI work, and professional background.

---

## 1. What the Agent Does

The AI Portfolio Assistant transforms a traditional static portfolio into an interactive AI experience.

Visitors can ask questions such as:

* "Tell me about Prithiviraj."
* "What are his AI skills?"
* "Tell me about Gesture YOLO."
* "Tell me about the FlyRank project."
* "What projects has he built?"
* "How can I contact him?"

The agent uses a portfolio-specific system prompt containing information about Prithiviraj and sends the conversation to a Groq-powered language model.

### Target Users

The assistant is designed primarily for:

* Recruiters
* Employers
* Interviewers
* Students and developers
* Portfolio visitors

The goal is to make it easier for someone to quickly understand Prithiviraj's technical background and projects without manually searching through the entire portfolio.

---

## 2. Key Features

### AI Portfolio Q&A

Visitors can ask questions using natural language instead of navigating through multiple portfolio sections.

### Conversation History

The assistant keeps recent conversation context so that users can ask follow-up questions.

### Groq LLM

The application uses Groq for fast AI inference.

### Secure API Architecture

The Groq API key is stored as a Netlify environment variable and is accessed only by the serverless function.

The API key is not placed inside the React frontend.

### Error Handling

The application handles:

* Missing API configuration
* API errors
* Empty AI responses
* Invalid requests
* Server errors

### Conversation Reset

Users can clear the conversation and start a new session.

---

## 3. Technology Stack

| Technology        | Purpose                         |
| ----------------- | ------------------------------- |
| React             | Frontend UI                     |
| Vite              | Frontend development/build tool |
| Tailwind CSS      | Styling                         |
| Lucide React      | Icons                           |
| Netlify Functions | Backend/serverless API          |
| Groq API          | Large language model inference  |
| JavaScript        | Application logic               |

---

## 4. Architecture

The application follows a simple frontend → serverless backend → AI API architecture.

```text
                    ┌──────────────────┐
                    │      Visitor     │
                    └────────┬─────────┘
                             │
                             ▼
                    ┌──────────────────┐
                    │  React Portfolio │
                    │   AskAILab.jsx   │
                    └────────┬─────────┘
                             │
                             │ POST request
                             ▼
                 ┌─────────────────────────┐
                 │   Netlify Function      │
                 │      chat.js             │
                 └───────────┬─────────────┘
                             │
                             │ Secure API request
                             ▼
                    ┌──────────────────┐
                    │     Groq API     │
                    │   LLM inference  │
                    └────────┬─────────┘
                             │
                             │ AI response
                             ▼
                    ┌──────────────────┐
                    │  Portfolio Chat  │
                    │    Response      │
                    └──────────────────┘
```

### Request Flow

1. The visitor enters a question.
2. React sends the conversation to the Netlify Function.
3. The Netlify Function reads `GROQ_API_KEY` from the server environment.
4. The function sends the request to Groq.
5. Groq generates the response.
6. The Netlify Function returns the response to React.
7. The response is displayed in the portfolio chatbot.

---

## 5. Project Structure

```text
Prithiviraj-AI-Lab/
│
├── src/
│   ├── components/
│   │   ├── AskAILab.jsx
│   │   ├── SectionHeading.jsx
│   │   └── PanelFrame.jsx
│   │
│   └── data/
│       └── portfolioSystemPrompt.js
│
├── netlify/
│   └── functions/
│       └── chat.js
│
├── public/
│
├── package.json
├── netlify.toml
├── vite.config.js
└── README.md
```

---

## 6. Setup

A stranger should be able to reproduce the project using the following steps.

### Prerequisites

Install:

* Node.js
* npm
* Netlify CLI

Check Node.js:

```bash
node --version
```

Check npm:

```bash
npm --version
```

Check Netlify CLI:

```bash
netlify --version
```

---

## 7. Install Dependencies

Clone or download the project and open a terminal inside the project directory.

Run:

```bash
npm install
```

---

## 8. Configure Groq API

Create a Groq API key.

Then configure the environment variable:

```text
GROQ_API_KEY=your_groq_api_key
```

The API key must remain on the server side.

It should not be hard-coded into React components or committed to the repository.

---

## 9. Run Locally

Because the application uses Netlify Functions, use:

```bash
netlify dev
```

Do not rely only on:

```bash
npm run dev
```

when testing the complete AI functionality, because the Netlify serverless function also needs to be available.

Open the local URL provided by Netlify CLI in the browser.

---

## 10. Build for Production

Run:

```bash
npm run build
```

If the build succeeds, deploy using:

```bash
netlify deploy --prod
```

The production deployment requires `GROQ_API_KEY` to be configured in the Netlify environment variables.

---

## 11. Usage Examples

### Example 1 — Personal Information

```text
User:
Tell me about Prithiviraj.
```

The assistant provides a summary of Prithiviraj's background and technical focus based on the portfolio knowledge.

### Example 2 — Project Information

```text
User:
Tell me about Gesture YOLO.
```

The assistant explains the project and its purpose using the information provided in the portfolio knowledge.

### Example 3 — Skills

```text
User:
What are his AI skills?
```

The assistant provides relevant AI and technical skills from the portfolio.

### Example 4 — Follow-up Question

```text
User:
Tell me about FlyRank.

User:
What machine learning approach did he use?
```

The assistant uses recent conversation context when answering follow-up questions.

---

## 12. V2 Evaluation

The V2 version of the assistant was tested using representative portfolio questions.

| Evaluation Area                           | Result |
| ----------------------------------------- | ------ |
| Personal/profile questions                | Pass   |
| Project questions                         | Pass   |
| AI/technical skill questions              | Pass   |
| Achievement questions                     | Pass   |
| Contact-related questions                 | Pass   |
| Follow-up questions                       | Pass   |
| Conversation history                      | Pass   |
| API error handling                        | Pass   |
| Missing API configuration handling        | Pass   |
| Unknown information / limitation behavior | Tested |

### Example Evaluation Questions

```text
1. Tell me about Prithiviraj.
2. What are his AI skills?
3. Tell me about Gesture YOLO.
4. Tell me about the FlyRank project.
5. What technologies does he use?
6. What are his achievements?
7. How can I contact him?
8. Tell me something that is not included in the portfolio.
```

The tests were designed to verify both normal portfolio questions and situations where the assistant should avoid inventing unsupported information.

---

## 13. Guardrails

The assistant is designed to answer using the information available in the portfolio knowledge.

When information is not available, the assistant should avoid confidently inventing personal facts.

For example, if a visitor asks:

```text
What is Prithiviraj's favorite movie?
```

and that information is not contained in the portfolio knowledge, the assistant should indicate that the information is not available rather than presenting an invented answer as fact.

---

## 14. Design Decision

One important design decision was to place the Groq API request inside a **Netlify serverless function** instead of calling Groq directly from the React frontend.

```text
React
  ↓
Netlify Function
  ↓
Groq API
```

This keeps the API key on the server side instead of exposing it in the browser.

The frontend therefore never needs to contain the secret API key.

---

## 15. Limitations

The current version has several limitations:

1. **Knowledge limitation**
   The assistant is limited by the information included in the portfolio knowledge/system prompt.

2. **No guaranteed real-time knowledge**
   The assistant is primarily designed to answer questions about the portfolio rather than act as a general real-time search engine.

3. **LLM limitations**
   Like other language models, it can misunderstand ambiguous questions.

4. **API dependency**
   If the Groq API or Netlify Function is unavailable, the assistant cannot generate responses.

5. **No long-term memory**
   Conversation context is limited to the recent conversation rather than permanent user memory.

6. **Portfolio data maintenance**
   When projects, skills, or achievements change, the portfolio knowledge should also be updated.

---

## 16. Security

The Groq API key is stored as:

```text
GROQ_API_KEY
```

inside Netlify environment variables.

The key is not included in the React source code.

The serverless function accesses it using:

```javascript
process.env.GROQ_API_KEY
```

This prevents the secret from being directly exposed in the client-side application.

---

## 17. Live Demo

**Live Portfolio:**

https://prithiviraj-ai-lab.netlify.app/

The live portfolio contains the AI Portfolio Assistant.

**Demo Video:**

Add the unlisted YouTube URL here after recording:

```text
[https://youtu.be/thA1W3UbczI]
```

---

## 18. Future Improvements

Possible future improvements include:

* Retrieval-Augmented Generation (RAG)
* Vector database integration
* Larger portfolio knowledge base
* Voice input and voice responses
* Streaming AI responses
* Better evaluation datasets
* Analytics for frequently asked questions
* Multilingual portfolio assistance
* More advanced agentic workflows

---

## 19. Conclusion

The Prithiviraj AI Lab Portfolio Assistant demonstrates how a traditional portfolio can be transformed into an interactive AI application.

The project combines a React frontend, a secure Netlify serverless backend, and Groq-powered LLM inference to provide visitors with a conversational way to explore projects, skills, achievements, and professional information.

The project also demonstrates an important production principle: **API credentials should remain on the server side rather than being exposed in the frontend.**
