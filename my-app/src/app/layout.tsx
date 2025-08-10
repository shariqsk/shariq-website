import type { Metadata } from "next";
import "./globals.css";
import BubbleNavigation from "./components/BubbleNavigation";

export const metadata: Metadata = {
  title: "Shariq | Mr. Robot Red — Portfolio",
  description:
    "York University student portfolio — red/black hacker aesthetic with smooth, performant animations and responsive layout.",
  keywords:
    "shariq, york university, portfolio, next.js, framer-motion, developer, designer, projects, mr robot, cyberpunk",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-background text-foreground antialiased">
        <main className="min-h-screen relative">
          {children}
          <BubbleNavigation />
        </main>
      </body>
    </html>
  );
}
