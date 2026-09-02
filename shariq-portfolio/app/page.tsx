import PortalCircles from '@/components/home/PortalCircles';

const WORK = [
  {
    name: 'Zocratic MMA',
    href: 'https://zocraticmma.com',
    badge: '100+ users',
    desc: 'Sports analytics SaaS with an XGBoost win-probability model (~65% accuracy) trained on scraped UFC data for 4,000+ fighters.',
    stack: ['Next.js', 'FastAPI', 'PostgreSQL', 'XGBoost', 'AWS'],
  },
  {
    name: 'CDL Simulator',
    href: 'https://cdlsim.com',
    badge: '1,500+ visitors',
    desc: 'Esports management sim with Elo ratings, salary caps and playoff brackets on a FastAPI engine.',
    stack: ['React', 'TypeScript', 'FastAPI'],
  },
  {
    name: 'Social Desk',
    href: 'https://github.com/shariqsk',
    badge: 'Desktop app',
    desc: 'Electron app that posts to X, Facebook, Instagram and TikTok with per-account session isolation.',
    stack: ['Electron', 'React', 'SQLite', 'Playwright'],
  },
  {
    name: 'Phintic',
    href: 'https://github.com/shariqsk',
    badge: 'Open source',
    desc: 'Security education platform covering phishing, scamware and account takeover through simulation drills.',
    stack: ['React', 'TypeScript'],
  },
];

const EXPERIENCE: [string, string, string][] = [
  ['Dec 2025 — Feb 2026', 'Freelance Full-Stack Developer', 'Shake Shack'],
  ['Jun 2024 — Dec 2025', 'Import Analyst', 'Farrow'],
  ['Jan 2023 — Apr 2024', 'Web Developer', 'Saftech Designs'],
];

const LINKS = [
  { label: 'Email',    href: 'mailto:contact@shariqsafdarkhan.com', primary: true },
  { label: 'GitHub',   href: 'https://github.com/shariqsk' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/shariq-khan-430754217/' },
  { label: 'Blog',     href: 'https://shariqsk.github.io/' },
  { label: 'Resume',   href: 'https://drive.google.com/file/d/1l1aJcVBJBbIg0VPKc9LXyG9x5E3l0FIa/view' },
];

export default function Home() {
  return (
    <main className="home">
      <div className="home__glow" aria-hidden />

      <div className="home__inner">

        {/* ── Hero ── */}
        <header className="home__reveal">
          <span className="home__status">
            <span className="home__status-dot" />
            Open to opportunities · Toronto
          </span>
          <h1 className="home__name">Shariq Safdar Khan</h1>
          <p className="home__tagline">
            Full-stack developer and Computer Security student at York University.
            I build things people actually use.
          </p>
          <p className="home__meta">Toronto, Canada · Graduating 2027</p>
        </header>

        {/* ── Retro experiences ── */}
        <section
          className="home__section home__reveal"
          style={{ animationDelay: '0.05s' }}
        >
          <h2 className="home__section-label">Two other ways in</h2>
          <PortalCircles />
        </section>

        {/* ── About ── */}
        <section
          className="home__section home__prose home__reveal"
          style={{ animationDelay: '0.1s' }}
        >
          <h2 className="home__section-label">About</h2>
          <p>
            I write software across the whole stack — React and Next.js on the front,
            FastAPI and Node behind it, Postgres underneath — and I keep security
            baked in rather than bolted on afterwards.
          </p>
          <p>
            Most of what I build starts as a question I want answered: can a model call
            a fight better than the odds, can a customs process survive without paper.
            The ones that work end up with <strong>real users</strong>, which is the part
            I care about.
          </p>
        </section>

        {/* ── Selected work ── */}
        <section
          className="home__section home__reveal"
          style={{ animationDelay: '0.15s' }}
        >
          <h2 className="home__section-label">Selected work</h2>
          <div className="home__work">
            {WORK.map((p) => (
              <a
                key={p.name}
                className="home__work-item"
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="home__work-head">
                  <span className="home__work-name">{p.name}</span>
                  <span className="home__work-badge">{p.badge}</span>
                </div>
                <p className="home__work-desc">{p.desc}</p>
                <div className="home__stack">
                  {p.stack.map((s) => <span key={s}>{s}</span>)}
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* ── Experience ── */}
        <section
          className="home__section home__reveal"
          style={{ animationDelay: '0.2s' }}
        >
          <h2 className="home__section-label">Experience</h2>
          {EXPERIENCE.map(([when, role, where]) => (
            <div className="home__row" key={when}>
              <div className="home__row-when">{when}</div>
              <div className="home__row-what"><b>{role}</b> · {where}</div>
            </div>
          ))}
        </section>

        {/* ── Elsewhere ── */}
        <section
          className="home__section home__reveal"
          style={{ animationDelay: '0.25s' }}
        >
          <h2 className="home__section-label">Elsewhere</h2>
          <div className="home__links">
            {LINKS.map((l) => (
              <a
                key={l.label}
                className={`home__link${l.primary ? ' home__link--primary' : ''}`}
                href={l.href}
                target={l.href.startsWith('mailto:') ? undefined : '_blank'}
                rel="noopener noreferrer"
              >
                {l.label}
              </a>
            ))}
          </div>
        </section>

        <footer className="home__footer">
          <span>© {new Date().getFullYear()} Shariq Khan</span>
          <span>Built with Next.js</span>
        </footer>

      </div>
    </main>
  );
}
