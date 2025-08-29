'use client';

import { motion } from 'framer-motion';
import { Button } from '@heroui/button';
import { Link } from '@heroui/link';
import { Terminal, Eye, Mail, Github, Linkedin, ExternalLink, Shield, Code, Database, Cloud, Lock, Zap, User, Target, BookOpen } from 'lucide-react';
import React from 'react';

export default function Contact() {
  return (
    <div className="relative min-h-screen px-4 pt-24 sm:pt-28 pb-8 overflow-hidden">
      <div className="w-full max-w-4xl mx-auto relative z-10">
        {/* Terminal Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-6 sm:mb-8 md:mb-10"
        >
            <div className="w-full max-w-2xl mx-auto bg-black/60 backdrop-blur-sm border border-emerald-500/40 rounded-xl p-4 sm:p-6 md:p-8 mb-4 sm:mb-6">
            <div className="flex items-center gap-3 mb-3 sm:mb-4">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 sm:w-4 sm:h-4 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 sm:w-4 sm:h-4 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 sm:w-4 sm:h-4 bg-green-500 rounded-full"></div>
              </div>
              <span className="text-emerald-400 text-sm sm:text-base font-mono">contact_page.sh</span>
            </div>
            <h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-emerald-400 mb-3 sm:mb-4 tracking-tight leading-none font-sans">
              Contact
            </h1>
            <p className="text-emerald-300 text-base sm:text-base md:text-lg lg:text-xl xl:text-2xl font-light tracking-wide font-sans">
              Let's Connect & Collaborate
            </p>
          </div>
        </motion.div>

        {/* Contact Information Terminal */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="bg-black/60 backdrop-blur-sm border border-emerald-500/30 rounded-lg p-4 sm:p-5 md:p-6 mb-4 sm:mb-5 md:mb-6 relative overflow-hidden"
        >
          {/* Terminal Header */}
            <div className="flex items-center gap-2 mb-3 sm:mb-4">
              <span className="text-emerald-400 text-xs font-mono">contact_details.sh</span>
            </div>

          <div className="space-y-3 sm:space-y-4 font-mono">
            <div className="flex items-start gap-2">
              <span className="text-emerald-400 text-xs sm:text-sm">{'>'}</span>
                             <span className="text-white text-xs sm:text-sm">Info</span>
            </div>
            
            <div className="ml-4 space-y-2 sm:space-y-3 text-xs sm:text-sm">
              <div className="text-white leading-relaxed">
                <p>
                  Feel free to reach out through any of these channels. I'm always open to discussing new opportunities, 
                  collaborations, or just having a chat about technology and security.
                </p>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Mail className="w-3 h-3 sm:w-4 sm:h-4 text-emerald-400" />
                  <span className="text-emerald-300 font-semibold">Email:</span>
                  <span className="text-white">contact@shariqsk.com</span>
                </div>
                                 <div className="flex items-center gap-2">
                   <User className="w-3 h-3 sm:w-4 sm:h-4 text-emerald-400" />
                   <span className="text-emerald-300 font-semibold">Location:</span>
                   <span className="text-white">Toronto, Ontario</span>
                 </div>
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

        {/* Social Links Terminal */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="bg-black/40 backdrop-blur-sm border border-blue-500/30 rounded-lg p-3 sm:p-4 md:p-5 mb-4 sm:mb-5 md:mb-6 relative overflow-hidden"
        >
          {/* Terminal Header */}
            <div className="flex items-center gap-2 mb-3 sm:mb-4">
              <span className="text-blue-400 text-xs font-mono">social_media.sh</span>
            </div>

          <div className="space-y-3 sm:space-y-4 font-mono">
            <div className="flex items-start gap-2">
              <span className="text-blue-400 text-xs sm:text-sm">{'>'}</span>
                               <span className="text-white text-xs sm:text-sm">Connect</span>
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
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-md bg-black/30 hover:bg-blue-500/20 border border-blue-500/30 hover:border-blue-500/50 flex items-center justify-center text-blue-400 transition-all duration-300 shadow-md hover:shadow-lg backdrop-blur-sm"
                  title={social.label}
                  aria-label={social.label}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + i * 0.1, duration: 0.4 }}
                >
                  <social.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          <div className="absolute top-2 sm:top-3 md:top-4 right-2 sm:right-3 md:right-4">
            <div className="bg-blue-500/20 border border-blue-500/40 rounded-md px-1.5 sm:px-2 py-0.5 sm:py-1">
              <div className="flex items-center gap-1">
                <User className="w-2 h-2 sm:w-3 sm:h-3 text-blue-400" />
                                 <span className="text-blue-400 text-xs font-mono">SOCIAL</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Response Time Terminal */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="bg-black/40 backdrop-blur-sm border border-purple-500/30 rounded-lg p-3 sm:p-4 md:p-5 mb-4 sm:mb-5 md:mb-6 relative overflow-hidden"
        >
          {/* Terminal Header */}
            <div className="flex items-center gap-2 mb-3 sm:mb-4">
              <span className="text-purple-400 text-xs font-mono">availability.sh</span>
            </div>

          <div className="space-y-3 sm:space-y-4 font-mono">
            <div className="flex items-start gap-2">
              <span className="text-purple-400 text-xs sm:text-sm">{'>'}</span>
                               <span className="text-white text-xs sm:text-sm">Status</span>
            </div>
            
            <div className="ml-4 space-y-2 sm:space-y-3 text-xs sm:text-sm">
              <div className="text-white leading-relaxed">
                <p>
                  I typically respond to messages within 24 hours during weekdays. 
                  For urgent matters I recommend sending an email to me.
                </p>
              </div>
            </div>
          </div>

          <div className="absolute top-2 sm:top-3 md:top-4 right-2 sm:right-3 md:right-4">
            <div className="bg-purple-500/20 border border-purple-500/40 rounded-md px-1.5 sm:px-2 py-0.5 sm:py-1">
              <div className="flex items-center gap-1">
                <Zap className="w-2 h-2 sm:w-3 sm:h-3 text-purple-400" />
                                 <span className="text-purple-400 text-xs font-mono">AVAILABLE</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Call to Action Terminal */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
        >
          <div className="bg-black/40 backdrop-blur-sm border border-emerald-500/30 rounded-lg p-3 sm:p-4 md:p-5 relative overflow-hidden">
            {/* Terminal Header */}
            <div className="flex items-center gap-2 mb-3 sm:mb-4">
              <span className="text-emerald-400 text-xs font-mono">actions.sh</span>
            </div>

            <div className="space-y-3 sm:space-y-4 font-mono">
              <div className="flex items-start gap-2">
                <span className="text-emerald-400 text-xs sm:text-sm">{'>'}</span>
                <span className="text-white text-xs sm:text-sm">Actions</span>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <Button
                  as={Link}
                  href="/about"
                  className="bg-gradient-to-r from-emerald-600 to-cyan-600 text-white px-4 sm:px-5 md:px-6 py-2.5 sm:py-3 rounded-md transition-all duration-300 font-semibold shadow-lg hover:shadow-emerald-500/25 transform hover:scale-105 flex items-center justify-center gap-2 text-sm sm:text-base font-mono border border-emerald-500/30"
                >
                  <Eye className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span>About Me</span>
                </Button>
                <Button
                  as={Link}
                  href="/projects"
                  className="bg-black/30 hover:bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 px-4 sm:px-5 md:px-6 py-2.5 sm:py-3 rounded-md transition-all duration-300 font-semibold shadow-lg backdrop-blur-sm transform hover:scale-105 flex items-center justify-center gap-2 text-sm sm:text-base font-mono"
                >
                  <Terminal className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span>View Projects</span>
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
