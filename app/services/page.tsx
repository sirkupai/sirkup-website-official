"use client"

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { motion } from "framer-motion"
export default function PricingPage() {
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

  const automate = [
    {
      title: 'Increase Productivity',
      description:
        'Free up staff for strategic and creative tasks by automating repetitive workflows.'
    },
    {
      title: 'Cost Efficiency',
      description:
        'Cut overhead costs and reduce expensive errors linked to manual processes.'
    },
    {
      title: 'Better Compliance & Reporting',
      description:
        'Ensure accuracy in regulatory filings and simplify audits with reliable, trackable automation.'
    },
    {
      title: 'Scalability',
      description:
        'Grow without proportionally increasing headcount, using flexible automation that adapts as your business expands.'
    }
  ]

  const offerings = [
    {
      title: "HR Automations",
      items: [
        "Recruitment Automation – AI-powered resume parsing, interview scheduling, and seamless onboarding.",
        "Payroll Automation – Accurate salary processing, benefits administration, and compliance reporting.",
        "Employee Self-Service Portals – Streamlined leave requests, expense claims, and digital document management."
      ]
    },
    {
      title: "Finance & Accounting Automation",
      items: [
        "Invoice Processing – Automatic invoice generation, multi-level approval workflows, and real-time payment tracking.",
        "Expense Management – Receipt scanning, policy compliance checks, and automated reimbursements.",
        "Financial Reporting – On-demand dashboards and automated compliance-ready reports."
      ]
    },
    {
      title: "Media & Marketing Automations",
      items: [
        "Content Scheduling – Multi-platform post scheduling, campaign launches, and performance dashboards.",
        "Customer Engagement – Intelligent chatbots, automated email sequences, and targeted customer journeys.",
        "Lead Management – Automated lead scoring, qualification, and CRM integration."
      ]
    },
    {
      title: "IT & Operations Automations",
      items: [
        "Ticketing Systems – Automated support routing, escalation handling, and resolution tracking.",
        "Asset Management – Smart inventory tracking, maintenance alerts, and compliance audits.",
        "Data Integration – Seamless API connections for unified data across platforms."
      ]
    },
    {
      title: "Sales Automations",
      items: [
        "CRM Updates – Automatic activity logging, follow-up reminders, and sales pipeline visibility.",
        "Proposal & Quotation Automation – Instant proposal generation, digital approvals, and e-signatures."
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      {/* Hero Section */}
      <section
        ref={addSectionRef}
        className="relative pt-20 pb-10 px-4 md:px-8 text-center opacity-0"
      >
        <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-5xl font-normal text-black dark:text-white mb-6">
            Automation Solutions for Businesses
          </h2>
          <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 mb-6 md:mb-8 max-w-3xl mx-auto px-4">
            Enabling Efficiency, Accuracy, and Growth
          </p>
          <h3 className="text-3xl md:text-4xl font-normal text-center text-black dark:text-white mb-12">
            Executive Summary
          </h3>
          <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 mb-6 md:mb-8 max-w-3xl mx-auto px-4">
            At Sirkup Digital, we help businesses unlock efficiency and growth
            through intelligent automation. By reducing manual tasks, minimizing
            errors, and speeding up processes, we enable organizations to
            achieve more with less. Our tailored automation solutions streamline
            operations across HR, Finance, Marketing, Sales, and IT empowering
            teams to focus on high-value work while driving measurable ROI.
          </p>
        </div>

        {/* Why Automate? */}
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl md:text-4xl font-normal text-center text-black dark:text-white mb-12">
            Why Automate?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {automate.map((automate, index) => (
              <div
                key={index}
                className="bg-white dark:bg-zinc-800 rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-zinc-700 hover:-translate-y-1"
              >
                <h3 className="text-xl font-normal text-black dark:text-white mb-2">
                  {automate.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {automate.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section (no external icons) */}
        <section ref={addSectionRef} className="relative pt-16 pb-20 px-4 md:px-8 text-center opacity-0">
        <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl md:text-5xl font-normal text-black dark:text-white mb-12">
            Our Automation Service Offerings
            </h2>

            {/* Grid with equal height cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-fr gap-6">

            {/* Card 1 */}
            <div className="bg-white dark:bg-zinc-800 rounded-2xl p-8 shadow-md border border-gray-200 dark:border-zinc-700 hover:shadow-xl transition-all duration-300 text-left flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 dark:bg-zinc-800 text-lg">👥</span>
                <h3 className="text-xl font-semibold text-black dark:text-white">HR Automations</h3>
                </div>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2 flex-1">
                <li>Recruitment Automation: AI-powered resume parsing, interview scheduling, and seamless onboarding.</li>
                <li>Payroll Automation: Accurate salary processing, benefits administration, and compliance reporting.</li>
                <li>Employee Self-Service Portals: Streamlined leave requests, expense claims, and digital document management.</li>
                </ul>
            </div>

            {/* Card 2 */}
             <div className="bg-gray-50 dark:bg-zinc-700 rounded-2xl p-8 shadow-md border border-gray-200 dark:border-zinc-700 hover:shadow-xl transition-all duration-300 text-left flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                💸
                <h3 className="text-xl font-semibold text-black dark:text-white">Finance & Accounting Automations</h3>
                </div>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2 flex-1">
                <li>Invoice Processing: Automatic invoice generation, multi-level approval workflows, and real-time payment tracking.</li>
                <li>Expense Management: Receipt scanning, policy compliance checks, and automated reimbursements.</li>
                <li>Financial Reporting: On-demand dashboards and automated compliance-ready reports.</li>
                </ul>
            </div>

            {/* Card 3 */}
             <div className="bg-gray-50/80 dark:bg-zinc-700 rounded-2xl p-8 shadow-md border border-gray-200 dark:border-zinc-700 hover:shadow-xl transition-all duration-300 text-left flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                📣
                <h3 className="text-xl font-semibold text-black dark:text-white">Media & Marketing Automations</h3>
                </div>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2 flex-1">
                <li>Content Scheduling: Multi-platform post scheduling, campaign launches, and performance dashboards.</li>
                <li>Customer Engagement: Intelligent chatbots, automated email sequences, and targeted customer journeys.</li>
                <li>Lead Management: Automated lead scoring, qualification, and CRM integration.</li>
                </ul>
            </div>

            {/* Card 4 (centered) */}
            <div className="md:col-span-1 md:col-start-1 bg-gray-50/60 dark:bg-zinc-600 rounded-2xl p-8 shadow-md border border-gray-200 dark:border-zinc-700 hover:shadow-xl transition-all duration-300 text-left flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                🖥️
                <h3 className="text-xl font-semibold text-black dark:text-white">IT & Operations Automations</h3>
                </div>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2 flex-1">
                <li>Ticketing Systems: Automated support routing, escalation handling, and resolution tracking.</li>
                <li>Asset Management: Smart inventory tracking, maintenance alerts, and compliance audits.</li>
                <li>Data Integration: Seamless API connections for unified data across platforms.</li>
                </ul>
            </div>

            {/* Card 5 (centered) */}
            <div className="md:col-span-1 md:col-start-2 bg-gray-100 dark:bg-zinc-500 rounded-2xl p-8 shadow-md border border-gray-200 dark:border-zinc-700 hover:shadow-xl transition-all duration-300 text-left flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                📈
                <h3 className="text-xl font-semibold text-black dark:text-white">Sales Automations</h3>
                </div>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2 flex-1">
                <li>CRM Updates: Automatic activity logging, follow-up reminders, and sales pipeline visibility.</li>
                <li>Proposal & Quotation Automation: Instant proposal generation, digital approvals, and e-signatures.</li>
                </ul>
            </div>
            </div>
        </div>
        </section>
    <section ref={addSectionRef} className="relative pt-16 pb-20 px-4 md:px-8 text-center opacity-0">
        <div className="max-w-6xl mx-auto bg-gray-100 dark:bg-zinc-900 rounded-2xl p-20 text-center">
            <h2 className="text-3xl md:text-5xl font-normal text-black dark:text-white mb-12">
            How Our Process Works
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

            {/* Step 1 */}
            <div className="relative bg-white dark:bg-zinc-800 rounded-2xl shadow-md overflow-hidden flex flex-col items-center">
                <div className="w-full h-3 bg-black"></div>
                <div className="p-6">
                <h3 className="text-lg font-semibold text-black dark:text-white mt-2">Discovery</h3>
                <p className="text-gray-600 dark:text-gray-300 mt-3 text-sm">
                    We assess your existing workflows and identify automation opportunities.
                </p>
                </div>
            </div>

            {/* Step 2 */}
            <div className="relative bg-white dark:bg-zinc-800 rounded-2xl shadow-md overflow-hidden flex flex-col items-center">
                <div className="w-full h-3 bg-gray-500"></div>
                <div className="p-6">
                <h3 className="text-lg font-semibold text-black dark:text-white mt-2">Design & Development</h3>
                <p className="text-gray-600 dark:text-gray-300 mt-3 text-sm">
                    Tailored automation workflows designed to fit your business processes.
                </p>
                </div>
            </div>

            {/* Step 3 */}
            <div className="relative bg-white dark:bg-zinc-800 rounded-2xl shadow-md overflow-hidden flex flex-col items-center">
                <div className="w-full h-3 bg-black"></div>
                <div className="p-6">
                <h3 className="text-lg font-semibold text-black dark:text-white mt-2">Implementation</h3>
                <p className="text-gray-600 dark:text-gray-300 mt-3 text-sm">
                    Smooth deployment with minimal disruption to daily operations.
                </p>
                </div>
            </div>

            {/* Step 4 */}
            <div className="relative bg-white dark:bg-zinc-800 rounded-2xl shadow-md overflow-hidden flex flex-col items-center">
                <div className="w-full h-3 bg-gray-500"></div>
                <div className="p-6">
                <h3 className="text-lg font-semibold text-black dark:text-white mt-2">Training & Support</h3>
                <p className="text-gray-600 dark:text-gray-300 mt-3 text-sm">
                    Hands-on training and continuous optimization for long-term success.
                </p>
                </div>
            </div>

            </div>
        </div>
    </section>


    {/* Pricing Section */}
    <section
    ref={addSectionRef}
    className="relative pt-10 pb-20 px-4 md:px-8 text-center opacity-0"
    >
    <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2 className="text-2xl md:text-5xl font-normal text-black dark:text-white mb-6">
        Pricing Plans
        </h2>
        <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 mb-12 max-w-3xl mx-auto">
        Choose a plan that fits your needs. Transparent pricing with no
        hidden costs.
        </p>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch justify-center max-w-5xl mx-auto">
        
        {/* Card 2 */}
        <div className="bg-white dark:bg-zinc-900 rounded-2xl shadow-lg p-8 flex flex-col text-left border-2 border-black dark:border-white max-w-md w-full h-full">
            <h3 className="text-xl font-semibold text-black dark:text-white mb-4">
            POPULAR
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
            Business Partner
            </p>
            <p className="text-4xl font-bold text-black dark:text-white mb-6">
            $10,000{" "}
            <span className="text-lg font-medium text-gray-600 dark:text-gray-400">
                /mo
            </span>
            </p>
            <ul className="space-y-3 text-gray-700 dark:text-gray-300 mb-8">
            {["Dedicated AI Engineer", "VIP support queue", "Documentation and user guides", "Live debugging and solution management", "Client portal"].map(
                (item, i) => (
                <li key={i} className="flex items-center gap-2">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                    >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                    />
                    </svg>
                    <span>{item}</span>
                </li>
                )
            )}
            </ul>
            <Link
            href="/contact"
            className="mt-auto inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-black dark:text-white border border-gray-300 dark:border-zinc-700 rounded-full hover:bg-gray-50 dark:hover:bg-zinc-800 transition-colors"
            >
            Get Started
            </Link>
        </div>

        {/* Card 3 */}
        <div className="bg-white dark:bg-zinc-900 rounded-2xl shadow-lg p-8 flex flex-col text-left max-w-md w-full h-full">
            <h3 className="text-xl font-semibold text-black dark:text-white mb-4">
            Enterprise Partner
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
            Custom
            </p>
            <p className="text-4xl font-bold text-black dark:text-white mb-6">
            Custom{" "}
            <span className="text-lg font-medium text-gray-600 dark:text-gray-400">
                pricing
            </span>
            </p>
            <ul className="space-y-3 text-gray-700 dark:text-gray-300 mb-8">
            {["Dedicated Project Manager", "Weekly 60 minute meetings with our executive team", "Strategic roadmap review", "Team training and enablement sessions", "Documentation of all completed work","Quarterly executive briefing", "Everything customized for you and your business"].map(
                (item, i) => (
                <li key={i} className="flex items-center gap-2">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                    >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                    />
                    </svg>
                    <span>{item}</span>
                </li>
                )
            )}
            </ul>
            <Link
            href="/contact"
            className="mt-auto inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-white bg-black dark:bg-white dark:text-black rounded-full hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
            >
            Contact Sales
            </Link>
        </div>
        </div>
    </div>
    </section>
    <section ref={addSectionRef} className="relative pt-5 pb-20 px-4 md:px-8 text-center opacity-0">
        {/* Featured Research Roles */}
        <h2 className="text-2xl md:text-5xl font-normal text-black dark:text-white mb-6">
            Why Choose Sirkup AI?
        </h2>

        {/* 4-Column Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pt-12">
            {[
            {
                title: "Expertise",
                text: "Proven success delivering automation across diverse industries",
            },
            {
                title: "Value-Focused",
                text: "Clear ROI with solutions aligned to your growth objectives",
            },
            {
                title: "Dedicated Support",
                text: "Post-implementation assistance and scalable solutions as your business evolves",
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
    {/* CTA Section */}
    <section ref={addSectionRef} className="py-12 md:py-20 opacity-0">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="bg-gray-100 dark:bg-zinc-900 rounded-2xl py-20 text-center">
        <h2 className="text-4xl font-normal mb-4 dark:text-white">
            Book a free process assessment with Sirkup AI today.
        </h2>
        <Link 
            href="/contact" 
            className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-white bg-black dark:bg-white dark:text-black rounded-full hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
        >
            Contact sales
        </Link>
        </div>
        </div>
    </section>
    </div>
  )
}
