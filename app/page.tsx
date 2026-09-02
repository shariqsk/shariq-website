import Link from 'next/link';

import Contributions from '@/components/home/Contributions';
import EntryList from '@/components/home/EntryList';
import Intro from '@/components/home/Intro';
import Petals from '@/components/home/Petals';
import ScrambleName from '@/components/home/ScrambleName';
import Status from '@/components/home/Status';
import ThemeToggle from '@/components/home/ThemeToggle';
import { EXPERIENCE, SOCIALS } from '@/components/home/data';

export default function Home() {
  return (
    <main className="home">
      <Intro />
      <Petals />

      <div className="home__shell">

        <header className="home__head">
          <div>
            <h1 className="home__name"><ScrambleName delay={950} text="Shariq Khan" /></h1>
            <div className="home__role">Founder &amp; full-stack developer, Toronto</div>
            <Status />
          </div>
          <div className="home__head-right">
            <div className="home__socials">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  className="home__social"
                  href={s.href}
                  aria-label={s.label}
                  target={s.href.startsWith('mailto:') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                >
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                    <path d={s.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </header>

        <section className="home__section home__section--first">
          <div className="home__label">Experience</div>
          <EntryList entries={EXPERIENCE} />
        </section>

        <Contributions />

        <Link className="home__next" href="/other">other</Link>

        <div className="home__theme-row">
          <ThemeToggle />
        </div>

      </div>
    </main>
  );
}
