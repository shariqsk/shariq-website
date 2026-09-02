export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Shariq Khan",
  description:
    "Founder and full-stack developer in Toronto. Building Sandbox Simulator, a world-building sim with 9,000+ registered users, and Zocratic MMA, a UFC fight prediction platform.",
  url: "https://shariqsk.com",
  keywords: [
    "Shariq Khan",
    "Shariq Safdar Khan",
    "Shariq Khan Toronto",
    "Shariq Khan developer",
    "Sandbox Simulator",
    "Zocratic MMA",
    "PostBridge",
    "Founder",
    "Full-stack developer",
    "Next.js developer",
    "FastAPI",
    "Computer security",
    "York University",
    "Toronto",
  ],

  author: "Shariq Khan",
  creator: "Shariq Khan",
  publisher: "Shariq Khan",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://shariqsk.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://shariqsk.com",
    title: "Shariq Khan — Founder & Full-Stack Developer",
    description:
      "Building Sandbox Simulator, a world-building sim with 9,000+ registered users, and Zocratic MMA, a UFC fight prediction platform. Toronto.",
    siteName: "Shariq Khan",
  },
  twitter: {
    card: "summary_large_image" as const,
    title: "Shariq Khan — Founder & Full-Stack Developer",
    description:
      "Building Sandbox Simulator, a world-building sim with 9,000+ registered users, and Zocratic MMA, a UFC fight prediction platform. Toronto.",
    creator: "@shariqssk",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large" as const,
      "max-snippet": -1,
    },
  },
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "About",
      href: "/about",
    },
    {
      label: "Resume",
      href: "https://drive.google.com/file/d/1H5M6Sb37TZRIOJMfOq-Xcll-08tHYv5x/view?usp=sharing",
    },
    {
      label: "Contact",
      href: "/contact",
    },
  ],
  navMenuItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "About",
      href: "/about",
    },
    {
      label: "Resume",
      href: "https://drive.google.com/file/d/1H5M6Sb37TZRIOJMfOq-Xcll-08tHYv5x/view?usp=sharing",
    },
    {
      label: "Contact",
      href: "/contact",
    },
  ],
  links: {
    github: "https://github.com/shariqsk",
    linkedin: "https://www.linkedin.com/in/shariq-khan-430754217/",
    email: "mailto:00khanshariq@gmail.com",
    phone: "",
    blog: "https://shariqsk.github.io/",
    resume: "https://drive.google.com/file/d/1H5M6Sb37TZRIOJMfOq-Xcll-08tHYv5x/view?usp=sharing",
  },
};
