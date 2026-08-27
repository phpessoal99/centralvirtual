import React from 'react';
import { motion } from 'framer-motion';
import { Radio, Users, Star, ArrowRight, ShieldCheck, Zap } from 'lucide-react';

export const StudioSection: React.FC = () => {
  return (
    <section className="py-24 bg-[#050B07] relative overflow-hidden" id="studio">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(23,185,91,0.05)_0%,transparent_100%)]" />
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#17B95B]/10 text-[#17B95B] border border-[#17B95B]/20 text-sm font-bold uppercase tracking-wider">
              <Radio size={16} className="animate-pulse" /> OPERAÇÃO DE VERDADE
            </div>

            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white uppercase leading-none">
              ACOMPANHE O ANALISTA <span className="text-[#17B95B]">AO VIVO</span> TODOS OS DIAS
            </h2>

            <p className="text-zinc-400 text-lg leading-relaxed">
              Assista às análises em tempo real, veja a leitura de padrões da nossa inteligência artificial e copie as mesmas entradas que geram resultados consistentes no futebol virtual.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-black/40 border border-zinc-800/50 space-y-2">
                <div className="flex items-center gap-2 text-[#17B95B] font-bold"><Zap size={16} /> Entradas Rápidas</div>
                <p className="text-xs text-zinc-500">Alertas enviados com a máxima velocidade para você não perder nenhuma oportunidade.</p>
              </div>
              <div className="p-4 rounded-xl bg-black/40 border border-zinc-800/50 space-y-2">
                <div className="flex items-center gap-2 text-[#17B95B] font-bold"><ShieldCheck size={16} /> Gestão Segura</div>
                <p className="text-xs text-zinc-500">Metodologia profissional focada na proteção e crescimento constante da sua banca.</p>
              </div>
            </div>

            {/* BOTÃO DO GRUPO (DIRETO PARA O SEU LINK) */}
            <div className="pt-4">
              <a 
                href="https://t.me"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-5 rounded-xl bg-[#17B95B] hover:bg-[#149e4d] text-black font-black text-base uppercase tracking-wide transition-all shadow-[0_0_30px_rgba(23,185,91,0.2)] hover:scale-[1.02]"
              >
                ENTRAR NO GRUPO GRÁTIS <ArrowRight size={18} />
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative lg:ml-auto w-full max-w-md"
          >
            <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_40%,#050B07_100%)] z-10 pointer-events-none" />
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-[#17B95B]/30 to-transparent opacity-30 blur-lg" />
            
            <div className="relative rounded-2xl border border-zinc-800/80 bg-zinc-900/20 overflow-hidden">
              <img 
                src="https://unsplash.com" 
                alt="Analista de Futebol Virtual" 
                className="w-full h-auto object-contain"
              />
              
              <div className="absolute bottom-6 left-6 right-6 z-20 p-4 rounded-xl bg-black/80 backdrop-blur-md border border-zinc-800/80 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white uppercase tracking-wider">Sessão Online</div>
                    <div className="text-[10px] text-zinc-500">Transmissão em andamento</div>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#17B95B]/10 border border-[#17B95B]/20 text-[#17B95B] text-xs font-bold">
                  <Users size={12} /> +1,420
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
