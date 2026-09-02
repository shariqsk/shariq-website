'use client';

import { useRef, useEffect, useState } from 'react';
import { GameBar } from './LightPainting';

/* Conductor — webcam hand tracking that shapes a live ambient soundscape.
 * A soft drone always plays; raise a hand and its height picks a note from
 * a always-visible ladder, openness swells it, left/right pans it. Two
 * hands play two voices. Every sound is synthesised — no samples. */

const WASM = 'https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.35/wasm';
const MODEL = 'https://storage.googleapis.com/mediapipe-models/hand_landmarker/hand_landmarker/float16/1/hand_landmarker.task';

/* C major pentatonic, low → high. Always consonant. */
const SCALE = [261.63, 293.66, 329.63, 392.0, 440.0, 523.25, 587.33, 659.25];
const NAMES = ['C', 'D', 'E', 'G', 'A', 'C', 'D', 'E'];
const N = SCALE.length;

/* the comfortable vertical band a hand actually reaches (fraction of frame) */
const BAND_TOP = 0.16;
const BAND_BOT = 0.86;

type Pt = { x: number; y: number };
type Status = 'loading' | 'ready' | 'error';

interface Voice {
  oscs: OscillatorNode[];
  filter: BiquadFilterNode;
  pan: StereoPannerNode;
  gain: GainNode;
  note: number;
}

function buildVoice(ctx: AudioContext, master: GainNode, send: GainNode): Voice {
  const filter = ctx.createBiquadFilter();
  filter.type = 'lowpass';
  filter.frequency.value = 1100;
  filter.Q.value = 2;
  const pan = ctx.createStereoPanner();
  const gain = ctx.createGain();
  gain.gain.value = 0;
  const oscs: OscillatorNode[] = [];
  for (const detune of [-7, 0, 8]) {
    const o = ctx.createOscillator();
    o.type = 'triangle';
    o.detune.value = detune;
    o.frequency.value = 330;
    o.connect(filter);
    o.start();
    oscs.push(o);
  }
  filter.connect(pan);
  pan.connect(gain);
  gain.connect(master);
  gain.connect(send);
  return { oscs, filter, pan, gain, note: -1 };
}

function makeImpulse(ctx: AudioContext, seconds: number, decay: number) {
  const len = ctx.sampleRate * seconds;
  const buf = ctx.createBuffer(2, len, ctx.sampleRate);
  for (let ch = 0; ch < 2; ch++) {
    const d = buf.getChannelData(ch);
    for (let i = 0; i < len; i++) d[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / len, decay);
  }
  return buf;
}

const hueFor = (i: number) => 196 + (i / (N - 1)) * 150;
const ladderY = (i: number, H: number) =>
  (BAND_TOP + (1 - i / (N - 1)) * (BAND_BOT - BAND_TOP)) * H;

type Bloom = { x: number; y: number; r: number; life: number; hue: number };

