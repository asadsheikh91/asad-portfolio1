"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Work", href: "#projects" },
  { label: "Skills", href: "#stack" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "backdrop-blur-md bg-[#0A0F1E]/80 border-b border-[#1E2D40]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="text-white font-bold text-xl tracking-tight">
            Asad.
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[#8892A4] hover:text-[#F0F4FF] transition-colors text-sm"
              >
                {link.label}
              </a>
            ))}
          </div>

          <button
            className="md:hidden text-[#8892A4] hover:text-[#F0F4FF] transition-colors"
            onClick={() => setOpen(true)}
            aria-label="Open navigation"
          >
            <Menu size={22} />
          </button>
        </div>
      </nav>

      {open && (
        <div className="fixed inset-0 bg-[#0A0F1E] z-[100] flex flex-col">
          <div className="flex justify-between items-center px-6 h-16 border-b border-[#1E2D40]">
            <span className="text-white font-bold text-xl">Asad.</span>
            <button
              className="text-[#8892A4] hover:text-[#F0F4FF] transition-colors"
              onClick={() => setOpen(false)}
              aria-label="Close navigation"
            >
              <X size={22} />
            </button>
          </div>

          <div className="flex flex-col items-center justify-center flex-1 gap-10">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-3xl font-bold text-[#8892A4] hover:text-[#4FF8E5] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
