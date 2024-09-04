import Image from "next/image";
import Logo from "../../public/Megatom.svg";
import {
  Ellipsis,
  Facebook,
  Guitar,
  Instagram,
  KeyboardMusic,
  ListMusic,
  MicVocal,
  PhoneCall,
} from "lucide-react";
import Link from "next/link";
export default function Home() {
  return (
    <main className="w-screen h-screen flex justify-center">
      <div className="container w-full h-full py-8 max-sm:px-2 flex flex-col gap-4 justify-center items-center">
        <header className="text-center flex flex-col gap-2 items-center">
          <h1 className="text-2xl font-bold text-gray-200 uppercase">
            <Image
              src={Logo}
              className="w-64"
              alt="Megatom Music - Luthieria, Eletrônica e Aulas de Musica"
              width={1000}
            />
          </h1>

          <p className="text-gray-300 text-sm font-semibold pt-5">
            Nossos serviços:
          </p>
        </header>

        <nav className="w-full max-w-lg">
          <ul className="flex gap-4 flex-col w-full">
            <li className="text-gray-300 text-sm  w-full flex justify-between px-4 items-center py-3 rounded-full bg-gray-900/20">
              <Guitar className="w-5 h-5 text-orange-400" /> Reparos em
              Instrumentos de Cordas{" "}
              <Ellipsis className="w-5 h-5 text-gray-300" />
            </li>
            <li className="text-gray-300 text-sm  w-full flex justify-between px-4 items-center py-3 rounded-full bg-gray-900/20">
              <ListMusic className="w-5 h-5 text-orange-400" /> Reparos em
              Instrumentos de Sopro{" "}
              <Ellipsis className="w-5 h-5 text-gray-300" />
            </li>
            <li className="text-gray-300 text-sm  w-full flex justify-between px-4 items-center py-3 rounded-full bg-gray-900/20">
              <KeyboardMusic className="w-5 h-5 text-orange-400" /> Reparos em
              Outros Instrumentos
              <Ellipsis className="w-5 h-5 text-gray-300" />
            </li>

            <li className="text-gray-300 text-sm  w-full flex justify-between px-4 items-center py-3 rounded-full bg-gray-900/20">
              <MicVocal className="w-5 h-5 text-orange-400" /> Aulas de Música
              <Ellipsis className="w-5 h-5 text-gray-300" />
            </li>

            <li className="text-gray-300 text-sm  w-full flex justify-center px-4  gap-5 items-center py-3 rounded-full bg-gray-900/20">
              <Link href="https://www.instagram.com/megatommusic/">
                <Instagram className="w-5 h-5 text-orange-400" />
              </Link>
              <Link href="https://www.facebook.com/megatommusic/">
                <Facebook className="w-5 h-5 text-orange-400" />
              </Link>
              <Link
                href={`https://wa.me/5521983373765?text=Olá, Megatom Music! Gostaria de mais informações!`}
              >
                <PhoneCall className="w-5 h-5 text-orange-400" />
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </main>
  );
}
