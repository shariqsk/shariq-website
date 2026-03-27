'use client';

const SKILLS: Record<string, string[]> = {
  'Frontend': ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
  'Backend':  ['Python', 'FastAPI', 'Node.js', 'PostgreSQL', 'Redis'],
  'Security': ['Penetration Testing', 'Defensive Security', 'OSINT', 'Cryptography'],
  'Infra':    ['Docker', 'AWS', 'Vercel', 'Linux', 'Git'],
  'ML / CV':  ['PyTorch', 'MediaPipe', 'OpenCV', 'scikit-learn'],
};

const INFO_ROWS: [string, string][] = [
  ['Location',  'Toronto, Ontario, Canada'],
  ['Education', 'BSc Cybersecurity, York University'],
  ['Currently', 'Import Analyst @ Farrow'],
  ['Email',     'contact@shariqsafdarkhan.com'],
];

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
          scalable applications with a security-first approach. I solve engineering
          challenges across the full stack, from real-time fight analytics to on-device
          computer vision, while keeping security baked in from the ground up.
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
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {Object.entries(SKILLS).map(([category, tags]) => (
            <div key={category} style={{ display: 'flex', alignItems: 'flex-start', gap: 8 }}>
              <span style={{ width: 72, flexShrink: 0, fontWeight: 700, fontSize: 11, color: '#808080', paddingTop: 2 }}>
                {category}
              </span>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
                {tags.map((t) => (
                  <span key={t} className="os-tag">{t}</span>
                ))}
              </div>
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
