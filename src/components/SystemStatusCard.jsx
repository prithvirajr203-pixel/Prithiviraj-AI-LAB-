import { Brain, Database, Workflow, FolderKanban, FlaskConical } from "lucide-react";

const STATUS_ITEMS = [
  { label: "Agent Engine", icon: Brain, state: "Online", color: "text-cyan" },
  { label: "Knowledge Base", icon: Database, state: "Indexed", color: "text-cyan" },
  { label: "Automation", icon: Workflow, state: "Running", color: "text-violet" },
  { label: "Projects", icon: FolderKanban, state: "5 Active", color: "text-ink" },
  { label: "Experiments", icon: FlaskConical, state: "4 Logged", color: "text-amber" },
];

export default function SystemStatusCard() {
  return (
    <div className="panel panel-glow float-slow p-5">
      <div className="mb-4 flex items-center justify-between">
        <span className="mono-label text-[11px] text-ink-faint">System Status</span>
        <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-cyan" />
      </div>
      <ul className="flex flex-col gap-3">
        {STATUS_ITEMS.map(({ label, icon: Icon, state, color }) => (
          <li key={label} className="flex items-center justify-between border-b border-hairline pb-3 last:border-0 last:pb-0">
            <span className="flex items-center gap-2.5 text-sm text-ink-dim">
              <Icon className="h-4 w-4 text-ink-faint" strokeWidth={1.75} />
              {label}
            </span>
            <span className={`mono-label text-[11px] ${color}`}>{state}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
