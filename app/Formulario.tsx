'use client';

import React, { useState } from 'react';
import { ShieldCheck, MessageCircle } from 'lucide-react';
import { siteConfig } from './config';

interface FormularioProps {
  // Agora o formulário recebe os dados do plano escolhido
  plan: {
    name: string;
    price: string;
    checkoutUrl: string;
  };
  onClose: () => void;
}

const sugestoesEstilo: Record<string, string[]> = {
  'Meu Amor (Namorado/a, Esposo/a)': ['Sertanejo Romântico', 'Pop Romântico', 'MPB Acústico', 'Pagode Romântico', 'R&B / Blues'],
  'Minha Família (Mãe, Pai, Filhos)': ['Sertanejo Raiz', 'MPB Emocionante', 'Gospel', 'Pop Leve', 'Samba Clássico'],
  'Um(a) Grande Amigo(a)': ['Pop Animado', 'Sertanejo Universitário', 'Pagode', 'Rock / Indie', 'Eletrônica Leve'],
  'Meu Pet 🐾': ['Pop Divertido', 'Folk Acústico', 'MPB Leve', 'Reggae Relax', 'Cantiga Fofa'],
};

export default function Formulario({ plan, onClose }: FormularioProps) {
  const [step, setStep] = useState(1);
  const [mostraOutro, setMostraOutro] = useState(false);
  const [formData, setFormData] = useState({
    relacao: '',
    nomeDe: '',
    nomePara: '',
    historia: '',
    estilo: '',
    whatsapp: ''
  });

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  const handleSubmit = () => {
    console.log(`Plano Escolhido: ${plan.name} (${plan.price})`);
    console.log("Dados do Cliente:", formData);
    nextStep();
  };

  const listaEstilosAtual = sugestoesEstilo[formData.relacao] || sugestoesEstilo['Meu Amor (Namorado/a, Esposo/a)'];

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-[#FFF9F2] text-[#4A151C] animate-in fade-in duration-300">
      
      <div className="flex items-center justify-between p-6 max-w-5xl mx-auto w-full">
        <div className="w-1/3 bg-[#D4AF37]/20 h-1.5 rounded-full overflow-hidden">
          <div className="bg-[#D4AF37] h-full transition-all duration-500 ease-out" style={{ width: `${(step / 6) * 100}%` }} />
        </div>
        <button onClick={onClose} className="text-[#4A151C]/50 hover:text-[#4A151C] text-2xl font-light">✕</button>
      </div>

      <div className="flex-1 flex flex-col justify-center max-w-3xl mx-auto px-6 w-full pb-20">
        
        {step === 1 && (
          <div className="animate-in slide-in-from-bottom-4 fade-in duration-500">
            {/* Um lembrete visual sutil do plano escolhido */}
            <div className="mb-6 inline-block bg-[#D4AF37]/10 text-[#5A151C] px-4 py-1 rounded-full text-sm font-medium border border-[#D4AF37]/30">
              Pacote escolhido: {plan.name}
            </div>
            
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-8 text-[#3A1015]">1. Para quem é esse presente especial? 🎵</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {Object.keys(sugestoesEstilo).map((opcao) => (
                <button
                  key={opcao}
                  onClick={() => { setFormData({ ...formData, relacao: opcao, estilo: '' }); setMostraOutro(false); nextStep(); }}
                  className="p-6 text-left border-2 border-[#4A151C]/10 rounded-xl hover:border-[#D4AF37] hover:bg-white transition-all text-lg md:text-xl font-light shadow-sm"
                >
                  {opcao}
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="animate-in slide-in-from-bottom-4 fade-in duration-500 w-full max-w-xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6 text-[#3A1015]">2. Quais são os nomes de vocês?</h2>
            <p className="text-lg text-[#5A151C]/70 mb-10 font-light">Se tiverem apelidos carinhosos, pode colocar também!</p>
            <div className="flex flex-col gap-8">
              <div className="flex flex-col text-left">
                <label className="text-sm font-semibold text-[#5A151C]/60 uppercase tracking-widest mb-2">De (Seu nome)</label>
                <input
                  autoFocus type="text" placeholder="Ex: Henrique..." value={formData.nomeDe}
                  onChange={(e) => setFormData({ ...formData, nomeDe: e.target.value })}
                  className="w-full bg-transparent border-b-2 border-[#4A151C]/20 focus:border-[#D4AF37] text-2xl md:text-3xl py-2 outline-none placeholder:text-[#4A151C]/20 font-light transition-colors"
                />
              </div>
              <div className="flex flex-col text-left">
                <label className="text-sm font-semibold text-[#5A151C]/60 uppercase tracking-widest mb-2">Para (Quem vai receber)</label>
                <input
                  type="text" placeholder="Ex: Lilica..." value={formData.nomePara}
                  onChange={(e) => setFormData({ ...formData, nomePara: e.target.value })}
                  onKeyDown={(e) => e.key === 'Enter' && formData.nomeDe && formData.nomePara && nextStep()}
                  className="w-full bg-transparent border-b-2 border-[#4A151C]/20 focus:border-[#D4AF37] text-2xl md:text-3xl py-2 outline-none placeholder:text-[#4A151C]/20 font-light transition-colors"
                />
              </div>
            </div>
            <button onClick={nextStep} disabled={!formData.nomeDe || !formData.nomePara} className="mt-12 bg-[#3A1015] text-[#FFF9F2] px-8 py-3 rounded-full text-lg disabled:opacity-30 transition-opacity">OK ✓</button>
          </div>
        )}

        {step === 3 && (
          <div className="animate-in slide-in-from-bottom-4 fade-in duration-500">
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4 text-[#3A1015]">3. Conta pra gente a história de vocês! ❤️</h2>
            <p className="text-lg text-[#5A151C]/70 mb-8 font-light">Como se conheceram? Qual foi o momento mais inesquecível? Pode escrever com o coração.</p>
            <textarea
              autoFocus rows={4} placeholder="Tudo começou quando..." value={formData.historia}
              onChange={(e) => setFormData({ ...formData, historia: e.target.value })}
              className="w-full bg-white/50 border-2 border-[#4A151C]/10 focus:border-[#D4AF37] rounded-xl text-xl md:text-2xl p-6 outline-none placeholder:text-[#4A151C]/20 font-light resize-none shadow-sm transition-colors"
            />
            <button onClick={nextStep} disabled={!formData.historia} className="mt-10 bg-[#3A1015] text-[#FFF9F2] px-8 py-3 rounded-full text-lg disabled:opacity-30 transition-opacity">OK ✓</button>
          </div>
        )}

        {step === 4 && (
          <div className="animate-in slide-in-from-bottom-4 fade-in duration-500">
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-8 text-[#3A1015]">4. Qual o estilo musical favorito? 🎸</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
              {listaEstilosAtual.map((opcao) => (
                <button key={opcao} onClick={() => { setFormData({ ...formData, estilo: opcao }); setMostraOutro(false); nextStep(); }} className="p-4 text-center border-2 border-[#4A151C]/10 rounded-xl hover:border-[#D4AF37] hover:bg-white transition-all text-[15px] md:text-lg font-light shadow-sm">{opcao}</button>
              ))}
              <button onClick={() => { setFormData({ ...formData, estilo: '' }); setMostraOutro(true); }} className={`p-4 text-center border-2 rounded-xl transition-all text-[15px] md:text-lg font-light shadow-sm ${mostraOutro ? 'border-[#D4AF37] bg-white' : 'border-[#4A151C]/10 hover:border-[#D4AF37] hover:bg-white'}`}>Outro...</button>
            </div>
            {mostraOutro && (
              <div className="animate-in slide-in-from-top-4 fade-in duration-300 w-full max-w-md mx-auto flex flex-col items-center">
                <input autoFocus type="text" placeholder="Digite o estilo desejado..." value={formData.estilo} onChange={(e) => setFormData({ ...formData, estilo: e.target.value })} onKeyDown={(e) => e.key === 'Enter' && formData.estilo && nextStep()} className="w-full bg-transparent border-b-2 border-[#4A151C]/20 focus:border-[#D4AF37] text-xl md:text-2xl py-2 outline-none placeholder:text-[#4A151C]/20 font-light transition-colors text-center" />
                <button onClick={nextStep} disabled={!formData.estilo} className="mt-8 bg-[#3A1015] text-[#FFF9F2] px-8 py-3 rounded-full text-lg disabled:opacity-30 transition-opacity">Confirmar Estilo ✓</button>
              </div>
            )}
          </div>
        )}

        {step === 5 && (
          <div className="animate-in slide-in-from-bottom-4 fade-in duration-500">
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4 text-[#3A1015]">5. Para onde enviamos a música? 📱</h2>
            <p className="text-lg text-[#5A151C]/70 mb-8 font-light">Digite seu WhatsApp com DDD. É por lá que enviaremos a música e o vídeo.</p>
            <input
              autoFocus type="tel" placeholder="(11) 99999-9999" value={formData.whatsapp}
              onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
              onKeyDown={(e) => e.key === 'Enter' && formData.whatsapp && handleSubmit()}
              className="w-full bg-transparent border-b-2 border-[#4A151C]/20 focus:border-[#D4AF37] text-2xl md:text-4xl py-4 outline-none placeholder:text-[#4A151C]/20 font-light transition-colors"
            />
            <button onClick={handleSubmit} disabled={!formData.whatsapp} className="mt-10 bg-[#D4AF37] hover:bg-[#C5A028] transition-colors text-[#3A1015] font-bold px-10 py-4 rounded-full text-xl disabled:opacity-30 shadow-[0_0_20px_rgba(212,175,55,0.4)]">Ir para o Pagamento</button>
          </div>
        )}

        {/* TELA 6: CHECKOUT ATUALIZADO DINAMICAMENTE */}
        {step === 6 && (
          <div className="animate-in zoom-in-95 fade-in duration-500 text-center max-w-xl mx-auto w-full">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-[#3A1015]">Tudo pronto! ✨</h2>
            <p className="text-lg text-[#5A151C]/80 mb-8 font-light">
              Sua história é linda. Conclua seu pagamento no ambiente seguro do Mercado Pago para iniciarmos a produção.
            </p>

            <div className="bg-[#E8F5E9] border border-[#A5D6A7] rounded-2xl p-5 flex items-start gap-4 text-left mb-8 shadow-sm">
              <div className="bg-[#C8E6C9] p-2 rounded-xl text-[#2E7D32] flex-shrink-0">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-[#2E7D32] font-bold text-base mb-1">Sua satisfação é garantida</h4>
                <p className="text-[#2E7D32]/90 text-sm leading-relaxed font-light">
                  Se a música não ficar do jeito que você esperava, a gente refaz sem custo. Uma revisão completa — letra, melodia ou tom — inclusa no seu pedido.
                </p>
              </div>
            </div>
            
            {/* O BOTÃO AGORA PUXA A URL E O PREÇO DO PLANO ESCOLHIDO */}
            <button 
              onClick={() => {
                window.open(plan.checkoutUrl, '_blank');
                nextStep();
              }}
              className="inline-flex justify-center items-center w-full bg-[#009EE3] text-white font-bold px-10 py-5 rounded-full text-xl shadow-[0_0_20px_rgba(0,158,227,0.4)] hover:bg-[#0086C4] transition-colors"
            >
              🔒 Pagar {plan.price} no Mercado Pago
            </button>

            <a 
              href={siteConfig.contact.whatsapp} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center justify-center gap-2 text-[#5A151C]/70 mt-6 text-sm font-medium hover:text-[#3A1015] hover:underline transition-all"
            >
              <MessageCircle className="w-5 h-5" /> Dúvidas? Fale com a gente no WhatsApp
            </a>
          </div>
        )}

        {step === 7 && (
          <div className="animate-in zoom-in-95 fade-in duration-500 text-center max-w-lg mx-auto">
            <div className="w-20 h-20 bg-[#D4AF37]/20 text-[#D4AF37] rounded-full flex items-center justify-center text-4xl mx-auto mb-6">🎵</div>
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4 text-[#3A1015]">Aguardando confirmação</h2>
            <p className="text-lg text-[#5A151C]/80 mb-8 font-light leading-relaxed">
              Uma nova aba do Mercado Pago foi aberta para o seu pagamento. <br/><br/>
              Assim que for concluído lá, entraremos em contato pelo seu WhatsApp (<strong>{formData.whatsapp}</strong>) para confirmar o início da produção.
            </p>
            <button onClick={onClose} className="mt-4 border-2 border-[#4A151C]/20 text-[#4A151C] hover:border-[#D4AF37] px-10 py-4 rounded-full text-lg transition-colors font-medium">
              Entendido, fechar janela
            </button>
          </div>
        )}

      </div>
    </div>
  );
}