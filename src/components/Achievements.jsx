import { Trophy } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { ACHIEVEMENTS } from "../data/achievements";

export default function Achievements() {
  return (
    <section id="achievements" className="px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="Achievements" title="Recognition along the way." />

        <div className="grid gap-5 sm:grid-cols-3">
          {ACHIEVEMENTS.map((a) => (
            <div key={a.id} className="panel panel-glow p-6">
              <span className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg border border-amber/40 bg-amber/10 text-amber">
                <Trophy className="h-5 w-5" />
              </span>
              <h3 className="font-display text-base font-semibold text-ink">{a.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-dim">{a.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
