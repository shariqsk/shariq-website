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

export default function PortalCircles() {
  /* The XMB is the root of the home.* subdomain and /xmb everywhere else,
     so resolve it after mount to keep the server render stable. */
  const [xmbHref, setXmbHref] = useState('/xmb');

  useEffect(() => {
    setXmbHref(xmbHome());
  }, []);

  return (
    <div className="home__list">
      <Link className="home__row" href="/os">
        <OsDisc />
        <span>
          <span className="home__row-name">SK-OS</span>
          <span className="home__row-desc"> · this site as a Windows 95 desktop</span>
        </span>
        <span className="home__row-meta">Desktop</span>
      </Link>

      <Link className="home__row" href={xmbHref}>
        <XmbDisc />
        <span>
          <span className="home__row-name">XMB</span>
          <span className="home__row-desc"> · this site as a PS3 menu</span>
        </span>
        <span className="home__row-meta">Console</span>
      </Link>
    </div>
  );
}
