'use client';

import Link from 'next/link';
import { siteConfig } from '@/config/site';
import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black/40 backdrop-blur-sm border-t border-emerald-500/20 mt-20">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Main Info */}
          <div className="space-y-4">
            <h3 className="text-emerald-400 font-bold text-lg">Shariq Khan</h3>
            <p className="text-gray-300 text-sm">
              Full-Stack Developer & Computer Security Student at York University. 
              Based in Toronto, Canada.
            </p>
            <div className="flex space-x-4">
              <Link
                href={siteConfig.links.github}
                className="text-gray-400 hover:text-emerald-400 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </Link>
              <Link
                href={siteConfig.links.linkedin}
                className="text-gray-400 hover:text-emerald-400 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </Link>
              <Link
                href={siteConfig.links.email}
                className="text-gray-400 hover:text-emerald-400 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-emerald-400 font-bold text-lg">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-300 hover:text-emerald-400 transition-colors text-sm"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-300 hover:text-emerald-400 transition-colors text-sm"
                >
                  About Me
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="text-gray-300 hover:text-emerald-400 transition-colors text-sm"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-300 hover:text-emerald-400 transition-colors text-sm"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Resume & Links */}
          <div className="space-y-4">
            <h3 className="text-emerald-400 font-bold text-lg">Resume & Links</h3>
            <Link
              href={siteConfig.links.resume}
              className="inline-flex items-center text-emerald-400 hover:text-emerald-300 transition-colors text-sm"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Resume
              <ExternalLink className="w-3 h-3 ml-1" />
            </Link>
            <div className="pt-2">
              <Link
                href={siteConfig.links.blog}
                className="inline-flex items-center text-emerald-400 hover:text-emerald-300 transition-colors text-sm"
                target="_blank"
                rel="noopener noreferrer"
              >
                Blog
                <ExternalLink className="w-3 h-3 ml-1" />
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-emerald-500/20 mt-8 pt-6 text-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} Shariq Khan. Built with ☕ and probably some bugs.
          </p>
        </div>
      </div>
    </footer>
  );
}
