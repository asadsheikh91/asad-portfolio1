"use client";

import { motion } from "framer-motion";
import { ExternalLink, Mail } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <span className="text-[#4FF8E5] font-mono text-sm uppercase tracking-widest">
          Get In Touch
        </span>
        <h2 className="text-4xl font-bold text-[#F0F4FF] mt-2 mb-10">
          Let&apos;s build something serious.
        </h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-10"
        >
          <a
            href="mailto:asadamad81@gmail.com"
            className="flex flex-col items-center px-8 py-4 rounded-xl bg-[#4FF8E5] text-[#0A0F1E] hover:bg-[#4FF8E5]/90 transition-colors"
          >
            <span className="font-bold text-sm">Open to Remote Roles</span>
            <span className="text-xs opacity-70 mt-0.5">Full-time · Async-friendly</span>
          </a>
          <a
            href="mailto:asadamad81@gmail.com"
            className="flex flex-col items-center px-8 py-4 rounded-xl border border-[#4FF8E5] text-[#4FF8E5] hover:bg-[#4FF8E5]/10 transition-colors"
          >
            <span className="font-bold text-sm">Available for Freelance</span>
            <span className="text-xs opacity-70 mt-0.5">Project-based · Backend systems</span>
          </a>
        </motion.div>

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
            className="flex items-center gap-2 text-[#8892A4] hover:text-[#4FF8E5] transition-colors text-sm"
          >
            <ExternalLink size={15} aria-hidden="true" />
            GitHub
          </a>
          <span className="text-[#1E2D40]">·</span>
          <a
            href="https://linkedin.com/in/asadamadsheikh"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-[#8892A4] hover:text-[#4FF8E5] transition-colors text-sm"
          >
            <ExternalLink size={15} aria-hidden="true" />
            LinkedIn
          </a>
          <span className="text-[#1E2D40]">·</span>
          <a
            href="mailto:asadamad81@gmail.com"
            className="flex items-center gap-2 text-[#8892A4] hover:text-[#4FF8E5] transition-colors text-sm"
          >
            <Mail size={15} aria-hidden="true" />
            asadamad81@gmail.com
          </a>
        </motion.div>

        <div className="border-t border-[#1E2D40] pt-6">
          <p className="text-[#8892A4] text-xs font-mono">
            Asad Amad Sheikh · Islamabad, Pakistan · 2026
          </p>
        </div>
      </div>
    </section>
  );
}
