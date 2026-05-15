'use client';

import { useRef, useEffect, useState, useCallback } from 'react';

/* Light Painting — black canvas, your pointer is a glowing brush whose
 * hue cycles as you move. Fast strokes thin out, slow strokes bloom.
 * Long-exposure feel; save your art as a PNG. */

export default function LightPainting({ onExit }: { onExit: () => void }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const s = useRef({ drawing: false, lx: 0, ly: 0, hue: 200, lastT: 0 });
  const [empty, setEmpty] = useState(true);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const resize = () => {
      const prev = document.createElement('canvas');
      prev.width = canvas.width; prev.height = canvas.height;
      prev.getContext('2d')?.drawImage(canvas, 0, 0);
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      ctx.drawImage(prev, 0, 0);
    };
    resize();
    window.addEventListener('resize', resize);
    return () => window.removeEventListener('resize', resize);
  }, []);

  const stroke = useCallback((x: number, y: number) => {
    const ctx = canvasRef.current?.getContext('2d');
    if (!ctx) return;
    const st = s.current;
    const now = performance.now();
    const dt = Math.max(1, now - st.lastT);
    const dist = Math.hypot(x - st.lx, y - st.ly);
    const speed = dist / dt;
    const width = Math.max(2.5, 30 - speed * 22);
    st.hue = (st.hue + 2.5 + dist * 0.5) % 360;

    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    // outer glow
    ctx.shadowBlur = 28;
    ctx.shadowColor = `hsl(${st.hue}, 100%, 60%)`;
    ctx.strokeStyle = `hsl(${st.hue}, 100%, 58%)`;
    ctx.lineWidth = width;
    ctx.beginPath();
    ctx.moveTo(st.lx, st.ly);
    ctx.lineTo(x, y);
    ctx.stroke();
    // white-hot core
    ctx.shadowBlur = 8;
    ctx.strokeStyle = 'rgba(255,255,255,0.92)';
    ctx.lineWidth = Math.max(1, width * 0.32);
    ctx.beginPath();
    ctx.moveTo(st.lx, st.ly);
    ctx.lineTo(x, y);
    ctx.stroke();
    ctx.shadowBlur = 0;

    st.lx = x; st.ly = y; st.lastT = now;
  }, []);

  const onDown = (e: React.PointerEvent) => {
    s.current.drawing = true;
    s.current.lx = e.clientX;
    s.current.ly = e.clientY;
    s.current.lastT = performance.now();
    setEmpty(false);
    stroke(e.clientX + 0.1, e.clientY + 0.1);
  };
  const onMove = (e: React.PointerEvent) => {
    if (!s.current.drawing) return;
    stroke(e.clientX, e.clientY);
  };
  const onUp = () => { s.current.drawing = false; };

  const clear = () => {
    const canvas = canvasRef.current;
    canvas?.getContext('2d')?.clearRect(0, 0, canvas.width, canvas.height);
    setEmpty(true);
  };

  const save = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const out = document.createElement('canvas');
    out.width = canvas.width;
    out.height = canvas.height;
    const octx = out.getContext('2d');
    if (!octx) return;
    octx.fillStyle = '#000';
    octx.fillRect(0, 0, out.width, out.height);
    octx.drawImage(canvas, 0, 0);
    const a = document.createElement('a');
    a.download = 'light-painting.png';
    a.href = out.toDataURL('image/png');
    a.click();
  };

  return (
    <div style={{ position: 'fixed', inset: 0, background: '#000', touchAction: 'none' }}>
      <canvas
        ref={canvasRef}
        onPointerDown={onDown}
        onPointerMove={onMove}
        onPointerUp={onUp}
        onPointerLeave={onUp}
        style={{ display: 'block', width: '100vw', height: '100vh', cursor: 'crosshair' }}
      />

      {empty && (
        <div style={{
          position: 'absolute', inset: 0,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          flexDirection: 'column', gap: 8,
          pointerEvents: 'none', color: 'rgba(255,255,255,0.5)',
          fontFamily: '"Helvetica Neue", Arial, sans-serif',
        }}>
          <div style={{ fontSize: 26, fontWeight: 200, letterSpacing: 4 }}>LIGHT PAINTING</div>
          <div style={{ fontSize: 13, letterSpacing: 1 }}>click and drag to paint with light</div>
        </div>
      )}

      <GameBar onExit={onExit}>
        <BarButton onClick={save} label="Save PNG" />
        <BarButton onClick={clear} label="Clear" />
      </GameBar>
    </div>
  );
}

/* shared mini toolbar used by the games */
export function GameBar({ children, onExit }: { children?: React.ReactNode; onExit: () => void }) {
  return (
    <div style={{
      position: 'absolute', top: 16, left: 16,
      display: 'flex', gap: 8, alignItems: 'center',
      fontFamily: '"Helvetica Neue", Arial, sans-serif',
    }}>
      <BarButton onClick={onExit} label="← Exit" />
      {children}
    </div>
  );
}

export function BarButton({ onClick, label, active }: { onClick: () => void; label: string; active?: boolean }) {
  return (
    <button
      onClick={onClick}
      style={{
        font: 'inherit', fontSize: 12, letterSpacing: 1,
        padding: '8px 14px', cursor: 'pointer',
        color: '#fff',
        background: active ? 'rgba(255,255,255,0.22)' : 'rgba(0,0,0,0.5)',
        border: '1px solid rgba(255,255,255,0.25)',
        borderRadius: 6,
        backdropFilter: 'blur(6px)',
      }}
    >
      {label}
    </button>
  );
}
