'use client';

import { motion } from 'framer-motion';
import { Link } from '@heroui/link';
import { Terminal } from 'lucide-react';
import ExpandableCardDemo from '@/components/ui/expandable-card-demo';

export default function Projects() {
  return (
    <div className="relative min-h-screen px-4 sm:px-6 md:px-8 pt-24 sm:pt-28 md:pt-32 pb-16 overflow-hidden flex items-center justify-center">
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

        <ExpandableCardDemo />

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
