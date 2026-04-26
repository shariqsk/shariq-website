'use client';

import { useState } from 'react';
import { playClick } from '@/lib/sounds';

interface DesktopIconProps {
  label: string;
  icon: React.ComponentType<{ hovered: boolean }>;
  onOpen: (e: React.MouseEvent) => void;
  selected?: boolean;
  isOpen?: boolean;
}

export default function DesktopIcon({
  label,
  icon: IconComp,
  onOpen,
  selected = false,
  isOpen = false,
}: DesktopIconProps) {
  const [hovered, setHovered] = useState(false);
  const active = hovered || isOpen;

  return (
    <div
      className={`os-icon ${selected ? 'os-icon--selected' : ''}`}
      onClick={(e) => { playClick(); onOpen(e); }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && onOpen(e as unknown as React.MouseEvent)}
      aria-label={`Open ${label}`}
    >
      <div className="os-icon__glyph"><IconComp hovered={active} /></div>
      <span className="os-icon__label">{label}</span>
    </div>
  );
}

/* ── Win95-style app icons (48×48) ─────────────────────────────────────── */

export function ProjectsAppIcon({ hovered }: { hovered: boolean }) {
  return (
    <svg width="48" height="48" viewBox="0 0 32 32" shapeRendering="crispEdges" overflow="visible">
      {/* Document — rises out of folder on hover, hidden below body otherwise */}
      <rect
        x="8" y="8" width="16" height="18"
        fill="#ffffff" stroke="#000" strokeWidth="0.5"
        style={{
          opacity: hovered ? 1 : 0,
          transform: hovered ? 'translateY(-2px)' : 'translateY(4px)',
          transition: 'opacity 0.1s, transform 0.18s ease-out',
        }}
      />
      {/* Doc lines */}
      <line x1="11" y1="13" x2="21" y2="13" stroke="#c0c0c0" strokeWidth="0.5"
        style={{ opacity: hovered ? 1 : 0, transition: 'opacity 0.1s 0.05s' }}/>
      <line x1="11" y1="16" x2="21" y2="16" stroke="#c0c0c0" strokeWidth="0.5"
        style={{ opacity: hovered ? 1 : 0, transition: 'opacity 0.1s 0.08s' }}/>
      <line x1="11" y1="19" x2="18" y2="19" stroke="#c0c0c0" strokeWidth="0.5"
        style={{ opacity: hovered ? 1 : 0, transition: 'opacity 0.1s 0.1s' }}/>
      {/* Folder tab */}
      <rect x="1" y="10" width="10" height="3" fill="#c8960c" stroke="#000" strokeWidth="1"/>
      {/* Folder body */}
      <rect x="1" y="12" width="30" height="17" fill="#ffcc44" stroke="#000" strokeWidth="1"/>
      {/* Folder highlight */}
      <line x1="2" y1="13" x2="30" y2="13" stroke="rgba(255,255,255,0.5)" strokeWidth="1"/>
    </svg>
  );
}

