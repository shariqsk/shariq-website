let clickAudio: HTMLAudioElement | null = null;
let typeAudio: HTMLAudioElement | null = null;

function getClick(): HTMLAudioElement {
  if (!clickAudio) {
    clickAudio = new Audio('/mouseclick.mp3');
    clickAudio.volume = 0.6;
  }
  return clickAudio;
}

function getType(): HTMLAudioElement {
  if (!typeAudio) {
    typeAudio = new Audio('/keyboardclick.mp3');
    typeAudio.volume = 0.5;
  }
  return typeAudio;
}

export function playClick() {
  try {
    const a = getClick();
    a.currentTime = 0;
    a.play().catch(() => {});
  } catch { /* SSR / blocked */ }
}

export function playType() {
  try {
    const a = getType();
    a.currentTime = 0;
    a.play().catch(() => {});
  } catch { /* SSR / blocked */ }
}
