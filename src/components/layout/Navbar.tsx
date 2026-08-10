"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Work", href: "#projects", id: "projects" },
  { label: "How I Think", href: "#thinking", id: "thinking" },
  { label: "Experience", href: "#experience", id: "experience" },
  { label: "About", href: "#about", id: "about" },
  { label: "Contact", href: "#contact", id: "contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Scroll spy: whichever section crosses the line just under the sticky nav is current.
  // Deliberately scroll-position based rather than IntersectionObserver — no rootMargin
  // band to tune, and it stays correct for sections shorter than the viewport.
  useEffect(() => {
    const PROBE = 88; // nav is 64px; probe a little below it

    const compute = () => {
      // The final section can never reach the probe line — the page runs out of scroll
      // first — so bottoming out counts as being in it.
      const atBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 2;
      if (atBottom) {
        setActive(navLinks[navLinks.length - 1].id);
        return;
      }

      let current: string | null = null;
      for (const link of navLinks) {
        const el = document.getElementById(link.id);
        if (!el) continue;
        const { top, bottom } = el.getBoundingClientRect();
        if (top <= PROBE && bottom > PROBE) {
          current = link.id;
          break;
        }
      }
      setActive(current);
    };

    compute();
    window.addEventListener("scroll", compute, { passive: true });
    window.addEventListener("resize", compute);
    return () => {
      window.removeEventListener("scroll", compute);
      window.removeEventListener("resize", compute);
    };
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "backdrop-blur-md bg-paper/85 border-b border-line"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between gap-6">
          <a href="#" className="text-ink font-bold text-xl tracking-tight shrink-0">
            Asad Amad Sheikh
          </a>

          <div className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                aria-current={active === link.id ? "true" : undefined}
                className={`text-sm transition-colors whitespace-nowrap ${
                  active === link.id
                    ? "text-ink font-medium"
                    : "text-muted hover:text-ink"
                }`}
              >
                {link.label}
              </a>
            ))}

            <a
              href="#contact"
              className="rounded-lg border border-accent px-4 py-2 text-sm font-semibold text-accent-strong hover:bg-accent hover:text-white transition-colors whitespace-nowrap"
            >
              Get in touch
            </a>
          </div>

          <button
            className="md:hidden text-muted hover:text-ink transition-colors"
            onClick={() => setOpen(true)}
            aria-label="Open navigation"
          >
            <Menu size={22} />
          </button>
        </div>
      </nav>

      {open && (
        <div className="fixed inset-0 bg-paper z-[100] flex flex-col">
          <div className="flex justify-between items-center px-6 h-16 border-b border-line">
            <span className="text-ink font-bold text-xl">Asad.</span>
            <button
              className="text-muted hover:text-ink transition-colors"
              onClick={() => setOpen(false)}
              aria-label="Close navigation"
            >
              <X size={22} />
            </button>
          </div>

          <div className="flex flex-col items-center justify-center flex-1 gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-3xl font-bold text-muted hover:text-accent transition-colors"
              >
                {link.label}
              </a>
            ))}

            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-lg border border-accent px-6 py-3 text-lg font-semibold text-accent-strong hover:bg-accent hover:text-white transition-colors"
            >
              Get in touch
            </a>
          </div>
        </div>
      )}
    </>
  );
}
