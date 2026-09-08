"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

interface AdUnitProps {
  className?: string;
  adSlot: string;
  adFormat?: string;
  fullWidthResponsive?: string;
}

export default function AdUnit({ className = "", adSlot, adFormat = "auto", fullWidthResponsive = "true" }: AdUnitProps) {
  const pathname = usePathname();

  useEffect(() => {
    try {
      // @ts-ignore
      if (typeof window !== "undefined" && !window.adsbygoogle_loaded) {
        // @ts-ignore
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      }
    } catch (e) {
      console.error("AdSense error:", e);
    }
  }, [pathname]);

  return (
    <div className={`w-full overflow-hidden flex justify-center items-center my-2 sm:my-6 ${className}`}>
      <ins
        className="adsbygoogle"
        style={{ display: "block", width: "100%" }}
        data-ad-client="ca-pub-XXXXXXXXXXXXXXXX" // REPLACE THIS with actual publisher ID
        data-ad-slot={adSlot}
        data-ad-format={adFormat}
        data-full-width-responsive={fullWidthResponsive}
      />
    </div>
  );
}
