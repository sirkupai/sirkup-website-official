"use client"

import { useEffect, useRef } from 'react'
import { Card } from '@/components/ui/card'
import Image from 'next/image'
import { title } from 'node:process'
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

  return (
    <div className="min-h-screen bg-white dark:bg-black">
        {/* Hero Section */}
      <section ref={addSectionRef} className="relative pt-20 pb-10 px-4 md:px-8 text-center opacity-0">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-normal tracking-tight text-black dark:text-white mb-4 md:mb-6">
              Complaints Management System (CMS)
            </h1>
            <h3 className="text-3xl md:text-3xl font-normal italic text-center text-black dark:text-white mb-10">
            For the National Commission for Human Rights (NCHR), Pakistan
            </h3>
            <p className="text-base italic md:text-lg text-gray-700 dark:text-gray-300 mb-6 md:mb-8 max-w-3xl mx-auto px-4">
                Developed through UNDP Pakistan in partnership with Bytes for All</p>
            <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 mb-6 md:mb-8 max-w-3xl mx-auto px-4">
                The Complaints Management System (CMS) is a digital platform that makes it easier for citizens to report and track violations of human rights. This system, which was developed for the National Commission for Human Rights (NCHR) with support from UNDP Pakistan and technical implementation by Bytes for All (B4A), represents a major breakthrough in accountability, transparency, and access to justice across Pakistan.</p>
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
          text: "Update NCHR's complaint processing procedures and abandon paper-based ones.",
        },
        {
          text: "Make it simple for citizens to file complaints online from any location.",
        },
        {
          text: "Assure transparency and real-time tracking for each instance.",
        },
        {
          text: "Bolster NCHR's ability to defend and advance human rights across the country.",
        },
        // If you need a 5th card like the reference, add it here.
      ].map((item, idx) => (
        <div key={idx} className="relative">
          {/* CARD */}
          <div className="relative flex flex-col items-center text-center rounded-[44px] bg-white dark:bg-zinc-900 border border-black/10 dark:border-white/10 shadow-sm px-6 pt-12 pb-6 min-h-[160px]">
            {/* NUMBER DISC */}
            <div className="absolute -top-5 left-1/2 -translate-x-1/2 h-16 w-16 rounded-full grid place-items-center bg-black text-white dark:bg-white dark:text-black text-xl font-bold shadow">
              {String(idx + 1).padStart(2, "0")}
            </div>

            {/* CONTENT */}
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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Card 1 */}
                <div className="bg-gray-100 dark:bg-zinc-900 rounded-2xl shadow-md p-6 text-center hover:shadow-lg transition">
                    <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">Online Complaint Submission</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                    File cases via an easy-to-use online site.
                    </p>
                </div>

                {/* Card 2 */}
                <div className="bg-gray-100 dark:bg-zinc-900 rounded-2xl shadow-md p-6 text-center hover:shadow-lg transition">
                     <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">Document Uploads</h3>
                    <p className="text-gray-600 dark:text-gray-300">As proof, include pictures, videos, or papers.</p>
                </div>

                {/* Card 3 */}
                <div className="bg-gray-100 dark:bg-zinc-900 rounded-2xl shadow-md p-6 text-center hover:shadow-lg transition">
                    <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">Case Tracking</h3>
                    <p className="text-gray-600 dark:text-gray-300">Get real-time updates on the status of your complaint.</p>
                </div>
                 {/* Card 4 */}
                <div className="bg-gray-100 dark:bg-zinc-900 rounded-2xl shadow-md p-6 text-center hover:shadow-lg transition">
                    <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">Notifications</h3>
                    <p className="text-gray-600 dark:text-gray-300">Get updates on your case at every turn.
                    </p>
                </div>
                {/* Card 5 */}
                <div className="bg-gray-100 dark:bg-zinc-900 rounded-2xl shadow-md p-6 text-center hover:shadow-lg transition">
                    <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">Multilingual & Inclusive</h3>
                    <p className="text-gray-600 dark:text-gray-300">Design that is easy to use and accessible to all users.
                    </p>
                </div>
                {/* Card 6 */}
                <div className="bg-gray-100 dark:bg-zinc-900 rounded-2xl shadow-md p-6 text-center hover:shadow-lg transition">
                    <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">Data Security</h3>
                    <p className="text-gray-600 dark:text-gray-300">Role-based access, encryption, and strict privacy controls.
                    </p>
                </div>
            </div>
        </div>
      </section>
      <section ref={addSectionRef} className="relative pt-10 pb-10 px-4 md:px-8 text-center opacity-0">
        <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-normal text-center text-black dark:text-white mb-12">
                Benefits & Impact
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
                <h3 className="text-lg font-semibold text-black dark:text-white">Accessibility</h3>
                <p className="text-gray-700 dark:text-gray-300">
                Citizens across Pakistan can now report violations easily, without travel.
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
                Cases are routed instantly to the right officials, reducing delays.
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
                <h3 className="text-lg font-semibold text-black dark:text-white">Transparency</h3>
                <p className="text-gray-700 dark:text-gray-300">
                Complainants can track progress, building public trust in NCHR.
                </p>
            </div>
            <div className="w-1/2"></div>
            </div>

            {/* Cookies & Tracking (Right) */}
            <div className="mb-12 flex justify-end w-full">
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
                <h3 className="text-lg font-semibold text-black dark:text-white">Evidence-Based Policy</h3>
                <p className="text-gray-700 dark:text-gray-300">
                NCHR uses aggregated data to spot trends and advocate for changes.
                </p>
            </div>
            </div>
            {/* Content Data (Left) */}
            <div className="mb-12 flex justify-start w-full">
            <div className="w-1/2 pr-8 text-right relative">
                <span className="absolute right-[-14px] top-1 flex items-center justify-center w-7 h-7 rounded-full bg-primary text-white dark:bg-zinc-900">
                {/* File Icon */}
                <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <rect x="5" y="4" width="14" height="16" rx="2"/>
                <path d="M9 4h6v2H9z"/>
                <path d="M8 10l1.3 1.3L12 8.6M8 14h6M8 18h6"/>
                </svg>

                </span>
                <h3 className="text-lg font-semibold text-black dark:text-white">Accountability</h3>
                <p className="text-gray-700 dark:text-gray-300">
                Every action is logged, reducing chances of neglect or lost cases.
                </p>
            </div>
            <div className="w-1/2"></div>
            </div>
        </div>
        </section>
         
         <section ref={addSectionRef} className="py-12 md:py-20 opacity-0">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="bg-gray-100 dark:bg-zinc-900 rounded-2xl py-20 text-center">
            
          <p className="italic text-base md:text-lg text-gray-700 dark:text-gray-300 text-center mb-8 max-w-4xl mx-auto px-4">
            The Complaints Management System marks a major step forward in strengthening Pakistan’s human rights protection. With the joint efforts of NCHR, UNDP Pakistan, and Bytes for All, citizens now have a transparent, secure, and accessible way to seek justice and hold institutions accountable.</p>
        </div>
        </div>
      </section>
    </div>
  )
}
