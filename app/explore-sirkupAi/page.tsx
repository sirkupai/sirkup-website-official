"use client"

import { useEffect, useRef } from "react"
import { Card } from "@/components/ui/card"
import Link from 'next/link'
import Image from 'next/image'

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

  // Split prompts for two rows
  const promptsRow1 = [
    "A futuristic city floating in the sky at sunset.",
    "A golden retriever wearing a wizard hat",
    "A traditional Turkish tea shop by the seaside",
    "A fox wearing a tiny crown",
    "Vintage car parked on a quiet road",
    "Bike leaning against a brick wall",
  ]

  const promptsRow2 = [
    "Close-up of fresh fruit on a wooden table",
    "Kids flying kites in an open field",
    "Fresh bread on a wooden cutting board",
    "Close-up of raindrops on a window",
    "Change the sky to a clear blue sky",
    "Seaside town with boats in the harbor",
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      {/* Hero Section */}
      <section
        ref={addSectionRef}
        className="relative pt-20 pb-10 px-4 md:px-8 text-center opacity-0"
      >
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-normal tracking-tight text-black dark:text-white mb-4 md:mb-6">
            Explore SirkupAI Vision
          </h1>
          <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 mb-6 md:mb-8 max-w-3xl mx-auto px-4">
            Create stunning visuals in seconds. Customize with powerful tools,
            share seamlessly, and bring your ideas to life with unique styles.
          </p>
          <div className="flex justify-center gap-4">
            <Link href="https://vision.sirkup.ai/"
                target="_blank">
            <button className="px-6 py-3 bg-black text-white rounded-lg dark:bg-white dark:text-black hover:opacity-90 transition">
              Start Now
            </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Prompts Section */}
      <section
        ref={addSectionRef}
        className="py-16 px-4 md:px-8 opacity-0"
      >
        <div className="max-w-5xl mx-auto text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-semibold text-black dark:text-white mb-4">
            Try these prompts
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Kickstart your creativity with ready-to-use ideas
          </p>
        </div>

        {/* Row 1 */}
        <div className="overflow-hidden mb-6">
          <div className="flex w-max animate-scroll-left hover:[animation-play-state:paused]">
            {[...promptsRow1, ...promptsRow1].map((prompt, index) => (
              <a
                key={`row1-${index}`}
                href="https://vision.sirkup.ai/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Card className="p-6 mx-2 min-w-[280px] text-left bg-gray-50 dark:bg-zinc-900 text-gray-800 dark:text-gray-200 rounded-xl shadow-sm hover:shadow-md transition cursor-pointer">
                  <p className="text-base">{prompt}</p>
                </Card>
              </a>
            ))}
          </div>
        </div>

        {/* Row 2 */}
        <div className="overflow-hidden">
          <div className="flex w-max animate-scroll-right hover:[animation-play-state:paused]">
            {[...promptsRow2, ...promptsRow2].map((prompt, index) => (
              <a
                key={`row2-${index}`}
                href="https://vision.sirkup.ai/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Card className="p-6 mx-2 min-w-[280px] text-left bg-gray-50 dark:bg-zinc-900 text-gray-800 dark:text-gray-200 rounded-xl shadow-sm hover:shadow-md transition cursor-pointer">
                  <p className="text-base">{prompt}</p>
                </Card>
              </a>
            ))}
          </div>
        </div>
      </section>
      <section ref={addSectionRef} className="relative py-20 px-4 md:px-8 text-center opacity-0">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold text-black dark:text-white mb-4">
              Turn your ideas into stunning visuals
            </h2>
            <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 mb-6 md:mb-8 max-w-3xl mx-auto px-4">
              Generate, customize, and share unique images effortlessly.
            </p>
        </div>
        <div className="relative w-full max-w-4xl mx-auto mb-8">
        <Image
            src="/images/sirkupai-vision01.png"
            alt="sirkupai-vision01"
            className="object-contain rounded-lg"
            width={1200}
            height={800}
            quality={100}
            priority
        />
        <h2 className="text-2xl md:text-3xl font-semibold text-black dark:text-white pt-10 mb-10">
              Unlock the power of AI art, it starts with a quick sign up.
            </h2>
            <Image
            src="/images/SignUp-SignInnew.png"
            alt="SignUp-SignIn"
            className="object-contain rounded-lg"
            width={1200}
            height={800}
            quality={100}
            priority
        />
        <h2 className="text-2xl md:text-3xl font-semibold text-black dark:text-white pt-10 mb-10">
              From words to visuals, just enter your prompt.
            </h2>
            <Image
            src="/images/Generated-Imagenew.png"
            alt="Generated-Image"
            className="object-contain rounded-lg"
            width={1200}
            height={800}
            quality={100}
            priority
        />
        <h2 className="text-2xl md:text-3xl font-semibold text-black dark:text-white pt-10 mb-10">
              Edit any image to match your vision.
            </h2>
            <Image
            src="/images/Edit-Imagenew.png"
            alt="Edit-Image"
            className="object-contain rounded-lg"
            width={1200}
            height={800}
            quality={100}
            priority
        />
        </div>
      </section>
    </div>
  )
}
