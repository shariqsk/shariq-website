"use client";

import { motion } from "framer-motion";
import { Card, CardBody, CardHeader } from "@heroui/card";
import { Chip } from "@heroui/chip";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import { Progress } from "@heroui/progress";

export default function AboutPage() {
  const education = [
    {
      degree: "BSc Computer Science",
      school: "York University",
      year: "2021 – 2025",
      description: "Software engineering, algorithms, and applied systems.",
    },
  ];

  const experience = [
    {
      role: "Full‑Stack Developer",
      company: "Tech Startup",
      period: "2023 – Present",
      description: "Building secure, scalable web apps with React, Node.js, and cloud services.",
    },
    {
      role: "Frontend Developer Intern",
      company: "Digital Agency",
      period: "2022 – 2023",
      description: "Delivered responsive interfaces and UX improvements for client projects.",
    },
  ];

  const skills = [
    { name: "Frontend Development", level: 90 },
    { name: "Backend Development", level: 85 },
    { name: "Database Design", level: 80 },
    { name: "DevOps & Cloud", level: 75 },
    { name: "UI/UX", level: 72 },
  ];

  return (
    <div className="relative z-10">
      <div className="section-medium mx-auto px-4 py-28">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }} className="text-center mb-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-3 gradient-text">About</h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            I design and build secure, performant web systems with a focus on clean architecture and thoughtful UX.
          </p>
        </motion.div>

        {/* Bio */}
        <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="mb-8">
          <Card className="glass-neutral">
            <CardBody className="p-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="text-gray-200 leading-relaxed">
                    I enjoy solving practical problems with reliable software. Recent work spans threat‑aware pipelines,
                    cloud automation, and data‑driven dashboards.
                  </p>
                  <div className="flex gap-3 mt-5">
                    <Button as={Link} href="/projects" className="red-btn" size="sm">Projects</Button>
                    <Button as={Link} href="/contact" className="btn-ghost" variant="bordered" size="sm">Contact</Button>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 items-start">
                  {['React','TypeScript','Node.js','Python','PostgreSQL','AWS'].map(t => (
                    <Chip key={t} variant="bordered" className="neon-border chip-strong" size="sm">{t}</Chip>
                  ))}
                </div>
              </div>
            </CardBody>
          </Card>
        </motion.div>

        {/* Education & Experience */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }}>
            <Card className="glass-neutral h-full">
              <CardHeader className="pb-0"><h2 className="text-xl font-semibold">Education</h2></CardHeader>
              <CardBody className="pt-4">
                {education.map((edu, i) => (
                  <div key={i} className="mb-5 last:mb-0">
                    <h3 className="text-base font-medium">{edu.degree}</h3>
                    <p className="text-gray-400">{edu.school} • {edu.year}</p>
                    <p className="text-gray-300 mt-1 text-sm">{edu.description}</p>
                  </div>
                ))}
              </CardBody>
            </Card>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }}>
            <Card className="glass-neutral h-full">
              <CardHeader className="pb-0"><h2 className="text-xl font-semibold">Experience</h2></CardHeader>
              <CardBody className="pt-4">
                {experience.map((exp, i) => (
                  <div key={i} className="mb-5 last:mb-0">
                    <h3 className="text-base font-medium">{exp.role}</h3>
                    <p className="text-gray-400">{exp.company} • {exp.period}</p>
                    <p className="text-gray-300 mt-1 text-sm">{exp.description}</p>
                  </div>
                ))}
              </CardBody>
            </Card>
          </motion.div>
        </div>

        {/* Skills */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }}>
          <Card className="glass-neutral">
            <CardHeader className="pb-0"><h2 className="text-xl font-semibold">Skills</h2></CardHeader>
            <CardBody className="pt-4">
              <div className="grid md:grid-cols-2 gap-5">
                {skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-medium text-gray-200">{skill.name}</span>
                      <span className="text-gray-400 text-sm">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} size="sm" className="w-full" classNames={{ base: "bg-gray-700", track: "bg-gray-700", indicator: "bg-gradient-to-r from-red-500 to-red-600" }} />
                  </div>
                ))}
              </div>
            </CardBody>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
