'use client';

import { useState, useEffect, useCallback, useRef, useMemo } from 'react';
import { useRouter } from 'next/navigation';

/* ── Asset paths (RetroArch systematic XMB theme + PS3 system sounds) ─ */
const ICON_BASE = '/ps3-original/PS3%20Icons%20%2B%20Sounds/Icons/systematic/png';
const SND_BASE  = '/ps3-original/PS3%20Icons%20%2B%20Sounds/oggs';
const FONT_URL  = '/ps3-original/PS3%20Icons%20%2B%20Sounds/Icons/systematic/font.ttf';

/* ── Themes (color variations of the XMB wave) ───────────────────────── */
type Theme = {
  id: string;
  label: string;
  bg: string;       // CSS background (gradient)
  wave: string;     // primary wave colour
  wave2: string;    // secondary wave colour
  particle: string; // particle colour
};

const THEMES: Theme[] = [
  {
    id: 'classic',
    label: 'Classic',
    bg: 'radial-gradient(ellipse at 30% 40%, #1a1a1a 0%, #050505 70%, #000 100%)',
    wave: '#cfd8e6',
    wave2: '#8fa0b8',
    particle: '#ffffff',
  },
  {
    id: 'aqua',
    label: 'Aqua',
    bg: 'radial-gradient(ellipse at 40% 50%, #053a6e 0%, #021830 60%, #00080f 100%)',
    wave: '#9fe4ff',
    wave2: '#4fb0e8',
    particle: '#d8f4ff',
  },
  {
    id: 'amethyst',
    label: 'Amethyst',
    bg: 'radial-gradient(ellipse at 35% 45%, #3b0a55 0%, #1a0322 60%, #060008 100%)',
    wave: '#e6b3ff',
    wave2: '#9a5acc',
    particle: '#f5d8ff',
  },
  {
    id: 'crimson',
    label: 'Crimson',
    bg: 'radial-gradient(ellipse at 35% 45%, #5a0815 0%, #220406 60%, #0a0002 100%)',
    wave: '#ff9aa8',
    wave2: '#d04060',
    particle: '#ffd0d6',
  },
  {
    id: 'verdant',
    label: 'Verdant',
    bg: 'radial-gradient(ellipse at 35% 45%, #053d20 0%, #021a0e 60%, #000805 100%)',
    wave: '#9affc0',
    wave2: '#3fc070',
    particle: '#d8ffe6',
  },
  {
    id: 'sunset',
    label: 'Sunset',
    bg: 'radial-gradient(ellipse at 35% 45%, #4a2200 0%, #1c0c00 60%, #080400 100%)',
    wave: '#ffc77a',
    wave2: '#e07a30',
    particle: '#ffe6c0',
  },
];

/* ── Categories / items ──────────────────────────────────────────────── */
type Track = { src: string; title: string; artist: string; cover?: string };

type Item = {
  id: string;
  label: string;
  sublabel?: string;
  icon: string;
  href?: string;
  action?: (ctx: XmbContext) => void;
  body?: React.ReactNode;
  track?: Track;
};

type Category = {
  id: string;
  label: string;
  icon: string;
  items: Item[];
};

interface XmbContext {
  setThemeIdx: (i: number) => void;
  themeIdx: number;
  playTrack: (t: Track) => void;
}

