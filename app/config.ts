import { Guitar, Heart, PawPrint } from 'lucide-react';

export const siteConfig = {
  stats: {
    totalCustomers: 127,
    customersLastMonth: 42
  },
  
  // === NOVA ESTRUTURA DE PLANOS (DECOY EFFECT) ===
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
      checkoutUrl: "https://mpago.li/2e26g4p" // Link R$ 99
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
      checkoutUrl: "https://mpago.li/2kPxs2u" // Link R$ 179
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
      checkoutUrl: "https://mpago.li/1RQ4ceC" // Link R$ 199
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
    ctaText: "Ver os Planos",
    tagline: "cada música, uma história que fica pra sempre",
  },
  marquee: [
    "Revisão Inclusa", "Música Sob Encomenda", "Entrega em até 48h", "Feita com a Sua História", "100% Personalizada", "Vídeo Legendado Grátis"
  ],
  videoSection: {
    badge: "— REAÇÕES REAIS",
    title: "Quando a música toca, as palavras faltam",
    subtitle: "Veja as reações de quem recebeu uma música feita especialmente para ela.",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4"
  },
  howItWorks: {
    badge: "— COMO FUNCIONA",
    title: "Três passos para a sua música",
    subtitle: "Sem complicação. Você conta, a gente cria. Em até 48h direto no seu WhatsApp.",
    steps: [
      { number: "01", title: "Você conta sua história", desc: "Preenche o formulário com o estilo e tudo que quer expressar. Quanto mais detalhe, mais especial fica." },
      { number: "02", title: "Pagamento seguro", desc: "Escolha o seu pacote ideal e pague com segurança via Mercado Pago." },
      { number: "03", title: "A música chega em até 48h", desc: "Você recebe o áudio direto no WhatsApp e o seu vídeo legendado." }
    ]
  },
  portfolio: {
    title: "Músicas que já foram criadas",
    subtitle: "Cada música foi criada a partir de uma história real. A sua pode ser a próxima.",
    items: [
      { id: 1, title: "Bete — A força de uma mãe", style: "Sertanejo Raiz", icon: Guitar, desc: "Uma homenagem emocionante para uma mãe guerreira, com toda a força e amor que ela representa para a família.", coverUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80", audioUrl: "/audios/bete.mp3", durationText: "0:00 / 4:39" },
      { id: 2, title: "Gê e Isa — 70 anos de amor", style: "Sertanejo", icon: Heart, desc: "A história de um casal que atravessou décadas juntos. Uma das músicas mais emocionantes que já entregamos.", coverUrl: "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=800&q=80", audioUrl: "/audios/ge-isa.mp3", durationText: "0:00 / 6:44" },
      { id: 3, title: "Nata e Mela — Amor de cachorro", style: "Pop", icon: PawPrint, desc: "A história única de uma mulher e sua companheira de quatro patas. Porque todo amor merece uma música.", coverUrl: "https://images.unsplash.com/photo-1543807535-eceef0bc6599?auto=format&fit=crop&w=800&q=80", audioUrl: "/audios/nata-mela.mp3", durationText: "0:00 / 2:56" }
    ]
  },
  testimonials: {
    badge: "— DEPOIMENTOS",
    title: "O que dizem quem já viveu isso",
    items: [
      { text: '"Era o aniversário de 15 anos da minha filha. Não sabia como expressar tudo que sentia. A música disse por mim — ela chorou, a família inteira chorou."', author: "Maria Luiza", occasion: "Aniversário de 15 anos", initials: "ML" },
      { text: '"Pedi como surpresa de casamento para minha esposa. Ela disse que foi o melhor presente que já recebeu na vida. Valeu cada centavo."', author: "Rafael C.", occasion: "Pedido de casamento", initials: "RC" },
      { text: '"Fiz em homenagem ao meu pai. Para mim é impossível colocar tudo que ele representava em palavras. A música conseguiu o que eu não consegui."', author: "Carla G.", occasion: "Homenagem ao pai", initials: "CG" }
    ]
  },
  faq: {
    badge: "— DÚVIDAS",
    title: "Perguntas frequentes",
    items: [
      { question: "Como vai ser feita a minha música?", answer: "Nós utilizamos uma combinação de inteligência artificial de ponta, curadoria humana e edição de áudio profissional para garantir que a letra reflita perfeitamente a sua história com qualidade de estúdio." },
      { question: "E se eu não gostar do resultado?", answer: "Sua satisfação é garantida. Se não ficar do jeito que você esperava, você tem direito a uma revisão completa (letra, melodia ou tom) inclusa no seu pedido." },
      { question: "O pagamento é seguro?", answer: "Totalmente seguro. Utilizamos o Mercado Pago, que processa a transação garantindo a proteção dos seus dados via PIX ou Cartão de Crédito." },
      { question: "Quanto tempo leva?", answer: "Você receberá a sua música em MP3 e o vídeo legendado diretamente no seu WhatsApp em até 48 horas após a confirmação do pagamento." },
      { question: "Posso tirar dúvidas antes?", answer: "Com certeza! É só clicar no botão de WhatsApp em nossa página e falar diretamente com a nossa equipe." }
    ]
  },
  social: {
    badge: "— SIGA A GENTE",
    title: "Acompanhe histórias que ",
    titleHighlight: "emocionam",
    subtitle: "Novas músicas, reações reais e bastidores no Instagram."
  },
  finalCta: {
    badge: "✦ PRONTO PARA COMEÇAR?",
    title: "Transforme suas memórias em uma canção única",
    subtitle: "Escolha o seu pacote ideal e emocione quem você ama de um jeito que nunca será esquecido.",
    ctaText: "Escolher meu pacote",
  }
};