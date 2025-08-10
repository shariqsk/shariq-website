"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Mail, Github, Linkedin, MessageSquare, Send, MapPin, Clock } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Reset form
    setFormData({ name: "", email: "", subject: "", message: "" });
    setIsSubmitting(false);
    
    // You would typically send this to your backend here
    console.log("Form submitted:", formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "hello@shariq.dev",
      link: "mailto:hello@shariq.dev"
    },
    {
      icon: Github,
      title: "GitHub",
      value: "github.com/shariq",
      link: "https://github.com"
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      value: "linkedin.com/in/shariq",
      link: "https://linkedin.com"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Toronto, Canada",
      link: null
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
          <div className="mx-auto max-w-6xl">
            {/* Hero Section */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-16 text-center"
            >
              <h1 className="font-mono text-4xl sm:text-5xl md:text-6xl mb-4">
                <span className="text-red-500">contact_</span>
                <span className="text-zinc-200">me</span>
              </h1>
              <p className="text-zinc-400 max-w-2xl mx-auto">
                Ready to start a project or just want to say hello? 
                I'm always open to discussing new opportunities and collaborations.
              </p>
            </motion.section>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="card-border p-8"
              >
                <div className="flex items-center gap-3 mb-6">
                  <MessageSquare className="h-5 w-5 text-red-500" />
                  <h2 className="font-mono text-xl text-red-500">send_message</h2>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-mono text-zinc-400 mb-2">
                        name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-black/50 border border-red-500/30 rounded-lg text-zinc-100 font-mono focus:border-red-500 focus:outline-none transition-colors"
                        placeholder="your_name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-mono text-zinc-400 mb-2">
                        email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-black/50 border border-red-500/30 rounded-lg text-zinc-100 font-mono focus:border-red-500 focus:outline-none transition-colors"
                        placeholder="your_email@domain.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-mono text-zinc-400 mb-2">
                      subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-black/50 border border-red-500/30 rounded-lg text-zinc-100 font-mono focus:border-red-500 focus:outline-none transition-colors"
                      placeholder="project_inquiry"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-mono text-zinc-400 mb-2">
                      message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-black/50 border border-red-500/30 rounded-lg text-zinc-100 font-mono focus:border-red-500 focus:outline-none transition-colors resize-none"
                      placeholder="tell_me_about_your_project..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="red-btn w-full inline-flex items-center justify-center gap-2 px-6 py-3 font-mono disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>sending...</span>
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4" />
                        <span>send_message</span>
                      </>
                    )}
                  </button>
                </form>
              </motion.div>

              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="space-y-8"
              >
                {/* Contact Info Cards */}
                <div className="space-y-4">
                  <h2 className="font-mono text-xl text-red-500 mb-6">contact_info</h2>
                  {contactInfo.map((info, index) => {
                    const Icon = info.icon;
                    return (
                      <motion.div
                        key={info.title}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                        className="card-border p-4 hover:bg-red-900/10 transition-colors"
                      >
                        {info.link ? (
                          <Link
                            href={info.link}
                            className="flex items-center gap-4 group"
                          >
                            <div className="p-2 rounded-full border border-red-500/30 group-hover:border-red-500/60 transition-colors">
                              <Icon className="h-5 w-5 text-red-400" />
                            </div>
                            <div>
                              <h3 className="font-mono text-sm text-red-500">{info.title}</h3>
                              <p className="text-zinc-300 text-sm">{info.value}</p>
                            </div>
                          </Link>
                        ) : (
                          <div className="flex items-center gap-4">
                            <div className="p-2 rounded-full border border-red-500/30">
                              <Icon className="h-5 w-5 text-red-400" />
                            </div>
                            <div>
                              <h3 className="font-mono text-sm text-red-500">{info.title}</h3>
                              <p className="text-zinc-300 text-sm">{info.value}</p>
                            </div>
                          </div>
                        )}
                      </motion.div>
                    );
                  })}
                </div>

                {/* Availability */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="card-border p-6"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <Clock className="h-5 w-5 text-red-500" />
                    <h3 className="font-mono text-lg text-red-500">availability</h3>
                  </div>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-zinc-400">freelance:</span>
                      <span className="text-green-400">available</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-zinc-400">full-time:</span>
                      <span className="text-yellow-400">considering</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-zinc-400">response_time:</span>
                      <span className="text-red-400">24h</span>
                    </div>
                  </div>
                </motion.div>

                {/* Quick Links */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.9 }}
                  className="card-border p-6"
                >
                  <h3 className="font-mono text-lg text-red-500 mb-4">quick_links</h3>
                  <div className="space-y-3">
                    <Link
                      href="/about"
                      className="block text-zinc-400 hover:text-red-400 transition-colors text-sm"
                    >
                      → about_me
                    </Link>
                    <Link
                      href="/projects"
                      className="block text-zinc-400 hover:text-red-400 transition-colors text-sm"
                    >
                      → view_projects
                    </Link>
                    <Link
                      href="/resume.pdf"
                      className="block text-zinc-400 hover:text-red-400 transition-colors text-sm"
                    >
                      → download_resume
                    </Link>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
