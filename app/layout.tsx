import './globals.css';
import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import MainLayout from '@/components/layout/main-layout';

// Optimize font loading with variable font
const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'SirkupAI — Operator-led AI systems studio for Education, Automation & Impact',
  description: 'We build applied AI systems that hold up in production—Content Intelligence, Conversational Intelligence, AI Search, Academy, and custom automations. Hubs in Islamabad and Dubai.',
  metadataBase: new URL('https://sirkupai.com'),
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
  openGraph: {
    title: 'SirkupAI — Operator-led AI systems studio',
    description: 'We build applied AI systems that hold up in production',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SirkupAI — Operator-led AI systems studio',
    description: 'We build applied AI systems that hold up in production',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  viewportFit: 'cover',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#000000' }
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="shortcut icon" href="/favicon.ico" />
        
        {/* DNS Prefetch for external resources */}
        <link rel="dns-prefetch" href="https://images.pexels.com" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        
        {/* Preconnect to external origins */}
        <link rel="preconnect" href="https://images.pexels.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://images.unsplash.com" crossOrigin="anonymous" />
        
        {/* Resource hints for critical resources */}
        <link rel="preload" as="style" href="/_next/static/css/app/layout.css" />
        <link rel="modulepreload" href="/_next/static/chunks/webpack.js" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <MainLayout>
          {children}
        </MainLayout>
        
        {/* Web Vitals monitoring */}
        <Script
          id="web-vitals"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              if (typeof window !== 'undefined') {
                // Measure Core Web Vitals
                window.addEventListener('load', function() {
                  if ('PerformanceObserver' in window) {
                    try {
                      // Largest Contentful Paint
                      new PerformanceObserver((entryList) => {
                        const entries = entryList.getEntries();
                        const lastEntry = entries[entries.length - 1];
                        console.log('LCP:', lastEntry.renderTime || lastEntry.loadTime);
                      }).observe({type: 'largest-contentful-paint', buffered: true});
                      
                      // First Input Delay
                      new PerformanceObserver((entryList) => {
                        const entries = entryList.getEntries();
                        entries.forEach((entry) => {
                          console.log('FID:', entry.processingStart - entry.startTime);
                        });
                      }).observe({type: 'first-input', buffered: true});
                      
                      // Cumulative Layout Shift
                      let clsValue = 0;
                      new PerformanceObserver((entryList) => {
                        for (const entry of entryList.getEntries()) {
                          if (!entry.hadRecentInput) {
                            clsValue += entry.value;
                          }
                        }
                        console.log('CLS:', clsValue);
                      }).observe({type: 'layout-shift', buffered: true});
                    } catch (e) {}
                  }
                });
              }
            `,
          }}
        />
      </body>
    </html>
  );
}