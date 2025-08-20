"use client"

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const solutions: Array<{
  id: string
  title: string
  description: string
  image: string
  darkImage?: string
}> = [
  {
    id: 'finance',
    title: 'Finance',
    description: 'Simplify reports, run analyses, and produce forecasts, instantly.',
    image: '/images/Finance Main.png'
  },
  {
    id: 'sales-marketing',
    title: 'Sales & Marketing',
    description: 'Summarize data, uncover insights, and create campaigns in minutes.',
    image: '/images/sales-marketing-light-mode-main.png',
    darkImage: '/images/sales-marketing-dark-mode-main.png'
  },
  {
    id: 'engineering',
    title: 'Engineering',
    description: 'Build and ship faster with AI support for coding, testing, and documentation.',
    image: '/images/Engineering-main.jpg'
  },
  {
    id: 'healthcare',
    title: 'Healthcare',
    description: 'Integrate enterprise-ready AI to improve care quality at scale.',
    image: '/images/Health-care-main.jpg'
  },
  {
    id: 'financial-services',
    title: 'Financial Services',
    description: 'Empower advisors with AI solutions that deepen client relationships.',
    image: '/images/Financial-services-main.jpg'
  },
  {
    id: 'startups',
    title: 'Startups',
    description: 'Grow business and get products to market faster with the help of AI.',
    image: '/images/startups-main.jpg'
  }
]

export default function Solutions() {
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
            <span className="text-sm text-gray-600 dark:text-gray-400 block mb-4">Solutions</span>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-normal tracking-tight text-black dark:text-white mb-4 md:mb-6">
              AI solutions for every<br />team and industry
            </h1>
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-white bg-black dark:bg-white dark:text-black rounded-full hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
            >
              Contact us
            </Link>
          </div>
        </section>

        {/* Solutions Grid */}
        <section ref={addSectionRef} className="pb-12 md:pb-20 opacity-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {solutions.map((solution) => (
              <Link 
                key={solution.id} 
                href={`/solutions/${solution.id}`}
                className="group block"
              >
                <div className="space-y-4">
                  {/* Clickable Image Area - separate from text */}
                  <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-zinc-900 dark:to-zinc-800 rounded-lg overflow-hidden h-48 relative group-hover:shadow-lg transition-all duration-300 group-hover:-translate-y-1">
                    {solution.image && (
                      <>
                        <Image
                          src={solution.image}
                          alt={solution.title}
                          fill
                          className={`object-cover ${solution.darkImage ? 'dark:hidden' : ''}`}
                        />
                        {solution.darkImage && (
                          <Image
                            src={solution.darkImage}
                            alt={solution.title}
                            fill
                            className="object-cover hidden dark:block"
                          />
                        )}
                      </>
                    )}
                  </div>
                  
                  {/* Text Content - separate from image */}
                  <div>
                    <h3 className="text-xl font-medium mb-2 text-gray-900 dark:text-white">
                      {solution.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                      {solution.description}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Security Section */}
        <section ref={addSectionRef} className="py-16 md:py-24 border-t border-gray-200 dark:border-zinc-800 opacity-0">
          <div className="text-center max-w-3xl mx-auto">
            <div className="flex justify-center mb-6">
              <svg className="w-8 h-8 text-gray-700 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h2 className="text-2xl md:text-3xl font-normal text-black dark:text-white mb-4">
              Your company data is safe and secure
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              SirkupAI doesn't train on your company or client data, and has security controls built in.
            </p>
          </div>
        </section>

        {/* CTA Section */}
        <section ref={addSectionRef} className="py-12 md:py-20 opacity-0">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="bg-gray-100 dark:bg-zinc-900 rounded-2xl py-20 text-center">
            <h2 className="text-4xl font-normal mb-4 dark:text-white">
              Get in touch to learn more
            </h2>
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-white bg-black dark:bg-white dark:text-black rounded-full hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
            >
              Contact sales
            </Link>
          </div>
          </div>
        </section>
      </div>
    </div>
  )
}