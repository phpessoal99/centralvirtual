import React from 'react';
import { motion } from 'framer-motion';
import { Radio, ShieldCheck, Zap } from 'lucide-react';

export const StudioSection: React.FC = () => {
  return (
    <section className="py-16 bg-[#050B07] relative overflow-hidden" id="studio">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(23,185,91,0.05)_0%,transparent_100%)]" />
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#17b95b]/10 text-[#17b95b] border border-[#17b95b]/20 text-sm font-bold uppercase tracking-wider">
              <Radio size={16} className="animate-pulse" /> OPERAÇÃO DE VERDADE
            </div>
            
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white uppercase leading-none">
              ACOMPANHE O ANALISTA <span className="text-[#17b95b]">AO VIVO</span> TODOS OS DIAS
            </h2>
            
            <p className="text-zinc-400 text-base md:text-lg leading-relaxed">
              Assista às análises em tempo real, veja a leitura de padrões da nossa inteligência artificial e copie as mesmas entradas que geram resultados consistentes no futebol virtual.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-black/40 border border-zinc-800/50 space-y-2">
                <div className="flex items-center gap-2 text-[#17b95b] font-bold"><Zap size={16} /> Entradas Rápidas</div>
                <p className="text-xs text-zinc-500">Alertas enviados com a máxima velocidade para você não perder nenhuma oportunidade.</p>
              </div>
              
              <div className="p-4 rounded-xl bg-black/40 border border-zinc-800/50 space-y-2">
                <div className="flex items-center gap-2 text-[#17b95b] font-bold"><ShieldCheck size={16} /> Gestão Segura</div>
                <p className="text-xs text-zinc-500">Metodologia profissional focada na proteção e crescimento constante da sua banca.</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-full"
          >
            <div className="relative rounded-2xl overflow-hidden border border-zinc-800 bg-black/20 backdrop-blur">
              <img 
                src="/studio_final_premium.png"
                alt="Estúdio Central Virtual - Análise Ao Vivo" 
                className="w-full h-auto max-h-[450px] object-contain mx-auto"
              />
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};
