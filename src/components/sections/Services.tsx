import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import SectionHeader from "@/components/layout/SectionHeader";
import GlassCard from "@/components/ui/GlassCard";
import Reveal from "@/components/ui/Reveal";
import { services } from "@/data/services";



export default function Services() {
  return (
    <Section id="services">
      <Container className="max-w-6xl">
        <Reveal>
          <SectionHeader
            eyebrow="Services"
            title="Backend capabilities I bring to projects."
            description="Focused on API architecture, database performance, and backend reliability for modern applications."
          />
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {services.map((service, index) => (
            <Reveal key={service.title} delay={index * 0.1}>
              <GlassCard className="h-full p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/50">
                <div className="flex h-full flex-col">
                  <h3 className="text-xl font-semibold text-white">
                    {service.title}
                  </h3>

                  <p className="mt-4 text-sm leading-6 text-gray-300">
                    {service.description}
                  </p>

                  <p className="mt-4 text-sm leading-6 text-cyan-300">
                    {service.value}
                  </p>
                </div>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}