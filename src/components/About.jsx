import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const FOCUS_AREAS = [
  "Agentic AI",
  "Generative AI",
  "RAG",
  "LLMs",
  "AI Automation",
  "Computer Vision",
  "Voice AI",
  "Intelligent Workflows",
];

export default function About() {
  return (
    <section id="about" className="px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <SectionHeading
            eyebrow="About"
            title="An M.Tech researcher building agents, not just models."
            description="Prithiviraj R. is an Integrated M.Tech CSE student focused on turning AI research into systems that actually do things — not just generate text."
          />

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="panel panel-glow p-6 sm:p-8"
          >
            <p className="text-[15px] leading-relaxed text-ink-dim">
              His work centers on agentic AI — systems that reason, retrieve knowledge, call tools,
              and complete multi-step tasks with minimal supervision. That spans generative AI and
              LLM-driven applications, retrieval-augmented generation, computer vision, voice AI, and
              automated workflows built on platforms like n8n.
            </p>
            <p className="mt-4 text-[15px] leading-relaxed text-ink-dim">
              Rather than treating AI as a single chatbot interface, he builds pipelines: agents that
              plan, retrieve context, invoke tools, and hand back verified results — the same
              architecture explored interactively in the Agent Lab below.
            </p>

            <div className="mt-7 flex flex-wrap gap-2">
              {FOCUS_AREAS.map((area) => (
                <span
                  key={area}
                  className="mono-label rounded-full border border-hairline bg-panel-raised px-3 py-1.5 text-[10.5px] text-cyan"
                >
                  {area}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
