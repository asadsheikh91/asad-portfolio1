"use client";

import { Fragment } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

// prettier-ignore-start
// The diagrams below are whitespace-significant ASCII. Do not reformat.
const vehicleWatchDiagram = `sensor reading ──▶ FastAPI ingest  (every 2s)
                        │
                        ▼
                 feature vector (10-d)
                        │
            ┌───────────┴───────────┐
            ▼                       ▼
    Isolation Forest        Local Outlier Factor
            └───────────┬───────────┘
                        ▼
                ensemble verdict
                        │
                        ▼
          Gemini ──▶ plain-English diagnostic

  models persisted in Redis (dual-pool)
  → warm across restarts, no retraining`;

const veriloomDiagram = `org posts task-based role
            │
            ▼
candidate submits deliverable ──▶ R2 (isolated per org)
            │
            ▼
   GATE 1   LLM scores deliverable quality
            │
            ▼
   GATE 2   AI interview keyed to that submission,
            scores comprehension
            │
            ▼
    two independent scores ──▶ human review

  outsourced work clears gate 1 and fails gate 2`;

const influencePayDiagram = `  Next.js 14 ──── Clerk auth
      │
      ├──▶ [1] brand wallet signs fund + lock ──▶ Sepolia
      │
      └──▶ Express / Prisma / Postgres
             deals, milestones, profiles, creator tiers
                  │
                  ├── [2] reads on-chain state, reconciles
                  │
                  └── [3] platform wallet signs
                          release / refund      ──▶ Sepolia

     escrow state machine, on-chain
     fund ─▶ lock ─▶ release ─▶ [tier fee split]
               │        ▲
               ▼        │ acceptance
            dispute ────┘  admin override

  brand's wallet locks the funds; the platform key
  releases them. Postgres owns everything else.`;
// prettier-ignore-end

type Fact = { label: string; value: string };

type Project = {
  index: string;
  name: string;
  problem: string;
  approach: string;
  stack: string[][];
  diagram: string;
  diagramLabel: string;
  facts: Fact[];
  links: { label: string; href: string }[];
  bg: string;
};

const projects: Project[] = [
  {
    index: "01",
    name: "VehicleWatch",
    problem:
      "Fleet fault data arrives unlabelled. There's nothing to train a classifier on.",
    approach:
      "An Isolation Forest and Local Outlier Factor ensemble over a 10-dimensional feature space, scoring sensor readings every 2 seconds and emitting a plain-English diagnostic per alert. Trained models persist in Redis under a dual-pool configuration, so scoring stays warm across restarts without retraining.",
    stack: [["FastAPI", "PostgreSQL", "Redis", "scikit-learn", "Gemini API", "Docker"]],
    diagram: vehicleWatchDiagram,
    diagramLabel:
      "Sensor readings enter a FastAPI service every two seconds, are converted to a ten-dimensional feature vector, then scored in parallel by an Isolation Forest and a Local Outlier Factor detector. The ensemble verdict is passed to Gemini, which produces a plain-English diagnostic. Trained models are persisted in Redis so scoring stays warm across restarts.",
    facts: [
      { label: "ROLE", value: "Sole engineer" },
      { label: "SCORING", value: "Sub-100ms end to end" },
      { label: "RUNTIME", value: "Single container instance" },
    ],
    links: [
      { label: "GitHub", href: "https://github.com/asadsheikh91/vehicle-watch" },
    ],
    bg: "var(--color-surface)",
  },
  {
    index: "02",
    name: "Veriloom",
    problem:
      "CV screening rewards formatting over capability, and take-home tasks can be outsourced.",
    approach:
      "A two-sided hiring platform where organisations post task-based roles and candidates submit real deliverables. Scoring runs on two independent signals: the quality of the deliverable, and comprehension measured in an AI-conducted follow-up interview keyed to the candidate's own submission. Work that was outsourced passes the first gate and fails the second.",
    stack: [["Express.js", "Prisma", "PostgreSQL", "Clerk", "Next.js", "Cloudflare R2"]],
    diagram: veriloomDiagram,
    diagramLabel:
      "An organisation posts a task-based role. The candidate submits a deliverable, stored in Cloudflare R2 isolated per organisation. A first gate scores the quality of the deliverable. A second gate runs an AI interview keyed to that specific submission and scores comprehension. Both scores go to human review. Outsourced work passes the first gate and fails the second.",
    facts: [
      { label: "ROLE", value: "Sole engineer" },
      { label: "STATUS", value: "Built · not yet deployed" },
      { label: "AUTH", value: "Clerk, per-org isolation" },
    ],
    links: [{ label: "GitHub", href: "https://github.com/asadsheikh91/VeriLoom" }],
    bg: "var(--color-surface-alt)",
  },
  {
    index: "03",
    name: "InfluencePay",
    problem:
      "Brand–creator deals need one side to trust the other to settle after delivery, and a custodial account just moves the trust problem to the platform.",
    approach:
      "Escrow modelled as an on-chain state machine: fund, lock against a milestone, release on acceptance, explicit dispute path. A Next.js frontend over an Express, Prisma and Postgres API handles deals, milestones and creator profiles; ethers.js v6 handles settlement against Solidity contracts on Sepolia. A custom ERC-20 issued on OpenZeppelin's audited base carries a tier-based fee schedule applied at release, so platform take varies by creator tier without a parallel off-chain billing path. Writes are split by who should hold the key: the brand's own wallet signs the funding transaction in the browser, while release and refund are signed server-side by the platform wallet, and the API reads contract state back to reconcile Postgres.",
    stack: [
      ["Next.js 14", "Express", "Prisma", "PostgreSQL", "Clerk"],
      ["ethers.js v6", "Solidity 0.8.24", "OpenZeppelin", "Hardhat", "Sepolia"],
    ],
    diagram: influencePayDiagram,
    diagramLabel:
      "A Next.js frontend authenticated with Clerk talks to two backends: an Express, Prisma and Postgres API holding deals, milestones and creator tiers, and Solidity escrow contracts on Ethereum Sepolia reached through ethers.js. Writes to the chain come from two places. The brand's own wallet signs the funding and lock transaction from the browser, and the platform wallet signs release and refund from the server. The API reads contract state back to reconcile Postgres. The escrow contract is a state machine: fund, lock, release with a tier-based fee split, and a dispute path resolved by admin override back into release. Custody lives on-chain; all other state lives in Postgres.",
    facts: [
      { label: "ROLE", value: "Sole engineer" },
      { label: "STATUS", value: "Deployed to Ethereum Sepolia" },
      { label: "TESTED", value: "Full lifecycle via ethers.js v6" },
    ],
    links: [{ label: "GitHub", href: "https://github.com/asadsheikh91/influence" }],
    bg: "var(--color-surface)",
  },
];

