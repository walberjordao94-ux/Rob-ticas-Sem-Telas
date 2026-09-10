import React from 'react';
import { Star, CheckCircle2, ShieldCheck, ArrowRight } from 'lucide-react';

interface HeroProps {
  onCtaClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onCtaClick }) => {
  return (
    <section id="hero-section" className="relative bg-[#F9F6F0] pt-8 pb-12 md:pt-12 md:pb-16 overflow-hidden">
      {/* Subtle decorative background glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-orange-200/40 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-amber-100/60 rounded-full blur-2xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Copy & Value Proposition */}
          <div className="lg:col-span-7 space-y-6 flex flex-col items-center text-center lg:items-center lg:text-center">
            
            {/* Eyebrow */}
            <div className="flex items-center justify-center gap-2">
              <span className="text-[#E8632C] font-extrabold text-xs sm:text-sm tracking-widest uppercase">
                MAIS DE 100 PROJETOS DE ROBÓTICA PARA CRIANÇAS
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-bold leading-[1.14] text-[#1A1A1A] tracking-tight text-center">
              Mantenha seus filhos<br className="hidden sm:inline" />{' '}
              <span className="italic text-[#E8632C] font-serif">
                longe das telas
              </span>{' '}
              com robótica!
            </h1>

            {/* Subtitle / Paragraph */}
            <p className="font-sans text-gray-500 font-light text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl text-center mx-auto">
              Diversão que <strong className="font-bold text-gray-800">realmente ensina</strong>. Com materiais simples do dia a dia e guias em PDF passo a passo, seu filho aprende, brinca e cresce, longe das telas.
            </p>

            {/* Social Proof Badges: Overlapping Colorful Initial Avatars + Gold Stars + Text */}
            <div className="flex flex-wrap items-center justify-center gap-4 pt-1">
              {/* 4 Customer Avatars Overlapping */}
              <div className="flex items-center -space-x-2">
                <img
                  src="https://i.postimg.cc/fyGnJ6rf/c0ef4a91-eab3-4d04-bc89-ca1807e95061.jpg"
                  alt="Cliente Robótica Sem Telas"
                  className="w-8 h-8 rounded-full object-cover border-2 border-white shadow-xs"
                  referrerPolicy="no-referrer"
                />
                <img
                  src="https://i.postimg.cc/Pfg5LcYk/5dbbe890-58eb-45b1-949a-039ebf93cf8e.jpg"
                  alt="Cliente Robótica Sem Telas"
                  className="w-8 h-8 rounded-full object-cover border-2 border-white shadow-xs"
                  referrerPolicy="no-referrer"
                />
                <img
                  src="https://i.postimg.cc/Yqj9Ynj6/02a6ddf5-7d02-4d4c-a60b-89ff2c525d58.jpg"
                  alt="Cliente Robótica Sem Telas"
                  className="w-8 h-8 rounded-full object-cover border-2 border-white shadow-xs"
                  referrerPolicy="no-referrer"
                />
                <img
                  src="https://i.postimg.cc/m2qrwYHh/e3e846d1-918e-4ac2-aaf6-d892e7d7262a-(1).jpg"
                  alt="Cliente Robótica Sem Telas"
                  className="w-8 h-8 rounded-full object-cover border-2 border-white shadow-xs"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Stars & Text Rating */}
              <div className="flex flex-col items-center sm:items-start justify-center text-center sm:text-left">
                <div className="flex items-center justify-center gap-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="text-xs sm:text-sm text-stone-700 font-medium pt-0.5">
                  <strong className="font-bold text-stone-900">Mais de 2.000 famílias</strong> já estão construindo juntas.
                </span>
              </div>
            </div>

            {/* Grid of 6 Checkmark Bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 pt-2 w-full max-w-xl mx-auto text-left">
              <div className="flex items-center gap-2.5 bg-white/70 backdrop-blur-xs p-2.5 rounded-xl border border-stone-200/80 shadow-xs">
                <CheckCircle2 className="w-5 h-5 text-[#8BC34A] shrink-0" />
                <span className="text-sm font-medium text-[#1A1A1A]">Mais de 100 projetos de robótica</span>
              </div>
              <div className="flex items-center gap-2.5 bg-white/70 backdrop-blur-xs p-2.5 rounded-xl border border-stone-200/80 shadow-xs">
                <CheckCircle2 className="w-5 h-5 text-[#8BC34A] shrink-0" />
                <span className="text-sm font-medium text-[#1A1A1A]">Materiais simples do dia a dia</span>
              </div>
              <div className="flex items-center gap-2.5 bg-white/70 backdrop-blur-xs p-2.5 rounded-xl border border-stone-200/80 shadow-xs">
                <CheckCircle2 className="w-5 h-5 text-[#8BC34A] shrink-0" />
                <span className="text-sm font-medium text-[#1A1A1A]">Guias em PDF passo a passo</span>
              </div>
              <div className="flex items-center gap-2.5 bg-white/70 backdrop-blur-xs p-2.5 rounded-xl border border-stone-200/80 shadow-xs">
                <CheckCircle2 className="w-5 h-5 text-[#8BC34A] shrink-0" />
                <span className="text-sm font-medium text-[#1A1A1A]">Não é necessária experiência prévia.</span>
              </div>
              <div className="flex items-center gap-2.5 bg-white/70 backdrop-blur-xs p-2.5 rounded-xl border border-stone-200/80 shadow-xs">
                <CheckCircle2 className="w-5 h-5 text-[#8BC34A] shrink-0" />
                <span className="text-sm font-medium text-[#1A1A1A]">Ideal para crianças de 4 a 12 anos.</span>
              </div>
              <div className="flex items-center gap-2.5 bg-white/70 backdrop-blur-xs p-2.5 rounded-xl border border-stone-200/80 shadow-xs">
                <CheckCircle2 className="w-5 h-5 text-[#8BC34A] shrink-0" />
                <span className="text-sm font-medium text-[#1A1A1A]">Download digital instantâneo</span>
              </div>
            </div>

            {/* CTA Button & Security Guarantee */}
            <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
              <button
                id="hero-cta-button"
                onClick={onCtaClick}
                className="group inline-flex items-center justify-center gap-3 bg-[#E8632C] hover:bg-[#C94E1B] text-white text-base sm:text-lg font-bold py-4 px-8 rounded-full shadow-lg shadow-orange-600/30 hover:shadow-xl hover:shadow-orange-600/40 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
              >
                <span>QUERO MEUS FILHOS CONSTRUINDO</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <div className="flex items-center justify-center gap-2 text-xs text-stone-600">
                <ShieldCheck className="w-4 h-4 text-[#8BC34A]" />
                <span>Garantia de 7 dias ou seu dinheiro de volta</span>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual */}
          <div className="lg:col-span-5 relative">
            {/* Visual Container */}
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer card frame with rounded corners & shadow */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-stone-900 aspect-4/3 sm:aspect-square">
                <img
                  src="https://i.postimg.cc/nVBNXspg/Chat-GPT-Image-31-de-ago-de-2026-15-08-59.png"
                  alt="Crianças felizes montando projetos e robôs de sucata em família"
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                  loading="eager"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
