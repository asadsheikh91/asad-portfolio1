"use client";

import { motion } from "framer-motion";

const groups = [
  {
    label: "Languages",
    pills: ["Python", "TypeScript", "JavaScript", "Java", "SQL"],
  },
  {
    label: "Frameworks",
    pills: ["FastAPI", "Express.js", "SQLAlchemy", "Pydantic v2", "Prisma ORM"],
  },
  {
    label: "AI / LLM",
    pills: ["Claude API", "Gemini API", "scikit-learn", "Isolation Forest"],
  },
  {
    label: "Data & Cache",
    pills: ["PostgreSQL", "Redis", "Alembic", "Cloudflare R2"],
  },
  {
    label: "Infrastructure",
    pills: [
      "Docker",
      "Nginx",
      "Gunicorn",
      "GitHub Actions",
      "DigitalOcean",
      "Cloudflare (R2, DNS)",
      "AWS EC2/RDS/S3",
      "JWT",
      "RBAC",
      "Clerk",
    ],
  },
  {
    label: "Testing",
    pills: ["pytest", "httpx", "schemathesis", "Locust", "ruff", "mypy in CI", "Playwright"],
  },
];

export default function TechStack() {
  return (
    <section id="stack" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-10">
          <span className="text-accent font-mono text-sm uppercase tracking-widest">
            Tooling
          </span>
          <h2 className="text-4xl font-bold text-ink mt-2">Stack</h2>
          <p className="text-muted text-base mt-3">
            Things I&apos;ve used in production or shipped with — not a list of everything
            I&apos;ve read about.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col"
        >
          {groups.map((group, i) => (
            <div key={group.label}>
              {i > 0 && (
                <div className="h-px bg-gradient-to-r from-transparent via-line to-transparent my-4" />
              )}
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 py-3">
                <span className="text-muted font-mono text-xs uppercase tracking-widest shrink-0 w-28">
                  {group.label}
                </span>
                <div className="flex flex-wrap gap-2">
                  {group.pills.map((pill) => (
                    <span
                      key={pill}
                      className="px-3 py-1.5 rounded-lg text-xs text-ink bg-surface border border-line cursor-default transition-all duration-200 hover:bg-accent/10 hover:border-accent hover:text-accent hover:-translate-y-0.5 hover:shadow-sm"
                    >
                      {pill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
