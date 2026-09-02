import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import clsx from "clsx";

import { Providers } from "./providers";
import Analytics from "./analytics";

import { siteConfig } from "@/config/site";
import { fontSans, fontMono, fontPixel, fontUi } from "@/config/fonts";

export const metadata: Metadata = {
  title: {
    default: "Shariq Khan | Home",
    template: `Shariq Khan | %s`,
  },
  description: "Shariq Khan - Computer Security Student at York University & Full-Stack Developer. Building secure, scalable applications. Based in Toronto, Canada.",
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
    "Full-Stack Developer",
    "Software Engineer",
    "York University",
    "Toronto Developer",
    "Canadian Developer",
    "Portfolio",
    "Web Development",
    "Security",
  ],
  authors: [{ name: siteConfig.author }],
  creator: siteConfig.creator,
  publisher: siteConfig.publisher,
  formatDetection: siteConfig.formatDetection,
  metadataBase: siteConfig.metadataBase,
  openGraph: {
    ...siteConfig.openGraph,
    siteName: siteConfig.name,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    ...siteConfig.twitter,
    site: "@shariqssk",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
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
};

export const viewport: Viewport = {
  themeColor: "#0a0800",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <body
        className={clsx(
          "antialiased",
          fontSans.variable,
          fontMono.variable,
          fontPixel.variable,
          fontUi.variable,
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark", enableSystem: true }}>
          {children}
        </Providers>
        <Analytics />
      </body>
    </html>
  );
}
