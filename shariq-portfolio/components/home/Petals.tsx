'use client';

import { useEffect, useRef } from 'react';

/* Falling petals on a canvas: cheaper than DOM nodes at this count.
 * Honours prefers-reduced-motion and stops while the tab is hidden. */

interface Petal {
  x: number;
  y: number;
  z: number;      // depth: drives size, speed and opacity together
  size: number;
  fall: number;
  sway: number;   // horizontal drift amplitude
  phase: number;
  spin: number;
  angle: number;
  flip: number;   // rotation about the vertical axis, so petals turn edge-on
  tint: number;
}

const TINTS = [
  [214, 58, 78],
  [178, 38, 58],
  [140, 26, 44],
];

function makePetal(w: number, h: number, seeded: boolean): Petal {
  const z = 0.35 + Math.random() * 0.65;

  return {
    x: Math.random() * w,
    y: seeded ? Math.random() * h : -20 - Math.random() * 80,
    z,
    size: (6 + Math.random() * 8) * z,
    fall: (0.45 + Math.random() * 0.85) * z,
    sway: 12 + Math.random() * 26,
    phase: Math.random() * Math.PI * 2,
    spin: (Math.random() - 0.5) * 0.008,
    angle: Math.random() * Math.PI * 2,
    flip: Math.random() * Math.PI * 2,
    tint: Math.floor(Math.random() * TINTS.length),
  };
}

export default function Petals() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const canvas = ref.current;
    const ctx = canvas?.getContext('2d');

    if (!canvas || !ctx) return;

    let w = 0;
    let h = 0;
    let petals: Petal[] = [];
    let frame = 0;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);

      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      /* Density follows area so tall displays don't look sparse. */
      const count = Math.min(70, Math.max(18, Math.round((w * h) / 34000)));

      petals = Array.from({ length: count }, () => makePetal(w, h, true));
    };

    const draw = (t: number) => {
      ctx.clearRect(0, 0, w, h);

      for (const p of petals) {
        p.y += p.fall;
        p.angle += p.spin;
        p.flip += 0.011 * p.z;

        const x = p.x + Math.sin(t / 2600 + p.phase) * p.sway;

        if (p.y > h + 30) Object.assign(p, makePetal(w, h, false));

        const [r, g, b] = TINTS[p.tint];
        /* Edge-on petals are thinner and dimmer. */
        const face = Math.abs(Math.cos(p.flip));
        const alpha = (0.20 + p.z * 0.34) * (0.45 + face * 0.55);

        ctx.save();
        ctx.translate(x, p.y);
        ctx.rotate(p.angle);
        ctx.scale(0.45 + face * 0.55, 1);
        ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${alpha.toFixed(3)})`;

        const s = p.size;

        ctx.beginPath();
        ctx.moveTo(0, -s);
        ctx.bezierCurveTo(s * 0.75, -s * 0.5, s * 0.6, s * 0.6, 0, s);
        ctx.bezierCurveTo(-s * 0.6, s * 0.6, -s * 0.75, -s * 0.5, 0, -s);
        ctx.fill();
        ctx.restore();
      }

      frame = requestAnimationFrame(draw);
    };

    const start = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(draw);
    };

    const onVisibility = () => {
      if (document.hidden) cancelAnimationFrame(frame);
      else start();
    };

    resize();
    start();
    window.addEventListener('resize', resize);
    document.addEventListener('visibilitychange', onVisibility);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('resize', resize);
      document.removeEventListener('visibilitychange', onVisibility);
    };
  }, []);

  return <canvas ref={ref} className="home__petals" aria-hidden />;
}
