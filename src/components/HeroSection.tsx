import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { Logo } from './Logo';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-32 pb-20 bg-[#030704] overflow-hidden">
      {/* Efeitos de Fundo */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(23,185,91,0.08)_0%,transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(23,185,91,0.03)_0%,transparent_50%)]" />
      
      <div className="max-w-4xl mx-auto px-4 text-center relative z-10 space-y-8">
        
        {/* Logomarca Centralizada */}
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex justify-center mb-6"
        >
          <Logo className="h-16 w-auto" />
        </motion.div>

        {/* Tag de Alerta */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#17B95B]/10 text-[#17B95B] border border-[#17B95B]/20 text-xs font-black uppercase tracking-wider mx-auto"
        >
          <ShieldCheck size={14} /> MÉTODO 100% VALIDADO PELA IA
        </motion.div>

        {/* Título Principal Impactante */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white uppercase leading-none"
        >
          DESCUBRA A ESTRATÉGIA QUE <br />
          <span className="text-[#17B95B] bg-gradient-to-r from-[#17B95B] to-[#129147] bg-clip-text text-transparent">FROUXA A BANCA</span> NO VIRTUAL
        </motion.h1>

        {/* Subtítulo descritivo */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-zinc-400 text-base sm:text-lg md:text-xl max-w-2xl mx-auto font-medium leading-relaxed"
        >
          Chega de quebrar bancas com achismos. Tenha acesso imediato aos mesmos sinais automatizados que os grandes players usam para lucrar diariamente.
        </motion.p>

        {/* BOTÕES PRINCIPAIS DE REDIRECIONAMENTO DIRETO */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 max-w-md mx-auto sm:max-w-none"
        >
          {/* BOTÃO DO GRUPO (DIRETO) */}
          <a 
            href="https://t.me"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-5 rounded-xl bg-[#17B95B] hover:bg-[#149e4d] text-black font-black text-sm uppercase tracking-wide transition-all shadow-[0_0_30px_rgba(23,185,91,0.25)] hover:scale-[1.02]"
          >
            ENTRAR NO GRUPO GRÁTIS <ArrowRight size={16} />
          </a>

          {/* BOTÃO DO SUPORTE (DIRETO) */}
          <a 
            href="https://t.me"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-5 rounded-xl bg-transparent hover:bg-zinc-900/50 text-white font-black text-sm uppercase tracking-wide transition-all border border-zinc-800 hover:border-zinc-700"
          >
            <MessageSquare size={16} className="text-[#17B95B]" /> FALAR COM SUPORTE
          </a>
        </motion.div>

        {/* Benefícios rápidos no rodapé do topo */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 pt-8 text-xs text-zinc-500 font-medium"
        >
          <div className="flex items-center gap-1.5"><CheckCircle2 size={14} className="text-[#17B95B]" /> Sinais 24h por dia</div>
          <div className="flex items-center gap-1.5"><CheckCircle2 size={14} className="text-[#17B95B]" /> Sem mensalidade</div>
          <div className="flex items-center gap-1.5"><CheckCircle2 size={14} className="text-[#17B95B]" /> Suporte Individual</div>
        </motion.div>

      </div>
    </section>
  );
};
