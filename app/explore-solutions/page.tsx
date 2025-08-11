"use client"

import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import Image from 'next/image'
import { 
  FileText, 
  MessageSquare, 
  Search, 
  GraduationCap, 
  Settings,
  ArrowRight,
  Shield,
  Eye,
  Zap,
  CheckCircle,
  Clock,
  Users,
  Target,
  Building2,
  Camera,
  Heart,
  Briefcase
} from 'lucide-react'

export default function ExploreSolutionsPage() {
  const solutions = [
    {
      icon: FileText,
      title: "Content Intelligence Systems",
      description: "Transform your content operations with AI-assisted planning, drafting, and review workflows that maintain brand consistency.",
      features: ["Brand memory integration", "Automated content planning", "Quality assurance workflows", "Multi-format output"],
      metrics: "8h → 30m per asset",
      status: "Production ready",
      industries: ["Media", "Marketing", "Education"],
      pricing: "Starting at $15k/month"
    },
    {
      icon: MessageSquare,
      title: "Conversational Intelligence",
      description: "AI-powered sales and customer experience systems that understand your domain language and handle complex interactions.",
      features: ["Domain-specific training", "Objection handling", "Lead qualification", "CRM integration"],
      metrics: "Live testing at partners",
      status: "Active development",
      industries: ["Real Estate", "SaaS", "Services"],
      pricing: "Custom pricing"
    },
    {
      icon: Search,
      title: "AI Search & Answer Engine Optimization",
      description: "Optimize your content for AI-powered search engines and answer systems with structured knowledge graphs.",
      features: ["Entity graph building", "Content schema optimization", "Source attribution", "Semantic markup"],
      metrics: "Improved discoverability",
      status: "Ready for deployment",
      industries: ["E-commerce", "Publishing", "Professional Services"],
      pricing: "Project-based"
    },
    {
      icon: GraduationCap,
      title: "SirkupAI Academy",
      description: "Comprehensive AI education programs that upskill your team in prompt engineering, automation, and ethical AI practices.",
      features: ["Hands-on workshops", "Custom curricula", "Certification programs", "Ongoing support"],
      metrics: "Team proficiency boost",
      status: "Live workshops available",
      industries: ["All industries", "Corporate training", "Educational institutions"],
      pricing: "Per participant"
    },
    {
      icon: Settings,
      title: "Custom Automations & Integrations",
      description: "Tailored AI systems that connect your existing tools into intelligent, automated workflows with human oversight.",
      features: ["Tool integration", "Workflow automation", "Custom dashboards", "Performance monitoring"],
      metrics: "Cycle time reduction",
      status: "Custom implementations",
      industries: ["Any industry", "Operations-focused", "Data-driven organizations"],
      pricing: "Project-based"
    }
  ]

  const industries = [
    {
      icon: Building2,
      title: "Real Estate & PropTech",
      description: "Unified insights, faster responses, cleaner pipeline hygiene",
      solutions: ["Content Intelligence", "Conversational Intelligence", "Custom Automations"]
    },
    {
      icon: Camera,
      title: "Media, Creators & Studios",
      description: "Structured pipelines, rapid iteration, editorial consistency",
      solutions: ["Content Intelligence", "AI Search", "Academy"]
    },
    {
      icon: Heart,
      title: "Civic & Social Impact",
      description: "Human-supervised AI with clear safeguards and traceability",
      solutions: ["Academy", "Custom Automations", "Conversational Intelligence"]
    },
    {
      icon: GraduationCap,
      title: "Education & Workforce Development",
      description: "Practical programs, live ops examples, usable playbooks",
      solutions: ["Academy", "Content Intelligence", "Custom Automations"]
    },
    {
      icon: Briefcase,
      title: "SMB Services & Agencies",
      description: "Lean automations, clear dashboards, less swivel-chair work",
      solutions: ["Custom Automations", "Content Intelligence", "Academy"]
    }
  ]

  const features = [
    {
      icon: Shield,
      title: "Production-Ready Safeguards",
      description: "Built-in safety measures, human oversight, and comprehensive audit trails"
    },
    {
      icon: Eye,
      title: "Full Observability",
      description: "Monitor performance, track decisions, and understand system behavior in real-time"
    },
    {
      icon: Zap,
      title: "Operator-Designed",
      description: "Built by operators who understand edge cases, load patterns, and real-world constraints"
    },
    {
      icon: Target,
      title: "Measurable Outcomes",
      description: "Clear metrics and KPIs to track ROI and system performance"
    }
  ]

  const process = [
    {
      step: "1",
      title: "Discovery & Assessment",
      description: "We analyze your current workflows, tools, and constraints to identify AI opportunities"
    },
    {
      step: "2",
      title: "Solution Design",
      description: "Custom AI system architecture tailored to your specific needs and existing infrastructure"
    },
    {
      step: "3",
      title: "Pilot Implementation",
      description: "Start with a focused pilot program to validate approach and demonstrate value"
    },
    {
      step: "4",
      title: "Scale & Optimize",
      description: "Expand successful pilots across your organization with ongoing optimization"
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
              Explore Our<br />
              <span className="text-gray-700">AI Solutions</span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-600 max-w-3xl leading-relaxed">
              Production-ready AI systems designed by operators, for operators. 
              Each solution is built with safeguards, observability, and real-world constraints in mind.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="bg-black hover:bg-gray-800 text-white px-8 py-4 text-base">
              <a href="/contact-sales" className="flex items-center">
                Start a Pilot
              </a>
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="border-gray-300 hover:bg-gray-50 px-8 py-4 text-base">
              <a href="/request-discovery-call" className="flex items-center">
                Request Discovery Call
              </a>
            </Button>
          </div>
        </motion.div>
      </section>

      {/* Hero Image */}
      <section className="px-8 py-16 max-w-6xl mx-auto">
        <div className="relative rounded-2xl h-96 overflow-hidden">
          <Image
            src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg"
            alt="AI Solutions Portfolio - Advanced technology systems and data visualization"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
            <div className="text-center text-white">
              <h3 className="text-2xl font-bold mb-2">Complete AI Solutions Portfolio</h3>
              <p className="text-lg opacity-90">Production-ready systems for every business need</p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="px-8 py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-16"
          >
            <div className="space-y-8 text-center">
              <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-[0.9] text-balance">
                Why Choose<br />
                Our Solutions
              </h2>
              <p className="text-xl text-gray-600">
                Built by operators who understand the difference between demos and production systems.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="h-full text-center hover:shadow-lg transition-shadow border-gray-200">
                    <CardContent className="p-6">
                      <feature.icon className="h-8 w-8 text-gray-900 mx-auto mb-4" />
                      <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
                      <p className="text-gray-600 text-sm">{feature.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="px-8 py-24 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-16"
        >
          <div className="space-y-8">
            <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-[0.9] text-balance">
              Complete AI<br />
              Solutions Portfolio
            </h2>
            <p className="text-xl text-gray-600">
              Each solution works independently or as part of an integrated AI workflow.
            </p>
          </div>

          <div className="space-y-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="hover:shadow-xl transition-all duration-300 group border-gray-200">
                  <CardContent className="p-8">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                      {/* Main Info */}
                      <div className="lg:col-span-2 space-y-6">
                        <div className="flex items-start space-x-4">
                          <div className="p-3 rounded-xl bg-gray-100 group-hover:bg-gray-200 transition-colors">
                            <solution.icon className="h-6 w-6 text-gray-700" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center space-x-3 mb-2">
                              <h3 className="text-2xl font-bold text-gray-900">{solution.title}</h3>
                              <Badge variant="secondary" className="bg-gray-100 text-gray-700">
                                {solution.status}
                              </Badge>
                            </div>
                            <p className="text-gray-600 mb-4">{solution.description}</p>
                            <div className="text-lg font-semibold text-gray-900 mb-2">{solution.metrics}</div>
                          </div>
                        </div>

                        {/* Features */}
                        <div>
                          <h4 className="font-medium text-gray-900 mb-3">Key Features:</h4>
                          <div className="grid grid-cols-2 gap-2">
                            {solution.features.map((feature, featureIndex) => (
                              <div key={featureIndex} className="flex items-center space-x-2">
                                <CheckCircle className="h-4 w-4 text-gray-600 flex-shrink-0" />
                                <span className="text-gray-600 text-sm">{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Industries */}
                        <div>
                          <h4 className="font-medium text-gray-900 mb-2">Best For:</h4>
                          <div className="flex flex-wrap gap-2">
                            {solution.industries.map((industry) => (
                              <Badge key={industry} variant="outline" className="text-xs">
                                {industry}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* CTA Section */}
                      <div className="space-y-4">
                        <div className="text-2xl font-bold text-gray-900">{solution.pricing}</div>
                        <div className="space-y-3">
                          <Button className="w-full bg-black hover:bg-gray-800 text-white">
                            <a href="/contact-sales" className="flex items-center w-full justify-center">
                              Get Quote
                            </a>
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                          <Button variant="outline" className="w-full border-gray-300 hover:bg-gray-50">
                            <a href="/request-discovery-call" className="flex items-center w-full justify-center">
                              Learn More
                            </a>
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

      {/* Industries */}
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
                Solutions by<br />
                Industry
              </h2>
              <p className="text-xl text-gray-600">
                Tailored AI implementations for specific industry challenges and workflows.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {industries.map((industry, index) => (
                <motion.div
                  key={industry.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow border-gray-200">
                    <CardHeader>
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="p-2 rounded-lg bg-gray-100">
                          <industry.icon className="h-6 w-6 text-gray-700" />
                        </div>
                        <CardTitle className="text-lg">{industry.title}</CardTitle>
                      </div>
                      <p className="text-gray-600">{industry.description}</p>
                    </CardHeader>
                    <CardContent>
                      <div>
                        <h4 className="font-medium text-gray-900 mb-2">Recommended Solutions:</h4>
                        <div className="flex flex-wrap gap-1">
                          {industry.solutions.map((solution) => (
                            <Badge key={solution} variant="secondary" className="bg-gray-100 text-gray-700 text-xs">
                              {solution}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="px-8 py-24 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-16"
        >
          <div className="space-y-8 text-center">
            <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-[0.9] text-balance">
              Implementation<br />
              Process
            </h2>
            <p className="text-xl text-gray-600">
              A proven methodology for deploying AI systems that deliver results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full text-center hover:shadow-lg transition-shadow border-gray-200">
                  <CardHeader>
                    <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                      {step.step}
                    </div>
                    <CardTitle className="text-lg">{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{step.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* CTA */}
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
                Ready to Transform<br />
                Your Operations?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl leading-relaxed">
                Choose the AI solutions that fit your needs and constraints. 
                Start with a pilot program and scale what works.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <Target className="h-8 w-8 text-white mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Focused Pilots</h3>
                <p className="text-gray-300 text-sm">Start small, prove value</p>
              </div>
              <div>
                <Shield className="h-8 w-8 text-white mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Production Ready</h3>
                <p className="text-gray-300 text-sm">Built for real-world use</p>
              </div>
              <div>
                <Users className="h-8 w-8 text-white mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Expert Support</h3>
                <p className="text-gray-300 text-sm">Ongoing optimization</p>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="bg-white text-black hover:bg-gray-100 px-8 py-4 text-base">
                <a href="/contact-sales" className="flex items-center">
                  Start a Pilot
                </a>
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="border border-white text-white hover:bg-white hover:text-black px-8 py-4 text-base">
                <a href="/request-discovery-call" className="flex items-center">
                  Request Discovery Call
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}