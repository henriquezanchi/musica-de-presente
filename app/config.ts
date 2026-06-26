import { Guitar, Heart, PawPrint } from 'lucide-react';

export const siteConfig = {
  stats: {
    totalCustomers: 127,
    customersLastMonth: 42
  },
  
  // NOVA SEÇÃO: GATILHOS DE CONFIANÇA (Baseado na sua imagem)
  trustBadges: {
    deliveries: "+150",
    deliveriesText: "músicas entregues",
    rating: "5.0",
    ratingText: "avaliação média",
    guarantee: "✓",
    guaranteeText: "garantia total"
  },
  
  pricingPlans: [
    {
      id: "essencial",
      name: "Pacote Essencial",
      price: "R$ 99",
      description: "A porta de entrada perfeita para emocionar.",
      badge: null,
      highlight: false,
      features: [
        "Música Personalizada (MP3)",
        "Lyric Video (Fundo Padrão)",
        "Entrega em até 48h"
      ],
      checkoutUrl: "https://mpago.li/2e26g4p" 
    },
    {
      id: "lembranca",
      name: "Pacote Lembrança",
      price: "R$ 179",
      description: "Para quem quer reviver momentos visuais.",
      badge: null,
      highlight: false,
      features: [
        "Música Personalizada (MP3)",
        "Lyric Video com as suas Fotos no fundo",
        "Entrega em até 48h"
      ],
      checkoutUrl: "https://mpago.li/2kPxs2u" 
    },
    {
      id: "premium",
      name: "Emoção Premium",
      price: "R$ 199",
      description: "A experiência mais luxuosa e completa.",
      badge: "Mais Escolhido",
      highlight: true, 
      features: [
        "Música em Alta Qualidade (WAV Estúdio + MP3)",
        "Lyric Video com as suas Fotos no fundo",
        "Pôster Digital em PDF com a Letra",
        "Faixa Instrumental (Karaokê)",
        "Entrega em até 48h"
      ],
      checkoutUrl: "https://mpago.li/1RQ4ceC" 
    }
  ],

  contact: {
    whatsapp: "https://wa.me/5562991729783?text=Oi!%20Gostaria%20de%20tirar%20uma%20dúvida%20sobre%20a%20Música%20de%20Presente.",
    instagram: "https://www.instagram.com/musica_depresente/"
  },

  hero: {
    badge: "Músicas feitas com carinho",
    title: "Transforme sua história em música",
    subtitle: "Uma música feita com a sua história — pra homenagear quem você ama de um jeito que nunca será esquecido.",
    ctaText: "Ver os Pacotes",
    tagline: "cada música, uma história que fica pra sempre",
  },
  
  marquee: [
    "Revisão Inclusa", "Música Sob Encomenda", "Entrega em até 48h", "Feita com a Sua História", "100% Personalizada", "Vídeo Legendado Grátis"
  ],

  comparison: {
    badge: "— O VALOR DO INESQUECÍVEL",
    title: "Por que uma música vale",
    titleHighlight: "mais que mil presentes?",
    bad: {
      title: "Presentes Comuns",
      items: [
        "Roupas saem de moda ou rasgam",
        "Perfumes acabam e o frasco vai pro lixo",
        "Chocolates duram apenas alguns minutos",
        "Jantares caros são esquecidos no dia seguinte"
      ]
    },
    good: {
      title: "Música Personalizada",
      badge: "✦ ETERNO",
      items: [
        { title: "Eterna", desc: "o arquivo fica pra sempre" },
        { title: "Única", desc: "ninguém no mundo tem uma igual" },
        { title: "Emocionante", desc: "toca direto na alma" },
        { title: "Compartilhável", desc: "mostre pra família e amigos" }
      ]
    }
  },

  videoGallery: {
    badge: "— EXPERIÊNCIA VISUAL",
    title: "A sua história em formato de clipe",
    subtitle: "Dê o play e sinta a emoção do lyric video que vamos entregar diretamente no seu WhatsApp.",
    items: [
      { id: 1, title: "História de Casamento", thumbUrl: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80", videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4" },
      { id: 2, title: "Homenagem Dia das Mães", thumbUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80", videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4" },
      { id: 3, title: "Pedido de Namoro", thumbUrl: "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=800&q=80", videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4" }
    ]
  },

  howItWorks: {
    badge: "— JORNADA SIMPLES",
    title: "Como a magia acontece",
    subtitle: "Você conta, a gente cria. Em até 48 horas.",
    steps: [
      { number: "01", title: "Sua História", desc: "Preencha o formulário contando os detalhes, os nomes e o estilo musical." },
      { number: "02", title: "O Pedido", desc: "Escolha o pacote ideal e finalize o pagamento com segurança." },
      { number: "03", title: "A Entrega", desc: "Receba o áudio e o vídeo emocionante direto no seu WhatsApp." }
    ]
  },

  portfolio: {
    title: "Trilhas Sonoras Reais",
    subtitle: "Cada play é uma vida diferente. Ouça as homenagens que já produzimos.",
    items: [
      { id: 1, title: "Bete — A força de uma mãe", style: "Sertanejo Raiz", icon: Guitar, desc: "Uma homenagem emocionante para uma mãe guerreira, com toda a força e amor que ela representa para a família.", coverUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80", audioUrl: "/audios/bete.mp3", durationText: "0:00 / 4:39" },
      { id: 2, title: "Gê e Isa — 70 anos de amor", style: "Sertanejo", icon: Heart, desc: "A história de um casal que atravessou décadas juntos. Uma das músicas mais emocionantes que já entregamos.", coverUrl: "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=800&q=80", audioUrl: "/audios/ge-isa.mp3", durationText: "0:00 / 6:44" },
      { id: 3, title: "Nata e Mela — Amor de cachorro", style: "Pop", icon: PawPrint, desc: "A história única de uma mulher e sua companheira de quatro patas. Porque todo amor merece uma música.", coverUrl: "https://images.unsplash.com/photo-1543807535-eceef0bc6599?auto=format&fit=crop&w=800&q=80", audioUrl: "/audios/nata-mela.mp3", durationText: "0:00 / 2:56" }
    ]
  },

  testimonials: {
    badge: "— PROVA SOCIAL",
    title: "Lágrimas de alegria",
    items: [
      { text: '"Era o aniversário de 15 anos da minha filha. Não sabia como expressar tudo que sentia. A música disse por mim — ela chorou, a família inteira chorou."', author: "Maria Luiza", occasion: "Aniversário de 15 anos", initials: "ML" },
      { text: '"Pedi como surpresa de casamento para minha esposa. Ela disse que foi o melhor presente que já recebeu na vida. Valeu cada centavo."', author: "Rafael C.", occasion: "Pedido de casamento", initials: "RC" },
      { text: '"Fiz em homenagem ao meu pai. Para mim é impossível colocar tudo que ele representava em palavras. A música conseguiu o que eu não consegui."', author: "Carla G.", occasion: "Homenagem ao pai", initials: "CG" }
    ]
  },

  faq: {
    badge: "— TRANSPARÊNCIA",
    title: "Dúvidas Frequentes",
    items: [
      { question: "Como vai ser feita a minha música?", answer: "Utilizamos inteligência artificial de ponta aliada à curadoria humana e edição de estúdio para garantir que a sua história vire uma obra de arte." },
      { question: "E se eu não gostar do resultado?", answer: "Sua satisfação é garantida. Se não ficar como esperado, você tem direito a uma revisão completa (letra, melodia ou tom)." },
      { question: "O pagamento é seguro?", answer: "Totalmente. Utilizamos o Mercado Pago para processar PIX ou Cartão com proteção total de dados." },
      { question: "Quanto tempo leva?", answer: "Em até 48 horas após o pagamento, a música e o vídeo estarão no seu WhatsApp." }
    ]
  },

  finalCta: {
    badge: "✦ O MOMENTO É AGORA",
    title: "Eternize quem você ama",
    subtitle: "Escolha o seu pacote, conte a história e deixe a música falar por você.",
    ctaText: "Escolher meu pacote",
  }
};