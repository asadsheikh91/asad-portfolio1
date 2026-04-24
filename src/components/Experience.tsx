"use client";

import { motion } from "framer-motion";

const entries = [
  {
    role: "Backend Engineer",
    company: "Frontier Works Organisation",
    period: "Jun – Aug 2025",
    highlight: "Only intern awarded Certificate of Appreciation",
    points: [
      "IoT telemetry sync across government fleet systems.",
      "Eliminated manual batch reporting, cut data latency to near real-time.",
    ],
    tags: ["FastAPI", "Python", "PostgreSQL"],
  },
  {
    role: "Data Engineer",
    company: "UFone, PTCL Group",
    period: "Jun – Aug 2024",
    highlight: null,
    points: [
      "Optimised relational schemas across telecom infrastructure.",
      "Patched schema inefficiencies causing silent data failures.",
    ],
    tags: ["Python", "SQL", "Pandas"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <span className="text-[#4FF8E5] font-mono text-sm uppercase tracking-widest">
            Background
          </span>
          <h2 className="text-4xl font-bold text-[#F0F4FF] mt-2">Experience</h2>
        </div>

        <div className="relative">
          <div className="absolute left-4 top-2 bottom-2 w-px bg-[#1E2D40]" />

          {entries.map((entry, i) => (
            <motion.div
              key={i}
              className="relative pl-14 pb-8 last:pb-0"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.15, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <div className="absolute left-[14px] top-2 w-2.5 h-2.5 rounded-full bg-[#4FF8E5] -translate-x-1/2 border-2 border-[#0A0F1E]" />

              <div className="bg-[#111827] border border-[#1E2D40] rounded-2xl p-6">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-[#F0F4FF] font-bold text-lg leading-tight">
                      {entry.role}
                    </h3>
                    <p className="text-[#8892A4] text-sm mt-0.5">{entry.company}</p>
                  </div>
                  <span className="text-[#8892A4] font-mono text-xs shrink-0 mt-0.5">
                    {entry.period}
                  </span>
                </div>

                {entry.highlight && (
                  <div className="mb-3">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#4FF8E5]/10 border border-[#4FF8E5]/30 text-[#4FF8E5] text-xs font-mono">
                      ★ {entry.highlight}
                    </span>
                  </div>
                )}

                <ul className="flex flex-col gap-1.5 mb-4">
                  {entry.points.map((point, j) => (
                    <li key={j} className="text-[#8892A4] text-sm flex items-start gap-2">
                      <span className="text-[#4FF8E5] shrink-0 mt-0.5">›</span>
                      {point}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {entry.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-md text-xs font-mono text-[#4FF8E5] bg-[#1E2D40]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
