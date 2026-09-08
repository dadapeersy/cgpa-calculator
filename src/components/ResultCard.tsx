"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Info } from "lucide-react";
import Celebration from "./Celebration";

interface ResultCardProps {
  type: "SGPA" | "CGPA" | "Percentage";
  gpa: number;
  totalCredits?: number;
  earnedCredits?: number;
  onReset?: () => void;
}

export default function ResultCard({ type, gpa, totalCredits = 0, earnedCredits }: ResultCardProps) {
  const isCalculated = gpa > 0;
  
  let performanceText = "Enter subjects to calculate";
  if (isCalculated) {
    if (gpa >= (type === "Percentage" ? 77.5 : 7.75)) performanceText = "Outstanding Performance";
    else if (gpa >= (type === "Percentage" ? 67.5 : 6.75)) performanceText = "Good Performance";
    else if (gpa >= (type === "Percentage" ? 50 : 5)) performanceText = "Average Performance";
    else performanceText = "Needs Improvement";
  }

  // A basic estimation for total points based on GPA and Credits
  // since the parent passes the final GPA and credits, we can derive the points.
  const totalPoints = isCalculated ? (gpa * totalCredits).toFixed(0) : "0";

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ type: "spring", damping: 20 }}
      className="glass-card rounded-2xl p-8 flex flex-col w-full h-full min-h-[500px] relative overflow-hidden"
    >
      <Celebration type={type} gpa={gpa} />
      <div className="flex flex-col items-center justify-center flex-1 py-8">
        <span className="text-sm font-medium text-foreground/60 mb-4">
          Your {type}
        </span>
        
        <span className="text-7xl font-semibold text-foreground tracking-tighter mb-6">
          {isCalculated ? gpa.toFixed(2) : "0.00"}
          {type === "Percentage" && <span className="text-4xl text-foreground/50 ml-1">%</span>}
        </span>
        
        <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-surface-border bg-surface-hover">
          <CheckCircle2 size={16} className={isCalculated ? "text-foreground" : "text-foreground/30"} />
          <span className="text-sm font-medium text-foreground/80">{performanceText}</span>
        </div>
      </div>

      <div className="flex flex-col w-full mt-auto">
        {type !== "Percentage" ? (
          <>
            <div className="flex justify-between items-center py-4 border-t border-surface-border/60">
              <span className="text-sm font-medium text-foreground/70">Total Credits</span>
              <span className="text-sm font-semibold text-foreground">{totalCredits || 0}</span>
            </div>
            {type === "SGPA" && (
              <div className="flex justify-between items-center py-4 border-t border-surface-border/60">
                <span className="text-sm font-medium text-foreground/70">Credits Earned</span>
                <span className="text-sm font-semibold text-foreground">{earnedCredits ?? 0}</span>
              </div>
            )}
            <div className="flex justify-between items-center py-4 border-t border-surface-border/60">
              <span className="text-sm font-medium text-foreground/70">Total Grade Points</span>
              <span className="text-sm font-semibold text-foreground">{totalPoints}</span>
            </div>
            <div className="flex justify-between items-center py-4 border-t border-b border-surface-border/60 mb-8">
              <span className="text-sm font-medium text-foreground/70">Average Grade Point</span>
              <span className="text-sm font-semibold text-foreground">{isCalculated ? gpa.toFixed(2) : "0.00"}</span>
            </div>
          </>
        ) : (
          <div className="mb-8 border-t border-surface-border/60 pt-6"></div>
        )}

        <div className="flex items-start gap-3 text-foreground/50">
          <Info size={16} className="mt-0.5 shrink-0" />
          <p className="text-xs font-medium leading-relaxed">
            {type === "SGPA" && "SGPA = Σ(Credits × Grade Point) ÷ Σ(Credits)"}
            {type === "CGPA" && "CGPA = Total Credit Points ÷ Total Credits"}
            {type === "Percentage" && "Percentage converted using official university formula"}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
