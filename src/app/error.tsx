"use client";

import { useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Home, RefreshCw, AlertTriangle } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center p-4 relative overflow-hidden">
      {/* Background ambient effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-red-500/10 blur-[100px] rounded-full pointer-events-none" />

      <motion.div
        className="glass-card rounded-3xl p-10 sm:p-16 flex flex-col items-center text-center relative z-10 max-w-lg w-full border border-surface-border"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0, rotate: -10 }}
          animate={{ scale: 1, opacity: 1, rotate: 0 }}
          transition={{ type: "spring", damping: 15, stiffness: 100, delay: 0.2 }}
          className="mb-6"
        >
          <div className="w-24 h-24 rounded-full bg-red-500/10 flex items-center justify-center">
            <AlertTriangle size={48} className="text-red-500" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
            Something went wrong!
          </h2>
          <p className="text-sm sm:text-base text-foreground/50 mb-8 max-w-[280px] mx-auto">
            We encountered an unexpected error. Please try again or return to the homepage.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center gap-4 w-full"
        >
          <motion.button
            onClick={() => reset()}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex-1 w-full flex items-center justify-center gap-2 py-3 px-6 rounded-full bg-surface-hover border border-surface-border text-foreground font-semibold transition-all hover:bg-surface-border"
          >
            <RefreshCw size={18} />
            Try again
          </motion.button>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex-1 w-full"
          >
            <Link
              href="/"
              className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-full bg-foreground text-background font-semibold transition-all hover:opacity-90 shadow-lg shadow-foreground/10"
            >
              <Home size={18} />
              Go Home
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}
