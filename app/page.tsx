'use client';

import { useState } from 'react';
import { siteConfig } from "./config";
import Waveform from "./Waveform";
import { ChevronDown, LucideIcon } from 'lucide-react';
import Formulario from './Formulario';

export default function Home() {
  const { hero, marquee, videoSection, howItWorks, portfolio, testimonials, faq, social, finalCta, stats, pricingPlans, contact } = siteConfig;
  
  // O Estado agora guarda qual plano foi selecionado. Se for null, o formulário está fechado.
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
           <a href="#planos" className="bg-[#3A1015] hover:bg-[#2A0B0F] text-[#FFF9F2] text-sm font-semibold py-2.5 px-6 rounded-full transition-all">
              Ver os Planos
           </a>
        </div>
      </header>

      {/* RENDERIZA O FORMULÁRIO SE UM PLANO FOR ESCOLHIDO */}
      {selectedPlan && <Formulario plan={selectedPlan} onClose={() => setSelectedPlan(null)} />}
      
      {/* 1. HERO SECTION */}
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
                <span className="text-2xl md:text-3xl font-serif font-bold text-[#3A1015]">Planos a partir de <span className="text-3xl md:text-4xl text-[#721C24]">R$ 99</span></span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 mb-16">
                <a href="#planos" className="bg-[#3A1015] hover:bg-[#2A0B0F] text-[#FFF9F2] font-medium text-lg py-4 px-10 rounded-full transition-all duration-300 transform hover:scale-105 shadow-xl">
                    {hero.ctaText}
                </a>
            </div>

            <Waveform className="mb-6 opacity-80" />
            
            <p className="text-base text-[#D4AF37] font-serif font-light leading-relaxed mb-12">
                {hero.tagline}
            </p>

            {showCounter && (
              <div className="flex flex-col items-center mt-4">
                <span className="text-6xl font-serif font-bold text-[#3A1015] leading-none mb-2">{displayCount}</span>
                <span className="text-sm font-light text-[#5A151C]/70 tracking-wide uppercase">{counterText}</span>
              </div>
            )}
        </div>
      </section>

      {/* 2. LETREIRO INFINITO */}
      <div className="bg-[#3A1015] text-[#FFF9F2] py-4 overflow-hidden flex whitespace-nowrap border-y border-[#2A0B0F] relative z-20">
        <div className="animate-marquee flex gap-12 min-w-full pr-12">
          {marquee.map((item, i) => <span key={i} className="text-xs md:text-sm font-medium tracking-widest uppercase flex items-center gap-6 text-[#FFF9F2]/90">{item} <span className="text-[#D4AF37] text-lg">♪</span></span>)}
        </div>
      </div>

      {/* 3. SEÇÃO DE PORTFÓLIO */}
      <section className="bg-[#3A1015] py-24 px-4 relative z-10 border-t border-[#2A0B0F]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#D4AF37] font-medium tracking-widest uppercase text-sm mb-4">— Ouça exemplos reais</p>
            <h2 className="text-4xl md:text-5xl font-serif text-[#FFF9F2] mb-4">{portfolio.title}</h2>
            <p className="text-[#FFF9F2]/70 text-lg max-w-xl mx-auto font-light">{portfolio.subtitle}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {portfolio.items.map((item) => {
              const Icon = item.icon as LucideIcon;
              return (
                <div key={item.id} className="bg-[#4A151C] rounded-3xl overflow-hidden shadow-lg border border-white/5 flex flex-col justify-between transition-all hover:scale-[1.02] duration-300">
                  <div className="p-6">
                    <div className="aspect-square relative rounded-2xl overflow-hidden mb-6 group cursor-pointer">
                      <img src={item.coverUrl} alt={item.title} className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-300" />
                      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                        <span className="inline-flex border border-[#D4AF37]/50 text-[#D4AF37] bg-white/5 text-xs px-3 py-1 rounded-full font-medium tracking-wide">{item.style}</span>
                        <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-[#D4AF37]"><Icon className="w-4 h-4" /></div>
                      </div>
                    </div>
                    <h3 className="text-[#FFF9F2] text-xl font-serif font-bold mb-3">{item.title}</h3>
                    <p className="text-[#FFF9F2]/70 text-sm leading-relaxed font-light mb-6">{item.desc}</p>
                  </div>
                  <div className="p-6 pt-0 mt-auto">
                    <audio controls className="w-full h-12 rounded-full border-t border-[#FFF9F2]/5 bg-black/10 text-white audio-player">
                      <source src={item.audioUrl} type="audio/mpeg" />
                    </audio>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. COMO FUNCIONA */}
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

      {/* 5. VÍDEO DE REAÇÃO */}
      <section className="bg-[#3A1015] py-24 px-4 text-center border-t border-[#2A0B0F]">
        <div className="max-w-4xl mx-auto">
          <p className="text-[#D4AF37] font-medium tracking-widest uppercase text-sm mb-4">{videoSection.badge}</p>
          <h2 className="text-4xl md:text-5xl font-serif text-[#FFF9F2] mb-4">{videoSection.title}</h2>
          <p className="text-[#FFF9F2]/70 text-lg mb-12 font-light">{videoSection.subtitle}</p>
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-[#4A151C] aspect-video bg-black max-w-3xl mx-auto">
             <video controls className="w-full h-full object-cover"><source src={videoSection.videoUrl} type="video/mp4" /></video>
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

      {/* 7. NOVA SEÇÃO DE PREÇOS (O DECOY EFFECT) */}
      <section id="planos" className="py-24 px-4 bg-[#2A0B0F] text-center border-t border-[#D4AF37]/20 scroll-mt-10">
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
          
          <a href="#planos" className="inline-block bg-[#D4AF37] hover:bg-[#C5A028] text-[#2A0B0F] font-bold text-lg md:text-xl py-5 px-12 rounded-full transition-all duration-300 transform hover:scale-105 shadow-[0_0_30px_rgba(212,175,55,0.3)]">
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
            <a href="#planos" className="hover:text-[#D4AF37] transition-colors">Fazer pedido</a>
          </nav>
        </div>
        <div className="text-center text-xs text-[#FFF9F2]/30 font-light border-t border-white/10 pt-8">
          <p>© {new Date().getFullYear()} Música de Presente. Todos os direitos reservados.</p>
        </div>
      </footer>

    </main>
  );
}