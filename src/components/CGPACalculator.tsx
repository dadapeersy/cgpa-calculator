"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, X, Calculator } from "lucide-react";

interface Semester {
  id: string;
  sgpa: string;
  credits: string;
}

interface CGPACalculatorProps {
  onCalculate: (cgpa: number, credits: number) => void;
}

export default function CGPACalculator({ onCalculate }: CGPACalculatorProps) {
  const [semesters, setSemesters] = useState<Semester[]>([
    { id: "1", sgpa: "", credits: "" },
    { id: "2", sgpa: "", credits: "" },
    { id: "3", sgpa: "", credits: "" },
  ]);

  const addSemester = () => {
    if (semesters.length < 8) {
      setSemesters([
        ...semesters,
        { id: Date.now().toString(), sgpa: "", credits: "" },
      ]);
    }
  };

  const removeSemester = (id: string) => {
    if (semesters.length > 1) {
      setSemesters(semesters.filter((s) => s.id !== id));
    }
  };

  const updateSemester = (id: string, field: keyof Semester, value: string) => {
    setSemesters(
      semesters.map((s) => (s.id === id ? { ...s, [field]: value } : s))
    );
  };

  const calculateCGPA = () => {
    let totalCredits = 0;
    let totalGradePoints = 0;

    semesters.forEach((s) => {
      const credits = parseFloat(s.credits);
      const sgpa = parseFloat(s.sgpa);

      if (!isNaN(credits) && !isNaN(sgpa)) {
        totalCredits += credits;
        totalGradePoints += sgpa * credits;
      }
    });

    if (totalCredits > 0) {
      onCalculate(totalGradePoints / totalCredits, totalCredits);
    }
  };

  const isFormValid = semesters.some(
    (s) => !isNaN(parseFloat(s.credits)) && !isNaN(parseFloat(s.sgpa)) && parseFloat(s.sgpa) <= 10
  );

  return (
    <div className="glass-card rounded-2xl p-6 sm:p-8 flex flex-col w-full h-full relative">
      <div className="flex justify-between items-start mb-8">
        <div>
          <h2 className="text-xl font-bold text-foreground">Add your semesters</h2>
          <p className="text-sm text-foreground/50 mt-1">Enter credits and your SGPA.</p>
        </div>
        <button
          onClick={addSemester}
          disabled={semesters.length >= 8}
          className="flex items-center justify-center w-10 h-10 rounded-full border border-surface-border text-foreground hover:bg-surface-hover transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          aria-label="Add Semester"
        >
          <Plus size={20} className="font-light" />
        </button>
      </div>

      <div className="flex flex-col flex-1">
        <div className="grid grid-cols-[30px_1fr_80px_30px] gap-3 px-2 pb-3 mb-2 border-b border-surface-border text-[10px] font-semibold text-foreground/50 uppercase tracking-widest">
          <span>Sem</span>
          <span>SGPA (0-10)</span>
          <span className="text-center">Tot Credits</span>
          <span></span>
        </div>

        <div className="flex flex-col gap-1 mb-8">
          <AnimatePresence initial={false}>
            {semesters.map((sem, index) => (
              <motion.div
                key={sem.id}
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.2 }}
                className="grid grid-cols-[30px_1fr_80px_30px] gap-3 items-center py-2 border-b border-surface-border/50 group"
              >
                <div className="text-sm text-foreground/50 font-medium text-center">
                  {index + 1}
                </div>
                <input
                  type="number"
                  placeholder="SGPA"
                  value={sem.sgpa}
                  onChange={(e) => updateSemester(sem.id, "sgpa", e.target.value)}
                  min="0"
                  max="10"
                  step="0.01"
                  className="w-full bg-transparent border border-surface-border rounded-md px-2 py-1.5 text-sm outline-none focus:border-foreground transition-all placeholder:text-foreground/50 text-foreground font-medium"
                  aria-label={`Enter SGPA for semester ${index + 1}`}
                />
                <input
                  type="number"
                  placeholder="Credits"
                  value={sem.credits}
                  onChange={(e) => updateSemester(sem.id, "credits", e.target.value)}
                  min="0"
                  step="0.5"
                  className="w-full bg-transparent border border-surface-border rounded-md px-0.5 sm:px-2 py-1 sm:py-1.5 text-xs sm:text-sm text-center outline-none focus:border-foreground transition-all placeholder:text-foreground/50 text-foreground font-medium min-w-0"
                  aria-label={`Enter credits for semester ${index + 1}`}
                />
                <button
                  type="button"
                  onClick={() => removeSemester(sem.id)}
                  disabled={semesters.length === 1}
                  aria-label="Remove semester"
                  className="flex items-center justify-center w-8 h-8 rounded-full text-foreground/40 hover:text-foreground hover:bg-surface-hover transition-colors disabled:opacity-0 opacity-100 sm:opacity-0 group-hover:opacity-100"
                >
                  <X size={16} />
                </button>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      <button
        onClick={calculateCGPA}
        disabled={!isFormValid}
        className="mt-auto flex items-center justify-center gap-2 w-full py-3 sm:py-4 rounded-xl bg-primary hover:opacity-90 text-primary-foreground shadow-sm text-sm font-semibold transition-all disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <Calculator size={18} className="mr-1" />
        Calculate
      </button>
    </div>
  );
}
