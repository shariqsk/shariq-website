import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

/* When the site is reached on the `home.` subdomain, serve the XMB as the
 * root. Harmless until that subdomain + DNS is set up — the host never
 * matches on the normal domain, so nothing changes there. */
export function middleware(req: NextRequest) {
  const host = req.headers.get('x-forwarded-host') ?? req.headers.get('host') ?? '';
  if (host.startsWith('home.') && req.nextUrl.pathname === '/') {
    const url = req.nextUrl.clone();
    url.pathname = '/xmb';
    return NextResponse.rewrite(url);
  }
  return NextResponse.next();
}

export const config = {
  matcher: ['/'],
};
