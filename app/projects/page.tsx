"use client"

import {
  ArrowRight,
  ExternalLink,
  Github,
  Calendar,
  Tag,
  Users,
  Zap,
  Globe,
  Bot,
  ShoppingCart,
  BookOpen,
  Heart,
  TrendingUp,
  Mail,
  Phone,
  Menu,
  X,
} from "lucide-react"
import Link from "next/link"
import { ThemeToggle } from "../../components/theme-toggle"
import { useState, useEffect } from "react"
import { ChatWindow } from "../../components/chat-window"

const projects = [
  {
    id: 1,
    title: "EcoCommerce Platform",
    description:
      "A sustainable e-commerce platform with AI-powered product recommendations and carbon footprint tracking.",
    image: "/placeholder.svg?height=400&width=600",
    category: "E-commerce",
    technologies: ["Next.js", "React", "MongoDB", "Stripe", "AI/ML"],
    features: ["AI Recommendations", "Carbon Tracking", "Payment Integration", "Admin Dashboard"],
    liveUrl: "https://ecocommerce-demo.vercel.app",
    githubUrl: "https://github.com/aurora-digital/ecocommerce",
    completedDate: "2024-01-15",
    clientType: "Startup",
    icon: ShoppingCart,
    color: "from-green-500 to-emerald-600",
  },
  {
    id: 2,
    title: "MindfulAI Therapy Assistant",
    description: "An AI-powered mental health platform providing personalized therapy sessions and mood tracking.",
    image: "/placeholder.svg?height=400&width=600",
    category: "Healthcare",
    technologies: ["Next.js", "OpenAI", "PostgreSQL", "Tailwind CSS", "WebRTC"],
    features: ["AI Therapy Sessions", "Mood Tracking", "Video Calls", "Progress Analytics"],
    liveUrl: "https://mindfulai-demo.vercel.app",
    githubUrl: "https://github.com/aurora-digital/mindfulai",
    completedDate: "2023-12-10",
    clientType: "Healthcare Startup",
    icon: Heart,
    color: "from-pink-500 to-rose-600",
  },
  {
    id: 3,
    title: "EduTech Learning Hub",
    description:
      "Interactive learning platform with AI-powered course recommendations and real-time collaboration tools.",
    image: "/placeholder.svg?height=400&width=600",
    category: "Education",
    technologies: ["Next.js", "Socket.io", "MongoDB", "Cloudinary", "Gemini AI"],
    features: ["Interactive Courses", "Real-time Chat", "AI Tutoring", "Progress Tracking"],
    liveUrl: "https://edutech-hub-demo.vercel.app",
    githubUrl: "https://github.com/aurora-digital/edutech-hub",
    completedDate: "2023-11-20",
    clientType: "EdTech Company",
    icon: BookOpen,
    color: "from-blue-500 to-indigo-600",
  },
  {
    id: 4,
    title: "FinanceFlow Dashboard",
    description: "Real-time financial analytics dashboard with AI-powered insights and automated reporting.",
    image: "/placeholder.svg?height=400&width=600",
    category: "Fintech",
    technologies: ["Next.js", "D3.js", "PostgreSQL", "Redis", "Python"],
    features: ["Real-time Analytics", "AI Insights", "Automated Reports", "Data Visualization"],
    liveUrl: "https://financeflow-demo.vercel.app",
    githubUrl: "https://github.com/aurora-digital/financeflow",
    completedDate: "2023-10-05",
    clientType: "Financial Services",
    icon: TrendingUp,
    color: "from-violet-500 to-purple-600",
  },
  {
    id: 5,
    title: "SmartHome IoT Platform",
    description: "Comprehensive IoT platform for smart home automation with AI-powered energy optimization.",
    image: "/placeholder.svg?height=400&width=600",
    category: "IoT",
    technologies: ["Next.js", "MQTT", "InfluxDB", "Docker", "TensorFlow"],
    features: ["Device Control", "Energy Optimization", "Predictive Analytics", "Mobile App"],
    liveUrl: "https://smarthome-demo.vercel.app",
    githubUrl: "https://github.com/aurora-digital/smarthome",
    completedDate: "2023-09-15",
    clientType: "IoT Startup",
    icon: Zap,
    color: "from-amber-500 to-orange-600",
  },
  {
    id: 6,
    title: "SocialConnect Mobile App",
    description: "Next-generation social networking app with AI-powered content curation and privacy controls.",
    image: "/placeholder.svg?height=400&width=600",
    category: "Social Media",
    technologies: ["React Native", "Node.js", "MongoDB", "Redis", "AWS"],
    features: ["AI Content Curation", "Privacy Controls", "Real-time Messaging", "Story Features"],
    liveUrl: "https://socialconnect-demo.vercel.app",
    githubUrl: "https://github.com/aurora-digital/socialconnect",
    completedDate: "2023-08-30",
    clientType: "Social Media Startup",
    icon: Users,
    color: "from-cyan-500 to-teal-600",
  },
]

