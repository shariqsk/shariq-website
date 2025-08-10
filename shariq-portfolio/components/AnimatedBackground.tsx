"use client";

import React, { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
};

export default function AnimatedBackground(): JSX.Element {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const particlesRef = useRef<Particle[]>([]);
  const prefersReduced = typeof window !== "undefined" && window.matchMedia ? window.matchMedia("(prefers-reduced-motion: reduce)").matches : false;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const DPR = Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
      const { innerWidth: w, innerHeight: h } = window;
      canvas.width = Math.floor(w * DPR);
      canvas.height = Math.floor(h * DPR);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
      initParticles();
    };

    const initParticles = () => {
      const count = Math.floor((window.innerWidth * window.innerHeight) / 24000);
      const arr: Particle[] = [];
      for (let i = 0; i < Math.max(24, count); i++) {
        arr.push({
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.4,
        });
      }
      particlesRef.current = arr;
    };

    const step = () => {
      const w = canvas.width / DPR;
      const h = canvas.height / DPR;
      ctx.clearRect(0, 0, w, h);

      const grd = ctx.createRadialGradient(w * 0.2, h * 0.2, 0, w * 0.2, h * 0.2, Math.max(w, h));
      grd.addColorStop(0, "rgba(239,68,68,0.08)");
      grd.addColorStop(1, "rgba(0,0,0,0)");
      ctx.fillStyle = grd;
      ctx.fillRect(0, 0, w, h);

      const particles = particlesRef.current;
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;
      }

      ctx.globalCompositeOperation = "lighter";
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.hypot(dx, dy);
          if (dist < 140) {
            const alpha = 1 - dist / 140;
            ctx.strokeStyle = `rgba(239,68,68,${0.18 * alpha})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }
      ctx.globalCompositeOperation = "source-over";

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        ctx.fillStyle = "rgba(239,68,68,0.5)";
        ctx.beginPath();
        ctx.arc(p.x, p.y, 1.6, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.fillStyle = "rgba(255,255,255,0.04)";
      for (let y = 0; y < h; y += 4) {
        ctx.fillRect(0, y, w, 1);
      }

      rafRef.current = requestAnimationFrame(step);
    };

    resize();
    if (!prefersReduced) step();

    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("resize", resize);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [prefersReduced]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10 opacity-95"
      aria-hidden
    />
  );
}
