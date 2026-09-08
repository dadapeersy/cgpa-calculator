"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

interface CelebrationProps {
  type: "SGPA" | "CGPA" | "Percentage";
  gpa: number;
}

export default function Celebration({ type, gpa }: CelebrationProps) {
  const [show, setShow] = useState(false);
  const [message, setMessage] = useState("");
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (type !== "CGPA" || gpa < 7.4) {
      setShow(false);
      return;
    }

    if (gpa >= 9.0) {
      setMessage("Outstanding! That's an excellent CGPA.");
    } else if (gpa >= 8.0) {
      setMessage("Excellent CGPA! Keep going.");
    } else {
      setMessage("Good job! You're doing well.");
    }
    
    // Brief delay to ensure it feels like a reaction to the calculation finishing
    const showTimer = setTimeout(() => {
      setShow(true);
    }, 100);

    const hideTimer = setTimeout(() => {
      setShow(false);
    }, 2500);

    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
    };
  }, [gpa, type]);

  const particles = Array.from({ length: gpa >= 9.0 ? 18 : 12 });
  
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key={`celebration-${gpa}`}
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="absolute inset-x-0 top-6 flex flex-col items-center justify-center pointer-events-none z-50 px-4"
        >
          <motion.div 
            className="bg-primary/15 text-primary font-bold px-4 py-2 rounded-full border border-primary/20 text-xs sm:text-sm shadow-sm backdrop-blur-md flex items-center gap-2 text-center"
            initial={{ scale: shouldReduceMotion ? 1 : 0.8 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", bounce: 0.5 }}
          >
            <span aria-hidden="true">🎉</span> 
            <span>{message}</span>
          </motion.div>

          {!shouldReduceMotion && (
            <div className="absolute top-4 left-1/2 -translate-x-1/2 w-0 h-0">
              {particles.map((_, i) => {
                const angle = (i / particles.length) * Math.PI * 2;
                const radius = 50 + Math.random() * 40;
                const x = Math.cos(angle) * radius;
                // Favor upward burst slightly
                const y = Math.sin(angle) * radius - 20;
                const colors = ['bg-blue-500', 'bg-green-500', 'bg-yellow-500', 'bg-purple-500', 'bg-pink-500', 'bg-emerald-500'];
                const color = colors[i % colors.length];
                const size = 5 + Math.random() * 3;
                
                return (
                  <motion.div
                    key={i}
                    initial={{ x: 0, y: 0, scale: 0, opacity: 1 }}
                    animate={{ 
                      x: [0, x], 
                      y: [0, y, y + 30], 
                      scale: [0, 1, 0],
                      opacity: [1, 1, 0] 
                    }}
                    transition={{ 
                      duration: 1.2 + Math.random() * 0.6, 
                      ease: "easeOut" 
                    }}
                    className={`absolute rounded-full ${color} shadow-sm`}
                    style={{ width: size, height: size }}
                  />
                );
              })}
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
