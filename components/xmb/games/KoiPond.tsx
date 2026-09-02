'use client';

import { useRef, useEffect } from 'react';
import { GameBar } from './LightPainting';

/* Koi Pond — a still pond of koi that swim on their own. Move the cursor
 * to ripple the water; the koi grow curious and drift toward it. Tap to
 * scatter food they chase. No score, no timer. */

type V = { x: number; y: number };

/* koi varieties — solid fish and patched (kohaku-style) fish */
const VARIETIES: { base: string; patch: string | null }[] = [
  { base: '#e8631f', patch: null },        // solid orange
  { base: '#f0b631', patch: null },        // solid gold
  { base: '#f4f1ea', patch: '#d8431a' },   // white + red
  { base: '#f4f1ea', patch: '#1d1d1d' },   // white + black
  { base: '#f4f1ea', patch: '#ec7a1e' },   // white + orange
  { base: '#f4f1ea', patch: '#d8431a' },   // white + red (again, more common)
];

const rand = (a: number, b: number) => a + Math.random() * (b - a);
const mid = (a: V, b: V): V => ({ x: (a.x + b.x) / 2, y: (a.y + b.y) / 2 });

function lerpAngle(a: number, b: number, t: number) {
  let d = b - a;
  while (d > Math.PI) d -= Math.PI * 2;
  while (d < -Math.PI) d += Math.PI * 2;
  return a + d * t;
}

type Blob = { t: number; off: number; lobes: { dx: number; dy: number; r: number }[] };

interface Koi {
  spine: V[];
  widths: number[];
  heading: number;
  speed: number;
  cruise: number;
  segLen: number;
  base: string;
  patch: string | null;
  blobs: Blob[];
  wig: number;
  wander: number;
  scale: number;
}

function makeKoi(x: number, y: number): Koi {
  const n = 16;
  const scale = rand(0.85, 1.45);
  const segLen = 8.5 * scale;
  const heading = rand(0, Math.PI * 2);
  const spine: V[] = [];
  for (let i = 0; i < n; i++) {
    spine.push({ x: x - Math.cos(heading) * segLen * i, y: y - Math.sin(heading) * segLen * i });
  }
  // width profile — rounded nose, widest ~30% back, tapering to the tail
  const widths: number[] = [];
  for (let i = 0; i < n; i++) {
    const t = i / (n - 1);
    const w = Math.sin(Math.pow(t, 0.55) * Math.PI);
    widths.push((1.4 + w * 9.5) * scale);
  }
  const v = VARIETIES[Math.floor(Math.random() * VARIETIES.length)];
  // 1–2 organic patches, each a cluster of overlapping lobes
  const blobs: Blob[] = [];
  if (v.patch) {
    const count = 1 + Math.floor(Math.random() * 2);
    for (let b = 0; b < count; b++) {
      const lobes = [];
      const nl = 3 + Math.floor(Math.random() * 3);
      for (let l = 0; l < nl; l++) {
        lobes.push({ dx: rand(-10, 10) * scale, dy: rand(-7, 7) * scale, r: rand(6, 13) * scale });
      }
      blobs.push({ t: b === 0 ? rand(0.22, 0.4) : rand(0.5, 0.72), off: rand(-2, 2) * scale, lobes });
    }
  }
  return {
    spine, widths, heading,
    speed: rand(0.4, 0.7), cruise: rand(0.42, 0.78),
    segLen, base: v.base, patch: v.patch, blobs,
    wig: rand(0, 10), wander: rand(0, 100), scale,
  };
}

type Ripple = { x: number; y: number; r: number; max: number; life: number };
type Food = { x: number; y: number; vy: number; eaten: boolean };

/* smooth closed curve through a ring of points */
function smoothClosed(ctx: CanvasRenderingContext2D, pts: V[]) {
  const n = pts.length;
  ctx.beginPath();
  const start = mid(pts[n - 1], pts[0]);
  ctx.moveTo(start.x, start.y);
  for (let i = 0; i < n; i++) {
    const m = mid(pts[i], pts[(i + 1) % n]);
    ctx.quadraticCurveTo(pts[i].x, pts[i].y, m.x, m.y);
  }
  ctx.closePath();
}

