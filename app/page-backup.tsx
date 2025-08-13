"use client"

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'

export default function Home() {
  const sectionsRef = useRef<HTMLElement[]>([])
  const [imageError, setImageError] = useState<Record<string, boolean>>({})

  const handleImageError = (imageKey: string) => {
    setImageError(prev => ({ ...prev, [imageKey]: true }))
  }

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

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Hero Section - Centered */}
        <section className="py-12 md:py-20 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-normal tracking-tight text-black mb-4 md:mb-6">
              Democratizing AI for Sustainable Human Development
            </h1>
            <p className="text-base md:text-lg text-gray-700 mb-6 md:mb-8 max-w-3xl mx-auto px-4">
              SirkupAI is an operator-led, R&D-first AI systems studio. We build production-grade AI that transforms businesses across Pakistan and the UAE.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center px-4">
              <Button className="bg-black text-white hover:bg-gray-800 px-6 py-3 text-sm font-medium rounded-md">
                Get started →
              </Button>
              <Button variant="outline" className="border-gray-300 text-black hover:bg-gray-50 px-6 py-3 text-sm font-medium rounded-md">
                Contact sales
              </Button>
            </div>
          </div>
        </section>

        {/* Two Product Cards Section */}
        <section className="pb-8 md:pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
            {/* Content Intelligence Card */}
            <Card className="p-8 border border-gray-200 rounded-xl hover:shadow-lg transition-shadow">
              <h2 className="text-2xl font-semibold mb-4">Content Intelligence for Business</h2>
              <p className="text-gray-600 mb-6">Transform your content operations with AI-assisted workflows.</p>
              
              <ul className="space-y-3 mb-8 text-sm text-gray-700">
                <li className="flex items-start">
                  <span className="mr-3 text-gray-400">•</span>
                  <span>Reduce production time from ~8 hours to ~30 minutes per asset.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-gray-400">•</span>
                  <span>AI-assisted planning, drafting, and review workflows that fit existing teams.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-gray-400">•</span>
                  <span>Enterprise-grade security with clear audit trails and human oversight.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-gray-400">•</span>
                  <span>Seamless integration with SharePoint, Drive, and Microsoft Teams.</span>
                </li>
              </ul>

              <Link href="#" className="text-sm font-medium text-gray-900 hover:text-black">
                See pricing
              </Link>

              {/* Preview Image */}
              <div className="mt-8 rounded-lg overflow-hidden">
                <div className="bg-gradient-to-br from-cyan-50 to-teal-50 rounded-lg p-6 min-h-[200px] flex items-center justify-center">
                  <div className="bg-white rounded-lg shadow-sm p-4 max-w-sm w-full">
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full flex-shrink-0"></div>
                        <p className="text-xs text-gray-600">Generate blog post from research notes.</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full flex-shrink-0"></div>
                        <p className="text-xs text-gray-600">Create social media campaign strategy.</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-teal-400 rounded-full flex-shrink-0"></div>
                        <p className="text-xs text-gray-600">Optimize content for SEO performance.</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex-shrink-0"></div>
                        <p className="text-xs text-gray-600">Review and enhance brand consistency.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Conversational Intelligence Card */}
            <Card className="p-8 border border-gray-200 rounded-xl hover:shadow-lg transition-shadow">
              <h2 className="text-2xl font-semibold mb-4">Conversational Intelligence Platform</h2>
              <p className="text-gray-600 mb-6">Build AI agents that understand your business language.</p>
              
              <ul className="space-y-3 mb-8 text-sm text-gray-700">
                <li className="flex items-start">
                  <span className="mr-3 text-gray-400">•</span>
                  <span>99.7% accuracy in complex business conversations with NestHive testing.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-gray-400">•</span>
                  <span>Domain-specific training for objection handling and terminology.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-gray-400">•</span>
                  <span>Multi-language support optimized for Pakistan and UAE markets.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-gray-400">•</span>
                  <span>Real-time performance monitoring with production-ready deployment.</span>
                </li>
              </ul>

              <div className="flex gap-4">
                <Link href="#" className="text-sm font-medium text-gray-900 hover:text-black">
                  Start building
                </Link>
                <Link href="#" className="text-sm font-medium text-gray-900 hover:text-black">
                  Contact sales →
                </Link>
              </div>

              {/* Preview Image */}
              <div className="mt-8 rounded-lg overflow-hidden">
                {!imageError['conversational-preview'] ? (
                  <div className="relative w-full h-[200px] bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center">
                    <Image
                      src="/images/conversational-ai-preview.png"
                      alt="Conversational AI Preview"
                      fill
                      className="object-cover"
                      onError={() => handleImageError('conversational-preview')}
                    />
                  </div>
                ) : (
                  <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg p-6 min-h-[200px] flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-3xl font-bold mb-3 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        NestHive AI
                      </div>
                      <div className="bg-white rounded-lg shadow-sm p-4 mt-4">
                        <div className="space-y-2 text-left">
                          <div className="text-xs bg-gray-100 rounded p-2">
                            <span className="font-medium">Lead:</span> Interested in 3-bedroom villa
                          </div>
                          <div className="text-xs bg-blue-50 rounded p-2">
                            <span className="font-medium">AI:</span> Let me show you our premium properties...
                          </div>
                          <div className="text-xs bg-gray-100 rounded p-2">
                            <span className="font-medium">Lead:</span> What about payment plans?
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </Card>
          </div>
        </section>
      </div>

      {/* Partner Logos Section - Full width with animated logos */}
      <section className="py-8 md:py-16 overflow-hidden">
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
                    className="object-contain invert opacity-80"
                    onError={() => handleImageError(partner.file)}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* The AI Platform Section */}
        <section className="py-12 md:py-20">
          <h2 className="text-2xl md:text-4xl font-normal text-center mb-8 md:mb-16 px-4">
            Transforming Industries Through Intelligent Automation
          </h2>

          {/* Case Study Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 mb-12 md:mb-20">
            <div className="space-y-4 group">
              <div className="aspect-square bg-gradient-to-tl from-gray-200 via-gray-300 to-gray-100 rounded-2xl flex items-center justify-center p-6 overflow-hidden relative transform transition-transform duration-300 hover:scale-105 cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-gray-400/20 to-gray-500/30"></div>
                <div className="relative z-10 text-center">
                  <span className="text-lg font-semibold text-gray-700">Content Intelligence</span>
                </div>
              </div>
              <h3 className="text-sm md:text-base font-medium text-gray-900">Bringing intelligence to every workflow</h3>
              <p className="text-xs md:text-sm text-gray-500">Content Systems</p>
            </div>

            <div className="space-y-4 group">
              <div className="aspect-square bg-gradient-to-br from-gray-800 via-gray-600 to-gray-900 rounded-2xl flex items-center justify-center p-6 overflow-hidden relative transform transition-transform duration-300 hover:scale-105 cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-tl from-gray-700/50 via-transparent to-gray-900/30"></div>
                <div className="relative z-10 text-center">
                  <span className="text-lg font-semibold text-gray-100">Conversational AI</span>
                </div>
              </div>
              <h3 className="text-sm md:text-base font-medium text-gray-900">Moving from bots to proactive AI agents</h3>
              <p className="text-xs md:text-sm text-gray-500">Sales & CX</p>
            </div>

            <div className="space-y-4 group">
              <div className="aspect-square bg-gradient-to-r from-gray-300 via-gray-200 to-gray-400 rounded-2xl flex items-center justify-center p-6 overflow-hidden relative transform transition-transform duration-300 hover:scale-105 cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-bl from-gray-100/40 via-gray-300/60 to-transparent"></div>
                <div className="relative z-10 text-center">
                  <span className="text-lg font-semibold text-gray-700">SirkupAI Academy</span>
                </div>
              </div>
              <h3 className="text-sm md:text-base font-medium text-gray-900">Upskilling teams with practical AI training</h3>
              <p className="text-xs md:text-sm text-gray-500">Education</p>
            </div>

            <div className="space-y-4 group">
              <div className="aspect-square bg-gradient-to-bl from-gray-500 via-gray-400 to-gray-600 rounded-2xl flex items-center justify-center p-6 overflow-hidden relative transform transition-transform duration-300 hover:scale-105 cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-gray-500/30 to-gray-300/40"></div>
                <div className="relative z-10 text-center">
                  <span className="text-lg font-semibold text-gray-200">Custom Systems</span>
                </div>
              </div>
              <h3 className="text-sm md:text-base font-medium text-gray-900">Production-grade AI automations</h3>
              <p className="text-xs md:text-sm text-gray-500">Integrations</p>
            </div>
          </div>
        </section>
      </div>

      {/* Enable Your Workforce Section - with contained background */}
      <section className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="bg-gray-50 rounded-2xl p-8 md:p-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
            <h2 className="text-4xl font-normal mb-8">Enable your workforce with AI</h2>
            
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start">
                <span className="mr-3 text-gray-400">•</span>
                <span>Hands-on proficiency through SirkupAI Academy with real workflows and operator-led sessions</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-gray-400">•</span>
                <span>Practical automation patterns that connect CRMs, content stacks, and back-office tools</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-gray-400">•</span>
                <span>Build–measure–learn approach with clear metrics and review cadence for every initiative</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-gray-400">•</span>
                <span>Responsible AI with safety, privacy, and human oversight as non-negotiable standards</span>
              </li>
            </ul>

            <Link href="#" className="inline-block mt-8 text-sm font-medium text-black hover:underline">
              Learn about SirkupAI Academy →
            </Link>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden">
              {!imageError['workforce-bg'] ? (
                <div className="relative w-full h-full">
                  <Image
                    src="/images/workforce-bg.jpg"
                    alt="AI Workforce"
                    fill
                    className="object-cover rounded-2xl"
                    onError={() => handleImageError('workforce-bg')}
                  />
                </div>
              ) : (
                <div className="aspect-[4/3] bg-gradient-to-br from-blue-100 via-teal-100 to-green-100 rounded-2xl flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="text-6xl mb-4">🎯</div>
                    <p className="text-gray-600 font-medium">Education. Automation. Impact.</p>
                  </div>
                </div>
              )}
            </div>
          </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Build AI-native Products Section */}
        <section className="py-12 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                {!imageError['build-ai-bg'] ? (
                  <div className="relative w-full h-full">
                    <Image
                      src="/images/build-ai-bg.jpg"
                      alt="Build AI Products"
                      fill
                      className="object-cover rounded-2xl"
                      onError={() => handleImageError('build-ai-bg')}
                    />
                  </div>
                ) : (
                  <div className="aspect-[4/3] bg-gradient-to-br from-teal-400 via-blue-500 to-purple-600 rounded-2xl flex items-center justify-center">
                    <div className="text-center p-8">
                      <div className="text-6xl mb-4 text-white">🚀</div>
                      <p className="text-white font-medium">R&D-First Innovation</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl font-normal mb-8">Build AI-native products and experiences</h2>
              
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start">
                  <span className="mr-3 text-gray-400">•</span>
                  <span>Operator-led development that closes the gap between promising models and production systems</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-gray-400">•</span>
                  <span>Real experiments with real users - we share what works and retire what doesn't</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-gray-400">•</span>
                  <span>Focus on Pakistan and UAE markets with patterns that travel globally</span>
                </li>
              </ul>

              <Link href="#" className="inline-block mt-8 text-sm font-medium text-black hover:underline">
                Learn about our approach →
              </Link>
            </div>
          </div>
        </section>
      </div>

      {/* Security Section - with contained background */}
      <section className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="bg-gray-50 rounded-2xl p-8 md:p-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-normal mb-8">Enterprise-grade data privacy, security, and admin controls</h2>
            
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start">
                <span className="mr-3 text-gray-400">•</span>
                <span>No customer data in training pipelines - your data stays yours</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-gray-400">•</span>
                <span>Human-supervised AI with clear safeguards and traceability for sensitive contexts</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-gray-400">•</span>
                <span>Observable pipelines with clear ownership and audit trails</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-gray-400">•</span>
                <span>GDPR and CCPA compliance with enterprise security standards</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-gray-400">•</span>
                <span>On-site operations in Islamabad and Dubai with local data residency options</span>
              </li>
            </ul>

            <Link href="#" className="inline-block mt-8 text-sm font-medium text-black hover:underline">
              View security standards →
            </Link>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden">
              {!imageError['security-bg'] ? (
                <div className="relative w-full h-full">
                  <Image
                    src="/images/security-bg.jpg"
                    alt="Enterprise Security"
                    fill
                    className="object-cover rounded-2xl"
                    onError={() => handleImageError('security-bg')}
                  />
                </div>
              ) : (
                <div className="aspect-[4/3] bg-gradient-to-br from-gray-200 via-blue-100 to-purple-100 rounded-2xl flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="text-6xl mb-4">🔒</div>
                    <p className="text-gray-600 font-medium">Responsible AI</p>
                  </div>
                </div>
              )}
            </div>
          </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Quote Section */}
        <section className="py-12 md:py-24">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-2xl lg:text-3xl font-light leading-relaxed text-gray-900 mb-8">
              "They cut through noise and built a workflow our team actually uses in production. Our content reviews are tighter and faster, with clearer handoffs."
            </p>
            <p className="text-sm text-gray-600">
              Head of Content, Media Studio Client
            </p>
          </div>
        </section>
      </div>

      {/* Resources Section - with contained background */}
      <section className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="bg-gray-100 rounded-2xl py-20 text-center">
          <h2 className="text-4xl font-normal mb-4">
            Guides and resources for<br />integrating AI into your business
          </h2>
          <Link href="#" className="inline-block mt-6 text-sm font-medium text-black hover:underline">
            Learn more
          </Link>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Blog Cards Section */}
        <section className="py-12 md:py-20">
          <h2 className="text-2xl font-medium mb-12">Explore more</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="aspect-video bg-gradient-to-br from-blue-400 to-cyan-400 rounded-xl"></div>
              <h3 className="text-sm md:text-base font-medium text-gray-900">New in Content Intelligence: December 2024</h3>
              <div className="flex gap-4 text-xs text-gray-500">
                <span>Webinar</span>
                <span className="text-gray-300">•</span>
                <span>Dec 15, 2024</span>
              </div>
            </div>

            <div className="space-y-4">
              <div className="aspect-video bg-gradient-to-br from-cyan-400 to-teal-400 rounded-xl"></div>
              <h3 className="text-sm md:text-base font-medium text-gray-900">Conversational AI in Real Estate</h3>
              <div className="flex gap-4 text-xs text-gray-500">
                <span>Case Study</span>
                <span className="text-gray-300">•</span>
                <span>Nov 28, 2024</span>
              </div>
            </div>

            <div className="space-y-4">
              <div className="aspect-video bg-gradient-to-br from-yellow-400 to-orange-400 rounded-xl"></div>
              <h3 className="text-sm md:text-base font-medium text-gray-900">AI Education Programs Launch</h3>
              <div className="flex gap-4 text-xs text-gray-500">
                <span>Product</span>
                <span className="text-gray-300">•</span>
                <span>Oct 10, 2024</span>
              </div>
            </div>

            <div className="space-y-4">
              <div className="aspect-video bg-gradient-to-br from-teal-400 to-blue-400 rounded-xl"></div>
              <h3 className="text-sm md:text-base font-medium text-gray-900">Building Production-Ready AI</h3>
              <div className="flex gap-4 text-xs text-gray-500">
                <span>Guide</span>
                <span className="text-gray-300">•</span>
                <span>Sep 5, 2024</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}