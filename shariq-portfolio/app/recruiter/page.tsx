'use client';

import Link from 'next/link';
import { SparklesCore } from '@/components/ui/sparkles';

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

export default function RecruiterPage() {
  return (
    <div style={{
      position: 'fixed', inset: 0, overflowY: 'auto',
      background: '#0e0e12', color: '#e5e7eb',
      fontFamily: "'Segoe UI', system-ui, -apple-system, sans-serif",
      fontSize: 14, lineHeight: 1.6,
    }}>

      {/* ── Nav ── */}
      <nav style={{
        position: 'sticky', top: 0, zIndex: 50,
        background: 'rgba(14,14,18,0.85)', backdropFilter: 'blur(12px)',
        borderBottom: '1px solid #1c1c22',
        padding: '0 40px', height: 52,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        <Link href="/" style={{ color: '#4b5563', textDecoration: 'none', fontSize: 13, display: 'flex', alignItems: 'center', gap: 6, transition: 'color 0.15s' }}
          onMouseEnter={e => (e.currentTarget.style.color = '#9ca3af')}
          onMouseLeave={e => (e.currentTarget.style.color = '#4b5563')}
        >
          <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
            <path d="M8.5 1.5L3.5 6.5l5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Back to desktop
        </Link>
        <a
          href="https://drive.google.com/file/d/1l1aJcVBJBbIg0VPKc9LXyG9x5E3l0FIa/view"
          target="_blank" rel="noopener noreferrer"
          style={{ fontSize: 12, color: '#f9fafb', textDecoration: 'none', padding: '6px 16px', background: '#0d9488', borderRadius: 6, fontWeight: 600, letterSpacing: '0.02em', transition: 'background 0.15s' }}
          onMouseEnter={e => (e.currentTarget.style.background = '#0f766e')}
          onMouseLeave={e => (e.currentTarget.style.background = '#0d9488')}
        >
          Resume PDF ↗
        </a>
      </nav>

      {/* ── Hero ── */}
      <section style={{ maxWidth: 900, margin: '0 auto', padding: '80px 48px 72px' }}>
        <p style={{ fontSize: 12, fontWeight: 600, color: '#0d9488', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: 28 }}>
          Available for hire · Toronto, ON
        </p>

        {/* Sparkles nameplate */}
        <div style={{ position: 'relative', marginBottom: 32 }}>
          <h1 style={{
            fontSize: 'clamp(48px, 7vw, 80px)', fontWeight: 800, color: '#ffffff',
            lineHeight: 1.05, margin: 0, letterSpacing: '-0.04em',
            position: 'relative', zIndex: 10,
          }}>
            Shariq<br />Safdar Khan.
          </h1>
          {/* Sparkles layer behind the name */}
          <div style={{ position: 'absolute', inset: '-20px -40px', zIndex: 1, pointerEvents: 'none' }}>
            <SparklesCore
              background="transparent"
              minSize={0.4}
              maxSize={1.2}
              particleDensity={60}
              particleColor="#0d9488"
              speed={2}
              className="w-full h-full"
            />
          </div>
        </div>

        <p style={{ fontSize: 'clamp(17px, 2.5vw, 21px)', color: '#4b5563', fontWeight: 500, margin: '0 0 16px', maxWidth: 560, lineHeight: 1.4 }}>
          Full-stack developer who ships.
        </p>
        <p style={{ fontSize: 15, color: '#6b7280', maxWidth: 520, lineHeight: 1.8, margin: '0 0 36px' }}>
          Cybersecurity student at York University building things with real users, not just side projects. TypeScript and Python mostly. React everywhere.
        </p>
        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginBottom: 20 }}>
          {[
            { label: '✉ 00khanshariq@gmail.com', href: 'mailto:00khanshariq@gmail.com' },
            { label: 'github.com/shariqsk', href: 'https://github.com/shariqsk' },
            { label: 'linkedin.com/in/shariq-khan', href: 'https://linkedin.com/in/shariq-khan' },
            { label: '(647) 303-6451', href: 'tel:6473036451' },
          ].map(({ label, href }) => (
            <a key={href} href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer"
              style={{ fontSize: 12, color: '#6b7280', textDecoration: 'none', padding: '5px 12px', border: '1px solid #1e1e1e', borderRadius: 6, transition: 'all 0.12s' }}
              onMouseEnter={e => { e.currentTarget.style.color = '#e5e7eb'; e.currentTarget.style.borderColor = '#374151'; }}
              onMouseLeave={e => { e.currentTarget.style.color = '#6b7280'; e.currentTarget.style.borderColor = '#1e1e1e'; }}
            >
              {label}
            </a>
          ))}
        </div>
      </section>

      {/* ── Experience ── */}
      <section style={{ maxWidth: 900, margin: '0 auto', padding: '0 48px 80px' }}>
        <SectionLabel>Experience</SectionLabel>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {EXPERIENCE.map(job => (
            <div key={job.company} style={{
              background: '#0c0c0c', border: '1px solid #1a1a1a', borderRadius: 12,
              padding: '28px 32px', borderLeft: '3px solid #0d9488',
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 8, marginBottom: 16 }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: 10, flexWrap: 'wrap' }}>
                    <span style={{ fontWeight: 700, color: '#f9fafb', fontSize: 17 }}>{job.company}</span>
                    <span style={{ color: '#0d9488', fontSize: 13, fontWeight: 500 }}>{job.role}</span>
                  </div>
                  <div style={{ display: 'flex', gap: 6, marginTop: 10, flexWrap: 'wrap' }}>
                    {job.stack.map(t => (
                      <span key={t} style={{ fontSize: 11, color: '#6b7280', background: '#161616', padding: '2px 8px', borderRadius: 4, border: '1px solid #222' }}>{t}</span>
                    ))}
                  </div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontSize: 12, color: '#4b5563' }}>{job.period}</div>
                  <div style={{ fontSize: 11, color: '#374151', marginTop: 2 }}>{job.location}</div>
                </div>
              </div>
              <ul style={{ margin: 0, padding: '0 0 0 16px', display: 'flex', flexDirection: 'column', gap: 6 }}>
                {job.bullets.map((b, i) => (
                  <li key={i} style={{ color: '#9ca3af', fontSize: 14, lineHeight: 1.7 }}>{b}</li>
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
              style={{ display: 'flex', flexDirection: 'column', background: '#0c0c0c', border: '1px solid #1a1a1a', borderRadius: 12, padding: '24px', textDecoration: 'none', transition: 'border-color 0.15s, transform 0.15s', position: 'relative', overflow: 'hidden' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = '#2a2a2a'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = '#1a1a1a'; e.currentTarget.style.transform = 'translateY(0)'; }}
            >
              {/* accent stripe */}
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: p.accent, borderRadius: '12px 12px 0 0' }} />
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 10, paddingTop: 4 }}>
                <div>
                  <div style={{ fontWeight: 700, color: '#f9fafb', fontSize: 16, marginBottom: 3 }}>{p.name}</div>
                  <div style={{ fontSize: 12, color: p.accent }}>{p.tagline}</div>
                </div>
                <span style={{ fontSize: 11, color: '#4b5563', background: '#161616', padding: '3px 8px', borderRadius: 4, border: '1px solid #222', whiteSpace: 'nowrap' }}>{p.badge}</span>
              </div>
              <p style={{ fontSize: 13, color: '#6b7280', lineHeight: 1.7, margin: '0 0 16px', flex: 1 }}>{p.desc}</p>
              <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                {p.stack.map(t => (
                  <span key={t} style={{ fontSize: 11, color: '#4b5563', background: '#141414', padding: '2px 7px', borderRadius: 3, border: '1px solid #1e1e1e' }}>{t}</span>
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
              <span style={{ fontSize: 11, color: '#374151', width: 72, flexShrink: 0, textTransform: 'uppercase', letterSpacing: '0.08em', paddingTop: 3, fontWeight: 600 }}>{cat}</span>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                {items.map(item => (
                  <span key={item} style={{ fontSize: 12, color: '#9ca3af', background: '#0f0f0f', padding: '3px 10px', borderRadius: 5, border: '1px solid #1c1c1c' }}>{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Education ── */}
      <section style={{ maxWidth: 900, margin: '0 auto', padding: '0 48px 80px' }}>
        <SectionLabel>Education</SectionLabel>
        <div style={{ background: '#0c0c0c', border: '1px solid #1a1a1a', borderRadius: 12, padding: '24px 28px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 8, marginBottom: 8 }}>
            <div>
              <span style={{ fontWeight: 700, color: '#f9fafb', fontSize: 16 }}>York University</span>
              <span style={{ color: '#6b7280', fontSize: 13, marginLeft: 10 }}>Specialized Honours BSc, Cyber Security</span>
            </div>
            <span style={{ fontSize: 12, color: '#4b5563' }}>Expected 2027 · Toronto</span>
          </div>
          <p style={{ margin: 0, fontSize: 13, color: '#6b7280', lineHeight: 1.7 }}>
            Coursework: Advanced OOP, Discrete Mathematics, Computer Organization, Software Tools.
          </p>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ maxWidth: 900, margin: '0 auto', padding: '0 48px 120px' }}>
        <div style={{ background: 'linear-gradient(135deg, #0c1a1a 0%, #0a0a0a 100%)', border: '1px solid #1a2e2e', borderRadius: 16, padding: '48px 40px', textAlign: 'center' }}>
          <p style={{ fontSize: 13, color: '#0d9488', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 600, marginBottom: 16 }}>Let's talk</p>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 800, color: '#f9fafb', margin: '0 0 16px', letterSpacing: '-0.03em' }}>
            Looking for your next hire?
          </h2>
          <p style={{ fontSize: 15, color: '#6b7280', margin: '0 0 32px', maxWidth: 420, marginLeft: 'auto', marginRight: 'auto', lineHeight: 1.7 }}>
            I'm available for full-time roles and freelance projects. Quick to pick things up, happy to ship fast.
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="mailto:00khanshariq@gmail.com"
              style={{ fontSize: 14, fontWeight: 600, color: '#fff', textDecoration: 'none', padding: '12px 28px', background: '#0d9488', borderRadius: 8, transition: 'background 0.15s' }}
              onMouseEnter={e => (e.currentTarget.style.background = '#0f766e')}
              onMouseLeave={e => (e.currentTarget.style.background = '#0d9488')}
            >
              Send me an email
            </a>
            <a href="https://linkedin.com/in/shariq-khan" target="_blank" rel="noopener noreferrer"
              style={{ fontSize: 14, fontWeight: 600, color: '#9ca3af', textDecoration: 'none', padding: '12px 28px', border: '1px solid #2a2a2a', borderRadius: 8, transition: 'all 0.15s' }}
              onMouseEnter={e => { e.currentTarget.style.color = '#f9fafb'; e.currentTarget.style.borderColor = '#4b5563'; }}
              onMouseLeave={e => { e.currentTarget.style.color = '#9ca3af'; e.currentTarget.style.borderColor = '#2a2a2a'; }}
            >
              LinkedIn ↗
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 28 }}>
      <span style={{ fontSize: 11, fontWeight: 700, color: '#374151', textTransform: 'uppercase', letterSpacing: '0.12em' }}>{children}</span>
      <div style={{ flex: 1, height: 1, background: '#141414' }} />
    </div>
  );
}
