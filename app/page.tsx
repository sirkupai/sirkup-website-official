"use client"

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'

export default function Home() {
  const sectionsRef = useRef<HTMLElement[]>([])
  const [videosLoaded, setVideosLoaded] = useState(false)
  const lightVideoRef = useRef<HTMLVideoElement>(null)
  const darkVideoRef = useRef<HTMLVideoElement>(null)

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

  // Load videos after component mounts for better performance
  useEffect(() => {
    const loadVideos = () => {
      if (lightVideoRef.current) {
        lightVideoRef.current.load()
      }
      if (darkVideoRef.current) {
        darkVideoRef.current.load()
      }
      setVideosLoaded(true)
    }
    
    // Small delay to prioritize initial content rendering
    const timer = setTimeout(loadVideos, 100)
    return () => clearTimeout(timer)
  }, [])

  const addSectionRef = (el: HTMLElement | null) => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current.push(el)
    }
  }

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Hero Section - Centered with Video Background */}
        <section ref={addSectionRef} className="relative py-20 md:py-32 lg:py-40 text-center opacity-0 overflow-hidden">
          {/* Background Videos */}
          <div className="absolute inset-0 z-0">
            {/* Light theme video */}
            <video
              ref={lightVideoRef}
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              className={`absolute inset-0 w-full h-full object-cover dark:hidden transition-opacity duration-500 ${videosLoaded ? 'opacity-100' : 'opacity-0'}`}
            >
              <source src="/videos/landing-page-hero-animation-light-theme.mp4" type="video/mp4" />
            </video>
            {/* Dark theme video */}
            <video
              ref={darkVideoRef}
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              className={`absolute inset-0 w-full h-full object-cover hidden dark:block transition-opacity duration-500 ${videosLoaded ? 'opacity-100' : 'opacity-0'}`}
            >
              <source src="/videos/landing-page-hero-animation-dark-them.mp4" type="video/mp4" />
            </video>
            {/* Overlay for better text readability */}
            <div className="absolute inset-0 bg-white/40 dark:bg-black/40"></div>
          </div>
          
          {/* Content */}
          <div className="relative z-10 max-w-4xl mx-auto">
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
                <div className="relative rounded-lg w-full" style={{ height: '300px' }}>
                  <Image
                    src="/images/header-image-left.jpg"
                    alt="Content Intelligence Preview"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                    className="object-contain rounded-lg dark:hidden"
                    quality={100}
                    priority
                  />
                  <Image
                    src="/images/header-image-dark-left.jpg"
                    alt="Content Intelligence Preview"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                    className="object-contain rounded-lg hidden dark:block"
                    quality={100}
                    priority
                  />
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
                <div className="relative rounded-lg w-full" style={{ height: '300px' }}>
                  <Image
                    src="/images/header-image-right.jpg"
                    alt="Conversational Intelligence Preview"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                    className="object-contain rounded-lg dark:hidden"
                    quality={100}
                    priority
                  />
                  <Image
                    src="/images/header-image-dark-right.jpg"
                    alt="Conversational Intelligence Preview"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                    className="object-contain rounded-lg hidden dark:block"
                    quality={100}
                    priority
                  />
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
                <h2 className="text-4xl font-normal mb-8 dark:text-white transition-colors duration-300 hover:text-gray-700 dark:hover:text-gray-200">Enable your workforce with AI</h2>
                
                <ul className="space-y-4 text-gray-700 dark:text-gray-300">
                  <li className="flex items-start group cursor-pointer">
                    <span className="mr-3 text-gray-400 dark:text-gray-500 transition-colors duration-300 group-hover:text-gray-600 dark:group-hover:text-gray-300">•</span>
                    <span className="transition-colors duration-300 group-hover:text-black dark:group-hover:text-white">Hands-on proficiency through SirkupAI Academy with real workflows and operator-led sessions</span>
                  </li>
                  <li className="flex items-start group cursor-pointer">
                    <span className="mr-3 text-gray-400 dark:text-gray-500 transition-colors duration-300 group-hover:text-gray-600 dark:group-hover:text-gray-300">•</span>
                    <span className="transition-colors duration-300 group-hover:text-black dark:group-hover:text-white">Practical automation patterns that connect CRMs, content stacks, and back-office tools</span>
                  </li>
                  <li className="flex items-start group cursor-pointer">
                    <span className="mr-3 text-gray-400 dark:text-gray-500 transition-colors duration-300 group-hover:text-gray-600 dark:group-hover:text-gray-300">•</span>
                    <span className="transition-colors duration-300 group-hover:text-black dark:group-hover:text-white">Build–measure–learn approach with clear metrics and review cadence for every initiative</span>
                  </li>
                  <li className="flex items-start group cursor-pointer">
                    <span className="mr-3 text-gray-400 dark:text-gray-500 transition-colors duration-300 group-hover:text-gray-600 dark:group-hover:text-gray-300">•</span>
                    <span className="transition-colors duration-300 group-hover:text-black dark:group-hover:text-white">Responsible AI with safety, privacy, and human oversight as non-negotiable standards</span>
                  </li>
                </ul>

                <Link href="/solutions" className="inline-block mt-8 text-sm font-medium text-black dark:text-white transition-all duration-300 hover:text-gray-600 dark:hover:text-gray-300 hover:translate-x-1">
                  Learn about SirkupAI Academy →
                </Link>
              </div>

              <div className="relative group">
                <div className="rounded-2xl overflow-hidden">
                  <div className="relative w-full transform transition-all duration-500 group-hover:scale-105">
                    <Image
                      src="/images/workforce-bg.jpg"
                      alt="AI Workforce"
                      width={600}
                      height={450}
                      className="object-contain w-full h-auto rounded-2xl transition-all duration-500 group-hover:brightness-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
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
            <div className="relative order-2 lg:order-1 group">
              <div className="rounded-2xl overflow-hidden">
                <div className="relative w-full transform transition-all duration-500 group-hover:scale-105">
                  <Image
                    src="/images/build-ai-bg.jpg"
                    alt="Build AI Products"
                    width={600}
                    height={450}
                    className="object-contain w-full h-auto rounded-2xl transition-all duration-500 group-hover:brightness-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl font-normal mb-8 dark:text-white transition-colors duration-300 hover:text-gray-700 dark:hover:text-gray-200">Build AI-native products and experiences</h2>
              
              <ul className="space-y-4 text-gray-700 dark:text-gray-300">
                <li className="flex items-start group cursor-pointer">
                  <span className="mr-3 text-gray-400 dark:text-gray-500 transition-colors duration-300 group-hover:text-gray-600 dark:group-hover:text-gray-300">•</span>
                  <span className="transition-colors duration-300 group-hover:text-black dark:group-hover:text-white">Operator-led development that closes the gap between promising models and production systems</span>
                </li>
                <li className="flex items-start group cursor-pointer">
                  <span className="mr-3 text-gray-400 dark:text-gray-500 transition-colors duration-300 group-hover:text-gray-600 dark:group-hover:text-gray-300">•</span>
                  <span className="transition-colors duration-300 group-hover:text-black dark:group-hover:text-white">Real experiments with real users - we share what works and retire what doesn't</span>
                </li>
                <li className="flex items-start group cursor-pointer">
                  <span className="mr-3 text-gray-400 dark:text-gray-500 transition-colors duration-300 group-hover:text-gray-600 dark:group-hover:text-gray-300">•</span>
                  <span className="transition-colors duration-300 group-hover:text-black dark:group-hover:text-white">Focus on Pakistan and UAE markets with patterns that travel globally</span>
                </li>
              </ul>

              <Link href="/team" className="inline-block mt-8 text-sm font-medium text-black dark:text-white transition-all duration-300 hover:text-gray-600 dark:hover:text-gray-300 hover:translate-x-1">
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
                <h2 className="text-4xl font-normal mb-8 dark:text-white transition-colors duration-300 hover:text-gray-700 dark:hover:text-gray-200">Enterprise-grade data privacy, security, and admin controls</h2>
                
                <ul className="space-y-4 text-gray-700 dark:text-gray-300">
                  <li className="flex items-start group cursor-pointer">
                    <span className="mr-3 text-gray-400 dark:text-gray-500 transition-colors duration-300 group-hover:text-gray-600 dark:group-hover:text-gray-300">•</span>
                    <span className="transition-colors duration-300 group-hover:text-black dark:group-hover:text-white">No customer data in training pipelines - your data stays yours</span>
                  </li>
                  <li className="flex items-start group cursor-pointer">
                    <span className="mr-3 text-gray-400 dark:text-gray-500 transition-colors duration-300 group-hover:text-gray-600 dark:group-hover:text-gray-300">•</span>
                    <span className="transition-colors duration-300 group-hover:text-black dark:group-hover:text-white">Human-supervised AI with clear safeguards and traceability for sensitive contexts</span>
                  </li>
                  <li className="flex items-start group cursor-pointer">
                    <span className="mr-3 text-gray-400 dark:text-gray-500 transition-colors duration-300 group-hover:text-gray-600 dark:group-hover:text-gray-300">•</span>
                    <span className="transition-colors duration-300 group-hover:text-black dark:group-hover:text-white">Observable pipelines with clear ownership and audit trails</span>
                  </li>
                  <li className="flex items-start group cursor-pointer">
                    <span className="mr-3 text-gray-400 dark:text-gray-500 transition-colors duration-300 group-hover:text-gray-600 dark:group-hover:text-gray-300">•</span>
                    <span className="transition-colors duration-300 group-hover:text-black dark:group-hover:text-white">GDPR and CCPA compliance with enterprise security standards</span>
                  </li>
                  <li className="flex items-start group cursor-pointer">
                    <span className="mr-3 text-gray-400 dark:text-gray-500 transition-colors duration-300 group-hover:text-gray-600 dark:group-hover:text-gray-300">•</span>
                    <span className="transition-colors duration-300 group-hover:text-black dark:group-hover:text-white">On-site operations in Islamabad and Dubai with local data residency options</span>
                  </li>
                </ul>

                <Link href="/contact" className="inline-block mt-8 text-sm font-medium text-black dark:text-white transition-all duration-300 hover:text-gray-600 dark:hover:text-gray-300 hover:translate-x-1">
                  View security standards →
                </Link>
              </div>

              <div className="relative group">
                <div className="rounded-2xl overflow-hidden">
                  <div className="relative w-full transform transition-all duration-500 group-hover:scale-105">
                    <Image
                      src="/images/security-bg.jpg"
                      alt="Enterprise Security"
                      width={600}
                      height={450}
                      className="object-contain w-full h-auto rounded-2xl transition-all duration-500 group-hover:brightness-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
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