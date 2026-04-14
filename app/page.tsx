import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { Expertise } from "@/components/expertise";
import { Projects } from "@/components/projects";
import { Contact } from "@/components/contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Nav />
      <Hero />
      <Expertise />
      <Projects />
      <Contact />
    </main>
  );
}
