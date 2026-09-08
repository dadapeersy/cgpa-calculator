"use client";

import Link from "next/link";
import { ArrowUpRight, LayoutGrid } from "lucide-react";
import { universities } from "@/data/universities";

export default function UniversityLinks() {
  const getPlaceholderClasses = (len: number) => {
    const map: Record<number, string> = {
      0: "col-span-1 sm:col-span-2 lg:col-span-3",
      1: "col-span-1 sm:col-span-1 lg:col-span-2",
      2: "col-span-1 sm:col-span-2 lg:col-span-1",
      3: "col-span-1 sm:col-span-1 lg:col-span-3",
      4: "col-span-1 sm:col-span-2 lg:col-span-2",
      5: "col-span-1 sm:col-span-1 lg:col-span-1",
    };
    return map[len % 6] || "col-span-1 sm:col-span-2 lg:col-span-3";
  };

  return (
    <section className="w-full max-w-5xl mx-auto px-4 sm:px-6 pt-3 pb-6 sm:py-12 md:py-24">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-4 sm:mb-10 gap-2 sm:gap-4">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-2">
            University Directory
          </h2>
          <p className="text-foreground/60 text-base">
            Select your institution for official grading rules and formulas.
          </p>
        </div>
        <div className="hidden md:flex items-center gap-4 text-xs font-mono tracking-widest uppercase text-foreground/40 pb-1">
           <span className="w-12 h-[1px] bg-foreground/20"></span>
           {universities.length} Institutions
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {universities.map((uni, i) => (
          <Link
            key={uni.slug}
            href={`/${uni.slug}`}
            className="group relative bg-background p-4 sm:p-5 md:p-6 min-h-[90px] flex items-center hover:bg-surface-hover/30 transition-all duration-300 rounded-2xl border border-surface-border shadow-sm hover:shadow-md"
          >
            {/* Themed accent line on hover */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 h-1/2 w-[3px] bg-foreground/20 rounded-r-full opacity-0 group-hover:opacity-100 transition-all duration-300"></div>

            <div className="flex items-center w-full">
              {/* Number and Vertical Divider */}
              <div className="flex items-center pr-4 sm:pr-5 border-r border-surface-border mr-4 sm:mr-5 h-10 sm:h-12">
                 <span className="text-xs sm:text-sm font-mono text-foreground/30 font-medium group-hover:text-foreground/60 transition-colors duration-300">
                   {(i + 1).toString().padStart(2, '0')}
                 </span>
              </div>
              
              {/* Text */}
              <div className="flex-1 min-w-0">
                <h3 className="text-base sm:text-lg font-semibold tracking-tight text-foreground transition-colors duration-300">
                  {uni.shortName} CGPA Calculator
                </h3>
                <p className="text-foreground/50 text-xs sm:text-sm mt-0.5 sm:mt-1 transition-opacity duration-300">
                  Calculate CGPA & SGPA
                </p>
              </div>

              {/* Arrow */}
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-surface-border flex items-center justify-center text-foreground/40 group-hover:bg-foreground group-hover:text-background group-hover:border-foreground transition-all duration-300 flex-shrink-0 ml-2 sm:ml-4">
                 <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
              </div>
            </div>
          </Link>
        ))}
        
        {/* Coming Soon Placeholder */}
        <div className={`${getPlaceholderClasses(universities.length)} bg-background rounded-2xl border border-surface-border p-4 sm:p-5 md:p-6 min-h-[90px] flex items-center relative overflow-hidden group shadow-sm`}>
          {/* Dotted background effect on the left */}
          <div className="absolute left-0 top-0 bottom-0 w-64 opacity-20 pointer-events-none" style={{
            backgroundImage: 'radial-gradient(circle, var(--foreground) 1.5px, transparent 1.5px)',
            backgroundSize: '16px 16px',
            maskImage: 'linear-gradient(to right, black, transparent)',
            WebkitMaskImage: 'linear-gradient(to right, black, transparent)'
          }}></div>
          
          <div className="flex items-center gap-4 sm:gap-6 relative z-10 w-full pl-0 sm:pl-4">
             <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-surface-hover/50 border border-surface-border flex items-center justify-center flex-shrink-0">
               <LayoutGrid size={20} className="text-foreground/50" />
             </div>
             <div>
               <h3 className="text-base sm:text-lg font-semibold tracking-tight text-foreground mb-0.5 sm:mb-1">
                 More universities coming soon
               </h3>
               <p className="text-foreground/50 text-xs sm:text-sm">
                 We're constantly adding new calculators.
               </p>
             </div>
          </div>
        </div>

      </div>
    </section>
  );
}
