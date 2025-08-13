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
        "relative w-5 h-5 rounded border border-gray-300 bg-white hover:bg-gray-50 transition-all duration-200 flex items-center justify-center group",
        className
      )}
      aria-label={isOpen ? "Close sidebar" : "Open sidebar"}
    >
      {/* Vertical line that moves horizontally */}
      <span 
        className={cn(
          "absolute w-0.5 h-2.5 bg-gray-600 transition-all duration-300 ease-in-out group-hover:bg-gray-900",
          isOpen ? "translate-x-1" : "-translate-x-1.5"
        )}
      />
    </button>
  )
}