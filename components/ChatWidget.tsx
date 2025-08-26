"use client"

import { useState, useEffect } from "react"

export default function SirkupAIWidget() {
  const [input, setInput] = useState("")
  const [isFocused, setIsFocused] = useState(false)
  const [response, setResponse] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const [hideWidget, setHideWidget] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim()) return

    setLoading(true)
    setResponse(null)

    try {
      const res = await fetch(
        `https://primary-production-2d7fc.up.railway.app/webhook-test/788f1992-96ea-4c39-8a16-ba0ecb53ce0e?query=${encodeURIComponent(
          input
        )}`
      )

      if (!res.ok) throw new Error(`Network response was not ok: ${res.status}`)

      const text = await res.text()
      setResponse(text)
    } catch (error) {
      console.error("Error fetching response:", error)
      setResponse("⚠️ Error sending request.")
    } finally {
      setLoading(false)
      setInput("")
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      const footer = document.querySelector("footer")
      if (!footer) return

      const footerTop = footer.getBoundingClientRect().top
      const windowHeight = window.innerHeight

      // Hide when footer is within 150px of viewport bottom
      setHideWidget(footerTop < windowHeight + 150)
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // initial check
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div
      className={`fixed bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center w-full px-4 z-50 transition-all duration-300
      ${hideWidget ? "opacity-0 translate-y-20 pointer-events-none" : "opacity-100 translate-y-0"}`}
    >
      {/* Chat Input Bar */}
      <form
        onSubmit={handleSubmit}
        className={`relative flex items-center rounded-[30px] shadow-lg shadow-black/10 backdrop-blur-xl bg-white/90 dark:bg-gray-900/70 transition-all duration-300 border border-gray-200 dark:border-gray-700
        ${isFocused || input ? "w-[500px]" : "w-[250px]"}`}
      >
        <input
          type="text"
          value={input}
          onFocus={() => setIsFocused(true)}
          onBlur={() => !input && setIsFocused(false)}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask Sirkup AI"
          aria-label="Message Sirkup AI"
          className="flex-1 px-4 py-3 rounded-[30px] bg-transparent focus:outline-none text-gray-900 dark:text-gray-100 placeholder:text-gray-500 text-base"
        />

        <button
          type="submit"
          aria-label="Send prompt to Sirkup AI"
          disabled={!input.trim() || loading}
          className="absolute right-2 top-1/2 -translate-y-1/2 h-10 w-10 flex items-center justify-center rounded-full bg-blue-600 text-white hover:bg-blue-700 disabled:bg-gray-300 disabled:text-gray-500 disabled:cursor-not-allowed transition"
        >
          {loading ? (
            <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          )}
        </button>
      </form>

      {/* Response Output */}
      {response && (
        <div className="mt-3 max-w-[500px] w-full rounded-xl bg-gray-100 dark:bg-gray-800 p-4 text-gray-900 dark:text-gray-100 text-sm shadow-md transition-all duration-300">
          {response}
        </div>
      )}
    </div>
  )
}
