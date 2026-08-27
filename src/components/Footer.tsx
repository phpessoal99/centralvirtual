import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="relative w-full max-w-2xl mx-auto pt-8 pb-16 px-4 text-center border-t border-[#122e19] mt-8">
      {/* Tiny glowing dot */}
      <div className="w-1.5 h-1.5 rounded-full bg-[#22c55e] shadow-[0_0_8px_#22c55e] mx-auto mb-6 opacity-70" />

      {/* Legal & Age Warning */}
      <div className="space-y-4 text-[11px] sm:text-xs text-gray-400 leading-relaxed font-normal">
        <p className="font-semibold text-gray-300">
          Conteúdo destinado exclusivamente a maiores de 18 anos. Jogue com responsabilidade. Apostas não constituem investimento financeiro.
        </p>

        <p className="text-gray-400">
          As análises compartilhadas possuem caráter informativo e de entretenimento sobre futebol virtual, não constituindo garantia ou promessa de lucros futuros.
        </p>

        <p className="text-gray-500 text-[10px] sm:text-[11px]">
          Este site não é parte do site do Facebook nem do Facebook Inc. Este site NÃO é endossado pelo Facebook de nenhuma forma. Facebook é uma marca registrada da Meta Platforms, Inc.
        </p>

        <div className="pt-2 text-gray-400 font-medium">
          © {new Date().getFullYear()} Central Virtual. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};
