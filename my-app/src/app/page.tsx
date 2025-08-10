"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Terminal, ExternalLink, FileText, Globe, Monitor } from "lucide-react";
import BubbleNavigation from "./components/BubbleNavigation";
import ParticleSystem from "./components/ParticleSystem";

// Glitch component for the main title
const Glitch = ({ children }: { children: React.ReactNode }) => (
  <div className="glitch-container">
    <h1 className="glitch-text text-6xl md:text-8xl font-bold text-white mb-4">
      {children}
    </h1>
  </div>
);

// Terminal text component
const TerminalText = ({ children }: { children: React.ReactNode }) => (
  <span className="terminal-text font-mono text-green-400">
    {children}
    <span className="terminal-cursor">|</span>
  </span>
);

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Transform values for scroll-based effects
  const titleOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);
  const titleY = useTransform(scrollYProgress, [0, 0.1], [0, -100]);
  const titleScale = useTransform(scrollYProgress, [0, 0.1], [1, 0.8]);

  const descriptionOpacity = useTransform(scrollYProgress, [0.05, 0.15], [1, 0]);
  const descriptionY = useTransform(scrollYProgress, [0.05, 0.15], [0, -50]);

  const buttonsOpacity = useTransform(scrollYProgress, [0.1, 0.2], [1, 0]);
  const buttonsY = useTransform(scrollYProgress, [0.1, 0.2], [0, -30]);

  const socialOpacity = useTransform(scrollYProgress, [0.15, 0.25], [1, 0]);
  const socialY = useTransform(scrollYProgress, [0.15, 0.25], [0, -40]);

  const terminalOpacity = useTransform(scrollYProgress, [0.3, 0.5], [1, 0]);
  const terminalY = useTransform(scrollYProgress, [0.3, 0.5], [0, -60]);
  const terminalScale = useTransform(scrollYProgress, [0.3, 0.5], [1, 0.9]);

  const projectsOpacity = useTransform(scrollYProgress, [0.6, 0.8], [1, 0]);
  const projectsY = useTransform(scrollYProgress, [0.6, 0.8], [0, -80]);

  const skillsOpacity = useTransform(scrollYProgress, [0.7, 0.9], [1, 0]);
  const skillsY = useTransform(scrollYProgress, [0.7, 0.9], [0, -60]);

  const projects = [
    {
      title: "E-Commerce Platform",
      blurb: "Full-stack e-commerce solution with React, Node.js, and MongoDB",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      status: "Live",
      description: "A complete e-commerce platform with user authentication, product management, and payment processing.",
      github: "https://github.com/username/ecommerce",
      live: "https://ecommerce-demo.com"
    },
    {
      title: "Task Management App",
      blurb: "Real-time collaborative task management with WebSocket integration",
      tech: ["React", "Socket.io", "Express", "PostgreSQL"],
      status: "Live",
      description: "Real-time collaborative task management application with live updates and team features.",
      github: "https://github.com/username/task-app",
      live: "https://task-app-demo.com"
    },
    {
      title: "Weather Dashboard",
      blurb: "Interactive weather visualization with multiple API integrations",
      tech: ["React", "D3.js", "OpenWeather API", "Chart.js"],
      status: "Live",
      description: "Interactive weather dashboard with data visualization and multiple location support.",
      github: "https://github.com/username/weather-app",
      live: "https://weather-dashboard.com"
    }
  ];

  const skills = [
    { name: "JavaScript", level: 90, icon: <Monitor className="h-6 w-6" /> },
    { name: "React", level: 85, icon: <FileText className="h-6 w-6" /> },
    { name: "Node.js", level: 80, icon: <Globe className="h-6 w-6" /> },
    { name: "Python", level: 75, icon: <Monitor className="h-6 w-6" /> },
    { name: "SQL", level: 70, icon: <FileText className="h-6 w-6" /> },
    { name: "Git", level: 85, icon: <Globe className="h-6 w-6" /> }
  ];

  return (
    <div ref={containerRef} className="cyberpunk-bg min-h-screen relative overflow-x-hidden">
      <ParticleSystem />
      <div className="cyber-grid"></div>
      
      <div className="container mx-auto px-4 py-24">
        <motion.div
          style={{ opacity: titleOpacity, y: titleY, scale: titleScale }}
          className="mb-8 font-mono text-sm text-red-400/90"
        >
          <Terminal className="inline-block mr-2 h-4 w-4" />
          Welcome to the system...
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mb-8"
        >
          <Glitch>Shariq</Glitch>
          <motion.h2 
            className="text-6xl md:text-8xl font-bold text-red-500 mb-6"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            Developer
          </motion.h2>
        </motion.div>

        <motion.p 
          style={{ opacity: descriptionOpacity, y: descriptionY }}
          className="text-xl text-gray-300 mb-8 max-w-2xl description-text"
        >
          York University student crafting digital experiences with a passion for clean code and innovative solutions.
        </motion.p>

        <motion.div 
          style={{ opacity: buttonsOpacity, y: buttonsY }}
          className="flex flex-wrap gap-4 mb-12"
        >
          <a href="/projects" className="red-btn">
            View Projects
          </a>
          <a href="/contact" className="btn-ghost">
            Get In Touch
          </a>
        </motion.div>

        <motion.div 
          style={{ opacity: socialOpacity, y: socialY }}
          className="flex justify-center gap-6 mb-16 social-links"
        >
          <a href="https://github.com" className="social-link" aria-label="GitHub">
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
          <a href="https://linkedin.com" className="social-link" aria-label="LinkedIn">
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
          <a href="mailto:contact@example.com" className="social-link" aria-label="Email">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </a>
        </motion.div>

        <motion.div 
          style={{ opacity: terminalOpacity, y: terminalY, scale: terminalScale }}
          className="bg-black/80 border border-green-500/50 rounded-lg p-6 mb-16 terminal-section"
        >
          <div className="font-mono text-sm">
            <div className="text-red-400 mb-2">
              <Terminal className="inline-block mr-2 h-4 w-4" />
              Terminal
            </div>
            <div className="text-green-400 space-y-1">
              <div>$ whoami</div>
              <div>shariq@york-university</div>
              <div>$ cat skills.txt</div>
              <div>JavaScript, React, Node.js, Python, SQL, Git</div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mb-16"
        >
          <motion.h2 
            style={{ opacity: projectsOpacity, y: projectsY }}
            className="text-4xl font-bold text-white mb-8 text-center section-header"
          >
            Projects
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ 
                  duration: 1.2, 
                  delay: index * 0.2,
                  ease: [0.25, 0.46, 0.45, 0.94] 
                }}
                className="card-3d card-border bg-gray-900/80 p-6 rounded-lg project-card"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                  <span className="status-indicator text-xs px-2 py-1 rounded-full bg-green-500/20 text-green-400">
                    {project.status}
                  </span>
                </div>
                <p className="text-gray-300 mb-4">{project.blurb}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span key={tech} className="text-xs px-2 py-1 bg-red-500/20 text-red-400 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-2">
                  <a href={project.github} className="text-red-400 hover:text-red-300 transition-colors">
                    <ExternalLink className="h-4 w-4" />
                  </a>
                  <a href={project.live} className="text-green-400 hover:text-green-300 transition-colors">
                    <Globe className="h-4 w-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mb-16"
        >
          <motion.h2 
            style={{ opacity: skillsOpacity, y: skillsY }}
            className="text-4xl font-bold text-white mb-8 text-center section-header"
          >
            Skills
          </motion.h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ 
                  duration: 1.2, 
                  delay: index * 0.1,
                  ease: [0.25, 0.46, 0.45, 0.94] 
                }}
                className="card-3d card-border bg-gray-900/80 p-4 rounded-lg text-center"
              >
                <div className="text-red-400 mb-2 flex justify-center">
                  {skill.icon}
                </div>
                <h3 className="text-sm font-semibold text-white mb-2">{skill.name}</h3>
                <div className="progress-bar">
                  <div 
                    className="h-1 bg-red-500 rounded"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
