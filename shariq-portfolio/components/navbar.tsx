'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, User, FolderOpen, Mail, FileText } from 'lucide-react';

export default function Navbar() {
  const pathname = usePathname();

  const navigation = [
    { label: "Home", href: "/", icon: Home },
    { label: "About", href: "/about", icon: User },
    { label: "Projects", href: "/projects", icon: FolderOpen },
    { label: "Contact", href: "/contact", icon: Mail },
    { label: "Resume", href: "https://drive.google.com/file/d/1H5M6Sb37TZRIOJMfOq-Xcll-08tHYv5x/view?usp=sharing", icon: FileText },
  ];

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <div className="relative">
        {/* Subtle top border line */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent" />
        
        {/* Main navbar */}
        <div className="relative flex items-center justify-center gap-1 px-6 py-4 bg-black/30 backdrop-blur-md">
          {navigation.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                delay: index * 0.08, 
                duration: 0.4,
                ease: "easeOut"
              }}
            >
              <Link
                href={item.href}
                className={`relative flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 group ${
                  pathname === item.href
                    ? 'text-emerald-400'
                    : 'text-zinc-400 hover:text-white'
                }`}
                title={item.label}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              >
                {/* Active indicator */}
                {pathname === item.href && (
                  <motion.div
                    layoutId="active-indicator"
                    className="absolute inset-0 bg-emerald-500/10 rounded-lg"
                    initial={false}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                
                {/* Icon */}
                <motion.span
                  whileHover={{ scale: 1.1 }}
                  className="relative z-10"
                >
                  <item.icon className="w-4 h-4" />
                </motion.span>
                
                {/* Label */}
                <span className="text-sm font-light relative z-10">{item.label}</span>
                
                {/* Hover underline */}
                <motion.span
                  className="absolute bottom-0 left-0 right-0 h-px bg-emerald-400/0 group-hover:bg-emerald-400/50 transition-colors duration-300"
                />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}
