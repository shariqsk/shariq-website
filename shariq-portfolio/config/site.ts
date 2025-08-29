export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Shariq Khan | Portfolio",
  description: "Shariq Khan - Computer Security Student at York University & Full-Stack Developer. Passionate about cybersecurity and building secure, scalable applications.",
  url: "https://shariqsafdarkhan.com",
  ogImage: "https://shariqsafdarkhan.com/og-image.jpg",
  keywords: [
    "Shariq Khan",
    "Shariq Safdar Khan",
    "Shariq S. Khan",
    "Computer Security",
    "Cybersecurity",
    "Full-Stack Developer",
    "York University",
    "Portfolio",
    "Web Development",
    "Security",
    "Import Analyst",
    "Farrow",
    "Toronto Developer",
    "Canadian Developer",
    "Software Engineer"
  ],
  author: "Shariq Khan",
  creator: "Shariq Khan",
  publisher: "Shariq Khan",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://shariqsafdarkhan.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://shariqsafdarkhan.com",
    title: "Shariq Khan | Portfolio",
    description: "Shariq Khan - Computer Security Student at York University & Full-Stack Developer. Passionate about cybersecurity and building secure, scalable applications.",
    siteName: "Shariq Khan Portfolio",
    images: [
      {
        url: "https://shariqsafdarkhan.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Shariq Khan | Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shariq Khan | Portfolio",
    description: "Shariq Khan - Computer Security Student at York University & Full-Stack Developer. Passionate about cybersecurity and building secure, scalable applications.",
    images: ["https://shariqsafdarkhan.com/og-image.jpg"],
    creator: "@shariqsk",
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
      label: "Projects",
      href: "/projects",
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
      label: "Projects",
      href: "/projects",
    },
    {
      label: "Contact",
      href: "/contact",
    },
    {
      label: "Resume",
      href: "https://drive.google.com/file/d/1U9dGVpkArAHfgTKGVfEm_3nufE68Ea_L/view?usp=sharing",
    },
  ],
  links: {
    github: "https://github.com/shariqsk",
    linkedin: "https://www.linkedin.com/in/shariq-khan-430754217/",
    email: "mailto:contact@shariqsk.com",
    phone: "",
    blog: "https://shariqsk.github.io/",
    resume: "https://drive.google.com/file/d/1U9dGVpkArAHfgTKGVfEm_3nufE68Ea_L/view?usp=sharing",
  },
};