export function AboutAppIcon({ hovered }: { hovered: boolean }) {
  return (
    <svg width="48" height="48" viewBox="0 0 32 32" shapeRendering="crispEdges" overflow="visible">
      {/* Monitor bezel */}
      <rect x="2" y="3" width="28" height="22" fill="#c0c0c0" stroke="#000" strokeWidth="1"/>
      {/* Screen */}
      <rect
        x="4" y="5" width="24" height="16"
        fill={hovered ? '#000080' : '#c0c0c0'}
        stroke="#808080" strokeWidth="1"
        style={{ transition: 'fill 0.18s ease' }}
      />
      {/* Person head */}
      <rect
        x="13" y="7" width="6" height="5"
        fill={hovered ? '#ffffff' : '#808080'}
        style={{ transition: 'fill 0.18s' }}
      />
      {/* Person body */}
      <rect
        x="11" y="12" width="10" height="6"
        fill={hovered ? '#ffffff' : '#808080'}
        style={{ transition: 'fill 0.18s' }}
      />
      {/* Scanline effect on hover */}
      {hovered && (
        <>
          <line x1="4" y1="8"  x2="28" y2="8"  stroke="rgba(0,0,128,0.3)" strokeWidth="1"/>
          <line x1="4" y1="11" x2="28" y2="11" stroke="rgba(0,0,128,0.3)" strokeWidth="1"/>
          <line x1="4" y1="14" x2="28" y2="14" stroke="rgba(0,0,128,0.3)" strokeWidth="1"/>
          <line x1="4" y1="17" x2="28" y2="17" stroke="rgba(0,0,128,0.3)" strokeWidth="1"/>
        </>
      )}
      {/* Blinking cursor on screen */}
      <rect
        x="21" y="7" width="4" height="7"
        fill="#55ff55"
        style={{
          opacity: hovered ? 1 : 0,
          animation: hovered ? 'icon-blink 0.7s step-end infinite' : 'none',
          transition: 'opacity 0.1s',
        }}
      />
      {/* Stand */}
      <rect x="13" y="25" width="6" height="3" fill="#808080" stroke="#000" strokeWidth="1"/>
      <rect x="9" y="28" width="14" height="2" fill="#c0c0c0" stroke="#000" strokeWidth="1"/>
    </svg>
  );
}

export function ContactAppIcon({ hovered }: { hovered: boolean }) {
  return (
    <svg width="48" height="48" viewBox="0 0 32 32" shapeRendering="crispEdges" overflow="visible">
      {/* 1. Open flap — fades in first (y=2..9, pointing up) */}
      <polygon
        points="2,9 16,2 30,9"
        fill="#e8e8e8" stroke="#222" strokeWidth="1"
        style={{ opacity: hovered ? 1 : 0, transition: 'opacity 0.18s' }}
      />

      {/* 2. Letter — CSS translateY slides it up from inside the envelope.
              At translateY(9): sits at y=10..24, fully behind the face mask below.
              At translateY(0): sits at y=1..15, with y=1..9 peeking above mask. */}
      <g style={{
        opacity: hovered ? 1 : 0,
        transform: hovered ? 'translateY(0px)' : 'translateY(9px)',
        transition: 'opacity 0.15s 0.16s, transform 0.25s 0.1s ease-out',
      }}>
        <rect x="8" y="1" width="16" height="14" fill="#ffffff" stroke="#aaa" strokeWidth="0.5"/>
        <line x1="11" y1="4"  x2="21" y2="4"  stroke="#ccc" strokeWidth="0.8"/>
        <line x1="11" y1="7"  x2="21" y2="7"  stroke="#ccc" strokeWidth="0.8"/>
        <line x1="11" y1="10" x2="17" y2="10" stroke="#ccc" strokeWidth="0.8"/>
      </g>

      {/* 3. Envelope face mask — white rect covering y=9..26.
              Drawn AFTER the letter so it hides any part of the letter still inside.
              The letter is only visible above y=9 (the envelope opening). */}
      <rect x="2" y="9" width="28" height="17" fill="#ffffff" stroke="none"/>

      {/* 4. Closed flap — fades out on hover */}
      <polygon
        points="2,9 16,13 30,9"
        fill="#c8c8c8" stroke="#222" strokeWidth="1"
        style={{ opacity: hovered ? 0 : 1, transition: 'opacity 0.15s' }}
      />

      {/* 5. Bottom fold lines */}
      <line x1="2" y1="26" x2="16" y2="19" stroke="#bbb" strokeWidth="0.6"/>
      <line x1="30" y1="26" x2="16" y2="19" stroke="#bbb" strokeWidth="0.6"/>

      {/* 6. Envelope outline — 3 sides */}
      <line x1="2"  y1="9"  x2="2"  y2="26" stroke="#222" strokeWidth="1"/>
      <line x1="2"  y1="26" x2="30" y2="26" stroke="#222" strokeWidth="1"/>
      <line x1="30" y1="9"  x2="30" y2="26" stroke="#222" strokeWidth="1"/>
    </svg>
  );
}

