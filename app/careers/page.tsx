"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function SalesMarketingPage() {
  const sectionsRef = useRef<HTMLElement[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up")
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

  // Example job openings data
  const jobs = [
    {
      title: "AI Engineer",
      location: "Islamabad, Pakistan",
      link: "/careers-form",
    },
    {
      title: "Prompt Engineer",
      location: "Islamabad, Pakistan",
      link: "/careers-form",
    },
    {
      title: "Frontend Developer",
      location: "Islamabad, Pakistan",
      link: "/careers-form",
    },
    {
      title: "Video Editor",
      location: "Islamabad, Pakistan",
      link: "/careers-form",
    },
    {
      title: "Digital Marketing Specialist",
      location: "Islamabad, Pakistan",
      link: "/careers-form",
    },
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      {/* Hero Section */}
      <section
        ref={addSectionRef}
        className="relative py-20 px-4 md:px-8 text-center opacity-0"
      >
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-normal tracking-tight text-black dark:text-white mb-4 md:mb-6">
            We’re Hiring
          </h1>
          <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 mb-6 md:mb-8 max-w-3xl mx-auto px-4">
            Check out our open positions and start your journey with us.
          </p>
        </div>
      </section>

      {/* Jobs Section */}
      <section
        ref={addSectionRef}
        className="relative pt-4 pb-20 px-4 md:px-8 opacity-0"
      >
        <div className="max-w-5xl mx-auto space-y-6">
          {jobs.map((job, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row items-start md:items-center justify-between border-b border-gray-200 dark:border-gray-700 pb-4"
            >
              <div>
                <h3 className="text-lg font-medium text-black dark:text-white">
                  {job.title}
                </h3>
              </div>
              <div className="flex items-center gap-6 mt-3 md:mt-0">
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {job.location}
                </span>
                <Link href={job.link} target="_blank">
                  <Button
                    variant="link"
                    className="text-blue-600 dark:text-blue-400 font-medium hover:underline"
                  >
                    Apply now →
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
