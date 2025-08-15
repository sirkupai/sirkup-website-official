"use client"

import { useParams, useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const solutionDetails: Record<string, {
  title: string
  subtitle: string
  description: string
  features: string[]
}> = {
  'finance': {
    title: 'Finance Solutions',
    subtitle: 'AI-powered financial intelligence',
    description: 'Transform your financial operations with intelligent automation that delivers real-time insights, reduces risk, and ensures compliance.',
    features: [
      'Automated financial reporting and analytics',
      'Real-time fraud detection and prevention',
      'Regulatory compliance monitoring',
      'Risk assessment and management',
      'Predictive cash flow analysis',
      'Intelligent invoice processing'
    ]
  },
  'sales-marketing': {
    title: 'Sales & Marketing Solutions',
    subtitle: 'Accelerate growth with AI-driven insights',
    description: 'Leverage AI to understand your customers better, personalize engagement, and optimize your sales and marketing efforts.',
    features: [
      'Lead scoring and qualification',
      'Customer segmentation and targeting',
      'Campaign performance optimization',
      'Predictive customer analytics',
      'Content personalization',
      'Sales forecasting and pipeline management'
    ]
  },
  'customer-support': {
    title: 'Customer Support Solutions',
    subtitle: '24/7 intelligent customer service',
    description: 'Deploy conversational AI that understands context, handles complex queries, and delivers exceptional customer experiences.',
    features: [
      'Multilingual conversational AI agents',
      'Intelligent ticket routing and prioritization',
      'Sentiment analysis and feedback processing',
      'Knowledge base automation',
      'Real-time customer insights',
      'Seamless human handoff'
    ]
  },
  'operations': {
    title: 'Operations Solutions',
    subtitle: 'Optimize every aspect of your operations',
    description: 'Streamline workflows, reduce costs, and improve efficiency with AI-powered operational intelligence.',
    features: [
      'Supply chain optimization',
      'Inventory management and forecasting',
      'Process automation and optimization',
      'Quality control and assurance',
      'Predictive maintenance',
      'Resource allocation and scheduling'
    ]
  },
  'human-resources': {
    title: 'Human Resources Solutions',
    subtitle: 'Empower your workforce with AI',
    description: 'Transform HR operations with intelligent automation that enhances employee experience and drives organizational success.',
    features: [
      'AI-powered recruitment and screening',
      'Employee engagement analytics',
      'Performance management automation',
      'Learning and development recommendations',
      'Workforce planning and analytics',
      'HR chatbots and self-service'
    ]
  },
  'legal-compliance': {
    title: 'Legal & Compliance Solutions',
    subtitle: 'Ensure compliance with intelligent automation',
    description: 'Automate legal workflows and maintain compliance with secure, auditable AI systems designed for the legal industry.',
    features: [
      'Contract analysis and management',
      'Regulatory compliance monitoring',
      'Legal document automation',
      'Risk assessment and mitigation',
      'Audit trail and reporting',
      'Policy management and updates'
    ]
  }
}

export default function SolutionDetail() {
  const params = useParams()
  const router = useRouter()
  const id = params.id as string
  const solution = solutionDetails[id]

  if (!solution) {
    return (
      <div className="min-h-screen bg-white dark:bg-black flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Solution not found</h1>
          <Link href="/solutions">
            <Button className="bg-black dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-100">
              Back to Solutions
            </Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Hero Section */}
        <section className="py-12 md:py-20">
          <Button 
            onClick={() => router.back()} 
            variant="ghost" 
            className="mb-8 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
          >
            ← Back
          </Button>
          
          <div className="max-w-4xl">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-normal tracking-tight text-black dark:text-white mb-4">
              {solution.title}
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-6">
              {solution.subtitle}
            </p>
            <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 mb-8">
              {solution.description}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-black dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-100 px-6 py-3">
                Get started →
              </Button>
              <Button variant="outline" className="border-gray-300 dark:border-gray-700 text-black dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800 px-6 py-3">
                Contact sales
              </Button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="pb-12 md:pb-20">
          <h2 className="text-2xl md:text-3xl font-normal text-black dark:text-white mb-8">
            Key Features
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {solution.features.map((feature, index) => (
              <div key={index} className="flex items-start">
                <span className="mr-3 text-gray-400 dark:text-gray-500 mt-1">•</span>
                <span className="text-gray-700 dark:text-gray-300">{feature}</span>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 md:py-20 border-t border-gray-200 dark:border-zinc-800">
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-normal text-black dark:text-white mb-4">
              Ready to transform your {solution.title.toLowerCase().replace(' solutions', '')} operations?
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              Let's discuss how our AI solutions can help your business.
            </p>
            <Button className="bg-black dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-100 px-8 py-3">
              Schedule a demo
            </Button>
          </div>
        </section>
      </div>
    </div>
  )
}