'use client';

import Link from 'next/link';

const EXPERIENCE = [
  {
    company: 'Shake Shack',
    role: 'Freelance Full-Stack Developer',
    period: 'Dec 2025 – Feb 2026',
    location: 'Remote',
    bullets: [
      'Built a React Native app to replace a paper-based receipt process — gave store staff a photo/scan trail for chargeback disputes.',
      'Spring Boot API + AWS S3 to store and retrieve order metadata and photo evidence across high-traffic stores.',
      'Streamlined the scan flow enough that staff errors dropped noticeably during peak hours.',
    ],
  },
  {
    company: 'Farrow',
    role: 'Import Analyst',
    period: 'Jun 2024 – Dec 2025',
    location: 'Hybrid',
    bullets: [
      '55–65 daily EDI (ACI/CADEX) releases for enterprise clients — kept clearance rates above 95%.',
      'Worked closely with logistics and compliance to resolve holds inside 24 hours without breaking client SLAs.',
    ],
  },
  {
    company: 'Saftech Designs',
    role: 'Web Developer',
    period: 'Jan 2023 – Apr 2024',
    location: 'Remote',
    bullets: [
      'Rebuilt their platform in Next.js — TTFB and LCP both under 1s, 25% SEO gain from Core Web Vitals.',
      'Added JWT auth, CSP, HSTS, rate limiting. Cleared the OWASP Top 10 across all endpoints.',
      'Set up staging/prod pipeline on Vercel — made deploys boring, which is the goal.',
    ],
  },
];

const PROJECTS = [
  {
    name: 'Zocratic MMA',
    tagline: 'Sports analytics SaaS',
    desc: 'XGBoost win-probability model (~65% accuracy) on scraped UFC data. PostgreSQL schema for 4,000+ fighters. AWS Cognito auth with role-based premium access. 100+ active users.',
    stack: ['Next.js', 'FastAPI', 'PostgreSQL', 'XGBoost', 'AWS'],
    href: 'https://zocraticmma.com',
    badge: '100+ users',
  },
  {
    name: 'Social Desk',
    tagline: 'Cross-platform social scheduler',
    desc: 'Electron app that posts to X, Facebook, Instagram, and TikTok from one place. Playwright-based browser automation, per-account session isolation in SQLite.',
    stack: ['Electron', 'React', 'TypeScript', 'SQLite', 'Playwright'],
    href: 'https://github.com/shariqsk',
    badge: 'Desktop app',
  },
  {
    name: 'CDL Simulator',
    tagline: 'Esports management sim',
    desc: 'Full-stack sim with Elo ratings, salary caps, and playoff brackets. FastAPI engine, persistent React + TypeScript UI.',
    stack: ['React', 'TypeScript', 'FastAPI'],
    href: 'https://cdlsim.com',
    badge: '1,500+ visitors',
  },
  {
    name: 'Phintic',
    tagline: 'Cybersecurity education',
    desc: 'Interactive platform covering phishing, scamware, account takeover — simulation drills and a security knowledge assessment.',
    stack: ['React', 'TypeScript'],
    href: 'https://github.com/shariqsk',
    badge: 'Open source',
  },
];

const SKILLS: [string, string[]][] = [
  ['Languages',   ['TypeScript', 'Python', 'JavaScript', 'Java', 'SQL', 'Bash', 'C']],
  ['Frontend',    ['React', 'Next.js', 'React Native', 'Tailwind CSS', 'Electron']],
  ['Backend',     ['FastAPI', 'Node.js', 'Express.js', 'Spring Boot', 'RESTful APIs']],
  ['Data / ML',   ['PostgreSQL', 'Supabase', 'Redis', 'Prisma', 'SQLite', 'XGBoost']],
  ['Infra',       ['AWS (S3, Cognito)', 'Docker', 'Vercel', 'Nginx', 'GitHub Actions']],
  ['Security',    ['JWT Auth', 'CSP / HSTS', 'OWASP Top 10', 'Rate Limiting', 'Playwright']],
];

