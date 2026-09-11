import React, { useEffect } from 'react';
import {
  X,
  ShieldCheck,
  ArrowRight,
  Flame,
  Check,
  Gift,
} from 'lucide-react';

interface UpsellModalProps {
  isOpen: boolean;
  onAccept: () => void;
  onDecline: () => void;
  onClose: () => void;
}

export const UpsellModal: React.FC<UpsellModalProps> = ({
  isOpen,
  onAccept,
  onDecline,
  onClose,
}) => {
  // Prevent body scroll when modal is open and handle Escape key
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      id="upsell-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-3.5 sm:p-5 overflow-y-auto transition-opacity duration-200"
      onClick={onClose}
    >
      <div
        id="upsell-modal-card"
        className="bg-[#FAF7F2] text-[#1A1A1A] rounded-3xl max-w-xl w-full p-5 sm:p-7 md:p-8 shadow-2xl border-2 border-orange-200/90 relative my-auto max-h-[92vh] overflow-y-auto transition-all animate-in fade-in zoom-in-95 duration-200 flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Discreet Close Button in Corner */}
        <button
          type="button"
          id="upsell-modal-close"
          onClick={onClose}
          aria-label="Fechar modal"
          className="absolute top-4 right-4 p-1.5 sm:p-2 text-stone-400 hover:text-stone-700 rounded-full hover:bg-stone-200/60 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Content */}
        <div className="text-center pr-6 sm:pr-0">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-1.5 bg-orange-100 text-[#E8632C] text-[11px] sm:text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full border border-orange-200 shadow-2xs mb-2">
            <Flame className="w-3.5 h-3.5 text-[#E8632C] fill-[#E8632C]" />
            <span>ESPERA! OFERTA ÚNICA NESTA PÁGINA</span>
          </div>

          {/* Title */}
          <h3 className="font-sans text-2xl sm:text-3xl font-extrabold text-[#1A1A1A] leading-tight tracking-tight mt-1">
            Você está a um clique de ficar pela metade do caminho
          </h3>

          {/* Subtitle */}
          <p className="font-sans text-stone-600 text-xs sm:text-sm md:text-base leading-relaxed mt-2 max-w-lg mx-auto">
            Por apenas mais <strong>R$5</strong>, leve a experiência <strong>COMPLETA</strong> — e pare de tirar seu filho das telas só parcialmente.
          </p>
        </div>

        {/* Quick Comparison Block */}
        <div className="mt-5 space-y-3">
          {/* Pacote Básico Card */}
          <div className="bg-white/80 border border-stone-200 rounded-2xl p-3 sm:p-4 text-xs text-stone-600">
            <div className="flex items-center justify-between font-bold text-stone-800 pb-2 border-b border-stone-100">
              <span className="text-xs uppercase tracking-wide text-stone-500">
                Pacote Básico (o que você está levando agora)
              </span>
              <span className="text-stone-700 font-extrabold">R$ 17</span>
            </div>
            <ul className="mt-2.5 space-y-1.5 text-[11px] sm:text-xs">
              <li className="flex items-start gap-2 text-stone-700">
                <Check className="w-3.5 h-3.5 text-stone-400 mt-0.5 shrink-0" />
                <span>+100 Projetos de Robótica em PDF (passo a passo)</span>
              </li>
              <li className="flex items-start gap-2 text-stone-400">
                <X className="w-3.5 h-3.5 text-stone-400 mt-0.5 shrink-0" />
                <span className="line-through">Sem os 3 bônus exclusivos para manter a empolgação</span>
              </li>
              <li className="flex items-start gap-2 text-stone-400">
                <X className="w-3.5 h-3.5 text-stone-400 mt-0.5 shrink-0" />
                <span className="line-through">Sem o guia de início rápido para começar em 15 minutos</span>
              </li>
            </ul>
          </div>

          {/* Pacote Completo (Upgrade Especial) Card */}
          <div className="bg-orange-50/90 border-2 border-[#E8632C] rounded-2xl p-3.5 sm:p-4.5 shadow-sm relative text-xs">
            <div className="flex items-center justify-between font-extrabold text-[#1A1A1A] pb-2 border-b border-orange-200/80">
              <span className="flex items-center gap-1.5 text-xs uppercase tracking-wide text-[#E8632C] font-black">
                <Gift className="w-4 h-4 text-[#E8632C]" />
                Pacote Completo (upgrade especial)
              </span>
              <span className="text-xs text-stone-500 font-semibold line-through">
                R$ 29
              </span>
            </div>

            <p className="mt-2 text-xs font-semibold text-stone-800">
              Todos os projetos de robótica + os 3 bônus:
            </p>

            <ul className="mt-2 space-y-1.5 text-[11px] sm:text-xs text-stone-800">
              <li className="flex items-start gap-2">
                <div className="w-4 h-4 rounded-full bg-[#8BC34A]/20 text-[#689F38] flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3 h-3 stroke-[3]" />
                </div>
                <span>
                  <strong>Quick Start Robot</strong> (guia de 1 página, primeiro robô em até 15 min) — <span className="text-stone-500">valor $9</span>
                </span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-4 h-4 rounded-full bg-[#8BC34A]/20 text-[#689F38] flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3 h-3 stroke-[3]" />
                </div>
                <span>
                  <strong>STEM Skills Progress Tracker</strong> (gráfico de progresso para imprimir) — <span className="text-stone-500">valor $7</span>
                </span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-4 h-4 rounded-full bg-[#8BC34A]/20 text-[#689F38] flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3 h-3 stroke-[3]" />
                </div>
                <span>
                  <strong>Family Build Night Activity Cards</strong> (10 cartões de desafios em família) — <span className="text-stone-500">valor $12</span>
                </span>
              </li>
            </ul>

            {/* Total Bonus Value Callout */}
            <div className="mt-3 pt-2 border-t border-orange-200 flex items-center justify-between text-[11px] sm:text-xs font-bold text-[#E8632C]">
              <span>Valor total em bônus: $28</span>
              <span className="bg-[#8BC34A] text-stone-950 font-black px-2 py-0.5 rounded-md text-[10px] uppercase">
                Inclusos de graça no upgrade
              </span>
            </div>
          </div>
        </div>

        {/* Price Anchoring */}
        <div className="mt-4 text-center">
          <p className="font-sans text-xs sm:text-sm text-stone-700 font-medium">
            De <span className="line-through text-stone-400 font-bold">R$29</span> por apenas{' '}
            <span className="text-2xl sm:text-3xl font-black text-[#E8632C]">R$22</span>{' '}
            — só nesta página, só agora.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="mt-4 space-y-2.5 text-center">
          {/* Main CTA Button */}
          <a
            id="upsell-accept-button"
            href="https://pay.kiwify.com.br/qHI9ZRy"
            target="_blank"
            rel="noopener noreferrer"
            onClick={onAccept}
            className="w-full bg-[#E8632C] hover:bg-[#C94E1B] active:bg-[#B34013] text-white font-black text-sm sm:text-base py-3.5 sm:py-4 px-6 rounded-full shadow-lg hover:shadow-orange-500/30 transition-all duration-200 cursor-pointer flex items-center justify-center gap-2 group active:scale-[0.99]"
          >
            <span>SIM! QUERO O PACOTE COMPLETO POR R$22</span>
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
          </a>

          {/* Secondary Decline Link */}
          <div>
            <a
              id="upsell-decline-link"
              href="https://pay.kiwify.com.br/c8bkBJb"
              target="_blank"
              rel="noopener noreferrer"
              onClick={onDecline}
              className="text-xs sm:text-[13px] text-stone-500 hover:text-stone-800 underline decoration-stone-300 hover:decoration-stone-600 transition-colors py-1 cursor-pointer font-medium inline-block"
            >
              Não, prefiro ficar só com o pacote básico e perder os bônus
            </a>
          </div>

          {/* Reinforcement Text */}
          <div className="flex items-center justify-center gap-1.5 text-[11px] sm:text-xs text-stone-500 pt-1">
            <ShieldCheck className="w-4 h-4 text-[#8BC34A] shrink-0" />
            <span>Oferta exclusiva desta página — não aparecerá novamente após você sair.</span>
          </div>
        </div>
      </div>
    </div>
  );
};
