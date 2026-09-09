import React from 'react';
import { ShieldCheck, Lock, Heart, Mail, Sparkles } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer id="main-footer" className="bg-[#111111] text-stone-400 text-xs py-12 border-t border-stone-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Top Footer Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-stone-800 text-center md:text-left">
          
          <div className="space-y-1">
            <h3 className="font-serif text-lg font-bold text-white flex items-center justify-center md:justify-start gap-2">
              <Sparkles className="w-4 h-4 text-[#E8632C]" />
              Robótica Sem Telas
            </h3>
            <p className="text-stone-400 text-xs">
              Projetos práticos de robótica e STEM para transformar tempo ocioso em criatividade familiar.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 text-stone-300">
            <div className="flex items-center gap-1.5 bg-stone-900 px-3 py-1.5 rounded-lg border border-stone-800">
              <ShieldCheck className="w-4 h-4 text-[#8BC34A]" />
              <span>Garantia de 7 Dias</span>
            </div>
            <div className="flex items-center gap-1.5 bg-stone-900 px-3 py-1.5 rounded-lg border border-stone-800">
              <Lock className="w-4 h-4 text-[#8BC34A]" />
              <span>Pagamento 100% Seguro</span>
            </div>
          </div>

        </div>

        {/* Middle Disclaimer & Rights */}
        <div className="space-y-4 text-center text-stone-500 text-[11px] leading-relaxed max-w-3xl mx-auto">
          <p>
            <strong>Aviso Legal:</strong> Este produto não garante resultados financeiros ou profissionais futuros. Os resultados podem variar de acordo com o envolvimento da criança e dos pais. Todas as atividades devem ser supervisionadas por um adulto responsável.
          </p>
          <p>
            Dúvidas ou suporte? Entre em contato pelo e-mail: <span className="text-stone-300 font-semibold">suporte@robóticasemtelas.com.br</span>
          </p>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-4 border-t border-stone-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px]">
          <p>© {new Date().getFullYear()} Robótica Sem Telas. Todos os direitos reservados.</p>
          <p className="flex items-center gap-1.5 text-stone-400">
            Feito para pais e mães dedicados <Heart className="w-3 h-3 text-red-500 fill-red-500" />
          </p>
        </div>

      </div>
    </footer>
  );
};
