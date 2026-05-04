'use client';

import Link from 'next/link';

const EXPERIENCE = [
  {
    company: 'Shake Shack',
    role: 'Freelance Full-Stack Developer',
    period: 'Dec 2025 – Feb 2026',
    location: '',
    stack: ['React Native', 'Spring Boot', 'AWS S3'],
    bullets: [
      'Led requirements gathering with store operations managers to scope ReceiptGuard across the mobile client, Spring Boot API, and AWS S3.',
      'Built a React Native app for iOS and Android capturing GPS-tagged, timestamped photo evidence at each order handoff from one shared codebase.',
      'Designed a Java Spring Boot REST API storing immutable AWS S3 records for a tamper-evident chargeback trail across tens of thousands of daily orders.',
      'Wrote 40+ JUnit tests covering data integrity, access control, and error handling; handed off the system with zero onboarding issues.',
    ],
  },
  {
    company: 'Saftech Designs',
    role: 'Full-Stack Developer',
    period: 'Jan 2023 – Apr 2024',
    location: '',
    stack: ['Next.js', 'Security Hardening', 'Performance'],
    bullets: [
      'Cut page load from about 4 seconds to under 1 second through code splitting, lazy loading, image compression, and render-blocking script removal.',
      'Audited 15+ API endpoints and hardened authentication, security headers, and rate limiting to reduce common web vulnerability exposure.',
      'Rebuilt the platform in Next.js, migrating off a legacy CMS with security limitations that could no longer be patched effectively.',
    ],
  },
];

const PROJECTS = [
  { name: 'Zocratic MMA', tagline: 'UFC fight prediction platform', desc: 'Built and monetized a subscription platform end-to-end. Python ETL scraped and normalized stats for 4,000+ UFC fighters into PostgreSQL, and an XGBoost classifier now reaches 75% win-prediction accuracy with automated daily retraining.', stack: ['Next.js', 'FastAPI', 'PostgreSQL', 'XGBoost', 'AWS', 'Python'], href: 'https://zocraticmma.com', badge: '30+ users', accent: '#0d9488' },
  { name: 'PostBridge', tagline: 'Social media scheduling desktop app', desc: 'Electron and React desktop app for drafting, scheduling, and publishing to X, Facebook, Instagram, and TikTok from one interface. Uses Playwright automation against real web UIs with per-account SQLite session isolation.', stack: ['Electron', 'React', 'TypeScript', 'SQLite', 'Playwright'], href: 'https://github.com/shariqsk/allinonesocials', badge: 'Windows + Mac', accent: '#7c3aed' },
  { name: 'CDL Manager', tagline: 'Call of Duty League fantasy simulator', desc: 'Full-stack fantasy simulation platform based on real CDL rules. FastAPI backend handles match outcomes, standings, contracts, and roster logic for a React and TypeScript frontend with consistent multi-session state.', stack: ['React', 'TypeScript', 'FastAPI', 'Python'], href: 'https://cdlsimulator.com', badge: '10,000+ visitors', accent: '#b45309' },
];

const SKILLS: [string, string[]][] = [
  ['Languages',  ['Python', 'Java', 'C', 'SQL', 'JavaScript', 'TypeScript', 'Bash', 'HTML', 'CSS']],
  ['Frameworks & Tools', ['React', 'React Native', 'Next.js', 'Node.js', 'FastAPI', 'Spring Boot', 'Electron']],
  ['Data / ML',  ['PostgreSQL', 'Supabase', 'SQLite', 'XGBoost', 'Pandas']],
  ['Cloud / Infra', ['AWS (S3, Cognito)', 'Docker', 'GitHub Actions']],
  ['Testing / Automation', ['Playwright', 'JUnit']],
];

const teal = '#2dd4bf';
const G = { bg: 'rgba(255,255,255,0.04)', br: '1px solid rgba(255,255,255,0.09)', r: 14 };

