"use client"

import { useRef, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardTitle } from '@/components/ui/card'

const relatedProducts = [
  {
    title: 'Vision',
    description: 'AI-powered image generation platform that produces images that speak',
    image: '/images/vision-card.png',
    href: '/solutions/vision'
  },
  {
    title: 'AdalBot',
    description: 'AI-powered support tool for trauma/abuse survivors via WhatsApp',
    image: '/images/adalbot-card.png',
    href: '/solutions/adalbot'
  },
  {
    title: 'RankingAI',
    description: 'Real estate platform with natural language search capabilities',
    image: '/images/rankingai-card.png',
    href: '/solutions/rankingai'
  }
]

export default function CallisPage() {
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
        {/* Back Navigation */}
        <section className="py-6">
          <Link 
            href="/solutions"
            className="inline-flex items-center text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            ← Solutions
          </Link>
        </section>

        {/* Title and Product Info */}
        <section ref={addSectionRef} className="py-6 opacity-0 text-center">
          <div className="flex items-center justify-center gap-3 text-sm text-gray-600 dark:text-gray-400 mb-4">
            <span>Sales AI</span>
            <span>•</span>
            <span>Updated August 2024</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight text-black dark:text-white">
            Callis
          </h1>
        </section>

        {/* Main Heading and Description */}
        <section ref={addSectionRef} className="py-8 md:py-12 opacity-0 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-normal text-black dark:text-white mb-6 leading-tight text-center">
              Automated cold calling agents that follow up leads and increase business
            </h2>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8 leading-relaxed text-center">
              Transform your sales process with AI-powered conversations that convert prospects into customers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-black dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-100 px-8 py-3 rounded-full">
                Get started →
              </Button>
              <Button variant="outline" className="border-gray-300 dark:border-gray-700 text-black dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800 px-8 py-3 rounded-full">
                Contact sales
              </Button>
            </div>
          </div>
        </section>
      </div>

      {/* Hero Image Section - Full Width and Centered */}
      <section ref={addSectionRef} className="py-12 md:py-16 opacity-0">
        <div className="w-full max-w-6xl mx-auto px-4 md:px-8">
          <div className="relative w-full h-64 md:h-80 lg:h-96 xl:h-[32rem] rounded-2xl overflow-hidden bg-gradient-to-br from-blue-50 to-purple-50 dark:from-zinc-900 dark:to-zinc-800 mx-auto">
            <Image
              src="/images/callis-page.png"
              alt="Callis AI Cold Calling Interface"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 md:px-8">

        {/* Description Section */}
        <section ref={addSectionRef} className="py-12 md:py-20 opacity-0 text-center">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8 text-center">
              Callis revolutionizes sales outreach with intelligent AI agents that conduct natural, persuasive conversations with your prospects. Our advanced conversational AI understands context, handles objections, and adapts its approach based on each prospect's responses and behavior patterns.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed text-center">
              From initial contact to follow-up sequences, Callis automates your entire cold calling pipeline while maintaining the personal touch that converts leads into loyal customers. Scale your sales efforts without scaling your team.
            </p>
          </div>
        </section>

        {/* Quote Section */}
        <section ref={addSectionRef} className="py-12 md:py-20 border-y border-gray-200 dark:border-zinc-800 opacity-0">
          <div className="max-w-3xl mx-auto text-center">
            <blockquote className="text-xl md:text-2xl font-light text-black dark:text-white italic mb-6">
              "Callis increased our lead conversion rate by 300% while reducing our sales team workload. The AI conversations are so natural, prospects often don't realize they're talking to a bot."
            </blockquote>
            <cite className="text-sm text-gray-600 dark:text-gray-400">
              James Wilson, VP of Sales at TechScale Solutions
            </cite>
          </div>
        </section>

        {/* Features Section */}
        <section ref={addSectionRef} className="py-12 md:py-20 opacity-0 text-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-2xl md:text-3xl font-normal text-black dark:text-white mb-8 text-center">
                Intelligent Conversations
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium text-black dark:text-white mb-2 text-center">
                    Natural Language Processing
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-center">
                    Advanced AI that understands context, tone, and intent to deliver human-like conversations that build rapport.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-black dark:text-white mb-2 text-center">
                    Objection Handling
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-center">
                    Smart responses to common objections, trained on successful sales conversations to overcome resistance.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-black dark:text-white mb-2 text-center">
                    Personalization Engine
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-center">
                    Tailors each conversation based on prospect data, company information, and behavioral insights.
                  </p>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-2xl md:text-3xl font-normal text-black dark:text-white mb-8 text-center">
                Sales Automation
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium text-black dark:text-white mb-2 text-center">
                    Multi-Channel Outreach
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-center">
                    Seamlessly integrates voice calls, SMS, and email for comprehensive prospect engagement.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-black dark:text-white mb-2 text-center">
                    Smart Scheduling
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-center">
                    Automatically schedules follow-ups and books meetings based on prospect responses and availability.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-black dark:text-white mb-2 text-center">
                    CRM Integration
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-center">
                    Syncs with your existing CRM to update lead status, log interactions, and track conversion metrics.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section ref={addSectionRef} className="py-12 md:py-20 bg-gray-50 dark:bg-zinc-900 -mx-4 md:-mx-8 px-4 md:px-8 opacity-0">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-normal text-black dark:text-white mb-12 text-center">
              Why choose Callis?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-4 bg-black dark:bg-white rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white dark:text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-black dark:text-white mb-2">Scale Effortlessly</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Handle thousands of prospects simultaneously without hiring additional sales staff.
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-4 bg-black dark:bg-white rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white dark:text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-black dark:text-white mb-2">Higher Conversion</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  AI-optimized conversations that consistently outperform traditional cold calling methods.
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-4 bg-black dark:bg-white rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white dark:text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-black dark:text-white mb-2">Cost Effective</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Reduce sales costs by up to 70% while increasing outreach volume and quality.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Performance Metrics */}
        <section ref={addSectionRef} className="py-12 md:py-20 opacity-0">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-normal text-black dark:text-white mb-8">
              Proven results
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className="text-3xl md:text-4xl font-light text-black dark:text-white mb-2">300%</div>
                <p className="text-gray-600 dark:text-gray-400">Increase in lead conversion</p>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-light text-black dark:text-white mb-2">70%</div>
                <p className="text-gray-600 dark:text-gray-400">Reduction in sales costs</p>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-light text-black dark:text-white mb-2">5x</div>
                <p className="text-gray-600 dark:text-gray-400">More outreach capacity</p>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section ref={addSectionRef} className="py-12 md:py-20 opacity-0 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-normal text-black dark:text-white mb-12 text-center">
              Perfect for every industry
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4 text-center">
                <h3 className="text-lg font-medium text-black dark:text-white text-center">B2B Software & SaaS</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm text-center">
                  Qualify enterprise leads, schedule demos, and nurture prospects through complex sales cycles.
                </p>
              </div>
              <div className="space-y-4 text-center">
                <h3 className="text-lg font-medium text-black dark:text-white text-center">Real Estate</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm text-center">
                  Connect with property buyers and sellers, schedule viewings, and follow up on inquiries.
                </p>
              </div>
              <div className="space-y-4 text-center">
                <h3 className="text-lg font-medium text-black dark:text-white text-center">Financial Services</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm text-center">
                  Reach potential clients for insurance, investment services, and financial planning.
                </p>
              </div>
              <div className="space-y-4 text-center">
                <h3 className="text-lg font-medium text-black dark:text-white text-center">Healthcare</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm text-center">
                  Schedule patient appointments, follow up on treatments, and promote health services.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section ref={addSectionRef} className="py-16 md:py-24 text-center opacity-0">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-normal text-black dark:text-white mb-4">
              Ready to supercharge your sales?
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              Join hundreds of businesses already using Callis to transform their sales process.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-black dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-100 px-8 py-3 rounded-full">
                Start free trial
              </Button>
              <Button variant="outline" className="border-gray-300 dark:border-gray-700 text-black dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800 px-8 py-3 rounded-full">
                Book a demo
              </Button>
            </div>
          </div>
        </section>

        {/* Keep Reading Section */}
        <section ref={addSectionRef} className="py-12 md:py-20 border-t border-gray-200 dark:border-zinc-800 opacity-0 text-center">
          <h2 className="text-2xl font-normal text-black dark:text-white mb-8 text-center">
            Keep reading
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedProducts.map((product) => (
              <Link key={product.title} href={product.href} className="group">
                <Card className="border-0 shadow-sm hover:shadow-md transition-all duration-300 group-hover:-translate-y-1">
                  <div className="aspect-[4/3] relative overflow-hidden rounded-t-2xl bg-gradient-to-br from-blue-50 to-purple-50 dark:from-zinc-900 dark:to-zinc-800">
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <CardTitle className="mb-2">{product.title}</CardTitle>
                    <CardDescription>{product.description}</CardDescription>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}