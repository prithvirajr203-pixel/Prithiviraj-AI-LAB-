import SectionHeading from "./SectionHeading";
import { TECH_STACK } from "../data/achievements";

export default function TechStack() {
  return (
    <section className="px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="Tech Stack" title="What the lab runs on." />
        <div className="flex flex-wrap gap-2.5">
          {TECH_STACK.map((tech) => (
            <span
              key={tech}
              className="mono-label rounded-lg border border-hairline bg-panel px-3.5 py-2 text-[11px] text-ink-dim transition-colors hover:border-cyan/50 hover:text-ink"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
