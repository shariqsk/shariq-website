'use client';

import { useEffect, useRef, useState } from 'react';

/* Short intro: pixels fly in, lock into an isometric cube, then break apart
   and fall away. Plays once per session, skipped entirely under
   prefers-reduced-motion. */

const N = 7;              // cells per cube edge
const CELL = 11;          // px per cell
const ASSEMBLE = 720;     // ms
const HOLD = 320;
const SCATTER = 620;
const TOTAL = ASSEMBLE + HOLD + SCATTER;

const FACE_COLORS = ['#ececed', '#9c9ca6', '#54545d'];
const ACCENT = '#c33049';

interface Pixel {
  tx: number; ty: number;      // target
  sx: number; sy: number;      // start
  vx: number; vy: number;      // scatter velocity
  delay: number;
  color: string;
  spin: number;
}

const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);
const easeIn = (t: number) => t * t;

function buildCube(cx: number, cy: number): Pixel[] {
  const px: Pixel[] = [];
  /* Isometric basis: x runs down-right, y down-left, z straight up. */
  const ax = [CELL * 0.866, CELL * 0.5];
  const ay = [-CELL * 0.866, CELL * 0.5];
  const az = [0, -CELL];
  const off = (N - 1) / 2;

  const place = (u: number, v: number, face: number) => {
    let x = cx;
    let y = cy;

    if (face === 0) {          // top
      x += (u - off) * ax[0] + (v - off) * ay[0];
      y += (u - off) * ax[1] + (v - off) * ay[1] - N * CELL * 0.5;
    } else if (face === 1) {   // left
      x += (u - off) * ay[0];
      y += (u - off) * ay[1] + (v - off) * az[1] + CELL * 0.5;
    } else {                   // right
      x += (u - off) * ax[0];
      y += (u - off) * ax[1] + (v - off) * az[1] + CELL * 0.5;
    }

    const angle = Math.random() * Math.PI * 2;
    const dist = 260 + Math.random() * 420;

    px.push({
      tx: x,
      ty: y,
      sx: x + Math.cos(angle) * dist,
      sy: y + Math.sin(angle) * dist,
      vx: (Math.random() - 0.5) * 1.6,
      vy: 0.6 + Math.random() * 1.9,
      delay: Math.random() * 240,
      color: Math.random() < 0.06 ? ACCENT : FACE_COLORS[face],
      spin: (Math.random() - 0.5) * 0.2,
    });
  };

  for (let f = 0; f < 3; f++) {
    for (let u = 0; u < N; u++) {
      for (let v = 0; v < N; v++) place(u, v, f);
    }
  }

  return px;
}

export default function Intro() {
  const ref = useRef<HTMLCanvasElement>(null);
  const [phase, setPhase] = useState<'idle' | 'run' | 'gone'>('idle');

  useEffect(() => {
    const skip =
      window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
      sessionStorage.getItem('intro') === 'seen';

    if (skip) {
      setPhase('gone');

      return;
    }

    sessionStorage.setItem('intro', 'seen');
    setPhase('run');
  }, []);

  useEffect(() => {
    if (phase !== 'run') return;

    const canvas = ref.current;
    const ctx = canvas?.getContext('2d');

    if (!canvas || !ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const w = window.innerWidth;
    const h = window.innerHeight;

    canvas.width = w * dpr;
    canvas.height = h * dpr;
    canvas.style.width = `${w}px`;
    canvas.style.height = `${h}px`;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    const pixels = buildCube(w / 2, h / 2);
    const t0 = performance.now();
    let frame = 0;

    const tick = (now: number) => {
      const t = now - t0;

      ctx.clearRect(0, 0, w, h);

      for (const p of pixels) {
        let x: number;
        let y: number;
        let alpha = 1;
        let rot = 0;
        let scale = 1;

        if (t < ASSEMBLE) {
          const k = Math.max(0, Math.min(1, (t - p.delay) / (ASSEMBLE - p.delay)));
          const e = easeOut(k);

          x = p.sx + (p.tx - p.sx) * e;
          y = p.sy + (p.ty - p.sy) * e;
          alpha = k;
          rot = (1 - e) * Math.PI;
          scale = 0.4 + e * 0.6;
        } else if (t < ASSEMBLE + HOLD) {
          x = p.tx;
          y = p.ty;
        } else {
          const k = Math.min(1, (t - ASSEMBLE - HOLD) / SCATTER);

          x = p.tx + p.vx * k * 190;
          y = p.ty + easeIn(k) * p.vy * 320;
          alpha = 1 - k;
          rot = k * p.spin * 12;
        }

        ctx.save();
        ctx.translate(x, y);
        if (rot) ctx.rotate(rot);
        ctx.globalAlpha = Math.max(0, alpha);
        ctx.fillStyle = p.color;
        ctx.fillRect(-CELL * scale * 0.46, -CELL * scale * 0.46, CELL * scale * 0.92, CELL * scale * 0.92);
        ctx.restore();
      }

      if (t < TOTAL) frame = requestAnimationFrame(tick);
      else setPhase('gone');
    };

    frame = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(frame);
  }, [phase]);

  if (phase === 'gone') return null;

  return (
    <div className={`home__intro${phase === 'run' ? ' home__intro--run' : ''}`} aria-hidden>
      <canvas ref={ref} />
    </div>
  );
}
