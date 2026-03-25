'use client';

import { useState, useRef, useEffect, KeyboardEvent } from 'react';

interface Line {
  type: 'input' | 'output' | 'error' | 'blank';
  text: string;
}

const COMMANDS: Record<string, string[]> = {
  help: [
    'Available commands:',
    '  whoami       — who am I',
    '  ls           — list files',
    '  cat <file>   — read a file',
    '  pwd          — current directory',
    '  skills       — list technical skills',
    '  projects     — list projects',
    '  contact      — get contact info',
    '  clear        — clear terminal',
    '  echo <text>  — echo text',
    '  uname        — system info',
    '  sudo rm -rf /— nice try',
  ],
  whoami: [
    'shariq',
    'Shariq Khan — Cybersecurity Student & Full-Stack Developer',
    'York University · Toronto, Canada',
  ],
  pwd: ['/home/shariq'],
  ls: [
    'total 6',
    'drwxr-xr-x  shariq  projects/',
    '-rw-r--r--  shariq  bio.txt',
    '-rw-r--r--  shariq  resume.pdf',
    '-rw-------  shariq  contact.gpg',
    'lrwxrwxrwx  shariq  blog -> https://shariqsk.github.io',
  ],
  'ls -la': [
    'total 6',
    'drwxr-xr-x  shariq  projects/',
    '-rw-r--r--  shariq  bio.txt',
    '-rw-r--r--  shariq  resume.pdf',
    '-rw-------  shariq  contact.gpg',
    'lrwxrwxrwx  shariq  blog -> https://shariqsk.github.io',
  ],
  'cat bio.txt': [
    "I'm a 20-year-old Cybersecurity student at York University.",
    'Building secure, scalable applications with a security-first approach.',
    '',
    'Skills: Full-stack dev · System security · Defensive cybersecurity',
    'Current: Import Analyst @ Farrow',
  ],
  'cat resume.pdf': [
    'Error: binary file — opening in browser...',
    'https://drive.google.com/file/d/1l1aJcVBJBbIg0VPKc9LXyG9x5E3l0FIa/view',
  ],
  'cat contact.gpg': [
    '-----BEGIN PGP MESSAGE-----',
    '',
    'email:    contact@shariqsafdarkhan.com',
    'github:   github.com/shariqsk',
    'linkedin: linkedin.com/in/shariq-khan-430754217',
    'twitter:  twitter.com/shariqssk',
    '',
    '-----END PGP MESSAGE-----',
  ],
  skills: [
    'Next.js / React     ████████████████░░░░  82%',
    'TypeScript          █████████████████░░░  85%',
    'Python / FastAPI    ████████████████░░░░  80%',
    'Cybersecurity       ██████████████░░░░░░  72%',
    'Docker / AWS        █████████████░░░░░░░  65%',
    'Machine Learning    ████████████░░░░░░░░  60%',
  ],
  projects: [
    'zocratic/      — Fight analytics platform   [Next.js, FastAPI, PyTorch]',
    'cdl-sim/       — CoD esports league manager [Next.js, Supabase]',
    'phintic/       — Security education site    [Next.js, React]',
    'qotd.py        — Discord quote bot          [Python, Docker, Redis]',
    'blink.py       — Eye health monitor         [Python, MediaPipe, CV]',
    'resumense/     — AI resume optimizer        [Next.js, AI, LaTeX]',
  ],
  contact: [
    'email:    contact@shariqsafdarkhan.com',
    'github:   https://github.com/shariqsk',
    'linkedin: https://www.linkedin.com/in/shariq-khan-430754217/',
    'twitter:  https://twitter.com/shariqssk',
  ],
  uname: ['sk_os 1.0.0 #1 SMP Fri Jan 1 00:00:00 UTC 2025 x86_64 GNU/Linux'],
  'uname -a': ['sk_os 1.0.0 #1 SMP Fri Jan 1 00:00:00 UTC 2025 x86_64 x86_64 x86_64 GNU/Linux'],
  date: [new Date().toString()],
  'sudo rm -rf /': [
    'sudo: nice try.',
    'This action has been logged.',
    'Please do not attempt to delete Shariq.',
  ],
  'rm -rf /': ["rm: refusing to remove '/' — use --no-preserve-root to override (please don't)"],
  hack: ['Hacking... just kidding. Try: help'],
  exit: ['logout', 'Session terminated. Goodbye.'],
};