export default function KoiPond({ onExit }: { onExit: () => void }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let W = window.innerWidth, H = window.innerHeight;
    const dpr = Math.min(2, window.devicePixelRatio || 1);
    const resize = () => {
      W = window.innerWidth; H = window.innerHeight;
      canvas.width = W * dpr; canvas.height = H * dpr;
      canvas.style.width = '100vw'; canvas.style.height = '100vh';
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener('resize', resize);

    // spawn koi spread across a loose grid so they don't start in a pile
    const koi: Koi[] = [];
    const cols = 3, rows = 2;
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        koi.push(makeKoi(
          W * ((c + 0.5) / cols) + rand(-60, 60),
          H * ((r + 0.5) / rows) + rand(-60, 60),
        ));
      }
    }

    const ripples: Ripple[] = [];
    const food: Food[] = [];
    const pads = Array.from({ length: 4 }, () => ({
      x: rand(0.12, 0.88) * W, y: rand(0.12, 0.88) * H,
      r: rand(36, 66), rot: rand(0, Math.PI * 2), phase: rand(0, 10),
      flower: Math.random() < 0.5,
    }));
    const caustics = Array.from({ length: 5 }, () => ({
      x: rand(0, W), y: rand(0, H), r: rand(190, 380),
      vx: rand(-0.1, 0.1), vy: rand(-0.08, 0.08),
    }));
    const pointer = { x: W / 2, y: H / 2, t: -9999 };

    const addRipple = (x: number, y: number, max: number) =>
      ripples.push({ x, y, r: 4, max, life: 1 });

    let lastRipple = 0;
    const onMove = (e: PointerEvent) => {
      pointer.x = e.clientX; pointer.y = e.clientY; pointer.t = performance.now();
      if (performance.now() - lastRipple > 95) { addRipple(e.clientX, e.clientY, 48); lastRipple = performance.now(); }
    };
    const onDown = (e: PointerEvent) => {
      addRipple(e.clientX, e.clientY, 120);
      const k = 2 + Math.floor(Math.random() * 3);
      for (let i = 0; i < k; i++) {
        food.push({ x: e.clientX + rand(-24, 24), y: e.clientY + rand(-24, 24), vy: rand(0.08, 0.22), eaten: false });
      }
    };
    canvas.addEventListener('pointermove', onMove);
    canvas.addEventListener('pointerdown', onDown);

    let raf = 0;
    let last = performance.now();
    let ambient = 0;

    const frame = (now: number) => {
      raf = requestAnimationFrame(frame);
      const dt = Math.min(2.4, (now - last) / 16.67);
      last = now;

      /* water */
      const g = ctx.createLinearGradient(0, 0, 0, H);
      g.addColorStop(0, '#12544e');
      g.addColorStop(0.55, '#0a3a37');
      g.addColorStop(1, '#062523');
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, W, H);

      for (const c of caustics) {
        c.x += c.vx * dt; c.y += c.vy * dt;
        if (c.x < -c.r) c.x = W + c.r; if (c.x > W + c.r) c.x = -c.r;
        if (c.y < -c.r) c.y = H + c.r; if (c.y > H + c.r) c.y = -c.r;
        const rg = ctx.createRadialGradient(c.x, c.y, 0, c.x, c.y, c.r);
        rg.addColorStop(0, 'rgba(150,225,210,0.055)');
        rg.addColorStop(1, 'rgba(150,225,210,0)');
        ctx.fillStyle = rg;
        ctx.fillRect(c.x - c.r, c.y - c.r, c.r * 2, c.r * 2);
      }

      /* lily pads */
      for (const p of pads) {
        p.phase += 0.005 * dt;
        const bob = Math.sin(p.phase) * 3;
        ctx.save();
        ctx.translate(p.x, p.y + bob);
        ctx.rotate(p.rot + Math.sin(p.phase * 0.6) * 0.04);
        ctx.fillStyle = 'rgba(0,0,0,0.22)';
        ctx.beginPath();
        ctx.ellipse(5, 7, p.r, p.r * 0.92, 0, 0, Math.PI * 2);
        ctx.fill();
        const pg = ctx.createRadialGradient(-p.r * 0.3, -p.r * 0.3, p.r * 0.1, 0, 0, p.r);
        pg.addColorStop(0, '#2f7d4f');
        pg.addColorStop(1, '#164a30');
        ctx.fillStyle = pg;
        ctx.beginPath();
        ctx.ellipse(0, 0, p.r, p.r * 0.92, 0, 0.42, Math.PI * 2 - 0.42);
        ctx.lineTo(0, 0);
        ctx.closePath();
        ctx.fill();
        ctx.strokeStyle = 'rgba(255,255,255,0.06)';
        ctx.lineWidth = 2;
        for (let i = 0; i < 6; i++) {
          ctx.beginPath();
          ctx.moveTo(0, 0);
          const a = 0.6 + i * 0.8;
          ctx.lineTo(Math.cos(a) * p.r * 0.9, Math.sin(a) * p.r * 0.85);
          ctx.stroke();
        }
        if (p.flower) {
          ctx.fillStyle = '#f6d7e6';
          for (let i = 0; i < 6; i++) {
            const a = (i / 6) * Math.PI * 2;
            ctx.beginPath();
            ctx.ellipse(Math.cos(a) * 7, Math.sin(a) * 7, 6, 9, a, 0, Math.PI * 2);
            ctx.fill();
          }
          ctx.fillStyle = '#f2b43c';
          ctx.beginPath();
          ctx.arc(0, 0, 5, 0, Math.PI * 2);
          ctx.fill();
        }
        ctx.restore();
      }

      ambient += dt;
      if (ambient > 200) { ambient = 0; addRipple(rand(0, W), rand(0, H), 62); }

      /* koi */
      const pointerFresh = now - pointer.t < 650;
      for (const k of koi) {
        const head = k.spine[0];

        k.wander += 0.008 * dt;
        let desired = k.heading + Math.sin(k.wander) * 0.03;
        let targetSpeed = k.cruise;

        let nf: Food | null = null, nd = 1e9;
        for (const f of food) {
          if (f.eaten) continue;
          const d = Math.hypot(f.x - head.x, f.y - head.y);
          if (d < nd) { nd = d; nf = f; }
        }
        if (nf && nd < 360) {
          desired = Math.atan2(nf.y - head.y, nf.x - head.x);
          targetSpeed = k.cruise * 2.4;
          if (nd < 14 * k.scale) { nf.eaten = true; addRipple(nf.x, nf.y, 40); }
        } else if (pointerFresh) {
          const d = Math.hypot(pointer.x - head.x, pointer.y - head.y);
          if (d < 320 && d > 70) {
            desired = lerpAngle(desired, Math.atan2(pointer.y - head.y, pointer.x - head.x), 0.55);
            targetSpeed = k.cruise * 1.4;
          }
        }

        // separation — koi keep a respectful distance
        for (const o of koi) {
          if (o === k) continue;
          const oh = o.spine[0];
          const dx = head.x - oh.x, dy = head.y - oh.y;
          const d = Math.hypot(dx, dy);
          if (d < 70 && d > 0.1) {
            desired = lerpAngle(desired, Math.atan2(dy, dx), 0.3 * (1 - d / 70));
            if (d < 36) { head.x += (dx / d) * 0.6 * dt; head.y += (dy / d) * 0.6 * dt; }
          }
        }

        const m = 110;
        if (head.x < m) desired = lerpAngle(desired, 0, 0.12);
        if (head.x > W - m) desired = lerpAngle(desired, Math.PI, 0.12);
        if (head.y < m) desired = lerpAngle(desired, Math.PI / 2, 0.12);
        if (head.y > H - m) desired = lerpAngle(desired, -Math.PI / 2, 0.12);

        k.heading = lerpAngle(k.heading, desired, 0.055 * dt);
        k.speed += (targetSpeed - k.speed) * 0.045 * dt;
        head.x += Math.cos(k.heading) * k.speed * dt;
        head.y += Math.sin(k.heading) * k.speed * dt;

        for (let i = 1; i < k.spine.length; i++) {
          const p = k.spine[i - 1], c = k.spine[i];
          const a = Math.atan2(c.y - p.y, c.x - p.x);
          c.x = p.x + Math.cos(a) * k.segLen;
          c.y = p.y + Math.sin(a) * k.segLen;
        }
        k.wig += k.speed * 0.22 * dt;

        drawKoi(ctx, k);
      }

      /* food */
      for (let i = food.length - 1; i >= 0; i--) {
        const f = food[i];
        if (f.eaten) { food.splice(i, 1); continue; }
        f.y += f.vy * dt;
        ctx.fillStyle = '#d8b878';
        ctx.beginPath();
        ctx.arc(f.x, f.y, 3, 0, Math.PI * 2);
        ctx.fill();
      }

      /* ripples */
      for (let i = ripples.length - 1; i >= 0; i--) {
        const r = ripples[i];
        r.r += (r.max - r.r) * 0.045 * dt;
        r.life -= 0.012 * dt;
        if (r.life <= 0) { ripples.splice(i, 1); continue; }
        ctx.strokeStyle = `rgba(220,245,240,${r.life * 0.45})`;
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.arc(r.x, r.y, r.r, 0, Math.PI * 2);
        ctx.stroke();
        ctx.strokeStyle = `rgba(220,245,240,${r.life * 0.2})`;
        ctx.beginPath();
        ctx.arc(r.x, r.y, r.r * 0.66, 0, Math.PI * 2);
        ctx.stroke();
      }

      /* vignette */
      const vg = ctx.createRadialGradient(W / 2, H / 2, H * 0.3, W / 2, H / 2, H * 0.86);
      vg.addColorStop(0, 'rgba(0,0,0,0)');
      vg.addColorStop(1, 'rgba(0,0,0,0.5)');
      ctx.fillStyle = vg;
      ctx.fillRect(0, 0, W, H);
    };
    raf = requestAnimationFrame(frame);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
      canvas.removeEventListener('pointermove', onMove);
      canvas.removeEventListener('pointerdown', onDown);
    };
  }, []);

  return (
    <div style={{ position: 'fixed', inset: 0, background: '#062523', touchAction: 'none' }}>
      <canvas ref={canvasRef} style={{ display: 'block', cursor: 'crosshair' }} />
      <GameBar onExit={onExit} />
      <div style={{
        position: 'absolute', bottom: 18, left: '50%', transform: 'translateX(-50%)',
        fontFamily: '"Helvetica Neue", Arial, sans-serif',
        fontSize: 12, letterSpacing: 1.5, color: 'rgba(220,245,240,0.55)',
      }}>
        move to ripple the water · tap to feed the koi
      </div>
    </div>
  );
}

