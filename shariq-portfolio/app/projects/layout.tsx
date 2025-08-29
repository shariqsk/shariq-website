import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Explore Shariq Khan\'s projects - Full-Stack Developer and Computer Security Student. View web applications, cybersecurity projects, and software development work.',
  keywords: [
    'Shariq Khan Projects',
    'Shariq Khan Portfolio',
    'Shariq Khan Web Development',
    'Shariq Khan Software Projects',
    'Shariq Khan Full Stack Projects',
    'Shariq Khan Cybersecurity Projects',
    'Shariq Khan React Projects',
    'Shariq Khan Next.js Projects',
    'Shariq Khan Developer Portfolio',
    'Shariq Khan Toronto Projects',
    'Shariq Khan York University Projects',
    'Web Development Projects',
    'Full Stack Developer Portfolio',
    'Cybersecurity Projects',
    'React Developer Projects',
    'Next.js Developer Projects'
  ],
  openGraph: {
    title: 'Projects',
    description: 'Explore Shariq Khan\'s projects - Full-Stack Developer and Computer Security Student. View web applications, cybersecurity projects, and software development work.',
    url: 'https://shariqsafdarkhan.com/projects',
    type: 'website',
    images: [
      {
        url: 'https://shariqsafdarkhan.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Shariq Khan Projects - Computer Security Student',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Projects',
    description: 'Explore Shariq Khan\'s projects - Full-Stack Developer and Computer Security Student. View web applications, cybersecurity projects, and software development work.',
    images: ['https://shariqsafdarkhan.com/og-image.jpg'],
  },
  alternates: {
    canonical: '/projects',
  },
}

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
