"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { useState } from "react";

import { faqs } from "@/data/homeFaqs";

export default function HomeFAQSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="w-full max-w-5xl mx-auto px-4 sm:px-6 pt-4 pb-8 sm:py-16 md:py-24">
      <div className="flex flex-col md:flex-row gap-4 sm:gap-12 lg:gap-24 items-start">
        {/* Left column: Sticky Header */}
        <div className="md:w-1/3 flex-shrink-0 md:sticky md:top-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block mb-2 sm:mb-4 px-3 py-1 text-xs font-mono tracking-widest uppercase border border-surface-border rounded-full bg-surface-hover/50 text-foreground/70">
              Information Architecture
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight mb-2 sm:mb-6">
              Knowledge Base
            </h2>
            <p className="text-foreground/60 text-sm sm:text-base leading-relaxed mb-4 sm:mb-8">
              Everything you need to know about academic grading systems, calculations, and conversions in a structured format.
            </p>
            
            {/* Architectural element */}
            <div className="hidden md:flex items-center gap-4">
               <div className="w-12 h-[1px] bg-foreground/30" />
               <div className="w-2 h-2 rounded-full bg-foreground" />
               <div className="w-12 h-[1px] bg-foreground/30" />
            </div>
          </motion.div>
        </div>

        {/* Right column: Accordion/Grid list */}
        <div className="md:w-2/3 w-full">
          <div className="border-t border-surface-border">
            {faqs.map((faq, index) => (
              <FAQItem 
                key={index}
                index={index}
                faq={faq}
                isHovered={hoveredIndex === index}
                setHoveredIndex={setHoveredIndex}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQItem({ faq, index, isHovered, setHoveredIndex }: any) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="border-b border-surface-border group"
      onMouseEnter={() => setHoveredIndex(index)}
      onMouseLeave={() => setHoveredIndex(null)}
    >
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-8 flex items-start justify-between text-left focus:outline-none group-hover:bg-surface-hover/30 px-2 lg:px-4 -mx-2 lg:-mx-4 rounded-2xl transition-colors duration-300"
      >
        <div className="flex items-start gap-5 lg:gap-8 pr-4">
          <span className="text-xs font-mono text-foreground/40 pt-1.5 min-w-[24px]">
            0{index + 1}
          </span>
          <h3 className={`text-lg lg:text-xl font-medium transition-colors duration-300 ${isOpen || isHovered ? "text-foreground" : "text-foreground/80"}`}>
            {faq.q}
          </h3>
        </div>
        <div className="pt-1 flex-shrink-0 flex items-center justify-center">
          <div className={`relative flex items-center justify-center w-8 h-8 rounded-full border transition-all duration-300 ${isOpen ? "border-foreground bg-foreground text-background scale-110" : isHovered ? "border-foreground/50 text-foreground" : "border-surface-border text-foreground/40"}`}>
             <motion.div
                animate={{ rotate: isOpen ? 135 : 0 }}
                transition={{ duration: 0.4, ease: "anticipate" }}
             >
                <Plus size={16} strokeWidth={isOpen ? 2.5 : 1.5} />
             </motion.div>
          </div>
        </div>
      </button>
      
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
            className="overflow-hidden"
          >
            <div className="pb-8 pl-12 lg:pl-16 pr-4 lg:pr-12 px-2 lg:px-4">
              <p className="text-base text-foreground/60 leading-relaxed font-normal">
                {faq.a}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
