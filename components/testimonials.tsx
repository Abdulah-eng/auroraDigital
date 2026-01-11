"use client"

import { Star, Quote } from "lucide-react"
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

export function Testimonials() {
  const [isVisible, setIsVisible] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          }
        })
      },
      { threshold: 0.1 }
    )

    const element = document.getElementById("testimonials")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000) // Change every 5 seconds

    return () => clearInterval(interval)
  }, [])

  const displayedTestimonials = [
    testimonials[currentIndex],
    testimonials[(currentIndex + 1) % testimonials.length],
    testimonials[(currentIndex + 2) % testimonials.length],
  ]

  return (
    <section id="testimonials" className="py-12 sm:py-20 bg-white dark:bg-slate-950 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-slate-100 dark:bg-grid-slate-800 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div
          className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex justify-center mb-4">
            <div className="flex items-center gap-2 bg-[#1C437E]/10 dark:bg-[#1C437E]/20 border border-[#1C437E]/30 dark:border-[#1C437E]/40 rounded-full px-3 sm:px-4 py-2">
              <Star className="w-3 h-3 sm:w-4 sm:h-4 text-[#1C437E] dark:text-[#4A7BC8] flex-shrink-0" />
              <span className="text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300">Client Reviews</span>
            </div>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto text-responsive">
            Don't just take our word for it. Here's what our clients have to say about working with us.
          </p>
        </div>

        {/* Stats Row - Moved to top */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-12">
          <div className="text-center bg-[#1C437E]/5 dark:bg-[#1C437E]/10 p-4 sm:p-6 rounded-2xl border border-[#1C437E]/20 dark:border-[#1C437E]/30 shadow-lg">
            <div className="text-3xl sm:text-4xl font-bold text-[#1C437E] dark:text-[#4A7BC8] mb-2">
              5.0
            </div>
            <div className="flex justify-center gap-0.5 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <div className="text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300">Average Rating</div>
          </div>
          <div className="text-center bg-[#1C437E]/5 dark:bg-[#1C437E]/10 p-4 sm:p-6 rounded-2xl border border-[#1C437E]/20 dark:border-[#1C437E]/30 shadow-lg">
            <div className="text-3xl sm:text-4xl font-bold text-[#1C437E] dark:text-[#4A7BC8] mb-2">
              {testimonials.length}+
            </div>
            <div className="text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Happy Clients</div>
            <div className="text-xs text-slate-500 dark:text-slate-400">Worldwide</div>
          </div>
          <div className="text-center bg-[#95BF3D]/10 dark:bg-[#95BF3D]/20 p-4 sm:p-6 rounded-2xl border border-[#95BF3D]/30 dark:border-[#95BF3D]/40 shadow-lg">
            <div className="text-3xl sm:text-4xl font-bold text-[#95BF3D] dark:text-[#A8D04A] mb-2">
              {testimonials.filter((t) => t.isRepeatClient).length}+
            </div>
            <div className="text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Repeat Clients</div>
            <div className="text-xs text-slate-500 dark:text-slate-400">Trusted Partners</div>
          </div>
          <div className="text-center bg-[#95BF3D]/10 dark:bg-[#95BF3D]/20 p-4 sm:p-6 rounded-2xl border border-[#95BF3D]/30 dark:border-[#95BF3D]/40 shadow-lg">
            <div className="text-3xl sm:text-4xl font-bold text-[#95BF3D] dark:text-[#A8D04A] mb-2">
              100%
            </div>
            <div className="text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Satisfaction</div>
            <div className="text-xs text-slate-500 dark:text-slate-400">Guaranteed</div>
          </div>
        </div>

        {/* Testimonials Grid - Improved Design */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-8">
          {displayedTestimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`group bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-2xl shadow-lg border-2 border-slate-200 dark:border-slate-800 transition-all duration-500 hover:shadow-2xl hover:border-[#1C437E]/50 dark:hover:border-[#4A7BC8]/50 transform hover:-translate-y-2 relative overflow-hidden ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Gradient accent */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#1C437E] via-[#2D5A9E] to-[#95BF3D]"></div>
              
              {/* Quote icon */}
              <div className="absolute top-6 right-6 opacity-10 dark:opacity-5">
                <Quote className="w-16 h-16 text-[#1C437E]" />
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
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-semibold text-slate-900 dark:text-white text-sm sm:text-base truncate">
                        {testimonial.name}
                      </h3>
                      {testimonial.isRepeatClient && (
                        <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs px-2 py-0.5 rounded-full font-medium whitespace-nowrap">
                          ⭐ Repeat
                        </span>
                      )}
                    </div>
                    <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 truncate">
                      {testimonial.location}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Dots - Improved */}
        <div className="flex justify-center gap-2">
          {testimonials.slice(0, Math.ceil(testimonials.length / 3)).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index * 3)}
              className={`h-2 rounded-full transition-all duration-300 ${
                Math.floor(currentIndex / 3) === index
                  ? "bg-[#1C437E] w-8 shadow-lg"
                  : "bg-slate-300 dark:bg-slate-700 w-2 hover:bg-slate-400 dark:hover:bg-slate-600"
              }`}
              aria-label={`Go to testimonial set ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
