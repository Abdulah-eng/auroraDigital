"use client"

import {
  ArrowRight,
  Github,
  Mail,
  Phone,
  Menu,
  X,
  Linkedin,
  Star,
  Quote,
  ArrowLeft,
} from "lucide-react"
import Link from "next/link"
import { ThemeToggle } from "../../components/theme-toggle"
import { useState, useEffect } from "react"

const testimonials = [
  {
    id: 1,
    name: "pcs_rl",
    location: "United States",
    rating: 5,
    text: "Amazing experience working with this developer! He communicated clearly, stayed proactive throughout the entire project, and delivered results beyond my expectations. He didn't just complete tasks; he improved the design, functionality, and overall quality of my website.",
    isRepeatClient: true,
  },
  {
    id: 2,
    name: "comissionartist",
    location: "Philippines",
    rating: 5,
    text: "He did it again best order full system, full support, full of confidence working with him, this is not the last time as we will continue working with him",
    isRepeatClient: true,
  },
  {
    id: 3,
    name: "pcs_rl",
    location: "United States",
    rating: 5,
    text: "This developer is truly exceptional! He delivered a high quality website that looks amazing and functions perfectly. His communication was always quick, clear, and professional. Even after the initial delivery, he continued to support the project and made important adjustments to improve it.",
    isRepeatClient: true,
  },
  {
    id: 4,
    name: "ayman_services2",
    location: "France",
    rating: 5,
    text: "Amazing work! The developer was fast, professional, and very efficient. He understood exactly what I wanted and delivered a clean, smooth, and modern website. Communication was perfect — always available and attentive. I highly recommend him.",
    isRepeatClient: false,
  },
  {
    id: 5,
    name: "comissionartist",
    location: "Philippines",
    rating: 5,
    text: "As always my Go to man for a project is this guy, highly recommended, he will build you a fully working that can earn real money projects, you can tell him your plan he will exceed your project with more features that works with your workflow",
    isRepeatClient: true,
  },
  {
    id: 6,
    name: "adamcletus",
    location: "United States",
    rating: 5,
    text: "Amazing to work with! He's fast and efficient, and pays close attention to detail. He was able to build me a site with great features that allows for calendars tracking, a music mix, and great navigations button. He understood how I wanted the page layout to be and delivered!",
    isRepeatClient: false,
  },
  {
    id: 7,
    name: "anne2861",
    location: "United States",
    rating: 5,
    text: "He was very proactive and responsive with the delivery. Made changes as required with consistent communication. Strong technical skills.",
    isRepeatClient: false,
  },
  {
    id: 8,
    name: "usman_shaniiii",
    location: "United Kingdom",
    rating: 5,
    text: "I had an excellent experience working with this seller on Fiverr. From the very beginning, his professionalism and dedication were clear. He understood my requirements perfectly and delivered exactly what I was looking for, even better than my expectations. Communication throughout the project was smooth and professional.",
    isRepeatClient: false,
  },
  {
    id: 9,
    name: "piermerlin",
    location: "United States",
    rating: 5,
    text: "I told Abdullah what I need to fix on my CHATBOT and he went beyond to deliver a successful and professional job. will surely come back for upcoming project on CHATBOT.",
    isRepeatClient: false,
  },
  {
    id: 10,
    name: "jeremypop",
    location: "Australia",
    rating: 5,
    text: "This developer is legit one of the best I've worked with on Fiverr. He delivered a fully functional, clean, and professional web app ahead of schedule — with features exactly as I described (and even improved some with his own suggestions). Communication was top-notch, he understood everything quickly, and delivered beyond expectations.",
    isRepeatClient: true,
  },
  {
    id: 11,
    name: "darreire2020",
    location: "Ireland",
    rating: 5,
    text: "I had the pleasure of working with Abdullah and can confidently say he delivered above and beyond expectations. His professionalism, attention to detail, and dedication to quality work made a huge difference in the success of our project. Abdullah communicates clearly, meets deadlines, and shows genuine care for the project's success.",
    isRepeatClient: true,
  },
  {
    id: 12,
    name: "abdisalam_yusuf",
    location: "Kenya",
    rating: 5,
    text: "Very proficient and easy to work with, will definitely come back for more",
    isRepeatClient: true,
  },
]

