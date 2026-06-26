'use client';

import { useState } from 'react';
import { siteConfig } from "./config";
import Waveform from "./Waveform";
import { ChevronDown, LucideIcon, X, Play, Star, Check, MessageCircle, Heart } from 'lucide-react'; 
import Formulario from './Formulario';

export default function Home() {
  const { hero, marquee, comparison, videoGallery, howItWorks, portfolio, testimonials, faq, finalCta, pricingPlans, contact, trustBadges } = siteConfig;
  
  const [selectedPlan, setSelectedPlan] = useState<any>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main className="min-h-screen font-sans bg-[#FFF9F5] text-[#4A2522] relative pt-24 pb-20">
      
      {/* BOTÃO FLUTUANTE DO WHATSAPP (Sempre visível) */}
      <a 
        href={contact.whatsapp} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="fixed bottom-6 right-6 bg-[#25D366] text-white p-4 rounded-full shadow-[0_8px_30px_rgba(37,211,102,0.4)] z-50 hover:scale-110 transition-transform flex items-center justify-center group"
        aria-label="Fale conosco no WhatsApp"
      >
        <MessageCircle className="w-8 h-8" />
        {/* Balão explicativo que aparece ao passar o mouse (desktop) */}
        <span className="absolute right-16 bg-white text-[#4A2522] text-sm font-bold py-2 px-4 rounded-2xl shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          Dúvidas? Fale com a gente!
        </span>
      </a>

      {/* HEADER AMIGÁVEL */}
      <header className="absolute top-0 left-0 w-full z-40 px-6 py-6 flex items-center justify-between max-w-7xl mx-auto right-0">
        <div className="text-2xl font-serif font-bold text-[#611C24] flex items-center gap-2">
           Música de Presente <Heart className="w-5 h-5 text-[#E63946] fill-[#E63946] animate-pulse" />
        </div>
        <div className="flex items-center gap-4">
           <a href="#pacotes" className="bg-[#611C24] hover:bg-[#E63946] text-white text-sm font-bold py-2.5 px-6 rounded-full transition-all shadow-md">
              Ver Pacotes
           </a>
        </div>
      </header>

      {selectedPlan && <Formulario plan={selectedPlan} onClose={() => setSelectedPlan(null)} />}
      
      {/* 1. HERO SECTION (Focada no Emocional e na Clareza) */}
      <section className="relative w-full py-10 md:py-16 px-4 flex flex-col items-center text-center">
        <div className="relative z-10 flex flex-col items-center max-w-4xl mx-auto">
            <span className="bg-[#F0C05A]/30 text-[#611C24] text-xs font-bold uppercase tracking-wider mb-6 px-4 py-2 rounded-full inline-block">
                🎉 {hero.badge}
            </span>

            <h1 className="text-4xl md:text-6xl font-serif font-bold tracking-tight mb-6 leading-tight text-[#611C24]">
                {hero.title}
            </h1>
            
            <p className="text-lg md:text-xl mt-2 mb-10 max-w-2xl text-[#4A2522]/80 leading-relaxed">
                {hero.subtitle}
            </p>

            <a href="#pacotes" className="bg-[#F0C05A] hover:bg-[#E8AE38] text-[#4A2522] font-bold text-lg md:text-xl py-5 px-10 rounded-full transition-transform transform hover:scale-105 shadow-xl mb-12 flex items-center gap-2">
                {hero.ctaText} <ChevronDown className="w-5 h-5" />
            </a>

            {/* GATILHOS DE CONFIANÇA (Estilo E-commerce Forte) */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 py-8 w-full max-w-3xl bg-white rounded-3xl shadow-sm border border-[#611C24]/10">
              <div className="text-center px-4">
                <div className="text-4xl font-bold text-[#611C24] mb-1">{trustBadges.deliveries}</div>
                <div className="text-sm font-medium text-[#4A2522]/60">{trustBadges.deliveriesText}</div>
              </div>
              <div className="hidden md:block w-px h-12 bg-[#611C24]/10"></div>
              <div className="text-center px-4">
                <div className="text-4xl font-bold text-[#611C24] mb-1 flex items-center justify-center gap-1">
                  {trustBadges.rating} <Star className="w-6 h-6 fill-[#F0C05A] text-[#F0C05A] -mt-1" />
                </div>
                <div className="text-sm font-medium text-[#4A2522]/60">{trustBadges.ratingText}</div>
              </div>
              <div className="hidden md:block w-px h-12 bg-[#611C24]/10"></div>
              <div className="text-center px-4">
                <div className="text-4xl font-bold text-[#611C24] mb-1">
                  {trustBadges.guarantee}
                </div>
                <div className="text-sm font-medium text-[#4A2522]/60">{trustBadges.guaranteeText}</div>
              </div>
            </div>
        </div>
      </section>

      {/* 2. FAIXA COLORIDA (Separador Animado) */}
      <div className="bg-[#E63946] text-white py-4 overflow-hidden flex whitespace-nowrap mt-8 shadow-inner">
        <div className="animate-marquee flex gap-8 min-w-full pr-8">
          {marquee.map((item, i) => <span key={i} className="text-sm font-bold uppercase flex items-center gap-8">{item} <span>🎵</span></span>)}
        </div>
      </div>

      {/* 3. COMO FUNCIONA (Passo a passo visual super simples) */}
      <section id="como-funciona" className="py-20 px-4 bg-white relative">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-[#E63946] font-bold text-sm mb-4 uppercase">{howItWorks.badge}</p>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#611C24] mb-16">{howItWorks.title}</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {howItWorks.steps.map((step, index) => (
              <div key={index} className="bg-[#FFF9F5] p-8 rounded-[2rem] text-center border border-[#611C24]/5 hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-[#F0C05A] text-[#4A2522] text-3xl font-bold rounded-full flex items-center justify-center mx-auto mb-6 shadow-md">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold text-[#611C24] mb-3">{step.title}</h3>
                <p className="text-[#4A2522]/80 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. GALERIA DE VÍDEOS (Estilo Feed) */}
      <section className="bg-[#611C24] py-24 px-4 relative">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-[#F0C05A] font-bold text-sm mb-4 uppercase">{videoGallery.badge}</p>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">{videoGallery.title}</h2>
          <p className="text-white/80 text-lg mb-16 max-w-2xl mx-auto">{videoGallery.subtitle}</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {videoGallery.items.map((item) => (
              <div key={item.id} className="relative aspect-[9/16] bg-black rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10 group">
                <img src={item.thumbUrl} alt={item.title} className="w-full h-full object-cover opacity-70 group-hover:opacity-50 transition-opacity" />
                
                {/* Play Button bem chamativo */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-[#E63946] flex items-center justify-center transform group-hover:scale-110 transition-all shadow-[0_0_30px_rgba(230,57,70,0.6)] cursor-pointer">
                    <Play className="w-8 h-8 text-white ml-1" fill="white" />
                  </div>
                </div>

                <video controls preload="none" poster={item.thumbUrl} className="absolute inset-0 w-full h-full object-cover opacity-0 hover:opacity-100 z-10 transition-opacity duration-300">
                  <source src={item.videoUrl} type="video/mp4" />
                </video>
                
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent pointer-events-none">
                  <h3 className="text-white font-bold text-lg">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. COMPARATIVO (O Problema e a Solução - Acolhedor) */}
      <section className="py-24 px-4 bg-[#FFF9F5] relative">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#611C24] mb-12">
            {comparison.title} <br className="hidden md:block"/><span className="text-[#E63946]">{comparison.titleHighlight}</span>
          </h2>

          <div className="flex flex-col md:flex-row gap-6 items-stretch justify-center">
            {/* Presentes Comuns */}
            <div className="flex-1 bg-white rounded-[2rem] p-8 text-left border border-gray-200 shadow-sm opacity-80">
              <h3 className="text-gray-500 font-bold uppercase text-sm mb-6 flex items-center gap-2">
                <X className="w-5 h-5 text-red-400" /> {comparison.bad.title}
              </h3>
              <ul className="space-y-4">
                {comparison.bad.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-600">
                    <span className="mt-1 text-red-300">-</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* A Música */}
            <div className="flex-1 bg-[#611C24] text-white rounded-[2rem] p-8 text-left shadow-2xl relative transform md:-translate-y-4 border-4 border-[#F0C05A]">
              <div className="absolute -top-4 right-8 bg-[#F0C05A] text-[#4A2522] text-xs font-bold uppercase py-2 px-4 rounded-full shadow-md">
                ❤️ {comparison.good.badge}
              </div>
              
              <h3 className="text-[#F0C05A] font-bold uppercase text-sm mb-6 flex items-center gap-2">
                <Check className="w-5 h-5 text-[#F0C05A]" /> {comparison.good.title}
              </h3>
              <ul className="space-y-6">
                {comparison.good.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#F0C05A] mt-2 flex-shrink-0"></div>
                    <div>
                      <strong className="block text-lg font-bold">{item.title}</strong>
                      <span className="text-white/70 text-sm">{item.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 6. DEPOIMENTOS */}
      <section id="depoimentos" className="py-20 px-4 bg-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-[#E63946] font-bold text-sm mb-4 uppercase">{testimonials.badge}</p>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#611C24] mb-12">{testimonials.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            {testimonials.items.map((item, index) => (
              <div key={index} className="bg-[#FFF9F5] p-8 rounded-3xl shadow-sm border border-[#611C24]/5 flex flex-col justify-between">
                <div>
                  <div className="text-[#F0C05A] text-lg mb-4">★★★★★</div>
                  <p className="text-[#4A2522]/80 font-medium leading-relaxed mb-6">"{item.text}"</p>
                </div>
                <div className="flex items-center gap-4 pt-4 border-t border-[#611C24]/10">
                  <div className="w-10 h-10 rounded-full bg-[#611C24] text-white flex items-center justify-center font-bold">{item.initials}</div>
                  <div>
                    <h4 className="font-bold text-[#611C24] text-sm">{item.author}</h4>
                    <p className="text-xs text-[#E63946] font-bold">{item.occasion}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. PACOTES (Focado em Conversão e Clareza) */}
      <section id="pacotes" className="py-24 px-4 bg-[#611C24] text-center scroll-mt-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-16">Escolha o seu pacote</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center max-w-6xl mx-auto">
            {pricingPlans.map((plan) => (
              <div key={plan.id} className={`relative p-8 flex flex-col text-left transition-all rounded-[2rem] ${plan.highlight ? 'bg-white text-[#4A2522] shadow-2xl lg:scale-105 border-4 border-[#F0C05A] z-10' : 'bg-white/10 text-white border border-white/20'}`}>
                
                {plan.badge && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#E63946] text-white text-xs font-bold uppercase py-2 px-6 rounded-full shadow-lg whitespace-nowrap">
                    🔥 {plan.badge}
                  </div>
                )}
                
                <h3 className={`text-2xl font-bold mb-2 ${plan.highlight ? 'text-[#611C24]' : 'text-white'}`}>
                  {plan.name}
                </h3>
                <p className={`text-sm mb-6 h-10 ${plan.highlight ? 'text-gray-500' : 'text-white/60'}`}>{plan.description}</p>
                <div className={`text-5xl font-bold mb-8 ${plan.highlight ? 'text-[#611C24]' : 'text-white'}`}>{plan.price}</div>
                
                <ul className="flex-1 space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className={`w-5 h-5 flex-shrink-0 ${plan.highlight ? 'text-[#E63946]' : 'text-[#F0C05A]'}`} />
                      <span className={`text-sm font-medium ${plan.highlight ? 'text-[#4A2522]/80' : 'text-white/90'}`}>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button
                  onClick={() => setSelectedPlan(plan)}
                  className={`w-full py-4 rounded-full font-bold uppercase text-sm transition-all shadow-md ${plan.highlight ? 'bg-[#E63946] hover:bg-[#D90429] text-white' : 'bg-white hover:bg-[#F0C05A] text-[#611C24]'}`}
                >
                  Comprar agora
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. FAQ */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-[#611C24] mb-4">{faq.title}</h2>
          </div>
          <div className="space-y-4">
            {faq.items.map((item, idx) => (
              <div key={idx} className="bg-[#FFF9F5] rounded-2xl overflow-hidden">
                <button onClick={() => setOpenFaq(openFaq === idx ? null : idx)} className="w-full flex items-center justify-between p-6 text-left">
                  <span className="font-bold text-[#611C24]">{item.question}</span>
                  <ChevronDown className={`w-5 h-5 text-[#E63946] transition-transform duration-300 ${openFaq === idx ? 'rotate-180' : ''}`} />
                </button>
                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openFaq === idx ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <p className="px-6 pb-6 text-[#4A2522]/80">{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. FOOTER SIMPLES E CONFIÁVEL */}
      <footer className="bg-[#4A2522] text-white pt-16 pb-12 px-6 rounded-t-[3rem] mt-10">
        <div className="max-w-6xl mx-auto flex flex-col items-center text-center gap-8 mb-10">
          <div className="text-2xl font-serif font-bold flex items-center gap-2">
            Música de Presente <Heart className="w-4 h-4 text-[#F0C05A] fill-[#F0C05A]" />
          </div>
          <p className="text-white/60 text-sm max-w-sm">Presenteie quem você ama com uma emoção que dura para sempre.</p>
          <nav className="flex flex-wrap justify-center gap-6 text-sm font-bold text-white/80">
            <a href={contact.whatsapp} target="_blank" className="hover:text-[#F0C05A] transition-colors">Atendimento WhatsApp</a>
            <a href="#como-funciona" className="hover:text-[#F0C05A] transition-colors">Como Funciona</a>
            <a href="#pacotes" className="hover:text-[#F0C05A] transition-colors">Fazer Pedido</a>
          </nav>
        </div>
        <div className="text-center text-xs text-white/30 border-t border-white/10 pt-8">
          <p>© {new Date().getFullYear()} Música de Presente. CNPJ: 47.201.562/0001-67</p>
        </div>
      </footer>

    </main>
  );
}