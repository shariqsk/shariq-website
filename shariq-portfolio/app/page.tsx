import EntryList from '@/components/home/EntryList';
import PortalCircles from '@/components/home/PortalCircles';
import Contributions from '@/components/home/Contributions';

import type { Entry } from '@/components/home/EntryList';

const EXPERIENCE: Entry[] = [
  {
    name: 'Sandbox Simulator',
    role: 'Founder, full-stack',
    meta: 'Oct 24 - now',
    logo: '/logos/sandbox.png',
    href: 'https://sandboxsimulator.com',
    stack: ['FastAPI', 'PostgreSQL', 'Cloudflare'],
    points: [
      'Built and shipped a sandbox world-building platform; grew it to 9,000+ registered users and 20,000+ weekly visitors, monetized through a paid tier.',
      'Stateful FastAPI and PostgreSQL backend running the simulation engine, persistent user worlds and authenticated accounts across concurrent sessions.',
      'Cloudflare edge caching, per-IP rate limiting and DDoS protection absorbed a 10x overnight traffic surge with zero downtime, as sole on-call engineer.',
    ],
  },
  {
    name: 'Shake Shack',
    role: 'Full-stack developer, freelance',
    meta: 'Dec 25 - Feb 26',
    logo: '/logos/shakeshack.png',
    stack: ['React Native', 'Spring Boot', 'AWS S3'],
    points: [
      'Led requirements gathering with the head of technology for ReceiptGuard, a receipt validation platform, and defined its architecture, threat model and scope.',
      'React Native app capturing GPS-tagged, timestamped photo evidence at each order handoff; one codebase shipped to iOS and Android.',
      'Spring Boot REST API validating submissions and writing immutable records to S3, creating a tamper-evident chargeback trail across tens of thousands of daily orders.',
    ],
  },
  {
    name: 'Saftech Designs',
    role: 'Full-stack developer',
    meta: 'Jan 23 - Apr 24',
    mono: 'SD',
    stack: ['Next.js', 'CSP / HSTS'],
    points: [
      'Audited 15+ API endpoints, hardened authentication and added security headers with enforced rate limiting.',
      'Rebuilt the platform in Next.js, migrating off a legacy CMS that could no longer be securely patched.',
      'Code splitting, lazy loading and image compression cut page load time by 75%.',
    ],
  },
];

const PROJECTS: Entry[] = [
  {
    name: 'Zocratic MMA',
    role: 'UFC fight predictions',
    meta: '4,000+ fighters',
    logo: '/logos/zocratic.png',
    href: 'https://www.zocraticmma.com',
    stack: ['Python', 'XGBoost', 'FastAPI'],
    points: [
      'Python ETL pipeline scraping and normalizing statistics for 4,000+ UFC fighters into PostgreSQL, with engineered features for strike differentials, takedown rates and finish tendencies.',
      'XGBoost classifier at 75% held-out accuracy, served through FastAPI with automated daily retraining and a paid subscription tier.',
    ],
  },
  {
    name: 'PostBridge',
    role: 'Desktop social scheduler',
    meta: 'Electron',
    mono: 'PB',
    href: 'https://github.com/shariqsk',
    stack: ['Electron', 'TypeScript', 'Playwright', 'SQLite'],
    points: [
      'One Electron and React codebase ships to Windows and macOS for drafting, scheduling and publishing content across four platforms.',
      'Playwright automation drives each platform\u2019s publishing flow, with platform-specific media rules and isolated per-account sessions in SQLite to prevent cross-account leakage.',
    ],
  },
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

        {/* ── Header ── */}
        <header className="home__head">
          <div>
            <div className="home__name">Shariq Khan</div>
            <div className="home__role">Full-stack developer, Toronto</div>
            <div className="home__available"><i />Open to work</div>
          </div>
          <div className="home__head-right">
            <nav className="home__nav">
              <a href="/projects">Projects</a>
              <a href="/recruiter">Recruiter</a>
              <a href="https://shariqsk.github.io/" target="_blank" rel="noopener noreferrer">Blog</a>
            </nav>
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

        <p className="home__lede">
          I&apos;m a full-stack developer in Toronto. Right now I&apos;m scaling{' '}
          <b>Sandbox Simulator</b>, a world-building sim I built and run, to 9,000
          registered users and 20,000 weekly visitors.
        </p>
        <p className="home__lede">
          Alongside it I run Zocratic MMA, which predicts UFC fights, and PostBridge,
          a desktop scheduler. I build with security in mind because that&apos;s what
          I studied.
        </p>

        <div className="home__actions">
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

        <section className="home__section home__section--first">
          <div className="home__label">Experience</div>
          <EntryList entries={EXPERIENCE} />
        </section>

        <section className="home__section">
          <div className="home__label">Projects</div>
          <EntryList entries={PROJECTS} />
        </section>

        <section className="home__section">
          <div className="home__label">Playground</div>
          <PortalCircles />
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
          <span className="home__footer-links">
            <a href="/projects">Projects</a>
            <a href="/recruiter">Recruiter</a>
            <a href="/os">SK-OS</a>
            <a href="/xmb">XMB</a>
            <a href="https://github.com/shariqsk" target="_blank" rel="noopener noreferrer">GitHub</a>
          </span>
        </footer>

      </div>
    </main>
  );
}
