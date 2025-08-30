import { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Resume & Experience",
  description: "Professional resume, work experience, education, and qualifications of Shariq Khan - Full-Stack Developer and Computer Security Student.",
  keywords: [
    "Shariq Khan Resume",
    "Shariq Khan Experience",
    "Full-Stack Developer Resume",
    "Computer Security Student",
    "York University",
    "Software Engineer Resume",
    "Web Developer Experience",
    "Professional Experience"
  ],
  openGraph: {
    title: "Resume & Experience | Shariq Khan",
    description: "Professional resume, work experience, education, and qualifications of Shariq Khan - Full-Stack Developer and Computer Security Student.",
    url: `${siteConfig.url}/resume`,
  },
};

export default function ResumePage() {
  const experience = [
    {
      title: "Import Analyst",
      company: "Farrow",
      location: "Toronto, ON",
      period: "2023 - Present",
      description: "Analyzing import documentation and ensuring compliance with customs regulations. Managing data entry and verification processes.",
      skills: ["Data Analysis", "Compliance", "Documentation", "Process Management"]
    },
    {
      title: "Full-Stack Developer (Freelance)",
      company: "Self-Employed",
      location: "Toronto, ON",
      period: "2022 - Present",
      description: "Building modern web applications using React, Next.js, and Node.js. Specializing in responsive design and user experience.",
      skills: ["React", "Next.js", "Node.js", "TypeScript", "Tailwind CSS"]
    }
  ];

  const education = [
    {
      degree: "Computer Security",
      school: "York University",
      location: "Toronto, ON",
      period: "2022 - Present",
      description: "Studying computer security with focus on cybersecurity, network security, and secure software development."
    }
  ];

  const skills = {
    "Programming Languages": ["JavaScript", "TypeScript", "Python", "Java", "C++", "HTML/CSS", "SQL"],
    "Frameworks & Libraries": ["React", "Next.js", "Node.js", "Express.js", "Tailwind CSS", "Bootstrap"],
    "Databases": ["MongoDB", "PostgreSQL", "MySQL", "Redis"],
    "Tools & Technologies": ["Git", "GitHub", "VS Code", "Docker", "AWS", "Vercel"],
    "Cybersecurity": ["Network Security", "Web Application Security", "Penetration Testing", "Cryptography"]
  };

  const certifications = [
    {
      name: "Web Development Bootcamp",
      issuer: "Udemy",
      date: "2023",
      description: "Comprehensive full-stack web development course"
    },
    {
      name: "React Development",
      issuer: "Coursera",
      date: "2023",
      description: "Advanced React patterns and best practices"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
          Resume & Experience
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Professional experience, education, and qualifications of Shariq Khan.
        </p>
        <div className="mt-6">
          <a
            href={siteConfig.links.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
          >
            Download PDF Resume
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </a>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <section>
            <h2 className="text-3xl font-bold mb-6 text-foreground">Work Experience</h2>
            <div className="space-y-6">
              {experience.map((job, index) => (
                <div key={index} className="bg-card border border-border rounded-lg p-6">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                    <h3 className="text-xl font-semibold text-foreground">{job.title}</h3>
                    <span className="text-sm text-muted-foreground">{job.period}</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-3">
                    <span className="text-primary font-medium">{job.company}</span>
                    <span className="text-muted-foreground">•</span>
                    <span className="text-muted-foreground">{job.location}</span>
                  </div>
                  <p className="text-muted-foreground mb-4">{job.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {job.skills.map((skill) => (
                      <span key={skill} className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 rounded-full text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-6 text-foreground">Education</h2>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div key={index} className="bg-card border border-border rounded-lg p-6">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                    <h3 className="text-xl font-semibold text-foreground">{edu.degree}</h3>
                    <span className="text-sm text-muted-foreground">{edu.period}</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-3">
                    <span className="text-primary font-medium">{edu.school}</span>
                    <span className="text-muted-foreground">•</span>
                    <span className="text-muted-foreground">{edu.location}</span>
                  </div>
                  <p className="text-muted-foreground">{edu.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-6 text-foreground">Certifications</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <div key={index} className="bg-card border border-border rounded-lg p-4">
                  <h3 className="font-semibold text-foreground mb-1">{cert.name}</h3>
                  <p className="text-sm text-primary mb-1">{cert.issuer}</p>
                  <p className="text-sm text-muted-foreground mb-2">{cert.date}</p>
                  <p className="text-sm text-muted-foreground">{cert.description}</p>
                </div>
              ))}
            </div>
          </section>
        </div>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-bold mb-4 text-foreground">Technical Skills</h2>
            <div className="space-y-4">
              {Object.entries(skills).map(([category, skillList]) => (
                <div key={category}>
                  <h3 className="font-semibold text-foreground mb-2">{category}</h3>
                  <div className="space-y-1">
                    {skillList.map((skill) => (
                      <div key={skill} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span className="text-sm text-muted-foreground">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-foreground">Languages</h2>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm">English</span>
                <span className="text-sm text-muted-foreground">Native</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Urdu</span>
                <span className="text-sm text-muted-foreground">Fluent</span>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-foreground">Contact</h2>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <svg className="w-4 h-4 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:contact@shariqsafdarkhan.com" className="text-sm text-primary hover:underline">
                  contact@shariqsafdarkhan.com
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-4 h-4 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-sm text-muted-foreground">Toronto, ON, Canada</span>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
