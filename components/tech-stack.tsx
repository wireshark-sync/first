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
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    let scrollPos = 0;
    const SCROLL_SPEED = 0.5;

    const animate = () => {
      if (!isHovering) {
        scrollPos += SCROLL_SPEED;
        const maxScroll = scrollContainer.scrollWidth / 2;
        
        if (scrollPos >= maxScroll) {
          scrollPos = 0;
        }
        
        scrollContainer.style.transform = `translateX(-${scrollPos}px)`;
      }
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationId);
  }, [isHovering]);

  return (
    <section className="py-16 md:py-24 px-4 bg-background/50">
      <div className="max-w-7xl mx-auto">
        <h3 className="text-center text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-12">
          Technologies & Tools
        </h3>
        
        <div className="relative overflow-hidden">
          {/* Gradient masks for smooth edges */}
          <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-background to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-background to-transparent z-10 pointer-events-none"></div>
          
          {/* Scrolling container */}
          <div
            ref={scrollRef}
            className="flex gap-8 md:gap-12 will-change-transform"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            style={{ width: "max-content" }}
          >
            {/* Original set */}
            {technologies.map((tech, idx) => (
              <div
                key={`original-${idx}`}
                className="flex flex-col items-center gap-3 min-w-fit px-4 py-6 rounded-lg hover:bg-accent/10 transition-colors duration-300 group cursor-pointer"
              >
                <div className="relative">
                  <span className="text-4xl md:text-5xl block group-hover:scale-125 group-hover:animate-bounce transition-transform duration-300">
                    {tech.icon}
                  </span>
                </div>
                <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors duration-200">
                  {tech.name}
                </span>
              </div>
            ))}
            
            {/* Duplicated set for seamless loop */}
            {technologies.map((tech, idx) => (
              <div
                key={`duplicate-${idx}`}
                className="flex flex-col items-center gap-3 min-w-fit px-4 py-6 rounded-lg hover:bg-accent/10 transition-colors duration-300 group cursor-pointer"
              >
                <div className="relative">
                  <span className="text-4xl md:text-5xl block group-hover:scale-125 group-hover:animate-bounce transition-transform duration-300">
                    {tech.icon}
                  </span>
                </div>
                <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors duration-200">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
