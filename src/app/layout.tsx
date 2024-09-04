import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Dot, Phone, Pin } from "lucide-react";
import Link from "next/link";
import Sidebar from "./components/sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Megatom Music - Luthieria, Eletrônica e Aulas de Musica",
  description:
    "Reparos em Instrumentos de Cordas, Sopro, Percussão entre outros. Equipamentos de áudio e aula de música.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${inter.className} w-full h-full bg-gray-950`}>
        <div className="fixed max-lg:hidden top-0 left-0 right-0 w-screen py-3  px-2 flex justify-center gap-2 items-center">
          <Link
            href={`https://www.google.com/maps/place/Megatom+Music+-+Luthier+e+Eletr%C3%B4nica+%2F+Aulas+de+Musica+e+Canto/@-22.7610703,-43.4494502,17z/data=!3m1!4b1!4m6!3m5!1s0x9967d4836b7ec3:0x38e88f73e261a805!8m2!3d-22.7610703!4d-43.4468753!16s%2Fg%2F11rnd061kt?entry=ttu&g_ep=EgoyMDI0MDgyOC4wIKXMDSoASAFQAw%3D%3D`}
            className="text-gray-300 text-sm  flex items-center gap-1"
            target="_blank"
          >
            <Pin className="w-4 h-4 text-orange-400" /> R. Cel. Francisco
            Soares, 70 - Centro, Nova Iguaçu - RJ, 26220-032
          </Link>

          <span>
            <Dot className="w-4 h-4 text-orange-400" />
          </span>

          <Link
            href={`https://wa.me/5521983373765?text=Olá, Megatom Music! Gostaria de mais informações!`}
            target="_blank"
            className="text-gray-300 text-sm flex items-center gap-1"
          >
            <Phone className="w-4 h-4 text-orange-400" /> (21) 9 8337-3765
          </Link>
        </div>

        <Sidebar />
        {children}
      </body>
    </html>
  );
}
