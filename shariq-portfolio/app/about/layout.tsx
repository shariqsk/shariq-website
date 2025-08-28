import { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "About - Shariq Safdar Khan",
  description: "Learn more about Shariq Safdar Khan - Computer Security Student at York University & Full-Stack Developer. Discover my background, skills, and passion for cybersecurity.",
  keywords: [
    "About Shariq Safdar Khan",
    "Computer Security Student",
    "York University",
    "Full-Stack Developer",
    "Cybersecurity",
    "Portfolio",
    "Background",
    "Skills"
  ],
  openGraph: {
    title: "About - Shariq Safdar Khan",
    description: "Learn more about Shariq Safdar Khan - Computer Security Student at York University & Full-Stack Developer. Discover my background, skills, and passion for cybersecurity.",
    url: `${siteConfig.url}/about`,
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "About - Shariq Safdar Khan",
    description: "Learn more about Shariq Safdar Khan - Computer Security Student at York University & Full-Stack Developer.",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
