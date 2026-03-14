import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import SectionHeader from "@/components/layout/SectionHeader";
import GlassCard from "@/components/ui/GlassCard";

const contactLinks = [
  {
    label: "GitHub",
    href: "https://github.com/asadsheikh91",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/asadamadsheikh",
  },
  {
    label: "Email",
    href: "mailto:asadamad81@gmail.com",
  },
  {
    label: "Resume",
    href: "/AsadAmadSheikh_CV.pdf",
  },
];

export default function Contact() {
  return (
    <Section id="contact">
      <Container className="max-w-4xl">
        <div className="text-center">
          <SectionHeader
            eyebrow="Contact"
            title="Let’s connect."
            description="Interested in backend systems, API development, or collaboration? Reach out directly through email or connect with me on the platforms below."
            align="center"
          />

          <GlassCard className="mt-12 p-8">
          

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              {contactLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    link.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="rounded-xl border border-white/10 px-4 py-2 text-sm font-medium text-gray-300 transition duration-300 hover:-translate-y-0.5 hover:border-cyan-400/50 hover:text-white"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </GlassCard>
        </div>
      </Container>
    </Section>
  );
}