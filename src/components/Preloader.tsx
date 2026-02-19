import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import fairmontLogoWhite from "@/assets/fairmont-logo-white.png";

interface PreloaderProps {
  onComplete: () => void;
}

export function Preloader({ onComplete }: PreloaderProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      // Call onComplete slightly before fade completes for smoother transition
      setTimeout(onComplete, 600);
    }, 2000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-primary"
        >
          {/* Animated background pattern */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 2.5, opacity: 0.1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-white"
            />
          </div>

          {/* Logo container */}
          <div className="relative flex flex-col items-center gap-8">
            {/* Logo */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.76, 0, 0.24, 1] }}
            >
              <img
                src={fairmontLogoWhite}
                alt="Fairmont PM"
                className="h-16 md:h-20 w-auto"
              />
            </motion.div>

            {/* Loading bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="w-48 h-0.5 bg-white/20 rounded-full overflow-hidden"
            >
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "0%" }}
                transition={{ duration: 1.3, delay: 0.5, ease: [0.76, 0, 0.24, 1] }}
                className="h-full bg-white rounded-full"
              />
            </motion.div>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="text-white/60 text-sm tracking-widest uppercase"
            >
              Building Excellence
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}