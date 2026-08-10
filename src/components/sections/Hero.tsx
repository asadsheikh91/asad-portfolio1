"use client";

import { motion } from "framer-motion";
import TerminalPane from "@/components/ui/TerminalPane";

const tickerItems = [
  "FastAPI",
  "PostgreSQL",
  "Redis",
  "SQLAlchemy",
  "Pydantic v2",
  "Docker",
  "Cloudflare",
  "DigitalOcean",
  "GitHub Actions",
  "Claude API",
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Hero() {
  const tickerContent = [...tickerItems, ...tickerItems];

  return (
    <section className="pt-32 pb-0 px-6">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left column */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-6"
          >
            <motion.div variants={itemVariants}>
              <span className="inline-flex items-center gap-2 border border-accent/30 rounded-full px-4 py-1.5 text-accent text-xs font-mono">
                <span
                  className="w-2 h-2 rounded-full bg-accent animate-pulse"
                  aria-hidden="true"
                />
                BACKEND ENGINEER · ISLAMABAD, UTC+5 · OPEN TO REMOTE
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-ink leading-tight"
            >
              I built a live product on my own, and I keep it running.
            </motion.h1>

            <motion.p variants={itemVariants} className="text-muted text-base leading-relaxed max-w-xl">
              Python and FastAPI, from schema design through deployment. Currently the sole
              engineer on ParchiVisa — a visa-assessment platform running four
              country-specific scoring engines in production.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-3 pt-1"
            >
              <a
                href="#projects"
                className="px-6 py-3 rounded-lg bg-accent text-white font-semibold text-sm hover:bg-accent-strong transition-colors text-center"
              >
                See the work
              </a>
              <a
                href="/cv.pdf"
                download="Asad_Amad_Sheikh_CV.pdf"
                className="px-6 py-3 rounded-lg border border-accent text-accent font-semibold text-sm hover:bg-accent/10 transition-colors text-center"
              >
                Download CV
              </a>
            </motion.div>
          </motion.div>

          {/* Right column — static health-check capture */}
          <div className="lg:justify-self-end lg:pt-[77px] w-full flex lg:block justify-start">
            <TerminalPane />
          </div>
        </div>

        {/* Ticker strip */}
        <div className="ticker-mask mt-20 overflow-hidden border-t border-b border-line py-3">
          <div className="ticker-track">
            {tickerContent.map((item, i) => (
              <span
                key={i}
                className="font-mono text-sm text-muted whitespace-nowrap"
                style={{ padding: "0 20px" }}
              >
                {item}
                <span style={{ marginLeft: "20px", color: "var(--color-line)" }}>·</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
