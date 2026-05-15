'use client';

import { useState, useCallback, useMemo, useEffect } from 'react';
import { GameBar, BarButton } from './LightPainting';

/* Spark — a deck of conversation prompts. Flip through, shuffle, filter by
 * mood. An icebreaker, not a game with a score. */

type Cat = 'Deep' | 'Playful' | 'Either / Or' | 'What If';

const DECK: Record<Cat, string[]> = {
  Deep: [
    'What did you believe strongly five years ago that you do not anymore?',
    'What does a perfect ordinary day look like for you?',
    'What is a compliment you received that you still think about?',
    'What are you quietly proud of but rarely mention?',
    'What is something you are still figuring out?',
    'Who shaped the way you think the most?',
    'What would you attempt if it could not fail?',
    'What small thing instantly makes a place feel like home?',
    'What is a fear you have outgrown?',
    'When do you feel most like yourself?',
  ],
  Playful: [
    'If this week had a theme song, what would it be right now?',
    'What is the most useless talent you are weirdly good at?',
    'You get one billboard anywhere. What does it say?',
    'What snack would you defend with your life?',
    'What is the worst advice you ever followed?',
    'If animals could talk, which would be the rudest?',
    'What is a trend you quietly hope comes back?',
    'Describe your day as a movie genre.',
    'What is the pettiest hill you will die on?',
    'What would your villain origin story be?',
  ],
  'Either / Or': [
    'Mountains or ocean?',
    'Reply instantly or three days later?',
    'Plan everything or wing it?',
    'Morning sunlight or midnight quiet?',
    'Reread favorites or always something new?',
    'Big party or three close friends?',
    'Texts or calls?',
    'Sweet or savory breakfast?',
    'City lights or a starry sky?',
    'Window seat or aisle?',
  ],
  'What If': [
    'If you could master any skill by tomorrow morning, what is it?',
    'If you could send one sentence to your past self, what is it?',
    'If you could live in any year for a week, which one?',
    'If you had to teach a class on anything, what is the subject?',
    'If you could keep only five photos forever, what are they of?',
    'If you woke up famous tomorrow, what would it be for?',
    'If you could have dinner with anyone, who would it be?',
    'If your pet wrote a review of you, what would it say?',
    'If you could erase one chore from existence, which one?',
    'If you could instantly know one true thing, what would you ask?',
  ],
};

const CATS: Cat[] = ['Deep', 'Playful', 'Either / Or', 'What If'];
const COLOR: Record<Cat, string> = {
  Deep: '#5b8def',
  Playful: '#f5a623',
  'Either / Or': '#37c98b',
  'What If': '#b14be8',
};

