import React from 'react';
import { Logo } from './Logo';
import { CtaButton } from './CtaButton';
import { Lock } from 'lucide-react';

interface HeroSectionProps {
  onCtaClick?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onCtaClick }) => {
  return (
    <section className="relative pt-6 pb-12 px-4 flex flex-col items-center text-center max-w-2xl mx-auto">
      {/* Background ambient glow */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-72 h-72 bg-[#22c55e]/15 rounded-full blur-3xl pointer-events-none" />

      {/* Central Virtual Logo */}
      <div className="mb-5 transform transition-transform hover:scale-105 duration-300">
        <Logo size="md" showText={true} />
      </div>

      {/* Pill Badge */}
      <div className="inline-flex items-center gap-2 bg-[#091b0e]/90 border border-[#1b4324] px-4 py-1.5 rounded-full shadow-[0_0_15px_rgba(34,197,94,0.15)] mb-5">
        <span className="w-2 h-2 rounded-full bg-[#22c55e] animate-pulse shadow-[0_0_8px_#22c55e]" />
        <span className="text-[11px] sm:text-xs font-black tracking-wider text-[#22c55e] uppercase font-heading">
          ANÁLISE AO VIVO • FUTEBOL VIRTUAL
        </span>
      </div>

      {/* Main Headline */}
      <h1 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl uppercase tracking-tight text-white leading-[1.1] mb-3">
        Acompanhe o Futebol <br />
        Virtual <br />
        <span className="text-[#22c55e] text-glow-green">
          Ao Vivo Com a Gente!
        </span>
      </h1>

      {/* Subheadline (Gold/Yellow) */}
      <h2 className="font-heading font-extrabold text-xs sm:text-sm tracking-wide text-[#eab308] uppercase max-w-lg mb-6 leading-snug">
        Método Validado Há Mais de 5 Anos e Uma IA Exclusiva
      </h2>

      {/* Info Card */}
      <div className="w-full bg-[#08180d]/80 border border-[#173a20] rounded-2xl p-4 sm:p-5 mb-7 text-gray-300 text-xs sm:text-sm leading-relaxed shadow-lg">
        <p>
          Análises <strong className="text-white font-bold">em tempo real</strong>, com método e sem achismo. Junte-se a <strong className="text-[#22c55e] font-bold">+5 mil pessoas</strong> no grupo <strong className="text-white font-bold">100% gratuito</strong> no Telegram.
        </p>
      </div>

      {/* CTA Button & Subtext */}
      <div className="w-full flex flex-col items-center mb-10">
        <CtaButton
          id="hero-cta-button"
          text="ENTRAR NO GRUPO GRÁTIS"
          onClick={onCtaClick}
        />
        <div className="flex items-center justify-center gap-1.5 mt-3 text-xs text-gray-400 font-medium">
          <Lock className="w-3.5 h-3.5 text-[#eab308]" />
          <span className="text-[#22c55e] font-bold">100% gratuito</span>
          <span className="text-gray-500">•</span>
          <span>acesso imediato pelo Telegram</span>
        </div>
      </div>

      {/* 4 Stats Grid */}
      <div className="w-full bg-[#07170c]/90 border border-[#16381e] rounded-2xl p-4 grid grid-cols-2 sm:grid-cols-4 gap-4 divide-y sm:divide-y-0 sm:divide-x divide-[#16381e] shadow-xl">
        <div className="flex flex-col items-center justify-center pt-2 sm:pt-0">
          <span className="font-heading font-black text-lg sm:text-xl text-[#22c55e] tracking-tight">
            +5 ANOS
          </span>
          <span className="text-[10px] sm:text-xs uppercase font-bold text-gray-400 tracking-wider">
            DE MERCADO
          </span>
        </div>

        <div className="flex flex-col items-center justify-center pt-2 sm:pt-0 sm:pl-3">
          <span className="font-heading font-black text-lg sm:text-xl text-[#22c55e] tracking-tight">
            AO VIVO
          </span>
          <span className="text-[10px] sm:text-xs uppercase font-bold text-gray-400 tracking-wider">
            NO ESTÚDIO
          </span>
        </div>

        <div className="flex flex-col items-center justify-center pt-2 sm:pt-0 sm:pl-3">
          <span className="font-heading font-black text-lg sm:text-xl text-[#22c55e] tracking-tight">
            IA PRÓPRIA
          </span>
          <span className="text-[10px] sm:text-xs uppercase font-bold text-gray-400 tracking-wider">
            SEM DELAY
          </span>
        </div>

        <div className="flex flex-col items-center justify-center pt-2 sm:pt-0 sm:pl-3">
          <span className="font-heading font-black text-lg sm:text-xl text-[#22c55e] tracking-tight">
            +5 MIL
          </span>
          <span className="text-[10px] sm:text-xs uppercase font-bold text-gray-400 tracking-wider">
            MEMBROS
          </span>
        </div>
      </div>
    </section>
  );
};
