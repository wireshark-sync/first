import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { TechStack } from "@/components/tech-stack";
import { Expertise } from "@/components/expertise";
import { Projects } from "@/components/projects";
import { Contact } from "@/components/contact";
import { Intro } from "@/components/intro";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Intro />
      <Nav />
      <Hero />
      <TechStack />
      <Expertise />
      <Projects />
      <Contact />
    </main>
  );
}
