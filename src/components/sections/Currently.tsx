"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const facts = [
  "4 country engines",
  "Sole engineer",
  "Live in production",
  "Backed by NIC Islamabad",
];

export default function Currently() {
  return (
    <section id="currently" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl border border-accent/25 bg-surface p-6 lg:p-10"
        >
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-8">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-ink">
                Currently
              </h2>
              <p className="text-accent font-mono text-sm mt-2">
                ParchiVisa · live at parchivisa.app
              </p>
            </div>

            <a
              href="https://parchivisa.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:text-ink transition-colors shrink-0"
            >
              Visit ParchiVisa
              <ArrowUpRight size={15} aria-hidden="true" />
            </a>
          </div>

          <div className="flex flex-col gap-5 max-w-3xl">
            <p className="text-muted text-base leading-relaxed">
              I&apos;m the only engineer on ParchiVisa, a visa-readiness assessment platform
              for students applying to the UK, Australia, Canada, and the USA. I wrote the
              FastAPI service, designed the Postgres schema, built the Next.js frontend, and
              I run the infrastructure it sits on.
            </p>

            <p className="text-muted text-base leading-relaxed">
              The scoring engine was the hard part. My first version weighted criteria
              proportionally, which meant a strong financial profile could quietly offset a
              disqualifying academic gap. The system would hand someone a passing score on
              an application a caseworker would reject outright. I rebuilt it as a tiered
              band-capping model: any single hard blocker caps the result regardless of
              aggregate score. Four separate rule sets, one engine.
            </p>

            <p className="text-muted text-base leading-relaxed">
              The report pipeline runs retrieval over a structured corpus of official
              immigration requirements, then synthesises a narrative through an LLM. Web and
              PDF render from a single React template through headless Playwright, so the two
              outputs can&apos;t drift apart.
            </p>

            <p className="text-muted text-base leading-relaxed">
              It runs on DigitalOcean behind Cloudflare, with secrets injected at runtime and
              nothing credential-bearing in source control. Intake, four-engine scoring, PDF
              generation, and payment all run on one deploy with no manual steps.
            </p>
          </div>

          <div className="mt-8 pt-6 border-t border-line grid grid-cols-2 lg:grid-cols-4 gap-4">
            {facts.map((fact) => (
              <div key={fact} className="flex items-start gap-2">
                <span
                  className="text-accent shrink-0 mt-0.5 font-mono text-sm"
                  aria-hidden="true"
                >
                  ›
                </span>
                <span className="text-ink text-sm font-mono leading-snug">
                  {fact}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
