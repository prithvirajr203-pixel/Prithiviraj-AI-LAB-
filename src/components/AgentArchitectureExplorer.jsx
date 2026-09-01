import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { AGENT_STAGES } from "../data/agentStages";

export default function AgentArchitectureExplorer() {
  const [activeId, setActiveId] = useState(AGENT_STAGES[1].id);
  const active = AGENT_STAGES.find((s) => s.id === activeId);

  return (
    <section id="agent-lab" className="px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Agent Architecture Explorer"
          title="Click a stage to see what actually happens there."
          description="This is the same loop behind every project above: a request moves through reasoning, retrieval, and tool use before it becomes a result."
        />

        <div className="panel panel-glow p-5 sm:p-8">
          {/* Diagram */}
          <div
            className="flex flex-wrap items-center justify-center gap-x-1 gap-y-4 sm:gap-x-2"
            role="group"
            aria-label="Agent architecture stages"
          >
            {AGENT_STAGES.map((stage, i) => (
              <div key={stage.id} className="flex items-center gap-1 sm:gap-2">
                <button
                  onClick={() => setActiveId(stage.id)}
                  aria-pressed={activeId === stage.id}
                  className={`focus-ring group flex flex-col items-center gap-1.5 rounded-xl border px-3 py-3 transition-all sm:px-4 ${
                    activeId === stage.id
                      ? "border-cyan/70 bg-cyan/10"
                      : "border-hairline bg-panel-raised hover:border-hairline-bright"
                  }`}
                >
                  <span
                    className={`mono-label text-[10px] ${
                      activeId === stage.id ? "text-cyan" : "text-ink-faint"
                    }`}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span
                    className={`font-display text-[13px] font-medium sm:text-sm ${
                      activeId === stage.id ? "text-ink" : "text-ink-dim"
                    }`}
                  >
                    {stage.label}
                  </span>
                </button>
                {i < AGENT_STAGES.length - 1 && (
                  <svg width="18" height="8" viewBox="0 0 18 8" aria-hidden="true" className="hidden sm:block">
                    <line
                      x1="0"
                      y1="4"
                      x2="14"
                      y2="4"
                      stroke="var(--color-hairline-bright)"
                      strokeWidth="1.5"
                      className="flow-line"
                    />
                    <path d="M11 1 L15 4 L11 7" fill="none" stroke="var(--color-hairline-bright)" strokeWidth="1.5" />
                  </svg>
                )}
              </div>
            ))}
          </div>

          {/* Explanation panel */}
          <div className="mt-8 min-h-[120px] border-t border-hairline pt-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
              >
                <div className="mb-2 flex items-center gap-2.5">
                  <span className="mono-label text-[11px] text-cyan">{active.label}</span>
                  <span className="text-ink-faint">·</span>
                  <span className="text-sm text-ink-dim">{active.short}</span>
                </div>
                <p className="max-w-2xl text-[15px] leading-relaxed text-ink-dim">{active.explanation}</p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
