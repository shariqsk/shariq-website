'use client';

import Link from 'next/link';
import { siteConfig } from '@/config/site';
import { Github, Linkedin, Mail, Terminal } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-black/30 backdrop-blur-md border-t border-emerald-500/10">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Terminal className="w-5 h-5 text-emerald-400" />
              <span className="text-white font-thin text-lg">Shariq Khan</span>
            </div>
            <p className="text-zinc-400 font-extralight text-sm leading-relaxed">
              Computer Security Student & Full-Stack Developer based in Toronto, Canada. Passionate about building secure, scalable applications.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-white font-light text-sm uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-zinc-500 hover:text-emerald-400 transition-all duration-300 text-sm font-extralight flex items-center gap-2 group"
                >
                  <span className="w-1 h-1 rounded-full bg-emerald-500/0 group-hover:bg-emerald-400 transition-colors duration-300" />
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="text-zinc-500 hover:text-emerald-400 transition-all duration-300 text-sm font-extralight flex items-center gap-2 group"
                >
                  <span className="w-1 h-1 rounded-full bg-emerald-500/0 group-hover:bg-emerald-400 transition-colors duration-300" />
                  <span>Projects</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div className="space-y-4">
            <h4 className="text-white font-light text-sm uppercase tracking-wider">Connect</h4>
            <div className="flex gap-3">
              <Link
                href={siteConfig.links.github}
                className="w-10 h-10 rounded-lg bg-zinc-900/50 border border-zinc-800 hover:bg-white/20 hover:border-white/40 hover:text-white flex items-center justify-center text-zinc-500 transition-all duration-300 group"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
              </Link>
              <Link
                href={siteConfig.links.linkedin}
                className="w-10 h-10 rounded-lg bg-zinc-900/50 border border-zinc-800 hover:bg-[#0077b5]/20 hover:border-[#0077b5]/40 hover:text-white flex items-center justify-center text-zinc-500 transition-all duration-300 group"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
              </Link>
              <Link
                href={siteConfig.links.email}
                className="w-10 h-10 rounded-lg bg-zinc-900/50 border border-zinc-800 hover:bg-emerald-500/20 hover:border-emerald-500/40 hover:text-white flex items-center justify-center text-zinc-500 transition-all duration-300 group"
                aria-label="Email"
              >
                <Mail className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
              </Link>
            </div>
            <div className="pt-2">
              <Link
                href={siteConfig.links.resume}
                className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-lg text-emerald-400 hover:text-emerald-300 hover:border-emerald-500/40 hover:bg-emerald-500/15 transition-all duration-300 text-sm font-light group"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Terminal className="w-4 h-4" />
                <span>Download Resume</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-emerald-500/10 mt-12 pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-zinc-600 font-extralight text-sm flex items-center gap-2">
              © {currentYear} Shariq Khan
            </p>
            <p className="text-zinc-600 font-extralight text-xs">
              Toronto, Canada
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