const VANSIRE: Track = {
  src: '/About%20the%20World%20-%20Vansire%20.mp3',
  title: 'About the World',
  artist: 'Vansire',
  cover: '/abouttheworldvansire.jpg',
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
            <h2 style={{ fontSize: 26, fontWeight: 300, marginBottom: 8 }}>shariq</h2>
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
            <h2 style={{ fontSize: 26, fontWeight: 300, marginBottom: 8 }}>About Me</h2>
            <p>CS student building at the intersection of ML, web, and creative tooling.</p>
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
            <h2 style={{ fontSize: 26, fontWeight: 300, marginBottom: 8 }}>Stack</h2>
            <ul style={{ lineHeight: 1.8 }}>
              <li>TypeScript · React · Next.js · Tailwind</li>
              <li>Python · FastAPI · PyTorch</li>
              <li>Postgres · Supabase · Redis</li>
              <li>AWS · Docker · Vercel</li>
            </ul>
          </div>
        ),
      },
      ...THEMES.map((t, i): Item => ({
        id: `theme-${t.id}`,
        label: `Theme — ${t.label}`,
        sublabel: `Apply the ${t.label} theme`,
        icon: `${ICON_BASE}/menu_ui.png`,
        action: (ctx) => ctx.setThemeIdx(i),
        body: (
          <div>
            <h2 style={{ fontSize: 26, fontWeight: 300, marginBottom: 8 }}>{t.label}</h2>
            <p>Press ⏎ to apply this theme.</p>
          </div>
        ),
      })),
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
        id: 'vansire',
        label: VANSIRE.title,
        sublabel: VANSIRE.artist,
        icon: VANSIRE.cover ?? `${ICON_BASE}/music.png`,
        action: (ctx) => ctx.playTrack(VANSIRE),
        body: (
          <div>
            <h2 style={{ fontSize: 26, fontWeight: 300, marginBottom: 8 }}>Now Playing</h2>
            <p>{VANSIRE.title} — {VANSIRE.artist}</p>
            <p style={{ opacity: 0.7, marginTop: 6 }}>Press ⏎ to play.</p>
          </div>
        ),
      },
      {
        id: 'open-music',
        label: 'Music Player',
        sublabel: 'Open the desktop player',
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
            <h2 style={{ fontSize: 26, fontWeight: 300, marginBottom: 8 }}>Zocratic MMA</h2>
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
            <h2 style={{ fontSize: 26, fontWeight: 300, marginBottom: 8 }}>Konami time</h2>
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
      { id: 'github', label: 'GitHub', sublabel: 'github.com/shariqsk', icon: `${ICON_BASE}/netplay.png`, href: 'https://github.com/shariqsk' },
      { id: 'blog',   label: 'Blog',   sublabel: 'shariqsk.github.io',  icon: `${ICON_BASE}/database.png`, href: 'https://shariqsk.github.io/' },
    ],
  },
  {
    id: 'friends',
    label: 'Friends',
    icon: `${ICON_BASE}/menu_room.png`,
    items: [
      { id: 'contact', label: 'Contact', sublabel: 'Open contact form', icon: `${ICON_BASE}/menu_room_lan.png`, action: () => { window.location.href = '/'; } },
      { id: 'email',   label: 'Email',   sublabel: '00khanshariq@gmail.com', icon: `${ICON_BASE}/menu_notifications.png`, href: 'mailto:00khanshariq@gmail.com' },
    ],
  },
];

/* ── Sound effects + BGM ─────────────────────────────────────────────── */
function useSound() {
  const audioRefs = useRef<Record<string, HTMLAudioElement>>({});
  const bgmRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    ['up', 'down', 'ok', 'cancel'].forEach((n) => {
      const a = new Audio(`${SND_BASE}/${n}.ogg`);
      a.preload = 'auto'; a.volume = 0.55;
      audioRefs.current[n] = a;
    });
    return () => {
      Object.values(audioRefs.current).forEach((a) => a.pause());
      if (bgmRef.current) { bgmRef.current.pause(); bgmRef.current = null; }
    };
  }, []);

  const play = useCallback((n: 'up' | 'down' | 'ok' | 'cancel') => {
    const a = audioRefs.current[n];
    if (!a) return;
    try { a.currentTime = 0; void a.play(); } catch {}
  }, []);

  const startBgm = useCallback(() => {
    if (bgmRef.current) return;
    const a = new Audio(`${SND_BASE}/bgm.ogg`);
    a.loop = true; a.volume = 0.35;
    bgmRef.current = a;
    void a.play().catch(() => {});
  }, []);

  const stopBgm = useCallback(() => {
    if (bgmRef.current) { bgmRef.current.pause(); }
  }, []);

  const toggleBgm = useCallback(() => {
    if (!bgmRef.current) { startBgm(); return true; }
    if (bgmRef.current.paused) { void bgmRef.current.play().catch(() => {}); return true; }
    bgmRef.current.pause(); return false;
  }, [startBgm]);

  return { play, startBgm, stopBgm, toggleBgm };
}

