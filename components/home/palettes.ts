/* One palette is drawn per page load and shared by the intro and the name
   scramble, so a refresh changes the mood of both together. Client only:
   picking during render would desync the server and client markup. */

export interface Palette {
  name: string;
  colors: string[];
}

export const PALETTES: Palette[] = [
  { name: 'sakura',   colors: ['#f9d3e3', '#f0a1c0', '#d95c8a', '#a32d5c'] },
  { name: 'ember',    colors: ['#ffd9a8', '#ffab6b', '#f4713b', '#c03d18'] },
  { name: 'ice',      colors: ['#d3f0ff', '#8fd6f7', '#43a8de', '#1f6c99'] },
  { name: 'moss',     colors: ['#dcefcb', '#a8d88c', '#5fae57', '#2f7a45'] },
  { name: 'violet',   colors: ['#e6dcff', '#bda6f7', '#8b5cf6', '#5b32c4'] },
  { name: 'citrus',   colors: ['#fff0b8', '#ffd25e', '#f2a63b', '#c46f14'] },
  { name: 'lagoon',   colors: ['#ccf5ea', '#7fd9c4', '#31b39a', '#177a69'] },
];

let current: Palette | null = null;

export function loadPalette(): Palette {
  if (!current) current = PALETTES[Math.floor(Math.random() * PALETTES.length)];

  return current;
}
