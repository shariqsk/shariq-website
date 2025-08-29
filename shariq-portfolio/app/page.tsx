'use client';

import { motion } from 'framer-motion';
import { Button } from '@heroui/button';
import { Link } from '@heroui/link';
import { Github, Linkedin, Mail, Terminal, Eye, User } from 'lucide-react';
import React from 'react';
import Script from 'next/script';

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Shariq Safdar Khan",
    "alternateName": ["Shariq Khan", "Shariq S. Khan", "Shariq Safdar Khan"],
    "jobTitle": "Computer Security Student & Full-Stack Developer",
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "York University"
    },
    "description": "Shariq Khan - Computer Security Student at York University & Full-Stack Developer. Passionate about cybersecurity and building secure, scalable applications.",
    "url": "https://shariqsafdarkhan.com",
    "sameAs": [
      "https://github.com/shariqsk",
      "https://www.linkedin.com/in/shariq-khan-430754217/",
      "https://shariqsk.github.io/"
    ],
    "email": "contact@shariqsk.com",
    "telephone": "",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "CA"
    },
    "knowsAbout": [
      "Computer Security",
      "Cybersecurity",
      "Full-Stack Development",
      "Web Development",
      "Software Development",
      "Import Analysis",
      "Shariq Khan",
      "Shariq Safdar Khan"
    ],
    "worksFor": {
      "@type": "Organization",
      "name": "Farrow"
    },
    "additionalName": "Shariq Khan"
  };

  return (
    <>
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
             <div className="relative min-h-screen px-4 pt-24 sm:pt-28 pb-8 overflow-hidden flex items-center justify-center">
         <div className="w-full max-w-4xl mx-auto relative z-10">


          {/* Main Terminal Window */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="bg-black/60 backdrop-blur-sm border border-emerald-500/30 rounded-lg p-4 sm:p-5 md:p-6 mb-4 sm:mb-5 md:mb-6 relative overflow-hidden"
          >
            {/* Terminal Header */}
            <div className="flex items-center gap-2 mb-3 sm:mb-4">
              <span className="text-emerald-400 text-xs font-mono">welcome.sh</span>
            </div>

            {/* Terminal Content */}
            <div className="space-y-3 sm:space-y-4 font-mono">
              <div className="flex items-start gap-2">
                <span className="text-emerald-400 text-sm sm:text-base">{'>'}</span>
                <span className="text-white text-sm sm:text-base">Greetings!</span>
              </div>
              
              <div className="ml-4 text-emerald-300 text-sm sm:text-base">
                I'm Shariq Khan
              </div>

              <div className="flex items-start gap-2">
                <span className="text-emerald-400 text-sm sm:text-base">{'>'}</span>
                <span className="text-white text-sm sm:text-base">Status</span>
              </div>
              
              <div className="ml-4 text-white text-xs sm:text-sm leading-relaxed">
                Computer Security Student at York University & Full-Stack Developer
                <br />
                Currently working on{' '}
                <Link href="https://www.zocraticmma.com" target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:text-emerald-300 underline font-medium transition-colors duration-300 hover:scale-105 inline-block">
                  Zocratic MMA
                </Link>
              </div>

              <div className="flex items-start gap-2">
                <span className="text-emerald-400 text-sm sm:text-base">{'>'}</span>
                <span className="text-white text-sm sm:text-base">Intro</span>
              </div>
              
              <div className="ml-4 text-white text-xs sm:text-sm leading-relaxed">
                <p>
                  I'm passionate about cybersecurity and building secure, scalable applications. Currently working as an Import Analyst at Farrow while pursuing Computer Security at York University. 
                  I also write about tech and security on my{' '}
                  <Link href="https://shariqsk.github.io/" target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:text-emerald-300 underline font-medium transition-colors duration-300 hover:scale-105 inline-block">
                    blog
                  </Link>. Always open to chat and{' '}
                  <Link href="/contact" className="text-emerald-400 hover:text-emerald-300 underline font-medium transition-colors duration-300 hover:scale-105 inline-block">
                    collaborations
                  </Link>!
                </p>
              </div>

              <div className="flex items-start gap-2">
                <span className="text-emerald-400 text-sm sm:text-base">{'>'}</span>
                <span className="text-white text-sm sm:text-base">Actions</span>
              </div>
              
              <div className="ml-4">
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 justify-center">
                  <Button 
                    as={Link} 
                    href="/projects" 
                    className="bg-gradient-to-r from-emerald-600 to-cyan-600 text-white px-3 sm:px-4 md:px-5 py-2 sm:py-2.5 rounded-md transition-all duration-300 font-semibold shadow-lg hover:shadow-emerald-500/25 flex items-center justify-center gap-2 text-xs sm:text-sm font-mono border border-emerald-500/30 hover:scale-105"
                  >
                    <Terminal className="w-3 h-3 sm:w-4 sm:h-4" />
                    <span>View Projects</span>
                  </Button>
                  <Button 
                    as={Link} 
                    href="/about" 
                    className="bg-black/40 hover:bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 px-3 sm:px-4 md:px-5 py-2 sm:py-2.5 rounded-md transition-all duration-300 font-semibold flex items-center justify-center gap-2 text-xs sm:text-sm font-mono hover:scale-105"
                  >
                    <Eye className="w-3 h-3 sm:w-4 sm:h-4" />
                    <span>About Me</span>
                  </Button>
                  <Button 
                    as={Link} 
                    href="/contact"
                    className="bg-black/40 hover:bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 px-3 sm:px-4 md:px-5 py-2 sm:py-2.5 rounded-md transition-all duration-300 font-semibold flex items-center justify-center gap-2 text-xs sm:text-sm font-mono hover:scale-105"
                  >
                    <Mail className="w-3 h-3 sm:w-4 sm:h-4" />
                    <span>Contact</span>
                  </Button>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <span className="text-emerald-400 text-sm sm:text-base">{'>'}</span>
                <span className="text-white text-sm sm:text-base">Social</span>
              </div>
              
              <div className="ml-4">
                <div className="flex justify-center gap-3 sm:gap-4">
                  {[
                    { icon: Github, href: 'https://github.com/shariqsk', label: 'GitHub' },
                    { icon: Linkedin, href: 'https://www.linkedin.com/in/shariq-khan-430754217/', label: 'LinkedIn' },
                    { icon: Mail, href: 'mailto:contact@shariqsk.com', label: 'Email' },
                  ].map((social, i) => (
                    <a
                      key={social.label}
                      href={social.href}
                      className="w-8 h-8 sm:w-10 sm:h-10 rounded-md bg-black/40 hover:bg-emerald-500/30 border border-emerald-500/40 hover:border-emerald-500/60 flex items-center justify-center text-emerald-400 transition-all duration-300 shadow-lg hover:shadow-emerald-500/25 backdrop-blur-sm hover:scale-110"
                      title={social.label}
                      aria-label={social.label}
                    >
                      <social.icon className="w-3 h-3 sm:w-4 sm:h-4" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Security Badge */}
            <div className="absolute top-2 sm:top-3 md:top-4 right-2 sm:right-3 md:right-4">
              <div className="bg-emerald-500/20 border border-emerald-500/40 rounded-md px-1.5 sm:px-2 py-0.5 sm:py-1">
                <div className="flex items-center gap-1">
                  <User className="w-2 h-2 sm:w-3 sm:h-3 text-emerald-400" />
                  <span className="text-emerald-400 text-xs font-mono">ACTIVE</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}
