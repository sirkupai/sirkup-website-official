import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const response = NextResponse.next()
  
  // Security headers
  response.headers.set('X-Frame-Options', 'DENY')
  response.headers.set('X-Content-Type-Options', 'nosniff')
  response.headers.set('X-XSS-Protection', '1; mode=block')
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin')
  response.headers.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=()')
  
  // Performance headers
  response.headers.set('X-DNS-Prefetch-Control', 'on')
  
  // Cache static assets aggressively
  if (request.nextUrl.pathname.startsWith('/_next/static') || 
      request.nextUrl.pathname.startsWith('/fonts') ||
      request.nextUrl.pathname.match(/\.(jpg|jpeg|png|gif|webp|svg|ico|woff|woff2|ttf|otf)$/i)) {
    response.headers.set('Cache-Control', 'public, max-age=31536000, immutable')
  }
  
  // Cache HTML pages with revalidation
  if (request.nextUrl.pathname.endsWith('/') || 
      request.nextUrl.pathname.match(/^\/[^.]*$/)) {
    response.headers.set('Cache-Control', 'public, s-maxage=10, stale-while-revalidate=59')
  }
  
  // Enable compression hints
  response.headers.set('Accept-Encoding', 'gzip, deflate, br')
  
  // Add Link headers for resource hints
  const resourceHints = [
    '<https://images.pexels.com>; rel=preconnect',
    '<https://images.unsplash.com>; rel=preconnect',
    '</fonts/inter-var.woff2>; rel=preload; as=font; type=font/woff2; crossorigin',
  ]
  response.headers.set('Link', resourceHints.join(', '))
  
  return response
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/image (image optimization files)
     */
    '/((?!api|_next/image).*)',
  ],
}