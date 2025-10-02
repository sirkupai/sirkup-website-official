"use client"

import { useEffect, useRef } from 'react'
import Link from 'next/link'

const teamMembers = {
  executives: [
    {
      name: 'Bilal Ahmad',
      title: 'CEO and Co-Founder',
      linkedin: "#",
    },
    {
      name: 'Ahmed Ghulam',
      title: 'Co-founder & Strategy and Operations Lead',
      linkedin: "#",
    },
    {
      name: 'Mizab Ghulam Nabi',
      title: 'CTO',
      linkedin: "#",
    },
    {
      name: 'Hashir Ahmed',
      title: 'CHRO',
      linkedin: "#",
    },
    {
      name: 'Umer Azam',
      title: 'CCO',
      linkedin: "#",
    },
    {
      name: 'Anees Qureshi',
      title: 'Team Lead & Business Development',
      linkedin: "https://www.linkedin.com/in/anees-qureshi/",
    },
    {
      name: 'Raja Bilal',
      title: 'Financial Manager',
      linkedin: "#",
    },
  ],
  team: [
    {
      name: 'Muhammad Ammar Khan',
      title: 'Creative Director',
      linkedin: "https://www.linkedin.com/in/ammardezigns",
    },
    {
      name: 'Sara Azam',
      title: 'HR / Finance Head',
      linkedin: "http://linkedin.com/in/sara-azam",
    },
    {
      name: 'Iman Ammar Khan',
      title: 'Head of Content Department',
      linkedin: "https://www.linkedin.com/in/iman-humayun/",
    },
    {
      name: 'Syed Ali Ahzum Bukhari',
      title: 'AI Expert',
      linkedin: "https://www.linkedin.com/in/syedaliahzum/",
    },
    {
      name: 'Siyam Haider',
      title: 'AI Expert',
      linkedin: "https://www.linkedin.com/in/siyam-haider/",
    },
    {
      name: 'Frederick Samanga',
      title: 'AI Automation Developer',
      linkedin: "#",
    },
    {
      name: 'Ponraviraj',
      title: 'AI Engineer',
      linkedin: "#",
    },
    {
      name: 'Muhammad Ahmad',
      title: 'AI Automation Developer',
      linkedin: "https://www.linkedin.com/in/muhammad-ahmad-768a62262/",
    },
    {
      name: 'Rimsha Rafique',
      title: 'Front End Engineer',
      linkedin: "https://www.linkedin.com/in/rimsha-rafique-99537a108/",
    },
    {
      name: 'Moiz Hassan',
      title: 'Content Engineer (Post-Production Specialist)',
      linkedin: "#",
    },
    {
      name: 'Muskan Iqbal',
      title: 'Junior Front-End Developer',
      linkedin: "https://www.linkedin.com/in/muskan-yousafzai-iqbal/",
    },
    {
      name: 'Wania Hamid',
      title: 'Junior Graphic Designer',
      linkedin: "https://www.linkedin.com/in/wania-hamid-67620a24a/",
    },
  ],
}

