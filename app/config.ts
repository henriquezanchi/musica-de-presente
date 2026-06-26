import { Guitar, Heart, PawPrint } from 'lucide-react';

export const siteConfig = {
  stats: {
    totalCustomers: 127,
    customersLastMonth: 42
  },
  
  trustBadges: {
    deliveries: "150+",
    deliveriesText: "histórias eternizadas",
    rating: "5.0",
    ratingText: "avaliação média",
    guarantee: "100%",
    guaranteeText: "emoção garantida"
  },
  
  pricingPlans: [
    {
      id: "essencial",
      name: "Edição Essencial",
      price: "R$ 99",
      description: "A introdução perfeita para surpreender hoje.",
      badge: null,
      highlight: false,
      features: [
        "Faixa Original (MP3 Alta Qualidade)",
        "Lyric Video (Estética Minimalista)",
        "Entrega em até 48 horas"
      ],
      checkoutUrl: "https://mpago.li/2e26g4p" 
    },
    {
      id: "lembranca",
      name: "Edição Galeria",
      price: "R$ 179",
      description: "Suas memórias visuais compondo a arte.",
      badge: null,
      highlight: false,
      features: [
        "Faixa Original (MP3 Alta Qualidade)",
        "Lyric Video com seu Acervo de Fotos",
        "Entrega em até 48 horas"
      ],
      checkoutUrl: "https://mpago.li/2kPxs2u" 
    },
    {
      id: "premium",
      name: "Edição Acervo Premium",
      price: "R$ 199",
      description: "A experiência completa de colecionador.",
      badge: "ESCOLHA PRINCIPAL",
      highlight: true, 
      features: [
        "Áudio Masterizado (WAV + MP3)",
        "Lyric Video com seu Acervo de Fotos",
        "Pôster Tipográfico da Letra (PDF)",
        "Faixa Instrumental Original",
        "Entrega prioritária em até 48h"
      ],
      checkoutUrl: "https://mpago.li/1RQ4ceC" 
    }
  ],

  contact: {
    whatsapp: "https://wa.me/5562991729783?text=Oi!%20Gostaria%20de%20criar%20uma%20música.",
    instagram: "https://www.instagram.com/musica_depresente/"
  },

  hero: {
    badge: "ARTE SONORA SOB DEMANDA",
    title: "Sua vida daria um clipe.",
    subtitle: "Nós o compomos para você. Fuja do efêmero e presenteie com uma obra audiovisual original feita a partir das suas próprias memórias.",
    ctaText: "Ver Edições Disponíveis",
    tagline: "cada composição é um documento histórico do seu amor",
  },
  
  marquee: [
    "Design Sonoro Exclusivo", "Letras Autorais", "Qualidade de Estúdio", "Entrega Digital Rápida", "Vídeo Legenda Incluso"
  ],

  comparison: {
    badge: "— O PARADOXO DO PRESENTE",
    title: "O comum é esquecido.",
    titleHighlight: "O que toca a alma, fica.",
    bad: {
      title: "Objetos que passam",
      items: [
        "Roupas que saem de moda na próxima estação",
        "Perfumes que acabam e o vidro é descartado",
        "Chocolates que desaparecem no mesmo dia",
        "Bens materiais que perdem o valor"
      ]
    },
    good: {
      title: "A Arte que permanece",
      badge: "✦ ATEMPORAL",
      items: [
        { title: "Indestrutível", desc: "o arquivo digital nunca envelhece" },
        { title: "Exclusivo", desc: "uma obra registrada da sua história" },
        { title: "Imersivo", desc: "desperta lágrimas e sorrisos profundos" },
        { title: "Universal", desc: "fácil de compartilhar com gerações" }
      ]
    }
  },

  videoGallery: {
    badge: "— EXPOSIÇÃO DIGITAL",
    title: "O impacto visual da sua história",
    subtitle: "Dê o play para vivenciar a qualidade cinematográfica que acompanha a sua faixa musical.",
    items: [
      { id: 1, title: "Votos de Casamento", thumbUrl: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80", videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4" },
      { id: 2, title: "Legado Familiar", thumbUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80", videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4" },
      { id: 3, title: "Pedido Inesperado", thumbUrl: "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=800&q=80", videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4" }
    ]
  },

  howItWorks: {
    badge: "— PROCESSO CRIATIVO",
    title: "Sua obra em 3 atos",
    subtitle: "Nosso estúdio transforma suas palavras em arranjos em tempo recorde.",
    steps: [
      { number: "01", title: "O Roteiro", desc: "Você nos confia os nomes, os detalhes marcantes e escolhe o gênero musical desejado." },
      { number: "02", title: "A Curadoria", desc: "Selecione a edição perfeita para o seu bolso e garanta sua reserva no estúdio." },
      { number: "03", title: "O Espetáculo", desc: "Em até 48 horas, o áudio finalizado e o clipe chegam com qualidade master ao seu celular." }
    ]
  },

  portfolio: {
    title: "Audioteca",
    subtitle: "Cada faixa é uma vida. Explore algumas de nossas produções recentes.",
    items: [
      { id: 1, title: "Força Matriz", style: "Folk Acústico", icon: Heart, desc: "Arranjos orgânicos criados para celebrar a resiliência de uma matriarca.", coverUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80", audioUrl: "/audios/bete.mp3", durationText: "0:00 / 4:39" },
      { id: 2, title: "Sete Décadas", style: "MPB Clássica", icon: Guitar, desc: "A passagem do tempo documentada através de cordas e uma letra poética.", coverUrl: "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=800&q=80", audioUrl: "/audios/ge-isa.mp3", durationText: "0:00 / 6:44" },
      { id: 3, title: "Companhia Pura", style: "Indie Pop", icon: PawPrint, desc: "Uma melodia leve e animada sobre o amor incondicional por um resgatado.", coverUrl: "https://images.unsplash.com/photo-1543807535-eceef0bc6599?auto=format&fit=crop&w=800&q=80", audioUrl: "/audios/nata-mela.mp3", durationText: "0:00 / 2:56" }
    ]
  },

  testimonials: {
    badge: "— CRÍTICAS",
    title: "A reação do público",
    items: [
      { text: '"Eu não sabia como organizar meus sentimentos. A música traduziu anos de convivência em 3 minutos perfeitos. A sala inteira desabou a chorar."', author: "Mariana L.", occasion: "Aniversário de 15 anos", initials: "ML" },
      { text: '"Usei para pedir minha noiva em casamento. É um nível de exclusividade absurdo. O clipe com nossas fotos rolando ao fundo foi o golpe final."', author: "Rafael Costa", occasion: "Noivado", initials: "RC" },
      { text: '"Uma obra de arte. A melodia, a voz, a forma como as piadas internas da nossa família foram colocadas na letra... Trabalho impecável."', author: "Camila G.", occasion: "Bodas de Prata", initials: "CG" }
    ]
  },

  faq: {
    badge: "— BASTIDORES",
    title: "Dúvidas Frequentes",
    items: [
      { question: "O que significa 'Música feita com IA'?", answer: "Nós utilizamos o que há de mais moderno em inteligência artificial generativa, combinada com nossa edição humana profissional, para criar arranjos de alta fidelidade baseados nas suas diretrizes." },
      { question: "E se a arte não me agradar?", answer: "Nós garantimos a sua emoção. Se o resultado não for o que você sonhou, nossa equipe realiza uma revisão estrutural (melodia, tom ou letra) sem custos adicionais." },
      { question: "A transação é segura?", answer: "Sim. Nossa arquitetura de pagamentos é 100% blindada pelo ecossistema do Mercado Pago." },
      { question: "Qual o formato de entrega?", answer: "Entregamos via link e arquivo direto no seu WhatsApp, contendo o MP3 de alta qualidade e o arquivo de vídeo (.mp4)." }
    ]
  },

  finalCta: {
    badge: "✦ ENCOMENDE A SUA",
    title: "Sua história está pronta para ser ouvida",
    subtitle: "O estúdio está aberto. Escolha sua edição e inicie o processo criativo agora mesmo.",
    ctaText: "Iniciar Produção",
  }
};