"use client"

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function SalesMarketingPage() {
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
      title: 'Content Intelligence Systems for faster asset creation',
      description: 'From 8 hours to 30 minutes per asset with AI-assisted workflows.',
      image: '/images/sales-and-marketing-subpages (1).jpg'
    },
    {
      title: 'Conversational Intelligence for sales teams',
      description: 'Handle objections and qualify leads with domain-trained AI.',
      image: '/images/sales-and-marketing-subpages (2).jpg'
    },
    {
      title: 'AI-powered campaign optimization',
      description: 'Data-driven insights for better targeting and engagement.',
      image: '/images/sales-and-marketing-subpages (3).jpg'
    }
  ]

  const successStories = [
    {
      title: 'NestHive',
      description: 'Improved lead qualification and negotiation handling',
      type: 'Real Estate'
    },
    {
      title: 'VoicesofPak',
      description: 'Scaled content production while maintaining quality',
      type: 'Media'
    },
    {
      title: 'Frische',
      description: 'Automated customer engagement and increased conversions',
      type: 'E-commerce'
    }
  ]

  const stats = [
    { percentage: '8h → 30m', description: 'content production time' },
    { percentage: '99.7%', description: 'conversation accuracy' },
    { percentage: '40%', description: 'increase in conversions' }
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      {/* Hero Section */}
      <section ref={addSectionRef} className="relative py-20 px-4 md:px-8 text-center opacity-0">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">Solutions for sales & marketing</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight text-black dark:text-white mb-8 leading-tight">
            Connect with customers<br />and drive results faster
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
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M12 8c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4z" />
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

      {/* Client Success Section */}
      <section ref={addSectionRef} className="py-20 px-4 md:px-8 opacity-0">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-normal text-center text-black dark:text-white mb-12">
            Trusted by leading companies across Pakistan and UAE
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <div key={index} className="bg-white dark:bg-zinc-800 rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-zinc-700 hover:-translate-y-1">
                <h3 className="text-xl font-normal text-black dark:text-white mb-2">
                  {story.title}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-500 mb-4">
                  {story.type}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {story.description}
                </p>
              </div>
            ))}
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
            Ready to transform your sales and marketing?
          </h2>
          <Link 
            href="/contact" 
            className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-white bg-black dark:bg-white dark:text-black rounded-full hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
          >
            Contact us
          </Link>
        </div>
        </div>
      </section>
    </div>
  )
}