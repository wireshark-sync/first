"use client";

import { useEffect } from "react";
import Link from "next/link";
import { renderCanvas } from "@/components/ui/canvas";
import { Button } from "@/components/ui/button";

export function Hero() {
  useEffect(() => {
    renderCanvas();
  }, []);

  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden">
      <div className="relative z-10 flex flex-col items-center justify-center px-4 pt-32 pb-20 text-center md:pt-40">
        <div className="mb-8 md:mb-12">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4 text-balance">
            Ayush Tiwari
          </h1>
          <p className="text-lg md:text-2xl text-muted-foreground mb-6">
            Computer Vision Specialist & Full Stack Developer
          </p>
          <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
            I build intelligent systems that see, understand, and act. Combining computer vision expertise with full-stack development to create innovative solutions that push boundaries.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Link href="#projects">
            <Button size="lg" className="w-full sm:w-auto">
              Explore My Work
            </Button>
          </Link>
          <Link href="#contact">
            <Button variant="outline" size="lg" className="w-full sm:w-auto">
              Get in Touch
            </Button>
          </Link>
        </div>

        <div className="w-full max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/10 to-primary/20 rounded-lg blur-2xl opacity-50"></div>
            <div className="relative bg-secondary/30 border border-primary/20 rounded-lg p-8 backdrop-blur">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
                <div className="flex-1">
                  <h3 className="text-primary font-semibold mb-2">Available for</h3>
                  <p className="text-muted-foreground">Freelance projects, full-time roles, and collaborations</p>
                </div>
                <div className="flex items-center gap-2 whitespace-nowrap">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-primary"></span>
                  </span>
                  <span className="text-primary font-medium">Open for work</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <canvas
        className="pointer-events-none absolute inset-0 w-full h-full"
        id="canvas"
      ></canvas>
    </section>
  );
}
