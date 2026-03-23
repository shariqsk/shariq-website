'use client';

import { useState, useEffect } from 'react';

const SKILLS = [
  { name: 'Next.js / React',      pct: 88 },
  { name: 'Python / FastAPI',     pct: 82 },
  { name: 'TypeScript',           pct: 85 },
  { name: 'Cybersecurity',        pct: 72 },
  { name: 'Docker / AWS',         pct: 65 },
  { name: 'Machine Learning',     pct: 60 },
];

function ProgressBar({ pct, delay }: { pct: number; delay: number }) {
  const [filled, setFilled] = useState(0);

  useEffect(() => {
    const t = setTimeout(() => setFilled(pct), delay);
    return () => clearTimeout(t);
  }, [pct, delay]);

  const blocks = Math.round((filled / 100) * 20);
  const bar = '█'.repeat(blocks) + '░'.repeat(20 - blocks);

  return (
    <span style={{ color: 'var(--os-amber-dim)', fontFamily: 'monospace', letterSpacing: '-0.02em' }}>
      {bar}
    </span>
  );
}

export default function AboutWindow() {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShowContent(true), 120);
    return () => clearTimeout(t);
  }, []);

  if (!showContent) return null;

  return (
    <div className="os-pane" style={{ overflowY: 'auto', lineHeight: 1.7 }}>

      {/* whoami output */}
      <div style={{ marginBottom: 20 }}>
        <div className="os-prompt">
          <span className="os-prompt-path">shariq@sk_os:~$</span>{' '}
          <span style={{ color: 'var(--os-amber-bright)' }}>whoami</span>
        </div>
        <div style={{ marginTop: 10, paddingLeft: 8, borderLeft: '2px solid var(--os-border-dim)' }}>
          <div style={{ fontSize: 20, color: 'var(--os-amber-bright)', fontWeight: 600, marginBottom: 4, letterSpacing: '0.04em' }}>
            Shariq Khan
          </div>
          <div style={{ color: 'var(--os-amber-dim)', fontSize: 12, marginBottom: 12 }}>
            Cybersecurity Student &amp; Full-Stack Developer
          </div>
          <table style={{ fontSize: 11, borderSpacing: '0 4px', borderCollapse: 'separate' }}>
            <tbody>
              {[
                ['uid',      '1000(shariq)'],
                ['groups',   'developers, security, york-university'],
                ['location', 'Toronto, Ontario, Canada'],
                ['education','BSc Cybersecurity — York University'],
                ['work',     'Import Analyst @ Farrow'],
                ['email',    'contact@shariqsafdarkhan.com'],
              ].map(([k, v]) => (
                <tr key={k}>
                  <td style={{ color: 'var(--os-amber-dim)', paddingRight: 16, whiteSpace: 'nowrap' }}>{k}</td>
                  <td style={{ color: 'var(--os-text-bright)' }}>{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* cat bio.txt */}
      <div style={{ marginBottom: 20 }}>
        <div className="os-prompt">
          <span className="os-prompt-path">shariq@sk_os:~$</span>{' '}
          <span style={{ color: 'var(--os-amber-bright)' }}>cat bio.txt</span>
        </div>
        <div style={{ marginTop: 8, paddingLeft: 8, borderLeft: '2px solid var(--os-border-dim)', color: 'rgba(245,158,11,0.65)', fontSize: 12, lineHeight: 1.8 }}>
          <p style={{ margin: '0 0 8px' }}>
            I'm a 20-year-old Cybersecurity student at York University building secure,
            scalable applications with a security-first approach.
          </p>
          <p style={{ margin: 0 }}>
            I solve complex engineering challenges across the full stack — from real-time
            fight analytics platforms to on-device computer vision tools — while keeping
            security baked in from the ground up, not bolted on after.
          </p>
        </div>
      </div>

      {/* skills */}
      <div style={{ marginBottom: 20 }}>
        <div className="os-prompt">
          <span className="os-prompt-path">shariq@sk_os:~$</span>{' '}
          <span style={{ color: 'var(--os-amber-bright)' }}>cat /proc/skills</span>
        </div>
        <div style={{ marginTop: 10, paddingLeft: 8 }}>
          {SKILLS.map(({ name, pct }, i) => (
            <div
              key={name}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 12,
                marginBottom: 8,
                fontSize: 11,
              }}
            >
              <span style={{ color: 'var(--os-text)', width: 160, flexShrink: 0 }}>{name}</span>
              <ProgressBar pct={pct} delay={i * 80} />
              <span style={{ color: 'var(--os-amber-dim)', fontSize: 10, width: 32, textAlign: 'right' }}>
                {pct}%
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* links */}
      <div>
        <div className="os-prompt">
          <span className="os-prompt-path">shariq@sk_os:~$</span>{' '}
          <span style={{ color: 'var(--os-amber-bright)' }}>ls -la ./links/</span>
        </div>
        <div style={{ marginTop: 10, paddingLeft: 8, display: 'flex', flexWrap: 'wrap', gap: 8 }}>
          {[
            { label: 'github',   href: 'https://github.com/shariqsk' },
            { label: 'linkedin', href: 'https://www.linkedin.com/in/shariq-khan-430754217/' },
            { label: 'twitter',  href: 'https://twitter.com/shariqssk' },
            { label: 'blog',     href: 'https://shariqsk.github.io/' },
          ].map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="os-btn"
              style={{ fontSize: 11 }}
            >
              ./{label}
            </a>
          ))}
        </div>
      </div>

    </div>
  );
}
