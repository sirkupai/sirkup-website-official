"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { SidebarToggle } from '@/components/ui/sidebar-toggle'

interface HeaderProps {
  isMobile?: boolean
  sidebarHidden?: boolean
  onMenuClick?: () => void
}

const Header = ({ isMobile = false, sidebarHidden = true, onMenuClick }: HeaderProps = {}) => {
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const controlHeader = () => {
      const currentScrollY = window.scrollY
      
      if (currentScrollY < lastScrollY || currentScrollY < 100) {
        // Scrolling up or near top - show header
        setIsVisible(true)
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down and past 100px - hide header
        setIsVisible(false)
      }
      
      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', controlHeader)
    return () => window.removeEventListener('scroll', controlHeader)
  }, [lastScrollY])

  return (
    <header className={`fixed top-0 right-0 left-0 h-16 z-40 flex items-center justify-between px-4 md:px-8 bg-white/95 dark:bg-black/95 backdrop-blur-md transition-transform duration-300 ease-in-out ${
      isVisible ? 'translate-y-0' : '-translate-y-full'
    }`}>
      {/* On mobile: Logo on far left, toggle on far right */}
      {/* On desktop: Show only when sidebar is hidden */}
      {isMobile ? (
        <>
          {/* Mobile Layout: Always show logo on left and toggle on right */}
          <Link href="/" className="flex items-center">
            <Image
              src="/sirkupai-logo.png"
              alt="SirkupAI"
              width={120}
              height={32}
              className="object-contain dark:invert"
              priority
            />
          </Link>
          
          {/* Toggle button always on far right on mobile */}
          {onMenuClick && (
            <SidebarToggle 
              isOpen={!sidebarHidden} 
              onClick={onMenuClick}
            />
          )}
        </>
      ) : (
        <>
          {/* Desktop Layout: Only show when sidebar is hidden */}
          <div className="flex items-center gap-3">
            {sidebarHidden && onMenuClick && (
              <>
                <SidebarToggle 
                  isOpen={false} 
                  onClick={onMenuClick}
                />
                <Link href="/" className="flex items-center">
                  <Image
                    src="/sirkupai-logo.png"
                    alt="SirkupAI"
                    width={150}
                    height={40}
                    className="object-contain dark:invert"
                    priority
                  />
                </Link>
              </>
            )}
          </div>
          
          {/* CTA buttons for desktop */}
          <div className="flex items-center space-x-3 ml-auto">
          </div>
        </>
      )}
    </header>
  )
}

export default Header