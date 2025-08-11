"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Badge } from '@/components/ui/badge'
import Image from 'next/image'
import { 
  ArrowRight,
  CheckCircle,
  Clock,
  Users,
  Target,
  Zap,
  Shield,
  Building2,
  MessageSquare,
  Calendar,
  Mail,
  Phone
} from 'lucide-react'

export default function ContactSalesPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    role: '',
    solution: '',
    message: '',
    budget: '',
    timeline: '',
    teamSize: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Sales form submitted:', formData)
  }

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const salesProcess = [
    {
      step: "1",
      title: "Initial Consultation",
      description: "We discuss your goals, constraints, and current workflows",
      duration: "30 minutes"
    },
    {
      step: "2", 
      title: "Technical Assessment",
      description: "Our team evaluates your existing systems and integration needs",
      duration: "1-2 weeks"
    },
    {
      step: "3",
      title: "Pilot Proposal",
      description: "We design a focused pilot program with clear success metrics",
      duration: "1 week"
    },
    {
      step: "4",
      title: "Implementation",
      description: "Deploy and iterate on your AI system with full support",
      duration: "4-12 weeks"
    }
  ]

  const solutions = [
    {
      icon: Target,
      title: "Content Intelligence Systems",
      description: "Reduce content creation cycles from 8 hours to 30 minutes",
      pricing: "Starting at $15k/month"
    },
    {
      icon: MessageSquare,
      title: "Conversational Intelligence",
      description: "AI-powered sales and customer experience automation",
      pricing: "Custom pricing"
    },
    {
      icon: Shield,
      title: "Custom AI Implementations",
      description: "Tailored AI systems for your specific business needs",
      pricing: "Project-based"
    }
  ]

  const benefits = [
    "Production-ready AI systems with safeguards",
    "Full integration with existing tools",
    "Comprehensive training and support",
    "Measurable ROI within 90 days",
    "Ongoing optimization and updates",
    "24/7 monitoring and maintenance"
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
              Ready to Deploy<br />
              <span className="text-gray-700">Production AI?</span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-600 max-w-3xl leading-relaxed">
              Let's discuss how our AI systems can transform your operations. 
              We'll design a pilot program that delivers measurable results in weeks, not months.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="bg-black hover:bg-gray-800 text-white px-8 py-4 text-base">
              <a href="#sales-form">Schedule Sales Call</a>
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="border-gray-300 hover:bg-gray-50 px-8 py-4 text-base">
              <a href="#sales-form">Request Pilot Proposal</a>
            </Button>
          </div>
        </motion.div>
      </section>

      {/* Hero Image */}
      <section className="px-8 py-16 max-w-6xl mx-auto">
        <div className="relative rounded-2xl h-96 overflow-hidden">
          <Image
            src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg"
            alt="Sales Consultation - Professional business meeting discussing AI implementation"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
            <div className="text-center text-white">
              <h3 className="text-2xl font-bold mb-2">Expert Sales Consultation</h3>
              <p className="text-lg opacity-90">Tailored AI solutions for your business</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sales Contact Form */}
      <section id="sales-form" className="px-8 py-24 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-16"
        >
          <div className="space-y-8 text-center">
            <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-[0.9] text-balance">
              Sales<br />
              Inquiry
            </h2>
            <p className="text-xl text-gray-600">
              Tell us about your AI implementation needs and we'll design a custom solution.
            </p>
          </div>

          <Card className="border-gray-200">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleChange('name', e.target.value)}
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Business Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleChange('email', e.target.value)}
                      placeholder="your.email@company.com"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="company">Company Name *</Label>
                    <Input
                      id="company"
                      value={formData.company}
                      onChange={(e) => handleChange('company', e.target.value)}
                      placeholder="Your company name"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="role">Your Role *</Label>
                    <Input
                      id="role"
                      value={formData.role}
                      onChange={(e) => handleChange('role', e.target.value)}
                      placeholder="e.g., CEO, CTO, VP of Operations"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="solution">Solution Interest *</Label>
                    <Select value={formData.solution} onValueChange={(value) => handleChange('solution', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Which solution interests you?" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="content-intelligence">Content Intelligence Systems</SelectItem>
                        <SelectItem value="conversational-intelligence">Conversational Intelligence</SelectItem>
                        <SelectItem value="custom-automation">Custom AI Implementations</SelectItem>
                        <SelectItem value="multiple">Multiple Solutions</SelectItem>
                        <SelectItem value="not-sure">Not sure yet</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="teamSize">Team Size</Label>
                    <Select value={formData.teamSize} onValueChange={(value) => handleChange('teamSize', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="How large is your team?" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1-10">1-10 people</SelectItem>
                        <SelectItem value="11-50">11-50 people</SelectItem>
                        <SelectItem value="51-200">51-200 people</SelectItem>
                        <SelectItem value="200-plus">200+ people</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="budget">Budget Range *</Label>
                    <Select value={formData.budget} onValueChange={(value) => handleChange('budget', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="What's your budget range?" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="15k-25k">$15k - $25k/month</SelectItem>
                        <SelectItem value="25k-50k">$25k - $50k/month</SelectItem>
                        <SelectItem value="50k-100k">$50k - $100k/month</SelectItem>
                        <SelectItem value="100k-plus">$100k+/month</SelectItem>
                        <SelectItem value="project-based">Project-based pricing</SelectItem>
                        <SelectItem value="discuss">Let's discuss</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="timeline">Implementation Timeline *</Label>
                    <Select value={formData.timeline} onValueChange={(value) => handleChange('timeline', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="When do you want to start?" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="asap">ASAP</SelectItem>
                        <SelectItem value="1-month">Within 1 month</SelectItem>
                        <SelectItem value="3-months">Within 3 months</SelectItem>
                        <SelectItem value="6-months">Within 6 months</SelectItem>
                        <SelectItem value="planning">Still planning</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Project Requirements *</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleChange('message', e.target.value)}
                    placeholder="Describe your current challenges, what you're hoping to achieve, existing tools you use, and any specific requirements..."
                    className="min-h-[120px]"
                    required
                  />
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-600">
                    <strong>What happens next:</strong> Our sales team will review your submission and contact you within 24 hours to schedule a discovery call. We'll discuss your needs and design a custom pilot program.
                  </p>
                </div>

                <Button type="submit" size="lg" className="w-full bg-black hover:bg-gray-800 text-white">
                  Submit Sales Inquiry
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </section>

      {/* Sales Process */}
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
                Our Sales<br />
                Process
              </h2>
              <p className="text-xl text-gray-600">
                A structured approach to understanding your needs and delivering results.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {salesProcess.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow border-gray-200">
                    <CardHeader className="text-center">
                      <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                        {step.step}
                      </div>
                      <CardTitle className="text-lg">{step.title}</CardTitle>
                      <Badge variant="secondary" className="bg-gray-100 text-gray-700 text-xs">
                        {step.duration}
                      </Badge>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 text-center">{step.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Solutions & Pricing */}
      <section className="px-8 py-24 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-16"
        >
          <div className="space-y-8">
            <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-[0.9] text-balance">
              Solutions &<br />
              Investment
            </h2>
            <p className="text-xl text-gray-600">
              Production-ready AI systems with transparent pricing and clear ROI.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow border-gray-200">
                  <CardHeader>
                    <div className="p-3 rounded-xl bg-gray-100 w-fit mb-4">
                      <solution.icon className="h-6 w-6 text-gray-700" />
                    </div>
                    <CardTitle className="text-xl">{solution.title}</CardTitle>
                    <p className="text-gray-600">{solution.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="text-2xl font-bold text-gray-900">{solution.pricing}</div>
                      <Button className="w-full bg-black hover:bg-gray-800 text-white">
                        <a href="#sales-form">Get Quote</a>
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Benefits */}
      <section className="px-8 py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-16"
          >
            <div className="space-y-8 text-center">
              <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-[0.9] text-balance">
                What You<br />
                Get
              </h2>
              <p className="text-xl text-gray-600">
                Comprehensive AI implementation with ongoing support and optimization.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center space-x-3"
                >
                  <CheckCircle className="h-6 w-6 text-gray-600 flex-shrink-0" />
                  <span className="text-gray-700">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact CTA */}
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
                Ready to<br />
                Get Started?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl leading-relaxed">
                Contact our sales team today to discuss your AI implementation needs. 
                We'll design a custom solution that delivers measurable results.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <Mail className="h-8 w-8 text-white mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Email Sales</h3>
                <p className="text-gray-300 text-sm">contact@sirkup.ai</p>
              </div>
              <div>
                <Calendar className="h-8 w-8 text-white mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Schedule Call</h3>
                <p className="text-gray-300 text-sm">Within 24 hours</p>
              </div>
              <div>
                <Clock className="h-8 w-8 text-white mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Response Time</h3>
                <p className="text-gray-300 text-sm">1-2 business days</p>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="bg-white text-black hover:bg-gray-100 px-8 py-4 text-base">
                <a href="mailto:contact@sirkup.ai?subject=Sales Inquiry - Ready to Start" className="flex items-center">
                  Contact Sales Now
                </a>
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="border border-white text-white hover:bg-white hover:text-black px-8 py-4 text-base">
                <a href="/solutions" className="flex items-center">
                  Explore Solutions
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}