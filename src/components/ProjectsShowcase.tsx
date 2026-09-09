import React from 'react';
import { Check } from 'lucide-react';

const CHECKLIST_ITEMS = [
  'Veículos e robôs em movimento construídos do zero',
  'Instruções ilustradas passo a passo',
  'Níveis de dificuldade: fácil, médio e desafiador',
  'Habilidades STEM: engenharia, lógica e criatividade',
  'Novos projetos adicionados regularmente',
];

const REQUIRED_MATERIALS = [
  { emoji: '📦', name: 'Papelão' },
  { emoji: '🧴', name: 'Garrafas' },
  { emoji: '✂️', name: 'Tesoura' },
  { emoji: '🖊️', name: 'Marcadores' },
  { emoji: '🧻', name: 'Fita' },
  { emoji: '🔘', name: 'Tampas de garrafa' },
];

export const ProjectsShowcase: React.FC = () => {
  return (
    <section id="projects-showcase-section" className="bg-[#F3EEE4] pt-10 md:pt-14 pb-8 md:pb-10 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Block: 2 Columns (Image Left, Content Right) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-14 items-center">
          
          {/* Left Column: Image with Organic Craft Backdrop */}
          <div className="md:col-span-6 relative flex justify-center">
            {/* Workshop / Cardboard Organic Shape Backdrop */}
            <div 
              aria-hidden="true" 
              className="absolute -inset-4 sm:-inset-6 bg-[#E5D7C2] rounded-[2.5rem] -rotate-2 transform transition-transform duration-500 pointer-events-none border border-[#DAC8AF]"
            />
            <div 
              aria-hidden="true" 
              className="absolute -inset-2 bg-[#ECDDC7]/80 rounded-[2rem] rotate-1 transform pointer-events-none"
            />

            {/* Main Showcase Image */}
            <div className="relative z-10 w-full max-w-lg aspect-[4/3] sm:aspect-[4/3] rounded-2xl overflow-hidden shadow-xl border-2 border-[#E2D2BC] bg-[#2A231B]">
              <img
                src="https://i.postimg.cc/259XBHdk/Gemini-Generated-Image-9u71ca9u71ca9u71-(1).jpg"
                alt="Crianças felizes montando projetos e robôs sem telas"
                className="w-full h-full object-cover object-center"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              {/* Subtle light vignette for natural look */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>

          {/* Right Column: Text & Checklist Content */}
          <div className="md:col-span-6 space-y-7 relative">
            {/* Subtle decorative workshop background mark */}
            <div 
              aria-hidden="true" 
              className="absolute -top-10 -right-4 w-36 h-36 opacity-10 pointer-events-none text-[#7A4B23]"
            >
              <svg viewBox="0 0 100 100" fill="currentColor">
                <path d="M50 35a15 15 0 1 0 0 30 15 15 0 0 0 0-30zm0-25a7.5 7.5 0 0 1 7.5 7.5v2.85a30.2 30.2 0 0 1 10.98 4.55l2.02-2.02a7.5 7.5 0 0 1 10.6 10.6l-2.02 2.02A30.2 30.2 0 0 1 83.65 42.5h2.85a7.5 7.5 0 0 1 0 15h-2.85a30.2 30.2 0 0 1-4.55 10.98l2.02 2.02a7.5 7.5 0 0 1-10.6 10.6l-2.02-2.02a30.2 30.2 0 0 1-10.98 4.55v2.85a7.5 7.5 0 0 1-15 0v-2.85a30.2 30.2 0 0 1-10.98-4.55l-2.02 2.02a7.5 7.5 0 0 1-10.6-10.6l2.02-2.02A30.2 30.2 0 0 1 16.35 57.5h-2.85a7.5 7.5 0 0 1 0-15h2.85a30.2 30.2 0 0 1 4.55-10.98l-2.02-2.02a7.5 7.5 0 0 1 10.6-10.6l2.02 2.02A30.2 30.2 0 0 1 42.5 20.35v-2.85A7.5 7.5 0 0 1 50 10z"/>
              </svg>
            </div>

            <div>
              {/* Workshop Maker Tag */}
              <div className="inline-flex items-center gap-2 bg-[#E7DAC7]/75 border border-[#D8C7B0] text-[#7A4B23] px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-bold tracking-wide mb-4 shadow-xs">
                <span className="text-base" role="img" aria-label="ferramentas">🛠️</span>
                <span>Projetos Práticos Passo a Passo</span>
              </div>

              {/* Headline with Strong Visual Presence & Organic Accent */}
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-[3.15rem] font-black text-[#141210] leading-[1.1] tracking-tight max-w-[17ch]">
                Mais de{' '}
                <span className="relative inline-block">
                  <span className="relative z-10 text-[#D8521E]">100 projetos</span>
                  {/* Organic hand-drawn brush stroke underline */}
                  <svg
                    className="absolute -bottom-2 sm:-bottom-3 left-0 w-full h-3 sm:h-4 text-[#E8632C]/40 -z-0 pointer-events-none"
                    viewBox="0 0 250 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M3 14C55 4 150 2 247 11C180 18 80 16 12 17"
                      stroke="currentColor"
                      strokeWidth="6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>{' '}
                que realmente funcionam
              </h2>
              
              {/* Refined Subtext with Breathing Room & Optimal Contrast */}
              <p className="mt-6 sm:mt-7 text-stone-700 text-base sm:text-lg md:text-[1.125rem] leading-relaxed max-w-lg font-normal">
                Cada projeto é testado, ilustrado e escrito em linguagem simples que seu filho pode acompanhar, ou fazer junto com você.
              </p>
            </div>

            {/* 5 Checkmarks */}
            <ul className="space-y-3.5 pt-1">
              {CHECKLIST_ITEMS.map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-[#2D2A26] text-sm sm:text-base font-medium">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#E8632C] text-white flex items-center justify-center shrink-0 mt-0.5 shadow-sm shadow-orange-600/20">
                    <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[3]" />
                  </div>
                  <span className="leading-snug pt-0.5">{item}</span>
                </li>
              ))}
            </ul>

            {/* Closing Highlight Sentence */}
            <div className="pt-1">
              <div className="bg-[#EAE0D0]/85 border border-[#DAC8AF] rounded-xl px-4 py-3.5 text-stone-800 text-sm sm:text-base font-medium leading-relaxed shadow-xs">
                ✨ Perfeito para brincar sozinho ou para fortalecer os laços entre pais e filhos.
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Block: O que você vai precisar (Full-width) */}
        <div id="materials-summary-block" className="mt-8 sm:mt-10 pt-8 sm:pt-10 border-t border-[#DFD1BD]">
          <div className="text-center max-w-2xl mx-auto space-y-2 mb-10">
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#1A1A1A]">
              O que você vai precisar
            </h3>
            <p className="text-[#E8632C] font-bold text-base sm:text-lg">
              Apenas itens do dia a dia de casa
            </p>
            <p className="text-stone-600 text-sm sm:text-base">
              Sem kits de robótica. Sem peças caras. Apenas coisas que você já tem.
            </p>
          </div>

          {/* 6 Materials Grid (2 cols mobile, 6 cols desktop) */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3.5 sm:gap-4">
            {REQUIRED_MATERIALS.map((material, idx) => (
              <div
                key={idx}
                id={`material-card-${idx}`}
                className="bg-[#EAE1D1]/60 hover:bg-[#EAE1D1] border border-[#DDD0BC] rounded-xl p-4 sm:p-5 text-center flex flex-col items-center justify-center gap-2.5 transition-all duration-200 hover:-translate-y-1"
              >
                <span className="text-3xl sm:text-4xl filter drop-shadow-xs" role="img" aria-label={material.name}>
                  {material.emoji}
                </span>
                <span className="text-xs sm:text-sm font-bold text-[#2A241E] leading-tight">
                  {material.name}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
