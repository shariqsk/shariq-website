'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, User, FolderOpen, Mail, FileText } from 'lucide-react';
import React from 'react';

export default function Navbar() {
  const pathname = usePathname();

  const navigation = [
    { 
      label: "Home", 
      href: "/", 
      icon: Home
    },
    { 
      label: "About", 
      href: "/about", 
      icon: User
    },
    { 
      label: "Projects", 
      href: "/projects", 
      icon: FolderOpen
    },
    { 
      label: "Contact", 
      href: "/contact", 
      icon: Mail
    },
    { 
      label: "Resume", 
      href: "https://drive.google.com/file/d/1U9dGVpkArAHfgTKGVfEm_3nufE68Ea_L/view?usp=sharing", 
      icon: FileText
    },
  ];

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-4 sm:top-6 left-1/2 transform -translate-x-1/2 z-50"
    >
      <div className="relative">
        {/* Glow effect behind navbar */}
        <div className="absolute -inset-2 bg-gradient-to-r from-emerald-500/20 via-cyan-500/20 to-blue-500/20 rounded-full blur-xl opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
        
        {/* Main navbar container */}
        <div className="relative flex items-center gap-3 sm:gap-4 px-5 sm:px-6 py-3 sm:py-3 bg-black/60 backdrop-blur-xl border border-emerald-500/30 rounded-full shadow-2xl shadow-emerald-500/10">
          {navigation.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, scale: 0.8, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ 
                delay: index * 0.1, 
                duration: 0.4,
                ease: "easeOut"
              }}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href={item.href}
                className={`relative group flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full transition-all duration-300 ${
                  pathname === item.href
                    ? 'bg-gradient-to-r from-emerald-500/30 to-cyan-500/30 border border-emerald-500/50 text-emerald-400 shadow-lg shadow-emerald-500/20'
                    : 'bg-black/40 hover:bg-emerald-500/20 border border-emerald-500/30 hover:border-emerald-500/50 text-emerald-400 hover:text-emerald-300'
                }`}
                title={item.label}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              >
                {/* Hover text label */}
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
                  <div className="bg-black/80 backdrop-blur-sm border border-emerald-500/30 rounded-lg px-2 py-1 text-xs text-emerald-400 font-mono whitespace-nowrap">
                    {item.label}
                  </div>
                  {/* Arrow pointing up */}
                  <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-2 border-r-2 border-b-2 border-transparent border-b-emerald-500/30"></div>
                </div>
                                 {/* Hover glow effect */}
                 <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Icon with better positioning */}
                <div className="relative z-10 flex items-center justify-center">
                                     <item.icon className="w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-300 group-hover:scale-110" />
                </div>
                
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}
