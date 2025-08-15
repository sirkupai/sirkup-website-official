"use client"

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function FinancialServicesPage() {
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
      title: 'AI-driven wealth management',
      description: 'Personalized investment strategies at scale.',
      image: '/images/financial-services-subpage (1).png'
    },
    {
      title: 'Automated compliance and reporting',
      description: 'Stay compliant with evolving regulations.',
      image: '/images/financial-services-subpage (2).png'
    },
    {
      title: 'Risk assessment and fraud detection',
      description: 'Protect assets with predictive analytics.',
      image: '/images/financial-services-subpage (3).png'
    }
  ]

  const stats = [
    { percentage: '85%', description: 'improvement in portfolio performance' },
    { percentage: '70%', description: 'reduction in operational costs' },
    { percentage: '2x', description: 'faster decision making' }
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      {/* Hero Section */}
      <section ref={addSectionRef} className="relative py-20 px-4 md:px-8 text-center opacity-0">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">Solutions for financial services</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight text-black dark:text-white mb-8 leading-tight">
            Empower advisors with AI solutions<br />that deepen client relationships
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="bg-gray-50 dark:bg-zinc-900 rounded-2xl mb-4 p-2 min-h-[200px]">
                  {feature.image ? (
                    <Image
                      src={feature.image}
                      alt={feature.title}
                      width={600}
                      height={400}
                      className="w-full h-auto object-contain rounded-xl"
                    />
                  ) : (
                    <div className="flex items-center justify-center h-[200px] text-gray-400 dark:text-gray-600">
                      <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                  )}
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
            Bank-grade security and compliance
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div>
              <div className="mb-4">
                <svg className="w-8 h-8 mx-auto text-gray-700 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-lg font-normal text-black dark:text-white mb-2">
                End-to-end encryption for all data
              </h3>
            </div>
            <div>
              <div className="mb-4">
                <svg className="w-8 h-8 mx-auto text-gray-700 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg font-normal text-black dark:text-white mb-2">
                FINRA and SEC compliant
              </h3>
            </div>
            <div>
              <div className="mb-4">
                <svg className="w-8 h-8 mx-auto text-gray-700 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-normal text-black dark:text-white mb-2">
                Complete audit trail
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
            Ready to innovate your financial services?
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