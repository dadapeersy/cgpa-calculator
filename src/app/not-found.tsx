"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Home } from "lucide-react";

export default function NotFound() {
  // Reference for the physics boundaries
  const constraintsRef = useRef(null);

  return (
    <div
      ref={constraintsRef}
      className="min-h-screen w-full flex flex-col items-center justify-center bg-background relative overflow-hidden"
    >
      {/* Background Interactive Dot Grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-10"
        style={{
          backgroundImage: 'radial-gradient(var(--foreground) 2px, transparent 2px)',
          backgroundSize: '40px 40px'
        }}
      />

      <motion.div
        key="revealed-content"
        className="flex flex-col items-center justify-center w-full h-full absolute inset-0"
      >
        {/* The 3 Draggable blocks falling down immediately on load */}
        <div className="flex gap-4 sm:gap-6 relative z-20 pointer-events-none h-full items-center justify-center">
          {[
            { id: 1, char: "4", rotate: -8, delay: 0 },
            { id: 2, char: "0", rotate: 5, delay: 0.15 },
            { id: 3, char: "4", rotate: -5, delay: 0.3 }
          ].map((item) => (
            <motion.div
              key={item.id}
              drag
              dragConstraints={constraintsRef}
              dragElastic={0.7}
              dragTransition={{ bounceStiffness: 200, bounceDamping: 10 }}
              whileDrag={{ scale: 1.1, cursor: "grabbing", zIndex: 50 }}
              whileHover={{ scale: 1.05 }}
              className="cursor-grab pointer-events-auto flex flex-col items-center justify-center w-24 h-32 sm:w-36 sm:h-48 rounded-2xl sm:rounded-3xl border border-surface-border bg-surface-hover/80 shadow-2xl backdrop-blur-xl"
              initial={{ y: "-100vh", opacity: 1, rotate: item.rotate * 3 }}
              animate={{ y: 0, opacity: 1, rotate: item.rotate }}
              transition={{
                type: "spring",
                bounce: 0.5,
                duration: 2,
                delay: item.delay
              }}
            >
              <h1 className="text-6xl sm:text-[6rem] font-black text-foreground tracking-tighter leading-none select-none drop-shadow-xl">
                {item.char}
              </h1>
            </motion.div>
          ))}
        </div>

        {/* Background UI */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="absolute inset-0 flex flex-col items-center justify-end pb-24 sm:pb-32 pointer-events-none z-30 px-4"
        >
          <p className="text-base sm:text-lg font-medium text-foreground/50 mb-8 max-w-md text-center bg-background/80 backdrop-blur-sm p-4 rounded-2xl shadow-xl border border-surface-border/50">
            Looks like the page shattered. Toss the pieces around or head back to safety.
          </p>

          <div className="pointer-events-auto">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/"
                className="flex items-center gap-3 py-4 px-8 rounded-full border-2 border-foreground hover:bg-foreground hover:text-background bg-transparent text-foreground font-bold uppercase tracking-widest transition-colors shadow-xl "
              >
                <Home size={20} />
                Return to Home
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

      {/* Decorative gradient glowing orb */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-gradient-to-r from-purple-500/10 via-transparent to-blue-500/10 rounded-full blur-[100px] pointer-events-none"
      />
    </div>
  );
}
