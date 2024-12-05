'use server';
import { MailerSend, EmailParams, Sender, Recipient } from "mailersend";

const mailerSend = new MailerSend({
    apiKey: process.env.NEXT_PUBLIC_MAILERSEND_KEY || '',
});
export default async function sendEmail(email: string, name: string){
    const sentFrom = new Sender("noblerealstate@noblespace.pro", "Marcelo Paim");
    const recipients = [
        new Recipient(email, name)
    ];
    
    const emailData:string =  `
    <h1>Olá ${name},</h1>

    <p>Estou feliz em compartilhar que seu e-book "Estratégias Infalíveis para Vender Imóveis" está pronto para download!</p>
    
    <p>Neste guia, você encontrará técnicas poderosas e comprovadas para:</p>
    
    <ul>
        <li>Destacar seus imóveis e atrair mais compradores</li>
        <li>Estratégias de marketing online e off-line</li>
        <li>Dicas para fechar negócios mais rapidamente</li>
        <li>Muito mais conselhos de especialistas do ramo!</li>
    </ul>
    
    <p>Clique no link abaixo para baixar seu e-book agora:</p>
    
    <p><a href="https://drive.google.com/file/d/11WhtwK8zQYFh1TAygs7RgHNngVRZ-Lko/view">[Link de Download]</a></p>
    
    <p>Aproveite este recurso valioso para impulsionar suas vendas imobiliárias! Se tiver alguma dúvida, é só entrar em contato.</p>
    
    <p>Boa leitura e sucesso em suas vendas!</p>
    
    <p>Atenciosamente,<br>
    Marcelo Paim</p>`
    const emailParams = new EmailParams()
    .setFrom(sentFrom)
    .setTo(recipients)
    .setSubject("Seu E-book Gratuito - Estratégias Infalíveis para Vender Imóveis")
    .setHtml(emailData)
    try {
        const response = await mailerSend.email.send(emailParams);
        console.log('Email sent successfully:', response.statusCode);
      } catch (error) {
        console.error('Error sending email:', error);
      }
}