import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Check } from 'lucide-react';

const RECENT_NAMES = [
  'Diego',
  'Caio',
  'Gustavo',
  'Lucas',
  'Matheus',
  'Flávio',
  'Gabriel',
  'Rodrigo',
  'Felipe',
  'Bruno',
  'Vinícius',
  'Leandro',
  'Eduardo',
  'Thiago',
  'Marcelo'
];

export const LiveNotificationToast: React.FC = () => {
  const [currentName, setCurrentName] = useState<string>('Diego');
  const [isVisible, setIsVisible] = useState<boolean>(true);

  useEffect(() => {
    let nameIndex = 0;

    const interval = setInterval(() => {
      // Hide
      setIsVisible(false);

      setTimeout(() => {
        nameIndex = (nameIndex + 1) % RECENT_NAMES.length;
        setCurrentName(RECENT_NAMES[nameIndex]);
        setIsVisible(true);
      }, 800);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed bottom-4 left-4 z-40 pointer-events-none">
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.92 }}
            transition={{ type: 'spring', stiffness: 400, damping: 28 }}
            className="flex items-center gap-3 bg-[#0a1b0e]/95 border border-[#1b4324] px-4 py-2.5 rounded-xl shadow-[0_10px_25px_rgba(0,0,0,0.8),0_0_15px_rgba(34,197,94,0.15)] backdrop-blur-md max-w-[280px]"
          >
            {/* Green Check Circle */}
            <div className="w-8 h-8 rounded-full bg-[#22c55e] flex items-center justify-center shrink-0 shadow-[0_0_10px_rgba(34,197,94,0.6)]">
              <Check className="w-4 h-4 text-black stroke-[3]" />
            </div>

            {/* Notification Text */}
            <div className="flex flex-col text-left leading-tight">
              <span className="text-sm font-bold text-white tracking-wide">
                {currentName}
              </span>
              <span className="text-xs text-gray-400 font-medium">
                acabou de entrar no grupo
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
