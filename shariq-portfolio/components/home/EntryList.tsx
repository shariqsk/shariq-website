'use client';

import { useState } from 'react';
import Image from 'next/image';

export interface Entry {
  name: string;
  role: string;
  meta: string;
  logo?: string;
  mono?: string;
  href?: string;
  stack?: string[];
  points: string[];
}

/* Rows stay one line until you open one. The detail is the actual work,
   so the page reads as a summary and rewards a click rather than dumping
   three paragraphs per entry up front. */
export default function EntryList({ entries }: { entries: Entry[] }) {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <div className="home__list">
      {entries.map((e) => {
        const isOpen = open === e.name;

        return (
          <div key={e.name} className={`home__entry${isOpen ? ' home__entry--open' : ''}`}>
            <button
              type="button"
              className="home__entry-head"
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? null : e.name)}
            >
              {e.logo
                ? <Image className="home__row-logo" src={e.logo} alt="" width={26} height={26} />
                : <span className="home__row-mono">{e.mono}</span>}

              <span className="home__entry-titles">
                <span className="home__row-name">{e.name}</span>
                <span className="home__row-desc">{e.role}</span>
              </span>

              <span className="home__row-meta">{e.meta}</span>

              <svg className="home__entry-chevron" width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden>
                <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            <div className="home__entry-body">
              <div className="home__entry-body-inner">
                <ul className="home__points">
                  {e.points.map((p) => <li key={p}>{p}</li>)}
                </ul>

                {(e.stack || e.href) && (
                  <div className="home__entry-foot">
                    {e.stack?.map((t) => <span key={t} className="home__tag">{t}</span>)}
                    {e.href && (
                      <a className="home__entry-link" href={e.href} target="_blank" rel="noopener noreferrer">
                        Visit ↗
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
