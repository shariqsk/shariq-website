'use client';

import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

/* Renders a neutral placeholder until mounted: the resolved theme isn't
   known during SSR, so drawing the icon early would flash the wrong one. */
export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const isLight = mounted && resolvedTheme === 'light';

  return (
    <button
      type="button"
      className="home__social home__theme"
      aria-label={isLight ? 'Switch to dark theme' : 'Switch to light theme'}
      onClick={() => setTheme(isLight ? 'dark' : 'light')}
    >
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" aria-hidden>
        {isLight ? (
          <path d="M20.5 14.6A8.5 8.5 0 0 1 9.4 3.5a8.5 8.5 0 1 0 11.1 11.1z" fill="currentColor" stroke="none" />
        ) : (
          <>
            <circle cx="12" cy="12" r="4.2" />
            <path d="M12 2.6v2.2M12 19.2v2.2M4.2 12H2M22 12h-2.2M5.9 5.9 4.4 4.4M19.6 19.6l-1.5-1.5M18.1 5.9l1.5-1.5M4.4 19.6l1.5-1.5" />
          </>
        )}
      </svg>
    </button>
  );
}
