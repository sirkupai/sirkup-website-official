"use client"

import { useEffect, useRef } from 'react'

export default function Helpline1099() {
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
              Toll Free Helpline (1099)
            </h1>
            <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 mb-6 md:mb-8 max-w-3xl mx-auto px-4">
              A “Helpline for Legal Advice on Human Rights Violations” has been established in the Ministry of Human Rights as PSDP project during fiscal year 2014-15 to address the issue of human rights violation in the country. Initially a UAN (111-664-775) was allocated to the Helpline, which was successfully supplanted with a short code of 1099 in November 2015.
            </p>
            <p className="text-base md:text-lg text-gray-700 italic dark:text-gray-300 mb-6 md:mb-8 max-w-3xl mx-auto px-4">The helpline is now a permanent part of the MoHR and it is successfully converted from development to non-development.
            </p>
        </div>
      </section>
      <section
  ref={addSectionRef}
  className="relative pt-10 pb-10 px-4 md:px-8 text-center opacity-0"
>
  <div className="max-w-4xl mx-auto">
    <h3 className="text-3xl md:text-4xl font-normal text-center text-black dark:text-white mb-12">
      Objectives of the Helpline
    </h3>

    {/* timeline container */}
    <div className="relative mx-auto max-w-3xl">
      {/* center spine */}
      <div className="absolute left-1/2 top-0 -translate-x-1/2 h-full w-1 bg-black/10 dark:bg-white/10 rounded" />

      <ul className="space-y-8">
        {/* 1 */}
        <li className="relative grid grid-cols-1 md:grid-cols-2 items-center">
          {/* ribbon (left) */}
          <div className="md:col-start-1 md:pr-10">
            <div
              className="relative rounded-md dark:bg-zinc-900 bg-black text-white shadow-sm ring-1 ring-black/5 px-4 py-4 md:ml-0"
            >
              {/* arrow head */}
              <span className="hidden md:block absolute right-[-18px] top-1/2 -translate-y-1/2 border-y-[18px] border-y-transparent border-l-[18px] border-black dark:border-zinc-900" />
              <p className="text-sm font-semibold">Helpline</p>
              <p className="text-sm/6 text-white">
                To establish a Helpline for addressing the issues of human rights
                violations through legal advice.
              </p>
            </div>
          </div>

          {/* number box (center) */}
          <div className="order-first md:order-none md:col-start-2 md:row-start-1 relative flex md:block justify-center">
            <div className="relative z-10 w-14 h-14 grid place-items-center rounded md:mx-auto -mb-4 md:mb-0 bg-black dark:bg-zinc-900 text-white font-bold shadow">
              01
            </div>
          </div>
        </li>

        {/* 2 */}
        <li className="relative grid grid-cols-1 md:grid-cols-2 items-center">
          {/* number box */}
          <div className="order-first md:order-none md:col-start-1 relative flex md:block justify-center">
            <div className="relative z-10 w-14 h-14 grid place-items-center rounded md:mx-auto -mb-4 md:mb-0 bg-stone-400 text-white font-bold shadow">
              02
            </div>
          </div>

          {/* ribbon (right) */}
          <div className="md:col-start-2 md:pl-10">
            <div className="relative rounded-md bg-stone-300 text-black shadow-sm ring-1 ring-black/5 px-4 py-4">
              <span className="hidden md:block absolute right-[-18px] top-1/2 -translate-y-1/2 border-y-[18px] border-y-transparent border-l-[18px] border-l-stone-300" />
              <p className="text-sm font-semibold">Grievance Redressal</p>
              <p className="text-sm/6 text-black/70">
                To establish grievance-redressal mechanism through referral services to the
                victims of human rights violations.
              </p>
            </div>
          </div>
        </li>

        {/* 3 */}
        <li className="relative grid grid-cols-1 md:grid-cols-2 items-center">
          {/* ribbon (left) */}
          <div className="md:col-start-1 md:pr-10">
            <div
              className="relative rounded-md dark:bg-zinc-900 bg-black text-white shadow-sm ring-1 ring-black/5 px-4 py-4 md:ml-0"
            >
              <span className="hidden md:block absolute right-[-18px] top-1/2 -translate-y-1/2 border-y-[18px] border-y-transparent border-l-[18px] border-black dark:border-zinc-900" />
              <p className="text-sm font-semibold">National Database</p>
              <p className="text-sm/6 text-white">
                To maintain data-base on human rights violations at national level.
              </p>
            </div>
          </div>

          {/* number */}
          <div className="order-first md:order-none md:col-start-2 md:row-start-1 relative flex md:block justify-center">
            <div className="relative z-10 w-14 h-14 grid place-items-center rounded md:mx-auto -mb-4 md:mb-0 bg-black dark:bg-zinc-900 text-white font-bold shadow">
              03
            </div>
          </div>
        </li>

        {/* 4 */}
        <li className="relative grid grid-cols-1 md:grid-cols-2 items-center">
          {/* number */}
          <div className="order-first md:order-none md:col-start-1 relative flex md:block justify-center">
            <div className="relative z-10 w-14 h-14 grid place-items-center rounded md:mx-auto -mb-4 md:mb-0 bg-stone-400 text-white font-bold shadow">
              04
            </div>
          </div>

          {/* ribbon (right) */}
          <div className="md:col-start-2 md:pl-10">
            <div className="relative rounded-md bg-stone-300 text-black shadow-sm ring-1 ring-black/5 px-4 py-4">
              <span className="hidden md:block absolute right-[-18px] top-1/2 -translate-y-1/2 border-y-[18px] border-y-transparent border-l-[18px] border-l-stone-300" />
              <p className="text-sm font-semibold">Support Services</p>
              <p className="text-sm/6 text-black/70">
                To facilitate and link relevant support services for the victims of human
                rights violations and their families.
              </p>
            </div>
          </div>
        </li>

        {/* 5 */}
        <li className="relative grid grid-cols-1 md:grid-cols-2 items-center">
          {/* ribbon (left) */}
          <div className="md:col-start-1 md:pr-10">
            <div
              className="relative rounded-md dark:bg-zinc-900 bg-black text-white shadow-sm ring-1 ring-black/5 px-4 py-4 md:ml-0"
            >
              <span className="hidden md:block absolute right-[-18px] top-1/2 -translate-y-1/2 border-y-[18px] border-y-transparent border-l-[18px] border-black dark:border-zinc-900" />
              <p className="text-sm font-semibold">Network & Coordination</p>
              <p className="text-sm/6 text-white">
                To set up a strong network and coordination mechanism among stakeholders
                including law enforcement agencies, service providers, media, CSOs/NGOs,
                Law Colleges, Private Law Firms, Bar Associations and other organizations
                working in Human Rights.
              </p>
            </div>
          </div>

          {/* number */}
          <div className="order-first md:order-none md:col-start-2 md:row-start-1 relative flex md:block justify-center">
            <div className="relative z-10 w-14 h-14 grid place-items-center rounded md:mx-auto -mb-4 md:mb-0 bg-black dark:bg-zinc-900 text-white font-bold shadow">
              05
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</section>

    <section ref={addSectionRef} className="relative pt-10 pb-20 px-4 md:px-8 text-center opacity-0">
        <div className="max-w-6xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-normal text-center text-black dark:text-white mb-12">
            1099: Pakistan’s Toll-Free Path to Legal Help
            </h3>
            
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-gray-100 dark:bg-zinc-900 rounded-xl shadow-md p-6 hover:shadow-lg transition flex flex-col items-center text-center">
                <p className="text-gray-600 dark:text-gray-300">
                A Toll-Free Number 1099 was installed to offer access to the callers from all over the country (with no cost at all) to get free legal advice, counseling, legal assistance and referral service for redressal of their grievances.
                </p>
            </div>

            <div className="rounded-xl shadow-md p-6 hover:shadow-lg transition flex flex-col items-center text-center">
                <p className="text-gray-600 dark:text-gray-300">
               The effectiveness of the helpline largely depends on, by forming linkages with Police Departments, Judiciary, Law Colleges, Law Firms, Bar Associations and other organizations working in the field of Human Rights.
                </p>
            </div>
            <div className="bg-gray-100 dark:bg-zinc-900 rounded-xl shadow-md p-6 hover:shadow-lg transition flex flex-col items-center text-center">
                <p className="text-gray-600 dark:text-gray-300">
                The helpline since its establishment has received almost 1.5 million calls till May 2025 and has provided its services in almost 60 thousand relevant cases. All relevant callers are given legal advice and referred to the relevant departments where required.
                </p>
            </div>
          </div>
        </div>
        </section>
        <section ref={addSectionRef} className="relative pt-10 pb-20 px-4 md:px-8 text-center opacity-0">
        <div className="max-w-6xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-normal text-center text-black dark:text-white mb-12">
                Contact Helpline 1099
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Card 1 */}
                <div className="bg-gray-100 dark:bg-zinc-900 rounded-2xl shadow-md p-6 text-center hover:shadow-lg transition">
                    <div className="flex justify-center items-center mb-4">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                        {/* Mail Icon */}
                       <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                        <path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z"/>
                        <path d="m22 6-10 7L2 6"/>
                    </svg>
                    </div>
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">Email</h3>
                    <a href="mailto:helpline@mohr.gov.pk" className="text-lg font-medium hover:underline">
                        helpline@mohr.gov.pk
                    </a>
                </div>

                {/* Number */}
                <div className="bg-gray-100 dark:bg-zinc-900 rounded-2xl shadow-md p-6 text-center hover:shadow-lg transition">
                    <div className="flex justify-center items-center mb-4">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                        {/* Number Icon */}
                       <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.75 19.75 0 0 1-8.59-3.13 19.38 19.38 0 0 1-6-6A19.75 19.75 0 0 1 2.08 4.18 2 2 0 0 1 4.06 2h3a2 2 0 0 1 2 1.72c.12.86.32 1.7.6 2.51a2 2 0 0 1-.45 2.11L8.1 9.45a16 16 0 0 0 6.45 6.45l1.11-1.11a2 2 0 0 1 2.11-.45c.81.28 1.65.48 2.51.6A2 2 0 0 1 22 16.92z"/>
                    </svg>
                    </div>
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">Toll-Free Number</h3>
                    <a href="tel:1099" className="text-lg font-medium hover:underline">1099</a>
                </div>

                {/* Whatsapp */}
                <div className="bg-gray-100 dark:bg-zinc-900 rounded-2xl shadow-md p-6 text-center hover:shadow-lg transition">
                    <div className="flex justify-center items-center mb-4">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                        {/* Whatsapp Icon */}
                       <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                        <path d="M20 3.5A10 10 0 1 1 4 20l-1.5 3L6 21a10 10 0 1 1 14-17.5z"/>
                        <path d="M7.5 9.5c.5 1.5 2.5 4 5 5 .9.4 1.5.5 2 .4.6-.1 1.2-.7 1.4-1.2"/>
                    </svg>
                    </div>
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">WhatsApp</h3>
                    <a
                        href="https://wa.me/923339085709"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-lg font-medium hover:underline"
                    >
                        03339085709
                    </a>
                </div>
                {/* Facebook */}
                <div className="bg-gray-100 dark:bg-zinc-900 rounded-2xl shadow-md p-6 text-center hover:shadow-lg transition">
                    <div className="flex justify-center items-center mb-4">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                        {/* Facebook Icon */}
                     <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                        <path d="M22 12a10 10 0 1 0-11.6 9.9v-7H8.2V12h2.2V9.8c0-2.2 1.3-3.4 3.3-3.4.96 0 1.97.17 1.97.17v2.17h-1.11c-1.1 0-1.44.68-1.44 1.37V12h2.46l-.39 2.9h-2.07v7A10 10 0 0 0 22 12z"/>
                    </svg>
                    </div>
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">Facebook</h3>
                    <a
                        href="https://www.facebook.com/helpline1099/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-lg font-medium hover:underline break-all"
                    >
                        facebook.com/helpline1099
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
                        href="https://play.google.com/store/apps/details?id=com.govpk.zainabalert&hl=en"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-lg font-medium hover:underline break-all"
                    >
                        Awaz App
                    </a>
                </div>
                 {/* Address */}
                <div className="bg-gray-100 dark:bg-zinc-900 rounded-2xl shadow-md p-6 text-center hover:shadow-lg transition">
                    <div className="flex justify-center items-center mb-4">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                        {/* Address Icon */}
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                            <path d="M21 10c0 7-9 12-9 12S3 17 3 10a9 9 0 1 1 18 0z"/>
                            <circle cx="12" cy="10" r="3"/>
                        </svg>
                    </div>
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">Address</h3>
                    <p className="text-lg font-medium">
                        8th Floor, New Pak Secretariat (Kohsar Block), Sector F-5, Islamabad
                    </p>
                </div>
            </div>

        </div>
      </section>
     

    </div>
  )
}
