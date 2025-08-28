"use client";

import React, { useEffect, useRef } from "react";

export default function CinematicBackground(): JSX.Element {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const rainColsRef = useRef<number[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return () => {};
    const ctx = canvas.getContext("2d");
    if (!ctx) return () => {};

    const DPR = Math.min(window.devicePixelRatio || 1, 2);
    const isMobile = () => window.innerWidth < 768 || /Mobi|Android/i.test(navigator.userAgent);

    let targetFps = isMobile() ? 30 : 45; // keep FPS as user set
    let frameInterval = 1000 / targetFps;
    let lastTime = 0;

    const resize = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      canvas.width = Math.floor(w * DPR);
      canvas.height = Math.floor(h * DPR);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0);

      const colSize = isMobile() ? 36 : 32;
      const cols = Math.ceil(w / colSize);
      rainColsRef.current = Array.from({ length: cols }, () => Math.random() * h);

      targetFps = isMobile() ? 30 : 45;
      frameInterval = 1000 / targetFps;
    };

    const draw = (t: number) => {
      const w = canvas.width / DPR;
      const h = canvas.height / DPR;
      const horizonY = Math.floor(h * 0.6);
      const cx = w * 0.5;

      const bg = ctx.createLinearGradient(0, 0, 0, h);
      bg.addColorStop(0, "#0b0b0d");
      bg.addColorStop(1, "#080809");
      ctx.fillStyle = bg;
      ctx.fillRect(0, 0, w, h);

      const glow = ctx.createRadialGradient(cx, horizonY, 0, cx, horizonY, h * 0.9);
      glow.addColorStop(0, "rgba(16,185,129,0.07)");
      glow.addColorStop(1, "rgba(0,0,0,0)");
      ctx.fillStyle = glow;
      ctx.fillRect(0, 0, w, h);

      ctx.strokeStyle = "rgba(16,185,129,0.18)";
      ctx.lineWidth = 1;
      const vCount = isMobile() ? 7 : 10;
      const spacing = isMobile() ? 58 : 54;
      for (let i = -vCount; i <= vCount; i++) {
        const bottomX = cx + i * spacing;
        ctx.beginPath();
        ctx.moveTo(cx, horizonY);
        ctx.lineTo(bottomX, h);
        ctx.stroke();
      }

      const colW = isMobile() ? 36 : 32;
      ctx.font = `${isMobile() ? 10 : 12}px JetBrains Mono, monospace`;
      const glyphs = "<>/\\{}[]:=+-*#;~^|";
      for (let c = 0; c < rainColsRef.current.length; c++) {
        const x = c * colW + 5;
        const y = rainColsRef.current[c];
        const char = glyphs[(c + Math.floor(t / 420)) % glyphs.length]; // slower character change
        ctx.fillStyle = "rgba(0,255,180,0.12)";
        ctx.fillText(char, x, y);
        const step = isMobile() ? 0.3 : 0.5; // very slow, soothing fall
        const ny = y > h ? -Math.random() * h * 0.1 : y + step;
        rainColsRef.current[c] = ny;
      }

      ctx.fillStyle = "rgba(255,255,255,0.03)";
      for (let sy = 0; sy < h; sy += 4) ctx.fillRect(0, sy, w, 1);
    };

    const loop = (time: number) => {
      if (time - lastTime >= frameInterval) {
        draw(time);
        lastTime = time;
      }
      rafRef.current = requestAnimationFrame(loop);
    };

    resize();
    draw(0);
    rafRef.current = requestAnimationFrame(loop);

    const onResize = () => { resize(); draw(0); };
    window.addEventListener("resize", onResize, { passive: true });
    return () => {
      window.removeEventListener("resize", onResize);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 -z-10" aria-hidden />;
}
