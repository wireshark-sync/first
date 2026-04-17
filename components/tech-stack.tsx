"use client";

import { useEffect, useRef, useState } from "react";

export const technologies = [
  { name: "Python", icon: "🐍" },
  { name: "TensorFlow", icon: "📊" },
  { name: "PyTorch", icon: "🔥" },
  { name: "OpenCV", icon: "👁️" },
  { name: "Next.js", icon: "▲" },
  { name: "React", icon: "⚛️" },
  { name: "TypeScript", icon: "📘" },
  { name: "Node.js", icon: "🟩" },
  { name: "PostgreSQL", icon: "🐘" },
  { name: "Docker", icon: "🐳" },
  { name: "FastAPI", icon: "⚡" },
  { name: "AWS", icon: "☁️" },
];

export function TechStack() {
  const containerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const container = innerRef.current;
    if (!container) return;

    let animationId: number;
    let position = 0;
    const SPEED = 0.3; // Very smooth, gentle speed
    const direction = 1; // 1 for forward, -1 for backward

    const animate = () => {
      if (!isPaused) {
        position += SPEED * direction;

        // Get the total width of one set of items
        const totalWidth = container.scrollWidth / 2;

        // Reset position when reaching the end
        if (direction > 0 && position >= totalWidth) {
          position = 0;
        } else if (direction < 0 && position <= -totalWidth) {
          position = 0;
        }

        container.style.transform = `translateX(${-position}px)`;
      }

      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationId);
  }, [isPaused]);

  return (
    <section className="py-20 md:py-32 px-4 md:px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header - Premium minimal style */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-3">
            Tech Stack
          </h2>
          <p className="text-sm md:text-base text-muted-foreground font-light max-w-md mx-auto">
            Modern tools and technologies powering seamless digital experiences
          </p>
        </div>

        {/* Animation Container */}
        <div
          ref={containerRef}
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Gradient fade effect - left side */}
          <div className="absolute left-0 top-0 bottom-0 w-24 md:w-32 bg-gradient-to-r from-background via-background/80 to-transparent z-20 pointer-events-none" />

          {/* Gradient fade effect - right side */}
          <div className="absolute right-0 top-0 bottom-0 w-24 md:w-32 bg-gradient-to-l from-background via-background/80 to-transparent z-20 pointer-events-none" />

          {/* Scrolling content */}
          <div
            ref={innerRef}
            className="flex gap-8 md:gap-12 will-change-transform"
            style={{
              width: "max-content",
              transition: isPaused ? "none" : "none",
            }}
          >
            {/* First set - visible items */}
            {technologies.map((tech, idx) => (
              <TechItem key={`set1-${idx}`} tech={tech} />
            ))}

            {/* Duplicate set - for seamless loop */}
            {technologies.map((tech, idx) => (
              <TechItem key={`set2-${idx}`} tech={tech} />
            ))}
          </div>
        </div>

        {/* Pause indicator - subtle */}
        {isPaused && (
          <div className="text-center mt-8">
            <p className="text-xs text-muted-foreground/60">
              Release to continue
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

function TechItem({ tech }: { tech: (typeof technologies)[0] }) {
  return (
    <div className="flex flex-col items-center gap-2.5 min-w-fit px-3 py-4 md:px-4 md:py-5 group cursor-default transition-all duration-300">
      {/* Icon container with subtle hover effect */}
      <div className="relative flex items-center justify-center">
        {/* Subtle glow on hover */}
        <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 blur-xl bg-primary/5 transition-opacity duration-300" />

        {/* Icon */}
        <span className="text-3xl md:text-4xl block transition-all duration-300 group-hover:scale-110 relative z-10">
          {tech.icon}
        </span>
      </div>

      {/* Label */}
      <span className="text-xs md:text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors duration-300 whitespace-nowrap">
        {tech.name}
      </span>
    </div>
  );
}
