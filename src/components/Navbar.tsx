"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import ThemeToggle from "@/components/ThemeToggle";
import { GraduationCap, ChevronDown, Menu, X } from "lucide-react";
import { universities } from "@/data/universities";

export default function Navbar() {
  const [isUniMenuOpen, setIsUniMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="w-full flex justify-center border-b border-surface-border/40 bg-background/60 backdrop-blur-md sticky top-0 z-50">
      <div className="flex justify-between items-center w-full max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 relative">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/">
            <Image src="/icon.png" alt="CheckCGPA — Engineering CGPA Calculator Logo" width={45} height={45} className="h-9 sm:h-11 w-auto hover:opacity-80 transition-opacity" />
          </Link>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          <nav className="flex items-center gap-6 text-sm font-medium">
            <Link href="/" className="text-foreground/80 hover:text-foreground transition-colors">Home</Link>
            <Link href="/about-us" className="text-foreground/80 hover:text-foreground transition-colors">About Us</Link>
            <Link href="/contact-us" className="text-foreground/80 hover:text-foreground transition-colors">Contact Us</Link>
          </nav>
          
          {/* Universities Dropdown */}
          <div className="relative">
            <button 
              onClick={() => setIsUniMenuOpen(!isUniMenuOpen)}
              className="flex items-center gap-2 px-3 py-2 rounded-full hover:bg-surface-hover border border-transparent hover:border-surface-border text-foreground transition-all font-medium text-sm"
            >
              <GraduationCap size={18} />
              <span>Universities</span>
              <ChevronDown size={14} className={`transition-transform ${isUniMenuOpen ? 'rotate-180' : ''}`} />
            </button>
            
            <AnimatePresence>
              {isUniMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ duration: 0.15 }}
                  className="absolute right-0 mt-2 w-56 sm:w-64 glass-card bg-surface/90 backdrop-blur-xl rounded-2xl border border-surface-border shadow-2xl overflow-hidden z-50 flex flex-col py-2"
                >
                  <div className="px-4 py-2 text-[10px] sm:text-xs font-bold text-foreground/50 uppercase tracking-wider border-b border-surface-border mb-1">
                    Select University
                  </div>
                  <div className="max-h-[60vh] overflow-y-auto">
                    {universities.map(uni => (
                      <Link
                        key={uni.slug}
                        href={`/${uni.slug}`}
                        onClick={() => setIsUniMenuOpen(false)}
                        className="px-4 py-2.5 text-sm font-medium hover:bg-surface-hover text-foreground transition-colors flex items-center justify-between group"
                      >
                        {uni.shortName}
                        <span className="text-xs text-foreground/50 group-hover:text-foreground/80">{uni.state}</span>
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          
          <ThemeToggle />
        </div>

        {/* Mobile Nav Toggle */}
        <div className="flex md:hidden items-center gap-3">
          <ThemeToggle />
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-full hover:bg-surface-hover text-foreground transition-colors"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden absolute top-full left-0 w-full bg-background/95 backdrop-blur-xl border-b border-surface-border/40 overflow-hidden shadow-lg z-40"
          >
            <nav className="flex flex-col px-4 py-4 gap-2 text-sm font-medium h-screen">
              <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="px-4 py-3 rounded-xl hover:bg-surface-hover transition-colors">Home</Link>
              <Link href="/about-us" onClick={() => setIsMobileMenuOpen(false)} className="px-4 py-3 rounded-xl hover:bg-surface-hover transition-colors">About Us</Link>
              <Link href="/contact-us" onClick={() => setIsMobileMenuOpen(false)} className="px-4 py-3 rounded-xl hover:bg-surface-hover transition-colors">Contact Us</Link>
              
              <div className="w-full h-px bg-surface-border/50 my-2" />
              
              <div className="px-4 pb-2 text-xs font-bold text-foreground/60 uppercase tracking-wider">Universities</div>
              <div className="flex flex-col gap-1 px-2 pb-32 overflow-y-auto">
                {universities.map(uni => (
                  <Link
                    key={uni.slug}
                    href={`/${uni.slug}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="px-4 py-3 rounded-xl text-sm font-medium hover:bg-surface-hover text-foreground transition-colors flex items-center justify-between"
                  >
                    {uni.shortName}
                    <span className="text-xs text-foreground/50">{uni.state}</span>
                  </Link>
                ))}
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
