"use client"

import { useEffect, useRef } from 'react'
import { Card } from '@/components/ui/card'
import Image from 'next/image'
export default function MIS() {
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
  const  outcomes = [
    {
      description: 'PWPA staff and officials trained to use MIS for case handling and analysis.',
    },
    {
      description: 'MIS is now connected to Violence Against Women Centers in Rawalpindi, Lahore, Faisalabad, and Multan.',
    },
    {
      description: 'Response times are getting shorter, conviction rates are rising, and survivor services are growing.',
    }
  ]
  

  return (
    <div className="min-h-screen bg-white dark:bg-black">
        {/* Hero Section */}
      <section ref={addSectionRef} className="relative pt-20 pb-10 px-4 md:px-8 text-center opacity-0">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-normal tracking-tight text-black dark:text-white mb-4 md:mb-6">
              MIS for Gender-Based Violence
            </h1>
            <p className="text-base italic md:text-lg text-gray-700 dark:text-gray-300 mb-6 md:mb-8 max-w-3xl mx-auto px-4">Bytes for All's partnership with the Punjab Women Protection Authority (PWPA), Punjabi government</p>
            <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 mb-6 md:mb-8 max-w-3xl mx-auto px-4">
              Bytes for All (B4A) created the Technology-Driven Management Information System (MIS) for Gender-Based Violence (GBV) to enhance the Punjab Women Protection Authority's (PWPA) mandate. Creating a centralized framework for reporting, monitoring, and addressing incidents of violence against women and girls throughout Punjab is its straightforward but effective goal. The MIS guarantees that survivors are not left behind and that institutions can react quickly, openly, and efficiently by fusing technology with coordinated response.</p>
        </div>
      </section>
      <section className="relative pt-10 pb-10 px-4 md:px-8">
  <div className="max-w-6xl mx-auto">
    <h3 className="text-3xl md:text-4xl font-normal text-center text-black dark:text-white mb-10">
      Objectives
    </h3>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 pt-10 gap-6 md:gap-8">
      {[
        {
          title: "Real-Time Case Tracking",
          text: "For GBV survivors, offer real-time case tracking.",
        },
        {
          title: "Inter-Agency Coordination",
          text: "Boost agency cooperation (police, legal aid, shelters, social services).",
        },
        {
          title: "Data-Driven Policy",
          text: "Enable data-driven policymaking through safe collection and analysis of case data.",
        },
        {
          title: "Lower Reporting Barriers",
          text: "Safely gather and examine case data to facilitate data-driven policymaking.",
        },
        // If you need a 5th card like the reference, add it here.
      ].map((item, idx) => (
        <div key={idx} className="relative">
          {/* CARD */}
          <div className="relative flex flex-col items-center text-center rounded-[44px] bg-white dark:bg-zinc-900 border border-black/10 dark:border-white/10 shadow-sm px-6 pt-12 pb-6 min-h-[200px]">
            {/* NUMBER DISC */}
            <div className="absolute -top-5 left-1/2 -translate-x-1/2 h-16 w-16 rounded-full grid place-items-center bg-black text-white dark:bg-white dark:text-black text-xl font-bold shadow">
              {String(idx + 1).padStart(2, "0")}
            </div>

            {/* CONTENT */}
            <h4 className="text-base md:text-lg font-extrabold tracking-wide text-black dark:text-white">
              {item.title}
            </h4>
            <p className="mt-2 text-sm leading-relaxed text-black/70 dark:text-white/80">
              {item.text}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

      <section ref={addSectionRef} className="relative pt-10 pb-10 px-4 md:px-8 text-center opacity-0">
        <div className="max-w-6xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-normal text-center text-black dark:text-white mb-12">
                Key Features
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Card 1 */}
                <div className="bg-gray-100 dark:bg-zinc-900 rounded-2xl shadow-md p-6 text-center hover:shadow-lg transition">
                    <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">Centralized Case Database</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                   Every case is recorded in a single, safe system that authorized employees around the province can access.
                    </p>
                </div>

                {/* Card 2 */}
                <div className="bg-gray-100 dark:bg-zinc-900 rounded-2xl shadow-md p-6 text-center hover:shadow-lg transition">
                     <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">Real-Time Tracking & Alerts</h3>
                    <p className="text-gray-600 dark:text-gray-300">Automated notifications and reminders for prompt follow-ups.</p>
                </div>

                {/* Card 3 */}
                <div className="bg-gray-100 dark:bg-zinc-900 rounded-2xl shadow-md p-6 text-center hover:shadow-lg transition">
                    <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">Referral System</h3>
                    <p className="text-gray-600 dark:text-gray-300">Integrated coordinating resources to link survivors with law enforcement, courts, shelters, and non-governmental organizations.</p>
                </div>
                 {/* Card 4 */}
                <div className="bg-gray-100 dark:bg-zinc-900 rounded-2xl shadow-md p-6 text-center hover:shadow-lg transition">
                    <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">Data Dashboards</h3>
                    <p className="text-gray-600 dark:text-gray-300">Aggregated reports and trends to guide policy and strengthen services.
                    </p>
                </div>
            </div>
        </div>
      </section>
      <section ref={addSectionRef} className="relative pt-10 pb-20 px-4 md:px-8 text-center opacity-0">
        <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-normal text-center text-black dark:text-white mb-12">
                Impact
            </h3>
        </div>

        <div className="max-w-4xl mx-auto relative">
            {/* vertical line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l border-muted-foreground/30 dark:border-muted-foreground/40"></div>

            {/* Personal Information (Left) */}
            <div className="mb-12 flex justify-start w-full">
            <div className="w-1/2 pr-8 text-right relative">
                <span className="absolute right-[-14px] top-1 flex items-center justify-center w-7 h-7 rounded-full bg-primary text-white dark:bg-zinc-900">
                {/* User Icon */}
                <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <path d="M4 20h16"/>
                <path d="M7 20V10"/>
                <path d="M12 20V6"/>
                <path d="M17 20v-8"/>
                </svg>
                </span>
                <h3 className="text-lg font-semibold text-black dark:text-white">More Reporting</h3>
                <p className="text-gray-700 dark:text-gray-300">
                Survivors now report cases more confidently through helpline and centers.
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
                <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <path d="M9 2h6M12 2v3"/>
                <path d="M19 13a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"/>
                <path d="M12 10v3l2 1"/>
                <path d="M3 13h2M19 13h2M5 9l1.5.5M18.5 9.5L20 9"/>
                </svg>
                </span>
               <h3 className="text-lg font-semibold text-black dark:text-white">Faster Response</h3>
                <p className="text-gray-700 dark:text-gray-300">
                Agencies act more quickly thanks to real-time case visibility.
                </p>
            </div>
            </div>

            {/* Content Data (Left) */}
            <div className="mb-12 flex justify-start w-full">
            <div className="w-1/2 pr-8 text-right relative">
                <span className="absolute right-[-14px] top-1 flex items-center justify-center w-7 h-7 rounded-full bg-primary text-white dark:bg-zinc-900">
                {/* File Icon */}
                <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <path d="M12 5v4M10 7h4" /> 
                <path d="M7 14l-2 2a3 3 0 0 0 0 4h0a3 3 0 0 0 4 0l3-3" />
                <path d="M17 14l2 2a3 3 0 0 1 0 4h0a3 3 0 0 1-4 0l-3-3" />
                </svg>
                </span>
                <h3 className="text-lg font-semibold text-black dark:text-white">Holistic Support</h3>
                <p className="text-gray-700 dark:text-gray-300">
                Survivors access legal aid, psychosocial help, and shelters through one coordinated system.
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
                <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7-10-7-10-7z"/>
                <circle cx="12" cy="12" r="3"/>
                <path d="M16 6l2-2M18 18l2 2"/>
                <path d="M14.5 13.5l1.7 1.7 3-3"/>
                </svg>
                </span>
                <h3 className="text-lg font-semibold text-black dark:text-white">Accountability</h3>
                <p className="text-gray-700 dark:text-gray-300">
                Every action logged; no case can be ignored or lost.
                </p>
            </div>
            </div>
        </div>
        </section>
         <section ref={addSectionRef} className="relative pt-10 pb-20 px-4 md:px-8 text-center opacity-0">
        <div className="max-w-6xl mx-auto">
            <div className="max-w-7xl mx-auto">
                <h3 className="text-3xl md:text-4xl font-normal text-center text-black dark:text-white mb-12">
                    Outcomes
                </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {outcomes.map((outcomes, index) => (
              <div key={index} className="bg-zinc-800 dark:bg-zinc-900 rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 hover:scale-105">
                <p className="text-sm text-gray-300 dark:text-gray-400">
                  {outcomes.description}
                </p>
              </div>
            ))}
          </div>
        </div>
        </div>
    </section>
    <section ref={addSectionRef} className="relative pt-10 pb-10 px-4 md:px-8 text-center opacity-0">
        <div className="max-w-6xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-normal text-center text-black dark:text-white mb-12">
            Privacy & Data Protection
            </h3>
            
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
            <div className="bg-gray-100 dark:bg-zinc-900 rounded-xl shadow-md p-6 hover:shadow-lg transition flex flex-col items-center text-center">
                <p className="text-gray-600 dark:text-gray-300">
                Survivor confidentiality is at the heart of the MIS:
                </p>
            </div>

            <div className="rounded-xl shadow-md p-6 hover:shadow-lg transition flex flex-col items-center text-center">
                <p className="text-gray-600 dark:text-gray-300">
                 Role-based restricted access for staff.
                </p>
            </div>
            <div className="bg-gray-100 dark:bg-zinc-900 rounded-xl shadow-md p-6 hover:shadow-lg transition flex flex-col items-center text-center">
                <p className="text-gray-600 dark:text-gray-300">
                End-to-end encryption and secure hosting.
                </p>
            </div>
            <div className="rounded-xl shadow-md p-6 hover:shadow-lg transition flex flex-col items-center text-center">
                <p className="text-gray-600 dark:text-gray-300">
                Data anonymized before policy reporting.
                </p>
            </div>
            <div className="bg-gray-100 dark:bg-zinc-900 rounded-xl shadow-md p-6 hover:shadow-lg transition flex flex-col items-center text-center">
                <p className="text-gray-600 dark:text-gray-300">
                Staff trained in ethical data use and confidentiality.
                </p>
            </div>
          </div>
        </div>
        </section>
         <section ref={addSectionRef} className="py-12 md:py-20 opacity-0">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="bg-gray-100 dark:bg-zinc-900 rounded-2xl py-20 text-center">
            <h2 className="text-4xl font-normal mb-4 dark:text-white">
            Conclusion
          </h2>
          <p className="italic text-base md:text-lg text-gray-700 dark:text-gray-300 text-center mb-8 max-w-4xl mx-auto px-4">More than ordinary software, the MIS for Gender-Based Violence is an essential component of Punjab's anti-GBV effort. It has radically changed the method that violence is tracked, analyzed, and tackled by combining digital innovation, survivor-centered design, and government ownership. This project is an illustration of how technology can be a potent partner in protecting human rights and guaranteeing women's and girls' justice.
          </p>
        </div>
        </div>
      </section>
    </div>
  )
}