export default function TestimonialsPage() {
  const [isVisible, setIsVisible] = useState({
    hero: false,
    testimonials: false,
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
              <Link href="/team" className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors text-sm lg:text-base">
                Team
              </Link>
              <Link href="/testimonials" className="text-slate-900 dark:text-white font-medium text-sm lg:text-base">
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
                  className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Team
                </Link>
                <Link
                  href="/testimonials"
                  className="text-slate-900 dark:text-white font-medium"
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
                <Star className="w-3 h-3 sm:w-4 sm:h-4 text-cyan-600 dark:text-cyan-400 flex-shrink-0" />
                <span className="text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300">Client Reviews</span>
              </div>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-4 sm:mb-6">
              What Our{" "}
              <span className="bg-gradient-to-r from-cyan-600 to-violet-600 bg-clip-text text-transparent">
                Clients Say
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto text-responsive px-4 sm:px-0">
              Don't just take our word for it. Here's what our clients from around the world have to say about working
              with Aurora Digital.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-8 sm:py-12 bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            <div className="text-center bg-gradient-to-br from-cyan-50 to-cyan-100 dark:from-cyan-900/20 dark:to-cyan-800/20 p-4 sm:p-6 rounded-2xl border border-cyan-200 dark:border-cyan-800/50 shadow-lg">
              <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent mb-2">
                5.0
              </div>
              <div className="flex justify-center gap-0.5 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <div className="text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300">Average Rating</div>
            </div>
            <div className="text-center bg-gradient-to-br from-violet-50 to-violet-100 dark:from-violet-900/20 dark:to-violet-800/20 p-4 sm:p-6 rounded-2xl border border-violet-200 dark:border-violet-800/50 shadow-lg">
              <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent mb-2">
                {testimonials.length}+
              </div>
              <div className="text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Happy Clients</div>
              <div className="text-xs text-slate-500 dark:text-slate-400">Worldwide</div>
            </div>
            <div className="text-center bg-gradient-to-br from-pink-50 to-pink-100 dark:from-pink-900/20 dark:to-pink-800/20 p-4 sm:p-6 rounded-2xl border border-pink-200 dark:border-pink-800/50 shadow-lg">
              <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent mb-2">
                {testimonials.filter((t) => t.isRepeatClient).length}+
              </div>
              <div className="text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Repeat Clients</div>
              <div className="text-xs text-slate-500 dark:text-slate-400">Trusted Partners</div>
            </div>
            <div className="text-center bg-gradient-to-br from-emerald-50 to-emerald-100 dark:from-emerald-900/20 dark:to-emerald-800/20 p-4 sm:p-6 rounded-2xl border border-emerald-200 dark:border-emerald-800/50 shadow-lg">
              <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent mb-2">
                100%
              </div>
              <div className="text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Satisfaction</div>
              <div className="text-xs text-slate-500 dark:text-slate-400">Guaranteed</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-12 sm:py-20 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`group bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-2xl shadow-lg border-2 border-slate-200 dark:border-slate-800 transition-all duration-500 hover:shadow-2xl hover:border-cyan-300 dark:hover:border-cyan-700 transform hover:-translate-y-2 relative overflow-hidden ${
                  isVisible.testimonials ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                data-animate
                id="testimonials"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Gradient accent */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-600 via-violet-600 to-pink-600"></div>

                {/* Quote icon */}
                <div className="absolute top-6 right-6 opacity-10 dark:opacity-5">
                  <Quote className="w-16 h-16 text-cyan-600" />
                </div>

                <div className="relative">
                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-slate-700 dark:text-slate-200 leading-relaxed mb-6 text-sm sm:text-base relative z-10">
                    "{testimonial.text}"
                  </p>

                  {/* Author Info */}
                  <div className="flex items-center gap-3 pt-4 border-t border-slate-200 dark:border-slate-800">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-600 to-violet-600 flex items-center justify-center flex-shrink-0 text-white font-bold text-lg">
                      {testimonial.name.charAt(0).toUpperCase()}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1 flex-wrap">
                        <h3 className="font-semibold text-slate-900 dark:text-white text-sm sm:text-base">
                          {testimonial.name}
                        </h3>
                        {testimonial.isRepeatClient && (
                          <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs px-2 py-0.5 rounded-full font-medium whitespace-nowrap">
                            ⭐ Repeat
                          </span>
                        )}
                      </div>
                      <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">{testimonial.location}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-20 bg-gradient-to-r from-cyan-50 to-violet-50 dark:from-slate-900 dark:to-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Ready to Join Our Happy Clients?
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 mb-6 sm:mb-8 text-responsive">
            Let's discuss how we can help bring your vision to life and add your success story to our collection.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Link
              href="/#contact"
              className="bg-gradient-to-r from-cyan-600 to-violet-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold hover:from-cyan-700 hover:to-violet-700 transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2 transform hover:scale-105"
            >
              Get Started
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
            </Link>
            <Link
              href="/projects"
              className="border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold hover:border-slate-400 dark:hover:border-slate-500 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all flex items-center justify-center gap-2 transform hover:scale-105"
            >
              View Our Work
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
