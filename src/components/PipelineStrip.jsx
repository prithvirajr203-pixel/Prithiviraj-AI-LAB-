const STEPS = ["User", "AI Agent", "Knowledge + Tools", "Action", "Result"];

export default function PipelineStrip() {
  return (
    <div
      className="flex flex-wrap items-center gap-2 sm:gap-3"
      role="img"
      aria-label="Pipeline: User to AI Agent to Knowledge and Tools to Action to Result"
    >
      {STEPS.map((step, i) => (
        <div key={step} className="flex items-center gap-2 sm:gap-3">
          <div className="mono-label rounded-full border border-hairline-bright bg-panel px-3 py-1.5 text-[11px] text-ink-dim">
            {step}
          </div>
          {i < STEPS.length - 1 && (
            <svg width="22" height="8" viewBox="0 0 22 8" aria-hidden="true">
              <line x1="0" y1="4" x2="18" y2="4" stroke="var(--color-cyan)" strokeWidth="1.5" className="flow-line" />
              <path d="M15 1 L19 4 L15 7" fill="none" stroke="var(--color-cyan)" strokeWidth="1.5" />
            </svg>
          )}
        </div>
      ))}
    </div>
  );
}
