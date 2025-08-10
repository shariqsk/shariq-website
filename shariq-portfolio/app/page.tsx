'use client';

import { motion, useInView } from 'framer-motion';
import { Card, CardBody } from '@heroui/card';
import { Chip } from '@heroui/chip';
import { Button } from '@heroui/button';
import { Link } from '@heroui/link';
import { Terminal, ExternalLink, FileText, Globe, Monitor, Github, Linkedin, Mail, Twitter } from 'lucide-react';
import React, { useRef, type ReactNode } from 'react';
import CinematicBackground from '@/components/CinematicBackground';

const GlitchText = ({ text }: { text: string }) => (
  <div className="glitch-container">
    <h1 className="glitch-text text-5xl md:text-7xl lg:text-8xl font-bold" data-text={text}>
      {text}
    </h1>
    <div className="neon-divider" />
  </div>
);

function Section({ children, className = '' }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { amount: 0.6, margin: '0px 0px -10% 0px' });

  return (
    <section ref={ref} className={`h-screen snap-section flex items-center justify-center ${className}`}>
      <motion.div
        initial={{ opacity: 0, scale: 0.99 }}
        animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.99 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        className="w-full"
      >
        {children}
      </motion.div>
    </section>
  );
}

const projects = [
  {
    title: 'Neural Network Visualizer',
    description: 'Interactive 3D visualization of neural network architectures with real-time training simulation',
    tech: ['React', 'Three.js', 'TensorFlow.js', 'WebGL'],
    link: '#',
    github: '#',
  },
  {
    title: 'Quantum Encryption Protocol',
    description: 'Implementation of quantum-resistant encryption algorithms for secure communication',
    tech: ['Python', 'Qiskit', 'Cryptography', 'REST API'],
    link: '#',
    github: '#',
  },
  {
    title: 'Cybersecurity Dashboard',
    description: 'Real-time threat monitoring and analysis dashboard with AI-powered anomaly detection',
    tech: ['Vue.js', 'Node.js', 'MongoDB', 'Socket.io'],
    link: '#',
    github: '#',
  },
];

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      {/* Background now mounted globally in layout; keep page clean */}
      <main className="relative z-10 h-screen overflow-y-scroll snap-container">
        {/* Slide 1: Hero */}
        <Section className="px-4">
          <div className="section-narrow mx-auto text-center pt-32">
            <GlitchText text="SHARIQ" />
            <p className="mt-5 text-base md:text-xl text-gray-300">Cybersecurity Specialist & AI Researcher</p>

            <div className="mt-5 flex flex-wrap justify-center gap-3">
              <Chip className="bg-red-500/20 border border-red-500/50 text-red-400 font-mono neon-border" variant="bordered" startContent={<Terminal className="w-4 h-4" />}>Ethical Hacker</Chip>
              <Chip className="bg-green-500/20 border border-green-500/50 text-green-400 font-mono neon-border" variant="bordered" startContent={<Monitor className="w-4 h-4" />}>AI Researcher</Chip>
              <Chip className="bg-blue-500/20 border border-blue-500/50 text-blue-400 font-mono neon-border" variant="bordered" startContent={<Globe className="w-4 h-4" />}>Full Stack Dev</Chip>
            </div>

            <div className="mt-7 flex flex-wrap justify-center gap-4">
              <Button as={Link} href="/projects" className="red-btn soft-glow neon-border" size="md">
                <FileText className="w-5 h-5 mr-2" />
                View Projects
              </Button>
              <Button as={Link} href="/about" className="btn-ghost neon-border" variant="bordered" size="md">
                About
              </Button>
            </div>

            <div className="mt-7 flex justify-center gap-3">
              {[
                { icon: Github, href: '#', label: 'GitHub' },
                { icon: Linkedin, href: '#', label: 'LinkedIn' },
                { icon: Twitter, href: '#', label: 'Twitter' },
                { icon: Mail, href: '#', label: 'Email' },
              ].map((s, i) => (
                <motion.a key={s.label} href={s.href} className="social-link soft-glow" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.35, delay: 0.15 + i * 0.08 }} title={s.label} aria-label={s.label}>
                  <s.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>
        </Section>

        {/* Slide 2: Featured Projects */}
        <Section className="px-4">
          <div className="section-medium mx-auto">
            <h2 className="text-3xl font-bold text-center mb-6 gradient-text">Featured Projects</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {projects.map((project, index) => (
                <motion.div key={project.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: index * 0.06 }} viewport={{ once: true }}>
                  <Card className="relative card-surface card-3d h-full overflow-hidden">
                    <CardBody className="p-5">
                      <h3 className="text-lg font-semibold mb-2 gradient-text">{project.title}</h3>
                      <p className="text-gray-300 mb-3 text-sm leading-relaxed">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mb-12">
                        {project.tech.map((tech) => (
                          <Chip key={tech} size="sm" variant="bordered" className="chip-strong font-mono">
                            {tech}
                          </Chip>
                        ))}
                      </div>
                      <div className="card-footer-blur">
                        <span className="text-xs text-white/80">Explore more</span>
                        <div className="flex gap-2">
                          <Button size="sm" as={Link} href={project.link} className="red-btn neon-border" aria-label={`View ${project.title} live`}>
                            <ExternalLink className="w-4 h-4" />
                          </Button>
                          <Button size="sm" variant="bordered" as={Link} href={project.github} className="btn-ghost neon-border" aria-label={`View ${project.title} source code`}>
                            <FileText className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                </motion.div>
              ))}
            </div>
            <div className="mt-6 text-center">
              <Button as={Link} href="/projects" className="btn-ghost neon-border" variant="bordered" size="sm">
                View all projects
              </Button>
            </div>
          </div>
        </Section>
      </main>
    </div>
  );
}
