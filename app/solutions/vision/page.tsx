"use client"

import { useRef, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardTitle } from '@/components/ui/card'

const relatedProducts = [
  {
    title: 'AdalBot',
    description: 'AI-powered support tool for trauma/abuse survivors via WhatsApp',
    image: '/images/adalbot-card.png',
    href: '/solutions/adalbot'
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
    href: '#'
  }
]

export default function VisionPage() {
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
            <span>AI Platform</span>
            <span>•</span>
            <span>Updated August 2024</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight text-black dark:text-white">
            Vision
          </h1>
        </section>

        {/* Main Heading and Description */}
        <section ref={addSectionRef} className="py-8 md:py-12 opacity-0 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-normal text-black dark:text-white mb-6 leading-tight text-center">
              AI-powered image generation platform that produces images that speak
            </h2>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8 leading-relaxed text-center">
              Transform your creative vision into compelling visual narratives with advanced AI technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center px-4">
              <Link href="https://vision.sirkup.ai/">
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
      </div>

      {/* Hero Image Section - Full Width and Centered */}
      <section ref={addSectionRef} className="py-12 md:py-16 opacity-0">
        <div className="w-full max-w-6xl mx-auto px-4 md:px-8">
          <div className="relative w-full h-64 md:h-80 lg:h-96 xl:h-[32rem] rounded-2xl overflow-hidden bg-gradient-to-br from-blue-50 to-purple-50 dark:from-zinc-900 dark:to-zinc-800 mx-auto">
            <Image
              src="/images/vision-page.png"
              alt="Vision AI Image Generation Platform"
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
              Vision revolutionizes the creative process by combining cutting-edge AI with intuitive design tools. Our platform understands context, emotion, and narrative to generate images that don't just look beautiful, they communicate your exact vision and tell compelling stories.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed text-center">
              Whether you're creating marketing materials, storytelling visuals, or artistic expressions, Vision transforms your ideas into powerful imagery that resonates with your audience and amplifies your message.
            </p>
          </div>
        </section>

        {/* Quote Section */}
        <section ref={addSectionRef} className="py-12 md:py-20 border-y border-gray-200 dark:border-zinc-800 opacity-0">
          <div className="max-w-3xl mx-auto text-center">
            <blockquote className="text-xl md:text-2xl font-light text-black dark:text-white italic mb-6">
              "Vision has transformed how we approach visual storytelling. The AI doesn't just generate images, it understands the narrative we want to convey and brings it to life in ways we never imagined."
            </blockquote>
            <cite className="text-sm text-gray-600 dark:text-gray-400">
              Sarah Chen, Creative Director at Narrative Studios
            </cite>
          </div>
        </section>

        {/* Features Section */}
        <section ref={addSectionRef} className="py-12 md:py-20 opacity-0 text-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-2xl md:text-3xl font-normal text-black dark:text-white mb-8 text-center">
                Intelligent Image Generation
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium text-black dark:text-white mb-2 text-center">
                    Contextual Understanding
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-center">
                    Our AI analyzes context, emotion, and narrative intent to generate images that perfectly align with your creative vision.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-black dark:text-white mb-2 text-center">
                    Style Consistency
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-center">
                    Maintain brand consistency across all your visual content with intelligent style matching and adaptation.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-black dark:text-white mb-2 text-center">
                    Iterative Refinement
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-center">
                    Fine-tune your results with intelligent feedback loops that learn from your preferences and improve over time.
                  </p>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-2xl md:text-3xl font-normal text-black dark:text-white mb-8 text-center">
                Creative Workflows
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium text-black dark:text-white mb-2 text-center">
                    Batch Processing
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-center">
                    Generate multiple variations and concepts simultaneously to explore different creative directions efficiently.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-black dark:text-white mb-2 text-center">
                    Template Library
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-center">
                    Access pre-built templates and styles for common use cases, or create your own custom templates.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-black dark:text-white mb-2 text-center">
                    Collaborative Tools
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-center">
                    Share, review, and iterate on visual concepts with team members in real-time collaborative workspaces.
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
              Why choose Vision?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-4 bg-black dark:bg-white rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white dark:text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-black dark:text-white mb-2">Lightning Fast</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Generate high-quality images in seconds, not hours. Accelerate your creative workflow.
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-4 bg-black dark:bg-white rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white dark:text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-black dark:text-white mb-2">Smart & Intuitive</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  AI that understands your creative intent and delivers exactly what you envision.
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-4 bg-black dark:bg-white rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white dark:text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-black dark:text-white mb-2">Enterprise Ready</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Secure, scalable, and compliant with enterprise-grade security and privacy controls.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section ref={addSectionRef} className="py-16 md:py-24 text-center opacity-0">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-normal text-black dark:text-white mb-4">
              Ready to transform your visual storytelling?
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              Join thousands of creators who are already using Vision to bring their ideas to life.
            </p>
            
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