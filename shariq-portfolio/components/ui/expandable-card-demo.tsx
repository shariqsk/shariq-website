"use client";

import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/hooks/use-outside-click";
import { ExternalLink, Github, ArrowRight, Terminal, Globe } from "lucide-react";

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return isMobile;
}

interface Project {
  name: string;
  description: string;
  tags: string[];
  live: string | null;
  repo: string | null;
  image: string | null;
  highlight: string | null;
  isVideo?: boolean;
  videoId?: string | null;
}

const projects: Project[] = [
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
    live: "https://cdlsimulator.com",
    repo: "https://github.com/shariqsk/cdlsimulator",
    image: null,
    videoId: "1-rbv5D9_xfggXfZdDir2Ozv_GBd6-4Am",
    highlight: "Dynamic season tracking",
    isVideo: true,
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
  {
    name: "Phintic",
    description: "A practical security education site teaching fundamentals through 8 security topics, interactive simulations, and knowledge tests to help build good security habits against modern threats like deepfakes and AI impersonation.",
    tags: ["Next.js", "React", "Security Education", "Interactive Learning"],
    live: "https://phintic.com",
    repo: null,
    image: "/phintic.png",
    highlight: "Interactive security simulations",
  },
  {
    name: "Blink!",
    description: "A desktop application leveraging computer vision to monitor ocular health patterns. Uses real-time webcam analysis with on-device processing to track blink frequency and deliver configurable visual alerts for maintaining healthy eye habits during extended work sessions.",
    tags: ["Python", "MediaPipe", "OpenCV", "PyQt6", "Computer Vision", "ML"],
    live: null,
    repo: "https://github.com/shariqsk/blink",
    image: null,
    highlight: "Privacy-first on-device processing",
  },
];

const cards = projects.map((project) => ({
  title: project.name,
  description: project.description,
  src: project.image || "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23181818'/%3E%3C/svg%3E",
  ctaText: project.live || project.repo ? "View Project" : "Details",
  ctaLink: project.live || project.repo || "#",
  tags: project.tags,
  highlight: project.highlight,
  live: project.live,
  repo: project.repo,
  isVideo: (project as any).isVideo || false,
  videoId: (project as any).videoId || null,
  content: () => (
    <div className="flex flex-col gap-4">
      <p className="text-sm leading-relaxed">{project.description}</p>
      {project.highlight && (
        <div className="p-3 bg-emerald-500/5 border border-emerald-500/20 rounded-lg">
          <p className="text-emerald-400/90 text-xs flex items-center gap-2">
            <Terminal className="w-3 h-3" />
            {project.highlight}
          </p>
        </div>
      )}
      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="px-2 py-1 bg-zinc-800 border border-zinc-700 rounded-md text-zinc-500 text-xs"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="flex gap-2 pt-2">
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-zinc-400 hover:text-emerald-400 hover:border-emerald-500/40 transition-colors"
          >
            <ExternalLink className="w-4 h-4" />
            Live Site
          </a>
        )}
        {project.repo && (
          <a
            href={project.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-zinc-400 hover:text-white hover:border-white/40 transition-colors"
          >
            <Github className="w-4 h-4" />
            GitHub
          </a>
        )}
      </div>
    </div>
  ),
}));

