"use client";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Services", href: "#services" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-black/70 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-12">
        <a
          href="#home"
          className="text-lg font-bold tracking-wide text-white transition hover:text-cyan-400"
        >
          Asad Amad Sheikh
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="text-sm font-medium text-gray-300 transition hover:text-cyan-400"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="rounded-full border border-cyan-400 px-5 py-2 text-sm font-semibold text-cyan-400 transition hover:bg-cyan-400 hover:text-black"
        >
          Contact Me
        </a>
      </nav>
    </header>
  );
}