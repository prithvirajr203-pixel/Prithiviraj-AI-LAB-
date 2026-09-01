import SectionHeading from "./SectionHeading";
import { EXPERIMENTS } from "../data/experiments";

const STATUS_COLOR = {
  Active: "text-cyan",
  Exploring: "text-amber",
};

export default function ExperimentLab() {
  return (
    <section id="experiments" className="px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="AI Experiment Lab"
          title="Concepts under active study."
          description="Ongoing exploration into the mechanisms that make agents useful — not finished products, but working experiments."
        />

        <div className="grid gap-5 sm:grid-cols-2">
          {EXPERIMENTS.map((exp) => (
            <div key={exp.id} className="panel panel-glow p-6">
              <div className="mb-4 flex items-center justify-between">
                <h3 className="font-display text-lg font-semibold text-ink">{exp.name}</h3>
                <span className={`mono-label text-[10px] ${STATUS_COLOR[exp.status] || "text-ink-faint"}`}>
                  {exp.status}
                </span>
              </div>
              <div className="mb-3">
                <span className="mono-label text-[10.5px] text-violet">Objective</span>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-dim">{exp.objective}</p>
              </div>
              <div>
                <span className="mono-label text-[10.5px] text-cyan">Concept</span>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-dim">{exp.concept}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
