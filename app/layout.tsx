import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import clsx from "clsx";

import { Providers } from "./providers";
import Analytics from "./analytics";

import { siteConfig } from "@/config/site";
import { fontSans, fontMono, fontPixel, fontUi } from "@/config/fonts";

export const metadata: Metadata = {
  title: {
    default: "Shariq Khan — Founder & Full-Stack Developer",
    template: "Shariq Khan | %s",
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.author, url: siteConfig.url }],
  creator: siteConfig.creator,
  publisher: siteConfig.publisher,
  formatDetection: siteConfig.formatDetection,
  metadataBase: siteConfig.metadataBase,
  alternates: siteConfig.alternates,
  openGraph: siteConfig.openGraph,
  twitter: siteConfig.twitter,
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
