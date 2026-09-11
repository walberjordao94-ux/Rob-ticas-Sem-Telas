import React, { useState } from 'react';
import {
  ShieldCheck,
  Check,
  X,
  Lock,
  ArrowRight,
  CreditCard,
  QrCode,
  Sparkles,
  Clock,
} from 'lucide-react';
import { useCountdown } from '../hooks/useCountdown';
import { UpsellModal } from './UpsellModal';

interface FinalOfferProps {
  onCtaClick?: (plan?: 'basic' | 'complete' | 'upgrade') => void;
}

export const FinalOffer: React.FC<FinalOfferProps> = ({ onCtaClick }) => {
  const { formattedTime } = useCountdown();
  const [isUpsellOpen, setIsUpsellOpen] = useState(false);

  const handleBasicCtaClick = () => {
    setIsUpsellOpen(true);
  };

  const handleAcceptUpsell = () => {
    setIsUpsellOpen(false);
  };

  const handleDeclineUpsell = () => {
    setIsUpsellOpen(false);
  };

  const handleCloseUpsell = () => {
    setIsUpsellOpen(false);
  };

  return (
    <section
      id="planos"
      className="bg-[#FAF7F2] pt-8 md:pt-10 pb-12 md:pb-16 relative overflow-hidden border-t border-stone-200/60 scroll-mt-12"
    >
      {/* Subtle organic craft dot pattern */}
      <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(#c7b9a5_1.2px,transparent_1.2px)] [background-size:24px_24px]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-72 bg-gradient-to-b from-orange-100/40 via-orange-50/20 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 bg-orange-100/90 text-[#E8632C] text-xs sm:text-sm font-bold tracking-wide px-4 py-1.5 rounded-full border border-orange-200/80 shadow-2xs mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#E8632C]" />
            <span className="uppercase">Acesso Imediato</span>
          </div>

          <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1A1A1A] leading-tight tracking-tight mb-3.5">
            Escolha o Plano Ideal Para Sua Família
          </h2>

          <p className="font-sans text-stone-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mb-4">
            Comece hoje mesmo e tenha acesso imediato após a confirmação
          </p>

          {/* Linha de Urgência / Escassez com ícone e Timer Sincronizado */}
          <div
            id="plans-urgency-notice"
            className="inline-flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 bg-amber-50/90 border border-orange-200/90 text-stone-800 px-4 py-2 sm:py-2.5 rounded-2xl shadow-2xs text-xs sm:text-sm"
          >
            <div className="flex items-center gap-1.5 font-semibold text-[#C94E1B]">
              <Clock className="w-4 h-4 text-[#E8632C] shrink-0" />
              <span>Os preços abaixo valem apenas durante esta oferta de lançamento</span>
            </div>

            <div className="flex items-center gap-1.5 bg-[#111111] text-white px-2.5 py-1 rounded-lg font-mono text-xs font-bold shadow-2xs">
              <span className="text-orange-400 uppercase text-[10px] sm:text-xs">Expira em:</span>
              <span>{formattedTime}</span>
            </div>
          </div>
        </div>

        {/* Two Plans Side by Side Comparison Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto items-stretch">

          {/* CARD 1 - PACOTE BÁSICO (Aparece primeiro / acima de R$ 29,00) */}
          <div
            id="plan-card-basic"
            className="order-1 bg-white rounded-3xl p-6 sm:p-8 md:p-9 border-2 border-black shadow-md flex flex-col justify-between h-full transition-all duration-300 hover:shadow-lg"
          >
            <div>
              {/* Header Info */}
              <div className="border-b border-stone-100 pb-5">
                <span className="text-xs font-bold uppercase tracking-widest text-stone-500 block mb-1">
                  Plano de Entrada
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#1A1A1A]">
                  Pacote Básico
                </h3>
                <p className="text-xs sm:text-sm text-stone-500 mt-1 min-h-[38px] flex items-center">
                  Para quem quer apenas os projetos essenciais de robótica.
                </p>

                {/* Price Display */}
                <div className="mt-4 pt-3 border-t border-stone-100">
                  <span className="text-[11px] font-semibold text-stone-400 uppercase tracking-wider block">
                    Valor à vista
                  </span>
                  <div className="flex items-baseline gap-1 mt-0.5">
                    <span className="text-2xl font-bold text-stone-700 font-sans">R$</span>
                    <span className="text-5xl font-extrabold text-stone-900 tracking-tight font-serif">
                      17,00
                    </span>
                  </div>
                  <p className="text-xs text-stone-500 font-medium mt-1">
                    pagamento único, sem parcelamento
                  </p>
                </div>
              </div>

              {/* Items List */}
              <ul className="space-y-3.5 my-6 flex-grow">
                {/* 1. Incluído: +100 Projetos */}
                <li className="flex items-start gap-3 text-sm text-stone-800 leading-snug">
                  <div className="w-5 h-5 rounded-full bg-[#8BC34A]/20 text-[#689F38] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="font-semibold text-stone-900">
                    +100 Projetos de Robótica em PDF de Alta Resolução
                  </span>
                </li>

                {/* 2. Incluído: Guias passo a passo ilustrados */}
                <li className="flex items-start gap-3 text-sm text-stone-800 leading-snug">
                  <div className="w-5 h-5 rounded-full bg-[#8BC34A]/20 text-[#689F38] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="font-medium text-stone-700">
                    Guias passo a passo ilustrados
                  </span>
                </li>

                {/* 3. NÃO incluído: Guia "Robô de Início Rápido" */}
                <li className="flex items-start gap-3 text-sm leading-snug">
                  <div className="w-5 h-5 rounded-full bg-red-50 text-[#DC2626] flex items-center justify-center shrink-0 mt-0.5">
                    <X className="w-3.5 h-3.5 stroke-[2.5]" />
                  </div>
                  <span className="text-stone-400">
                    Guia "Robô de Início Rápido"
                  </span>
                </li>

                {/* 4. NÃO incluído: Rastreador de Progresso STEM */}
                <li className="flex items-start gap-3 text-sm leading-snug">
                  <div className="w-5 h-5 rounded-full bg-red-50 text-[#DC2626] flex items-center justify-center shrink-0 mt-0.5">
                    <X className="w-3.5 h-3.5 stroke-[2.5]" />
                  </div>
                  <span className="text-stone-400">
                    Rastreador de Progresso em Habilidades STEM
                  </span>
                </li>

                {/* 5. NÃO incluído: Cartões de Atividades */}
                <li className="flex items-start gap-3 text-sm leading-snug">
                  <div className="w-5 h-5 rounded-full bg-red-50 text-[#DC2626] flex items-center justify-center shrink-0 mt-0.5">
                    <X className="w-3.5 h-3.5 stroke-[2.5]" />
                  </div>
                  <span className="text-stone-400">
                    Cartões de Atividades para Noite de Construção em Família
                  </span>
                </li>

                {/* 6. NÃO incluído: Acesso vitalício */}
                <li className="flex items-start gap-3 text-sm leading-snug">
                  <div className="w-5 h-5 rounded-full bg-red-50 text-[#DC2626] flex items-center justify-center shrink-0 mt-0.5">
                    <X className="w-3.5 h-3.5 stroke-[2.5]" />
                  </div>
                  <span className="text-stone-400">
                    Acesso vitalício com atualizações
                  </span>
                </li>

                {/* 7. Incluído: Garantia incondicional de 7 dias */}
                <li className="flex items-start gap-3 text-sm text-stone-800 leading-snug">
                  <div className="w-5 h-5 rounded-full bg-[#8BC34A]/20 text-[#689F38] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="font-semibold text-stone-900">
                    Garantia incondicional de 7 dias
                  </span>
                </li>
              </ul>
            </div>

            {/* CTA Button */}
            <div className="pt-4 border-t border-stone-100">
              <a
                id="plan-basic-cta-button"
                href="https://pay.kiwify.com.br/c8bkBJb"
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => {
                  e.preventDefault();
                  handleBasicCtaClick();
                }}
                className="w-full bg-stone-100 hover:bg-stone-200 active:bg-stone-300 text-stone-800 font-bold text-sm sm:text-base py-3.5 px-6 rounded-full border border-stone-300 transition-all duration-200 cursor-pointer flex items-center justify-center gap-2 shadow-xs active:scale-[0.99]"
              >
                <span>QUERO O BÁSICO</span>
                <ArrowRight className="w-4 h-4 text-stone-500" />
              </a>
            </div>
          </div>

          {/* CARD 2 - PACOTE COMPLETO (Aparece depois / abaixo de R$ 17,00) */}
          <div
            id="plan-card-complete"
            className="order-2 bg-white rounded-3xl p-6 sm:p-8 md:p-9 border-2 border-[#E8632C] shadow-2xl relative flex flex-col justify-between h-full ring-4 ring-[#E8632C]/10 transition-all duration-300 hover:shadow-orange-500/20"
          >
            {/* Top Floating Badge */}
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#E8632C] text-white text-xs font-black uppercase tracking-wider px-4 py-1.5 rounded-full shadow-md flex items-center gap-1.5 whitespace-nowrap">
              <span>🔥 MAIS ESCOLHIDO</span>
            </div>

            <div>
              {/* Header Info */}
              <div className="border-b border-orange-100 pb-5 pt-1">
                <div className="flex items-center justify-between gap-2 mb-1">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#E8632C] block">
                    Experiência Completa
                  </span>
                  <span className="text-[10px] font-extrabold uppercase bg-amber-100 text-amber-900 px-2 py-0.5 rounded-full">
                    3 BÔNUS INCLUSOS
                  </span>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#1A1A1A]">
                  Pacote Completo
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 mt-1 min-h-[38px] flex items-center">
                  O arsenal completo com todos os bônus e atualizações para sua família.
                </p>

                {/* Price Display */}
                <div className="mt-4 pt-3 border-t border-orange-100">
                  <span className="text-[11px] font-bold text-[#E8632C] uppercase tracking-wider block">
                    Melhor custo-benefício
                  </span>

                  {/* 1. Ancoragem de valor total tachado */}
                  <div className="flex items-center gap-1.5 text-xs sm:text-sm text-stone-500 mt-2 font-normal">
                    <span>Valor total dos itens:</span>
                    <span className="line-through text-stone-400 font-medium">R$ 238,00</span>
                  </div>

                  {/* 2. Texto "Hoje por apenas" */}
                  <p className="text-xs sm:text-sm text-stone-600 font-medium mt-1">
                    Hoje por apenas
                  </p>

                  {/* 3. Preço final com maior destaque */}
                  <div className="flex items-baseline gap-1 mt-0.5">
                    <span className="text-2xl font-bold text-[#E8632C] font-sans">R$</span>
                    <span className="text-5xl sm:text-6xl font-extrabold text-[#E8632C] tracking-tight font-serif">
                      29,00
                    </span>
                  </div>

                  {/* 4. Economia reforçada */}
                  <div className="mt-1.5 inline-flex items-center gap-1 text-xs sm:text-sm font-bold text-[#689F38] bg-[#8BC34A]/15 px-2.5 py-0.5 rounded-md border border-[#8BC34A]/30">
                    <span>Economia de R$ 209,00</span>
                  </div>

                  {/* 5. Pagamento único */}
                  <p className="text-xs text-stone-700 font-bold mt-1.5">
                    pagamento único, sem parcelamento
                  </p>
                </div>
              </div>

              {/* Items List - All Included with Green Check */}
              <ul className="space-y-3.5 my-6 flex-grow">
                {/* 1. +100 Projetos */}
                <li className="flex items-start gap-3 text-sm text-stone-800 leading-snug">
                  <div className="w-5 h-5 rounded-full bg-[#8BC34A]/25 text-[#689F38] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="font-bold text-stone-900">
                    +100 Projetos de Robótica em PDF de Alta Resolução
                  </span>
                </li>

                {/* 2. Guias passo a passo */}
                <li className="flex items-start gap-3 text-sm text-stone-800 leading-snug">
                  <div className="w-5 h-5 rounded-full bg-[#8BC34A]/25 text-[#689F38] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="font-semibold text-stone-800">
                    Guias passo a passo ilustrados
                  </span>
                </li>

                {/* 3. Bônus 1: Robô de Início Rápido */}
                <li className="flex items-start gap-3 text-sm text-stone-800 leading-snug">
                  <div className="w-5 h-5 rounded-full bg-[#8BC34A]/25 text-[#689F38] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span>
                    <strong className="font-bold text-stone-900">Guia "Robô de Início Rápido"</strong>{' '}
                    <span className="text-stone-500 font-medium text-xs">(valor R$47)</span>
                  </span>
                </li>

                {/* 4. Bônus 2: Rastreador STEM */}
                <li className="flex items-start gap-3 text-sm text-stone-800 leading-snug">
                  <div className="w-5 h-5 rounded-full bg-[#8BC34A]/25 text-[#689F38] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span>
                    <strong className="font-bold text-stone-900">Rastreador de Progresso em Habilidades STEM</strong>{' '}
                    <span className="text-stone-500 font-medium text-xs">(valor R$37)</span>
                  </span>
                </li>

                {/* 5. Bônus 3: Cartões de Atividades */}
                <li className="flex items-start gap-3 text-sm text-stone-800 leading-snug">
                  <div className="w-5 h-5 rounded-full bg-[#8BC34A]/25 text-[#689F38] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span>
                    <strong className="font-bold text-stone-900">Cartões de Atividades para Noite de Construção em Família</strong>{' '}
                    <span className="text-stone-500 font-medium text-xs">(valor R$57)</span>
                  </span>
                </li>

                {/* 6. Acesso vitalício + atualizações */}
                <li className="flex items-start gap-3 text-sm text-stone-800 leading-snug">
                  <div className="w-5 h-5 rounded-full bg-[#8BC34A]/25 text-[#689F38] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="font-bold text-stone-900">
                    Acesso vitalício + atualizações inclusas
                  </span>
                </li>

                {/* 7. Impressão liberada */}
                <li className="flex items-start gap-3 text-sm text-stone-800 leading-snug">
                  <div className="w-5 h-5 rounded-full bg-[#8BC34A]/25 text-[#689F38] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="font-bold text-stone-900">
                    Impressão liberada, cópias ilimitadas
                  </span>
                </li>

                {/* 8. Garantia 7 dias */}
                <li className="flex items-start gap-3 text-sm text-stone-800 leading-snug">
                  <div className="w-5 h-5 rounded-full bg-[#8BC34A]/25 text-[#689F38] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="font-bold text-stone-900">
                    Garantia incondicional de 7 dias
                  </span>
                </li>
              </ul>
            </div>

            {/* Big Primary CTA Button */}
            <div className="pt-4 border-t border-orange-100">
              <a
                id="plan-complete-cta-button"
                href="https://pay.kiwify.com.br/rVnhxRM"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#E8632C] hover:bg-[#C94E1B] text-white font-extrabold text-base sm:text-lg py-4 px-6 rounded-full shadow-lg shadow-orange-600/30 hover:shadow-xl hover:shadow-orange-600/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 cursor-pointer flex items-center justify-center gap-2"
              >
                <span>QUERO O PACOTE COMPLETO</span>
                <ArrowRight className="w-5 h-5 stroke-[2.5]" />
              </a>
              <p className="text-[11px] text-stone-500 text-center mt-2 font-medium">
                ⚡ Liberação imediata + todos os bônus inclusos
              </p>
            </div>
          </div>

        </div>

        {/* Linha de Confiança: PIX Imediato, Cartão, SSL 256-bit */}
        <div className="mt-10 sm:mt-12 flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs sm:text-sm text-stone-600 font-medium">
          <span className="flex items-center gap-1.5">
            <QrCode className="w-4 h-4 text-[#E8632C]" />
            PIX Imediato
          </span>
          <span className="text-stone-300">•</span>
          <span className="flex items-center gap-1.5">
            <CreditCard className="w-4 h-4 text-[#E8632C]" />
            Cartão
          </span>
          <span className="text-stone-300">•</span>
          <span className="flex items-center gap-1.5">
            <Lock className="w-4 h-4 text-[#8BC34A]" />
            SSL 256-bit
          </span>
        </div>

        {/* Selo de Garantia de 7 Dias Exatamente como na Página Atual */}
        <div className="mt-8 border border-stone-200/90 flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left bg-white p-6 sm:p-7 rounded-2xl shadow-sm max-w-4xl mx-auto">
          <div className="w-14 h-14 rounded-full bg-[#8BC34A]/20 text-[#8BC34A] flex items-center justify-center shrink-0 border border-[#8BC34A]/40">
            <ShieldCheck className="w-8 h-8 text-[#8BC34A]" />
          </div>
          <div>
            <h4 className="font-bold text-base sm:text-lg text-[#1A1A1A]">
              Garantia Incondicional de 7 Dias: Risco Zero para Você!
            </h4>
            <p className="text-xs sm:text-sm text-stone-600 mt-1 leading-relaxed">
              Baixe o material, teste os projetos com seus filhos por uma semana inteira. Se por qualquer motivo você achar que não valeu a pena, devolvemos 100% do seu dinheiro com apenas um e-mail.
            </p>
          </div>
        </div>

      </div>

      {/* Upsell / Order Bump Modal */}
      <UpsellModal
        isOpen={isUpsellOpen}
        onAccept={handleAcceptUpsell}
        onDecline={handleDeclineUpsell}
        onClose={handleCloseUpsell}
      />
    </section>
  );
};
