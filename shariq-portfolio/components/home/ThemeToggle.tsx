'use client';

import { useEffect, useRef, useState } from 'react';
import { useTheme } from 'next-themes';

import { loadPalette } from './palettes';

/* Switching sweeps the same tile wave the intro uses across the screen and
   flips the theme behind it, so the change reads as part of the site rather
   than a repaint. */

const CELL = 24;
const GAP = 1.5;
const IN = 200;      // ms for a tile to appear
const OUT = 300;     // ms for it to clear
const SPREAD = 560;  // ms for the front to cross the screen
const FLIP = 0.52;   // point in the sweep where the theme changes

function sweep(color: [number, number, number], onFlip: () => void, onDone: () => void) {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');

  if (!ctx) {
    onFlip();
    onDone();

    return;
  }

  const w = window.innerWidth;
  const h = window.innerHeight;
  const dpr = Math.min(window.devicePixelRatio || 1, 2);

  canvas.width = w * dpr;
  canvas.height = h * dpr;
  Object.assign(canvas.style, {
    position: 'fixed',
    inset: '0',
    width: `${w}px`,
    height: `${h}px`,
    zIndex: '80',
    pointerEvents: 'none',
  });
  document.body.appendChild(canvas);
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

  const cols = Math.ceil(w / CELL);
  const rows = Math.ceil(h / CELL);
  const delay: number[] = [];

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      delay.push(((c / cols + r / rows) / 2) * SPREAD + Math.random() * SPREAD * 0.22);
    }
  }

  const total = Math.max(...delay) + IN + OUT;
  const flipAt = total * FLIP;
  const [cr, cg, cb] = color;
  const t0 = performance.now();
  let flipped = false;

  const tick = (now: number) => {
    const t = now - t0;

    if (!flipped && t >= flipAt) {
      flipped = true;
      onFlip();
    }

    ctx.clearRect(0, 0, w, h);

    let i = 0;

    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++, i++) {
        const local = t - delay[i];

        if (local <= 0 || local >= IN + OUT) continue;

        const alpha = local < IN ? local / IN : 1 - (local - IN) / OUT;
        const size = CELL - GAP;
        const pad = (CELL - size) / 2;

        ctx.fillStyle = `rgba(${cr}, ${cg}, ${cb}, ${(alpha * 0.95).toFixed(3)})`;
        ctx.fillRect(c * CELL + pad, r * CELL + pad, size, size);
      }
    }

    if (t < total) requestAnimationFrame(tick);
    else {
      canvas.remove();
      onDone();
    }
  };

  requestAnimationFrame(tick);
}

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const busy = useRef(false);

  useEffect(() => setMounted(true), []);

  const isLight = mounted && resolvedTheme === 'light';

  const switchTheme = () => {
    const next = isLight ? 'dark' : 'light';

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setTheme(next);

      return;
    }

    if (busy.current) return;

    busy.current = true;

    const hex = loadPalette().colors[2];
    const rgb: [number, number, number] = [
      parseInt(hex.slice(1, 3), 16),
      parseInt(hex.slice(3, 5), 16),
      parseInt(hex.slice(5, 7), 16),
    ];

    sweep(rgb, () => setTheme(next), () => { busy.current = false; });
  };

  return (
    <button
      type="button"
      className="home__theme"
      aria-label={isLight ? 'Switch to dark theme' : 'Switch to light theme'}
      onClick={switchTheme}
    >
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" aria-hidden>
        {isLight ? (
          <path d="M20.5 14.6A8.5 8.5 0 0 1 9.4 3.5a8.5 8.5 0 1 0 11.1 11.1z" fill="currentColor" stroke="none" />
        ) : (
          <>
            <circle cx="12" cy="12" r="4.2" />
            <path d="M12 2.6v2.2M12 19.2v2.2M4.2 12H2M22 12h-2.2M5.9 5.9 4.4 4.4M19.6 19.6l-1.5-1.5M18.1 5.9l1.5-1.5M4.4 19.6l1.5-1.5" />
          </>
        )}
      </svg>
    </button>
  );
}
