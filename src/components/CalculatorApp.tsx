"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CalculatorTabs from "@/components/CalculatorTabs";
import SGPACalculator from "@/components/SGPACalculator";
import CGPACalculator from "@/components/CGPACalculator";
import PercentageCalculator from "@/components/PercentageCalculator";
import ResultCard from "@/components/ResultCard";

export default function CalculatorApp({ hero, universitySlug }: { hero?: React.ReactNode, universitySlug?: string }) {
  const [activeTab, setActiveTab] = useState<"sgpa" | "cgpa" | "percentage">("sgpa");
  const [result, setResult] = useState<{
    type: "SGPA" | "CGPA" | "Percentage";
    gpa: number;
    credits?: number;
    earnedCredits?: number;
  } | null>(null);

  const resultRef = useRef<HTMLDivElement>(null);
  
  const showPercentageTab = universitySlug === "vtu-cgpa-calculator";

  const triggerFeedbackAndScroll = () => {
    // Trigger haptic vibration on mobile devices (Android)
    if (typeof window !== "undefined" && window.navigator && window.navigator.vibrate) {
      window.navigator.vibrate([50, 50, 50]); 
    }
    
    // Smooth scroll to the result card
    setTimeout(() => {
      resultRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }, 100);
  };

  const handleCalculateSGPA = (sgpa: number, credits: number, earnedCredits: number) => {
    setResult({ type: "SGPA", gpa: sgpa, credits, earnedCredits });
    triggerFeedbackAndScroll();
  };

  const handleCalculateCGPA = (cgpa: number, credits: number) => {
    setResult({ type: "CGPA", gpa: cgpa, credits });
    triggerFeedbackAndScroll();
  };

  const handleCalculatePercentage = (percentage: number) => {
    setResult({ type: "Percentage", gpa: percentage });
    triggerFeedbackAndScroll();
  };

  const handleReset = () => {
    setResult(null);
  };

  return (
    <div className="w-full flex flex-col items-center">
      {hero}

      <div className="relative z-20 w-full max-w-6xl mx-auto px-4 sm:px-6 -mt-6 mb-8 flex justify-center">
        <CalculatorTabs activeTab={activeTab} setActiveTab={setActiveTab} showPercentageTab={showPercentageTab} />
      </div>

      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 pb-4 sm:pb-8">
        <div className="flex flex-col lg:grid lg:grid-cols-3 gap-6 lg:gap-8 items-start">
          <div className="w-full lg:col-span-2">
            <AnimatePresence mode="wait">
              {activeTab === "sgpa" && (
                <motion.div
                  key="sgpa"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                >
                  <SGPACalculator onCalculate={handleCalculateSGPA} />
                </motion.div>
              )}
              {activeTab === "cgpa" && (
                <motion.div
                  key="cgpa"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                >
                  <CGPACalculator onCalculate={handleCalculateCGPA} />
                </motion.div>
              )}
              {activeTab === "percentage" && (
                <motion.div
                  key="percentage"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                >
                  <PercentageCalculator onCalculate={handleCalculatePercentage} universitySlug={universitySlug} />
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div ref={resultRef} className="w-full lg:col-span-1 sticky top-6 scroll-mt-6">
            <ResultCard
              type={result?.type || "SGPA"}
              gpa={result?.gpa || 0}
              totalCredits={result?.type !== "Percentage" ? result?.credits || 0 : undefined}
              earnedCredits={result?.type === "SGPA" ? result.earnedCredits : undefined}
              onReset={handleReset}
            />
          </div>
        </div>

        <p className="text-center text-xs sm:text-sm font-medium text-foreground/80 mt-4 sm:mt-5 tracking-tight">
          Calculators can make mistakes. Check important calculations with your official university marksheet.
        </p>
      </div>
    </div>
  );
}
