'use client';

import dynamic from 'next/dynamic';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { xmbHome } from '@/components/xmb/xmbHome';

const Conductor = dynamic(() => import('@/components/xmb/games/Conductor'), { ssr: false });

export default function ConductorPage() {
  const router = useRouter();
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') router.push(xmbHome()); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [router]);
  return <Conductor onExit={() => router.push(xmbHome())} />;
}