export default function TeamPage() {
  const sectionsRef = useRef<HTMLElement[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('animate-fade-in-up')
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
    if (el && !sectionsRef.current.includes(el)) sectionsRef.current.push(el)
  }

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Hero Section */}
        <section ref={addSectionRef} className="py-12 md:py-20 text-center opacity-0">
          <div className="max-w-4xl mx-auto">
            <span className="text-sm text-gray-600 dark:text-gray-400 block mb-4">Our Team</span>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-normal tracking-tight text-black dark:text-white mb-4 md:mb-6">
              Leadership that<br />drives innovation
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              We work on-site in Islamabad and Dubai. Teams carry autonomy with accountability and treat responsible AI as standard practice.
            </p>
          </div>
        </section>

        {/* Executives Section */}
        <section ref={addSectionRef} className="pb-12 md:pb-20 opacity-0">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-normal text-black dark:text-white text-center mb-12">
              Founders & Executives
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {teamMembers.executives.map((member, index) => (
                <div key={index} className="relative">
                  <div className="relative bg-white dark:bg-zinc-900 border border-gray-200 dark:border-gray-700 rounded-xl p-6 md:p-8 h-full
                          shadow-md dark:shadow-lg hover:shadow-xl dark:hover:shadow-2xl
                          transition-shadow duration-300">
                    <h3 className="font-semibold text-black dark:text-white mb-2 text-lg">{member.name}</h3>
                    <p className="text-sm md:text-base italic text-gray-600 dark:text-gray-400 mb-4">{member.title}</p>
                    {member.linkedin && (
                      <div className="mt-4 flex items-center">
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center text-black dark:text-white hover:opacity-70 transition-opacity"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            className="mr-2"
                          >
                            <path d="M4.98 3.5C3.34 3.5 2 4.84 2 6.48s1.34 2.98 2.98 2.98 2.98-1.34 2.98-2.98S6.62 3.5 4.98 3.5zm.02 5.5H2V21h5V9h-2zm7.5 0h-2v12h5v-6.5c0-1.93 3-2.08 3 0V21h5v-7.5c0-5.08-5.5-4.89-5-2.39V9h-2z"/>
                          </svg>
                          <span className="text-sm font-medium">LinkedIn</span>
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section ref={addSectionRef} className="pb-12 md:pb-20 opacity-0">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-normal text-black dark:text-white text-center mb-12">Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {teamMembers.team.map((member, index) => (
                <div key={index} className="relative">
                  <div className="relative bg-white dark:bg-zinc-900 border border-gray-200 dark:border-gray-700 rounded-xl p-6 md:p-8 h-full
                          shadow-md dark:shadow-lg hover:shadow-xl dark:hover:shadow-2xl
                          transition-shadow duration-300">
                    <h3 className="font-semibold text-black dark:text-white mb-2 text-lg">{member.name}</h3>
                    <p className="text-base text-gray-600 dark:text-gray-400 mb-4">{member.title}</p>
                    {member.linkedin && (
                      <div className="mt-4 flex items-center">
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center text-black dark:text-white hover:opacity-70 transition-opacity"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            className="mr-2"
                          >
                            <path d="M4.98 3.5C3.34 3.5 2 4.84 2 6.48s1.34 2.98 2.98 2.98 2.98-1.34 2.98-2.98S6.62 3.5 4.98 3.5zm.02 5.5H2V21h5V9h-2zm7.5 0h-2v12h5v-6.5c0-1.93 3-2.08 3 0V21h5v-7.5c0-5.08-5.5-4.89-5-2.39V9h-2z"/>
                          </svg>
                          <span className="text-sm font-medium">LinkedIn</span>
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Culture Section */}
        <section ref={addSectionRef} className="py-16 md:py-24 opacity-0">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-normal text-black dark:text-white mb-4">
              Building the future of AI with purpose
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              Our leadership team combines deep technical expertise with real business experience, ensuring every solution actually solves real problems.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <div className="bg-white dark:bg-zinc-900 p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 text-center">
                <h3 className="font-semibold text-black dark:text-white mb-2 text-lg">Operator-Led</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Multi-business operators building real solutions, not slideware
                </p>
              </div>

              <div className="bg-white dark:bg-zinc-900 p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 text-center">
                <h3 className="font-semibold text-black dark:text-white mb-2 text-lg">R&D-First</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Closing the gap between promising models and production systems
                </p>
              </div>

              <div className="bg-white dark:bg-zinc-900 p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 text-center">
                <h3 className="font-semibold text-black dark:text-white mb-2 text-lg">Responsible AI</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Safety, privacy, and human oversight as non-negotiable standards
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Work With Us Section */}
        <section ref={addSectionRef} className="py-12 md:py-20 opacity-0">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="bg-gray-100 dark:bg-zinc-900 rounded-2xl py-20 text-center">
              <h2 className="text-4xl font-normal mb-4 dark:text-white">
                Join us in building the future
              </h2>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-white bg-black dark:bg-white dark:text-black rounded-full hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors">
                  Work with us
                </Link>
                <Link href="/solutions" className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-black dark:text-white border border-gray-300 dark:border-zinc-700 rounded-full hover:bg-gray-50 dark:hover:bg-zinc-800 transition-colors">
                  Explore solutions
                </Link>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  )
}
