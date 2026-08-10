import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Currently from "@/components/sections/Currently";
import Projects from "@/components/sections/Projects";
import HowIThink from "@/components/sections/HowIThink";
import Experience from "@/components/Experience";
import TechStack from "@/components/TechStack";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Currently />
        <Projects />
        <HowIThink />
        <Experience />
        <TechStack />
        <About />
        <Contact />
      </main>
    </>
  );
}
