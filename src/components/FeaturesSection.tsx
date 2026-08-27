import React from 'react';
import { Zap, Play, Clock, CheckCircle2 } from 'lucide-react';
import { CtaButton } from './CtaButton';

interface FeaturesSectionProps {
  onCtaClick?: () => void;
}

export const FeaturesSection: React.FC<FeaturesSectionProps> = ({ onCtaClick }) => {
  const features = [
    {
      id: 'feature-1',
      icon: Zap,
      title: 'IA Central Virtual em Tempo Real',
      description: 'Nossa IA exclusiva nos da acesso a jogos oportunos que jogadores amadores não conseguem enxergar.',
    },
    {
      id: 'feature-2',
      icon: Play,
      title: 'Análises Lance a Lance',
      description: 'Acompanhe as leituras das partidas ao vivo, jogo a jogo, junto com a equipe.',
    },
    {
      id: 'feature-3',
      icon: Clock,
      title: 'Processo, Gestão e Disciplina',
      description: 'Os 3 pilares fundamentais para buscar consistência de longo prazo.',
    },
    {
      id: 'feature-4',
      icon: CheckCircle2,
      title: '100% Gratuito no Telegram',
      description: 'Sem taxas ou mensalidades. Entra, acompanha e tira suas próprias conclusões.',
    },
  ];

  return (
    <section className="relative py-10 px-4 flex flex-col items-center text-center max-w-2xl mx-auto">
      {/* Small golden glow particle */}
      <div className="w-2 h-2 rounded-full bg-[#eab308] shadow-[0_0_10px_#eab308] mb-2 self-start ml-8 opacity-90" />

      {/* Section Title */}
      <h2 className="font-heading font-black text-2xl sm:text-3xl md:text-4xl uppercase tracking-tight text-white mb-2">
        O QUE VOCÊ <span className="text-[#22c55e] text-glow-green">RECEBE NO GRUPO</span>
      </h2>

      {/* Subtitle */}
      <p className="text-gray-300 text-xs sm:text-sm max-w-lg mb-8 leading-relaxed">
        Conteúdo 100% liberado para acompanhar junto com a comunidade:
      </p>

      {/* Cards List */}
      <div className="w-full flex flex-col gap-3.5 mb-9">
        {features.map((feature) => {
          const IconComponent = feature.icon;
          return (
            <div
              key={feature.id}
              className="flex items-center gap-4 bg-[#08180c]/85 hover:bg-[#0c2312] border border-[#163a20] hover:border-[#22c55e]/50 p-4 sm:p-5 rounded-2xl transition-all duration-300 text-left shadow-lg group"
            >
              {/* Green Icon Box */}
              <div className="w-12 h-12 rounded-xl bg-[#11311a] border border-[#1c4e2a] flex items-center justify-center shrink-0 group-hover:bg-[#184525] group-hover:border-[#22c55e] transition-colors shadow-[0_0_15px_rgba(34,197,94,0.15)]">
                <IconComponent className="w-6 h-6 text-[#22c55e] stroke-[2.2] group-hover:scale-110 transition-transform" />
              </div>

              {/* Content */}
              <div className="flex flex-col">
                <h3 className="font-heading font-black text-sm sm:text-base text-white tracking-tight mb-1 group-hover:text-[#22c55e] transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-300 text-xs sm:text-sm leading-snug">
                  {feature.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Middle CTA */}
      <div className="w-full flex justify-center">
        <CtaButton
          id="features-cta-button"
          text="ENTRAR NO GRUPO GRÁTIS"
          onClick={onCtaClick}
        />
      </div>
    </section>
  );
};
