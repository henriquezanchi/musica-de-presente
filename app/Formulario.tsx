'use client';

import React, { useState, useEffect } from 'react';
import { ShieldCheck, MessageCircle, Sparkles, Check, Wand2, Music, ArrowLeft, X } from 'lucide-react';
import { siteConfig } from './config';

interface FormularioProps {
  plan: {
    name: string;
    price: string;
    checkoutUrl: string;
  };
  onClose: () => void;
}

// Ordem otimizada para o mercado brasileiro
const estilosPopulares = [
  'Sertanejo Romântico',
  'Sertanejo Universitário',
  'Pagode / Samba',
  'Gospel / Religiosa',
  'Forró / Piseiro',
  'Pop Animado',
  'Funk Melody',
  'MPB Acústico',
  'Trap / Rap',
  'Rock / Indie'
];

const adjetivosOpcoes = [
  'Batalhador(a)', 'Engraçado(a)', 'Carinhoso(a)', 'Teimoso(a)', 
  'Dorminhoco(a)', 'Festeiro(a)', 'Comilão(ona)', 'Protetor(a)', 'Romântico(a)'
];

export default function Formulario({ plan, onClose }: FormularioProps) {
  const [step, setStep] = useState(1);
  const [isGenerating, setIsGenerating] = useState(false);
  const [mostraOutro, setMostraOutro] = useState(false);
  
  const [formData, setFormData] = useState({
    relacao: '',
    nomeDe: '',
    nomePara: '',
    ocasiao: '',
    adjetivos: [] as string[],
    historia: '',
    estilo: '',
    whatsapp: ''
  });

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  // Simula o tempo da IA gerando o resumo
  const handleGerarResumo = () => {
    setIsGenerating(true);
    setStep(5);
    setTimeout(() => {
      setIsGenerating(false);
    }, 2000);
  };

  const toggleAdjetivo = (adj: string) => {
    setFormData(prev => ({
      ...prev,
      adjetivos: prev.adjetivos.includes(adj) 
        ? prev.adjetivos.filter(a => a !== adj)
        : prev.adjetivos.length < 3 ? [...prev.adjetivos, adj] : prev.adjetivos
    }));
  };

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-[#FFF9F5] text-[#4A2522] animate-in fade-in duration-300">
      
      {/* BARRA SUPERIOR (Progresso e Fechar) */}
      <div className="flex items-center justify-between p-6 max-w-5xl mx-auto w-full bg-white shadow-sm rounded-b-3xl">
        {step > 1 && step < 7 && (
          <button onClick={prevStep} className="text-[#611C24] hover:bg-[#FFF9F5] p-2 rounded-full transition-colors flex items-center gap-2 font-bold text-sm">
            <ArrowLeft className="w-5 h-5" /> Voltar
          </button>
        )}
        
        <div className="flex-1 mx-4 max-w-md hidden md:block">
          <div className="w-full bg-gray-100 h-2.5 rounded-full overflow-hidden">
            <div className="bg-[#E63946] h-full transition-all duration-500 ease-out" style={{ width: `${(step / 7) * 100}%` }} />
          </div>
        </div>
        
        <button onClick={onClose} className="text-[#4A2522]/50 hover:text-[#E63946] p-2 ml-auto">
          <X className="w-8 h-8" />
        </button>
      </div>

      <div className="flex-1 flex flex-col justify-center max-w-3xl mx-auto px-6 w-full pb-20 mt-4 overflow-y-auto">
        
        {/* PASSO 1: RELAÇÃO */}
        {step === 1 && (
          <div className="animate-in slide-in-from-bottom-4 fade-in duration-500 text-center">
            <div className="mb-8 inline-flex items-center gap-2 bg-[#F0C05A]/20 text-[#611C24] px-4 py-1.5 rounded-full text-sm font-bold border border-[#F0C05A]/50">
              Pacote: {plan.name}
            </div>
            
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-8 text-[#611C24]">Para quem vamos fazer essa música? 🎵</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
              {['Meu Amor (Namorado/Esposo)', 'Minha Mãe / Meu Pai', 'Filho(a) ou Criança', 'Um(a) Grande Amigo(a)', 'Meu Pet 🐾', 'Outra pessoa'].map((opcao) => (
                <button
                  key={opcao}
                  onClick={() => { setFormData({ ...formData, relacao: opcao }); nextStep(); }}
                  className="p-5 text-center bg-white border-2 border-gray-100 rounded-2xl hover:border-[#F0C05A] hover:bg-[#FFF9F5] transition-all text-lg font-bold text-[#4A2522] shadow-sm hover:shadow-md"
                >
                  {opcao}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* PASSO 2: NOMES E OCASIÃO */}
        {step === 2 && (
          <div className="animate-in slide-in-from-bottom-4 fade-in duration-500 w-full max-w-xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-[#611C24]">Quais são os nomes e o motivo?</h2>
            
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
                <label className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-2 block">Seu nome (De)</label>
                <input
                  autoFocus type="text" placeholder="Ex: Lucas..." value={formData.nomeDe}
                  onChange={(e) => setFormData({ ...formData, nomeDe: e.target.value })}
                  className="w-full bg-gray-50 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[#F0C05A] text-xl font-medium transition-all"
                />
              </div>

              <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
                <label className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-2 block">Nome de quem vai receber (Para)</label>
                <input
                  type="text" placeholder="Ex: Ana..." value={formData.nomePara}
                  onChange={(e) => setFormData({ ...formData, nomePara: e.target.value })}
                  className="w-full bg-gray-50 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[#F0C05A] text-xl font-medium transition-all"
                />
              </div>

              <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
                <label className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-2 block">Qual a ocasião?</label>
                <select 
                  value={formData.ocasiao}
                  onChange={(e) => setFormData({ ...formData, ocasiao: e.target.value })}
                  className="w-full bg-gray-50 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[#F0C05A] text-xl font-medium transition-all"
                >
                  <option value="">Selecione...</option>
                  <option value="Aniversário">Aniversário</option>
                  <option value="Aniversário de Casamento/Namoro">Aniversário de Casamento/Namoro</option>
                  <option value="Dia das Mães/Pais">Dia das Mães/Pais</option>
                  <option value="Pedido de Casamento">Pedido de Casamento</option>
                  <option value="Pedido de Desculpas">Pedido de Desculpas</option>
                  <option value="Homenagem Saudade">Homenagem (Saudade)</option>
                  <option value="Apenas para surpreender">Apenas para surpreender (Sem data específica)</option>
                </select>
              </div>
            </div>
            <button 
              onClick={nextStep} 
              disabled={!formData.nomeDe || !formData.nomePara || !formData.ocasiao} 
              className="mt-8 w-full bg-[#E63946] hover:bg-[#D90429] text-white font-bold py-4 rounded-full text-lg disabled:opacity-30 transition-all shadow-lg"
            >
              Continuar ➔
            </button>
          </div>
        )}

        {/* PASSO 3: A HISTÓRIA (Guiada e sem pressão) */}
        {step === 3 && (
          <div className="animate-in slide-in-from-bottom-4 fade-in duration-500">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-[#611C24]">A alma da música ❤️</h2>
            
            <div className="bg-white p-6 md:p-8 rounded-[2rem] border border-gray-100 shadow-sm mb-6">
              <label className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-4 block">1. Escolha até 3 características da pessoa:</label>
              <div className="flex flex-wrap gap-2 mb-6">
                {adjetivosOpcoes.map(adj => (
                  <button 
                    key={adj}
                    onClick={() => toggleAdjetivo(adj)}
                    className={`px-4 py-2 rounded-full text-sm font-bold transition-all border-2 ${formData.adjetivos.includes(adj) ? 'bg-[#F0C05A] border-[#F0C05A] text-[#4A2522]' : 'bg-transparent border-gray-200 text-gray-500 hover:border-gray-300'}`}
                  >
                    {formData.adjetivos.includes(adj) && "✓ "} {adj}
                  </button>
                ))}
              </div>

              <label className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-2 block">2. Conte uma mania, apelido ou lembrança marcante:</label>
              <p className="text-xs text-[#E63946] font-bold mb-3 flex items-center gap-1"><Sparkles className="w-3 h-3"/> Não se preocupe em escrever bonito, nossa Inteligência Artificial arruma tudo para virar rima!</p>
              <textarea
                rows={4} placeholder="Ex: A gente se conheceu na escola, ele é viciado em café e sempre me chama de 'Pudim'..." 
                value={formData.historia}
                onChange={(e) => setFormData({ ...formData, historia: e.target.value })}
                className="w-full bg-gray-50 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[#F0C05A] text-lg transition-all resize-none"
              />
            </div>

            <button 
              onClick={nextStep} 
              disabled={!formData.historia || formData.adjetivos.length === 0} 
              className="w-full max-w-xl mx-auto block bg-[#E63946] hover:bg-[#D90429] text-white font-bold py-4 rounded-full text-lg disabled:opacity-30 transition-all shadow-lg"
            >
              Continuar ➔
            </button>
          </div>
        )}

        {/* PASSO 4: ESTILO MUSICAL */}
        {step === 4 && (
          <div className="animate-in slide-in-from-bottom-4 fade-in duration-500 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-2 text-[#611C24]">Qual o ritmo da música? 🎸</h2>
            <p className="text-gray-500 mb-8 font-medium">Escolha o estilo favorito de quem vai receber.</p>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
              {estilosPopulares.map((opcao) => (
                <button 
                  key={opcao} 
                  onClick={() => { setFormData({ ...formData, estilo: opcao }); setMostraOutro(false); handleGerarResumo(); }} 
                  className="p-4 text-center bg-white border-2 border-gray-100 rounded-2xl hover:border-[#F0C05A] hover:bg-[#FFF9F5] transition-all text-sm md:text-base font-bold text-[#4A2522] shadow-sm"
                >
                  {opcao}
                </button>
              ))}
              <button 
                onClick={() => { setFormData({ ...formData, estilo: '' }); setMostraOutro(true); }} 
                className={`p-4 text-center border-2 rounded-2xl transition-all text-sm md:text-base font-bold shadow-sm ${mostraOutro ? 'border-[#F0C05A] bg-[#FFF9F5] text-[#4A2522]' : 'bg-gray-50 border-gray-200 text-gray-500'}`}
              >
                Outro ritmo...
              </button>
            </div>

            {mostraOutro && (
              <div className="animate-in slide-in-from-top-2 fade-in duration-300 bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
                <label className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-2 block">Digite o ritmo desejado:</label>
                <input 
                  autoFocus type="text" placeholder="Ex: K-Pop, Reggae, Bossa Nova..." 
                  value={formData.estilo} 
                  onChange={(e) => setFormData({ ...formData, estilo: e.target.value })} 
                  className="w-full bg-gray-50 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[#F0C05A] text-lg font-medium transition-all mb-4" 
                />
                <button 
                  onClick={handleGerarResumo} 
                  disabled={!formData.estilo} 
                  className="w-full bg-[#611C24] text-white font-bold py-3 rounded-xl disabled:opacity-30"
                >
                  Confirmar Estilo
                </button>
              </div>
            )}
          </div>
        )}

        {/* PASSO 5: O RESUMO MÁGICO DA IA */}
        {step === 5 && (
          <div className="animate-in zoom-in-95 fade-in duration-500 max-w-xl mx-auto w-full text-center">
            {isGenerating ? (
              <div className="py-20 flex flex-col items-center justify-center">
                <Wand2 className="w-16 h-16 text-[#F0C05A] animate-bounce mb-6" />
                <h3 className="text-2xl font-bold text-[#611C24] mb-2">Nossa IA está criando a estrutura...</h3>
                <p className="text-gray-500">Organizando suas ideias para compor a letra perfeita.</p>
              </div>
            ) : (
              <div>
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#25D366]/20 text-[#25D366] rounded-full mb-6">
                  <Check className="w-8 h-8" strokeWidth={3} />
                </div>
                <h2 className="text-3xl font-serif font-bold mb-2 text-[#611C24]">Ideia aprovada!</h2>
                <p className="text-gray-500 mb-8 font-medium">Veja o resumo de como ficará a sua obra:</p>
                
                <div className="bg-white p-8 rounded-[2rem] border-2 border-[#F0C05A] shadow-lg text-left relative mb-8">
                  <div className="absolute -top-4 left-6 bg-[#F0C05A] text-[#4A2522] text-xs font-bold uppercase tracking-wider py-1 px-4 rounded-full flex items-center gap-1">
                    <Sparkles className="w-3 h-3" /> Estrutura da Letra
                  </div>
                  <p className="text-lg leading-relaxed text-[#4A2522]">
                    Uma música no estilo <strong>{formData.estilo}</strong> para celebrar o(a) <strong>{formData.ocasiao}</strong> de <strong>{formData.nomePara}</strong>. 
                    <br/><br/>
                    A letra será um presente de <strong>{formData.nomeDe}</strong> e vai destacar que {formData.nomePara} é uma pessoa <strong>{formData.adjetivos.join(', ').replace(/, ([^,]*)$/, ' e $1')}</strong>. 
                    <br/><br/>
                    A emoção principal da música vai girar em torno da seguinte história: <span className="italic text-gray-600">"{formData.historia}"</span>
                  </p>
                </div>

                <button 
                  onClick={nextStep} 
                  className="w-full bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold py-5 rounded-full text-xl transition-all shadow-[0_8px_30px_rgba(37,211,102,0.3)] flex items-center justify-center gap-2"
                >
                  Aprovar e ver valor final <Check className="w-5 h-5" />
                </button>
              </div>
            )}
          </div>
        )}

        {/* PASSO 6: CONTATO WHATSAPP */}
        {step === 6 && (
          <div className="animate-in slide-in-from-bottom-4 fade-in duration-500 max-w-md mx-auto text-center w-full">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-[#611C24]">Para onde enviamos? 📱</h2>
            <p className="text-gray-500 mb-8 font-medium">Digite seu WhatsApp com DDD. É por lá que enviaremos a música e o vídeo prontos.</p>
            
            <div className="bg-white p-2 rounded-2xl border-2 border-[#25D366] shadow-sm flex items-center mb-8 focus-within:ring-4 focus-within:ring-[#25D366]/20 transition-all">
              <div className="p-3 bg-[#25D366]/10 rounded-xl mr-2">
                <MessageCircle className="w-6 h-6 text-[#25D366]" />
              </div>
              <input
                autoFocus type="tel" placeholder="(11) 99999-9999" value={formData.whatsapp}
                onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                onKeyDown={(e) => e.key === 'Enter' && formData.whatsapp && nextStep()}
                className="w-full bg-transparent py-3 outline-none text-2xl font-bold text-[#4A2522] placeholder:text-gray-300"
              />
            </div>

            <button onClick={nextStep} disabled={!formData.whatsapp} className="w-full bg-[#E63946] hover:bg-[#D90429] text-white font-bold py-4 rounded-full text-lg disabled:opacity-30 transition-all shadow-lg">
              Ir para o Pagamento 🔒
            </button>
          </div>
        )}

        {/* PASSO 7: CHECKOUT FINAL */}
        {step === 7 && (
          <div className="animate-in zoom-in-95 fade-in duration-500 text-center max-w-xl mx-auto w-full">
            <h2 className="text-4xl font-serif font-bold mb-2 text-[#611C24]">Tudo pronto! ✨</h2>
            <p className="text-gray-500 mb-8 font-medium">
              Sua estrutura já foi salva. Conclua seu pagamento no ambiente seguro do Mercado Pago para iniciarmos a produção.
            </p>

            <div className="bg-[#E8F5E9] border border-[#A5D6A7] rounded-3xl p-6 flex items-start gap-4 text-left mb-8 shadow-sm">
              <div className="bg-white p-2 rounded-full text-[#2E7D32] shadow-sm flex-shrink-0 mt-1">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-[#2E7D32] font-bold text-lg mb-1">Satisfação 100% Garantida</h4>
                <p className="text-[#2E7D32]/80 text-sm leading-relaxed font-medium">
                  Se a música não ficar exatamente do jeito que você esperava, nós fazemos uma revisão completa de graça. Seu risco é zero.
                </p>
              </div>
            </div>
            
            <button 
              onClick={() => {
                window.open(plan.checkoutUrl, '_blank');
                nextStep(); // Vai para a tela de aguardando confirmação
              }}
              className="flex flex-col items-center justify-center w-full bg-[#009EE3] text-white px-8 py-5 rounded-full shadow-[0_10px_30px_rgba(0,158,227,0.3)] hover:bg-[#0086C4] transition-transform transform hover:scale-105"
            >
              <span className="font-bold text-xl mb-1">Pagar {plan.price} no Mercado Pago</span>
              <span className="text-xs font-medium opacity-90 tracking-wide uppercase">PIX ou Cartão de Crédito</span>
            </button>
          </div>
        )}

        {/* PASSO 8: AGUARDANDO RETORNO DO MERCADO PAGO */}
        {step === 8 && (
          <div className="animate-in zoom-in-95 fade-in duration-500 text-center max-w-lg mx-auto">
            <div className="w-24 h-24 bg-[#F0C05A] rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg animate-pulse">
              <Music className="w-10 h-10 text-[#611C24]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-[#611C24]">Pagamento em andamento...</h2>
            <p className="text-gray-600 mb-10 text-lg leading-relaxed font-medium bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
              O Mercado Pago foi aberto para você concluir a compra. <br/><br/>
              Assim que o PIX ou Cartão for aprovado lá, nós te chamaremos no WhatsApp <strong className="text-[#E63946]">{formData.whatsapp}</strong> para confirmar e iniciar a produção!
            </p>
            <button onClick={onClose} className="text-gray-500 hover:text-[#611C24] font-bold underline transition-colors">
              Pode fechar esta janela
            </button>
          </div>
        )}

      </div>
    </div>
  );
}