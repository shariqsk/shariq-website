'use client';

import { useEffect, useMemo, useRef, useState } from 'react';

const DEFAULT_TRACK = '/About%20the%20World%20-%20Vansire%20.mp3';
const DEFAULT_COVER = '/abouttheworldvansire.jpg';
const DEFAULT_TITLE = 'About the World';
const DEFAULT_ARTIST = 'Vansire';

function formatTime(seconds: number) {
  if (!Number.isFinite(seconds) || seconds < 0) return '0:00';
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs.toString().padStart(2, '0')}`;
}

export default function MusicWindow() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const sourceRef = useRef<MediaElementAudioSourceNode | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const frameRef = useRef<number | null>(null);
  const barStateRef = useRef<number[]>(Array.from({ length: 42 }, () => 0.08));

  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(70);
  const [liked, setLiked] = useState(false);
  const [shuffleOn, setShuffleOn] = useState(false);
  const [repeatOn, setRepeatOn] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [heartBursts, setHeartBursts] = useState<Array<{ id: number; x: number; size: number; duration: number }>>([]);

  const progress = useMemo(() => {
    if (!duration) return 0;
    return Math.min(100, (currentTime / duration) * 100);
  }, [currentTime, duration]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.volume = 0.7;
  }, []);

  const onSeek = (event: React.ChangeEvent<HTMLInputElement>) => {
    const next = Number(event.target.value);
    const audio = audioRef.current;
    if (!audio || !duration) return;
    const pct = Math.min(1, Math.max(0, next / 100));
    audio.currentTime = pct * duration;
    setCurrentTime(audio.currentTime);
  };

  const togglePlayback = async () => {
    const audio = audioRef.current;
    if (!audio) return;
    try {
      if (!audioCtxRef.current) {
        audioCtxRef.current = new AudioContext();
      }
      if (!sourceRef.current && audioCtxRef.current) {
        sourceRef.current = audioCtxRef.current.createMediaElementSource(audio);
        analyserRef.current = audioCtxRef.current.createAnalyser();
        analyserRef.current.fftSize = 256;
        analyserRef.current.smoothingTimeConstant = 0.82;
        sourceRef.current.connect(analyserRef.current);
        analyserRef.current.connect(audioCtxRef.current.destination);
      }

      await audioCtxRef.current.resume();
      if (audio.paused) {
        await audio.play();
        setIsPlaying(true);
      } else {
        audio.pause();
        setIsPlaying(false);
      }
    } catch {
      setError('Could not play track.');
    }
  };

  const onVolumeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const next = Number(event.target.value);
    setVolume(next);
    const audio = audioRef.current;
    if (!audio) return;
    audio.volume = Math.min(1, Math.max(0, next / 100));
  };

  const triggerHeartBurst = () => {
    const heart = {
      id: Date.now(),
      x: (Math.random() - 0.5) * 18,
      size: 12 + Math.random() * 10,
      duration: 700 + Math.random() * 450,
    };
    setHeartBursts((prev) => [...prev, heart]);
    window.setTimeout(() => {
      setHeartBursts((prev) => prev.filter((h) => h.id !== heart.id));
    }, heart.duration);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const draw = () => {
      const ratio = window.devicePixelRatio || 1;
      const width = Math.max(1, Math.floor(canvas.clientWidth * ratio));
      const height = Math.max(1, Math.floor(canvas.clientHeight * ratio));
      if (canvas.width !== width || canvas.height !== height) {
        canvas.width = width;
        canvas.height = height;
      }

      ctx.clearRect(0, 0, width, height);
      const centerX = width / 2;
      const centerY = height / 2;

      const barsPerSide = barStateRef.current.length;
      const availableSide = centerX - 14 * ratio;
      const gap = 2 * ratio;
      const barW = Math.max(1, (availableSide - gap * (barsPerSide - 1)) / barsPerSide);

      if (isPlaying && analyserRef.current) {
        const data = new Uint8Array(analyserRef.current.frequencyBinCount);
        analyserRef.current.getByteFrequencyData(data);
        const bassFloorBin = 3;
        const usableBins = Math.max(1, data.length - bassFloorBin);
        const step = Math.max(1, Math.floor(usableBins / barsPerSide));
        for (let i = 0; i < barsPerSide; i += 1) {
          const start = bassFloorBin + i * step;
          const end = Math.min(data.length, start + step);
          let sum = 0;
          for (let j = start; j < end; j += 1) sum += data[j];
          const avg = sum / Math.max(1, end - start);
          const normalized = Math.max(0, Math.min(1, avg / 255));
          const shaped = Math.pow(normalized, 1.22);
          // Prevent the center bars from looking permanently maxed out.
          const centerDistance = i / Math.max(1, barsPerSide - 1);
          const centerAttenuation = 0.78 + centerDistance * 0.22;
          const target = Math.max(0.08, Math.min(0.96, shaped * centerAttenuation));
          barStateRef.current[i] = barStateRef.current[i] * 0.72 + target * 0.28;
        }
      } else {
        for (let i = 0; i < barsPerSide; i += 1) {
          barStateRef.current[i] = barStateRef.current[i] * 0.9;
          if (barStateRef.current[i] < 0.08) barStateRef.current[i] = 0.08;
        }
      }

      const glow = ctx.createLinearGradient(0, 0, width, 0);
      glow.addColorStop(0, 'rgba(125, 211, 252, 0.95)');
      glow.addColorStop(0.5, 'rgba(34, 211, 238, 1)');
      glow.addColorStop(1, 'rgba(125, 211, 252, 0.95)');
      ctx.fillStyle = glow;
      ctx.shadowColor = 'rgba(34, 211, 238, 0.45)';
      ctx.shadowBlur = 6 * ratio;

      for (let i = 0; i < barsPerSide; i += 1) {
        const amp = barStateRef.current[i];
        const barH = Math.max(3 * ratio, amp * height * 0.72);
        const y = centerY - barH / 2;

        const rightX = centerX + i * (barW + gap);
        const leftX = centerX - barW - i * (barW + gap);

        ctx.fillRect(rightX, y, barW, barH);
        ctx.fillRect(leftX, y, barW, barH);
      }

      frameRef.current = requestAnimationFrame(draw);
    };

    frameRef.current = requestAnimationFrame(draw);
    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, [isPlaying]);

  useEffect(() => {
    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
      if (audioCtxRef.current) void audioCtxRef.current.close();
    };
  }, []);

  return (
    <div className="music-window os-pane">
      <div
        className="music-bg"
        style={{ backgroundImage: `linear-gradient(rgba(15,23,42,0.62), rgba(15,23,42,0.72)), url(${DEFAULT_COVER})` }}
      />

      <div className="music-panel">
        <div className="music-frame">
          <div className="music-waveform" aria-hidden="true">
            <canvas ref={canvasRef} className="music-waveform__canvas" />
          </div>
        </div>

        <div className="music-meta-row">
          <button
            className={`music-mini-btn ${liked ? 'music-mini-btn--active' : ''}`}
            type="button"
            aria-label="Favorite"
            onClick={() => {
              setLiked((prev) => !prev);
              triggerHeartBurst();
            }}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
              <path
                d="M8 13.2 2.7 8.4a3.2 3.2 0 1 1 4.5-4.5L8 4.7l.8-.8a3.2 3.2 0 0 1 4.5 4.5L8 13.2Z"
                fill={liked ? 'currentColor' : 'none'}
                stroke="currentColor"
                strokeWidth="1.2"
              />
            </svg>
            <span className="music-heart-burst-layer" aria-hidden="true">
              {heartBursts.map((heart) => (
                <span
                  key={heart.id}
                  className="music-heart-burst"
                  style={{
                    '--heart-x': `${heart.x}px`,
                    '--heart-size': `${heart.size}px`,
                    '--heart-duration': `${heart.duration}ms`,
                  } as React.CSSProperties}
                >
                  ❤
                </span>
              ))}
            </span>
          </button>
          <div className="music-title-wrap">
            <div className="music-title">{DEFAULT_TITLE}</div>
            <div className="music-subtitle">{DEFAULT_ARTIST}</div>
          </div>
          <button className="music-mini-btn" type="button" aria-label="More options">
            <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
              <circle cx="3" cy="8" r="1.2" fill="currentColor" />
              <circle cx="8" cy="8" r="1.2" fill="currentColor" />
              <circle cx="13" cy="8" r="1.2" fill="currentColor" />
            </svg>
          </button>
        </div>

        <div className="music-progress-wrap">
          <input
            className="music-progress"
            type="range"
            min={0}
            max={100}
            value={progress}
            onChange={onSeek}
            style={{ '--seek-pct': `${progress}%` } as React.CSSProperties}
            aria-label="Seek"
          />
          <div className="music-time">
            <span>{formatTime(currentTime)}</span>
            <span>{formatTime(duration)}</span>
          </div>
        </div>

        <div className="music-controls">
          <button
            type="button"
            className={`music-icon-btn ${shuffleOn ? 'music-icon-btn--active' : ''}`}
            aria-label="Shuffle"
            onClick={() => setShuffleOn((prev) => !prev)}
          >
            <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true">
              <path d="M2 4h2l2 2 2-2h3M10 2l2 2-2 2M2 10h2l2-2 2 2h3M10 8l2 2-2 2" stroke="currentColor" strokeWidth="1.2" fill="none" />
            </svg>
          </button>
          <button type="button" className="music-icon-btn" aria-label="Previous">
            <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true">
              <rect x="2" y="2" width="1.5" height="10" fill="currentColor" />
              <polygon points="11,2 4,7 11,12" fill="currentColor" />
            </svg>
          </button>
          <button
            type="button"
            className="music-icon-btn music-icon-btn--primary"
            onClick={togglePlayback}
            aria-label={isPlaying ? 'Pause' : 'Play'}
          >
            {isPlaying ? (
              <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true">
                <rect x="2" y="2" width="3" height="10" fill="currentColor" />
                <rect x="9" y="2" width="3" height="10" fill="currentColor" />
              </svg>
            ) : (
              <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true">
                <polygon points="3,2 12,7 3,12" fill="currentColor" />
              </svg>
            )}
          </button>
          <button type="button" className="music-icon-btn" aria-label="Next">
            <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true">
              <rect x="10.5" y="2" width="1.5" height="10" fill="currentColor" />
              <polygon points="3,2 10,7 3,12" fill="currentColor" />
            </svg>
          </button>
          <button
            type="button"
            className={`music-icon-btn ${repeatOn ? 'music-icon-btn--active' : ''}`}
            aria-label="Repeat"
            onClick={() => setRepeatOn((prev) => !prev)}
          >
            <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true">
              <path d="M2 5h8l-1.8-2M12 9H4l1.8 2M11.8 3v3M2.2 11V8" stroke="currentColor" strokeWidth="1.2" fill="none" />
            </svg>
          </button>
        </div>

        <div className="music-volume-wrap">
          <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true" className="music-volume-icon">
            <path d="M2 4h2l2-2v8L4 8H2Z" fill="currentColor" />
          </svg>
          <input
            className="music-volume"
            type="range"
            min={0}
            max={100}
            value={volume}
            onChange={onVolumeChange}
            style={{ '--vol-pct': `${volume}%` } as React.CSSProperties}
            aria-label="Volume"
          />
          <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true" className="music-volume-icon">
            <path d="M6.8 3.2a3.3 3.3 0 0 1 0 5.6M8.2 1.8a5 5 0 0 1 0 8.4" stroke="currentColor" strokeWidth="1.2" fill="none" />
          </svg>
        </div>

        {error ? <div className="music-error">{error}</div> : null}
      </div>

      <audio
        ref={audioRef}
        src={DEFAULT_TRACK}
        preload="metadata"
        onLoadedMetadata={(event) => {
          setDuration(event.currentTarget.duration || 0);
          setError(null);
        }}
        onTimeUpdate={(event) => setCurrentTime(event.currentTarget.currentTime || 0)}
        onEnded={() => setIsPlaying(false)}
        onPause={() => setIsPlaying(false)}
        onPlay={() => setIsPlaying(true)}
        onError={() => setError('Track failed to load.')}
        style={{ display: 'none' }}
      />

      <style>{`
        .music-window {
          position: relative;
          overflow: hidden;
          padding: 12px;
          height: 100%;
          -webkit-tap-highlight-color: transparent;
        }

        .music-bg {
          position: absolute;
          inset: 0;
          background-size: cover;
          background-position: center;
          filter: saturate(1.05) blur(2px);
          transform: scale(1.02);
        }

        .music-panel {
          position: relative;
          z-index: 1;
          display: grid;
          gap: 8px;
          height: 100%;
          min-height: 0;
          max-width: 510px;
          margin: 0 auto;
          border: 1px solid rgba(255, 255, 255, 0.35);
          background: linear-gradient(160deg, rgba(255, 255, 255, 0.18), rgba(255, 255, 255, 0.08));
          box-shadow: inset 1px 1px rgba(255, 255, 255, 0.45), 0 8px 24px rgba(2, 6, 23, 0.3);
          backdrop-filter: blur(9px);
          padding: 12px;
        }

        .music-frame {
          border: 2px solid rgba(30, 41, 59, 0.9);
          border-radius: 12px;
          padding: 10px;
          background: rgba(255, 255, 255, 0.08);
          box-shadow: inset 1px 1px rgba(255,255,255,0.35);
        }

        .music-meta-row {
          display: flex;
          align-items: center;
          gap: 8px;
          min-height: 34px;
        }

        .music-title-wrap {
          flex: 1;
          min-width: 0;
          text-align: center;
        }

        .music-title {
          font-size: 13px;
          font-weight: 700;
          color: #f8fafc;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          text-shadow: 0 1px 2px rgba(2, 6, 23, 0.5);
        }

        .music-subtitle {
          font-size: 9px;
          color: #cbd5e1;
          margin-top: 1px;
        }

        .music-waveform {
          height: 140px;
          border: 1px solid rgba(255, 255, 255, 0.28);
          background: linear-gradient(180deg, rgba(15, 23, 42, 0.65), rgba(15, 23, 42, 0.45));
          padding: 7px;
          overflow: hidden;
          border-radius: 8px;
        }

        .music-waveform__canvas {
          width: 100%;
          height: 100%;
          display: block;
        }

        .music-progress-wrap { margin-top: 1px; }

        .music-progress {
          width: 100%;
          appearance: none;
          -webkit-appearance: none;
          height: 8px;
          border-radius: 999px;
          border: 1px solid rgba(226, 232, 240, 0.25);
          background:
            linear-gradient(90deg, #22d3ee 0%, #22d3ee var(--seek-pct), rgba(17, 24, 39, 0.76) var(--seek-pct), rgba(17, 24, 39, 0.76) 100%);
          box-shadow: inset 1px 1px rgba(0,0,0,0.45), inset -1px -1px rgba(255,255,255,0.1);
          cursor: pointer;
        }

        .music-progress::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 14px;
          height: 14px;
          border-radius: 50%;
          border: 1px solid rgba(7, 89, 133, 0.9);
          background: radial-gradient(circle at 35% 35%, #67e8f9, #0891b2);
          box-shadow: 0 0 8px rgba(34, 211, 238, 0.45);
        }

        .music-progress::-moz-range-thumb {
          width: 14px;
          height: 14px;
          border-radius: 50%;
          border: 1px solid rgba(7, 89, 133, 0.9);
          background: radial-gradient(circle at 35% 35%, #67e8f9, #0891b2);
          box-shadow: 0 0 8px rgba(34, 211, 238, 0.45);
        }

        .music-progress:focus {
          outline: none;
        }

        .music-progress:focus-visible {
          box-shadow: inset 1px 1px rgba(0,0,0,0.45), inset -1px -1px rgba(255,255,255,0.1), 0 0 0 2px rgba(34, 211, 238, 0.5);
        }

        .music-time {
          display: flex;
          justify-content: space-between;
          font-size: 10px;
          color: #e2e8f0;
          margin-top: 2px;
        }

        .music-controls {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 6px;
          margin-top: 2px;
        }

        .music-mini-btn {
          width: 24px;
          height: 24px;
          display: grid;
          place-items: center;
          color: #dbeafe;
          background: transparent;
          border: none;
          cursor: pointer;
          opacity: 0.85;
          transition: opacity 120ms ease, transform 120ms ease;
          position: relative;
        }

        .music-mini-btn:focus {
          outline: none;
        }

        .music-mini-btn:focus-visible {
          box-shadow: 0 0 0 2px rgba(34, 211, 238, 0.45);
          border-radius: 6px;
        }

        .music-mini-btn:hover {
          opacity: 1;
          transform: translateY(-1px);
        }

        .music-mini-btn--active {
          color: #fb7185;
          opacity: 1;
          filter: drop-shadow(0 0 5px rgba(244, 63, 94, 0.55));
        }

        .music-heart-burst-layer {
          position: absolute;
          left: 50%;
          bottom: 18px;
          width: 0;
          height: 0;
          pointer-events: none;
        }

        .music-heart-burst {
          position: absolute;
          left: 0;
          bottom: 0;
          color: #ef4444;
          font-size: var(--heart-size);
          line-height: 1;
          transform: translateX(calc(-50% + var(--heart-x))) translateY(0) scale(0.8);
          opacity: 0.95;
          text-shadow: 0 0 8px rgba(239, 68, 68, 0.5);
          animation: music-heart-rise var(--heart-duration) ease-out forwards;
        }

        @keyframes music-heart-rise {
          0% {
            opacity: 0;
            transform: translateX(calc(-50% + var(--heart-x))) translateY(0) scale(0.7);
          }
          15% {
            opacity: 0.95;
          }
          100% {
            opacity: 0;
            transform: translateX(calc(-50% + var(--heart-x))) translateY(-56px) scale(1.06);
          }
        }

        .music-icon-btn {
          width: 34px;
          height: 34px;
          display: grid;
          place-items: center;
          color: #f8fafc;
          background: linear-gradient(180deg, rgba(65, 81, 103, 0.95), rgba(33, 46, 66, 0.95));
          border: 1px solid rgba(203, 213, 225, 0.45);
          box-shadow: inset 1px 1px rgba(255,255,255,0.25), inset -1px -1px rgba(0,0,0,0.35);
          cursor: pointer;
          transition: filter 140ms ease, transform 140ms ease, box-shadow 140ms ease, border-color 140ms ease;
        }

        .music-icon-btn:focus {
          outline: none;
        }

        .music-icon-btn:focus-visible {
          box-shadow: inset 1px 1px rgba(255,255,255,0.35), inset -1px -1px rgba(0,0,0,0.4), 0 0 0 2px rgba(34, 211, 238, 0.55);
        }

        .music-icon-btn:hover {
          filter: brightness(1.12);
          transform: translateY(-1px);
          box-shadow: inset 1px 1px rgba(255,255,255,0.35), inset -1px -1px rgba(0,0,0,0.4), 0 0 8px rgba(56, 189, 248, 0.35);
        }

        .music-icon-btn:active {
          transform: translateY(0);
          box-shadow: inset 1px 1px rgba(0,0,0,0.45), inset -1px -1px rgba(255,255,255,0.2);
        }

        .music-icon-btn--primary {
          background: linear-gradient(180deg, rgba(14, 116, 144, 0.98), rgba(8, 47, 73, 0.98));
          border-color: rgba(103, 232, 249, 0.7);
          box-shadow: inset 1px 1px rgba(186, 230, 253, 0.45), inset -1px -1px rgba(4, 47, 66, 0.7), 0 0 10px rgba(34, 211, 238, 0.25);
        }

        .music-icon-btn--active {
          color: #22d3ee;
          border-color: rgba(34, 211, 238, 0.9);
          box-shadow: inset 1px 1px rgba(186, 230, 253, 0.4), inset -1px -1px rgba(4, 47, 66, 0.7), 0 0 10px rgba(34, 211, 238, 0.4);
        }

        .music-error {
          margin-top: 2px;
          font-size: 10px;
          color: #fecaca;
        }

        .music-volume-wrap {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          margin-top: 2px;
        }

        .music-volume {
          width: 180px;
          appearance: none;
          -webkit-appearance: none;
          height: 10px;
          border-radius: 999px;
          border: 1px solid rgba(226, 232, 240, 0.22);
          background:
            repeating-linear-gradient(
              90deg,
              rgba(148, 163, 184, 0.2) 0 7px,
              rgba(15, 23, 42, 0) 7px 9px
            ),
            linear-gradient(90deg, rgba(148, 163, 184, 0.95) 0%, rgba(148, 163, 184, 0.95) var(--vol-pct), rgba(30, 41, 59, 0.82) var(--vol-pct), rgba(30, 41, 59, 0.82) 100%);
          box-shadow: inset 1px 1px rgba(0,0,0,0.35), inset -1px -1px rgba(255,255,255,0.08);
          cursor: pointer;
        }

        .music-volume::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 15px;
          height: 15px;
          border-radius: 999px;
          border: 1px solid rgba(100, 116, 139, 0.95);
          background: radial-gradient(circle at 35% 35%, #dbeafe, #94a3b8);
          box-shadow: 0 0 6px rgba(148, 163, 184, 0.45);
        }

        .music-volume::-moz-range-thumb {
          width: 15px;
          height: 15px;
          border-radius: 999px;
          border: 1px solid rgba(100, 116, 139, 0.95);
          background: radial-gradient(circle at 35% 35%, #dbeafe, #94a3b8);
          box-shadow: 0 0 6px rgba(148, 163, 184, 0.45);
        }

        .music-volume:focus {
          outline: none;
        }

        .music-volume:focus-visible {
          box-shadow: inset 1px 1px rgba(0,0,0,0.35), inset -1px -1px rgba(255,255,255,0.08), 0 0 0 2px rgba(148, 163, 184, 0.42);
        }

        .music-volume-icon {
          color: #cbd5e1;
          opacity: 0.9;
        }

        @media (max-width: 560px) {
          .music-panel {
            max-width: none;
          }

          .music-waveform { height: 110px; }
        }
      `}</style>
    </div>
  );
}
