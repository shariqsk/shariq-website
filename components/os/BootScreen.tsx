'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { playType } from '@/lib/sounds';

const BOOT_LINES = [
  'SK-OS  Version 4.00.950  A',
  'Copyright (c) Shariq Khan 1995-2025.',
  '',
  'Performing system check...',
  'CPU: OK',
  'Memory test: 16384 KB OK',
  'Hard Disk: OK',
  '',
  'Loading device drivers...',
  'Loading security subsystem...',
  'Initializing file system...',
  '  C:\\ [OK]',
  '  C:\\projects [OK]',
  '  C:\\users\\shariq [OK]',
  '',
  'Starting services...',
  '  firewall.exe     [OK]',
  '  ssh-agent.exe    [OK]',
  '  portfolio.exe    [OK]',
  '',
  'Loading user profile: Shariq',
  '',
  'Welcome.',
];

interface BootScreenProps {
  onComplete: () => void;
}

const TOTAL_BLOCKS = 14;

export default function BootScreen({ onComplete }: BootScreenProps) {
  const [visibleLines, setVisibleLines] = useState<string[]>([]);
  const [exiting, setExiting] = useState(false);

  const filledBlocks = Math.floor(Math.min((visibleLines.length / BOOT_LINES.length) * TOTAL_BLOCKS, TOTAL_BLOCKS));

  useEffect(() => {
    const delays: number[] = BOOT_LINES.map((line) => {
      if (line === '') return 35;
      if (line.startsWith('  ')) return 50;
      if (line.includes('[OK]')) return 55;
      return 80;
    });

    let elapsed = 0;
    const timers: ReturnType<typeof setTimeout>[] = [];

    BOOT_LINES.forEach((line, i) => {
      elapsed += delays[i];
      const t = setTimeout(() => {
        setVisibleLines((prev) => [...prev, line]);
        if (line !== '') playType();
        if (i === BOOT_LINES.length - 1) {
          const done = setTimeout(() => {
            setExiting(true);
            setTimeout(() => {
              sessionStorage.setItem('sk_os_booted', '1');
              onComplete();
            }, 500);
          }, 400);
          timers.push(done);
        }
      }, elapsed);
      timers.push(t);
    });

    return () => timers.forEach(clearTimeout);
  }, [onComplete]);

  const skip = () => {
    setExiting(true);
    setTimeout(() => {
      sessionStorage.setItem('sk_os_booted', '1');
      onComplete();
    }, 300);
  };

  return (
    <AnimatePresence>
      {!exiting && (
        <motion.div
          key="boot"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="os-boot"
          onClick={skip}
        >
          {/* Logo */}
          <div className="os-boot__logo">SK-OS</div>
          <div className="os-boot__version">Version 4.00.950</div>

          {/* Terminal output */}
          <div className="os-boot__terminal">
            {visibleLines.map((line, i) => (
              <div key={i} style={{ minHeight: '1.5em' }}>
                {line === '' ? (
                  <span>&nbsp;</span>
                ) : (
                  <span
                    style={{
                      color:
                        line.includes('[OK]')
                          ? '#ffffff'
                          : line.startsWith('  ')
                          ? '#aaaaaa'
                          : line.startsWith('SK-OS') || line.startsWith('Copyright')
                          ? '#888888'
                          : line === 'Welcome.'
                          ? '#ffffff'
                          : '#cccccc',
                    }}
                  >
                    {line}
                  </span>
                )}
              </div>
            ))}
            {!exiting && <span className="os-boot__cursor" />}
          </div>

          {/* Win95 block progress bar */}
          <div className="os-boot__bar-wrap">
            {Array.from({ length: TOTAL_BLOCKS }).map((_, i) => (
              <div
                key={i}
                className="os-boot__bar-block"
                style={{ opacity: i < filledBlocks ? 1 : 0 }}
              />
            ))}
          </div>

          <div style={{
            position: 'fixed', bottom: 12, right: 16,
            fontSize: 10, color: '#555',
            fontFamily: "'Courier New', monospace",
          }}>
            Click to skip
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
