import { siteConfig } from '@/config/site'

export const generateStructuredData = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Shariq Khan",
    "alternateName": ["Shariq Safdar Khan", "Shariq S. Khan"],
    "givenName": "Shariq",
    "familyName": "Khan",
    "url": siteConfig.url,
    "image": `${siteConfig.url}/og-image.jpg`,
    "sameAs": [
      siteConfig.links.github,
      siteConfig.links.linkedin,
      siteConfig.links.blog
    ],
    "jobTitle": "Full-Stack Developer & Computer Security Student",
    "worksFor": {
      "@type": "Organization",
      "name": "York University",
      "url": "https://www.yorku.ca"
    },
    "alumniOf": {
      "@type": "Organization",
      "name": "York University",
      "url": "https://www.yorku.ca"
    },
    "knowsAbout": [
      "Computer Security",
      "Cybersecurity",
      "Full-Stack Development",
      "Web Development",
      "Software Engineering",
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "Database Design",
      "API Development",
      "Frontend Development",
      "Backend Development"
    ],
    "description": siteConfig.description,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Toronto",
      "addressRegion": "Ontario",
      "addressCountry": "CA"
    },
    "nationality": "Canadian",
    "knowsLanguage": "English",
    "hasOccupation": {
      "@type": "Occupation",
      "name": "Full-Stack Developer",
      "occupationLocation": {
        "@type": "City",
        "name": "Toronto"
      }
    }
  }

  return structuredData
}

export const generateWebsiteStructuredData = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": siteConfig.name,
    "url": siteConfig.url,
    "description": siteConfig.description,
    "author": {
      "@type": "Person",
      "name": siteConfig.author
    },
    "publisher": {
      "@type": "Person",
      "name": siteConfig.publisher
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `${siteConfig.url}/search?q={search_term_string}`
      },
      "query-input": "required name=search_term_string"
    },
    "inLanguage": "en-US",
    "isAccessibleForFree": true
  }

  return structuredData
}

export const generateBreadcrumbStructuredData = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": siteConfig.url
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "About",
        "item": `${siteConfig.url}/about`
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Projects",
        "item": `${siteConfig.url}/projects`
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Contact",
        "item": `${siteConfig.url}/contact`
      }
    ]
  }

  return structuredData
}
