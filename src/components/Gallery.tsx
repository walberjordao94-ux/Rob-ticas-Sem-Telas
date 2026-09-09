import React from 'react';
import { PROJECTS_GALLERY } from '../data/landingData';
import { Clock, Layers, Sparkles, CheckCircle2 } from 'lucide-react';

export const Gallery: React.FC = () => {
  return (
    <section id="projects-gallery" className="bg-[#F3EEE4] pb-16 md:pb-24 pt-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2">
            <span className="text-[#E8632C] font-extrabold text-xs tracking-widest uppercase bg-orange-100 px-3.5 py-1.5 rounded-full border border-orange-200/60">
              PROJETOS REAIS E DIVERTIDOS
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#1A1A1A] leading-tight tracking-tight">
            Uma prévia do que vocês vão construir juntos
          </h2>

          <p className="text-stone-700 text-base sm:text-lg leading-relaxed">
            São mais de 100 criações categorizadas para todas as idades e níveis de curiosidade.
          </p>
        </div>

        {/* 4 Cards Grid / Horizontal Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROJECTS_GALLERY.map((project) => (
            <div
              key={project.id}
              id={`project-card-${project.id}`}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1.5 flex flex-col border border-stone-200"
            >
              {/* Photo */}
              <div className="relative h-48 w-full overflow-hidden bg-stone-900 group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                
                {/* Difficulty tag */}
                <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-xs text-white text-[11px] font-bold px-2.5 py-1 rounded-full flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-[#8BC34A]" />
                  <span>{project.difficulty}</span>
                </div>

                {/* Time badge */}
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-xs text-stone-800 text-[11px] font-bold px-2 py-1 rounded-full flex items-center gap-1 shadow-xs">
                  <Clock className="w-3 h-3 text-[#E8632C]" />
                  <span>{project.timeToBuild}</span>
                </div>
              </div>

              {/* Body */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                <div>
                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#E8632C]">
                    {project.category}
                  </span>
                  <h3 className="font-serif text-lg font-bold text-[#1A1A1A] mt-1 leading-snug">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-stone-600 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                </div>

                {/* Materials Tags */}
                <div className="pt-2 border-t border-stone-100 flex flex-wrap gap-1.5">
                  {project.materials.map((mat, i) => (
                    <span
                      key={i}
                      className="text-[10px] bg-stone-100 text-stone-700 font-medium px-2 py-0.5 rounded-md"
                    >
                      {mat}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Callout */}
        <div className="mt-10 bg-white/80 border border-orange-200 rounded-2xl p-5 text-center max-w-2xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-3">
          <div className="w-10 h-10 rounded-full bg-orange-100 text-[#E8632C] flex items-center justify-center shrink-0">
            <CheckCircle2 className="w-5 h-5" />
          </div>
          <p className="text-sm font-medium text-stone-800">
            E isso é só uma pequena amostra! O pacote completo possui <strong>mais de 100 projetos catalogados</strong> em PDF.
          </p>
        </div>

      </div>
    </section>
  );
};
