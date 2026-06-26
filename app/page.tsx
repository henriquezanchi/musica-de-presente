'use client';

import { useState } from 'react';
import { siteConfig } from "./config";
import Waveform from "./Waveform";
import { ChevronDown, LucideIcon, X, Sparkles, Play, Star, Check } from 'lucide-react'; 
import Formulario from './Formulario';

export default function Home() {
  const { hero, marquee, comparison, videoGallery, howItWorks, portfolio, testimonials, faq, finalCta, pricingPlans, contact, trustBadges } = siteConfig;
  
  const [selectedPlan, setSelectedPlan] = useState<any>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main className="min-h-screen font-sans bg-[#FFF9F2] text-[#4A151C] relative pt-24 selection:bg-[#D4AF37] selection:text-[#3A1015]">
      
      {/* HEADER MINIMALISTA */}
      <header className="absolute top-0 left-0 w-full z-40 px-6 py-8 flex items-center justify-between max-w-7xl mx-auto right-0">
        <div className="text-2xl font-serif font-bold text-[#3A1015] tracking-wide">
           Música <span className="text-[#D4AF37] italic font-medium mx-1">de</span> Presente
        </div>
        <div className="flex items-center gap-8">
           <a href={contact.whatsapp} target="_blank" rel="noopener noreferrer" className="hidden md:block text-[#5A151C]/70 hover:text-[#3A1015] text-sm font-medium transition-colors uppercase tracking-widest">
              Contato
           </a>
           <a href="#pacotes" className="bg-[#3A1015] hover:bg-[#D4AF37] hover:text-[#3A1015] text-[#FFF9F2] text-sm font-semibold py-3 px-8 rounded-none border border-[#3A1015] transition-all uppercase tracking-widest">
              Fazer Pedido
           </a>
        </div>
      </header>

      {selectedPlan && <Formulario plan={selectedPlan} onClose={() => setSelectedPlan(null)} />}
      
      {/* 1. HERO SECTION (Foco Absoluto em Conversão) */}
      <section className="relative w-full py-16 md:py-20 px-4 flex flex-col items-center text-center">
        <div className="relative z-10 flex flex-col items-center max-w-5xl mx-auto">
            <span className="text-[#D4AF37] text-xs font-bold uppercase tracking-widest mb-6 border-b border-[#D4AF37]/30 pb-2">
                {hero.badge}
            </span>

            <h1 className="text-6xl md:text-8xl font-serif font-bold tracking-tight mb-6 leading-[1.1] text-[#3A1015]">
                Transforme sua história <br className="hidden md:block" /> em música
            </h1>
            
            <p className="text-xl md:text-2xl mt-4 mb-10 max-w-2xl font-light text-[#5A151C]/80 leading-relaxed">
                {hero.subtitle}
            </p>

            <a href="#pacotes" className="bg-[#D4AF37] hover:bg-[#C5A028] text-[#3A1015] font-bold text-lg md:text-xl py-5 px-14 rounded-full transition-transform transform hover:scale-105 shadow-[0_10px_40px_-10px_rgba(212,175,55,0.5)] mb-16">
                {hero.ctaText}
            </a>

            {/* FAIXA DE GATILHOS DE CONFIANÇA (Implantada exatamente como o anexo) */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 py-8 border-y border-[#4A151C]/10 w-full max-w-3xl relative">
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 opacity-30">
                <Waveform />
              </div>
              
              <div className="text-center z-10 bg-[#FFF9F2] px-4">
                <div className="text-5xl font-serif font-bold text-[#3A1015] leading-none mb-1">{trustBadges.deliveries}</div>
                <div className="text-sm font-light text-[#5A151C]/70">{trustBadges.deliveriesText}</div>
              </div>
              
              <div className="hidden md:block w-px h-12 bg-[#4A151C]/15"></div>
              
              <div className="text-center z-10 bg-[#FFF9F2] px-4">
                <div className="text-5xl font-serif font-bold text-[#3A1015] leading-none mb-1 flex items-center justify-center gap-2">
                  {trustBadges.rating} <Star className="w-8 h-8 fill-[#3A1015] text-[#3A1015] -mt-1" />
                </div>
                <div className="text-sm font-light text-[#5A151C]/70">{trustBadges.ratingText}</div>
              </div>
              
              <div className="hidden md:block w-px h-12 bg-[#4A151C]/15"></div>
              
              <div className="text-center z-10 bg-[#FFF9F2] px-4">
                <div className="text-5xl font-serif font-bold text-[#3A1015] leading-none mb-1">
                  <Check className="w-12 h-12 text-[#3A1015] mx-auto -mt-1" strokeWidth={3} />
                </div>
                <div className="text-sm font-light text-[#5A151C]/70">{trustBadges.guaranteeText}</div>
              </div>
            </div>
        </div>
      </section>

      {/* 2. LETREIRO INFINITO (Separador Elegante) */}
      <div className="bg-[#1A050A] text-[#D4AF37] py-5 overflow-hidden flex whitespace-nowrap mt-10">
        <div className="animate-marquee flex gap-12 min-w-full pr-12">
          {marquee.map((item, i) => <span key={i} className="text-xs md:text-sm font-medium tracking-widest uppercase flex items-center gap-6">{item} <span className="text-white/20 text-lg">✦</span></span>)}
        </div>
      </div>

      {/* 3. COMPARATIVO (O Problema e a Solução) */}
      <section className="py-24 px-4 bg-white relative">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-[#D4AF37] font-bold tracking-widest uppercase text-xs mb-4">{comparison.badge}</p>
          <h2 className="text-4xl md:text-5xl font-serif text-[#3A1015] mb-16">
            {comparison.title} <span className="text-[#D4AF37] italic">{comparison.titleHighlight}</span>
          </h2>

          <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-stretch justify-center">
            <div className="flex-1 bg-[#FFF9F2] rounded-none border border-[#4A151C]/10 p-10 text-left">
              <h3 className="text-[#5A151C]/50 font-bold uppercase tracking-widest text-xs mb-8 border-b border-[#4A151C]/10 pb-4">
                {comparison.bad.title}
              </h3>
              <ul className="space-y-6">
                {comparison.bad.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-4 text-[#5A151C]/70">
                    <X className="w-4 h-4 text-[#5A151C]/40 flex-shrink-0 mt-1" />
                    <span className="font-light">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex-1 bg-[#3A1015] text-[#FFF9F2] rounded-none p-10 text-left shadow-2xl relative transform md:-translate-y-4">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#D4AF37] text-[#3A1015] text-xs font-bold uppercase tracking-widest py-2 px-6 shadow-md flex items-center gap-2">
                <Sparkles className="w-4 h-4" /> {comparison.good.badge}
              </div>
              
              <h3 className="text-[#D4AF37] font-bold uppercase tracking-widest text-xs mb-8 border-b border-white/10 pb-4 mt-2">
                {comparison.good.title}
              </h3>
              <ul className="space-y-6">
                {comparison.good.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <Check className="w-5 h-5 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-lg font-serif">{item.title}</strong>
                      <span className="text-white/60 font-light text-sm">{item.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 4. GALERIA DE VÍDEOS (Prova Social em Movimento) */}
      <section className="bg-[#1A050A] py-32 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6 border-b border-white/10 pb-10">
            <div className="text-left max-w-xl">
              <p className="text-[#D4AF37] font-bold tracking-widest uppercase text-xs mb-4">{videoGallery.badge}</p>
              <h2 className="text-4xl md:text-5xl font-serif text-[#FFF9F2] mb-4">{videoGallery.title}</h2>
              <p className="text-white/50 text-lg font-light">{videoGallery.subtitle}</p>
            </div>
            <a href="#pacotes" className="text-[#D4AF37] hover:text-white uppercase tracking-widest text-sm font-bold transition-colors">
              Fazer meu vídeo →
            </a>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {videoGallery.items.map((item) => (
              <div key={item.id} className="relative aspect-[9/16] bg-black group overflow-hidden border border-white/10">
                <img src={item.thumbUrl} alt={item.title} className="w-full h-full object-cover opacity-50 group-hover:opacity-30 transition-opacity duration-700" />
                
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-transparent border border-[#D4AF37] flex items-center justify-center transform group-hover:scale-110 group-hover:bg-[#D4AF37] transition-all duration-300 cursor-pointer">
                    <Play className="w-5 h-5 text-[#D4AF37] group-hover:text-[#1A050A] ml-1" fill="currentColor" />
                  </div>
                </div>

                <video controls preload="none" poster={item.thumbUrl} className="absolute inset-0 w-full h-full object-cover opacity-0 hover:opacity-100 z-10 transition-opacity duration-300">
                  <source src={item.videoUrl} type="video/mp4" />
                </video>
                
                <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black to-transparent pointer-events-none">
                  <h3 className="text-white font-serif text-xl">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. ÁUDIOS E PORTFÓLIO */}
      <section className="py-24 px-4 bg-[#FFF9F2]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif text-[#3A1015] mb-4">{portfolio.title}</h2>
            <p className="text-[#5A151C]/70 text-lg max-w-xl mx-auto font-light">{portfolio.subtitle}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {portfolio.items.map((item) => {
              const Icon = item.icon as LucideIcon;
              return (
                <div key={item.id} className="bg-white border border-[#4A151C]/10 p-6 flex flex-col justify-between hover:shadow-xl transition-shadow duration-300">
                  <div>
                    <div className="aspect-square relative mb-6 group cursor-pointer overflow-hidden">
                      <img src={item.coverUrl} alt={item.title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
                      <div className="absolute top-4 right-4 bg-white text-[#3A1015] text-xs px-3 py-1 font-bold tracking-wide uppercase">{item.style}</div>
                    </div>
                    <h3 className="text-[#3A1015] text-2xl font-serif font-bold mb-3">{item.title}</h3>
                    <p className="text-[#5A151C]/70 text-sm leading-relaxed font-light mb-8">{item.desc}</p>
                  </div>
                  <div>
                    <audio controls className="w-full h-10">
                      <source src={item.audioUrl} type="audio/mpeg" />
                    </audio>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. PACOTES (Estrutura Focada em Ancoragem) */}
      <section id="pacotes" className="py-32 px-4 bg-[#1A050A] text-center border-t border-white/5 scroll-mt-10">
        <div className="max-w-6xl mx-auto">
          <p className="text-[#D4AF37] font-bold tracking-widest uppercase text-xs mb-4">— O SEU INVESTIMENTO</p>
          <h2 className="text-4xl md:text-5xl font-serif text-[#FFF9F2] mb-20">Escolha a experiência ideal</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-end max-w-6xl mx-auto">
            {pricingPlans.map((plan) => (
              <div key={plan.id} className={`relative bg-white p-8 flex flex-col text-left transition-all duration-300 ${plan.highlight ? 'border-4 border-[#D4AF37] shadow-[0_0_50px_rgba(212,175,55,0.15)] z-10 py-12' : 'border border-[#4A151C]/10 opacity-90 hover:opacity-100'}`}>
                {plan.badge && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#D4AF37] text-[#3A1015] text-xs font-bold uppercase tracking-widest py-1.5 px-6 shadow-md">
                    {plan.badge}
                  </div>
                )}
                
                <h3 className={`text-2xl font-serif font-bold mb-2 ${plan.highlight ? 'text-[#3A1015]' : 'text-[#3A1015]/80'}`}>
                  {plan.name}
                </h3>
                <p className="text-[#5A151C]/60 text-sm mb-6 h-10 font-light">{plan.description}</p>
                <div className="text-5xl font-serif font-bold text-[#3A1015] mb-8">{plan.price}</div>
                
                <ul className="flex-1 space-y-4 mb-10 border-t border-[#4A151C]/10 pt-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-[#D4AF37] flex-shrink-0" />
                      <span className={`text-[#5A151C]/80 text-sm leading-relaxed ${plan.highlight ? 'font-medium' : 'font-light'}`}>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button
                  onClick={() => setSelectedPlan(plan)}
                  className={`w-full py-4 font-bold tracking-widest uppercase text-sm transition-all border ${plan.highlight ? 'bg-[#3A1015] border-[#3A1015] hover:bg-[#D4AF37] hover:border-[#D4AF37] text-[#FFF9F2] hover:text-[#3A1015]' : 'bg-transparent border-[#3A1015] text-[#3A1015] hover:bg-[#3A1015] hover:text-[#FFF9F2]'}`}
                >
                  Selecionar Pacote
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. FAQ */}
      <section className="py-24 px-4 bg-[#FFF9F2] border-t border-[#4A151C]/5">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif text-[#3A1015] mb-4">{faq.title}</h2>
          </div>
          <div className="space-y-4">
            {faq.items.map((item, idx) => (
              <div key={idx} className="bg-white border border-[#4A151C]/10 overflow-hidden transition-all duration-300">
                <button onClick={() => setOpenFaq(openFaq === idx ? null : idx)} className="w-full flex items-center justify-between p-6 text-left">
                  <span className="font-serif font-bold text-lg text-[#3A1015]">{item.question}</span>
                  <ChevronDown className={`w-5 h-5 text-[#D4AF37] transition-transform duration-300 ${openFaq === idx ? 'rotate-180' : ''}`} />
                </button>
                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openFaq === idx ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <p className="p-6 pt-0 text-[#5A151C]/70 font-light leading-relaxed">{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. FOOTER */}
      <footer className="bg-[#1A050A] text-[#FFF9F2]/60 pt-16 pb-8 px-6 border-t border-white/5">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 mb-12 border-b border-white/10 pb-12">
          <div className="text-2xl font-serif font-bold text-[#FFF9F2] tracking-wide">
            Música <span className="text-[#D4AF37] italic font-medium mx-1">de</span> Presente
          </div>
          <nav className="flex flex-wrap justify-center gap-8 text-xs font-bold uppercase tracking-widest">
            <a href={contact.whatsapp} target="_blank" className="hover:text-[#D4AF37] transition-colors">WhatsApp</a>
            <a href="#como-funciona" className="hover:text-[#D4AF37] transition-colors">Como Funciona</a>
            <a href="#pacotes" className="hover:text-[#D4AF37] transition-colors">Fazer Pedido</a>
          </nav>
        </div>
        <div className="text-center text-xs text-white/30 font-light">
          <p>© {new Date().getFullYear()} Música de Presente. Todos os direitos reservados.</p>
        </div>
      </footer>

    </main>
  );
}