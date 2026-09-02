import Image from 'next/image';

import PortalCircles from '@/components/home/PortalCircles';
import Contributions from '@/components/home/Contributions';

const WORK = [
  {
    name: 'Sandbox Simulator',
    kind: 'World-building sim, founder',
    meta: '9,000+ users',
    logo: '/logos/sandbox.png',
  },
  {
    name: 'Zocratic MMA',
    kind: 'UFC fight predictions, 75% accuracy',
    meta: '4,000+ fighters',
    logo: '/logos/zocratic.png',
    href: 'https://www.zocraticmma.com',
  },
  {
    name: 'PostBridge',
    kind: 'Desktop scheduler for four social platforms',
    meta: 'Electron',
    mono: 'PB',
  },
];

const EXPERIENCE = [
  { role: 'Founder, full-stack',  at: 'Sandbox Simulator',       when: 'Oct 24 - now' },
  { role: 'Full-stack developer', at: 'Shake Shack (freelance)', when: 'Dec 25 - Feb 26' },
  { role: 'Full-stack developer', at: 'Saftech Designs',         when: 'Jan 23 - Apr 24' },
];

const STACK: [string, string][] = [
  ['Languages',  'Python, TypeScript, Java, C, SQL'],
  ['Frameworks', 'React, React Native, Next.js, FastAPI, Spring Boot, Electron'],
  ['Data',       'PostgreSQL, SQLite, Supabase, XGBoost'],
  ['Infra',      'AWS, Cloudflare, Docker, GitHub Actions'],
];

const SOCIALS = [
  { label: 'GitHub',   href: 'https://github.com/shariqsk',
    path: 'M12 2C6.5 2 2 6.6 2 12.2c0 4.5 2.9 8.3 6.8 9.7.5.1.7-.2.7-.5v-1.7c-2.8.6-3.4-1.4-3.4-1.4-.4-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.6 2.4 1.1 3 .9.1-.7.4-1.1.6-1.4-2.2-.3-4.6-1.2-4.6-5.1 0-1.1.4-2 1-2.7-.1-.3-.4-1.3.1-2.7 0 0 .8-.3 2.7 1a9 9 0 0 1 5 0c1.9-1.3 2.7-1 2.7-1 .5 1.4.2 2.4.1 2.7.6.7 1 1.6 1 2.7 0 3.9-2.4 4.8-4.6 5 .4.3.7.9.7 1.9v2.8c0 .3.2.6.7.5A10.2 10.2 0 0 0 22 12.2C22 6.6 17.5 2 12 2z' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/shariq-khan-430754217/',
    path: 'M6.9 21H3.4V9.2h3.5V21zM5.1 7.7A2 2 0 1 1 5.1 3.7a2 2 0 0 1 0 4zM21 21h-3.5v-5.7c0-1.4 0-3.2-2-3.2s-2.2 1.5-2.2 3.1V21H9.8V9.2h3.3v1.6h.1a3.7 3.7 0 0 1 3.3-1.8c3.5 0 4.2 2.3 4.2 5.3V21z' },
  { label: 'Email',    href: 'mailto:00khanshariq@gmail.com',
    path: 'M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4.2-8 5-8-5V6l8 5 8-5v2.2z' },
];

export default function Home() {
  return (
    <main className="home">
      <div className="home__shell">

        {/* ── Left rail ── */}
        <aside className="home__rail">
          <div className="home__name">Shariq Khan</div>
          <div className="home__role">Full-stack developer</div>

          <div className="home__where">Toronto, Canada</div>
          <div className="home__available"><i />Open to work</div>

          <div className="home__rail-actions">
            <a className="home__btn home__btn--solid" href="mailto:00khanshariq@gmail.com">Email</a>
            <a
              className="home__btn home__btn--line"
              href="/shariq-khan-resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
          </div>

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
        </aside>

        {/* ── Content ── */}
        <div className="home__main">

          <section className="home__section">
            <p className="home__lede">
              I study computer security at York University and build full-stack apps the
              rest of the time. Most of what I make ends up with real users:{' '}
              <b>a world-building sim with 9,000 registered accounts</b> and a model that
              predicts UFC fights.
            </p>
          </section>

          <section className="home__section">
            <div className="home__label">Work</div>
            <div className="home__list">
              {WORK.map((w) => {
                const inner = (
                  <>
                    {w.logo
                      ? <Image className="home__row-logo" src={w.logo} alt="" width={26} height={26} />
                      : <span className="home__row-mono">{w.mono}</span>}
                    <span>
                      <span className="home__row-name">{w.name}</span>
                      <span className="home__row-desc"> · {w.kind}</span>
                    </span>
                    <span className="home__row-meta">{w.meta}</span>
                  </>
                );

                return w.href ? (
                  <a key={w.name} className="home__row" href={w.href} target="_blank" rel="noopener noreferrer">
                    {inner}
                  </a>
                ) : (
                  <div key={w.name} className="home__row">{inner}</div>
                );
              })}
            </div>
          </section>

          <section className="home__section">
            <div className="home__label">Playground</div>
            <PortalCircles />
          </section>

          <section className="home__section">
            <div className="home__label">Experience</div>
            <div className="home__list">
              {EXPERIENCE.map((e) => (
                <div className="home__row" key={e.at} style={{ gridTemplateColumns: '1fr auto' }}>
                  <span>
                    <span className="home__row-name">{e.role}</span>
                    <span className="home__row-desc"> · {e.at}</span>
                  </span>
                  <span className="home__row-meta">{e.when}</span>
                </div>
              ))}
            </div>
          </section>

          <Contributions />

          <section className="home__section">
            <div className="home__label">Stack</div>
            {STACK.map(([key, val]) => (
              <div className="home__stack-row" key={key}>
                <span className="home__stack-key">{key}</span>
                <span className="home__stack-val">{val}</span>
              </div>
            ))}
          </section>

          <footer className="home__footer">
            <span>BSc Computer Security, York University · 2028</span>
            <span>
              <a href="/recruiter">Recruiter view</a>
              {' · '}
              <a href="https://shariqsk.github.io/" target="_blank" rel="noopener noreferrer">Blog</a>
            </span>
          </footer>

        </div>
      </div>
    </main>
  );
}
