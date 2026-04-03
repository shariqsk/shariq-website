'use client';

import { useEffect, useRef, useCallback, useState } from 'react';

/* ── Constants ─────────────────────────────────────────────────────── */
const COLS = 11;
const ROWS = 5;
const INV_W = 28;
const INV_H = 22;
const INV_PAD_X = 10;
const INV_PAD_Y = 8;
const BULLET_W = 3;
const BULLET_H = 10;
const PLAYER_W = 36;
const PLAYER_H = 14;
const BOMB_W = 4;
const BOMB_H = 12;

type Invader = { col: number; row: number; alive: boolean; type: 0 | 1 | 2 };
type Bullet  = { x: number; y: number };
type Bomb    = { x: number; y: number; dy: number };
type Particle = { x: number; y: number; vx: number; vy: number; life: number; maxLife: number; color: string };
type Shield   = { x: number; y: number; hp: number };

const INVADER_COLORS = ['#55ff55', '#ffff55', '#ff5555'];
const PARTICLE_COLORS = ['#55ff55', '#00ff00', '#aaffaa', '#ffffff'];

function makeInvaders(): Invader[] {
  const arr: Invader[] = [];
  for (let r = 0; r < ROWS; r++) {
    for (let c = 0; c < COLS; c++) {
      const type = r === 0 ? 2 : r <= 2 ? 1 : 0;
      arr.push({ col: c, row: r, alive: true, type: type as 0 | 1 | 2 });
    }
  }
  return arr;
}

function makeShields(canvasW: number, canvasH: number): Shield[] {
  const shields: Shield[] = [];
  const count = 4;
  const sw = 48;
  const sh = 20;
  const spacing = (canvasW - count * sw) / (count + 1);
  for (let i = 0; i < count; i++) {
    const bx = spacing + i * (sw + spacing);
    for (let brow = 0; brow < 3; brow++) {
      for (let bcol = 0; bcol < 6; bcol++) {
        if (brow === 2 && (bcol === 0 || bcol === 1 || bcol === 4 || bcol === 5)) continue;
        shields.push({ x: bx + bcol * 8, y: canvasH - 80 + brow * 8, hp: 3 });
      }
    }
  }
  return shields;
}

