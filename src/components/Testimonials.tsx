import React, { useState, useEffect, useRef, useCallback } from 'react';
import { TESTIMONIAL_PRINTS } from '../data/landingData';
import { Star, ChevronLeft, ChevronRight, ZoomIn, X, ShieldCheck } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchEndX, setTouchEndX] = useState<number | null>(null);
  const totalSlides = TESTIMONIAL_PRINTS.length;

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  }, [totalSlides]);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  }, [totalSlides]);

  // Handle ESC key to close lightbox modal & arrow keys to navigate
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedImage(null);
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handlePrev, handleNext]);

  // Touch swipe support for mobile devices
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.targetTouches[0].clientX);
    setTouchEndX(null);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEndX(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStartX || !touchEndX) return;
    const distance = touchStartX - touchEndX;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      handleNext();
    } else if (isRightSwipe) {
      handlePrev();
    }
  };

  return (
    <section id="testimonials-section" className="bg-[#F3EEE4] pt-10 md:pt-14 pb-10 md:pb-14 border-t border-stone-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10 md:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-100/90 border border-orange-200/80 text-[#E8632C] text-xs sm:text-sm font-semibold shadow-2xs">
            <ShieldCheck className="w-4 h-4 text-[#E8632C]" />
            <span>Relatos e Prints Reais</span>
            <div className="flex items-center ml-1 text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              ))}
            </div>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#1A1A1A] leading-tight tracking-tight">
            O que outros pais e mães estão dizendo
          </h2>

          <p className="text-stone-700 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            Prints e mensagens reais enviadas por famílias que trocaram o estresse das telas pelo orgulho de construir robôs juntos.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-5xl mx-auto">
          {/* Outer track with overflow hidden and touch handlers */}
          <div 
            id="testimonial-carousel-track"
            className="overflow-hidden px-1 sm:px-4 py-2"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {TESTIMONIAL_PRINTS.map((print, index) => (
                <div
                  key={print.id}
                  id={`testimonial-slide-${index}`}
                  className="w-full shrink-0 px-2 sm:px-4"
                >
                  <div className="bg-white rounded-3xl p-3 sm:p-5 shadow-lg border border-stone-200/90 max-w-xl mx-auto group hover:shadow-xl transition-all duration-300">
                    {/* Image frame */}
                    <div 
                      onClick={() => setSelectedImage(print.image)}
                      className="relative rounded-2xl overflow-hidden cursor-zoom-in bg-stone-100 border border-stone-100 flex items-center justify-center max-h-[580px]"
                      title="Clique para ampliar o print"
                    >
                      <img
                        src={print.image}
                        alt={print.alt}
                        className="w-full h-auto max-h-[580px] object-contain object-center rounded-2xl transition-transform duration-300 group-hover:scale-[1.01]"
                        loading={index === 0 ? 'eager' : 'lazy'}
                        referrerPolicy="no-referrer"
                      />
                      
                      {/* Hover / tap overlay hint */}
                      <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center pointer-events-none">
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/95 text-stone-900 text-xs sm:text-sm font-semibold shadow-lg backdrop-blur-xs">
                          <ZoomIn className="w-4 h-4 text-[#E8632C]" />
                          Clique para ampliar
                        </span>
                      </div>
                    </div>

                    {/* Footer caption & verification */}
                    <div className="pt-3 sm:pt-4 px-2 flex items-center justify-between gap-3 text-xs sm:text-sm">
                      <p className="text-stone-600 font-medium line-clamp-1">
                        {print.caption}
                      </p>
                      <span className="inline-flex items-center gap-1 text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full text-xs font-semibold shrink-0">
                        <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                        Verificado
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Prev Button */}
          <button
            type="button"
            id="testimonial-prev-button"
            onClick={handlePrev}
            aria-label="Depoimento anterior"
            className="absolute left-0 sm:-left-5 top-1/2 -translate-y-1/2 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/95 hover:bg-white text-stone-800 hover:text-[#E8632C] shadow-lg border border-stone-200 flex items-center justify-center transition-all duration-200 z-10 active:scale-95 focus:outline-hidden focus:ring-2 focus:ring-[#E8632C]"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Navigation Next Button */}
          <button
            type="button"
            id="testimonial-next-button"
            onClick={handleNext}
            aria-label="Próximo depoimento"
            className="absolute right-0 sm:-right-5 top-1/2 -translate-y-1/2 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/95 hover:bg-white text-stone-800 hover:text-[#E8632C] shadow-lg border border-stone-200 flex items-center justify-center transition-all duration-200 z-10 active:scale-95 focus:outline-hidden focus:ring-2 focus:ring-[#E8632C]"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Indicators & Counter */}
          <div className="flex flex-col items-center justify-center gap-2 mt-6">
            <div className="flex items-center gap-2">
              {TESTIMONIAL_PRINTS.map((_, index) => (
                <button
                  key={index}
                  id={`testimonial-dot-${index}`}
                  onClick={() => setCurrentIndex(index)}
                  aria-label={`Ir para o depoimento ${index + 1}`}
                  className={`transition-all duration-300 rounded-full ${
                    currentIndex === index
                      ? 'w-8 h-2.5 bg-[#E8632C]'
                      : 'w-2.5 h-2.5 bg-stone-300 hover:bg-stone-400'
                  }`}
                />
              ))}
            </div>
            <span className="text-xs text-stone-500 font-medium">
              {currentIndex + 1} de {totalSlides} prints reais
            </span>
          </div>
        </div>

        {/* Lightbox / Zoom Modal */}
        {selectedImage && (
          <div 
            id="testimonial-lightbox-modal"
            role="dialog"
            aria-modal="true"
            className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
            onClick={() => setSelectedImage(null)}
          >
            <div 
              className="relative max-w-3xl w-full max-h-[92vh] flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                type="button"
                id="testimonial-lightbox-close-button"
                onClick={() => setSelectedImage(null)}
                aria-label="Fechar visualização"
                className="absolute -top-12 right-0 sm:-right-4 text-white hover:text-stone-300 bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors focus:outline-hidden"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Expanded Image */}
              <div className="bg-white rounded-2xl overflow-hidden p-2 sm:p-3 shadow-2xl max-h-[85vh] overflow-y-auto">
                <img
                  src={selectedImage}
                  alt="Depoimento ampliado"
                  className="w-auto h-auto max-h-[80vh] max-w-full object-contain rounded-xl mx-auto"
                  referrerPolicy="no-referrer"
                />
              </div>

              <p className="text-stone-300 text-xs sm:text-sm mt-3 text-center">
                Pressione <kbd className="px-1.5 py-0.5 rounded bg-stone-800 text-stone-200 text-xs border border-stone-700">ESC</kbd> ou clique fora para fechar
              </p>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
