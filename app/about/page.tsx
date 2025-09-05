"use client"

import { useEffect, useRef } from 'react'
import Link from 'next/link'

export default function AboutPage() {
  const sectionsRef = useRef<HTMLElement[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up')
          }
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
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current.push(el)
    }
  }

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      {/* Hero Section */}
      <section ref={addSectionRef} className="relative pt-20 pb-10 px-4 md:px-8 text-center opacity-0">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-normal tracking-tight text-black dark:text-white mb-4 md:mb-6">
            About SirkupAI
          </h1>
         <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 mb-6 md:mb-8 max-w-3xl mx-auto px-4">
            SirkupAI is an IT services, education and media development company. A legal entity with offices in Pakistan and UAE, it endeavors to harness the potential of Artificial Intelligence (AI) for a niche market through its various products and services. SirkupAI is the flagship of Sirkup-Digital. 
          </p>
        </div>
      </section>

      {/* Digital Innovation Studio */}
      <section ref={addSectionRef} className="py-12 md:pt-10 pb-10 opacity-0">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="bg-gray-100 dark:bg-zinc-900 rounded-2xl py-20 text-center">
          <h2 className="text-4xl font-normal mb-4 dark:text-white">
            SirkupAI – Digital Innovation Studio
          </h2>
          <p className="italic text-base md:text-lg text-gray-700 dark:text-gray-300 text-center mb-8 max-w-4xl mx-auto px-4">
            SirkupAI is a comprehensive digital innovation studio specializing in AI-powered solutions 
            across three strategic verticals: enterprise SaaS development, educational technology, 
            and social impact initiatives.
          </p>
        </div>
        </div>
      </section>

      {/* Core Mission */}
      <section
        ref={addSectionRef}
        className="relative pt-16 pb-20 px-4 md:px-8 text-center opacity-0"
      >
        <h2 className="text-4xl font-normal mb-4 dark:text-white">
          Core Mission
        </h2>
        <p className="italic text-lg md:text-xl font-semibold text-black dark:text-white mb-6">
          Democratising AI for Sustainable Human Development and Progress
        </p>
        <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 max-w-4xl mx-auto">
          SirkupAI bridges the gap between cutting-edge artificial intelligence technologies and 
          practical business applications, while simultaneously addressing critical development 
          and social challenges through purpose-built AI systems.
        </p>
      </section>

      {/* Service Verticals */}
      <section
        ref={addSectionRef}
        className="relative pt-10 pb-20 px-4 md:px-8 opacity-0"
      >
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl md:text-4xl font-normal text-black dark:text-white mb-12">
            Service Verticals
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            {/* Card 1 */}
            <div className="bg-white dark:bg-zinc-800 rounded-2xl p-8 shadow-md border border-gray-200 dark:border-zinc-700">
              <div className="flex justify-center mb-4">
                <img
                  src="images/ai-learning-icon.png" // replace with your icon path
                  alt="AI Education"
                  className="w-12 h-12 dark:invert"
                />
              </div>
              <h3 className="text-xl text-center font-semibold text-black dark:text-white mb-4">
                AI Education & Learning Platforms
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-center">
                We build subscription-based platforms that democratize AI knowledge through structured programs, interactive courses, and live workshops. Our flagship SirkupAI Academy empowers professionals and businesses with skills in prompt engineering, intelligent workflows, and AI monetization.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white dark:bg-zinc-800 rounded-2xl p-8 shadow-md border border-gray-200 dark:border-zinc-700">
              <div className="flex justify-center mb-4">
                <img
                  src="images/enterprise-icon.png" // replace with your icon path
                  alt="Enterprise AI"
                  className="w-10 h-12 dark:invert"
                />
              </div>
              <h3 className="text-xl text-center font-semibold text-black dark:text-white mb-4">
                Enterprise AI Solutions
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-center">
                Our SaaS portfolio delivers specialized AI-driven tools that solve complex business challenges. Flagship product Ranking.AI enables SMEs to optimize visibility in conversational AI platforms like ChatGPT and Gemini, helping them stay competitive in the evolving digital landscape.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white dark:bg-zinc-800 rounded-2xl p-8 shadow-md border border-gray-200 dark:border-zinc-700">
              <div className="flex justify-center mb-4">
                <img
                  src="images/social-icon.png" // replace with your icon path
                  alt="Social Impact"
                  className="w-12 h-12 dark:invert"
                />
              </div>
              <h3 className="text-center text-xl font-semibold text-black dark:text-white mb-4">
                Social Impact Technologies
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-center">
                We partner with governments, agencies, and civil society to design AI systems that advance social good. Projects like AdalBot provide multilingual, trauma-informed legal assistance to survivors, addressing issues from climate action to gender-based violence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section ref={addSectionRef} className="py-12 md:pt-10 pb-10 opacity-0">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="bg-gray-100 dark:bg-zinc-900 rounded-2xl py-20 text-center">
          <h2 className="text-4xl font-normal mb-4 dark:text-white">
            Value Proposition
          </h2>
          <p className="italic text-base md:text-lg text-gray-700 dark:text-gray-300 text-center mb-8 max-w-4xl mx-auto px-4">
            SirkupAI combines technical excellence with social responsibility, delivering scalable 
            AI solutions that drive both business growth and positive societal impact. 
            We serve everyone from individual entrepreneurs seeking AI education to enterprises 
            requiring custom automation, and organizations working towards social change.
          </p>
        </div>
        </div>
      </section>
    </div>
  )
}
