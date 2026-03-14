import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import SectionHeader from "@/components/layout/SectionHeader";
import GlassCard from "@/components/ui/GlassCard";
import Reveal from "@/components/ui/Reveal";
import { skillGroups } from "@/data/skills";


export default function Skills() {
  return (
    <Section id="skills">
      <Container className="max-w-6xl">
        <Reveal>
          <SectionHeader
            eyebrow="Skills"
            title="Technologies and tools I use for backend development."
            description="Focused on API architecture, database systems, backend performance, and reliable deployment workflows."
          />
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, index) => (
            <Reveal key={group.category} delay={index * 0.1}>
              <GlassCard className="p-6">
                <h3 className="mb-4 text-lg font-semibold text-white">
                  {group.category}
                </h3>

                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-gray-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}