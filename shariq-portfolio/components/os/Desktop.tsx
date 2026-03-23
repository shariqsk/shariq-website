'use client';

import { useState, useCallback, useRef } from 'react';
import { AnimatePresence } from 'framer-motion';

import Window from './Window';
import Taskbar, { TaskbarWindow } from './Taskbar';
import DesktopIcon, {
  ProjectsAppIcon,
  AboutAppIcon,
  ContactAppIcon,
  ResumeAppIcon,
  BlogAppIcon,
  TerminalAppIcon,
} from './DesktopIcon';

import AboutWindow    from './windows/AboutWindow';
import ProjectsWindow from './windows/ProjectsWindow';
import ContactWindow  from './windows/ContactWindow';
import TerminalWindow from './windows/TerminalWindow';

/* ── App registry ───────────────────────────────────────────────────── */
interface AppDef {
  id: string;
  title: string;
  accentColor: string;
  content: React.ReactNode;
  defaultSize?: { width: number; height: number };
}

const APP_DEFS: Record<string, AppDef> = {
  projects: {
    id: 'projects',
    title: 'Projects',
    accentColor: '#4f8ef7',
    content: <ProjectsWindow />,
    defaultSize: { width: 720, height: 500 },
  },
  about: {
    id: 'about',
    title: 'About Me',
    accentColor: '#34d399',
    content: <AboutWindow />,
    defaultSize: { width: 600, height: 540 },
  },
  contact: {
    id: 'contact',
    title: 'Contact',
    accentColor: '#f472b6',
    content: <ContactWindow />,
    defaultSize: { width: 500, height: 430 },
  },
  terminal: {
    id: 'terminal',
    title: 'Terminal',
    accentColor: '#fbbf24',
    content: <TerminalWindow />,
    defaultSize: { width: 580, height: 420 },
  },
};

/* ── Desktop icon config ────────────────────────────────────────────── */
const ICONS = [
  {
    id: 'projects',
    label: 'Projects',
    icon: <ProjectsAppIcon />,
    color: '#4f8ef7',
    action: 'open' as const,
  },
  {
    id: 'about',
    label: 'About Me',
    icon: <AboutAppIcon />,
    color: '#34d399',
    action: 'open' as const,
  },
  {
    id: 'contact',
    label: 'Contact',
    icon: <ContactAppIcon />,
    color: '#f472b6',
    action: 'open' as const,
  },
  {
    id: 'resume',
    label: 'Resume',
    icon: <ResumeAppIcon />,
    color: '#fb923c',
    action: 'link' as const,
    href: 'https://drive.google.com/file/d/1l1aJcVBJBbIg0VPKc9LXyG9x5E3l0FIa/view',
  },
  {
    id: 'blog',
    label: 'Blog',
    icon: <BlogAppIcon />,
    color: '#a78bfa',
    action: 'link' as const,
    href: 'https://shariqsk.github.io/',
  },
  {
    id: 'terminal',
    label: 'Terminal',
    icon: <TerminalAppIcon />,
    color: '#fbbf24',
    action: 'open' as const,
  },
];

/* ── Window state ───────────────────────────────────────────────────── */
interface WinState {
  id: string;
  zIndex: number;
  isMinimized: boolean;
}

let zCounter = 100;

