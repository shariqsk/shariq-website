'use client';

import { motion } from 'framer-motion';
import { Button } from '@heroui/button';
import { Link } from '@heroui/link';
import { Terminal, Eye, Mail, Phone, Github, Linkedin, Calendar, ExternalLink, Shield, Code, Database, Cloud, Lock, Zap, User, Target, BookOpen, Mountain, Gamepad2, BookOpenCheck, Film, Key, BarChart3 } from 'lucide-react';
import React from 'react';

export default function About() {
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
              <span className="text-emerald-400 text-sm sm:text-base font-mono">about_page.sh</span>
            </div>
            <h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-emerald-400 mb-3 sm:mb-4 tracking-tight leading-none font-sans">
              About me
            </h1>
            <p className="text-emerald-300 text-base sm:text-base md:text-lg lg:text-xl xl:text-2xl font-light tracking-wide font-sans">
            Beyond the Resume
            </p>
          </div>
        </motion.div>

        {/* Main Terminal Window */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="bg-black/60 backdrop-blur-sm border border-emerald-500/30 rounded-lg p-4 sm:p-5 md:p-6 mb-4 sm:mb-5 md:mb-6 relative overflow-hidden"
        >
          {/* Terminal Header */}
                     <div className="flex items-center gap-2 mb-3 sm:mb-4">
             <span className="text-emerald-400 text-xs font-mono">profile_data.sh</span>
           </div>

          {/* Terminal Content */}
          <div className="space-y-3 sm:space-y-4 font-mono">
                         <div className="flex items-start gap-2">
               <span className="text-emerald-400 text-sm sm:text-base">{'>'}</span>
                              <span className="text-white text-sm sm:text-base">Bio</span>
             </div>
            
                         <div className="ml-4 space-y-3 sm:space-y-4 text-sm sm:text-base lg:text-lg">
               <p className="text-white leading-relaxed drop-shadow-[0_0_2px_rgba(255,255,255,0.3)]">
                 Hello! My name is Shariq and I enjoy creating secure applications that live on the internet. My interest in cybersecurity started back when I was a kid trying to bypass my parents' internet restrictions by changing MAC addresses and IP configurations, Extending game time was the goal, but the curiosity it sparked is what pulled me straight into cybersecurity.
               </p>
               <p className="text-white leading-relaxed drop-shadow-[0_0_2px_rgba(255,255,255,0.3)]">
                 Fast-forward to today, and I've had the privilege of working as an Import Analyst at Farrow, combining my security knowledge with real-world business processes. My main focus these days is building secure, scalable applications while pursuing Computer Security at York University.
               </p>
               <p className="text-white leading-relaxed drop-shadow-[0_0_2px_rgba(255,255,255,0.3)]">
                 I also write about tech and security on my blog, sharing insights about cybersecurity and development. Below you'll find my experience, skills, and some of the technologies I've been working with recently.
               </p>
             </div>
                </div>

          {/* Security Badge */}
          <div className="absolute top-2 sm:top-3 md:top-4 right-2 sm:right-3 md:right-4">
            <div className="bg-emerald-500/20 border border-emerald-500/40 rounded-md px-1.5 sm:px-2 py-0.5 sm:py-1">
              <div className="flex items-center gap-1">
                <Shield className="w-2 h-2 sm:w-3 sm:h-3 text-emerald-400" />
                <span className="text-emerald-400 text-xs font-mono">SECURE</span>
              </div>
                </div>
              </div>
        </motion.div>

        {/* Education and Experience Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-5 md:gap-6 mb-4 sm:mb-5 md:mb-6">
          {/* Education Terminal */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="bg-black/40 backdrop-blur-sm border border-blue-500/30 rounded-lg p-3 sm:p-4 md:p-5 relative overflow-hidden"
          >
            {/* Terminal Header */}
                         <div className="flex items-center gap-2 mb-3 sm:mb-4">
               <span className="text-blue-400 text-xs font-mono">academic_record.sh</span>
             </div>

            <div className="space-y-2 sm:space-y-3 font-mono text-xs sm:text-sm">
              <div className="flex items-start gap-2">
                <span className="text-blue-400">{'>'}</span>
                                 <span className="text-white">Education</span>
              </div>
              
              <div className="ml-4 space-y-2">
                <div className="text-blue-300 font-semibold">York University (Toronto, ON)</div>
                                 <div className="text-white drop-shadow-[0_0_2px_rgba(255,255,255,0.3)]">Specialized Honours BSc, Computer Security</div>
                <div className="text-gray-400 text-xs mt-2">
                  <div>Relevant coursework:</div>
                  <div>• Cyber Security • Applied Cryptography • Network Security & Forensics</div>
                  <div>• Malware Analysis • Operating Systems • Data Structures & Algorithms</div>
                  <div>• Database Systems</div>
                </div>
              </div>
            </div>

            <div className="absolute top-2 sm:top-3 md:top-4 right-2 sm:right-3 md:right-4">
              <div className="bg-blue-500/20 border border-blue-500/40 rounded-md px-1.5 sm:px-2 py-0.5 sm:py-1">
                <div className="flex items-center gap-1">
                  <BookOpen className="w-2 h-2 sm:w-3 sm:h-3 text-blue-400" />
                  <span className="text-blue-400 text-xs font-mono">EDU</span>
                </div>
              </div>
                  </div>
          </motion.div>

          {/* Experience Terminal */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            className="bg-black/40 backdrop-blur-sm border border-purple-500/30 rounded-lg p-3 sm:p-4 md:p-5 relative overflow-hidden"
          >
            {/* Terminal Header */}
                         <div className="flex items-center gap-2 mb-3 sm:mb-4">
               <span className="text-purple-400 text-xs font-mono">work_history.sh</span>
             </div>

            <div className="space-y-2 sm:space-y-3 font-mono text-xs sm:text-sm">
              <div className="flex items-start gap-2">
                <span className="text-purple-400">{'>'}</span>
                                 <span className="text-white">Experience</span>
              </div>
              
              <div className="ml-4 space-y-2 sm:space-y-3">
                <div>
                  <div className="text-purple-300 font-semibold">Import Analyst I - Farrow</div>
                  <div className="text-gray-400 text-xs">Jun 2024 - Present (Hybrid)</div>
                  <div className="text-gray-300 text-xs mt-1">
                    • Process 55+ daily EDI manifests and CADEX releases<br/>
                    • Audit HS codes with strict access controls<br/>
                    • Maintain 95%+ first-attempt clearance rate
                  </div>
                </div>
                <div>
                  <div className="text-purple-300 font-semibold">Web Developer - Saftech Designs</div>
                  <div className="text-gray-400 text-xs">Remote</div>
                  <div className="text-gray-300 text-xs mt-1">
                    • Rebuilt corporate site on Next.js, reducing load times to under 1 second<br/>
                    • Hardened GraphQL/REST endpoints with JWT, CSP, HSTS<br/>
                    • Implemented CI/CD pipelines with GitHub Actions
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute top-2 sm:top-3 md:top-4 right-2 sm:right-3 md:right-4">
              <div className="bg-purple-500/20 border border-purple-500/40 rounded-md px-1.5 sm:px-2 py-0.5 sm:py-1">
                <div className="flex items-center gap-1">
                  <Target className="w-2 h-2 sm:w-3 sm:h-3 text-purple-400" />
                  <span className="text-purple-400 text-xs font-mono">EXP</span>
                </div>
              </div>
                  </div>
          </motion.div>
        </div>

        {/* Skills and Interests Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-5 md:gap-6 mb-4 sm:mb-5 md:mb-6">
          {/* Skills Terminal */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="bg-black/40 backdrop-blur-sm border border-cyan-500/30 rounded-lg p-3 sm:p-4 md:p-5 relative overflow-hidden"
          >
          {/* Terminal Header */}
                     <div className="flex items-center gap-2 mb-3 sm:mb-4">
             <span className="text-cyan-400 text-xs font-mono">tech_stack.sh</span>
           </div>

          <div className="space-y-2 sm:space-y-3 font-mono text-xs sm:text-sm">
            <div className="flex items-start gap-2">
              <span className="text-cyan-400">{'>'}</span>
                             <span className="text-white">Skills</span>
            </div>

            <div className="ml-4 space-y-4">
              {/* Security & Systems */}
              <div className="bg-black/30 border border-cyan-500/20 rounded-lg p-3">
                <div className="flex items-center gap-2 mb-3">
                  <Shield className="w-4 h-4 text-cyan-400" />
                  <span className="text-cyan-300 font-semibold">Security & Systems</span>
                </div>
                                 <div className="flex flex-wrap gap-2">
                   <span className="px-2 py-1 bg-cyan-500/20 border border-cyan-500/30 rounded text-cyan-300 text-xs flex items-center gap-1"><Shield className="w-3 h-3" />Firewalls</span>
                   <span className="px-2 py-1 bg-cyan-500/20 border border-cyan-500/30 rounded text-cyan-300 text-xs flex items-center gap-1"><Database className="w-3 h-3" />SIEM</span>
                   <span className="px-2 py-1 bg-cyan-500/20 border border-cyan-500/30 rounded text-cyan-300 text-xs flex items-center gap-1"><Lock className="w-3 h-3" />MFA</span>
                   <span className="px-2 py-1 bg-cyan-500/20 border border-cyan-500/30 rounded text-cyan-300 text-xs flex items-center gap-1"><Terminal className="w-3 h-3" />Nmap</span>
                   <span className="px-2 py-1 bg-cyan-500/20 border border-cyan-500/30 rounded text-cyan-300 text-xs flex items-center gap-1"><Eye className="w-3 h-3" />Wireshark</span>
                   <span className="px-2 py-1 bg-cyan-500/20 border border-cyan-500/30 rounded text-cyan-300 text-xs flex items-center gap-1"><Key className="w-3 h-3" />JWT</span>
                   <span className="px-2 py-1 bg-cyan-500/20 border border-cyan-500/30 rounded text-cyan-300 text-xs flex items-center gap-1"><Shield className="w-3 h-3" />OWASP</span>
                 </div>
              </div>

              {/* Cloud Platforms */}
              <div className="bg-black/30 border border-cyan-500/20 rounded-lg p-3">
                <div className="flex items-center gap-2 mb-3">
                  <Cloud className="w-4 h-4 text-cyan-400" />
                  <span className="text-cyan-300 font-semibold">Cloud Platforms</span>
                </div>
                                 <div className="flex flex-wrap gap-2">
                   <span className="px-2 py-1 bg-cyan-500/20 border border-cyan-500/30 rounded text-cyan-300 text-xs flex items-center gap-1"><Cloud className="w-3 h-3" />AWS</span>
                   <span className="px-2 py-1 bg-cyan-500/20 border border-cyan-500/30 rounded text-cyan-300 text-xs flex items-center gap-1"><Cloud className="w-3 h-3" />Azure</span>
                   <span className="px-2 py-1 bg-cyan-500/20 border border-cyan-500/30 rounded text-cyan-300 text-xs flex items-center gap-1"><Database className="w-3 h-3" />Docker</span>
                   <span className="px-2 py-1 bg-cyan-500/20 border border-cyan-500/30 rounded text-cyan-300 text-xs flex items-center gap-1"><Cloud className="w-3 h-3" />Oracle Cloud</span>
                   <span className="px-2 py-1 bg-cyan-500/20 border border-cyan-500/30 rounded text-cyan-300 text-xs flex items-center gap-1"><Zap className="w-3 h-3" />Vercel</span>
                   <span className="px-2 py-1 bg-cyan-500/20 border border-cyan-500/30 rounded text-cyan-300 text-xs flex items-center gap-1"><Database className="w-3 h-3" />Supabase</span>
                   <span className="px-2 py-1 bg-cyan-500/20 border border-cyan-500/30 rounded text-cyan-300 text-xs flex items-center gap-1"><Github className="w-3 h-3" />GitHub Actions</span>
                 </div>
              </div>

              {/* Languages & Scripting */}
              <div className="bg-black/30 border border-cyan-500/20 rounded-lg p-3">
                <div className="flex items-center gap-2 mb-3">
                  <Code className="w-4 h-4 text-cyan-400" />
                  <span className="text-cyan-300 font-semibold">Languages & Scripting</span>
                </div>
                                 <div className="flex flex-wrap gap-2">
                   <span className="px-2 py-1 bg-cyan-500/20 border border-cyan-500/30 rounded text-cyan-300 text-xs flex items-center gap-1"><Code className="w-3 h-3" />Python</span>
                   <span className="px-2 py-1 bg-cyan-500/20 border border-cyan-500/30 rounded text-cyan-300 text-xs flex items-center gap-1"><Code className="w-3 h-3" />JavaScript</span>
                   <span className="px-2 py-1 bg-cyan-500/20 border border-cyan-500/30 rounded text-cyan-300 text-xs flex items-center gap-1"><Code className="w-3 h-3" />TypeScript</span>
                   <span className="px-2 py-1 bg-cyan-500/20 border border-cyan-500/30 rounded text-cyan-300 text-xs flex items-center gap-1"><Terminal className="w-3 h-3" />Bash</span>
                   <span className="px-2 py-1 bg-cyan-500/20 border border-cyan-500/30 rounded text-cyan-300 text-xs flex items-center gap-1"><Terminal className="w-3 h-3" />PowerShell</span>
                   <span className="px-2 py-1 bg-cyan-500/20 border border-cyan-500/30 rounded text-cyan-300 text-xs flex items-center gap-1"><Database className="w-3 h-3" />SQL</span>
                   <span className="px-2 py-1 bg-cyan-500/20 border border-cyan-500/30 rounded text-cyan-300 text-xs flex items-center gap-1"><Code className="w-3 h-3" />Java</span>
                   <span className="px-2 py-1 bg-cyan-500/20 border border-cyan-500/30 rounded text-cyan-300 text-xs flex items-center gap-1"><BarChart3 className="w-3 h-3" />R</span>
                 </div>
              </div>
            </div>
          </div>

          <div className="absolute top-2 sm:top-3 md:top-4 right-2 sm:right-3 md:right-4">
            <div className="bg-cyan-500/20 border border-cyan-500/40 rounded-md px-1.5 sm:px-2 py-0.5 sm:py-1">
              <div className="flex items-center gap-1">
                <Code className="w-2 h-2 sm:w-3 sm:h-3 text-cyan-400" />
                                 <span className="text-cyan-400 text-xs font-mono">TOOLS</span>
              </div>
            </div>
          </div>
        </motion.div>

          {/* Interests & Hobbies Terminal */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
            className="bg-black/40 backdrop-blur-sm border border-orange-500/30 rounded-lg p-3 sm:p-4 md:p-5 relative overflow-hidden"
          >
          {/* Terminal Header */}
                     <div className="flex items-center gap-2 mb-3 sm:mb-4">
             <span className="text-orange-400 text-xs font-mono">personal_hobbies.sh</span>
           </div>

          <div className="space-y-2 sm:space-y-3 font-mono text-xs sm:text-sm">
            <div className="flex items-start gap-2">
              <span className="text-orange-400">{'>'}</span>
                             <span className="text-white">Interests</span>
            </div>

            <div className="ml-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-3 sm:gap-4">
              <div>
                <div className="text-orange-300 font-semibold mb-2 flex items-center gap-2">
                  <Mountain className="w-3 h-3 sm:w-4 sm:h-4" />
                  Climbing & Sports
                </div>
                                 <div className="text-white text-xs space-y-1">
                   <div>• Rock climbing (indoor & outdoor)</div>
                   <div>• Basketball, soccer, tennis</div>
                   <div>• Fitness & strength training</div>
                   <div>• Hiking and outdoor adventures</div>
                 </div>
              </div>
              <div>
                <div className="text-orange-300 font-semibold mb-2 flex items-center gap-2">
                  <BookOpenCheck className="w-3 h-3 sm:w-4 sm:h-4" />
                  Reading & Entertainment
                </div>
                                 <div className="text-white text-xs space-y-1">
                   <div>• Tech books & cybersecurity literature</div>
                   <div>• Sci-fi novels & thrillers</div>
                   <div>• TV shows: Breaking Bad, The Wire</div>
                   <div>• Movies: Inception, The Matrix, Interstellar</div>
                 </div>
              </div>
            </div>

            <div className="ml-4 mt-3 sm:mt-4">
              <div className="text-orange-300 font-semibold mb-2 flex items-center gap-2">
                <Gamepad2 className="w-3 h-3 sm:w-4 sm:h-4" />
                Beyond the Terminal
              </div>
                                             <div className="text-white text-xs leading-relaxed">
                  When not coding or studying security, you'll find me at the climbing gym, shooting hoops, or reading. 
                  Balance between technical skills and personal well-being keeps me sharp and focused.
                </div>
            </div>
          </div>

          <div className="absolute top-2 sm:top-3 md:top-4 right-2 sm:right-3 md:right-4">
            <div className="bg-orange-500/20 border border-orange-500/40 rounded-md px-1.5 sm:px-2 py-0.5 sm:py-1">
              <div className="flex items-center gap-1">
                <User className="w-2 h-2 sm:w-3 sm:h-3 text-orange-400" />
                                 <span className="text-orange-400 text-xs font-mono">HOBBIES</span>
              </div>
            </div>
          </div>
        </motion.div>
        </div>

        {/* Call to Action Terminal */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9, ease: "easeOut" }}
        >
          <div className="bg-black/40 backdrop-blur-sm border border-emerald-500/30 rounded-lg p-3 sm:p-4 md:p-5 relative overflow-hidden">
            {/* Terminal Header */}
                         <div className="flex items-center gap-2 mb-3 sm:mb-4">
                                <span className="text-emerald-400 text-xs font-mono">actions.sh</span>
             </div>

            <div className="space-y-2 sm:space-y-3 font-mono">
              <div className="flex items-start gap-2">
                <span className="text-emerald-400 text-xs sm:text-sm">{'>'}</span>
                                 <span className="text-white text-xs sm:text-sm">Actions</span>
              </div>

              <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 justify-center">
                <Button
                  as={Link}
                  href="/projects"
                  className="bg-gradient-to-r from-emerald-600 to-cyan-600 text-white px-3 sm:px-4 md:px-5 py-2 sm:py-2.5 rounded-md transition-all duration-300 font-semibold shadow-lg hover:shadow-emerald-500/25 transform hover:scale-105 flex items-center justify-center gap-2 text-xs sm:text-sm font-mono border border-emerald-500/30"
                >
                  <Terminal className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span>View Projects</span>
                </Button>
                <Button
                  as={Link}
                  href="/contact"
                  className="bg-black/30 hover:bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 px-3 sm:px-4 md:px-5 py-2 sm:py-2.5 rounded-md transition-all duration-300 font-semibold shadow-lg backdrop-blur-sm transform hover:scale-105 flex items-center justify-center gap-2 text-xs sm:text-sm font-mono"
                >
                  <Mail className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span>Contact</span>
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
                  <span>Resume</span>
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
