import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  size = 'md',
  showText = true,
}) => {
  const sizeMap = {
    sm: { icon: 'w-9 h-9', text: 'text-[9px]', subtext: 'text-[9px]' },
    md: { icon: 'w-14 h-14', text: 'text-[12px]', subtext: 'text-[12px]' },
    lg: { icon: 'w-20 h-20', text: 'text-[16px]', subtext: 'text-[16px]' },
    xl: { icon: 'w-28 h-28', text: 'text-[20px]', subtext: 'text-[20px]' },
  };

  const currentSize = sizeMap[size];

  return (
    <div className={`relative flex flex-col items-center justify-center ${className}`}>
      {/* Neon Glow Aura */}
      <div className="absolute -inset-3 bg-[#22c55e]/20 rounded-full blur-xl animate-pulse pointer-events-none" />

      {/* Emblem SVG */}
      <div className={`relative ${currentSize.icon} flex items-center justify-center drop-shadow-[0_0_15px_rgba(34,197,94,0.85)]`}>
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <defs>
            {/* Glow Filter */}
            <filter id="neonGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            
            {/* Green Gradient */}
            <linearGradient id="neonGreenGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#4ade80" />
              <stop offset="100%" stopColor="#16a34a" />
            </linearGradient>
          </defs>

          {/* Background Dark Disc */}
          <circle cx="50" cy="50" r="46" fill="#030b05" />

          {/* Glowing Outer Neon Ring */}
          <circle
            cx="50"
            cy="50"
            r="44"
            fill="none"
            stroke="#22c55e"
            strokeWidth="5"
            filter="url(#neonGlow)"
          />
          <circle
            cx="50"
            cy="50"
            r="44"
            fill="none"
            stroke="#ffffff"
            strokeWidth="1.2"
            opacity="0.6"
          />

          {/* Monogram 'C' (White) */}
          <path
            d="M 46 27 C 32 27 23 37 23 50 C 23 63 32 73 46 73 C 51 73 55 71 58 68 L 53 60 C 51 62 48 64 45 64 C 37 64 32 58 32 50 C 32 42 37 36 45 36 C 48 36 51 38 53 40 L 58 32 C 55 29 51 27 46 27 Z"
            fill="#ffffff"
            filter="drop-shadow(0 0 4px rgba(255,255,255,0.7))"
          />

          {/* Monogram 'V' (Neon Green) */}
          <path
            d="M 52 28 L 62 28 L 73 63 L 64 73 L 52 28 Z"
            fill="url(#neonGreenGrad)"
            opacity="0"
          />
          <path
            d="M 52 28 L 60 28 L 69 57 L 78 28 L 86 28 L 74 72 L 64 72 Z"
            fill="url(#neonGreenGrad)"
            filter="url(#neonGlow)"
          />
        </svg>
      </div>

      {/* Central Virtual Text */}
      {showText && (
        <div className="flex flex-col items-center mt-1.5 leading-none select-none">
          <span
            className={`font-heading font-black text-white tracking-[0.25em] uppercase ${currentSize.text}`}
          >
            CENTRAL
          </span>
          <span
            className={`font-heading font-black text-[#22c55e] tracking-[0.25em] uppercase text-glow-green ${currentSize.subtext}`}
          >
            VIRTUAL
          </span>
        </div>
      )}
    </div>
  );
};

