import { MercadoPagoConfig, Preference } from 'mercadopago';

// Configura a API com o seu Token Secreto do Mercado Pago
const client = new MercadoPagoConfig({ accessToken: 'PROD_ACCESS_TOKEN_AQUI' });

export async function POST(request: Request) {
  const body = await request.json(); // Pega os dados vindos do formulário
  
  const preference = new Preference(client);

  // A API gera a cobrança sozinha toda vez que a rota é chamada
  const result = await preference.create({
    body: {
      items: [
        {
          id: 'musica-01',
          title: 'Música de Presente Personalizada',
          quantity: 1,
          unit_price: 99.00,
          currency_id: 'BRL'
        }
      ],
      payer: {
        email: body.email,
        phone: { number: body.whatsapp }
      },
      // Para onde o cliente vai depois de pagar
      back_urls: {
        success: 'https://seu-site.com.br/sucesso',
        failure: 'https://seu-site.com.br/erro'
      },
      auto_return: 'approved'
    }
  });

  // Retorna o link oficial gerado automaticamente pela API
  return Response.json({ init_point: result.init_point });
}