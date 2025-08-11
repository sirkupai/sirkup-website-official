"use client"

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Menu } from 'lucide-react'

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
    <header className={`fixed top-0 right-0 left-0 md:left-auto h-16 z-40 flex items-center justify-between px-4 md:pr-8 bg-white/80 backdrop-blur-sm border-b border-gray-100 transition-transform duration-300 ease-in-out ${
      isVisible ? 'translate-y-0' : '-translate-y-full'
    }`}>
      {/* Mobile menu button and logo */}
      {isMobile && (
        <div className="flex items-center space-x-3">
          {sidebarHidden && onMenuClick && (
            <Button
              variant="ghost"
              size="icon"
              onClick={onMenuClick}
              className="h-8 w-8 text-gray-600 hover:text-gray-900 hover:bg-gray-100"
            >
              <Menu className="h-5 w-5" />
            </Button>
          )}
          <Link href="/" className="flex items-center">
            <span className="font-semibold text-lg text-gray-900">SirkupAI</span>
          </Link>
        </div>
      )}
      
      {/* CTA buttons */}
      <div className="flex items-center space-x-2 md:space-x-4">
        <Link href="/contact-sales">
          <Button variant="ghost" size="sm" className="hidden sm:inline-flex text-gray-600 hover:text-gray-900 hover:bg-gray-100">
            Contact Sales
          </Button>
        </Link>
        <Link href="/request-discovery-call">
          <Button size="sm" className="bg-black hover:bg-gray-800 text-white text-xs sm:text-sm px-3 sm:px-4">
            <span className="hidden sm:inline">Request Discovery Call</span>
            <span className="sm:hidden">Discovery Call</span>
          </Button>
        </Link>
      </div>
    </header>
  )
}

export default Header