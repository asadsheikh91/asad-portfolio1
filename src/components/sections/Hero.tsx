"use client";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center bg-black px-6 pt-28 text-white lg:px-12"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
        <div className="max-w-2xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
            Backend Developer
          </p>

          <h1 className="mb-6 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            Building scalable APIs and reliable backend systems.
          </h1>

          <p className="mb-8 max-w-xl text-base leading-7 text-gray-300 sm:text-lg">
            I design async-first backend systems focused on performance,
            security, and maintainability using technologies like FastAPI,
            PostgreSQL, Redis, and Docker.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-black transition hover:scale-105"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-cyan-400 hover:text-cyan-400"
            >
              Contact Me
            </a>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <div className="relative h-[320px] w-[320px] rounded-3xl border border-white/10 bg-gradient-to-br from-cyan-400/20 to-white/5 p-6 shadow-2xl shadow-cyan-500/10 sm:h-[400px] sm:w-[400px]">
            <div className="flex h-full flex-col justify-between rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-cyan-400">
                  Profile Snapshot
                </p>
                <h2 className="mt-4 text-2xl font-bold">
                  Asad Amad Sheikh
                </h2>
                <p className="mt-2 text-sm leading-6 text-gray-300">
                  Backend engineer experienced in designing async APIs,
                  database-driven systems, and production-ready backend
                  architectures.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-2xl border border-white/10 bg-black/30 p-4">
                  <p className="text-2xl font-bold text-cyan-400">2+</p>
                  <p className="mt-1 text-sm text-gray-300">Internships</p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-black/30 p-4">
                  <p className="text-2xl font-bold text-cyan-400">5+</p>
                  <p className="mt-1 text-sm text-gray-300">Projects</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}