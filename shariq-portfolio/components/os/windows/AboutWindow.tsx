'use client';

import { useState, useEffect } from 'react';

const SKILLS = [
  { name: 'Next.js / React',  pct: 88 },
  { name: 'TypeScript',       pct: 85 },
  { name: 'Python / FastAPI', pct: 82 },
  { name: 'Cybersecurity',    pct: 72 },
  { name: 'Docker / AWS',     pct: 65 },
  { name: 'Machine Learning', pct: 60 },
];

const INFO_ROWS: [string, string][] = [
  ['Location',  'Toronto, Ontario, Canada'],
  ['Education', 'BSc Cybersecurity — York University'],
  ['Currently', 'Import Analyst @ Farrow'],
  ['Email',     'contact@shariqsafdarkhan.com'],
];

function ProgressBar({ pct, delay }: { pct: number; delay: number }) {
  const [filled, setFilled] = useState(0);
  useEffect(() => {
    const t = setTimeout(() => setFilled(pct), delay);
    return () => clearTimeout(t);
  }, [pct, delay]);

  return (
    <span className="os-progress-track">
      <span className="os-progress-fill" style={{ width: `${filled}%` }} />
    </span>
  );
}

export default function AboutWindow() {
  return (
    <div className="os-pane" style={{ overflowY: 'auto' }}>

      {/* Header card */}
      <div style={{
        display: 'flex', alignItems: 'center', gap: 12,
        marginBottom: 10, padding: '6px 8px',
        background: '#fff',
        boxShadow: 'inset 1px 1px #808080, inset -1px -1px #fff',
      }}>
        <div style={{
          width: 44, height: 44, background: '#000080',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: '#fff', fontWeight: 700, fontSize: 14, flexShrink: 0,
          border: '1px solid #000',
        }}>
          SK
        </div>
        <div>
          <div style={{ fontWeight: 700, fontSize: 13, marginBottom: 2 }}>Shariq Khan</div>
          <div style={{ color: '#444', fontSize: 11 }}>Cybersecurity Student &amp; Full-Stack Developer</div>
          <div style={{ fontSize: 10, color: '#808080', marginTop: 2 }}>Toronto · York University</div>
        </div>
      </div>

      {/* Bio */}
      <div className="w95-groupbox">
        <span className="w95-groupbox__label">About</span>
        <p style={{ fontSize: 11, lineHeight: 1.7, color: '#000' }}>
          I&apos;m a 20-year-old Cybersecurity student at York University building secure,
          scalable applications with a security-first approach. I solve complex engineering
          challenges across the full stack — from real-time fight analytics to on-device
          computer vision — while keeping security baked in from the ground up.
        </p>
      </div>

      {/* Info */}
      <div className="w95-groupbox">
        <span className="w95-groupbox__label">Info</span>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 11 }}>
          <tbody>
            {INFO_ROWS.map(([k, v]) => (
              <tr key={k}>
                <td style={{ color: '#808080', fontWeight: 700, paddingRight: 12, paddingBottom: 4, whiteSpace: 'nowrap', width: 80 }}>{k}:</td>
                <td style={{ paddingBottom: 4 }}>{v}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Skills */}
      <div className="w95-groupbox">
        <span className="w95-groupbox__label">Skills</span>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
          {SKILLS.map(({ name, pct }, i) => (
            <div key={name} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 11 }}>
              <span style={{ width: 130, flexShrink: 0 }}>{name}</span>
              <ProgressBar pct={pct} delay={i * 80} />
              <span style={{ color: '#000080', fontWeight: 700, width: 32, textAlign: 'right' }}>{pct}%</span>
            </div>
          ))}
        </div>
      </div>

      {/* Links */}
      <div className="w95-groupbox">
        <span className="w95-groupbox__label">Links</span>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
          {[
            { label: 'GitHub',   href: 'https://github.com/shariqsk' },
            { label: 'LinkedIn', href: 'https://www.linkedin.com/in/shariq-khan-430754217/' },
            { label: 'Twitter',  href: 'https://twitter.com/shariqssk' },
            { label: 'Blog',     href: 'https://shariqsk.github.io/' },
          ].map(({ label, href }) => (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="os-btn">
              {label}
            </a>
          ))}
        </div>
      </div>

    </div>
  );
}
