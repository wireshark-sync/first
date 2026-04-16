import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
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
      <Expertise />
      <Projects />
      <Contact />
    </main>
  );
}
