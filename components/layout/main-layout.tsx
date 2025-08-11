"use client"

import { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'
import Sidebar from './optimized-sidebar'
import Header from './header'
import Footer from './footer'

// Lazy load performance components
const RoutePreloader = dynamic(() => import('@/components/performance/route-preloader'), {
  ssr: false,
})
const WebVitals = dynamic(() => import('@/components/performance/web-vitals'), {
  ssr: false,
})

interface MainLayoutProps {
  children: React.ReactNode
}

const MainLayout = ({ children }: MainLayoutProps) => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [sidebarHidden, setSidebarHidden] = useState(false)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    // Set client-side flag first to avoid hydration mismatch
    setIsClient(true)
    
    const checkMobile = () => {
      const mobile = window.innerWidth < 768
      setIsMobile(mobile)
      if (mobile) {
        setSidebarHidden(true)
      } else {
        setSidebarHidden(false)
      }
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const handleSidebarToggle = () => {
    if (isMobile) {
      setSidebarHidden(!sidebarHidden)
    } else {
      setSidebarCollapsed(!sidebarCollapsed)
    }
  }

  const getMainMargin = () => {
    if (isClient && isMobile) {
      return sidebarHidden ? '0' : '280px'
    }
    return sidebarCollapsed ? '80px' : '280px'
  }

  return (
    <div className="min-h-screen bg-white">
      <RoutePreloader />
      <WebVitals />
      <Sidebar 
        isCollapsed={sidebarCollapsed} 
        isHidden={sidebarHidden}
        isMobile={isClient ? isMobile : false}
        onToggle={handleSidebarToggle} 
      />
      <Header isMobile={isClient ? isMobile : false} />
      
      <main 
        className="transition-all duration-300 ease-in-out pt-16 px-4 sm:px-6 md:px-8"
        style={{ 
          marginLeft: getMainMargin(),
        }}
      >
        {children}
        <Footer />
      </main>
    </div>
  )
}

export default MainLayout