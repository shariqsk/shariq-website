'use client';

import { motion } from 'framer-motion';
import { Button } from '@heroui/button';
import { Link } from '@heroui/link';
import { Terminal, Eye, Mail, Phone, Github, Linkedin, Calendar, ExternalLink, Shield, Code, Database, Cloud, Lock, Zap, User, Target, BookOpen, MessageSquare, Send } from 'lucide-react';
import React from 'react';

export default function Contact() {
  return (
    <div className="relative min-h-screen flex items-center justify-center px-4 pt-24 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[200px] h-[200px] md:w-[300px] md:h-[300px] bg-gradient-radial from-blue-500/8 via-blue-400/4 to-transparent rounded-full animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[250px] h-[250px] md:w-[400px] md:h-[400px] bg-gradient-radial from-emerald-500/6 via-emerald-400/3 to-transparent rounded-full animate-float-delayed"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-gradient-radial from-purple-500/4 via-purple-400/2 to-transparent rounded-full animate-float-slow"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-blue-500/2 to-purple-500/2"></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
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
              <span className="text-emerald-400 text-xs font-mono">contact_system.exe</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-emerald-400 mb-2 tracking-tight leading-none font-mono">
              $ contact --init
            </h1>
            <p className="text-emerald-300 text-sm md:text-lg lg:text-xl font-light tracking-wide font-mono">
              Get in Touch
            </p>
          </div>
        </motion.div>

        {/* Contact Form Terminal */}
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
            <span className="text-emerald-400 text-xs font-mono">contact_form.sh</span>
          </div>

          <div className="space-y-4 font-mono">
            <div className="flex items-start gap-2">
              <span className="text-emerald-400 text-sm">$</span>
              <span className="text-white text-sm">./init_contact_form.sh</span>
            </div>
            
            <div className="ml-4 space-y-4">
              <div className="text-gray-300 text-sm">
                <p>Ready to connect? I'm always open to discussing:</p>
                <ul className="list-disc list-inside mt-2 space-y-1 text-xs">
                  <li>Cybersecurity opportunities and collaborations</li>
                  <li>Web development projects and consulting</li>
                  <li>Technology discussions and networking</li>
                  <li>Academic research and learning opportunities</li>
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  as={Link}
                  href="mailto:00khanshariq@gmail.com"
                  className="bg-gradient-to-r from-emerald-600 to-cyan-600 text-white px-5 py-2.5 rounded-md transition-all duration-300 font-semibold shadow-lg hover:shadow-emerald-500/25 transform hover:scale-105 flex items-center justify-center gap-2 text-sm font-mono border border-emerald-500/30"
                >
                  <Mail className="w-4 h-4" />
                  <span>./send_email.sh</span>
                </Button>
                <Button
                  as={Link}
                  href="tel:+16473036451"
                  className="bg-black/30 hover:bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 px-5 py-2.5 rounded-md transition-all duration-300 font-semibold shadow-lg backdrop-blur-sm transform hover:scale-105 flex items-center justify-center gap-2 text-sm font-mono"
                >
                  <Phone className="w-4 h-4" />
                  <span>./call.sh</span>
                </Button>
              </div>
            </div>
          </div>

          {/* Contact Badge */}
          <div className="absolute top-4 right-4">
            <div className="bg-emerald-500/20 border border-emerald-500/40 rounded-md px-2 py-1">
              <div className="flex items-center gap-1">
                <MessageSquare className="w-3 h-3 text-emerald-400" />
                <span className="text-emerald-400 text-xs font-mono">READY</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Contact Info Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {/* Email Terminal */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="bg-black/40 backdrop-blur-sm border border-blue-500/30 rounded-lg p-5 relative overflow-hidden"
          >
            {/* Terminal Header */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex gap-1">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <span className="text-blue-400 text-xs font-mono">email.sh</span>
            </div>

            <div className="space-y-3 font-mono text-sm">
              <div className="flex items-start gap-2">
                <span className="text-blue-400">$</span>
                <span className="text-white">cat email.txt</span>
              </div>
              
              <div className="ml-4 space-y-2">
                <div className="text-blue-300 font-semibold">Primary Email</div>
                <div className="text-gray-300">00khanshariq@gmail.com</div>
                <div className="text-gray-400 text-xs mt-2">
                  <div>Response time: Usually within 24 hours</div>
                  <div>Best for: Professional inquiries, project discussions</div>
                </div>
              </div>
            </div>

            <div className="absolute top-4 right-4">
              <div className="bg-blue-500/20 border border-blue-500/40 rounded-md px-2 py-1">
                <div className="flex items-center gap-1">
                  <Mail className="w-3 h-3 text-blue-400" />
                  <span className="text-blue-400 text-xs font-mono">EMAIL</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Phone Terminal */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            className="bg-black/40 backdrop-blur-sm border border-purple-500/30 rounded-lg p-5 relative overflow-hidden"
          >
            {/* Terminal Header */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex gap-1">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <span className="text-purple-400 text-xs font-mono">phone.sh</span>
            </div>

            <div className="space-y-3 font-mono text-sm">
              <div className="flex items-start gap-2">
                <span className="text-purple-400">$</span>
                <span className="text-white">cat phone.txt</span>
              </div>
              
              <div className="ml-4 space-y-2">
                <div className="text-purple-300 font-semibold">Phone Number</div>
                <div className="text-gray-300">(647) 303-6451</div>
                <div className="text-gray-400 text-xs mt-2">
                  <div>Available: Weekdays 9 AM - 6 PM EST</div>
                  <div>Best for: Urgent matters, voice calls</div>
                </div>
              </div>
            </div>

            <div className="absolute top-4 right-4">
              <div className="bg-purple-500/20 border border-purple-500/40 rounded-md px-2 py-1">
                <div className="flex items-center gap-1">
                  <Phone className="w-3 h-3 text-purple-400" />
                  <span className="text-purple-400 text-xs font-mono">PHONE</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Social Links Terminal */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="bg-black/40 backdrop-blur-sm border border-cyan-500/30 rounded-lg p-5 mb-6 relative overflow-hidden"
        >
          {/* Terminal Header */}
          <div className="flex items-center gap-2 mb-4">
            <div className="flex gap-1">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <span className="text-cyan-400 text-xs font-mono">social_links.sh</span>
          </div>

          <div className="space-y-3 font-mono text-sm">
            <div className="flex items-start gap-2">
              <span className="text-cyan-400">$</span>
              <span className="text-white">cat social.txt</span>
            </div>

            <div className="ml-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <div className="text-cyan-300 font-semibold mb-2">Professional</div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Github className="w-4 h-4 text-cyan-400" />
                      <Link href="https://github.com/shariqsk" className="text-gray-300 hover:text-cyan-300 transition-colors">
                        github.com/shariqsk
                      </Link>
                    </div>
                    <div className="flex items-center gap-2">
                      <Linkedin className="w-4 h-4 text-cyan-400" />
                      <Link href="https://linkedin.com/in/shariq-khan" className="text-gray-300 hover:text-cyan-300 transition-colors">
                        linkedin.com/in/shariq-khan
                      </Link>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="text-cyan-300 font-semibold mb-2">Direct Contact</div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4 text-cyan-400" />
                      <Link href="mailto:00khanshariq@gmail.com" className="text-gray-300 hover:text-cyan-300 transition-colors">
                        00khanshariq@gmail.com
                      </Link>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-cyan-400" />
                      <Link href="tel:+16473036451" className="text-gray-300 hover:text-cyan-300 transition-colors">
                        (647) 303-6451
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute top-4 right-4">
            <div className="bg-cyan-500/20 border border-cyan-500/40 rounded-md px-2 py-1">
              <div className="flex items-center gap-1">
                <Send className="w-3 h-3 text-cyan-400" />
                <span className="text-cyan-400 text-xs font-mono">SOCIAL</span>
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
                  href="/projects"
                  className="bg-black/30 hover:bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 px-5 py-2.5 rounded-md transition-all duration-300 font-semibold shadow-lg backdrop-blur-sm transform hover:scale-105 flex items-center justify-center gap-2 text-sm font-mono"
                >
                  <Terminal className="w-4 h-4" />
                  <span>./view_projects.sh</span>
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
