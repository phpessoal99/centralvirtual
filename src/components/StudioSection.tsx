import React from 'react';
import studioImage from '../assets/images/studio_original_upload.png';

export const StudioSection: React.FC = () => {
  return (
    <section className="relative py-8 px-4 flex flex-col items-center text-center max-w-2xl mx-auto">
      {/* Small golden/green spark */}
      <div className="w-1.5 h-1.5 rounded-full bg-[#eab308] shadow-[0_0_8px_#eab308] mb-3 self-end mr-12 opacity-80" />

      {/* Section Title */}
      <h2 className="font-heading font-black text-2xl sm:text-3xl md:text-4xl uppercase tracking-tight text-white mb-3">
        OPERAÇÃO <span className="text-[#22c55e] text-glow-green">DE VERDADE</span>
      </h2>

      {/* Description */}
      <p className="text-gray-300 text-xs sm:text-sm max-w-lg mb-8 leading-relaxed">
        Todo dia, ao vivo no nosso estúdio, analisamos as principais partidas com processo e tecnologia. Não é sorte. É método.
      </p>

      {/* Studio Image Card */}
      <div className="relative w-full rounded-3xl overflow-hidden border-2 border-[#194022] shadow-[0_15px_40px_rgba(0,0,0,0.9),0_0_25px_rgba(34,197,94,0.2)] bg-[#040e06] group">
        {/* Image */}
        <img
          src={studioImage}
          alt="Estúdio Central Virtual - Análise Ao Vivo de Futebol Virtual"
          referrerPolicy="no-referrer"
          className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
        />
      </div>
    </section>
  );
};
