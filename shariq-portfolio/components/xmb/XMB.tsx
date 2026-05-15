'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { useRouter } from 'next/navigation';

/* Asset paths — RetroArch systematic XMB theme + PS3 system sounds,
 * served from /public/ps3-original/. URL-encoded spaces. */
const ICON_BASE = '/ps3-original/PS3%20Icons%20%2B%20Sounds/Icons/systematic/png';
const SND_BASE  = '/ps3-original/PS3%20Icons%20%2B%20Sounds/oggs';
const FONT_URL  = '/ps3-original/PS3%20Icons%20%2B%20Sounds/Icons/systematic/font.ttf';
const BG_URL    = `${ICON_BASE}/bg.png`;

type Item = {
  id: string;
  label: string;
  sublabel?: string;
  icon: string;
  href?: string;
  action?: () => void;
  body?: React.ReactNode;
};

type Category = {
  id: string;
  label: string;
  icon: string;
  items: Item[];
};

const CATEGORIES: Category[] = [
  {
    id: 'users',
    label: 'Users',
    icon: `${ICON_BASE}/menu_user.png`,
    items: [
      {
        id: 'profile',
        label: 'shariq',
        sublabel: 'Sign In',
        icon: `${ICON_BASE}/menu_user.png`,
        body: (
          <div>
            <h2 style={{ fontSize: 26, fontWeight: 300 }}>shariq</h2>
            <p>CS student · Developer · Builder.</p>
            <p style={{ opacity: 0.75, marginTop: 8 }}>Welcome to my XMB.</p>
          </div>
        ),
      },
    ],
  },
  {
    id: 'settings',
    label: 'Settings',
    icon: `${ICON_BASE}/settings.png`,
    items: [
      {
        id: 'about',
        label: 'About Me',
        sublabel: 'Bio & background',
        icon: `${ICON_BASE}/menu_info.png`,
        body: (
          <div>
            <h2 style={{ fontSize: 26, fontWeight: 300 }}>About Me</h2>
            <p>CS student building things at the intersection of ML, web, and creative tooling.</p>
            <p style={{ opacity: 0.75, marginTop: 8 }}>Always shipping something on the side.</p>
          </div>
        ),
      },
      {
        id: 'stack',
        label: 'Stack',
        sublabel: 'Languages & tools',
        icon: `${ICON_BASE}/menu_drivers.png`,
        body: (
          <div>
            <h2 style={{ fontSize: 26, fontWeight: 300 }}>Stack</h2>
            <ul style={{ lineHeight: 1.8 }}>
              <li>TypeScript · React · Next.js · Tailwind</li>
              <li>Python · FastAPI · PyTorch</li>
              <li>Postgres · Supabase · Redis</li>
              <li>AWS · Docker · Vercel</li>
            </ul>
          </div>
        ),
      },
      {
        id: 'theme',
        label: 'Theme',
        sublabel: 'XMB',
        icon: `${ICON_BASE}/menu_ui.png`,
        body: <p>Current theme: <b>XMB</b></p>,
      },
    ],
  },
  {
    id: 'photo',
    label: 'Photo',
    icon: `${ICON_BASE}/images.png`,
    items: [
      {
        id: 'gallery',
        label: 'Gallery',
        sublabel: 'Coming soon',
        icon: `${ICON_BASE}/image.png`,
        body: <p>No photos uploaded yet.</p>,
      },
    ],
  },
  {
    id: 'music',
    label: 'Music',
    icon: `${ICON_BASE}/musics.png`,
    items: [
      {
        id: 'music-player',
        label: 'Music Player',
        sublabel: 'Open the built-in player',
        icon: `${ICON_BASE}/music.png`,
        action: () => { window.location.href = '/'; },
      },
    ],
  },
  {
    id: 'video',
    label: 'Projects',
    icon: `${ICON_BASE}/movies.png`,
    items: [
      {
        id: 'zocratic',
        label: 'Zocratic MMA',
        sublabel: 'Fight analytics platform',
        icon: `${ICON_BASE}/movie.png`,
        href: 'https://www.zocraticmma.com',
        body: (
          <div>
            <h2 style={{ fontSize: 26, fontWeight: 300 }}>Zocratic MMA</h2>
            <p>Comprehensive fight analytics where fans scout fighters, study matchup data, and build smarter picks.</p>
            <p style={{ opacity: 0.7, marginTop: 6 }}>Next.js · FastAPI · PyTorch · Supabase · AWS</p>
          </div>
        ),
      },
      {
        id: 'projects-all',
        label: 'All Projects',
        sublabel: 'Open the Projects window',
        icon: `${ICON_BASE}/folder.png`,
        action: () => { window.location.href = '/projects'; },
      },
      {
        id: 'resume',
        label: 'Resume',
        sublabel: 'PDF',
        icon: `${ICON_BASE}/file.png`,
        href: 'https://drive.google.com/file/d/1OR1LvVnBO5A61yTYNxE0aM3IxmpCDv4g/view?usp=sharing',
      },
    ],
  },
  {
    id: 'game',
    label: 'Game',
    icon: `${ICON_BASE}/retroarch.png`,
    items: [
      {
        id: 'easter',
        label: '???',
        sublabel: 'Press Enter',
        icon: `${ICON_BASE}/menu_quickmenu.png`,
        body: (
          <div>
            <h2 style={{ fontSize: 26, fontWeight: 300 }}>Konami time</h2>
            <p>↑ ↑ ↓ ↓ ← → ← → B A</p>
            <p style={{ opacity: 0.6 }}>(or just enjoy the wave)</p>
          </div>
        ),
      },
    ],
  },
  {
    id: 'network',
    label: 'Network',
    icon: `${ICON_BASE}/menu_network.png`,
    items: [
      {
        id: 'github',
        label: 'GitHub',
        sublabel: 'github.com/shariqsk',
        icon: `${ICON_BASE}/netplay.png`,
        href: 'https://github.com/shariqsk',
      },
      {
        id: 'blog',
        label: 'Blog',
        sublabel: 'shariqsk.github.io',
        icon: `${ICON_BASE}/database.png`,
        href: 'https://shariqsk.github.io/',
      },
    ],
  },
  {
    id: 'friends',
    label: 'Friends',
    icon: `${ICON_BASE}/menu_room.png`,
    items: [
      {
        id: 'contact',
        label: 'Contact',
        sublabel: 'Open contact form',
        icon: `${ICON_BASE}/menu_room_lan.png`,
        action: () => { window.location.href = '/'; },
      },
      {
        id: 'email',
        label: 'Email',
        sublabel: '00khanshariq@gmail.com',
        icon: `${ICON_BASE}/menu_notifications.png`,
        href: 'mailto:00khanshariq@gmail.com',
      },
    ],
  },
];