const categories = ["All", "E-commerce", "Healthcare", "Education", "Fintech", "IoT", "Social Media"]

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [isChatOpen, setIsChatOpen] = useState(false)
  const [isVisible, setIsVisible] = useState({
    hero: false,
    projects: false,
    cta: false,
  })
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({
              ...prev,
              [entry.target.id]: true,
            }))
          }
        })
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
    )

    const elements = document.querySelectorAll("[data-animate]")
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  const filteredProjects =
    selectedCategory === "All" ? projects : projects.filter((project) => project.category === selectedCategory)

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 transition-colors container-responsive">
      {/* Navigation */}
      <nav className="bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 sticky top-0 z-50 animate-slide-down">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <Link
                href="/"
                className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2"
              >
                {/* Enhanced Animated Logo SVG */}
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="relative flex-shrink-0 sm:w-8 sm:h-8"
                >
                  {/* Outer rotating ring */}
                  <circle
                    cx="16"
                    cy="16"
                    r="14"
                    stroke="url(#outerGradient)"
                    strokeWidth="1.5"
                    fill="none"
                    strokeDasharray="20 5"
                    opacity="0.6"
                  >
                    <animateTransform
                      attributeName="transform"
                      type="rotate"
                      values="0 16 16;360 16 16"
                      dur="8s"
                      repeatCount="indefinite"
                    />
                  </circle>

                  {/* Middle pulsing ring */}
                  <circle
                    cx="16"
                    cy="16"
                    r="10"
                    stroke="url(#middleGradient)"
                    strokeWidth="2"
                    fill="none"
                    strokeDasharray="31.4"
                    strokeDashoffset="0"
                  >
                    <animate attributeName="stroke-dashoffset" values="0;31.4;0" dur="3s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0.3;1;0.3" dur="3s" repeatCount="indefinite" />
                  </circle>

                  {/* Inner morphing shape */}
                  <path d="M16,6 L22,12 L16,18 L10,12 Z" fill="url(#innerGradient)" opacity="0.8">
                    <animateTransform
                      attributeName="transform"
                      type="rotate"
                      values="0 16 16;90 16 16;180 16 16;270 16 16;360 16 16"
                      dur="6s"
                      repeatCount="indefinite"
                    />
                    <animate attributeName="opacity" values="0.8;0.4;0.8" dur="2s" repeatCount="indefinite" />
                  </path>

                  {/* Central dot */}
                  <circle cx="16" cy="16" r="2" fill="url(#centerGradient)">
                    <animate attributeName="r" values="2;3;2" dur="2s" repeatCount="indefinite" />
                  </circle>

                  {/* Orbiting particles */}
                  <circle cx="26" cy="16" r="1.5" fill="#06b6d4" opacity="0.7">
                    <animateTransform
                      attributeName="transform"
                      type="rotate"
                      values="0 16 16;360 16 16"
                      dur="4s"
                      repeatCount="indefinite"
                    />
                    <animate attributeName="opacity" values="0.7;0.2;0.7" dur="2s" repeatCount="indefinite" />
                  </circle>

                  <circle cx="6" cy="16" r="1" fill="#8b5cf6" opacity="0.7">
                    <animateTransform
                      attributeName="transform"
                      type="rotate"
                      values="0 16 16;-360 16 16"
                      dur="5s"
                      repeatCount="indefinite"
                    />
                    <animate attributeName="opacity" values="0.7;0.2;0.7" dur="1.5s" repeatCount="indefinite" />
                  </circle>

                  <defs>
                    <linearGradient id="outerGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#06b6d4" />
                      <stop offset="50%" stopColor="#8b5cf6" />
                      <stop offset="100%" stopColor="#06b6d4" />
                    </linearGradient>
                    <linearGradient id="middleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#8b5cf6" />
                      <stop offset="100%" stopColor="#06b6d4" />
                    </linearGradient>
                    <radialGradient id="innerGradient" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.8" />
                      <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.4" />
                    </radialGradient>
                    <radialGradient id="centerGradient" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#ffffff" />
                      <stop offset="100%" stopColor="#06b6d4" />
                    </radialGradient>
                  </defs>
                </svg>
                <span className="hidden sm:inline">Aurora</span>
                <span className="text-cyan-600 dark:text-cyan-400 hidden sm:inline">Digital</span>
                <span className="sm:hidden">Aurora</span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-4 lg:space-x-8">
              <Link
                href="/#services"
                className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors text-sm lg:text-base"
              >
                Services
              </Link>
              <Link href="/projects" className="text-slate-900 dark:text-white font-medium text-sm lg:text-base">
                Projects
              </Link>
              <Link
                href="/#about"
                className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors text-sm lg:text-base"
              >
                About
              </Link>
              <Link
                href="/#contact"
                className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors text-sm lg:text-base"
              >
                Contact
              </Link>
              <ThemeToggle />
              <button className="bg-gradient-to-r from-cyan-600 to-violet-600 text-white px-4 lg:px-6 py-2 rounded-lg hover:from-cyan-700 hover:to-violet-700 transition-all shadow-lg hover:shadow-xl transform hover:scale-105 text-sm lg:text-base btn-responsive">
                Get Started
              </button>
            </div>

            {/* Mobile Navigation */}
            <div className="md:hidden flex items-center space-x-2">
              <ThemeToggle />
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-slate-200 dark:border-slate-800">
              <div className="flex flex-col space-y-4">
                <Link
                  href="/#services"
                  className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Services
                </Link>
                <Link
                  href="/projects"
                  className="text-slate-900 dark:text-white font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Projects
                </Link>
                <Link
                  href="/#about"
                  className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  About
                </Link>
                <Link
                  href="/#contact"
                  className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact
                </Link>
                <button className="bg-gradient-to-r from-cyan-600 to-violet-600 text-white px-6 py-2 rounded-lg hover:from-cyan-700 hover:to-violet-700 transition-all shadow-lg text-left">
                  Get Started
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-50 to-white dark:from-slate-900 dark:to-slate-950 py-12 sm:py-20 overflow-hidden">
        {/* Animated Grid Pattern SVG */}
        <div className="absolute inset-0 opacity-10 dark:opacity-5">
          <svg width="100%" height="100%" viewBox="0 0 600 400" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.5">
                  <animate attributeName="opacity" values="0.2;0.8;0.2" dur="4s" repeatCount="indefinite" />
                </path>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`text-center transition-all duration-1000 ${
              isVisible.hero ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            data-animate
            id="hero"
          >
            <div className="flex justify-center mb-6">
              <div className="flex items-center gap-2 bg-gradient-to-r from-cyan-500/10 to-violet-500/10 dark:from-cyan-400/10 dark:to-violet-400/10 border border-cyan-500/20 dark:border-cyan-400/20 rounded-full px-3 sm:px-4 py-2 animate-bounce-subtle">
                <Globe className="w-3 h-3 sm:w-4 sm:h-4 text-cyan-600 dark:text-cyan-400 flex-shrink-0" />
                <span className="text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300">Our Portfolio</span>
              </div>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-4 sm:mb-6">
              Our{" "}
              <span className="bg-gradient-to-r from-cyan-600 to-violet-600 bg-clip-text text-transparent">
                Projects
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto text-responsive px-4 sm:px-0">
              Explore our portfolio of innovative web applications and AI-powered solutions that have transformed
              businesses across various industries.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Categories */}
      <section className="py-6 sm:py-8 bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
            {categories.map((category, index) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-3 sm:px-6 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all transform hover:scale-105 btn-responsive ${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-cyan-600 to-violet-600 text-white shadow-lg"
                    : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700"
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12 sm:py-20 bg-white dark:bg-slate-950 relative overflow-hidden">
        {/* Floating Geometric Shapes SVG */}
        <div className="absolute top-10 sm:top-20 left-4 sm:left-10 opacity-20 dark:opacity-10">
          <svg
            width="60"
            height="60"
            viewBox="0 0 80 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="sm:w-20 sm:h-20"
          >
            <rect x="10" y="10" width="60" height="60" stroke="url(#projectGradient)" strokeWidth="2" fill="none">
              <animateTransform
                attributeName="transform"
                type="rotate"
                values="0 40 40;360 40 40"
                dur="10s"
                repeatCount="indefinite"
              />
            </rect>
            <defs>
              <linearGradient id="projectGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#06b6d4" />
                <stop offset="100%" stopColor="#8b5cf6" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="absolute bottom-10 sm:bottom-20 right-4 sm:right-10 opacity-20 dark:opacity-10">
          <svg
            width="45"
            height="45"
            viewBox="0 0 60 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="sm:w-15 sm:h-15"
          >
            <polygon points="30,5 55,50 5,50" stroke="currentColor" strokeWidth="2" fill="none">
              <animateTransform
                attributeName="transform"
                type="rotate"
                values="0 30 30;-360 30 30"
                dur="8s"
                repeatCount="indefinite"
              />
            </polygon>
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 grid-responsive">
            {filteredProjects.map((project, index) => {
              const IconComponent = project.icon
              return (
                <div
                  key={project.id}
                  className={`group bg-white dark:bg-slate-900 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-800 overflow-hidden hover:shadow-xl transition-all duration-500 hover:-translate-y-2 transform ${
                    isVisible.projects ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                  data-animate
                  id="projects"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  {/* Project Image */}
                  <div className="relative h-40 sm:h-48 bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-700 overflow-hidden">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div
                      className={`absolute top-3 sm:top-4 left-3 sm:left-4 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r ${project.color} rounded-xl flex items-center justify-center shadow-lg transition-transform group-hover:scale-110`}
                    >
                      <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <div className="absolute top-3 sm:top-4 right-3 sm:right-4">
                      <span className="bg-white/90 dark:bg-slate-900/90 text-slate-700 dark:text-slate-300 px-2 sm:px-3 py-1 rounded-full text-xs font-medium">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-4 sm:p-6">
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-300 text-sm mb-3 sm:mb-4 line-clamp-2">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 px-2 py-1 rounded text-xs transition-colors hover:bg-cyan-100 dark:hover:bg-cyan-900"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="text-slate-500 dark:text-slate-400 text-xs">
                          +{project.technologies.length - 3} more
                        </span>
                      )}
                    </div>

                    {/* Project Meta */}
                    <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 mb-3 sm:mb-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3 flex-shrink-0" />
                        <span className="truncate">{new Date(project.completedDate).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Tag className="w-3 h-3 flex-shrink-0" />
                        <span className="truncate">{project.clientType}</span>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-2 sm:gap-3">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-gradient-to-r from-cyan-600 to-violet-600 text-white px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium hover:from-cyan-700 hover:to-violet-700 transition-all flex items-center justify-center gap-1 sm:gap-2 transform hover:scale-105 btn-responsive"
                      >
                        <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                        <span className="hidden sm:inline">Live Demo</span>
                        <span className="sm:hidden">Demo</span>
                      </a>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 sm:px-4 py-2 border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 rounded-lg text-xs sm:text-sm font-medium hover:bg-slate-50 dark:hover:bg-slate-800 transition-all flex items-center justify-center transform hover:scale-105"
                      >
                        <Github className="w-3 h-3 sm:w-4 sm:h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-20 bg-gradient-to-r from-cyan-50 to-violet-50 dark:from-slate-900 dark:to-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div
            className={`transition-all duration-1000 ${
              isVisible.cta ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            data-animate
            id="cta"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 mb-6 sm:mb-8 text-responsive">
              Let's discuss how we can bring your vision to life with cutting-edge technology and innovative design.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <button
                onClick={() => setIsChatOpen(true)}
                className="group bg-gradient-to-r from-cyan-600 to-violet-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold hover:from-cyan-700 hover:to-violet-700 transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:scale-105 btn-responsive"
              >
                <Bot className="w-4 h-4 sm:w-5 sm:h-5 group-hover:rotate-12 transition-transform flex-shrink-0" />
                Talk to our AI Agent
              </button>
              <Link
                href="/#contact"
                className="border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold hover:border-slate-400 dark:hover:border-slate-500 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all flex items-center justify-center gap-2 transform hover:scale-105 btn-responsive"
              >
                Get in Touch
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 dark:bg-slate-950 text-white py-8 sm:py-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-x-3">
            <div className="md:col-span-2">
              <div className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
                Aurora <span className="text-cyan-400">Digital</span>
              </div>
              <p className="text-slate-400 mb-3 sm:mb-4 text-sm sm:text-base max-w-lg">
                Building the future of web development with AI-powered solutions and human creativity.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors transform hover:scale-110">
                  <Github className="w-5 h-5 sm:w-6 sm:h-6" />
                </a>
                <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors transform hover:scale-110">
                  <ExternalLink className="w-5 h-5 sm:w-6 sm:h-6" />
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Quick Links</h3>
              <ul className="space-y-2 text-slate-400 text-sm sm:text-base">
                <li>
                  <Link href="/" className="hover:text-white transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/projects" className="hover:text-white transition-colors">
                    Projects
                  </Link>
                </li>
                <li>
                  <Link href="/#services" className="hover:text-white transition-colors">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/#contact" className="hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Contact</h3>
              <div className="space-y-2 sm:space-y-3 text-slate-400 text-sm sm:text-base">
                <div className="flex items-start gap-2">
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 mt-0.5" />
                  <span className="break-words min-w-0">shafiqueabdurrehman@gmail.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                  <span>+92 319-2165662</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-800 mt-6 sm:mt-8 pt-4 sm:pt-6 text-center text-slate-400 text-sm sm:text-base">
            <p>&copy; 2024 Aurora Digital. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Enhanced Floating AI Chat Button */}
      <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 floating-element">
        <div className="relative">
          {/* Pulsing rings */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 to-violet-500 opacity-20 animate-ping"></div>
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 to-violet-500 opacity-30 animate-pulse"></div>

          {/* Main button */}
          <button
            onClick={() => setIsChatOpen(true)}
            className="relative group bg-gradient-to-r from-cyan-500 to-violet-500 text-white p-3 sm:p-4 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105 animate-bounce-subtle"
          >
            <Bot className="w-5 h-5 sm:w-6 sm:h-6 group-hover:rotate-12 transition-transform" />
          </button>
        </div>
      </div>

      {/* Chat Window */}
      <ChatWindow isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
    </div>
  )
}
