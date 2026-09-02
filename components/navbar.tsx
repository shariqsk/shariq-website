'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, FolderOpen, FileText } from 'lucide-react';

export default function Navbar() {
  const pathname = usePathname();

  const navigation = [
    { label: "Home", href: "/", icon: Home },
    { label: "Projects", href: "/projects", icon: FolderOpen },
    { label: "Resume", href: "https://drive.google.com/file/d/1OR1LvVnBO5A61yTYNxE0aM3IxmpCDv4g/view?usp=sharing", icon: FileText },
  ];

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="relative flex items-center gap-3 px-4 py-3 bg-black/40 backdrop-blur-xl border border-zinc-800/50 rounded-full shadow-2xl shadow-black/50"
      >
        {navigation.map((item, index) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 0.4 + index * 0.1,
              duration: 0.4,
              ease: "easeOut"
            }}
          >
            <Link
              href={item.href}
              className={`relative flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 group ${
                pathname === item.href
                  ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                  : 'text-zinc-500 hover:text-white hover:bg-zinc-800/50'
              }`}
              title={item.label}
              target={item.href.startsWith('http') ? '_blank' : undefined}
              rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
            >
              <motion.span
                whileHover={{ scale: 1.15, rotate: 5 }}
                transition={{ duration: 0.2 }}
              >
                <item.icon className="w-4 h-4" />
              </motion.span>
              <span className="text-sm font-light hidden sm:inline">{item.label}</span>
              
              {pathname === item.href && (
                <motion.div
                  className="absolute inset-0 rounded-full bg-emerald-500/10"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </motion.nav>
  );
}
