"use client";

import { useState } from "react";

export default function Contact() {
  const [showContact, setShowContact] = useState(false);

  return (
    <section
      id="contact"
      className="scroll-mt-24 bg-neutral-950 px-6 py-24 text-white lg:px-12"
    >
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="mb-6 text-3xl font-bold sm:text-4xl">
          Let's Connect
        </h2>

        <p className="mb-10 text-gray-400">
          Interested in backend systems, API development, or collaboration?
          Feel free to reach out.
        </p>

        {/* CONTACT BUTTON */}
        {!showContact && (
          <button
            onClick={() => setShowContact(true)}
            className="rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 font-semibold text-white transition hover:scale-105"
          >
            Contact Me
          </button>
        )}

        {/* CONTACT INFO + SOCIAL BUTTONS */}
        {showContact && (
          <div className="mt-8 space-y-6 text-lg">

            <div className="space-y-2">
              <p>
                Email:{" "}
                <a
                  href="mailto:asadamad81@gmail.com"
                  className="text-cyan-400"
                >
                  asadamad81@gmail.com
                </a>
              </p>

              <p>Phone: 03390115848</p>
            </div>

            {/* SOCIAL LINKS */}
            <div className="flex items-center justify-center gap-4 pt-4">
              <span className="text-sm text-gray-500"></span>

              <div className="flex gap-3">
                <a
                  href="https://github.com/asadsheikh91"
                  target="_blank"
                  className="rounded-lg border border-white/10 bg-white/5 p-3 hover:border-blue-400/50"
                >
                  GH
                </a>

                <a
                  href="https://linkedin.com/in/asadamadsheikh"
                  target="_blank"
                  className="rounded-lg border border-white/10 bg-white/5 p-3 hover:border-blue-400/50"
                >
                  in
                </a>

                <a
                  href="mailto:asadamad81@gmail.com"
                  className="rounded-lg border border-white/10 bg-white/5 p-3 hover:border-blue-400/50"
                >
                  @
                </a>

                <a
                  href="/AsadAmadSheikh_CV.pdf"
                  target="_blank"
                  className="rounded-lg border border-white/10 bg-white/5 p-3 hover:border-blue-400/50"
                >
                  ↓
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}