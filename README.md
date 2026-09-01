# Prithiviraj AI Lab — AI Agent Command Center

An interactive personal site built as an "AI lab console" rather than a
traditional portfolio — visitors can explore projects, click through an agent
architecture diagram, and try a local demo chat agent.

## Stack

- React + Vite
- Tailwind CSS v4
- Framer Motion (animation)
- Lucide React (icons)

No backend required — fully static, deployable straight to Netlify (or any
static host).

## Getting started

```bash
npm install
npm run dev       # local dev server
npm run build     # production build -> dist/
npm run preview   # preview the production build locally
npm run lint       # oxlint
```

## Before you deploy

Open `src/data/constants.js` and replace the placeholders with your real
links:

```js
export const LINKS = {
  github: "YOUR_GITHUB_URL",
  linkedin: "YOUR_LINKEDIN_URL",
  cv: "YOUR_CV_URL",
  booking: "YOUR_BOOKING_URL",
  email: "YOUR_EMAIL",
};
```

These placeholders are used in the Hero and Contact sections.

## Editing content

All copy lives in small data files under `src/data/`, so you can update
projects, agent stages, achievements, the tech stack, and the demo chat's
knowledge base without touching component code:

- `constants.js` — nav links + contact/social placeholders
- `projects.js` — the 5 AI Project Command Center entries
- `agentStages.js` — the 7-stage Agent Architecture Explorer
- `knowledgeBase.js` — the local "Ask My AI Lab" demo chat (no real LLM API)
- `automation.js` — AI Automation Flow examples
- `experiments.js` — AI Experiment Lab entries
- `achievements.js` — Achievements + Tech Stack list

## Deploying to Netlify

1. Push this project to a GitHub repo.
2. In Netlify: **Add new site → Import an existing project**.
3. Build command: `npm run build`
4. Publish directory: `dist`

That's it — no environment variables or backend needed.

## Notes on the demo sections

- **Ask My AI Lab** is explicitly labeled "Demo Agent — Local Knowledge
  Mode." It answers from a static JS keyword-matcher in
  `src/data/knowledgeBase.js`, not a live LLM.
- **Voice AI Demo** uses the browser's built-in `SpeechRecognition` API for
  speech-to-text only. Text-to-speech (e.g. via ElevenLabs) is not wired up —
  the section says so.
