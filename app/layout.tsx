import type { Metadata } from "next";
import { Playfair_Display, Inter_Tight, Anton, Caudex, Orbitron } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
});

const inter = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-body",
});

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-anton",
});

const caudex = Caudex({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-caudex",
});

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
});

export const metadata: Metadata = {
  title: "Orange Peel — Wear your Values",
  description: "Bitcoin-only premium apparel. Provocative, Subtle, Cryptic — your style is yours.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${playfair.variable} ${inter.variable} ${anton.variable} ${caudex.variable} ${orbitron.variable}`}>
      <body className="bg-white text-[#111518]">
        <Navbar />
        <main className="pt-[70px]">{children}</main>
        <div className="h-[3px] bg-[#ed760a]" />
        <Footer />
      </body>
    </html>
  );
}