export default function Conductor({ onExit }: { onExit: () => void }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [status, setStatus] = useState<Status>('loading');
  const [err, setErr] = useState('');
  const [handsUp, setHandsUp] = useState(false);

  useEffect(() => {
    let cancelled = false;
    let raf = 0;
    let stream: MediaStream | null = null;
    let landmarker: { detectForVideo: (v: HTMLVideoElement, t: number) => {
      landmarks?: Pt[][]; handedness?: { categoryName: string }[][];
    }; close?: () => void } | null = null;
    let audio: AudioContext | null = null;

    const trails: Record<string, Pt[]> = { Left: [], Right: [] };
    const blooms: Bloom[] = [];

    (async () => {
      try {
        // ── audio ────────────────────────────────────────────────
        audio = new AudioContext();
        await audio.resume();
        const master = audio.createGain();
        master.gain.value = 0.6;
        const reverb = audio.createConvolver();
        reverb.buffer = makeImpulse(audio, 3.4, 2.3);
        const send = audio.createGain();
        send.gain.value = 0.5;
        send.connect(reverb);
        reverb.connect(audio.destination);
        master.connect(audio.destination);

        // soft always-on drone bed (root + fifth, two octaves down)
        for (const f of [65.41, 98.0]) {
          const o = audio.createOscillator();
          o.type = 'sine';
          o.frequency.value = f;
          const lp = audio.createBiquadFilter();
          lp.type = 'lowpass';
          lp.frequency.value = 320;
          const g = audio.createGain();
          g.gain.value = 0.07;
          o.connect(lp); lp.connect(g);
          g.connect(master); g.connect(send);
          o.start();
          // gentle slow swell
          const lfo = audio.createOscillator();
          lfo.frequency.value = 0.07;
          const lfoGain = audio.createGain();
          lfoGain.gain.value = 0.025;
          lfo.connect(lfoGain);
          lfoGain.connect(g.gain);
          lfo.start();
        }

        const voices: Record<string, Voice> = {
          Left: buildVoice(audio, master, send),
          Right: buildVoice(audio, master, send),
        };

        // ── hand tracking ────────────────────────────────────────
        const vision = await import('@mediapipe/tasks-vision');
        const resolver = await vision.FilesetResolver.forVisionTasks(WASM);
        landmarker = await vision.HandLandmarker.createFromOptions(resolver, {
          baseOptions: { modelAssetPath: MODEL },
          numHands: 2,
          runningMode: 'VIDEO',
        });

        stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'user' } });
        if (cancelled) return;
        const video = videoRef.current;
        if (!video) return;
        video.srcObject = stream;
        await video.play();
        if (cancelled) return;
        setStatus('ready');

        const active: Record<string, boolean> = { Left: false, Right: false };
        let pulse = 0;

        const loop = () => {
          raf = requestAnimationFrame(loop);
          const v = videoRef.current;
          const canvas = canvasRef.current;
          if (!v || !canvas || !landmarker || !audio || !v.videoWidth) return;
          const ctx = canvas.getContext('2d');
          if (!ctx) return;
          if (canvas.width !== v.videoWidth) {
            canvas.width = v.videoWidth;
            canvas.height = v.videoHeight;
          }
          const W = canvas.width, H = canvas.height;
          ctx.clearRect(0, 0, W, H);

          let result;
          try { result = landmarker.detectForVideo(v, performance.now()); }
          catch { return; }
          const hands = result.landmarks ?? [];
          const handed = result.handedness ?? [];
          const seen: Record<string, boolean> = { Left: false, Right: false };

          // ── note ladder (left side, always visible) ─────────────
          let totalGain = 0;
          for (let i = 0; i < N; i++) {
            const y = ladderY(i, H);
            ctx.strokeStyle = 'rgba(255,255,255,0.08)';
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(70, y);
            ctx.lineTo(W - 24, y);
            ctx.stroke();
            ctx.fillStyle = 'rgba(255,255,255,0.32)';
            ctx.font = '600 17px "Helvetica Neue", Arial, sans-serif';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText(NAMES[i], 40, y);
          }

          for (let h = 0; h < hands.length; h++) {
            const lm = hands[h];
            const label = handed[h]?.[0]?.categoryName === 'Left' ? 'Left' : 'Right';
            seen[label] = true;
            const voice = voices[label];

            // palm centre + hand size
            const ji = [0, 5, 9, 13, 17];
            let px = 0, py = 0;
            ji.forEach((i) => { px += lm[i].x; py += lm[i].y; });
            px /= ji.length; py /= ji.length;
            const handSize = Math.hypot(lm[0].x - lm[9].x, lm[0].y - lm[9].y);

            // continuous openness
            let ratio = 0;
            ([[8, 5], [12, 9], [16, 13], [20, 17]] as [number, number][]).forEach(([tip, mcp]) => {
              const dT = Math.hypot(lm[tip].x - px, lm[tip].y - py);
              const dM = Math.hypot(lm[mcp].x - px, lm[mcp].y - py) || 0.001;
              ratio += dT / dM;
            });
            ratio /= 4;
            const openness = Math.max(0, Math.min(1, (ratio - 1.12) / 0.95));

            // note from the comfortable band (clamped — never off ladder)
            const frac = Math.max(0, Math.min(1, (py - BAND_TOP) / (BAND_BOT - BAND_TOP)));
            const noteIdx = Math.round((1 - frac) * (N - 1));
            const freq = SCALE[noteIdx];
            const t = audio.currentTime;
            voice.oscs.forEach((o) => o.frequency.setTargetAtTime(freq, t, 0.1));
            const vg = 0.06 + openness * 0.26;
            voice.gain.gain.setTargetAtTime(vg, t, 0.16);
            voice.filter.frequency.setTargetAtTime(700 + (1 - frac) * 3200, t, 0.14);
            const visX = 1 - px; // video is mirrored for display
            voice.pan.pan.setTargetAtTime((visX - 0.5) * 1.4, t, 0.14);
            active[label] = true;
            totalGain += vg;

            // note-change bloom
            const hue = hueFor(noteIdx);
            if (voice.note !== noteIdx) {
              voice.note = noteIdx;
              blooms.push({ x: visX * W, y: ladderY(noteIdx, H), r: 10, life: 1, hue });
            }

            // ── visuals ───────────────────────────────────────────
            const cx = visX * W;
            const cy = Math.max(30, Math.min(H - 30, py * H));

            // active ladder line + marker
            const ly = ladderY(noteIdx, H);
            ctx.strokeStyle = `hsla(${hue},90%,68%,${0.4 + openness * 0.5})`;
            ctx.lineWidth = 2.5;
            ctx.beginPath();
            ctx.moveTo(70, ly);
            ctx.lineTo(W - 24, ly);
            ctx.stroke();
            ctx.fillStyle = `hsl(${hue},95%,72%)`;
            ctx.font = '700 19px "Helvetica Neue", Arial, sans-serif';
            ctx.textAlign = 'center';
            ctx.fillText(NAMES[noteIdx], 40, ly);

            // trail
            const trail = trails[label];
            trail.push({ x: cx, y: cy });
            if (trail.length > 20) trail.shift();
            ctx.lineCap = 'round';
            for (let i = 1; i < trail.length; i++) {
              const a = i / trail.length;
              ctx.strokeStyle = `hsla(${hue},90%,70%,${a * 0.45})`;
              ctx.lineWidth = a * 9;
              ctx.beginPath();
              ctx.moveTo(trail[i - 1].x, trail[i - 1].y);
              ctx.lineTo(trail[i].x, trail[i].y);
              ctx.stroke();
            }

            // pulse rings sized by openness
            const baseR = handSize * W * 0.9;
            for (let ring = 0; ring < 3; ring++) {
              const rr = baseR * (1 + ring * 0.55) * (0.6 + openness);
              ctx.strokeStyle = `hsla(${hue},90%,72%,${(0.32 - ring * 0.09) * (0.4 + openness)})`;
              ctx.lineWidth = 2;
              ctx.beginPath();
              ctx.arc(cx, cy, rr, 0, Math.PI * 2);
              ctx.stroke();
            }
            // orb
            const r = baseR * (0.55 + openness * 0.7);
            const grd = ctx.createRadialGradient(cx, cy, 0, cx, cy, r);
            grd.addColorStop(0, `hsla(${hue},96%,78%,${0.45 + openness * 0.45})`);
            grd.addColorStop(1, `hsla(${hue},96%,58%,0)`);
            ctx.fillStyle = grd;
            ctx.beginPath();
            ctx.arc(cx, cy, r, 0, Math.PI * 2);
            ctx.fill();
            // note letter inside the orb — always on screen
            ctx.fillStyle = `hsla(${hue},100%,95%,${0.8 + openness * 0.2})`;
            ctx.font = `700 ${Math.round(20 + openness * 16)}px "Helvetica Neue", Arial, sans-serif`;
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText(NAMES[noteIdx], cx, cy);
          }

          // fade voices whose hand left frame
          (['Left', 'Right'] as const).forEach((label) => {
            if (!seen[label] && active[label] && audio) {
              voices[label].gain.gain.setTargetAtTime(0, audio.currentTime, 0.35);
              voices[label].note = -1;
              active[label] = false;
              trails[label].length = 0;
            }
          });

          // note blooms
          for (let i = blooms.length - 1; i >= 0; i--) {
            const b = blooms[i];
            b.r += 6;
            b.life -= 0.03;
            if (b.life <= 0) { blooms.splice(i, 1); continue; }
            ctx.strokeStyle = `hsla(${b.hue},90%,72%,${b.life * 0.6})`;
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2);
            ctx.stroke();
          }

          // whole-scene breath with the music
          pulse += 0.05;
          const glow = totalGain * 0.5;
          if (glow > 0.01) {
            const vg2 = ctx.createRadialGradient(W / 2, H / 2, H * 0.2, W / 2, H / 2, H * 0.9);
            vg2.addColorStop(0, `rgba(150,180,255,${glow * 0.12 * (0.8 + Math.sin(pulse) * 0.2)})`);
            vg2.addColorStop(1, 'rgba(150,180,255,0)');
            ctx.fillStyle = vg2;
            ctx.fillRect(0, 0, W, H);
          }

          const up = seen.Left || seen.Right;
          setHandsUp((prev) => (prev !== up ? up : prev));
        };
        raf = requestAnimationFrame(loop);
      } catch (e) {
        if (cancelled) return;
        const msg = e instanceof Error ? e.message : 'Something went wrong.';
        setErr(/permission|denied|notallowed/i.test(msg)
          ? 'Camera access was blocked. Allow the camera and reload to play.'
          : `Could not start: ${msg}`);
        setStatus('error');
      }
    })();

    return () => {
      cancelled = true;
      cancelAnimationFrame(raf);
      stream?.getTracks().forEach((t) => t.stop());
      landmarker?.close?.();
      audio?.close();
    };
  }, []);

  return (
    <div style={{
      position: 'fixed', inset: 0, background: '#06060c', overflow: 'hidden',
      fontFamily: '"Helvetica Neue", Arial, sans-serif', color: '#fff',
    }}>
      {/* camera is mirrored; the canvas is not (drawn in screen space) */}
      <video
        ref={videoRef}
        muted
        playsInline
        style={{
          position: 'absolute', inset: 0, width: '100%', height: '100%',
          objectFit: 'cover', opacity: 0.34, transform: 'scaleX(-1)',
        }}
      />
      <canvas
        ref={canvasRef}
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
      />
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', boxShadow: 'inset 0 0 240px rgba(0,0,0,0.92)' }} />

      {status === 'loading' && (
        <Centered>
          <div style={{ fontSize: 24, fontWeight: 200, letterSpacing: 4 }}>TUNING UP…</div>
          <div style={{ fontSize: 13, opacity: 0.6, marginTop: 8 }}>loading the orchestra & camera</div>
        </Centered>
      )}
      {status === 'error' && (
        <Centered>
          <div style={{ fontSize: 22, fontWeight: 300, letterSpacing: 2, marginBottom: 10 }}>Silence</div>
          <div style={{ fontSize: 14, opacity: 0.75, maxWidth: 360, textAlign: 'center', lineHeight: 1.5 }}>{err}</div>
        </Centered>
      )}
      {status === 'ready' && !handsUp && (
        <div style={{
          position: 'absolute', bottom: 70, left: '50%', transform: 'translateX(-50%)',
          fontSize: 15, letterSpacing: 1, opacity: 0.9, textAlign: 'center',
          textShadow: '0 1px 6px #000', lineHeight: 1.6,
        }}>
          a soft drone is already playing — raise a hand to add a melody<br />
          <span style={{ fontSize: 13, opacity: 0.7 }}>
            higher = higher note · open your palm to swell it · move sideways to pan
          </span>
        </div>
      )}

      <GameBar onExit={onExit} />
    </div>
  );
}

function Centered({ children }: { children: React.ReactNode }) {
  return (
    <div style={{
      position: 'absolute', inset: 0, zIndex: 2,
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      background: 'rgba(6,6,12,0.62)',
    }}>
      {children}
    </div>
  );
}
