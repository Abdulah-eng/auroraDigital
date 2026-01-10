"use client"

import {
  ArrowRight,
  Github,
  Mail,
  Phone,
  Menu,
  X,
  Linkedin,
  Users,
  Code,
  Smartphone,
  Bot,
  Layers,
} from "lucide-react"
import Link from "next/link"
import { ThemeToggle } from "../../components/theme-toggle"
import { useState, useEffect } from "react"

const teamMembers = [
  {
    id: 1,
    name: "AbdurRehman Shafique",
    role: "Full-Stack Developer",
    image: "/team/abdurrehman.jpeg",
    bio: "Expert in building scalable web applications with Next.js and React. Passionate about creating efficient, maintainable code.",
    skills: ["Next.js", "React", "TypeScript", "Node.js"],
    icon: Code,
    color: "from-cyan-500 to-blue-600",
  },
  {
    id: 2,
    name: "Muhammad Abdullah",
    role: "Full-Stack Developer",
    image: "/team/abdullah.png",
    bio: "Specialized in full-stack development and API design. Delivers high-performance solutions for startups and businesses.",
    skills: ["Next.js", "React", "TypeScript", "API Development"],
    icon: Layers,
    color: "from-violet-500 to-purple-600",
  },
  {
    id: 3,
    name: "Muhammad Taimoor Asad",
    role: "Mobile App Developer",
    image: "/team/taimoor.jpeg",
    bio: "Expert in native and cross-platform mobile app development. Creates beautiful, performant mobile experiences.",
    skills: ["React Native", "iOS", "Android", "Mobile UI/UX"],
    icon: Smartphone,
    color: "from-pink-500 to-rose-600",
  },
  {
    id: 4,
    name: "Abdullah Ijaz",
    role: "AI & Automation Developer",
    image: "/team/abdullahIjaz.png",
    bio: "Specialized in AI agents, chatbots, and automation systems. Transforms businesses with intelligent solutions.",
    skills: ["AI/ML", "Chatbots", "Automation", "NLP"],
    icon: Bot,
    color: "from-amber-500 to-orange-600",
  },
  {
    id: 5,
    name: "Hassan Jawad",
    role: "Full-Stack Developer",
    image: "/team/hassan.png",
    bio: "Versatile developer with expertise in modern web technologies. Focuses on creating seamless user experiences.",
    skills: ["Next.js", "React", "TypeScript", "Full-Stack"],
    icon: Code,
    color: "from-emerald-500 to-green-600",
  },
]

export default function TeamPage() {
  const [isVisible, setIsVisible] = useState({
    hero: false,
    team: false,
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
              <Link
                href="/projects"
                className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors text-sm lg:text-base"
              >
                Projects
              </Link>
              <Link href="/team" className="text-slate-900 dark:text-white font-medium text-sm lg:text-base">
                Team
              </Link>
              <Link
                href="/testimonials"
                className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors text-sm lg:text-base"
              >
                Reviews
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
                  className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Projects
                </Link>
                <Link
                  href="/team"
                  className="text-slate-900 dark:text-white font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Team
                </Link>
                <Link
                  href="/testimonials"
                  className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Reviews
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
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-50 to-white dark:from-slate-900 dark:to-slate-950 py-12 sm:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid-slate-100 dark:bg-grid-slate-800 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]"></div>
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
                <Users className="w-3 h-3 sm:w-4 sm:h-4 text-cyan-600 dark:text-cyan-400 flex-shrink-0" />
                <span className="text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300">Our Team</span>
              </div>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-4 sm:mb-6">
              Meet Our{" "}
              <span className="bg-gradient-to-r from-cyan-600 to-violet-600 bg-clip-text text-transparent">
                Expert Team
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto text-responsive px-4 sm:px-0">
              A team of 6 expert developers passionate about building innovative digital solutions. We combine technical
              expertise with creative vision to deliver exceptional results.
            </p>
          </div>
        </div>
      </section>

      {/* Team Members Section */}
      <section className="py-12 sm:py-20 bg-white dark:bg-slate-950 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {teamMembers.map((member, index) => {
              const IconComponent = member.icon
              return (
                <div
                  key={member.id}
                  className={`group bg-white dark:bg-slate-900 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-800 overflow-hidden hover:shadow-xl transition-all duration-500 hover:-translate-y-2 transform ${
                    isVisible.team ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                  data-animate
                  id="team"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  {/* Member Image */}
                  <div className="relative h-64 sm:h-72 bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-700 overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement
                        target.src = `/placeholder-user.jpg`
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                    <div
                      className={`absolute top-4 right-4 w-12 h-12 bg-gradient-to-r ${member.color} rounded-xl flex items-center justify-center shadow-lg transition-transform group-hover:scale-110`}
                    >
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  {/* Member Content */}
                  <div className="p-6">
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-1 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-cyan-600 dark:text-cyan-400 font-medium mb-4">{member.role}</p>
                    <p className="text-slate-600 dark:text-slate-300 text-sm mb-4 line-clamp-3">{member.bio}</p>

                    {/* Skills */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {member.skills.map((skill) => (
                        <span
                          key={skill}
                          className="bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 px-2 py-1 rounded text-xs transition-colors hover:bg-cyan-100 dark:hover:bg-cyan-900"
                        >
                          {skill}
                        </span>
                      ))}
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
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Ready to Work With Us?
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 mb-6 sm:mb-8 text-responsive">
            Let's discuss how our expert team can bring your vision to life with cutting-edge technology and innovative
            design.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Link
              href="/#contact"
              className="bg-gradient-to-r from-cyan-600 to-violet-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold hover:from-cyan-700 hover:to-violet-700 transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2 transform hover:scale-105"
            >
              Get in Touch
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
            </Link>
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
                <a
                  href="https://github.com/Abdulah-eng/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-cyan-400 transition-colors transform hover:scale-110"
                >
                  <Github className="w-5 h-5 sm:w-6 sm:h-6" />
                </a>
                <a
                  href="https://www.linkedin.com/in/muhammad-abdullah-575819355"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-cyan-400 transition-colors transform hover:scale-110"
                >
                  <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />
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
                  <Link href="/team" className="hover:text-white transition-colors">
                    Team
                  </Link>
                </li>
                <li>
                  <Link href="/testimonials" className="hover:text-white transition-colors">
                    Reviews
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
    </div>
  )
}
