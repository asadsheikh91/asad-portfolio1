"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

function CountUp({
  to,
  suffix = "",
  prefix = "",
}: {
  to: number;
  suffix?: string;
  prefix?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const start = Date.now();
    const duration = 1200;
    const timer = setInterval(() => {
      const elapsed = Date.now() - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * to));
      if (progress >= 1) clearInterval(timer);
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, to]);

  return (
    <span ref={ref}>
      {prefix}
      {count}
      {suffix}
    </span>
  );
}

const projects = [
  {
    index: "01",
    name: "VehicleWatch",
    problem: "Fleet operators had no early warning system for mechanical faults.",
    solution:
      "Real-time API ingesting sensor data every 2 seconds using Isolation Forest + LOF ensemble. AI-generated plain-English diagnostics per alert.",
    stack: ["FastAPI", "PostgreSQL", "Redis", "scikit-learn", "Gemini API", "Docker"],
    metrics: [
      { value: 2, suffix: "s", prefix: "", label: "Ingestion Interval" },
      { value: 70, suffix: "%", prefix: "", label: "Reduction in Downtime" },
      { value: 12, suffix: "k", prefix: "£", label: "Saved per Breakdown" },
    ],
    links: [
      { label: "Live Docs", href: "https://vehicle-watch.onrender.com/docs" },
      { label: "GitHub", href: "https://github.com/asadsheikh91/vehicle-watch" },
    ],
    bg: "#0D1425",
  },
  {
    index: "02",
    name: "Veriloom",
    problem: "CV screening rewards formatting over actual capability.",
    solution:
      "Two-sided hiring platform where companies post task-based roles and candidates submit real work. Skills-first evaluation replaces CV screening entirely.",
    stack: ["Express.js", "Prisma", "PostgreSQL", "Clerk", "Next.js", "Cloudflare R2"],
    metrics: [
      { value: 80, suffix: "%", prefix: "", label: "Screening Time Eliminated" },
      { value: 8, suffix: "h", prefix: "", label: "Saved per Open Role" },
      { value: 100, suffix: "%", prefix: "", label: "Skills-Based" },
    ],
    links: [{ label: "GitHub", href: "https://github.com/asadsheikh91/veriloom" }],
    bg: "#111827",
  },
  {
    index: "03",
    name: "Risk & Alert API",
    problem: "Compliance environments need auditable, non-blocking risk workflows.",
    solution:
      "Async REST API with multi-stage alert workflows, RBAC, per-endpoint rate limiting, and background scoring pipelines.",
    stack: ["FastAPI", "PostgreSQL", "Redis", "Docker", "JWT", "GitHub Actions"],
    metrics: [
      { value: 500, suffix: "+", prefix: "", label: "Concurrent Events" },
      { value: 0, suffix: "ms", prefix: "", label: "Latency Degradation" },
      { value: 100, suffix: "%", prefix: "", label: "Audit Logged" },
    ],
    links: [{ label: "GitHub", href: "https://github.com/asadsheikh91/mdr-backend" }],
    bg: "#0D1425",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <span className="text-[#4FF8E5] font-mono text-sm uppercase tracking-widest">
            Selected Work
          </span>
          <h2 className="text-4xl font-bold text-[#F0F4FF] mt-2">Projects that ship.</h2>
        </div>

        <div className="flex flex-col gap-6">
          {projects.map((project) => (
            <div key={project.index} className="relative">
              <motion.div
                className="absolute left-0 top-0 w-0.5 bg-[#4FF8E5] origin-top rounded-full"
                style={{ height: "100%" }}
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
              />

              <div
                className="ml-2 rounded-2xl border border-[#1E2D40] overflow-hidden"
                style={{ background: project.bg }}
              >
                <div className="p-6 lg:p-8 grid grid-cols-1 lg:grid-cols-[1fr_260px] gap-8">
                  {/* Left: text */}
                  <div className="flex flex-col gap-4">
                    <span className="text-[#8892A4] font-mono text-xs">
                      PROJECT {project.index}
                    </span>
                    <h3 className="text-2xl font-bold text-[#F0F4FF]">{project.name}</h3>

                    <div>
                      <span className="text-[#4FF8E5] font-mono text-xs uppercase tracking-widest">
                        Problem
                      </span>
                      <p className="text-[#8892A4] text-sm mt-1 leading-relaxed">
                        {project.problem}
                      </p>
                    </div>

                    <div>
                      <span className="text-[#4FF8E5] font-mono text-xs uppercase tracking-widest">
                        Solution
                      </span>
                      <p className="text-[#8892A4] text-sm mt-1 leading-relaxed">
                        {project.solution}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {project.stack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-md text-xs font-mono text-[#4FF8E5] bg-[#1E2D40]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-4">
                      {project.links.map((link) => (
                        <a
                          key={link.label}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-sm text-[#4FF8E5] hover:text-[#F0F4FF] transition-colors"
                        >
                          {link.label}
                          <ArrowUpRight size={13} aria-hidden="true" />
                        </a>
                      ))}
                    </div>
                  </div>

                  {/* Right: metrics */}
                  <div className="rounded-xl border border-[#1E2D40] bg-[#0A0F1E] p-5 flex flex-col justify-center">
                    {project.metrics.map((metric, i) => (
                      <div key={metric.label}>
                        {i > 0 && <div className="border-t border-[#1E2D40] my-4" />}
                        <div className="text-3xl font-bold text-[#4FF8E5] font-mono">
                          <CountUp
                            to={metric.value}
                            suffix={metric.suffix}
                            prefix={metric.prefix}
                          />
                        </div>
                        <div className="text-[#8892A4] text-xs mt-1">{metric.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}