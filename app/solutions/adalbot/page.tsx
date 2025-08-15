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
    title: 'Callis',
    description: 'Automated cold calling agents that follow up leads and increase business',
    image: '/images/callis-card.png',
    href: '/solutions/callis'
  },
  {
    title: 'RankingAI',
    description: 'Real estate platform with natural language search capabilities',
    image: '/images/rankingai-card.png',
    href: '/solutions/rankingai'
  }
]

export default function AdalBotPage() {
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
            <span>Healthcare AI</span>
            <span>•</span>
            <span>Updated August 2024</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight text-black dark:text-white">
            AdalBot
          </h1>
        </section>

        {/* Main Heading and Description */}
        <section ref={addSectionRef} className="py-8 md:py-12 opacity-0 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-normal text-black dark:text-white mb-6 leading-tight">
              AI-powered support tool for trauma and abuse survivors via WhatsApp
            </h2>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
              Providing compassionate, accessible, and confidential assistance when it's needed most.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button className="bg-black dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-100 px-8 py-3 rounded-full">
                  Get started →
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" className="border-gray-300 dark:border-gray-700 text-black dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800 px-8 py-3 rounded-full">
                  Contact sales
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>

      {/* Hero Image Section - Full Width and Centered */}
      <section ref={addSectionRef} className="py-12 md:py-16 opacity-0">
        <div className="w-full max-w-6xl mx-auto px-4 md:px-8">
          <div className="relative w-full h-64 md:h-80 lg:h-96 xl:h-[32rem] rounded-2xl overflow-hidden bg-gradient-to-br from-blue-50 to-purple-50 dark:from-zinc-900 dark:to-zinc-800 mx-auto">
            <Image
              src="/images/adalbot-page.png"
              alt="AdalBot WhatsApp Support Interface"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 md:px-8">

        {/* Description Section */}
        <section ref={addSectionRef} className="py-12 md:py-20 opacity-0">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
              AdalBot represents a breakthrough in crisis support technology, delivering empathetic AI assistance through the familiar WhatsApp platform. Our advanced conversational AI is specifically trained to recognize signs of distress, provide immediate emotional support, and connect users with appropriate resources.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Built with trauma-informed design principles and validated by mental health professionals, AdalBot ensures that survivors have access to support 24/7, breaking down barriers to help and providing a safe, judgment-free space for healing.
            </p>
          </div>
        </section>

        {/* Quote Section */}
        <section ref={addSectionRef} className="py-12 md:py-20 border-y border-gray-200 dark:border-zinc-800 opacity-0">
          <div className="max-w-3xl mx-auto text-center">
            <blockquote className="text-xl md:text-2xl font-light text-black dark:text-white italic mb-6">
              "AdalBot has been a lifeline for our organization. The immediate availability and compassionate responses have helped countless survivors take their first steps toward healing and recovery."
            </blockquote>
            <cite className="text-sm text-gray-600 dark:text-gray-400">
              Dr. Maria Rodriguez, Director of Crisis Support Services
            </cite>
          </div>
        </section>

        {/* Features Section */}
        <section ref={addSectionRef} className="py-12 md:py-20 opacity-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-2xl md:text-3xl font-normal text-black dark:text-white mb-8">
                Compassionate AI Support
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium text-black dark:text-white mb-2">
                    Trauma-Informed Responses
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Every interaction is guided by trauma-informed care principles, ensuring responses are sensitive, validating, and empowering.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-black dark:text-white mb-2">
                    Crisis Detection
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Advanced natural language processing identifies urgent situations and can immediately connect users with human counselors.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-black dark:text-white mb-2">
                    Multi-Language Support
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Available in multiple languages to ensure accessibility for diverse communities and cultural backgrounds.
                  </p>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-2xl md:text-3xl font-normal text-black dark:text-white mb-8">
                Privacy & Security
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium text-black dark:text-white mb-2">
                    End-to-End Encryption
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    All conversations are fully encrypted, ensuring complete privacy and confidentiality for sensitive discussions.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-black dark:text-white mb-2">
                    Anonymous Access
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Users can access support without providing personal information, removing barriers to seeking help.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-black dark:text-white mb-2">
                    HIPAA Compliance
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Built to meet healthcare privacy standards and regulatory requirements for sensitive health information.
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
              Why choose AdalBot?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-4 bg-black dark:bg-white rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white dark:text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-black dark:text-white mb-2">24/7 Availability</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Support is available around the clock, providing immediate assistance when crisis strikes.
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-4 bg-black dark:bg-white rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white dark:text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-black dark:text-white mb-2">Empathetic AI</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  AI trained specifically for trauma support, providing compassionate and appropriate responses.
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-4 bg-black dark:bg-white rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white dark:text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-black dark:text-white mb-2">Seamless Handoff</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Intelligent escalation to human counselors when professional intervention is needed.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Impact Section */}
        <section ref={addSectionRef} className="py-12 md:py-20 opacity-0">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-normal text-black dark:text-white mb-8">
              Making a difference
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className="text-3xl md:text-4xl font-light text-black dark:text-white mb-2">10k+</div>
                <p className="text-gray-600 dark:text-gray-400">Conversations handled</p>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-light text-black dark:text-white mb-2">98%</div>
                <p className="text-gray-600 dark:text-gray-400">User satisfaction rate</p>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-light text-black dark:text-white mb-2">24/7</div>
                <p className="text-gray-600 dark:text-gray-400">Support availability</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section ref={addSectionRef} className="py-16 md:py-24 text-center opacity-0">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-normal text-black dark:text-white mb-4">
              Ready to provide life-changing support?
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              Join organizations already using AdalBot to make mental health support more accessible.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/solutions">
                <Button className="bg-black dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-100 px-8 py-3 rounded-full">
                  Learn more
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" className="border-gray-300 dark:border-gray-700 text-black dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800 px-8 py-3 rounded-full">
                  Contact us
                </Button>
              </Link>
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