import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import SectionHeader from "@/components/layout/SectionHeader";
import Reveal from "@/components/ui/Reveal";
import GlassCard from "@/components/ui/GlassCard";

export default function About() {
  return (
    <Section id="about">
      <Container className="max-w-6xl">
        <Reveal>
          <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
            <div>
              <SectionHeader
                eyebrow="About Me"
                title="I build backend systems that are meant to survive real production use."
                description="Focused on secure APIs, database performance, maintainable architecture, and backend reliability."
              />

              <div className="mt-6 space-y-5 text-base leading-8 text-gray-300">
                <p>
                  I’m a backend developer focused on building secure,
                  maintainable, and high-performance systems. My work includes
                  API design, relational database optimization, and structuring
                  backend services that stay clean as complexity grows.
                </p>

                <p>
                  I work primarily with FastAPI, PostgreSQL, Redis, and Docker.
                  I care about how systems behave under load, how clearly
                  business logic is organized, and whether the codebase can be
                  extended without turning into a mess.
                </p>

                <p>
                  My goal is not to build flashy systems. My goal is to build
                  systems that are reliable, understandable, and hard to break.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <GlassCard className="p-6">
                <h3 className="text-lg font-semibold text-white">Core Stack</h3>

                <div className="mt-4 flex flex-wrap gap-3">
                  {[
                    "Python",
                    "FastAPI",
                    "PostgreSQL",
                    "Redis",
                    "Docker",
                    "SQLAlchemy",
                    "Git",
                    "REST APIs",
                  ].map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 px-3 py-1.5 text-sm text-gray-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </GlassCard>

              <GlassCard className="p-6">
                <h3 className="text-lg font-semibold text-white">
                  What I Focus On
                </h3>

                <div className="mt-4 space-y-4">
                  <div>
                    <p className="font-medium text-white">API Architecture</p>
                    <p className="text-sm text-gray-400">
                      Designing backend services with clean routing, validation,
                      authentication, and maintainable business logic.
                    </p>
                  </div>

                  <div>
                    <p className="font-medium text-white">Database Performance</p>
                    <p className="text-sm text-gray-400">
                      Improving schema decisions, query quality, and data access
                      patterns to avoid avoidable bottlenecks.
                    </p>
                  </div>

                  <div>
                    <p className="font-medium text-white">Reliability</p>
                    <p className="text-sm text-gray-400">
                      Building with logging, debugging clarity, deployment
                      awareness, and long-term maintainability in mind.
                    </p>
                  </div>
                </div>
              </GlassCard>
            </div>
          </div>
        </Reveal>

        <Reveal>
          <div className="mt-16">
            <div className="mb-8 flex items-center gap-3">
              <div className="h-px flex-1 bg-white/10" />
              <h3 className="text-xl font-semibold text-white">
                Engineering Highlights
              </h3>
              <div className="h-px flex-1 bg-white/10" />
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              <GlassCard className="p-6">
                <div className="mb-4 text-sm font-semibold text-blue-400">01</div>
                <h4 className="text-lg font-semibold text-white">
                  Backend Systems
                </h4>
                <p className="mt-3 text-sm leading-7 text-gray-400">
                  Built backend solutions centered on API structure, business
                  logic organization, and maintainable service design.
                </p>
              </GlassCard>

              <GlassCard className="p-6">
                <div className="mb-4 text-sm font-semibold text-purple-400">02</div>
                <h4 className="text-lg font-semibold text-white">
                  Data & Performance
                </h4>
                <p className="mt-3 text-sm leading-7 text-gray-400">
                  Worked on relational databases, query efficiency, and backend
                  responsiveness to improve overall system behavior.
                </p>
              </GlassCard>

              <GlassCard className="p-6">
                <div className="mb-4 text-sm font-semibold text-emerald-400">03</div>
                <h4 className="text-lg font-semibold text-white">
                  Reliability Mindset
                </h4>
                <p className="mt-3 text-sm leading-7 text-gray-400">
                  Focused on stability, debugging clarity, and code that stays
                  usable as projects evolve.
                </p>
              </GlassCard>
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}