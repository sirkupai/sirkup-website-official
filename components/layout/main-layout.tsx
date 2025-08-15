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
      // On mobile, always start with sidebar hidden
      // On desktop, start with sidebar visible but can be hidden
      if (mobile) {
        setSidebarHidden(true)
        setSidebarCollapsed(false) // On mobile, never collapsed, just hidden/shown
      } else {
        setSidebarHidden(false) // Desktop starts with sidebar visible
      }
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const handleSidebarToggle = () => {
    if (isMobile) {
      // On mobile, toggle between fully hidden and fully visible
      setSidebarHidden(!sidebarHidden)
    } else {
      // On desktop, toggle between collapsed and expanded
      setSidebarCollapsed(!sidebarCollapsed)
      // Never hide completely on desktop
      setSidebarHidden(false)
    }
  }

  const getMainMargin = () => {
    if (!isClient) return '0'
    
    if (sidebarHidden) {
      return '0' // Sidebar is completely hidden
    }
    
    if (isMobile) {
      return '0' // On mobile, sidebar overlays so no margin needed
    }
    
    // On desktop - when sidebar is collapsed it should center content
    return sidebarCollapsed ? '0' : '200px'
  }

  const getMainPadding = () => {
    if (!isClient) return '0'
    
    // Always return 0 - we'll handle centering in the content itself
    return '0'
  }

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <RoutePreloader />
      <WebVitals />
      
      {isClient && (
        <Sidebar 
          isCollapsed={sidebarCollapsed} 
          isHidden={sidebarHidden}
          isMobile={isMobile}
          onToggle={handleSidebarToggle} 
        />
      )}
      
      <Header 
        isMobile={isClient ? isMobile : false} 
        sidebarHidden={sidebarHidden}
        onMenuClick={handleSidebarToggle}
      />
      
      <main 
        className="transition-all duration-300 ease-in-out pt-16"
        style={{ 
          marginLeft: getMainMargin(),
          transition: 'margin-left 0.3s ease-in-out'
        }}
      >
        <div className="w-full">
          {children}
        </div>
        <Footer />
      </main>
    </div>
  )
}

export default MainLayout