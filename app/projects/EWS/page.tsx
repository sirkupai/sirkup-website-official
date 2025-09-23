"use client"

import { useEffect, useRef } from 'react'
export default function EWS() {
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
              Early Warning System (EWS)
            </h1>
            <h3 className="text-2xl md:text-3xl italic text-center text-black dark:text-white mb-12">
            Protecting Pakistan's Religious Minorities
            </h3>
            <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 mb-6 md:mb-8 max-w-3xl mx-auto px-4">
             The Asia Foundation created the Early Warning System (EWS) with the goal of safeguarding Pakistan's most vulnerable religious minority populations by identifying threats and taking action before violence breaks out. The program was carried out by a network of more than 500 trained Human Rights Defenders (HRDs) and civil society partners in ten high-risk districts.
            </p>
        </div>
      </section>
       <section ref={addSectionRef} className="relative pt-10 pb-10 px-4 md:px-8 text-center opacity-0">
        <div className="max-w-6xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-normal text-center text-black dark:text-white mb-12">
            Objectives
            </h3>
            
          <div className="grid gap-8 md:grid-cols-3 lg:grid-cols-3">
            <div className="bg-black dark:bg-white p-6 hover:shadow-lg transition flex flex-col items-center text-center">
                <p className="text-gray-300 dark:text-black">
                Send out timely alerts to stop mob violence and hate crimes driven by religion.
                </p>
            </div>

            <div className="bg-gray-100 dark:bg-zinc-900 p-6 hover:shadow-lg transition flex flex-col items-center text-center">
                <p className="text-gray-600 dark:text-gray-300">
              Offer HRDs and community organizations all the resources they require to track, report, and address violations.
                </p>
            </div>
            <div className="bg-black dark:bg-white p-6 hover:shadow-lg transition flex flex-col items-center text-center">
                <p className="text-gray-300 dark:text-black">
                Encourage tolerance, religious freedom, and the defense of fundamental rights in accordance with Pakistan's obligations under international agreements.
                </p>
            </div>
          </div>
        </div>
        </section>
        <section className="relative pt-10 pb-10 px-4 md:px-8 text-center">
            <div className="max-w-5xl mx-auto text-center">
            <h3 className="text-3xl md:text-4xl font-normal text-center text-black dark:text-white mb-12">
            Geographic Focus
            </h3>
            <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 mb-6 md:mb-8 mx-auto px-4">
           The method was implemented in ten regions across Punjab, Sindh, Khyber Pakhtunkhwa, and Balochistan after it was discovered that minorities were the most vulnerable. Due to their history of sectarian conflict and dangers to Shia sects, Ahmadis, Christians, Hindus, and other minority groups, these districts were chosen.
            </p>
            </div>
            </section>
<section className="relative pt-10 pb-12 px-4 md:px-8">
  <div className="max-w-4xl mx-auto">
    <h3 className="text-3xl md:text-4xl font-normal text-center text-black dark:text-white mb-10">
      Implementation Approach
    </h3>

    {[
      {
        title: "Community-Based Networks",
        text:
          "HRDs act as the “eyes and ears” on the ground, monitoring and reporting risks.",
        color: "bg-gray-100",
        theme: "light" as const, // light card (dark text)
        icon: (
          <svg viewBox="0 0 24 24" className="h-10 w-10" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <path d="M20 21a8 8 0 0 0-16 0"/>
            <circle cx="12" cy="8" r="4"/>
          </svg>
        ),
      },
      {
        title: "Capacity Building",
        text:
          "Over 640 HRDs trained in incident reporting, risk identification, and mediation.",
        color: "bg-black dark:bg-zinc-900",
        theme: "dark" as const, // dark card (light text)
        icon: (
          <svg viewBox="0 0 24 24" className="h-10 w-10" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <path d="M4 11l4-4 4 4 4-4 4 4"/>
            <path d="M2 12l5 5a3 3 0 0 0 4.24 0L12 16l1.76 1.76a3 3 0 0 0 4.24 0L22 14"/>
            <path d="M4 11v6M20 11v3"/>
          </svg>
        ),
      },
      {
        title: "Rapid Response",
        text:
          "To reduce tensions, alerts prompt interaction with the media, authorities, and local leaders.",
        color: "bg-gray-100",
        theme: "light" as const,
        icon: (
          <svg viewBox="0 0 24 24" className="h-10 w-10" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <path d="M14 9l-3 3"/>
            <path d="M5 15l-2 6 6-2 10-10a3.5 3.5 0 0 0-5-5L6 14z"/>
            <path d="M15 7a2 2 0 1 0 2-2"/>
          </svg>
        ),
      },
      {
        title: "Advocacy & Media Outreach",
        text:
          "Civil society partners conduct awareness campaigns, interfaith dialogues, and public service messaging to counter hate narratives.",
        color: "bg-black dark:bg-zinc-900",
        theme: "dark" as const,
        icon: (
          <svg viewBox="0 0 24 24" className="h-10 w-10" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <circle cx="12" cy="12" r="8"/>
            <circle cx="12" cy="12" r="4"/>
            <path d="M12 2v2M12 20v2M2 12h2M20 12h2"/>
          </svg>
        ),
      },
    ].map((item, idx, arr) => {
      const isDark = item.theme === "dark";
      return (
        <div key={idx} className="relative">
          {/* card */}
          <div
            className={[
              "relative rounded-[22px] md:rounded-[26px] px-5 sm:px-7 py-6 sm:py-8",
              item.color,
              isDark ? "text-white" : "text-black",
            ].join(" ")}
          >
            <div className="grid grid-cols-[48px_minmax(0,1fr)] sm:grid-cols-[56px_minmax(0,1fr)] gap-4 items-start text-left">
              {/* icon inherits currentColor */}
              <div className="flex items-center justify-center">
                <div className={isDark ? "text-white/90" : "text-black/80"}>{item.icon}</div>
              </div>

              <div>
                <h4 className={["text-lg sm:text-xl font-semibold", isDark ? "text-white" : "text-black"].join(" ")}>
                  {item.title}
                </h4>
                <p className={["mt-2 text-sm sm:text-base leading-relaxed", isDark ? "text-white/80" : "text-black/70"].join(" ")}>
                  {item.text}
                </p>
              </div>
            </div>

            {/* outline matches theme */}
            <span
              className={[
                "pointer-events-none absolute inset-0 rounded-[22px] md:rounded-[26px] border-2",
                isDark ? "border-white/20" : "border-black/20",
              ].join(" ")}
            />
          </div>

          {/* connector arrow (hide after last) */}
          {idx < arr.length - 1 && (
            <div className="flex justify-center my-5 sm:my-6">
              <svg
                viewBox="0 0 24 24"
                className={isDark ? "h-6 w-6 text-neutral-300" : "h-6 w-6 text-neutral-600"}
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden
              >
                <path d="M12 4v14" />
                <path d="M6 12l6 6 6-6" />
              </svg>
            </div>
          )}
        </div>
      );
    })}
  </div>
</section>


    <section ref={addSectionRef} className="relative pt-10 pb-10 px-4 md:px-8 text-center opacity-0">
        <div className="max-w-6xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-normal text-center text-black dark:text-white mb-12">
            Partnerships
            </h3>
             <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 mb-6 md:mb-8 mx-auto px-4">
          The EWS was implemented with strong collaboration among NGOs, community organizations, and human rights groups.
            </p>
            
          <div className="grid gap-8 md:grid-cols-3 lg:grid-cols-3">
            <div className="bg-gray-100 dark:bg-zinc-900 rounded-xl shadow-md p-6 hover:shadow-lg transition flex flex-col items-center text-center">
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">Local Partners</h3>
                <p className="text-gray-600 dark:text-gray-300">
                Association of Women for Awareness and Motivation (AWAM) in Faisalabad, South Asia Partnership–Pakistan (SAP-PK)
                </p>
            </div>

            <div className="rounded-xl shadow-md p-6 hover:shadow-lg transition flex flex-col items-center text-center">
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">Civil Society Collaboration</h3>
                <p className="text-gray-600 dark:text-gray-300">
               Lawyers, journalists, religious leaders, and advocacy organizations.
                </p>
            </div>
            <div className="bg-gray-100 dark:bg-zinc-900 rounded-xl shadow-md p-6 hover:shadow-lg transition flex flex-col items-center text-center">
               <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">Digital Rights Community</h3>
                <p className="text-gray-600 dark:text-gray-300">
                Organizations such as Bytes For All supported the use of technology and online monitoring to strengthen early warning capacity.
                </p>
            </div>
             
          </div>
        </div>
        </section>
        
        <section className="relative pt-10 pb-10 px-4 md:px-8 text-center">
            <div className="max-w-5xl mx-auto text-center">
            <h3 className="text-3xl md:text-4xl font-normal text-center text-black dark:text-white mb-12">
            Outcomes & Impact
            </h3>
                {/* Timeline */}
                <div className="relative flex items-center justify-between flex-col md:flex-row gap-6 md:gap-12">
                {/* Connector line */}
                <div className="absolute hidden md:block top-1/2 left-0 w-full border-t border-gray-300 dark:border-gray-700 -z-10"></div>

                {/* Step 1 */}
                <div className="flex flex-col items-center md:w-1/4 text-center">
                    <div className="w-8 h-8 flex items-center justify-center rounded-full bg-black dark:bg-white text-white dark:text-black mb-4 font-semibold">
                    1
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Recognized as an effective mechanism for minority protection in Pakistan.
                    </p>
                </div>

                {/* Step 2 */}
                <div className="flex flex-col items-center md:w-1/4 text-center">
                    <div className="w-8 h-8 flex items-center justify-center rounded-full bg-black dark:bg-white text-white dark:text-black mb-4 font-semibold">
                    2
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Helped avert or reduce the severity of potential mob violence incidents.
                    </p>
                </div>

                {/* Step 3 */}
                <div className="flex flex-col items-center md:w-1/3 text-center">
                    <div className="w-8 h-8 flex items-center justify-center rounded-full bg-black dark:bg-white text-white dark:text-black mb-4 font-semibold">
                    3
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Sustained REAT network continues to advocate for minority rights beyond the project’s initial phase.
                    </p>
                </div>
                {/* Step 4 */}
                <div className="flex flex-col items-center md:w-1/3 text-center">
                    <div className="w-8 h-8 flex items-center justify-center rounded-full bg-black dark:bg-white text-white dark:text-black mb-4 font-semibold">
                    4
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Minority rights were included in policy talks, leading to special groups in the National and Provincial Assemblies.
                    </p>
                </div>
                </div>
                
            </div>
            </section>
        <section ref={addSectionRef} className="relative pt-10 pb-20 px-4 md:px-8 text-center opacity-0">
        <div className="max-w-7xl mx-auto">
            <div className="bg-gray-100 dark:bg-zinc-900 rounded-2xl py-20 text-center">
            <h3 className="text-3xl md:text-4xl font-normal text-center text-black dark:text-white mb-12">
                Conclusion
            </h3>
            <p className="max-w-5xl text-base md:text-lg text-gray-700 dark:text-gray-300 mb-6 md:mb-8 mx-auto px-4">
            With the support of digital tools and solid relationships, community-driven networks, like the Early Warning System, can offer vulnerable religious minority a lifeline against violence and discrimination. It keeps developing as a reliable civil society tool, reaffirming Pakistan's dedication to human rights and religious freedom.
            </p>
            
            </div>
        </div>
      </section>
     

    </div>
  )
}