export default function SpaceInvadersWindow() {
  const canvasRef  = useRef<HTMLCanvasElement>(null);
  const stateRef   = useRef<'idle' | 'playing' | 'dead' | 'win'>('idle');
  const animRef    = useRef<number>(0);

  // game state refs (mutable, no re-render)
  const invadersRef   = useRef<Invader[]>([]);
  const bulletsRef    = useRef<Bullet[]>([]);
  const bombsRef      = useRef<Bomb[]>([]);
  const particlesRef  = useRef<Particle[]>([]);
  const shieldsRef    = useRef<Shield[]>([]);
  const playerXRef    = useRef(0);
  const playerLivesRef= useRef(3);
  const scoreRef      = useRef(0);
  const invDirRef     = useRef(1);
  const invOffXRef    = useRef(0);
  const invOffYRef    = useRef(0);
  const invSpeedRef   = useRef(0.4);
  const bombTimerRef  = useRef(0);
  const lastTimeRef   = useRef(0);
  const canSizeRef    = useRef({ w: 0, h: 0 });
  const invStartXRef  = useRef(0);
  const invStartYRef  = useRef(0);
  const keysRef       = useRef<Set<string>>(new Set());
  const shootCoolRef  = useRef(0);
  const flashRef      = useRef(0);
  const levelRef      = useRef(1);
  const highScoreRef  = useRef(0);
  const touchXRef     = useRef<number | null>(null);
  const touchShootRef = useRef(false);

  // React state for HUD re-renders
  const [uiState, setUiState] = useState<'idle' | 'playing' | 'dead' | 'win'>('idle');
  const [score, setScore]    = useState(0);
  const [lives, setLives]    = useState(3);
  const [highScore, setHighScore] = useState(0);
  const [level, setLevel]    = useState(1);

  const syncUI = useCallback(() => {
    setScore(scoreRef.current);
    setLives(playerLivesRef.current);
    setHighScore(highScoreRef.current);
    setLevel(levelRef.current);
    setUiState(stateRef.current);
  }, []);

  /* ── Canvas setup ────────────────────────────────────────────────── */
  const setupCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const parent = canvas.parentElement;
    if (!parent) return;
    const w = parent.clientWidth;
    const h = parent.clientHeight;
    canvas.width  = w;
    canvas.height = h;
    canSizeRef.current = { w, h };

    // place invaders grid centered
    const gridW = COLS * (INV_W + INV_PAD_X) - INV_PAD_X;
    invStartXRef.current  = (w - gridW) / 2;
    invStartYRef.current  = 60;
    playerXRef.current    = w / 2 - PLAYER_W / 2;
    invOffXRef.current    = 0;
    invOffYRef.current    = 0;
  }, []);

  /* ── Start / reset game ─────────────────────────────────────────── */
  const startGame = useCallback((nextLevel = 1) => {
    setupCanvas();
    invadersRef.current  = makeInvaders();
    bulletsRef.current   = [];
    bombsRef.current     = [];
    particlesRef.current = [];
    shieldsRef.current   = makeShields(canSizeRef.current.w, canSizeRef.current.h);
    playerLivesRef.current = 3;
    scoreRef.current     = 0;
    invDirRef.current    = 1;
    invOffXRef.current   = 0;
    invOffYRef.current   = 0;
    invSpeedRef.current  = 0.12 + (nextLevel - 1) * 0.06;
    bombTimerRef.current = 0;
    shootCoolRef.current = 0;
    flashRef.current     = 0;
    levelRef.current     = nextLevel;
    stateRef.current     = 'playing';
    lastTimeRef.current  = performance.now();
    syncUI();
  }, [setupCanvas, syncUI]);

  /* ── Explode helper ─────────────────────────────────────────────── */
  const explode = useCallback((x: number, y: number, count = 12, colors = PARTICLE_COLORS) => {
    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = 1 + Math.random() * 3;
      particlesRef.current.push({
        x, y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        life: 1,
        maxLife: 0.5 + Math.random() * 0.5,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }
  }, []);

  /* ── Game loop ───────────────────────────────────────────────────── */
  const gameLoop = useCallback((time: number) => {
    if (stateRef.current !== 'playing') return;

    const dt = Math.min((time - lastTimeRef.current) / 1000, 0.05);
    lastTimeRef.current = time;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const { w, h } = canSizeRef.current;

    /* ── Player movement ─────────── */
    const speed = w * 0.55;
    if (keysRef.current.has('ArrowLeft') || keysRef.current.has('a') || keysRef.current.has('A')) {
      playerXRef.current = Math.max(0, playerXRef.current - speed * dt);
    }
    if (keysRef.current.has('ArrowRight') || keysRef.current.has('d') || keysRef.current.has('D')) {
      playerXRef.current = Math.min(w - PLAYER_W, playerXRef.current + speed * dt);
    }

    /* Touch movement */
    if (touchXRef.current !== null) {
      const target = touchXRef.current - PLAYER_W / 2;
      const diff = target - playerXRef.current;
      playerXRef.current = Math.max(0, Math.min(w - PLAYER_W, playerXRef.current + Math.sign(diff) * Math.min(Math.abs(diff), speed * dt)));
    }

    /* ── Player shoot ─────────────── */
    shootCoolRef.current = Math.max(0, shootCoolRef.current - dt);
    const wantShoot =
      keysRef.current.has(' ') ||
      keysRef.current.has('ArrowUp') ||
      keysRef.current.has('w') ||
      keysRef.current.has('W') ||
      touchShootRef.current;

    if (wantShoot && shootCoolRef.current <= 0 && bulletsRef.current.length < 3) {
      bulletsRef.current.push({ x: playerXRef.current + PLAYER_W / 2 - BULLET_W / 2, y: h - 55 - BULLET_H });
      shootCoolRef.current = 0.32;
    }

    /* ── Move bullets ─────────────── */
    bulletsRef.current = bulletsRef.current.filter(b => b.y > -BULLET_H);
    bulletsRef.current.forEach(b => { b.y -= 520 * dt; });

    /* ── Move invaders ───────────── */
    invOffXRef.current += invDirRef.current * invSpeedRef.current * (w * dt);

    // check edges
    const alive = invadersRef.current.filter(i => i.alive);
    if (alive.length === 0) {
      // Level complete!
      stateRef.current = 'win';
      syncUI();
      return;
    }

    let minCol = Infinity, maxCol = -Infinity;
    alive.forEach(i => { if (i.col < minCol) minCol = i.col; if (i.col > maxCol) maxCol = i.col; });

    const leftEdge  = invStartXRef.current + invOffXRef.current + minCol * (INV_W + INV_PAD_X);
    const rightEdge = invStartXRef.current + invOffXRef.current + (maxCol * (INV_W + INV_PAD_X) + INV_W);

    if (rightEdge >= w - 4 || leftEdge <= 4) {
      invDirRef.current *= -1;
      invOffYRef.current += 14;
      invSpeedRef.current = Math.min(invSpeedRef.current + 0.012, 1.2);
    }

    /* ── Bombs ────────────────────── */
    bombTimerRef.current -= dt;
    if (bombTimerRef.current <= 0 && alive.length > 0) {
      // pick random front-row invader
      const colSet = new Set(alive.map(i => i.col));
      const colsPresent = Array.from(colSet);
      const col = colsPresent[Math.floor(Math.random() * colsPresent.length)];
      const inCol = alive.filter(i => i.col === col);
      const lowest = inCol.reduce((a, b) => a.row > b.row ? a : b);
      const bx = invStartXRef.current + invOffXRef.current + lowest.col * (INV_W + INV_PAD_X) + INV_W / 2;
      const by = invStartYRef.current + invOffYRef.current + lowest.row * (INV_H + INV_PAD_Y) + INV_H;
      bombsRef.current.push({ x: bx, y: by, dy: 180 + Math.random() * 100 });
      bombTimerRef.current = Math.max(0.9, 2.8 - alive.length * 0.02) / levelRef.current;
    }

    bombsRef.current = bombsRef.current.filter(b => b.y < h);
    bombsRef.current.forEach(b => { b.y += b.dy * dt; });

    /* ── Collision: bullets vs invaders ── */
    bulletsRef.current = bulletsRef.current.filter(bullet => {
      for (const inv of invadersRef.current) {
        if (!inv.alive) continue;
        const ix = invStartXRef.current + invOffXRef.current + inv.col * (INV_W + INV_PAD_X);
        const iy = invStartYRef.current + invOffYRef.current + inv.row * (INV_H + INV_PAD_Y);
        if (bullet.x < ix + INV_W && bullet.x + BULLET_W > ix &&
            bullet.y < iy + INV_H && bullet.y + BULLET_H > iy) {
          inv.alive = false;
          const pts = inv.type === 2 ? 30 : inv.type === 1 ? 20 : 10;
          scoreRef.current += pts;
          if (scoreRef.current > highScoreRef.current) highScoreRef.current = scoreRef.current;
          explode(ix + INV_W / 2, iy + INV_H / 2, 14, INVADER_COLORS);
          return false;
        }
      }
      return true;
    });

    /* ── Collision: bullets vs shields ── */
    bulletsRef.current = bulletsRef.current.filter(bullet => {
      for (const s of shieldsRef.current) {
        if (s.hp <= 0) continue;
        if (bullet.x < s.x + 8 && bullet.x + BULLET_W > s.x &&
            bullet.y < s.y + 8 && bullet.y + BULLET_H > s.y) {
          s.hp--;
          explode(s.x + 4, s.y + 4, 4, ['#00ff00', '#006600']);
          return false;
        }
      }
      return true;
    });

    /* ── Collision: bombs vs shields ── */
    bombsRef.current = bombsRef.current.filter(bomb => {
      for (const s of shieldsRef.current) {
        if (s.hp <= 0) continue;
        if (bomb.x < s.x + 8 && bomb.x + BOMB_W > s.x &&
            bomb.y < s.y + 8 && bomb.y + BOMB_H > s.y) {
          s.hp = Math.max(0, s.hp - 2);
          explode(s.x + 4, s.y + 4, 4, ['#ff8800', '#ffaa00']);
          return false;
        }
      }
      return true;
    });

    /* ── Collision: bombs vs player ── */
    const px = playerXRef.current;
    const py = h - 55 - PLAYER_H;
    bombsRef.current = bombsRef.current.filter(bomb => {
      if (bomb.x < px + PLAYER_W && bomb.x + BOMB_W > px &&
          bomb.y < py + PLAYER_H && bomb.y + BOMB_H > py) {
        playerLivesRef.current--;
        explode(px + PLAYER_W / 2, py + PLAYER_H / 2, 20, ['#ff5555', '#ffaa00', '#ffffff']);
        flashRef.current = 0.4;
        if (playerLivesRef.current <= 0) {
          stateRef.current = 'dead';
          syncUI();
        }
        return false;
      }
      return true;
    });

    /* ── Collision: invaders reach player line ── */
    alive.forEach(inv => {
      const iy = invStartYRef.current + invOffYRef.current + inv.row * (INV_H + INV_PAD_Y) + INV_H;
      if (iy >= py) {
        stateRef.current = 'dead';
        syncUI();
      }
    });

    /* ── Particles ─────────────────── */
    particlesRef.current = particlesRef.current.filter(p => p.life > 0);
    particlesRef.current.forEach(p => {
      p.x += p.vx * 60 * dt;
      p.y += p.vy * 60 * dt;
      p.vy += 3 * dt;
      p.life -= dt / p.maxLife;
    });

    /* ── Flash ────────────────────── */
    flashRef.current = Math.max(0, flashRef.current - dt * 3);

    if (stateRef.current !== 'playing') return;

    /* ─── Draw ─────────────────────────────────────────────────────── */
    ctx.clearRect(0, 0, w, h);

    // Background: deep space
    ctx.fillStyle = '#000811';
    ctx.fillRect(0, 0, w, h);

    // Starfield (cheap deterministic)
    ctx.fillStyle = 'rgba(255,255,255,0.7)';
    for (let i = 0; i < 60; i++) {
      const sx = ((i * 137.5) % w);
      const sy = ((i * 97.3 + time * 0.01 * (1 + (i % 3))) % h);
      const sr = i % 3 === 0 ? 1.5 : 1;
      ctx.fillRect(sx, sy, sr, sr);
    }

    // Flash overlay
    if (flashRef.current > 0) {
      ctx.fillStyle = `rgba(255,80,80,${flashRef.current * 0.35})`;
      ctx.fillRect(0, 0, w, h);
    }

    // Shields
    shieldsRef.current.forEach(s => {
      if (s.hp <= 0) return;
      const alpha = s.hp / 3;
      ctx.fillStyle = `rgba(0,${Math.round(180 * alpha + 75)},0,${0.5 + alpha * 0.5})`;
      ctx.fillRect(s.x, s.y, 8, 8);
      // pixel border
      ctx.strokeStyle = `rgba(0,255,0,${alpha * 0.5})`;
      ctx.lineWidth = 0.5;
      ctx.strokeRect(s.x, s.y, 8, 8);
    });

    // Ground line
    ctx.strokeStyle = '#00ff00';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(0, h - 50);
    ctx.lineTo(w, h - 50);
    ctx.stroke();

    // Invaders
    invadersRef.current.forEach(inv => {
      if (!inv.alive) return;
      const ix = invStartXRef.current + invOffXRef.current + inv.col * (INV_W + INV_PAD_X);
      const iy = invStartYRef.current + invOffYRef.current + inv.row * (INV_H + INV_PAD_Y);
      drawInvader(ctx, ix, iy, inv.type, time);
    });

    // Player
    drawPlayer(ctx, playerXRef.current, h - 50 - PLAYER_H, time);

    // Bullets
    ctx.fillStyle = '#55ff55';
    bulletsRef.current.forEach(b => {
      ctx.fillRect(b.x, b.y, BULLET_W, BULLET_H);
      // glow
      ctx.fillStyle = 'rgba(85,255,85,0.3)';
      ctx.fillRect(b.x - 2, b.y - 2, BULLET_W + 4, BULLET_H + 4);
      ctx.fillStyle = '#55ff55';
    });

    // Bombs
    bombsRef.current.forEach(b => {
      // zigzag bomb
      const seg = Math.floor(b.y / 8) % 2;
      ctx.fillStyle = '#ff5555';
      ctx.fillRect(b.x + (seg ? 2 : 0), b.y, BOMB_W - (seg ? 2 : 0), BOMB_H / 2);
      ctx.fillRect(b.x + (seg ? 0 : 2), b.y + BOMB_H / 2, BOMB_W - (seg ? 0 : 2), BOMB_H / 2);
    });

    // Particles
    particlesRef.current.forEach(p => {
      ctx.globalAlpha = Math.max(0, p.life);
      ctx.fillStyle = p.color;
      ctx.fillRect(p.x - 2, p.y - 2, 4, 4);
    });
    ctx.globalAlpha = 1;

    syncUI();
    animRef.current = requestAnimationFrame(gameLoop);
  }, [explode, syncUI]);

  /* ── Draw helpers ─────────────────────────────────────────────── */
  function drawPlayer(ctx: CanvasRenderingContext2D, x: number, y: number, time: number) {
    // engine glow
    const pulse = 0.5 + 0.5 * Math.sin(time * 0.006);
    ctx.fillStyle = `rgba(0,255,128,${0.1 + pulse * 0.15})`;
    ctx.fillRect(x - 4, y, PLAYER_W + 8, PLAYER_H + 6);

    // body
    ctx.fillStyle = '#00ff80';
    ctx.fillRect(x + 4, y + 6, PLAYER_W - 8, PLAYER_H - 6);
    // wings
    ctx.fillRect(x,     y + 8, 6, PLAYER_H - 8);
    ctx.fillRect(x + PLAYER_W - 6, y + 8, 6, PLAYER_H - 8);
    // cannon
    ctx.fillRect(x + PLAYER_W / 2 - 2, y, 4, 8);
    // highlight
    ctx.fillStyle = 'rgba(255,255,255,0.35)';
    ctx.fillRect(x + 6, y + 6, 4, 4);
  }

  function drawInvader(ctx: CanvasRenderingContext2D, x: number, y: number, type: 0 | 1 | 2, time: number) {
    const frame = Math.floor(time / 500) % 2;
    const color = INVADER_COLORS[type];
    ctx.fillStyle = color;

    if (type === 2) {
      // saucer
      ctx.beginPath();
      ctx.ellipse(x + INV_W / 2, y + INV_H / 2, INV_W / 2, INV_H / 2 - 2, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = 'rgba(255,255,255,0.4)';
      ctx.beginPath();
      ctx.ellipse(x + INV_W / 2, y + INV_H / 2 - 2, INV_W / 4, INV_H / 4, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = '#ff5555';
      // lights
      [-8, 0, 8].forEach(ox => {
        ctx.fillRect(x + INV_W / 2 + ox - 1.5, y + INV_H - 4, 3, 3);
      });
    } else if (type === 1) {
      // crab-style (two frames)
      ctx.fillRect(x + 4, y + 2, INV_W - 8, INV_H - 8);
      ctx.fillRect(x + 2, y + 6, INV_W - 4, INV_H - 10);
      // legs
      if (frame === 0) {
        ctx.fillRect(x,             y + 14, 4, 6);
        ctx.fillRect(x + INV_W - 4, y + 14, 4, 6);
        ctx.fillRect(x + 4,         y + 16, 4, 4);
        ctx.fillRect(x + INV_W - 8, y + 16, 4, 4);
      } else {
        ctx.fillRect(x + 2,          y + 12, 4, 8);
        ctx.fillRect(x + INV_W - 6,  y + 12, 4, 8);
        ctx.fillRect(x + 6,          y + 14, 4, 6);
        ctx.fillRect(x + INV_W - 10, y + 14, 4, 6);
      }
      // eyes
      ctx.fillStyle = '#000';
      ctx.fillRect(x + 6,          y + 4, 4, 4);
      ctx.fillRect(x + INV_W - 10, y + 4, 4, 4);
    } else {
      // squid-style
      ctx.fillRect(x + 6, y + 2, INV_W - 12, INV_H - 8);
      ctx.fillRect(x + 2, y + 6, INV_W - 4,  INV_H - 14);
      // tentacles
      if (frame === 0) {
        [2, 8, 16, 22].forEach(ox => ctx.fillRect(x + ox, y + 14, 4, 6));
      } else {
        [0, 6, 18, 24].forEach(ox => ctx.fillRect(x + ox, y + 12, 4, 8));
      }
      // eyes
      ctx.fillStyle = '#000';
      ctx.fillRect(x + 7,          y + 6, 3, 4);
      ctx.fillRect(x + INV_W - 10, y + 6, 3, 4);
    }
  }

  /* ── Input ─────────────────────────────────────────────────────── */
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      keysRef.current.add(e.key);
      if ([' ', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.key)) {
        e.preventDefault();
      }
    };
    const up   = (e: KeyboardEvent) => keysRef.current.delete(e.key);
    window.addEventListener('keydown', down);
    window.addEventListener('keyup',   up);
    return () => { window.removeEventListener('keydown', down); window.removeEventListener('keyup', up); };
  }, []);

  /* ── Touch controls ────────────────────────────────────────────── */
  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    if (e.touches.length > 0) {
      touchXRef.current = e.touches[0].clientX;
    }
  }, []);
  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    if (e.touches.length > 0) {
      touchXRef.current = e.touches[0].clientX;
    }
    touchShootRef.current = true;
  }, []);
  const handleTouchEnd = useCallback(() => {
    touchXRef.current = null;
    touchShootRef.current = false;
  }, []);

  /* ── Start loop on play ─────────────────────────────────────────── */
  const handleStart = useCallback(() => {
    cancelAnimationFrame(animRef.current);
    startGame(1);
    animRef.current = requestAnimationFrame(gameLoop);
  }, [startGame, gameLoop]);

  const handleNextLevel = useCallback(() => {
    cancelAnimationFrame(animRef.current);
    const next = levelRef.current + 1;
    startGame(next);
    animRef.current = requestAnimationFrame(gameLoop);
  }, [startGame, gameLoop]);

  /* ── Resize ─────────────────────────────────────────────────────── */
  useEffect(() => {
    const obs = new ResizeObserver(() => {
      setupCanvas();
      if (stateRef.current === 'idle') return;
      shieldsRef.current = makeShields(canSizeRef.current.w, canSizeRef.current.h);
      playerXRef.current = canSizeRef.current.w / 2 - PLAYER_W / 2;
    });
    const canvas = canvasRef.current;
    if (canvas?.parentElement) obs.observe(canvas.parentElement);
    return () => obs.disconnect();
  }, [setupCanvas]);

  /* ── Cleanup ────────────────────────────────────────────────────── */
  useEffect(() => {
    setupCanvas();
    return () => cancelAnimationFrame(animRef.current);
  }, [setupCanvas]);

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        background: '#000811',
        position: 'relative',
        overflow: 'hidden',
        fontFamily: "'Courier New', monospace",
      }}
      onTouchMove={handleTouchMove}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* HUD */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '4px 10px',
        background: 'rgba(0,8,17,0.9)',
        borderBottom: '1px solid #003300',
        flexShrink: 0,
        fontSize: 11,
        color: '#00ff80',
        fontFamily: "'Courier New', monospace",
        letterSpacing: '0.05em',
      }}>
        <span>SC:{String(score).padStart(5, '0')}</span>
        <span style={{ color: '#55ff55' }}>LVL {level}</span>
        <span>{'♥'.repeat(Math.max(0, lives))}{'♡'.repeat(Math.max(0, 3 - lives))}</span>
        <span style={{ color: '#ffff55' }}>HI:{String(highScore).padStart(5, '0')}</span>
      </div>

      {/* Canvas */}
      <div style={{ flex: 1, position: 'relative', overflow: 'hidden' }}>
        <canvas
          ref={canvasRef}
          style={{ display: 'block', width: '100%', height: '100%', imageRendering: 'pixelated' }}
        />

        {/* Overlay screens */}
        {uiState === 'idle' && (
          <OverlayScreen>
            <PixelTitle>SPACE</PixelTitle>
            <PixelTitle style={{ color: '#ff5555' }}>INVADERS</PixelTitle>
            <div style={{ margin: '16px 0 8px', color: '#55ff55', fontSize: 11 }}>
              <div>← → / A D &nbsp;·&nbsp; Move</div>
              <div>SPACE / W &nbsp;·&nbsp; Fire</div>
              <div style={{ marginTop: 6, color: '#ffff55' }}>Touch: drag to move, tap to fire</div>
            </div>
            <PixelButton onClick={handleStart}>INSERT COIN</PixelButton>
          </OverlayScreen>
        )}

        {uiState === 'dead' && (
          <OverlayScreen>
            <PixelTitle style={{ color: '#ff5555' }}>GAME OVER</PixelTitle>
            <div style={{ color: '#00ff80', margin: '10px 0', fontSize: 12 }}>
              Score: <span style={{ color: '#ffff55' }}>{score}</span>
            </div>
            {score >= highScore && score > 0 && (
              <div style={{ color: '#ffff55', fontSize: 10, marginBottom: 8 }}>★ NEW HIGH SCORE ★</div>
            )}
            <PixelButton onClick={handleStart}>PLAY AGAIN</PixelButton>
          </OverlayScreen>
        )}

        {uiState === 'win' && (
          <OverlayScreen>
            <PixelTitle style={{ color: '#ffff55' }}>CLEARED!</PixelTitle>
            <div style={{ color: '#00ff80', margin: '10px 0', fontSize: 12 }}>
              Level <span style={{ color: '#ffff55' }}>{level}</span> complete
            </div>
            <div style={{ color: '#55ff55', marginBottom: 12, fontSize: 11 }}>
              Score: <span style={{ color: '#ffff55' }}>{score}</span>
            </div>
            <PixelButton onClick={handleNextLevel}>NEXT WAVE</PixelButton>
          </OverlayScreen>
        )}
      </div>

      {/* Mobile controls */}
      <MobileControls keysRef={keysRef} />
    </div>
  );
}

