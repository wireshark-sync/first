import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Contact() {
  const socialLinks = [
    { label: "GitHub", href: "https://github.com", icon: "→" },
    { label: "LinkedIn", href: "https://linkedin.com", icon: "→" },
    { label: "Twitter", href: "https://twitter.com", icon: "→" },
    { label: "Email", href: "mailto:hello@ayushtiwari.com", icon: "→" },
  ];

  return (
    <section id="contact" className="py-20 md:py-32 px-4 bg-secondary/20">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
          Let&apos;s Work Together
        </h2>

        <p className="text-muted-foreground text-lg mb-4 leading-relaxed">
          I&apos;m always interested in hearing about new projects and opportunities.
          Feel free to reach out if you&apos;d like to collaborate or just have a
          conversation about computer vision, web development, or technology in general.
        </p>

        <p className="text-primary text-lg font-semibold mb-12">
          ayush@example.com
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {socialLinks.map((link) => (
            <Link key={link.label} href={link.href} target="_blank">
              <Button
                variant="outline"
                className="w-full"
              >
                {link.label}
              </Button>
            </Link>
          ))}
        </div>

        <div className="border-t border-primary/20 pt-8">
          <p className="text-sm text-muted-foreground">
            Crafted with precision and passion. Built with Next.js, TypeScript, and Tailwind CSS.
          </p>
        </div>
      </div>
    </section>
  );
}
