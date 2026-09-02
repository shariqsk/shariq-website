'use client';

import { useEffect, useRef, useState } from 'react';

import { loadPalette } from './palettes';

/* Full-screen dissolve: the viewport starts as a solid grid of cells that
   shrink and fade from the centre outwards, revealing the page underneath.
   Runs on every load, skipped under prefers-reduced-motion. */

const CELL = 24;
const GAP = 1.5;
const LIFE = 430;       // ms a single cell takes to vanish
const SPREAD = 950;     // ms between the first and last cell starting

function toRgb(hex: string): [number, number, number] {
  return [
    parseInt(hex.slice(1, 3), 16),
    parseInt(hex.slice(3, 5), 16),
    parseInt(hex.slice(5, 7), 16),
  ];
}

export default function Intro() {
  const ref = useRef<HTMLCanvasElement>(null);
  const [alive, setAlive] = useState(true);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setAlive(false);

      return;
    }

    const canvas = ref.current;
    const ctx = canvas?.getContext('2d');

    if (!canvas || !ctx) {
      setAlive(false);

      return;
    }

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const w = window.innerWidth;
    const h = window.innerHeight;

    canvas.width = w * dpr;
    canvas.height = h * dpr;
    canvas.style.width = `${w}px`;
    canvas.style.height = `${h}px`;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    const light = document.documentElement.classList.contains('light');
    const palette = loadPalette().colors.map(toRgb);
    const cols = Math.ceil(w / CELL);
    const rows = Math.ceil(h / CELL);

    const delay: number[] = [];
    const shade: number[] = [];
    const tone: number[] = [];

    /* The dissolve front runs on a diagonal, so the wave crosses the whole
       screen rather than blooming out of the middle. */
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const diag = (c / cols + r / rows) / 2;

        delay.push(diag * SPREAD + Math.random() * SPREAD * 0.28);
        shade.push(light ? 226 + Math.random() * 20 : 18 + Math.random() * 22);
        /* Weighted towards the deeper end so the wave reads as a wash with
           bright flecks, not confetti. */
        tone.push(Math.random() < 0.18 ? Math.floor(Math.random() * 2) : 2 + Math.floor(Math.random() * 2));
      }
    }

    const total = Math.max(...delay) + LIFE;
    const t0 = performance.now();
    let frame = 0;

    const tick = (now: number) => {
      const t = now - t0;

      ctx.clearRect(0, 0, w, h);

      let i = 0;

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++, i++) {
          const p = Math.max(0, Math.min(1, (t - delay[i]) / LIFE));

          if (p >= 1) continue;

          /* Each cell flares into its palette colour as the front reaches
             it, then fades out. */
          const flare = p > 0 ? Math.sin(Math.min(p, 0.5) * Math.PI * 2) : 0;
          const [pr, pg, pb] = palette[tone[i]];
          const g = shade[i];
          const rr = Math.round(g + (pr - g) * flare);
          const gg = Math.round(g + (pg - g) * flare);
          const bb = Math.round(g + 2 + (pb - g) * flare);
          const alpha = 1 - p * p;
          const scale = 1 - p * 0.5;
          const size = (CELL - GAP) * scale;
          const pad = (CELL - size) / 2;

          ctx.fillStyle = `rgba(${rr}, ${gg}, ${bb}, ${alpha.toFixed(3)})`;
          ctx.fillRect(c * CELL + pad, r * CELL + pad, size, size);
        }
      }

      if (t < total) frame = requestAnimationFrame(tick);
      else setAlive(false);
    };

    frame = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(frame);
  }, []);

  if (!alive) return null;

  return <canvas ref={ref} className="home__intro" aria-hidden />;
}
