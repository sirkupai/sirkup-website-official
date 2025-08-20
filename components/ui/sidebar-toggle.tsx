"use client"

import { cn } from '@/lib/utils'

interface SidebarToggleProps {
  isOpen: boolean
  onClick: () => void
  className?: string
}

export function SidebarToggle({ isOpen, onClick, className }: SidebarToggleProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "relative w-6 h-6 rounded border border-gray-400 dark:border-gray-600 bg-white dark:bg-black hover:bg-gray-50 dark:hover:bg-gray-900 transition-all duration-200 flex items-center justify-center group",
        className
      )}
      aria-label={isOpen ? "Close sidebar" : "Open sidebar"}
    >
      {/* Chevron icon that rotates */}
      <svg 
        className={cn(
          "w-3 h-3 text-gray-700 dark:text-gray-300 transition-transform duration-300 group-hover:text-gray-900 dark:group-hover:text-white",
          isOpen ? "rotate-180" : ""
        )}
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
      </svg>
    </button>
  )
}