import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Capabilities from "@/components/Capabilities";
import Projects from "@/components/sections/Projects";
import TechStack from "@/components/TechStack";
import Experience from "@/components/Experience";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Capabilities />
        <Projects />
        <TechStack />
        <Experience />
        <Contact />
      </main>
    </>
  );
}
