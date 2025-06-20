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
} from "lucide-react"
import { useState } from "react"
import { ThemeToggle } from "../components/theme-toggle"
import { ChatWindow } from "../components/chat-window"

export default function LandingPage() {
  const [isChatOpen, setIsChatOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 transition-colors">
      {/* Navigation */}
      <nav className="bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <div className="text-2xl font-bold text-slate-900 dark:text-white">
                Azraq <span className="text-cyan-600 dark:text-cyan-400">Web Agency</span>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#services"
                className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
              >
                Services
              </a>
              <a
                href="#about"
                className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
              >
                About
              </a>
              <a
                href="#contact"
                className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
              >
                Contact
              </a>
              <ThemeToggle />
              <button className="bg-gradient-to-r from-cyan-600 to-violet-600 text-white px-6 py-2 rounded-lg hover:from-cyan-700 hover:to-violet-700 transition-all shadow-lg hover:shadow-xl">
                Get Started
              </button>
            </div>
            <div className="md:hidden">
              <ThemeToggle />
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-50 to-white dark:from-slate-900 dark:to-slate-950 py-20 lg:py-32">
        <div className="absolute inset-0 bg-grid-slate-100 dark:bg-grid-slate-800 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="flex items-center gap-2 bg-gradient-to-r from-cyan-500/10 to-violet-500/10 dark:from-cyan-400/10 dark:to-violet-400/10 border border-cyan-500/20 dark:border-cyan-400/20 rounded-full px-4 py-2">
                <Sparkles className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">AI-Powered Development</span>
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-slate-900 dark:text-white mb-6">
              Websites That Convert —{" "}
              <span className="bg-gradient-to-r from-cyan-600 to-violet-600 bg-clip-text text-transparent">
                Built by Humans
              </span>
              ,{" "}
              <span className="bg-gradient-to-r from-violet-600 to-pink-600 bg-clip-text text-transparent">
                Powered by AI
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-8 max-w-3xl mx-auto">
              We create stunning, high-performance web applications that drive results. From concept to launch, we're
              your digital transformation partner.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => setIsChatOpen(true)}
                className="group bg-gradient-to-r from-cyan-600 to-violet-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-700 hover:to-violet-700 transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
              >
                Talk to our AI Agent
                <Bot className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              </button>
              <button className="border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 px-8 py-4 rounded-lg text-lg font-semibold hover:border-slate-400 dark:hover:border-slate-500 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                View Our Work
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-4">
              <div className="flex items-center gap-2 bg-gradient-to-r from-cyan-500/10 to-violet-500/10 dark:from-cyan-400/10 dark:to-violet-400/10 border border-cyan-500/20 dark:border-cyan-400/20 rounded-full px-4 py-2">
                <Zap className="w-4 h-4 text-violet-600 dark:text-violet-400" />
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Our Expertise</span>
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Our Services</h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              We specialize in cutting-edge technologies to bring your vision to life
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="group bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-800 hover:shadow-xl hover:border-cyan-500/50 dark:hover:border-cyan-400/50 transition-all">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500/10 to-cyan-600/20 dark:from-cyan-400/10 dark:to-cyan-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Code className="w-8 h-8 text-cyan-600 dark:text-cyan-400" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Full-stack Web Development</h3>
              <p className="text-slate-600 dark:text-slate-300 mb-6">
                Modern web applications built with Next.js, React, and MongoDB. Scalable, fast, and optimized for
                performance and SEO.
              </p>
              <ul className="text-sm text-slate-500 dark:text-slate-400 space-y-2">
                <li>• Next.js & React Development</li>
                <li>• MongoDB Database Design</li>
                <li>• API Development & Integration</li>
                <li>• Performance Optimization</li>
              </ul>
            </div>

            {/* Service 2 */}
            <div className="group bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-800 hover:shadow-xl hover:border-violet-500/50 dark:hover:border-violet-400/50 transition-all">
              <div className="w-16 h-16 bg-gradient-to-br from-violet-500/10 to-violet-600/20 dark:from-violet-400/10 dark:to-violet-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Bot className="w-8 h-8 text-violet-600 dark:text-violet-400" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">AI-Powered Applications</h3>
              <p className="text-slate-600 dark:text-slate-300 mb-6">
                Integrate cutting-edge AI capabilities into your applications. From chatbots to intelligent automation
                and data analysis.
              </p>
              <ul className="text-sm text-slate-500 dark:text-slate-400 space-y-2">
                <li>• AI Chatbot Development</li>
                <li>• Machine Learning Integration</li>
                <li>• Natural Language Processing</li>
                <li>• Intelligent Automation</li>
              </ul>
            </div>

            {/* Service 3 */}
            <div className="group bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-800 hover:shadow-xl hover:border-pink-500/50 dark:hover:border-pink-400/50 transition-all">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500/10 to-pink-600/20 dark:from-pink-400/10 dark:to-pink-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Rocket className="w-8 h-8 text-pink-600 dark:text-pink-400" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">MVP Development for Startups</h3>
              <p className="text-slate-600 dark:text-slate-300 mb-6">
                Rapid prototyping and MVP development to validate your ideas quickly. Get to market faster with our
                agile development approach.
              </p>
              <ul className="text-sm text-slate-500 dark:text-slate-400 space-y-2">
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
      <section className="py-20 bg-gradient-to-r from-cyan-50 to-violet-50 dark:from-slate-900 dark:to-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-800">
            <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-violet-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
              <Bot className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
              Get Instant Answers from Our AI Agent
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 mb-8">
              Have questions about your project? Our AI agent is here to help 24/7. Get instant quotes, technical
              advice, and project guidance.
            </p>
            <button
              onClick={() => setIsChatOpen(true)}
              className="group bg-gradient-to-r from-cyan-600 to-violet-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-700 hover:to-violet-700 transition-all flex items-center justify-center gap-2 mx-auto shadow-lg hover:shadow-xl"
            >
              <Bot className="w-5 h-5 group-hover:bounce" />
              Talk to our AI Agent
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* Lead Capture Section */}
      <section id="contact" className="py-20 bg-white dark:bg-slate-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-4">
              <div className="flex items-center gap-2 bg-gradient-to-r from-cyan-500/10 to-violet-500/10 dark:from-cyan-400/10 dark:to-violet-400/10 border border-cyan-500/20 dark:border-cyan-400/20 rounded-full px-4 py-2">
                <Target className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Let's Connect</span>
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300">
              Tell us about your vision and we'll bring it to life
            </p>
          </div>

          <div className="bg-slate-50 dark:bg-slate-900 p-8 md:p-12 rounded-2xl border border-slate-200 dark:border-slate-800">
            <form className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-colors"
                    placeholder="John Doe"
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
                    className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-colors"
                    placeholder="john@example.com"
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
                  className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-colors resize-none"
                  placeholder="Tell us about your project, goals, and timeline..."
                ></textarea>
              </div>

              <div className="md:col-span-2 text-center">
                <button
                  type="submit"
                  className="bg-gradient-to-r from-cyan-600 to-violet-600 text-white px-12 py-4 rounded-lg text-lg font-semibold hover:from-cyan-700 hover:to-violet-700 transition-all shadow-lg hover:shadow-xl"
                >
                  Send Project Details
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-20 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-8">Who We Are</h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
            We're engineers who love design, automation, and delivering powerful web solutions. Our team combines
            technical expertise with creative vision to build applications that not only look great but perform
            exceptionally. We believe in the power of AI to enhance human creativity, not replace it.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 dark:bg-slate-950 text-white py-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="text-2xl font-bold mb-4">
                Azraq <span className="text-cyan-400">Web Agency</span>
              </div>
              <p className="text-slate-400 mb-4">
                Building the future of web development with AI-powered solutions and human creativity.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">
                  <Github className="w-6 h-6" />
                </a>
                <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">
                  <Twitter className="w-6 h-6" />
                </a>
                <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">
                  <Linkedin className="w-6 h-6" />
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-slate-400">
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
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <div className="space-y-3 text-slate-400">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <span>shafiqueabdurrehman1@gmail.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <span>+92 319-2165662</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>NUST H-12, Islamabad, Pakistan</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-800 mt-8 pt-6 text-center text-slate-400">
            <p>&copy; 2024 Azraq Web Agency. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Floating AI Chat Button */}
      <div className="fixed bottom-6 right-6 z-40">
        <button
          onClick={() => setIsChatOpen(true)}
          className="group bg-gradient-to-r from-cyan-500 to-violet-500 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105"
        >
          <Bot className="w-6 h-6 group-hover:rotate-12 transition-transform" />
        </button>
      </div>

      {/* Chat Window */}
      <ChatWindow isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
    </div>
  )
}