export default function Spark({ onExit }: { onExit: () => void }) {
  const [filter, setFilter] = useState<Cat | 'All'>('All');
  const [card, setCard] = useState<{ cat: Cat; text: string } | null>(null);
  const [face, setFace] = useState<{ cat: Cat; text: string } | null>(null);
  const [flipping, setFlipping] = useState(false);
  const [count, setCount] = useState(0);

  const pool = useMemo(() => {
    const items: { cat: Cat; text: string }[] = [];
    CATS.forEach((c) => {
      if (filter === 'All' || filter === c) DECK[c].forEach((text) => items.push({ cat: c, text }));
    });
    return items;
  }, [filter]);

  const draw = useCallback(() => {
    setFlipping(true);
    setCount((c) => c + 1);
    // swap the visible face at the midpoint of the flip
    setTimeout(() => {
      setCard((prev) => {
        let next = pool[Math.floor(Math.random() * pool.length)];
        let guard = 0;
        while (pool.length > 1 && prev && next.text === prev.text && guard++ < 10) {
          next = pool[Math.floor(Math.random() * pool.length)];
        }
        setFace(next);
        return next;
      });
    }, 230);
    setTimeout(() => setFlipping(false), 460);
  }, [pool]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === ' ' || e.key === 'Enter' || e.key === 'ArrowRight') { e.preventDefault(); draw(); }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [draw]);

  const accent = face ? COLOR[face.cat] : '#8a8ad0';

  return (
    <div style={{
      position: 'fixed', inset: 0,
      background: 'radial-gradient(ellipse at 50% 30%, #2c2550 0%, #161325 55%, #0a0911 100%)',
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      fontFamily: '"Helvetica Neue", Arial, sans-serif',
      color: '#fff', overflow: 'hidden',
    }}>
      <style>{`
        @keyframes spark-drift {
          0%,100% { transform: translate(0,0) scale(1); }
          50%     { transform: translate(40px,-30px) scale(1.15); }
        }
        .spark-glow { position:absolute; border-radius:50%; filter:blur(60px); opacity:0.5; }
        .spark-stage { perspective: 1400px; }
        .spark-card {
          width: min(560px, 86vw); min-height: 320px;
          transform-style: preserve-3d;
          transition: transform 0.46s cubic-bezier(0.4,0,0.2,1);
        }
        .spark-card.flip { transform: rotateY(180deg); }
        .spark-face {
          position:absolute; inset:0;
          backface-visibility:hidden; -webkit-backface-visibility:hidden;
          border-radius:22px;
          display:flex; flex-direction:column;
          padding:46px 46px 38px;
        }
      `}</style>

      {/* drifting ambient glows */}
      <div className="spark-glow" style={{ width: 360, height: 360, background: '#6d3bf5', top: '8%', left: '12%', animation: 'spark-drift 17s ease-in-out infinite' }} />
      <div className="spark-glow" style={{ width: 320, height: 320, background: '#b14be8', bottom: '6%', right: '14%', animation: 'spark-drift 21s ease-in-out infinite reverse' }} />

      <GameBar onExit={onExit}>
        <BarButton onClick={() => setFilter('All')} label="All" active={filter === 'All'} />
        {CATS.map((c) => (
          <BarButton key={c} onClick={() => setFilter(c)} label={c} active={filter === c} />
        ))}
      </GameBar>

      {/* stacked deck behind the card */}
      <div className="spark-stage" style={{ position: 'relative' }}>
        {[2, 1].map((d) => (
          <div key={d} style={{
            position: 'absolute', inset: 0,
            transform: `translate(${d * 8}px, ${d * 10}px) scale(${1 - d * 0.035})`,
            borderRadius: 22,
            background: 'linear-gradient(160deg, #e7e6f0, #c9c8da)',
            boxShadow: '0 18px 40px rgba(0,0,0,0.45)',
          }} />
        ))}

        <div className={`spark-card ${flipping ? 'flip' : ''}`} onClick={draw} role="button" tabIndex={0}
          onKeyDown={(e) => { if (e.key === 'Enter') draw(); }} style={{ cursor: 'pointer' }}>
          {/* front face — the prompt */}
          <div className="spark-face" style={{
            background: 'linear-gradient(160deg, #ffffff, #ececf4)',
            color: '#1a1a26',
            boxShadow: `0 26px 60px rgba(0,0,0,0.55), inset 0 0 0 2px ${accent}26`,
          }}>
            {face ? (
              <>
                <div style={{
                  alignSelf: 'flex-start', fontSize: 11, letterSpacing: 2,
                  textTransform: 'uppercase', fontWeight: 700, color: accent,
                  padding: '5px 13px', borderRadius: 999, background: `${accent}1c`,
                  marginBottom: 26,
                }}>{face.cat}</div>
                <div style={{ fontSize: 25, fontWeight: 400, lineHeight: 1.42, flex: 1 }}>{face.text}</div>
                <div style={{ marginTop: 22, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: 12, opacity: 0.4, letterSpacing: 1 }}>card #{count}</span>
                  <span style={{ fontSize: 12, opacity: 0.4, letterSpacing: 1 }}>tap / space for next</span>
                </div>
              </>
            ) : (
              <div style={{ margin: 'auto', textAlign: 'center' }}>
                <div style={{ fontSize: 32, fontWeight: 200, letterSpacing: 4, marginBottom: 10 }}>SPARK</div>
                <div style={{ fontSize: 14, opacity: 0.55 }}>tap the card to draw a prompt</div>
              </div>
            )}
          </div>
          {/* back face — shown mid-flip */}
          <div className="spark-face" style={{
            transform: 'rotateY(180deg)',
            background: 'linear-gradient(160deg, #2a2550, #1a1730)',
            alignItems: 'center', justifyContent: 'center',
            boxShadow: '0 26px 60px rgba(0,0,0,0.55)',
          }}>
            <div style={{
              width: 70, height: 70, borderRadius: '50%',
              border: '2px solid rgba(255,255,255,0.3)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 30, color: 'rgba(255,255,255,0.85)',
            }}>✦</div>
          </div>
        </div>
      </div>

      <button onClick={draw} style={{
        marginTop: 40, font: 'inherit', fontSize: 13, letterSpacing: 1.5,
        padding: '13px 34px', cursor: 'pointer', color: '#fff',
        background: accent, border: 'none', borderRadius: 999,
        boxShadow: `0 10px 28px ${accent}55`,
        transition: 'background 0.3s, box-shadow 0.3s',
      }}>
        {face ? 'NEXT CARD' : 'DRAW A CARD'}
      </button>
    </div>
  );
}
