import type { Metadata } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap"
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap"
});

export const metadata: Metadata = {
  title: "Mídia em Foco IA | Automação, WhatsApp IA e Vídeos Comerciais",
  description:
    "Automatize sua empresa com IA. Atendimento automático no WhatsApp, vídeos comerciais com inteligência artificial, social media e soluções digitais para vender mais.",
  alternates: {
    canonical: "https://midiaemfoco.ia.br"
  },
  openGraph: {
    title: "Mídia em Foco IA | Automação, WhatsApp IA e Vídeos Comerciais",
    description:
      "Atendimento automático no WhatsApp, vídeos comerciais com IA, social media e soluções digitais para vender mais.",
    url: "https://midiaemfoco.ia.br",
    siteName: "Mídia em Foco IA",
    locale: "pt_BR",
    type: "website"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${manrope.variable} ${spaceGrotesk.variable} font-sans antialiased`}>
        <div className="noise" />
        {children}
      </body>
    </html>
  );
}
