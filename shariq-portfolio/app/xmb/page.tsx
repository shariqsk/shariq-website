'use client';

import dynamic from 'next/dynamic';

const XMB = dynamic(() => import('@/components/xmb/XMB'), { ssr: false });

export default function XmbPage() {
  return <XMB />;
}
