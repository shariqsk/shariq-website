'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { xmbHome } from '@/components/xmb/xmbHome';

/* Tiny Windows 95 desktop, drawn in CSS inside a circle. */
function OsDisc() {
  return (
    <span className="home__portal-disc home__disc-os" aria-hidden>
      <span className="home__disc-os__win">
        <span className="home__disc-os__bar">
          <span className="home__disc-os__btn" />
          <span className="home__disc-os__btn" />
        </span>
        <span className="home__disc-os__lines">
          <i /><i /><i />
        </span>
      </span>
      <span className="home__disc-os__taskbar">
        <span className="home__disc-os__start" />
      </span>
    </span>
  );
}

/* Tiny XMB crossbar over the PS3 wave. */
function XmbDisc() {
  return (
    <span className="home__portal-disc home__disc-xmb" aria-hidden>
      <span className="home__disc-xmb__wave" />
      <span className="home__disc-xmb__cross">
        <span className="home__disc-xmb__row">
          <i /><i /><i /><i /><i />
        </span>
        <span className="home__disc-xmb__col">
          <i /><i /><i />
        </span>
      </span>
    </span>
  );
}

const Arrow = () => (
  <svg className="home__portal-arrow" width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden>
    <path d="M2.5 6h7M6.5 3l3 3-3 3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function PortalCircles() {
  /* The XMB is the root of the home.* subdomain and /xmb everywhere else,
     so resolve it after mount to keep the server render stable. */
  const [xmbHref, setXmbHref] = useState('/xmb');

  useEffect(() => {
    setXmbHref(xmbHome());
  }, []);

  return (
    <div className="home__portals">
      <Link className="home__portal" href="/os" aria-label="Open SK-OS, a Windows 95 style desktop">
        <OsDisc />
        <span>
          <span className="home__portal-title">SK-OS <Arrow /></span>
          <span className="home__portal-sub">Windows 95 desktop</span>
        </span>
      </Link>

      <Link className="home__portal" href={xmbHref} aria-label="Open the PS3 XMB interface">
        <XmbDisc />
        <span>
          <span className="home__portal-title">XMB <Arrow /></span>
          <span className="home__portal-sub">PlayStation 3 menu</span>
        </span>
      </Link>
    </div>
  );
}
