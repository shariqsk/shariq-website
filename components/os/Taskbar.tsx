'use client';

import { useState, useEffect } from 'react';
import { playClick } from '@/lib/sounds';

export interface TaskbarWindow {
  id: string;
  title: string;
  accentColor?: string;
  isMinimized: boolean;
  isFocused: boolean;
}

interface TaskbarProps {
  windows: TaskbarWindow[];
  onWindowClick: (id: string) => void;
}

function Clock() {
  const [time, setTime] = useState('');

  useEffect(() => {
    const update = () => {
      const now = new Date();
      const h = now.getHours().toString().padStart(2, '0');
      const m = now.getMinutes().toString().padStart(2, '0');
      setTime(`${h}:${m}`);
    };
    update();
    const id = setInterval(update, 10000);
    return () => clearInterval(id);
  }, []);

  return <span className="os-taskbar__clock">{time}</span>;
}

/* Small Win95 folder icon for taskbar buttons */
function TaskbarIcon({ id }: { id: string }) {
  const icons: Record<string, string> = {
    projects: '📁',
    about: '👤',
    contact: '✉',
    terminal: '▶',
    resume: '📄',
    blog: '📖',
  };
  return <span style={{ fontSize: 12, lineHeight: 1 }}>{icons[id] ?? '🗔'}</span>;
}

export default function Taskbar({ windows, onWindowClick }: TaskbarProps) {
  return (
    <div className="os-taskbar">
      <span className="os-taskbar__brand" onClick={playClick}>
        <svg width="14" height="14" viewBox="0 0 14 14" style={{ flexShrink: 0 }}>
          <rect x="0" y="0" width="6" height="6" fill="#ff0000"/>
          <rect x="8" y="0" width="6" height="6" fill="#00ff00"/>
          <rect x="0" y="8" width="6" height="6" fill="#0000ff"/>
          <rect x="8" y="8" width="6" height="6" fill="#ffff00"/>
        </svg>
        sk_os
      </span>

      <div className="os-taskbar__divider" />

      <div className="os-taskbar__windows">
        {windows.map((w) => (
          <button
            key={w.id}
            className={`os-taskbar__win-btn ${w.isFocused && !w.isMinimized ? 'os-taskbar__win-btn--active' : ''}`}
            onClick={() => { playClick(); onWindowClick(w.id); }}
            title={w.title}
          >
            <TaskbarIcon id={w.id} />
            {w.title}
          </button>
        ))}
      </div>

      <Clock />
    </div>
  );
}
