'use client';

import React, { useState } from 'react';
import { ShieldCheck, MessageCircle, Sparkles, Check, Wand2, Music, ArrowLeft, X, Heart, Mic, Mic2, Dices } from 'lucide-react';
import { siteConfig } from './config';

interface FormularioProps {
  plan: {
    name: string;
    price: string;
    checkoutUrl: string;
    features: string[];
  };
  onClose: () => void;
}

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

const emocoesPrincipais = [
  { label: 'Amor profundo', icon: '❤️' },
  { label: 'Gratidão', icon: '🙏' },
  { label: 'Saudade', icon: '🌙' },
  { label: 'Alegria e Festa', icon: '🎉' },
  { label: 'Força e Superação', icon: '💪' },
  { label: 'Cumplicidade', icon: '🤝' }
];

const relacionamentos = [
  'Meu Amor (Namorado/Esposo)', 
  'Minha Mãe / Meu Pai', 
  'Filho(a) ou Criança', 
  'Um(a) Grande Amigo(a)', 
  'Meu Pet 🐾', 
  'Outra pessoa'
];

const ocasioesPorRelacao: Record<string, string[]> = {
  'Meu Amor (Namorado/Esposo)': ['Aniversário', 'Aniversário de Namoro/Casamento', 'Pedido de Casamento', 'Pedido de Desculpas', 'Apenas para surpreender'],
  'Minha Mãe / Meu Pai': ['Dia das Mães / Dia dos Pais', 'Aniversário', 'Bodas / Aniversário de Casamento', 'Homenagem (Saudade)', 'Apenas para surpreender'],
  'Filho(a) ou Criança': ['Aniversário', 'Mesversário', 'Batizado', 'Formatura', 'Apenas para surpreender'],
  'Um(a) Grande Amigo(a)': ['Aniversário', 'Homenagem de Amizade', 'Despedida / Viagem', 'Apenas para surpreender'],
  'Meu Pet 🐾': ['Aniversário de Adoção', 'Aniversário', 'Homenagem (Saudade)', 'Apenas para surpreender'],
  'Outra pessoa': ['Aniversário', 'Formatura', 'Homenagem (Saudade)', 'Apenas para surpreender', 'Outra ocasião']
};

