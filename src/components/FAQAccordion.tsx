"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import type { FAQ } from "@/data/universities";

export default function FAQAccordion({ faqs }: { faqs: FAQ[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  if (!faqs || faqs.length === 0) return null;

  return (
    <div className="w-full max-w-4xl mx-auto space-y-3">
      {faqs.map((faq, index) => (
        <div 
          key={index} 
          className="overflow-hidden border border-surface-border rounded-xl bg-surface-hover/30 transition-colors hover:bg-surface-hover/50"
        >
          <button
            onClick={() => toggleFAQ(index)}
            className="w-full text-left px-6 py-4 flex items-center justify-between focus:outline-none"
          >
            <h3 className="text-[15px] sm:text-base font-medium text-foreground">{faq.question}</h3>
            <div
              className={`ml-4 flex-shrink-0 text-foreground/50 transition-transform duration-200 ${
                openIndex === index ? "rotate-180" : ""
              }`}
            >
              <ChevronDown size={18} />
            </div>
          </button>
          
          <AnimatePresence initial={false}>
            {openIndex === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
              >
                <div className="px-6 pb-5 text-sm sm:text-[15px] text-foreground/70 leading-relaxed">
                  {faq.answer}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
