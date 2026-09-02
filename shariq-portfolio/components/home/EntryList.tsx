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
  shot?: string;
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
            {/* The row toggles; the name stays a real link when there's
                somewhere to go, so it isn't buried in the open state. */}
            <div
              className="home__entry-head"
              role="button"
              tabIndex={0}
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? null : e.name)}
              onKeyDown={(ev) => {
                if (ev.key === 'Enter' || ev.key === ' ') {
                  ev.preventDefault();
                  setOpen(isOpen ? null : e.name);
                }
              }}
            >
              {e.logo
                ? <Image className="home__row-logo" src={e.logo} alt="" width={26} height={26} />
                : <span className="home__row-mono">{e.mono}</span>}

              <span className="home__entry-titles">
                {e.href ? (
                  <a
                    className="home__row-name home__row-name--link"
                    href={e.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(ev) => ev.stopPropagation()}
                  >
                    {e.name}
                    <svg width="9" height="9" viewBox="0 0 10 10" fill="none" aria-hidden>
                      <path d="M3 7l4-4M3.6 3H7v3.4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                ) : (
                  <span className="home__row-name">{e.name}</span>
                )}
                <span className="home__row-desc">{e.role}</span>
              </span>

              <span className="home__row-meta">{e.meta}</span>

              <svg className="home__entry-chevron" width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden>
                <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>

            <div className="home__entry-body">
              <div className="home__entry-body-inner">
                <ul className="home__points">
                  {e.points.map((p) => <li key={p}>{p}</li>)}
                </ul>

                {e.shot && (
                  <div className="home__shot">
                    <Image src={e.shot} alt={`${e.name} screenshot`} width={960} height={540} />
                  </div>
                )}

                {e.stack && (
                  <div className="home__entry-foot">
                    {e.stack.map((t) => <span key={t} className="home__tag">{t}</span>)}
                    {e.href && (
                      <a className="home__entry-link" href={e.href} target="_blank" rel="noopener noreferrer">
                        {e.href.replace(/^https?:\/\/(www\.)?/, '')} ↗
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
