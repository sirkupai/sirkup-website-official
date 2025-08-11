"use client"

import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Target, Eye, Users, ArrowRight, MapPin, Globe } from 'lucide-react'
import Image from 'next/image'
import { useEffect } from 'react'

const AboutPage = () => {
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

  const principles = [
    {
      title: "Rigor over rhetoric",
      description: "Results before narratives"
    },
    {
      title: "Build–measure–learn",
      description: "Short cycles over long plans"
    },
    {
      title: "Open experimentation",
      description: "Ideas compete in the open"
    },
    {
      title: "Responsible AI",
      description: "Safeguards as table stakes"
    },
    {
      title: "Operator mindset",
      description: "Design for edge cases and load"
    },
    {
      title: "Autonomy with accountability",
      description: "Agency with ownership"
    },
    {
      title: "Customer outcomes",
      description: "Value = delivered change"
    }
  ]

  const leadership = [
    {
      name: "Ahmed Ghulam",
      role: "Co-founder & Strategy and Operations Lead",
      bio: "Ahmed steers studio operations and delivery. He brings an operator lens to scope, metrics, and risk, turning research ideas into run-books. He focuses on cross-functional cadence, clean handoffs, and measurable outcomes.",
      initials: "AG"
    },
    {
      name: "Bilal Ahmad",
      role: "Co-founder & CEO",
      bio: "Bilal sets direction and partnerships. He aligns R&D with client needs and keeps the studio focused on production-worthy results. His work centers on market fit, responsible deployment, and sustainable growth.",
      initials: "BA"
    },
    {
      name: "Anees Qureshi",
      role: "Team Lead & Business Development",
      bio: "Anees leads go-to-market and client success. He frames problems, clarifies constraints, and scopes pilots that show value quickly. He maintains the feedback loop from users to build decisions.",
      initials: "AQ"
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
                    <span className="block">Founded by</span>
                    <span className="block text-gray-700">Multi-Business Operators</span>
                  </h1>
                  <div className="text-2xl md:text-3xl font-bold text-gray-900">
                    Frustrated by "wrapper" culture.
                  </div>
                </div>
                <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
                  SirkupAI was founded by Ahmed Ghulam and Bilal Ahmad—tools 
                  that look novel but do little in the real world. We built an R&D-first studio to close 
                  the gap between promising models and production systems.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Big Bold Text - Operator Mindset */}
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
              <span className="block text-white">Operator</span>
              <span className="block text-gray-400">mindset</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 mt-8 max-w-4xl mx-auto">
              We think in processes, constraints, and outcomes. Design for edge cases and production load, not just demos.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <Card className="h-full">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <Target className="h-8 w-8 text-gray-900" />
                      <CardTitle className="text-2xl">Mission</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      Democratizing AI for Sustainable Human Development and Progress.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <Card className="h-full">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <Eye className="h-8 w-8 text-gray-900" />
                      <CardTitle className="text-2xl">Vision</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      Accessible, safe, production-grade AI that advances capability and social progress 
                      across Pakistan and the UAE, with patterns that travel globally. We focus on 
                      Education. Automation. Impact.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Big Bold Text - Mission Statement */}
      <section className="px-4 sm:px-6 lg:px-8 py-24 sm:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-[0.9] tracking-tight text-gray-900">
              Democratizing AI for<br />
              <span className="text-gray-700">Sustainable Human</span><br />
              <span className="text-gray-500">Development and Progress</span>
            </h2>
          </motion.div>
        </div>
      </section>

      {/* Principles */}
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
                Our Operating<br />
                Principles
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                These principles guide every decision we make, from system architecture to customer relationships.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {principles.map((principle, index) => (
                <motion.div
                  key={principle.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-lg mb-2">{principle.title}</h3>
                      <p className="text-gray-600">{principle.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Leadership Team
              </h2>
              <p className="text-xl text-gray-600">
                Operators and researchers building AI systems that work in the real world.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {leadership.map((leader, index) => (
                <motion.div
                  key={leader.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="h-full">
                    <CardHeader className="text-center">
                      <div className="w-20 h-20 bg-gray-600 rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4">
                        {leader.initials}
                      </div>
                      <CardTitle className="text-xl">{leader.name}</CardTitle>
                      <p className="text-gray-600 font-medium">{leader.role}</p>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 text-center">{leader.bio}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Global Presence
              </h2>
              <p className="text-xl text-gray-600">
                Hubs in Islamabad and Dubai, serving clients worldwide.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <Card className="text-center p-8">
                  <MapPin className="h-12 w-12 text-gray-900 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2">Islamabad</h3>
                  <p className="text-gray-600">
                    Our R&D hub where we design and test AI systems
                  </p>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <Card className="text-center p-8">
                  <Globe className="h-12 w-12 text-gray-900 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2">Dubai</h3>
                  <p className="text-gray-600">
                    Our operations center for client delivery and partnerships
                  </p>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
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
                  Ready to Build the Future?
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Whether you're looking to implement AI systems or join our team, 
                  we'd love to hear from you.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-black hover:bg-gray-800 text-white">
                  <a href="/team" className="flex items-center">
                    Meet Our Team
                  </a>
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" size="lg" className="border-gray-300 hover:bg-gray-50 bg-white text-gray-900">
                  <a href="/careers" className="flex items-center">
                    Join Our Mission
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

export default AboutPage