/* ── Animated horizontal wave (canvas) ───────────────────────────────── */
function Wave({ theme }: { theme: Theme }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let raf = 0;
    let t = 0;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width  = Math.floor(window.innerWidth  * dpr);
      canvas.height = Math.floor(window.innerHeight * dpr);
      canvas.style.width  = '100vw';
      canvas.style.height = '100vh';
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener('resize', resize);

    /* Hex → rgba helper */
    const rgba = (hex: string, a: number) => {
      const m = hex.replace('#', '');
      const r = parseInt(m.slice(0, 2), 16);
      const g = parseInt(m.slice(2, 4), 16);
      const b = parseInt(m.slice(4, 6), 16);
      return `rgba(${r},${g},${b},${a})`;
    };

    /* Particles drifting along the wave */
    const particles = Array.from({ length: 90 }).map(() => ({
      x: Math.random(),
      y: Math.random(),
      vx: 0.0005 + Math.random() * 0.0012,
      r: 0.6 + Math.random() * 1.8,
      a: 0.2 + Math.random() * 0.6,
      phase: Math.random() * Math.PI * 2,
    }));

    const draw = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      ctx.clearRect(0, 0, w, h);

      /* Glow band that follows the wave centre */
      const cy = h * 0.55;
      const glow = ctx.createLinearGradient(0, cy - h * 0.3, 0, cy + h * 0.3);
      glow.addColorStop(0, rgba(theme.wave, 0));
      glow.addColorStop(0.5, rgba(theme.wave, 0.05));
      glow.addColorStop(1, rgba(theme.wave, 0));
      ctx.fillStyle = glow;
      ctx.fillRect(0, 0, w, h);

      /* Ribbon layers — wide translucent curves with varying amplitude/phase */
      const layers = [
        { amp: 90,  freq: 0.0018, phase: t * 0.6,  thick: 220, alpha: 0.13, color: theme.wave },
        { amp: 70,  freq: 0.0024, phase: t * 0.8 + 1.2, thick: 170, alpha: 0.18, color: theme.wave2 },
        { amp: 50,  freq: 0.0032, phase: t * 1.1 + 2.4, thick: 110, alpha: 0.20, color: theme.wave },
        { amp: 35,  freq: 0.0042, phase: t * 1.4 + 0.6, thick: 60,  alpha: 0.30, color: theme.wave },
        { amp: 25,  freq: 0.0055, phase: t * 1.7 + 3.1, thick: 22,  alpha: 0.55, color: '#ffffff' },
      ];

      for (const L of layers) {
        ctx.beginPath();
        for (let x = -20; x <= w + 20; x += 6) {
          const y = cy
            + Math.sin(x * L.freq + L.phase) * L.amp
            + Math.cos(x * L.freq * 0.5 + L.phase * 0.7) * L.amp * 0.35;
          if (x === -20) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.lineWidth = L.thick;
        ctx.strokeStyle = rgba(L.color, L.alpha);
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        // Soft glow via shadow
        ctx.shadowColor = rgba(L.color, 0.6);
        ctx.shadowBlur  = L.thick * 0.6;
        ctx.stroke();
      }
      ctx.shadowBlur = 0;

      /* Floating particles riding the wave */
      for (const p of particles) {
        p.x += p.vx;
        if (p.x > 1.05) p.x = -0.05;
        const px = p.x * w;
        const py = cy
          + Math.sin(px * 0.0032 + t * 1.1 + p.phase) * 60
          + (p.y - 0.5) * h * 0.5;
        const radius = p.r * 1.6;
        const grad = ctx.createRadialGradient(px, py, 0, px, py, radius * 4);
        grad.addColorStop(0, rgba(theme.particle, p.a));
        grad.addColorStop(1, rgba(theme.particle, 0));
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(px, py, radius * 4, 0, Math.PI * 2);
        ctx.fill();
      }

      t += 0.012;
      raf = requestAnimationFrame(draw);
    };
    raf = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
    };
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      style={{ position: 'absolute', inset: 0, width: '100vw', height: '100vh', pointerEvents: 'none' }}
    />
  );
}

