'use client';

import { useRef, useEffect, useState } from 'react';
import { GameBar } from './LightPainting';

/* Conductor — webcam hand tracking that shapes a generative ambient
 * soundscape. Hand height picks the note, openness swells the volume,
 * left/right pans it. Two hands play two voices. Pure Web Audio, no
 * samples — every sound is synthesised live. */

const WASM = 'https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.35/wasm';
const MODEL = 'https://storage.googleapis.com/mediapipe-models/hand_landmarker/hand_landmarker/float16/1/hand_landmarker.task';

/* C major pentatonic, low to high — always consonant, never a wrong note */
const SCALE = [130.81, 164.81, 196.0, 220.0, 261.63, 329.63, 392.0, 440.0, 523.25, 659.25];
const NOTE_NAMES = ['C', 'E', 'G', 'A', 'C', 'E', 'G', 'A', 'C', 'E'];

type Pt = { x: number; y: number };
type Status = 'loading' | 'ready' | 'error';

interface Voice {
  oscs: OscillatorNode[];
  filter: BiquadFilterNode;
  pan: StereoPannerNode;
  gain: GainNode;
}

function buildVoice(ctx: AudioContext, master: GainNode, send: GainNode): Voice {
  const filter = ctx.createBiquadFilter();
  filter.type = 'lowpass';
  filter.frequency.value = 900;
  filter.Q.value = 3;
  const pan = ctx.createStereoPanner();
  const gain = ctx.createGain();
  gain.gain.value = 0;
  const oscs: OscillatorNode[] = [];
  for (const detune of [-6, 0, 7]) {
    const o = ctx.createOscillator();
    o.type = 'triangle';
    o.detune.value = detune;
    o.frequency.value = 220;
    o.connect(filter);
    o.start();
    oscs.push(o);
  }
  filter.connect(pan);
  pan.connect(gain);
  gain.connect(master);
  gain.connect(send);
  return { oscs, filter, pan, gain };
}

/* a decaying-noise impulse response for the reverb */
function makeImpulse(ctx: AudioContext, seconds: number, decay: number) {
  const rate = ctx.sampleRate;
  const len = rate * seconds;
  const buf = ctx.createBuffer(2, len, rate);
  for (let ch = 0; ch < 2; ch++) {
    const d = buf.getChannelData(ch);
    for (let i = 0; i < len; i++) {
      d[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / len, decay);
    }
  }
  return buf;
}

function hueFor(noteIdx: number) {
  return 200 + (noteIdx / (SCALE.length - 1)) * 140; // blue → magenta
}

