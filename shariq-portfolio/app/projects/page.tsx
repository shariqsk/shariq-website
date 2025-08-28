'use client';

import { motion } from 'framer-motion';
import { Button } from '@heroui/button';
import { Link } from '@heroui/link';
import { Terminal, Eye, Mail, ExternalLink, Github, Linkedin, Calendar, Shield, Code, Database, Cloud, Lock, Zap, User, Target, BookOpen, Bot, TrendingUp, BarChart3 } from 'lucide-react';
import React from 'react';

export default function Projects() {
  return (
    <div className="relative min-h-screen flex items-center justify-center px-4 pt-24 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[200px] h-[200px] md:w-[300px] md:h-[300px] bg-gradient-radial from-blue-500/8 via-blue-400/4 to-transparent rounded-full animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[250px] h-[250px] md:w-[400px] md:h-[400px] bg-gradient-radial from-emerald-500/6 via-emerald-400/3 to-transparent rounded-full animate-float-delayed"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-gradient-radial from-purple-500/4 via-purple-400/2 to-transparent rounded-full animate-float-slow"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-blue-500/2 to-purple-500/2"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Terminal Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-8"
        >
          <div className="inline-block bg-black/40 backdrop-blur-sm border border-emerald-500/30 rounded-lg p-4 mb-4">
            <div className="flex items-center gap-2 mb-2">
              <div className="flex gap-1">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <span className="text-emerald-400 text-xs font-mono">projects_repository.exe</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-emerald-400 mb-2 tracking-tight leading-none font-mono">
              $ ls projects/
            </h1>
            <p className="text-emerald-300 text-sm md:text-lg lg:text-xl font-light tracking-wide font-mono">
              Featured Projects & Applications
            </p>
          </div>
        </motion.div>

        {/* Featured Project Terminal */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="bg-black/60 backdrop-blur-sm border border-emerald-500/30 rounded-lg p-6 mb-6 relative overflow-hidden"
        >
          {/* Terminal Header */}
          <div className="flex items-center gap-2 mb-4">
            <div className="flex gap-1">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <span className="text-emerald-400 text-xs font-mono">featured_project.sh</span>
          </div>

          <div className="space-y-4 font-mono">
            <div className="flex items-start gap-2">
              <span className="text-emerald-400 text-sm">$</span>
              <span className="text-white text-sm">cat zocratic_mma.txt</span>
            </div>
            
            <div className="ml-4 space-y-3 text-sm">
              <div className="flex items-center gap-2 mb-3">
                <TrendingUp className="w-4 h-4 text-emerald-400" />
                <span className="text-emerald-300 font-semibold text-base">Zocratic MMA</span>
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
              <div className="mt-4 p-3 bg-black/30 border border-emerald-500/20 rounded-md">
                <div className="flex items-center gap-2 mb-2">
                  <Shield className="w-3 h-3 text-emerald-400" />
                  <span className="text-emerald-400 text-xs font-semibold">SECURITY FEATURES</span>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-xs">
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
          <div className="absolute top-4 right-4">
            <div className="bg-emerald-500/20 border border-emerald-500/40 rounded-md px-2 py-1">
              <div className="flex items-center gap-1">
                <BarChart3 className="w-3 h-3 text-emerald-400" />
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
          className="bg-black/40 backdrop-blur-sm border border-cyan-500/30 rounded-lg p-5 mb-6 relative overflow-hidden"
        >
          {/* Terminal Header */}
          <div className="flex items-center gap-2 mb-4">
            <div className="flex gap-1">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <span className="text-cyan-400 text-xs font-mono">other_projects.sh</span>
          </div>

          <div className="space-y-3 font-mono text-sm">
            <div className="flex items-start gap-2">
              <span className="text-cyan-400">$</span>
              <span className="text-white">ls -la projects/</span>
            </div>

            <div className="ml-4">
              <div className="bg-black/30 border border-cyan-500/20 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-3">
                  <Bot className="w-4 h-4 text-cyan-400" />
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
                <div className="mt-3 pt-3 border-t border-cyan-500/20">
                  <div className="flex items-center gap-2 mb-2">
                    <Code className="w-3 h-3 text-cyan-400" />
                    <span className="text-cyan-400 text-xs font-semibold">TECH STACK</span>
                  </div>
                  <div className="flex flex-wrap gap-2 text-xs">
                    <span className="px-2 py-1 bg-cyan-500/20 border border-cyan-500/30 rounded text-cyan-300">discord.js</span>
                    <span className="px-2 py-1 bg-cyan-500/20 border border-cyan-500/30 rounded text-cyan-300">Python</span>
                    <span className="px-2 py-1 bg-cyan-500/20 border border-cyan-500/30 rounded text-cyan-300">Docker</span>
                    <span className="px-2 py-1 bg-cyan-500/20 border border-cyan-500/30 rounded text-cyan-300">Oracle Cloud</span>
                    <span className="px-2 py-1 bg-cyan-500/20 border border-cyan-500/30 rounded text-cyan-300">GitHub Actions</span>
                    <span className="px-2 py-1 bg-cyan-500/20 border border-cyan-500/30 rounded text-cyan-300">OAuth2</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute top-4 right-4">
            <div className="bg-cyan-500/20 border border-cyan-500/40 rounded-md px-2 py-1">
              <div className="flex items-center gap-1">
                <Bot className="w-3 h-3 text-cyan-400" />
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
          <div className="bg-black/40 backdrop-blur-sm border border-emerald-500/30 rounded-lg p-5 relative overflow-hidden">
            {/* Terminal Header */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex gap-1">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <span className="text-emerald-400 text-xs font-mono">actions.sh</span>
            </div>

            <div className="space-y-3 font-mono">
              <div className="flex items-start gap-2">
                <span className="text-emerald-400 text-sm">$</span>
                <span className="text-white text-sm">./available_actions.sh</span>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button
                  as={Link}
                  href="/about"
                  className="bg-gradient-to-r from-emerald-600 to-cyan-600 text-white px-5 py-2.5 rounded-md transition-all duration-300 font-semibold shadow-lg hover:shadow-emerald-500/25 transform hover:scale-105 flex items-center justify-center gap-2 text-sm font-mono border border-emerald-500/30"
                >
                  <Eye className="w-4 h-4" />
                  <span>./about.sh</span>
                </Button>
                <Button
                  as={Link}
                  href="/contact"
                  className="bg-black/30 hover:bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 px-5 py-2.5 rounded-md transition-all duration-300 font-semibold shadow-lg backdrop-blur-sm transform hover:scale-105 flex items-center justify-center gap-2 text-sm font-mono"
                >
                  <Mail className="w-4 h-4" />
                  <span>./contact.sh</span>
                </Button>
              </div>
            </div>

            <div className="absolute top-4 right-4">
              <div className="bg-emerald-500/20 border border-emerald-500/40 rounded-md px-2 py-1">
                <div className="flex items-center gap-1">
                  <Zap className="w-3 h-3 text-emerald-400" />
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
