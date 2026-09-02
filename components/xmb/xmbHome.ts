/* The XMB is the root on the home.* subdomain, and /xmb everywhere else. */
export function xmbHome(): string {
  if (typeof window !== 'undefined' && window.location.host.startsWith('home.')) {
    return '/';
  }
  return '/xmb';
}

/* The landing page. On the home.* subdomain "/" is the XMB itself, so going
   home from there means dropping the subdomain. */
export function siteHome(): string {
  if (typeof window !== 'undefined' && window.location.host.startsWith('home.')) {
    return `${window.location.protocol}//${window.location.host.slice('home.'.length)}/`;
  }
  return '/';
}
