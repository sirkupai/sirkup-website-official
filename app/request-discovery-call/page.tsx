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
  Calendar,
  Clock,
  Users,
  CheckCircle,
  MessageSquare,
  Target,
  Lightbulb,
  FileText,
  Video,
  Phone,
  Mail
} from 'lucide-react'

export default function RequestDiscoveryCallPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    role: '',
    callType: '',
    message: '',
    challenges: '',
    timeline: '',
    preferredTime: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Discovery call form submitted:', formData)
  }

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const callAgenda = [
    {
      icon: MessageSquare,
      title: "Understand Your Goals",
      description: "We'll discuss your current challenges and desired outcomes",
      duration: "10 minutes"
    },
    {
      icon: Target,
      title: "Assess Current State",
      description: "Review your existing tools, workflows, and team structure",
      duration: "15 minutes"
    },
    {
      icon: Lightbulb,
      title: "Explore Solutions",
      description: "Identify AI opportunities that align with your constraints",
      duration: "10 minutes"
    },
    {
      icon: FileText,
      title: "Next Steps",
      description: "Define clear next steps and potential pilot programs",
      duration: "10 minutes"
    }
  ]

  const callTypes = [
    {
      title: "Strategy Discovery",
      description: "High-level discussion about AI strategy and organizational readiness",
      duration: "45 minutes",
      audience: "Leadership, Strategy Teams",
      outcomes: ["AI readiness assessment", "Strategic roadmap", "Investment planning"]
    },
    {
      title: "Technical Discovery",
      description: "Deep dive into technical requirements and integration possibilities",
      duration: "60 minutes", 
      audience: "Technical Teams, IT Leaders",
      outcomes: ["Technical feasibility", "Integration plan", "Architecture review"]
    },
    {
      title: "Pilot Planning",
      description: "Focused session to design and scope a specific pilot program",
      duration: "45 minutes",
      audience: "Project Teams, Stakeholders",
      outcomes: ["Pilot scope", "Success metrics", "Timeline & budget"]
    }
  ]

  const preparation = [
    "Current workflow pain points and bottlenecks",
    "Existing tools and systems in use",
    "Team size and technical capabilities",
    "Budget range and timeline expectations",
    "Success metrics and desired outcomes",
    "Any previous AI or automation attempts"
  ]

  const benefits = [
    {
      icon: CheckCircle,
      title: "No Sales Pressure",
      description: "Focused on understanding your needs, not pushing solutions"
    },
    {
      icon: Users,
      title: "Expert Guidance",
      description: "Direct access to our technical and strategy teams"
    },
    {
      icon: Target,
      title: "Actionable Insights",
      description: "Leave with clear next steps and recommendations"
    },
    {
      icon: Clock,
      title: "Efficient Process",
      description: "Structured agenda to maximize value in minimal time"
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
              Let's Explore<br />
              <span className="text-gray-700">Your AI Potential</span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-600 max-w-3xl leading-relaxed">
              Book a discovery call to discuss your goals, constraints, and how AI can 
              transform your operations. No sales pressure—just expert guidance and actionable insights.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="bg-black hover:bg-gray-800 text-white px-8 py-4 text-base">
              <a href="#discovery-form">Schedule Discovery Call</a>
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="border-gray-300 hover:bg-gray-50 px-8 py-4 text-base">
              <a href="#discovery-form">Ask Questions First</a>
            </Button>
          </div>
        </motion.div>
      </section>

      {/* Hero Image */}
      <section className="px-8 py-16 max-w-6xl mx-auto">
        <div className="relative rounded-2xl h-96 overflow-hidden">
          <Image
            src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg"
            alt="Discovery Call - Professional video conference discussing AI strategy"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
            <div className="text-center text-white">
              <h3 className="text-2xl font-bold mb-2">Expert Discovery Sessions</h3>
              <p className="text-lg opacity-90">Tailored conversations about your AI journey</p>
            </div>
          </div>
        </div>
      </section>

      {/* Discovery Call Request Form */}
      <section id="discovery-form" className="px-8 py-24 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-16"
        >
          <div className="space-y-8 text-center">
            <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-[0.9] text-balance">
              Request Discovery<br />
              Call
            </h2>
            <p className="text-xl text-gray-600">
              Schedule a focused conversation about your AI potential and next steps.
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
                      placeholder="e.g., Founder, Director, Manager"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="callType">Discovery Call Type *</Label>
                    <Select value={formData.callType} onValueChange={(value) => handleChange('callType', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Which type of call?" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="strategy">Strategy Discovery (45 min)</SelectItem>
                        <SelectItem value="technical">Technical Discovery (60 min)</SelectItem>
                        <SelectItem value="pilot">Pilot Planning (45 min)</SelectItem>
                        <SelectItem value="general">General Discussion (30 min)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="timeline">Implementation Timeline</Label>
                    <Select value={formData.timeline} onValueChange={(value) => handleChange('timeline', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="When are you looking to start?" />
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
                </div>

                <div className="space-y-2">
                  <Label htmlFor="preferredTime">Preferred Call Time</Label>
                  <Select value={formData.preferredTime} onValueChange={(value) => handleChange('preferredTime', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="What time works best for you?" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="morning-pkt">Morning PKT (10:30AM-12:30PM)</SelectItem>
                      <SelectItem value="afternoon-pkt">Afternoon PKT (2:00PM-5:00PM)</SelectItem>
                      <SelectItem value="morning-gst">Morning GST (9:30AM-11:30AM)</SelectItem>
                      <SelectItem value="afternoon-gst">Afternoon GST (1:00PM-4:00PM)</SelectItem>
                      <SelectItem value="flexible">I'm flexible</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="challenges">Current Challenges *</Label>
                  <Textarea
                    id="challenges"
                    value={formData.challenges}
                    onChange={(e) => handleChange('challenges', e.target.value)}
                    placeholder="What are your main operational challenges or pain points that AI might help solve?"
                    className="min-h-[100px]"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Additional Context</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleChange('message', e.target.value)}
                    placeholder="Any additional context about your goals, existing tools, team size, or specific questions you'd like to discuss..."
                    className="min-h-[100px]"
                  />
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-700">
                    <strong>What to expect:</strong> We'll send you a calendar link within 24 hours to schedule your discovery call. Come prepared with information about your current workflows and challenges for the most productive conversation.
                  </p>
                </div>

                <Button type="submit" size="lg" className="w-full bg-black hover:bg-gray-800 text-white">
                  Request Discovery Call
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </section>

      {/* Call Types */}
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
                Choose Your<br />
                Discovery Type
              </h2>
              <p className="text-xl text-gray-600">
                We offer different types of discovery calls based on your needs and stage.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {callTypes.map((callType, index) => (
                <motion.div
                  key={callType.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow border-gray-200">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-4">
                        <CardTitle className="text-xl">{callType.title}</CardTitle>
                        <Badge variant="secondary" className="bg-gray-100 text-gray-700">
                          {callType.duration}
                        </Badge>
                      </div>
                      <p className="text-gray-600">{callType.description}</p>
                      <div className="text-sm text-gray-600 mt-2">
                        <strong>Best for:</strong> {callType.audience}
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-medium text-gray-900 mb-2">You'll Get:</h4>
                          <ul className="space-y-1">
                            {callType.outcomes.map((outcome, outcomeIndex) => (
                              <li key={outcomeIndex} className="flex items-center space-x-2 text-sm text-gray-600">
                                <CheckCircle className="h-4 w-4 text-gray-600 flex-shrink-0" />
                                <span>{outcome}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <Button className="w-full bg-black hover:bg-gray-800 text-white">
                          <a href="#discovery-form">Book This Call</a>
                          <ArrowRight className="ml-2 h-4 w-4" />
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

      {/* Call Agenda */}
      <section className="px-8 py-24 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-16"
        >
          <div className="space-y-8">
            <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-[0.9] text-balance">
              What We'll<br />
              Cover
            </h2>
            <p className="text-xl text-gray-600">
              A structured 45-minute conversation designed to maximize value for both sides.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {callAgenda.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full text-center hover:shadow-lg transition-shadow border-gray-200">
                  <CardHeader>
                    <div className="p-3 rounded-xl bg-gray-100 w-fit mx-auto mb-4">
                      <item.icon className="h-6 w-6 text-gray-700" />
                    </div>
                    <CardTitle className="text-lg">{item.title}</CardTitle>
                    <Badge variant="secondary" className="bg-gray-100 text-gray-700 text-xs">
                      {item.duration}
                    </Badge>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Preparation */}
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
                How to<br />
                Prepare
              </h2>
              <p className="text-xl text-gray-600">
                Come prepared with these topics to make the most of our time together.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {preparation.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start space-x-3"
                >
                  <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs font-bold">{index + 1}</span>
                  </div>
                  <span className="text-gray-700">{item}</span>
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
          <div className="space-y-8 text-center">
            <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-[0.9] text-balance">
              Why Choose Our<br />
              Discovery Process
            </h2>
            <p className="text-xl text-gray-600">
              A consultative approach focused on your success, not our sales targets.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full text-center hover:shadow-lg transition-shadow border-gray-200">
                  <CardContent className="p-6">
                    <benefit.icon className="h-8 w-8 text-gray-900 mx-auto mb-4" />
                    <h3 className="font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                    <p className="text-gray-600 text-sm">{benefit.description}</p>
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
                Ready to<br />
                Explore?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl leading-relaxed">
                Book your discovery call today. We'll explore your AI potential and 
                design a path forward that works for your team and constraints.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <Calendar className="h-8 w-8 text-white mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Flexible Scheduling</h3>
                <p className="text-gray-300 text-sm">Available across time zones</p>
              </div>
              <div>
                <Video className="h-8 w-8 text-white mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Virtual or In-Person</h3>
                <p className="text-gray-300 text-sm">Your preference</p>
              </div>
              <div>
                <Clock className="h-8 w-8 text-white mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Quick Response</h3>
                <p className="text-gray-300 text-sm">Scheduled within 24 hours</p>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="bg-white text-black hover:bg-gray-100 px-8 py-4 text-base">
                <a href="mailto:contact@sirkup.ai?subject=Request Discovery Call - Ready to Explore AI" className="flex items-center">
                  Schedule Discovery Call
                </a>
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="border border-white text-white hover:bg-white hover:text-black px-8 py-4 text-base">
                <a href="/contact" className="flex items-center">
                  Contact Us First
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}