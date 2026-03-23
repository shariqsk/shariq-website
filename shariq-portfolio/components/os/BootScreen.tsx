'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const BOOT_LINES = [
  'sk_os  version 1.0.0  (build 2024)',
  'Copyright (c) Shariq Khan. All rights reserved.',
  '',
  'Performing POST...',
  'CPU: Intel Core — OK',
  'Memory: 16384 MB — OK',
  'Storage: /dev/ssd0 — OK',
  '',
  'Loading kernel modules...',
  'Loading security subsystem...',
  'Mounting filesystems...',
  '  /     [OK]',
  '  /home  [OK]',
  '  /projects  [OK]',
  '',
  'Starting services...',
  '  firewall         [RUNNING]',
  '  ssh-agent        [RUNNING]',
  '  portfolio-daemon [RUNNING]',
  '',
  'Loading user profile: shariq',
  '',
  'Welcome back.',
];

interface BootScreenProps {
  onComplete: () => void;
}

export default function BootScreen({ onComplete }: BootScreenProps) {
  const [visibleLines, setVisibleLines] = useState<string[]>([]);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    // Check if already booted this session — skip animation entirely
    const hasBooted = sessionStorage.getItem('sk_os_booted');
    if (hasBooted) {
      setExiting(true);
      onComplete();
      return;
    }

    let idx = 0;
    const delays: number[] = BOOT_LINES.map((line) => {
      if (line === '') return 40;
      if (line.startsWith('  ')) return 60;
      if (line.includes('[OK]') || line.includes('[RUNNING]')) return 50;
      return 90;
    });

    let elapsed = 0;
    const timers: ReturnType<typeof setTimeout>[] = [];

    BOOT_LINES.forEach((line, i) => {
      elapsed += delays[i];
      const t = setTimeout(() => {
        setVisibleLines((prev) => [...prev, line]);
        if (i === BOOT_LINES.length - 1) {
          const done = setTimeout(() => {
            setExiting(true);
            setTimeout(() => {
              sessionStorage.setItem('sk_os_booted', '1');
              onComplete();
            }, 600);
          }, 400);
          timers.push(done);
        }
      }, elapsed);
      timers.push(t);
    });

    return () => timers.forEach(clearTimeout);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!exiting && (
        <motion.div
          key="boot"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="os-boot"
          onClick={() => {
            // Allow skipping
            setExiting(true);
            setTimeout(() => {
              sessionStorage.setItem('sk_os_booted', '1');
              onComplete();
            }, 300);
          }}
        >
          <div className="os-boot__terminal">
            {visibleLines.map((line, i) => (
              <div key={i} style={{ minHeight: '1.8em' }}>
                {line === '' ? (
                  <span>&nbsp;</span>
                ) : (
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.1 }}
                    style={{
                      color: line.includes('[OK]') || line.includes('[RUNNING]')
                        ? '#22c55e'
                        : line.includes('[WARN]') || line.includes('[FAIL]')
                        ? '#ef4444'
                        : line.startsWith('  ')
                        ? 'rgba(245,158,11,0.7)'
                        : '#f59e0b',
                    }}
                  >
                    {line}
                  </motion.span>
                )}
              </div>
            ))}
            {!exiting && <span className="os-boot__cursor" />}
          </div>

          <div
            style={{
              position: 'fixed',
              bottom: 16,
              right: 20,
              fontSize: 10,
              color: 'rgba(245,158,11,0.3)',
              fontFamily: 'monospace',
              letterSpacing: '0.1em',
            }}
          >
            click anywhere to skip
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
