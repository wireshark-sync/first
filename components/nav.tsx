"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";

export function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState<string>("home");

  const navLinks = [
    { label: "About", href: "#expertise", id: "expertise" },
    { label: "Projects", href: "#projects", id: "projects" },
    { label: "Contact", href: "#contact", id: "contact" },
  ];

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll("section[id]"));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { root: null, rootMargin: "-40% 0px -40% 0px", threshold: 0 }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  function scrollToHash(e: React.MouseEvent, href: string) {
    e.preventDefault();
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    setIsOpen(false);
  }

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-primary/10">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <a href="#home" onClick={(e) => scrollToHash(e, "#home")} className="text-xl font-bold text-primary">
          AT
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => scrollToHash(e, link.href)}
              className={`transition-colors ${active === link.id ? "text-primary font-semibold" : "text-muted-foreground hover:text-foreground"}`}
              aria-current={active === link.id ? "page" : undefined}
            >
              {link.label}
            </a>
          ))}
          <div className="h-6 w-px bg-border/50" />
          <ThemeToggle />
        </div>

        {/* Mobile Navigation + Theme Toggle */}
        <div className="flex items-center gap-4 md:hidden">
          <ThemeToggle />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-muted-foreground hover:text-foreground"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          {isOpen && (
            <div className="absolute top-full left-0 right-0 bg-background border-b border-primary/10 p-4 space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="block text-muted-foreground hover:text-foreground transition-colors py-2"
                  onClick={(e) => scrollToHash(e, link.href)}
                >
                  {link.label}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
