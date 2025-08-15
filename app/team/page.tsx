"use client"

import { useEffect, useRef } from 'react'
import Link from 'next/link'

const teamMembers = {
  ceo: {
    name: 'Bilal Ahmad',
    title: 'Co-founder & CEO',
    description: 'Bilal sets direction and partnerships. He aligns R&D with client needs and keeps the studio focused on production-worthy results. His work centers on market fit, responsible deployment, and sustainable growth.',
    expertise: ['Strategic Direction', 'Partnerships', 'Market Fit', 'Responsible AI']
  },
  executives: [
    {
      name: 'Ahmed Ghulam',
      title: 'Co-founder & Strategy and Operations Lead',
      description: 'Ahmed steers studio operations and delivery. He brings an operator lens to scope, metrics, and risk, turning research ideas into run-books.',
      expertise: ['Operations', 'Delivery', 'Process Design', 'Risk Management']
    },
    {
      name: 'Anees Qureshi',
      title: 'Team Lead & Business Development',
      description: 'Anees leads go-to-market and client success. He frames problems, clarifies constraints, and scopes pilots that show value quickly.',
      expertise: ['Go-to-Market', 'Client Success', 'Business Development', 'Pilot Programs']
    }
  ]
}

export default function TeamPage() {
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
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Hero Section */}
        <section ref={addSectionRef} className="py-12 md:py-20 text-center opacity-0">
          <div className="max-w-4xl mx-auto">
            <span className="text-sm text-gray-600 dark:text-gray-400 block mb-4">Our Team</span>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-normal tracking-tight text-black dark:text-white mb-4 md:mb-6">
              Leadership that<br />drives innovation
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              We work on-site in Islamabad and Dubai. Teams carry autonomy with accountability and treat responsible AI as standard practice.
            </p>
          </div>
        </section>

        {/* CEO Section - Bila at the top */}
        <section ref={addSectionRef} className="pb-12 md:pb-20 opacity-0">
          <div className="max-w-5xl mx-auto">
            <div className="relative">
              {/* Main card - consistent with site style */}
              <div className="relative bg-white dark:bg-black border border-gray-200 dark:border-zinc-800 rounded-lg p-8 md:p-12">
                <div className="text-center">
                  {/* Name and Title */}
                  <h2 className="text-3xl md:text-4xl font-normal text-black dark:text-white mb-2">
                    {teamMembers.ceo.name}
                  </h2>
                  <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
                    {teamMembers.ceo.title}
                  </p>

                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl mx-auto mb-8">
                    {teamMembers.ceo.description}
                  </p>

                  {/* Expertise Tags */}
                  <div className="flex flex-wrap justify-center gap-2">
                    {teamMembers.ceo.expertise.map((skill, index) => (
                      <span 
                        key={index}
                        className="px-4 py-2 text-gray-600 dark:text-gray-400 text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Co-founders Section - Ahmed and Anees */}
        <section ref={addSectionRef} className="pb-12 md:pb-20 opacity-0">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {teamMembers.executives.map((member, index) => (
                <div key={index} className="relative">
                  {/* Card - consistent with site style */}
                  <div className="relative bg-white dark:bg-black border border-gray-200 dark:border-zinc-800 rounded-lg p-6 md:p-8 h-full">
                    <div>
                      {/* Name and Title */}
                      <h3 className="text-2xl font-normal text-black dark:text-white mb-1">
                        {member.name}
                      </h3>
                      <p className="text-base text-gray-600 dark:text-gray-400 mb-4">
                        {member.title}
                      </p>

                      {/* Description */}
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                        {member.description}
                      </p>

                      {/* Expertise Tags */}
                      <div className="flex flex-wrap gap-2">
                        {member.expertise.map((skill, skillIndex) => (
                          <span 
                            key={skillIndex}
                            className="px-3 py-1.5 text-gray-600 dark:text-gray-400 text-xs"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Culture Section */}
        <section ref={addSectionRef} className="py-16 md:py-24 opacity-0">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-normal text-black dark:text-white mb-4">
              Building the future of AI with purpose
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              Our leadership team combines deep technical expertise with real business experience, ensuring every solution actually solves real problems.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left mt-12">
              <div>
                <h3 className="font-normal text-black dark:text-white mb-2">Operator-Led</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Multi-business operators building real solutions, not slideware</p>
              </div>
              <div>
                <h3 className="font-normal text-black dark:text-white mb-2">R&D-First</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Closing the gap between promising models and production systems</p>
              </div>
              <div>
                <h3 className="font-normal text-black dark:text-white mb-2">Responsible AI</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Safety, privacy, and human oversight as non-negotiable standards</p>
              </div>
            </div>
          </div>
        </section>

        {/* Work With Us Section - Independent */}
        <section ref={addSectionRef} className="py-16 md:py-24 opacity-0">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-normal text-black dark:text-white mb-8">
              Join us in building the future
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-white bg-black dark:bg-white dark:text-black rounded-full hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
              >
                Work with us
              </Link>
              <Link 
                href="/solutions" 
                className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-black dark:text-white border border-gray-300 dark:border-zinc-700 rounded-full hover:bg-gray-50 dark:hover:bg-zinc-800 transition-colors"
              >
                Explore solutions
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}