"use client";

import { Suspense, useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import * as gtag from "../lib/gtag";

// Inner component that actually uses hooks
function AnalyticsInner() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (pathname) {
      const url =
        pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : "");
      gtag.pageview(url);
    }
  }, [pathname, searchParams]);

  return null;
}

// Export wrapped in Suspense to avoid build errors
export default function AnalyticsListener() {
  return (
    <Suspense fallback={null}>
      <AnalyticsInner />
    </Suspense>
  );
}
