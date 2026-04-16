"use client";

import { useEffect, useState } from "react";

export function Intro() {
  const [stage, setStage] = useState<"enter" | "exit" | "done">("enter");

  useEffect(() => {
    // If user has already seen intro, skip
    try {
      const seen = localStorage.getItem("introSeen");
      if (seen) {
        setStage("done");
        return;
      }
    } catch (e) {
      // ignore localStorage errors
    }

    const t1 = setTimeout(() => setStage("exit"), 600);
    const t2 = setTimeout(() => {
      try {
        localStorage.setItem("introSeen", "1");
      } catch (e) {}
      setStage("done");
    }, 1100);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  if (stage === "done") return null;

  return (
    <div
      aria-hidden="true"
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-background/95 backdrop-blur-sm transition-opacity duration-300 ${
        stage === "enter" ? "opacity-100" : "opacity-0"
      }`}
    >
      <div
        className={`flex flex-col items-center justify-center text-center text-foreground transform-gpu transition-all duration-700 ${
          stage === "enter" ? "scale-100 opacity-100" : "scale-110 opacity-0"
        }`}
      >
        <div className="w-28 h-28 rounded-full overflow-hidden bg-primary flex items-center justify-center shadow-lg">
          <img src="/IMG_5812.jpg" alt="Ayush" className="w-full h-full object-cover" />
        </div>
        <p className="mt-4 text-sm text-muted-foreground">Ayush Tiwari — Computer Vision & Full‑Stack</p>
      </div>
    </div>
  );
}
