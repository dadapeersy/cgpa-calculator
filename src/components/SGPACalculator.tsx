"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, X, Calculator } from "lucide-react";

interface Subject {
  id: string;
  name: string;
  credits: string;
  grade: string;
  gradePoints: string;
}

const GRADE_POINTS: Record<string, number> = {
  "O": 10,
  "A+": 9,
  "A": 8,
  "B+": 7,
  "B": 6,
  "C": 5,
  "P": 4,
  "F": 0,
};

interface SGPACalculatorProps {
  onCalculate: (sgpa: number, credits: number, earnedCredits: number) => void;
}

export default function SGPACalculator({ onCalculate }: SGPACalculatorProps) {
  const [subjects, setSubjects] = useState<Subject[]>([
    { id: "1", name: "", credits: "", grade: "", gradePoints: "" },
    { id: "2", name: "", credits: "", grade: "", gradePoints: "" },
    { id: "3", name: "", credits: "", grade: "", gradePoints: "" },
    { id: "4", name: "", credits: "", grade: "", gradePoints: "" },
  ]);

  const addSubject = () => {
    setSubjects([
      ...subjects,
      { id: Date.now().toString(), name: "", credits: "", grade: "", gradePoints: "" },
    ]);
  };

  const removeSubject = (id: string) => {
    if (subjects.length > 1) {
      setSubjects(subjects.filter((s) => s.id !== id));
    }
  };

  const updateSubject = (id: string, field: keyof Subject, value: string) => {
    setSubjects(
      subjects.map((s) => {
        if (s.id !== id) return s;

        if (field === "grade") {
          return {
            ...s,
            grade: value,
            gradePoints: GRADE_POINTS[value] !== undefined ? String(GRADE_POINTS[value]) : "",
          };
        }

        if (field === "gradePoints") {
          let matchedGrade = "";
          const points = parseFloat(value);
          if (!isNaN(points)) {
            const entry = Object.entries(GRADE_POINTS).find(([_, p]) => p === points);
            if (entry) matchedGrade = entry[0];
          }
          return {
            ...s,
            gradePoints: value,
            grade: matchedGrade,
          };
        }

        return { ...s, [field]: value };
      })
    );
  };

  const calculateSGPA = () => {
    let totalCredits = 0;
    let totalPoints = 0;
    let earnedCredits = 0;

    subjects.forEach((s) => {
      const credits = parseFloat(s.credits);
      const pts = parseFloat(s.gradePoints);
      if (!isNaN(credits) && !isNaN(pts)) {
        totalCredits += credits;
        totalPoints += credits * pts;
        if (pts > 0) {
          earnedCredits += credits;
        }
      }
    });

    if (totalCredits > 0) {
      onCalculate(totalPoints / totalCredits, totalCredits, earnedCredits);
    }
  };

  const isFormValid = subjects.some(
    (s) => !isNaN(parseFloat(s.credits)) && !isNaN(parseFloat(s.gradePoints))
  );

  return (
    <div className="glass-card rounded-2xl p-4 sm:p-8 flex flex-col w-full h-full relative">
      <div className="flex justify-between items-start mb-6 sm:mb-8">
        <div>
          <h2 className="text-lg sm:text-xl font-bold text-foreground">Add your subjects</h2>
          <p className="text-xs sm:text-sm text-foreground/50 mt-1">Enter credits and select your grade.</p>
        </div>
        <button
          onClick={addSubject}
          className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-surface-border text-foreground hover:bg-surface-hover transition-colors flex-shrink-0"
          aria-label="Add Subject"
        >
          <Plus size={18} className="font-light sm:w-5 sm:h-5" />
        </button>
      </div>

      <div className="flex flex-col flex-1">
        <div className="grid grid-cols-[16px_1fr_40px_50px_40px_16px] sm:grid-cols-[30px_1fr_80px_100px_80px_30px] gap-1 sm:gap-3 px-1 sm:px-2 pb-2 sm:pb-3 mb-2 border-b border-surface-border text-[8px] sm:text-[10px] font-semibold text-foreground/50 uppercase tracking-widest items-center">
          <span></span>
          <span>Subject</span>
          <span className="text-center hidden sm:block">Credits</span>
          <span className="text-center sm:hidden">Cr</span>
          <span className="text-center hidden sm:block">Letter Grade</span>
          <span className="text-center sm:hidden">Grade</span>
          <span className="text-center hidden sm:block">Grade Pts</span>
          <span className="text-center sm:hidden">Pts</span>
          <span></span>
        </div>

        <div className="flex flex-col gap-1 mb-6 sm:mb-8">
          <AnimatePresence initial={false}>
            {subjects.map((subject, index) => (
              <motion.div
                key={subject.id}
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.2 }}
                className="grid grid-cols-[16px_1fr_40px_50px_40px_16px] sm:grid-cols-[30px_1fr_80px_100px_80px_30px] gap-1 sm:gap-3 items-center py-1.5 sm:py-2 border-b border-surface-border/50 group px-1 sm:px-2"
              >
                <div className="text-[10px] sm:text-sm text-foreground/50 font-medium text-center">
                  {index + 1}
                </div>
                <input
                  type="text"
                  placeholder="Subject name"
                  value={subject.name}
                  onChange={(e) => updateSubject(subject.id, "name", e.target.value)}
                  className="w-full bg-transparent border-none px-0 sm:px-1 py-1 sm:py-2 text-[11px] sm:text-sm outline-none focus:ring-0 text-foreground font-medium placeholder:text-foreground/50 min-w-0"
                />
                <select
                  aria-label={`Select credits for subject ${index + 1}`}
                  value={subject.credits}
                  onChange={(e) => updateSubject(subject.id, "credits", e.target.value)}
                  className="w-full bg-transparent border border-surface-border rounded-md px-0.5 sm:px-2 py-1 sm:py-1.5 text-[11px] sm:text-sm outline-none focus:border-foreground transition-all cursor-pointer text-center text-foreground font-medium appearance-none min-w-0"
                >
                  <option value="" disabled className="bg-background text-foreground">-</option>
                  {[1, 1.5, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((c) => (
                    <option key={c} value={c} className="bg-background text-foreground">{c}</option>
                  ))}
                </select>
                <select
                  aria-label={`Select grade for subject ${index + 1}`}
                  value={subject.grade}
                  onChange={(e) => updateSubject(subject.id, "grade", e.target.value)}
                  className="w-full bg-transparent border border-surface-border rounded-md px-0.5 sm:px-2 py-1 sm:py-1.5 text-[11px] sm:text-sm outline-none focus:border-foreground transition-all cursor-pointer text-center text-foreground font-medium appearance-none min-w-0"
                >
                  <option value="" disabled className="bg-background text-foreground">-</option>
                  {Object.keys(GRADE_POINTS).map((g) => (
                    <option key={g} value={g} className="bg-background text-foreground">{g}</option>
                  ))}
                </select>
                <input
                  type="number"
                  placeholder="Pts"
                  value={subject.gradePoints}
                  onChange={(e) => updateSubject(subject.id, "gradePoints", e.target.value)}
                  min="0"
                  max="10"
                  step="0.1"
                  className="w-full bg-transparent border border-surface-border rounded-md px-0.5 sm:px-2 py-1 sm:py-1.5 text-[11px] sm:text-sm text-center outline-none focus:border-foreground transition-all placeholder:text-foreground/50 text-foreground font-medium min-w-0"
                />
                <button
                  type="button"
                  onClick={() => removeSubject(subject.id)}
                  disabled={subjects.length === 1}
                  className="flex items-center justify-center w-4 h-4 sm:w-8 sm:h-8 rounded-full text-foreground/40 hover:text-foreground hover:bg-surface-hover transition-colors disabled:opacity-0 opacity-100 sm:opacity-0 group-hover:opacity-100 flex-shrink-0"
                  aria-label="Remove subject"
                >
                  <X size={14} className="sm:w-4 sm:h-4" />
                </button>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      <button
        onClick={calculateSGPA}
        disabled={!isFormValid}
        className="mt-auto flex items-center justify-center gap-2 w-full py-3 sm:py-4 rounded-xl bg-primary hover:opacity-90 text-primary-foreground shadow-sm text-sm font-semibold transition-all disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <Calculator size={18} className="mr-1" />
        Calculate
      </button>
    </div>
  );
}