/* ── Clock ───────────────────────────────────────────────────────────── */
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

/* ── Now-Playing bar (built-in music player) ─────────────────────────── */
function NowPlaying({ track, onClose }: { track: Track | null; onClose: () => void }) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);
  const [cur, setCur] = useState(0);
  const [dur, setDur] = useState(0);

  useEffect(() => {
    if (!track) return;
    const a = new Audio(track.src);
    a.volume = 0.7;
    audioRef.current = a;
    const onTime = () => setCur(a.currentTime);
    const onMeta = () => setDur(a.duration || 0);
    a.addEventListener('timeupdate', onTime);
    a.addEventListener('loadedmetadata', onMeta);
    a.addEventListener('ended', () => setPlaying(false));
    void a.play().then(() => setPlaying(true)).catch(() => setPlaying(false));
    return () => {
      a.removeEventListener('timeupdate', onTime);
      a.removeEventListener('loadedmetadata', onMeta);
      a.pause();
      audioRef.current = null;
    };
  }, [track]);

  if (!track) return null;

  const toggle = () => {
    const a = audioRef.current;
    if (!a) return;
    if (a.paused) { void a.play().then(() => setPlaying(true)); }
    else { a.pause(); setPlaying(false); }
  };

  const seek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const a = audioRef.current; if (!a || !dur) return;
    a.currentTime = (Number(e.target.value) / 100) * dur;
  };

  const fmt = (s: number) => {
    if (!isFinite(s)) return '0:00';
    const m = Math.floor(s / 60);
    const r = Math.floor(s % 60);
    return `${m}:${r.toString().padStart(2, '0')}`;
  };

  return (
    <div style={{
      position: 'absolute',
      left: 24, right: 24, bottom: 48,
      display: 'flex',
      alignItems: 'center',
      gap: 16,
      padding: '12px 18px',
      background: 'linear-gradient(90deg, rgba(0,0,0,0.55), rgba(0,0,0,0.25))',
      border: '1px solid rgba(255,255,255,0.18)',
      borderRadius: 8,
      backdropFilter: 'blur(6px)',
      color: '#fff',
      fontFamily: 'inherit',
    }}>
      {track.cover && (
        <img src={track.cover} alt="" width={56} height={56} style={{ borderRadius: 6, objectFit: 'cover', boxShadow: '0 2px 12px rgba(0,0,0,0.6)' }} />
      )}
      <div style={{ minWidth: 180 }}>
        <div style={{ fontSize: 15, fontWeight: 400 }}>{track.title}</div>
        <div style={{ fontSize: 12, opacity: 0.7 }}>{track.artist}</div>
      </div>
      <button
        onClick={toggle}
        style={{
          width: 40, height: 40, borderRadius: '50%',
          background: 'rgba(255,255,255,0.12)',
          border: '1px solid rgba(255,255,255,0.3)',
          color: '#fff', cursor: 'pointer', fontSize: 16,
        }}
      >
        {playing ? '⏸' : '▶'}
      </button>
      <span style={{ fontSize: 11, opacity: 0.75, minWidth: 36 }}>{fmt(cur)}</span>
      <input
        type="range" min={0} max={100} value={dur ? (cur / dur) * 100 : 0}
        onChange={seek}
        style={{ flex: 1, accentColor: '#fff' }}
      />
      <span style={{ fontSize: 11, opacity: 0.75, minWidth: 36 }}>{fmt(dur)}</span>
      <button
        onClick={onClose}
        title="Close"
        style={{
          width: 32, height: 32, borderRadius: '50%',
          background: 'rgba(255,255,255,0.08)',
          border: '1px solid rgba(255,255,255,0.25)',
          color: '#fff', cursor: 'pointer', fontSize: 14,
        }}
      >
        ✕
      </button>
    </div>
  );
}

