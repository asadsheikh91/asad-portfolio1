"use client";

import { motion } from "framer-motion";

const entries = [
  {
    title: "When proportional scoring hides a hard failure",
    context: "ParchiVisa",
    paragraphs: [
      "The first version of the ParchiVisa scoring engine weighted each criterion and summed the result. It was easy to reason about, easy to tune, and wrong.",
      "A test profile made that clear: strong finances, and a long unexplained gap in the academic record. The engine returned a pass. A caseworker would have rejected that application on the gap alone, without ever reaching the bank statements.",
      "Proportional weighting assumes criteria can compensate for one another. Eligibility rules don't work that way. Some conditions are gates, not inputs, and no amount of strength elsewhere buys you past them.",
      "I rebuilt it as tiered band-capping. Every criterion still contributes, but a single hard blocker caps the final band regardless of the total, and the rules live as data rather than as branches in the scorer.",
      "What I'd still change: the thresholds come from published requirements and my reading of them. I can't yet separate a borderline pass from a borderline fail, and that needs outcome data I don't have.",
    ],
  },
  {
    title: "Timeouts that weren't the query's fault",
    context: "Frontier Works Organization",
    paragraphs: [
      "The fleet telemetry services started timing out at peak load, with a little over 300 vehicles reporting at once. Off-peak, the same endpoints were fine.",
      "I went after the slow queries first, because that's the reflex, and it cost me most of a day. The query plans were unremarkable in isolation. The failures were happening before any query ran.",
      "The connection pool was the real constraint. Requests were holding a connection open while iterating unbounded result sets, so under concurrency the pool drained and everything behind it queued until it timed out. The slow query was a symptom of waiting for a connection, not the cause of it.",
      "I bounded the queries so no request holds a connection while streaming an open-ended set, then resized the pool and set timeouts to fail fast instead of queueing. Same peak load, no timeouts.",
      "The habit I kept from it: find where the time is actually spent before optimising whatever looks slowest.",
    ],
  },
  {
    title: "Choosing an algorithm by what the data doesn't have",
    context: "VehicleWatch",
    paragraphs: [
      "The obvious approach to fault detection is a supervised classifier. Label the faults, train on them, predict the next one.",
      "Fleet data doesn't arrive that way. Readings stream in continuously and nobody labels them, and a fault gets recorded, if it gets recorded at all, in a maintenance note written once the vehicle is already in the workshop. There was nothing to train on.",
      "So the problem became unsupervised: learn what normal looks like across a 10-dimensional feature space, and flag what departs from it. I ran Isolation Forest and Local Outlier Factor together rather than picking one, because they fail differently. Isolation Forest catches globally rare readings; LOF catches readings that are only unusual relative to their local neighbourhood.",
      "The cost of that choice is real. With no labels there's no precision or recall to quote, and the alert threshold is a judgement call I tuned by inspection. I can tell you the system flags things. I can't yet tell you how often it's right.",
    ],
  },
];

export default function HowIThink() {
  return (
    <section id="thinking" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <span className="text-accent font-mono text-sm uppercase tracking-widest">
            Approach
          </span>
          <h2 className="text-4xl font-bold text-ink mt-2">How I think</h2>
          <p className="text-muted text-base mt-3">
            Three decisions and the reasoning behind them.
          </p>
        </div>

        <div className="flex flex-col gap-14 max-w-3xl">
          {entries.map((entry, i) => (
            <motion.article
              key={entry.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <span className="text-muted font-mono text-xs uppercase tracking-widest">
                {entry.context}
              </span>
              <h3 className="text-xl lg:text-2xl font-bold text-ink mt-2 mb-4 leading-snug">
                {entry.title}
              </h3>
              <div className="flex flex-col gap-4">
                {entry.paragraphs.map((paragraph, j) => (
                  <p key={j} className="text-muted text-base leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