export default function RecruiterPage() {
  return (
    <div style={{
      position: 'fixed', inset: 0, overflowY: 'auto', scrollBehavior: 'smooth',
      background: 'linear-gradient(160deg, #09171f 0%, #0e2535 50%, #142f40 100%)',
      color: '#e2e8f0',
      fontFamily: "'Segoe UI', system-ui, -apple-system, sans-serif",
      lineHeight: 1.6, fontSize: 14,
    }}>

      <style>{`
        @media (max-width: 768px) {
          .r-hero { grid-template-columns: 1fr !important; min-height: unset !important; }
          .r-hero-left { padding: 100px 24px 40px !important; border-right: none !important; }
          .r-hero-right { padding: 0 24px 60px !important; }
          .r-hero-stats { grid-template-columns: 1fr 1fr !important; }
          .r-exp { padding: 48px 24px !important; }
          .r-exp-main { grid-template-columns: 1fr !important; }
          .r-exp-main-bullets:nth-child(3) { display: none !important; }
          .r-exp-side { grid-template-columns: 1fr !important; gap: 10px !important; }
          .r-exp-side-card { grid-template-columns: 1fr !important; }
          .r-proj { padding: 0 24px 60px !important; }
          .r-proj-grid { grid-template-columns: 1fr !important; grid-template-rows: unset !important; min-height: unset !important; }
          .r-proj-grid > * { grid-column: unset !important; grid-row: unset !important; }
          .r-skills { padding: 0 24px 60px !important; }
          .r-skills-grid { grid-template-columns: 1fr !important; }
          .r-skills-lang { grid-column: unset !important; }
          .r-skills-front { grid-column: unset !important; }
          .r-edu { padding: 0 24px 80px !important; grid-template-columns: 1fr !important; }
          .r-cta-inner { grid-template-columns: 1fr !important; }
          .r-nav-links { display: none !important; }
          .r-nav { min-width: unset !important; }
        }
      `}</style>

      {/* ── Floating Nav ── */}
      <div style={{ position: 'fixed', top: 20, left: 0, right: 0, zIndex: 50, display: 'flex', justifyContent: 'center', pointerEvents: 'none' }}>
        <nav className="r-nav" style={{
          pointerEvents: 'auto', display: 'flex', alignItems: 'center', gap: 4,
          background: 'rgba(8,20,28,0.85)', backdropFilter: 'blur(24px)',
          border: '1px solid rgba(255,255,255,0.1)', borderRadius: 999,
          padding: '10px 14px', minWidth: 680,
          boxShadow: '0 8px 40px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.05)',
        }}>
          <Link href="/" style={{ color: '#64748b', textDecoration: 'none', fontSize: 14, display: 'flex', alignItems: 'center', gap: 6, padding: '8px 20px', borderRadius: 999, transition: 'color 0.12s, background 0.12s' }}
            onMouseEnter={e => { e.currentTarget.style.color = '#fff'; e.currentTarget.style.background = 'rgba(255,255,255,0.07)'; }}
            onMouseLeave={e => { e.currentTarget.style.color = '#64748b'; e.currentTarget.style.background = 'transparent'; }}
          >
            <svg width="11" height="11" viewBox="0 0 13 13" fill="none"><path d="M8.5 1.5L3.5 6.5l5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
            Back
          </Link>
          <div style={{ width: 1, height: 16, background: 'rgba(255,255,255,0.1)', margin: '0 6px' }} />
          <div className="r-nav-links" style={{ display: 'flex', gap: 2 }}>
            {['Experience', 'Projects', 'Skills', 'Education'].map(s => (
              <a key={s} href={`#${s.toLowerCase()}`} style={{ fontSize: 14, color: '#64748b', textDecoration: 'none', padding: '8px 20px', borderRadius: 999, transition: 'color 0.12s, background 0.12s' }}
                onMouseEnter={e => { e.currentTarget.style.color = '#fff'; e.currentTarget.style.background = 'rgba(255,255,255,0.07)'; }}
                onMouseLeave={e => { e.currentTarget.style.color = '#64748b'; e.currentTarget.style.background = 'transparent'; }}
              >{s}</a>
            ))}
          </div>
          <div style={{ width: 1, height: 16, background: 'rgba(255,255,255,0.1)', margin: '0 6px' }} />
          <a href="https://drive.google.com/file/d/1OR1LvVnBO5A61yTYNxE0aM3IxmpCDv4g/view?usp=sharing" target="_blank" rel="noopener noreferrer"
            style={{ fontSize: 14, color: '#fff', textDecoration: 'none', padding: '8px 24px', background: teal, borderRadius: 999, fontWeight: 600, transition: 'opacity 0.15s' }}
            onMouseEnter={e => (e.currentTarget.style.opacity = '0.8')}
            onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
          >Resume ↗</a>
        </nav>
      </div>

      {/* ══════ HERO — 60/40 split, name fills left, rich card on right ══════ */}
      <section className="r-hero" style={{ display: 'grid', gridTemplateColumns: '60fr 40fr', minHeight: '100vh', alignItems: 'stretch' }}>

        {/* Left: name block */}
        <div className="r-hero-left" style={{ padding: '130px 64px 80px 72px', display: 'flex', flexDirection: 'column', justifyContent: 'center', borderRight: '1px solid rgba(255,255,255,0.06)' }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 7, fontSize: 11, fontWeight: 600, color: teal, textTransform: 'uppercase', letterSpacing: '0.12em', background: 'rgba(45,212,191,0.08)', border: '1px solid rgba(45,212,191,0.2)', borderRadius: 999, padding: '5px 14px', marginBottom: 40, alignSelf: 'flex-start' }}>
            <span style={{ width: 5, height: 5, borderRadius: '50%', background: teal, boxShadow: `0 0 6px ${teal}`, display: 'inline-block' }} />
            Available for hire · Toronto
          </span>
          <h1 style={{ fontSize: 'clamp(80px, 9vw, 130px)', fontWeight: 900, color: '#fff', lineHeight: 0.92, margin: '0 0 32px', letterSpacing: '-0.04em' }}>
            Shariq<br />
            <span style={{ WebkitTextStroke: '2px rgba(255,255,255,0.3)', color: 'transparent' }}>Khan.</span>
          </h1>
          <div style={{ height: 1, background: `linear-gradient(to right, ${teal}, rgba(45,212,191,0.3) 50%, transparent)`, marginBottom: 32, opacity: 0.6 }} />
          <p style={{ fontSize: 18, color: '#94a3b8', maxWidth: 520, lineHeight: 1.75, margin: '0 0 36px' }}>
            Full-stack developer and York University cybersecurity student building products with real usage, measurable performance gains, and production-level security discipline.
          </p>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            <a href="mailto:00khanshariq@gmail.com" style={{ fontSize: 13, color: '#fff', textDecoration: 'none', padding: '10px 22px', background: teal, borderRadius: 8, fontWeight: 600, transition: 'opacity 0.15s' }}
              onMouseEnter={e => (e.currentTarget.style.opacity = '0.8')} onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
            >Email me</a>
            <a href="https://www.linkedin.com/in/shariq-khan-430754217/" target="_blank" rel="noopener noreferrer" style={{ fontSize: 13, color: '#94a3b8', textDecoration: 'none', padding: '10px 22px', border: '1px solid rgba(255,255,255,0.18)', borderRadius: 8, transition: 'all 0.15s' }}
              onMouseEnter={e => { e.currentTarget.style.color = '#fff'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.45)'; }}
              onMouseLeave={e => { e.currentTarget.style.color = '#94a3b8'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.18)'; }}
            >LinkedIn ↗</a>
          </div>
        </div>

        {/* Right: info panel */}
        <div className="r-hero-right" style={{ padding: '130px 72px 80px 64px', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 24 }}>
          {/* Stats row */}
          <div className="r-hero-stats" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
            {[['3+', 'Years shipping'], ['30+', 'Paying users'], ['10k+', 'Project visitors'], ['2028', 'Graduating']].map(([n, l]) => (
              <div key={l} style={{ background: G.bg, border: G.br, borderRadius: G.r, padding: '22px 24px' }}>
                <div style={{ fontSize: 34, fontWeight: 800, color: '#fff', lineHeight: 1 }}>{n}</div>
                <div style={{ fontSize: 12, color: '#475569', marginTop: 6 }}>{l}</div>
              </div>
            ))}
          </div>

          {/* Skills summary */}
          <div style={{ background: G.bg, border: G.br, borderRadius: G.r, padding: '24px' }}>
            <div style={{ fontSize: 10, color: teal, textTransform: 'uppercase', letterSpacing: '0.12em', fontWeight: 700, marginBottom: 14 }}>Tech I work with</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7 }}>
              {['Python', 'Java', 'TypeScript', 'React', 'Next.js', 'FastAPI', 'Spring Boot', 'AWS', 'PostgreSQL'].map(t => (
                <span key={t} style={{ fontSize: 12, color: '#e2e8f0', background: 'rgba(255,255,255,0.07)', padding: '5px 12px', borderRadius: 6, border: '1px solid rgba(255,255,255,0.1)' }}>{t}</span>
              ))}
            </div>
          </div>

          {/* Contact links */}
          <div style={{ background: G.bg, border: G.br, borderRadius: G.r, padding: '20px 24px', display: 'flex', flexDirection: 'column', gap: 10 }}>
            {[
              { icon: '✉', label: '00khanshariq@gmail.com', href: 'mailto:00khanshariq@gmail.com' },
              { icon: '↗', label: 'github.com/shariqsk', href: 'https://github.com/shariqsk' },
              { icon: '↗', label: 'linkedin.com/in/shariq-khan-430754217', href: 'https://www.linkedin.com/in/shariq-khan-430754217/' },
            ].map(({ icon, label, href }) => (
              <a key={href} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer"
                style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 13, color: '#475569', textDecoration: 'none', transition: 'color 0.12s' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#e2e8f0')}
                onMouseLeave={e => (e.currentTarget.style.color = '#475569')}
              >
                <span style={{ color: teal, fontSize: 11, width: 16 }}>{icon}</span>{label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ EXPERIENCE ══════ */}
      <section id="experience" className="r-exp" style={{ padding: '96px 72px' }}>
        <SectionLabel>Experience</SectionLabel>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {/* First job: wide, 3-col inner grid */}
          <div className="r-exp-main" style={{ background: G.bg, border: G.br, borderRadius: G.r, borderLeft: `3px solid ${teal}`, padding: '36px 40px', display: 'grid', gridTemplateColumns: '260px 1fr 1fr', gap: 40 }}>
            <div>
              <div style={{ fontSize: 20, fontWeight: 700, color: '#fff', marginBottom: 4 }}>{EXPERIENCE[0].company}</div>
              <div style={{ fontSize: 13, color: teal, marginBottom: 18, fontWeight: 500 }}>{EXPERIENCE[0].role}</div>
              <div style={{ fontSize: 11, color: '#475569', marginBottom: EXPERIENCE[0].location ? 2 : 18 }}>{EXPERIENCE[0].period}</div>
              {EXPERIENCE[0].location ? <div style={{ fontSize: 11, color: '#334155', marginBottom: 18 }}>{EXPERIENCE[0].location}</div> : null}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5 }}>
                {EXPERIENCE[0].stack.map(t => <span key={t} style={{ fontSize: 10, color: '#94a3b8', background: 'rgba(255,255,255,0.07)', padding: '2px 8px', borderRadius: 4, border: '1px solid rgba(255,255,255,0.1)' }}>{t}</span>)}
              </div>
            </div>
            {/* Bullets split across 2 columns */}
            {[[EXPERIENCE[0].bullets[0], EXPERIENCE[0].bullets[1]], [EXPERIENCE[0].bullets[2], EXPERIENCE[0].bullets[3]]].map((group, gi) => (
              <ul key={gi} className="r-exp-main-bullets" style={{ margin: 0, padding: '0 0 0 16px', display: 'flex', flexDirection: 'column', gap: 10 }}>
                {group.map((b, i) => <li key={i} style={{ fontSize: 14, color: '#cbd5e1', lineHeight: 1.75 }}>{b}</li>)}
              </ul>
            ))}
          </div>
          {/* Remaining jobs */}
          <div className="r-exp-side" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 10 }}>
            {EXPERIENCE.slice(1).map(job => (
              <div key={job.company} className="r-exp-side-card" style={{ background: G.bg, border: G.br, borderRadius: G.r, borderLeft: `2px solid rgba(45,212,191,0.3)`, padding: '28px 32px', display: 'grid', gridTemplateColumns: '180px 1fr', gap: 28 }}>
                <div>
                  <div style={{ fontSize: 17, fontWeight: 700, color: '#fff', marginBottom: 3 }}>{job.company}</div>
                  <div style={{ fontSize: 12, color: teal, marginBottom: 14, fontWeight: 500 }}>{job.role}</div>
                  <div style={{ fontSize: 11, color: '#475569', marginBottom: job.location ? 2 : 14 }}>{job.period}</div>
                  {job.location ? <div style={{ fontSize: 11, color: '#334155', marginBottom: 14 }}>{job.location}</div> : null}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
                    {job.stack.map(t => <span key={t} style={{ fontSize: 10, color: '#64748b', background: 'rgba(255,255,255,0.05)', padding: '2px 7px', borderRadius: 3, border: '1px solid rgba(255,255,255,0.08)' }}>{t}</span>)}
                  </div>
                </div>
                <ul style={{ margin: 0, padding: '0 0 0 14px', display: 'flex', flexDirection: 'column', gap: 8 }}>
                  {job.bullets.map((b, i) => <li key={i} style={{ fontSize: 13, color: '#94a3b8', lineHeight: 1.75 }}>{b}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ PROJECTS — 2fr 1fr responsive bento ══════ */}
      <section id="projects" className="r-proj" style={{ padding: '0 72px 96px' }}>
        <SectionLabel>Projects</SectionLabel>
        <div className="r-proj-grid" style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gridTemplateRows: '1fr 1fr', gap: 12, minHeight: 480 }}>
          <Pcard p={PROJECTS[0]} style={{ gridColumn: '1', gridRow: '1 / 3' }} large />
          <Pcard p={PROJECTS[1]} style={{ gridColumn: '2', gridRow: '1' }} />
          <Pcard p={PROJECTS[2]} style={{ gridColumn: '2', gridRow: '2' }} />
        </div>
      </section>

      {/* ══════ SKILLS — 3 cols, top 2 wide ══════ */}
      <section id="skills" className="r-skills" style={{ padding: '0 72px 96px' }}>
        <SectionLabel>Skills</SectionLabel>
        <div className="r-skills-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 10 }}>
          <div className="r-skills-lang" style={{ background: G.bg, border: G.br, borderRadius: G.r, padding: '28px', gridColumn: '1 / 2' }}>
            <div style={{ fontSize: 10, color: teal, textTransform: 'uppercase', letterSpacing: '0.12em', fontWeight: 700, marginBottom: 14 }}>Languages</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7 }}>
              {SKILLS[0][1].map(item => <span key={item} style={{ fontSize: 13, color: '#e2e8f0', background: 'rgba(255,255,255,0.07)', padding: '7px 14px', borderRadius: 7, border: '1px solid rgba(255,255,255,0.1)' }}>{item}</span>)}
            </div>
          </div>
          <div className="r-skills-front" style={{ background: G.bg, border: G.br, borderRadius: G.r, padding: '28px', gridColumn: '2 / 4' }}>
            <div style={{ fontSize: 10, color: teal, textTransform: 'uppercase', letterSpacing: '0.12em', fontWeight: 700, marginBottom: 14 }}>Frameworks &amp; Tools</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7 }}>
              {SKILLS[1][1].map(item => <span key={item} style={{ fontSize: 13, color: '#e2e8f0', background: 'rgba(255,255,255,0.07)', padding: '7px 14px', borderRadius: 7, border: '1px solid rgba(255,255,255,0.1)' }}>{item}</span>)}
            </div>
          </div>
          {SKILLS.slice(2).map(([cat, items]) => (
            <div key={cat} style={{ background: G.bg, border: G.br, borderRadius: G.r, padding: '24px' }}>
              <div style={{ fontSize: 10, color: teal, textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 700, marginBottom: 12 }}>{cat}</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                {items.map(item => <span key={item} style={{ fontSize: 12, color: '#94a3b8', background: 'rgba(255,255,255,0.05)', padding: '4px 10px', borderRadius: 5, border: '1px solid rgba(255,255,255,0.08)' }}>{item}</span>)}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ══════ EDUCATION + CTA ══════ */}
      <section id="education" className="r-edu" style={{ padding: '0 72px 120px', display: 'grid', gridTemplateColumns: '2fr 3fr', gap: 12 }}>
        <div style={{ background: G.bg, border: G.br, borderRadius: G.r, padding: '40px' }}>
          <div style={{ fontSize: 10, color: teal, textTransform: 'uppercase', letterSpacing: '0.12em', fontWeight: 700, marginBottom: 20 }}>Education</div>
          <div style={{ fontSize: 28, fontWeight: 800, color: '#fff', letterSpacing: '-0.03em', marginBottom: 8 }}>York University</div>
          <div style={{ fontSize: 14, color: teal, marginBottom: 4 }}>Specialized Honours BSc</div>
          <div style={{ fontSize: 13, color: '#475569', marginBottom: 20 }}>Specialized Honours BSc in Cyber Security · Expected April 2028 · Toronto, ON</div>
          <p style={{ margin: 0, fontSize: 13, color: '#475569', lineHeight: 1.75 }}>Relevant coursework: Advanced Object-Oriented Programming, Discrete Mathematics, Computer Organization, Software Tools.</p>
        </div>
        <div className="r-cta-inner" style={{ background: 'rgba(45,212,191,0.04)', border: '1px solid rgba(45,212,191,0.15)', borderRadius: G.r, padding: '40px 52px', display: 'grid', gridTemplateColumns: '1fr auto', gap: 48, alignItems: 'center' }}>
          <div>
            <div style={{ fontSize: 10, color: teal, textTransform: 'uppercase', letterSpacing: '0.12em', fontWeight: 700, marginBottom: 16 }}>Let's talk</div>
            <div style={{ fontSize: 44, fontWeight: 900, color: '#fff', letterSpacing: '-0.04em', lineHeight: 1.0, marginBottom: 16 }}>Looking for<br />your next hire?</div>
            <p style={{ fontSize: 15, color: '#64748b', lineHeight: 1.75, margin: 0 }}>Available for full-time and freelance. Quick to learn, ships clean.</p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10, minWidth: 180 }}>
            <a href="mailto:00khanshariq@gmail.com" style={{ textAlign: 'center', fontSize: 14, fontWeight: 600, color: '#fff', textDecoration: 'none', padding: '14px 28px', background: teal, borderRadius: 10, transition: 'opacity 0.15s' }}
              onMouseEnter={e => (e.currentTarget.style.opacity = '0.8')} onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
            >Email me</a>
            <a href="https://www.linkedin.com/in/shariq-khan-430754217/" target="_blank" rel="noopener noreferrer" style={{ textAlign: 'center', fontSize: 14, fontWeight: 600, color: '#94a3b8', textDecoration: 'none', padding: '14px 28px', border: '1px solid rgba(255,255,255,0.15)', borderRadius: 10, transition: 'all 0.15s' }}
              onMouseEnter={e => { e.currentTarget.style.color = '#fff'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.4)'; }}
              onMouseLeave={e => { e.currentTarget.style.color = '#94a3b8'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'; }}
            >LinkedIn ↗</a>
          </div>
        </div>
      </section>

    </div>
  );
}

function Pcard({ p, style, large, wide }: { p: typeof PROJECTS[number]; style?: React.CSSProperties; large?: boolean; wide?: boolean }) {
  return (
    <a href={p.href} target="_blank" rel="noopener noreferrer"
      style={{ display: 'flex', flexDirection: wide ? 'row' : 'column', alignItems: wide ? 'center' : undefined, gap: wide ? 32 : 0, background: G.bg, border: G.br, borderRadius: G.r, padding: large ? '40px' : '26px', textDecoration: 'none', transition: 'border-color 0.15s, transform 0.15s', position: 'relative', overflow: 'hidden', ...style }}
      onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.25)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
      onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.09)'; e.currentTarget.style.transform = 'none'; }}
    >
      {!wide && <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: p.accent, borderRadius: `${G.r}px ${G.r}px 0 0` }} />}
      {wide && <div style={{ position: 'absolute', top: 0, left: 0, bottom: 0, width: 3, background: p.accent, borderRadius: `${G.r}px 0 0 ${G.r}px` }} />}
      <div style={{ flex: 1, paddingTop: wide ? 0 : (large ? 8 : 6), paddingLeft: wide ? 12 : 0 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 10 }}>
          <div>
            <div style={{ fontWeight: 700, color: '#fff', fontSize: large ? 24 : 15, marginBottom: 4 }}>{p.name}</div>
            <div style={{ fontSize: 12, color: p.accent }}>{p.tagline}</div>
          </div>
          {!wide && <span style={{ fontSize: 10, color: '#94a3b8', background: 'rgba(255,255,255,0.08)', padding: '3px 9px', borderRadius: 5, border: '1px solid rgba(255,255,255,0.1)', whiteSpace: 'nowrap', marginLeft: 10 }}>{p.badge}</span>}
        </div>
        <p style={{ fontSize: large ? 14 : 13, color: '#64748b', lineHeight: 1.75, margin: '0 0 16px', flex: 1 }}>{p.desc}</p>
        {!wide && <div style={{ display: 'flex', gap: 5, flexWrap: 'wrap' }}>
          {p.stack.map(t => <span key={t} style={{ fontSize: 10, color: '#94a3b8', background: 'rgba(255,255,255,0.06)', padding: '2px 7px', borderRadius: 3, border: '1px solid rgba(255,255,255,0.08)' }}>{t}</span>)}
        </div>}
      </div>
      {wide && <div style={{ display: 'flex', flexDirection: 'column', gap: 8, alignItems: 'flex-end', flexShrink: 0 }}>
        <span style={{ fontSize: 11, color: '#94a3b8', background: 'rgba(255,255,255,0.07)', padding: '4px 10px', borderRadius: 5, border: '1px solid rgba(255,255,255,0.1)' }}>{p.badge}</span>
        <div style={{ display: 'flex', gap: 5, flexWrap: 'wrap', justifyContent: 'flex-end' }}>
          {p.stack.map(t => <span key={t} style={{ fontSize: 10, color: '#64748b', background: 'rgba(255,255,255,0.05)', padding: '2px 7px', borderRadius: 3, border: '1px solid rgba(255,255,255,0.07)' }}>{t}</span>)}
        </div>
      </div>}
    </a>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 20, marginBottom: 24 }}>
      <span style={{ fontSize: 10, fontWeight: 700, color: teal, textTransform: 'uppercase', letterSpacing: '0.14em', whiteSpace: 'nowrap' }}>{children}</span>
      <div style={{ flex: 1, height: 1, background: 'rgba(255,255,255,0.07)' }} />
    </div>
  );
}
