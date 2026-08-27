import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Send, CheckCircle2, ExternalLink, ShieldCheck, Users } from 'lucide-react';
import { Logo } from './Logo';

interface TelegramModalProps {
  isOpen: boolean;
  onClose: () => void;
  telegramLink?: string;
}

export const TelegramModal: React.FC<TelegramModalProps> = ({
  isOpen,
  onClose,
  telegramLink = 'https://t.me/+centralvirtual',
}) => {
  const [countdown, setCountdown] = useState<number>(3);

  useEffect(() => {
    if (!isOpen) {
      setCountdown(3);
      return;
    }

    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isOpen]);

  const handleDirectRedirect = () => {
    window.open(telegramLink, '_blank', 'noopener,noreferrer');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 350 }}
            className="relative w-full max-w-md bg-[#07160b] border-2 border-[#1e4a27] rounded-3xl p-6 shadow-[0_20px_50px_rgba(0,0,0,0.9),0_0_30px_rgba(34,197,94,0.3)] text-center z-10 overflow-hidden"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-white p-1 rounded-full bg-[#0d2814] border border-[#1b4324] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Glowing Logo */}
            <div className="flex justify-center mb-3 mt-1">
              <Logo size="sm" showText={false} />
            </div>

            <div className="inline-flex items-center gap-1.5 bg-[#12311b] text-[#22c55e] text-xs font-black px-3 py-1 rounded-full uppercase mb-3 border border-[#1f4e2b]">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>VAGA GRATUITA RESERVADA</span>
            </div>

            <h3 className="font-heading font-black text-xl sm:text-2xl text-white uppercase mb-2">
              Acesso Liberado!
            </h3>

            <p className="text-gray-300 text-xs sm:text-sm mb-5 leading-relaxed">
              Você está sendo redirecionado para o canal oficial da <strong className="text-[#22c55e]">Central Virtual</strong> no Telegram com mais de 5 mil membros.
            </p>

            {/* Benefits Checklist */}
            <div className="bg-[#040e06] border border-[#14351d] rounded-xl p-3.5 mb-5 text-left space-y-2 text-xs text-gray-200">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#22c55e] shrink-0" />
                <span>Leituras estatísticas da IA em tempo real</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#22c55e] shrink-0" />
                <span>Gestão profissional e transmissões diárias</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-[#22c55e] shrink-0" />
                <span>Comunidade 100% gratuita sem taxas</span>
              </div>
            </div>

            {/* Direct Action Button */}
            <button
              onClick={handleDirectRedirect}
              className="w-full flex items-center justify-center gap-2.5 bg-gradient-to-b from-[#34d399] to-[#16a34a] hover:from-[#4ade80] hover:to-[#22c55e] text-black font-heading font-black text-base py-3.5 px-6 rounded-xl shadow-[0_0_20px_rgba(34,197,94,0.6)] cursor-pointer transition-all transform hover:scale-[1.02] active:scale-[0.98]"
            >
              <Send className="w-5 h-5 text-black fill-black" />
              <span>ENTRAR NO TELEGRAM AGORA</span>
              <ExternalLink className="w-4 h-4 text-black stroke-[3]" />
            </button>

            <p className="text-[11px] text-gray-400 mt-3 font-medium">
              Link direto: <span className="text-[#22c55e]">t.me/+centralvirtual</span>
            </p>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
