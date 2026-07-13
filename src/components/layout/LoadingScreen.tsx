import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function LoadingScreen() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 1100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0F172A]"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <div className="flex flex-col items-center gap-5">
            <motion.div
              className="relative h-16 w-16"
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 1.4, ease: "linear" }}
            >
              <svg viewBox="0 0 64 64" className="h-full w-full">
                <circle
                  cx="32"
                  cy="32"
                  r="27"
                  fill="none"
                  stroke="url(#loader-gradient)"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeDasharray="120 200"
                />
                <defs>
                  <linearGradient id="loader-gradient" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#2563EB" />
                    <stop offset="55%" stopColor="#06B6D4" />
                    <stop offset="100%" stopColor="#8B5CF6" />
                  </linearGradient>
                </defs>
              </svg>
            </motion.div>
            <motion.p
              className="font-mono text-xs tracking-[0.3em] text-slate-400 uppercase"
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ repeat: Infinity, duration: 1.6 }}
            >
              Loading portfolio
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
