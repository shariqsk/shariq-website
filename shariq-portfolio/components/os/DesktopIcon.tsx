'use client';

interface DesktopIconProps {
  label: string;
  icon: React.ReactNode;
  onOpen: () => void;
  selected?: boolean;
  color?: string;
}

export default function DesktopIcon({
  label,
  icon,
  onOpen,
  selected = false,
  color = '#4f8ef7',
}: DesktopIconProps) {
  return (
    <div
      className={`os-icon ${selected ? 'os-icon--selected' : ''}`}
      style={{ '--icon-color': color } as React.CSSProperties}
      onClick={onOpen}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && onOpen()}
      aria-label={`Open ${label}`}
    >
      <div className="os-icon__glyph">{icon}</div>
      <span className="os-icon__label">{label}</span>
    </div>
  );
}

/* ── Individual app icons ─────────────────────────────────────────── */

export function ProjectsAppIcon() {
  return (
    <svg width="52" height="52" viewBox="0 0 52 52" fill="none">
      <rect width="52" height="52" rx="12" fill="url(#proj-bg)"/>
      {/* Rocket body */}
      <path d="M26 10C26 10 18 18 18 28C18 32.4 21.6 36 26 36C30.4 36 34 32.4 34 28C34 18 26 10 26 10Z"
        fill="white" fillOpacity="0.9"/>
      {/* Rocket window */}
      <circle cx="26" cy="25" r="3.5" fill="url(#proj-bg)" fillOpacity="0.7"/>
      {/* Rocket fins */}
      <path d="M18 31L13 39L21 36Z" fill="white" fillOpacity="0.6"/>
      <path d="M34 31L39 39L31 36Z" fill="white" fillOpacity="0.6"/>
      {/* Rocket flame */}
      <path d="M22 36C22 36 24 42 26 43C28 42 30 36 30 36" fill="#fbbf24" fillOpacity="0.9"/>
      <defs>
        <linearGradient id="proj-bg" x1="0" y1="0" x2="52" y2="52" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#1e40af"/>
          <stop offset="100%" stopColor="#3b82f6"/>
        </linearGradient>
      </defs>
    </svg>
  );
}

export function AboutAppIcon() {
  return (
    <svg width="52" height="52" viewBox="0 0 52 52" fill="none">
      <rect width="52" height="52" rx="12" fill="url(#about-bg)"/>
      {/* Person */}
      <circle cx="26" cy="18" r="7" fill="white" fillOpacity="0.9"/>
      <path d="M12 42C12 34.3 18.3 28 26 28C33.7 28 40 34.3 40 42" fill="white" fillOpacity="0.9"/>
      {/* Code brackets overlay */}
      <path d="M15 24L11 28L15 32" stroke="white" strokeWidth="2" strokeLinecap="round" strokeOpacity="0.5"/>
      <path d="M37 24L41 28L37 32" stroke="white" strokeWidth="2" strokeLinecap="round" strokeOpacity="0.5"/>
      <defs>
        <linearGradient id="about-bg" x1="0" y1="0" x2="52" y2="52" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#065f46"/>
          <stop offset="100%" stopColor="#10b981"/>
        </linearGradient>
      </defs>
    </svg>
  );
}

export function ContactAppIcon() {
  return (
    <svg width="52" height="52" viewBox="0 0 52 52" fill="none">
      <rect width="52" height="52" rx="12" fill="url(#contact-bg)"/>
      {/* Paper plane */}
      <path d="M42 10L10 24L22 28L42 10Z" fill="white" fillOpacity="0.9"/>
      <path d="M22 28L26 42L34 32L42 10Z" fill="white" fillOpacity="0.7"/>
      <path d="M22 28L28 34" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
      {/* Small sparkles */}
      <circle cx="14" cy="38" r="1.5" fill="white" fillOpacity="0.4"/>
      <circle cx="10" cy="30" r="1" fill="white" fillOpacity="0.3"/>
      <defs>
        <linearGradient id="contact-bg" x1="0" y1="0" x2="52" y2="52" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#9d174d"/>
          <stop offset="100%" stopColor="#ec4899"/>
        </linearGradient>
      </defs>
    </svg>
  );
}

export function ResumeAppIcon() {
  return (
    <svg width="52" height="52" viewBox="0 0 52 52" fill="none">
      <rect width="52" height="52" rx="12" fill="url(#resume-bg)"/>
      {/* Document */}
      <rect x="13" y="8" width="22" height="28" rx="3" fill="white" fillOpacity="0.9"/>
      <path d="M35 8L39 12H35V8Z" fill="#c2410c" fillOpacity="0.5"/>
      {/* Lines on document */}
      <path d="M18 19H30" stroke="#ea580c" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M18 23H30" stroke="#ea580c" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M18 27H24" stroke="#ea580c" strokeWidth="1.5" strokeLinecap="round"/>
      {/* Checkmark badge */}
      <circle cx="35" cy="35" r="9" fill="#fb923c"/>
      <path d="M30 35L33.5 38.5L40 31" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <defs>
        <linearGradient id="resume-bg" x1="0" y1="0" x2="52" y2="52" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#7c2d12"/>
          <stop offset="100%" stopColor="#ea580c"/>
        </linearGradient>
      </defs>
    </svg>
  );
}

export function BlogAppIcon() {
  return (
    <svg width="52" height="52" viewBox="0 0 52 52" fill="none">
      <rect width="52" height="52" rx="12" fill="url(#blog-bg)"/>
      {/* Book/pages */}
      <rect x="11" y="12" width="18" height="26" rx="2" fill="white" fillOpacity="0.5"/>
      <rect x="15" y="10" width="18" height="26" rx="2" fill="white" fillOpacity="0.8"/>
      {/* Lines */}
      <path d="M20 18H27" stroke="#7c3aed" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M20 22H27" stroke="#7c3aed" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M20 26H24" stroke="#7c3aed" strokeWidth="1.5" strokeLinecap="round"/>
      {/* Pen */}
      <path d="M34 14L38 18L28 32L24 32L24 28L34 14Z" fill="#a78bfa" fillOpacity="0.9"/>
      <path d="M34 14L38 18" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
      <defs>
        <linearGradient id="blog-bg" x1="0" y1="0" x2="52" y2="52" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#4c1d95"/>
          <stop offset="100%" stopColor="#7c3aed"/>
        </linearGradient>
      </defs>
    </svg>
  );
}

export function TerminalAppIcon() {
  return (
    <svg width="52" height="52" viewBox="0 0 52 52" fill="none">
      <rect width="52" height="52" rx="12" fill="url(#term-bg)"/>
      {/* Terminal window chrome */}
      <rect x="9" y="11" width="34" height="28" rx="4" fill="black" fillOpacity="0.4"/>
      {/* Traffic lights */}
      <circle cx="16" cy="18" r="2.5" fill="#ff5f57"/>
      <circle cx="23" cy="18" r="2.5" fill="#ffbd2e"/>
      <circle cx="30" cy="18" r="2.5" fill="#28c840"/>
      {/* Prompt text */}
      <path d="M13 26L18 30L13 34" stroke="#fbbf24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M21 34H30" stroke="#fbbf24" strokeWidth="2" strokeLinecap="round"/>
      <defs>
        <linearGradient id="term-bg" x1="0" y1="0" x2="52" y2="52" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#1c1400"/>
          <stop offset="100%" stopColor="#3d2d00"/>
        </linearGradient>
      </defs>
    </svg>
  );
}
