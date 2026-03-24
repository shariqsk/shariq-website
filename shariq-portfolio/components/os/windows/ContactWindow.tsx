'use client';

import { useState } from 'react';

const CONTACTS = [
  {
    key: 'email',
    label: 'contact@shariqsafdarkhan.com',
    href: 'mailto:contact@shariqsafdarkhan.com',
    copy: 'contact@shariqsafdarkhan.com',
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
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
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
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
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
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
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
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

      {/* Header */}
      <div style={{
        padding: '6px 8px', marginBottom: 8,
        background: '#fff',
        boxShadow: 'inset 1px 1px #808080, inset -1px -1px #fff',
        fontSize: 11,
      }}>
        <div style={{ fontWeight: 700, marginBottom: 3 }}>Get in touch</div>
        <div style={{ color: '#444' }}>
          Open to collaborations, full-time roles, and interesting conversations.
          I try to reply within 24 hours.
        </div>
      </div>

      {/* Channels */}
      <div className="w95-groupbox">
        <span className="w95-groupbox__label">Channels</span>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 11 }}>
          <tbody>
            {CONTACTS.map((c) => (
              <tr key={c.key} style={{ borderBottom: '1px solid #dfdfdf' }}>
                <td style={{ padding: '5px 6px', color: '#808080', width: 20 }}>{c.icon}</td>
                <td style={{ padding: '5px 4px' }}>
                  <a
                    href={c.href}
                    target={c.key !== 'email' ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    className="os-link"
                  >
                    {c.label}
                  </a>
                </td>
                <td style={{ padding: '5px 4px', textAlign: 'right' }}>
                  <button
                    className="os-btn"
                    style={{ minWidth: 50, padding: '2px 8px', fontSize: 10 }}
                    onClick={() => handleCopy(c.copy, c.key)}
                  >
                    {copied === c.key ? '✓ Copied' : 'Copy'}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Resume */}
      <div className="w95-groupbox">
        <span className="w95-groupbox__label">Resume</span>
        <a
          href="https://drive.google.com/file/d/1l1aJcVBJBbIg0VPKc9LXyG9x5E3l0FIa/view"
          target="_blank"
          rel="noopener noreferrer"
          className="os-btn"
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
            <polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
          </svg>
          Download Resume
        </a>
      </div>

    </div>
  );
}
