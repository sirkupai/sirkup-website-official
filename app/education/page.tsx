"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import Image from "next/image"
import { motion } from "framer-motion"

export default function SalesMarketingPage() {
  const sectionsRef = useRef<HTMLElement[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("animate-fade-in-up")
        })
      },
      { threshold: 0.1 }
    )

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])

  const addSectionRef = (el: HTMLElement | null) => {
    if (el && !sectionsRef.current.includes(el)) sectionsRef.current.push(el)
  }

  const whychoose = [
    { title: "Structured Learning Programs", 
      icon: "/images/icon_Number.png",
      description: "Step-by-step courses designed to take you from beginner to expert in AI technologies" },
    { title: "Live Workshops",
      icon: "/images/icon-02.png",
      description: "Interactive sessions with industry experts and hands-on practice" },
    { title: "Community-Driven Learning", 
      icon: "/images/icon-03.png",
      description: "Collaborative learning environment with peers and mentors" },
    { title: "Business Applications",
      icon: "/images/icon-04.png",
      description: "Real-world AI monetization and automation strategies" },
    { title: "Certification Programs",
      icon: "/images/icon-05.png",
      description: "Industry-recognized credentials to advance your career" },
    { title: "24/7 Access",
      icon: "/images/icon-06.png",
      description: "Learn at your own pace with unlimited platform access" },
  ]
   const join = [
    { title: "Active Learning Community", 
      icon: "/images/icon-09.png",
      description: "Connect with peers, share insights, and learn together" },
    { title: "Expert Mentorship", 
      icon: "/images/icon-10.png",
      description: "Get guidance from industry professionals and AI experts" },
    { title: "Live Q&A Sessions", 
      icon: "/images/icon-11.png",
      description: "Regular interactive sessions to address your questions" },
    { title: "Resource Library", 
      icon: "/images/icon-12.png",
      description: "Access to extensive collection of AI tools and resources" },
  ]

  const stats = [
    { percentage: "50,000+", description: "Students Trained" },
    { percentage: "200", description: "Course Modules" },
    { percentage: "95", description: "Success Rate" },
    { percentage: "24/7", description: "Support Available" },
  ]

  // 🔹 Learning paths data for the new section
  const tracks = [
    {
      name: "Beginner Track",
      duration: "4–6 weeks",
      bname: "Contact Sales",
      description: "AI fundamentals, basic prompt engineering, and introduction to automation",
      courses: 8,
      href: "#",
      featured: false,
      enabled: false,
    },
    {
      name: "Professional Track",
      duration: "8–10 weeks",
      description: "Advanced automation, business applications, and AI tool mastery",
      courses: 12,
      href: "#",
      featured: true, // highlights with cyan ring + badge
      enabled: true,
    },
    {
      name: "Expert Track",
      duration: "12–16 weeks",
      bname: "Contact Sales",
      description: "AI monetization strategies, enterprise solutions, and leadership",
      courses: 16,
      href: "#",
      featured: false,
      enabled: false,
    },
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      {/* Hero Section */}
      <section ref={addSectionRef} className="relative py-20 px-4 md:px-8 text-center opacity-0">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-normal tracking-tight text-black dark:text-white mb-4 md:mb-6">
            AI Education & Learning Platforms
          </h1>
          <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 mb-6 md:mb-8 max-w-3xl mx-auto px-4">
            Democratizing AI knowledge through structured learning programs in prompt engineering, business automation,
            and AI monetization strategies
          </p>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center px-4">
            <Link href="#">
              <Button className="bg-black dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-100 px-6 py-3 text-sm font-medium rounded-md">
                Start Learning
              </Button>
            </Link>
            <Link href="#">
              <Button
                variant="outline"
                className="border-gray-300 dark:border-gray-700 text-black dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800 px-6 py-3 text-sm font-medium rounded-md"
              >
                Explore Academy
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section ref={addSectionRef} className="pb-20 px-4 md:px-8 opacity-0">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-center pt-10">
            {stats.map((stat, index) => (
              <div key={index}>
                <h3 className="text-3xl md:text-3xl font-normal text-black dark:text-white mb-4">{stat.percentage}</h3>
                <p className="text-gray-600 dark:text-gray-400">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose SirkupAI Academy */}
      <section ref={addSectionRef} className="relative pt-10 pb-20 px-4 md:px-8 text-center opacity-0">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-7xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-normal text-center text-black dark:text-white mb-12">
              Why Choose SirkupAI Academy
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {whychoose.map((w, index) => (
                <div
                  key={index}
                  className="bg-gray-100 dark:bg-zinc-900 rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-zinc-700 hover:-translate-y-1"
                >
                  {/* Icon above title */}
                  <img
                  src={w.icon}
                  alt={w.title}
                  className="mx-auto mb-4 h-12 w-12 dark:invert"
                  />
                  <h3 className="text-lg font-semibold text-gray-700 dark:text-white">{w.title}</h3>
                  <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{w.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SirkupAI Academy: Gateway to AI Mastery */}
      <section ref={addSectionRef} className="relative pt-10 pb-16 px-4 md:px-8 text-center opacity-0">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-3xl md:text-4xl font-normal text-center text-black dark:text-white mb-12">
            SirkupAI Academy: Your Gateway to AI Mastery
          </h3>
          <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 mb-6 md:mb-8 max-w-3xl mx-auto px-4">
            Our flagship program delivers comprehensive AI education through interactive courses, live workshops, and
            community-driven learning experiences. Master prompt engineering, business automation, and AI monetization
            strategies.
          </p>

          {/* Keyword pills */}
          <ul
            aria-label="Academy focus areas"
            className="mt-4 mb-10 flex flex-nowrap justify-center items-center gap-4 max-w-full mx-auto overflow-x-auto px-2"
          >
            {["Prompt Engineering", "Business Automation", "AI Monetization", "Content Creation"].map((label) => (
              <li key={label} className="shrink-0">
                <span
                  className="inline-flex items-center px-5 py-2 rounded-full
                             bg-zinc-900 text-white
                             shadow-sm ring-1 ring-zinc-900/30
                            "
                >
                  {label}
                </span>
              </li>
            ))}
          </ul>

          <Link href="#">
            <Button
              variant="outline"
              className="border-gray-300 dark:border-gray-700 text-black dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800 px-6 py-3 text-sm font-medium rounded-md"
            >
              Join Academy
            </Button>
          </Link>
        </div>
      </section>

      {/* 🔹 Choose Your Learning Path (new section inserted here) */}
      <section ref={addSectionRef} className="relative pt-10 pb-16 px-4 md:px-8 text-center opacity-0">
        <div className="max-w-6xl mx-auto">
             <h3 className="text-3xl md:text-4xl font-normal text-center text-black dark:text-white mb-12">
            Choose Your Learning Path
          </h3>
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {tracks.map((t) => (
              <div
                key={t.name}
                className={`relative rounded-2xl border p-6 md:p-8 bg-white/80 dark:bg-zinc-900/50
                            border-gray-200 dark:border-zinc-800 shadow-sm
                            transition-all duration-300 hover:-translate-y-1
                            ${t.featured ? "ring-2 ring-zinc-500 shadow-zinc-500/10" : ""}`}
              >
                {/* Most Popular badge */}
                {t.featured && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="px-3 py-1 text-xs font-semibold rounded-full bg-black dark:bg-white text-white dark:text-black shadow-md">
                      Most Popular
                    </span>
                  </div>
                )}
                {/* Duration (first row, right-aligned) */}
                
                    
                {/* Title (next line) */}
                <h3 className="mt-3 mb-3 text-xl md:text-2xl text-black dark:text-white">
                {t.name}
                </h3>
                
               <div className="flex">
                <span
                    className="ml-auto px-3 py-1 rounded-full text-xs font-semibold
                            bg-black text-white dark:bg-zinc-700 dark:text-white
                            whitespace-nowrap"
                >
                    {t.duration}
                </span>
                </div>
                <p className="mt-4 text-gray-700 dark:text-gray-300">{t.description}</p>

                <div className="mt-5 mx-auto w-fit flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                  <span className="text-base">📚</span>
                  <span>
                    <strong className="font-medium">{t.courses}</strong> Courses
                  </span>
                </div>

                {t.enabled ? (
                  <Link href={t.href} className="inline-block mt-6 w-full">
                    <Button className="w-full bg-gray-900 dark:border-gray-700 text-white">Start {t.name}</Button>
                  </Link>
                ) : (
                <Link href={t.href} className="inline-block mt-6 w-full">
                  <Button
                    variant="outline"
                    className="mt-6 w-full border-gray-400 dark:border-zinc-700 text-black dark:text-zinc-400"
                  >
                    {t.bname}
                  </Button></Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

   {/* Join Our Learning Community */}
      <section ref={addSectionRef} className="relative pt-10 pb-20 px-4 md:px-8 text-center opacity-0">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-7xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-normal text-center text-black dark:text-white mb-12">
             Join Our Learning Community
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {join.map((join, index) => (
                <div
                  key={index}
                  className="bg-gray-100 dark:bg-zinc-900 rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-zinc-700 hover:-translate-y-1"
                >
                  {/* Icon above title */}
                  <img
                  src={join.icon}
                  alt={join.title}
                  className="mx-auto mb-4 h-12 w-12 dark:invert"
                  />
                  <h3 className="text-lg font-semibold text-gray-700 dark:text-white">{join.title}</h3>
                  <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{join.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
