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
  // Temporarily return null to hide the blank ad spaces until Google AdSense is approved.
  // Once approved, replace "return null;" with the original useEffect and return statement.
  return null;
}
