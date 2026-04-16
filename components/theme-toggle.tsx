"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleThemeChange = () => {
    setIsAnimating(true);
    setTheme(theme === "dark" ? "light" : "dark");
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 1000);
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={handleThemeChange}
      className={`relative rounded-full transition-transform hover:scale-110 hover:bg-accent/50 focus:bg-accent/30 border border-border ${
        isAnimating ? "animate-spin" : ""
      }`}
      style={{
        animationDuration: isAnimating ? "1s" : undefined,
      }}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      title={`Current: ${mounted ? theme : "auto"} mode`}
      disabled={isAnimating}
    >
      {mounted && theme ? (
        theme === "dark" ? (
          <Sun className="h-5 w-5 text-yellow-500" />
        ) : (
          <Moon className="h-5 w-5 text-slate-700" />
        )
      ) : (
        <div className="h-5 w-5 rounded-full bg-gradient-to-r from-yellow-500 to-slate-600" />
      )}
    </Button>
  );
}
