"use client"

import { lazy, Suspense, ComponentType } from 'react'
import { Loader2 } from 'lucide-react'

interface LazyComponentProps {
  loader: () => Promise<{ default: ComponentType<any> }>
  fallback?: React.ReactNode
  [key: string]: any
}

function LoadingFallback() {
  return (
    <div className="flex items-center justify-center p-8">
      <Loader2 className="h-6 w-6 animate-spin text-gray-400" />
    </div>
  )
}

export function LazyComponent({ 
  loader, 
  fallback = <LoadingFallback />,
  ...props 
}: LazyComponentProps) {
  const Component = lazy(loader)
  
  return (
    <Suspense fallback={fallback}>
      <Component {...props} />
    </Suspense>
  )
}

// Utility function for creating lazy imports with preload
export function createLazyComponent<T extends ComponentType<any>>(
  importFn: () => Promise<{ default: T }>
) {
  let componentPromise: Promise<{ default: T }> | null = null
  
  const load = () => {
    if (!componentPromise) {
      componentPromise = importFn()
    }
    return componentPromise
  }
  
  const LazyComponentWithPreload = lazy(load)
  
  return {
    Component: LazyComponentWithPreload,
    preload: load,
  }
}