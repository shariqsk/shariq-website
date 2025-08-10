"use client";

import { motion } from "framer-motion";
import { Card, CardBody, CardHeader } from "@heroui/card";
import { Chip } from "@heroui/chip";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";

export default function ProjectsPage() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce solution built with modern technologies. Features include user authentication, product management, shopping cart, payment processing with Stripe, and admin dashboard.",
      tech: ["React", "Node.js", "MongoDB", "Stripe", "Express", "JWT"],
      status: "Live",
      github: "https://github.com/username/ecommerce",
      live: "https://ecommerce-demo.com",
      featured: true,
    },
    {
      title: "Task Management App",
      description:
        "Real-time collaborative task management application with WebSocket integration. Teams can create, assign, and track tasks with live updates and notifications.",
      tech: ["React", "Socket.io", "Express", "PostgreSQL", "Redis", "Docker"],
      status: "Live",
      github: "https://github.com/username/task-app",
      live: "https://task-app-demo.com",
      featured: true,
    },
    {
      title: "Weather Dashboard",
      description:
        "Interactive weather visualization dashboard with multiple API integrations. Features include 7-day forecasts, radar maps, and location-based weather alerts.",
      tech: ["React", "D3.js", "OpenWeather API", "Chart.js", "Geolocation API"],
      status: "Live",
      github: "https://github.com/username/weather-app",
      live: "https://weather-dashboard.com",
      featured: true,
    },
  ];

  return (
    <div className="relative z-10">
      <div className="section-medium mx-auto px-4 py-28">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center mb-10">
          <h1 className="text-5xl font-bold mb-3 gradient-text">Projects</h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            A selection of work spanning full‑stack apps, realtime systems, and data‑driven dashboards.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {projects.map((project, index) => (
            <motion.div key={project.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: index * 0.06 }} viewport={{ once: true }}>
              <Card className="relative card-surface overflow-hidden">
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
                      {project.live && (
                        <Button as={Link} href={project.live} size="sm" className="red-btn neon-border" aria-label={`Open ${project.title} live`}>
                          Live
                        </Button>
                      )}
                      <Button as={Link} href={project.github} size="sm" variant="bordered" className="btn-ghost neon-border" aria-label={`Open ${project.title} repo`}>
                        Code
                      </Button>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
