'use client';

import { useState } from 'react';

/* Everything past experience and contributions lives behind one quiet
   toggle, so the page stays short but nothing had to be deleted. */
export default function More({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
    <div className={`home__more${open ? ' home__more--open' : ''}`}>
      <button
        type="button"
        className="home__more-btn"
        aria-expanded={open}
        onClick={() => setOpen(!open)}
      >
        {open ? 'Less' : 'Other'}
        <svg width="11" height="11" viewBox="0 0 12 12" fill="none" aria-hidden>
          <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      <div className="home__more-body">
        <div className="home__more-inner">{children}</div>
      </div>
    </div>
  );
}
