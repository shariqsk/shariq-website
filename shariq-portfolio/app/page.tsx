'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';
import BootScreen from '@/components/os/BootScreen';

// Dynamically import Desktop to avoid SSR issues with window/sessionStorage
const Desktop = dynamic(() => import('@/components/os/Desktop'), { ssr: false });

export default function Home() {
  const [booted, setBooted] = useState(false);

  return (
    <>
      <BootScreen onComplete={() => setBooted(true)} />
      {booted && <Desktop />}
    </>
  );
}
