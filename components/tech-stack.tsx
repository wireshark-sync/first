"use client";

import { useEffect, useRef, useState } from "react";
import {
  SiPython,
  SiTensorflow,
  SiPytorch,
  SiOpencv,
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiNodedotjs,
  SiPostgresql,
  SiDocker,
  SiFastapi,
} from "react-icons/si";
import { FaAws } from "react-icons/fa6";

type TechIcon = React.ReactNode;

interface Technology {
  name: string;
  icon: TechIcon;
  color?: string;
}

export const technologies: Technology[] = [
  { name: "Python", icon: <SiPython />, color: "#3776ab" },
  { name: "TensorFlow", icon: <SiTensorflow />, color: "#FF6F00" },
  { name: "PyTorch", icon: <SiPytorch />, color: "#EE4C2C" },
  { name: "OpenCV", icon: <SiOpencv />, color: "#5C3EE8" },
  { name: "Next.js", icon: <SiNextdotjs />, color: "#000000" },
  { name: "React", icon: <SiReact />, color: "#61DAFB" },
  { name: "TypeScript", icon: <SiTypescript />, color: "#3178C6" },
  { name: "Node.js", icon: <SiNodedotjs />, color: "#339933" },
  { name: "PostgreSQL", icon: <SiPostgresql />, color: "#336791" },
  { name: "Docker", icon: <SiDocker />, color: "#2496ED" },
  { name: "FastAPI", icon: <SiFastapi />, color: "#009688" },
  { name: "AWS", icon: <FaAws />, color: "#FF9900" },
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
          className="relative overflow-hidden w-full"
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

function TechItem({ tech }: { tech: Technology }) {
  return (
    <div className="flex flex-col items-center gap-2.5 min-w-fit px-3 py-4 md:px-4 md:py-5 group cursor-default transition-all duration-300">
      {/* Icon container with subtle hover effect */}
      <div className="relative flex items-center justify-center h-12 w-12 md:h-14 md:w-14 rounded-lg bg-muted/50 group-hover:bg-muted transition-all duration-300">
        {/* Subtle glow on hover */}
        <div 
          className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300"
          style={{ backgroundColor: `${tech.color}15` }}
        />

        {/* Icon */}
        <div 
          className="relative z-10 text-2xl md:text-3xl transition-all duration-300 group-hover:scale-110 flex items-center justify-center"
          style={{ color: tech.color || "currentColor" }}
        >
          {tech.icon}
        </div>
      </div>

      {/* Label */}
      <span className="text-xs md:text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors duration-300 whitespace-nowrap">
        {tech.name}
      </span>
    </div>
  );
}
