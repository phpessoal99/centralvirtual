import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface TopBarProps {
  initialCount?: number;
}

export const TopBar: React.FC<TopBarProps> = ({ initialCount = 42 }) => {
  const [spotsLeft, setSpotsLeft] = useState<number>(initialCount);
  const [isFlashing, setIsFlashing] = useState<boolean>(false);

  useEffect(() => {
    // Random decrease in spots every 12 to 25 seconds down to a minimum of 4
    const interval = setInterval(() => {
      setSpotsLeft((prev) => {
        if (prev > 7) {
          setIsFlashing(true);
          setTimeout(() => setIsFlashing(false), 1200);
          const drop = Math.floor(Math.random() * 3) + 1;
          return Math.max(4, prev - drop);
        }
        return prev;
      });
    }, 14000);

    return () => clearInterval(interval);
  }, []);

  const isCritical = spotsLeft > 50;

  return (
    <header className="sticky top-0 z-50 w-full bg-[#030904]/90 backdrop-blur-md border-b border-[#14351d] py-2.5 px-4 shadow-[0_4px_20px_rgba(0,0,0,0.6)]">
      <div className="max-w-4xl mx-auto flex items-center justify-center gap-1.5 text-xs sm:text-sm font-extrabold tracking-wide text-white uppercase font-heading">
        <span className="text-base select-none">🔥</span>
        <span className="text-gray-200">ÚLTIMAS</span>
        
        <AnimatePresence mode="popLayout">
          <motion.span
            key={spotsLeft}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: isFlashing ? 1.2 : 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className={`inline-flex items-center justify-center px-2 py-0.5 min-w-[28px] rounded text-white text-xs sm:text-sm font-black shadow-sm transition-colors duration-300 ${
              isCritical
                ? 'bg-[#ef4444] shadow-[0_0_10px_rgba(239,68,68,0.6)]'
                : 'bg-[#22c55e] shadow-[0_0_10px_rgba(34,197,94,0.6)] text-black'
            }`}
          >
            {spotsLeft}
          </motion.span>
        </AnimatePresence>

        <span className="text-[#22c55e] font-black">VAGAS GRATUITAS</span>
      </div>
    </header>
  );
};
