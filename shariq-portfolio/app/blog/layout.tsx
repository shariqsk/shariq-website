import { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Blog - Shariq Safdar Khan",
  description: "Read Shariq Safdar Khan's blog posts about cybersecurity, technology, and development. Insights from a Computer Security Student at York University & Full-Stack Developer.",
  keywords: [
    "Blog",
    "Shariq Safdar Khan",
    "Cybersecurity",
    "Technology",
    "Development",
    "Computer Security",
    "York University",
    "Full-Stack Development"
  ],
  openGraph: {
    title: "Blog - Shariq Safdar Khan",
    description: "Read Shariq Safdar Khan's blog posts about cybersecurity, technology, and development. Insights from a Computer Security Student at York University & Full-Stack Developer.",
    url: `${siteConfig.url}/blog`,
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Blog - Shariq Safdar Khan",
    description: "Read Shariq Safdar Khan's blog posts about cybersecurity, technology, and development.",
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
