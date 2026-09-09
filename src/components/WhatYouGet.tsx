import React from 'react';
import { WHAT_YOU_GET_LIST } from '../data/landingData';
import { CheckCircle2, ArrowRight, BookOpen, Sparkles, Layers, Download } from 'lucide-react';

interface WhatYouGetProps {
  onCtaClick: () => void;
}

export const WhatYouGet: React.FC<WhatYouGetProps> = ({ onCtaClick }) => {
  return (
    <section id="what-you-get" className="bg-[#F3EEE4] pb-16 md:pb-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <span className="text-[#E8632C] font-extrabold text-xs tracking-widest uppercase bg-orange-100 px-3.5 py-1.5 rounded-full border border-orange-200/60">
            PACOTE COMPLETO DE CONTEÚDO
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#1A1A1A] leading-tight">
            O que seu filho recebe ao entrar hoje
          </h2>
          <p className="text-stone-700 text-base sm:text-lg">
            Tudo pensado detalhadamente para despertar o gênio construtor que existe no seu filho.
          </p>
        </div>

        {/* Big White Card with Border and Soft Shadow */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 shadow-xl border border-stone-200">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Left Column: Product / Digital Mockup */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center">
              <div className="relative w-full max-w-sm">
                
                {/* Visual Digital PDF Bundle Frame */}
                <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-stone-900 border-2 border-stone-200 aspect-4/5 flex flex-col justify-between p-6 text-white group">
                  <img
                    src="https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&w=800&q=80"
                    alt="Mockup do Guia Digital de Robótica Infantil"
                    className="absolute inset-0 w-full h-full object-cover opacity-35 group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                  {/* Header Badge */}
                  <div className="relative z-10 flex items-center justify-between">
                    <span className="bg-[#E8632C] text-white text-[11px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                      E-BOOK DIGITAL HD
                    </span>
                    <Download className="w-5 h-5 text-amber-300" />
                  </div>

                  {/* Center Art */}
                  <div className="relative z-10 text-center my-auto space-y-2">
                    <div className="w-16 h-16 rounded-2xl bg-[#E8632C]/20 border border-[#E8632C]/40 text-[#E8632C] mx-auto flex items-center justify-center">
                      <BookOpen className="w-8 h-8 text-amber-300" />
                    </div>
                    <h3 className="font-serif text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                      ROBÓTICA <br />
                      <span className="text-[#8BC34A]">SEM TELAS</span>
                    </h3>
                    <p className="text-xs text-stone-300 tracking-wide font-mono">
                      +100 PROJETOS PRÁTICOS EM PDF
                    </p>
                  </div>

                  {/* Bottom Footer Badge */}
                  <div className="relative z-10 pt-4 border-t border-white/20 flex items-center justify-between text-xs text-stone-300">
                    <span>Para 4 a 12 anos</span>
                    <span className="text-amber-300 font-bold">Acesso Vitalício</span>
                  </div>
                </div>

                {/* Decorative floating pills */}
                <div className="absolute -bottom-4 -left-4 bg-[#8BC34A] text-stone-900 text-xs font-bold px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1.5 border border-white">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Impressão Liberada</span>
                </div>
                <div className="absolute -top-3 -right-3 bg-stone-900 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg border border-stone-700">
                  ⚡ Download Imediato
                </div>

              </div>
            </div>

            {/* Right Column: Benefits List */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-4">
                {WHAT_YOU_GET_LIST.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3.5 p-3 rounded-xl hover:bg-orange-50/60 transition-colors"
                  >
                    <div className="mt-0.5 w-6 h-6 rounded-full bg-lime-100 text-[#8BC34A] flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-5 h-5 text-[#8BC34A]" />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#1A1A1A] text-base leading-snug">
                        {item.title}
                      </h4>
                      <p className="text-stone-600 text-sm mt-0.5 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Action Button inside WhatYouGet */}
              <div className="pt-4 border-t border-stone-100">
                <button
                  id="what-you-get-cta"
                  onClick={onCtaClick}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#E8632C] hover:bg-[#C94E1B] text-white font-bold py-3.5 px-8 rounded-full shadow-md hover:shadow-lg transition-all cursor-pointer"
                >
                  <span>QUERO RECEBER TODO ESSE CONTEÚDO</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