export default function ExpandableCardDemo() {
  const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(
    null
  );
  const ref = useRef<HTMLDivElement>(null);
  const id = useId();
  const isMobile = useIsMobile();

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  return (
    <>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={isMobile ? { opacity: 1 } : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={isMobile ? { opacity: 1 } : { opacity: 0 }}
            transition={isMobile ? { duration: 0 } : { duration: 0.2, ease: "easeOut" }}
            className="fixed inset-0 bg-black/40 h-full w-full z-10 backdrop-blur-sm"
            onClick={(e) => {
              e.stopPropagation();
              setActive(null);
            }}
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <motion.div
            initial={isMobile ? { opacity: 1 } : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={isMobile ? { opacity: 1 } : { opacity: 0 }}
            transition={isMobile ? { duration: 0 } : { duration: 0.2, ease: "easeOut" }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 overflow-hidden"
            onClick={(e) => {
              e.stopPropagation();
              setActive(null);
            }}
          >
            <motion.button
              key={`button-${active.title}-${id}`}
              initial={isMobile ? { opacity: 1 } : { opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={isMobile ? { opacity: 1 } : { opacity: 0 }}
              transition={isMobile ? { duration: 0 } : { duration: 0.15 }}
              className="absolute top-4 right-4 z-10 flex items-center justify-center bg-zinc-800 border border-zinc-700 hover:bg-zinc-700 rounded-full h-10 w-10 transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                setActive(null);
              }}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              ref={ref}
              initial={isMobile ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={isMobile ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.95, y: 10 }}
              transition={isMobile ? { duration: 0 } : { duration: 0.3, ease: "easeOut" }}
              className="w-full max-w-[600px] md:max-w-[800px] max-h-[85vh] flex flex-col bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden shadow-2xl shadow-black/50 relative"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.div
                layoutId={isMobile ? undefined : `image-${active.title}-${id}`}
                className="relative flex-shrink-0"
              >
                {(active as any).isVideo && (active as any).videoId ? (
                  <div className="relative w-full h-32 md:h-40 bg-black overflow-hidden">
                    <iframe
                      src={`https://drive.google.com/file/d/${(active as any).videoId}/preview`}
                      className="absolute inset-0 w-full h-full object-cover border-0"
                      allow="autoplay; fullscreen"
                      allowFullScreen
                    />
                  </div>
                ) : (
                  <img
                    width={200}
                    height={200}
                    src={active.src || "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23181818'/%3E%3C/svg%3E"}
                    alt={active.title}
                    className="w-full h-32 md:h-40 object-cover"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-900/50 to-zinc-900 pointer-events-none" />
              </motion.div>

              <div className="flex-1 overflow-hidden flex flex-col p-6">
                <div className="mb-4 flex-shrink-0">
                  <motion.h3
                    layoutId={isMobile ? undefined : `title-${active.title}-${id}`}
                    className="font-bold text-white text-2xl md:text-3xl mb-2"
                  >
                    {active.title}
                  </motion.h3>
                  <motion.p
                    layoutId={isMobile ? undefined : `description-${active.description}-${id}`}
                    className="text-zinc-400 text-sm md:text-base"
                  >
                    {active.description}
                  </motion.p>
                </div>
                <div className="flex-1 overflow-y-auto overflow-x-hidden pr-2">
                  <motion.div
                    initial={isMobile ? { opacity: 1 } : { opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={isMobile ? { opacity: 1 } : { opacity: 0 }}
                    transition={isMobile ? { duration: 0 } : { duration: 0.25, delay: 0.1 }}
                    className="text-zinc-400 text-sm md:text-base flex flex-col gap-4 pb-4"
                  >
                    {typeof active.content === "function"
                      ? active.content()
                      : active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
      <div className="grid gap-4">
        {cards.map((card, index) => (
          <motion.div
            key={`card-${card.title}-${id}`}
            onClick={(e) => {
              if (!active) {
                setActive(card);
              }
            }}
            className="group relative bg-zinc-900/60 border border-zinc-800/50 rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 hover:border-emerald-500/30 hover:shadow-lg hover:shadow-emerald-500/5 hover:-translate-y-1"
          >
            <div className="p-4 md:p-6 flex flex-col md:flex-row gap-4 md:gap-6">
              <motion.div
                layoutId={isMobile ? undefined : `image-${card.title}-${id}`}
                className="relative flex-shrink-0"
              >
                {(card as any).isVideo && (card as any).videoId ? (
                  <div className="relative w-32 h-32 md:w-32 md:h-32 rounded-xl bg-black overflow-hidden">
                    <iframe
                      src={`https://drive.google.com/file/d/${(card as any).videoId}/preview`}
                      className="absolute inset-0 w-full h-full object-cover border-0"
                      allow="autoplay; fullscreen"
                      allowFullScreen
                    />
                  </div>
                ) : (
                  <img
                    width={100}
                    height={100}
                    src={card.src || "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23181818'/%3E%3C/svg%3E"}
                    alt={card.title}
                    className="w-32 h-32 md:w-32 md:h-32 rounded-xl object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                )}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-black/70 via-black/50 to-black/20 pointer-events-none" />
              </motion.div>

              <div className="flex-1 flex flex-col justify-between">
                <div className="mb-3 md:mb-4">
                  <motion.h3
                    layoutId={isMobile ? undefined : `title-${card.title}-${id}`}
                    className="font-medium text-white text-lg md:text-xl mb-2 group-hover:text-emerald-400 transition-colors duration-300"
                  >
                    {card.title}
                  </motion.h3>
                  <motion.p
                    layoutId={isMobile ? undefined : `description-${card.description}-${id}`}
                    className="text-zinc-500 text-xs md:text-sm leading-relaxed line-clamp-2"
                  >
                    {card.description}
                  </motion.p>
                </div>

                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3 md:gap-0">
                  <div className="flex flex-wrap gap-1 md:gap-2 mb-2 md:mb-0">
                    {card.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 md:px-3 py-1 bg-zinc-800/50 border border-zinc-700/50 rounded-full text-zinc-500 text-[10px] md:text-xs group-hover:border-emerald-500/30 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                    {card.tags.length > 3 && (
                      <span className="px-2 md:px-3 py-1 text-zinc-600 text-[10px] md:text-xs">
                        +{card.tags.length - 3} more
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-2">
                    {card.live && (
                      <a
                        href={card.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="flex items-center gap-1.5 md:gap-2 px-3 md:px-4 py-2 md:py-2.5 bg-zinc-800 border border-zinc-700 text-zinc-400 text-[10px] md:text-xs md:text-sm rounded-full transition-all duration-300 hover:bg-emerald-500 hover:border-emerald-500 hover:text-white"
                      >
                        <Globe className="w-3 h-3 md:w-4 md:h-4" />
                        <span className="hidden md:inline">Website</span>
                      </a>
                    )}
                    {card.repo && (
                      <a
                        href={card.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="flex items-center gap-1.5 md:gap-2 px-3 md:px-4 py-2 md:py-2.5 bg-zinc-800 border border-zinc-700 text-zinc-400 text-[10px] md:text-xs md:text-sm rounded-full transition-all duration-300 hover:bg-white hover:border-white hover:text-black"
                      >
                        <Github className="w-3 h-3 md:w-4 md:h-4" />
                        <span className="hidden md:inline">GitHub</span>
                      </a>
                    )}
                    <motion.button
                      layoutId={isMobile ? undefined : `button-${card.title}-${id}`}
                      className="md:hidden flex items-center gap-1.5 px-3 py-2 bg-zinc-800 border border-zinc-700 text-zinc-400 text-[10px] rounded-full transition-all duration-300 hover:bg-emerald-500 hover:border-emerald-500 hover:text-white"
                    >
                      Details
                      <ArrowRight className="w-3 h-3" />
                    </motion.button>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
          </motion.div>
        ))}
      </div>
    </>
  );
}

const CloseIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5 text-zinc-400"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </svg>
  );
};
