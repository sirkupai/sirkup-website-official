"use client"

import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import Image from 'next/image'
import { 
  ArrowRight,
  MapPin,
  Clock,
  Users,
  Heart,
  GraduationCap,
  Shield,
  Target,
  Zap,
  Building2,
  Code,
  Palette,
  TrendingUp
} from 'lucide-react'

export default function CareersPage() {
  const values = [
    { title: "Rigor over rhetoric", description: "Results before narratives" },
    { title: "Build–measure–learn", description: "Short cycles over long plans" },
    { title: "Open experimentation", description: "Ideas compete in the open" },
    { title: "Responsible AI", description: "Safeguards as table stakes" },
    { title: "Operator mindset", description: "Think in processes, constraints, and outcomes" },
    { title: "Autonomy with accountability", description: "Agency with ownership" },
    { title: "Customer outcomes", description: "Value = delivered change, not features" }
  ]

  const benefits = [
    {
      category: "For Employees",
      icon: Users,
      items: [
        "Comprehensive health coverage",
        "Retirement planning support", 
        "Learning & development stipend",
        "Conference & training budget"
      ]
    },
    {
      category: "Life & Family",
      icon: Heart,
      items: [
        "Flexible paid time off",
        "Paid parental leave",
        "Travel insurance",
        "Remote work flexibility"
      ]
    },
    {
      category: "Culture & Development",
      icon: GraduationCap,
      items: [
        "1:1 coaching sessions",
        "Team building events",
        "Daily team lunch (office days)",
        "Professional mentorship"
      ]
    }
  ]

  const featuredRoles = [
    {
      title: "Content Creator",
      department: "Creative",
      location: "Islamabad / Dubai / Remote",
      type: "Full-time",
      description: "Turn complex ideas into clear stories and artifacts for customers and the Academy.",
      icon: Palette
    },
    {
      title: "Video Editor",
      department: "Creative",
      location: "Islamabad / Dubai",
      type: "Full-time",
      description: "Build repeatable motion systems for education and product content.",
      icon: Palette
    },
    {
      title: "AI Engineer",
      department: "Engineering",
      location: "Islamabad / Dubai / Remote",
      type: "Full-time",
      description: "Ship evaluated, observable workflows powered by LLMs.",
      icon: Code
    },
    {
      title: "Automation Specialist",
      department: "Engineering",
      location: "Dubai / Remote",
      type: "Full-time",
      description: "Connect CRMs, content stacks, and back-office tools into resilient flows.",
      icon: Zap
    },
    {
      title: "Growth Marketer",
      department: "Marketing",
      location: "Remote",
      type: "Full-time",
      description: "Design lean experiments that compound across channels.",
      icon: TrendingUp
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
              We hire on-site in<br />
              <span className="text-gray-700">Islamabad and Dubai</span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-600 max-w-3xl leading-relaxed">
              We offer autonomy with accountability, quick learning loops, and work that lands in production. 
              If you like open experimentation, responsible AI, and clear outcomes, you will fit here.
            </p>
          </div>
          
          <Button size="lg" className="bg-black hover:bg-gray-800 text-white px-8 py-4 text-base">
            <a href="#featured-roles" className="flex items-center">
              View Open Roles
            </a>
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </section>

      {/* Image Section */}
      <section className="px-8 py-16 max-w-6xl mx-auto">
        <div className="relative rounded-2xl h-96 overflow-hidden">
          <Image
            src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg"
            alt="Our Team at Work - Collaborative workspace with diverse professionals"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
            <div className="text-center text-white">
              <h3 className="text-2xl font-bold mb-2">Our Team at Work</h3>
              <p className="text-lg opacity-90">Building the future of AI together</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values & Operating Principles */}
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
                Values &<br />
                Operating Principles
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl">
                These principles guide every decision we make, from system architecture 
                to customer relationships.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow border-gray-200">
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-lg text-gray-900 mb-2">{value.title}</h3>
                      <p className="text-gray-600">{value.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="px-8 py-24 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-16"
        >
          <div className="space-y-8">
            <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-[0.9] text-balance">
              Benefits &<br />
              Perks
            </h2>
            <p className="text-xl text-gray-600 text-center">
              We take care of our team so they can focus on building great AI systems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full border-gray-200">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div className="p-3 rounded-xl bg-gray-100">
                        <benefit.icon className="h-6 w-6 text-gray-700" />
                      </div>
                      <CardTitle className="text-xl text-gray-900">{benefit.category}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {benefit.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start space-x-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-gray-900 mt-2 flex-shrink-0" />
                          <span className="text-gray-600">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Image Section */}
      <section className="px-8 py-16 max-w-6xl mx-auto">
        <div className="relative rounded-2xl h-96 overflow-hidden">
          <Image
            src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg"
            alt="Office Culture - Modern office environment with collaborative spaces"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
            <div className="text-center text-white">
              <h3 className="text-2xl font-bold mb-2">Office Culture</h3>
              <p className="text-lg opacity-90">Where innovation meets collaboration</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Roles */}
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
                Featured<br />
                Roles
              </h2>
              <p className="text-xl text-gray-600">
                Join us in building the future of human-AI collaboration.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {featuredRoles.map((role, index) => (
                <motion.div
                  key={`${role.title}-${role.department}-${index}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-lg transition-all duration-300 group cursor-pointer border-gray-200">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex items-start space-x-4">
                          <div className="p-3 rounded-xl bg-gray-100 group-hover:bg-gray-200 transition-colors">
                            <role.icon className="h-6 w-6 text-gray-700" />
                          </div>
                          <div>
                            <CardTitle className="text-xl text-gray-900 mb-2">{role.title}</CardTitle>
                            <div className="flex items-center space-x-4 text-sm text-gray-600">
                              <div className="flex items-center space-x-1">
                                <Building2 className="h-4 w-4" />
                                <span>{role.department}</span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <MapPin className="h-4 w-4" />
                                <span>{role.location}</span>
                              </div>
                              <Badge variant="secondary" className="bg-gray-100 text-gray-700">{role.type}</Badge>
                            </div>
                          </div>
                        </div>
                        <ArrowRight className="h-5 w-5 text-gray-600 group-hover:text-gray-800 group-hover:translate-x-1 transition-all" />
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">{role.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              id="featured-roles"
              className="text-center"
            >
              <Button size="lg" variant="outline" className="px-8 py-4 text-base border-gray-300 bg-white text-gray-900 hover:bg-gray-50">
                <a href="mailto:contact@sirkup.ai?subject=Job Application" className="flex items-center">
                  View All Open Positions
                </a>
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>


      {/* Final CTA */}
      <section className="px-8 py-24 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-5xl lg:text-7xl font-bold text-gray-900 leading-[0.9] text-balance">
                Values &<br />
                <span className="text-gray-700">Operating Principles</span>
              </h2>
              <div className="text-2xl lg:text-3xl font-bold text-gray-900">
                These principles guide every decision we make.
              </div>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl">
              From system architecture to customer relationships.
            </p>
          </div>
          
          <Button size="lg" className="bg-black hover:bg-gray-800 text-white px-8 py-4 text-base">
            <a href="#featured-roles" className="flex items-center">
              View Open Roles
            </a>
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </section>
    </div>
  )
}