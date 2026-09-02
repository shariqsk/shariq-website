'use client';

import { useEffect, useState } from 'react';

import { loadPalette } from './palettes';

/* Status line: a live pulsing dot in the load's palette colour, the label
   set in mono with a blinking caret, and the whole thing is a mailto. */
export default function Status() {
  const [color, setColor] = useState<string | null>(null);

  useEffect(() => {
    setColor(loadPalette().colors[2]);
  }, []);

  return (
    <a
      className="home__status"
      href="mailto:00khanshariq@gmail.com"
      style={color ? ({ '--status': color } as React.CSSProperties) : undefined}
    >
      <span className="home__status-dot" />
      <span className="home__status-text">available for work</span>
      <span className="home__status-caret" />
    </a>
  );
}
