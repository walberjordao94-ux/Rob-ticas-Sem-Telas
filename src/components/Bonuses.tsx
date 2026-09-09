import React from 'react';
import { BONUSES_DATA } from '../data/landingData';
import { Gift, Sparkles, Check, ArrowRight } from 'lucide-react';

interface BonusesProps {
  onCtaClick: () => void;
}

export const Bonuses: React.FC<BonusesProps> = ({ onCtaClick }) => {
  return (
    <section id="bonuses-section" className="bg-[#F3EEE4] pt-6 md:pt-8 pb-4 md:pb-6 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10 md:mb-12">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#1A1A1A] leading-tight tracking-tight">
            Faça seu pedido hoje e ganhe estes{' '}
            <span className="italic text-[#E8632C] font-serif underline decoration-orange-300 decoration-wavy decoration-2">
              3 bônus grátis!
            </span>
          </h2>

          <p className="text-stone-700 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            Ao adquirir o pacote principal hoje, você leva gratuitamente estes materiais extras avaliados em mais de <strong className="text-stone-900 font-bold">R$ 141,00</strong>.
          </p>
        </div>

        {/* 3 Bonus Cards Side by Side */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BONUSES_DATA.map((bonus) => (
            <div
              key={bonus.id}
              id={`bonus-card-${bonus.id}`}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1.5 flex flex-col border border-stone-200"
            >
              {/* Photo on Top with Tags */}
              <div className="relative h-48 w-full overflow-hidden bg-stone-900 group">
                <img
                  src={bonus.image}
                  alt={bonus.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                {/* Tag pill */}
                <div className="absolute top-3 left-3 bg-[#E8632C] text-white text-[11px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm flex items-center gap-1.5">
                  <Gift className="w-3 h-3" />
                  <span>{bonus.tag}</span>
                </div>

                {/* Free Badge */}
                <div className="absolute bottom-3 right-3 bg-[#8BC34A] text-stone-900 text-xs font-black px-2.5 py-0.5 rounded-full shadow-md">
                  GRÁTIS HOJE
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  {/* Price Tag with Strikethrough */}
                  <div className="flex items-center gap-2 text-xs mb-2">
                    <span className="text-stone-400 line-through font-semibold">
                      Valor Normal: {bonus.originalPrice}
                    </span>
                    <span className="text-[#8BC34A] font-extrabold uppercase">
                      • R$ 0,00
                    </span>
                  </div>

                  <h3 className="font-serif text-xl font-bold text-[#1A1A1A] leading-snug">
                    {bonus.title}
                  </h3>

                  <p className="mt-2.5 text-stone-600 text-sm leading-relaxed">
                    {bonus.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-stone-100 flex items-center gap-2 text-xs font-semibold text-[#E8632C]">
                  <Check className="w-4 h-4 text-[#8BC34A]" />
                  <span>Incluso no download imediato</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Action Button after Bonuses */}
        <div className="mt-8 sm:mt-10 text-center">
          <button
            id="bonuses-cta-button"
            onClick={onCtaClick}
            className="inline-flex items-center justify-center gap-3 bg-[#E8632C] hover:bg-[#C94E1B] text-white text-base font-bold py-4 px-8 rounded-full shadow-lg shadow-orange-600/25 hover:shadow-xl transition-all cursor-pointer"
          >
            <span>QUERO O PACOTE COMPLETO + TODOS OS 3 BÔNUS</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
