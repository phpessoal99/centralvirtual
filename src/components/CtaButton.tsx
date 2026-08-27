import React from 'react';
import { ArrowRight } from 'lucide-react';

interface CtaButtonProps {
  text?: string;
  onClick?: () => void;
  className?: string;
  id?: string;
}

export const CtaButton: React.FC<CtaButtonProps> = ({
  text = 'ENTRAR NO GRUPO GRÁTIS',
  onClick,
  className = '',
  id = 'cta-button-main',
}) => {
  const handleClick = (e: React.MouseEvent) => {
    if (onClick) {
      onClick();
    } else {
      // Default action: Redirect to Telegram or open link
      window.open('https://t.me/+centralvirtual', '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className="relative inline-block w-full max-w-md group">
      {/* Background Neon Halo */}
      <div className="absolute -inset-1 bg-gradient-to-r from-[#22c55e] to-[#16a34a] rounded-2xl blur-lg opacity-80 group-hover:opacity-100 transition duration-300 group-hover:blur-xl animate-pulse" />

      {/* Button */}
      <button
        id={id}
        onClick={handleClick}
        className={`relative w-full flex items-center justify-center gap-3 bg-gradient-to-b from-[#34d399] via-[#22c55e] to-[#16a34a] hover:from-[#4ade80] hover:to-[#22c55e] text-black font-heading font-black text-base sm:text-lg py-4 px-6 rounded-2xl shadow-[0_4px_25px_rgba(34,197,94,0.8),inset_0_1px_1px_rgba(255,255,255,0.4)] transition-all duration-200 transform group-hover:scale-[1.02] active:scale-[0.98] cursor-pointer uppercase tracking-wider ${className}`}
      >
        <span>{text}</span>
        <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 text-black stroke-[3] transition-transform duration-200 group-hover:translate-x-1" />
      </button>
    </div>
  );
};
