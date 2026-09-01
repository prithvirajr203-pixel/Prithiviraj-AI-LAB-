import { Sparkles } from "lucide-react";

export default function FutureCapstone() {
  return (
    <section className="px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="panel panel-glow relative overflow-hidden p-8 text-center sm:p-12">
          <div className="pointer-events-none absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-violet/15 blur-[100px]" />
          <span className="mono-label relative mb-4 inline-flex items-center gap-2 rounded-full border border-hairline bg-panel-raised px-3 py-1.5 text-[11px] text-amber">
            <Sparkles className="h-3.5 w-3.5" /> Coming Next
          </span>
          <h2 className="relative font-display text-2xl font-semibold text-ink sm:text-3xl">
            FLYRANK CAPSTONE — Building...
          </h2>
          <p className="relative mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-ink-dim">
            This space will later showcase the FlyRank capstone project and future agentic AI
            systems as they move from concept to build.
          </p>
        </div>
      </div>
    </section>
  );
}