/* ── Main XMB ───────────────────────────────────────────────────────── */
export default function XMB() {
  const router = useRouter();
  const [catIdx, setCatIdx] = useState(4);
  const [itemIdx, setItemIdx] = useState<Record<number, number>>({});
  const [started, setStarted] = useState(false);
  const [bgmOn, setBgmOn] = useState(false);
  const [themeIdx, setThemeIdx] = useState(0);
  const [track, setTrack] = useState<Track | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const { play, startBgm, stopBgm, toggleBgm } = useSound();

  const theme = THEMES[themeIdx];
  const curCat = CATEGORIES[catIdx];
  const curItemIdx = itemIdx[catIdx] ?? 0;
  const curItem = curCat.items[curItemIdx];

  const ctx: XmbContext = useMemo(() => ({
    setThemeIdx,
    themeIdx,
    playTrack: (t) => { stopBgm(); setBgmOn(false); setTrack(t); },
  }), [themeIdx, stopBgm]);

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
    if (curItem.action) curItem.action(ctx);
    else if (curItem.href) window.open(curItem.href, '_blank', 'noopener,noreferrer');
  }, [curItem, play, ctx]);

  const handleStart = useCallback(() => {
    setStarted(true);
    startBgm();
    setBgmOn(true);
    setTimeout(() => containerRef.current?.focus(), 0);
  }, [startBgm]);

  const cycleTheme = useCallback(() => {
    setThemeIdx((i) => (i + 1) % THEMES.length);
  }, []);

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
        case 't': case 'T': cycleTheme(); play('ok'); break;
        case 'm': case 'M': setBgmOn(toggleBgm()); break;
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [started, moveHoriz, moveVert, activate, handleStart, play, toggleBgm, cycleTheme, router]);

  /* Layout anchors */
  const CAT_TOP_PCT = 42; // category bar centre, % of viewport
  const ITEMS_TOP_OFFSET = 88; // px below category centre where active item sits
  const ITEM_GAP = 64; // px per item

  return (
    <div
      ref={containerRef}
      tabIndex={0}
      style={{
        position: 'fixed',
        inset: 0,
        overflow: 'hidden',
        outline: 'none',
        background: theme.bg,
        color: '#fff',
        fontFamily: '"XMBFont", "Helvetica Neue", Helvetica, Arial, sans-serif',
        userSelect: 'none',
        transition: 'background 0.7s ease',
      }}
    >
      <style>{`
        @font-face {
          font-family: 'XMBFont';
          src: url('${FONT_URL}') format('truetype');
          font-display: swap;
        }
        @keyframes xmb-pulse {
          0%, 100% { filter: drop-shadow(0 0 6px rgba(255,255,255,0.65)) drop-shadow(0 0 18px rgba(255,255,255,0.35)); }
          50%      { filter: drop-shadow(0 0 14px rgba(255,255,255,1))    drop-shadow(0 0 32px rgba(255,255,255,0.7)); }
        }
        .xmb-cat {
          display: flex; flex-direction: column; align-items: center;
          flex: 0 0 auto;
          width: 120px;
          cursor: pointer;
          transition: opacity 0.35s ease;
        }
        .xmb-cat img {
          width: 56px; height: 56px;
          opacity: 0.5;
          object-fit: contain;
          transition: width 0.4s, height 0.4s, opacity 0.35s, filter 0.35s;
        }
        .xmb-cat-label {
          margin-top: 10px;
          font-size: 11px;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          opacity: 0;
          transition: opacity 0.3s;
          text-shadow: 0 1px 3px rgba(0,0,0,0.9);
          white-space: nowrap;
        }
        .xmb-cat.active img {
          width: 104px; height: 104px;
          opacity: 1;
          animation: xmb-pulse 2.6s ease-in-out infinite;
        }
        .xmb-cat.active .xmb-cat-label { opacity: 1; }
        .xmb-item {
          display: flex; align-items: center; gap: 14px;
          padding: 8px 14px;
          opacity: 0.45;
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
          object-fit: contain;
          transition: width 0.25s, height 0.25s, filter 0.25s;
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
          font-size: 12px; opacity: 0.75; letter-spacing: 1.5px;
          cursor: pointer; padding: 6px 12px;
          text-shadow: 0 1px 2px rgba(0,0,0,0.9);
          background: rgba(0,0,0,0.25);
          border: 1px solid rgba(255,255,255,0.18);
          border-radius: 4px;
        }
        .xmb-back:hover { opacity: 1; background: rgba(0,0,0,0.45); }
        .xmb-theme-pill {
          position: absolute; top: 16px; left: 50%;
          transform: translateX(-50%);
          font-size: 11px; letter-spacing: 2px;
          padding: 5px 14px;
          background: rgba(0,0,0,0.3);
          border: 1px solid rgba(255,255,255,0.18);
          border-radius: 999px;
          opacity: 0.85;
          text-shadow: 0 1px 2px rgba(0,0,0,0.8);
        }
      `}</style>

      {/* Animated wave background */}
      <Wave theme={theme} />

      {/* Splash to gain user gesture for audio */}
      {!started && (
        <div
          onClick={handleStart}
          style={{
            position: 'absolute', inset: 0,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            background: 'rgba(0,0,0,0.55)',
            cursor: 'pointer', flexDirection: 'column', zIndex: 20,
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
      <div className="xmb-theme-pill">{theme.label.toUpperCase()}  ·  T to cycle</div>
      <Clock />

      {/* Category bar */}
      <div
        style={{
          position: 'absolute',
          top: `${CAT_TOP_PCT}%`,
          left: '38%',
          transform: `translate(${-catIdx * 150}px, -50%)`,
          transition: 'transform 0.45s cubic-bezier(0.22, 0.61, 0.36, 1)',
          display: 'flex',
          gap: 40,
          alignItems: 'center',
          zIndex: 5,
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

      {/* Items column — clipped + masked so it never overlaps the category bar */}
      <div
        style={{
          position: 'absolute',
          top: `calc(${CAT_TOP_PCT}% + ${ITEMS_TOP_OFFSET}px)`,
          bottom: 90,
          left: `calc(38% - 40px)`,
          width: 480,
          overflow: 'hidden',
          /* Soft top fade so items scrolling up disappear before reaching the category bar */
          WebkitMaskImage: 'linear-gradient(to bottom, transparent 0, rgba(0,0,0,0.4) 24px, #000 60px, #000 calc(100% - 30px), transparent 100%)',
          maskImage:       'linear-gradient(to bottom, transparent 0, rgba(0,0,0,0.4) 24px, #000 60px, #000 calc(100% - 30px), transparent 100%)',
          zIndex: 4,
        }}
      >
        <div
          style={{
            transform: `translateY(${-curItemIdx * ITEM_GAP}px)`,
            transition: 'transform 0.3s cubic-bezier(0.22, 0.61, 0.36, 1)',
            display: 'flex', flexDirection: 'column', gap: 4,
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
      </div>

      {/* Description / preview pane */}
      {curItem?.body && (
        <div style={{
          position: 'absolute',
          top: 80,
          left: 32,
          maxWidth: 320,
          fontSize: 14,
          lineHeight: 1.55,
          textShadow: '0 1px 3px rgba(0,0,0,0.85)',
          opacity: 0.95,
          fontWeight: 300,
          zIndex: 3,
        }}>
          {curItem.body}
        </div>
      )}

      {/* Now-playing bar */}
      <NowPlaying track={track} onClose={() => setTrack(null)} />

      <div className="xmb-hint">
        ↑ ↓ ← →  NAV    ⏎  SELECT    T  THEME    M  {bgmOn ? 'MUTE' : 'MUSIC'}    ESC  BACK
      </div>
    </div>
  );
}
