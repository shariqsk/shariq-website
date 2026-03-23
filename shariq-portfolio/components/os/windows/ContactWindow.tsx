'use client';

import { useState } from 'react';

const CONTACTS = [
  {
    key: 'email',
    label: 'contact@shariqsafdarkhan.com',
    href: 'mailto:contact@shariqsafdarkhan.com',
    copy: 'contact@shariqsafdarkhan.com',
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
        <polyline points="22,6 12,13 2,6"/>
      </svg>
    ),
  },
  {
    key: 'github',
    label: 'github.com/shariqsk',
    href: 'https://github.com/shariqsk',
    copy: 'https://github.com/shariqsk',
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
      </svg>
    ),
  },
  {
    key: 'linkedin',
    label: 'linkedin.com/in/shariq-khan',
    href: 'https://www.linkedin.com/in/shariq-khan-430754217/',
    copy: 'https://www.linkedin.com/in/shariq-khan-430754217/',
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
        <rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
      </svg>
    ),
  },
  {
    key: 'twitter',
    label: 'twitter.com/shariqssk',
    href: 'https://twitter.com/shariqssk',
    copy: 'https://twitter.com/shariqssk',
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M4 4l16 16M4 20L20 4"/>
      </svg>
    ),
  },
];

export default function ContactWindow() {
  const [copied, setCopied] = useState<string | null>(null);

  const handleCopy = async (text: string, key: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(key);
      setTimeout(() => setCopied(null), 1600);
    } catch {}
  };

  return (
    <div className="os-pane" style={{ overflowY: 'auto' }}>

      {/* Header prompt */}
      <div style={{ marginBottom: 20 }}>
        <div className="os-prompt">
          <span className="os-prompt-path">shariq@sk_os:~$</span>{' '}
          <span style={{ color: 'var(--os-amber-bright)' }}>cat contact.gpg</span>
        </div>
        <div style={{ marginTop: 8, paddingLeft: 8, fontSize: 12, color: 'rgba(245,158,11,0.55)', lineHeight: 1.75 }}>
          Open to collaborations, full-time roles, and interesting conversations.
          <br />
          I try to reply within 24 hours.
        </div>
      </div>

      {/* Contact rows */}
      <div style={{ marginBottom: 28 }}>
        <div className="os-section-title">channels</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          {CONTACTS.map((c) => (
            <div
              key={c.key}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 10,
                padding: '8px 10px',
                borderRadius: 3,
                border: '1px solid transparent',
                transition: 'border-color 0.15s, background 0.15s',
                cursor: 'default',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor = 'var(--os-border-dim)';
                (e.currentTarget as HTMLDivElement).style.background = 'rgba(245,158,11,0.04)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor = 'transparent';
                (e.currentTarget as HTMLDivElement).style.background = 'transparent';
              }}
            >
              <span style={{ color: 'var(--os-amber-dim)', flexShrink: 0 }}>{c.icon}</span>

              <a
                href={c.href}
                target={c.key !== 'email' ? '_blank' : undefined}
                rel="noopener noreferrer"
                className="os-link"
                style={{ fontSize: 12, flex: 1 }}
              >
                {c.label}
              </a>

              <button
                onClick={() => handleCopy(c.copy, c.key)}
                style={{
                  background: 'transparent',
                  border: '1px solid var(--os-border-dim)',
                  borderRadius: 3,
                  padding: '2px 8px',
                  fontSize: 9,
                  color: copied === c.key ? '#22c55e' : 'var(--os-text-dim)',
                  cursor: 'pointer',
                  fontFamily: 'monospace',
                  letterSpacing: '0.05em',
                  transition: 'color 0.2s',
                  flexShrink: 0,
                }}
              >
                {copied === c.key ? 'copied!' : 'copy'}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Resume */}
      <div>
        <div className="os-section-title">resume</div>
        <a
          href="https://drive.google.com/file/d/1l1aJcVBJBbIg0VPKc9LXyG9x5E3l0FIa/view"
          target="_blank"
          rel="noopener noreferrer"
          className="os-btn"
          style={{ display: 'inline-flex', gap: 8 }}
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
            <polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
          </svg>
          download resume.pdf
        </a>
      </div>

    </div>
  );
}
