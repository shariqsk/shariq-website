'use client';

import { motion } from 'framer-motion';
import { Link } from '@heroui/link';
import { ExternalLink, Github, Terminal, Globe } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      name: "Zocratic MMA",
      description: "A comprehensive fight analytics platform where fight nerds scout athletes, study matchup data, and build smarter picks with live telemetry and proprietary scoring tiers.",
      tags: ["Next.js", "FastAPI", "Python", "PyTorch", "Supabase", "AWS"],
      live: "https://www.zocraticmma.com",
      repo: "https://github.com/shariqsk",
      image: "/Screenshot 2025-11-25 114637.png",
      highlight: "78% model win rate",
    },
    {
      name: "CDL Simulator",
      description: "Call of Duty esports league manager with custom sim engine that models player clashes, utility trades, map control swings, and hazard events through state machines.",
      tags: ["Next.js", "Framer Motion", "Supabase", "Vercel"],
      live: null,
      repo: "https://github.com/shariqsk/cdlsimulator",
      image: null,
      highlight: "Dynamic season tracking",
    },
    {
      name: "QOTD Discord Bot",
      description: "Discord bot that delivers daily inspirational quotes with OAuth2 auth, Docker packaging, and Redis caching for 65% API call reduction.",
      tags: ["discord.js", "Python", "Docker", "OAuth2", "Redis", "GitHub Actions"],
      live: null,
      repo: null,
      image: "/QOTD.png",
      highlight: "<200ms response times",
    },
  ];

  return (
    <div className="relative min-h-screen px-4 sm:px-6 md:px-8 pt-24 sm:pt-28 md:pt-32 pb-16 overflow-hidden flex items-center justify-center">
      {/* Animated gradient background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-emerald-500/10 rounded-full filter blur-[100px]"
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.3, 1],
            rotate: [360, 180, 0],
          }}
          transition={{ 
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full filter blur-[100px]"
        />
      </div>

      <div className="w-full max-w-5xl md:max-w-6xl relative z-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8 sm:mb-12"
        >
          <div className="flex items-center gap-3 mb-4">
            <Terminal className="w-6 h-6 text-emerald-400" />
            <div className="flex flex-col">
              <h1 className="text-3xl sm:text-4xl md:text-5xl text-white font-thin tracking-tight">
                Projects
              </h1>
              <p className="text-zinc-500 font-extralight text-sm sm:text-base">
                A showcase of my work and experiments
              </p>
            </div>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6, type: "spring" }}
              className="relative group"
            >
              <div className="h-full bg-zinc-900/40 backdrop-blur-xl border border-zinc-800 rounded-2xl overflow-hidden transition-all duration-300 hover:border-emerald-500/30 hover:bg-zinc-900/60">
                
                {/* Project Image */}
                {project.image && (
                  <div className="relative aspect-video bg-zinc-950 border-b border-zinc-800">
                    <img 
                      src={project.image} 
                      alt={project.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                )}

                {/* Content */}
                <div className="p-5 sm:p-6">
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <h2 className="text-xl sm:text-2xl text-white font-light group-hover:text-emerald-400 transition-colors duration-300">
                      {project.name}
                    </h2>
                    <div className="flex gap-2">
                      {project.live && (
                        <Link
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-8 h-8 rounded-lg bg-zinc-800 border border-zinc-700 flex items-center justify-center text-zinc-500 hover:text-emerald-400 hover:border-emerald-500/40 hover:bg-emerald-500/10 transition-all duration-300"
                          title="View Live Site"
                        >
                          <Globe className="w-4 h-4" />
                        </Link>
                      )}
                      {project.repo && (
                        <Link
                          href={project.repo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-8 h-8 rounded-lg bg-zinc-800 border border-zinc-700 flex items-center justify-center text-zinc-500 hover:text-emerald-400 hover:border-emerald-500/40 hover:bg-emerald-500/10 transition-all duration-300"
                          title="View Repository"
                        >
                          <Github className="w-4 h-4" />
                        </Link>
                      )}
                    </div>
                  </div>

                  <p className="text-zinc-400 font-extralight text-sm sm:text-base leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Highlight */}
                  {project.highlight && (
                    <div className="mb-4 p-3 bg-emerald-500/5 border border-emerald-500/20 rounded-lg">
                      <p className="text-emerald-400/90 text-xs sm:text-sm font-extralight flex items-center gap-2">
                        <Terminal className="w-3 h-3" />
                        {project.highlight}
                      </p>
                    </div>
                  )}

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span 
                        key={tag}
                        className="px-2 py-1 bg-zinc-800 border border-zinc-700 rounded-md text-zinc-500 text-xs font-extralight"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6, type: "spring" }}
          className="mt-12 sm:mt-16 text-center"
        >
          <div className="p-6 sm:p-8 bg-zinc-900/40 backdrop-blur-xl border border-zinc-800 rounded-2xl">
            <p className="text-zinc-300 font-light text-base sm:text-lg mb-4">
              Interested in collaborating or want to discuss a project?
            </p>
            <Link
              href="mailto:contact@shariqsafdarkhan.com"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-600 to-cyan-600 text-white rounded-lg font-normal text-sm sm:text-base transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/20"
            >
              <Terminal className="w-4 h-4" />
              Get in Touch
            </Link>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