/* ── Sub-components ────────────────────────────────────────────────── */
function OverlayScreen({ children }: { children: React.ReactNode }) {
  return (
    <div style={{
      position: 'absolute',
      inset: 0,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'rgba(0,8,17,0.85)',
      backdropFilter: 'blur(2px)',
      zIndex: 10,
      gap: 4,
      padding: 16,
      animation: 'si-fadein 0.3s ease',
    }}>
      {children}
    </div>
  );
}

function PixelTitle({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) {
  return (
    <div style={{
      fontFamily: "'Courier New', monospace",
      fontSize: 22,
      fontWeight: 900,
      color: '#00ff80',
      letterSpacing: '0.12em',
      textShadow: '0 0 12px currentColor, 0 0 24px currentColor',
      lineHeight: 1.1,
      ...style,
    }}>
      {children}
    </div>
  );
}

function PixelButton({ children, onClick }: { children: React.ReactNode; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      style={{
        marginTop: 12,
        padding: '8px 24px',
        fontFamily: "'Courier New', monospace",
        fontSize: 12,
        fontWeight: 700,
        letterSpacing: '0.1em',
        color: '#000',
        background: '#00ff80',
        border: 'none',
        cursor: 'pointer',
        boxShadow: 'inset 2px 2px #aaffcc, inset -2px -2px #006630, 0 0 12px rgba(0,255,128,0.5)',
        transition: 'transform 0.1s, box-shadow 0.1s',
        imageRendering: 'pixelated',
      }}
      onMouseEnter={e => {
        (e.currentTarget as HTMLButtonElement).style.transform = 'scale(1.06)';
        (e.currentTarget as HTMLButtonElement).style.boxShadow = 'inset 2px 2px #aaffcc, inset -2px -2px #006630, 0 0 20px rgba(0,255,128,0.8)';
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLButtonElement).style.transform = 'scale(1)';
        (e.currentTarget as HTMLButtonElement).style.boxShadow = 'inset 2px 2px #aaffcc, inset -2px -2px #006630, 0 0 12px rgba(0,255,128,0.5)';
      }}
      onMouseDown={e => { (e.currentTarget as HTMLButtonElement).style.transform = 'scale(0.97)'; }}
      onMouseUp={e => { (e.currentTarget as HTMLButtonElement).style.transform = 'scale(1.06)'; }}
    >
      {children}
    </button>
  );
}

