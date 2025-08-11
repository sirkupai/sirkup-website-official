"use client"

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { ArrowRight, FileText, MessageSquare, GraduationCap, Building2, Camera, Heart, Users, Briefcase } from 'lucide-react'
import Image from 'next/image'

export default function Home() {
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

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-12"
        >
          <div className="space-y-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-gray-900 leading-[0.9] text-balance">
              Democratizing AI for<br className="hidden sm:block" />
              <span className="text-gray-700">Sustainable Human</span><br className="hidden sm:block" />
              Development and Progress
            </h1>
            
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-3xl leading-relaxed">
              We build applied AI systems that hold up in production. Operator-led, R&D-first, 
              and focused on measurable outcomes across Pakistan and the UAE.
              <br className="hidden sm:block" />
              <span className="font-semibold text-gray-900">Education. Automation. Impact.</span>
            </p>
          </div>

          <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
            <Button size="lg" className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 text-base bg-black hover:bg-gray-800 text-white">
              <a href="/solutions" className="flex items-center justify-center">
                Explore Solutions
              </a>
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 text-base border-gray-300 hover:bg-gray-50 bg-white text-gray-900">
              <a href="/about" className="flex items-center justify-center">
                Learn More
              </a>
            </Button>
          </div>
        </motion.div>
      </section>


      {/* Image Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 max-w-6xl mx-auto">
        <div className="relative rounded-lg sm:rounded-2xl h-64 sm:h-80 lg:h-96 overflow-hidden">
          <Image
            src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg"
            alt="AI Systems in Production - Modern office with multiple screens showing data analytics"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
            <div className="text-center text-white">
              <h3 className="text-2xl font-bold mb-2">AI Systems in Production</h3>
              <p className="text-lg opacity-90">Real-world implementations that deliver results</p>
            </div>
          </div>
        </div>
      </section>


      {/* Three Flagship Systems */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 sm:py-24 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-16"
        >
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-[0.9] text-balance">
                Production<br />
                <span className="text-gray-700">Ready</span>
              </h2>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Each system is built with safeguards, observability, and real-world constraints in mind.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {systems.map((system, index) => (
              <motion.div
                key={system.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 group cursor-pointer border-gray-200 bg-white">
                  <CardContent className="p-8 bg-white">
                    <div className="space-y-6">
                      <div className="flex items-center space-x-3">
                        <div className="p-3 rounded-xl bg-gray-100 group-hover:bg-gray-200 transition-colors">
                          <system.icon className="h-6 w-6 text-gray-700" />
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-gray-900">{system.metric}</div>
                          <div className="text-xs text-gray-600">{system.status}</div>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <h3 className="text-xl font-semibold text-gray-900">{system.title}</h3>
                        <p className="text-gray-600 leading-relaxed">{system.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Proof Strip */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 text-center"
          >
            <div>
              <div className="text-4xl font-bold text-gray-900 mb-2">8h → 30m</div>
              <div className="text-gray-600 font-medium">Content asset creation time</div>
              <div className="text-sm text-gray-600 mt-1">Internal pilot, July 2025</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-gray-900 mb-2">Live Testing</div>
              <div className="text-gray-600 font-medium">Conversational Intelligence</div>
              <div className="text-sm text-gray-600 mt-1">Active with partners</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-gray-900 mb-2">5+ Industries</div>
              <div className="text-gray-600 font-medium">Real Estate, Media, Civic, Education</div>
              <div className="text-sm text-gray-600 mt-1">Production deployments</div>
            </div>
          </motion.div>
        </div>
      </section>



      {/* Big Bold Text - No Black Boxes (Single Statement) */}
      <section className="px-4 sm:px-6 lg:px-8 py-32 sm:py-40">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.0 }}
            className="text-center"
          >
            <h2 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black leading-[0.8] tracking-tighter text-gray-900">
              No black boxes.
            </h2>
            <p className="text-2xl sm:text-3xl text-gray-500 mt-12 font-light max-w-5xl mx-auto leading-relaxed">
              Just tested workflows that shorten cycles and improve decisions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Industries */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 sm:py-24 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-16"
        >
          <div className="text-center space-y-8">
            <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-[0.9] text-balance">
              Built for Your<br />
              Industry
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We build AI systems that understand your specific context, constraints, and success metrics.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 group cursor-pointer border-gray-200 bg-white">
                  <CardContent className="p-6 bg-white">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="p-2 rounded-lg bg-gray-100 group-hover:bg-gray-200 transition-colors">
                        <industry.icon className="h-6 w-6 text-gray-700" />
                      </div>
                      <h3 className="font-semibold text-gray-900">{industry.title}</h3>
                    </div>
                    <p className="text-gray-600">{industry.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Image Section 2 */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 max-w-6xl mx-auto">
        <div className="relative rounded-2xl h-96 overflow-hidden">
          <Image
            src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg"
            alt="Team Collaboration - Diverse team working together on AI projects"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <div className="text-center text-white">
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4 leading-[0.9]">
                OPERATOR-LED<br />
                <span className="text-gray-300">R&D-FIRST</span>
              </h3>
              <p className="text-lg sm:text-xl opacity-90 max-w-2xl mx-auto">
                Building AI systems with real-world expertise and production constraints in mind
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 sm:py-24 bg-black text-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div className="space-y-8">
              <h2 className="text-4xl lg:text-6xl font-bold leading-[0.9] text-balance">
                Ready to Build<br />
                the Future?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl">
                Whether you're looking to implement AI systems or join our team, 
                we'd love to hear from you.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
              <Button size="lg" className="w-full sm:w-auto bg-white text-black hover:bg-gray-100 px-6 sm:px-8 py-3 sm:py-4 text-base">
                <a href="/contact-sales" className="flex items-center justify-center">
                  Start a Pilot
                </a>
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="w-full sm:w-auto border border-white text-white hover:bg-white hover:text-black px-6 sm:px-8 py-3 sm:py-4 text-base bg-transparent">
                <a href="/careers" className="flex items-center justify-center">
                  View Open Roles
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}