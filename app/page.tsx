"use client"

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef } from 'react'

export default function Home() {
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
        {/* Hero Section - Centered */}
        <section ref={addSectionRef} className="py-12 md:py-20 text-center opacity-0">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-normal tracking-tight text-black dark:text-white mb-4 md:mb-6">
              Democratizing AI for Sustainable Human Development
            </h1>
            <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 mb-6 md:mb-8 max-w-3xl mx-auto px-4">
              SirkupAI is an operator-led, R&D-first AI systems studio. We build production-grade AI that transforms businesses across Pakistan and the UAE.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center px-4">
              <Link href="/solutions">
                <Button className="bg-black dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-100 px-6 py-3 text-sm font-medium rounded-md">
                  Get started →
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" className="border-gray-300 dark:border-gray-700 text-black dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800 px-6 py-3 text-sm font-medium rounded-md">
                  Contact sales
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Two Product Cards Section */}
        <section ref={addSectionRef} className="pb-8 md:pb-16 opacity-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
            {/* Content Intelligence Card */}
            <Card className="p-8 border border-gray-200 dark:border-zinc-800 rounded-xl hover:shadow-lg dark:hover:shadow-zinc-900/50 transition-shadow">
              <h2 className="text-2xl font-semibold mb-4 dark:text-white">Content Intelligence for Business</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-6">Transform your content operations with AI-assisted workflows.</p>
              
              <ul className="space-y-3 mb-8 text-sm text-gray-700 dark:text-gray-300">
                <li className="flex items-start">
                  <span className="mr-3 text-gray-400 dark:text-gray-500">•</span>
                  <span>Reduce production time from ~8 hours to ~30 minutes per asset.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-gray-400 dark:text-gray-500">•</span>
                  <span>AI-assisted planning, drafting, and review workflows that fit existing teams.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-gray-400 dark:text-gray-500">•</span>
                  <span>Enterprise-grade security with clear audit trails and human oversight.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-gray-400 dark:text-gray-500">•</span>
                  <span>Seamless integration with SharePoint, Drive, and Microsoft Teams.</span>
                </li>
              </ul>

              <Link href="/contact" className="text-sm font-medium text-gray-900 dark:text-gray-100 hover:text-black dark:hover:text-white">
                See pricing
              </Link>

              {/* Preview Visual */}
              <div className="mt-8 rounded-lg overflow-hidden">
                <div className="bg-gradient-to-br from-cyan-50 to-teal-50 dark:from-zinc-800 dark:to-zinc-900 rounded-lg p-6 min-h-[200px] flex items-center justify-center">
                  <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm dark:shadow-gray-900 p-4 max-w-sm w-full">
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full flex-shrink-0"></div>
                        <p className="text-xs text-gray-600 dark:text-gray-400">Generate blog post from research notes.</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full flex-shrink-0"></div>
                        <p className="text-xs text-gray-600 dark:text-gray-400">Create social media campaign strategy.</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-teal-400 rounded-full flex-shrink-0"></div>
                        <p className="text-xs text-gray-600 dark:text-gray-400">Optimize content for SEO performance.</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex-shrink-0"></div>
                        <p className="text-xs text-gray-600 dark:text-gray-400">Review and enhance brand consistency.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Conversational Intelligence Card */}
            <Card className="p-8 border border-gray-200 dark:border-zinc-800 rounded-xl hover:shadow-lg dark:hover:shadow-zinc-900/50 transition-shadow">
              <h2 className="text-2xl font-semibold mb-4 dark:text-white">Conversational Intelligence Platform</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-6">Build AI agents that understand your business language.</p>
              
              <ul className="space-y-3 mb-8 text-sm text-gray-700 dark:text-gray-300">
                <li className="flex items-start">
                  <span className="mr-3 text-gray-400 dark:text-gray-500">•</span>
                  <span>99.7% accuracy in complex business conversations with NestHive testing.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-gray-400 dark:text-gray-500">•</span>
                  <span>Domain-specific training for objection handling and terminology.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-gray-400 dark:text-gray-500">•</span>
                  <span>Multi-language support optimized for Pakistan and UAE markets.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-gray-400 dark:text-gray-500">•</span>
                  <span>Real-time performance monitoring with production-ready deployment.</span>
                </li>
              </ul>

              <div className="flex gap-4">
                <Link href="/solutions" className="text-sm font-medium text-gray-900 dark:text-gray-100 hover:text-black dark:hover:text-white">
                  Start building
                </Link>
                <Link href="/contact" className="text-sm font-medium text-gray-900 dark:text-gray-100 hover:text-black dark:hover:text-white">
                  Contact sales →
                </Link>
              </div>

              {/* Preview Visual */}
              <div className="mt-8 rounded-lg overflow-hidden">
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-zinc-800 dark:to-zinc-900 rounded-lg p-6 min-h-[200px] flex items-center justify-center">
                  <div className="text-center">
                    <div className="mb-2 flex items-center justify-center">
                      <Image
                        src="/partners/nesthive-logo.png"
                        alt="NestHive AI"
                        width={160}
                        height={40}
                        className="object-contain brightness-0 dark:brightness-0 dark:invert"
                      />
                    </div>
                    <div className="bg-white dark:bg-zinc-800 rounded-lg shadow-sm dark:shadow-zinc-900 p-4">
                      <div className="space-y-2 text-left">
                        <div className="text-xs bg-gray-100 dark:bg-zinc-700 text-gray-900 dark:text-gray-200 rounded p-2">
                          <span className="font-medium">Lead:</span> Interested in 3-bedroom villa
                        </div>
                        <div className="text-xs bg-blue-50 dark:bg-blue-900/30 text-gray-900 dark:text-gray-200 rounded p-2">
                          <span className="font-medium">AI:</span> Let me show you our premium properties...
                        </div>
                        <div className="text-xs bg-gray-100 dark:bg-zinc-700 text-gray-900 dark:text-gray-200 rounded p-2">
                          <span className="font-medium">Lead:</span> What about payment plans?
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </section>
      </div>

      {/* Partner Logos Section - Full width with animated logos */}
      <section ref={addSectionRef} className="py-8 md:py-16 overflow-hidden opacity-0">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex items-center justify-center gap-x-4 md:gap-x-8 flex-wrap md:flex-nowrap md:min-w-max">
            {/* SirkupAI Partner logos with staggered slide animation */}
            {[
              { name: 'NestHive', file: 'nesthive-logo.png', delay: '0s' },
              { name: 'Voice of Pak', file: 'voice-of-pak-logo.png', delay: '0.2s' },
              { name: 'Bytes for All', file: 'bytes-for-all-logo.png', delay: '0.4s' },
              { name: 'Frische', file: 'frische-logo.png', delay: '0.6s' },
              { name: 'Carzone', file: 'carzone-logo.png', delay: '0.8s' }
            ].map((partner) => (
              <div 
                key={partner.name} 
                className="relative h-16 md:h-24 flex items-center flex-shrink-0"
                style={{
                  animation: 'slideUpFade 8s ease-in-out infinite',
                  animationDelay: partner.delay
                }}
              >
                <div className="relative w-32 md:w-48 h-16 md:h-24">
                  <Image
                    src={`/partners/${partner.file}`}
                    alt={partner.name}
                    fill
                    className="object-contain invert dark:invert-0 opacity-80 hover:opacity-100 transition-opacity"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* The AI Platform Section */}
        <section ref={addSectionRef} className="py-12 md:py-20 opacity-0">
          <h2 className="text-2xl md:text-4xl font-normal text-center mb-8 md:mb-16 px-4 dark:text-white">
            Transforming Industries Through Intelligent Automation
          </h2>

          {/* Case Study Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 mb-12 md:mb-20">
            <Link href="/solutions/vision" className="space-y-4 group cursor-pointer">
              <div className="aspect-square rounded-2xl overflow-hidden relative transform transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl">
                <Image
                  src="/images/vision-card.png"
                  alt="Vision"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
              </div>
              <h3 className="text-sm md:text-base font-medium text-gray-900 dark:text-white">AI-powered images that speak</h3>
              <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400">Vision</p>
            </Link>

            <Link href="/solutions/adalbot" className="space-y-4 group cursor-pointer">
              <div className="aspect-square rounded-2xl overflow-hidden relative transform transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl">
                <Image
                  src="/images/adalbot-card.png"
                  alt="AdalBot"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
              </div>
              <h3 className="text-sm md:text-base font-medium text-gray-900 dark:text-white">Supporting trauma survivors with AI</h3>
              <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400">AdalBot</p>
            </Link>

            <Link href="/solutions/callis" className="space-y-4 group cursor-pointer">
              <div className="aspect-square rounded-2xl overflow-hidden relative transform transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl">
                <Image
                  src="/images/callis-card.png"
                  alt="Callis"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
              </div>
              <h3 className="text-sm md:text-base font-medium text-gray-900 dark:text-white">Automated cold calling that converts</h3>
              <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400">Callis</p>
            </Link>

            <Link href="/solutions/rankingai" className="space-y-4 group cursor-pointer">
              <div className="aspect-square rounded-2xl overflow-hidden relative transform transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl">
                <Image
                  src="/images/rankingai-card.png"
                  alt="RankingAI"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
              </div>
              <h3 className="text-sm md:text-base font-medium text-gray-900 dark:text-white">Natural language real estate search</h3>
              <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400">RankingAI</p>
            </Link>
          </div>
        </section>
      </div>

      {/* Enable Your Workforce Section */}
      <section ref={addSectionRef} className="py-12 md:py-20 opacity-0">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="p-8 md:p-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl font-normal mb-8 dark:text-white">Enable your workforce with AI</h2>
                
                <ul className="space-y-4 text-gray-700 dark:text-gray-300">
                  <li className="flex items-start">
                    <span className="mr-3 text-gray-400 dark:text-gray-500">•</span>
                    <span>Hands-on proficiency through SirkupAI Academy with real workflows and operator-led sessions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-gray-400 dark:text-gray-500">•</span>
                    <span>Practical automation patterns that connect CRMs, content stacks, and back-office tools</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-gray-400 dark:text-gray-500">•</span>
                    <span>Build–measure–learn approach with clear metrics and review cadence for every initiative</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-gray-400 dark:text-gray-500">•</span>
                    <span>Responsible AI with safety, privacy, and human oversight as non-negotiable standards</span>
                  </li>
                </ul>

                <Link href="/solutions" className="inline-block mt-8 text-sm font-medium text-black dark:text-white hover:underline">
                  Learn about SirkupAI Academy →
                </Link>
              </div>

              <div className="relative">
                <div className="rounded-2xl overflow-hidden">
                  <div className="relative w-full">
                    <Image
                      src="/images/workforce-bg.jpg"
                      alt="AI Workforce"
                      width={600}
                      height={450}
                      className="object-contain w-full h-auto rounded-2xl"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Build AI-native Products Section */}
        <section ref={addSectionRef} className="py-12 md:py-20 opacity-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="rounded-2xl overflow-hidden">
                <div className="relative w-full">
                  <Image
                    src="/images/build-ai-bg.jpg"
                    alt="Build AI Products"
                    width={600}
                    height={450}
                    className="object-contain w-full h-auto rounded-2xl"
                  />
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl font-normal mb-8 dark:text-white">Build AI-native products and experiences</h2>
              
              <ul className="space-y-4 text-gray-700 dark:text-gray-300">
                <li className="flex items-start">
                  <span className="mr-3 text-gray-400 dark:text-gray-500">•</span>
                  <span>Operator-led development that closes the gap between promising models and production systems</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-gray-400 dark:text-gray-500">•</span>
                  <span>Real experiments with real users - we share what works and retire what doesn't</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-gray-400 dark:text-gray-500">•</span>
                  <span>Focus on Pakistan and UAE markets with patterns that travel globally</span>
                </li>
              </ul>

              <Link href="/team" className="inline-block mt-8 text-sm font-medium text-black dark:text-white hover:underline">
                Learn about our approach →
              </Link>
            </div>
          </div>
        </section>
      </div>

      {/* Security Section */}
      <section ref={addSectionRef} className="py-12 md:py-20 opacity-0">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="p-8 md:p-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl font-normal mb-8 dark:text-white">Enterprise-grade data privacy, security, and admin controls</h2>
                
                <ul className="space-y-4 text-gray-700 dark:text-gray-300">
                  <li className="flex items-start">
                    <span className="mr-3 text-gray-400 dark:text-gray-500">•</span>
                    <span>No customer data in training pipelines - your data stays yours</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-gray-400 dark:text-gray-500">•</span>
                    <span>Human-supervised AI with clear safeguards and traceability for sensitive contexts</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-gray-400 dark:text-gray-500">•</span>
                    <span>Observable pipelines with clear ownership and audit trails</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-gray-400 dark:text-gray-500">•</span>
                    <span>GDPR and CCPA compliance with enterprise security standards</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-gray-400 dark:text-gray-500">•</span>
                    <span>On-site operations in Islamabad and Dubai with local data residency options</span>
                  </li>
                </ul>

                <Link href="/contact" className="inline-block mt-8 text-sm font-medium text-black dark:text-white hover:underline">
                  View security standards →
                </Link>
              </div>

              <div className="relative">
                <div className="rounded-2xl overflow-hidden">
                  <div className="relative w-full">
                    <Image
                      src="/images/security-bg.jpg"
                      alt="Enterprise Security"
                      width={600}
                      height={450}
                      className="object-contain w-full h-auto rounded-2xl"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Quote Section */}
        <section ref={addSectionRef} className="py-12 md:py-24 opacity-0">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-2xl lg:text-3xl font-light leading-relaxed text-gray-900 dark:text-white mb-8">
              "They cut through noise and built a workflow our team actually uses in production. Our content reviews are tighter and faster, with clearer handoffs."
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Head of Content, Media Studio Client
            </p>
          </div>
        </section>
      </div>

      {/* Resources Section - with contained background */}
      <section ref={addSectionRef} className="py-12 md:py-20 opacity-0">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="bg-gray-100 dark:bg-zinc-900 rounded-2xl py-20 text-center">
            <h2 className="text-4xl font-normal mb-4 dark:text-white">
              Guides and resources for<br />integrating AI into your business
            </h2>
            <Link href="/solutions" className="inline-block mt-6 text-sm font-medium text-black dark:text-white hover:underline">
              Learn more
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}