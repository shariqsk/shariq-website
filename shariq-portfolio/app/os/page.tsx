'use client';

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';

// Dynamically import both to avoid SSR/sessionStorage issues
const Desktop    = dynamic(() => import('@/components/os/Desktop'),    { ssr: false });
const BootScreen = dynamic(() => import('@/components/os/BootScreen'), { ssr: false });

export default function OsPage() {
  const [booted,   setBooted]   = useState(false);
  const [showBoot, setShowBoot] = useState(false);

  useEffect(() => {
    setShowBoot(true);
  }, []);

  const handleBootComplete = () => {
    setBooted(true);
    setShowBoot(false);
  };

  return (
    <div style={{ background: '#000', minHeight: '100vh' }}>
      {showBoot && <BootScreen onComplete={handleBootComplete} />}
      {booted   && <Desktop />}
    </div>
  );
}
