import { useState } from "react";
import SectionHeading from "./SectionHeading";
import { AUTOMATION_STAGES, AUTOMATION_EXAMPLES } from "../data/automation";

export default function AutomationFlow() {
  const [activeId, setActiveId] = useState(AUTOMATION_EXAMPLES[0].id);
  const active = AUTOMATION_EXAMPLES.find((e) => e.id === activeId);

  return (
    <section className="px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="AI Automation Flow"
          title="One flow, five different jobs."
          description="The same request-to-response pipeline powers very different automations — only the knowledge source and tool choice change."
        />

        <div className="panel panel-glow p-5 sm:p-8">
          <div className="flex flex-wrap items-center gap-2 overflow-x-auto pb-2">
            {AUTOMATION_STAGES.map((stage, i) => (
              <span key={stage} className="flex items-center gap-2">
                <span className="mono-label whitespace-nowrap rounded-md border border-hairline-bright bg-panel-raised px-2.5 py-1.5 text-[10.5px] text-ink-dim">
                  {stage}
                </span>
                {i < AUTOMATION_STAGES.length - 1 && <span className="text-ink-faint">→</span>}
              </span>
            ))}
          </div>

          <div className="mt-8 grid gap-6 border-t border-hairline pt-6 lg:grid-cols-[0.4fr_0.6fr]">
            <div className="flex flex-col gap-2">
              {AUTOMATION_EXAMPLES.map((ex) => (
                <button
                  key={ex.id}
                  onClick={() => setActiveId(ex.id)}
                  aria-pressed={activeId === ex.id}
                  className={`focus-ring rounded-lg border px-4 py-2.5 text-left text-sm transition-colors ${
                    activeId === ex.id
                      ? "border-cyan/60 bg-cyan/10 text-ink"
                      : "border-hairline text-ink-dim hover:border-hairline-bright"
                  }`}
                >
                  {ex.name}
                </button>
              ))}
            </div>
            <div className="rounded-lg border border-hairline bg-panel-raised p-5">
              <span className="mono-label text-[11px] text-cyan">{active.name}</span>
              <p className="mt-3 text-[15px] leading-relaxed text-ink-dim">{active.description}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
