'use client';

import Link from 'next/link';

const EXPERIENCE = [
  {
    company: 'Shake Shack',
    role: 'Freelance Full-Stack Developer',
    period: 'Dec 2025 – Feb 2026',
    location: 'Remote',
    stack: ['React Native', 'Spring Boot', 'AWS S3'],
    bullets: [
      'Built a React Native app replacing a paper-based receipt process, giving store staff a photo/scan trail for chargeback disputes.',
      'Spring Boot API + AWS S3 to store and retrieve order metadata and photo evidence across high-traffic stores.',
      'Reduced staff scan errors noticeably during peak hours.',
    ],
  },
  {
    company: 'Farrow',
    role: 'Import Analyst',
    period: 'Jun 2024 – Dec 2025',
    location: 'Hybrid · Toronto',
    stack: ['EDI', 'ACI', 'CADEX'],
    bullets: [
      '55-65 daily EDI releases for enterprise clients, maintaining 95%+ clearance rates.',
      'Resolved customs holds within 24 hours without breaking client SLAs.',
    ],
  },
  {
    company: 'Saftech Designs',
    role: 'Web Developer',
    period: 'Jan 2023 – Apr 2024',
    location: 'Remote',
    stack: ['Next.js', 'JWT', 'Vercel'],
    bullets: [
      'Rebuilt the platform in Next.js. TTFB and LCP both under 1s, 25% SEO gain from Core Web Vitals.',
      'Hardened all endpoints: JWT auth, CSP, HSTS, rate limiting. Cleared OWASP Top 10.',
      'Set up staging/prod pipeline on Vercel. Deployments became boring, which is the goal.',
    ],
  },
];

const PROJECTS = [
  { name: 'Zocratic MMA', tagline: 'Sports analytics SaaS', desc: 'XGBoost win-probability model (~65% accuracy) trained on scraped UFC data for 4,000+ fighters. Role-based premium access via AWS Cognito. 100+ active users.', stack: ['Next.js', 'FastAPI', 'PostgreSQL', 'XGBoost', 'AWS'], href: 'https://zocraticmma.com', badge: '100+ users', accent: '#0d9488' },
  { name: 'Social Desk', tagline: 'Cross-platform social scheduler', desc: 'Electron desktop app posting to X, Facebook, Instagram, and TikTok from one interface. Per-account session isolation in SQLite.', stack: ['Electron', 'React', 'TypeScript', 'SQLite', 'Playwright'], href: 'https://github.com/shariqsk', badge: 'Desktop app', accent: '#7c3aed' },
  { name: 'CDL Simulator', tagline: 'Esports management sim', desc: 'Full-stack sim with Elo ratings, salary caps, and playoff brackets. FastAPI engine, persistent React + TypeScript UI.', stack: ['React', 'TypeScript', 'FastAPI'], href: 'https://cdlsim.com', badge: '1,500+ visitors', accent: '#b45309' },
  { name: 'Phintic', tagline: 'Cybersecurity education', desc: 'Interactive platform covering phishing, scamware, and account takeover with simulation drills and security knowledge assessments.', stack: ['React', 'TypeScript'], href: 'https://github.com/shariqsk', badge: 'Open source', accent: '#dc2626' },
];

const SKILLS: [string, string[]][] = [
  ['Languages',  ['TypeScript', 'Python', 'JavaScript', 'Java', 'SQL', 'Bash', 'C']],
  ['Frontend',   ['React', 'Next.js', 'React Native', 'Tailwind CSS', 'Electron']],
  ['Backend',    ['FastAPI', 'Node.js', 'Express.js', 'Spring Boot']],
  ['Data / ML',  ['PostgreSQL', 'Supabase', 'Redis', 'SQLite', 'XGBoost', 'Prisma']],
  ['Infra',      ['AWS (S3, Cognito)', 'Docker', 'Vercel', 'Nginx', 'GitHub Actions']],
  ['Security',   ['JWT', 'CSP / HSTS', 'OWASP Top 10', 'Rate Limiting', 'Playwright']],
];

const teal = '#2dd4bf';
const card = (extra = '') => ({
  background: 'rgba(255,255,255,0.04)',
  border: '1px solid rgba(255,255,255,0.09)',
  borderRadius: 16,
} as React.CSSProperties);

