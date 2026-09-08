"use client";

import { useState } from "react";
import { Calculator } from "lucide-react";

interface PercentageCalculatorProps {
  onCalculate: (percentage: number) => void;
  universitySlug?: string;
}

export default function PercentageCalculator({ onCalculate, universitySlug }: PercentageCalculatorProps) {
  const [cgpa, setCgpa] = useState<string>("");
  const [selectedScheme, setSelectedScheme] = useState<"older" | "newer">("older");

  const calculatePercentage = () => {
    const gpaValue = parseFloat(cgpa);
    if (isNaN(gpaValue) || gpaValue < 0 || gpaValue > 10) return;

    let percentage = 0;

    // Apply VTU scheme formulas
    if (selectedScheme === "older") {
      // 2015, 2017, and 2018 Schemes
      percentage = (gpaValue - 0.75) * 10;
    } else {
      // 2021 and Newer Schemes
      percentage = gpaValue * 10;
    }

    // Ensure percentage stays within 0-100 bounds
    percentage = Math.max(0, Math.min(100, percentage));
    onCalculate(percentage);
  };

  const getFormulaString = () => {
    return selectedScheme === "older" 
      ? "Percentage = (CGPA - 0.75) × 10" 
      : "Percentage = CGPA × 10";
  };

  const isFormValid = parseFloat(cgpa) >= 0 && parseFloat(cgpa) <= 10;

  return (
    <div className="glass-card rounded-2xl p-6 sm:p-8 w-full">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-xl font-bold text-foreground">CGPA to Percentage</h2>
          <p className="text-sm text-foreground/60 mt-1">Convert your CGPA using official formulas.</p>
        </div>
      </div>

      <div className="space-y-6">
        <div className="flex flex-col gap-2">
          <label className="text-sm font-semibold text-foreground/80 uppercase tracking-wider">Select VTU Scheme</label>
          <select 
            aria-label="Select VTU Scheme"
            value={selectedScheme}
            onChange={(e) => setSelectedScheme(e.target.value as "older" | "newer")}
            className="w-full bg-surface-hover border border-surface-border rounded-xl px-4 py-3 text-sm outline-none focus:border-foreground transition-colors appearance-none"
          >
            <option value="older">2015, 2017, and 2018 Schemes</option>
            <option value="newer">2021 and 2022 Schemes</option>
          </select>
          <div className="text-xs font-medium text-foreground/50 px-1">
            Formula: <span className="text-foreground/70">{getFormulaString()}</span>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-sm font-semibold text-foreground/80 uppercase tracking-wider">Enter your CGPA</label>
          <input
            type="number"
            placeholder="e.g. 8.5"
            value={cgpa}
            onChange={(e) => setCgpa(e.target.value)}
            min="0"
            max="10"
            step="0.01"
            className="w-full bg-transparent border border-surface-border rounded-xl px-4 py-3 text-lg outline-none focus:border-foreground transition-all placeholder:text-foreground/50 text-foreground font-medium"
            aria-label="Enter your CGPA"
          />
        </div>
      </div>

      <button
        onClick={calculatePercentage}
        disabled={!isFormValid}
        className="w-full mt-8 bg-primary hover:opacity-90 text-primary-foreground shadow-sm font-semibold py-4 rounded-xl flex items-center justify-center gap-2 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <Calculator size={20} />
        Convert to Percentage
      </button>
    </div>
  );
}
