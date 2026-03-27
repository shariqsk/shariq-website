'use client';

import { useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { AnimatePresence } from 'framer-motion';
import { playClick } from '@/lib/sounds';

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
  content: React.ReactNode;
  defaultSize?: { width: number; height: number };
}

const APP_DEFS: Record<string, AppDef> = {
  projects: {
    id: 'projects',
    title: 'Projects',
    content: <ProjectsWindow />,
    defaultSize: { width: 680, height: 480 },
  },
  about: {
    id: 'about',
    title: 'About Me',
    content: <AboutWindow />,
    defaultSize: { width: 560, height: 500 },
  },
  contact: {
    id: 'contact',
    title: 'Contact',
    content: <ContactWindow />,
    defaultSize: { width: 460, height: 380 },
  },
  terminal: {
    id: 'terminal',
    title: 'Command Prompt',
    content: <TerminalWindow />,
    defaultSize: { width: 560, height: 400 },
  },
};

/* ── Desktop icon list ──────────────────────────────────────────────── */
const ICONS = [
  { id: 'projects', label: 'Projects',       icon: ProjectsAppIcon, action: 'open'  as const },
  { id: 'about',    label: 'About Me',        icon: AboutAppIcon,    action: 'open'  as const },
  { id: 'contact',  label: 'Contact',         icon: ContactAppIcon,  action: 'open'  as const },
  { id: 'terminal', label: 'Command Prompt',  icon: TerminalAppIcon, action: 'open'  as const },
  { id: 'resume',   label: 'Resume.pdf',      icon: ResumeAppIcon,   action: 'link'  as const,
    href: 'https://drive.google.com/file/d/1OR1LvVnBO5A61yTYNxE0aM3IxmpCDv4g/view?usp=sharing' },
  { id: 'blog',     label: 'Blog',            icon: BlogAppIcon,     action: 'link'  as const,
    href: 'https://shariqsk.github.io/' },
];

/* ── Window state ───────────────────────────────────────────────────── */
interface WinState { id: string; zIndex: number; isMinimized: boolean; iconPos?: { x: number; y: number }; }
let zCounter = 100;

export default function Desktop() {
  const router = useRouter();
  const [openWindows, setOpenWindows]   = useState<WinState[]>([]);
  const [focusedId, setFocusedId]       = useState<string | null>(null);
  const [selectedIcon, setSelectedIcon] = useState<string | null>(null);

  const openWindow = useCallback((id: string, iconPos?: { x: number; y: number }) => {
    setOpenWindows((prev) => {
      const existing = prev.find((w) => w.id === id);
      if (existing) return prev.map((w) => w.id === id ? { ...w, isMinimized: false, zIndex: ++zCounter } : w);
      return [...prev, { id, zIndex: ++zCounter, isMinimized: false, iconPos }];
    });
    setFocusedId(id);
  }, []);

  const closeWindow = useCallback((id: string) => {
    setOpenWindows((prev) => prev.filter((w) => w.id !== id));
    setFocusedId(null);
  }, []);

  const focusWindow = useCallback((id: string) => {
    setFocusedId(id);
    setOpenWindows((prev) => prev.map((w) => w.id === id ? { ...w, zIndex: ++zCounter } : w));
  }, []);

  const minimizeWindow = useCallback((id: string) => {
    setOpenWindows((prev) => prev.map((w) => w.id === id ? { ...w, isMinimized: true } : w));
    setFocusedId(null);
  }, []);

  const handleTaskbarClick = useCallback((id: string) => {
    const win = openWindows.find((w) => w.id === id);
    if (!win) return;
    if (win.isMinimized)        openWindow(id);
    else if (focusedId === id)  minimizeWindow(id);
    else                        focusWindow(id);
  }, [openWindows, focusedId, openWindow, minimizeWindow, focusWindow]);

  const handleIconClick = useCallback((icon: typeof ICONS[number], e: React.MouseEvent) => {
    setSelectedIcon(icon.id);
    if (icon.action === 'link' && 'href' in icon) {
      window.open(icon.href, '_blank', 'noopener,noreferrer');
    } else {
      // Capture icon center so the window animates from this position
      const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
      const iconPos = { x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 };
      openWindow(icon.id, iconPos);
    }
  }, [openWindow]);

  const handleMenuClick = useCallback((id: string, e: React.MouseEvent) => {
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    const iconPos = { x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 };
    openWindow(id, iconPos);
  }, [openWindow]);

  const taskbarWindows: TaskbarWindow[] = openWindows.map((w) => ({
    id: w.id,
    title: APP_DEFS[w.id]?.title ?? w.id,
    isMinimized: w.isMinimized,
    isFocused: w.id === focusedId,
  }));

  return (
    <div className="os-desktop" onClick={() => setSelectedIcon(null)}>

      {/* ── Menubar ─────────────────────────────────────────────────── */}
      <div className="os-menubar" onClick={(e) => e.stopPropagation()}>
        <span className="os-menubar__brand">sk_os</span>
        <span className="os-menubar__item os-menubar__item--recruiter" onClick={() => { playClick(); router.push('/recruiter'); }}>For Recruiters</span>
        <span className="os-menubar__spacer" />
      </div>

      {/* ── Desktop icons (right column) ────────────────────────────── */}
      <div
        style={{
          position: 'absolute',
          top: 24,
          right: 4,
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
            onOpen={(e) => handleIconClick(icon, e)}
            selected={selectedIcon === icon.id}
            isOpen={openWindows.some((w) => w.id === icon.id && !w.isMinimized)}
          />
        ))}
      </div>

      {/* ── Open windows ────────────────────────────────────────────── */}
      <AnimatePresence>
        {openWindows.map((w) => {
          const def = APP_DEFS[w.id];
          if (!def) return null;
          return (
            <Window
              key={w.id}
              id={w.id}
              title={def.title}
              defaultSize={def.defaultSize}
              iconPos={w.iconPos}
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

      {/* ── Taskbar ─────────────────────────────────────────────────── */}
      <Taskbar windows={taskbarWindows} onWindowClick={handleTaskbarClick} />
    </div>
  );
}
