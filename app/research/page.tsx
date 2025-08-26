"use client"

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { Card } from '@/components/ui/card'
import Image from 'next/image'
import { motion } from "framer-motion"

export default function SalesMarketingPage() {
  const sectionsRef = useRef<HTMLElement[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up')
          }
        })
      },
      { threshold: 0.1 }
    )

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])

  const addSectionRef = (el: HTMLElement | null) => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current.push(el)
    }
  }
const items = [
    {
      title: "AI Agent Operator Framework",
      text: "Developing standardized methodologies for deploying, monitoring, and optimizing AI agents across different industries and use cases.",
    },
    {
      title: "Multilingual AI Ethics",
      text: "Research into culturally-sensitive AI design that respects local contexts while maintaining consistent ethical standards across global deployments.",
    },
    {
      title: "Human-AI Collaboration Models",
      text: "Studying optimal interaction patterns between human professionals and AI agents to maximize both efficiency and job satisfaction.",
    },
  ]
  const features = [
    {
      title: 'Content Intelligence Systems for faster asset creation',
      description: 'From 8 hours to 30 minutes per asset with AI-assisted workflows.',
      image: '/images/sales-and-marketing-subpages (1).jpg'
    },
    {
      title: 'Conversational Intelligence for sales teams',
      description: 'Handle objections and qualify leads with domain-trained AI.',
      image: '/images/sales-and-marketing-subpages (2).jpg'
    },
    {
      title: 'AI-powered campaign optimization',
      description: 'Data-driven insights for better targeting and engagement.',
      image: '/images/sales-and-marketing-subpages (3).jpg'
    }
  ]

  const  breakthroughs = [
    {
      description: 'Context-aware dialogue systems that remember conversation history',
    },
    {
      description: 'Intent recognition across multiple languages and cultural contexts',
    },
    {
      description: 'Sentiment analysis that adapts responses to customer emotional states',
    }
  ]
const  enterpriseapplications  = [
    {
      description: 'Content production cycles reduced from 8 hours to 30 minutes',
    },
    {
      description: 'Automated quality control systems preventing defects before they occur',
    },
    {
      description: 'Predictive maintenance reducing equipment downtime by 65%',
    }
  ]
