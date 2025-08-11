"use client"

import { useEffect } from 'react'
import { useRouter, usePathname } from 'next/navigation'

const routes = [
  '/',
  '/about',
  '/solutions',
  '/careers',
  '/team',
  '/resources',
  '/contact',
  '/contact-sales',
  '/request-discovery-call',
  '/explore-solutions',
]

export default function RoutePreloader() {
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    // Prefetch all routes on mount
    const prefetchRoutes = () => {
      routes.forEach(route => {
        if (route !== pathname) {
          router.prefetch(route)
        }
      })
    }

    // Delay prefetching to avoid blocking initial render
    const timeoutId = setTimeout(prefetchRoutes, 2000)

    return () => clearTimeout(timeoutId)
  }, [router, pathname])

  // Prefetch routes on visibility change (when user returns to tab)
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        routes.forEach(route => {
          if (route !== pathname) {
            router.prefetch(route)
          }
        })
      }
    }

    document.addEventListener('visibilitychange', handleVisibilityChange)
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange)
  }, [router, pathname])

  // Prefetch on network idle
  useEffect(() => {
    if ('requestIdleCallback' in window) {
      const idleCallbackId = requestIdleCallback(() => {
        routes.forEach(route => {
          if (route !== pathname) {
            router.prefetch(route)
          }
        })
      }, { timeout: 5000 })

      return () => {
        if ('cancelIdleCallback' in window) {
          cancelIdleCallback(idleCallbackId)
        }
      }
    }
  }, [router, pathname])

  return null
}