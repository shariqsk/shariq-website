import { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Projects - Shariq Safdar Khan",
  description: "Explore Shariq Safdar Khan's projects in cybersecurity, web development, and full-stack applications. See my work in secure software development and innovative solutions.",
  keywords: [
    "Projects",
    "Shariq Safdar Khan",
    "Web Development",
    "Cybersecurity",
    "Full-Stack Development",
    "Portfolio",
    "Software Projects",
    "Security Projects"
  ],
  openGraph: {
    title: "Projects - Shariq Safdar Khan",
    description: "Explore Shariq Safdar Khan's projects in cybersecurity, web development, and full-stack applications. See my work in secure software development and innovative solutions.",
    url: `${siteConfig.url}/projects`,
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Projects - Shariq Safdar Khan",
    description: "Explore Shariq Safdar Khan's projects in cybersecurity, web development, and full-stack applications.",
  },
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
