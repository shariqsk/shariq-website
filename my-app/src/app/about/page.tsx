"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Terminal, Shield, Code, Cpu, Award, Mail, Github, Linkedin } from "lucide-react";

export default function About() {
  const skills = [
    { category: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"] },
    { category: "Backend", items: ["Node.js", "Python", "Express", "PostgreSQL", "MongoDB"] },
    { category: "Tools", items: ["Git", "Docker", "AWS", "Figma", "Storybook"] },
  ];

  const experiences = [
    {
      title: "Full Stack Developer",
      company: "Tech Startup",
      period: "2023 - Present",
      description: "Building scalable web applications with modern technologies."
    },
    {
      title: "Frontend Developer",
      company: "Digital Agency",
      period: "2022 - 2023",
      description: "Creating responsive and accessible user interfaces."
    },
    {
      title: "Student Developer",
      company: "York University",
      period: "2021 - 2022",
      description: "Academic projects and research in web development."
    },
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
          <div className="mx-auto max-w-4xl">
            {/* Hero Section */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-16"
            >
              <div className="text-center mb-8">
                <h1 className="font-mono text-4xl sm:text-5xl md:text-6xl mb-4">
                  <span className="text-red-500">about_</span>
                  <span className="text-zinc-200">shariq</span>
                </h1>
                <p className="text-zinc-400 max-w-2xl mx-auto">
                  York University student passionate about creating digital experiences 
                  that blend functionality with aesthetic appeal.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="card-border p-6"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <Terminal className="h-5 w-5 text-red-500" />
                    <h3 className="font-mono text-lg text-red-500">background</h3>
                  </div>
                  <p className="text-zinc-300 text-sm leading-relaxed">
                    Currently pursuing Computer Science at York University, 
                    I specialize in full-stack development with a focus on 
                    modern web technologies and user experience design.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="card-border p-6"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <Shield className="h-5 w-5 text-red-500" />
                    <h3 className="font-mono text-lg text-red-500">philosophy</h3>
                  </div>
                  <p className="text-zinc-300 text-sm leading-relaxed">
                    I believe in writing clean, maintainable code that not only 
                    functions flawlessly but also provides an engaging user experience. 
                    Every project is an opportunity to learn and innovate.
                  </p>
                </motion.div>
              </div>
            </motion.section>

            {/* Skills Section */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mb-16"
            >
              <div className="flex items-center gap-3 mb-8">
                <Cpu className="h-5 w-5 text-red-500" />
                <h2 className="font-mono text-2xl text-red-500">technical_skills</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {skills.map((skillGroup, index) => (
                  <motion.div
                    key={skillGroup.category}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                    className="card-border p-6"
                  >
                    <h3 className="font-mono text-lg text-red-500 mb-4">{skillGroup.category}</h3>
                    <div className="space-y-2">
                      {skillGroup.items.map((skill) => (
                        <div key={skill} className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-red-500 rounded-full" />
                          <span className="text-zinc-300 text-sm">{skill}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* Experience Section */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mb-16"
            >
              <div className="flex items-center gap-3 mb-8">
                <Award className="h-5 w-5 text-red-500" />
                <h2 className="font-mono text-2xl text-red-500">experience</h2>
              </div>

              <div className="space-y-6">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={exp.title}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                    className="card-border p-6 hover:bg-red-900/10 transition-colors"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                      <h3 className="font-mono text-lg text-zinc-100">{exp.title}</h3>
                      <span className="text-sm text-red-400 font-mono">{exp.period}</span>
                    </div>
                    <p className="text-red-500 text-sm mb-2">{exp.company}</p>
                    <p className="text-zinc-400 text-sm">{exp.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* Contact Section */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-center"
            >
              <div className="card-border p-8">
                <h2 className="font-mono text-2xl text-red-500 mb-4">get_in_touch</h2>
                <p className="text-zinc-400 mb-6 max-w-md mx-auto">
                  Interested in collaborating or just want to say hello? 
                  I'm always open to discussing new opportunities.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Link
                    href="mailto:hello@example.com"
                    className="red-btn inline-flex items-center gap-2 px-6 py-3 font-mono"
                  >
                    <Mail className="h-4 w-4" />
                    <span>send_message</span>
                  </Link>
                  
                  <div className="flex gap-4">
                    <Link
                      href="https://github.com"
                      className="p-3 rounded-full border border-red-500/30 hover:border-red-500/60 transition-colors"
                    >
                      <Github className="h-5 w-5 text-red-400" />
                    </Link>
                    <Link
                      href="https://linkedin.com"
                      className="p-3 rounded-full border border-red-500/30 hover:border-red-500/60 transition-colors"
                    >
                      <Linkedin className="h-5 w-5 text-red-400" />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.section>
          </div>
        </div>
      </div>
    </div>
  );
}
