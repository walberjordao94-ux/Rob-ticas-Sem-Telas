import React from 'react';

interface CarouselSlide {
  id: number;
  url: string;
  alt: string;
}

const CAROUSEL_SLIDES: CarouselSlide[] = [
  {
    id: 1,
    url: 'https://i.postimg.cc/nzmTj3ST/01.jpg',
    alt: 'Criança montando projeto prático de robótica sem telas - Passo 1',
  },
  {
    id: 2,
    url: 'https://i.postimg.cc/50zpYskc/02.jpg',
    alt: 'Montagem de robô com materiais simples do dia a dia - Passo 2',
  },
  {
    id: 3,
    url: 'https://i.postimg.cc/HxM3c6vf/03.jpg',
    alt: 'Criança testando mecanismo funcional de robótica - Passo 3',
  },
  {
    id: 4,
    url: 'https://i.postimg.cc/G2Dz8Xgf/04.webp',
    alt: 'Projeto de engenharia e robótica infantil concluído - Passo 4',
  },
  {
    id: 5,
    url: 'https://i.postimg.cc/B6FNLm7P/05.webp',
    alt: 'Diversão e aprendizado em família construindo robôs - Passo 5',
  },
];

export const ImageCarousel: React.FC = () => {
  // Duplicate the slides array to create a seamless infinite loop
  const duplicatedSlides = [...CAROUSEL_SLIDES, ...CAROUSEL_SLIDES];

  return (
    <section id="image-carousel-section" className="bg-[#F3EEE4] py-6 sm:py-8 relative overflow-hidden">
      {/* Infinite Marquee Conveyor Track */}
      <div 
        id="marquee-conveyor-container"
        className="w-full relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)] [-webkit-mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)] py-2"
      >
        <div className="animate-marquee flex items-center gap-4 sm:gap-6">
          {duplicatedSlides.map((slide, index) => (
            <div
              key={`${slide.id}-${index}`}
              id={`marquee-card-${slide.id}-${index}`}
              className="w-[280px] sm:w-[360px] md:w-[420px] aspect-[16/10] sm:aspect-[16/9] flex-shrink-0 bg-stone-900 rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg border border-stone-300/80 group"
            >
              <div className="relative w-full h-full overflow-hidden">
                <img
                  src={slide.url}
                  alt={slide.alt}
                  className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
                  loading={index === 0 ? 'eager' : 'lazy'}
                  referrerPolicy="no-referrer"
                />
                {/* Subtle gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10 pointer-events-none" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
