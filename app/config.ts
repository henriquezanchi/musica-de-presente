import { Guitar, Heart, PawPrint } from 'lucide-react';

export const siteConfig = {
  stats: {
    totalCustomers: 127,
    customersLastMonth: 42
  },
  
  trustBadges: {
    deliveries: "150+",
    deliveriesText: "Músicas entregues",
    rating: "5.0",
    ratingText: "Avaliação máxima",
    guarantee: "100%",
    guaranteeText: "Emoção garantida"
  },
  
  pricingPlans: [
    {
      id: "essencial",
      name: "Pacote Essencial",
      price: "R$ 99",
      description: "O presente perfeito para surpreender hoje.",
      badge: null,
      highlight: false,
      features: [
        "Música Personalizada (MP3)",
        "Vídeo Legenda com Fundo Padrão",
        "Entrega em até 48 horas"
      ],
      checkoutUrl: "https://mpago.li/2e26g4p" 
    },
    {
      id: "lembranca",
      name: "Pacote Lembrança",
      price: "R$ 179",
      description: "Suas fotos preferidas no fundo do vídeo.",
      badge: null,
      highlight: false,
      features: [
        "Música Personalizada (MP3)",
        "Vídeo Legenda com SUAS FOTOS",
        "Entrega em até 48 horas"
      ],
      checkoutUrl: "https://mpago.li/2kPxs2u" 
    },
    {
      id: "premium",
      name: "Emoção Premium",
      price: "R$ 199",
      description: "A experiência mais completa e inesquecível.",
      badge: "MAIS VENDIDO",
      highlight: true, 
      features: [
        "Música Masterizada (WAV + MP3)",
        "Vídeo Legenda com SUAS FOTOS",
        "Pôster Digital com a Letra (PDF)",
        "Faixa Instrumental (Versão Karaokê)",
        "Entrega prioritária em até 48h"
      ],
      checkoutUrl: "https://mpago.li/1RQ4ceC" 
    }
  ],

  contact: {
    whatsapp: "https://wa.me/5562991729783?text=Oi!%20Gostaria%20de%20tirar%20uma%20dúvida%20sobre%20a%20Música%20de%20Presente.",
    instagram: "https://www.instagram.com/musica_depresente/"
  },

  hero: {
    badge: "O PRESENTE MAIS EMOCIONANTE DO ANO",
    title: "A história de vocês vai virar uma música",
    subtitle: "Esqueça os presentes comuns. Emocione quem você ama com uma música exclusiva, feita com a história de vocês, entregue direto no seu WhatsApp.",
    ctaText: "Quero criar minha música",
    tagline: "Uma lembrança única que fica para sempre.",
  },
  
  marquee: [
    "Revisão Inclusa", "Música Sob Encomenda", "Entrega em até 48h", "Feita com a Sua História", "Vídeo Legenda Grátis"
  ],

  comparison: {
    badge: "POR QUE ESCOLHER UMA MÚSICA?",
    title: "Presentes comuns são esquecidos.",
    titleHighlight: "Uma música dura para sempre.",
    bad: {
      title: "Presentes Normais",
      items: [
        "Roupas saem de moda ou deixam de servir",
        "Perfumes acabam rápido",
        "Chocolates duram só alguns minutos",
        "Cestam e flores murcham no dia seguinte"
      ]
    },
    good: {
      title: "Música de Presente",
      badge: "INESQUECÍVEL",
      items: [
        { title: "Para sempre", desc: "o arquivo digital nunca estraga" },
        { title: "Exclusivo", desc: "ninguém no mundo terá um presente igual" },
        { title: "Emocionante", desc: "faz chorar de alegria logo no primeiro play" },
        { title: "Fácil de mostrar", desc: "mande no grupo da família e amigos" }
      ]
    }
  },

  videoGallery: {
    badge: "VEJA COMO FICA",
    title: "Ouça e assista aos nossos exemplos",
    subtitle: "Todos os pacotes incluem um vídeo com a letra passando na tela. Dê o play e veja a qualidade que você vai receber.",
    items: [
      { id: 1, title: "Homenagem Dia das Mães", thumbUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80", videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4" },
      { id: 2, title: "Pedido de Casamento", thumbUrl: "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=800&q=80", videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4" },
      { id: 3, title: "Aniversário de Namoro", thumbUrl: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80", videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4" }
    ]
  },

  howItWorks: {
    badge: "É MUITO FÁCIL",
    title: "Como funciona?",
    subtitle: "Você não precisa saber cantar ou compor. Nós fazemos tudo por você.",
    steps: [
      { number: "1", title: "Conte a história", desc: "Você preenche um formulário rápido com os nomes, as histórias engraçadas e o estilo de música." },
      { number: "2", title: "Escolha o pacote", desc: "Selecione o pacote que cabe no seu bolso e faça o pagamento seguro via Mercado Pago." },
      { number: "3", title: "Receba no WhatsApp", desc: "Pronto! Em até 48 horas a música e o vídeo chegam no seu celular, prontos para presentear." }
    ]
  },

  portfolio: {
    title: "Músicas que já emocionaram",
    subtitle: "Ouça o estilo sertanejo, pop e acústico que criamos para outros clientes.",
    items: [
      { id: 1, title: "A Força da Bete", style: "Sertanejo", icon: Heart, desc: "Feita por filhos que queriam agradecer tudo que a mãe fez por eles.", coverUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80", audioUrl: "/audios/bete.mp3", durationText: "0:00 / 4:39" },
      { id: 2, title: "Nossos 70 Anos", style: "MPB", icon: Guitar, desc: "A história de um casal de avós que construiu uma família linda juntos.", coverUrl: "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=800&q=80", audioUrl: "/audios/ge-isa.mp3", durationText: "0:00 / 6:44" },
      { id: 3, title: "Nossa Doguinha", style: "Pop Animado", icon: PawPrint, desc: "Uma música super divertida feita para uma cachorrinha adotada.", coverUrl: "https://images.unsplash.com/photo-1543807535-eceef0bc6599?auto=format&fit=crop&w=800&q=80", audioUrl: "/audios/nata-mela.mp3", durationText: "0:00 / 2:56" }
    ]
  },

  testimonials: {
    badge: "O QUE NOSSOS CLIENTES DIZEM",
    title: "Choro de alegria garantido",
    items: [
      { text: '"Gente, não tenho palavras. Coloquei a música pra tocar no almoço de domingo e minha mãe não parava de chorar. Melhor presente que já dei."', author: "Mariana L.", occasion: "Presente de Aniversário", initials: "ML" },
      { text: '"Mandei no WhatsApp da minha namorada logo de manhã. Ela amou! A qualidade do áudio é absurda, parece música de rádio mesmo."', author: "Rafael Costa", occasion: "Aniversário de Namoro", initials: "RC" },
      { text: '"Tava sem grana pra dar algo caro e resolvi arriscar a música. Fez muito mais sucesso que qualquer presente de loja. Super recomendo!"', author: "Camila G.", occasion: "Dia dos Pais", initials: "CG" }
    ]
  },

  faq: {
    badge: "TIRE SUAS DÚVIDAS",
    title: "Perguntas Frequentes",
    items: [
      { question: "Tem alguma garantia que vai ficar bom?", answer: "Sim! Se você não gostar da música, nós fazemos uma alteração completa sem cobrar nada a mais. Sua satisfação é 100% garantida." },
      { question: "É seguro pagar no site?", answer: "Totalmente seguro. O pagamento é feito direto no sistema do Mercado Pago (PIX ou Cartão), nós não temos acesso aos dados do seu cartão." },
      { question: "E se eu não souber escrever a história direito?", answer: "Não se preocupe! Nosso formulário é super fácil de preencher e nós ajudamos a transformar suas respostas simples em uma letra linda e emocionante." },
      { question: "Como eu recebo a música?", answer: "Enviamos o arquivo em MP3 e o vídeo MP4 diretamente no seu WhatsApp." }
    ]
  },

  finalCta: {
    badge: "NÃO DEIXE PARA A ÚLTIMA HORA",
    title: "Garanta o presente mais incrível que eles já receberam",
    subtitle: "Clique no botão abaixo, escolha seu pacote e deixe o resto com a gente.",
    ctaText: "Fazer meu pedido agora",
  }
};