/* Sound manager — preloads and plays the PS3 sound effects. */
function useSound() {
  const audioRefs = useRef<Record<string, HTMLAudioElement>>({});
  const bgmRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const sfx = ['up', 'down', 'ok', 'cancel'];
    sfx.forEach((name) => {
      const a = new Audio(`${SND_BASE}/${name}.ogg`);
      a.preload = 'auto';
      a.volume = 0.55;
      audioRefs.current[name] = a;
    });
    return () => {
      Object.values(audioRefs.current).forEach((a) => { a.pause(); });
      if (bgmRef.current) { bgmRef.current.pause(); bgmRef.current = null; }
    };
  }, []);

  const play = useCallback((name: 'up' | 'down' | 'ok' | 'cancel') => {
    const a = audioRefs.current[name];
    if (!a) return;
    try {
      a.currentTime = 0;
      void a.play();
    } catch {}
  }, []);

  const startBgm = useCallback(() => {
    if (bgmRef.current) return;
    const a = new Audio(`${SND_BASE}/bgm.ogg`);
    a.loop = true;
    a.volume = 0.35;
    bgmRef.current = a;
    void a.play().catch(() => {});
  }, []);

  const toggleBgm = useCallback(() => {
    if (!bgmRef.current) { startBgm(); return true; }
    if (bgmRef.current.paused) { void bgmRef.current.play().catch(() => {}); return true; }
    bgmRef.current.pause(); return false;
  }, [startBgm]);

  return { play, startBgm, toggleBgm };
}

