'use client';

import { motion } from 'framer-motion';
import { Button } from '@heroui/button';
import { Link } from '@heroui/link';
import { Terminal, Eye, Mail, Phone, Github, Linkedin, Calendar, ExternalLink, Shield, Code, Database, Cloud, Lock, Zap, User, Target, BookOpen } from 'lucide-react';
import React from 'react';

export default function About() {
  return (
    <div className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 xl:px-12 pt-16 pb-8">
      <div className="w-full relative z-10">
        {/* Terminal Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-4 sm:mb-6 md:mb-8"
        >
          <div className="inline-block bg-black/40 backdrop-blur-sm border border-emerald-500/30 rounded-lg p-3 sm:p-4 mb-3 sm:mb-4">
            <div className="flex items-center gap-2 mb-2">
              <div className="flex gap-1">
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-500 rounded-full"></div>
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full"></div>
              </div>
              <span className="text-emerald-400 text-xs font-mono">about_shariq.exe</span>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-emerald-400 mb-2 tracking-tight leading-none font-mono">
              $ whoami
            </h1>
            <p className="text-emerald-300 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-light tracking-wide font-mono">
              Computer Security Student & Developer
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
            <div className="flex gap-1">
              <div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-500 rounded-full"></div>
              <div className="w-2 h-2 sm:w-3 sm:h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full"></div>
            </div>
            <span className="text-emerald-400 text-xs font-mono">user_profile.sh</span>
          </div>

          {/* Terminal Content */}
          <div className="space-y-3 sm:space-y-4 font-mono">
            <div className="flex items-start gap-2">
              <span className="text-emerald-400 text-sm sm:text-base">$</span>
              <span className="text-white text-sm sm:text-base">cat profile.txt</span>
            </div>
            
            <div className="ml-4 space-y-3 sm:space-y-4 text-sm sm:text-base lg:text-lg">
              <p className="text-gray-300 leading-relaxed">
                I'm a Computer Security student at York University with a passion for cybersecurity and secure software development. 
                Currently working as an Import Analyst at Farrow, I bring a unique perspective combining security knowledge with real-world business processes.
              </p>
              <p className="text-gray-300 leading-relaxed">
                My focus areas include web security, cloud platforms, and building secure applications. I love learning new technologies 
                and applying security best practices to solve real problems.
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
        <div className="grid grid-cols-1 gap-4 sm:gap-5 md:gap-6 mb-4 sm:mb-5 md:mb-6">
          {/* Education Terminal */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="bg-black/40 backdrop-blur-sm border border-blue-500/30 rounded-lg p-3 sm:p-4 md:p-5 relative overflow-hidden"
          >
            {/* Terminal Header */}
            <div className="flex items-center gap-2 mb-3 sm:mb-4">
              <div className="flex gap-1">
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-500 rounded-full"></div>
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full"></div>
              </div>
              <span className="text-blue-400 text-xs font-mono">education.sh</span>
            </div>

            <div className="space-y-2 sm:space-y-3 font-mono text-xs sm:text-sm">
              <div className="flex items-start gap-2">
                <span className="text-blue-400">$</span>
                <span className="text-white">cat education.txt</span>
              </div>
              
              <div className="ml-4 space-y-2">
                <div className="text-blue-300 font-semibold">York University (Toronto, ON)</div>
                <div className="text-gray-300">Specialized Honours BSc, Computer Security</div>
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
              <div className="flex gap-1">
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-500 rounded-full"></div>
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full"></div>
              </div>
              <span className="text-purple-400 text-xs font-mono">experience.sh</span>
            </div>

            <div className="space-y-2 sm:space-y-3 font-mono text-xs sm:text-sm">
              <div className="flex items-start gap-2">
                <span className="text-purple-400">$</span>
                <span className="text-white">cat experience.txt</span>
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

        {/* Skills Terminal */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="bg-black/40 backdrop-blur-sm border border-cyan-500/30 rounded-lg p-3 sm:p-4 md:p-5 mb-4 sm:mb-5 md:mb-6 relative overflow-hidden"
        >
          {/* Terminal Header */}
          <div className="flex items-center gap-2 mb-3 sm:mb-4">
            <div className="flex gap-1">
              <div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-500 rounded-full"></div>
              <div className="w-2 h-2 sm:w-3 sm:h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full"></div>
            </div>
            <span className="text-cyan-400 text-xs font-mono">skills_analysis.sh</span>
          </div>

          <div className="space-y-2 sm:space-y-3 font-mono text-xs sm:text-sm">
            <div className="flex items-start gap-2">
              <span className="text-cyan-400">$</span>
              <span className="text-white">./analyze_skills.sh</span>
            </div>

            <div className="ml-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
              <div>
                <div className="text-cyan-300 font-semibold mb-2">Security & Systems</div>
                <div className="text-gray-300 text-xs space-y-1">
                  <div>• Firewalls, SIEM (Splunk, QRadar)</div>
                  <div>• Antivirus, MFA, Privilege Access</div>
                  <div>• Nmap, Wireshark, OS Hardening</div>
                  <div>• JWT, OWASP</div>
                </div>
              </div>
              <div>
                <div className="text-cyan-300 font-semibold mb-2">Cloud Platforms</div>
                <div className="text-gray-300 text-xs space-y-1">
                  <div>• AWS (CloudTrail, IAM)</div>
                  <div>• Azure, Docker, Oracle Cloud</div>
                  <div>• Vercel, Supabase</div>
                  <div>• GitHub Actions</div>
                </div>
              </div>
              <div>
                <div className="text-cyan-300 font-semibold mb-2">Languages & Scripting</div>
                <div className="text-gray-300 text-xs space-y-1">
                  <div>• Python, Bash, PowerShell</div>
                  <div>• CMD, JavaScript, TypeScript</div>
                  <div>• SQL, Java, R</div>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute top-2 sm:top-3 md:top-4 right-2 sm:right-3 md:right-4">
            <div className="bg-cyan-500/20 border border-cyan-500/40 rounded-md px-1.5 sm:px-2 py-0.5 sm:py-1">
              <div className="flex items-center gap-1">
                <Code className="w-2 h-2 sm:w-3 sm:h-3 text-cyan-400" />
                <span className="text-cyan-400 text-xs font-mono">SKILLS</span>
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
                  href="/projects"
                  className="bg-gradient-to-r from-emerald-600 to-cyan-600 text-white px-3 sm:px-4 md:px-5 py-2 sm:py-2.5 rounded-md transition-all duration-300 font-semibold shadow-lg hover:shadow-emerald-500/25 transform hover:scale-105 flex items-center justify-center gap-2 text-xs sm:text-sm font-mono border border-emerald-500/30"
                >
                  <Terminal className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span>./view_projects.sh</span>
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
