'use client';

const SKILLS: Record<string, { color: string; items: string[] }> = {
  'Frontend': { color: '#0078d4', items: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'] },
  'Backend':  { color: '#00897b', items: ['Python', 'FastAPI', 'Node.js', 'PostgreSQL', 'Redis'] },
  'Security': { color: '#c62828', items: ['Pen Testing', 'Defensive Security', 'OSINT', 'Cryptography'] },
  'Infra':    { color: '#6a1b9a', items: ['Docker', 'AWS', 'Vercel', 'Linux', 'Git'] },
  'ML / CV':  { color: '#e65100', items: ['PyTorch', 'MediaPipe', 'OpenCV', 'scikit-learn'] },
};

const LINKS = [
  { label: 'GitHub',   href: 'https://github.com/shariqsk',            color: '#24292e' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/shariq-khan-430754217/', color: '#0077b5' },
  { label: 'Twitter',  href: 'https://twitter.com/shariqssk',          color: '#1da1f2' },
  { label: 'Blog',     href: 'https://shariqsk.github.io/',            color: '#ff6f00' },
];

export default function AboutWindow() {
  return (
    <div className="about-window os-pane" style={{ overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: 10 }}>

      <div className="about-hero">
        <div className="about-hero__avatar">
          <div className="about-hero__avatar-core">SK</div>
          <span className="about-hero__online" />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 2, flex: 1 }}>
          <div style={{ fontWeight: 700, fontSize: 16, color: '#f8fafc' }}>Shariq Khan</div>
          <div style={{ fontSize: 11, color: '#dbe5f2' }}>Cybersecurity Student & Full-Stack Developer</div>
          <div style={{ fontSize: 10, color: '#aabbd4' }}>Toronto · York University · Class of 2028</div>
        </div>
      </div>

      <div className="about-status">
        <span style={{
          display: 'inline-block', width: 8, height: 8,
          background: '#4caf50', borderRadius: '50%',
          boxShadow: '0 0 4px #4caf50',
          animation: 'status-pulse 2s ease-in-out infinite',
        }} />
        <span style={{ color: '#333' }}>
          <strong>Looking for opportunities</strong> — open to internships, co-ops, and full-time roles
        </span>
      </div>

      <div className="about-section w95-groupbox">
        <span className="w95-groupbox__label">About</span>
        <p style={{ fontSize: 11, lineHeight: 1.75, color: '#111', marginBottom: 6 }}>
          I&apos;m a cybersecurity student at York University (expected 2028) who builds secure, scalable products
          with a practical engineering mindset. I like shipping full-stack systems where UX feels smooth, performance
          is intentional, and security is built in from day one.
        </p>
        <div className="about-subline">
          Focused on secure full-stack systems, practical product thinking, and strong developer experience.
        </div>
      </div>

      <div className="about-section w95-groupbox">
        <span className="w95-groupbox__label">Info</span>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 11 }}>
          <tbody>
            {[
              ['Location',  'Toronto, Ontario, Canada'],
              ['Education', 'BSc Cybersecurity, York University (expected 2028)'],
              ['Status',    'Open to work — internships & full-time'],
              ['Email',     'contact@shariqsafdarkhan.com'],
            ].map(([k, v]) => (
              <tr key={k}>
                <td style={{ color: '#000080', fontWeight: 700, paddingRight: 12, paddingBottom: 3, whiteSpace: 'nowrap', width: 80 }}>{k}:</td>
                <td style={{ paddingBottom: 3, color: '#333' }}>{v}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="about-section w95-groupbox">
        <span className="w95-groupbox__label">Skills</span>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
          {Object.entries(SKILLS).map(([category, { color, items }]) => (
            <div key={category} style={{ display: 'flex', alignItems: 'flex-start', gap: 8 }}>
              <span style={{
                width: 72, flexShrink: 0, fontWeight: 700, fontSize: 10,
                color: '#334155', paddingTop: 3, textTransform: 'uppercase', letterSpacing: '0.06em',
              }}>
                {category}
              </span>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 3 }}>
                {items.map((t) => (
                  <span key={t} className="about-skill-tag" style={{
                    display: 'inline-block', padding: '1px 6px',
                    fontSize: 10, color: '#1e293b', background: '#eef2f7',
                    fontFamily: "'Tahoma', Arial, sans-serif",
                    borderLeft: `3px solid ${color}`,
                    boxShadow: 'inset 1px 1px #fff, inset -1px -1px #c9d2de',
                  }}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="about-section w95-groupbox">
        <span className="w95-groupbox__label">Links</span>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
          {LINKS.map(({ label, href, color }) => (
            <a
              className="about-link-chip"
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                padding: '3px 12px', minWidth: 70,
                background: '#f1f5f9', color: '#0f172a',
                fontFamily: "'Tahoma', Arial, sans-serif", fontSize: 11,
                cursor: 'pointer', border: 'none', textDecoration: 'none',
                borderLeft: `3px solid ${color}`,
                boxShadow: 'inset 1px 1px #fff, inset -1px -1px #c8d1dc',
                whiteSpace: 'nowrap',
              }}
            >
              {label}
            </a>
          ))}
        </div>
      </div>

      <style>{`
        .about-window {
          background: linear-gradient(180deg, #c9ced6 0%, #c0c6cf 100%);
        }

        .about-hero {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 10px;
          background: linear-gradient(140deg, #0f172a 0%, #1e293b 55%, #334155 100%);
          box-shadow: inset 1px 1px #44536b, inset -1px -1px #0b1220;
          transition: filter 160ms ease, transform 160ms ease;
        }

        .about-hero__avatar {
          width: 58px;
          height: 58px;
          padding: 2px;
          background: linear-gradient(145deg, #f8fafc, #cbd5e1);
          box-shadow: inset 1px 1px #fff, inset -1px -1px #64748b;
          position: relative;
          flex-shrink: 0;
        }

        .about-hero__avatar-core {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #0f172a;
          font-weight: 900;
          font-size: 22px;
          background: linear-gradient(180deg, #ffffff 0%, #e2e8f0 100%);
        }

        .about-hero__online {
          position: absolute;
          right: -3px;
          bottom: -3px;
          width: 12px;
          height: 12px;
          border-radius: 50%;
          border: 2px solid #fff;
          background: #22c55e;
          box-shadow: 0 0 6px rgba(34, 197, 94, 0.55);
        }

        .about-status {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 5px 8px;
          background: linear-gradient(180deg, #f8fafc 0%, #e2e8f0 100%);
          box-shadow: inset 1px 1px #99a3b0, inset -1px -1px #fff;
          font-size: 11px;
          transition: filter 140ms ease;
        }

        .about-section {
          transition: border-color 140ms ease, box-shadow 140ms ease;
        }

        .about-section:hover {
          box-shadow: 1px 1px 0 #fff, -1px -1px 0 #8b94a1;
        }

        .about-skill-tag {
          transition: background-color 120ms ease, color 120ms ease, box-shadow 120ms ease;
        }

        .about-skill-tag:hover {
          background: #e2e8f0 !important;
          color: #0f172a !important;
          box-shadow: inset 1px 1px #fff, inset -1px -1px #b8c3d2 !important;
        }

        .about-link-chip {
          transition: filter 130ms ease, box-shadow 130ms ease, background-color 130ms ease;
          outline: none;
        }

        .about-link-chip:hover {
          filter: brightness(1.02);
          background: #e2e8f0 !important;
          box-shadow: inset 1px 1px #fff, inset -1px -1px #aab4c2 !important;
        }

        .about-link-chip:focus-visible {
          box-shadow: inset 1px 1px #fff, inset -1px -1px #aab4c2, 0 0 0 2px #1d4f91 !important;
        }

        .about-hero:hover {
          transform: translateY(-1px);
          filter: brightness(1.03);
        }

        .about-status:hover {
          filter: brightness(1.02);
        }

        .about-subline {
          font-size: 10px;
          color: #334155;
          padding-left: 8px;
          border-left: 2px solid #64748b;
          line-height: 1.5;
        }

        @keyframes status-pulse {
          0%, 100% { opacity: 1; }
          50%      { opacity: 0.4; }
        }
      `}</style>
    </div>
  );
}