export default function Formulario({ plan, onClose }: FormularioProps) {
  const [step, setStep] = useState(1);
  const [isGenerating, setIsGenerating] = useState(false);
  const [mostraOutro, setMostraOutro] = useState(false);
  const [templateResumo, setTemplateResumo] = useState(0); 
  
  const [formData, setFormData] = useState({
    relacao: '',
    nomeDe: '',
    nomePara: '',
    ocasiao: '',
    emocao: '',
    voz: '',
    historia: '',
    estilo: '',
    whatsapp: ''
  });

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  const handleGerarResumo = () => {
    setIsGenerating(true);
    setStep(6);
    setTemplateResumo(Math.floor(Math.random() * 3));
    setTimeout(() => {
      setIsGenerating(false);
    }, 2000);
  };

  const renderResumoIA = () => {
    const vozTexto = formData.voz === 'Sem preferência' ? 'uma voz surpreendente' : `uma voz ${formData.voz.toLowerCase()}`;
    const estiloTexto1 = formData.estilo === 'Surpresa' ? 'ritmo perfeito (escolhido por nós)' : `estilo ${formData.estilo}`;
    const estiloTexto2 = formData.estilo === 'Surpresa' ? 'ritmo surpresa perfeito' : `autêntico ${formData.estilo}`;

    if (templateResumo === 0) {
      return (
        <p className="text-lg leading-relaxed text-[#4A2522]">
          Vamos compor um sucesso no <strong>{estiloTexto1}</strong> para o(a) <strong>{formData.ocasiao}</strong> de <strong>{formData.nomePara}</strong>. 
          <br/><br/>
          A letra vai transbordar <strong>{formData.emocao.toLowerCase()}</strong>, sendo um presente inesquecível de <strong>{formData.nomeDe}</strong> cantado por {vozTexto}. 
          <br/><br/>
          A base da nossa poesia será esta memória: <span className="italic text-gray-600">"{formData.historia}"</span>
        </p>
      );
    } else if (templateResumo === 1) {
      return (
        <p className="text-lg leading-relaxed text-[#4A2522]">
          A ideia central é criar um <strong>{estiloTexto2}</strong> emocionante de <strong>{formData.nomeDe}</strong> para <strong>{formData.nomePara}</strong>.
          <br/><br/>
          Com {vozTexto} no microfone e focando no sentimento de <strong>{formData.emocao.toLowerCase()}</strong>, vamos celebrar este(a) <strong>{formData.ocasiao}</strong>.
          <br/><br/>
          Tudo vai girar em torno desta história: <span className="italic text-gray-600">"{formData.historia}"</span>
        </p>
      );
    } else {
      return (
        <p className="text-lg leading-relaxed text-[#4A2522]">
          Nossa estrutura conectará <strong>{formData.nomeDe}</strong> e <strong>{formData.nomePara}</strong> através de um <strong>{estiloTexto2}</strong>.
          <br/><br/>
          Será o(a) <strong>{formData.ocasiao}</strong> mais marcante, guiado pelo sentimento de <strong>{formData.emocao.toLowerCase()}</strong> na interpretação de {vozTexto}.
          <br/><br/>
          A cereja do bolo será este detalhe especial: <span className="italic text-gray-600">"{formData.historia}"</span>
        </p>
      );
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-[#FFF9F5] text-[#4A2522] animate-in fade-in duration-300">
      
      {/* BARRA SUPERIOR */}
      <div className="flex items-center justify-between p-6 max-w-5xl mx-auto w-full bg-white shadow-sm rounded-b-3xl">
        {step > 1 && step < 8 && (
          <button onClick={prevStep} className="text-[#611C24] hover:bg-[#FFF9F5] p-2 rounded-full transition-colors flex items-center gap-2 font-bold text-sm">
            <ArrowLeft className="w-5 h-5" /> Voltar
          </button>
        )}
        
        <div className="flex-1 mx-4 max-w-md hidden md:block">
          <div className="w-full bg-gray-100 h-2.5 rounded-full overflow-hidden">
            <div className="bg-[#E63946] h-full transition-all duration-500 ease-out" style={{ width: `${(step / 8) * 100}%` }} />
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
              {relacionamentos.map((opcao) => (
                <button
                  key={opcao}
                  onClick={() => { 
                    setFormData({ ...formData, relacao: opcao, ocasiao: '' }); 
                    nextStep(); 
                  }}
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
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-[#611C24]">Nomes e Motivo</h2>
            
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
                <label className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-2 block">Seu nome ou apelido (De)</label>
                <input
                  autoFocus type="text" placeholder="Ex: Henrique, Amor..." value={formData.nomeDe}
                  onChange={(e) => setFormData({ ...formData, nomeDe: e.target.value })}
                  className="w-full bg-gray-50 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[#F0C05A] text-xl font-medium transition-all"
                />
              </div>

              <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
                <label className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-2 block">Nome ou apelido de quem vai receber (Para)</label>
                <input
                  type="text" placeholder="Ex: Lilica, Vida..." value={formData.nomePara}
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
                  {(ocasioesPorRelacao[formData.relacao] || ocasioesPorRelacao['Outra pessoa']).map((oc) => (
                    <option key={oc} value={oc}>{oc}</option>
                  ))}
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

        {/* PASSO 3: EMOÇÃO PRINCIPAL */}
        {step === 3 && (
          <div className="animate-in slide-in-from-bottom-4 fade-in duration-500 w-full max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-2 text-[#611C24]">Qual a emoção principal?</h2>
            <p className="text-gray-500 mb-8 font-medium">Isso ajuda nossa equipe a dar o tom certo para a melodia.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {emocoesPrincipais.map((emocao) => (
                <button
                  key={emocao.label}
                  onClick={() => { 
                    setFormData({ ...formData, emocao: emocao.label }); 
                    nextStep(); 
                  }}
                  className="flex items-center gap-4 p-5 bg-white border-2 border-gray-100 rounded-2xl hover:border-[#F0C05A] hover:bg-[#FFF9F5] transition-all text-lg font-bold text-[#4A2522] shadow-sm text-left"
                >
                  <span className="text-3xl">{emocao.icon}</span>
                  {emocao.label}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* PASSO 4: A HISTÓRIA + VOZ */}
        {step === 4 && (
          <div className="animate-in slide-in-from-bottom-4 fade-in duration-500 w-full max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-[#611C24]">A alma da música ❤️</h2>
            
            <div className="bg-white p-6 md:p-8 rounded-[2rem] border border-gray-100 shadow-sm mb-6">
              <label className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-2 block">1. Conte um pouco sobre vocês:</label>
              <p className="text-xs text-[#E63946] font-bold mb-4 flex items-start gap-1">
                <Sparkles className="w-4 h-4 flex-shrink-0 mt-0.5"/> 
                Escreva do seu jeito! Nossa IA transforma tudo em rima. Não precisa ser um texto enorme, apenas o que não pode faltar.
              </p>
              <textarea
                rows={4} placeholder="Ex: A gente viajou pra Itália no ano passado e foi inesquecível. Ela ama café, é super batalhadora e sempre me chama de 'Vida'..." 
                value={formData.historia}
                onChange={(e) => setFormData({ ...formData, historia: e.target.value })}
                className="w-full bg-gray-50 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[#F0C05A] text-lg transition-all resize-none mb-8"
              />

              <label className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-4 block border-t border-gray-100 pt-6">2. Preferência de Voz:</label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  { label: 'Masculina', icon: <Mic className="w-5 h-5 mb-1" /> },
                  { label: 'Feminina', icon: <Mic2 className="w-5 h-5 mb-1" /> },
                  { label: 'Sem preferência', icon: <Dices className="w-5 h-5 mb-1" /> }
                ].map((v) => (
                  <button 
                    key={v.label}
                    onClick={() => setFormData({ ...formData, voz: v.label })}
                    className={`flex flex-col items-center justify-center py-4 px-2 rounded-xl text-sm font-bold transition-all border-2 ${formData.voz === v.label ? 'bg-[#F0C05A]/20 border-[#F0C05A] text-[#611C24]' : 'bg-transparent border-gray-200 text-gray-500 hover:border-gray-300'}`}
                  >
                    {v.icon}
                    {v.label}
                  </button>
                ))}
              </div>
            </div>

            <button 
              onClick={nextStep} 
              disabled={!formData.historia || !formData.voz} 
              className="w-full bg-[#E63946] hover:bg-[#D90429] text-white font-bold py-4 rounded-full text-lg disabled:opacity-30 transition-all shadow-lg"
            >
              Continuar ➔
            </button>
          </div>
        )}

        {/* PASSO 5: ESTILO MUSICAL */}
        {step === 5 && (
          <div className="animate-in slide-in-from-bottom-4 fade-in duration-500 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-2 text-[#611C24]">Qual o ritmo da música? 🎸</h2>
            <p className="text-gray-500 mb-8 font-medium">Escolha o estilo favorito de quem vai receber.</p>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-4">
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
                className={`p-4 text-center border-2 rounded-2xl transition-all text-sm md:text-base font-bold shadow-sm ${mostraOutro ? 'border-[#F0C05A] bg-[#FFF9F5] text-[#4A2522]' : 'bg-gray-50 border-gray-200 text-gray-500 hover:border-gray-300'}`}
              >
                Outro ritmo...
              </button>
            </div>

            {/* BOTÃO "ME SURPREENDA" */}
            <button 
              onClick={() => { setFormData({ ...formData, estilo: 'Surpresa' }); setMostraOutro(false); handleGerarResumo(); }} 
              className="w-full mb-6 p-4 flex flex-col items-center justify-center gap-1 bg-[#FFF9F5] border-2 border-[#F0C05A] rounded-2xl hover:bg-[#F0C05A]/10 transition-all shadow-sm group"
            >
              <div className="flex items-center gap-2 text-lg font-bold text-[#611C24]">
                <Sparkles className="w-5 h-5 text-[#F0C05A] group-hover:animate-pulse" /> Me surpreenda!
              </div>
              <span className="text-sm text-[#4A2522]/70 font-medium">Deixe nossos especialistas escolherem o ritmo perfeito.</span>
            </button>

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

        {/* PASSO 6: O RESUMO MÁGICO DA IA */}
        {step === 6 && (
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
                    <Sparkles className="w-3 h-3" /> Direção Artística
                  </div>
                  
                  {renderResumoIA()}

                </div>

                <button 
                  onClick={nextStep} 
                  className="w-full bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold py-5 rounded-full text-xl transition-all shadow-[0_8px_30px_rgba(37,211,102,0.3)] flex items-center justify-center gap-2"
                >
                  Ficou perfeito! Continuar <Check className="w-5 h-5" />
                </button>
              </div>
            )}
          </div>
        )}

        {/* PASSO 7: CONTATO WHATSAPP */}
        {step === 7 && (
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

        {/* PASSO 8: CHECKOUT FINAL COM RESUMO E WHATSAPP */}
        {step === 8 && (
          <div className="animate-in zoom-in-95 fade-in duration-500 text-center max-w-xl mx-auto w-full">
            <h2 className="text-4xl font-serif font-bold mb-2 text-[#611C24]">Tudo pronto! ✨</h2>
            <p className="text-gray-500 mb-6 font-medium">
              Sua estrutura já foi salva. Confira seu pacote e conclua o pagamento no ambiente seguro do Mercado Pago.
            </p>

            <div className="bg-white border-2 border-gray-100 rounded-3xl p-6 text-left mb-6 shadow-sm">
              <div className="flex justify-between items-center mb-4 border-b border-gray-100 pb-4">
                <h3 className="font-bold text-[#611C24] text-lg uppercase tracking-wider">Resumo do Pedido</h3>
                <span className="font-bold text-2xl text-[#4A2522]">{plan.price}</span>
              </div>
              <div className="font-bold text-[#4A2522] text-xl mb-4">{plan.name}</div>
              <ul className="space-y-3">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-[#4A2522]/80 font-medium">
                    <Check className="w-5 h-5 text-[#E63946] flex-shrink-0 mt-0.5" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

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
                onClose(); 
              }}
              className="flex flex-col items-center justify-center w-full bg-[#009EE3] text-white px-8 py-5 rounded-full shadow-[0_10px_30px_rgba(0,158,227,0.3)] hover:bg-[#0086C4] transition-transform transform hover:scale-105 mb-6"
            >
              <span className="font-bold text-xl mb-1">Pagar {plan.price} no Mercado Pago</span>
              <span className="text-xs font-medium opacity-90 tracking-wide uppercase">PIX ou Cartão de Crédito</span>
            </button>

            <a 
              href={siteConfig.contact.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 text-gray-500 hover:text-[#25D366] font-bold transition-colors"
            >
              <MessageCircle className="w-6 h-6" />
              Ficou alguma dúvida? Fale com a gente!
            </a>
          </div>
        )}

      </div>
    </div>
  );
}