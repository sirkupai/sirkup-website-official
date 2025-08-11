/**
 * Performance Configuration for Lightning-Fast Loading
 * This file documents all performance optimizations implemented
 */

module.exports = {
  // Critical Performance Metrics Targets
  targets: {
    FCP: 1800,    // First Contentful Paint < 1.8s
    LCP: 2500,    // Largest Contentful Paint < 2.5s
    FID: 100,     // First Input Delay < 100ms
    CLS: 0.1,     // Cumulative Layout Shift < 0.1
    TTFB: 600,    // Time to First Byte < 600ms
    INP: 200,     // Interaction to Next Paint < 200ms
  },

  // Optimization Strategies Implemented
  optimizations: {
    // 1. Next.js Configuration
    nextjs: {
      swcMinify: true,
      reactStrictMode: true,
      optimizeCss: true,
      scrollRestoration: true,
      removeConsole: true, // Production only
    },

    // 2. Image Optimization
    images: {
      formats: ['avif', 'webp'],
      lazyLoading: true,
      placeholder: 'blur',
      quality: 85,
      caching: '1 year',
    },

    // 3. Font Optimization
    fonts: {
      display: 'swap',
      preload: true,
      subset: ['latin'],
      variable: true,
    },

    // 4. Code Splitting
    codeSplitting: {
      granular: true,
      dynamicImports: true,
      lazyComponents: true,
      routeBased: true,
    },

    // 5. Prefetching Strategy
    prefetching: {
      allRoutes: true,
      onHover: true,
      onVisible: true,
      idleTime: true,
    },

    // 6. Caching Strategy
    caching: {
      staticAssets: '1 year',
      htmlPages: 'stale-while-revalidate',
      apiRoutes: 'no-cache',
      fonts: 'immutable',
    },

    // 7. Bundle Optimization
    bundling: {
      treeShaking: true,
      minification: true,
      compression: 'gzip, brotli',
      splitChunks: true,
      modernBuild: true,
    },

    // 8. Network Optimization
    network: {
      http2: true,
      dnsPrefetch: true,
      preconnect: true,
      resourceHints: true,
    },

    // 9. Monitoring
    monitoring: {
      webVitals: true,
      errorTracking: true,
      performanceObserver: true,
      analytics: true,
    },
  },

  // Resource Hints
  resourceHints: [
    'https://images.pexels.com',
    'https://images.unsplash.com',
  ],

  // Critical CSS
  criticalCSS: {
    inline: true,
    extract: true,
    minify: true,
  },

  // Service Worker Configuration (for future PWA)
  serviceWorker: {
    enabled: false, // Enable when ready
    strategies: {
      fonts: 'cache-first',
      images: 'cache-first',
      static: 'cache-first',
      api: 'network-first',
    },
  },
}