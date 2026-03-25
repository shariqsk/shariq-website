'use client';

import { useRef, useState, useCallback, useEffect } from 'react';
import { motion } from 'framer-motion';
import { playClick } from '@/lib/sounds';

export interface WindowProps {
  id: string;
  title: string;
  children: React.ReactNode;
  initialPosition?: { x: number; y: number };
  defaultSize?: { width: number; height: number };
  iconPos?: { x: number; y: number };
  onClose: (id: string) => void;
  onFocus: (id: string) => void;
  onMinimize: (id: string) => void;
  zIndex: number;
  isMinimized: boolean;
  isFocused: boolean;
}

type ResizeDir = 'n' | 'ne' | 'e' | 'se' | 's' | 'sw' | 'w' | 'nw';

const RESIZE_HANDLES: { dir: ResizeDir; style: React.CSSProperties }[] = [
  { dir: 'nw', style: { top: 0,    left: 0,    width: 8,  height: 8,  cursor: 'nw-resize' } },
  { dir: 'ne', style: { top: 0,    right: 0,   width: 8,  height: 8,  cursor: 'ne-resize' } },
  { dir: 'se', style: { bottom: 0, right: 0,   width: 8,  height: 8,  cursor: 'se-resize' } },
  { dir: 'sw', style: { bottom: 0, left: 0,    width: 8,  height: 8,  cursor: 'sw-resize' } },
  { dir: 'n',  style: { top: 0,    left: 8,    right: 8,  height: 4,  cursor: 'n-resize'  } },
  { dir: 's',  style: { bottom: 0, left: 8,    right: 8,  height: 4,  cursor: 's-resize'  } },
  { dir: 'e',  style: { top: 8,    bottom: 8,  right: 0,  width: 4,   cursor: 'e-resize'  } },
  { dir: 'w',  style: { top: 8,    bottom: 8,  left: 0,   width: 4,   cursor: 'w-resize'  } },
];

const MIN_W = 280;
const MIN_H = 160;

