'use client';

import { useState } from 'react';
import { useEffect } from 'react';

interface Project {
  name: string;
  filename: string;
  description: string;
  tags: string[];
  highlight: string | null;
  live: string | null;
  repo: string | null;
  image: string | null;
  isFolder?: boolean;
}

const PROJECTS: Project[] = [
  {
    name: 'Zocratic MMA',
    filename: 'Zocratic MMA',
    description: 'A comprehensive fight analytics platform where fight nerds scout athletes, study matchup data, and build smarter picks with live telemetry and proprietary scoring tiers.',
    tags: ['Next.js', 'FastAPI', 'PyTorch', 'Supabase', 'AWS'],
    highlight: '20+ daily users',
    live: 'https://www.zocraticmma.com',
    repo: 'https://github.com/shariqsk',
    image: '/Screenshot 2025-11-25 114637.png',
    isFolder: true,
  },
  {
    name: 'CDL Simulator',
    filename: 'CDL Simulator',
    description: 'Call of Duty esports league manager with a custom sim engine that models player clashes, utility trades, map control swings, and hazard events through state machines.',
    tags: ['Next.js', 'Framer Motion', 'Supabase', 'Vercel'],
    highlight: '50K+ impressions · 10K+ visitors',
    live: 'https://cdlsimulator.com',
    repo: 'https://github.com/shariqsk/cdlsimulator',
    image: null,
    isFolder: true,
  },
  {
    name: 'Phintic',
    filename: 'Phintic',
    description: 'A practical security education site teaching fundamentals through 8 security topics, interactive simulations, and knowledge tests to build good habits against modern threats.',
    tags: ['Next.js', 'React', 'Security Education'],
    highlight: 'Interactive security simulations',
    live: 'https://phintic.com',
    repo: null,
    image: '/phintic.png',
    isFolder: true,
  },
  {
    name: 'QOTD Bot',
    filename: 'qotd.py',
    description: 'Discord bot that delivers daily inspirational quotes with OAuth2 auth, Docker packaging, and Redis caching for 65% API call reduction.',
    tags: ['Python', 'Docker', 'Redis', 'OAuth2'],
    highlight: '<200ms response times',
    live: null,
    repo: null,
    image: '/QOTD.png',
    isFolder: false,
  },
  {
    name: 'Blink!',
    filename: 'blink.py',
    description: 'Desktop app leveraging computer vision to monitor ocular health. Real-time webcam analysis with on-device processing to track blink frequency and send configurable alerts.',
    tags: ['Python', 'MediaPipe', 'OpenCV', 'PyQt6', 'ML'],
    highlight: 'Privacy-first on-device processing',
    live: null,
    repo: 'https://github.com/shariqsk/blink',
    image: null,
    isFolder: false,
  },
  {
    name: 'ResuSense',
    filename: 'ResuSense',
    description: 'AI-powered resume optimizer that tailors LaTeX resumes to specific job descriptions. Features real-time PDF preview, job URL scraping, and keyword matching.',
    tags: ['Next.js', 'TypeScript', 'AI', 'LaTeX'],
    highlight: 'Real LaTeX compilation with live preview',
    live: null,
    repo: 'https://github.com/shariqsk/ResuSense',
    image: '/ResuSense.png',
    isFolder: true,
  },
];

/* Small inline folder/file SVG for the sidebar list */
function FileIcon({ isFolder }: { isFolder?: boolean }) {
  if (isFolder) {
    return (
      <svg width="16" height="16" viewBox="0 0 16 16" shapeRendering="crispEdges" style={{ flexShrink: 0 }}>
        <rect x="0" y="4" width="6" height="3" fill="#c8960c" stroke="#000" strokeWidth="0.5"/>
        <rect x="0" y="6" width="16" height="9" fill="#ffcc44" stroke="#000" strokeWidth="0.5"/>
      </svg>
    );
  }
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" shapeRendering="crispEdges" style={{ flexShrink: 0 }}>
      <polygon points="2,1 10,1 14,5 14,15 2,15" fill="#fff" stroke="#000" strokeWidth="0.5"/>
      <polygon points="10,1 14,5 10,5" fill="#808080" stroke="#000" strokeWidth="0.5"/>
    </svg>
  );
}

