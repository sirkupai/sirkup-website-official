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
  

  return (
    <div className="min-h-screen bg-white dark:bg-black">
        {/* Hero Section */}
      <section ref={addSectionRef} className="relative pt-20 pb-10 px-4 md:px-8 text-center opacity-0">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-normal tracking-tight text-black dark:text-white mb-4 md:mb-6">
              Privacy Policy
            </h1>
            <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 mb-6 md:mb-8 max-w-3xl mx-auto px-4">
              At SirkupAI (a flagship of Sirkup Digital), we are committed to protecting your privacy.
        This Privacy Policy explains how we collect, use, and safeguard your personal data in
        accordance with the General Data Protection Regulation (GDPR) and other applicable laws.
            </p>
        </div>
      </section>
      <section ref={addSectionRef} className="relative pt-10 pb-20 px-4 md:px-8 text-center opacity-0">
        <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-normal text-center text-black dark:text-white mb-12">
                Who We Are
            </h3>
            <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 mb-6 md:mb-8 max-w-3xl mx-auto px-4">
              SirkupAI is a digital innovation studio specializing in AI-powered enterprise solutions, educational technology, and social impact initiatives.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Card 1 */}
                <div className="bg-gray-100 dark:bg-zinc-900 rounded-2xl shadow-md p-6 text-center hover:shadow-lg transition">
                    <div className="flex justify-center items-center mb-4">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                        {/* Shield Icon */}
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary dark:text-primary-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                        </svg>
                    </div>
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">Data Controller</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                    SirkupAI (Sirkup Digital), with offices in Pakistan and the UAE.
                    </p>
                </div>

                {/* Card 2 */}
                <div className="bg-gray-100 dark:bg-zinc-900 rounded-2xl shadow-md p-6 text-center hover:shadow-lg transition">
                    <div className="flex justify-center items-center mb-4">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                        {/* Mail Icon */}
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary dark:text-primary-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4h16v16H4z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M22 6l-10 7L2 6" />
                        </svg>
                    </div>
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">Contact</h3>
                    <p className="text-gray-600 dark:text-gray-300">privacy@sirkup.ai</p>
                </div>

                {/* Card 3 */}
                <div className="bg-gray-100 dark:bg-zinc-900 rounded-2xl shadow-md p-6 text-center hover:shadow-lg transition">
                    <div className="flex justify-center items-center mb-4">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                        {/* User Icon */}
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary dark:text-primary-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A9 9 0 1119.879 17.8M12 7a4 4 0 100 8 4 4 0 000-8z" />
                        </svg>
                    </div>
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">Data Protection Officer</h3>
                    <p className="text-gray-600 dark:text-gray-300">[Insert DPO contact if appointed]</p>
                </div>
            </div>

        </div>
      </section>
      <section ref={addSectionRef} className="relative pt-10 pb-20 px-4 md:px-8 text-center opacity-0">
        <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-normal text-center text-black dark:text-white mb-12">
                Data We Collect
            </h3>
            <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 mb-6 md:mb-8 max-w-3xl mx-auto px-4">
            Here’s an overview of the types of information we collect to provide and
            improve our services.
            </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
            {/* vertical line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l border-muted-foreground/30 dark:border-muted-foreground/40"></div>

            {/* Personal Information (Left) */}
            <div className="mb-12 flex justify-start w-full">
            <div className="w-1/2 pr-8 text-right relative">
                <span className="absolute right-[-14px] top-1 flex items-center justify-center w-7 h-7 rounded-full bg-primary text-white dark:bg-zinc-900">
                {/* User Icon */}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5.121 17.804A9 9 0 1119.879 17.8M12 7a4 4 0 100 8 4 4 0 000-8z"
                    />
                </svg>
                </span>
                <h3 className="text-lg font-semibold text-black dark:text-white">Personal Information</h3>
                <p className="text-gray-700 dark:text-gray-300">
                Name, email, phone number, and billing details.
                </p>
            </div>
            <div className="w-1/2"></div>
            </div>

            {/* Usage Data (Right) */}
            <div className="mb-12 flex justify-end w-full">
            <div className="w-1/2"></div>
            <div className="w-1/2 pl-8 relative">
                <span className="absolute left-[-14px] top-1 flex items-center justify-center w-7 h-7 rounded-full bg-primary text-white dark:bg-zinc-900">
                {/* Device Icon */}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.75 17h4.5M12 3v1.5m6.364 1.136l-1.061 1.061M21 12h-1.5M4.5 12H3m3.136-6.364L5.075 7.697M12 21v-1.5m6.364-1.136l-1.061-1.061"
                    />
                </svg>
                </span>
               <h3 className="text-lg font-semibold text-black dark:text-white">Usage Data</h3>
                <p className="text-gray-700 dark:text-gray-300">
                Device info, IP addresses, log data, and browsing activity.
                </p>
            </div>
            </div>

            {/* Content Data (Left) */}
            <div className="mb-12 flex justify-start w-full">
            <div className="w-1/2 pr-8 text-right relative">
                <span className="absolute right-[-14px] top-1 flex items-center justify-center w-7 h-7 rounded-full bg-primary text-white dark:bg-zinc-900">
                {/* File Icon */}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4v16m8-8H4"
                    />
                </svg>
                </span>
                <h3 className="text-lg font-semibold text-black dark:text-white">Content Data</h3>
                <p className="text-gray-700 dark:text-gray-300">
                Inputs and uploads you provide to our AI tools (e.g., text, images,
                voice notes).
                </p>
            </div>
            <div className="w-1/2"></div>
            </div>

            {/* Cookies & Tracking (Right) */}
            <div className="flex justify-end w-full">
            <div className="w-1/2"></div>
            <div className="w-1/2 pl-8 relative">
                <span className="absolute left-[-14px] top-1 flex items-center justify-center w-7 h-7 rounded-full bg-primary text-white dark:bg-zinc-900">
                {/* Cookie Icon */}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20 12a8 8 0 11-8-8 4 4 0 008 8zm-4 8a8 8 0 110-16 4 4 0 010 8z"
                    />
                </svg>
                </span>
                <h3 className="text-lg font-semibold text-black dark:text-white">Cookies & Tracking</h3>
                <p className="text-gray-700 dark:text-gray-300">
                See our{" "}
                <a href="/cookie-policy" className="text-primary underline text-black dark:text-white">
                    Cookie Policy
                </a>{" "}
                for details.
                </p>
            </div>
            </div>
        </div>
        </section>
        <section ref={addSectionRef} className="relative pt-10 pb-20 px-4 md:px-8 text-center opacity-0">
        <div className="max-w-6xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-normal text-center text-black dark:text-white mb-12">
            Legal Basis for Processing
            </h3>
            <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 mb-6 md:mb-8 max-w-3xl mx-auto px-4">
            We process personal data under GDPR Article 6 on the following bases:
            </p>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {/* Consent */}
            <div className="rounded-xl shadow-md p-6 hover:shadow-lg transition flex flex-col items-center text-center">
                <div className="h-12 w-12 flex items-center justify-center rounded-full bg-primary/10 mb-4">
                {/* Consent Icon */}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary text-gray-900 dark:text-gray-100" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                Consent
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                For newsletters, marketing, and optional features.
                </p>
            </div>

            {/* Contractual Necessity */}
            <div className="rounded-xl shadow-md p-6 hover:shadow-lg transition flex flex-col items-center text-center">
                <div className="h-12 w-12 flex items-center justify-center rounded-full bg-primary/10 mb-4">
                {/* Contract Icon */}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary text-gray-900 dark:text-gray-100" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6M9 8h6M4 6h16v12H4z" />
                </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                Contractual Necessity
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                To provide and operate services you subscribe to (e.g., SirkupAI Academy).
                </p>
            </div>

            {/* Legitimate Interest */}
            <div className="rounded-xl shadow-md p-6 hover:shadow-lg transition flex flex-col items-center text-center">
                <div className="h-12 w-12 flex items-center justify-center rounded-full bg-primary/10 mb-4">
                {/* Interest Icon */}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary text-gray-900 dark:text-gray-100" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2v2m6.36.64l-1.42 1.42M22 12h-2M17.36 19.36l-1.42-1.42M12 22v-2M6.64 19.36l1.42-1.42M2 12h2M6.64 4.64l1.42 1.42" />
                </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                Legitimate Interest
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                To improve services, develop AI features, and prevent fraud.
                </p>
            </div>

            {/* Legal Obligation */}
            <div className="rounded-xl shadow-md p-6 hover:shadow-lg transition flex flex-col items-center text-center">
                <div className="h-12 w-12 flex items-center justify-center rounded-full bg-primary/10 mb-4">
                {/* Law Icon */}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary dark:text-primary-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6M9 16h6M9 8h6M4 6h16v12H4z" />
                </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                Legal Obligation
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                To comply with applicable laws and regulatory requests.
                </p>
            </div>
            </div>
        </div>
        </section>
        <section className="relative py-16 px-6 md:px-12">
            <div className="max-w-7xl mx-auto text-center bg-gray-100 dark:bg-zinc-900 rounded-2xl py-20 px-10">
            <h3 className="text-3xl md:text-4xl font-normal text-center text-black dark:text-white mb-12">
            How We Use Information
            </h3>
            <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 mb-6 md:mb-8 max-w-3xl mx-auto px-4">
            We use your data responsibly to provide better services, enhance AI capabilities, 
                and ensure compliance with legal requirements.
            </p>
                
                {/* Timeline */}
                <div className="relative flex items-center justify-between flex-col md:flex-row gap-6 md:gap-12">
                {/* Connector line */}
                <div className="absolute hidden md:block top-1/2 left-0 w-full border-t border-gray-300 dark:border-gray-700 -z-10"></div>

                {/* Step 1 */}
                <div className="flex flex-col items-center md:w-1/5 text-center">
                    <div className="w-8 h-8 flex items-center justify-center rounded-full bg-black dark:bg-white text-white dark:text-black mb-4 font-semibold">
                    1
                    </div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Deliver Services</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Deliver and improve our products and services.
                    </p>
                </div>

                {/* Step 2 */}
                <div className="flex flex-col items-center md:w-1/5 text-center">
                    <div className="w-8 h-8 flex items-center justify-center rounded-full bg-black dark:bg-white text-white dark:text-black mb-4 font-semibold">
                    2
                    </div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Support</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Provide technical support and respond to inquiries.
                    </p>
                </div>

                {/* Step 3 */}
                <div className="flex flex-col items-center md:w-1/5 text-center">
                    <div className="w-8 h-8 flex items-center justify-center rounded-full bg-black dark:bg-white text-white dark:text-black mb-4 font-semibold">
                    3
                    </div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">R&D</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Conduct research and development for AI systems.
                    </p>
                </div>

                {/* Step 4 */}
                <div className="flex flex-col items-center md:w-1/5 text-center">
                    <div className="w-8 h-8 flex items-center justify-center rounded-full bg-black dark:bg-white text-white dark:text-black mb-4 font-semibold">
                    4
                    </div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Security</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Ensure security, prevent abuse, and comply with regulations.
                    </p>
                </div>

                {/* Step 5 */}
                <div className="flex flex-col items-center md:w-1/5 text-center">
                    <div className="w-8 h-8 flex items-center justify-center rounded-full bg-black dark:bg-white text-white dark:text-black mb-4 font-semibold">
                    5
                    </div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Insights</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Share anonymized insights for education & impact reporting.
                    </p>
                </div>
                </div>
            </div>
            </section>
            {/* Two Product Cards Section */}
            <section ref={addSectionRef} className="relative py-16 px-6 md:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
                {/* Content Intelligence Card */}
                <Card className="p-8 border border-gray-300 dark:border-gray-700 rounded-xl hover:shadow-lg dark:hover:shadow-xl transition-shadow bg-transparent">
                <h2 className="text-2xl font-semibold mb-4 dark:text-white">Sharing & Disclosure</h2>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                    We do not sell personal data. We may share your data with:
                </p>

                <ul className="space-y-3 mb-8 text-sm text-gray-700 dark:text-gray-300">
                    <li className="flex items-start">
                    <span className="mr-3 text-gray-400 dark:text-gray-500">•</span>
                    <span>Service Providers: Hosting, analytics, payment processors.</span>
                    </li>
                    <li className="flex items-start">
                    <span className="mr-3 text-gray-400 dark:text-gray-500">•</span>
                    <span>Partners: Trusted collaborators for education or social impact (with consent where required).</span>
                    </li>
                    <li className="flex items-start">
                    <span className="mr-3 text-gray-400 dark:text-gray-500">•</span>
                    <span>Authorities: When legally required to comply with obligations or protect rights/safety.</span>
                    </li>
                </ul>
                </Card>

                {/* Conversational Intelligence Card */}
                <Card className="p-8 border border-gray-300 dark:border-gray-700 rounded-xl hover:shadow-lg dark:hover:shadow-xl transition-shadow bg-transparent">
                <h2 className="text-2xl font-semibold mb-4 dark:text-white">International Transfers</h2>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                    As we operate globally (Pakistan, UAE, and other regions), your data may be transferred outside the EU.
                </p>

                <ul className="space-y-3 mb-8 text-sm text-gray-700 dark:text-gray-300">
                    <li className="flex items-start">
                    <span className="mr-3 text-gray-400 dark:text-gray-500">•</span>
                    <span>Where required, we use Standard Contractual Clauses (SCCs) or other GDPR-approved safeguards.</span>
                    </li>
                    <li className="flex items-start">
                    <span className="mr-3 text-gray-400 dark:text-gray-500">•</span>
                    <span>By using our services, you consent to such transfers, subject to adequate protections.</span>
                    </li>
                </ul>
                </Card>
            </div>
            </section>
        <section ref={addSectionRef} className="relative pt-10 pb-20 px-4 md:px-8 text-center opacity-0">
        <div className="max-w-6xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-normal text-center text-black dark:text-white mb-12">
            Data Retention
            </h3>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-xl shadow-md p-6 hover:shadow-lg transition flex flex-col items-center text-center">
                <p className="text-gray-600 dark:text-gray-300">
                We retain personal data only as long as necessary for the purposes described.
                </p>
            </div>

            <div className="bg-gray-100 dark:bg-zinc-900 rounded-xl shadow-md p-6 hover:shadow-lg transition flex flex-col items-center text-center">
                <p className="text-gray-600 dark:text-gray-300">
                For sensitive cases (e.g., AdalBot GBV reports), users may select auto-deletion after 30/60/90 days.
                </p>
            </div>
            <div className="rounded-xl shadow-md p-6 hover:shadow-lg transition flex flex-col items-center text-center">
                <p className="text-gray-600 dark:text-gray-300">
                When data is no longer needed, it is securely deleted.
                </p>
            </div>

            </div>
        </div>
        </section>
        <section ref={addSectionRef} className="relative pt-10 pb-10 px-4 md:px-8 text-center opacity-0">
        <div className="max-w-6xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-normal text-center text-black dark:text-white mb-12">
            Your Rights (GDPR)
            </h3>
            <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 mb-6 md:mb-8 max-w-3xl mx-auto px-4">
            You have the right to:
            </p>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-gray-100 dark:bg-zinc-900 rounded-xl shadow-md p-6 hover:shadow-lg transition flex flex-col items-center text-center">
                <p className="text-gray-600 dark:text-gray-300">
                Access a copy of your personal data.
                </p>
            </div>

            <div className="rounded-xl shadow-md p-6 hover:shadow-lg transition flex flex-col items-center text-center">
                <p className="text-gray-600 dark:text-gray-300">
                Correct inaccurate or incomplete data.
                </p>
            </div>
            <div className="bg-gray-100 dark:bg-zinc-900 rounded-xl shadow-md p-6 hover:shadow-lg transition flex flex-col items-center text-center">
                <p className="text-gray-600 dark:text-gray-300">
                Request deletion (“right to be forgotten”).
                </p>
            </div>
            <div className="rounded-xl shadow-md p-6 hover:shadow-lg transition flex flex-col items-center text-center">
                <p className="text-gray-600 dark:text-gray-300">
                Restrict or object to processing.
                </p>
            </div>
            <div className="bg-gray-100 dark:bg-zinc-900 rounded-xl shadow-md p-6 hover:shadow-lg transition flex flex-col items-center text-center">
                <p className="text-gray-600 dark:text-gray-300">
                Request data portability.
                </p>
            </div>
            <div className="rounded-xl shadow-md p-6 hover:shadow-lg transition flex flex-col items-center text-center">
                <p className="text-gray-600 dark:text-gray-300">
                Withdraw consent at any time (without affecting prior lawful processing).
                </p>
            </div>
            </div>
        </div>
        <div className="max-w-6xl mx-auto py-10">
        <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 mb-6 md:mb-8 max-w-3xl mx-auto px-4">
            To exercise these rights, contact us at privacy@sirkup.ai
            </p>
        </div>
        </section>
        <section ref={addSectionRef} className="relative pt-10 pb-10 px-4 md:px-8 text-center opacity-0">
        <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-normal text-center text-black dark:text-white mb-12">
                Complaints & Supervisory Authority
            </h3>
            <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 mb-6 md:mb-8 max-w-3xl mx-auto px-4">
              If you are in the European Economic Area (EEA), you have the right to lodge a complaint with your local Data Protection Authority (DPA) if you believe we are not handling your data lawfully.
            </p>
            <h3 className="text-3xl md:text-4xl font-normal text-center text-black dark:text-white mb-12">
                Children’s Privacy
            </h3>
            <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 mb-6 md:mb-8 max-w-3xl mx-auto px-4">
              Our services are not directed at children under 13 (or the minimum legal age in your jurisdiction). We do not knowingly collect data from children.
            </p>
        </div>
      </section>
      <section ref={addSectionRef} className="relative pt-10 pb-20 px-4 md:px-8 text-center opacity-0">
        <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-normal text-center text-black dark:text-white mb-12">
                Contact Us
            </h3>
            <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 mb-6 md:mb-8 max-w-3xl mx-auto px-4">
              For questions about this Privacy Policy or to exercise your rights, please contact:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Card 1 */}
                <div className="bg-gray-100 dark:bg-zinc-900 rounded-2xl shadow-md p-6 text-center hover:shadow-lg transition">
                    <div className="flex justify-center items-center mb-4">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                        {/* Mail Icon */}
                       <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary dark:text-primary-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4h16v16H4z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M22 6l-10 7L2 6" />
                        </svg>
                    </div>
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">SirkupAI – Privacy Office</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                    privacy@sirkup.ai
                    </p>
                </div>

                {/* Card 2 */}
                <div className="bg-gray-100 dark:bg-zinc-900 rounded-2xl shadow-md p-6 text-center hover:shadow-lg transition">
                    <div className="flex justify-center items-center mb-4">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                        {/* location Icon */}
                       <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary dark:text-primary-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}  d="M12 11c1.657 0 3-1.343 3-3S13.657 5 12 5 9 6.343 9 8s1.343 3 3 3z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}  d="M19.5 8c0 7.5-7.5 13.5-7.5 13.5S4.5 15.5 4.5 8a7.5 7.5 0 1115 0z" />
                        </svg>
                    </div>
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">UAE Office</h3>
                    <p className="text-gray-600 dark:text-gray-300">Office 1804, Ontario Tower, Business Bay, Dubai</p>
                </div>

                {/* Card 3 */}
                <div className="bg-gray-100 dark:bg-zinc-900 rounded-2xl shadow-md p-6 text-center hover:shadow-lg transition">
                    <div className="flex justify-center items-center mb-4">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                        {/* location Icon */}
                       <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary dark:text-primary-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}  d="M12 11c1.657 0 3-1.343 3-3S13.657 5 12 5 9 6.343 9 8s1.343 3 3 3z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}  d="M19.5 8c0 7.5-7.5 13.5-7.5 13.5S4.5 15.5 4.5 8a7.5 7.5 0 1115 0z" />
                        </svg>
                    </div>
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">Pakistan Office</h3>
                    <p className="text-gray-600 dark:text-gray-300">1st Floor, Mumtaz Plaza, Gate-1, B-17, Multi-Professional Cooperative Housing Society (MPCHS), Islamabad</p>
                </div>
            </div>

        </div>
      </section>
    </div>
  )
}
