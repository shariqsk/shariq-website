import { Metadata } from 'next';
import Link from 'next/link';

import EntryList from '@/components/home/EntryList';
import Petals from '@/components/home/Petals';
import PortalCircles from '@/components/home/PortalCircles';
import ThemeToggle from '@/components/home/ThemeToggle';
import { EDUCATION, PROJECTS, STACK } from '@/components/home/data';

export const metadata: Metadata = {
  title: 'Everything else',
  description: 'Projects, education, stack, and the retro versions of this site.',
};

export default function Other() {
  return (
    <main className="home">
      <Petals />

      <div className="home__shell">

        <Link className="home__back" href="/">
          <svg width="13" height="13" viewBox="0 0 14 14" fill="none" aria-hidden>
            <path d="M11 7H3M6.5 3.5 3 7l3.5 3.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Shariq Khan
        </Link>

        <div className="home__other-tools">
          <ThemeToggle />
        </div>

        <section className="home__section home__section--first">
          <div className="home__label">Projects</div>
          <EntryList entries={PROJECTS} />
        </section>

        <section className="home__section">
          <div className="home__label">Education</div>
          <EntryList entries={EDUCATION} />
        </section>

        <section className="home__section">
          <div className="home__label">Playground</div>
          <PortalCircles />
        </section>

        <section className="home__section">
          <div className="home__label">Stack</div>
          {STACK.map(([key, val]) => (
            <div className="home__stack-row" key={key}>
              <span className="home__stack-key">{key}</span>
              <span className="home__stack-val">{val}</span>
            </div>
          ))}
        </section>

      </div>
    </main>
  );
}
