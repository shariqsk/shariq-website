"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Github, Code, Globe, Calendar, Users } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "Darknet Scanner",
      description: "Advanced network visualization tool with real-time packet analysis and security alerts. Built for cybersecurity professionals and network administrators.",
      longDescription: "A comprehensive network monitoring solution that provides real-time visualization of network traffic, packet analysis, and security threat detection. Features include live packet capture, traffic pattern analysis, and automated alerting system.",
      tech: ["Python", "React", "WebSocket", "D3.js", "PostgreSQL"],
      status: "active",
      github: "https://github.com",
      live: "https://darknet-scanner.com",
      image: "/api/placeholder/600/400",
      features: [
        "Real-time packet capture and analysis",
        "Interactive network topology visualization",
        "Automated threat detection and alerting",
        "Customizable dashboard and reporting",
        "Multi-protocol support (TCP, UDP, ICMP)"
      ]
    },
    {
      title: "Campus Navigator",
      description: "York University wayfinding micro-app with offline capabilities and real-time location services for students and visitors.",
      longDescription: "A progressive web application designed to help York University students and visitors navigate the campus efficiently. Features offline functionality, real-time location services, and accessibility features for all users.",
      tech: ["Next.js", "TypeScript", "PWA", "Mapbox", "IndexedDB"],
      status: "deployed",
      github: "https://github.com",
      live: "https://campus-navigator.yorku.ca",
      image: "/api/placeholder/600/400",
      features: [
        "Offline-first architecture with service workers",
        "Real-time indoor and outdoor navigation",
        "Accessibility features for visually impaired users",
        "Integration with York University systems",
        "Progressive Web App capabilities"
      ]
    },
    {
      title: "RedBox UI",
      description: "Minimalist red/black component library built for modern web applications with a focus on accessibility and performance.",
      longDescription: "A comprehensive design system and component library featuring a distinctive red and black color scheme. Built with accessibility in mind and optimized for performance across all devices and browsers.",
      tech: ["React", "Storybook", "Tailwind CSS", "TypeScript", "Jest"],
      status: "maintained",
      github: "https://github.com",
      live: "https://redbox-ui.com",
      image: "/api/placeholder/600/400",
      features: [
        "50+ reusable components",
        "Comprehensive documentation and examples",
        "Accessibility compliance (WCAG 2.1)",
        "Dark/light theme support",
        "Performance optimized with tree shaking"
      ]
    },
    {
      title: "Crypto Portfolio Tracker",
      description: "Real-time cryptocurrency portfolio management with advanced analytics and automated trading signals.",
      longDescription: "A sophisticated cryptocurrency portfolio tracker that provides real-time market data, portfolio analytics, and automated trading signals. Features include historical performance tracking, risk analysis, and integration with major exchanges.",
      tech: ["Node.js", "React", "WebSocket", "MongoDB", "Redis"],
      status: "active",
      github: "https://github.com",
      live: "https://crypto-tracker.com",
      image: "/api/placeholder/600/400",
      features: [
        "Real-time price tracking from 100+ exchanges",
        "Portfolio performance analytics",
        "Automated trading signal generation",
        "Risk assessment and portfolio optimization",
        "Multi-exchange API integration"
      ]
    },
    {
      title: "AI Code Assistant",
      description: "Intelligent code completion and refactoring tool powered by machine learning for developers.",
      longDescription: "An AI-powered development tool that provides intelligent code completion, refactoring suggestions, and code quality analysis. Built with modern machine learning techniques to understand context and provide relevant suggestions.",
      tech: ["Python", "TensorFlow", "React", "FastAPI", "PostgreSQL"],
      status: "beta",
      github: "https://github.com",
      live: "https://ai-code-assistant.com",
      image: "/api/placeholder/600/400",
      features: [
        "Context-aware code completion",
        "Intelligent refactoring suggestions",
        "Code quality analysis and recommendations",
        "Multi-language support (Python, JavaScript, TypeScript)",
        "Integration with popular IDEs"
      ]
    },
    {
      title: "Social Media Analytics",
      description: "Comprehensive social media analytics platform with sentiment analysis and trend prediction.",
      longDescription: "A powerful social media analytics platform that provides deep insights into social media performance, sentiment analysis, and trend prediction. Helps businesses and creators optimize their social media strategy.",
      tech: ["Python", "React", "NLP", "AWS", "Elasticsearch"],
      status: "deployed",
      github: "https://github.com",
      live: "https://social-analytics.com",
      image: "/api/placeholder/600/400",
      features: [
        "Real-time social media monitoring",
        "Sentiment analysis using NLP",
        "Trend prediction and forecasting",
        "Custom dashboard and reporting",
        "Multi-platform integration (Twitter, Instagram, LinkedIn)"
      ]
    }
  ];

  return (
    <div className="relative min-h-screen cyberpunk-bg text-zinc-100">
      {/* Matrix background effect */}
      <div className="matrix-bg" />
      
      {/* Scanlines and vignette */}
      <div className="pointer-events-none fixed inset-0 opacity-[0.07] mix-blend-screen scanlines" />
      <div className="pointer-events-none fixed inset-0 radial-vignette" />

      <div className="relative z-10">
        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="px-5 py-6 sm:px-8 md:px-10 pt-24"
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-red-400 hover:text-red-300 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            <span className="font-mono">back_to_terminal</span>
          </Link>
        </motion.header>

        <div className="px-5 sm:px-8 md:px-10 pb-24">
          <div className="mx-auto max-w-7xl">
            {/* Hero Section */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-16 text-center"
            >
              <h1 className="font-mono text-4xl sm:text-5xl md:text-6xl mb-4">
                <span className="text-red-500">project_</span>
                <span className="text-zinc-200">showcase</span>
              </h1>
              <p className="text-zinc-400 max-w-2xl mx-auto">
                A collection of projects showcasing my skills in full-stack development, 
                UI/UX design, and innovative problem-solving.
              </p>
            </motion.section>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="card-border p-6 hover:scale-105 transition-transform duration-300"
                >
                  {/* Project Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className={`w-3 h-3 rounded-full ${
                        project.status === 'active' ? 'bg-green-500' : 
                        project.status === 'deployed' ? 'bg-blue-500' : 
                        project.status === 'maintained' ? 'bg-yellow-500' : 'bg-gray-500'
                      }`} />
                      <h3 className="font-mono text-xl text-zinc-100">{project.title}</h3>
                    </div>
                    <div className="flex gap-2">
                      {project.github && (
                        <Link
                          href={project.github}
                          className="p-2 rounded-full border border-red-500/30 hover:border-red-500/60 transition-colors"
                          title="View on GitHub"
                        >
                          <Github className="h-4 w-4 text-red-400" />
                        </Link>
                      )}
                      {project.live && (
                        <Link
                          href={project.live}
                          className="p-2 rounded-full border border-red-500/30 hover:border-red-500/60 transition-colors"
                          title="View Live"
                        >
                          <ExternalLink className="h-4 w-4 text-red-400" />
                        </Link>
                      )}
                    </div>
                  </div>

                  {/* Project Description */}
                  <p className="text-zinc-400 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs px-2 py-1 bg-red-900/30 border border-red-500/20 rounded font-mono"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Key Features */}
                  <div className="mb-4">
                    <h4 className="font-mono text-sm text-red-500 mb-2">key_features</h4>
                    <ul className="space-y-1">
                      {project.features.slice(0, 3).map((feature, i) => (
                        <li key={i} className="text-xs text-zinc-400 flex items-center gap-2">
                          <div className="w-1 h-1 bg-red-500 rounded-full" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Project Stats */}
                  <div className="flex items-center justify-between text-xs text-zinc-500">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      <span>2023</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Code className="h-3 w-3" />
                      <span>{project.tech.length} tech</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="h-3 w-3" />
                      <span>Team</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Call to Action */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-16 text-center"
            >
              <div className="card-border p-8">
                <h2 className="font-mono text-2xl text-red-500 mb-4">interested_in_collaboration</h2>
                <p className="text-zinc-400 mb-6 max-w-md mx-auto">
                  Looking for a developer to bring your ideas to life? 
                  Let's discuss your project and see how we can work together.
                </p>
                <Link
                  href="/contact"
                  className="red-btn inline-flex items-center gap-2 px-6 py-3 font-mono"
                >
                  <Globe className="h-4 w-4" />
                  <span>start_project</span>
                </Link>
              </div>
            </motion.section>
          </div>
        </div>
      </div>
    </div>
  );
}
