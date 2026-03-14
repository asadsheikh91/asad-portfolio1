import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import CodePreviewCard from "@/components/ui/CodePreviewCard";
import PrimaryButton from "@/components/ui/PrimaryButton";
import StatCard from "@/components/ui/StatCard";
import TagPill from "@/components/ui/TagPill";

export default function Hero() {
  return (
    <Section
      id="home"
      className="relative overflow-hidden pt-16 sm:pt-20"
    >
      <Container>
        <div className="grid min-h-[85vh] items-center gap-16 lg:grid-cols-2">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 px-4 py-2 backdrop-blur-sm">
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
              and Docker, with a focus on API design, performance, and
              maintainable architecture.
            </p>

            <div className="flex flex-wrap gap-3">
              <TagPill label="API Design" dotColor="bg-cyan-400" />
              <TagPill label="Query Optimization" dotColor="bg-pink-400" />
              <TagPill label="Scalable Architecture" dotColor="bg-emerald-400" />
            </div>

            <div className="flex flex-col gap-4 pt-4 sm:flex-row">
              <PrimaryButton href="#projects">
                View My Work
                <span className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </PrimaryButton>
            </div>
          </div>

          <div className="space-y-8">
            <CodePreviewCard />

            <div className="grid grid-cols-3 gap-4">
              <StatCard
                value="2+"
                label="Internships"
                valueClassName="bg-gradient-to-r from-blue-400 to-cyan-400"
              />
              <StatCard
                value="5+"
                label="Projects"
                valueClassName="bg-gradient-to-r from-purple-400 to-pink-400"
              />
              <StatCard
                value="FastAPI"
                label="Core Stack"
                valueClassName="bg-gradient-to-r from-green-400 to-emerald-400"
                className="text-[0.95rem]"
              />
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}