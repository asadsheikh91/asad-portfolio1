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
          Get In Touch
        </h2>

        <p className="mb-10 text-gray-300">
          If you are interested in backend development, API design,
          or collaboration opportunities, feel free to reach out.
        </p>

        {!showContact && (
          <button
            onClick={() => setShowContact(true)}
            className="rounded-full bg-cyan-400 px-6 py-3 font-semibold text-black hover:scale-105 transition"
          >
            Contact Me
          </button>
        )}

        {showContact && (
          <div className="mt-10 space-y-4 text-lg">
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

            <p>
              LinkedIn:{" "}
              <a
                href="https://linkedin.com/in/asadamadsheikh"
                target="_blank"
                className="text-cyan-400"
              >
                linkedin.com/in/asadamadsheikh
              </a>
            </p>
          </div>
        )}
      </div>
    </section>
  );
}