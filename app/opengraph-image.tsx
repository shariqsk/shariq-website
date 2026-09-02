import { ImageResponse } from 'next/og';

export const alt = 'Shariq Khan — founder and full-stack developer';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

/* Generated at build time so link previews match the site instead of
   pointing at a file that was never in the repo. */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: '#0e0e11',
          padding: '72px 76px',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <div style={{ width: 12, height: 12, borderRadius: 6, background: '#d95c8a' }} />
          <div style={{ fontSize: 26, color: '#8b8b8b', letterSpacing: 2 }}>SHARIQSK.COM</div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ fontSize: 88, color: '#ededed', letterSpacing: -2, lineHeight: 1.05 }}>
            Shariq Khan
          </div>
          <div style={{ fontSize: 36, color: '#8b8b8b', marginTop: 14 }}>
            Founder &amp; full-stack developer, Toronto
          </div>
        </div>

        <div style={{ display: 'flex', gap: 40, fontSize: 24, color: '#5a5a5a' }}>
          <div>Sandbox Simulator · 9,000+ users</div>
          <div>Zocratic MMA</div>
          <div>PostBridge</div>
        </div>
      </div>
    ),
    size,
  );
}
