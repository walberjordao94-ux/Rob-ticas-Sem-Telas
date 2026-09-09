import React from 'react';
import { HOW_IT_WORKS_STEPS } from '../data/landingData';
import { Download, Box, Sparkles } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const getStepIcon = (iconName: string) => {
    switch (iconName) {
      case 'Download':
        return <Download className="w-6 h-6 text-white" />;
      case 'Box':
        return <Box className="w-6 h-6 text-white" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-white" />;
      default:
        return <Sparkles className="w-6 h-6 text-white" />;
    }
  };

  return (
    <section id="how-it-works" className="bg-[#F3EEE4] pt-10 md:pt-14 pb-10 md:pb-14 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10 md:mb-12">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#1A1A1A] leading-tight tracking-tight">
            Como funciona na prática?
          </h2>

          <p className="text-stone-700 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            Sem processos burocráticos ou kits caros. Em menos de 5 minutos você e seus filhos já podem iniciar o primeiro projeto.
          </p>
        </div>

        {/* 3 Numbered Steps with Dashed Connector */}
        <div className="relative">
          
          {/* Dashed Connecting Line (visible on desktop) */}
          <div className="hidden md:block absolute top-16 left-1/6 right-1/6 h-0.5 border-t-2 border-dashed border-[#E8632C]/40 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
            {HOW_IT_WORKS_STEPS.map((step) => (
              <div
                key={step.number}
                id={`step-${step.number}`}
                className="bg-white rounded-2xl p-7 shadow-md border border-stone-200/80 flex flex-col items-center text-center hover:shadow-xl transition-shadow relative"
              >
                {/* Numbered Orange Circle Icon */}
                <div className="relative mb-5">
                  <div className="w-16 h-16 rounded-full bg-[#E8632C] flex items-center justify-center shadow-lg shadow-orange-600/30">
                    {getStepIcon(step.iconName)}
                  </div>
                  {/* Step Badge */}
                  <span className="absolute -bottom-2 -right-1 bg-stone-900 text-white text-[11px] font-extrabold px-2 py-0.5 rounded-full border-2 border-white">
                    0{step.number}
                  </span>
                </div>

                <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#1A1A1A] mb-3">
                  {step.title}
                </h3>

                <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
