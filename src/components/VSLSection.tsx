import React, { useState } from 'react';
import { Play, Volume2, Sparkles, X } from 'lucide-react';

interface VSLSectionProps {
  onCtaClick: () => void;
}

export const VSLSection: React.FC<VSLSectionProps> = ({ onCtaClick }) => {
  const [isPlaying, setIsPlaying] = useState(false);

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

            </div>

            {/* Right Column: Video Player / Phone Mockup (VSL Placeholder) */}
            <div className="lg:col-span-6">
              <div className="relative mx-auto max-w-md bg-stone-900 rounded-3xl p-3 border-2 border-stone-700 shadow-2xl">
                
                {/* Phone / Tablet Bezel Simulation */}
                <div className="relative rounded-2xl overflow-hidden bg-black aspect-16/10 sm:aspect-16/11 group cursor-pointer" onClick={() => setIsPlaying(true)}>
                  
                  <img
                    src="https://images.unsplash.com/photo-1535378917042-10a22c95931a?auto=format&fit=crop&w=800&q=80"
                    alt="Vídeo demonstrativo dos projetos de robótica"
                    className="w-full h-full object-cover opacity-75 group-hover:opacity-90 group-hover:scale-105 transition-all duration-500"
                  />

                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 group-hover:bg-black/30 transition-colors">
                    <div className="relative flex items-center justify-center">
                      <div className="absolute w-20 h-20 bg-[#E8632C]/30 rounded-full animate-ping pointer-events-none" />
                      <div className="w-16 h-16 rounded-full bg-[#E8632C] text-white flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                        <Play className="w-7 h-7 fill-white translate-x-0.5" />
                      </div>
                    </div>

                    <div className="mt-4 text-center">
                      <p className="text-white font-bold text-sm sm:text-base drop-shadow-md">
                        Veja Como Funciona em 2 Minutos
                      </p>
                      <p className="text-stone-300 text-xs mt-0.5 flex items-center justify-center gap-1">
                        <Volume2 className="w-3.5 h-3.5 text-amber-400" />
                        Clique para assistir a apresentação
                      </p>
                    </div>
                  </div>

                  {/* Bottom Video Timeline Mockup */}
                  <div className="absolute bottom-0 inset-x-0 p-3 bg-gradient-to-t from-black/90 to-transparent flex items-center gap-2">
                    <span className="text-[10px] text-white/80 font-mono">00:00 / 02:18</span>
                    <div className="flex-1 h-1.5 bg-white/20 rounded-full overflow-hidden">
                      <div className="w-1/3 h-full bg-[#E8632C] rounded-full" />
                    </div>
                    <span className="text-[10px] bg-[#E8632C] text-white px-1.5 py-0.5 rounded font-bold uppercase">HD</span>
                  </div>

                </div>

              </div>
            </div>

          </div>

        </div>

      </div>

      {/* Video Modal Simulation */}
      {isPlaying && (
        <div
          id="vsl-modal"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 animate-in fade-in duration-200"
          onClick={() => setIsPlaying(false)}
        >
          <div
            className="bg-stone-900 border border-stone-700 rounded-2xl max-w-3xl w-full p-4 sm:p-6 text-white relative shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 border-b border-stone-800">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#E8632C]" />
                <h4 className="font-bold text-sm sm:text-base">Apresentação: Robótica Sem Telas</h4>
              </div>
              <button
                onClick={() => setIsPlaying(false)}
                className="p-1 rounded-full hover:bg-stone-800 text-stone-400 hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="mt-4 aspect-video rounded-xl overflow-hidden bg-black relative flex items-center justify-center">
              <img
                src="https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=1200&q=80"
                alt="Demonstração em vídeo de robótica infantil"
                className="w-full h-full object-cover opacity-85"
              />
              <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center p-6 space-y-3">
                <div className="w-16 h-16 rounded-full bg-[#E8632C] text-white flex items-center justify-center shadow-lg">
                  <Play className="w-8 h-8 fill-white translate-x-0.5" />
                </div>
                <h5 className="font-serif text-xl sm:text-2xl font-bold text-white">
                  Desperte a Criatividade das Crianças
                </h5>
                <p className="text-stone-300 text-xs sm:text-sm max-w-md">
                  Mais de 100 projetos práticos passo a passo em PDF para construir com materiais simples que você já tem em casa.
                </p>
                <button
                  onClick={() => {
                    setIsPlaying(false);
                    onCtaClick();
                  }}
                  className="bg-[#E8632C] hover:bg-[#C94E1B] text-white text-sm font-bold py-2.5 px-6 rounded-full shadow-md cursor-pointer transition-all"
                >
                  Quero Garantir Meu Acesso por R$ 47,00
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
