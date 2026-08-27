import React from 'react';
import { Star, Zap } from 'lucide-react';
import { CtaButton } from './CtaButton';

interface CommunitySectionProps {
  onCtaClick?: () => void;
}

export const CommunitySection: React.FC<CommunitySectionProps> = ({ onCtaClick }) => {
  const testimonials = [
    {
      id: 'testimonial-1',
      rating: 5,
      comment:
        '“Depois que comecei a seguir o método, parei de entrar no impulso. Hoje consigo analisar os jogos com muito mais calma e confiança.”',
      initials: 'AM',
      name: 'André M.',
      role: 'Membro do Grupo',
    },
    {
      id: 'testimonial-2',
      rating: 5,
      comment:
        '“O que mais gostei foi a forma de explicar cada entrada. É tudo muito direto e fácil de acompanhar, principalmente durante as análises ao vivo.”',
      initials: 'LS',
      name: 'Lucas S.',
      role: 'Membro do Grupo',
    },
    {
      id: 'testimonial-3',
      rating: 5,
      comment:
        '“Já tinha passado por outros grupos, mas aqui senti uma organização diferente. A equipe realmente acompanha as operações e passa muita segurança.”',
      initials: 'CA',
      name: 'Carlos A.',
      role: 'Membro do Grupo',
    },
    {
      id: 'testimonial-4',
      rating: 5,
      comment:
        '“Antes eu ficava perdido sem saber o melhor momento. Com as análises, comecei a ter mais paciência e entender melhor o que estou fazendo.”',
      initials: 'VP',
      name: 'Victor P.',
      role: 'Membro do Grupo',
    },
    {
      id: 'testimonial-5',
      rating: 5,
      comment:
        '“Entrei sem esperar muita coisa e acabei gostando bastante. O conteúdo é simples, objetivo e consigo acompanhar tudo sem ficar perdido.”',
      initials: 'JM',
      name: 'João M.',
      role: 'Membro do Grupo',
    },
  ];

  return (
    <section className="relative py-10 px-4 flex flex-col items-center text-center max-w-2xl mx-auto">
      {/* Section Title */}
      <h2 className="font-heading font-black text-2xl sm:text-3xl md:text-4xl uppercase tracking-tight text-white mb-8">
        O QUE DIZ <span className="text-[#22c55e] text-glow-green">A COMUNIDADE</span>
      </h2>

      {/* Testimonials List */}
      <div className="w-full flex flex-col gap-4 mb-10">
        {testimonials.map((t) => (
          <div
            key={t.id}
            className="bg-[#08180c]/85 border border-[#163a20] p-5 sm:p-6 rounded-2xl text-left shadow-lg transition-all duration-300 hover:border-[#22c55e]/40"
          >
            {/* 5 Green Stars */}
            <div className="flex items-center gap-1 mb-3">
              {[...Array(t.rating)].map((_, i) => (
                <Star
                  key={i}
                  className="w-4 h-4 fill-[#22c55e] text-[#22c55e]"
                />
              ))}
            </div>

            {/* Comment */}
            <p className="text-white text-xs sm:text-sm font-medium leading-relaxed mb-4">
              {t.comment}
            </p>

            {/* Author */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#11311a] border border-[#1c4e2a] flex items-center justify-center font-heading font-black text-xs text-[#22c55e] shrink-0">
                {t.initials}
              </div>
              <div className="flex flex-col leading-tight">
                <span className="font-heading font-black text-sm text-white tracking-wide">
                  {t.name}
                </span>
                <span className="text-xs text-gray-400 font-medium">
                  {t.role}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="w-full flex flex-col items-center">
        <CtaButton
          id="community-cta-button"
          text="GARANTIR MINHA VAGA AGORA"
          onClick={onCtaClick}
        />
        <div className="flex items-center justify-center gap-1.5 mt-3.5 text-xs text-gray-300 font-medium">
          <Zap className="w-3.5 h-3.5 text-[#eab308] fill-[#eab308]" />
          <span>Aproveite enquanto as vagas gratuitas estão abertas</span>
        </div>
      </div>
    </section>
  );
};
