'use client';

import { motion } from 'framer-motion';
import { Button } from '@heroui/button';
import { Link } from '@heroui/link';
import { Github, Linkedin, Mail, Calendar, ExternalLink, BookOpen, Terminal, Eye, Zap, User } from 'lucide-react';
import React from 'react';

export default function Home() {
  return (
    <div className="relative min-h-screen flex items-center justify-center px-4 pt-16 pb-8 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Subtle gradient orbs with smooth animations */}
        <div className="absolute top-1/4 left-1/4 w-[200px] h-[200px] md:w-[300px] md:h-[300px] bg-gradient-radial from-blue-500/8 via-blue-400/4 to-transparent rounded-full animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[250px] h-[250px] md:w-[400px] md:h-[400px] bg-gradient-radial from-emerald-500/6 via-emerald-400/3 to-transparent rounded-full animate-float-delayed"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-gradient-radial from-purple-500/4 via-purple-400/2 to-transparent rounded-full animate-float-slow"></div>
        
        {/* Subtle mesh gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-blue-500/2 to-purple-500/2"></div>
        
        {/* Floating particles */}
        <div className="absolute top-1/3 left-1/3 w-1 h-1 bg-white/20 rounded-full animate-float-particle"></div>
        <div className="absolute top-2/3 right-1/4 w-0.5 h-0.5 bg-white/30 rounded-full animate-float-particle-delayed"></div>
        <div className="absolute bottom-1/3 left-1/2 w-1 h-1 bg-white/15 rounded-full animate-float-particle-slow"></div>
      </div>

      <div className="w-full max-w-4xl mx-auto relative z-10">
        {/* Main Terminal Window */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="bg-black/60 backdrop-blur-sm border border-emerald-500/30 rounded-lg p-4 sm:p-6 md:p-8 relative overflow-hidden"
        >
          {/* Terminal Header */}
          <div className="flex items-center gap-2 mb-3 sm:mb-4 md:mb-6">
            <div className="flex gap-1">
              <div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-500 rounded-full"></div>
              <div className="w-2 h-2 sm:w-3 sm:h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full"></div>
            </div>
            <span className="text-emerald-400 text-xs font-mono">welcome.sh</span>
          </div>

          {/* Terminal Content */}
          <div className="space-y-3 sm:space-y-4 md:space-y-6 font-mono">
            <div className="flex items-start gap-2">
              <span className="text-emerald-400 text-sm sm:text-base md:text-lg">$</span>
              <span className="text-white text-sm sm:text-base md:text-lg">echo "Hello, I'm Shariq Khan"</span>
            </div>
            
            <div className="ml-4 text-emerald-300 text-sm sm:text-base md:text-lg">
              Hello, I'm Shariq Khan
            </div>

            <div className="flex items-start gap-2">
              <span className="text-emerald-400 text-sm sm:text-base md:text-lg">$</span>
              <span className="text-white text-sm sm:text-base md:text-lg">whoami</span>
            </div>
            
            <div className="ml-4 text-gray-300 text-xs sm:text-sm md:text-base leading-relaxed">
              Computer Security Student & Developer at York University
            </div>

            <div className="flex items-start gap-2">
              <span className="text-emerald-400 text-sm sm:text-base md:text-lg">$</span>
              <span className="text-white text-sm sm:text-base md:text-lg">cat intro.txt</span>
            </div>
            
            <div className="ml-4 text-gray-300 text-xs sm:text-sm leading-relaxed">
              <p>
                I'm passionate about cybersecurity and building secure, scalable applications. Currently working as an Import Analyst at Farrow while pursuing Computer Security at York University. 
                Always open to chat; reach me via{' '}
                <Link href="mailto:00khanshariq@gmail.com" className="text-blue-400 hover:text-blue-300 underline font-medium transition-colors duration-300">
                  email
                </Link>{' '}
                or{' '}
                <Link href="tel:+16473036451" className="text-blue-400 hover:text-blue-300 underline font-medium transition-colors duration-300">
                  phone
                </Link>
              </p>
            </div>

            <div className="flex items-start gap-2">
              <span className="text-emerald-400 text-sm sm:text-base md:text-lg">$</span>
              <span className="text-white text-sm sm:text-base md:text-lg">./show_actions.sh</span>
            </div>
            
            <div className="ml-4">
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 justify-center">
                <Button 
                  as={Link} 
                  href="/projects" 
                  className="bg-gradient-to-r from-emerald-600 to-cyan-600 text-white px-3 sm:px-4 md:px-5 py-2 sm:py-2.5 rounded-md transition-all duration-300 font-semibold shadow-lg hover:shadow-emerald-500/25 flex items-center justify-center gap-2 text-xs sm:text-sm font-mono border border-emerald-500/30"
                >
                  <Terminal className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span>./view_projects.sh</span>
                </Button>
                <Button 
                  as={Link} 
                  href="/about" 
                  className="bg-black/30 hover:bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 px-3 sm:px-4 md:px-5 py-2 sm:py-2.5 rounded-md transition-all duration-300 font-semibold flex items-center justify-center gap-2 text-xs sm:text-sm font-mono"
                >
                  <Eye className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span>./about.sh</span>
                </Button>
                <Button 
                  as={Link} 
                  href="https://drive.google.com/file/d/1U9dGVpkArAHfgTKGVfEm_3nufE68Ea_L/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-black/30 hover:bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 px-3 sm:px-4 md:px-5 py-2 sm:py-2.5 rounded-md transition-all duration-300 font-semibold flex items-center justify-center gap-2 text-xs sm:text-sm font-mono"
                >
                  <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <span>./resume.sh</span>
                </Button>
              </div>
            </div>

            <div className="flex items-start gap-2">
              <span className="text-emerald-400 text-sm sm:text-base md:text-lg">$</span>
              <span className="text-white text-sm sm:text-base md:text-lg">ls social/</span>
            </div>
            
            <div className="ml-4">
              <div className="flex justify-center gap-3 sm:gap-4">
                {[
                  { icon: Github, href: 'https://github.com/shariqsk', label: 'GitHub' },
                  { icon: Linkedin, href: 'https://linkedin.com/in/shariq-khan', label: 'LinkedIn' },
                  { icon: Mail, href: 'mailto:00khanshariq@gmail.com', label: 'Email' },
                  { icon: Calendar, href: 'tel:+16473036451', label: 'Phone' },
                ].map((social, i) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    className="w-8 h-8 sm:w-10 sm:h-10 rounded-md bg-black/30 hover:bg-emerald-500/20 border border-emerald-500/30 hover:border-emerald-500/50 flex items-center justify-center text-emerald-400 transition-all duration-300 shadow-md hover:shadow-lg backdrop-blur-sm"
                    title={social.label}
                    aria-label={social.label}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 + i * 0.1, duration: 0.4 }}
                  >
                    <social.icon className="w-3 h-3 sm:w-4 sm:h-4" />
                  </motion.a>
                ))}
              </div>
            </div>
          </div>

          {/* Security Badge */}
          <div className="absolute top-2 sm:top-3 md:top-4 right-2 sm:right-3 md:right-4">
            <div className="bg-emerald-500/20 border border-emerald-500/40 rounded-md px-1.5 sm:px-2 py-0.5 sm:py-1">
              <div className="flex items-center gap-1">
                <User className="w-2 h-2 sm:w-3 sm:h-3 text-emerald-400" />
                <span className="text-emerald-400 text-xs font-mono">ONLINE</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
