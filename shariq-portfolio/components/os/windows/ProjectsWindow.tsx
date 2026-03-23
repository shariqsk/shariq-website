'use client';

import { useState } from 'react';
import { FolderIcon, DocumentIcon } from '@/components/os/DesktopIcon';

interface Project {
  name: string;
  filename: string;
  description: string;
  tags: string[];
  highlight: string | null;
  live: string | null;
  repo: string | null;
  isFolder?: boolean;
}

const PROJECTS: Project[] = [
  {
    name: 'Zocratic MMA',
    filename: 'zocratic/',
    description:
      'A comprehensive fight analytics platform where fight nerds scout athletes, study matchup data, and build smarter picks with live telemetry and proprietary scoring tiers.',
    tags: ['Next.js', 'FastAPI', 'PyTorch', 'Supabase', 'AWS'],
    highlight: '20+ daily users',
    live: 'https://www.zocraticmma.com',
    repo: 'https://github.com/shariqsk',
    isFolder: true,
  },
  {
    name: 'CDL Simulator',
    filename: 'cdl-sim/',
    description:
      'Call of Duty esports league manager with a custom sim engine that models player clashes, utility trades, map control swings, and hazard events through state machines.',
    tags: ['Next.js', 'Framer Motion', 'Supabase', 'Vercel'],
    highlight: '50K+ impressions · 10K+ visitors',
    live: 'https://cdlsimulator.com',
    repo: 'https://github.com/shariqsk/cdlsimulator',
    isFolder: true,
  },
  {
    name: 'Phintic',
    filename: 'phintic/',
    description:
      'A practical security education site teaching fundamentals through 8 security topics, interactive simulations, and knowledge tests to build good habits against modern threats.',
    tags: ['Next.js', 'React', 'Security Education'],
    highlight: 'Interactive security simulations',
    live: 'https://phintic.com',
    repo: null,
    isFolder: true,
  },
  {
    name: 'QOTD Bot',
    filename: 'qotd.py',
    description:
      'Discord bot that delivers daily inspirational quotes with OAuth2 auth, Docker packaging, and Redis caching for 65% API call reduction.',
    tags: ['Python', 'Docker', 'Redis', 'OAuth2'],
    highlight: '<200ms response times',
    live: null,
    repo: null,
    isFolder: false,
  },
  {
    name: 'Blink!',
    filename: 'blink.py',
    description:
      'Desktop app leveraging computer vision to monitor ocular health. Real-time webcam analysis with on-device processing to track blink frequency and send configurable alerts.',
    tags: ['Python', 'MediaPipe', 'OpenCV', 'PyQt6', 'ML'],
    highlight: 'Privacy-first on-device processing',
    live: null,
    repo: 'https://github.com/shariqsk/blink',
    isFolder: false,
  },
  {
    name: 'ResuSense',
    filename: 'resumense/',
    description:
      'AI-powered resume optimizer that tailors LaTeX resumes to specific job descriptions. Features real-time PDF preview, job URL scraping, and keyword matching.',
    tags: ['Next.js', 'TypeScript', 'AI', 'LaTeX'],
    highlight: 'Real LaTeX compilation with live preview',
    live: null,
    repo: 'https://github.com/shariqsk/ResuSense',
    isFolder: true,
  },
];

export default function ProjectsWindow() {
  const [selected, setSelected] = useState<Project>(PROJECTS[0]);

  return (
    <div style={{ display: 'flex', height: '100%', overflow: 'hidden' }}>

      {/* Left pane: file list */}
      <div
        style={{
          width: 200,
          flexShrink: 0,
          borderRight: '1px solid var(--os-border-dim)',
          overflowY: 'auto',
          padding: '8px 0',
        }}
      >
        <div
          style={{
            padding: '4px 12px 8px',
            fontSize: 9,
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            color: 'var(--os-text-dim)',
            borderBottom: '1px solid var(--os-border-dim)',
            marginBottom: 4,
          }}
        >
          ~/projects
        </div>

        {PROJECTS.map((p) => (
          <div
            key={p.filename}
            className={`os-project-item ${selected.filename === p.filename ? 'os-project-item--active' : ''}`}
            onClick={() => setSelected(p)}
          >
            <div style={{ width: 16, flexShrink: 0, opacity: 0.7 }}>
              {p.isFolder ? (
                <svg width="14" height="13" viewBox="0 0 40 36" fill="none">
                  <path
                    d="M2 8C2 6.34 3.34 5 5 5H15L19 9H35C36.66 9 38 10.34 38 12V30C38 31.66 36.66 33 35 33H5C3.34 33 2 31.66 2 30V8Z"
                    stroke="currentColor" strokeWidth="2" fill="rgba(245,158,11,0.15)"
                  />
                </svg>
              ) : (
                <svg width="12" height="14" viewBox="0 0 36 40" fill="none">
                  <path
                    d="M4 2H22L34 14V38C34 39.1 33.1 40 32 40H4C2.9 40 2 39.1 2 38V4C2 2.9 2.9 2 4 2Z"
                    stroke="currentColor" strokeWidth="2.5" fill="rgba(245,158,11,0.08)"
                  />
                </svg>
              )}
            </div>
            <span style={{ fontSize: 11, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
              {p.filename}
            </span>
          </div>
        ))}
      </div>

      {/* Right pane: detail */}
      <div style={{ flex: 1, overflowY: 'auto', padding: 20 }}>
        <div style={{ marginBottom: 16 }}>
          <div style={{ fontSize: 16, color: 'var(--os-amber-bright)', fontWeight: 600, marginBottom: 4 }}>
            {selected.name}
          </div>
          {selected.highlight && (
            <div
              style={{
                display: 'inline-block',
                fontSize: 10,
                padding: '2px 8px',
                border: '1px solid var(--os-border)',
                borderRadius: 2,
                color: 'var(--os-amber-dim)',
                marginBottom: 12,
                letterSpacing: '0.05em',
              }}
            >
              ▸ {selected.highlight}
            </div>
          )}
          <p style={{ fontSize: 12, color: 'rgba(245,158,11,0.6)', lineHeight: 1.75, margin: '0 0 16px' }}>
            {selected.description}
          </p>
        </div>

        {/* Tags */}
        <div style={{ marginBottom: 16 }}>
          <div className="os-section-title">stack</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
            {selected.tags.map((t) => (
              <span key={t} className="os-tag">{t}</span>
            ))}
          </div>
        </div>

        {/* Links */}
        {(selected.live || selected.repo) && (
          <div>
            <div className="os-section-title">links</div>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              {selected.live && (
                <a href={selected.live} target="_blank" rel="noopener noreferrer" className="os-btn">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/>
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                  </svg>
                  live site
                </a>
              )}
              {selected.repo && (
                <a href={selected.repo} target="_blank" rel="noopener noreferrer" className="os-btn">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
                  </svg>
                  github
                </a>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
