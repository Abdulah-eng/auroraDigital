"use client"

import {
  ArrowRight,
  Code,
  Bot,
  Rocket,
  Mail,
  Phone,
  MapPin,
  Github,
  Twitter,
  Linkedin,
  Sparkles,
  Zap,
  Target,
  Menu,
  X,
  Loader2,
  CheckCircle,
  AlertCircle,
} from "lucide-react"
import { useState, useEffect, useRef } from "react"
import { ThemeToggle } from "../components/theme-toggle"
import { ChatWindow } from "../components/chat-window"
import Link from "next/link"

export default function LandingPage() {
  const [isChatOpen, setIsChatOpen] = useState(false)
  const [isVisible, setIsVisible] = useState({
    hero: false,
    services: false,
    chatAgent: false,
    contact: false,
    about: false,
  })
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [displayText, setDisplayText] = useState("")
  const [isTyping, setIsTyping] = useState(true)
  const [hasUnreadMessage, setHasUnreadMessage] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [notification, setNotification] = useState<{
    show: boolean
    success: boolean
    message: string
  }>({ show: false, success: false, message: "" })
  const formRef = useRef<HTMLFormElement>(null)
  const observerRef = useRef(null)

  const heroTexts = [
    "Built by Humans, Powered by AI",
    "Crafted with Code, Enhanced by Intelligence",
    "Human Creativity Meets AI Innovation",
    "Where Design Meets Intelligence",
    "Engineered for Excellence, Powered by AI",
  ]

  const heroDescriptions = [
    "We create stunning, high-performance web applications that drive results. From concept to launch, we're your digital transformation partner.",
    "Transforming ideas into powerful digital experiences with cutting-edge AI integration and human-centered design.",
    "Building the future of web development through intelligent automation and creative problem-solving.",
    "Your vision, our expertise, AI's power - combined to create exceptional digital solutions that scale.",
    "Delivering next-generation web applications that adapt, learn, and grow with your business needs.",
  ]

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

  const formHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    const formData = new FormData(e.currentTarget)
    const name = formData.get("name")
    const email = formData.get("email")
    const project = formData.get("project")
    
    const form = {
      name: name,
      email: email,
      message: project
    }

    try {
      const res = await fetch("/api/saveLead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })

      if (res.ok) {
        setNotification({
          show: true,
          success: true,
          message: "Form submitted successfully! We'll contact you soon."
        })
        // Clear form
        if (formRef.current) {
          formRef.current.reset()
        }
      } else {
        throw new Error("Failed to submit form")
      }
    } catch (error) {
      setNotification({
        show: true,
        success: false,
        message: "Failed to submit form. Please try again."
      })
    } finally {
      setIsSubmitting(false)
      // Hide notification after 5 seconds
      setTimeout(() => {
        setNotification(prev => ({ ...prev, show: false }))
      }, 5000)
    }
  }

  // Typewriter effect for hero text
  useEffect(() => {
    const currentFullText = heroTexts[currentTextIndex]
    let currentIndex = 0

    const typeInterval = setInterval(() => {
      if (currentIndex <= currentFullText.length) {
        setDisplayText(currentFullText.slice(0, currentIndex))
        currentIndex++
      } else {
        clearInterval(typeInterval)
        setIsTyping(false)

        // Wait 3 seconds then start erasing
        setTimeout(() => {
          setIsTyping(true)
          const eraseInterval = setInterval(() => {
            if (currentIndex > 0) {
              setDisplayText(currentFullText.slice(0, currentIndex - 1))
              currentIndex--
            } else {
              clearInterval(eraseInterval)
              setCurrentTextIndex((prev) => (prev + 1) % heroTexts.length)
            }
          }, 50)
        }, 3000)
      }
    }, 100)

    return () => clearInterval(typeInterval)
  }, [currentTextIndex])

  const handleChatNotification = (hasUnread: boolean) => {
    setHasUnreadMessage(hasUnread)
  }

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
              <a
                href="#services"
                className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors text-sm lg:text-base"
              >
                Services
              </a>
              <Link
                href="/projects"
                className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors text-sm lg:text-base"
              >
                Projects
              </Link>
              <a
                href="#about"
                className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors text-sm lg:text-base"
              >
                About
              </a>
              <a
                href="#contact"
                className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors text-sm lg:text-base"
              >
                Contact
              </a>
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
                  href="#services"
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
                <a
                  href="#about"
                  className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  About
                </a>
                <a
                  href="#contact"
                  className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact
                </a>
                <button className="bg-gradient-to-r from-cyan-600 to-violet-600 text-white px-6 py-2 rounded-lg hover:from-cyan-700 hover:to-violet-700 transition-all shadow-lg text-left">
                  Get Started
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>
      {/* Notification Toast */}
      {notification.show && (
        <div className={`fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 max-w-xs w-full sm:max-w-sm ${
          notification.success ? 'bg-green-50 dark:bg-green-900' : 'bg-red-50 dark:bg-red-900'
        } rounded-lg shadow-lg border ${
          notification.success ? 'border-green-200 dark:border-green-800' : 'border-red-200 dark:border-red-800'
        } p-4 transform transition-all duration-300 ${
          notification.show ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
        }`}>
          <div className="flex items-start">
            <div className="flex-shrink-0">
              {notification.success ? (
                <CheckCircle className="h-5 w-5 text-green-500 dark:text-green-400" />
              ) : (
                <AlertCircle className="h-5 w-5 text-red-500 dark:text-red-400" />
              )}
            </div>
            <div className="ml-3">
              <p className={`text-sm font-medium ${
                notification.success ? 'text-green-800 dark:text-green-100' : 'text-red-800 dark:text-red-100'
              }`}>
                {notification.message}
              </p>
            </div>
            <div className="ml-auto pl-3">
              <div className="-mx-1.5 -my-1.5">
                <button
                  type="button"
                  onClick={() => setNotification(prev => ({ ...prev, show: false }))}
                  className={`inline-flex rounded-md p-1.5 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                    notification.success 
                      ? 'bg-green-50 text-green-500 hover:bg-green-100 focus:ring-green-600 focus:ring-offset-green-50 dark:bg-green-900 dark:hover:bg-green-800'
                      : 'bg-red-50 text-red-500 hover:bg-red-100 focus:ring-red-600 focus:ring-offset-red-50 dark:bg-red-900 dark:hover:bg-red-800'
                  }`}
                >
                  <span className="sr-only">Dismiss</span>
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* Enhanced Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-50 to-white dark:from-slate-900 dark:to-slate-950 py-12 sm:py-20 lg:py-32 overflow-hidden">
        {/* Enhanced Animated Background SVG */}
        <div className="absolute inset-0 opacity-10 dark:opacity-5">
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 1200 800"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute inset-0"
          >
            <g opacity="0.6">
              {/* Floating particles */}
              <circle cx="200" cy="200" r="3" fill="url(#particleGradient1)">
                <animate attributeName="opacity" values="0;1;0" dur="3s" repeatCount="indefinite" begin="0s" />
                <animateTransform
                  attributeName="transform"
                  type="translate"
                  values="0,0;10,-10;0,0"
                  dur="4s"
                  repeatCount="indefinite"
                />
              </circle>
              <circle cx="400" cy="150" r="2" fill="url(#particleGradient2)">
                <animate attributeName="opacity" values="0;1;0" dur="2.5s" repeatCount="indefinite" begin="0.5s" />
                <animateTransform
                  attributeName="transform"
                  type="translate"
                  values="0,0;-8,12;0,0"
                  dur="3.5s"
                  repeatCount="indefinite"
                />
              </circle>
              <circle cx="600" cy="300" r="4" fill="url(#particleGradient1)">
                <animate attributeName="opacity" values="0;1;0" dur="2.8s" repeatCount="indefinite" begin="1s" />
                <animateTransform
                  attributeName="transform"
                  type="translate"
                  values="0,0;15,5;0,0"
                  dur="4.2s"
                  repeatCount="indefinite"
                />
              </circle>
              <circle cx="800" cy="250" r="2.5" fill="url(#particleGradient2)">
                <animate attributeName="opacity" values="0;1;0" dur="3.2s" repeatCount="indefinite" begin="1.5s" />
                <animateTransform
                  attributeName="transform"
                  type="translate"
                  values="0,0;-12,-8;0,0"
                  dur="3.8s"
                  repeatCount="indefinite"
                />
              </circle>
              <circle cx="1000" cy="400" r="3.5" fill="url(#particleGradient1)">
                <animate attributeName="opacity" values="0;1;0" dur="2.3s" repeatCount="indefinite" begin="0.2s" />
                <animateTransform
                  attributeName="transform"
                  type="translate"
                  values="0,0;8,15;0,0"
                  dur="4.5s"
                  repeatCount="indefinite"
                />
              </circle>
              <circle cx="300" cy="500" r="2.8" fill="url(#particleGradient2)">
                <animate attributeName="opacity" values="0;1;0" dur="2.7s" repeatCount="indefinite" begin="0.8s" />
                <animateTransform
                  attributeName="transform"
                  type="translate"
                  values="0,0;-10,8;0,0"
                  dur="3.3s"
                  repeatCount="indefinite"
                />
              </circle>
              <circle cx="700" cy="600" r="3.2" fill="url(#particleGradient1)">
                <animate attributeName="opacity" values="0;1;0" dur="3.5s" repeatCount="indefinite" begin="1.2s" />
                <animateTransform
                  attributeName="transform"
                  type="translate"
                  values="0,0;12,-15;0,0"
                  dur="4.8s"
                  repeatCount="indefinite"
                />
              </circle>

              {/* Connecting lines */}
              <path d="M200,200 Q400,150 600,300" stroke="url(#lineGradient)" strokeWidth="1" fill="none" opacity="0.3">
                <animate
                  attributeName="stroke-dasharray"
                  values="0,1000;500,500;1000,0"
                  dur="6s"
                  repeatCount="indefinite"
                />
              </path>
              <path
                d="M600,300 Q800,250 1000,400"
                stroke="url(#lineGradient)"
                strokeWidth="1"
                fill="none"
                opacity="0.3"
              >
                <animate
                  attributeName="stroke-dasharray"
                  values="0,800;400,400;800,0"
                  dur="5s"
                  repeatCount="indefinite"
                  begin="1s"
                />
              </path>
            </g>
            <defs>
              <radialGradient id="particleGradient1" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#06b6d4" stopOpacity="1" />
                <stop offset="100%" stopColor="#06b6d4" stopOpacity="0" />
              </radialGradient>
              <radialGradient id="particleGradient2" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#8b5cf6" stopOpacity="1" />
                <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0" />
              </radialGradient>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.5" />
                <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.5" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="absolute inset-0 bg-grid-slate-100 dark:bg-grid-slate-800 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`text-center transition-all duration-1000 ${
              isVisible.hero ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            data-animate
            id="hero"
          >
            <div className="flex justify-center mb-6">
              <div className="flex items-center gap-2 bg-gradient-to-r from-cyan-500/10 to-violet-500/10 dark:from-cyan-400/10 dark:to-violet-400/10 border border-cyan-500/20 dark:border-cyan-400/20 rounded-full px-3 sm:px-4 py-2 animate-bounce-subtle">
                <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-cyan-600 dark:text-cyan-400 flex-shrink-0" />
                <span className="text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300">
                  AI-Powered Development
                </span>
              </div>
            </div>

            {/* Dynamic Hero Title */}
            <h1 className="hero-text text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-slate-900 dark:text-white mb-4 sm:mb-6 animate-fade-in-up text-responsive">
              Websites That Convert — <br className="hidden sm:block" />
              <span className="bg-gradient-to-r from-cyan-600 to-violet-600 bg-clip-text text-transparent relative block sm:inline">
                {displayText}
                <span
                  className={`inline-block w-0.5 sm:w-1 h-8 sm:h-12 md:h-16 bg-gradient-to-r from-cyan-600 to-violet-600 ml-1 sm:ml-2 ${isTyping ? "animate-pulse" : "opacity-0"}`}
                ></span>
              </span>
            </h1>

            {/* Dynamic Description */}
            <p className="text-lg sm:text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-6 sm:mb-8 max-w-4xl mx-auto animate-fade-in-up animation-delay-200 leading-relaxed text-responsive px-4 sm:px-0">
              {heroDescriptions[currentTextIndex]}
            </p>

            {/* Enhanced Stats */}
            <div className="flex flex-wrap justify-center gap-4 sm:gap-8 mb-6 sm:mb-8 animate-fade-in-up animation-delay-300 px-4 sm:px-0">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-cyan-600 to-violet-600 bg-clip-text text-transparent">
                  10+
                </div>
                <div className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-violet-600 to-pink-600 bg-clip-text text-transparent">
                  99.99%
                </div>
                <div className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-pink-600 to-cyan-600 bg-clip-text text-transparent">
                  24/7
                </div>
                <div className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">AI Support</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center animate-fade-in-up animation-delay-400 px-4 sm:px-0">
              <button
                onClick={() => setIsChatOpen(true)}
                className="group bg-gradient-to-r from-cyan-600 to-violet-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold hover:from-cyan-700 hover:to-violet-700 transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:scale-105 btn-responsive"
              >
                Talk to our AI Agent
                <Bot className="w-4 h-4 sm:w-5 sm:h-5 group-hover:rotate-12 transition-transform flex-shrink-0" />
              </button>
              <Link
                href="/projects"
                className="border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold hover:border-slate-400 dark:hover:border-slate-500 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all flex items-center justify-center transform hover:scale-105 btn-responsive"
              >
                View Our Work
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform flex-shrink-0" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-12 sm:py-20 bg-white dark:bg-slate-950 relative overflow-hidden">
        {/* Decorative SVG */}
        <div className="absolute top-10 right-4 sm:right-10 opacity-20 dark:opacity-10">
          <svg
            width="60"
            height="60"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="sm:w-[100px] sm:h-[100px]"
          >
            <path
              d="M50 10 L90 90 L10 90 Z"
              stroke="url(#serviceGradient)"
              strokeWidth="2"
              fill="none"
              strokeDasharray="240"
              strokeDashoffset="240"
            >
              <animate attributeName="stroke-dashoffset" values="240;0;240" dur="4s" repeatCount="indefinite" />
            </path>
            <defs>
              <linearGradient id="serviceGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#8b5cf6" />
                <stop offset="100%" stopColor="#06b6d4" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ${
              isVisible.services ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            data-animate
            id="services"
          >
            <div className="flex justify-center mb-4">
              <div className="flex items-center gap-2 bg-gradient-to-r from-cyan-500/10 to-violet-500/10 dark:from-cyan-400/10 dark:to-violet-400/10 border border-cyan-500/20 dark:border-cyan-400/20 rounded-full px-3 sm:px-4 py-2">
                <Zap className="w-3 h-3 sm:w-4 sm:h-4 text-violet-600 dark:text-violet-400 flex-shrink-0" />
                <span className="text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300">Our Expertise</span>
              </div>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Our Services
            </h2>
            <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto text-responsive">
              We specialize in cutting-edge technologies to bring your vision to life
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 grid-responsive">
            {/* Service 1 */}
            <div
              className={`group bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-800 hover:shadow-xl hover:border-cyan-500/50 dark:hover:border-cyan-400/50 transition-all duration-500 transform hover:scale-105 ${
                isVisible.services ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: "100ms" }}
            >
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-cyan-500/10 to-cyan-600/20 dark:from-cyan-400/10 dark:to-cyan-500/20 rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform">
                <Code className="w-6 h-6 sm:w-8 sm:h-8 text-cyan-600 dark:text-cyan-400" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-3 sm:mb-4">
                Full-stack Web Development
              </h3>
              <p className="text-slate-600 dark:text-slate-300 mb-4 sm:mb-6 text-sm sm:text-base">
                Modern web applications built with Next.js, React, and MongoDB. Scalable, fast, and optimized for
                performance and SEO.
              </p>
              <ul className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 space-y-2">
                <li>• Next.js & React Development</li>
                <li>• MongoDB Database Design</li>
                <li>• API Development & Integration</li>
                <li>• Performance Optimization</li>
              </ul>
            </div>

            {/* Service 2 */}
            <div
              className={`group bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-800 hover:shadow-xl hover:border-violet-500/50 dark:hover:border-violet-400/50 transition-all duration-500 transform hover:scale-105 ${
                isVisible.services ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: "200ms" }}
            >
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-violet-500/10 to-violet-600/20 dark:from-violet-400/10 dark:to-violet-500/20 rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform">
                <Bot className="w-6 h-6 sm:w-8 sm:h-8 text-violet-600 dark:text-violet-400" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-3 sm:mb-4">
                AI-Powered Applications
              </h3>
              <p className="text-slate-600 dark:text-slate-300 mb-4 sm:mb-6 text-sm sm:text-base">
                Integrate cutting-edge AI capabilities into your applications. From chatbots to intelligent automation
                and data analysis.
              </p>
              <ul className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 space-y-2">
                <li>• AI Chatbot Development</li>
                <li>• Machine Learning Integration</li>
                <li>• Natural Language Processing</li>
                <li>• Intelligent Automation</li>
              </ul>
            </div>

            {/* Service 3 */}
            <div
              className={`group bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-800 hover:shadow-xl hover:border-pink-500/50 dark:hover:border-pink-400/50 transition-all duration-500 transform hover:scale-105 ${
                isVisible.services ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: "300ms" }}
            >
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-pink-500/10 to-pink-600/20 dark:from-pink-400/10 dark:to-pink-500/20 rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform">
                <Rocket className="w-6 h-6 sm:w-8 sm:h-8 text-pink-600 dark:text-pink-400" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-3 sm:mb-4">
                MVP Development for Startups
              </h3>
              <p className="text-slate-600 dark:text-slate-300 mb-4 sm:mb-6 text-sm sm:text-base">
                Rapid prototyping and MVP development to validate your ideas quickly. Get to market faster with our
                agile development approach.
              </p>
              <ul className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 space-y-2">
                <li>• Rapid Prototyping</li>
                <li>• Agile Development</li>
                <li>• User Testing & Feedback</li>
                <li>• Scalable Architecture</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* AI Chat Agent Section */}
      <section className="py-12 sm:py-20 bg-gradient-to-r from-cyan-50 to-violet-50 dark:from-slate-900 dark:to-slate-800 relative overflow-hidden">
        {/* Animated Circuit Pattern SVG */}
        <div className="absolute inset-0 opacity-10 dark:opacity-5">
          <svg width="100%" height="100%" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g stroke="currentColor" strokeWidth="1" fill="none">
              <circle cx="100" cy="100" r="20">
                <animate attributeName="r" values="20;25;20" dur="2s" repeatCount="indefinite" />
              </circle>
              <circle cx="300" cy="100" r="15">
                <animate attributeName="r" values="15;20;15" dur="2s" repeatCount="indefinite" begin="0.5s" />
              </circle>
              <circle cx="200" cy="200" r="25">
                <animate attributeName="r" values="25;30;25" dur="2s" repeatCount="indefinite" begin="1s" />
              </circle>
              <circle cx="100" cy="300" r="18">
                <animate attributeName="r" values="18;23;18" dur="2s" repeatCount="indefinite" begin="1.5s" />
              </circle>
              <circle cx="300" cy="300" r="22">
                <animate attributeName="r" values="22;27;22" dur="2s" repeatCount="indefinite" begin="0.3s" />
              </circle>
              <line x1="120" y1="100" x2="180" y2="200">
                <animate attributeName="opacity" values="0.3;1;0.3" dur="3s" repeatCount="indefinite" />
              </line>
              <line x1="220" y1="200" x2="280" y2="100">
                <animate attributeName="opacity" values="0.3;1;0.3" dur="3s" repeatCount="indefinite" begin="1s" />
              </line>
              <line x1="200" y1="220" x2="120" y2="300">
                <animate attributeName="opacity" values="0.3;1;0.3" dur="3s" repeatCount="indefinite" begin="2s" />
              </line>
              <line x1="220" y1="220" x2="280" y2="300">
                <animate attributeName="opacity" values="0.3;1;0.3" dur="3s" repeatCount="indefinite" begin="0.5s" />
              </line>
            </g>
          </svg>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div
            className={`bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-800 transition-all duration-1000 transform ${
              isVisible.chatAgent ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-8 scale-95"
            }`}
            data-animate
            id="chatAgent"
          >
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-cyan-500 to-violet-500 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-lg animate-pulse-subtle">
              <Bot className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-3 sm:mb-4">
              Get Instant Answers from Our AI Agent
            </h2>
            <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 mb-6 sm:mb-8 text-responsive">
              Have questions about your project? Our AI agent is here to help 24/7. Get instant quotes, technical
              advice, and project guidance.
            </p>
            <button
              onClick={() => setIsChatOpen(true)}
              className="group bg-gradient-to-r from-cyan-600 to-violet-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold hover:from-cyan-700 hover:to-violet-700 transition-all flex items-center justify-center gap-2 mx-auto shadow-lg hover:shadow-xl transform hover:scale-105 btn-responsive"
            >
              <Bot className="w-4 h-4 sm:w-5 sm:h-5 group-hover:bounce flex-shrink-0" />
              Talk to our AI Agent
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform flex-shrink-0" />
            </button>
          </div>
        </div>
      </section>

       {/* Lead Capture Section */}
      <section id="contact" className="py-12 sm:py-20 bg-white dark:bg-slate-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ${
              isVisible.contact ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            data-animate
            id="contact"
          >
            <div className="flex justify-center mb-4">
              <div className="flex items-center gap-2 bg-gradient-to-r from-cyan-500/10 to-violet-500/10 dark:from-cyan-400/10 dark:to-violet-400/10 border border-cyan-500/20 dark:border-cyan-400/20 rounded-full px-3 sm:px-4 py-2">
                <Target className="w-3 h-3 sm:w-4 sm:h-4 text-cyan-600 dark:text-cyan-400 flex-shrink-0" />
                <span className="text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300">Let's Connect</span>
              </div>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 text-responsive">
              Tell us about your vision and we'll bring it to life
            </p>
          </div>

          <div
            className={`bg-slate-50 dark:bg-slate-900 p-6 sm:p-8 md:p-12 rounded-2xl border border-slate-200 dark:border-slate-800 transition-all duration-1000 ${
              isVisible.contact ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            <form 
              ref={formRef}
              className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8" 
              onSubmit={formHandler}
            >
              <div className="space-y-4 sm:space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all transform focus:scale-105 text-sm sm:text-base"
                    placeholder="John Doe"
                    disabled={isSubmitting}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all transform focus:scale-105 text-sm sm:text-base"
                    placeholder="john@example.com"
                    disabled={isSubmitting}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="project" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Project Description
                </label>
                <textarea
                  id="project"
                  name="project"
                  rows={6}
                  required
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all resize-none transform focus:scale-105 text-sm sm:text-base"
                  placeholder="Tell us about your project, goals, and timeline..."
                  disabled={isSubmitting}
                ></textarea>
              </div>

              <div className="md:col-span-2 text-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-gradient-to-r from-cyan-600 to-violet-600 text-white px-8 sm:px-12 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold hover:from-cyan-700 hover:to-violet-700 transition-all shadow-lg hover:shadow-xl transform hover:scale-105 btn-responsive disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 mx-auto"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    "Send Project Details"
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-12 sm:py-20 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div
            className={`transition-all duration-1000 ${
              isVisible.about ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            data-animate
            id="about"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6 sm:mb-8">
              Who We Are
            </h2>
            <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 leading-relaxed text-responsive">
              We're engineers who love design, automation, and delivering powerful web solutions. Our team combines
              technical expertise with creative vision to build applications that not only look great but perform
              exceptionally. We believe in the power of AI to enhance human creativity, not replace it.
            </p>
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
                  <Twitter className="w-5 h-5 sm:w-6 sm:h-6" />
                </a>
                <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors transform hover:scale-110">
                  <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Services</h3>
              <ul className="space-y-2 text-slate-400 text-sm sm:text-base">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Web Development
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    AI Applications
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    MVP Development
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Consulting
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Contact</h3>
              <div className="space-y-2 sm:space-y-3 text-slate-400 text-sm sm:text-base">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                  <span className="break-all">shafiqueabdurrehman@gmail.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                  <span>+92 319-2165662</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                  <span>NUST H-12, Islamabad, Pakistan</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-800 mt-6 sm:mt-8 pt-4 sm:pt-6 text-center text-slate-400 text-sm sm:text-base">
            <p>&copy; 2024 Aurora Digital. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Smart Floating AI Chat Button */}
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

            {/* Smart notification dot - only shows when there's an unread message */}
            {hasUnreadMessage && (
              <div className="absolute -top-1 -right-1 w-2.5 h-2.5 sm:w-3 sm:h-3 bg-red-500 rounded-full animate-pulse">
                <div className="absolute inset-0 w-2.5 h-2.5 sm:w-3 sm:h-3 bg-red-500 rounded-full animate-ping"></div>
              </div>
            )}
          </button>
        </div>
      </div>

      {/* Chat Window */}
      <ChatWindow
        isOpen={isChatOpen}
        onClose={() => setIsChatOpen(false)}
        onNotificationChange={handleChatNotification}
      />
    </div>
  )
}
