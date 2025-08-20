"use client"

import { useEffect, useRef } from 'react'
import Link from 'next/link'

const teamMembers = {
  ceo: {
    name: 'Bilal Ahmad',
    title: 'CEO and Co-Founder',
    description: 'Bilal sets direction and partnerships. He aligns R&D with client needs and keeps the studio focused on production-worthy results. His work centers on market fit, responsible deployment, and sustainable growth.',
    expertise: ['Strategic Direction', 'Partnerships', 'Market Fit', 'Responsible AI']
  },
  executives: [
    {
      name: 'Ahmed Ghulam',
      title: 'Co-founder & Strategy and Operations Lead',
      description: 'Ahmed steers studio operations and delivery. He brings an operator lens to scope, metrics, and risk, turning research ideas into run-books.',
      expertise: ['Operations', 'Delivery', 'Process Design', 'Risk Management']
    },
    {
      name: 'Mizab Ghulam Nabi',
      title: 'CTO',
      description: 'Mizab leads our technology strategy and architecture, ensuring we build scalable, reliable AI systems that deliver real value.',
      expertise: ['Technology Strategy', 'System Architecture', 'AI Infrastructure', 'Technical Leadership']
    },
    {
      name: 'Choudhary Hashir',
      title: 'CHRO',
      description: 'Hashir leads our human resources initiatives, building a culture of innovation and ensuring we attract and retain top talent.',
      expertise: ['Human Resources', 'Talent Management', 'Culture Development', 'Organizational Design']
    },
    {
      name: 'Umer Azam',
      title: 'CCO',
      description: 'Umer drives our commercial strategy, ensuring we deliver value to clients while growing sustainably.',
      expertise: ['Commercial Strategy', 'Revenue Growth', 'Client Relationships', 'Market Expansion']
    },
    {
      name: 'Anees Qureshi',
      title: 'Team Lead & Business Development',
      description: 'Anees leads go-to-market and client success. He frames problems, clarifies constraints, and scopes pilots that show value quickly.',
      expertise: ['Go-to-Market', 'Client Success', 'Business Development', 'Pilot Programs']
    }
  ],
  team: [
    {
      name: 'Muhammad Ammar Khan',
      title: 'Creative Director',
      description: 'Ammar shapes our creative vision, ensuring our brand and solutions communicate effectively across all touchpoints.',
      expertise: ['Creative Strategy', 'Brand Development', 'Design Systems', 'Visual Communication']
    },
    {
      name: 'Sara Azam',
      title: 'HR / Finance Head',
      description: 'Sara manages our financial operations and supports HR initiatives, ensuring sustainable growth and operational excellence.',
      expertise: ['Financial Management', 'HR Operations', 'Compliance', 'Resource Planning']
    },
    {
      name: 'Iman Ammar Khan',
      title: 'Head of Content Department',
      description: 'Iman leads our content strategy and production, creating engaging narratives that showcase our AI innovations.',
      expertise: ['Content Strategy', 'Content Production', 'Editorial Direction', 'Brand Messaging']
    },
    {
      name: 'Syed Ali Ahzum Bukhari',
      title: 'AI Expert',
      description: 'Ali specializes in developing and implementing cutting-edge AI solutions, bringing deep technical expertise to our projects.',
      expertise: ['Machine Learning', 'Deep Learning', 'AI Architecture', 'Model Optimization']
    },
    {
      name: 'Siyam Haider',
      title: 'AI Expert',
      description: 'Siyam drives AI innovation, focusing on practical applications that deliver measurable business value for our clients.',
      expertise: ['AI Solutions', 'Natural Language Processing', 'Computer Vision', 'AI Integration']
    },
    {
      name: 'Ramsha Rafique',
      title: 'Front End Engineer',
      description: 'Ramsha builds intuitive user interfaces that make our AI solutions accessible and user-friendly.',
      expertise: ['Frontend Development', 'React', 'UI/UX Implementation', 'Web Performance']
    },
    {
      name: 'Muskan Iqbal',
      title: 'Associate Front-End Developer',
      description: 'Muskan contributes to our frontend development efforts, creating responsive and engaging web experiences.',
      expertise: ['Frontend Development', 'JavaScript', 'CSS', 'Responsive Design']
    },
    {
      name: 'Salman Khan',
      title: 'Content Engineer (Post-Production Specialist)',
      description: 'Salman specializes in post-production workflows, ensuring our content meets the highest quality standards.',
      expertise: ['Post-Production', 'Video Editing', 'Content Engineering', 'Quality Assurance']
    },
    {
      name: 'Moiz Hassan',
      title: 'Content Engineer (Post-Production Specialist)',
      description: 'Moiz enhances our content production pipeline with expertise in post-production and technical workflows.',
      expertise: ['Post-Production', 'Motion Graphics', 'Content Engineering', 'Technical Workflows']
    },
    {
      name: 'Frederick Samanga',
      title: 'AI Automation Developer',
      description: 'Frederick specializes in building AI-powered automation solutions and developing intelligent systems that streamline business processes.',
      expertise: ['AI Automation', 'Python', 'Machine Learning', 'Process Optimization']
    }
  ]
}

