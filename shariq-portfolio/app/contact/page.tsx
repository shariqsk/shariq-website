'use client';

import { motion } from 'framer-motion';
import { Button } from '@heroui/button';
import { Link } from '@heroui/link';
import { Terminal, Eye, Mail, Github, Linkedin, ExternalLink, Shield, Code, Database, Cloud, Lock, Zap, User, Target, BookOpen } from 'lucide-react';
import React from 'react';

export default function Contact() {
  return (
    <div className="relative min-h-screen flex items-center justify-center px-4 pt-20 sm:pt-24 pb-8 overflow-hidden">
      <div className="w-full max-w-4xl mx-auto relative z-10">
        {/* Terminal Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-6 sm:mb-8 md:mb-10"
        >
          <div className="inline-block bg-black/60 backdrop-blur-sm border border-emerald-500/40 rounded-xl p-4 sm:p-6 md:p-8 mb-4 sm:mb-6">
            <div className="flex items-center gap-3 mb-3 sm:mb-4">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 sm:w-4 sm:h-4 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 sm:w-4 sm:h-4 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 sm:w-4 sm:h-4 bg-green-500 rounded-full"></div>
              </div>
              <span className="text-emerald-400 text-sm sm:text-base font-mono">contact_system.exe</span>
            </div>
                         <h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-emerald-400 mb-3 sm:mb-4 tracking-tight leading-none font-mono">
               $ contact --init
             </h1>
             <p className="text-emerald-300 text-base sm:text-base md:text-lg lg:text-xl xl:text-2xl font-light tracking-wide font-mono">
               Let's Connect & Collaborate
             </p>
          </div>
        </motion.div>

        {/* Contact Form Terminal */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="bg-black/60 backdrop-blur-sm border border-emerald-500/30 rounded-lg p-4 sm:p-5 md:p-6 mb-4 sm:mb-5 md:mb-6 relative overflow-hidden"
        >
          {/* Terminal Header */}
          <div className="flex items-center gap-2 mb-3 sm:mb-4">
            <div className="flex gap-1">
              <div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-500 rounded-full"></div>
              <div className="w-2 h-2 sm:w-3 sm:h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full"></div>
            </div>
            <span className="text-emerald-400 text-xs font-mono">contact_form.sh</span>
          </div>

          <div className="space-y-3 sm:space-y-4 font-mono">
            <div className="flex items-start gap-2">
              <span className="text-emerald-400 text-xs sm:text-sm">$</span>
              <span className="text-white text-xs sm:text-sm">./init_contact_form.sh</span>
            </div>
            
            <div className="ml-4 space-y-2 sm:space-y-3 text-xs sm:text-sm">
              <div className="text-gray-300 leading-relaxed">
                <p>
                  I'm always open to discussing new opportunities, collaborations, or just having a chat about technology and security. 
                  Whether you have a project in mind, want to discuss potential roles, or just want to connect, feel free to reach out!
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 justify-center mt-3 sm:mt-4">
                <Button
                  as={Link}
                  href="mailto:contact@shariqsk.com"
                  className="bg-gradient-to-r from-emerald-600 to-cyan-600 text-white px-3 sm:px-4 md:px-5 py-2 sm:py-2.5 rounded-md transition-all duration-300 font-semibold shadow-lg hover:shadow-emerald-500/25 transform hover:scale-105 flex items-center justify-center gap-2 text-xs sm:text-sm font-mono border border-emerald-500/30"
                >
                  <Mail className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span>./send_email.sh</span>
                </Button>
              </div>
            </div>
          </div>

          {/* Contact Badge */}
          <div className="absolute top-2 sm:top-3 md:top-4 right-2 sm:right-3 md:right-4">
            <div className="bg-emerald-500/20 border border-emerald-500/40 rounded-md px-1.5 sm:px-2 py-0.5 sm:py-1">
              <div className="flex items-center gap-1">
                <Mail className="w-2 h-2 sm:w-3 sm:h-3 text-emerald-400" />
                <span className="text-emerald-400 text-xs font-mono">READY</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Contact Info Grid - Improved Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 mb-4 sm:mb-5 md:mb-6">
          {/* Email Terminal */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="bg-black/40 backdrop-blur-sm border border-blue-500/30 rounded-lg p-4 sm:p-5 relative overflow-hidden"
          >
            {/* Terminal Header */}
            <div className="flex items-center gap-2 mb-3 sm:mb-4">
              <div className="flex gap-1">
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-500 rounded-full"></div>
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full"></div>
              </div>
              <span className="text-blue-400 text-xs font-mono">email.sh</span>
            </div>

            <div className="space-y-3 font-mono text-xs sm:text-sm">
              <div className="flex items-start gap-2">
                <span className="text-blue-400">$</span>
                <span className="text-white">cat email.txt</span>
              </div>
              
              <div className="ml-4 space-y-2">
                <div className="text-blue-300 font-semibold">Primary Email</div>
                <div className="text-gray-300">contact@shariqsk.com</div>
                <div className="text-gray-400 text-xs">Available 24/7</div>
              </div>
            </div>

            <div className="absolute top-2 sm:top-3 md:top-4 right-2 sm:right-3 md:right-4">
              <div className="bg-blue-500/20 border border-blue-500/40 rounded-md px-1.5 sm:px-2 py-0.5 sm:py-1">
                <div className="flex items-center gap-1">
                  <Mail className="w-2 h-2 sm:w-3 sm:h-3 text-blue-400" />
                  <span className="text-blue-400 text-xs font-mono">EMAIL</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Social Terminal */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            className="bg-black/40 backdrop-blur-sm border border-cyan-500/30 rounded-lg p-4 sm:p-5 relative overflow-hidden"
          >
            {/* Terminal Header */}
            <div className="flex items-center gap-2 mb-3 sm:mb-4">
              <div className="flex gap-1">
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-500 rounded-full"></div>
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full"></div>
              </div>
              <span className="text-cyan-400 text-xs font-mono">social.sh</span>
            </div>

            <div className="space-y-3 font-mono text-xs sm:text-sm">
              <div className="flex items-start gap-2">
                <span className="text-cyan-400">$</span>
                <span className="text-white">ls social/</span>
              </div>
              
              <div className="ml-4 space-y-2">
                <div className="text-cyan-300 font-semibold">Social Links</div>
                <div className="text-gray-300 text-xs">GitHub • LinkedIn</div>
                <div className="text-gray-400 text-xs">Professional profiles</div>
              </div>
            </div>

            <div className="absolute top-2 sm:top-3 md:top-4 right-2 sm:right-3 md:right-4">
              <div className="bg-cyan-500/20 border border-cyan-500/40 rounded-md px-1.5 sm:px-2 py-0.5 sm:py-1">
                <div className="flex items-center gap-1">
                  <User className="w-2 h-2 sm:w-3 sm:h-3 text-cyan-400" />
                  <span className="text-cyan-400 text-xs font-mono">SOCIAL</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Availability Terminal */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="bg-black/40 backdrop-blur-sm border border-emerald-500/30 rounded-lg p-4 sm:p-5 relative overflow-hidden"
          >
            {/* Terminal Header */}
            <div className="flex items-center gap-2 mb-3 sm:mb-4">
              <div className="flex gap-1">
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-500 rounded-full"></div>
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full"></div>
              </div>
              <span className="text-emerald-400 text-xs font-mono">status.sh</span>
            </div>

            <div className="space-y-3 font-mono text-xs sm:text-sm">
              <div className="flex items-start gap-2">
                <span className="text-emerald-400">$</span>
                <span className="text-white">./check_status.sh</span>
              </div>
              
              <div className="ml-4 space-y-2">
                <div className="text-emerald-300 font-semibold">Availability</div>
                <div className="text-gray-300">Open to opportunities</div>
                <div className="text-gray-400 text-xs">Flexible schedule</div>
              </div>
            </div>

            <div className="absolute top-2 sm:top-3 md:top-4 right-2 sm:right-3 md:right-4">
              <div className="bg-emerald-500/20 border border-emerald-500/40 rounded-md px-1.5 sm:px-2 py-0.5 sm:py-1">
                <div className="flex items-center gap-1">
                  <Zap className="w-2 h-2 sm:w-3 sm:h-3 text-emerald-400" />
                  <span className="text-emerald-400 text-xs font-mono">OPEN</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Social Links Terminal */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
          className="bg-black/40 backdrop-blur-sm border border-emerald-500/30 rounded-lg p-4 sm:p-5 md:p-6 mb-4 sm:mb-5 md:mb-6 relative overflow-hidden"
        >
          {/* Terminal Header */}
          <div className="flex items-center gap-2 mb-3 sm:mb-4">
            <div className="flex gap-1">
              <div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-500 rounded-full"></div>
              <div className="w-2 h-2 sm:w-3 sm:h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full"></div>
            </div>
            <span className="text-emerald-400 text-xs font-mono">social_links.sh</span>
          </div>

          <div className="space-y-3 sm:space-y-4 font-mono">
            <div className="flex items-start gap-2">
              <span className="text-emerald-400 text-xs sm:text-sm">$</span>
              <span className="text-white text-xs sm:text-sm">./connect_social.sh</span>
            </div>

            <div className="flex justify-center gap-4 sm:gap-5">
                             {[
                 { icon: Github, href: 'https://github.com/shariqsk', label: 'GitHub' },
                 { icon: Linkedin, href: 'https://www.linkedin.com/in/shariq-khan-430754217/', label: 'LinkedIn' },
                 { icon: Mail, href: 'mailto:contact@shariqsk.com', label: 'Email' },
               ].map((social, i) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-md bg-black/30 hover:bg-emerald-500/20 border border-emerald-500/30 hover:border-emerald-500/50 flex items-center justify-center text-emerald-400 transition-all duration-300 shadow-md hover:shadow-lg backdrop-blur-sm"
                  title={social.label}
                  aria-label={social.label}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 + i * 0.1, duration: 0.4 }}
                >
                  <social.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          <div className="absolute top-2 sm:top-3 md:top-4 right-2 sm:right-3 md:right-4">
            <div className="bg-emerald-500/20 border border-emerald-500/40 rounded-md px-1.5 sm:px-2 py-0.5 sm:py-1">
              <div className="flex items-center gap-1">
                <User className="w-2 h-2 sm:w-3 sm:h-3 text-emerald-400" />
                <span className="text-emerald-400 text-xs font-mono">CONNECT</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Call to Action Terminal */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9, ease: "easeOut" }}
        >
          <div className="bg-black/40 backdrop-blur-sm border border-emerald-500/30 rounded-lg p-4 sm:p-5 md:p-6 relative overflow-hidden">
            {/* Terminal Header */}
            <div className="flex items-center gap-2 mb-3 sm:mb-4">
              <div className="flex gap-1">
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-500 rounded-full"></div>
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full"></div>
              </div>
              <span className="text-emerald-400 text-xs font-mono">actions.sh</span>
            </div>

            <div className="space-y-3 sm:space-y-4 font-mono">
              <div className="flex items-start gap-2">
                <span className="text-emerald-400 text-xs sm:text-sm">$</span>
                <span className="text-white text-xs sm:text-sm">./available_actions.sh</span>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <Button
                  as={Link}
                  href="/about"
                  className="bg-gradient-to-r from-emerald-600 to-cyan-600 text-white px-4 sm:px-5 md:px-6 py-2.5 sm:py-3 rounded-md transition-all duration-300 font-semibold shadow-lg hover:shadow-emerald-500/25 transform hover:scale-105 flex items-center justify-center gap-2 text-sm sm:text-base font-mono border border-emerald-500/30"
                >
                  <Eye className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span>./about.sh</span>
                </Button>
                <Button
                  as={Link}
                  href="/projects"
                  className="bg-black/30 hover:bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 px-4 sm:px-5 md:px-6 py-2.5 sm:py-3 rounded-md transition-all duration-300 font-semibold shadow-lg backdrop-blur-sm transform hover:scale-105 flex items-center justify-center gap-2 text-sm sm:text-base font-mono"
                >
                  <Terminal className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span>./view_projects.sh</span>
                </Button>
                <Button
                  as={Link}
                  href="https://drive.google.com/file/d/1U9dGVpkArAHfgTKGVfEm_3nufE68Ea_L/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-black/30 hover:bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 px-4 sm:px-5 md:px-6 py-2.5 sm:py-3 rounded-md transition-all duration-300 font-semibold shadow-lg backdrop-blur-sm transform hover:scale-105 flex items-center justify-center gap-2 text-sm sm:text-base font-mono"
                >
                  <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <span>./resume.sh</span>
                </Button>
              </div>
            </div>

            <div className="absolute top-2 sm:top-3 md:top-4 right-2 sm:right-3 md:right-4">
              <div className="bg-emerald-500/20 border border-emerald-500/40 rounded-md px-1.5 sm:px-2 py-0.5 sm:py-1">
                <div className="flex items-center gap-1">
                  <Zap className="w-2 h-2 sm:w-3 sm:h-3 text-emerald-400" />
                  <span className="text-emerald-400 text-xs font-mono">READY</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
