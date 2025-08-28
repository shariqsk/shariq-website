'use client';

import { motion } from 'framer-motion';
import { Button } from '@heroui/button';
import { Link } from '@heroui/link';
import { Terminal, Eye, Mail, ExternalLink, Github, Linkedin, Calendar, Shield, Code, Database, Cloud, Lock, Zap, User, Target, BookOpen, Bot, TrendingUp, BarChart3 } from 'lucide-react';
import React from 'react';

export default function Projects() {
  return (
    <div className="relative min-h-screen flex items-center justify-center px-4 pt-20 sm:pt-24 pb-8 overflow-hidden">
      <div className="w-full max-w-5xl mx-auto relative z-10">
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
              <span className="text-emerald-400 text-sm sm:text-base font-mono">projects_repository.exe</span>
            </div>
                         <h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-emerald-400 mb-3 sm:mb-4 tracking-tight leading-none font-mono">
               $ ls projects/
             </h1>
             <p className="text-emerald-300 text-base sm:text-base md:text-lg lg:text-xl xl:text-2xl font-light tracking-wide font-mono">
               Featured Projects & Applications
             </p>
          </div>
        </motion.div>

        {/* Featured Project Terminal */}
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
            <span className="text-emerald-400 text-xs font-mono">featured_project.sh</span>
          </div>

          <div className="space-y-3 sm:space-y-4 font-mono">
            <div className="flex items-start gap-2">
              <span className="text-emerald-400 text-xs sm:text-sm">$</span>
              <span className="text-white text-xs sm:text-sm">cat zocratic_mma.txt</span>
            </div>
            
            <div className="ml-4 space-y-2 sm:space-y-3 text-xs sm:text-sm">
              <div className="flex items-center gap-2 mb-2 sm:mb-3">
                <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4 text-emerald-400" />
                <span className="text-emerald-300 font-semibold text-sm sm:text-base">Zocratic MMA</span>
                <span className="text-gray-400 text-xs">(2024 - Present)</span>
              </div>
              
              <div className="text-gray-300 space-y-2 leading-relaxed">
                <p>
                  Developed full-stack ML analytics platform (Next.js, FastAPI, Supabase) deployed on Oracle Cloud VM. 
                  Uses XGBoost models to predict UFC fight outcomes and serves interactive visualizations of fighter stats based on historical data.
                </p>
                <p>
                  Automated daily stat refresh for 4,000+ fighters via cron pipelines; frontend delivers 95% page load under 1.5 seconds 
                  on global average using Vercel CDN.
                </p>
                <p>
                  Built Firebase Authentication-backed account system with user sessions, email verification, and secure route protection. 
                  Secured APIs with JWT and CSP; external penetration test found no critical issues.
                </p>
              </div>

              {/* Security Features Panel */}
              <div className="mt-3 sm:mt-4 p-2 sm:p-3 bg-black/30 border border-emerald-500/20 rounded-md">
                <div className="flex items-center gap-2 mb-2">
                  <Shield className="w-2 h-2 sm:w-3 sm:h-3 text-emerald-400" />
                  <span className="text-emerald-400 text-xs font-semibold">SECURITY FEATURES</span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-1 sm:gap-2 text-xs">
                  <div className="text-gray-300">• JWT Authentication</div>
                  <div className="text-gray-300">• CSP Headers</div>
                  <div className="text-gray-300">• Rate Limiting</div>
                  <div className="text-gray-300">• Input Validation</div>
                  <div className="text-gray-300">• HTTPS Only</div>
                  <div className="text-gray-300">• Secure Headers</div>
                  <div className="text-gray-300">• Penetration Tested</div>
                  <div className="text-gray-300">• Zero Critical Issues</div>
                </div>
              </div>
            </div>
          </div>

          {/* Project Badge */}
          <div className="absolute top-2 sm:top-3 md:top-4 right-2 sm:right-3 md:right-4">
            <div className="bg-emerald-500/20 border border-emerald-500/40 rounded-md px-1.5 sm:px-2 py-0.5 sm:py-1">
              <div className="flex items-center gap-1">
                <BarChart3 className="w-2 h-2 sm:w-3 sm:h-3 text-emerald-400" />
                <span className="text-emerald-400 text-xs font-mono">FEATURED</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Other Projects Grid */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="bg-black/40 backdrop-blur-sm border border-cyan-500/30 rounded-lg p-3 sm:p-4 md:p-5 mb-4 sm:mb-5 md:mb-6 relative overflow-hidden"
        >
          {/* Terminal Header */}
          <div className="flex items-center gap-2 mb-3 sm:mb-4">
            <div className="flex gap-1">
              <div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-500 rounded-full"></div>
              <div className="w-2 h-2 sm:w-3 sm:h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full"></div>
            </div>
            <span className="text-cyan-400 text-xs font-mono">other_projects.sh</span>
          </div>

          <div className="space-y-2 sm:space-y-3 font-mono text-xs sm:text-sm">
            <div className="flex items-start gap-2">
              <span className="text-cyan-400">$</span>
              <span className="text-white">ls -la projects/</span>
            </div>

            <div className="ml-4">
              <div className="bg-black/30 border border-cyan-500/20 rounded-lg p-3 sm:p-4">
                <div className="flex items-center gap-2 mb-2 sm:mb-3">
                  <Bot className="w-3 h-3 sm:w-4 sm:h-4 text-cyan-400" />
                  <span className="text-cyan-300 font-semibold">Quote-of-the-Day Discord Bot</span>
                  <span className="text-gray-400 text-xs">(2023 - Present)</span>
                </div>
                
                <div className="text-gray-300 space-y-2 text-xs leading-relaxed">
                  <p>
                    Designed and deployed a Discord bot using discord.js and a Python REST microservice containerized in Docker on an Oracle Cloud VM. 
                    Delivers daily motivational quotes with consistent 150 ms response time.
                  </p>
                  <p>
                    Implemented slash-command architecture with OAuth2 bot authentication and token scoping; hardened endpoints using HTTPS, 
                    input sanitization, and Docker isolation.
                  </p>
                  <p>
                    CI/CD via GitHub Actions with secure secrets management; caching layer reduced third-party API calls by over 65% 
                    while ensuring high availability.
                  </p>
                </div>

                {/* Tech Stack */}
                <div className="mt-2 sm:mt-3 pt-2 sm:pt-3 border-t border-cyan-500/20">
                  <div className="flex items-center gap-2 mb-2">
                    <Code className="w-2 h-2 sm:w-3 sm:h-3 text-cyan-400" />
                    <span className="text-cyan-400 text-xs font-semibold">TECH STACK</span>
                  </div>
                  <div className="flex flex-wrap gap-1 sm:gap-2 text-xs">
                    <span className="px-1.5 sm:px-2 py-0.5 sm:py-1 bg-cyan-500/20 border border-cyan-500/30 rounded text-cyan-300">discord.js</span>
                    <span className="px-1.5 sm:px-2 py-0.5 sm:py-1 bg-cyan-500/20 border border-cyan-500/30 rounded text-cyan-300">Python</span>
                    <span className="px-1.5 sm:px-2 py-0.5 sm:py-1 bg-cyan-500/20 border border-cyan-500/30 rounded text-cyan-300">Docker</span>
                    <span className="px-1.5 sm:px-2 py-0.5 sm:py-1 bg-cyan-500/20 border border-cyan-500/30 rounded text-cyan-300">Oracle Cloud</span>
                    <span className="px-1.5 sm:px-2 py-0.5 sm:py-1 bg-cyan-500/20 border border-cyan-500/30 rounded text-cyan-300">GitHub Actions</span>
                    <span className="px-1.5 sm:px-2 py-0.5 sm:py-1 bg-cyan-500/20 border border-cyan-500/30 rounded text-cyan-300">OAuth2</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute top-2 sm:top-3 md:top-4 right-2 sm:right-3 md:right-4">
            <div className="bg-cyan-500/20 border border-cyan-500/40 rounded-md px-1.5 sm:px-2 py-0.5 sm:py-1">
              <div className="flex items-center gap-1">
                <Bot className="w-2 h-2 sm:w-3 sm:h-3 text-cyan-400" />
                <span className="text-cyan-400 text-xs font-mono">BOT</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Call to Action Terminal */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
        >
          <div className="bg-black/40 backdrop-blur-sm border border-emerald-500/30 rounded-lg p-3 sm:p-4 md:p-5 relative overflow-hidden">
            {/* Terminal Header */}
            <div className="flex items-center gap-2 mb-3 sm:mb-4">
              <div className="flex gap-1">
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-500 rounded-full"></div>
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full"></div>
              </div>
              <span className="text-emerald-400 text-xs font-mono">actions.sh</span>
            </div>

            <div className="space-y-2 sm:space-y-3 font-mono">
              <div className="flex items-start gap-2">
                <span className="text-emerald-400 text-xs sm:text-sm">$</span>
                <span className="text-white text-xs sm:text-sm">./available_actions.sh</span>
                  </div>

              <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 justify-center">
                <Button
                  as={Link}
                  href="/about"
                  className="bg-gradient-to-r from-emerald-600 to-cyan-600 text-white px-3 sm:px-4 md:px-5 py-2 sm:py-2.5 rounded-md transition-all duration-300 font-semibold shadow-lg hover:shadow-emerald-500/25 transform hover:scale-105 flex items-center justify-center gap-2 text-xs sm:text-sm font-mono border border-emerald-500/30"
                >
                  <Eye className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span>./about.sh</span>
                </Button>
                <Button
                  as={Link}
                  href="/contact"
                  className="bg-black/30 hover:bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 px-3 sm:px-4 md:px-5 py-2 sm:py-2.5 rounded-md transition-all duration-300 font-semibold shadow-lg backdrop-blur-sm transform hover:scale-105 flex items-center justify-center gap-2 text-xs sm:text-sm font-mono"
                >
                  <Mail className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span>./contact.sh</span>
                        </Button>
                <Button
                  as={Link}
                  href="https://drive.google.com/file/d/1U9dGVpkArAHfgTKGVfEm_3nufE68Ea_L/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-black/30 hover:bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 px-3 sm:px-4 md:px-5 py-2 sm:py-2.5 rounded-md transition-all duration-300 font-semibold shadow-lg backdrop-blur-sm transform hover:scale-105 flex items-center justify-center gap-2 text-xs sm:text-sm font-mono"
                >
                  <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
