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
  Mail,
  Phone,
  MapPin,
  Clock,
  MessageSquare,
  Calendar,
  Users,
  Building2,
  Globe,
  Linkedin,
  Twitter,
  Github
} from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    role: '',
    inquiry: '',
    message: '',
    budget: '',
    timeline: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    // You would typically send this to your backend
  }

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const contactMethods = [
    {
      icon: MessageSquare,
      title: "Start a Conversation",
      description: "Form first, then email if needed",
      action: "Send Message",
      contact: "contact@sirkup.ai",
      responseTime: "Within 1–2 business days"
    },
    {
      icon: Calendar,
      title: "Book a Discovery Call",
      description: "Schedule after initial form submission",
      action: "Schedule Call",
      contact: "Via contact form",
      responseTime: "Within 1–2 business days"
    },
    {
      icon: Users,
      title: "Sales & Partnerships",
      description: "For partnerships and focused pilots",
      action: "Contact Sales",
      contact: "contact@sirkup.ai",
      responseTime: "Within 1–2 business days"
    }
  ]

  const offices = [
    {
      city: "Islamabad",
      country: "Pakistan",
      type: "On-site Operations",
      address: "Islamabad, Pakistan",
      timezone: "PKT (UTC+5)",
      team: "10:30AM–6:30PM PKT",
      icon: Building2
    },
    {
      city: "Dubai",
      country: "UAE",
      type: "On-site Operations",
      address: "Dubai, UAE",
      timezone: "GST (UTC+4)",
      team: "9:30AM–5:30PM GST",
      icon: Globe
    }
  ]

  const faqs = [
    {
      question: "How do I get started with SirkupAI?",
      answer: "Start with a discovery call where we'll understand your needs and recommend the best approach. We can begin with a pilot program or workshop."
    },
    {
      question: "What's the typical timeline for implementation?",
      answer: "Pilot programs typically take 2-4 weeks. Full implementations range from 6-12 weeks depending on complexity and integration requirements."
    },
    {
      question: "Do you offer training and support?",
      answer: "Yes, we provide comprehensive training through SirkupAI Academy, plus ongoing support and office hours for all implementations."
    },
    {
      question: "Can you integrate with our existing tools?",
      answer: "Absolutely. We specialize in integrating with existing workflows and tools including CRMs, content management systems, and communication platforms."
    },
    {
      question: "What industries do you work with?",
      answer: "We work across real estate, media, education, civic organizations, and SMB services. Our systems are designed to adapt to different industry needs."
    },
    {
      question: "How do you ensure AI safety and reliability?",
      answer: "We build safeguards, human-in-the-loop controls, and comprehensive monitoring into every system. Safety and reliability are non-negotiable."
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
              Tell us about your<br />
              <span className="text-gray-700">goals and constraints</span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-600 max-w-3xl leading-relaxed">
              We will review and reply with next steps. Response time: within 1–2 business days.
              Office hours: 10:30AM–6:30PM PKT (Islamabad) · 9:30AM–5:30PM GST (Dubai).
            </p>
          </div>
        </motion.div>
      </section>

      {/* Contact Form */}
      <section className="px-8 py-24 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-16"
        >
          <div className="space-y-8 text-center">
            <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-[0.9] text-balance">
              Contact<br />
              Form
            </h2>
            <p className="text-xl text-gray-600">
              Tell us about your project and we'll get back to you within 1-2 business days.
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
                    <Label htmlFor="email">Email Address *</Label>
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
                    <Label htmlFor="company">Company</Label>
                    <Input
                      id="company"
                      value={formData.company}
                      onChange={(e) => handleChange('company', e.target.value)}
                      placeholder="Your company name"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="role">Your Role</Label>
                    <Input
                      id="role"
                      value={formData.role}
                      onChange={(e) => handleChange('role', e.target.value)}
                      placeholder="e.g., CEO, CTO, Marketing Director"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="inquiry">Type of Inquiry *</Label>
                    <Select value={formData.inquiry} onValueChange={(value) => handleChange('inquiry', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select inquiry type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="content-intelligence">Content Intelligence Systems</SelectItem>
                        <SelectItem value="conversational-intelligence">Conversational Intelligence</SelectItem>
                        <SelectItem value="ai-search">AI Search & Optimization</SelectItem>
                        <SelectItem value="academy">SirkupAI Academy Training</SelectItem>
                        <SelectItem value="custom-automation">Custom Automations</SelectItem>
                        <SelectItem value="partnership">Partnership Opportunity</SelectItem>
                        <SelectItem value="general">General Inquiry</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="budget">Budget Range</Label>
                    <Select value={formData.budget} onValueChange={(value) => handleChange('budget', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select budget range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="under-10k">Under $10k</SelectItem>
                        <SelectItem value="10k-25k">$10k - $25k</SelectItem>
                        <SelectItem value="25k-50k">$25k - $50k</SelectItem>
                        <SelectItem value="50k-100k">$50k - $100k</SelectItem>
                        <SelectItem value="100k-plus">$100k+</SelectItem>
                        <SelectItem value="not-sure">Not sure yet</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="timeline">Project Timeline</Label>
                  <Select value={formData.timeline} onValueChange={(value) => handleChange('timeline', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="When do you want to start?" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="asap">ASAP</SelectItem>
                      <SelectItem value="1-month">Within 1 month</SelectItem>
                      <SelectItem value="3-months">Within 3 months</SelectItem>
                      <SelectItem value="6-months">Within 6 months</SelectItem>
                      <SelectItem value="exploring">Just exploring</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Project Details *</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleChange('message', e.target.value)}
                    placeholder="Tell us about your project, current challenges, and what you're hoping to achieve with AI..."
                    className="min-h-[120px]"
                    required
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button type="submit" size="lg" className="bg-black hover:bg-gray-800 text-white flex-1 focus:ring-gray-500 focus:ring-2">
                    Send Message
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <Button type="button" variant="outline" size="lg" className="border-gray-300 hover:bg-gray-50 text-gray-800 hover:text-gray-900 focus:ring-gray-500 focus:ring-2 bg-white">
                    Schedule Call Instead
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </section>

      {/* Contact Methods */}
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
                Get in<br />
                Touch
              </h2>
              <p className="text-xl text-gray-600">
                Choose the best way to start our conversation.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {contactMethods.map((method, index) => (
                <motion.div
                  key={method.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-xl transition-all duration-300 group border-gray-200">
                    <CardHeader className="text-center">
                      <div className="p-4 rounded-xl bg-gray-100 group-hover:bg-gray-200 transition-colors w-fit mx-auto mb-4">
                        <method.icon className="h-8 w-8 text-gray-700" />
                      </div>
                      <CardTitle className="text-xl mb-3">{method.title}</CardTitle>
                      <p className="text-gray-600">{method.description}</p>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="space-y-3 text-center">
                        <div className="text-sm font-medium text-gray-900">{method.contact}</div>
                        <div className="flex items-center justify-center space-x-1 text-xs text-gray-600">
                          <Clock className="h-3 w-3" />
                          <span>{method.responseTime}</span>
                        </div>
                      </div>
                      <Button className="w-full bg-black hover:bg-gray-800 text-white focus:ring-gray-500 focus:ring-2">
                        {method.action}
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

      {/* Office Locations */}
      <section className="px-8 py-24 max-w-6xl mx-auto">
        {/* Office Hero Image */}
        <div className="relative rounded-2xl h-64 mb-16 overflow-hidden">
          <Image
            src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg"
            alt="Global Offices - Modern office buildings representing our international presence"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
            <div className="text-center text-white">
              <h3 className="text-3xl font-bold mb-2">Global Presence</h3>
              <p className="text-xl opacity-90">Islamabad & Dubai operations</p>
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
              Our<br />
              Locations
            </h2>
            <p className="text-xl text-gray-600">
              Global presence with local expertise.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {offices.map((office, index) => (
              <motion.div
                key={office.city}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow border-gray-200">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="p-3 rounded-xl bg-gray-100">
                          <office.icon className="h-6 w-6 text-gray-700" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-gray-900">{office.city}</h3>
                          <p className="text-gray-600">{office.country}</p>
                        </div>
                      </div>
                      <Badge variant="secondary" className="bg-gray-100 text-gray-700">
                        {office.type}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <MapPin className="h-4 w-4 text-gray-600" />
                        <span className="text-gray-600">{office.address}</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Clock className="h-4 w-4 text-gray-600" />
                        <span className="text-gray-600">{office.timezone}</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Users className="h-4 w-4 text-gray-600" />
                        <span className="text-gray-600">{office.team}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* FAQ Section */}
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
                Frequently Asked<br />
                Questions
              </h2>
              <p className="text-xl text-gray-600">
                Common questions about working with SirkupAI.
              </p>
            </div>

            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <motion.div
                  key={faq.question}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="hover:shadow-lg transition-shadow border-gray-200">
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-gray-900 mb-3">{faq.question}</h3>
                      <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Social & Community */}
      <section className="px-8 py-24 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-16"
        >
          <div className="space-y-8 text-center">
            <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-[0.9] text-balance">
              Connect with<br />
              Our Community
            </h2>
            <p className="text-xl text-gray-600">
              Follow our journey and join the conversation.
            </p>
          </div>

          <div className="flex justify-center space-x-6">
            <Button variant="outline" size="lg" className="flex items-center space-x-2 border-gray-300 hover:bg-gray-50 text-gray-800 hover:text-gray-900 focus:ring-gray-500 focus:ring-2 bg-white">
              <Linkedin className="h-5 w-5" />
              <span>LinkedIn</span>
            </Button>
            <Button variant="outline" size="lg" className="flex items-center space-x-2 border-gray-300 hover:bg-gray-50 text-gray-800 hover:text-gray-900 focus:ring-gray-500 focus:ring-2 bg-white">
              <Twitter className="h-5 w-5" />
              <span>Twitter</span>
            </Button>
            <Button variant="outline" size="lg" className="flex items-center space-x-2 border-gray-300 hover:bg-gray-50 text-gray-800 hover:text-gray-900 focus:ring-gray-500 focus:ring-2 bg-white">
              <Github className="h-5 w-5" />
              <span>GitHub</span>
            </Button>
          </div>
        </motion.div>
      </section>

      {/* Final CTA */}
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
                Ready to Start<br />
                Building?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl leading-relaxed">
                Whether you need a quick consultation or a full AI implementation, 
                we're here to help you succeed.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-white text-black hover:bg-gray-100 px-8 py-4 text-base focus:ring-gray-500 focus:ring-2">
                Schedule Discovery Call
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="border border-white text-white hover:bg-white hover:text-black px-8 py-4 text-base focus:ring-gray-500 focus:ring-2 bg-transparent">
                Send Message
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}