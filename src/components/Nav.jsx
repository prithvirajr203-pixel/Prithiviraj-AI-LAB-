import { useState, useEffect } from "react";
import { Menu, X, Cpu } from "lucide-react";
import { NAV_LINKS } from "../data/constants";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors ${
        scrolled ? "border-hairline bg-void/85 backdrop-blur-lg" : "border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3.5 sm:px-8">
        <a href="#home" className="flex items-center gap-2 focus-ring">
          <Cpu className="h-5 w-5 text-violet" strokeWidth={1.75} />
          <span className="font-display text-[15px] font-semibold tracking-tight text-ink">
            Prithiviraj<span className="text-cyan"> AI Lab</span>
          </span>
        </a>

        <div className="hidden items-center gap-7 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="mono-label focus-ring text-[11.5px] text-ink-dim transition-colors hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <span className="flex items-center gap-2 rounded-full border border-hairline bg-panel px-3 py-1.5">
            <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-cyan" />
            <span className="mono-label text-[10.5px] text-cyan">AI LAB ONLINE</span>
          </span>
        </div>

        <button
          className="focus-ring text-ink lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-hairline bg-void/95 px-5 pb-5 pt-2 backdrop-blur-lg lg:hidden">
          <div className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="focus-ring rounded-lg px-2 py-2.5 text-sm text-ink-dim hover:bg-panel hover:text-ink"
              >
                {link.label}
              </a>
            ))}
            <span className="mono-label mt-2 flex items-center gap-2 px-2 text-[10.5px] text-cyan">
              <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-cyan" /> AI LAB ONLINE
            </span>
          </div>
        </div>
      )}
    </header>
  );
}
