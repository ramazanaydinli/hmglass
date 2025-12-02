import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import About from "@/components/About";

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Projects />
      <About />
      <Contact />
    </main>
  );
}
