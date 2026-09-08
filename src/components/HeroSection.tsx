"use client";

import { motion, Variants } from "framer-motion";
import { Sparkles } from "lucide-react";

export default function HeroSection() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 24 },
    },
  };

  // Helper to render a path with a realistic glowing moving light
  const GlowingPath = ({ d, duration, delay = 0, length = 1200, dash = 40 }: any) => (
    <>
      <path d={d} stroke="currentColor" strokeWidth="1" className="text-foreground/10" />
      {/* Large faint outer glow */}
      <motion.path
        d={d}
        stroke="currentColor" strokeWidth="16" strokeDasharray={`${dash} ${length}`} strokeLinecap="round"
        initial={{ strokeDashoffset: length }} animate={{ strokeDashoffset: 0 }}
        transition={{ repeat: Infinity, duration, ease: "linear", delay }}
        className="text-foreground opacity-10 blur-[8px]"
      />
      {/* Medium intense glow */}
      <motion.path
        d={d}
        stroke="currentColor" strokeWidth="6" strokeDasharray={`${dash} ${length}`} strokeLinecap="round"
        initial={{ strokeDashoffset: length }} animate={{ strokeDashoffset: 0 }}
        transition={{ repeat: Infinity, duration, ease: "linear", delay }}
        className="text-foreground opacity-40 blur-[3px]"
      />
      {/* Sharp Bright Core */}
      <motion.path
        d={d}
        stroke="currentColor" strokeWidth="2" strokeDasharray={`${dash} ${length}`} strokeLinecap="round"
        initial={{ strokeDashoffset: length }} animate={{ strokeDashoffset: 0 }}
        transition={{ repeat: Infinity, duration, ease: "linear", delay }}
        className="text-foreground opacity-100"
      />
    </>
  );

  return (
    <section className="relative w-full overflow-hidden border-b border-surface-border">
      {/* Background Subtle Gradient Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-primary/20 blur-[100px] rounded-full opacity-50 pointer-events-none dark:bg-primary/10"></div>

      {/* Tech / Circuit Background Overlay */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Subtle Dotted Grid Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle,var(--foreground)_1px,transparent_1px)] bg-[size:32px_32px] opacity-[0.03] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black_100%)]"></div>

        {/* MOBILE LAYOUT SVG */}
        <svg className="absolute top-0 left-0 w-full h-[600px] sm:hidden" viewBox="0 0 400 600" fill="none">
          <GlowingPath d="M 50 -50 L 50 150 Q 50 200 100 200 L 300 200 Q 350 200 350 250 L 350 650" duration={6} />
          <GlowingPath d="M 350 -50 L 350 50 Q 350 100 300 100 L 100 100 Q 50 100 50 150 L 50 650" duration={7} delay={2} />
        </svg>

        {/* DESKTOP LAYOUT SVGs */}
        <div className="hidden sm:block absolute inset-0 w-full h-full">
          {/* SVG Path 1 - Top Left: comes from top, goes down, turns right */}
          <svg className="absolute top-0 left-0 w-[600px] h-[600px] overflow-visible" viewBox="0 0 600 600" fill="none">
            <GlowingPath d="M 150 -50 L 150 250 Q 150 300 200 300 L 800 300" duration={6} />
          </svg>

          {/* SVG Path 2 - Top Right: comes from right, goes left, turns down */}
          <svg className="absolute top-0 right-0 w-[600px] h-[600px] overflow-visible" viewBox="0 0 600 600" fill="none">
            <GlowingPath d="M 650 150 L 350 150 Q 300 150 300 200 L 300 800" duration={7} delay={1} />
          </svg>

          {/* SVG Path 3 - Bottom Left: comes from left, goes right, turns down */}
          <svg className="absolute bottom-0 left-0 w-[600px] h-[600px] overflow-visible" viewBox="0 0 600 600" fill="none">
            <GlowingPath d="M -50 350 L 150 350 Q 200 350 200 400 L 200 800" duration={5} delay={2.5} length={1000} />
          </svg>

          {/* SVG Path 4 - Bottom Right: comes from right, goes left, turns up */}
          <svg className="absolute bottom-0 right-0 w-[600px] h-[600px] overflow-visible" viewBox="0 0 600 600" fill="none">
            <GlowingPath d="M 650 450 L 300 450 Q 250 450 250 400 L 250 -50" duration={6.5} delay={0.5} />
          </svg>
        </div>
      </div>

      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 pt-20 pb-16 sm:pt-28 sm:pb-20 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center"
        >


          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight text-foreground mb-6 max-w-4xl"
            style={{ lineHeight: 1.1 }}
          >
            Free <span className="text-transparent bg-clip-text bg-gradient-to-r from-foreground to-foreground/50">CGPA & SGPA Calculator</span> for Engineering Students
          </motion.h1>
        </motion.div>
      </div>
    </section>
  );
}
