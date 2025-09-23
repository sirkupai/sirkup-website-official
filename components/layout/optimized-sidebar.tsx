"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname, useRouter } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { SidebarToggle } from '@/components/ui/sidebar-toggle'
import { cn } from '@/lib/utils'

interface SidebarProps {
  isCollapsed: boolean
  isHidden?: boolean
  isMobile?: boolean
  onToggle: () => void
}

const Sidebar = ({ isCollapsed, isHidden = false, isMobile = false, onToggle }: SidebarProps) => {
  const [isClient, setIsClient] = useState(false)
  const [headerVisible, setHeaderVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      
      if (currentScrollY < lastScrollY || currentScrollY < 100) {
        // Scrolling up or near top - show header
        setHeaderVisible(true)
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down and past 100px - hide header
        setHeaderVisible(false)
      }
      
      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])
  
  const pathname = usePathname()
  const router = useRouter()

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Solutions', href: '/solutions' },
     { name: 'SirkupAI Vision', href: '/explore-sirkupAi' },
    { name: 'Team', href: '/team' },
    { name: 'Contact', href: '/contact' },
  ]

  // Prefetch all routes on mount for instant navigation
  useEffect(() => {
    navigation.forEach(item => {
      router.prefetch(item.href)
    })
  }, [router])

  // Don't render anything on server side to avoid hydration issues
  if (!isClient) {
    return null
  }

  // When collapsed on desktop, show nothing (completely empty)
  const showContent = !isCollapsed || isMobile

  return (
    <>
      {/* Mobile backdrop with blur */}
      <AnimatePresence>
        {isMobile && !isHidden && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
            onClick={onToggle}
          />
        )}
      </AnimatePresence>
      
      <motion.div
        initial={false}
        animate={{ 
          x: isHidden ? '-100%' : '0%',
          width: isMobile ? '280px' : (isCollapsed ? '60px' : '200px'),
        }}
        transition={{ 
          type: "spring", 
          damping: 30, 
          stiffness: 300,
          mass: 0.8
        }}
        className={cn(
          "fixed left-0 top-0 h-full bg-white dark:bg-black z-[60]",
          "flex flex-col",
          isMobile && "shadow-xl"
        )}
      >
        {/* Header with logo and toggle - desktop only */}
        {!isMobile ? (
          <div className={cn(
            "flex items-center justify-center h-[88px] transition-all duration-300 relative z-10 px-5",
            !headerVisible && "-translate-y-full"
          )}>
            {/* Logo - show when not collapsed on desktop */}
            {!isCollapsed && (
              <Link 
                href="/" 
                className="flex items-center h-12 mx-auto"
              >
                <Image
                  src="/SirkupAI-logo-black.png"
                  alt="SirkupAI"
                  width={40}
                  height={40}
                  className="object-contain dark:invert relative z-20"
                  priority
                />
              </Link>
            )}
            
            {/* Toggle button - position based on state */}
            <div className={cn(
              "absolute right-5 flex items-center h-10",
              isCollapsed && "mx-auto"
            )}>
              <SidebarToggle 
                isOpen={!isCollapsed} 
                onClick={onToggle}
                className="relative z-20"
              />
            </div>
          </div>
        ) : (
          // Mobile - just empty space at top, no toggle button
          <div className="h-16"></div>
        )}

        {showContent && (
          <>

            {/* Vertically centered navigation */}
            <div className={cn(
              "flex-1 flex items-center justify-center px-4"
            )}>
              <nav className="w-full space-y-2">
                {navigation.map((item) => {
                  const isActive = pathname === item.href
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={cn(
                        "block px-4 py-3 rounded-lg text-sm font-medium",
                        "transition-all duration-200",
                        isActive
                          ? "bg-gray-100 dark:bg-zinc-800 text-gray-900 dark:text-white"
                          : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-zinc-800"
                      )}
                      onClick={() => isMobile && onToggle()}
                    >
                      {item.name}
                    </Link>
                  )
                })}
              </nav>
            </div>

            {/* Footer */}
            <div className="p-6">
              <div className="text-center">
                <p className="text-xs text-gray-500 dark:text-gray-400">© 2025 SirkupAI</p>
              </div>
            </div>
          </>
        )}
      </motion.div>
    </>
  )
}

export default Sidebar