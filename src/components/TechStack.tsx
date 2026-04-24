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
    pills: ["Claude API", "Gemini API", "scikit-learn", "Isolation Forest", "LangChain"],
  },
  {
    label: "Data & Cache",
    pills: ["PostgreSQL", "Redis", "Alembic", "Cloudflare R2"],
  },
  {
    label: "Infrastructure",
    pills: ["Docker", "Nginx", "GitHub Actions", "AWS EC2/RDS/S3", "Railway", "JWT", "RBAC", "Clerk"],
  },
];

export default function TechStack() {
  return (
    <section id="stack" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-10">
          <span className="text-[#4FF8E5] font-mono text-sm uppercase tracking-widest">
            Stack
          </span>
          <h2 className="text-4xl font-bold text-[#F0F4FF] mt-2">Technical Arsenal</h2>
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
                <div className="h-px bg-gradient-to-r from-transparent via-[#1E2D40] to-transparent my-4" />
              )}
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 py-3">
                <span className="text-[#8892A4] font-mono text-xs uppercase tracking-widest shrink-0 w-28">
                  {group.label}
                </span>
                <div className="flex flex-wrap gap-2">
                  {group.pills.map((pill) => (
                    <span
                      key={pill}
                      className="px-3 py-1.5 rounded-lg text-xs text-[#F0F4FF] bg-[#111827] border border-[#1E2D40] cursor-default transition-all duration-200 hover:bg-[#1E2D40] hover:border-[#4FF8E5] hover:text-[#4FF8E5] hover:-translate-y-0.5 hover:[box-shadow:0_0_12px_rgba(79,248,229,0.3)]"
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