"use client"

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function FinancePage() {
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
      title: 'Automated financial analysis and reporting',
      description: 'Transform complex data into clear insights instantly.',
      image: '/images/finance-subpage (1).jpg'
    },
    {
      title: 'AI-powered forecasting and risk assessment',
      description: 'Make data-driven decisions with predictive analytics.',
      image: '/images/finance-subpage (2).jpg'
    },
    {
      title: 'Intelligent document processing',
      description: 'Extract and analyze data from any financial document.',
      image: '/images/finance-subpage (3).jpg'
    }
  ]

  const clientSuccess = [
    {
      title: 'Carzone',
      subtitle: 'Streamlined financial operations',
      description: 'Automated reporting and analysis',
      type: 'Automotive'
    },
    {
      title: 'Local Banks',
      subtitle: 'Enhanced risk assessment',
      description: 'AI-powered fraud detection',
      type: 'Banking'
    },
    {
      title: 'SME Clients',
      subtitle: 'Accessible financial insights',
      description: 'Enterprise-grade tools for small teams',
      type: 'Various'
    }
  ]

  const stats = [
    { percentage: '90%', description: 'reduction in report generation time' },
    { percentage: '99.7%', description: 'accuracy in data processing' },
    { percentage: '65%', description: 'decrease in compliance costs' }
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      {/* Hero Section */}
      <section ref={addSectionRef} className="relative py-20 px-4 md:px-8 text-center opacity-0">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">Solutions for finance</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight text-black dark:text-white mb-8 leading-tight">
            Simplify financial analysis and<br />automate accounting tasks
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
                <div className="bg-gray-50 dark:bg-zinc-900 rounded-2xl mb-4 p-2">
                  {feature.image && (
                    <Image
                      src={feature.image}
                      alt={feature.title}
                      width={600}
                      height={400}
                      className="w-full h-auto object-contain rounded-xl"
                    />
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
      <section ref={addSectionRef} className="py-12 md:py-20 opacity-0">
        <div className="max-w-7xl mx-auto px-4 md:px-8 bg-gray-100 dark:bg-zinc-900 rounded-2xl py-20 text-center">
          <h2 className="text-4xl font-normal mb-4 dark:text-white">
            Your company data is safe and secure
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div>
              <div className="mb-4">
                <svg className="w-8 h-8 mx-auto text-gray-700 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-lg font-normal text-black dark:text-white mb-2">
                SirkupAI doesn't train on your company or your clients' data
              </h3>
            </div>
            <div>
              <div className="mb-4">
                <svg className="w-8 h-8 mx-auto text-gray-700 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg font-normal text-black dark:text-white mb-2">
                Your proprietary data remains private
              </h3>
            </div>
            <div>
              <div className="mb-4">
                <svg className="w-8 h-8 mx-auto text-gray-700 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-normal text-black dark:text-white mb-2">
                Multi-factor authentication keeps your account secure
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
      <section ref={addSectionRef} className="py-12 md:py-20 opacity-0">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="bg-gray-100 dark:bg-zinc-900 rounded-2xl py-20 text-center">
            <h2 className="text-4xl font-normal mb-4 dark:text-white">
            Ready to revolutionize your financial operations?
          </h2>
          <Link 
            href="/contact" 
            className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-white bg-black dark:bg-white dark:text-black rounded-full hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
          >
            Start now
          </Link>
        </div>
        </div>
        </section>
    </div>
  )
}