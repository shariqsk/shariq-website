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
  {
    name: 'Zocratic MMA',
    tagline: 'Sports analytics SaaS',
    desc: 'XGBoost win-probability model (~65% accuracy) trained on scraped UFC data for 4,000+ fighters. Role-based premium access via AWS Cognito. 100+ active users.',
    stack: ['Next.js', 'FastAPI', 'PostgreSQL', 'XGBoost', 'AWS'],
    href: 'https://zocraticmma.com',
    badge: '100+ users',
    accent: '#0d9488',
  },
  {
    name: 'Social Desk',
    tagline: 'Cross-platform social scheduler',
    desc: 'Electron desktop app posting to X, Facebook, Instagram, and TikTok from one interface. Playwright browser automation with per-account session isolation in SQLite.',
    stack: ['Electron', 'React', 'TypeScript', 'SQLite', 'Playwright'],
    href: 'https://github.com/shariqsk',
    badge: 'Desktop app',
    accent: '#7c3aed',
  },
  {
    name: 'CDL Simulator',
    tagline: 'Esports management sim',
    desc: 'Full-stack sim with Elo ratings, salary caps, and playoff brackets. FastAPI engine, persistent React + TypeScript UI.',
    stack: ['React', 'TypeScript', 'FastAPI'],
    href: 'https://cdlsim.com',
    badge: '1,500+ visitors',
    accent: '#b45309',
  },
  {
    name: 'Phintic',
    tagline: 'Cybersecurity education',
    desc: 'Interactive platform covering phishing, scamware, and account takeover with simulation drills and security knowledge assessments.',
    stack: ['React', 'TypeScript'],
    href: 'https://github.com/shariqsk',
    badge: 'Open source',
    accent: '#dc2626',
  },
];

const SKILLS: [string, string[]][] = [
  ['Languages',  ['TypeScript', 'Python', 'JavaScript', 'Java', 'SQL', 'Bash', 'C']],
  ['Frontend',   ['React', 'Next.js', 'React Native', 'Tailwind CSS', 'Electron']],
  ['Backend',    ['FastAPI', 'Node.js', 'Express.js', 'Spring Boot']],
  ['Data / ML',  ['PostgreSQL', 'Supabase', 'Redis', 'SQLite', 'XGBoost', 'Prisma']],
  ['Infra',      ['AWS (S3, Cognito)', 'Docker', 'Vercel', 'Nginx', 'GitHub Actions']],
  ['Security',   ['JWT', 'CSP / HSTS', 'OWASP Top 10', 'Rate Limiting', 'Playwright']],
];

const CARD = { background: 'rgba(0,0,0,0.28)', border: '1px solid rgba(255,255,255,0.13)', borderRadius: 12 } as const;
const T = { primary: '#ffffff', secondary: '#e2e8f0', muted: '#94a3b8', dim: '#64748b', accent: '#2dd4bf' } as const;

