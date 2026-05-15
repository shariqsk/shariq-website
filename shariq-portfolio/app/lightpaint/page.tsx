'use client';

import dynamic from 'next/dynamic';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const LightPainting = dynamic(() => import('@/components/xmb/games/LightPainting'), { ssr: false });

export default function LightPaintingPage() {
  const router = useRouter();
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') router.push('/xmb'); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [router]);
  return <LightPainting onExit={() => router.push('/xmb')} />;
}