export function ResumeAppIcon({ hovered }: { hovered: boolean }) {
  return (
    /*
     * overflow="visible" so the translateY(-4px) lift doesn't clip at the SVG edge.
     * Polygon starts at y=5 (not y=2) so there's room to animate up.
     */
    <svg width="48" height="48" viewBox="0 0 32 32" shapeRendering="crispEdges" overflow="visible">
      {/* Drop shadow under lifted doc */}
      <rect
        x="7" y="30" width="20" height="2"
        fill="rgba(0,0,0,0.2)"
        style={{ opacity: hovered ? 1 : 0, transition: 'opacity 0.15s' }}
      />
      {/* Page body + fold — lifts on hover */}
      <g style={{
        transform: hovered ? 'translateY(-4px)' : 'translateY(0px)',
        transition: 'transform 0.18s ease-out',
      }}>
        <polygon points="5,4 22,4 27,9 27,30 5,30" fill="#ffffff" stroke="#000" strokeWidth="1"/>
        {/* Dog-ear fold */}
        <polygon points="22,4 27,9 22,9" fill="#d0d0d0" stroke="#000" strokeWidth="1"/>
        {/* Text lines */}
        <line x1="9" y1="13" x2="21" y2="13" stroke="#000" strokeWidth="1" strokeOpacity="0.5"/>
        <line x1="9" y1="17" x2="23" y2="17" stroke="#000" strokeWidth="1" strokeOpacity="0.5"/>
        <line x1="9" y1="21" x2="23" y2="21" stroke="#000" strokeWidth="1" strokeOpacity="0.5"/>
        <line x1="9" y1="25" x2="17" y2="25" stroke="#000" strokeWidth="1" strokeOpacity="0.5"/>
        {/* Header block (name area) */}
        <rect
          x="9" y="6" width="11" height="4"
          fill={hovered ? '#000080' : '#c0c0c0'}
          style={{ transition: 'fill 0.2s' }}
        />
      </g>
    </svg>
  );
}

export function BlogAppIcon({ hovered }: { hovered: boolean }) {
  return (
    <svg width="48" height="48" viewBox="0 0 32 32" shapeRendering="crispEdges" overflow="visible">
      {/* Back page — fans right on hover */}
      <g style={{
        transformOrigin: '14px 26px',
        transform: hovered ? 'rotate(8deg) translateY(-1px)' : 'rotate(0deg)',
        transition: 'transform 0.2s ease-out',
      }}>
        <rect x="8" y="4" width="18" height="24" fill="#d0d8ff" stroke="#000" strokeWidth="1"/>
        <line x1="11" y1="10" x2="23" y2="10" stroke="#8888cc" strokeWidth="1" strokeOpacity="0.6"/>
        <line x1="11" y1="14" x2="23" y2="14" stroke="#8888cc" strokeWidth="1" strokeOpacity="0.6"/>
      </g>
      {/* Front page — fans left on hover */}
      <g style={{
        transformOrigin: '14px 26px',
        transform: hovered ? 'rotate(-8deg) translateY(-3px)' : 'rotate(0deg)',
        transition: 'transform 0.2s ease-out',
      }}>
        <rect x="5" y="2" width="18" height="24" fill="#ffffff" stroke="#000" strokeWidth="1"/>
        <line x1="8" y1="8"  x2="20" y2="8"  stroke="#000" strokeWidth="1" strokeOpacity="0.4"/>
        <line x1="8" y1="12" x2="20" y2="12" stroke="#000" strokeWidth="1" strokeOpacity="0.4"/>
        <line x1="8" y1="16" x2="15" y2="16" stroke="#000" strokeWidth="1" strokeOpacity="0.4"/>
        {/* Pen nib on hover */}
        <polygon
          points="18,20 22,16 24,19"
          fill={hovered ? '#000080' : '#c0c0c0'}
          style={{ transition: 'fill 0.15s' }}
        />
      </g>
    </svg>
  );
}

