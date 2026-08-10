"use client";

import { motion } from "framer-motion";
import { ExternalLink, Mail } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <span className="text-accent font-mono text-sm uppercase tracking-widest">
          Contact
        </span>
        <h2 className="text-4xl font-bold text-ink mt-2 mb-6">Get in touch</h2>

        <p className="text-muted text-base leading-relaxed max-w-2xl mx-auto mb-8">
          I&apos;m looking for remote backend roles, full-time or contract. I work in UTC+5
          and overlap comfortably with European hours, and with US mornings when a role
          needs it. If you&apos;re hiring, the fastest way to reach me is email.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-4"
        >
          <a
            href="mailto:asadamad81@gmail.com"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-accent text-white font-bold text-sm hover:bg-accent-strong transition-colors"
          >
            <Mail size={16} aria-hidden="true" />
            asadamad81@gmail.com
          </a>
        </motion.div>

        <p className="text-muted text-sm mb-10">I reply within a day.</p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="flex items-center justify-center flex-wrap gap-6 mb-12"
        >
          <a
            href="https://github.com/asadsheikh91"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-muted hover:text-accent transition-colors text-sm"
          >
            <ExternalLink size={15} aria-hidden="true" />
            GitHub
          </a>
          <span className="text-line">·</span>
          <a
            href="https://linkedin.com/in/asadamadsheikh"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-muted hover:text-accent transition-colors text-sm"
          >
            <ExternalLink size={15} aria-hidden="true" />
            LinkedIn
          </a>
          <span className="text-line">·</span>
          <a
            href="/cv.pdf"
            download="Asad_Amad_Sheikh_CV.pdf"
            className="flex items-center gap-2 text-muted hover:text-accent transition-colors text-sm"
          >
            <ExternalLink size={15} aria-hidden="true" />
            Download CV
          </a>
        </motion.div>

        <div className="border-t border-line pt-6">
          <p className="text-muted text-xs font-mono">
            Asad Amad Sheikh · Islamabad, Pakistan · 2026
          </p>
        </div>
      </div>
    </section>
  );
}
