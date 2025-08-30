import { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Skills & Expertise",
  description: "Comprehensive overview of Shariq Khan's technical skills, programming languages, frameworks, and expertise in full-stack development and cybersecurity.",
  keywords: [
    "Shariq Khan Skills",
    "Full-Stack Developer Skills",
    "React Developer",
    "Next.js Developer",
    "TypeScript Developer",
    "Node.js Developer",
    "Cybersecurity Skills",
    "Web Development Skills",
    "Programming Languages",
    "Frontend Development",
    "Backend Development",
    "Database Design",
    "API Development"
  ],
  openGraph: {
    title: "Skills & Expertise | Shariq Khan",
    description: "Comprehensive overview of Shariq Khan's technical skills, programming languages, frameworks, and expertise in full-stack development and cybersecurity.",
    url: `${siteConfig.url}/skills`,
  },
};

export default function SkillsPage() {
  const skills = {
    "Programming Languages": [
      "JavaScript", "TypeScript", "Python", "Java", "C++", "HTML/CSS", "SQL"
    ],
    "Frontend Development": [
      "React", "Next.js", "Vue.js", "Tailwind CSS", "Bootstrap", "Sass/SCSS", "Redux", "Zustand"
    ],
    "Backend Development": [
      "Node.js", "Express.js", "Python Flask", "Django", "REST APIs", "GraphQL", "Microservices"
    ],
    "Database & Cloud": [
      "MongoDB", "PostgreSQL", "MySQL", "Redis", "AWS", "Vercel", "Firebase", "Docker"
    ],
    "Cybersecurity": [
      "Network Security", "Web Application Security", "Penetration Testing", "Cryptography", "Security Auditing"
    ],
    "Tools & Technologies": [
      "Git", "GitHub", "VS Code", "Postman", "Jest", "Cypress", "Webpack", "Vite"
    ]
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
          Skills & Expertise
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          A comprehensive overview of my technical skills, programming languages, frameworks, and expertise in full-stack development and cybersecurity.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Object.entries(skills).map(([category, skillList]) => (
          <div key={category} className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
            <h2 className="text-2xl font-semibold mb-4 text-primary">{category}</h2>
            <div className="space-y-2">
              {skillList.map((skill) => (
                <div key={skill} className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-foreground">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 rounded-lg p-8">
        <h2 className="text-3xl font-bold mb-6 text-center">Experience Levels</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4 text-green-600">Advanced</h3>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span>JavaScript/TypeScript</span>
                <div className="w-24 h-2 bg-gray-200 rounded-full">
                  <div className="w-20 h-2 bg-green-500 rounded-full"></div>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span>React/Next.js</span>
                <div className="w-24 h-2 bg-gray-200 rounded-full">
                  <div className="w-20 h-2 bg-green-500 rounded-full"></div>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span>Node.js</span>
                <div className="w-24 h-2 bg-gray-200 rounded-full">
                  <div className="w-20 h-2 bg-green-500 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4 text-yellow-600">Intermediate</h3>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span>Python</span>
                <div className="w-24 h-2 bg-gray-200 rounded-full">
                  <div className="w-16 h-2 bg-yellow-500 rounded-full"></div>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span>Cybersecurity</span>
                <div className="w-24 h-2 bg-gray-200 rounded-full">
                  <div className="w-16 h-2 bg-yellow-500 rounded-full"></div>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span>Database Design</span>
                <div className="w-24 h-2 bg-gray-200 rounded-full">
                  <div className="w-16 h-2 bg-yellow-500 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16 text-center">
        <h2 className="text-3xl font-bold mb-6">Continuous Learning</h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          I'm constantly expanding my skill set and staying up-to-date with the latest technologies and best practices in web development and cybersecurity.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <span className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 rounded-full text-sm">
            Currently Learning: Advanced Cybersecurity
          </span>
          <span className="px-4 py-2 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-200 rounded-full text-sm">
            Exploring: Machine Learning
          </span>
          <span className="px-4 py-2 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 rounded-full text-sm">
            Improving: DevOps Practices
          </span>
        </div>
      </div>
    </div>
  );
}
