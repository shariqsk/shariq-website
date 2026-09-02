'use client';

import { useEffect, useState } from 'react';

/* Resolves the name out of random glyphs, left to right. Renders the plain
   text on the server and starts scrambling after mount, so there's no
   hydration mismatch and no layout shift. */

const GLYPHS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#%&@$*<>/\\';
const DURATION = 900;
const SWAP = 55;   // ms between glyph swaps for unresolved characters

const randomGlyph = () => GLYPHS[Math.floor(Math.random() * GLYPHS.length)];

export default function ScrambleName({ text, delay = 0 }: { text: string; delay?: number }) {
  const [out, setOut] = useState(text);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const chars = [...text];
    /* Each character resolves at its own point along the run, ordered left
       to right with a little jitter so it doesn't march. */
    const thresholds = chars.map((c, i) =>
      c === ' ' ? 0 : (i / chars.length) * 0.7 + Math.random() * 0.22,
    );

    let frame = 0;
    let start = 0;
    let lastSwap = 0;
    let scrambled = chars.map((c) => (c === ' ' ? ' ' : randomGlyph()));

    const tick = (now: number) => {
      if (!start) start = now;

      const p = (now - start) / DURATION;
      const swap = now - lastSwap > SWAP;

      if (swap) lastSwap = now;

      setOut(
        chars
          .map((c, i) => {
            if (p >= thresholds[i] + 0.3 || c === ' ') return c;
            if (swap) scrambled[i] = randomGlyph();

            return scrambled[i];
          })
          .join(''),
      );

      if (p < 1.3) frame = requestAnimationFrame(tick);
      else setOut(text);
    };

    const timer = setTimeout(() => {
      frame = requestAnimationFrame(tick);
    }, delay);

    return () => {
      clearTimeout(timer);
      cancelAnimationFrame(frame);
    };
  }, [text, delay]);

  return <span className="home__name-text">{out}</span>;
}
