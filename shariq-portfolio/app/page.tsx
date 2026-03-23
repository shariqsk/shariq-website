'use client';

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';

// Dynamically import both to avoid SSR/sessionStorage issues
const Desktop   = dynamic(() => import('@/components/os/Desktop'),    { ssr: false });
const BootScreen = dynamic(() => import('@/components/os/BootScreen'), { ssr: false });

export default function Home() {
  const [booted,   setBooted]   = useState(false);
  const [showBoot, setShowBoot] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem('sk_os_booted')) {
      // Already seen boot — go straight to desktop
      setBooted(true);
    } else {
      // First visit — show boot sequence
      setShowBoot(true);
    }
  }, []);

  const handleBootComplete = () => {
    setBooted(true);
    setShowBoot(false);
  };

  return (
    <>
      {showBoot && <BootScreen onComplete={handleBootComplete} />}
      {booted   && <Desktop />}
    </>
  );
}
