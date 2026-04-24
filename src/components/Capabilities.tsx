"use client";

import { motion } from "framer-motion";
import { Zap, Activity, Brain } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Capability {
  icon: LucideIcon;
  title: string;
  description: string;
}

const capabilities: Capability[] = [
  {
    icon: Zap,
    title: "Async API Systems",
    description:
      "High-throughput REST APIs with non-blocking pipelines, JWT/RBAC auth, and production-grade error handling.",
  },
  {
    icon: Activity,
    title: "Real-Time Data Pipelines",
    description:
      "Telemetry ingestion, anomaly detection, and automated alerting at near-zero latency.",
  },
  {
    icon: Brain,
    title: "LLM & AI Integration",
    description:
      "Embedding Claude and Gemini into backend workflows that automate real business decisions.",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Capabilities() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {capabilities.map((cap) => {
            const Icon = cap.icon;
            return (
              <motion.div
                key={cap.title}
                variants={itemVariants}
                className="p-6 rounded-2xl bg-[#111827] border border-[#1E2D40] cursor-default"
                whileHover={{
                  y: -4,
                  borderColor: "#4FF8E5",
                  transition: { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] },
                }}
              >
                <div className="mb-4">
                  <Icon
                    size={28}
                    color="#4FF8E5"
                    style={{ filter: "drop-shadow(0 0 6px #4FF8E5)" }}
                    aria-hidden="true"
                  />
                </div>
                <h3 className="text-[#F0F4FF] font-bold text-lg mb-2">{cap.title}</h3>
                <p className="text-[#8892A4] text-sm leading-relaxed">{cap.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