export default function RecruiterPage() {
  return (
    <div style={{ position: 'fixed', inset: 0, overflowY: 'auto', background: '#0d0d0d', color: '#d1d5db', fontFamily: "'Segoe UI', system-ui, -apple-system, sans-serif", fontSize: 14 }}>

      {/* Nav */}
      <nav style={{ position: 'sticky', top: 0, zIndex: 50, background: 'rgba(13,13,13,0.9)', backdropFilter: 'blur(8px)', borderBottom: '1px solid #1f1f1f', padding: '10px 40px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Link href="/" style={{ color: '#6b7280', textDecoration: 'none', fontSize: 13, display: 'flex', alignItems: 'center', gap: 6 }}
          onMouseEnter={e => (e.currentTarget.style.color = '#d1d5db')}
          onMouseLeave={e => (e.currentTarget.style.color = '#6b7280')}
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M9 2L4 7l5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          Back
        </Link>
        <a href="https://drive.google.com/file/d/1l1aJcVBJBbIg0VPKc9LXyG9x5E3l0FIa/view" target="_blank" rel="noopener noreferrer"
          style={{ fontSize: 13, color: '#d1d5db', textDecoration: 'none', padding: '5px 14px', border: '1px solid #333', borderRadius: 6 }}
          onMouseEnter={e => { e.currentTarget.style.borderColor = '#555'; e.currentTarget.style.color = '#fff'; }}
          onMouseLeave={e => { e.currentTarget.style.borderColor = '#333'; e.currentTarget.style.color = '#d1d5db'; }}
        >
          Resume PDF ↗
        </a>
      </nav>

      <div style={{ maxWidth: 720, margin: '0 auto', padding: '64px 40px 96px' }}>

        {/* Header */}
        <div style={{ marginBottom: 64 }}>
          <h1 style={{ fontSize: 'clamp(32px, 5vw, 48px)', fontWeight: 700, color: '#f9fafb', margin: '0 0 12px', letterSpacing: '-0.03em', lineHeight: 1.1 }}>
            Shariq Safdar Khan
          </h1>
          <p style={{ fontSize: 15, color: '#9ca3af', margin: '0 0 8px' }}>
            Full-stack dev & Cybersecurity student @ York University · Toronto
          </p>
          <p style={{ fontSize: 15, color: '#6b7280', margin: '0 0 28px', lineHeight: 1.7, maxWidth: 560 }}>
            I build things that ship. Production SaaS, mobile apps, data pipelines — mostly TypeScript and Python on the backend, React everywhere else. Currently finishing my BSc in Cybersecurity while taking on the occasional freelance project.
          </p>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            {[
              ['00khanshariq@gmail.com', 'mailto:00khanshariq@gmail.com'],
              ['github.com/shariqsk', 'https://github.com/shariqsk'],
              ['linkedin.com/in/shariq-khan', 'https://linkedin.com/in/shariq-khan'],
              ['(647) 303-6451', 'tel:6473036451'],
            ].map(([label, href]) => (
              <a key={label} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer"
                style={{ fontSize: 12, color: '#6b7280', textDecoration: 'none', padding: '4px 10px', border: '1px solid #222', borderRadius: 4 }}
                onMouseEnter={e => { e.currentTarget.style.color = '#d1d5db'; e.currentTarget.style.borderColor = '#444'; }}
                onMouseLeave={e => { e.currentTarget.style.color = '#6b7280'; e.currentTarget.style.borderColor = '#222'; }}
              >
                {label}
              </a>
            ))}
          </div>
        </div>

        {/* Experience */}
        <Section label="Experience">
          {EXPERIENCE.map((job, i) => (
            <div key={job.company} style={{ marginBottom: i < EXPERIENCE.length - 1 ? 36 : 0 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 4, marginBottom: 6 }}>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 10 }}>
                  <span style={{ fontWeight: 600, color: '#f3f4f6', fontSize: 15 }}>{job.company}</span>
                  <span style={{ color: '#6b7280', fontSize: 13 }}>{job.role}</span>
                </div>
                <span style={{ fontSize: 12, color: '#4b5563', fontVariantNumeric: 'tabular-nums' }}>{job.period} · {job.location}</span>
              </div>
              <ul style={{ margin: 0, padding: '0 0 0 14px', display: 'flex', flexDirection: 'column', gap: 5 }}>
                {job.bullets.map((b, j) => (
                  <li key={j} style={{ color: '#9ca3af', lineHeight: 1.65 }}>{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </Section>

        {/* Projects */}
        <Section label="Projects">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            {PROJECTS.map(p => (
              <a key={p.name} href={p.href} target="_blank" rel="noopener noreferrer"
                style={{ display: 'block', padding: '16px', borderRadius: 8, textDecoration: 'none', border: '1px solid transparent', transition: 'border-color 0.12s, background 0.12s' }}
                onMouseEnter={e => { e.currentTarget.style.background = '#111'; e.currentTarget.style.borderColor = '#2a2a2a'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = 'transparent'; }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 4, flexWrap: 'wrap', gap: 6 }}>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: 8 }}>
                    <span style={{ fontWeight: 600, color: '#f3f4f6', fontSize: 14 }}>{p.name}</span>
                    <span style={{ fontSize: 12, color: '#6b7280' }}>{p.tagline}</span>
                  </div>
                  <span style={{ fontSize: 11, color: '#4b5563', fontVariantNumeric: 'tabular-nums' }}>{p.badge}</span>
                </div>
                <p style={{ margin: '0 0 10px', color: '#6b7280', fontSize: 13, lineHeight: 1.6 }}>{p.desc}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
                  {p.stack.map(t => (
                    <span key={t} style={{ fontSize: 11, color: '#4b5563', background: '#1a1a1a', padding: '2px 7px', borderRadius: 3 }}>{t}</span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </Section>

        {/* Skills */}
        <Section label="Skills">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {SKILLS.map(([cat, items]) => (
              <div key={cat} style={{ display: 'flex', gap: 12, alignItems: 'baseline', flexWrap: 'wrap' }}>
                <span style={{ fontSize: 11, color: '#4b5563', width: 72, flexShrink: 0, textTransform: 'uppercase', letterSpacing: '0.07em', paddingTop: 2 }}>{cat}</span>
                <span style={{ fontSize: 13, color: '#9ca3af', lineHeight: 1.8 }}>{items.join('  ·  ')}</span>
              </div>
            ))}
          </div>
        </Section>

        {/* Education */}
        <Section label="Education">
          <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 4, marginBottom: 4 }}>
            <div>
              <span style={{ fontWeight: 600, color: '#f3f4f6', fontSize: 15 }}>York University</span>
              <span style={{ color: '#6b7280', fontSize: 13, marginLeft: 10 }}>Specialized Honours BSc, Cyber Security</span>
            </div>
            <span style={{ fontSize: 12, color: '#4b5563' }}>Expected 2027 · Toronto</span>
          </div>
          <p style={{ margin: 0, fontSize: 13, color: '#6b7280', lineHeight: 1.6 }}>
            Coursework: Advanced OOP, Discrete Mathematics, Computer Organization, Software Tools.
          </p>
        </Section>

      </div>
    </div>
  );
}

function Section({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: 52 }}>
      <div style={{ fontSize: 11, fontWeight: 600, color: '#4b5563', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 20, paddingBottom: 10, borderBottom: '1px solid #1a1a1a' }}>{label}</div>
      {children}
    </div>
  );
}
