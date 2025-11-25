'use client';

import { motion } from 'framer-motion';
import { Link } from '@heroui/link';
import { ExternalLink, Shield, Code, Bot, TrendingUp, BarChart3 } from 'lucide-react';
import React from 'react';

export default function Projects() {
  const [preview, setPreview] = React.useState<{ src: string; alt: string } | null>(null);

  return (
    <div className="relative min-h-screen px-4 pt-24 sm:pt-28 pb-8 overflow-hidden">
      <div className="w-full max-w-5xl mx-auto relative z-10">
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
              <span className="text-emerald-400 text-sm sm:text-base font-mono">projects_page.sh</span>
            </div>
            <h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-emerald-400 mb-3 sm:mb-4 tracking-tight leading-none font-sans">
              Projects
            </h1>
            <p className="text-emerald-300 text-base sm:text-base md:text-lg lg:text-xl xl:text-2xl font-light tracking-wide font-sans">
            From Dark Screens to Sharp Scenes
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
             <span className="text-emerald-400 text-xs font-mono">main_project.sh</span>
           </div>

          <div className="space-y-3 sm:space-y-4 font-mono">
            <div className="flex items-start gap-2">
              <span className="text-emerald-400 text-xs sm:text-sm">{'>'}</span>
                             <span className="text-white text-xs sm:text-sm">Featured</span>
            </div>
            
            <div className="ml-4 space-y-2 sm:space-y-3 text-xs sm:text-sm">
              <div className="flex items-center gap-2 flex-wrap mb-2 sm:mb-3">
                <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4 text-emerald-400" />
                <span className="text-emerald-300 font-semibold text-sm sm:text-base">Zocratic MMA</span>
                <span className="text-gray-400 text-xs">(2024 - Present)</span>
                <span className="text-[10px] uppercase tracking-wide px-2 py-0.5 rounded-full border border-emerald-500/40 text-emerald-200 bg-emerald-500/10">
                  Team Project
                </span>
                <Link href="https://www.zocraticmma.com" target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:text-emerald-300 transition-colors">
                  <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
                </Link>
              </div>
              
              <div className="text-white space-y-2 leading-relaxed">
                <p className="drop-shadow-[0_0_2px_rgba(255,255,255,0.3)]">
                  Zocratic MMA is a fan-first platform where fight nerds scout athletes, study matchup data, and build smarter picks with live telemetry, tape-study annotations, and proprietary scoring tiers rendered through Next.js pages and edge-memoized queries.
                </p>
                <p className="drop-shadow-[0_0_2px_rgba(255,255,255,0.3)]">
                  Fighter datasets stream in via a Python ingestion service that normalizes stats before feeding FastAPI endpoints and PyTorch ensembles (XGBoost + NN stack) that project win-probability curves, bankroll swings, and matchup volatility.
                </p>
              </div>

              <div className="px-3 py-2 bg-emerald-500/10 border border-emerald-500/30 rounded-md text-emerald-200 text-xs sm:text-sm font-semibold">
                Highlight: 5K+ weekly entries track strike accuracy, bankroll swings, and leaderboard rank live while Supabase triggers recompute projections whenever new PyTorch inference batches land.
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {[
                  { src: '/Screenshot 2025-11-25 114637.png', alt: 'Zocratic MMA dashboard view' },
                  { src: '/Screenshot 2025-11-25 114653.png', alt: 'Zocratic MMA analytics charts' },
                ].map((shot) => (
                  <button
                    key={shot.src}
                    type="button"
                    onClick={() => setPreview(shot)}
                    className="rounded-lg overflow-hidden border border-emerald-500/20 bg-black/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/70 cursor-zoom-in"
                    aria-label={`Expand ${shot.alt}`}
                  >
                    <img
                      src={shot.src}
                      alt={shot.alt}
                      className="w-full h-56 sm:h-64 object-cover"
                      loading="lazy"
                    />
                  </button>
                ))}
              </div>

              {/* Tech Stack */}
              <div className="mt-3 sm:mt-4 p-2 sm:p-3 bg-black/30 border border-emerald-500/20 rounded-md">
                <div className="flex items-center gap-2 mb-2">
                  <Code className="w-2 h-2 sm:w-3 sm:h-3 text-emerald-400" />
                  <span className="text-emerald-400 text-xs font-semibold">TECH STACK</span>
                </div>
                <div className="flex flex-wrap gap-1 sm:gap-2 text-xs">
                  <span className="px-1.5 sm:px-2 py-0.5 sm:py-1 bg-emerald-500/20 border border-emerald-500/30 rounded text-emerald-300">Next.js</span>
                  <span className="px-1.5 sm:px-2 py-0.5 sm:py-1 bg-emerald-500/20 border border-emerald-500/30 rounded text-emerald-300">FastAPI</span>
                  <span className="px-1.5 sm:px-2 py-0.5 sm:py-1 bg-emerald-500/20 border border-emerald-500/30 rounded text-emerald-300">Python</span>
                  <span className="px-1.5 sm:px-2 py-0.5 sm:py-1 bg-emerald-500/20 border border-emerald-500/30 rounded text-emerald-300">PyTorch</span>
                  <span className="px-1.5 sm:px-2 py-0.5 sm:py-1 bg-emerald-500/20 border border-emerald-500/30 rounded text-emerald-300">AWS Cognito</span>
                  <span className="px-1.5 sm:px-2 py-0.5 sm:py-1 bg-emerald-500/20 border border-emerald-500/30 rounded text-emerald-300">XGBoost</span>
                  <span className="px-1.5 sm:px-2 py-0.5 sm:py-1 bg-emerald-500/20 border border-emerald-500/30 rounded text-emerald-300">Supabase</span>
                  <span className="px-1.5 sm:px-2 py-0.5 sm:py-1 bg-emerald-500/20 border border-emerald-500/30 rounded text-emerald-300">Oracle Cloud</span>
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
             <span className="text-cyan-400 text-xs font-mono">additional_work.sh</span>
           </div>

          <div className="space-y-2 sm:space-y-3 font-mono text-xs sm:text-sm">
            <div className="flex items-start gap-2">
              <span className="text-cyan-400">{'>'}</span>
                             <span className="text-white">Projects</span>
            </div>

            <div className="ml-4 space-y-3 sm:space-y-4">
              <div className="bg-black/30 border border-purple-500/20 rounded-lg p-3 sm:p-4">
                <div className="flex items-center gap-2 flex-wrap mb-2 sm:mb-3">
                  <Shield className="w-3 h-3 sm:w-4 sm:h-4 text-purple-400" />
                  <span className="text-purple-300 font-semibold">CDL Simulator</span>
                  <span className="text-gray-400 text-xs">(2024)</span>
                  <span className="text-[10px] uppercase tracking-wide px-2 py-0.5 rounded-full border border-purple-500/40 text-purple-200 bg-purple-500/10">
                    Team Project
                  </span>
                  <Link href="https://github.com/shariqsk/cdlsimulator" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300 transition-colors">
                    <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
                  </Link>
                </div>
                
                <div className="text-white space-y-2 text-xs leading-relaxed">
                  <p>
                    CDL Simulator is a Call of Duty esports league manager where you recruit talent, negotiate contracts, and chase majors plus Champs banners while balancing payroll, staff morale, and salary-cap rules mirrored from the real circuit.
                  </p>
                  <p>
                    The sim core runs weighted Monte Carlo match scripts with hazard cards (power outages, crowd buffs, meta shifts) that influence map vetoes and roster chemistry, then persists standings/salary deltas via Supabase.
                  </p>
                </div>

                <div className="mt-3 px-3 py-2 bg-purple-500/10 border border-purple-500/30 rounded-md text-purple-100 text-xs sm:text-sm font-semibold">
                  Highlight: Dynamic season tracker tallies Majors, Champs, and scrims while hazard events impact map pools, player form, and the scouting board in real time.
                </div>

                <div className="mt-3 rounded-lg overflow-hidden border border-purple-500/30 bg-black/40">
                  <div className="relative w-full bg-black" style={{ aspectRatio: '16 / 9' }}>
                    <iframe
                      src="https://drive.google.com/file/d/1-rbv5D9_xfggXfZdDir2Ozv_GBd6-4Am/preview"
                      className="absolute inset-0 w-full h-full"
                      allow="autoplay"
                      loading="lazy"
                      title="CDL Simulator Gameplay Demo"
                    ></iframe>
                  </div>
                </div>

                <div className="mt-3 pt-2 border-t border-purple-500/20">
                  <div className="flex items-center gap-2 mb-2">
                    <Code className="w-2 h-2 sm:w-3 sm:h-3 text-purple-400" />
                    <span className="text-purple-400 text-xs font-semibold">TECH STACK</span>
                  </div>
                  <div className="flex flex-wrap gap-1 sm:gap-2 text-xs">
                    <span className="px-1.5 sm:px-2 py-0.5 sm:py-1 bg-purple-500/20 border border-purple-500/30 rounded text-purple-300">Next.js</span>
                    <span className="px-1.5 sm:px-2 py-0.5 sm:py-1 bg-purple-500/20 border border-purple-500/30 rounded text-purple-300">Framer Motion</span>
                    <span className="px-1.5 sm:px-2 py-0.5 sm:py-1 bg-purple-500/20 border border-purple-500/30 rounded text-purple-300">Tailwind CSS</span>
                    <span className="px-1.5 sm:px-2 py-0.5 sm:py-1 bg-purple-500/20 border border-purple-500/30 rounded text-purple-300">Supabase</span>
                    <span className="px-1.5 sm:px-2 py-0.5 sm:py-1 bg-purple-500/20 border border-purple-500/30 rounded text-purple-300">Vercel</span>
                  </div>
                </div>
              </div>

              <div className="bg-black/30 border border-cyan-500/20 rounded-lg p-3 sm:p-4">
                <div className="flex items-center gap-2 flex-wrap mb-2 sm:mb-3">
                  <Bot className="w-3 h-3 sm:w-4 sm:h-4 text-cyan-400" />
                  <span className="text-cyan-300 font-semibold">Quote-of-the-Day Discord Bot</span>
                  <span className="text-gray-400 text-xs">(2023 - Present)</span>
                  <span className="text-[10px] uppercase tracking-wide px-2 py-0.5 rounded-full border border-cyan-500/40 text-cyan-200 bg-cyan-500/10">
                    Solo Project
                  </span>
                </div>
                
                <div className="text-white space-y-2 text-xs leading-relaxed">
                  <p className="drop-shadow-[0_0_2px_rgba(255,255,255,0.3)]">
                    Quote-of-the-Day runs a discord.js gateway paired with a Python worker that fetches curated quotes, normalizes metadata, and stores delivery receipts for analytics dashboards.
                  </p>
                  <p className="drop-shadow-[0_0_2px_rgba(255,255,255,0.3)]">
                    OAuth2 auth, Docker packaging, and GitHub Actions keep deployments atomic, while Redis caching trims third-party API calls by 65% and rate-limits slash commands to &lt;200ms responses.
                  </p>
                </div>

                <div className="mt-3 px-3 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-md text-cyan-100 text-xs sm:text-sm font-semibold">
                  Highlight: Schedules daily inspirational drops, fans out slash-command transcripts, and mirrors content to Notion + Supabase for newsletter reuse.
                </div>

                <button
                  type="button"
                  onClick={() =>
                    setPreview({ src: '/QOTD.png', alt: 'Quote-of-the-Day Discord bot dashboard' })
                  }
                  className="mt-3 rounded-lg overflow-hidden border border-cyan-500/30 bg-black/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/70 cursor-zoom-in"
                  aria-label="Expand Quote-of-the-Day Discord bot screenshot"
                >
                  <img
                    src="/QOTD.png"
                    alt="Quote-of-the-Day Discord bot dashboard"
                    className="w-full h-48 sm:h-56 object-cover"
                    loading="lazy"
                  />
                </button>

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
                                 <span className="text-cyan-400 text-xs font-mono">PROJECTS</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Simple Flowing Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="text-center mb-16 sm:mb-20 md:mb-24"
        >
          <p className="text-emerald-300 text-base sm:text-lg font-light leading-relaxed">
            Interested in working together? <Link href="https://linkedin.com/in/shariqsk" target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:text-emerald-300 transition-colors duration-300 underline decoration-emerald-500/50 underline-offset-4">Connect on LinkedIn</Link> or <Link href="https://drive.google.com/file/d/1U9dGVpkArAHfgTKGVfEm_3nufE68Ea_L/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:text-emerald-300 transition-colors duration-300 underline decoration-emerald-500/50 underline-offset-4">view my resume</Link>.
          </p>
        </motion.div>
      </div>

      {preview && (
        <button
          type="button"
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 focus:outline-none"
          onClick={() => setPreview(null)}
          aria-label="Close image preview"
        >
          <div className="relative max-w-4xl w-full">
            <img
              src={preview.src}
              alt={preview.alt}
              className="w-full max-h-[80vh] object-contain rounded-lg border border-emerald-400/40"
            />
            <span className="absolute top-3 right-3 text-xs font-mono text-white/70 bg-black/70 px-2 py-1 rounded">
              click anywhere to close
            </span>
          </div>
        </button>
      )}
    </div>
  );
}
