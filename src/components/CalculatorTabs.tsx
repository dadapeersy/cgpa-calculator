"use client";

import { motion } from "framer-motion";
import { useId } from "react";

interface CalculatorTabsProps {
  activeTab: "sgpa" | "cgpa" | "percentage";
  setActiveTab: (tab: "sgpa" | "cgpa" | "percentage") => void;
  showPercentageTab?: boolean;
}

export default function CalculatorTabs({ activeTab, setActiveTab, showPercentageTab }: CalculatorTabsProps) {
  const uniqueId = useId();

  return (
    <div className={`flex p-1 space-x-1 bg-background/95 backdrop-blur-md rounded-full border border-surface-border shadow-md ${showPercentageTab ? 'w-[300px]' : 'w-[200px]'}`}>
      <button
        onClick={() => setActiveTab("sgpa")}
        className={`relative flex-1 flex items-center justify-center gap-2 py-2 px-4 text-sm font-medium rounded-full transition-colors z-10 ${
          activeTab === "sgpa" ? "text-background" : "text-foreground/60 hover:text-foreground"
        }`}
      >
        {activeTab === "sgpa" && (
          <motion.div
            layoutId={`active-tab-${uniqueId}`}
            className="absolute inset-0 bg-foreground rounded-full shadow-sm -z-10"
            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
          />
        )}
        SGPA
      </button>
      <button
        onClick={() => setActiveTab("cgpa")}
        className={`relative flex-1 flex items-center justify-center gap-2 py-2 px-4 text-sm font-medium rounded-full transition-colors z-10 ${
          activeTab === "cgpa" ? "text-background" : "text-foreground/60 hover:text-foreground"
        }`}
      >
        {activeTab === "cgpa" && (
          <motion.div
            layoutId={`active-tab-${uniqueId}`}
            className="absolute inset-0 bg-foreground rounded-full shadow-sm -z-10"
            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
          />
        )}
        CGPA
      </button>
      {showPercentageTab && (
        <button
          onClick={() => setActiveTab("percentage")}
          className={`relative flex-1 flex items-center justify-center gap-2 py-2 px-2 sm:px-4 text-xs sm:text-sm font-medium rounded-full transition-colors z-10 ${
            activeTab === "percentage" ? "text-background" : "text-foreground/60 hover:text-foreground"
          }`}
        >
          {activeTab === "percentage" && (
            <motion.div
              layoutId={`active-tab-${uniqueId}`}
              className="absolute inset-0 bg-foreground rounded-full shadow-sm -z-10"
              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            />
          )}
          Percentage
        </button>
      )}
    </div>
  );
}