function drawKoi(ctx: CanvasRenderingContext2D, k: Koi) {
  const n = k.spine.length;

  // spine with a swimming wiggle layered on, plus the local normal at each point
  const pts: V[] = [];
  const norms: V[] = [];
  for (let i = 0; i < n; i++) {
    const s = k.spine[i];
    const prev = k.spine[Math.max(0, i - 1)];
    const next = k.spine[Math.min(n - 1, i + 1)];
    const a = Math.atan2(next.y - prev.y, next.x - prev.x);
    const nx = -Math.sin(a), ny = Math.cos(a);
    const amp = Math.pow(i / (n - 1), 1.35) * 4.2 * k.scale;
    const off = Math.sin(k.wig - i * 0.5) * amp;
    pts.push({ x: s.x + nx * off, y: s.y + ny * off });
    norms.push({ x: nx, y: ny });
  }

  // body outline as a closed ring: left edge nose→tail, right edge tail→nose
  const ring: V[] = [];
  for (let i = 0; i < n; i++) ring.push({ x: pts[i].x + norms[i].x * k.widths[i], y: pts[i].y + norms[i].y * k.widths[i] });
  for (let i = n - 1; i >= 0; i--) ring.push({ x: pts[i].x - norms[i].x * k.widths[i], y: pts[i].y - norms[i].y * k.widths[i] });

  // soft shadow on the pond floor
  ctx.save();
  ctx.translate(10, 13);
  ctx.globalAlpha = 0.22;
  ctx.fillStyle = '#000';
  smoothClosed(ctx, ring);
  ctx.fill();
  ctx.restore();

  // caudal (tail) fin — translucent, behind the body
  const tail = pts[n - 1], pre = pts[n - 4];
  const ta = Math.atan2(tail.y - pre.y, tail.x - pre.x);
  ctx.save();
  ctx.translate(tail.x, tail.y);
  ctx.rotate(ta);
  ctx.globalAlpha = 0.5;
  ctx.fillStyle = k.base;
  const tl = 22 * k.scale;
  ctx.beginPath();
  ctx.moveTo(-2, 0);
  ctx.quadraticCurveTo(tl * 0.8, -tl * 0.62, tl * 1.05, -tl * 0.8);
  ctx.quadraticCurveTo(tl * 0.55, 0, tl * 1.05, tl * 0.8);
  ctx.quadraticCurveTo(tl * 0.8, tl * 0.62, -2, 0);
  ctx.fill();
  ctx.restore();
  ctx.globalAlpha = 1;

  // pectoral fins
  const fi = 4;
  const fa = Math.atan2(pts[fi + 1].y - pts[fi - 1].y, pts[fi + 1].x - pts[fi - 1].x);
  const flap = Math.sin(k.wig * 1.5) * 0.28;
  for (const side of [-1, 1]) {
    ctx.save();
    ctx.translate(pts[fi].x, pts[fi].y);
    ctx.rotate(fa + side * (1.05 + flap));
    ctx.globalAlpha = 0.4;
    ctx.fillStyle = k.base;
    ctx.beginPath();
    ctx.ellipse(side * 7 * k.scale, 0, 12 * k.scale, 5.5 * k.scale, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }
  ctx.globalAlpha = 1;

  // body
  smoothClosed(ctx, ring);
  ctx.fillStyle = k.base;
  ctx.fill();

  // patches, clipped to the body
  if (k.patch) {
    ctx.save();
    smoothClosed(ctx, ring);
    ctx.clip();
    ctx.fillStyle = k.patch;
    for (const b of k.blobs) {
      const idx = Math.floor(b.t * (n - 1));
      const c = pts[idx];
      const nrm = norms[idx];
      for (const lobe of b.lobes) {
        ctx.beginPath();
        ctx.ellipse(
          c.x + nrm.x * b.off + lobe.dx,
          c.y + nrm.y * b.off + lobe.dy,
          lobe.r, lobe.r * 0.85, 0, 0, Math.PI * 2,
        );
        ctx.fill();
      }
    }
    ctx.restore();
  }

  // rounded shading — soft inner shadow + a spine highlight
  ctx.save();
  smoothClosed(ctx, ring);
  ctx.clip();
  ctx.lineWidth = 13;
  ctx.strokeStyle = 'rgba(0,0,0,0.22)';
  ctx.shadowColor = 'rgba(0,0,0,0.35)';
  ctx.shadowBlur = 9;
  smoothClosed(ctx, ring);
  ctx.stroke();
  ctx.shadowBlur = 0;
  ctx.strokeStyle = 'rgba(255,255,255,0.16)';
  ctx.lineWidth = 3;
  ctx.beginPath();
  for (let i = 0; i < n; i++) {
    if (i === 0) ctx.moveTo(pts[i].x, pts[i].y);
    else {
      const m = mid(pts[i - 1], pts[i]);
      ctx.quadraticCurveTo(pts[i - 1].x, pts[i - 1].y, m.x, m.y);
    }
  }
  ctx.stroke();
  ctx.restore();

  // eyes
  ctx.fillStyle = 'rgba(20,20,20,0.85)';
  for (const side of [-1, 1]) {
    ctx.beginPath();
    ctx.arc(
      pts[1].x + norms[1].x * 4.2 * side * k.scale,
      pts[1].y + norms[1].y * 4.2 * side * k.scale,
      1.9 * k.scale, 0, Math.PI * 2,
    );
    ctx.fill();
  }
}
