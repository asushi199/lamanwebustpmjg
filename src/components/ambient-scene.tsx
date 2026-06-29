"use client";

import { useEffect } from "react";
import { shouldTrackPointerMotion } from "@/lib/motion";

export function AmbientScene() {
  useEffect(() => {
    const canTrackPointer = window.matchMedia(
      "(pointer: fine) and (prefers-reduced-motion: no-preference)",
    );

    const updatePointer = (event: PointerEvent) => {
      document.documentElement.style.setProperty(
        "--pointer-x",
        `${event.clientX}px`,
      );
      document.documentElement.style.setProperty(
        "--pointer-y",
        `${event.clientY}px`,
      );
    };

    if (shouldTrackPointerMotion(canTrackPointer)) {
      window.addEventListener("pointermove", updatePointer, { passive: true });
    }

    return () => window.removeEventListener("pointermove", updatePointer);
  }, []);

  return (
    <div className="ambient-scene" aria-hidden="true">
      <div className="ambient-grid" />
      <div className="ambient-beam ambient-beam-one" />
      <div className="ambient-beam ambient-beam-two" />
      <div className="pointer-glow" />
      <div className="scan-line" />
      <div className="noise-layer" />
    </div>
  );
}
