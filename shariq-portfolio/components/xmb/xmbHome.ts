/* The XMB is the root on the home.* subdomain, and /xmb everywhere else. */
export function xmbHome(): string {
  if (typeof window !== 'undefined' && window.location.host.startsWith('home.')) {
    return '/';
  }
  return '/xmb';
}
