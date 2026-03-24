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
}: DesktopIconProps) {
  return (
    <div
      className={`os-icon ${selected ? 'os-icon--selected' : ''}`}
      onDoubleClick={onOpen}
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

/* ── Win95-style app icons (32×32) ────────────────────────────────── */

export function ProjectsAppIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" shapeRendering="crispEdges">
      {/* Folder tab */}
      <rect x="1" y="9" width="11" height="4" fill="#c8960c" stroke="#000" strokeWidth="1"/>
      {/* Folder body */}
      <rect x="1" y="12" width="30" height="18" fill="#ffcc44" stroke="#000" strokeWidth="1"/>
      {/* Highlight edge */}
      <line x1="2" y1="13" x2="30" y2="13" stroke="rgba(255,255,255,0.6)" strokeWidth="1"/>
      <line x1="2" y1="13" x2="2" y2="29" stroke="rgba(255,255,255,0.6)" strokeWidth="1"/>
      {/* Shadow edge */}
      <line x1="30" y1="14" x2="30" y2="29" stroke="rgba(0,0,0,0.3)" strokeWidth="1"/>
    </svg>
  );
}

export function AboutAppIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" shapeRendering="crispEdges">
      {/* Monitor bezel */}
      <rect x="2" y="3" width="28" height="22" fill="#c0c0c0" stroke="#000" strokeWidth="1"/>
      {/* Screen */}
      <rect x="4" y="5" width="24" height="16" fill="#ffffff" stroke="#808080" strokeWidth="1"/>
      {/* Person head */}
      <rect x="13" y="7" width="6" height="5" fill="#c0c0c0" stroke="#000" strokeWidth="1"/>
      {/* Person body */}
      <rect x="11" y="12" width="10" height="6" fill="#c0c0c0" stroke="#000" strokeWidth="1"/>
      {/* Stand */}
      <rect x="13" y="25" width="6" height="3" fill="#808080" stroke="#000" strokeWidth="1"/>
      {/* Base */}
      <rect x="9" y="28" width="14" height="2" fill="#c0c0c0" stroke="#000" strokeWidth="1"/>
    </svg>
  );
}

export function ContactAppIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" shapeRendering="crispEdges">
      {/* Envelope body */}
      <rect x="2" y="8" width="28" height="18" fill="#ffffff" stroke="#000" strokeWidth="1"/>
      {/* Envelope flap (V shape) */}
      <polygon points="2,8 16,20 30,8" fill="#dfdfdf" stroke="#000" strokeWidth="1"/>
      {/* Seal line */}
      <line x1="2" y1="8" x2="16" y2="20" stroke="#808080" strokeWidth="1"/>
      <line x1="30" y1="8" x2="16" y2="20" stroke="#808080" strokeWidth="1"/>
    </svg>
  );
}

export function ResumeAppIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" shapeRendering="crispEdges">
      {/* Page body */}
      <polygon points="5,2 23,2 27,6 27,30 5,30" fill="#ffffff" stroke="#000" strokeWidth="1"/>
      {/* Folded corner */}
      <polygon points="23,2 27,6 23,6" fill="#808080" stroke="#000" strokeWidth="1"/>
      {/* Text lines */}
      <line x1="9" y1="11" x2="21" y2="11" stroke="#000" strokeWidth="1" strokeOpacity="0.5"/>
      <line x1="9" y1="15" x2="23" y2="15" stroke="#000" strokeWidth="1" strokeOpacity="0.5"/>
      <line x1="9" y1="19" x2="23" y2="19" stroke="#000" strokeWidth="1" strokeOpacity="0.5"/>
      <line x1="9" y1="23" x2="18" y2="23" stroke="#000" strokeWidth="1" strokeOpacity="0.5"/>
    </svg>
  );
}

export function BlogAppIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" shapeRendering="crispEdges">
      {/* Back page */}
      <rect x="8" y="4" width="18" height="24" fill="#dfdfdf" stroke="#000" strokeWidth="1"/>
      {/* Front page */}
      <rect x="5" y="2" width="18" height="24" fill="#ffffff" stroke="#000" strokeWidth="1"/>
      {/* Lines */}
      <line x1="9" y1="8" x2="19" y2="8" stroke="#000" strokeWidth="1" strokeOpacity="0.5"/>
      <line x1="9" y1="12" x2="19" y2="12" stroke="#000" strokeWidth="1" strokeOpacity="0.5"/>
      <line x1="9" y1="16" x2="16" y2="16" stroke="#000" strokeWidth="1" strokeOpacity="0.5"/>
      {/* Pen */}
      <rect x="20" y="14" width="4" height="12" fill="#c0c0c0" stroke="#000" strokeWidth="1" transform="rotate(-45 22 20)"/>
    </svg>
  );
}

export function TerminalAppIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" shapeRendering="crispEdges">
      {/* Window chrome */}
      <rect x="1" y="2" width="30" height="28" fill="#000080" stroke="#000" strokeWidth="1"/>
      {/* Title bar */}
      <rect x="1" y="2" width="30" height="8" fill="#000080"/>
      {/* Screen area */}
      <rect x="2" y="10" width="28" height="19" fill="#000000"/>
      {/* Prompt text */}
      <text x="4" y="22" fontSize="7" fill="#c0c0c0" fontFamily="'Courier New', monospace">C:\&gt;_</text>
    </svg>
  );
}