export function TerminalAppIcon({ hovered }: { hovered: boolean }) {  return (
    <svg width="48" height="48" viewBox="0 0 32 32" shapeRendering="crispEdges">
      {/* Window chrome (navy) */}
      <rect x="1" y="1" width="30" height="30" fill="#000080" stroke="#000" strokeWidth="1"/>
      {/* Title bar with 3 tiny control squares */}
      <rect x="2" y="2" width="28" height="6" fill="#000080"/>
      <rect x="3"  y="3" width="4" height="4" fill="#c0c0c0" stroke="#000" strokeWidth="0.5"/>
      <rect x="8"  y="3" width="4" height="4" fill="#c0c0c0" stroke="#000" strokeWidth="0.5"/>
      <rect x="13" y="3" width="4" height="4" fill="#c0c0c0" stroke="#000" strokeWidth="0.5"/>
      {/* Screen area */}
      <rect x="2" y="8" width="28" height="22" fill="#000000"/>
      {/* Prompt — "C:\>" default, "~$" on hover. Short text, no overflow. */}
      <text
        x="4" y="23"
        fontSize="6"
        fill={hovered ? '#55ff55' : '#c0c0c0'}
        fontFamily="'Courier New', monospace"
        style={{ transition: 'fill 0.15s' }}
      >
        {hovered ? '~$' : 'C:\\>'}
      </text>
      {/* Cursor — after "C:\>" (4ch×3.6≈15u → x=19) or after "~$" (2ch×3.6≈7u → x=11) */}
      <rect
        x={hovered ? 12 : 20}
        y="16"
        width="4"
        height="8"
        fill={hovered ? '#55ff55' : '#c0c0c0'}
        style={{
          animation: hovered ? 'icon-blink 0.65s step-end infinite' : 'none',
          transition: 'fill 0.15s, x 0.1s',
        }}
      />
    </svg>
  );
}

export function MusicAppIcon({ hovered }: { hovered: boolean }) {
  return (
    <svg width="48" height="48" viewBox="0 0 32 32" shapeRendering="crispEdges" overflow="visible">
      <rect x="1" y="1" width="30" height="30" fill="#c0c0c0" stroke="#000" strokeWidth="1" />
      <rect x="3" y="3" width="26" height="26" fill="#0f172a" stroke="#020617" strokeWidth="1" />

      <rect x="5" y="5" width="22" height="3" fill={hovered ? '#22d3ee' : '#38bdf8'} />
      <rect x="5" y="8" width="22" height="1" fill="rgba(255,255,255,0.3)" />

      <rect x="8" y="12" width="2.4" height="10" fill={hovered ? '#a5f3fc' : '#bae6fd'} />
      <rect x="10.1" y="12" width="8.4" height="2.2" fill={hovered ? '#a5f3fc' : '#bae6fd'} />
      <rect x="16.5" y="12" width="2.4" height="8.6" fill={hovered ? '#a5f3fc' : '#bae6fd'} />

      <ellipse cx="8.8" cy="23.2" rx="3.2" ry="2.6" fill={hovered ? '#67e8f9' : '#93c5fd'} />
      <ellipse cx="17.4" cy="21.6" rx="3.2" ry="2.6" fill={hovered ? '#67e8f9' : '#93c5fd'} />

      <rect x="21.8" y="13.2" width="1.8" height="9.8" fill="#64748b" />
      <rect x="24.3" y="11.8" width="1.8" height="11.2" fill="#64748b" />

      <rect x="3" y="27" width="26" height="1" fill="rgba(255,255,255,0.3)" />
    </svg>
  );
}

