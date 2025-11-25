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
    "isAccessibleForFree": true,
    "mainEntity": {
      "@type": "Person",
      "name": "Shariq Khan",
      "url": siteConfig.url
    }
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
        "name": "Skills",
        "item": `${siteConfig.url}/skills`
      },
      {
        "@type": "ListItem",
        "position": 5,
        "name": "Blog",
        "item": `${siteConfig.url}/blog`
      },
      {
        "@type": "ListItem",
        "position": 6,
        "name": "Contact",
        "item": `${siteConfig.url}/contact`
      }
    ]
  }

  return structuredData
}

export const generateOrganizationStructuredData = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Shariq Khan Portfolio",
    "url": siteConfig.url,
    "logo": `${siteConfig.url}/og-image.jpg`,
    "description": siteConfig.description,
    "founder": {
      "@type": "Person",
      "name": "Shariq Khan"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "email": "contact@shariqsafdarkhan.com"
    },
    "sameAs": [
      siteConfig.links.github,
      siteConfig.links.linkedin,
      siteConfig.links.blog
    ]
  }

  return structuredData
}

export const generateSiteNavigationStructuredData = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Site Navigation",
    "description": "Main navigation sections of Shariq Khan's portfolio website",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "url": siteConfig.url,
        "description": "Main homepage with introduction and overview"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "About",
        "url": `${siteConfig.url}/about`,
        "description": "Detailed information about Shariq Khan's background, skills, and experience"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Projects",
        "url": `${siteConfig.url}/projects`,
        "description": "Portfolio of web development and software engineering projects"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Contact",
        "url": `${siteConfig.url}/contact`,
        "description": "Contact information and ways to get in touch"
      },
      {
        "@type": "ListItem",
        "position": 5,
        "name": "Resume",
        "url": siteConfig.links.resume,
        "description": "Professional resume and work experience"
      },
      {
        "@type": "ListItem",
        "position": 6,
        "name": "GitHub",
        "url": siteConfig.links.github,
        "description": "GitHub profile with code repositories and projects"
      },
      {
        "@type": "ListItem",
        "position": 7,
        "name": "LinkedIn",
        "url": siteConfig.links.linkedin,
        "description": "Professional LinkedIn profile"
      },
      {
        "@type": "ListItem",
        "position": 8,
        "name": "Blog",
        "url": siteConfig.links.blog,
        "description": "Technical blog and articles"
      }
    ]
  }

  return structuredData
}