export default function Desktop() {
  const [openWindows, setOpenWindows] = useState<WinState[]>([]);
  const [focusedId, setFocusedId]     = useState<string | null>(null);
  const [selectedIcon, setSelectedIcon] = useState<string | null>(null);

  /* ── Window management ─────────────────────────────────────────── */
  const openWindow = useCallback((id: string) => {
    setOpenWindows((prev) => {
      const existing = prev.find((w) => w.id === id);
      if (existing) {
        return prev.map((w) =>
          w.id === id ? { ...w, isMinimized: false, zIndex: ++zCounter } : w,
        );
      }
      return [...prev, { id, zIndex: ++zCounter, isMinimized: false }];
    });
    setFocusedId(id);
  }, []);

  const closeWindow = useCallback((id: string) => {
    setOpenWindows((prev) => prev.filter((w) => w.id !== id));
    setFocusedId(null);
  }, []);

  const focusWindow = useCallback((id: string) => {
    setFocusedId(id);
    setOpenWindows((prev) =>
      prev.map((w) => (w.id === id ? { ...w, zIndex: ++zCounter } : w)),
    );
  }, []);

  const minimizeWindow = useCallback((id: string) => {
    setOpenWindows((prev) =>
      prev.map((w) => (w.id === id ? { ...w, isMinimized: true } : w)),
    );
    setFocusedId(null);
  }, []);

  const handleTaskbarClick = useCallback(
    (id: string) => {
      const win = openWindows.find((w) => w.id === id);
      if (!win) return;
      if (win.isMinimized) {
        openWindow(id);
      } else if (focusedId === id) {
        minimizeWindow(id);
      } else {
        focusWindow(id);
      }
    },
    [openWindows, focusedId, openWindow, minimizeWindow, focusWindow],
  );

  /* ── Icon click ─────────────────────────────────────────────────── */
  const handleIconClick = useCallback(
    (icon: (typeof ICONS)[number]) => {
      setSelectedIcon(icon.id);
      if (icon.action === 'link' && 'href' in icon) {
        window.open(icon.href, '_blank', 'noopener,noreferrer');
      } else {
        openWindow(icon.id);
      }
    },
    [openWindow],
  );

  /* ── Taskbar list ───────────────────────────────────────────────── */
  const taskbarWindows: TaskbarWindow[] = openWindows.map((w) => ({
    id: w.id,
    title: APP_DEFS[w.id]?.title ?? w.id,
    accentColor: APP_DEFS[w.id]?.accentColor ?? '#4f8ef7',
    isMinimized: w.isMinimized,
    isFocused: w.id === focusedId,
  }));

  return (
    <div
      className="os-desktop"
      onClick={() => setSelectedIcon(null)}
    >
      {/* Desktop icons — right column */}
      <div
        style={{
          position: 'absolute',
          top: 16,
          right: 12,
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          zIndex: 10,
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {ICONS.map((icon) => (
          <DesktopIcon
            key={icon.id}
            label={icon.label}
            icon={icon.icon}
            color={icon.color}
            onOpen={() => handleIconClick(icon)}
            selected={selectedIcon === icon.id}
          />
        ))}
      </div>

      {/* Welcome hint */}
      {openWindows.length === 0 && (
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '44%',
            transform: 'translate(-50%, -50%)',
            textAlign: 'center',
            pointerEvents: 'none',
            userSelect: 'none',
          }}
        >
          <div
            style={{
              color: 'rgba(255,255,255,0.07)',
              fontFamily: 'monospace',
              letterSpacing: '0.08em',
            }}
          >
            <div style={{ fontSize: 52, fontWeight: 700, marginBottom: 10, letterSpacing: '-0.02em' }}>
              sk_os
            </div>
            <div style={{ fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase' }}>
              click an icon to get started →
            </div>
          </div>
        </div>
      )}

      {/* Open windows */}
      <AnimatePresence>
        {openWindows.map((w) => {
          const def = APP_DEFS[w.id];
          if (!def) return null;
          return (
            <Window
              key={w.id}
              id={w.id}
              title={def.title}
              accentColor={def.accentColor}
              defaultSize={def.defaultSize}
              onClose={closeWindow}
              onFocus={focusWindow}
              onMinimize={minimizeWindow}
              zIndex={w.zIndex}
              isMinimized={w.isMinimized}
              isFocused={focusedId === w.id}
            >
              {def.content}
            </Window>
          );
        })}
      </AnimatePresence>

      {/* Taskbar */}
      <Taskbar windows={taskbarWindows} onWindowClick={handleTaskbarClick} />
    </div>
  );
}
