import fs from "node:fs";
import path from "node:path";
import Image from "next/image";
import Reveal from "@/components/ui/Reveal";

// Drop a portrait at public/asad.(jpg|jpeg|png|webp) and it renders here.
// Until then the slot falls back to a monogram rather than a broken image.
const candidates = ["asad.jpg", "asad.jpeg", "asad.png", "asad.webp"];

function findPhoto(): string | null {
  const dir = path.join(process.cwd(), "public");
  const match = candidates.find((file) => fs.existsSync(path.join(dir, file)));
  return match ? `/${match}` : null;
}

export default function About() {
  const photo = findPhoto();

  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <span className="text-accent font-mono text-sm uppercase tracking-widest">
            About
          </span>
          <h2 className="text-4xl font-bold text-ink mt-2">Who I am</h2>
        </div>

        <Reveal>
          <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-8 lg:gap-12 items-start max-w-4xl">
            <div className="w-40 md:w-full aspect-square rounded-2xl overflow-hidden border border-line bg-surface shrink-0">
              {photo ? (
                <Image
                  src={photo}
                  alt="Asad Amad Sheikh"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                  priority={false}
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-muted font-mono text-4xl font-bold select-none">
                  AS
                </div>
              )}
            </div>

            <div className="flex flex-col gap-5">
              <p className="text-muted text-base leading-relaxed">
                I study computer science at FAST NUCES in Islamabad, and I&apos;ve worked on
                backends the whole way through. Two internships gave me the parts you
                can&apos;t get from side projects: government fleet telemetry at Frontier
                Works, and production telecom data at Ufone. I started building ParchiVisa
                after watching the visa process up close and concluding it was solvable.
              </p>

              <p className="text-muted text-base leading-relaxed">
                I like owning things end to end. On ParchiVisa that means the schema, the
                API, the deploy, and the infrastructure underneath it, and being the person
                who gets called when it&apos;s down. I&apos;d rather understand one system
                completely than touch six of them lightly.
              </p>

              <p className="text-muted text-base leading-relaxed">
                I&apos;m in Islamabad on UTC+5. That&apos;s a full overlap with EU and UK
                mornings, and I work US-morning hours when a role needs it. I&apos;m looking
                for remote backend work, full-time or contract.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
