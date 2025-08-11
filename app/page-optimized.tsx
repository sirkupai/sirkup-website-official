"use client"

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { ArrowRight, FileText, MessageSquare, GraduationCap, Building2, Camera, Heart, Users, Briefcase } from 'lucide-react'
import dynamic from 'next/dynamic'
import { Suspense } from 'react'

// Lazy load heavy components
const OptimizedImage = dynamic(() => import('@/components/ui/optimized-image'), {
  loading: () => <div className="animate-pulse bg-gray-200 rounded-lg" />,
})

// Preload critical data
const systems = [
  {
    icon: FileText,
    title: "Content Intelligence Systems",
    description: "Plan → draft → review with brand memory and audit trails. Structure content ops and ship faster with higher editorial consistency.",
    metric: "8h → 30m per asset",
    status: "Internal pilot completed"
  },
  {
    icon: MessageSquare,
    title: "Conversational Intelligence for Sales & CX",
    description: "In development; actively tested live at NestHive. Trains on domain language to handle objections and surface next steps.",
    metric: "Live testing",
    status: "Active with partners"
  },
  {
    icon: GraduationCap,
    title: "AI Education Programs (SirkupAI Academy)",
    description: "Upskill teams in prompt operations, automation patterns, and ethical monetization. Practical, operator-led sessions.",
    metric: "Hands-on training",
    status: "Live workshops available"
  }
]

const industries = [
  { icon: Building2, title: "Real Estate & PropTech", description: "Unified insights, faster responses, cleaner pipeline hygiene" },
  { icon: Camera, title: "Media, Creators & Studios", description: "Structured pipelines, rapid iteration, editorial consistency" },
  { icon: Heart, title: "Civic & Social Impact (NGO/IGO)", description: "Human-supervised AI with clear safeguards and traceability" },
  { icon: GraduationCap, title: "Education & Workforce Development", description: "Practical programs, live ops examples, usable playbooks" },
  { icon: Briefcase, title: "SMB Services & Agencies", description: "Lean automations, clear dashboards, less swivel-chair work" }
]

// Optimize animation config
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.4 }
}

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section - Render immediately */}
      <section className="px-8 py-24 lg:py-32 max-w-6xl mx-auto">
        <motion.div
          {...fadeInUp}
          className="space-y-12"
        >
          <div className="space-y-8">
            <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 leading-[0.9] text-balance">
              Applied AI systems<br />
              that work in production
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-600 max-w-3xl leading-relaxed">
              We're an operator-led studio building intelligence layers for content, 
              conversations, and education. Less "AI wrapper," more production-grade 
              systems with clear audit trails and safeguards.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="bg-black hover:bg-gray-800 text-white px-8 py-4 text-base">
              Explore Solutions
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="border-gray-300 px-8 py-4 text-base">
              Read Case Studies
            </Button>
          </div>
        </motion.div>
      </section>

      {/* Systems Grid - Lazy load on scroll */}
      <Suspense fallback={<div className="h-96 animate-pulse bg-gray-50" />}>
        <section className="px-8 py-24 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.4 }}
              className="space-y-16"
            >
              <div className="space-y-4">
                <h2 className="text-4xl lg:text-6xl font-bold text-gray-900">
                  Systems We Build
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl">
                  Production-ready AI infrastructure designed for operators, by operators.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {systems.map((system, index) => (
                  <motion.div
                    key={system.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                  >
                    <Card className="h-full hover:shadow-lg transition-shadow duration-200 border-gray-200">
                      <CardContent className="p-8 space-y-6">
                        <div className="flex items-start justify-between">
                          <div className="p-3 rounded-xl bg-gray-100">
                            <system.icon className="h-6 w-6 text-gray-700" />
                          </div>
                          <span className="text-xs font-medium text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                            {system.status}
                          </span>
                        </div>
                        
                        <div className="space-y-3">
                          <h3 className="text-xl font-semibold text-gray-900">
                            {system.title}
                          </h3>
                          <p className="text-gray-600 leading-relaxed">
                            {system.description}
                          </p>
                        </div>
                        
                        <div className="pt-4 border-t border-gray-100">
                          <p className="text-sm font-medium text-gray-900">{system.metric}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      </Suspense>

      {/* Industries Section - Lazy load */}
      <Suspense fallback={<div className="h-96 animate-pulse" />}>
        <section className="px-8 py-24 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.4 }}
            className="space-y-16"
          >
            <div className="space-y-4">
              <h2 className="text-4xl lg:text-6xl font-bold text-gray-900">
                Industries We Serve
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl">
                Tailored AI solutions for specific industry challenges and workflows.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {industries.map((industry, index) => (
                <motion.div
                  key={industry.title}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05, duration: 0.3 }}
                  className="group cursor-pointer"
                >
                  <div className="p-6 rounded-2xl border border-gray-200 hover:border-gray-300 hover:shadow-md transition-all duration-200">
                    <div className="flex items-start space-x-4">
                      <div className="p-2 rounded-lg bg-gray-100 group-hover:bg-gray-200 transition-colors">
                        <industry.icon className="h-5 w-5 text-gray-700" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 mb-2">{industry.title}</h3>
                        <p className="text-sm text-gray-600">{industry.description}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>
      </Suspense>

      {/* CTA Section */}
      <section className="px-8 py-24 bg-black text-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="space-y-12 text-center"
          >
            <div className="space-y-6">
              <h2 className="text-4xl lg:text-6xl font-bold">
                Ready to Build?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Let's discuss how AI can transform your operations. 
                No fluff, just practical solutions that work.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="bg-white text-black hover:bg-gray-100 px-8 py-4 text-base">
                Schedule Discovery Call
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-black px-8 py-4 text-base">
                Contact Sales Team
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}