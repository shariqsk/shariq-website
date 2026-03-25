'use client';

import { useRef, useState, useCallback, useEffect } from 'react';
import { motion } from 'framer-motion';

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
  const [size] = useState(defaultSize ?? { width: 640, height: 480 });

  const dragging = useRef(false);
  const origin = useRef({ mx: 0, my: 0, px: 0, py: 0 });

  const onTitleMouseDown = useCallback(
    (e: React.MouseEvent) => {
      if (isMobile.current) return;
      e.preventDefault();
      dragging.current = true;
      origin.current = { mx: e.clientX, my: e.clientY, px: position.x, py: position.y };
      onFocus(id);
      const move = (ev: MouseEvent) => {
        if (!dragging.current) return;
        setPosition({
          x: origin.current.px + ev.clientX - origin.current.mx,
          y: Math.max(30, origin.current.py + ev.clientY - origin.current.my),
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

  // transformOrigin points at the icon's screen position, relative to this window's top-left
  const originX = iconPos ? Math.round(iconPos.x - position.x) : Math.round(size.width / 2);
  const originY = iconPos ? Math.round(iconPos.y - position.y) : Math.round(size.height / 2);
  const transformOrigin = `${originX}px ${originY}px`;

  return (
    /*
     * ROOT — transparent wrapper; handles Win95 rubber-band scale from icon pos.
     * The dotted outline div inside is the "marching ants" box that shows while
     * scaling. The real window chrome fades in on top once the scale settles.
     */
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
      /* ── open: fast ease-out expand from icon, no spring ── */
      initial={{ scale: 0.04 }}
      animate={
        isMinimized
          ? { scale: 0.04, transition: { duration: 0.18, ease: [0.55, 0, 1, 0.45] } }
          : { scale: 1,    transition: { duration: 0.22, ease: [0.04, 0, 0.35, 1] } }
      }
      /* ── close: collapse back to icon with slight expand first ── */
      exit={{
        scale: [1, 1.03, 0.04] as unknown as number,
        transition: { duration: 0.22, times: [0, 0.12, 1], ease: 'easeIn' },
      }}
    >
      {/* Win95 dotted rubber-band outline — visible during scale, hidden under opaque window */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          inset: 0,
          border: '2px dotted #000080',
          boxSizing: 'border-box',
          pointerEvents: 'none',
        }}
      />

      {/* Real window chrome — snaps in after outline finishes expanding */}
      <motion.div
        className={`os-window ${isFocused ? 'os-window--focused' : ''}`}
        style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}
        initial={{ opacity: 0 }}
        animate={{
          opacity: isMinimized ? 0 : 1,
          transition: isMinimized
            ? { duration: 0.06 }
            : { delay: 0.18, duration: 0.06 },
        }}
        onMouseDown={() => onFocus(id)}
      >
        {/* Title bar */}
        <div
          className={`os-title-bar ${isFocused ? '' : 'os-title-bar--unfocused'}`}
          onMouseDown={onTitleMouseDown}
        >
          <div style={{ display: 'flex', gap: 2, marginRight: 4 }}>
            <button
              className="os-title-btn"
              onClick={(e) => { e.stopPropagation(); onClose(id); }}
              title="Close"
            >×</button>
            <button
              className="os-title-btn"
              onClick={(e) => { e.stopPropagation(); onMinimize(id); }}
              title="Minimize"
            >─</button>
            <button className="os-title-btn" title="Maximize">□</button>
          </div>
          <span className="os-title-label">{title}</span>
        </div>

        {/* Body */}
        <div className="os-window-body">{children}</div>
      </motion.div>
    </motion.div>
  );
}
