import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Inicializa o Resend com a chave que você colocou no .env.local
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    // Puxa os dados que o formulário enviou
    const dados = await request.json();

    // 1. E-MAIL PARA VOCÊ (O dono do site)
    await resend.emails.send({
      from: 'Música de Presente <onboarding@resend.dev>', // Usamos o e-mail de teste gratuito do Resend
      to: ['henrique.zanchi@gmail.com'], // COLOQUE O SEU E-MAIL REAL AQUI
      subject: `🚨 Novo Pedido: Música de ${dados.nomeRemetente} para ${dados.nomeDestinatario}`,
      html: `
        <h2>Você tem um novo pedido de música!</h2>
        <p><strong>De:</strong> ${dados.nomeRemetente}</p>
        <p><strong>Para:</strong> ${dados.nomeDestinatario}</p>
        <p><strong>E-mail do cliente:</strong> ${dados.emailCliente}</p>
        <p><strong>Ocasião:</strong> ${dados.ocasiao}</p>
        <p><strong>História:</strong> ${dados.historia}</p>
        <p><strong>Plano Escolhido:</strong> ${dados.plano}</p>
        <br/>
        <p>Acesse o Firebase para ver todos os detalhes.</p>
      `,
    });

    // 2. E-MAIL PARA O CLIENTE (Confirmação)
    await resend.emails.send({
      from: 'Música de Presente <onboarding@resend.dev>',
      to: [dados.emailCliente], // Envia para o e-mail que o cliente digitou no formulário
      subject: `Recebemos o seu pedido, ${dados.nomeRemetente}! 🎵`,
      html: `
        <div style="font-family: sans-serif; color: #4A2522; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #611C24;">Olá, ${dados.nomeRemetente}!</h2>
          <p>Que incrível a história que você nos contou sobre a sua relação com <strong>${dados.nomeDestinatario}</strong>.</p>
          <p>Este e-mail é apenas para confirmar que o seu pedido para a ocasião <strong>"${dados.ocasiao}"</strong> foi recebido com sucesso no nosso sistema.</p>
          <p>A nossa equipa já está a analisar os detalhes para transformar a vossa história numa emoção que dura para sempre.</p>
          <p>Se tiver alguma dúvida, basta responder a este e-mail ou falar connosco no WhatsApp.</p>
          <br/>
          <p>Com carinho,<br/>Equipa Música de Presente ❤️</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true, message: 'E-mails enviados com sucesso!' });

  } catch (error) {
    console.error('Erro ao enviar e-mail:', error);
    return NextResponse.json({ success: false, error: 'Falha ao enviar e-mails' }, { status: 500 });
  }
}