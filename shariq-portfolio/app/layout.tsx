import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import clsx from "clsx";

import { Providers } from "./providers";
import Analytics from "./analytics";

import { siteConfig } from "@/config/site";
import { fontSans, fontMono } from "@/config/fonts";
import Navbar from "@/components/navbar";
import CinematicBackground from "@/components/CinematicBackground";
import Footer from "@/components/footer";
import { generateStructuredData, generateWebsiteStructuredData, generateOrganizationStructuredData, generateSiteNavigationStructuredData, generateBreadcrumbStructuredData } from "./structured-data";

export const metadata: Metadata = {
  title: {
    default: "Shariq Khan | Home",
    template: `Shariq Khan | %s`,
  },
  description: "Shariq Khan - Computer Security Student at York University & Full-Stack Developer. Learning cybersecurity, web development, and building secure applications. Based in Toronto, Canada.",
  keywords: [
    "Shariq Khan",
    "Shariq Safdar Khan",
    "Shariq S. Khan",
    "Shariq Khan Developer",
    "Shariq Khan Toronto",
    "Shariq Khan York University",
    "Shariq Khan Computer Security Student",
    "Shariq Khan Full Stack Developer",
    "Shariq Khan Software Engineer",
    "Shariq Khan Portfolio",
    "Shariq Khan Web Developer",
    "Shariq Khan Canada",
    "Computer Security Student",
    "Cybersecurity Student",
    "Full-Stack Developer",
    "Web Developer",
    "Software Engineer",
    "York University",
    "Toronto Developer",
    "Canadian Developer",
    "Portfolio",
    "Web Development",
    "Security",
    "Import Analyst",
    "Farrow",
    "React Developer",
    "Next.js Developer",
    "TypeScript Developer",
    "Node.js Developer",
    "Database Developer",
    "API Developer",
    "Frontend Developer",
    "Backend Developer"
  ],
  authors: [{ name: siteConfig.author }],
  creator: siteConfig.creator,
  publisher: siteConfig.publisher,
  formatDetection: siteConfig.formatDetection,
  metadataBase: siteConfig.metadataBase,
  alternates: {
    canonical: "/",
    languages: {
      'en-US': '/en-US',
    },
  },
  openGraph: {
    ...siteConfig.openGraph,
    siteName: siteConfig.name,
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    ...siteConfig.twitter,
    site: '@shariqsk',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  category: "technology",
  classification: "Portfolio",
  other: {
    "msapplication-TileColor": "#000000",
    "theme-color": "#000000",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const structuredData = generateStructuredData();
  const websiteStructuredData = generateWebsiteStructuredData();
  const organizationStructuredData = generateOrganizationStructuredData();
  const siteNavigationStructuredData = generateSiteNavigationStructuredData();
  const breadcrumbStructuredData = generateBreadcrumbStructuredData();

  return (
    <html suppressHydrationWarning lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteStructuredData),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationStructuredData),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(siteNavigationStructuredData),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(breadcrumbStructuredData),
          }}
        />
      </head>
      <body
        className={clsx(
          "min-h-screen text-foreground bg-background font-sans antialiased w-full",
          fontSans.variable,
          fontMono.variable,
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <CinematicBackground />
          <Navbar />
          {children}
          <Footer />
        </Providers>
        <Analytics />
      </body>
    </html>
  );
}
