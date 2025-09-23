"use client";

import { useState, useEffect, useRef } from "react";

export default function SirkupAIWidget() {
  const [input, setInput] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [response, setResponse] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [hideWidget, setHideWidget] = useState(false);
  const chatBoxRef = useRef<HTMLDivElement | null>(null); // only wrap the box

  // 🧼 Clean iframe-wrapped responses + basic entity unescape
  const sanitizeResponse = (html: string) => {
    // If the server returns an iframe with srcdoc="...":
    const iframeMatch = html.match(/<iframe[^>]*srcdoc="([^"]*)"/i);
    const inner = iframeMatch ? iframeMatch[1] : html;

    // Unescape a few common entities (upstreams often escape srcdoc/html)
    return inner
      .replace(/&lt;/g, "<")
      .replace(/&gt;/g, ">")
      .replace(/&amp;/g, "&")
      .replace(/&quot;/g, '"')
      .replace(/&#39;/g, "'");
  };

  // 🚀 Submit with timeout + rich error reporting
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const q = input.trim();
    if (!q) return;

    setLoading(true);
    setResponse(null);

    // 12s client timeout (separate from server’s)
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 12_000);

    try {
      const res = await fetch("/api/sirkup", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "text/html,application/json" },
        body: JSON.stringify({ query: q }),
        signal: controller.signal,
      });

      const raw = await res.text(); // read once

      if (!res.ok) {
        // Try to parse our API's JSON error shape for helpful details
        let reason = "";
        try {
          const j = JSON.parse(raw);
          reason = j?.error
            ? `${j.error}${j.status ? ` (status ${j.status})` : ""}`
            : raw.slice(0, 300);
        } catch {
          reason = raw.slice(0, 300) || `HTTP ${res.status}`;
        }
        console.error("/api/sirkup error", res.status, raw);
        setResponse(`⚠️ Request failed: ${reason}`);
        return; // keep input so user can tweak and retry
      }

      setResponse(sanitizeResponse(raw));
      setInput(""); // only clear on success
    } catch (err: any) {
      if (err?.name === "AbortError") {
        setResponse("⚠️ Request timed out. Please try again.");
      } else {
        console.error("Network/JS error:", err);
        setResponse("⚠️ Network error. Check your connection or try again.");
      }
    } finally {
      clearTimeout(timer);
      setLoading(false);
    }
  };

  // 🫥 Hide widget when near the footer
  useEffect(() => {
    const handleScroll = () => {
      const footer = document.querySelector("footer");
      if (!footer) return;
      const footerTop = footer.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      setHideWidget(footerTop < windowHeight + 150);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 🧊 Collapse if clicking outside the chat box
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (chatBoxRef.current && !chatBoxRef.current.contains(e.target as Node)) {
        setResponse(null); // clear response
        setIsFocused(false); // shrink input
        setInput(""); // also clear input
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div
      className={`fixed bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center px-4 z-50 transition-all duration-300
      ${hideWidget ? "opacity-0 translate-y-20 pointer-events-none" : "opacity-100 translate-y-0"}`}
    >
      <div ref={chatBoxRef} className="flex flex-col items-center w-full">
        {/* Chat Input */}
        <form
          onSubmit={handleSubmit}
          className={`relative flex items-center rounded-[30px] shadow-lg shadow-black/10 backdrop-blur-xl 
          bg-white/90 dark:bg-gray-900/70 transition-all duration-300 border border-gray-200 dark:border-gray-700
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
            className="flex-1 px-4 py-3 rounded-[30px] bg-transparent focus:outline-none 
                       text-gray-900 dark:text-gray-100 placeholder:text-gray-500 text-base"
          />

          <button
            type="submit"
            aria-label="Send prompt to Sirkup AI"
            disabled={!input.trim() || loading}
            className="absolute right-2 top-1/2 -translate-y-1/2 h-10 w-10 flex items-center justify-center 
                       rounded-full bg-blue-600 text-white hover:bg-blue-700 
                       disabled:bg-gray-300 disabled:text-gray-500 disabled:cursor-not-allowed transition"
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
          <div
            className="mt-3 max-w-[500px] w-full rounded-xl bg-gray-100 dark:bg-gray-800 p-4 
                       text-gray-900 dark:text-gray-100 text-sm shadow-md transition-all duration-300 
                       max-h-[400px] overflow-y-auto"
          >
            <div className="prose prose-sm dark:prose-invert" dangerouslySetInnerHTML={{ __html: response }} />
          </div>
        )}
      </div>
    </div>
  );
}
