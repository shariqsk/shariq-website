'use client';

import { motion } from 'framer-motion';
import { Button } from '@heroui/button';
import { Link } from '@heroui/link';
import { Github, Linkedin, Mail, Shield, Terminal, Lock, FileText, Code2, ExternalLink } from 'lucide-react';
import Script from 'next/script';
import { siteConfig } from '@/config/site';

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
    "email": "contact@shariqsafdarkhan.com",
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

  const skills = [
    { name: "Cybersecurity", icon: Shield },
    { name: "Full-Stack Dev", icon: Code2 },
    { name: "Security Architecture", icon: Lock },
    { name: "Web Development", icon: Terminal },
  ];

  return (
    <>
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <div className="relative min-h-screen px-4 sm:px-6 md:px-8 pt-24 sm:pt-28 md:pt-32 pb-16 overflow-hidden flex items-center justify-center">
        <div className="w-full max-w-3xl md:max-w-4xl">
          
          {/* Main Terminal Window */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="bg-black/60 backdrop-blur-xl border border-emerald-500/30 rounded-2xl p-6 sm:p-8 md:p-10 relative overflow-hidden min-h-[600px] md:min-h-[700px]"
          >
            {/* Header Bar */}
            <div className="flex items-center justify-between mb-6 sm:mb-8 pb-4 border-b border-emerald-500/20">
              <div className="flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Terminal className="w-4 h-4 text-emerald-400" />
                <span className="text-emerald-400 font-mono text-xs sm:text-sm">welcome.sh</span>
              </div>
            </div>

            {/* Terminal Content */}
            <div className="space-y-5 sm:space-y-6 md:space-y-7 font-mono">
              
              {/* Greeting */}
              <div className="flex items-start gap-2">
                <span className="text-emerald-400 text-sm sm:text-base font-mono">{">"}</span>
                <div className="flex-1">
                  <span className="text-white text-sm sm:text-base font-thin">whoami</span>
                </div>
              </div>
              
              <div className="ml-4 pl-4 border-l border-emerald-500/20">
                <h1 className="text-2xl sm:text-3xl md:text-4xl text-white font-thin mb-2">Shariq Khan</h1>
                <p className="text-emerald-400/90 text-base sm:text-lg md:text-xl font-light mb-3">Computer Security Student & Full-Stack Developer</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-emerald-500/10 border border-emerald-500/30 rounded-full text-emerald-400/90 text-xs sm:text-sm font-light">
                    York University
                  </span>
                  <span className="px-3 py-1 bg-emerald-500/10 border border-emerald-500/30 rounded-full text-emerald-400/90 text-xs sm:text-sm font-light">
                    Farrow
                  </span>
                  <span className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-400/90 text-xs sm:text-sm font-light flex items-center gap-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                    Available
                  </span>
                </div>
              </div>

              {/* About Section */}
              <div className="flex items-start gap-2">
                <span className="text-emerald-400 text-sm sm:text-base font-mono">{">"}</span>
                <span className="text-white text-sm sm:text-base font-thin">cat bio.txt</span>
              </div>
              
              <div className="ml-4 text-zinc-300 font-light text-sm sm:text-base leading-relaxed space-y-2">
                <p>
                  Passionate about cybersecurity and building secure, scalable applications. Currently pursuing Computer Security at York University while working as an Import Analyst at Farrow.
                </p>
                <p>
                  I write about tech and security on my{' '}
                  <Link 
                    href="https://shariqsk.github.io/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2 transition-colors duration-300"
                  >
                    blog
                  </Link>
                  {' '}and always open to{' '}
                  <Link 
                    href="/contact" 
                    className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2 transition-colors duration-300"
                  >
                    collaborations
                  </Link>.
                </p>
              </div>

              {/* Skills Section */}
              <div className="flex items-start gap-2">
                <span className="text-emerald-400 text-sm sm:text-base font-mono">{">"}</span>
                <span className="text-white text-sm sm:text-base font-thin">ls expertise/</span>
              </div>
              
              <div className="ml-4 grid grid-cols-2 gap-3 sm:gap-4">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + index * 0.1, duration: 0.3 }}
                    className="p-3 sm:p-4 bg-emerald-500/5 border border-emerald-500/20 rounded-xl hover:border-emerald-500/40 hover:bg-emerald-500/10 transition-all duration-300"
                  >
                    <div className="flex items-center gap-2">
                      <skill.icon className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400" />
                      <span className="text-white text-xs sm:text-sm font-light">{skill.name}</span>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Current Work */}
              <div className="flex items-start gap-2">
                <span className="text-emerald-400 text-sm sm:text-base font-mono">{">"}</span>
                <span className="text-white text-sm sm:text-base font-thin">./current_project.sh</span>
              </div>
              
              <div className="ml-4 p-4 sm:p-5 bg-gradient-to-br from-emerald-500/5 to-cyan-500/5 border border-emerald-500/20 rounded-xl">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <div>
                    <p className="text-zinc-500 text-xs sm:text-sm font-extralight mb-1">Currently Building</p>
                    <Link 
                      href="https://www.zocraticmma.com" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-white text-base sm:text-lg md:text-xl font-light hover:text-emerald-400 transition-colors duration-300 flex items-center gap-2"
                    >
                      Zocratic MMA
                      <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 text-emerald-400" />
                    </Link>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1.5 bg-emerald-500/10 border border-emerald-500/30 rounded-full">
                    <Terminal className="w-3 h-3 sm:w-4 sm:h-4 text-emerald-400" />
                    <span className="text-emerald-400 text-xs font-light">Active</span>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-start gap-2">
                <span className="text-emerald-400 text-sm sm:text-base font-mono">{">"}</span>
                <span className="text-white text-sm sm:text-base font-thin">./explore.sh</span>
              </div>
              
              <div className="ml-4">
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                  <Button 
                    as={Link} 
                    href="/projects" 
                    className="bg-gradient-to-r from-emerald-600 to-cyan-600 text-white px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 rounded-lg transition-all duration-300 font-normal text-sm sm:text-base shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/30 hover:scale-105 flex items-center justify-center gap-2"
                  >
                    <Terminal className="w-4 h-4" />
                    <span>View Projects</span>
                  </Button>
                  <Button 
                    as={Link} 
                    href="/about" 
                    className="bg-black/40 hover:bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 rounded-lg transition-all duration-300 font-normal text-sm sm:text-base hover:border-emerald-500/50 flex items-center justify-center gap-2"
                  >
                    <Shield className="w-4 h-4" />
                    <span>About Me</span>
                  </Button>
                  <Button
                    as={Link} 
                    href={siteConfig.links.resume} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-black/40 hover:bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 rounded-lg transition-all duration-300 font-normal text-sm sm:text-base hover:border-emerald-500/50 flex items-center justify-center gap-2"
                  >
                    <FileText className="w-4 h-4" />
                    <span>Resume</span>
                  </Button>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex items-start gap-2">
                <span className="text-emerald-400 text-sm sm:text-base font-mono">{">"}</span>
                <span className="text-white text-sm sm:text-base font-thin">./connect.sh</span>
              </div>
              
              <div className="ml-4">
                <div className="flex gap-3 sm:gap-4">
                  {[
                    { icon: Github, href: 'https://github.com/shariqsk', label: 'GitHub' },
                    { icon: Linkedin, href: 'https://www.linkedin.com/in/shariq-khan-430754217/', label: 'LinkedIn' },
                    { icon: Mail, href: 'mailto:contact@shariqsafdarkhan.com', label: 'Email' },
                  ].map((social, i) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-black/40 hover:bg-emerald-500/20 border border-emerald-500/30 hover:border-emerald-500/50 flex items-center justify-center text-emerald-400 transition-all duration-300 hover:scale-110"
                      title={social.label}
                      aria-label={social.label}
                    >
                      <social.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>

            </div>

            {/* Terminal Footer */}
            <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-zinc-600 font-mono">
              <span>~/portfolio</span>
              <span className="flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>Ready</span>
              </span>
            </div>
          </motion.div>

        </div>
      </div>
    </>
  );
}
