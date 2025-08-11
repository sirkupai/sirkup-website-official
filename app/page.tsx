"use client"

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { ArrowRight, FileText, MessageSquare, GraduationCap, Building2, Camera, Heart, Users, Briefcase, Target, Eye, Clock, MapPin, Globe, CheckCircle, Star, Quote } from 'lucide-react'
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
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-gray-900 leading-tight">
              Democratizing AI for{' '}
              <span className="text-gray-700">Sustainable Human{' '}
              Development and Progress</span>
            </h1>
            
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-3xl leading-relaxed">
              We build applied AI systems that hold up in production. Operator-led, R&D-first, 
              and focused on measurable outcomes across Pakistan and the UAE.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
            <Button size="lg" className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 text-base bg-black hover:bg-gray-800 text-white">
              <a href="/solutions" className="flex items-center justify-center">
                Explore Solutions
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
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
        <div className="space-y-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center space-y-8"
          >
            <div className="space-y-4">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-[0.9] text-balance">
                Production<br />
                <span className="text-gray-700">Ready</span>
              </h2>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Each system is built with safeguards, observability, and real-world constraints in mind.
            </p>
          </motion.div>

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
        </div>
      </section>

      {/* Proof Strip */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 text-center">
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
            </div>
          </motion.div>
        </div>
      </section>



      {/* Big Bold Text - Build Measure Learn */}
      <section className="px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[0.85] tracking-tight">
              <span className="block text-gray-900">Build</span>
              <span className="block text-gray-700">—measure—</span>
              <span className="block text-gray-500">learn</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 mt-8 max-w-3xl mx-auto">
              Short cycles beat long plans. Every initiative has a hypothesis, metric, and review cadence.
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
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-[0.9] text-balance">
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

      {/* Big Bold Text - Rigor Over Rhetoric */}
      <section className="px-4 sm:px-6 lg:px-8 py-24 sm:py-32 bg-gray-100">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[0.85] tracking-tight">
              <span className="block text-gray-900">Rigor</span>
              <span className="block text-gray-700">over</span>
              <span className="block text-gray-500">rhetoric</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 mt-8 max-w-4xl mx-auto">
              We privilege tested results over narratives. Evidence, pilots, and post-mortems before shipping broadly.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Story */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 sm:py-24 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
              R&D-First Studio
            </h2>
            <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
              <p>
                We built an operator-led, R&D-first studio to close the gap between promising models and production systems. 
                Our approach is grounded in real-world testing and measurable outcomes.
              </p>
              <p>
                Our principles are simple: <span className="font-semibold text-gray-900">Build–measure–learn</span>. 
                Prefer open experimentation over slideware.
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Operating Principles</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-gray-900 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <div className="font-medium text-gray-900">Autonomy with accountability</div>
                    <div className="text-sm text-gray-600">Doers have agency and own results</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-gray-700 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <div className="font-medium text-gray-900">Responsible AI</div>
                    <div className="text-sm text-gray-600">Safety, privacy, and human oversight are non-negotiable</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-gray-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <div className="font-medium text-gray-900">Customer outcomes</div>
                    <div className="text-sm text-gray-600">Value = delivered change, not features</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 sm:py-24 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Mission & Vision</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Democratizing AI for sustainable human development and progress across Pakistan and the UAE
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <Card className="h-full border-gray-200">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mr-4">
                      <Target className="h-6 w-6 text-gray-700" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">Mission</h3>
                  </div>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    "Democratizing AI for Sustainable Human Development and Progress."
                  </p>
                </CardContent>
              </Card>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Card className="h-full border-gray-200">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mr-4">
                      <Eye className="h-6 w-6 text-gray-700" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">Vision</h3>
                  </div>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Accessible, safe, production-grade AI that advances capability and social progress 
                    across Pakistan and the UAE, with patterns that travel globally.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 sm:py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Global Operations</h2>
            <p className="text-xl text-gray-600">
              On-site teams in Islamabad and Dubai with legal registration in Pakistan and the UAE
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-gray-200">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mr-4">
                      <Building2 className="h-6 w-6 text-gray-700" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">Islamabad, Pakistan</h3>
                      <p className="text-gray-600">On-site Operations</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center text-gray-600">
                      <Clock className="h-4 w-4 mr-2" />
                      <span>10:30AM–6:30PM PKT</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <MapPin className="h-4 w-4 mr-2" />
                      <span>PKT (UTC+5)</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-gray-200">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mr-4">
                      <Globe className="h-6 w-6 text-gray-700" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">Dubai, UAE</h3>
                      <p className="text-gray-600">On-site Operations</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center text-gray-600">
                      <Clock className="h-4 w-4 mr-2" />
                      <span>9:30AM–5:30PM GST</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <MapPin className="h-4 w-4 mr-2" />
                      <span>GST (UTC+4)</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
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

      {/* Client Success & Testimonials */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 sm:py-24 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">What Clients Say</h2>
          <p className="text-xl text-gray-600">
            We collaborate with teams who value practical outcomes
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <Card className="h-full border-gray-200">
              <CardContent className="p-8">
                <Quote className="h-8 w-8 text-gray-400 mb-4" />
                <p className="text-gray-600 mb-6 leading-relaxed">
                  "They cut through noise and built a workflow our team actually uses in production."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center mr-3">
                    <Building2 className="h-5 w-5 text-gray-600" />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">Director</div>
                    <div className="text-sm text-gray-600">Real Estate</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Card className="h-full border-gray-200">
              <CardContent className="p-8">
                <Quote className="h-8 w-8 text-gray-400 mb-4" />
                <p className="text-gray-600 mb-6 leading-relaxed">
                  "Our content reviews are tighter and faster, with clearer handoffs."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center mr-3">
                    <Camera className="h-5 w-5 text-gray-600" />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">Head of Content</div>
                    <div className="text-sm text-gray-600">Media Studio</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <Card className="h-full border-gray-200">
              <CardContent className="p-8">
                <Quote className="h-8 w-8 text-gray-400 mb-4" />
                <p className="text-gray-600 mb-6 leading-relaxed">
                  "They understand sensitive contexts and design with human oversight from the start."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center mr-3">
                    <Heart className="h-5 w-5 text-gray-600" />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">Program Lead</div>
                    <div className="text-sm text-gray-600">NGO</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Partners</h3>
            <div className="flex flex-wrap justify-center items-center gap-8 text-gray-600">
              <span className="font-medium">NestHive</span>
              <span className="font-medium">VoicesofPak</span>
              <span className="font-medium">Bytes for All (B4A)</span>
              <span className="font-medium">Frische</span>
              <span className="font-medium">Carzone</span>
            </div>
            <p className="text-gray-600 mt-4">
              If our approach fits your goals, we would welcome a focused pilot.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Why Choose SirkupAI */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 sm:py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Why Choose SirkupAI</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're not a generic dev shop. We're a systems studio that ships applied AI built to withstand production realities.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm">
                  <CheckCircle className="h-8 w-8 text-gray-700" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Production-First</h3>
                <p className="text-gray-600 leading-relaxed">
                  Every system is built with safeguards, observability, and real-world constraints in mind from day one.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm">
                  <Users className="h-8 w-8 text-gray-700" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Operator-Led</h3>
                <p className="text-gray-600 leading-relaxed">
                  Built by operators who understand edge cases, load patterns, and the realities of running systems at scale.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm">
                  <Star className="h-8 w-8 text-gray-700" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Measurable Impact</h3>
                <p className="text-gray-600 leading-relaxed">
                  We measure what matters: 8h → 30m content creation, live testing with partners, real industry deployments.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process & Approach */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 sm:py-24 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Approach</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Start with a discovery call, move to focused pilots, then scale with comprehensive support
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-center"
          >
            <div className="w-12 h-12 bg-gray-900 text-white rounded-xl flex items-center justify-center mx-auto mb-6 font-bold">
              1
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Discovery Call</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              We understand your needs and recommend the best approach. Can begin with a pilot program or workshop.
            </p>
            <div className="text-sm text-gray-500">
              Response time: 1–2 business days
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-center"
          >
            <div className="w-12 h-12 bg-gray-700 text-white rounded-xl flex items-center justify-center mx-auto mb-6 font-bold">
              2
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Pilot Program</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              Focused pilots typically take 2-4 weeks. We build, measure, and learn with real users and real data.
            </p>
            <div className="text-sm text-gray-500">
              Timeline: 2-4 weeks for pilots
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-center"
          >
            <div className="w-12 h-12 bg-gray-500 text-white rounded-xl flex items-center justify-center mx-auto mb-6 font-bold">
              3
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Scale & Support</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              Full implementations with comprehensive training, ongoing support, and SirkupAI Academy access.
            </p>
            <div className="text-sm text-gray-500">
              Timeline: 6-12 weeks for full implementation
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 sm:py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div className="space-y-8">
              <h2 className="text-4xl lg:text-6xl font-bold leading-[0.9] text-balance text-gray-900">
                Ready to Build<br />
                the Future?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl">
                Whether you're looking to implement AI systems or join our team, 
                we'd love to hear from you.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
              <Button size="lg" className="w-full sm:w-auto bg-black text-white hover:bg-gray-800 px-6 sm:px-8 py-3 sm:py-4 text-base">
                <a href="/contact-sales" className="flex items-center justify-center">
                  Start a Pilot
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button variant="outline" size="lg" className="w-full sm:w-auto border-gray-300 text-gray-900 hover:bg-gray-100 px-6 sm:px-8 py-3 sm:py-4 text-base">
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