function MobileControls({ keysRef }: { keysRef: React.MutableRefObject<Set<string>> }) {
  const press   = (k: string) => keysRef.current.add(k);
  const release = (k: string) => keysRef.current.delete(k);

  const btnStyle: React.CSSProperties = {
    width: 52,
    height: 52,
    background: 'rgba(0,255,128,0.12)',
    border: '2px solid rgba(0,255,128,0.5)',
    borderRadius: 4,
    color: '#00ff80',
    fontSize: 20,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    userSelect: 'none',
    WebkitUserSelect: 'none',
    touchAction: 'none',
    boxShadow: '0 0 8px rgba(0,255,128,0.2)',
    flexShrink: 0,
  };

  return (
    <div
      className="si-mobile-controls"
      style={{
        display: 'none',
        flexShrink: 0,
        padding: '8px 12px',
        background: 'rgba(0,8,17,0.95)',
        borderTop: '1px solid #003300',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 8,
      }}
    >
      <div style={{ display: 'flex', gap: 8 }}>
        <div
          style={btnStyle}
          onPointerDown={() => press('ArrowLeft')}
          onPointerUp={() => release('ArrowLeft')}
          onPointerLeave={() => release('ArrowLeft')}
        >◀</div>
        <div
          style={btnStyle}
          onPointerDown={() => press('ArrowRight')}
          onPointerUp={() => release('ArrowRight')}
          onPointerLeave={() => release('ArrowRight')}
        >▶</div>
      </div>
      <div
        style={{ ...btnStyle, width: 80, height: 52, background: 'rgba(0,255,128,0.2)', fontSize: 13, letterSpacing: '0.08em' }}
        onPointerDown={() => press(' ')}
        onPointerUp={() => release(' ')}
        onPointerLeave={() => release(' ')}
      >FIRE</div>
    </div>
  );
}
