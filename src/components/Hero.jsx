import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import PipelineStrip from "./PipelineStrip";
import SystemStatusCard from "./SystemStatusCard";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";
import { LINKS } from "../data/constants";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden px-5 pb-24 pt-16 sm:px-8 sm:pt-24"
    >
      {/* ambient glow */}
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-violet/10 blur-[120px]" />

      <div className="relative mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <div>
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mono-label mb-6 inline-flex items-center gap-2 rounded-full border border-hairline bg-panel px-3 py-1.5 text-[11px] text-cyan"
          >
            <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-cyan" />
            AI LAB ONLINE
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="font-display text-4xl font-semibold leading-[1.08] tracking-tight text-ink sm:text-6xl"
          >
            Prithiviraj R.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="glow-text-violet mt-3 font-display text-lg font-medium text-violet sm:text-xl"
          >
            Agentic AI Developer | AI Automation Builder
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-5 max-w-xl text-[15px] leading-relaxed text-ink-dim sm:text-base"
          >
            Building intelligent AI systems that can reason, use tools,
            retrieve knowledge, automate workflows, and interact with people.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            {/* Explore AI Lab */}
            <a
              href="#agent-lab"
              className="focus-ring inline-flex items-center gap-2 rounded-lg bg-violet px-5 py-2.5 text-sm font-medium text-void transition-transform hover:-translate-y-0.5"
            >
              Explore AI Lab
              <ArrowRight className="h-4 w-4" />
            </a>

            {/* View Projects */}
            <a
              href="#projects"
              className="focus-ring inline-flex items-center gap-2 rounded-lg border border-hairline-bright bg-panel px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:border-cyan/60"
            >
              View Projects
            </a>

            {/* GitHub */}
            <a
              href={LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring inline-flex items-center gap-2 rounded-lg border border-hairline px-3 py-2.5 text-ink-dim transition-colors hover:text-ink"
              aria-label="GitHub"
            >
              <GithubIcon className="h-4 w-4" />
            </a>

            {/* LinkedIn */}
            <a
              href={LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring inline-flex items-center gap-2 rounded-lg border border-hairline px-3 py-2.5 text-ink-dim transition-colors hover:text-ink"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="h-4 w-4" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-12 overflow-x-auto pb-2"
          >
            <PipelineStrip />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <SystemStatusCard />
        </motion.div>
      </div>
    </section>
  );
}