import { useState } from "react";
import { ChevronDown } from "lucide-react";

const STATUS_COLOR = {
  Completed: "text-cyan",
  Deployed: "text-cyan",
  "In Progress": "text-amber",
  "Concept / In Progress": "text-amber",
  Concept: "text-ink-faint",
};

export default function ProjectCard({ project }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="panel panel-glow overflow-hidden">
      <button
        onClick={() => setExpanded((v) => !v)}
        aria-expanded={expanded}
        className="focus-ring flex w-full items-start justify-between gap-4 p-5 text-left sm:p-6"
      >
        <div>
          <div className="mb-2 flex items-center gap-2.5">
            <h3 className="font-display text-lg font-semibold text-ink">{project.name}</h3>
            <span className={`mono-label text-[10px] ${STATUS_COLOR[project.status] || "text-ink-faint"}`}>
              {project.status}
            </span>
          </div>
          <p className="text-sm text-ink-dim">{project.tagline}</p>
        </div>
        <ChevronDown
          className={`mt-1 h-5 w-5 shrink-0 text-ink-faint transition-transform ${expanded ? "rotate-180" : ""}`}
        />
      </button>

      {expanded && (
        <div className="border-t border-hairline px-5 pb-6 pt-5 sm:px-6">
          <div className="grid gap-5 sm:grid-cols-3">
            <div>
              <span className="mono-label text-[10.5px] text-rose">Problem</span>
              <p className="mt-2 text-sm leading-relaxed text-ink-dim">{project.problem}</p>
            </div>
            <div>
              <span className="mono-label text-[10.5px] text-cyan">Solution</span>
              <p className="mt-2 text-sm leading-relaxed text-ink-dim">{project.solution}</p>
            </div>
            <div>
              <span className="mono-label text-[10.5px] text-violet">AI Role</span>
              <p className="mt-2 text-sm leading-relaxed text-ink-dim">{project.aiRole}</p>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className="mono-label rounded-full border border-hairline bg-panel-raised px-2.5 py-1 text-[10px] text-ink-dim"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="mt-6">
            <span className="mono-label text-[10.5px] text-ink-faint">Workflow</span>
            <div className="mt-3 flex flex-wrap items-center gap-2">
              {project.workflow.map((step, i) => (
                <span key={step} className="flex items-center gap-2">
                  <span className="mono-label rounded-md border border-hairline-bright bg-panel px-2.5 py-1 text-[10.5px] text-ink">
                    {step}
                  </span>
                  {i < project.workflow.length - 1 && <span className="text-ink-faint">→</span>}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