export default function RecruiterPage() {
  return (
    <div style={{
      position: 'fixed', inset: 0, overflowY: 'auto', scrollBehavior: 'smooth',
      background: 'linear-gradient(160deg, #09171f 0%, #0e2535 50%, #142f40 100%)',
      color: '#e2e8f0',
      fontFamily: "'Segoe UI', system-ui, -apple-system, sans-serif",
      lineHeight: 1.6, fontSize: 14,
    }}>

      {/* ── Floating Nav ── */}
      <div style={{ position: 'fixed', top: 20, left: 0, right: 0, zIndex: 50, display: 'flex', justifyContent: 'center', pointerEvents: 'none' }}>
        <nav style={{
          pointerEvents: 'auto',
          display: 'flex', alignItems: 'center', gap: 2,
          background: 'rgba(8,20,28,0.85)', backdropFilter: 'blur(24px)',
          border: '1px solid rgba(255,255,255,0.1)', borderRadius: 999,
          padding: '7px 10px', minWidth: 560,
          boxShadow: '0 8px 40px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.05)',
        }}>
          <Link href="/" style={{ color: '#64748b', textDecoration: 'none', fontSize: 12, display: 'flex', alignItems: 'center', gap: 5, padding: '6px 16px', borderRadius: 999, transition: 'color 0.12s, background 0.12s' }}
            onMouseEnter={e => { e.currentTarget.style.color = '#fff'; e.currentTarget.style.background = 'rgba(255,255,255,0.07)'; }}
            onMouseLeave={e => { e.currentTarget.style.color = '#64748b'; e.currentTarget.style.background = 'transparent'; }}
          >
            <svg width="11" height="11" viewBox="0 0 13 13" fill="none"><path d="M8.5 1.5L3.5 6.5l5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
            Back
          </Link>
          <div style={{ width: 1, height: 16, background: 'rgba(255,255,255,0.1)', margin: '0 6px' }} />
          {['Experience', 'Projects', 'Skills', 'Education'].map(s => (
            <a key={s} href={`#${s.toLowerCase()}`} style={{ fontSize: 12, color: '#64748b', textDecoration: 'none', padding: '6px 16px', borderRadius: 999, transition: 'color 0.12s, background 0.12s' }}
              onMouseEnter={e => { e.currentTarget.style.color = '#fff'; e.currentTarget.style.background = 'rgba(255,255,255,0.07)'; }}
              onMouseLeave={e => { e.currentTarget.style.color = '#64748b'; e.currentTarget.style.background = 'transparent'; }}
            >{s}</a>
          ))}
          <div style={{ width: 1, height: 16, background: 'rgba(255,255,255,0.1)', margin: '0 6px' }} />
          <a href="https://drive.google.com/file/d/1l1aJcVBJBbIg0VPKc9LXyG9x5E3l0FIa/view" target="_blank" rel="noopener noreferrer"
            style={{ fontSize: 12, color: '#fff', textDecoration: 'none', padding: '6px 20px', background: teal, borderRadius: 999, fontWeight: 600, transition: 'opacity 0.15s' }}
            onMouseEnter={e => (e.currentTarget.style.opacity = '0.8')}
            onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
          >Resume ↗</a>
        </nav>
      </div>

      {/* ══════════════════════════════════════════
          HERO — asymmetric: giant text left, thin stat column far right
      ══════════════════════════════════════════ */}
      <section style={{ padding: '128px 72px 0', display: 'grid', gridTemplateColumns: '1fr 180px', gap: 0, alignItems: 'start' }}>
        <div>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 7, fontSize: 11, fontWeight: 600, color: teal, textTransform: 'uppercase', letterSpacing: '0.12em', background: 'rgba(45,212,191,0.08)', border: '1px solid rgba(45,212,191,0.2)', borderRadius: 999, padding: '5px 14px', marginBottom: 36 }}>
            <span style={{ width: 5, height: 5, borderRadius: '50%', background: teal, boxShadow: `0 0 6px ${teal}`, display: 'inline-block' }} />
            Available for hire · Toronto
          </span>
          <h1 style={{ fontSize: 'clamp(72px, 9.5vw, 128px)', fontWeight: 900, color: '#fff', lineHeight: 0.93, margin: 0, letterSpacing: '-0.04em' }}>
            Shariq<br />
            <span style={{ WebkitTextStroke: '2px rgba(255,255,255,0.25)', color: 'transparent' }}>Safdar</span><br />
            Khan.
          </h1>
        </div>
        {/* Thin stat rail on the right */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 0, paddingTop: 8, borderLeft: '1px solid rgba(255,255,255,0.07)', paddingLeft: 28, marginTop: 48 }}>
          {[['3+', 'yrs exp'], ['100+', 'users'], ['4', 'live apps'], ['2027', 'grad']].map(([n, l]) => (
            <div key={l} style={{ padding: '14px 0', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
              <div style={{ fontSize: 26, fontWeight: 800, color: '#fff', lineHeight: 1 }}>{n}</div>
              <div style={{ fontSize: 10, color: '#475569', textTransform: 'uppercase', letterSpacing: '0.08em', marginTop: 3 }}>{l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Divider + bio row */}
      <section style={{ padding: '28px 72px 80px' }}>
        <div style={{ height: 1, background: `linear-gradient(to right, ${teal}, rgba(255,255,255,0.2) 40%, transparent)`, marginBottom: 40, opacity: 0.5 }} />
        {/* Bio + tagline + contacts — 3 unequal columns */}
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 3fr 2fr', gap: 48, alignItems: 'start' }}>
          <p style={{ fontSize: 13, color: '#64748b', lineHeight: 1.8, margin: 0, textTransform: 'uppercase', letterSpacing: '0.06em', fontWeight: 500 }}>
            Full-stack developer<br />TypeScript · Python<br />React everywhere
          </p>
          <p style={{ fontSize: 17, color: '#cbd5e1', fontWeight: 400, margin: 0, lineHeight: 1.7 }}>
            Cybersecurity student at York University building things with real users, not just side projects. I pick up new tech fast, ship clean, and don't disappear when things break.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
            {[
              { label: '✉ 00khanshariq@gmail.com', href: 'mailto:00khanshariq@gmail.com' },
              { label: 'github.com/shariqsk', href: 'https://github.com/shariqsk' },
              { label: 'linkedin.com/in/shariq-khan', href: 'https://linkedin.com/in/shariq-khan' },
              { label: '(647) 303-6451', href: 'tel:6473036451' },
            ].map(({ label, href }) => (
              <a key={href} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer"
                style={{ fontSize: 12, color: '#475569', textDecoration: 'none', padding: '5px 0', borderBottom: '1px solid rgba(255,255,255,0.05)', transition: 'color 0.12s' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#e2e8f0')}
                onMouseLeave={e => (e.currentTarget.style.color = '#475569')}
              >{label}</a>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          EXPERIENCE — left label narrow, jobs right in varied widths
      ══════════════════════════════════════════ */}
      <section id="experience" style={{ padding: '0 72px 96px', display: 'grid', gridTemplateColumns: '120px 1fr', gap: 40, alignItems: 'start' }}>
        <div style={{ paddingTop: 4 }}>
          <div style={{ fontSize: 10, fontWeight: 700, color: teal, textTransform: 'uppercase', letterSpacing: '0.14em', writingMode: 'vertical-rl', transform: 'rotate(180deg)', height: 90 }}>Experience</div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {/* First job: full width, tall */}
          <div style={{ ...card(), padding: '32px 36px', borderLeft: `3px solid ${teal}`, display: 'grid', gridTemplateColumns: '220px 1fr', gap: 40 }}>
            <div>
              <div style={{ fontSize: 20, fontWeight: 700, color: '#fff', marginBottom: 4 }}>{EXPERIENCE[0].company}</div>
              <div style={{ fontSize: 13, color: teal, marginBottom: 16, fontWeight: 500 }}>{EXPERIENCE[0].role}</div>
              <div style={{ fontSize: 11, color: '#475569', marginBottom: 2 }}>{EXPERIENCE[0].period}</div>
              <div style={{ fontSize: 11, color: '#334155', marginBottom: 18 }}>{EXPERIENCE[0].location}</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5 }}>
                {EXPERIENCE[0].stack.map(t => <span key={t} style={{ fontSize: 10, color: '#94a3b8', background: 'rgba(255,255,255,0.07)', padding: '2px 8px', borderRadius: 4, border: '1px solid rgba(255,255,255,0.1)' }}>{t}</span>)}
              </div>
            </div>
            <ul style={{ margin: 0, padding: '0 0 0 16px', display: 'flex', flexDirection: 'column', gap: 10 }}>
              {EXPERIENCE[0].bullets.map((b, i) => <li key={i} style={{ fontSize: 14, color: '#cbd5e1', lineHeight: 1.75 }}>{b}</li>)}
            </ul>
          </div>
          {/* Next two jobs: side by side, narrower feel */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
            {EXPERIENCE.slice(1).map(job => (
              <div key={job.company} style={{ ...card(), padding: '26px 28px', borderLeft: `2px solid rgba(45,212,191,0.35)` }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 12 }}>
                  <div>
                    <div style={{ fontSize: 16, fontWeight: 700, color: '#fff', marginBottom: 3 }}>{job.company}</div>
                    <div style={{ fontSize: 12, color: teal, fontWeight: 500 }}>{job.role}</div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontSize: 11, color: '#475569' }}>{job.period}</div>
                    <div style={{ fontSize: 10, color: '#334155' }}>{job.location}</div>
                  </div>
                </div>
                <ul style={{ margin: '0 0 14px', padding: '0 0 0 14px', display: 'flex', flexDirection: 'column', gap: 6 }}>
                  {job.bullets.map((b, i) => <li key={i} style={{ fontSize: 13, color: '#94a3b8', lineHeight: 1.7 }}>{b}</li>)}
                </ul>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5 }}>
                  {job.stack.map(t => <span key={t} style={{ fontSize: 10, color: '#64748b', background: 'rgba(255,255,255,0.05)', padding: '2px 7px', borderRadius: 3, border: '1px solid rgba(255,255,255,0.08)' }}>{t}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          PROJECTS — true bento: unequal column widths, unequal row heights
          Col layout: 5fr  3fr  2fr
          Row 1: big card (col1, row1+2), medium card (col2), small card (col3)
          Row 2:                           wide card (col2+3)
      ══════════════════════════════════════════ */}
      <section id="projects" style={{ padding: '0 72px 96px' }}>
        <SectionLabel>Projects</SectionLabel>
        <div style={{ display: 'grid', gridTemplateColumns: '5fr 3fr 2fr', gridTemplateRows: 'auto auto', gap: 12 }}>

          {/* BIG card — spans rows 1+2 */}
          <a href={PROJECTS[0].href} target="_blank" rel="noopener noreferrer"
            style={{ gridColumn: '1', gridRow: '1 / 3', ...card(), padding: '36px', textDecoration: 'none', display: 'flex', flexDirection: 'column', position: 'relative', overflow: 'hidden', transition: 'border-color 0.15s, transform 0.15s', minHeight: 340 }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.25)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.09)'; e.currentTarget.style.transform = 'none'; }}
          >
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: PROJECTS[0].accent, borderRadius: '16px 16px 0 0' }} />
            <div style={{ fontSize: 11, color: '#475569', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 20, paddingTop: 8 }}>Featured project</div>
            <div style={{ fontSize: 32, fontWeight: 800, color: '#fff', letterSpacing: '-0.03em', marginBottom: 6 }}>{PROJECTS[0].name}</div>
            <div style={{ fontSize: 13, color: PROJECTS[0].accent, marginBottom: 20 }}>{PROJECTS[0].tagline}</div>
            <p style={{ fontSize: 14, color: '#94a3b8', lineHeight: 1.8, flex: 1, margin: '0 0 24px' }}>{PROJECTS[0].desc}</p>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
              <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                {PROJECTS[0].stack.map(t => <span key={t} style={{ fontSize: 11, color: '#e2e8f0', background: 'rgba(255,255,255,0.07)', padding: '3px 9px', borderRadius: 5, border: '1px solid rgba(255,255,255,0.1)' }}>{t}</span>)}
              </div>
              <span style={{ fontSize: 12, color: '#fff', background: PROJECTS[0].accent, padding: '4px 12px', borderRadius: 6, fontWeight: 600, whiteSpace: 'nowrap', marginLeft: 12 }}>{PROJECTS[0].badge}</span>
            </div>
          </a>

          {/* Medium card */}
          <a href={PROJECTS[1].href} target="_blank" rel="noopener noreferrer"
            style={{ gridColumn: '2', gridRow: '1', ...card(), padding: '28px', textDecoration: 'none', display: 'flex', flexDirection: 'column', position: 'relative', overflow: 'hidden', transition: 'border-color 0.15s, transform 0.15s' }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.25)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.09)'; e.currentTarget.style.transform = 'none'; }}
          >
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: PROJECTS[1].accent, borderRadius: '16px 16px 0 0' }} />
            <div style={{ paddingTop: 6, marginBottom: 8 }}>
              <div style={{ fontWeight: 700, color: '#fff', fontSize: 17, marginBottom: 3 }}>{PROJECTS[1].name}</div>
              <div style={{ fontSize: 12, color: PROJECTS[1].accent }}>{PROJECTS[1].tagline}</div>
            </div>
            <p style={{ fontSize: 13, color: '#64748b', lineHeight: 1.7, flex: 1, margin: '0 0 14px' }}>{PROJECTS[1].desc}</p>
            <div style={{ display: 'flex', gap: 5, flexWrap: 'wrap' }}>
              {PROJECTS[1].stack.map(t => <span key={t} style={{ fontSize: 10, color: '#94a3b8', background: 'rgba(255,255,255,0.06)', padding: '2px 7px', borderRadius: 3, border: '1px solid rgba(255,255,255,0.08)' }}>{t}</span>)}
            </div>
          </a>

          {/* Small card */}
          <a href={PROJECTS[2].href} target="_blank" rel="noopener noreferrer"
            style={{ gridColumn: '3', gridRow: '1', ...card(), padding: '24px 20px', textDecoration: 'none', display: 'flex', flexDirection: 'column', position: 'relative', overflow: 'hidden', transition: 'border-color 0.15s, transform 0.15s' }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.25)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.09)'; e.currentTarget.style.transform = 'none'; }}
          >
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: PROJECTS[2].accent, borderRadius: '16px 16px 0 0' }} />
            <span style={{ fontSize: 10, color: PROJECTS[2].accent, background: `${PROJECTS[2].accent}18`, padding: '2px 8px', borderRadius: 4, alignSelf: 'flex-start', marginBottom: 12, marginTop: 6 }}>{PROJECTS[2].badge}</span>
            <div style={{ fontWeight: 700, color: '#fff', fontSize: 15, marginBottom: 3 }}>{PROJECTS[2].name}</div>
            <div style={{ fontSize: 11, color: PROJECTS[2].accent, marginBottom: 10 }}>{PROJECTS[2].tagline}</div>
            <p style={{ fontSize: 12, color: '#64748b', lineHeight: 1.7, flex: 1, margin: 0 }}>{PROJECTS[2].desc}</p>
          </a>

          {/* Wide bottom-right card spanning col 2+3 */}
          <a href={PROJECTS[3].href} target="_blank" rel="noopener noreferrer"
            style={{ gridColumn: '2 / 4', gridRow: '2', ...card(), padding: '28px', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 32, position: 'relative', overflow: 'hidden', transition: 'border-color 0.15s, transform 0.15s' }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.25)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.09)'; e.currentTarget.style.transform = 'none'; }}
          >
            <div style={{ position: 'absolute', top: 0, left: 0, bottom: 0, width: 3, background: PROJECTS[3].accent, borderRadius: '16px 0 0 16px' }} />
            <div style={{ paddingLeft: 12, flex: 1 }}>
              <div style={{ fontWeight: 700, color: '#fff', fontSize: 17, marginBottom: 3 }}>{PROJECTS[3].name}</div>
              <div style={{ fontSize: 12, color: PROJECTS[3].accent, marginBottom: 8 }}>{PROJECTS[3].tagline}</div>
              <p style={{ fontSize: 13, color: '#64748b', lineHeight: 1.7, margin: 0 }}>{PROJECTS[3].desc}</p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6, alignItems: 'flex-end', flexShrink: 0 }}>
              <span style={{ fontSize: 10, color: '#94a3b8', background: 'rgba(255,255,255,0.07)', padding: '3px 10px', borderRadius: 5, border: '1px solid rgba(255,255,255,0.1)' }}>{PROJECTS[3].badge}</span>
              <div style={{ display: 'flex', gap: 5, flexWrap: 'wrap', justifyContent: 'flex-end' }}>
                {PROJECTS[3].stack.map(t => <span key={t} style={{ fontSize: 10, color: '#64748b', background: 'rgba(255,255,255,0.05)', padding: '2px 6px', borderRadius: 3, border: '1px solid rgba(255,255,255,0.07)' }}>{t}</span>)}
              </div>
            </div>
          </a>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SKILLS — 2 big cards top, 4 smaller below
      ══════════════════════════════════════════ */}
      <section id="skills" style={{ padding: '0 72px 96px' }}>
        <SectionLabel>Skills</SectionLabel>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gridTemplateRows: 'auto auto', gap: 10 }}>
          {/* Languages: big, spans 2 cols */}
          <div style={{ ...card(), padding: '28px', gridColumn: '1 / 3' }}>
            <div style={{ fontSize: 10, color: teal, textTransform: 'uppercase', letterSpacing: '0.12em', fontWeight: 700, marginBottom: 14 }}>Languages</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7 }}>
              {SKILLS[0][1].map(item => <span key={item} style={{ fontSize: 13, color: '#e2e8f0', background: 'rgba(255,255,255,0.07)', padding: '6px 14px', borderRadius: 8, border: '1px solid rgba(255,255,255,0.1)' }}>{item}</span>)}
            </div>
          </div>
          {/* Frontend: big, spans 2 cols */}
          <div style={{ ...card(), padding: '28px', gridColumn: '3 / 5' }}>
            <div style={{ fontSize: 10, color: teal, textTransform: 'uppercase', letterSpacing: '0.12em', fontWeight: 700, marginBottom: 14 }}>Frontend</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7 }}>
              {SKILLS[1][1].map(item => <span key={item} style={{ fontSize: 13, color: '#e2e8f0', background: 'rgba(255,255,255,0.07)', padding: '6px 14px', borderRadius: 8, border: '1px solid rgba(255,255,255,0.1)' }}>{item}</span>)}
            </div>
          </div>
          {/* Remaining 4: one col each */}
          {SKILLS.slice(2).map(([cat, items]) => (
            <div key={cat} style={{ ...card(), padding: '22px 20px' }}>
              <div style={{ fontSize: 10, color: teal, textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 700, marginBottom: 12 }}>{cat}</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5 }}>
                {items.map(item => <span key={item} style={{ fontSize: 11, color: '#94a3b8', background: 'rgba(255,255,255,0.05)', padding: '3px 8px', borderRadius: 5, border: '1px solid rgba(255,255,255,0.08)' }}>{item}</span>)}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════
          EDUCATION + CTA — narrow edu card, wide cta
      ══════════════════════════════════════════ */}
      <section id="education" style={{ padding: '0 72px 120px', display: 'grid', gridTemplateColumns: '2fr 3fr', gap: 12 }}>
        <div style={{ ...card(), padding: '36px 36px' }}>
          <div style={{ fontSize: 10, color: teal, textTransform: 'uppercase', letterSpacing: '0.12em', fontWeight: 700, marginBottom: 20 }}>Education</div>
          <div style={{ fontSize: 26, fontWeight: 800, color: '#fff', letterSpacing: '-0.02em', marginBottom: 6 }}>York University</div>
          <div style={{ fontSize: 13, color: teal, marginBottom: 4 }}>Specialized Honours BSc</div>
          <div style={{ fontSize: 13, color: '#475569', marginBottom: 16 }}>Cyber Security · Expected 2027</div>
          <p style={{ margin: 0, fontSize: 13, color: '#475569', lineHeight: 1.75 }}>
            Coursework: Advanced OOP, Discrete Mathematics, Computer Organization, Software Tools.
          </p>
        </div>
        <div style={{ background: 'rgba(45,212,191,0.04)', border: '1px solid rgba(45,212,191,0.15)', borderRadius: 16, padding: '48px 52px', display: 'flex', alignItems: 'center', gap: 52 }}>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 10, color: teal, textTransform: 'uppercase', letterSpacing: '0.12em', fontWeight: 700, marginBottom: 16 }}>Let's talk</div>
            <div style={{ fontSize: 40, fontWeight: 900, color: '#fff', letterSpacing: '-0.04em', lineHeight: 1.0, marginBottom: 16 }}>
              Looking for<br />your next hire?
            </div>
            <p style={{ fontSize: 14, color: '#64748b', lineHeight: 1.75, margin: 0 }}>
              Available for full-time roles and freelance. Quick to pick things up, happy to ship fast.
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10, minWidth: 180 }}>
            <a href="mailto:00khanshariq@gmail.com"
              style={{ textAlign: 'center', fontSize: 14, fontWeight: 600, color: '#fff', textDecoration: 'none', padding: '13px 24px', background: teal, borderRadius: 10, transition: 'opacity 0.15s' }}
              onMouseEnter={e => (e.currentTarget.style.opacity = '0.8')}
              onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
            >Email me</a>
            <a href="https://linkedin.com/in/shariq-khan" target="_blank" rel="noopener noreferrer"
              style={{ textAlign: 'center', fontSize: 14, fontWeight: 600, color: '#94a3b8', textDecoration: 'none', padding: '13px 24px', border: '1px solid rgba(255,255,255,0.15)', borderRadius: 10, transition: 'all 0.15s' }}
              onMouseEnter={e => { e.currentTarget.style.color = '#fff'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.4)'; }}
              onMouseLeave={e => { e.currentTarget.style.color = '#94a3b8'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'; }}
            >LinkedIn ↗</a>
          </div>
        </div>
      </section>

    </div>
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
