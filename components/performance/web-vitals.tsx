"use client"

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

function WebVitals() {
  const pathname = usePathname()

  useEffect(() => {
    if (typeof window === 'undefined') return

    const reportWebVitals = async () => {
      if ('web-vital' in window) return

      try {
        const { onCLS, onFCP, onLCP, onTTFB, onINP } = await import('web-vitals')
        
        // Batch metrics and send to analytics
        const metrics: Record<string, number> = {}
        
        onCLS((metric) => {
          metrics.CLS = metric.value
          console.log('CLS:', metric.value)
        })
        
        onFCP((metric) => {
          metrics.FCP = metric.value
          console.log('FCP:', metric.value)
        })
        
        onLCP((metric) => {
          metrics.LCP = metric.value
          console.log('LCP:', metric.value)
        })
        
        onTTFB((metric) => {
          metrics.TTFB = metric.value
          console.log('TTFB:', metric.value)
        })
        
        onINP((metric) => {
          metrics.INP = metric.value
          console.log('INP (replaces FID):', metric.value)
        })
        
        // Send metrics after page load
        window.addEventListener('load', () => {
          setTimeout(() => {
            if (Object.keys(metrics).length > 0) {
              // You can send these to your analytics service
              console.log('Web Vitals Report:', {
                path: pathname,
                metrics,
                timestamp: new Date().toISOString(),
              })
            }
          }, 1000)
        })
      } catch (error) {
        console.error('Failed to load web-vitals:', error)
      }
    }

    reportWebVitals()
  }, [pathname])

  // Performance observer for additional metrics
  useEffect(() => {
    if (typeof window === 'undefined' || !('PerformanceObserver' in window)) return

    try {
      // Observe long tasks
      const longTaskObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.duration > 50) {
            console.warn('Long Task detected:', {
              duration: entry.duration,
              startTime: entry.startTime,
              name: entry.name,
            })
          }
        }
      })
      
      longTaskObserver.observe({ entryTypes: ['longtask'] })

      // Observe resource timing
      const resourceObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'resource') {
            const resourceEntry = entry as PerformanceResourceTiming
            if (resourceEntry.duration > 1000) {
              console.warn('Slow resource:', {
                name: resourceEntry.name,
                duration: resourceEntry.duration,
                type: resourceEntry.initiatorType,
              })
            }
          }
        }
      })
      
      resourceObserver.observe({ entryTypes: ['resource'] })

      return () => {
        longTaskObserver.disconnect()
        resourceObserver.disconnect()
      }
    } catch (error) {
      console.error('Performance observer error:', error)
    }
  }, [])

  // Monitor page visibility for performance
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'hidden') {
        // Log time spent on page
        const timeOnPage = performance.now()
        console.log('Time on page:', Math.round(timeOnPage / 1000), 'seconds')
      }
    }

    document.addEventListener('visibilitychange', handleVisibilityChange)
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange)
  }, [pathname])

  return null
}

// Default and named exports
export default WebVitals
export { WebVitals }

// Export analytics function for manual reporting
export function reportMetric(metric: {
  name: string
  value: number
  label?: string
  delta?: number
  id?: string
}) {
  // In production, send to your analytics service
  if (process.env.NODE_ENV === 'production') {
    // Example: send to Google Analytics
    if (typeof window !== 'undefined' && 'gtag' in window) {
      (window as any).gtag('event', metric.name, {
        value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
        metric_label: metric.label,
        metric_delta: metric.delta,
        metric_id: metric.id,
      })
    }
  } else {
    console.log('Metric:', metric)
  }
}