export default function Window({
  id,
  title,
  children,
  initialPosition,
  defaultSize,
  iconPos,
  onClose,
  onFocus,
  onMinimize,
  zIndex,
  isMinimized,
  isFocused,
}: WindowProps) {
  const isMobile = useRef(false);

  useEffect(() => {
    isMobile.current = window.innerWidth < 768;
  }, []);

  const getDefaultPos = () => {
    if (typeof window === 'undefined') return { x: 60, y: 40 };
    const w = defaultSize?.width ?? 640;
    const h = defaultSize?.height ?? 480;
    const availH = window.innerHeight - 30 - 38 - 40;
    const x = Math.max(20, (window.innerWidth - w) / 2);
    const y = Math.max(38, 30 + (availH - h) / 2);
    return initialPosition ?? { x, y };
  };

  const [position, setPosition] = useState(getDefaultPos);
  const [size, setSize] = useState(defaultSize ?? { width: 640, height: 480 });

  // ── Drag ────────────────────────────────────────────────────────────────
  const dragging = useRef(false);
  const dragOrigin = useRef({ mx: 0, my: 0, px: 0, py: 0 });

  const onTitleMouseDown = useCallback(
    (e: React.MouseEvent) => {
      if (isMobile.current) return;
      e.preventDefault();
      dragging.current = true;
      dragOrigin.current = { mx: e.clientX, my: e.clientY, px: position.x, py: position.y };
      onFocus(id);
      const move = (ev: MouseEvent) => {
        if (!dragging.current) return;
        setPosition({
          x: dragOrigin.current.px + ev.clientX - dragOrigin.current.mx,
          y: Math.max(30, dragOrigin.current.py + ev.clientY - dragOrigin.current.my),
        });
      };
      const up = () => {
        dragging.current = false;
        window.removeEventListener('mousemove', move);
        window.removeEventListener('mouseup', up);
      };
      window.addEventListener('mousemove', move);
      window.addEventListener('mouseup', up);
    },
    [id, position, onFocus],
  );

  // ── Resize ───────────────────────────────────────────────────────────────
  const resizeState = useRef<{
    dir: ResizeDir;
    startX: number; startY: number;
    startW: number; startH: number;
    startPX: number; startPY: number;
  } | null>(null);

  const onResizeMouseDown = useCallback(
    (e: React.MouseEvent, dir: ResizeDir) => {
      if (isMobile.current) return;
      e.preventDefault();
      e.stopPropagation();
      onFocus(id);
      resizeState.current = {
        dir,
        startX: e.clientX, startY: e.clientY,
        startW: size.width, startH: size.height,
        startPX: position.x, startPY: position.y,
      };
      const move = (ev: MouseEvent) => {
        const r = resizeState.current;
        if (!r) return;
        const dx = ev.clientX - r.startX;
        const dy = ev.clientY - r.startY;
        let w = r.startW, h = r.startH, x = r.startPX, y = r.startPY;

        if (r.dir.includes('e')) w = Math.max(MIN_W, r.startW + dx);
        if (r.dir.includes('s')) h = Math.max(MIN_H, r.startH + dy);
        if (r.dir.includes('w')) { w = Math.max(MIN_W, r.startW - dx); x = r.startPX + r.startW - w; }
        if (r.dir.includes('n')) { h = Math.max(MIN_H, r.startH - dy); y = Math.max(30, r.startPY + r.startH - h); }

        setSize({ width: w, height: h });
        setPosition({ x, y });
      };
      const up = () => {
        resizeState.current = null;
        window.removeEventListener('mousemove', move);
        window.removeEventListener('mouseup', up);
      };
      window.addEventListener('mousemove', move);
      window.addEventListener('mouseup', up);
    },
    [id, size, position, onFocus],
  );

  // transformOrigin points at the icon's screen position, relative to this window's top-left
  const originX = iconPos ? Math.round(iconPos.x - position.x) : Math.round(size.width / 2);
  const originY = iconPos ? Math.round(iconPos.y - position.y) : Math.round(size.height / 2);
  const transformOrigin = `${originX}px ${originY}px`;

  return (
    <motion.div
      style={{
        position: 'fixed',
        left: position.x,
        top: position.y,
        width: size.width,
        height: size.height,
        zIndex,
        transformOrigin,
        pointerEvents: isMinimized ? 'none' : 'auto',
      }}
      initial={{ scale: 0.04 }}
      animate={
        isMinimized
          ? { scale: 0.04, transition: { duration: 0.18, ease: [0.55, 0, 1, 0.45] } }
          : { scale: 1,    transition: { duration: 0.22, ease: [0.04, 0, 0.35, 1] } }
      }
      exit={{
        scale: [1, 1.03, 0.04] as unknown as number,
        transition: { duration: 0.22, times: [0, 0.12, 1], ease: 'easeIn' },
      }}
    >
      {/* Win95 dotted rubber-band outline */}
      <div
        aria-hidden
        style={{
          position: 'absolute', inset: 0,
          border: '2px dotted #000080',
          boxSizing: 'border-box',
          pointerEvents: 'none',
        }}
      />

      {/* Real window chrome */}
      <motion.div
        className={`os-window ${isFocused ? 'os-window--focused' : ''}`}
        style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}
        initial={{ opacity: 0 }}
        animate={{
          opacity: isMinimized ? 0 : 1,
          transition: isMinimized ? { duration: 0.06 } : { delay: 0.18, duration: 0.06 },
        }}
        onMouseDown={() => onFocus(id)}
      >
        <div
          className={`os-title-bar ${isFocused ? '' : 'os-title-bar--unfocused'}`}
          onMouseDown={onTitleMouseDown}
        >
          <div style={{ display: 'flex', gap: 2, marginRight: 4 }}>
            <button className="os-title-btn" onClick={(e) => { e.stopPropagation(); playClick(); onClose(id); }} title="Close">×</button>
            <button className="os-title-btn" onClick={(e) => { e.stopPropagation(); playClick(); onMinimize(id); }} title="Minimize">─</button>
            <button className="os-title-btn" onClick={(e) => { e.stopPropagation(); playClick(); }} title="Maximize">□</button>
          </div>
          <span className="os-title-label">{title}</span>
        </div>
        <div className="os-window-body">{children}</div>
      </motion.div>

      {/* Resize handles — invisible, cover edges and corners */}
      {RESIZE_HANDLES.map(({ dir, style }) => (
        <div
          key={dir}
          style={{ position: 'absolute', ...style, zIndex: 10 }}
          onMouseDown={(e) => onResizeMouseDown(e, dir)}
        />
      ))}
    </motion.div>
  );
}
