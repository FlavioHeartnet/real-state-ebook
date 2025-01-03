"use client";

import { useState } from "react";
import { Building, Mail, Phone, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import sendData from "./api/usecase/storeData";
import sendEmail from "./api/usecase/sendMail";
import ErrorMessage from "@/components/error-message";

export default function EbookLanding() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const name = e.target.elements.name.value;
    const email = e.target.elements.email.value;
    const phone = e.target.elements.phone.value;
    const resp = await sendData(name, email, phone);
    if (resp.length > 0) {
      await sendEmail(email, name);
      setSubmitted(true);
    } else {
      setError(true);
    }
  };

  return (
    <div
      style={{
        backgroundImage:
          'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8)), url("/real-state-modern.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className="min-h-screen bg-gradient-to-b from-zinc-900 to-zinc-800"
    >
      <div className="container mx-auto px-4 py-16">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl font-bold tracking-tighter text-white sm:text-5xl xl:text-6xl/none">
              Guia Definitivo para Vender seu Imóvel
            </h1>
            <p className="text-gray-300 text-xl">
              Descubra as estratégias comprovadas dos maiores especialistas do
              mercado imobiliário para vender seu imóvel pelo melhor preço e no
              menor tempo possível.
            </p>
            <div className="space-y-4 text-gray-300">
              <h2 className="text-2xl font-semibold text-white">
                O que você vai aprender:
              </h2>
              <ul className="space-y-2 list-disc list-inside">
                <li>Como determinar o momento perfeito para vender</li>
                <li>Estratégias de precificação que realmente funcionam</li>
                <li>Venda direta vs intermediação: prós e contras</li>
                <li>O papel do corretor no processo de venda</li>
                <li>Técnicas de negociação avançadas</li>
                <li>Dicas para valorização do seu imóvel</li>
              </ul>
            </div>
          </div>
          <div className="lg:pl-8">
            <Card className="w-full max-w-md mx-auto">
              <CardHeader>
                <CardTitle>Baixe Agora seu E-book Gratuito</CardTitle>
                <CardDescription>
                  Preencha o formulário abaixo para receber o guia completo no
                  seu email
                </CardDescription>
              </CardHeader>
              <CardContent>
                {!submitted && !error
                  ? (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="space-y-2">
                        <div className="relative">
                          <User className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
                          <Input
                            className="pl-9"
                            placeholder="Seu nome completo"
                            required
                            type="text"
                            name="name"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="relative">
                          <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
                          <Input
                            className="pl-9"
                            placeholder="Seu melhor email"
                            required
                            type="email"
                            name="email"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="relative">
                          <Phone className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
                          <Input
                            className="pl-9"
                            placeholder="Seu telefone"
                            required
                            type="tel"
                            name="phone"
                          />
                        </div>
                      </div>
                      <Button
                        className="w-full bg-[#99CC33] hover:bg-[#7ba329]"
                        type="submit"
                      >
                        Quero Receber o E-book
                      </Button>
                    </form>
                  )
                  : error
                  ? <ErrorMessage />
                  : (
                    <div className="text-center space-y-4 py-6">
                      <Building className="w-12 h-12 mx-auto text-[#99CC33]" />
                      <h3 className="text-xl font-semibold">
                        Obrigado pelo interesse!
                      </h3>
                      <p className="text-gray-500">
                        Em breve você receberá o e-book no endereço de email
                        informado.
                      </p>
                    </div>
                  )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
