'use client';

import { motion } from 'framer-motion';
import { Button } from '@heroui/button';
import { Link } from '@heroui/link';
import { Github, Linkedin, Mail, Shield, Terminal, Lock, FileText, Code2, Sparkles } from 'lucide-react';
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

  const connectButtons = [
    { icon: Github, href: 'https://github.com/shariqsk', label: 'GitHub', desc: 'Check out my work' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/shariq-khan-430754217/', label: 'LinkedIn', desc: 'Let\'s connect' },
    { icon: Mail, href: 'mailto:contact@shariqsafdarkhan.com', label: 'Email', desc: 'Send a message' },
  ];

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
          <motion.div 
            animate={{ 
              y: [-20, 20, -20],
              scale: [1, 1.1, 1],
            }}
            transition={{ 
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-emerald-400/10 rounded-full filter blur-[80px]"
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
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                >
                  <Terminal className="w-4 h-4 text-emerald-400" />
                </motion.div>
                <motion.span 
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5, duration: 0.4 }}
                  className="text-emerald-400 font-mono text-xs sm:text-sm"
                >
                  welcome.sh
                </motion.span>
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
                <motion.span 
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="text-emerald-400 text-sm sm:text-base font-mono"
                >
                  {">"}
                </motion.span>
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
                  Computer Security Student & Full-Stack Developer
                </motion.p>
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.6, duration: 0.5 }}
                  className="flex flex-wrap gap-2"
                >
                  {['York University', 'Farrow'].map((tag, i) => (
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
                      className="px-3 py-1 bg-emerald-500/10 border border-emerald-500/30 rounded-full text-emerald-400/90 text-xs sm:text-sm font-light cursor-pointer transition-all duration-300"
                    >
                      {tag}
                    </motion.span>
                  ))}
                  <motion.span 
                    whileHover={{ 
                      scale: 1.05, 
                      y: -2,
                      backgroundColor: "rgba(34,211,238,0.2)"
                    }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.9, type: "spring" }}
                    className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-400/90 text-xs sm:text-sm font-light flex items-center gap-1 cursor-pointer transition-all duration-300"
                  >
                    <motion.div
                      animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <Sparkles className="w-3 h-3" />
                    </motion.div>
                    Available
                  </motion.span>
                </motion.div>
              </motion.div>

              {/* Bio Section */}
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 2.0, duration: 0.5, type: "spring" }}
                className="flex items-start gap-2"
              >
                <motion.span 
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                  className="text-emerald-400 text-sm sm:text-base font-mono"
                >
                  {">"}
                </motion.span>
                <span className="text-white text-sm sm:text-base font-thin">cat bio.txt</span>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 2.1, duration: 0.5, type: "spring" }}
                className="ml-4 text-zinc-300 font-light text-sm sm:text-base leading-relaxed space-y-3"
              >
                <motion.p 
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 2.2, duration: 0.4 }}
                >
                  I'm a Computer Security student at York University with a deep passion for cybersecurity and building secure, scalable applications. Currently working as an Import Analyst at Farrow, I bring a unique blend of technical expertise and practical business experience to every project.
                </motion.p>
                <motion.p 
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 2.3, duration: 0.4 }}
                >
                  My journey in tech has equipped me with strong skills in full-stack development, system security analysis, and defensive cybersecurity practices. I love tackling complex challenges and staying current with emerging threats and security best practices.
                </motion.p>
                <motion.p 
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 2.4, duration: 0.4 }}
                  className="space-y-1"
                >
                  Whether you're looking for a developer who prioritizes security from the ground up or someone to collaborate on innovative tech projects, I'm always open to new opportunities. Check out my{' '}
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
                <motion.span 
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                  className="text-emerald-400 text-sm sm:text-base font-mono"
                >
                  {">"}
                </motion.span>
                <span className="text-white text-sm sm:text-base font-thin">./connect.sh</span>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.9, duration: 0.5, type: "spring" }}
                className="ml-4 grid grid-cols-1 md:grid-cols-3 gap-4"
              >
                {connectButtons.map((item, i) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    whileHover={{ 
                      scale: 1.05, 
                      y: -4,
                      borderColor: "rgba(16,185,129,0.6)",
                      backgroundColor: "rgba(16,185,129,0.15)"
                    }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ 
                      delay: 3.0 + i * 0.1, 
                      type: "spring",
                      stiffness: 300,
                      damping: 20
                    }}
                    className="p-4 bg-zinc-900/40 border border-zinc-800 rounded-xl transition-all duration-300 group cursor-pointer relative overflow-hidden"
                  >
                    <motion.div
                      initial={false}
                      whileHover={{
                        opacity: [0, 0.1, 0],
                        transition: { duration: 0.5 }
                      }}
                      className="absolute inset-0 bg-emerald-500"
                    />
                    <div className="flex flex-col items-center text-center gap-2 relative z-10">
                      <motion.div 
                        whileHover={{ rotate: [0, -10, 10, 0] }}
                        transition={{ duration: 0.5 }}
                        className="w-12 h-12 rounded-full bg-zinc-800 border border-zinc-700 group-hover:bg-emerald-500/10 group-hover:border-emerald-500/30 flex items-center justify-center transition-all duration-300"
                      >
                        <item.icon className="w-6 h-6 text-zinc-400 group-hover:text-emerald-400 transition-colors duration-300" />
                      </motion.div>
                      <div>
                        <motion.h3 
                          whileHover={{ y: -2 }}
                          className="text-zinc-300 font-light text-base group-hover:text-white transition-transform duration-300"
                        >
                          {item.label}
                        </motion.h3>
                        <motion.p 
                          whileHover={{ y: -2 }}
                          className="text-zinc-600 font-extralight text-xs group-hover:text-zinc-400 transition-colors duration-300"
                        >
                          {item.desc}
                        </motion.p>
                      </div>
                    </div>
                  </motion.a>
                ))}
              </motion.div>

            </div>

            {/* Enhanced Footer */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 3.5, duration: 0.5 }}
              className="absolute bottom-4 left-4 right-4"
            >
              <div className="flex items-center justify-between">
                <motion.div
                  animate={{ opacity: [0.6, 1, 0.6] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="text-xs text-zinc-600 font-mono flex items-center gap-2"
                >
                  <Terminal className="w-3 h-3" />
                  <span>~/portfolio</span>
                </motion.div>
                
                <motion.div 
                  className="flex items-center gap-3"
                >
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="flex items-center gap-2 px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-full"
                  >
                    <motion.div 
                      animate={{ 
                        scale: [1, 1.5, 1],
                        opacity: [0.5, 1, 0.5]
                      }}
                      transition={{ duration: 1, repeat: Infinity }}
                      className="w-2 h-2 rounded-full bg-emerald-400"
                    />
                    <span className="text-xs text-emerald-400/90 font-mono">Online</span>
                  </motion.div>
                  
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  >
                    <Shield className="w-4 h-4 text-emerald-500/50" />
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </>
  );
}
