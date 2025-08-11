"use client"

import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import Image from 'next/image'
import { useEffect } from 'react'
import { 
  ArrowRight,
  BookOpen,
  Video,
  FileText,
  Download,
  ExternalLink,
  Clock,
  Users,
  Star,
  Lightbulb,
  Code,
  Zap,
  Shield,
  Target,
  TrendingUp
} from 'lucide-react'

export default function ResourcesPage() {
  // Fallback to ensure content visibility if animations fail
  useEffect(() => {
    const timer = setTimeout(() => {
      const hiddenElements = document.querySelectorAll('div[style*="opacity: 0"]')
      hiddenElements.forEach(el => {
        if (el instanceof HTMLElement) {
          el.style.opacity = '1'
          el.style.transform = 'translateY(0px) translateX(0px)'
        }
      })
    }, 2000)
    
    return () => clearTimeout(timer)
  }, [])

  const resourceCategories = [
    {
      icon: BookOpen,
      title: "Guides & Playbooks",
      description: "Step-by-step guides for implementing AI systems",
      count: "12 resources"
    },
    {
      icon: Video,
      title: "Video Tutorials",
      description: "Hands-on video content and workshops",
      count: "8 videos"
    },
    {
      icon: FileText,
      title: "Case Studies",
      description: "Real-world implementations and results",
      count: "6 studies"
    },
    {
      icon: Code,
      title: "Templates & Tools",
      description: "Ready-to-use templates and automation scripts",
      count: "15 templates"
    }
  ]

  const featuredResources = [
    {
      type: "Guide",
      title: "The Operator's Guide to AI Implementation",
      description: "A comprehensive 50-page guide covering everything from strategy to deployment. Learn how to build AI systems that actually work in production.",
      readTime: "45 min read",
      downloads: "2.3k",
      featured: true,
      category: "Strategy",
      icon: BookOpen
    },
    {
      type: "Video",
      title: "Building Content Intelligence Systems",
      description: "Watch our team build a complete content intelligence system from scratch. Includes code, architecture decisions, and lessons learned.",
      readTime: "32 min watch",
      downloads: "1.8k",
      featured: true,
      category: "Technical",
      icon: Video
    },
    {
      type: "Case Study",
      title: "Real Estate AI: 8h → 30m Content Cycles",
      description: "How we helped a PropTech company reduce content creation time by 94% while maintaining brand consistency and quality.",
      readTime: "12 min read",
      downloads: "1.5k",
      featured: true,
      category: "Case Study",
      icon: FileText
    }
  ]

  const allResources = [
    {
      type: "Template",
      title: "AI Prompt Library for Content Creation",
      description: "100+ tested prompts for content planning, drafting, and review workflows.",
      readTime: "Quick reference",
      category: "Content",
      icon: Code
    },
    {
      type: "Guide",
      title: "Conversational AI Safety Checklist",
      description: "Essential safeguards and testing protocols for customer-facing AI systems.",
      readTime: "15 min read",
      category: "Safety",
      icon: Shield
    },
    {
      type: "Video",
      title: "API Integration Workshop",
      description: "Live workshop on connecting AI systems to your existing tools and workflows.",
      readTime: "45 min watch",
      category: "Technical",
      icon: Video
    },
    {
      type: "Case Study",
      title: "Media Company Automation Success",
      description: "How a digital media company automated 70% of their content operations.",
      readTime: "10 min read",
      category: "Case Study",
      icon: FileText
    },
    {
      type: "Template",
      title: "AI System Monitoring Dashboard",
      description: "Pre-built dashboard templates for tracking AI system performance and reliability.",
      readTime: "Setup guide",
      category: "Operations",
      icon: TrendingUp
    },
    {
      type: "Guide",
      title: "ROI Measurement for AI Projects",
      description: "Framework for measuring and communicating the business impact of AI implementations.",
      readTime: "20 min read",
      category: "Strategy",
      icon: Target
    }
  ]

  const workshops = [
    {
      title: "AI for Operators Bootcamp",
      description: "3-day intensive workshop covering AI strategy, implementation, and operations.",
      duration: "3 days",
      format: "In-person + Virtual",
      nextDate: "March 15-17, 2025",
      spots: "12 spots left"
    },
    {
      title: "Content Intelligence Workshop",
      description: "Hands-on session building content workflows with AI assistance.",
      duration: "4 hours",
      format: "Virtual",
      nextDate: "February 28, 2025",
      spots: "8 spots left"
    },
    {
      title: "Custom AI Implementation Clinic",
      description: "Work directly with our team to design AI systems for your specific needs.",
      duration: "2 hours",
      format: "1-on-1 Virtual",
      nextDate: "Rolling basis",
      spots: "Available"
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="px-8 py-24 lg:py-32 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-12"
        >
          <div className="space-y-8">
            <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 leading-[0.9] text-balance">
              Resources &<br />
              <span className="text-gray-700">Learning Hub</span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-600 max-w-3xl leading-relaxed">
              Practical guides, templates, and workshops to help you build 
              and deploy AI systems that work in the real world.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Big Bold Text - Real World AI */}
      <section className="px-4 sm:px-6 lg:px-8 py-24 sm:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-[0.85] tracking-tight text-gray-900">
              Real-world<br />
              <span className="text-gray-700">AI that</span><br />
              <span className="text-gray-500">works</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 mt-8 max-w-4xl mx-auto">
              Practical guides, templates, and workshops from operators who've shipped AI systems in production.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Resource Categories */}
      <section className="px-8 py-16 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {resourceCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300 group cursor-pointer border-gray-200">
                <CardContent className="p-6 text-center">
                  <div className="p-3 rounded-xl bg-gray-100 group-hover:bg-gray-200 transition-colors w-fit mx-auto mb-4">
                    <category.icon className="h-6 w-6 text-gray-700" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{category.title}</h3>
                  <p className="text-gray-600 text-sm mb-3">{category.description}</p>
                  <Badge variant="secondary" className="bg-gray-100 text-gray-700 text-xs">
                    {category.count}
                  </Badge>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Featured Resources */}
      <section className="px-8 py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          {/* Hero Image */}
          <div className="relative rounded-2xl h-64 mb-16 overflow-hidden">
            <Image
              src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg"
              alt="Learning Resources - Books, guides, and educational materials"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 1200px"
            />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
              <div className="text-center text-white">
                <h3 className="text-3xl font-bold mb-2">Knowledge Hub</h3>
                <p className="text-xl opacity-90">Practical resources for AI implementation</p>
              </div>
            </div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-16"
          >
            <div className="space-y-8">
              <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-[0.9] text-balance">
                Featured<br />
                Resources
              </h2>
              <p className="text-xl text-gray-600">
                Our most popular and comprehensive resources for AI implementation.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {featuredResources.map((resource, index) => (
                <motion.div
                  key={resource.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-xl transition-all duration-300 group border-gray-200">
                    <CardHeader>
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          <div className="p-2 rounded-lg bg-gray-100 group-hover:bg-gray-200 transition-colors">
                            <resource.icon className="h-5 w-5 text-gray-700" />
                          </div>
                          <div>
                            <Badge variant="secondary" className="bg-gray-100 text-gray-700 text-xs mb-1">
                              {resource.type}
                            </Badge>
                            <div className="flex items-center space-x-2 text-xs text-gray-600">
                              <Clock className="h-3 w-3" />
                              <span>{resource.readTime}</span>
                              <span>•</span>
                              <Download className="h-3 w-3" />
                              <span>{resource.downloads}</span>
                            </div>
                          </div>
                        </div>
                        {resource.featured && (
                          <Star className="h-4 w-4 text-gray-700 fill-current" />
                        )}
                      </div>
                      <CardTitle className="text-lg mb-3 group-hover:text-gray-700 transition-colors">
                        {resource.title}
                      </CardTitle>
                      <p className="text-gray-600 text-sm">{resource.description}</p>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between">
                        <Badge variant="outline" className="text-xs">
                          {resource.category}
                        </Badge>
                        <Button variant="ghost" size="sm" className="text-gray-600 hover:text-gray-700">
                          Access Resource
                          <ArrowRight className="ml-1 h-3 w-3" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* All Resources */}
      <section className="px-8 py-24 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-16"
        >
          <div className="space-y-8">
            <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-[0.9] text-balance">
              Complete Resource<br />
              Library
            </h2>
            <p className="text-xl text-gray-600 text-center">
              Browse our complete library of guides, templates, and tools.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {allResources.map((resource, index) => (
              <motion.div
                key={resource.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 group cursor-pointer border-gray-200">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="p-2 rounded-lg bg-gray-100 group-hover:bg-gray-200 transition-colors flex-shrink-0">
                        <resource.icon className="h-5 w-5 text-gray-700" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center space-x-2 mb-2">
                          <Badge variant="secondary" className="bg-gray-100 text-gray-700 text-xs">
                            {resource.type}
                          </Badge>
                          <Badge variant="outline" className="text-xs">
                            {resource.category}
                          </Badge>
                        </div>
                        <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-gray-700 transition-colors">
                          {resource.title}
                        </h3>
                        <p className="text-gray-600 text-sm mb-3">{resource.description}</p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-1 text-xs text-gray-600">
                            <Clock className="h-3 w-3" />
                            <span>{resource.readTime}</span>
                          </div>
                          <Button variant="ghost" size="sm" className="text-gray-600 hover:text-gray-700 p-0">
                            <ExternalLink className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Workshops */}
      <section className="px-8 py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-16"
          >
            <div className="space-y-8">
              <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-[0.9] text-balance">
                Live Workshops &<br />
                Training
              </h2>
              <p className="text-xl text-gray-600">
                Hands-on learning with our team. Build real systems, not just theory.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {workshops.map((workshop, index) => (
                <motion.div
                  key={workshop.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow border-gray-200">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="secondary" className="bg-gray-100 text-gray-700 text-xs">
                          {workshop.spots}
                        </Badge>
                        <div className="text-xs text-gray-600">{workshop.duration}</div>
                      </div>
                      <CardTitle className="text-lg mb-3">{workshop.title}</CardTitle>
                      <p className="text-gray-600 text-sm">{workshop.description}</p>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center justify-between">
                          <span className="text-gray-600">Format:</span>
                          <span className="text-gray-900">{workshop.format}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-gray-600">Next Date:</span>
                          <span className="text-gray-900">{workshop.nextDate}</span>
                        </div>
                      </div>
                      <Button className="w-full bg-black hover:bg-gray-800 text-white">
                        Register Now
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="px-8 py-24 bg-black text-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div className="space-y-8">
              <h2 className="text-4xl lg:text-6xl font-bold leading-[0.9] text-balance">
                Stay Updated<br />
                with New Resources
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl leading-relaxed">
                Get notified when we publish new guides, case studies, and workshops. 
                No spam, just practical AI insights for operators.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-white text-black hover:bg-gray-100 px-8 py-4 text-base">
                Subscribe to Updates
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="border border-white text-white hover:bg-white hover:text-black px-8 py-4 text-base bg-transparent">
                Browse All Resources
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}