'use client';

import { useState, useCallback, useMemo } from 'react';
import { GameBar, BarButton } from './LightPainting';

/* Spark — a deck of conversation prompts. Flip through, shuffle,
 * filter by mood. An icebreaker, not a game with a score. */

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

const CAT_COLOR: Record<Cat, string> = {
  Deep: '#5b8def',
  Playful: '#f5a623',
  'Either / Or': '#37c98b',
  'What If': '#b14be8',
};

export default function Spark({ onExit }: { onExit: () => void }) {
  const [filter, setFilter] = useState<Cat | 'All'>('All');
  const [card, setCard] = useState<{ cat: Cat; text: string } | null>(null);
  const [flipping, setFlipping] = useState(false);

  const pool = useMemo(() => {
    const items: { cat: Cat; text: string }[] = [];
    CATS.forEach((c) => {
      if (filter === 'All' || filter === c) {
        DECK[c].forEach((text) => items.push({ cat: c, text }));
      }
    });
    return items;
  }, [filter]);

  const draw = useCallback(() => {
    setFlipping(true);
    setTimeout(() => {
      let next = pool[Math.floor(Math.random() * pool.length)];
      if (pool.length > 1 && card) {
        let guard = 0;
        while (next.text === card.text && guard++ < 8) {
          next = pool[Math.floor(Math.random() * pool.length)];
        }
      }
      setCard(next);
      setFlipping(false);
    }, 180);
  }, [pool, card]);

  const accent = card ? CAT_COLOR[card.cat] : '#8a8a9a';

  return (
    <div style={{
      position: 'fixed', inset: 0,
      background: 'radial-gradient(ellipse at 50% 35%, #2a2350 0%, #14121f 60%, #0a0910 100%)',
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      fontFamily: '"Helvetica Neue", Arial, sans-serif',
      color: '#fff',
    }}>
      <GameBar onExit={onExit}>
        <BarButton onClick={() => setFilter('All')} label="All" active={filter === 'All'} />
        {CATS.map((c) => (
          <BarButton key={c} onClick={() => setFilter(c)} label={c} active={filter === c} />
        ))}
      </GameBar>

      {/* Card */}
      <div
        onClick={draw}
        style={{
          width: 'min(560px, 86vw)',
          minHeight: 300,
          padding: '44px 44px 36px',
          borderRadius: 20,
          background: 'linear-gradient(160deg, #ffffff, #eef0f6)',
          color: '#1a1a24',
          boxShadow: `0 24px 60px rgba(0,0,0,0.55), 0 0 0 1px rgba(255,255,255,0.1), inset 0 0 0 2px ${accent}22`,
          cursor: 'pointer',
          display: 'flex', flexDirection: 'column',
          transform: flipping ? 'rotateX(90deg) scale(0.96)' : 'rotateX(0) scale(1)',
          transition: 'transform 0.18s ease',
          transformStyle: 'preserve-3d',
        }}
      >
        {card ? (
          <>
            <div style={{
              alignSelf: 'flex-start',
              fontSize: 11, letterSpacing: 2, textTransform: 'uppercase',
              fontWeight: 700, color: accent,
              padding: '5px 12px', borderRadius: 999,
              background: `${accent}1a`,
              marginBottom: 28,
            }}>
              {card.cat}
            </div>
            <div style={{ fontSize: 25, fontWeight: 400, lineHeight: 1.4, flex: 1 }}>
              {card.text}
            </div>
            <div style={{ marginTop: 24, fontSize: 12, opacity: 0.4, letterSpacing: 1 }}>
              tap for another
            </div>
          </>
        ) : (
          <div style={{ margin: 'auto', textAlign: 'center' }}>
            <div style={{ fontSize: 30, fontWeight: 200, letterSpacing: 3, marginBottom: 10 }}>SPARK</div>
            <div style={{ fontSize: 14, opacity: 0.55 }}>tap the card to draw a prompt</div>
          </div>
        )}
      </div>

      <button
        onClick={draw}
        style={{
          marginTop: 28, font: 'inherit', fontSize: 13, letterSpacing: 1.5,
          padding: '12px 32px', cursor: 'pointer', color: '#fff',
          background: accent, border: 'none', borderRadius: 999,
          boxShadow: `0 8px 24px ${accent}55`,
        }}
      >
        {card ? 'NEXT CARD' : 'DRAW'}
      </button>
    </div>
  );
}
