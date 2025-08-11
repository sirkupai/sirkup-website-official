"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { 
  Home, 
  Building2, 
  Target, 
  Briefcase, 
  Users, 
  BookOpen,
  Mail,
  ChevronLeft,
  ChevronRight
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface SidebarProps {
  isCollapsed: boolean
  isHidden?: boolean
  isMobile?: boolean
  onToggle: () => void
}

const Sidebar = ({ isCollapsed, isHidden = false, isMobile = false, onToggle }: SidebarProps) => {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])
  const pathname = usePathname()
  const router = useRouter()

  const navigation = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'About', href: '/about', icon: Building2 },
    { name: 'Solutions', href: '/solutions', icon: Target },
    { name: 'Careers', href: '/careers', icon: Briefcase },
    { name: 'Team', href: '/team', icon: Users },
    { name: 'Resources', href: '/resources', icon: BookOpen },
    { name: 'Contact', href: '/contact', icon: Mail },
  ]

  // Prefetch all routes on mount for instant navigation
  useEffect(() => {
    navigation.forEach(item => {
      router.prefetch(item.href)
    })
  }, [router])

  // Prefetch adjacent routes when hovering
  const handleMouseEnter = (href: string) => {
    const currentIndex = navigation.findIndex(item => item.href === pathname)
    const targetIndex = navigation.findIndex(item => item.href === href)
    
    // Prefetch adjacent routes
    if (targetIndex > 0) {
      router.prefetch(navigation[targetIndex - 1].href)
    }
    if (targetIndex < navigation.length - 1) {
      router.prefetch(navigation[targetIndex + 1].href)
    }
  }

  return (
    <>
      {/* Mobile backdrop with blur */}
      {isClient && isMobile && !isHidden && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40 md:hidden"
          onClick={onToggle}
        />
      )}
      
      <motion.div
        initial={false}
        animate={{ 
          x: isHidden ? (isMobile ? '-100%' : isCollapsed ? '-200px' : '-280px') : '0%',
          transition: { type: "spring", damping: 25, stiffness: 200 }
        }}
        className={`fixed left-0 top-0 h-full bg-white z-50 flex flex-col overflow-hidden ${
          isMobile ? 'w-screen' : (isCollapsed ? 'w-20' : 'w-72')
        }`}
        style={{ 
          boxShadow: isMobile && !isHidden ? '0 8px 32px rgba(0, 0, 0, 0.15)' : 'none',
        }}
      >
      {/* Header */}
      <div className="flex items-center justify-between p-6 min-h-[80px]">
        {(!isCollapsed || isMobile) && (
          <Link 
            href="/" 
            className="flex items-center space-x-3"
            prefetch={true}
          >
            <span className="font-semibold text-lg text-gray-900">SirkupAI</span>
          </Link>
        )}
        {!isMobile ? (
          isCollapsed ? (
            <div className="flex flex-col items-center space-y-3 mx-auto">
              <Button
                variant="ghost"
                size="icon"
                onClick={onToggle}
                className="h-6 w-6 text-gray-400 hover:text-gray-700 hover:bg-gray-50 rounded-lg transition-all duration-200"
              >
                <ChevronRight className="h-3 w-3" />
              </Button>
            </div>
          ) : (
            <Button
              variant="ghost"
              size="icon"
              onClick={onToggle}
              className="h-8 w-8 text-gray-400 hover:text-gray-700 hover:bg-gray-50 rounded-lg transition-all duration-200"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
          )
        ) : (
          <Button
            variant="ghost"
            size="icon"
            onClick={onToggle}
            className="h-8 w-8 text-gray-400 hover:text-gray-700 hover:bg-gray-50 rounded-lg transition-all duration-200"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
        )}
      </div>

      {/* Navigation with optimized prefetching */}
      <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
        {navigation.map((item) => {
          const isActive = pathname === item.href
          return (
            <Link
              key={item.name}
              href={item.href}
              prefetch={true}
              onMouseEnter={() => handleMouseEnter(item.href)}
              className={cn(
                "flex items-center space-x-3 px-3 py-3 rounded-lg text-sm font-medium transition-colors group active:scale-95",
                isActive
                  ? "bg-gray-50 text-gray-800"
                  : "text-gray-500 hover:text-gray-700 hover:bg-gray-50/50",
                isCollapsed && !(isClient && isMobile) && "justify-center",
                isClient && isMobile && "py-4 text-base"
              )}
              onClick={() => isClient && isMobile && onToggle()}
            >
              <item.icon className={cn(
                "flex-shrink-0",
                isActive ? "text-gray-700" : "text-gray-400 group-hover:text-gray-600",
                isClient && isMobile ? "h-6 w-6" : "h-5 w-5"
              )} />
              {(!isCollapsed || (isClient && isMobile)) && <span>{item.name}</span>}
            </Link>
          )
        })}
      </nav>

      {/* Footer */}
      {(!isCollapsed || (isClient && isMobile)) && (
        <div className="p-4 mt-auto">
          <div className="text-center text-xs text-gray-500">
            <p>© 2025 SirkupAI</p>
            <p className="mt-1">All systems operational</p>
          </div>
        </div>
      )}
    </motion.div>
    </>
  )
}

export default Sidebar