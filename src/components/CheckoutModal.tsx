import React, { useState } from 'react';
import {
  X,
  Lock,
  QrCode,
  CreditCard,
  CheckCircle,
  Copy,
  Download,
  Sparkles,
  ShieldCheck,
  FileText,
  Clock,
} from 'lucide-react';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  plan?: 'basic' | 'complete';
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({ isOpen, onClose, plan = 'complete' }) => {
  const [paymentMethod, setPaymentMethod] = useState<'pix' | 'card'>('pix');
  const [copied, setCopied] = useState(false);
  const [step, setStep] = useState<'form' | 'success'>('form');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [downloadStarted, setDownloadStarted] = useState(false);

  if (!isOpen) return null;

  const isBasic = plan === 'basic';
  const priceFormatted = isBasic ? 'R$ 17,00' : 'R$ 29,00';

  const pixCode =
    '00020126580014br.gov.bcb.pix0136robotica-sem-telas-pdf-2026520400005303986540547.005802BR5923Robotica Educacional6009Sao Paulo62070503***6304E8A2';

  const handleCopyPix = () => {
    navigator.clipboard?.writeText?.(pixCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const handleSimulatePayment = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('success');
  };

  return (
    <div
      id="checkout-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-sm p-4 overflow-y-auto"
      onClick={onClose}
    >
      <div
        id="checkout-modal-card"
        className="bg-white text-[#1A1A1A] rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-stone-200 relative my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-stone-400 hover:text-stone-700 rounded-full hover:bg-stone-100 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {step === 'form' ? (
          <div className="space-y-6">
            {/* Modal Header */}
            <div>
              <div className="flex items-center gap-2 text-xs font-bold text-[#E8632C] uppercase tracking-wider mb-1">
                <Sparkles className="w-4 h-4" />
                <span>Download Digital Instantâneo</span>
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#1A1A1A]">
                {isBasic ? 'Finalize seu Acesso ao Pacote Básico' : 'Finalize seu Acesso ao Pacote Completo'}
              </h3>
              <p className="text-stone-600 text-xs sm:text-sm mt-1">
                {isBasic
                  ? 'Acesso imediato aos +100 projetos em PDF de alta resolução.'
                  : 'Acesso vitalício aos +100 projetos em PDF + 3 Bônus Exclusivos.'}
              </p>
            </div>

            {/* Price Badge */}
            <div className="bg-orange-50 border border-orange-200 rounded-2xl p-4 flex items-center justify-between">
              <div>
                <p className="text-xs text-stone-500 font-medium line-through">
                  {isBasic ? 'De R$ 67,00' : 'De R$ 238,00'}
                </p>
                <p className="text-lg font-bold text-[#E8632C]">
                  Por apenas {priceFormatted}
                </p>
              </div>
              <span className="bg-[#8BC34A] text-stone-900 text-xs font-bold px-3 py-1 rounded-full">
                {isBasic ? 'PLANO BÁSICO' : 'ECONOMIA DE R$ 209,00'}
              </span>
            </div>

            {/* Payment Method Selector */}
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setPaymentMethod('pix')}
                className={`flex items-center justify-center gap-2 p-3 rounded-xl border text-sm font-bold transition-all cursor-pointer ${
                  paymentMethod === 'pix'
                    ? 'border-[#E8632C] bg-orange-50 text-[#E8632C] shadow-xs'
                    : 'border-stone-200 text-stone-600 hover:bg-stone-50'
                }`}
              >
                <QrCode className="w-4 h-4" />
                <span>PIX (Liberação Imediata)</span>
              </button>

              <button
                type="button"
                onClick={() => setPaymentMethod('card')}
                className={`flex items-center justify-center gap-2 p-3 rounded-xl border text-sm font-bold transition-all cursor-pointer ${
                  paymentMethod === 'card'
                    ? 'border-[#E8632C] bg-orange-50 text-[#E8632C] shadow-xs'
                    : 'border-stone-200 text-stone-600 hover:bg-stone-50'
                }`}
              >
                <CreditCard className="w-4 h-4" />
                <span>Cartão de Crédito</span>
              </button>
            </div>

            {/* Checkout Form */}
            <form onSubmit={handleSimulatePayment} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-stone-700 mb-1">
                  Seu Nome Completo:
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ex: Ana Maria Silva"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-stone-300 focus:outline-none focus:border-[#E8632C] text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-stone-700 mb-1">
                  Seu Melhor E-mail (Onde você receberá os PDFs):
                </label>
                <input
                  type="email"
                  required
                  placeholder="seuemail@exemplo.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-stone-300 focus:outline-none focus:border-[#E8632C] text-sm"
                />
              </div>

              {paymentMethod === 'pix' ? (
                <div className="bg-stone-50 border border-stone-200 rounded-xl p-4 text-center space-y-3">
                  <div className="w-36 h-36 mx-auto bg-white border border-stone-300 rounded-xl flex items-center justify-center p-2 shadow-xs">
                    <QrCode className="w-full h-full text-stone-800" />
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <button
                      type="button"
                      onClick={handleCopyPix}
                      className="inline-flex items-center gap-1.5 text-xs font-bold bg-stone-200 hover:bg-stone-300 text-stone-800 py-1.5 px-3 rounded-lg transition-colors cursor-pointer"
                    >
                      <Copy className="w-3.5 h-3.5" />
                      {copied ? 'Código Pix Copiado!' : 'Copiar Chave Pix'}
                    </button>
                  </div>
                  <p className="text-[11px] text-stone-500">
                    Abra o app do seu banco e selecione "Pagar via Pix".
                  </p>
                </div>
              ) : (
                <div className="space-y-3 bg-stone-50 border border-stone-200 rounded-xl p-4">
                  <div>
                    <label className="block text-xs font-bold text-stone-700 mb-1">
                      Número do Cartão:
                    </label>
                    <input
                      type="text"
                      placeholder="0000 0000 0000 0000"
                      className="w-full px-3 py-2 rounded-lg border border-stone-300 text-sm"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="block text-xs font-bold text-stone-700 mb-1">Validade:</label>
                      <input
                        type="text"
                        placeholder="MM/AA"
                        className="w-full px-3 py-2 rounded-lg border border-stone-300 text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-stone-700 mb-1">CVV:</label>
                      <input
                        type="text"
                        placeholder="123"
                        className="w-full px-3 py-2 rounded-lg border border-stone-300 text-sm"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Submit CTA */}
              <button
                type="submit"
                className="w-full bg-[#E8632C] hover:bg-[#C94E1B] text-white font-bold py-3.5 px-6 rounded-full shadow-lg shadow-orange-600/30 text-base transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <Lock className="w-4 h-4" />
                <span>CONFIRMAR PEDIDO E BAIXAR ({priceFormatted})</span>
              </button>

              <div className="flex items-center justify-center gap-2 text-xs text-stone-500 pt-1">
                <ShieldCheck className="w-4 h-4 text-[#8BC34A]" />
                <span>Ambiente Seguro com Criptografia 256-bit</span>
              </div>
            </form>
          </div>
        ) : (
          /* Payment Success State */
          <div className="text-center space-y-5 py-4">
            <div className="w-16 h-16 bg-lime-100 text-[#8BC34A] rounded-full mx-auto flex items-center justify-center">
              <CheckCircle className="w-10 h-10" />
            </div>

            <div>
              <h3 className="font-serif text-2xl font-bold text-[#1A1A1A]">
                Parabéns, {name || 'Construtor(a)'}!
              </h3>
              <p className="text-stone-600 text-sm mt-1">
                Seu acesso ao <strong>Robótica Sem Telas</strong> foi liberado com sucesso.
              </p>
            </div>

            <div className="bg-stone-50 border border-stone-200 rounded-2xl p-4 text-left space-y-2 text-xs text-stone-700">
              <p className="flex items-center gap-2">
                <FileText className="w-4 h-4 text-[#E8632C]" />
                <span>Pacote Principal: 100+ Projetos de Robótica (PDF)</span>
              </p>
              <p className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#8BC34A]" />
                <span>Bônus 1: Desafio 21 Dias Sem Telas</span>
              </p>
              <p className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#8BC34A]" />
                <span>Bônus 2: Diário de Bordo do Pequeno Cientista</span>
              </p>
              <p className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#8BC34A]" />
                <span>Bônus 3: Certificados de Mestre Construtor</span>
              </p>
            </div>

            <div className="pt-2 space-y-3">
              <button
                onClick={() => {
                  setDownloadStarted(true);
                }}
                className="w-full bg-[#8BC34A] hover:bg-lime-600 text-stone-950 font-extrabold py-3.5 px-6 rounded-full shadow-md text-base transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <Download className="w-5 h-5" />
                <span>{downloadStarted ? 'DOWNLOAD INICIADO!' : 'BAIXAR PACOTE DE PROJETOS AGORA'}</span>
              </button>

              {downloadStarted && (
                <div className="bg-lime-50 border border-lime-200 text-lime-800 rounded-xl p-2.5 text-xs text-center font-medium animate-fadeIn">
                  ✓ Download do arquivo PDF iniciado! Verifique sua pasta de downloads.
                </div>
              )}

              <p className="text-[11px] text-stone-500">
                Uma cópia de segurança também foi enviada para <strong>{email || 'seu e-mail'}</strong>.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