export default function RecruiterPage() {
  return (
    <div style={{
      position: 'fixed', inset: 0, overflowY: 'auto',
      background: 'linear-gradient(160deg, #0f2027 0%, #203a43 40%, #2c5364 100%)',
      color: T.secondary,
      fontFamily: "'Segoe UI', system-ui, -apple-system, sans-serif",
      fontSize: 14, lineHeight: 1.6,
    }}>

      {/* ── Nav ── */}
      <nav style={{
        position: 'sticky', top: 0, zIndex: 50,
        background: 'rgba(15,32,39,0.85)', backdropFilter: 'blur(16px)',
        borderBottom: '1px solid rgba(255,255,255,0.08)',
        padding: '0 40px', height: 52,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        <Link href="/" style={{ color: T.muted, textDecoration: 'none', fontSize: 13, display: 'flex', alignItems: 'center', gap: 6, transition: 'color 0.15s' }}
          onMouseEnter={e => (e.currentTarget.style.color = T.secondary)}
          onMouseLeave={e => (e.currentTarget.style.color = T.muted)}
        >
          <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
            <path d="M8.5 1.5L3.5 6.5l5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Back to desktop
        </Link>
        <a href="https://drive.google.com/file/d/1l1aJcVBJBbIg0VPKc9LXyG9x5E3l0FIa/view"
          target="_blank" rel="noopener noreferrer"
          style={{ fontSize: 12, color: '#fff', textDecoration: 'none', padding: '6px 16px', background: '#0d9488', borderRadius: 6, fontWeight: 600, letterSpacing: '0.02em', transition: 'background 0.15s' }}
          onMouseEnter={e => (e.currentTarget.style.background = '#0f766e')}
          onMouseLeave={e => (e.currentTarget.style.background = '#0d9488')}
        >Resume PDF ↗</a>
      </nav>

      {/* ── Hero ── */}
      <section style={{ maxWidth: 900, margin: '0 auto', padding: '80px 48px 0' }}>
        <p style={{ fontSize: 12, fontWeight: 700, color: T.accent, textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: 28 }}>
          Available for hire · Toronto, ON
        </p>
        <h1 style={{ fontSize: 'clamp(52px, 7vw, 86px)', fontWeight: 800, color: T.primary, lineHeight: 1.0, margin: 0, letterSpacing: '-0.04em' }}>
          Shariq<br />Safdar Khan.
        </h1>

        {/* Divider line below name */}
        <div style={{ position: 'relative', width: '100%', height: 24, marginBottom: 36 }}>
          <div style={{ position: 'absolute', top: 0, left: '5%', right: '5%', height: 1, background: `linear-gradient(to right, transparent, ${T.accent} 20%, #fff 50%, ${T.accent} 80%, transparent)`, opacity: 0.9 }} />
          <div style={{ position: 'absolute', top: 0, left: '15%', right: '15%', height: 3, background: `linear-gradient(to right, transparent, ${T.accent}, transparent)`, filter: 'blur(4px)', opacity: 0.5 }} />
        </div>

        <p style={{ fontSize: 'clamp(17px, 2.5vw, 22px)', color: T.secondary, fontWeight: 600, margin: '0 0 14px', maxWidth: 560, lineHeight: 1.4 }}>
          Full-stack developer who ships.
        </p>
        <p style={{ fontSize: 15, color: T.muted, maxWidth: 520, lineHeight: 1.8, margin: '0 0 36px' }}>
          Cybersecurity student at York University building things with real users, not just side projects. TypeScript and Python mostly. React everywhere.
        </p>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 20 }}>
          {[
            { label: '✉ 00khanshariq@gmail.com', href: 'mailto:00khanshariq@gmail.com' },
            { label: 'github.com/shariqsk', href: 'https://github.com/shariqsk' },
            { label: 'linkedin.com/in/shariq-khan', href: 'https://linkedin.com/in/shariq-khan' },
            { label: '(647) 303-6451', href: 'tel:6473036451' },
          ].map(({ label, href }) => (
            <a key={href} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer"
              style={{ fontSize: 12, color: T.muted, textDecoration: 'none', padding: '5px 12px', border: '1px solid rgba(255,255,255,0.2)', borderRadius: 6, transition: 'all 0.12s' }}
              onMouseEnter={e => { e.currentTarget.style.color = T.primary; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.5)'; }}
              onMouseLeave={e => { e.currentTarget.style.color = T.muted; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'; }}
            >{label}</a>
          ))}
        </div>
      </section>

      {/* ── Experience ── */}
      <section style={{ maxWidth: 900, margin: '0 auto', padding: '0 48px 80px' }}>
        <SectionLabel>Experience</SectionLabel>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          {EXPERIENCE.map(job => (
            <div key={job.company} style={{ ...CARD, padding: '26px 30px', borderLeft: `3px solid ${T.accent}` }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 8, marginBottom: 14 }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: 10, flexWrap: 'wrap', marginBottom: 8 }}>
                    <span style={{ fontWeight: 700, color: T.primary, fontSize: 16 }}>{job.company}</span>
                    <span style={{ color: T.accent, fontSize: 13, fontWeight: 500 }}>{job.role}</span>
                  </div>
                  <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                    {job.stack.map(t => (
                      <span key={t} style={{ fontSize: 11, color: T.secondary, background: 'rgba(255,255,255,0.1)', padding: '2px 8px', borderRadius: 4, border: '1px solid rgba(255,255,255,0.15)' }}>{t}</span>
                    ))}
                  </div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontSize: 12, color: T.muted }}>{job.period}</div>
                  <div style={{ fontSize: 11, color: T.dim, marginTop: 2 }}>{job.location}</div>
                </div>
              </div>
              <ul style={{ margin: 0, padding: '0 0 0 16px', display: 'flex', flexDirection: 'column', gap: 6 }}>
                {job.bullets.map((b, i) => (
                  <li key={i} style={{ color: T.secondary, fontSize: 14, lineHeight: 1.7 }}>{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* ── Projects ── */}
      <section style={{ maxWidth: 900, margin: '0 auto', padding: '0 48px 80px' }}>
        <SectionLabel>Projects</SectionLabel>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(380px, 1fr))', gap: 14 }}>
          {PROJECTS.map(p => (
            <a key={p.name} href={p.href} target="_blank" rel="noopener noreferrer"
              style={{ display: 'flex', flexDirection: 'column', ...CARD, padding: '24px', textDecoration: 'none', transition: 'border-color 0.15s, transform 0.15s', position: 'relative', overflow: 'hidden' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.13)'; e.currentTarget.style.transform = 'translateY(0)'; }}
            >
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: p.accent, borderRadius: '12px 12px 0 0' }} />
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 10, paddingTop: 4 }}>
                <div>
                  <div style={{ fontWeight: 700, color: T.primary, fontSize: 16, marginBottom: 3 }}>{p.name}</div>
                  <div style={{ fontSize: 12, color: p.accent }}>{p.tagline}</div>
                </div>
                <span style={{ fontSize: 11, color: T.muted, background: 'rgba(255,255,255,0.1)', padding: '3px 8px', borderRadius: 4, border: '1px solid rgba(255,255,255,0.15)', whiteSpace: 'nowrap' }}>{p.badge}</span>
              </div>
              <p style={{ fontSize: 13, color: T.muted, lineHeight: 1.7, margin: '0 0 16px', flex: 1 }}>{p.desc}</p>
              <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                {p.stack.map(t => (
                  <span key={t} style={{ fontSize: 11, color: T.secondary, background: 'rgba(255,255,255,0.08)', padding: '2px 7px', borderRadius: 3, border: '1px solid rgba(255,255,255,0.12)' }}>{t}</span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* ── Skills ── */}
      <section style={{ maxWidth: 900, margin: '0 auto', padding: '0 48px 80px' }}>
        <SectionLabel>Skills</SectionLabel>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {SKILLS.map(([cat, items]) => (
            <div key={cat} style={{ display: 'flex', gap: 16, alignItems: 'flex-start', flexWrap: 'wrap' }}>
              <span style={{ fontSize: 11, color: T.accent, width: 72, flexShrink: 0, textTransform: 'uppercase', letterSpacing: '0.08em', paddingTop: 3, fontWeight: 700 }}>{cat}</span>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                {items.map(item => (
                  <span key={item} style={{ fontSize: 12, color: T.secondary, background: 'rgba(255,255,255,0.08)', padding: '3px 10px', borderRadius: 5, border: '1px solid rgba(255,255,255,0.12)' }}>{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Education ── */}
      <section style={{ maxWidth: 900, margin: '0 auto', padding: '0 48px 80px' }}>
        <SectionLabel>Education</SectionLabel>
        <div style={{ ...CARD, padding: '24px 28px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 8, marginBottom: 8 }}>
            <div>
              <span style={{ fontWeight: 700, color: T.primary, fontSize: 16 }}>York University</span>
              <span style={{ color: T.muted, fontSize: 13, marginLeft: 10 }}>Specialized Honours BSc, Cyber Security</span>
            </div>
            <span style={{ fontSize: 12, color: T.dim }}>Expected 2027 · Toronto</span>
          </div>
          <p style={{ margin: 0, fontSize: 13, color: T.muted, lineHeight: 1.7 }}>
            Coursework: Advanced OOP, Discrete Mathematics, Computer Organization, Software Tools.
          </p>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ maxWidth: 900, margin: '0 auto', padding: '0 48px 120px' }}>
        <div style={{ ...CARD, background: 'rgba(0,0,0,0.35)', padding: '48px 40px', textAlign: 'center' }}>
          <p style={{ fontSize: 12, color: T.accent, textTransform: 'uppercase', letterSpacing: '0.12em', fontWeight: 700, marginBottom: 16 }}>Let's talk</p>
          <h2 style={{ fontSize: 'clamp(26px, 4vw, 40px)', fontWeight: 800, color: T.primary, margin: '0 0 14px', letterSpacing: '-0.03em' }}>
            Looking for your next hire?
          </h2>
          <p style={{ fontSize: 15, color: T.muted, margin: '0 0 32px', maxWidth: 420, marginLeft: 'auto', marginRight: 'auto', lineHeight: 1.7 }}>
            Available for full-time roles and freelance projects. Quick to pick things up, happy to ship fast.
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="mailto:00khanshariq@gmail.com"
              style={{ fontSize: 14, fontWeight: 600, color: '#fff', textDecoration: 'none', padding: '12px 28px', background: '#0d9488', borderRadius: 8, transition: 'background 0.15s' }}
              onMouseEnter={e => (e.currentTarget.style.background = '#0f766e')}
              onMouseLeave={e => (e.currentTarget.style.background = '#0d9488')}
            >Send me an email</a>
            <a href="https://linkedin.com/in/shariq-khan" target="_blank" rel="noopener noreferrer"
              style={{ fontSize: 14, fontWeight: 600, color: T.secondary, textDecoration: 'none', padding: '12px 28px', border: '1px solid rgba(255,255,255,0.25)', borderRadius: 8, transition: 'all 0.15s' }}
              onMouseEnter={e => { e.currentTarget.style.color = T.primary; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.6)'; }}
              onMouseLeave={e => { e.currentTarget.style.color = T.secondary; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.25)'; }}
            >LinkedIn ↗</a>
          </div>
        </div>
      </section>

    </div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 28 }}>
      <span style={{ fontSize: 11, fontWeight: 700, color: T.accent, textTransform: 'uppercase', letterSpacing: '0.12em' }}>{children}</span>
      <div style={{ flex: 1, height: 1, background: 'rgba(255,255,255,0.1)' }} />
    </div>
  );
}
