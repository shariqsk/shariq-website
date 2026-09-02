"use client";

import { useEffect, useState } from "react";

type Particle = { id: number; x: number; delay: number; duration: number; size: number; opacity: number };

type SparklesProps = {
  className?: string;
  particleColor?: string;
  particleDensity?: number;
  speed?: number;
  minSize?: number;
  maxSize?: number;
  // unused but kept for API compat
  background?: string;
  id?: string;
};

export function SparklesCore({
  className,
  particleColor = "#ffffff",
  particleDensity = 80,
  speed = 1,
  minSize = 0.5,
  maxSize = 1.5,
}: SparklesProps) {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    setParticles(
      Array.from({ length: particleDensity }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        delay: Math.random() * 5,
        duration: (2.5 + Math.random() * 3) / speed,
        size: minSize + Math.random() * (maxSize - minSize),
        opacity: 0.5 + Math.random() * 0.5,
      }))
    );
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      className={className}
      style={{ position: "relative", background: "transparent", overflow: "hidden" }}
    >
      <style>{`
        @keyframes _sparkle-twinkle {
          0%   { opacity: 0; transform: scale(0.3) translateY(0px); }
          20%  { opacity: var(--sp-op); transform: scale(1) translateY(-8px); }
          80%  { opacity: calc(var(--sp-op) * 0.7); transform: scale(0.8) translateY(-60px); }
          100% { opacity: 0; transform: scale(0.2) translateY(-100px); }
        }
      `}</style>
      {particles.map((p) => (
        <div
          key={p.id}
          style={{
            position: "absolute",
            left: `${p.x}%`,
            bottom: "0%",
            width: `${p.size}px`,
            height: `${p.size}px`,
            borderRadius: "50%",
            background: particleColor,
            boxShadow: `0 0 ${p.size * 2}px 0px ${particleColor}`,
            // @ts-expect-error css var
            "--sp-op": p.opacity,
            opacity: 0,
            animation: `_sparkle-twinkle ${p.duration}s ${p.delay}s infinite ease-out`,
          }}
        />
      ))}
    </div>
  );
}
