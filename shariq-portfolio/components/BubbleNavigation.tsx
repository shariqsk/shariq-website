'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Info, FolderOpen, MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';

export const BubbleNavigation = () => {
  const pathname = usePathname();

  const navItems = [
    { href: '/', label: 'Home', icon: Home },
    { href: '/about', label: 'About', icon: Info },
    { href: '/projects', label: 'Projects', icon: FolderOpen },
    { href: '/contact', label: 'Contact', icon: MessageSquare },
  ];

  return (
    <motion.nav
      className="bubble-nav"
      role="navigation"
      aria-label="Primary"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.5 }}
    >
      {navItems.map((item, index) => {
        const Icon = item.icon;
        const isActive = pathname === item.href;

        return (
          <motion.div
            key={item.href}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
          >
            <Link
              href={item.href}
              className={`bubble-nav-item ${isActive ? 'active' : ''} focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500/70 focus-visible:ring-offset-2 focus-visible:ring-offset-black`}
              title={item.label}
              aria-label={item.label}
              aria-current={isActive ? 'page' : undefined}
            >
              <Icon className="h-5 w-5" aria-hidden />
              {isActive && (
                <motion.div
                  className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.2 }}
                />
              )}
            </Link>
          </motion.div>
        );
      })}
    </motion.nav>
  );
};
