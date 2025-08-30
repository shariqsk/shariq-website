import { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Blog & Articles",
  description: "Technical articles, tutorials, and insights about web development, cybersecurity, and software engineering by Shariq Khan.",
  keywords: [
    "Shariq Khan Blog",
    "Web Development Blog",
    "Cybersecurity Articles",
    "React Tutorials",
    "Next.js Blog",
    "Software Engineering",
    "Programming Articles",
    "Tech Blog",
    "Developer Blog"
  ],
  openGraph: {
    title: "Blog & Articles | Shariq Khan",
    description: "Technical articles, tutorials, and insights about web development, cybersecurity, and software engineering by Shariq Khan.",
    url: `${siteConfig.url}/blog`,
  },
};

export default function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: "Building Secure Web Applications with Next.js",
      excerpt: "Learn how to implement security best practices in your Next.js applications, from authentication to data protection.",
      category: "Security",
      date: "2024-01-15",
      readTime: "8 min read",
      featured: true
    },
    {
      id: 2,
      title: "The Future of Full-Stack Development",
      excerpt: "Exploring emerging trends and technologies that are shaping the future of web development and software engineering.",
      category: "Development",
      date: "2024-01-10",
      readTime: "6 min read",
      featured: false
    },
    {
      id: 3,
      title: "Cybersecurity Fundamentals for Developers",
      excerpt: "Essential cybersecurity concepts that every developer should understand to build more secure applications.",
      category: "Security",
      date: "2024-01-05",
      readTime: "10 min read",
      featured: false
    },
    {
      id: 4,
      title: "Optimizing React Performance",
      excerpt: "Advanced techniques for improving React application performance and user experience.",
      category: "Frontend",
      date: "2023-12-28",
      readTime: "7 min read",
      featured: false
    },
    {
      id: 5,
      title: "Database Design Best Practices",
      excerpt: "Learn how to design efficient and scalable database schemas for modern web applications.",
      category: "Backend",
      date: "2023-12-20",
      readTime: "9 min read",
      featured: false
    },
    {
      id: 6,
      title: "TypeScript Tips and Tricks",
      excerpt: "Advanced TypeScript patterns and techniques to write more maintainable and type-safe code.",
      category: "Development",
      date: "2023-12-15",
      readTime: "5 min read",
      featured: false
    }
  ];

  const categories = ["All", "Security", "Development", "Frontend", "Backend"];

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
          Blog & Articles
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Technical articles, tutorials, and insights about web development, cybersecurity, and software engineering.
        </p>
      </div>

      <div className="mb-8">
        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <button
              key={category}
              className="px-6 py-2 rounded-full border border-border hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        {blogPosts.filter(post => post.featured).map((post) => (
          <div key={post.id} className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-2 mb-3">
              <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 rounded-full text-sm">
                {post.category}
              </span>
              <span className="text-sm text-muted-foreground">{post.readTime}</span>
            </div>
            <h2 className="text-2xl font-bold mb-3 text-foreground">{post.title}</h2>
            <p className="text-muted-foreground mb-4">{post.excerpt}</p>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">{post.date}</span>
              <button className="text-primary hover:underline">Read More →</button>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.filter(post => !post.featured).map((post) => (
          <div key={post.id} className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-2 mb-3">
              <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-200 rounded-full text-sm">
                {post.category}
              </span>
              <span className="text-sm text-muted-foreground">{post.readTime}</span>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-foreground">{post.title}</h3>
            <p className="text-muted-foreground mb-4 text-sm">{post.excerpt}</p>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">{post.date}</span>
              <button className="text-primary hover:underline text-sm">Read More →</button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <h2 className="text-3xl font-bold mb-6">Stay Updated</h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          Subscribe to my newsletter to get notified about new articles and insights about web development and cybersecurity.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <button className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
}
