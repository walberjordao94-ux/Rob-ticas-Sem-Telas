import React from 'react';
import { PROBLEMS_DATA } from '../data/landingData';

export const ProblemSection: React.FC = () => {
  return (
    <section id="problem-section" className="bg-[#E8632C] text-white pt-10 md:pt-14 pb-8 md:pb-10 relative overflow-hidden">
      {/* Subtle geometric pattern overlay */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12 md:mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold leading-tight tracking-tight text-white">
            Isso lhe parece familiar?
          </h2>

          <p className="text-white/90 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            Você quer tirar seus filhos das telas e vê-los fazendo algo de verdade, mas parece que nada consegue prender a atenção deles por muito tempo.
          </p>
        </div>

        {/* 2x2 Cards Grid (1 column on mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {PROBLEMS_DATA.map((problem) => (
            <div
              key={problem.id}
              id={`problem-card-${problem.id}`}
              className="bg-white text-[#1A1A1A] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col border border-white/20"
            >
              {/* Photo on Top */}
              <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-stone-100">
                <img
                  src={problem.image}
                  alt={problem.imageAlt}
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                
                {/* Tag pill badge */}
                <div className="absolute top-3 left-3 bg-[#E8632C] text-white text-[11px] font-extrabold tracking-wider uppercase px-3 py-1 rounded-full shadow-sm">
                  {problem.tag}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-3">
                <div>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#1A1A1A] leading-snug">
                    {problem.title}
                  </h3>
                  <p className="mt-2.5 text-stone-600 text-sm sm:text-base leading-relaxed">
                    {problem.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