/* Live clock */
function Clock() {
  const [now, setNow] = useState<Date | null>(null);
  useEffect(() => {
    setNow(new Date());
    const id = setInterval(() => setNow(new Date()), 15000);
    return () => clearInterval(id);
  }, []);
  if (!now) return null;
  const date = now.toLocaleDateString(undefined, { month: '2-digit', day: '2-digit', year: 'numeric' });
  const time = now.toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit', hour12: false });
  return (
    <div style={{ position: 'absolute', top: 18, right: 28, color: '#fff', letterSpacing: 1, textShadow: '0 1px 3px rgba(0,0,0,0.8)', fontSize: 14, fontWeight: 300 }}>
      <span style={{ opacity: 0.9 }}>{date}</span>
      <span style={{ marginLeft: 12 }}>{time}</span>
    </div>
  );
}

export default function XMB() {
  const router = useRouter();
  const [catIdx, setCatIdx] = useState(4); // start on Projects
  const [itemIdx, setItemIdx] = useState<Record<number, number>>({});
  const [started, setStarted] = useState(false);
  const [bgmOn, setBgmOn] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const { play, startBgm, toggleBgm } = useSound();

  const curCat = CATEGORIES[catIdx];
  const curItemIdx = itemIdx[catIdx] ?? 0;
  const curItem = curCat.items[curItemIdx];

  const setItem = useCallback((c: number, v: number) => {
    setItemIdx((prev) => ({ ...prev, [c]: v }));
  }, []);

  const moveHoriz = useCallback((dx: number) => {
    setCatIdx((cur) => {
      const next = Math.max(0, Math.min(CATEGORIES.length - 1, cur + dx));
      if (next !== cur) play(dx > 0 ? 'down' : 'up');
      return next;
    });
  }, [play]);

  const moveVert = useCallback((dy: number) => {
    const items = CATEGORIES[catIdx].items;
    const cur = itemIdx[catIdx] ?? 0;
    const next = Math.max(0, Math.min(items.length - 1, cur + dy));
    if (next !== cur) { play(dy > 0 ? 'down' : 'up'); setItem(catIdx, next); }
  }, [catIdx, itemIdx, play, setItem]);

  const activate = useCallback(() => {
    if (!curItem) return;
    play('ok');
    if (curItem.action) curItem.action();
    else if (curItem.href) window.open(curItem.href, '_blank', 'noopener,noreferrer');
  }, [curItem, play]);

  const handleStart = useCallback(() => {
    setStarted(true);
    startBgm();
    setBgmOn(true);
    setTimeout(() => containerRef.current?.focus(), 0);
  }, [startBgm]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (!started) {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); handleStart(); }
        return;
      }
      switch (e.key) {
        case 'ArrowLeft':  case 'a': case 'A': e.preventDefault(); moveHoriz(-1); break;
        case 'ArrowRight': case 'd': case 'D': e.preventDefault(); moveHoriz(1);  break;
        case 'ArrowUp':    case 'w': case 'W': e.preventDefault(); moveVert(-1);  break;
        case 'ArrowDown':  case 's': case 'S': e.preventDefault(); moveVert(1);   break;
        case 'Enter':      case ' ':           e.preventDefault(); activate();    break;
        case 'Escape':     case 'Backspace':   e.preventDefault(); play('cancel'); router.push('/'); break;
        case 'm': case 'M': setBgmOn(toggleBgm()); break;
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [started, moveHoriz, moveVert, activate, handleStart, play, toggleBgm, router]);

  return (
    <div
      ref={containerRef}
      tabIndex={0}
      style={{
        position: 'fixed',
        inset: 0,
        overflow: 'hidden',
        outline: 'none',
        backgroundImage: `url(${BG_URL})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundColor: '#001428',
        color: '#fff',
        fontFamily: '"XMBFont", "Helvetica Neue", Helvetica, Arial, sans-serif',
        userSelect: 'none',
      }}
    >
      <style>{`
        @font-face {
          font-family: 'XMBFont';
          src: url('${FONT_URL}') format('truetype');
          font-display: swap;
        }
        @keyframes xmb-glow {
          0%, 100% { filter: drop-shadow(0 0 6px rgba(255,255,255,0.7)) drop-shadow(0 0 16px rgba(180,220,255,0.45)); }
          50%      { filter: drop-shadow(0 0 12px rgba(255,255,255,1))  drop-shadow(0 0 28px rgba(180,220,255,0.85)); }
        }
        @keyframes xmb-rise {
          0%   { transform: translateY(0) translateX(0); opacity: 0; }
          10%  { opacity: 1; }
          90%  { opacity: 1; }
          100% { transform: translateY(-110vh) translateX(20px); opacity: 0; }
        }
        .xmb-cat {
          display: flex; flex-direction: column; align-items: center;
          flex: 0 0 auto;
          width: 110px;
          transition: opacity 0.35s ease, transform 0.4s ease;
          cursor: pointer;
        }
        .xmb-cat img {
          width: 56px; height: 56px;
          opacity: 0.55;
          transition: width 0.4s, height 0.4s, opacity 0.35s, filter 0.35s;
          object-fit: contain;
          image-rendering: -webkit-optimize-contrast;
        }
        .xmb-cat-label {
          margin-top: 8px;
          font-size: 11px;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          opacity: 0;
          transition: opacity 0.3s;
          text-shadow: 0 1px 3px rgba(0,0,0,0.9);
          white-space: nowrap;
        }
        .xmb-cat.active img {
          width: 100px; height: 100px;
          opacity: 1;
          animation: xmb-glow 2.6s ease-in-out infinite;
        }
        .xmb-cat.active .xmb-cat-label { opacity: 1; }
        .xmb-item {
          display: flex; align-items: center; gap: 14px;
          padding: 8px 14px;
          opacity: 0.5;
          transition: opacity 0.25s, transform 0.25s, background 0.25s;
          cursor: pointer;
          border-radius: 4px;
          min-width: 280px;
        }
        .xmb-item:hover { opacity: 0.85; }
        .xmb-item.active {
          opacity: 1;
          background: linear-gradient(90deg, rgba(255,255,255,0.18), rgba(255,255,255,0));
        }
        .xmb-item img {
          width: 42px; height: 42px; flex-shrink: 0;
          transition: width 0.25s, height 0.25s, filter 0.25s;
          object-fit: contain;
        }
        .xmb-item.active img {
          width: 60px; height: 60px;
          filter: drop-shadow(0 0 6px rgba(255,255,255,0.7));
        }
        .xmb-item-text { line-height: 1.25; }
        .xmb-item-label { font-size: 16px; font-weight: 300; text-shadow: 0 1px 3px rgba(0,0,0,0.85); }
        .xmb-item-sub { font-size: 12px; opacity: 0.7; margin-top: 2px; text-shadow: 0 1px 3px rgba(0,0,0,0.8); }
        .xmb-hint {
          position: absolute; bottom: 14px; right: 24px;
          font-size: 11px; opacity: 0.7; letter-spacing: 1.5px;
          text-shadow: 0 1px 2px rgba(0,0,0,0.8);
        }
        .xmb-back {
          position: absolute; top: 16px; left: 24px;
          font-size: 12px; opacity: 0.7; letter-spacing: 1.5px;
          cursor: pointer; padding: 6px 10px;
          text-shadow: 0 1px 2px rgba(0,0,0,0.9);
          background: rgba(0,0,0,0.25);
          border: 1px solid rgba(255,255,255,0.15);
          border-radius: 4px;
        }
        .xmb-back:hover { opacity: 1; background: rgba(0,0,0,0.45); }
        .xmb-bubble {
          position: absolute;
          bottom: -40px;
          border-radius: 50%;
          background: radial-gradient(circle at 30% 30%, rgba(255,255,255,0.95), rgba(160,210,255,0.25) 60%, rgba(0,0,0,0) 72%);
          pointer-events: none;
        }
      `}</style>

      {/* Drifting bubbles */}
      {Array.from({ length: 22 }).map((_, i) => {
        const size = 8 + ((i * 37) % 26);
        const left = (i * 53) % 100;
        const dur = 18 + ((i * 13) % 18);
        const delay = (i * 1.7) % 16;
        const op = 0.08 + ((i * 11) % 22) / 100;
        return (
          <span key={i} className="xmb-bubble" style={{
            left: `${left}%`,
            width: size, height: size,
            opacity: op,
            animation: `xmb-rise ${dur}s linear ${delay}s infinite`,
          }} />
        );
      })}

      {!started && (
        <div
          onClick={handleStart}
          style={{
            position: 'absolute', inset: 0,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            background: 'rgba(0,0,0,0.55)',
            cursor: 'pointer',
            flexDirection: 'column',
            zIndex: 10,
          }}
        >
          <div style={{ fontSize: 28, fontWeight: 300, letterSpacing: 4, textShadow: '0 2px 8px rgba(0,0,0,0.9)' }}>
            PRESS ENTER
          </div>
          <div style={{ marginTop: 12, fontSize: 12, opacity: 0.7, letterSpacing: 2 }}>
            click anywhere to start (audio)
          </div>
        </div>
      )}

      <div className="xmb-back" onClick={() => { play('cancel'); router.push('/'); }}>
        ← BACK
      </div>

      <Clock />

      {/* Horizontal category bar — translates so active is at ~38% from left */}
      <div
        style={{
          position: 'absolute',
          top: '44%',
          left: '38%',
          transform: `translate(${-catIdx * 150}px, -50%)`,
          transition: 'transform 0.45s cubic-bezier(0.22, 0.61, 0.36, 1)',
          display: 'flex',
          gap: 40,
          alignItems: 'center',
        }}
      >
        {CATEGORIES.map((c, i) => (
          <div
            key={c.id}
            className={`xmb-cat ${i === catIdx ? 'active' : ''}`}
            onClick={() => { if (i === catIdx) activate(); else { play(i > catIdx ? 'down' : 'up'); setCatIdx(i); } }}
            style={{ opacity: Math.max(0.25, 1 - Math.abs(i - catIdx) * 0.2) }}
          >
            <img src={c.icon} alt={c.label} draggable={false} />
            <div className="xmb-cat-label">{c.label}</div>
          </div>
        ))}
      </div>

      {/* Items column — anchored under active category */}
      <div
        style={{
          position: 'absolute',
          top: 'calc(44% + 80px)',
          left: 'calc(38% - 40px)',
          transform: `translateY(${-curItemIdx * 64}px)`,
          transition: 'transform 0.3s cubic-bezier(0.22, 0.61, 0.36, 1)',
          display: 'flex',
          flexDirection: 'column',
          gap: 4,
        }}
      >
        {curCat.items.map((it, i) => (
          <div
            key={it.id}
            className={`xmb-item ${i === curItemIdx ? 'active' : ''}`}
            onClick={() => {
              if (i === curItemIdx) activate();
              else { play(i > curItemIdx ? 'down' : 'up'); setItem(catIdx, i); }
            }}
            onDoubleClick={activate}
          >
            <img src={it.icon} alt="" draggable={false} />
            <div className="xmb-item-text">
              <div className="xmb-item-label">{it.label}</div>
              {it.sublabel && <div className="xmb-item-sub">{it.sublabel}</div>}
            </div>
          </div>
        ))}
      </div>

      {/* Description / preview pane for the active item */}
      {curItem?.body && (
        <div style={{
          position: 'absolute',
          top: 72,
          left: 32,
          maxWidth: 320,
          fontSize: 14,
          lineHeight: 1.55,
          textShadow: '0 1px 3px rgba(0,0,0,0.85)',
          opacity: 0.95,
          fontWeight: 300,
        }}>
          {curItem.body}
        </div>
      )}

      <div className="xmb-hint">
        ↑ ↓ ← →  NAV    ⏎  SELECT    M  {bgmOn ? 'MUTE' : 'MUSIC'}    ESC  BACK
      </div>
    </div>
  );
}
