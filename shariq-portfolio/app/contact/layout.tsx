import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with Shariq Khan - Full-Stack Developer and Computer Security Student. Available for freelance work, collaborations, and opportunities in Toronto, Canada.',
  keywords: [
    'Contact Shariq Khan',
    'Shariq Khan Contact',
    'Shariq Khan Email',
    'Shariq Khan Toronto',
    'Shariq Khan Freelance',
    'Shariq Khan Developer Contact',
    'Shariq Khan Hire',
    'Shariq Khan Full Stack Developer Contact',
    'Shariq Khan York University Contact',
    'Shariq Khan Canada Contact',
    'Toronto Developer Contact',
    'Full Stack Developer Toronto',
    'Computer Security Student Contact',
    'Web Developer Toronto',
    'React Developer Contact',
    'Next.js Developer Contact'
  ],
  openGraph: {
    title: 'Contact',
    description: 'Get in touch with Shariq Khan - Full-Stack Developer and Computer Security Student. Available for freelance work, collaborations, and opportunities in Toronto, Canada.',
    url: 'https://shariqsafdarkhan.com/contact',
    type: 'website',
    images: [
      {
        url: 'https://shariqsafdarkhan.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Contact Shariq Khan - Computer Security Student',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact',
    description: 'Get in touch with Shariq Khan - Full-Stack Developer and Computer Security Student. Available for freelance work, collaborations, and opportunities in Toronto, Canada.',
    images: ['https://shariqsafdarkhan.com/og-image.jpg'],
  },
  alternates: {
    canonical: '/contact',
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
