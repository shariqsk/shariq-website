'use client';

import { useEffect, useRef, useState } from 'react';

import { loadPalette } from './palettes';

const STATES = [
  'available for work',
  'building sandbox simulator',
  'open to new projects',
];

const SHAPES = '◆◇▲△●○■□✦✧❖✳❀✿⬢▚◈';
const HOLD = 4200;    // ms a state stays up
const MORPH = 520;    // ms to scramble from one state to the next

const glyph = () => SHAPES[Math.floor(Math.random() * SHAPES.length)];

export default function Status() {
  const [color, setColor] = useState('#4ade80');
  const [label, setLabel] = useState(STATES[0]);
  const index = useRef(0);

  useEffect(() => {
    setColor(loadPalette().colors[2]);
  }, []);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let frame = 0;
    let timer: ReturnType<typeof setTimeout>;

    const morph = () => {
      const from = STATES[index.current];

      index.current = (index.current + 1) % STATES.length;

      const to = STATES[index.current];
      const width = Math.max(from.length, to.length);
      const start = performance.now();

      const step = (now: number) => {
        const p = Math.min(1, (now - start) / MORPH);
        const cut = Math.round(p * width);

        setLabel(
          Array.from({ length: width }, (_, i) => {
            if (i < cut) return to[i] ?? '';
            if (Math.random() < 0.55) return glyph();

            return from[i] ?? ' ';
          }).join(''),
        );

        if (p < 1) frame = requestAnimationFrame(step);
        else {
          setLabel(to);
          timer = setTimeout(morph, HOLD);
        }
      };

      frame = requestAnimationFrame(step);
    };

    timer = setTimeout(morph, HOLD);

    return () => {
      clearTimeout(timer);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <a
      className="home__status"
      href="mailto:00khanshariq@gmail.com"
      style={{
        '--status': color,
        '--status-bg': `${color}14`,
        '--status-line': `${color}59`,
      } as React.CSSProperties}
    >
      <span className="home__status-dot" />
      <span className="home__status-text">{label}</span>
    </a>
  );
}
