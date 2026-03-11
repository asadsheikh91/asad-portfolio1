"use client";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden px-6 pt-28 text-white lg:px-12"
    >
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_15%_20%,rgba(59,130,246,0.18),transparent_20%),radial-gradient(circle_at_80%_25%,rgba(168,85,247,0.16),transparent_18%),radial-gradient(circle_at_60%_75%,rgba(6,182,212,0.12),transparent_20%),linear-gradient(135deg,#071225_0%,#0b1730_45%,#081120_100%)]" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:120px_120px]" />
      <div className="absolute left-[6%] top-[18%] -z-10 h-64 w-64 rounded-full bg-blue-500/20 blur-3xl" />
      <div className="absolute right-[10%] top-[22%] -z-10 h-72 w-72 rounded-full bg-violet-500/20 blur-3xl" />
      <div className="absolute bottom-[10%] left-[50%] -z-10 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center py-20">
        <div className="grid w-full items-center gap-16 lg:grid-cols-2">

          {/* LEFT CONTENT */}
          <div className="space-y-8 -mt-40">

            <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-gradient-to-r from-blue-500/10 to-purple-500/10 px-4 py-2 backdrop-blur-sm">
              <span className="text-sm font-medium text-blue-300">
                Available for opportunities
              </span>
            </div>

            <div className="space-y-4">
              <h1 className="text-5xl font-bold leading-tight text-white sm:text-6xl lg:text-7xl">
                Hi, I&apos;m
                <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Asad Amad Sheikh
                </span>
              </h1>

              <div className="flex h-12 items-center gap-2">
                <span className="text-2xl font-semibold text-gray-300 lg:text-3xl">
                  Backend Developer
                </span>
                <span className="h-8 w-1 animate-pulse bg-blue-400" />
              </div>
            </div>

            <p className="max-w-xl text-lg leading-relaxed text-gray-400 lg:text-xl">
              I build scalable backend systems with FastAPI, PostgreSQL, Redis,
              and Docker, focusing on clean architecture, performance, and
              maintainability.
            </p>

            <div className="flex flex-wrap gap-3">
              <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-sm transition-all duration-300 hover:scale-105">
                <span className="h-3 w-3 rounded-full bg-cyan-400" />
                <span className="text-sm font-medium text-gray-300">
                  Performance
                </span>
              </div>

              <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-sm transition-all duration-300 hover:scale-105">
                <span className="h-3 w-3 rounded-full bg-pink-400" />
                <span className="text-sm font-medium text-gray-300">
                  Scalable Systems
                </span>
              </div>

              <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-sm transition-all duration-300 hover:scale-105">
                <span className="h-3 w-3 rounded-full bg-emerald-400" />
                <span className="text-sm font-medium text-gray-300">
                  Industry Grade Code
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-4 pt-4 sm:flex-row">
              <a
                href="#projects"
                className="group relative rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 font-semibold text-white shadow-lg shadow-blue-500/25 transition-all duration-300 hover:-translate-y-0.5 hover:from-blue-500 hover:to-purple-500 hover:shadow-xl hover:shadow-blue-500/40"
              >
                <span className="flex items-center justify-center gap-2">
                  View My Work
                  <span className="transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </span>
              </a>
            </div>

          </div>

          {/* RIGHT SIDE */}
          <div className="relative hidden items-center justify-center lg:flex -mt-40">
            <div className="relative aspect-square w-full max-w-md rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 p-8 backdrop-blur-xl transition-all duration-500">

              <div className="absolute -right-6 -top-6 h-24 w-24 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-500 opacity-80 shadow-lg animate-pulse" />

              <div
                className="absolute -bottom-6 -left-6 h-32 w-32 rounded-2xl bg-gradient-to-br from-green-500 to-cyan-500 opacity-80 shadow-lg animate-pulse"
                style={{ animationDelay: "1s" }}
              />

              <div className="relative z-10 space-y-4 rounded-2xl border border-white/5 bg-slate-900/50 p-6">

                <div className="mb-4 flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-red-500" />
                  <div className="h-3 w-3 rounded-full bg-yellow-500" />
                  <div className="h-3 w-3 rounded-full bg-green-500" />
                </div>

                <div className="space-y-3 font-mono text-sm">

                  <div className="text-gray-400">
                    <span className="text-purple-400">const</span>{" "}
                    <span className="text-blue-400">developer</span>{" "}
                    <span className="text-gray-500">=</span>{" "}
                    <span className="text-gray-500">{"{"}</span>
                  </div>

                  <div className="pl-4 text-gray-400">
                    <span className="text-green-400">name</span>
                    <span className="text-gray-500">:</span>{" "}
                    <span className="text-orange-400">
                      &quot;Asad Amad Sheikh&quot;
                    </span>
                    ,
                  </div>

                  <div className="pl-4 text-gray-400">
                    <span className="text-green-400">skills</span>
                    <span className="text-gray-500">:</span>{" "}
                    <span className="text-gray-500">[</span>
                    <span className="text-orange-400">&quot;FastAPI&quot;</span>
                    <span className="text-gray-500">, </span>
                    <span className="text-orange-400">&quot;PostgreSQL&quot;</span>
                    <span className="text-gray-500">, </span>
                    <span className="text-orange-400">&quot;Redis&quot;</span>
                    <span className="text-gray-500">]</span>,
                  </div>

                  <div className="pl-4 text-gray-400">
                    <span className="text-green-400">focus</span>
                    <span className="text-gray-500">:</span>{" "}
                    <span className="text-orange-400">
                      &quot;Scalable Backend Systems&quot;
                    </span>
                  </div>

                  <div className="text-gray-500">{"}"}</div>

                </div>
              </div>

              <div className="relative z-10 mt-8 grid grid-cols-3 gap-4">

                <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-center backdrop-blur-sm">
                  <div className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-2xl font-bold text-transparent">
                    2+
                  </div>
                  <div className="mt-1 text-xs text-gray-400">Internships</div>
                </div>

                <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-center backdrop-blur-sm">
                  <div className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-2xl font-bold text-transparent">
                    5+
                  </div>
                  <div className="mt-1 text-xs text-gray-400">Projects</div>
                </div>

                <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-center backdrop-blur-sm">
                  <div className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-2xl font-bold text-transparent">
                    99%
                  </div>
                  <div className="mt-1 text-xs text-gray-400">Commitment</div>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}