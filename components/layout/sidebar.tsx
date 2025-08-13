"use client"

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { OpenAIButton } from '@/components/ui/openai-button'
import { cn } from '@/lib/utils'

interface SidebarProps {
  isCollapsed: boolean
  onToggle: () => void
}

const Sidebar = ({ isCollapsed, onToggle }: SidebarProps) => {
  const pathname = usePathname()

  const navigation = [
    { name: 'Home', href: '/', icon: '🏠' },
  ]

  return (
    <motion.div
      initial={false}
      animate={{ 
        width: isCollapsed ? 80 : 280,
        transition: { type: "spring", damping: 30, stiffness: 300 }
      }}
      className="fixed left-0 top-0 h-full bg-white border-r border-gray-200 z-50 flex flex-col"
    >
      {/* Header */}
      <div className="flex items-center justify-between p-6 border-b border-gray-100 min-h-[80px]">
        {!isCollapsed && (
          <Link href="/" className="flex items-center space-x-3">
            <span className="font-semibold text-lg text-gray-900">SirkupAI</span>
          </Link>
        )}
        {isCollapsed ? (
          <div className="flex flex-col items-center space-y-3 mx-auto">
            <span className="font-semibold text-lg text-gray-900">S</span>
            <Button
              variant="ghost"
              size="icon"
              onClick={onToggle}
              className="h-6 w-6 text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded-lg shadow-sm border border-gray-200 transition-all duration-200"
            >
              <span className="h-3 w-3">›</span>
            </Button>
          </div>
        ) : (
          <Button
            variant="ghost"
            size="icon"
            onClick={onToggle}
            className="h-8 w-8 text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded-lg shadow-sm border border-gray-200 transition-all duration-200"
          >
            <span className="h-4 w-4">‹</span>
          </Button>
        )}
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-1">
        {navigation.map((item) => {
          const isActive = pathname === item.href
          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "flex items-center space-x-3 px-3 py-3 rounded-lg text-sm font-medium transition-colors group",
                isActive
                  ? "bg-gray-100 text-gray-900"
                  : "text-gray-600 hover:text-gray-900 hover:bg-gray-50",
                isCollapsed && "justify-center"
              )}
            >
              <span className={cn(
                "text-xl flex-shrink-0",
                isActive ? "opacity-100" : "opacity-60 group-hover:opacity-80"
              )}>{item.icon}</span>
              {!isCollapsed && <span>{item.name}</span>}
            </Link>
          )
        })}
      </nav>

      {/* Footer */}
      {!isCollapsed && (
        <div className="p-4 border-t border-gray-100">
          <div className="text-center text-xs text-gray-500">
            <p>© 2025 SirkupAI</p>
            <p className="mt-1">All systems operational</p>
          </div>
        </div>
      )}
      {isCollapsed && (
        <Button
          variant="ghost"
          size="icon"
          onClick={onToggle}
          className="h-8 w-8 text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded-lg shadow-sm border border-gray-200 transition-all duration-200 mx-auto"
        >
          <span className="h-4 w-4">›</span>
        </Button>
      )}
    </motion.div>
  )
}

export default Sidebar