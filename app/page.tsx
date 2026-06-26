'use client';

import { useState } from 'react';
import { siteConfig } from "./config";
import Waveform from "./Waveform";
import { ChevronDown, LucideIcon, X, Sparkles, Play } from 'lucide-react'; // <-- Ícones novos adicionados aqui
import Formulario from './Formulario';

export default function Home() {
  const { hero, marquee, videoSection, comparison, videoGallery, howItWorks, portfolio, testimonials, faq, social, finalCta, stats, pricingPlans, contact } = siteConfig;
  
  const [selectedPlan, setSelectedPlan] = useState<any>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const showCounter = stats.totalCustomers > 100;
  const isHighVolume = stats.totalCustomers > 1000;
  const displayCount = isHighVolume ? stats.customersLastMonth : stats.totalCustomers;
  const counterText = isHighVolume 
    ? "clientes transformaram suas histórias em música este mês" 
    : "clientes transformaram suas histórias em música";

  return (
    <main className="min-h-screen font-sans bg-[#FFF9F2] text-[#4A151C] relative pt-20">
      
      {/* HEADER NATIVO */}
      <header className="absolute top-0 left-0 w-full z-40 px-6 py-6 flex items-center justify-between max-w-7xl mx-auto right-0">
        <div className="text-2xl md:text-3xl font-serif font-bold text-[#3A1015]">
           Música <span className="text-[#D4AF37] italic font-medium mx-1">de</span> Presente
        </div>
        <div className="flex items-center gap-6">
           <a href={contact.whatsapp} target="_blank" rel="noopener noreferrer" className="hidden md:block text-[#5A151C]/70 hover:text-[#5A151C] text-sm font-medium transition-colors">
              Falar com a gente
           </a>
           <a href="#pacotes" className="bg-[#3A1015] hover:bg-[#2A0B0F] text-[#FFF9F2] text-sm font-semibold py-2.5 px-6 rounded-full transition-all">
              Ver os Pacotes
           </a>
        </div>
      </header>

      {/* RENDERIZA O FORMULÁRIO */}
      {selectedPlan && <Formulario plan={selectedPlan} onClose={() => setSelectedPlan(null)} />}
      
      {/* 1. HERO SECTION (Mantida idêntica) */}
      <section className="relative w-full py-16 md:py-24 px-4 flex flex-col items-center text-center overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-40">
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] aspect-square rounded-full border border-[#D4AF37]/10"></div>
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] aspect-square rounded-full border border-[#D4AF37]/15"></div>
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] aspect-square rounded-full border border-[#D4AF37]/20"></div>
        </div>
        
        <div className="relative z-10 flex flex-col items-center mt-8">
            <div className="border border-[#D4AF37]/50 text-[#D4AF37] rounded-full px-4 py-1 text-sm font-medium mb-8 bg-white/50 shadow-sm flex items-center gap-2">
                <span className="text-[#D4AF37] text-[10px]">●</span> {hero.badge}
            </div>

            <h1 className="text-5xl md:text-7xl font-serif font-bold tracking-tight mb-4 max-w-4xl leading-tight text-[#3A1015]">
                Transforme sua história em música <br/>
                <span className="text-[#D4AF37] italic font-light">o presente que fica pra sempre</span>
            </h1>
            
            <p className="text-lg md:text-xl mt-6 mb-8 max-w-2xl font-light text-[#5A151C]/80">
                {hero.subtitle}
            </p>

            <div className="flex flex-col items-center mb-6 bg-white/60 backdrop-blur-sm border border-[#D4AF37]/20 px-6 py-2.5 rounded-2xl shadow-sm">
              <div className="flex items-center gap-3">
                <span className="text-2xl md:text-3xl font-serif font-bold text-[#3A1015]">Pacotes a partir de <span className="text-3xl md:text-4xl text-[#721C24]">R$ 99</span></span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 mb-16">
                <a href="#pacotes" className="bg-[#3A1015] hover:bg-[#2A0B0F] text-[#FFF9F2] font-medium text-lg py-4 px-10 rounded-full transition-all duration-300 transform hover:scale-105 shadow-xl">
                    {hero.ctaText}
                </a>
            </div>

            <Waveform className="mb-6 opacity-80" />
            
            <p className="text-base text-[#D4AF37] font-serif font-light leading-relaxed mb-12">
                {hero.tagline}
            </p>
        </div>
      </section>

      {/* 2. LETREIRO INFINITO */}
      <div className="bg-[#3A1015] text-[#FFF9F2] py-4 overflow-hidden flex whitespace-nowrap border-y border-[#2A0B0F] relative z-20">
        <div className="animate-marquee flex gap-12 min-w-full pr-12">
          {marquee.map((item, i) => <span key={i} className="text-xs md:text-sm font-medium tracking-widest uppercase flex items-center gap-6 text-[#FFF9F2]/90">{item} <span className="text-[#D4AF37] text-lg">♪</span></span>)}
        </div>
      </div>

      {/* 3. NOVA SEÇÃO: COMPARATIVO (Design Editorial e Emocional) */}
      <section className="py-24 px-4 bg-[#FFF9F2] relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-[#D4AF37] font-medium tracking-widest uppercase text-sm mb-4">{comparison.badge}</p>
          <h2 className="text-4xl md:text-5xl font-serif text-[#3A1015] mb-16">
            {comparison.title} <span className="text-[#D4AF37] italic">{comparison.titleHighlight}</span>
          </h2>

          <div className="flex flex-col md:flex-row gap-8 items-stretch justify-center">
            {/* O Lado Ruim (Presentes Comuns) - Visual apagado e efêmero */}
            <div className="flex-1 bg-[#F5EBE1]/50 border border-[#4A151C]/5 rounded-3xl p-10 text-left opacity-80 hover:opacity-100 transition-opacity">
              <h3 className="text-[#5A151C]/50 font-bold uppercase tracking-widest text-sm mb-8 border-b border-[#4A151C]/10 pb-4">
                {comparison.bad.title}
              </h3>
              <ul className="space-y-6">
                {comparison.bad.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-4 text-[#5A151C]/70">
                    <X className="w-5 h-5 text-[#5A151C]/30 flex-shrink-0 mt-0.5" />
                    <span className="font-light leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* O Lado Bom (A Música) - Visual premium, destacado e vivo */}
            <div className="flex-1 bg-white border-2 border-[#D4AF37]/40 rounded-3xl p-10 text-left shadow-[0_0_30px_rgba(212,175,55,0.1)] relative transform md:-translate-y-4">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#D4AF37] text-[#3A1015] text-xs font-bold uppercase tracking-widest py-2 px-6 rounded-full shadow-md flex items-center gap-2">
                <Sparkles className="w-4 h-4" /> {comparison.good.badge}
              </div>
              
              <h3 className="text-[#D4AF37] font-bold uppercase tracking-widest text-sm mb-8 border-b border-[#D4AF37]/20 pb-4 mt-2">
                {comparison.good.title}
              </h3>
              <ul className="space-y-6">
                {comparison.good.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-[#D4AF37]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-[#D4AF37] text-sm">✓</span>
                    </div>
                    <div>
                      <strong className="text-[#3A1015] font-serif block text-lg">{item.title}</strong>
                      <span className="text-[#5A151C]/70 font-light text-sm">{item.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 4. NOVA SEÇÃO: GALERIA DE VÍDEOS */}
      <section className="bg-[#1A050A] py-24 px-4 relative z-10 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#D4AF37] font-medium tracking-widest uppercase text-sm mb-4">{videoGallery.badge}</p>
            <h2 className="text-4xl md:text-5xl font-serif text-[#FFF9F2] mb-6">{videoGallery.title}</h2>
            <p className="text-[#FFF9F2]/70 text-lg max-w-2xl mx-auto font-light">{videoGallery.subtitle}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {videoGallery.items.map((item) => (
              <div key={item.id} className="relative aspect-[9/16] rounded-2xl overflow-hidden group border border-white/10 bg-black shadow-2xl">
                <img src={item.thumbUrl} alt={item.title} className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
                
                {/* Play Button centralizado */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30 transform group-hover:scale-110 transition-transform duration-300 cursor-pointer">
                    <Play className="w-6 h-6 text-white ml-1" fill="white" />
                  </div>
                </div>

                {/* Player real de vídeo escondido que sobrepõe ao interagir (pode ser ajustado) */}
                <video controls preload="none" poster={item.thumbUrl} className="absolute inset-0 w-full h-full object-cover opacity-0 hover:opacity-100 z-10 transition-opacity duration-300">
                  <source src={item.videoUrl} type="video/mp4" />
                </video>
                
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent pointer-events-none">
                  <h3 className="text-white font-serif text-xl">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. COMO FUNCIONA */}
      <section id="como-funciona" className="py-24 px-4 bg-[#FFF9F2] relative z-20 border-t border-[#D4AF37]/10 scroll-mt-10">
        <div className="max-w-6xl mx-auto text-center md:text-left">
          <div className="text-center mb-16">
            <p className="text-[#D4AF37] font-medium tracking-widest uppercase text-sm mb-4">{howItWorks.badge}</p>
            <h2 className="text-4xl md:text-5xl font-serif text-[#3A1015] mb-4">{howItWorks.title}</h2>
            <p className="text-[#5A151C]/80 text-lg max-w-xl mx-auto font-light">{howItWorks.subtitle}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {howItWorks.steps.map((step, index) => (
              <div key={index} className="bg-white p-10 rounded-3xl shadow-sm border border-[#4A151C]/5 relative overflow-hidden transition-transform hover:-translate-y-2 duration-300">
                <div className="absolute top-4 right-8 text-8xl font-serif font-bold text-[#D4AF37]/10 select-none">{step.number}</div>
                <div className="w-12 h-12 rounded-full border border-[#D4AF37] flex items-center justify-center text-[#D4AF37] mb-8 bg-[#FFF9F2]"><span className="text-lg">✓</span></div>
                <h3 className="text-2xl font-serif font-bold text-[#3A1015] mb-4 relative z-10">{step.title}</h3>
                <p className="text-[#5A151C]/70 relative z-10 leading-relaxed font-light">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. DEPOIMENTOS */}
      <section id="depoimentos" className="py-24 px-4 bg-[#FFF9F2] border-t border-[#4A151C]/10">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-[#D4AF37] font-medium tracking-widest uppercase text-sm mb-4">{testimonials.badge}</p>
          <h2 className="text-4xl md:text-5xl font-serif text-[#3A1015] mb-16">{testimonials.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {testimonials.items.map((item, index) => (
              <div key={index} className="bg-white p-10 rounded-3xl shadow-sm border border-[#4A151C]/5 flex flex-col justify-between hover:-translate-y-1 transition-transform duration-300">
                <div>
                  <div className="text-[#D4AF37] text-lg mb-6 tracking-widest">★★★★★</div>
                  <p className="text-[#5A151C]/80 italic font-serif text-lg leading-relaxed mb-8">{item.text}</p>
                </div>
                <div className="flex items-center gap-4 pt-6 border-t border-[#4A151C]/10">
                  <div className="w-12 h-12 rounded-full border border-[#D4AF37] text-[#D4AF37] flex items-center justify-center font-bold bg-[#FFF9F2]">{item.initials}</div>
                  <div>
                    <h4 className="font-bold text-[#3A1015]">{item.author}</h4>
                    <p className="text-sm text-[#D4AF37]">{item.occasion}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. PACOTES (O DECOY EFFECT) */}
      <section id="pacotes" className="py-24 px-4 bg-[#2A0B0F] text-center border-t border-[#D4AF37]/20 scroll-mt-10">
        <div className="max-w-6xl mx-auto">
          <p className="text-[#D4AF37] font-medium tracking-widest uppercase text-sm mb-4">— Escolha o seu pacote</p>
          <h2 className="text-4xl md:text-5xl font-serif text-[#FFF9F2] mb-16">A trilha sonora da sua história</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center max-w-6xl mx-auto">
            {pricingPlans.map((plan) => (
              <div key={plan.id} className={`relative bg-white rounded-3xl p-8 flex flex-col h-full text-left transition-transform duration-300 ${plan.highlight ? 'border-4 border-[#D4AF37] shadow-[0_0_40px_rgba(212,175,55,0.3)] lg:scale-105 z-10' : 'border border-[#4A151C]/10 shadow-lg'}`}>
                {plan.badge && (
                  <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-[#D4AF37] text-[#2A0B0F] text-xs font-bold uppercase tracking-widest py-2 px-6 rounded-full shadow-md">
                    {plan.badge}
                  </div>
                )}
                
                <h3 className={`text-2xl font-serif font-bold mb-2 ${plan.highlight ? 'text-[#D4AF37]' : 'text-[#3A1015]'}`}>
                  {plan.name}
                </h3>
                <p className="text-[#5A151C]/70 text-sm mb-6 h-10">{plan.description}</p>
                <div className="text-4xl md:text-5xl font-serif font-bold text-[#3A1015] mb-8">{plan.price}</div>
                
                <ul className="flex-1 space-y-4 mb-10">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-[#D4AF37] mt-1 text-lg">✓</span>
                      <span className={`text-[#5A151C]/90 text-sm leading-relaxed ${plan.highlight ? 'font-medium' : 'font-light'}`}>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button
                  onClick={() => setSelectedPlan(plan)}
                  className={`w-full py-4 rounded-full font-bold text-lg transition-all ${plan.highlight ? 'bg-[#D4AF37] hover:bg-[#C5A028] text-[#2A0B0F]' : 'bg-[#3A1015] hover:bg-[#2A0B0F] text-[#FFF9F2]'}`}
                >
                  Selecionar {plan.name}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. PERGUNTAS FREQUENTES */}
      <section className="py-24 px-4 bg-[#FFF9F2] border-t border-[#4A151C]/5">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#D4AF37] font-medium tracking-widest uppercase text-sm mb-4">{faq.badge}</p>
            <h2 className="text-4xl md:text-5xl font-serif text-[#3A1015] mb-4">{faq.title}</h2>
          </div>
          <div className="space-y-4">
            {faq.items.map((item, idx) => (
              <div key={idx} className="bg-white border border-[#4A151C]/10 rounded-2xl overflow-hidden transition-all duration-300 hover:border-[#D4AF37]/50 shadow-sm">
                <button onClick={() => setOpenFaq(openFaq === idx ? null : idx)} className="w-full flex items-center justify-between p-6 text-left">
                  <span className="font-medium text-lg text-[#3A1015]">{item.question}</span>
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

      {/* 9. FINAL CTA */}
      <section className="py-24 px-4 bg-[#2A0B0F] text-center border-t border-[#D4AF37]/20">
        <div className="max-w-4xl mx-auto">
          <div className="inline-block border border-[#D4AF37]/50 text-[#D4AF37] rounded-full px-4 py-1 text-sm font-medium mb-8 bg-white/5 shadow-sm">
            {finalCta.badge}
          </div>
          <h2 className="text-4xl md:text-6xl font-serif text-[#FFF9F2] mb-6 leading-tight">
            {finalCta.title}
          </h2>
          <p className="text-[#FFF9F2]/70 text-lg md:text-xl mb-12 font-light max-w-2xl mx-auto">
            {finalCta.subtitle}
          </p>
          
          <a href="#pacotes" className="inline-block bg-[#D4AF37] hover:bg-[#C5A028] text-[#2A0B0F] font-bold text-lg md:text-xl py-5 px-12 rounded-full transition-all duration-300 transform hover:scale-105 shadow-[0_0_30px_rgba(212,175,55,0.3)]">
            {finalCta.ctaText}
          </a>
        </div>
      </section>

      {/* 10. INSTAGRAM */}
      <section className="py-24 px-4 bg-[#FFF9F2] border-t border-[#D4AF37]/10 text-center relative z-10">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <p className="text-[#D4AF37] font-medium tracking-widest uppercase text-sm mb-4">{social.badge}</p>
          <h2 className="text-4xl md:text-5xl font-serif text-[#3A1015] mb-4">
            {social.title} <span className="text-[#D4AF37] italic">{social.titleHighlight}</span>
          </h2>
          <p className="text-[#5A151C]/70 text-lg mb-12 font-light">{social.subtitle}</p>
          
          <a href={contact.instagram} target="_blank" rel="noopener noreferrer" className="relative group inline-block">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#FFDC80] via-[#FD1D1D] to-[#833AB4] rounded-3xl blur-md opacity-40 group-hover:opacity-70 transition-opacity duration-300"></div>
            <div className="relative bg-gradient-to-tr from-[#FFDC80] via-[#FD1D1D] to-[#833AB4] p-5 rounded-3xl shadow-xl transform group-hover:scale-105 transition-transform duration-300">
               <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
            </div>
          </a>
        </div>
      </section>

      {/* 11. FOOTER */}
      <footer className="bg-[#1A050A] text-[#FFF9F2]/60 pt-16 pb-8 px-6 border-t border-white/5">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
          <div className="text-2xl font-serif font-bold text-[#FFF9F2]">
            Música <span className="text-[#D4AF37] italic font-medium mx-1">de</span> Presente
          </div>
          <nav className="flex flex-wrap justify-center gap-6 text-sm font-medium">
            <a href={contact.instagram} target="_blank" className="hover:text-[#D4AF37] transition-colors">Instagram</a>
            <a href={contact.whatsapp} target="_blank" className="hover:text-[#D4AF37] transition-colors">WhatsApp</a>
            <a href="#como-funciona" className="hover:text-[#D4AF37] transition-colors">Como funciona</a>
            <a href="#depoimentos" className="hover:text-[#D4AF37] transition-colors">Depoimentos</a>
            <a href="#pacotes" className="hover:text-[#D4AF37] transition-colors">Fazer pedido</a>
          </nav>
        </div>
        <div className="text-center text-xs text-[#FFF9F2]/30 font-light border-t border-white/10 pt-8">
          <p>© {new Date().getFullYear()} Música de Presente. Todos os direitos reservados.</p>
        </div>
      </footer>

    </main>
  );
}