const INITIAL: Line[] = [
  { type: 'output', text: 'sk_os terminal — type "help" for commands' },
  { type: 'blank',  text: '' },
];

export default function TerminalWindow() {
  const [lines, setLines]   = useState<Line[]>(INITIAL);
  const [input, setInput]   = useState('');
  const [history, setHistory] = useState<string[]>([]);
  const [histIdx, setHistIdx] = useState(-1);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef  = useRef<HTMLInputElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [lines]);

  const runCommand = (raw: string) => {
    const cmd = raw.trim().toLowerCase();
    if (!cmd) return;

    setHistory((h) => [cmd, ...h]);
    setHistIdx(-1);

    const newLines: Line[] = [{ type: 'input', text: cmd }];

    if (cmd === 'clear') {
      setLines(INITIAL);
      return;
    }

    if (cmd.startsWith('echo ')) {
      newLines.push({ type: 'output', text: cmd.slice(5) });
    } else if (COMMANDS[cmd]) {
      COMMANDS[cmd].forEach((t) =>
        newLines.push({ type: t === '' ? 'blank' : 'output', text: t }),
      );
    } else if (cmd.startsWith('cd ')) {
      newLines.push({ type: 'error', text: `${cmd.slice(3)}: not a real filesystem. yet.` });
    } else {
      newLines.push({ type: 'error', text: `sh: command not found: ${cmd} — try "help"` });
    }

    newLines.push({ type: 'blank', text: '' });
    setLines((prev) => [...prev, ...newLines]);
  };

  const onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      runCommand(input);
      setInput('');
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      const next = Math.min(histIdx + 1, history.length - 1);
      setHistIdx(next);
      setInput(history[next] ?? '');
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      const next = Math.max(histIdx - 1, -1);
      setHistIdx(next);
      setInput(next === -1 ? '' : history[next]);
    } else if (e.key === 'l' && e.ctrlKey) {
      e.preventDefault();
      setLines(INITIAL);
    }
  };

  return (
    <div
      style={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        background: '#000',
        padding: '8px 10px',
        cursor: 'text',
        fontFamily: "'Courier New', monospace",
        fontSize: 12,
      }}
      onClick={() => inputRef.current?.focus()}
    >
      <div style={{ flex: 1, overflowY: 'auto', lineHeight: 1.8 }}>
        {lines.map((l, i) => {
          if (l.type === 'blank') return <div key={i} style={{ height: '0.4em' }} />;
          return (
            <div key={i} style={{ display: 'flex', gap: 8, whiteSpace: 'pre' }}>
              {l.type === 'input' && (
                <span style={{ color: '#55ff55', flexShrink: 0 }}>shariq@sk_os:~$</span>
              )}
              <span
                style={{
                  color:
                    l.type === 'input' ? '#ffffff'
                    : l.type === 'error' ? '#ff5555'
                    : '#aaaaaa',
                }}
              >
                {l.text}
              </span>
            </div>
          );
        })}
        <div ref={bottomRef} />
      </div>

      {/* Input row */}
      <div style={{ display: 'flex', alignItems: 'center', marginTop: 4 }}>
        <span style={{ color: '#55ff55', fontSize: 12, flexShrink: 0, whiteSpace: 'pre', fontFamily: "'Courier New', monospace" }}>
          shariq@sk_os:~$&nbsp;
        </span>
        <input
          ref={inputRef}
          className="os-terminal-input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={onKeyDown}
          autoFocus
          spellCheck={false}
          autoComplete="off"
        />
      </div>
    </div>
  );
}
