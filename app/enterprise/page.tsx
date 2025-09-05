"use client"

import { useEffect, useRef } from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Card } from '@/components/ui/card'
import Image from 'next/image'
import { motion } from "framer-motion"

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
  
  const  breakthroughs = [
    {
      title: 'Rank higher with AI optimization',
      icon: "/images/rank.png",
      description: 'Leverage Ranking.AI to outrank competitors in AI search results from ChatGPT, Gemini, and emerging AI platforms',
    },
    {
      title: 'Connect to your business data',
      icon: "/images/connect.png",
      description: 'Use built-in connectors to integrate with Google Analytics, Search Console, and major CMS platforms',
    },
    {
      title: 'AI your business is ready for',
      icon: "/images/business.png",
      description: 'With thousands of SME users, our AI solutions help businesses grow visibility in the evolving search landscape',
    }
  ]
  const  enterprise = [
    {
      title: 'Your data stays secure',
      icon: "/images/data-secure.png",
      description: 'We never use your business data for training. Industry-standard AES-256 encryption protects all client information',
    },
    {
      title: 'You control access to your data',
      icon: "/images/control-access.png",
      description: 'Advanced admin tools include SAML SSO, role-based access controls, and real-time analytics for team management',
    },
    {
      title: 'We comply with industry standards',
      icon: "/images/shield.png",
      description: 'GDPR, CCPA compliant with SOC 2 Type 2 certification and data residency options',
    }
  ]
  const  specialized = [
    {
      title: 'E-commerce Brands',
      icon: "/images/ecommerce.png",
      description: 'Optimize product descriptions for AI search results and increase product visibility across AI platforms',
    },
    {
      title: 'Local Businesses',
      icon: "/images/local-business.png",
      description: 'Dominate local AI search queries and capture more customers through AI-powered search',
    },
    {
      title: 'Content Publishers',
      icon: "/images/publisher.png",
      description: 'Maximize content visibility across AI platforms and drive more organic traffic',
    }
  ]
  const stats = [
    { percentage: '95%', description: 'increase in AI search visibility' },
    { percentage: '5x', description: 'faster SEO optimization' },
    { percentage: '300%', description: 'average traffic growth' },
    { percentage: '87%', description: 'client retention rate' },
    { percentage: '92%', description: 'prefer SirkupAI over traditional SEO tools' }
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      {/* Hero Section */}
      <section ref={addSectionRef} className="relative py-20 px-4 md:px-8 text-center opacity-0">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-normal tracking-tight text-black dark:text-white mb-4 md:mb-6">
              Enterprise AI Solutions Built for Business Growth
            </h1>
            <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 mb-6 md:mb-8 max-w-3xl mx-auto px-4">
              Over 10,000+ SME businesses optimized across industries

            </p>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center px-4">
              <Link href="/contact">
                <Button className="bg-black dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-100 px-6 py-3 text-sm font-medium rounded-md">
                  Contact Sales
                </Button>
              </Link>
            </div>
        </div>
      </section>
    {/* AI Solutions */}
    <section ref={addSectionRef} className="relative pt-10 pb-20 px-4 md:px-8 text-center opacity-0">
        <div className="max-w-6xl mx-auto">
            <div className="max-w-7xl mx-auto">
                <h3 className="text-3xl md:text-4xl font-normal text-center text-black dark:text-white mb-12">Work with the best of our AI solutions and capabilities
                </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {breakthroughs.map((bthroughs, index) => (
              <div key={index} className="bg-zinc-800 dark:bg-zinc-900 rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 hover:scale-105">
                {/* Icon above title */}
                <img
                src={bthroughs.icon}
                alt={bthroughs.title}
                className="mx-auto mb-4 h-12 w-12"
                />
                <h3 className="text-lg font-semibold text-white">
                {bthroughs.title}
              </h3>
                <p className="text-sm text-gray-300 dark:text-gray-400">
                  {bthroughs.description}
                </p>
              </div>
            ))}
          </div>
        </div>
        </div>
    </section>
    {/* Stats Section */}
      <section ref={addSectionRef} className="py-20 px-4 md:px-8 opacity-0">
        <div className="bg-gray-100 dark:bg-zinc-900 p-10 max-w-6xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-normal text-center text-black dark:text-white mb-12">
                Trusted by business leaders and their teams
            </h3>
            <p className="italic text-center text-base md:text-lg text-gray-700 dark:text-gray-300 mb-6 md:mb-8 max-w-3xl mx-auto px-4">
              "The ROI from SirkupAI's Ranking.AI platform exceeded our expectations. We saw a 300% increase in AI-generated traffic within 90 days."
            </p>
           <p className="text-center text-base md:text-lg text-gray-700 dark:text-gray-300 mb-6 md:mb-8 max-w-3xl mx-auto px-4">Sarah Chen, Head of Digital Marketing<br/>
            TechScale Solutions</p>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-12 text-center pt-10">
            {stats.map((stat, index) => (
              <div key={index}>
                <h3 className="text-3xl md:text-3xl font-normal text-black dark:text-white mb-4">
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
      {/* Enterprise-grade security */}
    <section ref={addSectionRef} className="relative pt-10 pb-20 px-4 md:px-8 text-center opacity-0">
        <div className="max-w-6xl mx-auto">
            <div className="max-w-7xl mx-auto">
                <h3 className="text-3xl md:text-4xl font-normal text-center text-black dark:text-white mb-12">
                    Enterprise-grade security built in
                </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {enterprise.map((enterprise, index) => (
              <div key={index} className="bg-zinc-800 dark:bg-zinc-900 rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 hover:scale-105">
                {/* Icon above title */}
                <img
                src={enterprise.icon}
                alt={enterprise.title}
                className="mx-auto mb-4 h-12 w-12"
                />
                <h3 className="text-lg font-semibold text-white">
                {enterprise.title}
              </h3>
                <p className="text-sm text-gray-300 dark:text-gray-400">
                  {enterprise.description}
                </p>
              </div>
            ))}
          </div>
        </div>
        </div>
    </section>
    {/* How every business ranks higher */}
    <section ref={addSectionRef} className="relative pt-10 pb-20 px-4 md:px-8 text-center opacity-0">
        <div className="max-w-5xl mx-auto">
            {/* Main heading */}
            <h3 className="text-3xl md:text-4xl font-normal text-center text-black dark:text-white mb-12">
            How every business ranks higher with Ranking.AI
            </h3>
             <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 mb-4">
                    Dominate AI search across all platforms
                    </p>
                    <p className="text-base md:text-lg text-gray-700 dark:text-gray-300">
                    Connect Ranking.AI to your existing content strategy to optimize for ChatGPT, Gemini, Claude, and other AI platforms. Monitor your AI search rankings and get actionable insights to outperform competitors in the evolving search landscape.
                    </p>
                    {/* Feature grid */}
                   <ul className="list-none grid grid-cols-1 md:grid-cols-3 gap-4 pt-10 mb-8">
                    <li className="before:content-['✔'] before:text-black dark:before:text-white before:mr-2 dark:text-white flex items-center">
                        AI Search Optimization
                    </li>
                    <li className="before:content-['✔'] before:text-black dark:before:text-white before:mr-2 dark:text-white flex items-center">
                        Multi-platform Monitoring
                    </li>
                    <li className="before:content-['✔'] before:text-black dark:before:text-white before:mr-2 dark:text-white flex items-center">
                        Competitor Analysis
                    </li>
                    <li className="before:content-['✔'] before:text-black dark:before:text-white before:mr-2 dark:text-white flex items-center">
                        Content Recommendations
                    </li>
                    <li className="before:content-['✔'] before:text-black dark:before:text-white before:mr-2 dark:text-white flex items-center">
                        Performance Analytics
                    </li>
                    </ul>
                    {/* CTA button */}
                    <Link href="#">
                        <Button className="bg-black dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-100 px-6 py-3 text-sm font-medium rounded-md">
                        Try Ranking.AI
                        </Button>
                    </Link>
        </div>
    </section>
          {/* Specialized solutions */}
    <section ref={addSectionRef} className="relative pt-10 pb-20 px-4 md:px-8 text-center opacity-0">
        <div className="max-w-6xl mx-auto">
            <div className="max-w-7xl mx-auto">
                <h3 className="text-3xl md:text-4xl font-normal text-center text-black dark:text-white mb-12">
                    Specialized solutions for every industry
                </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {specialized.map((specialized, index) => (
              <div key={index} className="bg-zinc-800 dark:bg-zinc-900 rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 hover:scale-105">
                {/* Icon above title */}
                <img
                src={specialized.icon}
                alt={specialized.title}
                className="mx-auto mb-4 h-12 w-12"
                />
                <h3 className="text-lg font-semibold text-white">
                {specialized.title}
              </h3>
                <p className="text-sm text-gray-300 dark:text-gray-400">
                  {specialized.description}
                </p>
              </div>
            ))}
          </div>
        </div>
        </div>
    </section>
      {/* Ready to transform your business */}
      <section ref={addSectionRef} className="py-12 md:py-20 opacity-0">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="bg-gray-100 dark:bg-zinc-900 rounded-2xl py-20 text-center">
            <h2 className="text-4xl font-normal mb-4 dark:text-white">
            Ready to transform your business with AI?
          </h2>
          <p className="italic text-base md:text-lg text-gray-700 dark:text-gray-300 text-center mb-8 max-w-4xl mx-auto px-4">We believe the most impactful AI research happens at the intersection of cutting-edge
            Join thousands of businesses already leveraging SirkupAI's enterprise solutions</p>
        
        <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center px-4">
              <Link href="/contact">
                <Button className="bg-black dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-100 px-6 py-3 text-sm font-medium rounded-md">
                  Contact Sales
                </Button>
              </Link>
            </div>
        </div>
        </div>
      </section>
    </div>
  )
}