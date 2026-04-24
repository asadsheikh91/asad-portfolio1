"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";

const ArchDiagram = dynamic(() => import("@/components/ArchDiagram"), {
  ssr: false,
  loading: () => (
    <div className="h-full rounded-2xl bg-[#111827] animate-pulse" />
  ),
});

const tickerItems = [
  "FastAPI",
  "PostgreSQL",
  "Redis",
  "Docker",
  "LLM Integration",
  "Real-Time Systems",
  "JWT",
  "RBAC",
  "Framer Motion",
  "GitHub Actions",
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
    <section className="min-h-screen flex flex-col justify-center pt-24 pb-0 px-6">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left column */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-6"
          >
            <motion.div variants={itemVariants}>
              <span className="inline-flex items-center gap-2 border border-[#4FF8E5]/30 rounded-full px-4 py-1.5 text-[#4FF8E5] text-xs font-mono">
                <span
                  className="w-2 h-2 rounded-full bg-[#4FF8E5] animate-pulse"
                  aria-hidden="true"
                />
                BACKEND ENGINEER · OPEN TO REMOTE
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#F0F4FF] leading-tight"
            >
              I build backends that think.
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg text-[#4FF8E5] font-mono"
            >
              Async APIs · Real-Time Systems · LLM Integration
            </motion.p>

            <motion.p variants={itemVariants} className="text-[#8892A4] text-base">
              Based in Islamabad — available for remote roles globally.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-3 pt-1"
            >
              <a
                href="#projects"
                className="px-6 py-3 rounded-lg bg-[#4FF8E5] text-[#0A0F1E] font-semibold text-sm hover:bg-[#4FF8E5]/90 transition-colors text-center"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="px-6 py-3 rounded-lg border border-[#4FF8E5] text-[#4FF8E5] font-semibold text-sm hover:bg-[#4FF8E5]/10 transition-colors text-center"
              >
                Available for Remote
              </a>
            </motion.div>
          </motion.div>

          {/* Right column — Architecture Diagram */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div
              className="absolute inset-0 -z-10 rounded-2xl"
              style={{
                background:
                  "radial-gradient(ellipse at center, rgba(79,248,229,0.08) 0%, transparent 70%)",
              }}
            />
            <div
              className="h-[300px] lg:h-[420px] rounded-2xl overflow-hidden border border-[#1E2D40]"
              style={{
                background: "#0A0F1E",
                boxShadow: "0 0 60px rgba(79,248,229,0.15)",
              }}
            >
              <ArchDiagram />
            </div>
          </motion.div>
        </div>

        {/* Ticker strip */}
        <div className="mt-16 overflow-hidden border-t border-b border-[#1E2D40] py-3">
          <div
            style={{
              display: "flex",
              width: "max-content",
              animation: "ticker 28s linear infinite",
              willChange: "transform",
            }}
          >
            {tickerContent.map((item, i) => (
              <span
                key={i}
                className="font-mono text-sm text-[#8892A4] whitespace-nowrap"
                style={{ padding: "0 20px" }}
              >
                {item}
                <span style={{ marginLeft: "20px", color: "#1E2D40" }}>·</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