const diagramFontSize = "clamp(0.6rem, 2.2vw, 0.8rem)";
const factsFontSize = "clamp(0.6rem, 2.2vw, 0.75rem)";

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <span className="text-accent font-mono text-sm uppercase tracking-widest">
            Selected Work
          </span>
          <h2 className="text-4xl font-bold text-ink mt-2">
            Three systems I designed and built.
          </h2>
        </div>

        <div className="flex flex-col gap-6">
          {projects.map((project) => (
            <div key={project.index} className="relative">
              <motion.div
                className="absolute left-0 top-0 w-0.5 bg-accent origin-top rounded-full"
                style={{ height: "100%" }}
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
              />

              <div
                className="ml-2 rounded-2xl border border-line overflow-hidden"
                style={{ background: project.bg }}
              >
                <div className="p-6 lg:p-8 grid grid-cols-1 lg:grid-cols-[1fr_minmax(0,470px)] gap-8 items-start">
                  {/* Left: text */}
                  <div className="flex flex-col gap-4">
                    <span className="text-muted font-mono text-xs">
                      PROJECT {project.index}
                    </span>
                    <h3 className="text-2xl font-bold text-ink">{project.name}</h3>

                    <div>
                      <span className="text-accent font-mono text-xs uppercase tracking-widest">
                        Problem
                      </span>
                      <p className="text-muted text-sm mt-1 leading-relaxed">
                        {project.problem}
                      </p>
                    </div>

                    <div>
                      <span className="text-accent font-mono text-xs uppercase tracking-widest">
                        Approach
                      </span>
                      <p className="text-muted text-sm mt-1 leading-relaxed">
                        {project.approach}
                      </p>
                    </div>

                    <div className="flex flex-col gap-2">
                      {project.stack.map((row, i) => (
                        <div key={i} className="flex flex-wrap gap-2">
                          {row.map((tech) => (
                            <span
                              key={tech}
                              className="px-2.5 py-1 rounded-md text-xs font-mono text-accent-strong bg-accent/10"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      ))}
                    </div>

                    <div className="flex gap-4">
                      {project.links.map((link) => (
                        <a
                          key={link.label}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-sm text-accent hover:text-ink transition-colors"
                        >
                          {link.label}
                          <ArrowUpRight size={13} aria-hidden="true" />
                        </a>
                      ))}
                    </div>
                  </div>

                  {/* Right: how the system works, then the facts */}
                  <div className="self-start w-full rounded-xl border border-line bg-surface-alt p-5 lg:min-h-[520px]">
                    <div className="overflow-x-auto">
                      <pre
                        role="img"
                        aria-label={project.diagramLabel}
                        className="font-mono text-muted"
                        style={{
                          whiteSpace: "pre",
                          fontSize: diagramFontSize,
                          lineHeight: 1.55,
                        }}
                      >
                        {project.diagram}
                      </pre>
                    </div>

                    <div className="border-t border-line my-4" />

                    <dl
                      className="grid grid-cols-[5.5rem_1fr] gap-y-2 font-mono"
                      style={{ fontSize: factsFontSize }}
                    >
                      {project.facts.map((fact) => (
                        <Fragment key={fact.label}>
                          <dt className="text-muted">{fact.label}</dt>
                          <dd className="text-ink">{fact.value}</dd>
                        </Fragment>
                      ))}
                    </dl>
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
