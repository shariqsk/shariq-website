'use client';

import { useEffect, useState } from 'react';

import { loadPalette } from './palettes';

/* Availability line. The dot takes the load's palette colour. */
export default function Status() {
  const [color, setColor] = useState('#4ade80');

  useEffect(() => {
    setColor(loadPalette().colors[2]);
  }, []);

  return (
    <a
      className="home__status"
      href="mailto:00khanshariq@gmail.com"
      style={{ '--status': color } as React.CSSProperties}
    >
      <span className="home__status-dot" />
      Available for work
    </a>
  );
}