export default function TeamPage() {
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
            <span className="text-sm text-gray-600 dark:text-gray-400 block mb-4">Our Team</span>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-normal tracking-tight text-black dark:text-white mb-4 md:mb-6">
              Leadership that<br />drives innovation
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              We work on-site in Islamabad and Dubai. Teams carry autonomy with accountability and treat responsible AI as standard practice.
            </p>
          </div>
        </section>

        {/* CEO Section - Bila at the top */}
        <section ref={addSectionRef} className="pb-12 md:pb-20 opacity-0">
          <div className="max-w-5xl mx-auto">
            <div className="relative">
              {/* Main card - consistent with site style */}
              <div className="relative bg-white dark:bg-black border border-gray-200 dark:border-zinc-800 rounded-lg p-8 md:p-12">
                <div className="text-center">
                  {/* Name and Title */}
                  <h2 className="text-3xl md:text-4xl font-normal text-black dark:text-white mb-2">
                    {teamMembers.ceo.name}
                  </h2>
                  <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
                    {teamMembers.ceo.title}
                  </p>

                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl mx-auto mb-8">
                    {teamMembers.ceo.description}
                  </p>

                  {/* Expertise Tags */}
                  <div className="flex flex-wrap justify-center gap-2">
                    {teamMembers.ceo.expertise.map((skill, index) => (
                      <span 
                        key={index}
                        className="px-4 py-2 bg-gray-50 dark:bg-zinc-900 text-gray-600 dark:text-gray-400 text-sm rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Executives Section - C-suite and Co-founders */}
        <section ref={addSectionRef} className="pb-12 md:pb-20 opacity-0">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-normal text-black dark:text-white text-center mb-12">
              Executive Leadership
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {teamMembers.executives.map((member, index) => (
                <div key={index} className="relative">
                  {/* Card - consistent with site style */}
                  <div className="relative bg-white dark:bg-black border border-gray-200 dark:border-zinc-800 rounded-lg p-6 md:p-8 h-full">
                    <div>
                      {/* Name and Title */}
                      <h3 className="text-2xl font-normal text-black dark:text-white mb-1">
                        {member.name}
                      </h3>
                      <p className="text-base text-gray-600 dark:text-gray-400 mb-4">
                        {member.title}
                      </p>

                      {/* Description */}
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                        {member.description}
                      </p>

                      {/* Expertise Tags */}
                      <div className="flex flex-wrap gap-2">
                        {member.expertise.map((skill, skillIndex) => (
                          <span 
                            key={skillIndex}
                            className="px-3 py-1.5 bg-gray-50 dark:bg-zinc-900 text-gray-600 dark:text-gray-400 text-xs rounded-full"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Members Section */}
        <section ref={addSectionRef} className="pb-12 md:pb-20 opacity-0">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-normal text-black dark:text-white text-center mb-12">
              Our Team
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {teamMembers.team.map((member, index) => (
                <div key={index} className="relative">
                  {/* Card - consistent with site style */}
                  <div className="relative bg-white dark:bg-black border border-gray-200 dark:border-zinc-800 rounded-lg p-6 md:p-8 h-full">
                    <div>
                      {/* Name and Title */}
                      <h3 className="text-2xl font-normal text-black dark:text-white mb-1">
                        {member.name}
                      </h3>
                      <p className="text-base text-gray-600 dark:text-gray-400 mb-4">
                        {member.title}
                      </p>

                      {/* Description */}
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                        {member.description}
                      </p>

                      {/* Expertise Tags */}
                      <div className="flex flex-wrap gap-2">
                        {member.expertise.map((skill, skillIndex) => (
                          <span 
                            key={skillIndex}
                            className="px-3 py-1.5 bg-gray-50 dark:bg-zinc-900 text-gray-600 dark:text-gray-400 text-xs rounded-full"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left mt-12">
              <div>
                <h3 className="font-normal text-black dark:text-white mb-2">Operator-Led</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Multi-business operators building real solutions, not slideware</p>
              </div>
              <div>
                <h3 className="font-normal text-black dark:text-white mb-2">R&D-First</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Closing the gap between promising models and production systems</p>
              </div>
              <div>
                <h3 className="font-normal text-black dark:text-white mb-2">Responsible AI</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Safety, privacy, and human oversight as non-negotiable standards</p>
              </div>
            </div>
          </div>
        </section>

        {/* Work With Us Section - Independent */}
        <section ref={addSectionRef} className="py-16 md:py-24 opacity-0">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-normal text-black dark:text-white mb-8">
              Join us in building the future
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-white bg-black dark:bg-white dark:text-black rounded-full hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
              >
                Work with us
              </Link>
              <Link 
                href="/solutions" 
                className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-black dark:text-white border border-gray-300 dark:border-zinc-700 rounded-full hover:bg-gray-50 dark:hover:bg-zinc-800 transition-colors"
              >
                Explore solutions
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}