const researchfocus = [
    {
      title: 'Personalized Learning Paths',
      description: 'that adapt to individual skill levels and learning styles',
    },
    {
      title: 'Real-world Application',
      description: 'through hands-on projects using actual business scenarios',
    },
    {
      title: 'Continuous Curriculum Evolution',
      description: 'ensuring learners stay current with AI advancements',
    }
  ]
  const stats = [
    { percentage: '8h → 30m', description: 'content production time' },
    { percentage: '99.7%', description: 'conversation accuracy' },
    { percentage: '40%', description: 'increase in conversions' }
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      {/* Hero Section */}
      <section ref={addSectionRef} className="relative py-20 px-4 md:px-8 text-center opacity-0">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-normal tracking-tight text-black dark:text-white mb-4 md:mb-6">
              Our Research
            </h1>
            <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 mb-6 md:mb-8 max-w-3xl mx-auto px-4">
              Pioneering AI solutions that bridge the gap between artificial intelligence capabilities and realworld business challenges. Our research drives innovation across enterprise automation,
                educational technology, and social impact initiatives.

            </p>
          <Link 
            href="/contact" 
            className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-white bg-black dark:bg-white dark:text-black rounded-full hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
          >
            View Research Index
          </Link>
        </div>
      </section>
    {/* Core Research Areas */}
    <section ref={addSectionRef} className="relative pt-10 pb-20 px-4 md:px-8 text-center opacity-0">
        <div className="max-w-4xl mx-auto">
            {/* Small heading */}
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">Core Research Areas</p>

            {/* Main heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight text-black dark:text-white mb-8 leading-tight">
            Enterprise AI Agents
            </h1>

            {/* Intro paragraph */}
            <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 mb-8 max-w-3xl mx-auto px-4">
            We develop AI systems that understand business context, execute complex multi-step processes, and deliver measurable outcomes across industries.
            </p>

            {/* Image below text */}
            <div className="relative w-full max-w-4xl mx-auto mb-8">
            <Image
                src="/images/VirtualAssistan-light.webp"
                alt="VirtualAssistan-light"
                className="object-contain rounded-lg dark:hidden"
                width={1200}
                height={800}
                quality={100}
                priority
            />
            <Image
                src="/images/VirtualAssistan-dark.webp"
                alt="VirtualAssistan-dark"
                className="object-contain rounded-lg hidden dark:block"
                width={1200}
                height={800}
                quality={100}
                priority
                />
            </div>

            {/* Conversational AI paragraph */}
            <div className="max-w-3xl mx-auto text-center">
            <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 mb-4 px-4">
                Conversational AI chatbot interface with clear user avatars, message bubbles, timestamps, and input field for engaging interaction.
            </p>
            <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 mb-6 px-4">
                Our conversational AI research achieves 99.7% accuracy in complex business interactions, enabling automated customer service, lead qualification, and sales processes that maintain human-like understanding while scaling infinitely.
            </p>
            </div>
            {/* Key breakthroughs */}
            <div className="max-w-7xl mx-auto">
          <h3 className="text-3xl md:text-4xl font-normal text-center text-black dark:text-white mb-12">
            Key Breakthroughs
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {breakthroughs.map((bthroughs, index) => (
              <div key={index} className="bg-white dark:bg-zinc-800 rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-zinc-700 hover:-translate-y-1">
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {bthroughs.description}
                </p>
              </div>
            ))}
          </div>
        </div>
        </div>
    </section>
    {/* Workflow Intelligence Systems */}
    <section ref={addSectionRef} className="relative pt-10 pb-20 px-4 md:px-8 text-center opacity-0">
        <div className="max-w-5xl mx-auto">
            {/* Main heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight text-black dark:text-white mb-12 leading-tight">
            Workflow Intelligence Systems
            </h1>
            {/* Two-column layout: Image + Conversational AI paragraph */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center mb-16">
                {/* Left: Image */}
                <div className="w-full max-w-lg mx-auto">
                    <Image
                    src="/images/7 STEPS-light.png"
                    alt="steps"
                    className="w-[400px] h-auto mx-auto object-contain rounded-lg dark:hidden"
                    width={1200}
                    height={800}
                    quality={100}
                    priority
                    />
                    <Image
                    src="/images/7-steps-dark.png"
                    alt="steps-dark"
                    className="w-[400px] h-auto mx-auto object-contain rounded-lg hidden dark:block"
                    width={1200}
                    height={800}
                    quality={100}
                    priority
                    />
                </div>

                {/* Right: Conversational AI paragraph */}
                <div className="text-left md:text-left">
                    <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 mb-4">
                    Seven steps to implement AI workflow automation in enterprise settings, depicted as an
                    ascending staircase diagram.
                    </p>
                    <p className="text-base md:text-lg text-gray-700 dark:text-gray-300">
                    Our research into AI workflow automation transforms how businesses operate by creating
                    intelligent systems that can reason through processes, make decisions, and adapt to changing
                    conditions.
                    </p>
                </div>
            </div>

            {/* Enterprise Applications */}
            <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-normal text-center text-black dark:text-white mb-12">
                Enterprise Applications
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {enterpriseapplications.map((eapplications, index) => (
                <div
                    key={index}
                    className="bg-white dark:bg-zinc-800 rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-zinc-700 hover:-translate-y-1"
                >
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                    {eapplications.description}
                    </p>
                </div>
                ))}
            </div>
            </div>

            {/* Technical Innovation */}
            <div className="max-w-3xl mx-auto text-center mt-20">
            <h3 className="text-3xl md:text-4xl font-normal text-center text-black dark:text-white mb-12">
                Technical Innovation
            </h3>
            <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 mb-6 px-4">
                We use advanced machine learning pipelines built with TensorFlow, Keras, and scikit-learn to
                create predictive models that optimize for both accuracy and real-world performance metrics.
            </p>
            </div>
        </div>
    </section>

    {/* Educational AI Platforms */}
    <section ref={addSectionRef} className="relative pt-10 pb-20 px-4 md:px-8 text-center opacity-0">
            <div className="max-w-4xl mx-auto">
                {/* Main heading */}
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight text-black dark:text-white mb-8 leading-tight">
                Educational AI Platforms
                </h1>
                {/* Image below text */}
                <div className="relative w-full max-w-4xl mx-auto mb-8">
                <Image
                    src="/images/Learning-Final-01.png"
                    alt="Learning-Final-01"
                    className="w-[800px] h-auto mx-auto object-contain rounded-lg dark:hidden"
                    width={1000}
                    height={600}
                    quality={100}
                    priority
                />
                <Image
                    src="/images/LF-dark.png"
                    alt="LF-dark"
                    className="w-[800px] h-auto mx-auto object-contain rounded-lg hidden dark:block"
                    width={1000}
                    height={600}
                    quality={100}
                    priority
                    />
                </div>

                {/* Conversational AI paragraph */}
                <div className="max-w-3xl mx-auto text-center">
                <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 mb-4 px-4">
                    Key features to consider when evaluating AI-powered learning platforms, including
                    personalization, analytics, social learning, and technical support.
                </p>
                <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 mb-6 px-4">
                    SirkupAI Academy represents our commitment to democratizing AI education through adaptive
                    learning systems that evolve with emerging technologies.
                </p>
                </div>
                {/* Enterprise Applications */}
                <div className="max-w-7xl mx-auto">
                <h5 className="text-3xl md:text-4xl font-normal text-center text-black dark:text-white mb-12">
                    Our research focuses on:
                </h5>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {researchfocus.map((researchfocus, index) => (
                    <div key={index} className="bg-white dark:bg-zinc-800 rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-zinc-700 hover:-translate-y-1">
                        <h3 className="text-xl font-normal text-black dark:text-white mb-2">
                        {researchfocus.title}
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                        {researchfocus.description}
                        </p>
                    </div>
                    ))}
                </div>
                </div>
                <div className="max-w-3xl mx-auto text-center mt-20">
                <h3 className="text-3xl md:text-4xl font-normal text-center text-black dark:text-white mb-12">
                    Research Impact
                </h3>
                <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 mb-6 px-4">
                    Students completing our AI Agent Operator programs show 40% faster skill acquisition
                    compared to traditional programming courses, with 85% job placement rates in AI-related roles

                </p>
                </div>
            </div>
    </section>
    {/* Social Impact Intelligence */}
    <section ref={addSectionRef} className="relative pt-10 pb-20 px-4 md:px-8 text-center opacity-0">
            <div className="max-w-4xl mx-auto">
                {/* Main heading */}
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight text-black dark:text-white mb-8 leading-tight">
                Social Impact Intelligence
                </h1>
                {/* Intro paragraph */}
                <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 mb-8 max-w-3xl mx-auto px-4">
                Illustration of diverse researchers exploring AI, innovation, and technology through virtual reality
                and scientific collaboration.
                </p>
            </div>
    </section>
    {/* Social Impact Two Product Cards Section */}
        <section ref={addSectionRef} className="relative pt-5 pb-20 px-4 md:px-8 opacity-0">
            <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
            {/* Research Achievements */}
            <Card className="p-8 border border-gray-200 dark:border-zinc-800 rounded-xl hover:shadow-lg dark:hover:shadow-zinc-900/50 transition-shadow">
              <h2 className="text-2xl font-semibold mb-4 dark:text-white">Research Achievements</h2>
              <ul className="space-y-3 mb-8 text-sm text-gray-700 dark:text-gray-300">
                <li className="flex items-start">
                  <span className="mr-3 text-gray-400 dark:text-gray-500">•</span>
                  <span>Multilingual legal consultation system serving underserved communities</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-gray-400 dark:text-gray-500">•</span>
                  <span>Integration with government ombudsman offices for streamlined complaint processing</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-gray-400 dark:text-gray-500">•</span>
                  <span>Trauma-informed AI design principles ensuring ethical interaction with vulnerable populations</span>
                </li>
              </ul>
            </Card>

            {/* Global Applications */}
            <Card className="p-8 border border-gray-200 dark:border-zinc-800 rounded-xl hover:shadow-lg dark:hover:shadow-zinc-900/50 transition-shadow">
              <h2 className="text-2xl font-semibold mb-4 dark:text-white">Global Applications</h2>
              <ul className="space-y-3 mb-8 text-sm text-gray-700 dark:text-gray-300">
                <li className="flex items-start">
                  <span className="mr-3 text-gray-400 dark:text-gray-500">•</span>
                  <span>Healthcare: AI agents reducing patient wait times by 65% while improving care coordination</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-gray-400 dark:text-gray-500">•</span>
                  <span>Government Services: Multilingual AI assistants making public services accessible to diverse populations</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-gray-400 dark:text-gray-500">•</span>
                  <span>Financial Inclusion: Automated loan processing systems serving previously excluded demographics</span>
                </li>
              </ul>
            </Card>
          </div>
        </section>
    {/* Advanced AI Infrastructure */}
    <section ref={addSectionRef} className="relative pt-10 pb-20 px-4 md:px-8 text-center opacity-0">
            <div className="max-w-4xl mx-auto">
                {/* Main heading */}
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight text-black dark:text-white mb-8 leading-tight">
                Advanced AI Infrastructure
                </h1>
                {/* Image below text */}
                <div className="relative w-full max-w-4xl mx-auto mb-8">
                <Image
                    src="/images/AI-Infrastructure-light.png"
                    alt="VirtualAssistan-light"
                    className="object-contain rounded-lg dark:hidden"
                    width={1000}
                    height={600}
                    quality={100}
                    priority
                />
                <Image
                    src="/images/AI-Infrastructure-dark.png"
                    alt="VirtualAssistan-dark"
                    className="object-contain rounded-lg hidden dark:block"
                    width={1000}
                    height={600}
                    quality={100}
                    priority
                    />
                </div>

                {/* Conversational AI paragraph */}
                <div className="max-w-3xl mx-auto text-center">
                <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 mb-4 px-4">
                    An advanced AI automation workflow integrating OpenAI chat and Microsoft services for
                    enterprise conversational agent tasks.
                </p>
                <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 mb-6 px-4">
                    Our technical research focuses on building scalable, secure, and ethical AI systems that
                    integrate seamlessly with existing business infrastructure.
                </p>
                </div>
            </div>
    </section>
    {/* Advanced AI Infrastructure Two Product Cards Section */}
    <section ref={addSectionRef} className="relative pt-5 pb-20 px-4 md:px-8 opacity-0">
            <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
            {/* Core Technologies */}
            <Card className="p-8 border border-gray-200 dark:border-zinc-800 rounded-xl hover:shadow-lg dark:hover:shadow-zinc-900/50 transition-shadow">
              <h2 className="text-2xl font-semibold mb-4 dark:text-white">Core Technologies</h2>
              <ul className="space-y-3 mb-8 text-sm text-gray-700 dark:text-gray-300">
                <li className="flex items-start">
                  <span className="mr-3 text-gray-400 dark:text-gray-500">•</span>
                  <span>n8n Automation Workflows for complex multi-system integrations</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-gray-400 dark:text-gray-500">•</span>
                  <span>Secure API Development including Whisper, Telegram, and enterprise connectors</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-gray-400 dark:text-gray-500">•</span>
                  <span>Cloud-Native Deployment optimized for real-time data processing and global accessibility</span>
                </li>
              </ul>
            </Card>

            {/* Research Methodologies */}
            <Card className="p-8 border border-gray-200 dark:border-zinc-800 rounded-xl hover:shadow-lg dark:hover:shadow-zinc-900/50 transition-shadow">
              <h2 className="text-2xl font-semibold mb-4 dark:text-white">Research Methodologies</h2>
              <ul className="space-y-3 mb-8 text-sm text-gray-700 dark:text-gray-300">
                <li className="flex items-start">
                  <span className="mr-3 text-gray-400 dark:text-gray-500">•</span>
                  <span>Continuous model evaluation based on real-world performance metrics</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-gray-400 dark:text-gray-500">•</span>
                  <span>Bias detection and mitigation protocols for all AI agent deployments</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-gray-400 dark:text-gray-500">•</span>
                  <span>Human-in-the-loop systems ensuring AI recommendations align with business objectives</span>
                </li>
              </ul>
            </Card>
          </div>
        </section>
        <section className="relative py-12 px-4 md:px-8">
            <div className="max-w-5xl mx-auto">
                {/* Section Heading */}
                <h2 className="text-2xl md:text-3xl font-semibold text-center text-gray-900 dark:text-white mb-6">
                Research Impact Metrics
                </h2>

                {/* Table */}
                <div className="overflow-x-auto">
                <table className="w-full border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
                <thead className="bg-gray-100 dark:bg-gray-800">
                    <tr>
                    <th className="text-left px-6 py-3 text-sm font-semibold text-gray-700 dark:text-gray-300 border-b border-gray-200 dark:border-gray-700">
                        Research Area
                    </th>
                    <th className="text-left px-6 py-3 text-sm font-semibold text-gray-700 dark:text-gray-300 border-b border-gray-200 dark:border-gray-700">
                        Key Metric
                    </th>
                    <th className="text-left px-6 py-3 text-sm font-semibold text-gray-700 dark:text-gray-300 border-b border-gray-200 dark:border-gray-700">
                        Business Impact
                    </th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                    <tr>
                    <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-100">Conversational AI</td>
                    <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-100">99.7% accuracy</td>
                    <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-100">3–5x productivity improvements</td>
                    </tr>
                    <tr>
                    <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-100">Content Intelligence</td>
                    <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-100">30-minute workflows</td>
                    <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-100">25% increase in engagement rates</td>
                    </tr>
                    <tr>
                    <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-100">Educational Platforms</td>
                    <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-100">85% job placement</td>
                    <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-100">40% faster skill acquisition</td>
                    </tr>
                    <tr>
                    <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-100">Social Impact Tools</td>
                    <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-100">65% reduced wait times</td>
                    <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-100">Serving 10,000+ underserved users</td>
                    </tr>
                </tbody>
                </table>
                </div>
            </div>
        </section>
    <section className="relative py-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-semibold text-center text-gray-900 dark:text-white mb-6">
          Open Research Initiatives
        </h2>
        <div className="grid md:grid-cols-3 gap-8 pt-12">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="relative bg-gray-100 dark:bg-zinc-900 rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow duration-300"
            >
              {/* Numbered Circle */}
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                <div className="w-12 h-12 rounded-full border-2 border-gray-500 bg-white dark:bg-zinc-900 flex items-center justify-center text-gray-800 dark:text-gray-200 font-bold text-lg shadow-sm">
                  {i + 1}
                </div>
              </div>

              {/* Card Content */}
              <h3 className="mt-8 text-lg font-semibold text-gray-800 dark:text-gray-200">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
    {/* Publications and Partnerships */}
    <section ref={addSectionRef} className="relative pt-10 pb-10 px-4 md:px-8 text-center opacity-0">
            <div className="max-w-4xl mx-auto">
                {/* Main heading */}
                <h2 className="text-2xl md:text-3xl font-semibold text-center text-gray-900 dark:text-white mb-6">
                Publications and Partnerships
                </h2>
                {/* Intro paragraph */}
            </div>
    </section>
    {/* Publications and Partnerships Two Product Cards Section */}
        <section ref={addSectionRef} className="relative pt-5 pb-20 px-4 md:px-8 opacity-0">
            <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
            {/* Academic Collaborations */}
            <Card className="p-8 border border-gray-200 dark:border-zinc-800 rounded-xl hover:shadow-lg dark:hover:shadow-zinc-900/50 transition-shadow">
              <h2 className="text-2xl font-semibold mb-4 dark:text-white">Academic Collaborations</h2>
              <ul className="space-y-3 mb-8 text-sm text-gray-700 dark:text-gray-300">
                <li className="flex items-start">
                  <span className="mr-3 text-gray-400 dark:text-gray-500">•</span>
                  <span>Research partnerships with universities in Pakistan and UAE</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-gray-400 dark:text-gray-500">•</span>
                  <span>Open-source contributions to AI automation frameworks</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-gray-400 dark:text-gray-500">•</span>
                  <span>Industry white papers on ethical AI deployment</span>
                </li>
              </ul>
            </Card>

            {/* Government Partnerships */}
            <Card className="p-8 border border-gray-200 dark:border-zinc-800 rounded-xl hover:shadow-lg dark:hover:shadow-zinc-900/50 transition-shadow">
              <h2 className="text-2xl font-semibold mb-4 dark:text-white">Government Partnerships</h2>
              <ul className="space-y-3 mb-8 text-sm text-gray-700 dark:text-gray-300">
                <li className="flex items-start">
                  <span className="mr-3 text-gray-400 dark:text-gray-500">•</span>
                  <span>Collaboration with ombudsman offices for legal access research</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-gray-400 dark:text-gray-500">•</span>
                  <span>Public sector AI implementation consulting</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-gray-400 dark:text-gray-500">•</span>
                  <span>Policy development for responsible AI governance</span>
                </li>
              </ul>
            </Card>
          </div>
        </section>
        <section ref={addSectionRef} className="relative pt-5 pb-20 px-4 md:px-8 opacity-0">
            {/* Featured Research Roles */}
            <h2 className="text-2xl md:text-3xl font-semibold text-center text-gray-900 dark:text-white mb-6">
                Featured Research Roles
            </h2>
            <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 text-center mb-8 max-w-3xl mx-auto px-4">
                We are actively seeking talented researchers to join our mission of making AI beneficial for
                businesses and society.
            </p>

            {/* 4-Column Layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pt-12">
                {[
                {
                    title: "AI Research Scientists",
                    text: "Specializing in conversational intelligence",
                },
                {
                    title: "Machine Learning Engineers",
                    text: "Focused on scalable automation systems",
                },
                {
                    title: "Social Impact Researchers",
                    text: "Designing AI for underserved communities",
                },
                {
                    title: "Enterprise AI Architects",
                    text: "Building custom solutions for complex business challenges",
                },
                ].map((item, i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className={`rounded-2xl shadow-sm p-6 hover:shadow-md transition-shadow duration-300
                    ${i % 2 === 0 ? "bg-gray-100 dark:bg-zinc-900" : "bg-transparent"}`}
                >
                    {/* Card Content */}
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                    {item.title}
                    </h3>
                    <p className="mt-3 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                    {item.text}
                    </p>
                </motion.div>
                ))}
            </div>
        </section>
        <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Quote Section */}
        <section ref={addSectionRef} className="py-12 md:py-24 opacity-0">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-2xl lg:text-3xl font-light leading-relaxed text-gray-900 dark:text-white mb-8">
              "The future of AI research lies not in replacing human capability, but in amplifying human
                potential across all sectors of society. At SirkupAI, we're building that future through rigorous
                research and practical application."
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="#" 
                className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-white bg-black dark:bg-white dark:text-black rounded-full hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
              >
                View All Research Careers
              </Link>
              <Link 
                href="/contact" 
                className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-black dark:text-white border border-gray-300 dark:border-zinc-700 rounded-full hover:bg-gray-50 dark:hover:bg-zinc-800 transition-colors"
              >
                Contact Our Research Team
              </Link>
            </div>
          </div>
        </section>
      </div>
      
      {/* CTA Section */}
      <section ref={addSectionRef} className="py-12 md:py-20 opacity-0">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="bg-gray-100 dark:bg-zinc-900 rounded-2xl py-20 text-center">
            <h2 className="text-4xl font-normal mb-4 dark:text-white">
            Research Philosophy
          </h2>
          <p className="italic text-base md:text-lg text-gray-700 dark:text-gray-300 text-center mb-8 max-w-4xl mx-auto px-4">We believe the most impactful AI research happens at the intersection of cutting-edge
            technology and real-world problem solving. Our research doesn't just advance the field—it
            creates immediate value for businesses, learners, and communities worldwide.</p>
        </div>
        </div>
      </section>
    </div>
  )
}