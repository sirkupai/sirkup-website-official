"use client"

import { useEffect, useRef } from 'react'
export default function AdvoLocate() {
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
              Advolocate App
            </h1>
            <h3 className="text-2xl md:text-3xl italic text-center text-black dark:text-white mb-12">
            Bridging Civil Society and Legal Fraternities
            </h3>
            <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 mb-6 md:mb-8 max-w-3xl mx-auto px-4">
             Bytes For All (B4A) introduced the ground-breaking Advolocate software in Islamabad on July 19, 2021. Along with notable legal professionals like Advocate Farid Hussain Kaif, Advocate Shafqat Munir Malik, Advocate Hifza Bukhari, Advocate Junaid Akhtar Chohan, and Advocate Raja Shahid Zafar, Honorable Justice Retired Ali Nawaz Chowhan served as the Chief Guest at the inauguration ceremony.
            </p>
            <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 mb-6 md:mb-8 max-w-3xl mx-auto px-4">
            Advolocate is designed as a breakthrough innovation for marginalized groups such as citizen journalists, activists, human rights defenders, and women by creating a digital bridge between civil society and lawyers across South Asia.
            </p>
        </div>
      </section>

    <section ref={addSectionRef} className="relative pt-10 pb-10 px-4 md:px-8 text-center opacity-0">
        <div className="max-w-6xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-normal text-center text-black dark:text-white mb-12">
            Key Features
            </h3>
            
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
            <div className="bg-gray-100 dark:bg-zinc-900 rounded-xl shadow-md p-6 hover:shadow-lg transition flex flex-col items-center text-center">
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">Access to Legal Aid</h3>
                <p className="text-gray-600 dark:text-gray-300">
                Enables CSOs and individual citizen activists to receive pro-bono, paid, and on-demand legal services.
                </p>
            </div>

            <div className="rounded-xl shadow-md p-6 hover:shadow-lg transition flex flex-col items-center text-center">
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">Wide Outreach</h3>
                <p className="text-gray-600 dark:text-gray-300">
               Connects marginalized communities with legal experts regardless of geographical boundaries.
                </p>
            </div>
            <div className="rounded-xl shadow-md p-6 hover:shadow-lg transition flex flex-col items-center text-center">
               <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">Digital Justice Solution</h3>
                <p className="text-gray-600 dark:text-gray-300">
                Provides a much-needed online platform to access legal fraternities, ensuring faster access to justice in human rights cases.
                </p>
            </div>
             <div className="bg-gray-100 dark:bg-zinc-900 rounded-xl shadow-md p-6 hover:shadow-lg transition flex flex-col items-center text-center">
               <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">Support for Vulnerable Groups</h3>
                <p className="text-gray-600 dark:text-gray-300">
                    Specially addresses issues faced by vulnerable societies such as Kalash and Tharparkar, including forced marriages, forced conversions, and threats to freedom of expression.
                </p>
            </div>
          </div>
        </div>
        </section>
         <section ref={addSectionRef} className="relative pt-10 pb-10 px-4 md:px-8 text-center opacity-0">
        <div className="max-w-6xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-normal text-center text-black dark:text-white mb-12">
            Voices from the Launch
            </h3>
            
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
            <div className="bg-black dark:bg-white p-6 hover:shadow-lg transition flex flex-col items-center text-center">
                <h3 className="text-xl font-semibold mb-2 text-white dark:text-black">Justice Retired Ali Nawaz Chowhan</h3>
                <p className="text-gray-300 dark:text-black">
                He highlighted Advolocate's function in providing underprivileged populations with a forum to pursue justice, calling it a "wonderful innovation." He emphasized the necessity for tolerance and the defense of free speech while highlighting the continuous difficulties encountered by journalists and vulnerable cultures.
                </p>
            </div>

            <div className="bg-gray-100 dark:bg-zinc-900 p-6 hover:shadow-lg transition flex flex-col items-center text-center">
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">Advocate Fareed Hussain Kaif</h3>
                <p className="text-gray-600 dark:text-gray-300">
               President of Islamabad District Bar, expressed his joy over this digital advancement in the justice sector, calling it a “delightful development” amidst slow government progress and limited resources for judges and courts.
                </p>
            </div>
            
          </div>
        </div>
        </section>
        <section className="relative pt-10 pb-10 px-4 md:px-8 text-center">
            <div className="max-w-5xl mx-auto text-center">
            <h3 className="text-3xl md:text-4xl font-normal text-center text-black dark:text-white mb-12">
            Why Advolocate?
            </h3>
            <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 mb-6 md:mb-8 mx-auto px-4">
            According to Bytes For All’s Annual Report on the Status of Human Rights Defenders 2018:
            </p>
                
                {/* Timeline */}
                <div className="relative flex items-center justify-between flex-col md:flex-row gap-6 md:gap-12">
                {/* Connector line */}
                <div className="absolute hidden md:block top-1/2 left-0 w-full border-t border-gray-300 dark:border-gray-700 -z-10"></div>

                {/* Step 1 */}
                <div className="flex flex-col items-center md:w-1/3 text-center">
                    <div className="w-8 h-8 flex items-center justify-center rounded-full bg-black dark:bg-white text-white dark:text-black mb-4 font-semibold">
                    1
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                    At least 29 cases of violations against human rights defenders were documented.
                    </p>
                </div>

                {/* Step 2 */}
                <div className="flex flex-col items-center md:w-1/3 text-center">
                    <div className="w-8 h-8 flex items-center justify-center rounded-full bg-black dark:bg-white text-white dark:text-black mb-4 font-semibold">
                    2
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                    65.5% involved men, 31% women, and 7% transgender defenders.
                    </p>
                </div>

                {/* Step 3 */}
                <div className="flex flex-col items-center md:w-1/3 text-center">
                    <div className="w-8 h-8 flex items-center justify-center rounded-full bg-black dark:bg-white text-white dark:text-black mb-4 font-semibold">
                    3
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Serious issues included child marriages, forced conversions, and other human rights violations, where justice is often denied.
                    </p>
                </div>
                
                </div>
                <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 pt-10 max-w-4xl mb-6 md:mb-8 mx-auto px-4">Advolocate directly responds to these challenges by making it easier for marginalized communities to connect with legal bodies and access justice.</p>
            </div>
            </section>
        <section ref={addSectionRef} className="relative pt-10 pb-20 px-4 md:px-8 text-center opacity-0">
        <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-normal text-center text-black dark:text-white mb-12">
                Availability
            </h3>
            <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 mb-6 md:mb-8 mx-auto px-4">
            Advolocate is available for download on both:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Mobile App */}
                <div className="bg-gray-100 dark:bg-zinc-900 rounded-2xl shadow-md p-6 text-center hover:shadow-lg transition">
                    <div className="flex justify-center items-center mb-4">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                        {/* Mobile App Icon */}
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                            <rect x="7" y="2" width="10" height="20" rx="2"/>
                            <path d="M11 18h2"/>
                        </svg>
                    </div>
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">Mobile App</h3>
                    <a
                        href="https://play.google.com/store/apps/details?id=com.advolocate"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-lg font-medium dark: white hover:underline break-all"
                    >
                        For Android
                    </a>
                </div>
                {/* Mobile App */}
                <div className="bg-gray-100 dark:bg-zinc-900 rounded-2xl shadow-md p-6 text-center hover:shadow-lg transition">
                    <div className="flex justify-center items-center mb-4">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                        {/* Mobile App Icon */}
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                            <rect x="7" y="2" width="10" height="20" rx="2"/>
                            <path d="M11 18h2"/>
                        </svg>
                    </div>
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">Mobile App</h3>
                    <a
                        href="https://apps.apple.com/pk/app/advolocate/id1556633025"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-lg font-medium dark:white hover:underline break-all"
                    >
                        For iOS
                    </a>
                </div>
            </div>

        </div>
      </section>
     

    </div>
  )
}
