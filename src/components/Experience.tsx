"use client";

import { motion } from "framer-motion";

const entries = [
  {
    role: "Backend Engineer",
    company: "Frontier Works Organization",
    period: "Jun – Aug 2025",
    highlight: "Certificate of Appreciation — sole recipient among a cohort of 45 interns",
    points: [
      "Built the data exchange layer between PostgreSQL and the Flotilla fleet platform, moving real-time telemetry across government fleet systems covering over 300 vehicles.",
      "Replaced manual batch reporting with automated aggregation pipelines, cutting reporting latency from 30 minutes to under 1 minute.",
      "Traced production timeout failures under peak concurrent load to unbounded queries and connection pool exhaustion. Rewrote the queries, reconfigured pooling, and the timeouts stopped at the same peak load.",
    ],
    tags: ["Python", "PostgreSQL", "REST APIs", "IoT telemetry", "Flotilla"],
  },
  {
    role: "Data Engineer",
    company: "Ufone (PTCL Group)",
    period: "Jun – Aug 2024",
    highlight: null,
    points: [
      "Optimised relational schemas across production telecom infrastructure handling high-volume SME datasets, covering 80 tables.",
      "Found and fixed schema inefficiencies causing silent data loss in multi-departmental compliance pipelines, across a compliance dataset of roughly 670 GB.",
    ],
    tags: ["SQL", "Relational schema design", "Production telecom data"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <span className="text-accent font-mono text-sm uppercase tracking-widest">
            Background
          </span>
          <h2 className="text-4xl font-bold text-ink mt-2">Experience</h2>
        </div>

        <div className="relative">
          <div className="absolute left-4 top-2 bottom-2 w-px bg-line" />

          {entries.map((entry, i) => (
            <motion.div
              key={i}
              className="relative pl-14 pb-8"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.15, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <div className="absolute left-[14px] top-2 w-2.5 h-2.5 rounded-full bg-accent -translate-x-1/2 border-2 border-paper" />

              <div className="bg-surface border border-line rounded-2xl p-6">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-ink font-bold text-lg leading-tight">
                      {entry.role}
                    </h3>
                    <p className="text-muted text-sm mt-0.5">{entry.company}</p>
                  </div>
                  <span className="text-muted font-mono text-xs shrink-0 mt-0.5">
                    {entry.period}
                  </span>
                </div>

                {entry.highlight && (
                  <div className="mb-3">
                    <span className="inline-flex items-start gap-1.5 px-3 py-1 rounded-full bg-accent/10 border border-accent/30 text-accent-strong text-xs font-mono leading-snug">
                      ★ {entry.highlight}
                    </span>
                  </div>
                )}

                <ul className="flex flex-col gap-1.5 mb-4">
                  {entry.points.map((point, j) => (
                    <li key={j} className="text-muted text-sm flex items-start gap-2 leading-relaxed">
                      <span className="text-accent shrink-0 mt-0.5" aria-hidden="true">
                        ›
                      </span>
                      {point}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {entry.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-md text-xs font-mono text-accent-strong bg-accent/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}

          <motion.div
            className="relative pl-14"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className="absolute left-[14px] top-2 w-2.5 h-2.5 rounded-full bg-line -translate-x-1/2 border-2 border-paper" />
            <p className="text-muted text-sm pt-0.5">
              B.S. Computer Science — FAST NUCES, Islamabad. Graduated June 2026.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
