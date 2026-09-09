import React from 'react';
import { Clock, Zap } from 'lucide-react';
import { useCountdown } from '../hooks/useCountdown';

export const UrgencyBar: React.FC = () => {
  const { formattedMinutes, formattedSeconds } = useCountdown();

  return (
    <div
      id="urgency-banner"
      className="bg-[#111111] text-white py-2 px-4 text-xs sm:text-sm font-semibold tracking-wide border-b border-stone-800 sticky top-0 z-40"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-2.5 sm:gap-3 text-center">
        <span className="inline-flex items-center gap-1.5 text-white font-bold uppercase tracking-wider text-xs sm:text-sm">
          <Zap className="w-3.5 h-3.5 text-[#E8632C] fill-[#E8632C]" />
          <span>Oferta por tempo limitado</span>
        </span>

        <div className="flex items-center gap-1.5 text-white bg-stone-800/90 border border-stone-700 px-2.5 py-0.5 rounded-full text-xs font-mono font-bold">
          <Clock className="w-3.5 h-3.5 text-[#E8632C] animate-pulse" />
          <span>
            {formattedMinutes}:{formattedSeconds}
          </span>
        </div>
      </div>
    </div>
  );
};
