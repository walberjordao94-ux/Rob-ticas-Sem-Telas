import React, { useState } from 'react';
import { FAQ_DATA } from '../data/landingData';
import { ChevronDown, HelpCircle, MessageCircleQuestion } from 'lucide-react';

export const FAQ: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const toggleFAQ = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq-section" className="bg-[#F3EEE4] pt-10 md:pt-14 pb-12 md:pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-3 mb-10 md:mb-12">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#1A1A1A] leading-tight tracking-tight">
            Perguntas Frequentes
          </h2>

          <p className="text-stone-700 text-base sm:text-lg max-w-xl mx-auto">
            Tudo o que você precisa saber antes de liberar o acesso para o seu filho.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQ_DATA.map((item) => {
            const isOpen四周 = openId === item.id;
            return (
              <div
                key={item.id}
                id={`faq-item-${item.id}`}
                className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-xs hover:border-orange-300 transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(item.id)}
                  aria-expanded={isOpen四周}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer"
                >
                  <span className="font-serif text-base sm:text-lg font-bold text-[#1A1A1A] pr-2">
                    {item.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen四周
                        ? 'bg-[#E8632C] text-white rotate-180'
                        : 'bg-stone-100 text-stone-600'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen四周 && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-stone-600 text-sm sm:text-base leading-relaxed border-t border-stone-100">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
