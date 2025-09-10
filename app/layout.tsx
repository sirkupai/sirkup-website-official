import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import MainLayout from "@/components/layout/main-layout";
import { ThemeProvider } from "@/components/theme-provider";
import Script from "next/script";
import AnalyticsListener from "./analytics-listener";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SirkupAI - Democratizing AI for Sustainable Human Development",
  description:
    "Operator-led, R&D-first AI systems studio. Building production-grade AI for content intelligence, conversational AI, and education.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-WF77N7ET0F"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-WF77N7ET0F', {
              page_path: window.location.pathname,
            });
          `}
        </Script>
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem={true}
          disableTransitionOnChange
          storageKey="sirkup-theme"
          forcedTheme={undefined}
        >
          {/* Analytics listener to capture SPA route changes */}
          <AnalyticsListener />
          <MainLayout>{children}</MainLayout>
        </ThemeProvider>
      </body>
    </html>
  );
}
