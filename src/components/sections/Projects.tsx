export default function Projects() {
  const projects = [
    {
      title: "Backend Risk & Alert Management API",
      objective:
        "Design asynchronous REST APIs to manage risk records, alerts, and evidence tracking in a secure backend system.",
      strategy:
        "Built FastAPI services with JWT authentication, Redis background tasks, PostgreSQL relational schemas, and Docker container deployment.",
    },
    {
      title: "Traffic Simulator",
      objective:
        "Simulate traffic movement at intersections while preventing deadlocks in concurrent environments.",
      strategy:
        "Implemented multi-threaded synchronization using semaphores and mutexes based on operating system concurrency principles.",
    },
  ];

  return (
    <section
      id="projects"
      className="scroll-mt-24 bg-black px-6 py-24 text-white lg:px-12"
    >
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-8 text-3xl font-bold sm:text-4xl">Projects</h2>

        <p className="mb-12 max-w-3xl leading-7 text-gray-300">
          These projects demonstrate my experience in backend engineering,
          asynchronous systems, and database-driven application design.
        </p>

        <div className="grid gap-6 lg:grid-cols-2">
          {projects.map((project) => (
            <div
              key={project.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1 hover:border-cyan-400/50 hover:bg-white/10"
            >
              <h3 className="mb-4 text-2xl font-semibold text-white">
                {project.title}
              </h3>

              <div className="mb-4">
                <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-cyan-400">
                  Objective
                </p>

                <p className="text-sm leading-6 text-gray-300">
                  {project.objective}
                </p>
              </div>

              <div>
                <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-cyan-400">
                  Strategy
                </p>

                <p className="text-sm leading-6 text-gray-300">
                  {project.strategy}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}