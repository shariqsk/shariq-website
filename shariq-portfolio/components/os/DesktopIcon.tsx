'use client';

interface DesktopIconProps {
  label: string;
  icon: React.ReactNode;
  onOpen: () => void;
  selected?: boolean;
}

export default function DesktopIcon({
  label,
  icon,
  onOpen,
  selected = false,
}: DesktopIconProps) {
  return (
    <div
      className={`os-icon ${selected ? 'os-icon--selected' : ''}`}
      onClick={onOpen}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && onOpen()}
    >
      <div className="os-icon__glyph">{icon}</div>
      <span className="os-icon__label">{label}</span>
    </div>
  );
}

/* ── SVG Icon shapes ──────────────────────────────────────────────── */

export function FolderIcon() {
  return (
    <svg width="40" height="36" viewBox="0 0 40 36" fill="none">
      <path
        d="M2 8C2 6.34 3.34 5 5 5H15L19 9H35C36.66 9 38 10.34 38 12V30C38 31.66 36.66 33 35 33H5C3.34 33 2 31.66 2 30V8Z"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="rgba(245,158,11,0.06)"
      />
      <path d="M2 14H38" stroke="currentColor" strokeWidth="1" opacity="0.4" />
    </svg>
  );
}

export function TerminalIcon() {
  return (
    <svg width="40" height="36" viewBox="0 0 40 36" fill="none">
      <rect x="2" y="3" width="36" height="30" rx="4" stroke="currentColor" strokeWidth="1.5" fill="rgba(245,158,11,0.06)" />
      <path d="M2 11H38" stroke="currentColor" strokeWidth="1" opacity="0.4" />
      <circle cx="8" cy="7" r="1.5" fill="currentColor" opacity="0.5" />
      <circle cx="13" cy="7" r="1.5" fill="currentColor" opacity="0.5" />
      <circle cx="18" cy="7" r="1.5" fill="currentColor" opacity="0.5" />
      <path d="M8 18L14 22L8 26" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M17 26H27" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function DocumentIcon() {
  return (
    <svg width="36" height="40" viewBox="0 0 36 40" fill="none">
      <path
        d="M4 2H22L34 14V38C34 39.1 33.1 40 32 40H4C2.9 40 2 39.1 2 38V4C2 2.9 2.9 2 4 2Z"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="rgba(245,158,11,0.06)"
      />
      <path d="M22 2L34 14H24C22.9 14 22 13.1 22 12V2Z" stroke="currentColor" strokeWidth="1.5" fill="rgba(245,158,11,0.1)" />
      <path d="M9 21H27" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" opacity="0.6" />
      <path d="M9 26H27" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" opacity="0.6" />
      <path d="M9 31H20" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" opacity="0.6" />
    </svg>
  );
}

export function LockIcon() {
  return (
    <svg width="36" height="40" viewBox="0 0 36 40" fill="none">
      <rect x="4" y="18" width="28" height="20" rx="3" stroke="currentColor" strokeWidth="1.5" fill="rgba(245,158,11,0.06)" />
      <path
        d="M10 18V12C10 7.58 13.58 4 18 4C22.42 4 26 7.58 26 12V18"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
      />
      <circle cx="18" cy="28" r="3" stroke="currentColor" strokeWidth="1.5" />
      <path d="M18 31V35" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function GlobeIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
      <circle cx="20" cy="20" r="17" stroke="currentColor" strokeWidth="1.5" fill="rgba(245,158,11,0.06)" />
      <ellipse cx="20" cy="20" rx="8" ry="17" stroke="currentColor" strokeWidth="1" opacity="0.5" />
      <path d="M3 20H37" stroke="currentColor" strokeWidth="1" opacity="0.4" />
      <path d="M5 12H35" stroke="currentColor" strokeWidth="1" opacity="0.3" />
      <path d="M5 28H35" stroke="currentColor" strokeWidth="1" opacity="0.3" />
    </svg>
  );
}
