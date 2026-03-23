'use client';

import { useState, useEffect } from 'react';

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
      const h   = now.getHours().toString().padStart(2, '0');
      const m   = now.getMinutes().toString().padStart(2, '0');
      const day = now.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
      setTime(`${day}  ${h}:${m}`);
    };
    update();
    const id = setInterval(update, 10000);
    return () => clearInterval(id);
  }, []);

  return <span className="os-taskbar__clock">{time}</span>;
}

export default function Taskbar({ windows, onWindowClick }: TaskbarProps) {
  return (
    <div className="os-taskbar">
      <span className="os-taskbar__brand">sk_os</span>

      <div className="os-taskbar__divider" />

      <div className="os-taskbar__windows">
        {windows.map((w) => (
          <button
            key={w.id}
            className={`os-taskbar__win-btn ${w.isFocused && !w.isMinimized ? 'os-taskbar__win-btn--active' : ''}`}
            style={
              w.isFocused && !w.isMinimized && w.accentColor
                ? ({ '--btn-accent': w.accentColor } as React.CSSProperties)
                : undefined
            }
            onClick={() => onWindowClick(w.id)}
            title={w.title}
          >
            {w.isMinimized ? `[ ${w.title} ]` : w.title}
          </button>
        ))}
      </div>

      <Clock />
    </div>
  );
}
