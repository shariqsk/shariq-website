import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

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
