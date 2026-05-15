'use client';

import dynamic from 'next/dynamic';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const Spark = dynamic(() => import('@/components/xmb/games/Spark'), { ssr: false });

export default function SparkPage() {
  const router = useRouter();
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') router.push('/xmb'); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [router]);
  return <Spark onExit={() => router.push('/xmb')} />;
}