export default function ProjectsWindow() {
  const [selected, setSelected] = useState<Project>(PROJECTS[0]);
  const [imageFailed, setImageFailed] = useState(false);

  useEffect(() => {
    setImageFailed(false);
  }, [selected.filename]);

  return (
    <div style={{ display: 'flex', height: '100%', overflow: 'hidden', fontFamily: "'Tahoma', Arial, sans-serif", fontSize: 11 }}>

      {/* Left file list */}
      <div style={{
        width: 180, flexShrink: 0,
        borderRight: '2px solid #808080',
        overflowY: 'auto',
        background: '#fff',
        boxShadow: 'inset 2px 2px #808080, inset -2px -2px #fff',
      }}>
        <div style={{
          background: '#000080', color: '#fff',
          padding: '2px 6px', fontSize: 11, fontWeight: 700,
          borderBottom: '1px solid #000',
        }}>
          All Projects
        </div>
        <div>
          {PROJECTS.map((p) => {
            const isActive = selected.filename === p.filename;
            return (
              <div
                key={p.filename}
                className={`os-project-item ${isActive ? 'os-project-item--active' : ''}`}
                onClick={() => setSelected(p)}
              >
                <FileIcon isFolder={p.isFolder} />
                <span>{p.name}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Right detail pane */}
      <div style={{ flex: 1, overflowY: 'auto', padding: '10px 12px', background: '#c0c0c0' }}>

        {/* Title row */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
          <FileIcon isFolder={selected.isFolder} />
          <span style={{ fontWeight: 700, fontSize: 13 }}>{selected.name}</span>
          {selected.highlight && (
            <span className="os-tag" style={{ marginLeft: 4 }}>{selected.highlight}</span>
          )}
        </div>

        <div className="w95-separator" />

        {/* Description */}
        <div className="w95-groupbox">
          <span className="w95-groupbox__label">Description</span>
          <p style={{ fontSize: 11, lineHeight: 1.7, color: '#000' }}>{selected.description}</p>
        </div>

        {/* Image */}
        <div className="w95-groupbox">
          <span className="w95-groupbox__label">Image</span>
          <div
            style={{
              background: '#000',
              border: '1px solid #808080',
              boxShadow: 'inset 1px 1px #404040, inset -1px -1px #fff',
              width: '100%',
              maxWidth: 420,
              aspectRatio: '16 / 9',
              overflow: 'hidden',
            }}
          >
            {selected.image && !imageFailed ? (
              <img
                src={selected.image}
                alt={`${selected.name} preview`}
                style={{ width: '100%', height: '100%', objectFit: 'contain', display: 'block', background: '#111' }}
                onError={() => setImageFailed(true)}
              />
            ) : (
              <div
                style={{
                  width: '100%',
                  height: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#c0c0c0',
                  fontSize: 11,
                  textAlign: 'center',
                  padding: 10,
                }}
              >
                No project image available
              </div>
            )}
          </div>
        </div>

        {/* Stack */}
        <div className="w95-groupbox">
          <span className="w95-groupbox__label">Stack</span>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
            {selected.tags.map((t) => (
              <span key={t} className="os-tag">{t}</span>
            ))}
          </div>
        </div>

        {/* Links */}
        {(selected.live || selected.repo) && (
          <div className="w95-groupbox">
            <span className="w95-groupbox__label">Links</span>
            <div style={{ display: 'flex', gap: 8 }}>
              {selected.live && (
                <a href={selected.live} target="_blank" rel="noopener noreferrer" className="os-btn">
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                    <polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
                  </svg>
                  Live Site
                </a>
              )}
              {selected.repo && (
                <a href={selected.repo} target="_blank" rel="noopener noreferrer" className="os-btn">
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
                  </svg>
                  GitHub
                </a>
              )}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
