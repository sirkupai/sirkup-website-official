"use client"

import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import Image from 'next/image'
import { 
  ArrowRight,
  MapPin,
  Linkedin,
  Twitter,
  Github,
  Mail,
  Users,
  Target,
  Lightbulb,
  Code,
  Palette,
  TrendingUp,
  Shield,
  Zap
} from 'lucide-react'

export default function TeamPage() {
  const leadership = [
    {
      name: "Ahmed Ghulam",
      role: "Co-founder & Strategy and Operations Lead",
      location: "Islamabad",
      bio: "Ahmed steers studio operations and delivery. He brings an operator lens to scope, metrics, and risk, turning research ideas into run-books. He focuses on cross-functional cadence, clean handoffs, and measurable outcomes.",
      expertise: ["Operations", "Strategy", "Risk Management"],
      image: "AG",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "contact@sirkup.ai"
      }
    },
    {
      name: "Bilal Ahmad",
      role: "Co-founder & CEO",
      location: "Dubai",
      bio: "Bilal sets direction and partnerships. He aligns R&D with client needs and keeps the studio focused on production-worthy results. His work centers on market fit, responsible deployment, and sustainable growth.",
      expertise: ["Strategy", "Partnerships", "Product"],
      image: "BA",
      social: {
        linkedin: "#",
        email: "contact@sirkup.ai"
      }
    },
    {
      name: "Anees Qureshi",
      role: "Team Lead & Business Development",
      location: "Islamabad",
      bio: "Anees leads go-to-market and client success. He frames problems, clarifies constraints, and scopes pilots that show value quickly. He maintains the feedback loop from users to build decisions.",
      expertise: ["Business Development", "Client Success", "Go-to-Market"],
      image: "AQ",
      social: {
        linkedin: "#",
        email: "contact@sirkup.ai"
      }
    }
  ]

  const team = [
    {
      name: "Ammar Hassan",
      role: "Creative Head",
      location: "Islamabad",
      expertise: ["Creative Strategy", "Brand Communications", "Design Systems"],
      image: "AH"
    },
    {
      name: "Moiz Hassan",
      role: "Senior Video Editor, Motion & Post-Production",
      location: "Islamabad",
      expertise: ["Video Editing", "Motion Graphics", "Post-Production"],
      image: "MH"
    },
    {
      name: "Syed Ali Azham",
      role: "AI Engineer",
      location: "Islamabad",
      expertise: ["Applied Models", "Evaluation", "Reliability"],
      image: "SA"
    },
    {
      name: "Ammar Saqib",
      role: "AI Engineer (LLM, Automation & Infrastructure)",
      location: "Islamabad",
      expertise: ["LLM Integration", "Automation", "Infrastructure"],
      image: "AS"
    },
    {
      name: "Frederick Samanga",
      role: "AI Engineer (Automation & LLM Ops)",
      location: "Dubai",
      expertise: ["Automation Patterns", "Operational Excellence", "Monitoring"],
      image: "FS"
    }
  ]

  const values = [
    {
      icon: Target,
      title: "Rigor over rhetoric",
      description: "Results before narratives"
    },
    {
      icon: Lightbulb,
      title: "Open experimentation",
      description: "Ideas compete in the open"
    },
    {
      icon: Shield,
      title: "Responsible AI",
      description: "Safeguards as table stakes"
    },
    {
      icon: Zap,
      title: "Operator mindset",
      description: "Design for edge cases and load"
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
              Meet the Team<br />
              <span className="text-gray-700">Building the Future</span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-600 max-w-3xl leading-relaxed">
              Operators, researchers, and builders united by a shared mission: 
              democratizing AI for sustainable human development and progress.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Leadership Team */}
      <section className="px-8 py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          {/* Team Hero Image */}
          <div className="relative rounded-2xl h-64 mb-16 overflow-hidden">
            <Image
              src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg"
              alt="Leadership Team - Professional team meeting and collaboration"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
              <div className="text-center text-white">
                <h3 className="text-3xl font-bold mb-2">Our Leadership</h3>
                <p className="text-xl opacity-90">Experienced operators building the future</p>
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
                Leadership<br />
                Team
              </h2>
              <p className="text-xl text-gray-600">
                Experienced operators and researchers leading our mission.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {leadership.map((leader, index) => (
                <motion.div
                  key={leader.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow border-gray-200">
                    <CardHeader className="text-center pb-4">
                      <div className="w-24 h-24 bg-gray-600 rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4">
                        {leader.image}
                      </div>
                      <CardTitle className="text-xl text-gray-900">{leader.name}</CardTitle>
                      <p className="text-gray-600 font-medium">{leader.role}</p>
                      <div className="flex items-center justify-center space-x-1 text-sm text-gray-600">
                        <MapPin className="h-4 w-4" />
                        <span>{leader.location}</span>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <p className="text-gray-600 text-center leading-relaxed">{leader.bio}</p>
                      
                      <div>
                        <h4 className="font-medium text-gray-900 mb-2 text-center">Expertise</h4>
                        <div className="flex flex-wrap gap-2 justify-center">
                          {leader.expertise.map((skill) => (
                            <Badge key={skill} variant="secondary" className="bg-gray-100 text-gray-700 text-xs">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="flex justify-center space-x-3 pt-2">
                        {leader.social.linkedin && (
                          <Button variant="ghost" size="icon" className="h-8 w-8 text-gray-500 hover:text-gray-700">
                            <Linkedin className="h-4 w-4" />
                          </Button>
                        )}
                        {leader.social.twitter && (
                          <Button variant="ghost" size="icon" className="h-8 w-8 text-gray-500 hover:text-gray-700">
                            <Twitter className="h-4 w-4" />
                          </Button>
                        )}
                        {/* GitHub link - not available for all team members */}
                        {/*leader.social?.github && (
                          <Button variant="ghost" size="icon" className="h-8 w-8 text-gray-500 hover:text-gray-900">
                            <Github className="h-4 w-4" />
                          </Button>
                        )*/}
                        <Button variant="ghost" size="icon" className="h-8 w-8 text-gray-500 hover:text-gray-900">
                          <Mail className="h-4 w-4" />
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

      {/* Core Team */}
      <section className="px-8 py-24 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-16"
        >
          <div className="space-y-8">
            <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-[0.9] text-balance">
              Our Core<br />
              Team
            </h2>
            <p className="text-xl text-gray-600 text-center">
              The builders behind our AI systems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow border-gray-200">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-gray-600 to-gray-800 rounded-full flex items-center justify-center text-white font-semibold text-sm flex-shrink-0">
                        {member.image}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-gray-900 mb-1">{member.name}</h3>
                        <p className="text-gray-600 text-sm font-medium mb-2">{member.role}</p>
                        <div className="flex items-center space-x-1 text-xs text-gray-600 mb-3">
                          <MapPin className="h-3 w-3" />
                          <span>{member.location}</span>
                        </div>
                        <div className="flex flex-wrap gap-1">
                          {member.expertise.map((skill) => (
                            <Badge key={skill} variant="secondary" className="bg-gray-100 text-gray-600 text-xs">
                              {skill}
                            </Badge>
                          ))}
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

      {/* Team Values */}
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
                What Drives<br />
                Us
              </h2>
              <p className="text-xl text-gray-600">
                The principles that guide our work and decisions every day.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="h-full text-center hover:shadow-lg transition-shadow border-gray-200">
                    <CardContent className="p-6">
                      <div className="p-3 rounded-xl bg-gray-100 w-fit mx-auto mb-4">
                        <value.icon className="h-6 w-6 text-gray-700" />
                      </div>
                      <h3 className="font-semibold text-gray-900 mb-2">{value.title}</h3>
                      <p className="text-gray-600 text-sm">{value.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Join Us CTA */}
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
                Join Our<br />
                Mission
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl leading-relaxed">
                We're always looking for talented individuals who share our passion 
                for building AI systems that make a real difference.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-white text-black hover:bg-gray-100 px-8 py-4 text-base">
                View Open Roles
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="border border-white text-white hover:bg-white hover:text-black px-8 py-4 text-base bg-transparent">
                Learn About Culture
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}