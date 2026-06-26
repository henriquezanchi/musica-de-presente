'use client';

import { useState } from 'react';
import { siteConfig } from "./config";
import Waveform from "./Waveform";
import { ChevronDown, LucideIcon, Minus, Sparkles, Play, Star, Check } from 'lucide-react'; 
import Formulario from './Formulario';

export default function Home() {
  const { hero, marquee, comparison, videoGallery, howItWorks, portfolio, testimonials, faq, finalCta, pricingPlans, contact, trustBadges } = siteConfig;
  
  const [selectedPlan, setSelectedPlan] = useState<any>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main className="min-h-screen font-sans bg-[#F9F7F1] text-[#1C1917] relative pt-24 selection:bg-[#B45330] selection:text-white">
      
      {/* HEADER BOUTIQUE */}
      <header className="absolute top-0 left-0 w-full z-40 px-6 py-8 flex items-center justify-between max-w-7xl mx-auto right-0">
        <div className="text-xl md:text-2xl font-serif font-bold text-[#1C1917] tracking-tighter">
           MÚSICA<span className="text-[#B45330] font-light mx-1">DE</span>PRESENTE.
        </div>
        <div className="flex items-center gap-8">
           <a href={contact.whatsapp} target="_blank" rel="noopener noreferrer" className="hidden md:block text-[#1C1917]/60 hover:text-[#B45330] text-xs font-bold transition-colors uppercase tracking-[0.2em]">
              Suporte
           </a>
           <a href="#pacotes" className="bg-[#1C1917] hover:bg-[#B45330] text-[#F9F7F1] text-xs font-bold py-3 px-8 rounded-full transition-all uppercase tracking-[0.2em]">
              Iniciar
           </a>
        </div>
      </header>

      {selectedPlan && <Formulario plan={selectedPlan} onClose={() => setSelectedPlan(null)} />}
      
      {/* 1. HERO SECTION (Editorial e Clean) */}
      <section className="relative w-full py-16 md:py-24 px-4 flex flex-col items-center text-center">
        <div className="relative z-10 flex flex-col items-center max-w-5xl mx-auto">
            <span className="text-[#B45330] text-xs font-bold uppercase tracking-[0.2em] mb-8 border border-[#B45330]/30 px-4 py-1.5 rounded-full">
                {hero.badge}
            </span>

            <h1 className="text-6xl md:text-[5.5rem] font-serif font-medium tracking-tight mb-8 leading-[1.05] text-[#1C1917]">
                {hero.title.split('.')[0]}<span className="text-[#B45330]">.</span><br />
                <span className="opacity-80 text-5xl md:text-[4.5rem]">{hero.title.split('.')[1]}</span>
            </h1>
            
            <p className="text-lg md:text-xl mt-2 mb-12 max-w-2xl font-light text-[#1C1917]/70 leading-relaxed">
                {hero.subtitle}
            </p>

            <a href="#pacotes" className="bg-[#B45330] hover:bg-[#9A4223] text-white font-medium text-lg md:text-xl py-5 px-12 rounded-full transition-all duration-300 transform hover:-translate-y-1 shadow-[0_15px_30px_-10px_rgba(180,83,48,0.4)] mb-20">
                {hero.ctaText}
            </a>

            {/* FAIXA DE GATILHOS DE CONFIANÇA - Linhas Limpas */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-12 py-10 border-t border-b border-[#1C1917]/10 w-full max-w-4xl relative">
              
              <div className="text-center z-10 px-4">
                <div className="text-5xl font-serif font-bold text-[#1C1917] leading-none mb-2">{trustBadges.deliveries}</div>
                <div className="text-xs font-bold uppercase tracking-[0.1em] text-[#1C1917]/50">{trustBadges.deliveriesText}</div>
              </div>
              
              <div className="hidden md:block w-px h-16 bg-[#1C1917]/10"></div>
              
              <div className="text-center z-10 px-4">
                <div className="text-5xl font-serif font-bold text-[#1C1917] leading-none mb-2 flex items-center justify-center gap-2">
                  {trustBadges.rating} <Star className="w-8 h-8 fill-[#B45330] text-[#B45330] -mt-1" />
                </div>
                <div className="text-xs font-bold uppercase tracking-[0.1em] text-[#1C1917]/50">{trustBadges.ratingText}</div>
              </div>
              
              <div className="hidden md:block w-px h-16 bg-[#1C1917]/10"></div>
              
              <div className="text-center z-10 px-4">
                <div className="text-5xl font-serif font-bold text-[#1C1917] leading-none mb-2">
                  {trustBadges.guarantee}
                </div>
                <div className="text-xs font-bold uppercase tracking-[0.1em] text-[#1C1917]/50">{trustBadges.guaranteeText}</div>
              </div>
            </div>
        </div>
      </section>

      {/* 2. LETREIRO INFINITO (Separador Sutil) */}
      <div className="bg-[#1C1917] text-[#F9F7F1] py-4 overflow-hidden flex whitespace-nowrap">
        <div className="animate-marquee flex gap-12 min-w-full pr-12">
          {marquee.map((item, i) => <span key={i} className="text-xs font-medium tracking-[0.2em] uppercase flex items-center gap-8 text-white/80">{item} <span className="text-[#B45330]">•</span></span>)}
        </div>
      </div>

      {/* 3. COMPARATIVO (Design Galeria) */}
      <section className="py-32 px-4 relative">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-[#B45330] font-bold tracking-[0.2em] uppercase text-xs mb-6">{comparison.badge}</p>
          <h2 className="text-4xl md:text-5xl font-serif text-[#1C1917] mb-20 leading-tight">
            {comparison.title} <br className="hidden md:block"/><span className="text-[#1C1917]/50 italic">{comparison.titleHighlight}</span>
          </h2>

          <div className="flex flex-col md:flex-row gap-0 items-stretch justify-center border border-[#1C1917]/10 rounded-[2rem] overflow-hidden">
            
            {/* Ruim */}
            <div className="flex-1 bg-white/50 p-12 text-left md:border-r border-[#1C1917]/10">
              <h3 className="text-[#1C1917]/40 font-bold uppercase tracking-[0.15em] text-xs mb-10">
                {comparison.bad.title}
              </h3>
              <ul className="space-y-8">
                {comparison.bad.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-4 text-[#1C1917]/60">
                    <Minus className="w-5 h-5 text-[#1C1917]/20 flex-shrink-0 mt-0.5" />
                    <span className="font-light text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Bom */}
            <div className="flex-1 bg-[#1C1917] text-[#F9F7F1] p-12 text-left relative">
              <div className="absolute top-10 right-10 flex items-center gap-2 text-[#B45330] text-xs font-bold uppercase tracking-[0.2em]">
                <Sparkles className="w-4 h-4" /> {comparison.good.badge}
              </div>
              
              <h3 className="text-[#B45330] font-bold uppercase tracking-[0.15em] text-xs mb-10">
                {comparison.good.title}
              </h3>
              <ul className="space-y-8">
                {comparison.good.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <Check className="w-5 h-5 text-[#B45330] flex-shrink-0 mt-1" />
                    <div>
                      <strong className="block text-xl font-serif mb-1">{item.title}</strong>
                      <span className="text-white/60 font-light text-base">{item.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 4. GALERIA DE VÍDEOS */}
      <section className="bg-[#1C1917] py-32 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="text-left max-w-xl">
              <p className="text-[#B45330] font-bold tracking-[0.2em] uppercase text-xs mb-6">{videoGallery.badge}</p>
              <h2 className="text-4xl md:text-5xl font-serif text-[#F9F7F1] mb-6">{videoGallery.title}</h2>
              <p className="text-white/50 text-lg font-light">{videoGallery.subtitle}</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {videoGallery.items.map((item) => (
              <div key={item.id} className="relative aspect-[9/16] bg-[#2C2927] rounded-xl overflow-hidden group">
                <img src={item.thumbUrl} alt={item.title} className="w-full h-full object-cover opacity-60 group-hover:opacity-30 transition-opacity duration-700" />
                
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center transform group-hover:scale-110 group-hover:bg-[#B45330] transition-all duration-300 cursor-pointer">
                    <Play className="w-6 h-6 text-white ml-1" fill="currentColor" />
                  </div>
                </div>

                <video controls preload="none" poster={item.thumbUrl} className="absolute inset-0 w-full h-full object-cover opacity-0 hover:opacity-100 z-10 transition-opacity duration-300">
                  <source src={item.videoUrl} type="video/mp4" />
                </video>
                
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-white font-serif text-xl border-b border-white/20 pb-3">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. COMO FUNCIONA */}
      <section id="como-funciona" className="py-32 px-4 relative">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-[#B45330] font-bold tracking-[0.2em] uppercase text-xs mb-6">{howItWorks.badge}</p>
          <h2 className="text-4xl md:text-5xl font-serif text-[#1C1917] mb-20">{howItWorks.title}</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left relative">
            {/* Linha conectora desktop */}
            <div className="hidden md:block absolute top-12 left-10 right-10 h-px bg-[#1C1917]/10 -z-10"></div>
            
            {howItWorks.steps.map((step, index) => (
              <div key={index} className="bg-transparent relative">
                <div className="text-6xl font-serif font-light text-[#B45330]/20 mb-6">{step.number}</div>
                <h3 className="text-2xl font-serif font-bold text-[#1C1917] mb-4">{step.title}</h3>
                <p className="text-[#1C1917]/60 leading-relaxed font-light">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. PACOTES (Ancoragem Visual Direta) */}
      <section id="pacotes" className="py-32 px-4 bg-white text-center border-y border-[#1C1917]/5 scroll-mt-10">
        <div className="max-w-6xl mx-auto">
          <p className="text-[#B45330] font-bold tracking-[0.2em] uppercase text-xs mb-6">— INVESTIMENTO</p>
          <h2 className="text-4xl md:text-5xl font-serif text-[#1C1917] mb-20">Reserve sua sessão no estúdio</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
            {pricingPlans.map((plan) => (
              <div key={plan.id} className={`relative p-10 flex flex-col text-left transition-all duration-300 rounded-3xl ${plan.highlight ? 'bg-[#1C1917] text-[#F9F7F1] shadow-2xl lg:-translate-y-4' : 'bg-[#F9F7F1] text-[#1C1917] border border-[#1C1917]/5'}`}>
                
                {plan.badge && (
                  <div className="inline-block bg-[#B45330] text-white text-[10px] font-bold uppercase tracking-[0.2em] py-1.5 px-4 rounded-full mb-8 w-max">
                    {plan.badge}
                  </div>
                )}
                
                <h3 className="text-2xl font-serif font-bold mb-3">{plan.name}</h3>
                <p className={`text-sm mb-10 h-10 font-light ${plan.highlight ? 'text-white/60' : 'text-[#1C1917]/60'}`}>{plan.description}</p>
                <div className="text-5xl font-serif font-light tracking-tight mb-10">{plan.price}</div>
                
                <ul className="flex-1 space-y-5 mb-12">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${plan.highlight ? 'text-[#B45330]' : 'text-[#B45330]'}`} />
                      <span className={`text-sm leading-relaxed font-light ${plan.highlight ? 'text-white/80' : 'text-[#1C1917]/80'}`}>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button
                  onClick={() => setSelectedPlan(plan)}
                  className={`w-full py-5 rounded-full font-bold tracking-[0.15em] uppercase text-xs transition-all ${plan.highlight ? 'bg-[#B45330] hover:bg-[#9A4223] text-white' : 'bg-[#1C1917] hover:bg-[#B45330] text-white'}`}
                >
                  Selecionar Edição
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. FAQ Minimalista */}
      <section className="py-32 px-4 bg-[#F9F7F1]">
        <div className="max-w-3xl mx-auto">
          <div className="text-left mb-16">
            <h2 className="text-4xl font-serif text-[#1C1917] mb-6">{faq.title}</h2>
          </div>
          <div className="space-y-2">
            {faq.items.map((item, idx) => (
              <div key={idx} className="border-b border-[#1C1917]/10 transition-all duration-300">
                <button onClick={() => setOpenFaq(openFaq === idx ? null : idx)} className="w-full flex items-center justify-between py-6 text-left">
                  <span className="font-serif text-xl text-[#1C1917]">{item.question}</span>
                  <ChevronDown className={`w-5 h-5 text-[#B45330] transition-transform duration-300 ${openFaq === idx ? 'rotate-180' : ''}`} />
                </button>
                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openFaq === idx ? 'max-h-96 opacity-100 pb-8' : 'max-h-0 opacity-0'}`}>
                  <p className="text-[#1C1917]/60 font-light leading-relaxed">{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. FOOTER ULTRA CLEAN */}
      <footer className="bg-[#1C1917] text-[#F9F7F1] pt-24 pb-12 px-6">
        <div className="max-w-6xl mx-auto flex flex-col items-center text-center gap-12 mb-16">
          <div className="text-3xl font-serif font-bold tracking-tighter">
            MÚSICA<span className="text-[#B45330] font-light mx-1">DE</span>PRESENTE.
          </div>
          <nav className="flex flex-wrap justify-center gap-10 text-xs font-bold uppercase tracking-[0.2em] text-white/50">
            <a href={contact.whatsapp} target="_blank" className="hover:text-[#B45330] transition-colors">WhatsApp</a>
            <a href="#como-funciona" className="hover:text-[#B45330] transition-colors">Processo</a>
            <a href="#pacotes" className="hover:text-[#B45330] transition-colors">Tabela de Preços</a>
          </nav>
        </div>
        <div className="text-center text-xs text-white/20 font-light">
          <p>© {new Date().getFullYear()} Música de Presente. Construído para emocionar.</p>
        </div>
      </footer>

    </main>
  );
}