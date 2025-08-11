"use client"

import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { useEffect } from 'react'
import { 
  FileText, 
  MessageSquare, 
  Search, 
  GraduationCap, 
  Settings,
  ArrowRight,
  Shield,
  Eye,
  Zap
} from 'lucide-react'

const SolutionsPage = () => {
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

  const solutions = [
    {
      icon: FileText,
      title: "Content Intelligence Systems",
      description: "We structure content operations with AI-assisted planning, drafting, and review. Built to fit existing teams and tools.",
      outcomes: ["Faster asset cycles", "Higher editorial consistency", "Clear audit trails", "Better reuse of brand knowledge"],
      metric: "8h → 30m per asset",
      status: "Internal pilot completed",
      href: "/solutions/content-intelligence"
    },
    {
      icon: MessageSquare,
      title: "Conversational Intelligence for Sales & CX",
      description: "In development; actively tested live at NestHive. Trains on domain language to handle objections and surface next steps.",
      outcomes: ["Consistent terminology handling", "Tighter feedback loop", "Better objection handling", "Improved negotiations"],
      metric: "Live testing",
      status: "Active with partners",
      href: "/solutions/conversational-intelligence"
    },
    {
      icon: Search,
      title: "AI Search / Answer-Engine Optimization",
      description: "Get found by AI answer engines. Build entity graphs, content schemas, and source provenance for machine-readable knowledge.",
      outcomes: ["Reduced query friction", "Durable knowledge", "Better discoverability", "Source attribution"],
      metric: "Assessment available",
      status: "Ready for deployment",
      href: "/solutions/ai-search"
    },
    {
      icon: GraduationCap,
      title: "AI Education Programs (SirkupAI Academy)",
      description: "Upskill teams in prompt operations, automation patterns, and ethical monetization. Practical, operator-led sessions.",
      outcomes: ["Hands-on proficiency", "Repeatable playbooks", "Safer usage norms", "Team confidence"],
      metric: "Hands-on training",
      status: "Live workshops available",
      href: "/solutions/academy"
    },
    {
      icon: Settings,
      title: "Custom Automations & Integrations",
      description: "Connect CRMs, content stacks, and back-office tools into reliable AI-assisted flows. We design for resilience and oversight.",
      outcomes: ["Fewer manual steps", "Clear ownership", "Observable pipelines", "Measurable cycle-time reduction"],
      metric: "Discovery calls",
      status: "Custom implementations",
      href: "/solutions/custom-automations"
    }
  ]

  const features = [
    {
      icon: Shield,
      title: "Safeguards Built-In",
      description: "Human-in-the-loop controls, risk flags, and comprehensive logging from day one."
    },
    {
      icon: Eye,
      title: "Full Observability",
      description: "Monitor performance, track decisions, and understand system behavior in real-time."
    },
    {
      icon: Zap,
      title: "Production-Ready",
      description: "Built by operators who understand edge cases, load patterns, and real-world constraints."
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <div className="space-y-6">
                  <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[0.9]">
                    <span className="block">AI that actually works</span>
                    <span className="block text-gray-700">in production</span>
                  </h1>
                  <div className="text-2xl md:text-3xl font-bold text-gray-900">
                    No hype. Just systems that hold up.
                  </div>
                </div>
                <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
                  Operator-led with safeguards and observability from day one.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Big Bold Text - Systems That Hold Up */}
      <section className="px-4 sm:px-6 lg:px-8 py-24 sm:py-32 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-[0.85] tracking-tight">
              <span className="block text-gray-900">Systems that</span>
              <span className="block text-gray-700">hold up</span>
              <span className="block text-gray-500">in production</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 mt-8 max-w-4xl mx-auto">
              Built by operators who understand edge cases, load patterns, and real-world constraints.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="text-center h-full">
                    <CardContent className="p-8">
                      <feature.icon className="h-12 w-12 text-gray-900 mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Big Bold Text - Open Experimentation */}
      <section className="px-4 sm:px-6 lg:px-8 py-24 sm:py-32 bg-black text-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-[0.85] tracking-tight">
              <span className="block text-white">Open</span>
              <span className="block text-gray-400">experimentation</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 mt-8 max-w-4xl mx-auto">
              Ideas compete in the open. We share what worked and what didn't, both internally and with clients where feasible.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-[0.9] text-balance mb-8">
                Complete AI<br />
                Solutions Portfolio
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Each solution works independently or together. Designed for integrated AI workflows.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {solutions.map((solution, index) => (
                <motion.div
                  key={solution.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-xl transition-all duration-300 group">
                    <CardHeader>
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          <div className="p-2 rounded-lg bg-gray-100 group-hover:bg-gray-200 transition-colors">
                            <solution.icon className="h-6 w-6 text-gray-900" />
                          </div>
                          <div>
                            <div className="text-sm font-medium text-gray-900">{solution.metric}</div>
                            <div className="text-xs text-gray-600">{solution.status}</div>
                          </div>
                        </div>
                        <ArrowRight className="h-5 w-5 text-gray-600 group-hover:text-foreground group-hover:translate-x-1 transition-all" />
                      </div>
                      <CardTitle className="text-xl mb-3">{solution.title}</CardTitle>
                      <p className="text-gray-600">{solution.description}</p>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-medium mb-2">Key Outcomes:</h4>
                          <ul className="grid grid-cols-2 gap-1 text-sm text-gray-600">
                            {solution.outcomes.map((outcome, outcomeIndex) => (
                              <li key={outcomeIndex} className="flex items-center space-x-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-gray-900 flex-shrink-0" />
                                <span>{outcome}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <Button 
                          variant="outline" 
                          className="w-full group-hover:bg-gray-50 group-hover:border-gray-300 bg-white text-gray-900 border-gray-300"
                        >
                          Learn More
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Integration Architecture */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Image */}
          <div className="relative rounded-2xl h-64 mb-16 overflow-hidden">
            <Image
              src="https://images.pexels.com/photos/3861458/pexels-photo-3861458.jpeg"
              alt="AI Integration Architecture - Connected systems and data flow visualization"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/30"></div>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <div className="space-y-6">
                <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-[0.9]">
                  Built for Your<br />
                  <span className="text-gray-700">Existing Stack</span>
                </h2>
                <div className="text-xl md:text-2xl font-bold text-gray-900">
                  No need to tear up your toolchain.
                </div>
              </div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our systems integrate with your current tools and workflows.
              </p>
            </motion.div>

            <div className="bg-black text-white rounded-2xl p-12 text-center">
              <h3 className="text-2xl md:text-3xl font-bold mb-6">
                Common Integrations
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                <div>
                  <div className="font-semibold mb-2">Content</div>
                  <div className="text-sm opacity-90">CMS, Drive, DAM, Notion</div>
                </div>
                <div>
                  <div className="font-semibold mb-2">Communication</div>
                  <div className="text-sm opacity-90">Slack, Teams, Email</div>
                </div>
                <div>
                  <div className="font-semibold mb-2">Sales & CX</div>
                  <div className="text-sm opacity-90">CRM, Support, Analytics</div>
                </div>
                <div>
                  <div className="font-semibold mb-2">Data</div>
                  <div className="text-sm opacity-90">Sheets, Databases, APIs</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Ready to Start Building?
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Let's discuss your specific needs and design an AI system that works 
                  for your team and constraints.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-black hover:bg-gray-800 text-white">
                  <a href="/explore-solutions" className="flex items-center">
                    Explore All Solutions
                  </a>
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" size="lg" className="border-gray-300 hover:bg-gray-50 bg-white text-gray-900">
                  <a href="/resources" className="flex items-center">
                    View Resources
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default SolutionsPage