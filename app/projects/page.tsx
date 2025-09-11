"use client"

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Solutions() {
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
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Hero Section */}
        <section ref={addSectionRef} className="py-12 md:py-20 text-center opacity-0">
          <div className="max-w-4xl mx-auto">
            <span className="text-sm text-gray-600 dark:text-gray-400 block mb-4">
              Our Projects
            </span>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-normal tracking-tight text-black dark:text-white mb-4 md:mb-6">
              Building Confidence through Innovation.
            </h1>
            <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 max-w-4xl mx-auto">We are proud to have successfully executed several projects in collaboration with <b className="italic">Bytes for All</b>. This partnership enabled us to integrate advanced expertise and innovative solutions, ensuring the highest standards of quality and reliability. Together, we continue to create impactful outcomes for our clients and partners.</p>
            <Link 
              href="/contact" 
              className="inline-flex items-center mt-5 justify-center px-6 py-3 text-sm font-medium text-white bg-black dark:bg-white dark:text-black rounded-full hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
            >
              Contact us
            </Link>
          </div>
        </section>

        {/* Projects Section */}
        <section ref={addSectionRef} className="pb-12 md:pb-20 opacity-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {/* Card 1 */}
            <div className="rounded-2xl bg-gray-100 dark:bg-zinc-900 overflow-hidden shadow-md p-6 hover:shadow-xl transition">
              <div className="border border-gray-300 dark:border-gray-700 rounded-2xl overflow-hidden mb-4">
                <Image
                  src="/images/Human-Rights-Information.jpg" // replace with your image
                  alt="Human-Rights-Information"
                  width={600}
                  height={400}
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="border border-gray-300 dark:border-gray-700 rounded-2xl p-6">
                <h3 className="text-xl font-semibold mb-3 text-black dark:text-white">
                  HRIMS
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Human Rights Information Management System for Ministry of Human Rights, Government of Pakistan and all the Provinces, funded by UNDP Pakistan
                </p>
                <Link href="#" className="text-black-500 dark:text-white font-medium inline-flex items-center gap-2">
                  Learn more →
                </Link>
              </div>
            </div>
            {/* Card 2 (highlighted) */}
            <div className="rounded-2xl bg-black dark:bg-zinc-900 overflow-hidden shadow-md p-6 hover:shadow-xl transition">
              <div className="border border-gray-300 dark:border-gray-700 rounded-2xl p-6">
                <h3 className="text-xl font-semibold mb-3 text-white">
                  CMS for NCHR
                </h3>
                <p className="text-white mb-4">
                  Complaints Management System for National Commission for Human Rights (NCHR) through UNDP Pakistan
                </p>
                <Link href="#" className="text-white font-medium inline-flex items-center gap-2">
                  Learn more →
                </Link>
              </div>
              <div className="border border-gray-300 dark:border-gray-700 rounded-2xl overflow-hidden mt-4">
              <Image
                src="/images/Complaints-Management-System.jpg" // replace with your image
                alt="Complaints-Management-System"
                width={600}
                height={400}
                className="w-full h-48 object-cover"
              />
              </div>
            </div>
            {/* Card 3 */}
            <div className="rounded-2xl bg-gray-100 dark:bg-zinc-900 overflow-hidden shadow-md p-6 hover:shadow-xl transition">
              <div className="border border-gray-300 dark:border-gray-700 rounded-2xl overflow-hidden mb-4">
                <Image
                  src="/images/MIS-for-gender-based-violence.jpg" // replace with your image
                  alt="MIS-for-gender-based-violence"
                  width={600}
                  height={400}
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="border border-gray-300 dark:border-gray-700 rounded-2xl p-6">
                <h3 className="text-xl font-semibold mb-3 text-black dark:text-white">
                  MIS for Gender Based Violence
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  MIS for gender based violence Reporting and Redressal at the Punjab Women Protection Authority, Government of Punjab, Pakistan
                </p>
                <Link href="#" className="text-black-500 dark:text-white font-medium inline-flex items-center gap-2">
                  Learn more →
                </Link>
              </div>
            </div>
            {/* Card 4 (highlighted) */}
            <div className="rounded-2xl bg-black dark:bg-zinc-900 overflow-hidden shadow-md p-6 hover:shadow-xl transition">
              <div className="border border-gray-300 dark:border-gray-700 rounded-2xl p-6">
                <h3 className="text-xl font-semibold mb-3 text-white">
                  Helpline 1099
                </h3>
                <p className="text-white mb-4">
                  Helpline 1099, Ministry of Human Rights, Government of Pakistan through UN Women, Pakistan	
                </p>
                <Link href="#" className="text-white font-medium inline-flex items-center gap-2">
                  Learn more →
                </Link>
              </div>
              <div className="border border-gray-300 dark:border-gray-700 rounded-2xl overflow-hidden mt-4">
              <Image
                src="/images/Helpline-1099.jpg" // replace with your image
                alt="Content Marketing"
                width={600}
                height={400}
                className="w-full h-48 object-cover"
              />
              </div>
            </div>
            {/* Card 5 */}
            <div className="rounded-2xl bg-gray-100 dark:bg-zinc-900 overflow-hidden shadow-md p-6 hover:shadow-xl transition">
              <div className="border border-gray-300 dark:border-gray-700 rounded-2xl overflow-hidden mb-4">
                <Image
                  src="/images/Early-Warning-System.jpg" // replace with your image
                  alt="Early-Warning-System"
                  width={600}
                  height={400}
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="border border-gray-300 dark:border-gray-700 rounded-2xl p-6">
                <h3 className="text-xl font-semibold mb-3 text-black dark:text-white">
                  Early Warning System
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Early Warning System for reporting on Human Rights Violations – funded by Asia Foundation
                </p>
                <Link href="#" className="text-black-500 dark:text-white font-medium inline-flex items-center gap-2">
                  Learn more →
                </Link>
              </div>
            </div>
            {/* Card 6 (highlighted) */}
            <div className="rounded-2xl bg-black dark:bg-zinc-900 overflow-hidden shadow-md p-6 hover:shadow-xl transition">
              <div className="border border-gray-300 dark:border-gray-700 rounded-2xl p-6">
                <h3 className="text-xl font-semibold mb-3 text-white">
                  AdvoLocate App
                </h3>
                <p className="text-white mb-4">
                  AdvoLocate App (non-functional)
                </p>
                <Link href="#" className="text-white font-medium inline-flex items-center gap-2">
                  Learn more →
                </Link>
              </div>
              <div className="border border-gray-300 dark:border-gray-700 rounded-2xl overflow-hidden mt-4">
              <Image
                src="/images/Financial-services-main.jpg" // replace with your image
                alt="Content Marketing"
                width={600}
                height={400}
                className="w-full h-48 object-cover"
              />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
