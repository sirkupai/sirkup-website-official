"use client"

import { useEffect, useRef } from 'react'
import Link from 'next/link'

export default function StartupsPage() {
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

  const features = [
    {
      title: 'Launch products faster with AI',
      description: 'From idea to market in weeks, not months.'
    },
    {
      title: 'Automate operations from day one',
      description: 'Build efficient processes without large teams.'
    },
    {
      title: 'Data-driven decision making',
      description: 'Make informed choices with AI-powered analytics.'
    },
    {
      title: 'Scale intelligently with AI agents',
      description: 'Grow your capabilities without growing costs.'
    }
  ]

  const stats = [
    { percentage: '8x', description: 'faster time to market' },
    { percentage: '60%', description: 'lower operational costs' },
    { percentage: '4x', description: 'productivity multiplier' }
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      {/* Hero Section */}
      <section ref={addSectionRef} className="relative py-20 px-4 md:px-8 text-center opacity-0">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">Solutions for startups</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight text-black dark:text-white mb-8 leading-tight">
            Grow business and get products<br />to market faster with the help of AI
          </h1>
          <Link 
            href="/contact" 
            className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-white bg-black dark:bg-white dark:text-black rounded-full hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
          >
            Contact us
          </Link>
        </div>
      </section>

      {/* Features Grid */}
      <section ref={addSectionRef} className="py-20 px-4 md:px-8 opacity-0">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="bg-gray-50 dark:bg-zinc-900 rounded-2xl p-6 mb-4 h-64 flex items-center justify-center overflow-hidden">
                  <div className="text-gray-400 dark:text-gray-600">
                    <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-lg font-normal text-black dark:text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section ref={addSectionRef} className="py-20 px-4 md:px-8 bg-gray-50 dark:bg-zinc-900 opacity-0">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-normal text-black dark:text-white mb-8">
            Enterprise features at startup prices
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div>
              <div className="mb-4">
                <svg className="w-8 h-8 mx-auto text-gray-700 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-normal text-black dark:text-white mb-2">
                Flexible pricing that scales with you
              </h3>
            </div>
            <div>
              <div className="mb-4">
                <svg className="w-8 h-8 mx-auto text-gray-700 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg font-normal text-black dark:text-white mb-2">
                Your IP and data remain yours
              </h3>
            </div>
            <div>
              <div className="mb-4">
                <svg className="w-8 h-8 mx-auto text-gray-700 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-normal text-black dark:text-white mb-2">
                Team collaboration built-in
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section ref={addSectionRef} className="py-20 px-4 md:px-8 opacity-0">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            {stats.map((stat, index) => (
              <div key={index}>
                <h3 className="text-5xl md:text-6xl font-normal text-black dark:text-white mb-4">
                  {stat.percentage}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section ref={addSectionRef} className="py-20 px-4 md:px-8 bg-gray-50 dark:bg-zinc-900 opacity-0">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-normal text-black dark:text-white mb-8">
            Ready to scale your startup with AI?
          </h2>
          <Link 
            href="/contact" 
            className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-white bg-black dark:bg-white dark:text-black rounded-full hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
          >
            Start now
          </Link>
        </div>
      </section>
    </div>
  )
}