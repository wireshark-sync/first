"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export function Contact() {
  const socialLinks = [
    { label: "GitHub", href: "https://github.com", icon: "🐙" },
    { label: "LinkedIn", href: "https://linkedin.com", icon: "🔗" },
    { label: "Twitter", href: "https://twitter.com", icon: "🐦" },
    { label: "Email", href: "mailto:ayushworksin@gmail.com", icon: "✉️" },
  ];

  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<null | string>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("sent");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="py-20 md:py-32 px-4 bg-secondary/20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Let&apos;s Work Together</h2>
          <p className="text-muted-foreground text-lg mb-2 leading-relaxed">
            I&apos;m always interested in new projects and collaborations — drop a message below or email me directly.
          </p>
          <p className="text-primary text-lg font-semibold">
            <a href="mailto:ayushworksin@gmail.com" className="underline hover:text-foreground">ayushworksin@gmail.com</a>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm text-muted-foreground mb-1">Name</label>
              <input
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full rounded-md border p-2 bg-background"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-sm text-muted-foreground mb-1">Email</label>
              <input
                required
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full rounded-md border p-2 bg-background"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="block text-sm text-muted-foreground mb-1">Message</label>
              <textarea
                required
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full rounded-md border p-2 bg-background min-h-[120px]"
                placeholder="Tell me about your project"
              />
            </div>

            <div>
              <Button type="submit" className="w-full">
                {status === "sending" ? "Sending..." : "Send Message"}
              </Button>
            </div>

            {status === "sent" && <p className="text-sm text-primary">Thanks — I will reply soon.</p>}
            {status === "error" && <p className="text-sm text-destructive">Something went wrong. Try again later.</p>}
          </form>

          <div>
            <h3 className="text-lg font-semibold mb-4">Other ways to reach me</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {socialLinks.map((link) => (
                <Link key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" aria-label={`Open ${link.label}`}>
                  <Button variant="outline" className="w-full justify-start">
                    <span className="mr-2">{link.icon}</span>
                    {link.label}
                  </Button>
                </Link>
              ))}
            </div>

            <div className="border-t border-primary/20 pt-8 mt-8">
              <p className="text-sm text-muted-foreground">Crafted with precision and passion. Built with Next.js, TypeScript, and Tailwind CSS.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
