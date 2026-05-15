'use client';

import dynamic from 'next/dynamic';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const KoiPond = dynamic(() => import('@/components/xmb/games/KoiPond'), { ssr: false });

export default function KoiPage() {
  const router = useRouter();
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') router.push('/xmb'); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [router]);
  return <KoiPond onExit={() => router.push('/xmb')} />;
}
