'use client';

import { motion } from 'framer-motion';
import { Link } from '@heroui/link';
import { ExternalLink, Shield, Code, Bot, TrendingUp, BarChart3 } from 'lucide-react';
import React from 'react';

export default function Projects() {
  const [preview, setPreview] = React.useState<{ src: string; alt: string } | null>(null);

  return (
    <div className="relative min-h-screen px-4 pt-24 sm:pt-28 pb-8 overflow-hidden">
      <div className="w-full max-w-6xl mx-auto relative z-10 space-y-10">
        {/* Hero */}
        <motion.section
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="relative overflow-hidden rounded-3xl border border-emerald-500/40 bg-gradient-to-br from-black/85 via-emerald-900/30 to-black/80 p-6 sm:p-10 shadow-[0_25px_120px_-60px_rgba(16,185,129,0.9)]"
        >
          <div className="flex flex-wrap items-center gap-3 text-emerald-300 font-mono text-xs sm:text-sm">
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/40 px-3 py-1">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              BUILD LOG
            </span>
            <span>real work · real users · real metrics</span>
          </div>
          <div className="mt-6 grid gap-6 md:grid-cols-[2fr_1fr] md:items-end">
            <div>
              <h1 className="font-sans text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight">
                Full-stack experiments for security, sports, and automation.
              </h1>
              <p className="mt-4 text-base sm:text-lg text-emerald-100/80 leading-relaxed">
                From fight analytics to esports league sims and Discord automation, every build ships with production-ready pipelines, observability, and performance budgets so it can stand up in the wild.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 text-center text-emerald-100">
              {[
                { label: 'Deployments', value: '120+' },
                { label: 'Stacks', value: 'Next · FastAPI · PyTorch' },
                { label: 'Sandbox testers', value: 'Hand-picked' },
                { label: 'Automations', value: '25+' },
              ].map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-emerald-500/30 bg-white/5 px-3 py-4 backdrop-blur">
                  <p className="text-2xl font-semibold">{stat.value}</p>
                  <p className="text-xs uppercase tracking-wide text-emerald-200/80">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
          <span className="mt-6 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 px-4 py-1 text-xs text-emerald-200 bg-black/20">
            <BarChart3 className="h-3 w-3" /> Projects deploy across Oracle Cloud, AWS, and Vercel.
          </span>
        </motion.section>

        {/* Featured */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
          className="rounded-3xl border border-emerald-500/30 bg-black/80 p-6 sm:p-8 shadow-[0_20px_80px_-40px_rgba(16,185,129,0.8)]"
        >
          <div className="mb-6 flex flex-wrap items-center gap-3">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 px-3 py-1 text-xs font-mono text-emerald-300">
              <TrendingUp className="h-3 w-3 text-emerald-400" />
              FEATURED LAB
            </div>
            <span className="text-white/70 text-sm">Long-running build · Always-on iteration</span>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="space-y-5">
              <div className="flex flex-wrap items-center gap-2">
                <h2 className="text-2xl sm:text-3xl font-semibold text-white">Zocratic MMA</h2>
                <span className="text-gray-400 text-sm">(2024 - Present)</span>
                <span className="text-[10px] uppercase tracking-wide px-2 py-0.5 rounded-full border border-emerald-500/40 text-emerald-200 bg-emerald-500/10">
                  Team Project
                </span>
                <Link
                  href="https://www.zocraticmma.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 rounded-full border border-emerald-500/40 px-3 py-1 text-xs text-emerald-200 hover:bg-emerald-500/10 transition"
                >
                  Live Site
                  <ExternalLink className="h-3 w-3" />
                </Link>
              </div>
              <div className="space-y-3 text-sm sm:text-base text-white/90 leading-relaxed">
                <p>
                  Zocratic MMA is where fight nerds scout athletes, study matchup data, and build smarter picks with live telemetry, tape-study annotations,
                  and proprietary scoring tiers rendered through Next.js pages and edge-memoized queries.
                </p>
                <p>
                  Fighter datasets flow through a Python ingestion service, hit FastAPI routers, then feed PyTorch & XGBoost ensembles that project win-probability curves, bankroll swings, and matchup volatility.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
                {[
                  { label: 'Accuracy', value: '78%', sub: 'model win rate' },
                  { label: 'Latency', value: '1.3s', sub: 'global LCP' },
                  { label: 'Entries', value: '5K+', sub: 'weekly picks' },
                ].map((metric) => (
                  <div key={metric.label} className="rounded-2xl border border-emerald-500/20 bg-black/50 px-3 py-3 text-emerald-100">
                    <p className="text-2xl font-semibold">{metric.value}</p>
                    <p className="text-xs uppercase tracking-wide text-emerald-300/70">{metric.label}</p>
                    <p className="text-[11px] text-white/60">{metric.sub}</p>
                  </div>
                ))}
              </div>

              <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/5 px-4 py-3 text-emerald-100 text-sm">
                Highlight: Supabase triggers recompute projections instantly when new PyTorch inference batches land, keeping the leaderboard reactive across web + mobile.
              </div>

              <div className="flex flex-wrap gap-2 text-xs">
                {['Next.js', 'FastAPI', 'Python', 'PyTorch', 'AWS Cognito', 'XGBoost', 'Supabase', 'Oracle Cloud'].map((tech) => (
                  <span key={tech} className="rounded-full border border-emerald-500/30 bg-black/40 px-3 py-1 text-emerald-200">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { src: '/Screenshot 2025-11-25 114637.png', alt: 'Zocratic MMA dashboard view' },
                  { src: '/Screenshot 2025-11-25 114653.png', alt: 'Zocratic MMA analytics charts' },
                ].map((shot) => (
                  <button
                    key={shot.src}
                    type="button"
                    onClick={() => setPreview(shot)}
                    className="rounded-2xl overflow-hidden border border-emerald-500/20 bg-black/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/70 cursor-zoom-in"
                    aria-label={`Expand ${shot.alt}`}
                  >
                    <img src={shot.src} alt={shot.alt} className="h-48 w-full object-cover sm:h-56" loading="lazy" />
                  </button>
                ))}
              </div>

              <div className="rounded-2xl border border-emerald-500/20 bg-black/40 p-4">
                <p className="text-xs font-mono uppercase tracking-wide text-emerald-300">Stack snapshot</p>
                <p className="mt-2 text-sm text-emerald-100">
                  GraphQL gateways, Supabase RLS, and Oracle Cloud deploys orchestrated via Terraform + GitHub Actions.
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Other Projects */}
        <motion.section
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          className="rounded-3xl border border-cyan-500/30 bg-black/70 p-6 sm:p-8"
        >
          <div className="mb-6 flex items-center justify-between flex-wrap gap-3">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 px-3 py-1 text-xs font-mono text-cyan-200">
              <Bot className="h-3 w-3 text-cyan-400" />
              BUILD LABS
            </div>
            <span className="text-white/70 text-sm">R&D playgrounds and automation side quests</span>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <article className="space-y-4 rounded-2xl border border-purple-500/30 bg-gradient-to-br from-black/80 via-purple-900/20 to-black/80 p-5">
              <div className="flex flex-wrap items-center gap-2">
                <Shield className="h-4 w-4 text-purple-300" />
                <h3 className="text-xl font-semibold text-white">CDL Simulator</h3>
                <span className="text-gray-400 text-xs">(2024)</span>
                <span className="text-[10px] uppercase tracking-wide px-2 py-0.5 rounded-full border border-purple-500/40 text-purple-200 bg-purple-500/10">
                  Team Project
                </span>
                <Link
                  href="https://github.com/shariqsk/cdlsimulator"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs text-purple-200 border border-purple-500/40 rounded-full px-3 py-0.5 hover:bg-purple-500/10 transition"
                >
                  Repo
                  <ExternalLink className="h-3 w-3" />
                </Link>
              </div>

              <div className="space-y-2 text-sm text-white/80 leading-relaxed">
                <p>
                  CDL Simulator is a Call of Duty esports league manager where you recruit talent, negotiate contracts, and chase Majors plus Champs banners while balancing payroll,
                  staff morale, and salary-cap rules mirrored from the real circuit.
                </p>
                <p>
                  Under the hood is a custom-built sim engine that runs every tick: player clashes, utility trades, map control swings, and overtime scrambles are all modeled by bespoke state machines rather than canned Monte Carlo rolls. Hazard cards (power drops, meta patches, travel fatigue) hook into that tick loop to bend aim decay, reaction windows, and chemistry values before results are stored in Supabase.
                </p>
              </div>

              <div className="rounded-2xl border border-purple-500/30 bg-purple-500/10 px-4 py-3 text-purple-100 text-sm">
                Highlight: Dynamic season tracker tallies Majors, Champs, and scrims while hazard events impact map pools, player form, and the scouting board in real time.
              </div>

              <div className="rounded-2xl overflow-hidden border border-purple-500/30 bg-black/40">
                <div className="relative w-full bg-black" style={{ aspectRatio: '16 / 9' }}>
                  <iframe
                    src="https://drive.google.com/file/d/1-rbv5D9_xfggXfZdDir2Ozv_GBd6-4Am/preview"
                    className="absolute inset-0 h-full w-full"
                    allow="autoplay"
                    loading="lazy"
                    title="CDL Simulator Gameplay Demo"
                  ></iframe>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 text-xs">
                {['Next.js', 'Framer Motion', 'Tailwind CSS', 'Supabase', 'Vercel'].map((tech) => (
                  <span key={tech} className="rounded-full border border-purple-500/30 bg-black/40 px-3 py-1 text-purple-200">
                    {tech}
                  </span>
                ))}
              </div>
            </article>

            <article className="space-y-4 rounded-2xl border border-cyan-500/30 bg-gradient-to-br from-black/80 via-cyan-900/20 to-black/80 p-5">
              <div className="flex flex-wrap items-center gap-2">
                <Bot className="h-4 w-4 text-cyan-300" />
                <h3 className="text-xl font-semibold text-white">Quote-of-the-Day Discord Bot</h3>
                <span className="text-gray-400 text-xs">(2023 - Present)</span>
                <span className="text-[10px] uppercase tracking-wide px-2 py-0.5 rounded-full border border-cyan-500/40 text-cyan-200 bg-cyan-500/10">
                  Solo Project
                </span>
              </div>

              <div className="space-y-2 text-sm text-white/80 leading-relaxed">
                <p>
                  Quote-of-the-Day runs a discord.js gateway paired with a Python worker that fetches curated quotes, normalizes metadata, and stores delivery receipts for analytics dashboards.
                </p>
                <p>
                  OAuth2 auth, Docker packaging, and GitHub Actions keep deployments atomic, while Redis caching trims third-party API calls by 65% and rate-limits slash commands to &lt;200ms responses.
                </p>
              </div>

              <div className="rounded-2xl border border-cyan-500/30 bg-cyan-500/10 px-4 py-3 text-cyan-100 text-sm">
                Highlight: Schedules daily inspirational drops, fans out slash-command transcripts, and mirrors content to Notion + Supabase for newsletter reuse.
              </div>

              <button
                type="button"
                onClick={() => setPreview({ src: '/QOTD.png', alt: 'Quote-of-the-Day Discord bot dashboard' })}
                className="w-full rounded-2xl overflow-hidden border border-cyan-500/30 bg-black/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/70 cursor-zoom-in"
                aria-label="Expand Quote-of-the-Day Discord bot screenshot"
              >
                <img
                  src="/QOTD.png"
                  alt="Quote-of-the-Day Discord bot dashboard"
                  className="h-64 w-full object-contain bg-black"
                  loading="lazy"
                />
              </button>

              <div className="flex flex-wrap gap-2 text-xs">
                {['discord.js', 'Python', 'Docker', 'OAuth2', 'Redis', 'GitHub Actions'].map((tech) => (
                  <span key={tech} className="rounded-full border border-cyan-500/30 bg-black/40 px-3 py-1 text-cyan-200">
                    {tech}
                  </span>
                ))}
              </div>
            </article>
          </div>
        </motion.section>

        {/* CTA */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
          className="rounded-3xl border border-emerald-500/30 bg-black/70 p-6 sm:p-8 text-center"
        >
          <p className="text-emerald-300 text-base sm:text-lg leading-relaxed">
            Interested in working together?{' '}
            <Link
              href="https://linkedin.com/in/shariqsk"
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-400 hover:text-emerald-300 transition-colors underline decoration-emerald-500/50 underline-offset-4"
            >
              Connect on LinkedIn
            </Link>{' '}
            or{' '}
            <Link
              href="https://drive.google.com/file/d/1U9dGVpkArAHfgTKGVfEm_3nufE68Ea_L/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-400 hover:text-emerald-300 transition-colors underline decoration-emerald-500/50 underline-offset-4"
            >
              view my resume
            </Link>
            .
          </p>
        </motion.section>
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
