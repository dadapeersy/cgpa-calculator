import Link from "next/link";
import Image from "next/image";
import AdUnit from "@/components/AdUnit";

export default function Footer() {
  return (
    <footer className="w-full mt-auto border-t border-surface-border bg-surface/50 backdrop-blur-md">
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 pt-2 pb-1 sm:pt-8 sm:pb-4">
        <AdUnit adSlot="1122334455" />
      </div>
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 py-4 sm:py-8 flex flex-col md:flex-row justify-between items-center gap-4 sm:gap-6">
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <Link href="/" className="flex items-center gap-2 mb-2 group">
            <Image src="/icon.png" alt="CheckCGPA Logo" width={24} height={24} className="h-6 w-auto grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all" />
            <span className="font-bold text-foreground/80 group-hover:text-foreground transition-colors tracking-tight">CheckCGPA</span>
          </Link>
          <p className="text-xs text-foreground/40 max-w-sm">
            A fast, minimal, and premium grade calculator built for engineering students across India. Calculate SGPA, CGPA, and percentages instantly.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm font-medium text-foreground/60">
          <Link href="/about-us" className="hover:text-foreground transition-colors">About Us</Link>
          <Link href="/contact-us" className="hover:text-foreground transition-colors">Contact</Link>
          <Link href="/privacy-policy" className="hover:text-foreground transition-colors">Privacy Policy</Link>
          <Link href="/terms-conditions" className="hover:text-foreground transition-colors">Terms & Conditions</Link>
        </div>
      </div>
      
      <div className="w-full border-t border-surface-border/50 py-3 sm:py-6 text-center text-xs text-foreground/40">
        &copy; {new Date().getFullYear()} CheckCGPA. Free Engineering CGPA &amp; SGPA Calculator for Students.
      </div>
    </footer>
  );
}
