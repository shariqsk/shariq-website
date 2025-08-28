import { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Contact - Shariq Safdar Khan",
  description: "Get in touch with Shariq Safdar Khan - Computer Security Student at York University & Full-Stack Developer. Available for collaborations, opportunities, and discussions about cybersecurity and development.",
  keywords: [
    "Contact",
    "Shariq Safdar Khan",
    "Get in Touch",
    "Collaboration",
    "Opportunities",
    "Cybersecurity",
    "Full-Stack Development",
    "York University"
  ],
  openGraph: {
    title: "Contact - Shariq Safdar Khan",
    description: "Get in touch with Shariq Safdar Khan - Computer Security Student at York University & Full-Stack Developer. Available for collaborations, opportunities, and discussions about cybersecurity and development.",
    url: `${siteConfig.url}/contact`,
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Contact - Shariq Safdar Khan",
    description: "Get in touch with Shariq Safdar Khan - Computer Security Student at York University & Full-Stack Developer.",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
