import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import SectionHeader from "@/components/layout/SectionHeader";
import GlassCard from "@/components/ui/GlassCard";
import Reveal from "@/components/ui/Reveal";

const projects = [
  {
    title: "Backend Risk & Alert Management API",
    summary:
      "A secure backend system for managing risk records, alerts, and evidence tracking with asynchronous workflows and relational data handling.",
    stack: ["FastAPI", "PostgreSQL", "Redis", "Docker", "JWT"],
    highlights: [
      "Built asynchronous REST APIs for risk and alert operations.",
      "Implemented JWT-based authentication and secure access control.",
      "Used Redis for background task handling and PostgreSQL for relational schemas.",
      "Containerized the backend with Docker for consistent deployment.",
    ],
  },
  {
    title: "Traffic Simulator",
    summary:
      "A concurrency-focused simulation of intersection traffic flow designed to prevent deadlocks and coordinate safe vehicle movement.",
    stack: ["C++", "Threads", "Semaphores", "Mutexes", "OS Concepts"],
    highlights: [
      "Simulated concurrent vehicle movement across shared intersections.",
      "Applied semaphore and mutex synchronization to avoid deadlocks.",
      "Modeled thread coordination using operating system concurrency principles.",
      "Focused on correctness, synchronization, and safe shared resource access.",
    ],
  },
];

export default function Projects() {
  return (
    <Section id="projects">
      <Container className="max-w-6xl">
        <Reveal>
          <SectionHeader
            eyebrow="Projects"
            title="Selected work that reflects how I build backend systems."
            description="These projects highlight my work in backend engineering, concurrency, database-driven systems, and production-focused development."
          />
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {projects.map((project, index) => (
            <Reveal key={project.title} delay={index * 0.12}>
              <GlassCard className="h-full p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/50">
                <div className="flex h-full flex-col">
                  <div>
                    <h3 className="text-2xl font-semibold text-white">
                      {project.title}
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-gray-300">
                      {project.summary}
                    </p>
                  </div>

                  <div className="mt-6">
                    <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-cyan-400">
                      Stack
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.stack.map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-gray-300"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6">
                    <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-cyan-400">
                      Highlights
                    </p>

                    <ul className="space-y-3 text-sm leading-6 text-gray-300">
                      {project.highlights.map((highlight) => (
                        <li key={highlight} className="flex gap-3">
                          <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-cyan-400" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}