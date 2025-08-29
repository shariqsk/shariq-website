import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Shariq Khan | Full-Stack Developer & Cybersecurity Expert',
  description: 'Learn more about Shariq Khan - Computer Security Student at York University, Full-Stack Developer, and Import Analyst at Farrow. Based in Toronto, Canada.',
  keywords: [
    'Shariq Khan',
    'Shariq Khan About',
    'Shariq Khan York University',
    'Shariq Khan Toronto',
    'Shariq Khan Computer Security',
    'Shariq Khan Full Stack Developer',
    'Shariq Khan Farrow',
    'Shariq Khan Import Analyst',
    'Shariq Khan Canada',
    'Shariq Khan Portfolio',
    'Computer Security Student',
    'York University Student',
    'Toronto Developer',
    'Cybersecurity Expert'
  ],
  openGraph: {
    title: 'About Shariq Khan | Full-Stack Developer & Cybersecurity Expert',
    description: 'Learn more about Shariq Khan - Computer Security Student at York University, Full-Stack Developer, and Import Analyst at Farrow. Based in Toronto, Canada.',
    url: 'https://shariqsafdarkhan.com/about',
    type: 'profile',
    images: [
      {
        url: 'https://shariqsafdarkhan.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Shariq Khan - Full-Stack Developer & Cybersecurity Expert',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Shariq Khan | Full-Stack Developer & Cybersecurity Expert',
    description: 'Learn more about Shariq Khan - Computer Security Student at York University, Full-Stack Developer, and Import Analyst at Farrow. Based in Toronto, Canada.',
    images: ['https://shariqsafdarkhan.com/og-image.jpg'],
  },
  alternates: {
    canonical: '/about',
  },
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
