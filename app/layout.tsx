import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Cinzel } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Analytics } from '@vercel/analytics/next';
import ReCaptchaProvider from "@/components/RecaptchaProvider";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "600", "700"]
});



export const metadata: Metadata = {
  title: {
    default: 'Banda de Música de Bonares | Tradición y Cultura',
    template: '%s | Banda de Música de Bonares'
  },
  description: 'Sitio oficial de la Banda de Música de Bonares (Huelva). Conoce nuestra historia, próximos conciertos, miembros, repertorio y cómo contratarnos.',
  keywords: ['Banda de música Bonares', 'bmb', 'eventos musicales Bonares', 'semana santa'],
  alternates: {
    canonical: 'https://bandamusicabonares.com/',
  },
  openGraph: {
    title: 'Banda de Música de Bonares',
    description: 'Acompañando momentos inolvidables desde Bonares para toda Andalucía.',
    url: 'https://bandamusicabonares.com/',
    siteName: 'Banda de Música de Bonares',
    locale: 'es_ES',
    type: 'website',
    images: [
      {
        url: '/bandaverano.jpg', // Imagen de la banda completa
        width: 1200,
        height: 630,
        alt: 'Banda de Música de Bonares en concierto',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className={cinzel.className + " min-h-full bg-slate-950 text-slate-100 font-sans"}>
        <Navbar />
        <ReCaptchaProvider>
          {children}
        </ReCaptchaProvider>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
