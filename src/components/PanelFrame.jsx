export default function PanelFrame({ label, children, className = "" }) {
  return (
    <div className={`panel panel-glow overflow-hidden ${className}`}>
      {label && (
        <div className="flex items-center gap-2 border-b border-hairline px-4 py-2.5">
          <div className="terminal-dots flex gap-1.5">
            <span className="bg-rose/70" />
            <span className="bg-amber/70" />
            <span className="bg-cyan/70" />
          </div>
          <span className="mono-label text-[11px] text-ink-faint">{label}</span>
        </div>
      )}
      <div className="p-5 sm:p-6">{children}</div>
    </div>
  );
}
