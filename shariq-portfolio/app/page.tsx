import PortalCircles from '@/components/home/PortalCircles';

/* href is optional: a project with no confirmed public URL renders as plain
   text rather than guessing a link. */
const PROJECTS: { name: string; href?: string; desc: string; meta: string }[] = [
  { name: 'Sandbox Simulator', desc: 'World-building sim you can leave running',              meta: '9,000+ users' },
  { name: 'Zocratic MMA', href: 'https://zocraticmma.com', desc: 'UFC fight predictions, 75% held-out accuracy', meta: '4,000+ fighters' },
  { name: 'PostBridge',        desc: 'Desktop app that schedules posts to four platforms',    meta: 'Electron' },
];

const EXPERIENCE = [
  { role: 'Founder, full-stack',  at: 'Sandbox Simulator',      when: 'Oct 24 - now' },
  { role: 'Full-stack developer', at: 'Shake Shack (freelance)', when: 'Dec 25 - Feb 26' },
  { role: 'Full-stack developer', at: 'Saftech Designs',         when: 'Jan 23 - Apr 24' },
];

const SKILLS: [string, string[]][] = [
  ['Languages',  ['Python', 'TypeScript', 'Java', 'C', 'SQL', 'Bash']],
  ['Frameworks', ['React', 'React Native', 'Next.js', 'FastAPI', 'Spring Boot', 'Electron']],
  ['Data',       ['PostgreSQL', 'SQLite', 'Supabase', 'XGBoost', 'Pandas']],
  ['Infra',      ['AWS', 'Cloudflare', 'Docker', 'GitHub Actions']],
  ['Security',   ['Auth', 'CSP / HSTS', 'Rate limiting', 'JUnit']],
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
      <div className="home__inner">

        <header className="home__head">
          <div>
            <div className="home__name">Shariq Khan</div>
            <div className="home__role">Full-stack developer</div>
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
        </header>

        <section className="home__intro">
          <p>
            hey, I&apos;m Shariq. I study computer security at{' '}
            <a href="https://www.yorku.ca/" target="_blank" rel="noopener noreferrer">York University</a>{' '}
            in Toronto, graduating 2028, and build full-stack apps the rest of the time.
          </p>
          <p>
            Mostly Sandbox Simulator, a world-building sim I started that&apos;s up to
            9,000 registered users, and{' '}
            <a href="https://zocraticmma.com" target="_blank" rel="noopener noreferrer">Zocratic MMA</a>,
            which predicts UFC fights. I&apos;m open to work.
          </p>
          <div className="home__actions">
            <a className="home__btn" href="mailto:00khanshariq@gmail.com">Email me</a>
            <a
              className="home__btn home__btn--ghost"
              href="/shariq-khan-resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
          </div>
        </section>

        <section className="home__section">
          <div className="home__section-head">
            <h2 className="home__section-title">Playground</h2>
            <span className="home__section-note">same site, older hardware</span>
          </div>
          <PortalCircles />
        </section>

        <section className="home__section">
          <div className="home__section-head">
            <h2 className="home__section-title">Projects</h2>
            <a className="home__section-note" href="/projects">All projects</a>
          </div>
          {PROJECTS.map((p) => {
            const inner = (
              <>
                <span className="home__proj-name">{p.name}</span>
                <span className="home__proj-desc">{p.desc}</span>
                <span className="home__proj-meta">{p.meta}</span>
              </>
            );

            return p.href ? (
              <a key={p.name} className="home__proj" href={p.href} target="_blank" rel="noopener noreferrer">
                {inner}
              </a>
            ) : (
              <div key={p.name} className="home__proj">{inner}</div>
            );
          })}
        </section>

        <section className="home__section">
          <div className="home__section-head">
            <h2 className="home__section-title">Experience</h2>
            <a className="home__section-note" href="/recruiter">Full version</a>
          </div>
          {EXPERIENCE.map((e) => (
            <div key={e.at} className="home__row">
              <span className="home__row-role">{e.role}</span>
              <span className="home__row-at">{e.at}</span>
              <span className="home__row-when">{e.when}</span>
            </div>
          ))}
        </section>

        <section className="home__section">
          <div className="home__section-head">
            <h2 className="home__section-title">Skills</h2>
          </div>
          <div className="home__skills">
            {SKILLS.map(([key, vals]) => (
              <div key={key} className="home__skill-row">
                <span className="home__skill-key">{key}</span>
                <span className="home__skill-vals">
                  {vals.map((v) => <span key={v}>{v}</span>)}
                </span>
              </div>
            ))}
          </div>
        </section>

        <footer className="home__footer">
          <span>Toronto, Canada</span>
          <a href="https://shariqsk.github.io/" target="_blank" rel="noopener noreferrer">Blog</a>
        </footer>

      </div>
    </main>
  );
}
