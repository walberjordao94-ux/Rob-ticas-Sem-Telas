import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';

interface VSLSectionProps {
  onCtaClick: () => void;
}

export const VSLSection: React.FC<VSLSectionProps> = ({ onCtaClick }) => {
  return (
    <section id="vsl-section" className="bg-[#E8632C] pt-2 pb-8 md:pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        
        {/* Rounded Black Block (#111111) */}
        <div className="bg-[#111111] text-white rounded-3xl p-6 sm:p-10 lg:p-14 shadow-2xl border border-stone-800 relative overflow-hidden">
          
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-orange-600/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-60 h-60 bg-lime-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            
            {/* Left Column: Text & Pitch */}
            <div className="lg:col-span-6 space-y-6">
              
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2">
                <span className="text-[#E8632C] bg-orange-950/80 border border-orange-700/50 text-xs sm:text-sm font-bold tracking-wide px-3.5 py-1 rounded-full">
                  ✦ Existe uma maneira melhor
                </span>
              </div>

              {/* Headline */}
              <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold leading-tight text-white tracking-tight">
                E se eles{' '}
                <span className="italic text-[#E8632C] font-serif">
                  implorassem para construir
                </span>{' '}
                em vez de implorar por telas?
              </h3>

              {/* Paragraphs */}
              <div className="space-y-3.5 text-stone-300 text-base sm:text-lg leading-relaxed">
                <p>
                  Com <strong className="text-white">Robótica Sem Telas</strong>, seus filhos têm acesso a mais de 100 projetos de robótica divertidos e práticos, usando materiais simples que você já tem em casa, com instruções passo a passo fáceis de seguir.
                </p>
              </div>

              <div className="pt-2">
                <button
                  onClick={onCtaClick}
                  className="inline-flex items-center gap-2 bg-[#E8632C] hover:bg-[#C94E1B] text-white font-bold text-sm sm:text-base px-6 py-3.5 rounded-full shadow-lg hover:shadow-orange-500/25 transition-all cursor-pointer"
                >
                  <span>Ver Todos os Projetos</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>

            {/* Right Column: YouTube Shorts Video Embed */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="w-full max-w-[320px] sm:max-w-[340px] bg-stone-900/90 rounded-3xl p-3 border-2 border-stone-700 shadow-2xl">
                <div className="relative w-full aspect-[9/16] rounded-2xl overflow-hidden bg-black shadow-inner">
                  <iframe
                    src="https://www.youtube.com/embed/w8p_l1zH0pc"
                    title="Demonstração Robótica Sem Telas"
                    className="w-full h-full border-0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    loading="lazy"
                  />
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
