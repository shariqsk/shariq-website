'use client';

import { motion } from 'framer-motion';
import { Button } from '@heroui/button';
import { Link } from '@heroui/link';
import { Github, Linkedin, Mail, Shield, Terminal, Lock, FileText, Code2 } from 'lucide-react';
import { FaSquareXTwitter } from "react-icons/fa6";
import Script from 'next/script';
import { siteConfig } from '@/config/site';
import { useState, useEffect } from 'react';

export default function Home() {
  const [typedText, setTypedText] = useState('');
  const fullText = 'Shariq Khan';
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);
    return () => clearInterval(timer);
  }, []);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Shariq Safdar Khan",
    "alternateName": ["Shariq Khan", "Shariq S. Khan", "Shariq Safdar Khan"],
    "jobTitle": "Cybersecurity Student & Full-Stack Developer",
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "York University"
    },
    "description": "Shariq Khan - Cybersecurity Student at York University & Full-Stack Developer. Building secure, scalable applications.",
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
      
      <div className="relative min-h-screen px-4 sm:px-6 md:px-8 pt-24 sm:pt-28 md:pt-32 pb-16 overflow-hidden flex items-center justify-center">
        {/* Animated gradient background */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
            }}
            transition={{ 
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-emerald-500/15 rounded-full filter blur-[100px]"
          />
          <motion.div 
            animate={{ 
              scale: [1, 1.3, 1],
              rotate: [360, 180, 0],
            }}
            transition={{ 
              duration: 25,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-cyan-500/15 rounded-full filter blur-[100px]"
          />
        </div>

        <div className="w-full max-w-3xl md:max-w-4xl relative z-10">
          
          {/* Main Terminal Window */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
            className="bg-black/70 backdrop-blur-2xl border border-emerald-500/40 rounded-2xl p-6 sm:p-8 md:p-10 relative overflow-hidden min-h-[600px] md:min-h-[700px]"
          >
            {/* Animated scanline effect */}
            <div className="absolute inset-0 pointer-events-none">
              <motion.div
                animate={{ y: ['-100%', '100%'] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className="w-full h-1 bg-gradient-to-b from-transparent via-emerald-500/10 to-transparent"
              />
            </div>
            
            {/* Header Bar */}
            <div className="flex items-center justify-between mb-6 sm:mb-8 pb-4 border-b border-emerald-500/30">
              <div className="flex gap-1.5">
                <motion.div 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 260 }}
                  whileHover={{ scale: 1.2 }}
                  className="w-2.5 h-2.5 rounded-full bg-red-500/70 hover:bg-red-500 transition-colors cursor-pointer"
                />
                <motion.div 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.3, type: "spring", stiffness: 260 }}
                  whileHover={{ scale: 1.2 }}
                  className="w-2.5 h-2.5 rounded-full bg-yellow-500/70 hover:bg-yellow-500 transition-colors cursor-pointer"
                />
                <motion.div 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.4, type: "spring", stiffness: 260 }}
                  whileHover={{ scale: 1.2 }}
                  className="w-2.5 h-2.5 rounded-full bg-green-500/70 hover:bg-green-500 transition-colors cursor-pointer"
                />
              </div>
              <div className="flex items-center gap-2">
                <Terminal className="w-4 h-4 text-emerald-400" />
                <span className="text-emerald-400 font-mono text-xs sm:text-sm">welcome.sh</span>
              </div>
            </div>

            {/* Terminal Content */}
            <div className="space-y-5 sm:space-y-6 md:space-y-7 font-mono">
              
              {/* Greeting */}
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6, duration: 0.5, type: "spring" }}
                className="flex items-start gap-2"
              >
                <span className="text-emerald-400 text-sm sm:text-base font-mono">{">"}</span>
                <div className="flex-1">
                  <span className="text-white text-sm sm:text-base font-thin">whoami</span>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7, duration: 0.5, type: "spring" }}
                className="ml-4 pl-4 border-l border-emerald-500/30"
              >
                <motion.h1 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                  className="text-2xl sm:text-3xl md:text-4xl text-white font-thin mb-2 flex items-center gap-2"
                >
                  {typedText}
                  <motion.span 
                    animate={{ opacity: [1, 0] }}
                    transition={{ repeat: Infinity, duration: 0.8 }}
                    className="text-emerald-400"
                  >
                    |
                  </motion.span>
                </motion.h1>
                <motion.p 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.5, duration: 0.5 }}
                  className="text-emerald-400/90 text-base sm:text-lg md:text-xl font-light mb-3"
                >
                  Cybersecurity Student & Full-Stack Developer
                </motion.p>
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.6, duration: 0.5 }}
                  className="flex flex-wrap gap-2"
                >
                  {['York University'].map((tag, i) => (
                    <motion.span 
                      key={tag}
                      whileHover={{ 
                        scale: 1.05, 
                        y: -2,
                        backgroundColor: "rgba(16,185,129,0.2)"
                      }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 1.7 + i * 0.1, type: "spring" }}
                      className="px-3 py-1 bg-zinc-900/50 border border-zinc-800 rounded-full text-zinc-400 text-xs sm:text-sm font-light cursor-pointer transition-all duration-300 hover:border-emerald-500/50 hover:bg-emerald-500/10 hover:text-emerald-400"
                    >
                      {tag}
                    </motion.span>
                  ))}
                </motion.div>
              </motion.div>

              {/* Bio Section */}
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 2.0, duration: 0.5, type: "spring" }}
                className="flex items-start gap-2"
              >
                <span className="text-white text-sm sm:text-base font-thin">cat bio.txt</span>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.1, duration: 0.5, type: "spring" }}
                className="ml-4 text-zinc-300 font-light text-sm sm:text-base leading-relaxed space-y-3"
              >
                <motion.p 
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 2.2, duration: 0.4 }}
                >
                  I'm a 20-year-old Cybersecurity student at York University building secure, scalable applications with security-first practices.
                </motion.p>
                <motion.p 
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 2.3, duration: 0.4 }}
                >
                  My technical skills span full-stack development, system security analysis, and defensive cybersecurity practices. I focus on solving complex engineering challenges while maintaining security best practices.
                </motion.p>
                <motion.p 
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 2.4, duration: 0.4 }}
                  className="space-y-1"
                >
                  Whether you're looking for a developer who prioritizes security from the ground up or someone to collaborate on innovative tech projects, I'm always open to new chat!. Check out my{' '}
                  <Link 
                    href="/projects" 
                    className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2 decoration-emerald-500/30 hover:decoration-emerald-500 transition-all duration-300"
                  >
                    projects
                  </Link>
                  , view my{' '}
                  <Link 
                    href={siteConfig.links.resume} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2 decoration-emerald-500/30 hover:decoration-emerald-500 transition-all duration-300"
                  >
                    resume
                  </Link>
                  , or learn more{' '}
                  <Link 
                    href="/about" 
                    className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2 decoration-emerald-500/30 hover:decoration-emerald-500 transition-all duration-300"
                  >
                    about me
                  </Link>
                  . I also write about tech and security on my{' '}
                  <Link 
                    href="https://shariqsk.github.io/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2 decoration-emerald-500/30 hover:decoration-emerald-500 transition-all duration-300"
                  >
                    blog
                  </Link>
                  .
                </motion.p>
              </motion.div>

              {/* Connect Section */}
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 2.8, duration: 0.5, type: "spring" }}
                className="flex items-start gap-2"
              >
                <span className="text-white text-sm sm:text-base font-thin">./connect.sh</span>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.9, duration: 0.5, type: "spring" }}
                className="ml-4"
              >
                <div className="flex flex-wrap gap-4">
                  <a
                    href="https://github.com/shariqsk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-2 px-4 py-2 bg-zinc-900/60 border border-zinc-800 rounded-lg hover:bg-zinc-800 hover:border-zinc-700 hover:text-white transition-all duration-300"
                    title="GitHub"
                  >
                    <Github className="w-5 h-5 text-zinc-500 group-hover:text-emerald-400 transition-colors duration-300" />
                    <span className="text-sm font-light">GitHub</span>
                  </a>
                  <a
                    href="https://twitter.com/shariqssk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-2 px-4 py-2 bg-zinc-900/60 border border-zinc-800 rounded-lg hover:bg-zinc-800 hover:border-zinc-700 hover:text-white transition-all duration-300"
                    title="X (Twitter)"
                  >
                    <FaSquareXTwitter className="w-5 h-5 text-zinc-500 group-hover:text-white transition-colors duration-300" />
                    <span className="text-sm font-light">X</span>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/shariq-khan-430754217/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-2 px-4 py-2 bg-zinc-900/60 border border-zinc-800 rounded-lg hover:bg-[#0077b5]/20 hover:border-[#0077b5]/40 hover:text-white transition-all duration-300"
                    title="LinkedIn"
                  >
                    <Linkedin className="w-5 h-5 text-zinc-500 group-hover:text-white transition-colors duration-300" />
                    <span className="text-sm font-light">LinkedIn</span>
                  </a>
                  <a
                    href="mailto:contact@shariqsafdarkhan.com"
                    className="group flex items-center gap-2 px-4 py-2 bg-zinc-900/60 border border-zinc-800 rounded-lg hover:bg-emerald-500/20 hover:border-emerald-500/40 hover:text-white transition-all duration-300"
                    title="Email"
                  >
                    <Mail className="w-5 h-5 text-zinc-500 group-hover:text-emerald-400 transition-colors duration-300" />
                    <span className="text-sm font-light">Email</span>
                  </a>
                </div>
              </motion.div>

            </div>
          </motion.div>

        </div>
      </div>
    </>
  );
}
