"use client"

import { useEffect, useRef } from 'react'
import { Card } from '@/components/ui/card'
import Image from 'next/image'
export default function HRIMS() {
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
              Human Rights Information Management System Pakistan 
            </h1>
            <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 mb-6 md:mb-8 max-w-3xl mx-auto px-4">
              As the federal government and Pakistan's four provinces work together as a true partnership, the real transformation began in 2010 when the historic 18th Amendment granted the provinces the authority to set their own policies. The province has thus taken several steps, such as the establishment of human rights directorates and task forces to facilitate UPR and treaty body reporting, the Khyber Pakhtunkhwa Human Rights Policy Framework (2018), the Sindh Child Protection Policy (2016), the Punjab Women Empowerment Package (2014), the Balochistan Gender Equality and Women Empowerment Policy (2013), and others.
            </p>
        </div>
      </section>
      <section ref={addSectionRef} className="relative pt-10 pb-10 px-4 md:px-8 text-center opacity-0">
        <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-normal text-center text-black dark:text-white mb-12">
                UNDP’s Support to Pakistan
            </h3>
            <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 mb-6 md:mb-8 max-w-3xl mx-auto px-4">
              UNDP provides technical assistance to GoP on legislative, policy, capacity, and
digitization related matters. Some examples include:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Card 1 */}
                <div className="bg-gray-100 dark:bg-zinc-900 rounded-2xl shadow-md p-6 text-center hover:shadow-lg transition">
                    
                    <p className="text-gray-600 dark:text-gray-300">
                   Support to federal government on UPR and treaty body reporting, assistance in development
                    of NAP-BHR (2021 – first ever in South Asia), and updating the NAP–HR 2020
                    </p>
                </div>

                {/* Card 2 */}
                <div className="bg-gray-100 dark:bg-zinc-900 rounded-2xl shadow-md p-6 text-center hover:shadow-lg transition">
                    
                    <p className="text-gray-600 dark:text-gray-300">Technical assistance in research, legislative review, and policy drafting to provincial human
                    rights departments</p>
                </div>

                {/* Card 3 */}
                <div className="bg-gray-100 dark:bg-zinc-900 rounded-2xl shadow-md p-6 text-center hover:shadow-lg transition">
                    
                    <p className="text-gray-600 dark:text-gray-300">Engagement with national and sub–national human rights institutions to strengthen their
                    capacity as human rights watchdogs</p>
                </div>
                 {/* Card 4 */}
                <div className="bg-gray-100 dark:bg-zinc-900 rounded-2xl shadow-md p-6 text-center hover:shadow-lg transition">
                    
                    <p className="text-gray-600 dark:text-gray-300">Technical, institutional, and advisory support to the Human Rights Task Force.
                    </p>
                </div>
            </div>
            <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 mb-6 md:mb-8 max-w-3xl mx-auto px-4 pt-10">
              Digitization support provided to Government of Pakistan to collect, analyze, and
                report data against treaty body reporting UPR reporting obligations led to the
                creation of Human Rights Information Management System (HRIMS).</p>
        </div>
      </section>
      <section ref={addSectionRef} className="relative pt-10 px-4 md:px-8 text-center opacity-0">
        <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-normal text-center text-black dark:text-white mb-12">
                Data Sharing Arrangement post 18<sup>th</sup> Amendment
            </h3>
        </div>
        {/* Image below text */}
                    <div className="relative w-full max-w-5xl mx-auto mb-8">
                    <Image
                        src="/images/Bytes.jpg"
                        alt="Bytes-light"
                        className="object-contain rounded-lg dark:hidden"
                        width={1200}
                        height={800}
                        quality={100}
                        priority
                    />
                    <Image
                        src="/images/Bytes2.png"
                        alt="Bytes2-dark"
                        className="object-contain rounded-lg hidden dark:block"
                        width={1200}
                        height={800}
                        quality={100}
                        priority
                        />
                    </div>
        </section>
        <section className="relative pt-10 pb-10 px-4 md:px-8 text-center">
            <div className="max-w-7xl mx-auto text-center bg-gray-100 dark:bg-zinc-900 rounded-2xl py-20 px-10">
            <h3 className="text-3xl md:text-4xl font-normal text-center text-black dark:text-white mb-12">
            HRIMS Features
            </h3>
            <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 mb-6 md:mb-8 max-w-3xl mx-auto px-4">
            To record accomplishments, work
            in progress and issues of
            concerns on indigenous Human
            Rights Indicators that feed into the
            reporting on:
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
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                    An open-source system designed to support the Universal Periodic Review.
                    </p>
                </div>

                {/* Step 2 */}
                <div className="flex flex-col items-center md:w-1/5 text-center">
                    <div className="w-8 h-8 flex items-center justify-center rounded-full bg-black dark:bg-white text-white dark:text-black mb-4 font-semibold">
                    2
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                    A decentralized platform across all four provinces, linked to the Federal HRIMS Cell at the Ministry of Human Rights.
                    </p>
                </div>

                {/* Step 3 */}
                <div className="flex flex-col items-center md:w-1/5 text-center">
                    <div className="w-8 h-8 flex items-center justify-center rounded-full bg-black dark:bg-white text-white dark:text-black mb-4 font-semibold">
                    3
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                    MoHR is enabled with an internal data request system to communicate with provinces within the HRIMS;
                    </p>
                </div>

                {/* Step 4 */}
                <div className="flex flex-col items-center md:w-1/5 text-center">
                    <div className="w-8 h-8 flex items-center justify-center rounded-full bg-black dark:bg-white text-white dark:text-black mb-4 font-semibold">
                    4
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                    The software, developed on Drupal 7 (stable version), has been tested and approved by the Punjab Information Technology.
                    </p>
                </div>
                </div>
            </div>
            </section>
            <section ref={addSectionRef} className="relative pt-10 pb-10 px-4 md:px-8 text-center opacity-0">
                    <div className="max-w-5xl mx-auto">
                        {/* Main heading */}
                        <h3 className="text-3xl md:text-4xl font-normal text-center text-black dark:text-white mb-12">
                        HRIMS Workflow
                        </h3>
                        <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto px-4">MOHR runs its own server, while each province operates an independent server.
                        When the federal level needs data, it requests it from the provinces through HRIMS.</p>
                      <div className="relative w-full max-w-5xl mx-auto mt-8">
                    <Image
                        src="/images/Mohr-Workflow2.png"
                        alt="workflow-light"
                        className="object-contain rounded-lg dark:hidden"
                        width={1200}
                        height={800}
                        quality={100}
                        priority
                    />
                    <Image
                        src="/images/workflow-3.png"
                        alt="workflow-dark"
                        className="object-contain rounded-lg hidden dark:block"
                        width={1200}
                        height={800}
                        quality={100}
                        priority
                        />
                    </div>
                        </div>
                </section>
        <section ref={addSectionRef} className="relative pt-10 pb-10 px-4 md:px-8 text-center opacity-0">
        <div className="max-w-6xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-normal text-center text-black dark:text-white mb-12">
            Achievements
            </h3>
            
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-gray-100 dark:bg-zinc-900 rounded-xl shadow-md p-6 hover:shadow-lg transition flex flex-col items-center text-center">
                <p className="text-gray-600 dark:text-gray-300">
                
                State-of-the-art HRIMS infrastructure (Software & Hardware) developed and deployed;
                </p>
            </div>

            <div className="rounded-xl shadow-md p-6 hover:shadow-lg transition flex flex-col items-center text-center">
                <p className="text-gray-600 dark:text-gray-300">
               A dedicated HRIMS Cell at the federal level for inter-provincial coordination of data reporting and management;
                </p>
            </div>
            <div className="bg-gray-100 dark:bg-zinc-900 rounded-xl shadow-md p-6 hover:shadow-lg transition flex flex-col items-center text-center">
                <p className="text-gray-600 dark:text-gray-300">
                Dedicated Dashboards for federal and provinces including provincial line departments;
                </p>
            </div>
            <div className="rounded-xl shadow-md p-6 hover:shadow-lg transition flex flex-col items-center text-center">
                <p className="text-gray-600 dark:text-gray-300">
                Increased capacity of human rights staff at the government departments;
                </p>
            </div>
            <div className="bg-gray-100 dark:bg-zinc-900 rounded-xl shadow-md p-6 hover:shadow-lg transition flex flex-col items-center text-center">
                <p className="text-gray-600 dark:text-gray-300">
                Trainings on digital safety, data protection and data privacy.
                </p>
            </div>
          </div>
        </div>
        </section>
            {/* Two Product Cards Section */}
            <section ref={addSectionRef} className="relative py-16 px-6 md:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
                
               <Card className="p-8 border border-gray-300 dark:border-gray-700 rounded-xl hover:shadow-lg dark:hover:shadow-xl transition-shadow bg-transparent">
                <h2 className="text-2xl font-semibold mb-4 dark:text-white">Challenges</h2>

                <ul className="space-y-3 mb-8 text-sm text-gray-700 dark:text-gray-300">
                    <li className="flex items-start">
                    <span className="mr-3 text-gray-400 dark:text-gray-500">•</span>
                    <span>Data jurisdiction issues at provincial levels;</span>
                    </li>
                    <li className="flex items-start">
                    <span className="mr-3 text-gray-400 dark:text-gray-500">•</span>
                    <span>Data protection challenges (federal + provinces);</span>
                    </li>
                    <li className="flex items-start">
                    <span className="mr-3 text-gray-400 dark:text-gray-500">•</span>
                    <span>Occasional administrative challenges; and</span>
                    </li>
                    <li className="flex items-start">
                    <span className="mr-3 text-gray-400 dark:text-gray-500">•</span>
                    <span>High staff turnover – loss of institutional memory that results in capacity gap</span>
                    </li>
                </ul>
                </Card>
                <Card className="p-8 border border-gray-300 dark:border-gray-700 rounded-xl hover:shadow-lg dark:hover:shadow-xl transition-shadow bg-transparent">
                <h2 className="text-2xl font-semibold mb-4 dark:text-white">Way Forward</h2>
               
                <ul className="space-y-3 mb-8 text-sm text-gray-700 dark:text-gray-300">
                    <li className="flex items-start">
                    <span className="mr-3 text-gray-400 dark:text-gray-500">•</span>
                    <span>Upgrading the HRIMS’s software with more features;</span>
                    </li>
                    <li className="flex items-start">
                    <span className="mr-3 text-gray-400 dark:text-gray-500">•</span>
                    <span>Expanding the HRIMS to sub-provincial level;</span>
                    </li>
                    <li className="flex items-start">
                    <span className="mr-3 text-gray-400 dark:text-gray-500">•</span>
                    <span>Continued capacity building of associated staff on human-rights-based data management, reporting and digital safety.</span>
                    </li>
                </ul>
                </Card>
            </div>
            </section>
        
    </div>
  )
}