export default function Conductor({ onExit }: { onExit: () => void }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [status, setStatus] = useState<Status>('loading');
  const [err, setErr] = useState('');

  useEffect(() => {
    let cancelled = false;
    let raf = 0;
    let stream: MediaStream | null = null;
    let landmarker: { detectForVideo: (v: HTMLVideoElement, t: number) => {
      landmarks?: Pt[][];
      handedness?: { categoryName: string }[][];
    }; close?: () => void } | null = null;
    let audio: AudioContext | null = null;

    const trails: Record<string, Pt[]> = { Left: [], Right: [] };

    (async () => {
      try {
        // ── audio graph ──────────────────────────────────────────
        audio = new AudioContext();
        await audio.resume();
        const master = audio.createGain();
        master.gain.value = 0.55;
        const reverb = audio.createConvolver();
        reverb.buffer = makeImpulse(audio, 3.2, 2.4);
        const send = audio.createGain();
        send.gain.value = 0.45;
        send.connect(reverb);
        reverb.connect(audio.destination);
        master.connect(audio.destination);
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

          // scale guide lines
          for (let i = 0; i < SCALE.length; i++) {
            const y = H - (i / (SCALE.length - 1)) * H * 0.86 - H * 0.07;
            ctx.strokeStyle = 'rgba(255,255,255,0.06)';
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(0, y);
            ctx.lineTo(W, y);
            ctx.stroke();
          }

          let result;
          try { result = landmarker.detectForVideo(v, performance.now()); }
          catch { return; }
          const hands = result.landmarks ?? [];
          const handed = result.handedness ?? [];

          const seen: Record<string, boolean> = { Left: false, Right: false };

          for (let h = 0; h < hands.length; h++) {
            const lm = hands[h];
            const label = handed[h]?.[0]?.categoryName === 'Left' ? 'Left' : 'Right';
            seen[label] = true;
            const voice = voices[label];

            // palm centre + size
            const idx = [0, 5, 9, 13, 17];
            let px = 0, py = 0;
            idx.forEach((i) => { px += lm[i].x; py += lm[i].y; });
            px /= idx.length; py /= idx.length;
            const handSize = Math.hypot(lm[0].x - lm[9].x, lm[0].y - lm[9].y);

            // continuous openness from how far the fingertips reach
            const fingers: [number, number][] = [[8, 5], [12, 9], [16, 13], [20, 17]];
            let ratio = 0;
            fingers.forEach(([tip, mcp]) => {
              const dTip = Math.hypot(lm[tip].x - px, lm[tip].y - py);
              const dMcp = Math.hypot(lm[mcp].x - px, lm[mcp].y - py) || 0.001;
              ratio += dTip / dMcp;
            });
            ratio /= 4;
            const openness = Math.max(0, Math.min(1, (ratio - 1.15) / 0.95));

            // note from palm height
            const noteIdx = Math.max(0, Math.min(SCALE.length - 1,
              Math.round((1 - py) * (SCALE.length - 1))));
            const freq = SCALE[noteIdx];
            const t = audio.currentTime;
            voice.oscs.forEach((o) => o.frequency.setTargetAtTime(freq, t, 0.12));
            voice.gain.gain.setTargetAtTime(openness * 0.3, t, 0.18);
            voice.filter.frequency.setTargetAtTime(500 + (1 - py) * 3600, t, 0.15);
            voice.pan.pan.setTargetAtTime(((1 - px) - 0.5) * 1.4, t, 0.15);
            active[label] = true;

            // ── visuals ──────────────────────────────────────────
            const cx = px * W, cy = py * H;
            const hue = hueFor(noteIdx);
            const trail = trails[label];
            trail.push({ x: cx, y: cy });
            if (trail.length > 22) trail.shift();

            // trail
            ctx.lineCap = 'round';
            for (let i = 1; i < trail.length; i++) {
              const a = i / trail.length;
              ctx.strokeStyle = `hsla(${hue},90%,68%,${a * 0.5})`;
              ctx.lineWidth = a * 10;
              ctx.beginPath();
              ctx.moveTo(trail[i - 1].x, trail[i - 1].y);
              ctx.lineTo(trail[i].x, trail[i].y);
              ctx.stroke();
            }

            // active scale line
            const ly = H - (noteIdx / (SCALE.length - 1)) * H * 0.86 - H * 0.07;
            ctx.strokeStyle = `hsla(${hue},90%,70%,${0.25 + openness * 0.5})`;
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.moveTo(0, ly);
            ctx.lineTo(W, ly);
            ctx.stroke();

            // orb
            const r = handSize * W * (0.7 + openness * 1.4);
            const grd = ctx.createRadialGradient(cx, cy, 0, cx, cy, r);
            grd.addColorStop(0, `hsla(${hue},95%,75%,${0.35 + openness * 0.5})`);
            grd.addColorStop(1, `hsla(${hue},95%,55%,0)`);
            ctx.fillStyle = grd;
            ctx.beginPath();
            ctx.arc(cx, cy, r, 0, Math.PI * 2);
            ctx.fill();
            ctx.fillStyle = `hsla(${hue},100%,92%,${0.6 + openness * 0.4})`;
            ctx.beginPath();
            ctx.arc(cx, cy, 5 + openness * 7, 0, Math.PI * 2);
            ctx.fill();

            // note label (drawn un-mirrored)
            ctx.save();
            ctx.translate(cx, cy - r - 14);
            ctx.scale(-1, 1);
            ctx.fillStyle = `hsla(${hue},100%,85%,0.9)`;
            ctx.font = '600 22px "Helvetica Neue", Arial, sans-serif';
            ctx.textAlign = 'center';
            ctx.fillText(NOTE_NAMES[noteIdx], 0, 0);
            ctx.restore();
          }

          // fade out voices whose hand left the frame
          (['Left', 'Right'] as const).forEach((label) => {
            if (!seen[label] && active[label] && audio) {
              voices[label].gain.gain.setTargetAtTime(0, audio.currentTime, 0.3);
              active[label] = false;
              trails[label].length = 0;
            }
          });
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
      <div style={{ position: 'absolute', inset: 0, transform: 'scaleX(-1)' }}>
        <video
          ref={videoRef}
          muted
          playsInline
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.4 }}
        />
        <canvas
          ref={canvasRef}
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </div>

      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', boxShadow: 'inset 0 0 240px rgba(0,0,0,0.9)' }} />

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
      {status === 'ready' && (
        <div style={{
          position: 'absolute', bottom: 20, left: '50%', transform: 'translateX(-50%)',
          fontSize: 13, letterSpacing: 1.4, opacity: 0.8, textAlign: 'center',
          textShadow: '0 1px 4px #000',
        }}>
          raise a hand to play · higher = higher note · open your palm to swell · move sideways to pan
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
      background: 'rgba(6,6,12,0.6)',
    }}>
      {children}
    </div>
  );
}
