'use client';

import { useRef, useState, useCallback, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

export interface WindowProps {
  id: string;
  title: string;
  accentColor?: string;
  children: React.ReactNode;
  initialPosition?: { x: number; y: number };
  defaultSize?: { width: number; height: number };
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
  accentColor = '#4f8ef7',
  children,
  initialPosition,
  defaultSize,
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
    if (typeof window === 'undefined') return { x: 100, y: 60 };
    const w = defaultSize?.width ?? 700;
    const h = defaultSize?.height ?? 520;
    const x = Math.max(20, (window.innerWidth - w) / 2 + (Math.random() * 60 - 30));
    const y = Math.max(20, (window.innerHeight - h) / 2 + (Math.random() * 40 - 20));
    return initialPosition ?? { x, y };
  };

  const [position, setPosition] = useState(getDefaultPos);
  const [size] = useState(defaultSize ?? { width: 700, height: 520 });

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
          y: Math.max(0, origin.current.py + ev.clientY - origin.current.my),
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

  return (
    <AnimatePresence>
      {!isMinimized && (
        <motion.div
          key={id}
          initial={{ opacity: 0, scale: 0.92, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.88, y: 16 }}
          transition={{ duration: 0.18, ease: 'easeOut' }}
          className={`os-window ${isFocused ? 'os-window--focused' : ''}`}
          style={{
            left: position.x,
            top: position.y,
            width: size.width,
            height: size.height,
            zIndex,
            '--window-accent': accentColor,
          } as React.CSSProperties}
          onMouseDown={() => onFocus(id)}
        >
          {/* Title bar */}
          <div
            className={`os-title-bar ${isFocused ? '' : 'os-title-bar--unfocused'}`}
            onMouseDown={onTitleMouseDown}
          >
            <div style={{ display: 'flex', gap: 6 }}>
              <button
                className="os-title-btn os-title-btn--close"
                onClick={(e) => { e.stopPropagation(); onClose(id); }}
                title="Close"
              />
              <button
                className="os-title-btn os-title-btn--minimize"
                onClick={(e) => { e.stopPropagation(); onMinimize(id); }}
                title="Minimize"
              />
              <button
                className="os-title-btn os-title-btn--expand"
                title="Expand"
              />
            </div>

            <span className="os-title-label">{title}</span>

            {/* Empty right spacer to balance title */}
            <div style={{ width: 42 }} />
          </div>

          {/* Body */}
          <div className="os-window-body">{children}</div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
