import React from 'react';
import { MATERIALS_LIST } from '../data/landingData';
import {
  Package,
  Milk,
  Scissors,
  Palette,
  Sparkles,
  Disc,
  Zap,
  Layers,
  CheckCircle,
  XCircle,
} from 'lucide-react';

export const MaterialsNeeded: React.FC = () => {
  const getMaterialIcon = (icon: string) => {
    switch (icon) {
      case 'Package':
        return <Package className="w-5 h-5 text-amber-400" />;
      case 'Milk':
        return <Milk className="w-5 h-5 text-cyan-400" />;
      case 'Scissors':
        return <Scissors className="w-5 h-5 text-red-400" />;
      case 'Palette':
        return <Palette className="w-5 h-5 text-pink-400" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-yellow-400" />;
      case 'Disc':
        return <Disc className="w-5 h-5 text-orange-400" />;
      case 'Zap':
        return <Zap className="w-5 h-5 text-lime-400" />;
      case 'Layers':
        return <Layers className="w-5 h-5 text-purple-400" />;
      default:
        return <Package className="w-5 h-5 text-amber-400" />;
    }
  };

  return (
    <section id="materials-needed" className="bg-[#111111] text-white py-16 md:py-24 relative overflow-hidden">
      
      {/* Background soft ambient lights */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-lime-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Explanation of Zero Expensive Kits */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="inline-flex items-center gap-2">
              <span className="text-[#8BC34A] bg-[#8BC34A]/10 border border-[#8BC34A]/30 text-[11px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-full">
                100% ACESSÍVEL & SUSTENTÁVEL
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-white tracking-tight">
              O que você vai precisar para começar?
            </h2>

            <p className="text-stone-300 text-base sm:text-lg leading-relaxed">
              Você <strong className="text-white">NÃO precisa</strong> comprar kits caros de robótica de R$ 500, nem saber programação ou mexer com ferramentas perigosas.
            </p>

            {/* Comparison Box */}
            <div className="space-y-3 bg-stone-900/90 border border-stone-800 p-5 rounded-2xl">
              <div className="flex items-start gap-3 text-sm text-stone-300">
                <XCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                <span>Nada de peças caras importadas ou ferro de solda</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-stone-300">
                <XCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                <span>Nada de telas, códigos complexos ou softwares pesados</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-white font-medium">
                <CheckCircle className="w-5 h-5 text-[#8BC34A] shrink-0 mt-0.5" />
                <span>Apenas criatividade e itens que você já tem na despensa e recicláveis!</span>
              </div>
            </div>

          </div>

          {/* Right Column: Grid of Material Cards */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {MATERIALS_LIST.map((mat, idx) => (
                <div
                  key={idx}
                  className="bg-stone-900/80 hover:bg-stone-800/90 border border-stone-800 hover:border-orange-500/40 p-4.5 rounded-2xl transition-all duration-200 flex items-start gap-3.5 group"
                >
                  <div className="p-2.5 rounded-xl bg-stone-800 group-hover:bg-stone-700/80 border border-stone-700 shrink-0">
                    {getMaterialIcon(mat.icon)}
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-base group-hover:text-amber-200 transition-colors">
                      {mat.name}
                    </h3>
                    <p className="text-stone-400 text-xs sm:text-sm mt-1 leading-relaxed">
                      {mat.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
