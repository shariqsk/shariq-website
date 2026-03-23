'use client';

import { useState, useCallback, useRef } from 'react';
import { AnimatePresence } from 'framer-motion';

import Window from './Window';
import Taskbar, { TaskbarWindow } from './Taskbar';
import DesktopIcon, {
  FolderIcon,
  TerminalIcon,
  DocumentIcon,
  LockIcon,
  GlobeIcon,
} from './DesktopIcon';

import AboutWindow    from './windows/AboutWindow';
import ProjectsWindow from './windows/ProjectsWindow';
import ContactWindow  from './windows/ContactWindow';
import TerminalWindow from './windows/TerminalWindow';

/* ── Window registry ────────────────────────────────────────────────── */
interface WinDef {
  id: string;
  title: string;
  content: React.ReactNode;
  defaultSize?: { width: number; height: number };
}

const WIN_DEFS: Record<string, WinDef> = {
  projects: {
    id: 'projects',
    title: '~/projects',
    content: <ProjectsWindow />,
    defaultSize: { width: 700, height: 500 },
  },
  about: {
    id: 'about',
    title: 'whoami.sh',
    content: <AboutWindow />,
    defaultSize: { width: 600, height: 540 },
  },
  contact: {
    id: 'contact',
    title: 'contact.gpg',
    content: <ContactWindow />,
    defaultSize: { width: 520, height: 440 },
  },
  terminal: {
    id: 'terminal',
    title: 'terminal',
    content: <TerminalWindow />,
    defaultSize: { width: 580, height: 420 },
  },
};

/* ── State shape ─────────────────────────────────────────────────────── */
interface WinState {
  id: string;
  zIndex: number;
  isMinimized: boolean;
}

let zCounter = 100;

/* ── Desktop icons config ────────────────────────────────────────────── */
const ICONS = [
  {
    id: 'projects',
    label: 'projects',
    icon: <FolderIcon />,
    action: 'open' as const,
  },
  {
    id: 'about',
    label: 'whoami.sh',
    icon: <TerminalIcon />,
    action: 'open' as const,
  },
  {
    id: 'contact',
    label: 'contact.gpg',
    icon: <LockIcon />,
    action: 'open' as const,
  },
  {
    id: 'resume',
    label: 'resume.pdf',
    icon: <DocumentIcon />,
    action: 'link' as const,
    href: 'https://drive.google.com/file/d/1l1aJcVBJBbIg0VPKc9LXyG9x5E3l0FIa/view',
  },
  {
    id: 'blog',
    label: 'blog.link',
    icon: <GlobeIcon />,
    action: 'link' as const,
    href: 'https://shariqsk.github.io/',
  },
  {
    id: 'terminal',
    label: 'terminal',
    icon: <TerminalIcon />,
    action: 'open' as const,
  },
];

export default function Desktop() {
  const [openWindows, setOpenWindows] = useState<WinState[]>([]);
  const [focusedId, setFocusedId] = useState<string | null>(null);
  const [selectedIcon, setSelectedIcon] = useState<string | null>(null);
  const desktopRef = useRef<HTMLDivElement>(null);

  /* ── Window management ─────────────────────────────────────────────── */
  const openWindow = useCallback((id: string) => {
    setOpenWindows((prev) => {
      const existing = prev.find((w) => w.id === id);
      if (existing) {
        // un-minimize and focus
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

  /* ── Icon click ─────────────────────────────────────────────────────── */
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

  /* ── Taskbar window list ────────────────────────────────────────────── */
  const taskbarWindows: TaskbarWindow[] = openWindows.map((w) => ({
    id: w.id,
    title: WIN_DEFS[w.id]?.title ?? w.id,
    isMinimized: w.isMinimized,
    isFocused: w.id === focusedId,
  }));

  return (
    <div
      ref={desktopRef}
      className="os-desktop"
      onClick={() => setSelectedIcon(null)}
    >
      {/* Desktop icons — top-right column */}
      <div
        style={{
          position: 'absolute',
          top: 16,
          right: 16,
          display: 'flex',
          flexDirection: 'column',
          gap: 4,
          zIndex: 10,
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {ICONS.map((icon) => (
          <DesktopIcon
            key={icon.id}
            label={icon.label}
            icon={icon.icon}
            onOpen={() => handleIconClick(icon)}
            selected={selectedIcon === icon.id}
          />
        ))}
      </div>

      {/* Welcome hint — only shown when no windows open */}
      {openWindows.length === 0 && (
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            textAlign: 'center',
            pointerEvents: 'none',
            userSelect: 'none',
          }}
        >
          <div
            style={{
              fontSize: 11,
              color: 'rgba(245,158,11,0.2)',
              fontFamily: 'monospace',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              lineHeight: 2,
            }}
          >
            <div style={{ fontSize: 28, marginBottom: 8, opacity: 0.25 }}>sk_os</div>
            <div>click an icon to get started</div>
          </div>
        </div>
      )}

      {/* Open windows */}
      <AnimatePresence>
        {openWindows.map((w) => {
          const def = WIN_DEFS[w.id];
          if (!def) return null;
          return (
            <Window
              key={w.id}
              id={w.id}
              title={def.title}
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
