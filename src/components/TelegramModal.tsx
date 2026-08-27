import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, CheckCircle2, ExternalLink, ShieldCheck, Users } from 'lucide-react';
import { Logo } from './Logo';

interface TelegramModalProps {
  isOpen: boolean;
  onClose: () => void;
  telegramLink?: string;
  buttonText?: string;
  linkDisplayText?: string;
}

export const TelegramModal: React.FC<TelegramModalProps> = ({
  isOpen,
  onClose,
  telegramLink,
  buttonText,
  linkDisplayText
}) => {
  // Se o botão principal da página de vendas for o do suporte, direciona para o suporte. Caso contrário, grupo.
  const isSuporte = buttonText?.toUpperCase().includes('VAGA') || buttonText?.toUpperCase().includes('SUPORTE') || buttonText?.toUpperCase().includes('GARANTIR');
  
  const finalLink = isSuporte ? "https://t.me" : "https://t.me";
  const finalBtnText = isSuporte ? "FALAR COM O SUPORTE AGORA" : "ENTRE PARA O GRUPO AGORA";
  const finalDisplayLink = isSuporte ? "t.me/suportecentralvirtual" : "t.me/+E4BHwf5riSNmMjBh";

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="relative w-full max-w-lg p-6 rounded-2xl bg-[#0B150F] border border-[#17B95B]/20 text-white shadow-2xl"
          >
            <button onClick={onClose} className="absolute top-4 right-4 p-1 rounded-full text-zinc-400 hover:text-white bg-zinc-900/50">
              <X size={18} />
            </button>

            <div className="flex flex-col items-center text-center space-y-4">
              <div className="mb-4">
                <Logo className="h-12 w-auto" />
              </div>
              
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#17B95B]/10 text-[#17B95B] text-xs font-semibold tracking-wide uppercase border border-[#17B95B]/20">
                <ShieldCheck size={14} /> VAGA GRATUITA RESERVADA
              </div>

              <h3 className="text-2xl font-black tracking-tight text-white uppercase">
                ACESSO LIBERADO!
              </h3>

              <p className="text-sm text-zinc-400 max-w-sm">
                Você está sendo redirecionado para o canal oficial da <span className="text-[#17B95B] font-semibold">Central Virtual</span> no Telegram com mais de 5 mil membros.
              </p>

              <div className="w-full p-4 rounded-xl bg-black/40 border border-zinc-800/50 text-left space-y-2.5 text-xs text-zinc-300">
                <div className="flex items-center gap-2"><CheckCircle2 size={14} className="text-[#17B95B]" /> Leituras estatísticas da IA em tempo real</div>
                <div className="flex items-center gap-2"><CheckCircle2 size={14} className="text-[#17B95B]" /> Gestão profissional e transmissões diárias</div>
                <div className="flex items-center gap-2"><Users size={14} className="text-[#17B95B]" /> Comunidade 100% gratuita sem taxas</div>
              </div>

              <a 
                href={finalLink}
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-4 rounded-xl bg-[#17B95B] hover:bg-[#149e4d] text-black font-black text-sm uppercase tracking-wide transition-all shadow-[0_0_20px_rgba(23,185,91,0.3)] hover:scale-[1.01]"
              >
                <Send size={16} fill="black" /> {finalBtnText} <ExternalLink size={14} />
              </a>

              <span className="text-[10px] text-zinc-500 font-mono tracking-wider">
                Link direto: {finalDisplayLink}
              </span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
