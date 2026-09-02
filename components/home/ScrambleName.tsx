'use client';

import { useEffect, useState } from 'react';

import { loadPalette } from './palettes';

/* The name resolves out of coloured shape glyphs, left to right. Plain text
   is rendered on the server and the scramble starts after mount, so there's
   no hydration mismatch. */

const SHAPES = '◆◇▲△●○■□✦✧❖✳❀✿❁⬢⬡▚▞◈◐◑';
const DURATION = 850;
const SWAP = 60;   // ms between glyph swaps for unresolved characters

interface Cell {
  char: string;
  glyph: string;
  color: string;
  done: boolean;
}

export default function ScrambleName({ text, delay = 0 }: { text: string; delay?: number }) {
  const [cells, setCells] = useState<Cell[] | null>(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const palette = loadPalette().colors;
    const chars = [...text];
    const pick = () => ({
      glyph: SHAPES[Math.floor(Math.random() * SHAPES.length)],
      color: palette[Math.floor(Math.random() * palette.length)],
    });

    /* Each character resolves at its own point along the run, ordered left
       to right with jitter so it doesn't march. */
    const thresholds = chars.map((c, i) =>
      c === ' ' ? 0 : (i / chars.length) * 0.62 + Math.random() * 0.2,
    );

    let state: Cell[] = chars.map((c) => ({ char: c, ...pick(), done: c === ' ' }));

    setCells(state);

    let frame = 0;
    let start = 0;
    let lastSwap = 0;

    const tick = (now: number) => {
      if (!start) start = now;

      const p = (now - start) / DURATION;
      const swap = now - lastSwap > SWAP;

      if (swap) lastSwap = now;

      state = state.map((cell, i) => {
        if (cell.done) return cell;
        if (p >= thresholds[i] + 0.32) return { ...cell, done: true };

        return swap ? { ...cell, ...pick() } : cell;
      });

      setCells(state);

      if (p < 1.35) frame = requestAnimationFrame(tick);
      else setCells(null);
    };

    const timer = setTimeout(() => {
      frame = requestAnimationFrame(tick);
    }, delay);

    return () => {
      clearTimeout(timer);
      cancelAnimationFrame(frame);
    };
  }, [text, delay]);

  if (!cells) return <span className="home__name-text">{text}</span>;

  return (
    <span className="home__name-text">
      {cells.map((cell, i) =>
        cell.done ? (
          <span key={i}>{cell.char}</span>
        ) : (
          <span key={i} className="home__name-glyph" style={{ color: cell.color }}>
            {cell.glyph}
          </span>
        ),
      )}
    </span>
  );
}
