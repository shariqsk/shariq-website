import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SK-OS',
  description: 'A Windows 95 style desktop version of Shariq Khan\'s portfolio.',
};

export default function OsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
