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
    title: 'Callis',
    description: 'Automated cold calling agents that follow up leads and increase business',
    image: '/images/callis-card.png',
    href: '/solutions/callis'
  }
]

export default function RankingAIPage() {
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
            <span>Real Estate AI</span>
            <span>•</span>
            <span>Updated August 2024</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight text-black dark:text-white">
            RankingAI
          </h1>
        </section>

        {/* Main Heading and Description */}
        <section ref={addSectionRef} className="py-8 md:py-12 opacity-0 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-normal text-black dark:text-white mb-6 leading-tight text-center">
              Real estate platform with natural language search capabilities
            </h2>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8 leading-relaxed text-center">
              Transform property discovery with AI that understands exactly what buyers and renters are looking for.
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
              src="/images/rankingai-page.png"
              alt="RankingAI Real Estate Search Platform"
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
              RankingAI revolutionizes real estate search by understanding natural language queries and matching them with the perfect properties. Instead of filtering through endless dropdown menus, users can simply describe their ideal home and our AI will understand their preferences, lifestyle needs, and priorities.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed text-center">
              Whether someone is looking for "a cozy apartment near good schools with a pet-friendly policy" or "a modern condo with city views and walkable to coffee shops," RankingAI interprets these requests and delivers precisely matched results, making property discovery intuitive and efficient.
            </p>
          </div>
        </section>

        {/* Quote Section */}
        <section ref={addSectionRef} className="py-12 md:py-20 border-y border-gray-200 dark:border-zinc-800 opacity-0">
          <div className="max-w-3xl mx-auto text-center">
            <blockquote className="text-xl md:text-2xl font-light text-black dark:text-white italic mb-6">
              "RankingAI has completely transformed how our clients search for properties. They can now express their needs naturally, and the AI finds exactly what they're looking for. Our conversion rate has increased by 250%."
            </blockquote>
            <cite className="text-sm text-gray-600 dark:text-gray-400">
              Michael Torres, Principal Broker at Metro Properties
            </cite>
          </div>
        </section>

        {/* Features Section */}
        <section ref={addSectionRef} className="py-12 md:py-20 opacity-0 text-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-2xl md:text-3xl font-normal text-black dark:text-white mb-8 text-center">
                Intelligent Search
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium text-black dark:text-white mb-2 text-center">
                    Natural Language Processing
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-center">
                    Advanced AI that understands complex, conversational search queries and translates them into precise property criteria.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-black dark:text-white mb-2 text-center">
                    Semantic Understanding
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-center">
                    Goes beyond keywords to understand intent, context, and implicit preferences in user queries.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-black dark:text-white mb-2 text-center">
                    Contextual Ranking
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-center">
                    Intelligently ranks results based on multiple factors including preferences, market data, and lifestyle compatibility.
                  </p>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-2xl md:text-3xl font-normal text-black dark:text-white mb-8 text-center">
                Smart Recommendations
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium text-black dark:text-white mb-2 text-center">
                    Lifestyle Matching
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-center">
                    Analyzes user preferences and lifestyle needs to suggest properties that truly fit their way of life.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-black dark:text-white mb-2 text-center">
                    Neighborhood Insights</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-center">
                    Provides intelligent recommendations based on neighborhood characteristics, amenities, and community features.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-black dark:text-white mb-2 text-center">
                    Predictive Analytics</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-center">
                    Uses market trends and user behavior to predict and suggest properties users are likely to love.
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
              Why choose RankingAI?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-4 bg-black dark:bg-white rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white dark:text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-black dark:text-white mb-2">Intuitive Search</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Search using natural language instead of complex filters and dropdown menus.
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-4 bg-black dark:bg-white rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white dark:text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-black dark:text-white mb-2">Faster Discovery</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Find the perfect property 10x faster with AI-powered search and recommendations.
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-4 bg-black dark:bg-white rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white dark:text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-black dark:text-white mb-2">Perfect Matches</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  AI understands your true preferences to deliver highly relevant property suggestions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section ref={addSectionRef} className="py-12 md:py-20 opacity-0 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-normal text-black dark:text-white mb-12 text-center">
              Search examples
            </h2>
            <div className="space-y-8">
              <div className="bg-white dark:bg-zinc-900 p-6 rounded-2xl border border-gray-200 dark:border-zinc-800 text-center">
                <div className="mb-3">
                  <span className="text-sm text-gray-500 dark:text-gray-400">User Query:</span>
                </div>
                <p className="text-gray-700 dark:text-gray-300 italic mb-4">
                  "I need a pet-friendly apartment near good schools, with parking and a balcony, under $2500/month"
                </p>
                <div className="mb-3">
                  <span className="text-sm text-gray-500 dark:text-gray-400">AI Understanding:</span>
                </div>
                <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1 text-center list-none">
                  <li>• Pet policy: Allowed</li>
                  <li>• School ratings: 8+ nearby</li>
                  <li>• Amenities: Parking, balcony/patio</li>
                  <li>• Budget: Max $2,500/month</li>
                  <li>• Property type: Apartment/condo</li>
                </ul>
              </div>

              <div className="bg-white dark:bg-zinc-900 p-6 rounded-2xl border border-gray-200 dark:border-zinc-800 text-center">
                <div className="mb-3">
                  <span className="text-sm text-gray-500 dark:text-gray-400">User Query:</span>
                </div>
                <p className="text-gray-700 dark:text-gray-300 italic mb-4">
                  "Looking for a modern condo with city views, walkable to restaurants and coffee shops"
                </p>
                <div className="mb-3">
                  <span className="text-sm text-gray-500 dark:text-gray-400">AI Understanding:</span>
                </div>
                <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1 text-center list-none">
                  <li>• Architecture: Contemporary/modern</li>
                  <li>• Views: Urban/city skyline</li>
                  <li>• Walkability: High walk score</li>
                  <li>• Nearby: Dining, cafes</li>
                  <li>• Property type: Condominium</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Performance Metrics */}
        <section ref={addSectionRef} className="py-12 md:py-20 opacity-0">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-normal text-black dark:text-white mb-8">
              Proven impact
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className="text-3xl md:text-4xl font-light text-black dark:text-white mb-2">10x</div>
                <p className="text-gray-600 dark:text-gray-400">Faster property discovery</p>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-light text-black dark:text-white mb-2">250%</div>
                <p className="text-gray-600 dark:text-gray-400">Increase in lead conversion</p>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-light text-black dark:text-white mb-2">95%</div>
                <p className="text-gray-600 dark:text-gray-400">User satisfaction rate</p>
              </div>
            </div>
          </div>
        </section>

        {/* Integration Section */}
        <section ref={addSectionRef} className="py-12 md:py-20 opacity-0 text-center">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-normal text-black dark:text-white mb-8 text-center">
              Seamless integration
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-12 text-center">
              RankingAI integrates with your existing real estate platform in minutes, not months.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="text-center">
                <h3 className="text-lg font-medium text-black dark:text-white mb-4 text-center">For Real Estate Platforms</h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-400 list-none text-center">
                  <li>• Easy API integration</li>
                  <li>• Customizable search interface</li>
                  <li>• White-label solutions available</li>
                  <li>• Real-time property data sync</li>
                </ul>
              </div>
              <div className="text-center">
                <h3 className="text-lg font-medium text-black dark:text-white mb-4 text-center">For Real Estate Agencies</h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-400 list-none text-center">
                  <li>• MLS integration</li>
                  <li>• Lead capture and management</li>
                  <li>• Agent dashboard and analytics</li>
                  <li>• Mobile-responsive design</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section ref={addSectionRef} className="py-16 md:py-24 text-center opacity-0">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-normal text-black dark:text-white mb-4">
              Ready to revolutionize property search?
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              Join leading real estate platforms already using RankingAI to transform property discovery.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-black dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-100 px-8 py-3 rounded-full">
                Start free trial
              </Button>
              <Button variant="outline" className="border-gray-300 dark:border-gray-700 text-black dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800 px-8 py-3 rounded-full">
                Schedule demo
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