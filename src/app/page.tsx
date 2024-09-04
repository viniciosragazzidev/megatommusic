import Image from "next/image";
import Logo from "../../public/Megatom.svg";
import About from "../../public/about.png";
import {
  Dot,
  Ellipsis,
  Facebook,
  Guitar,
  Instagram,
  KeyboardMusic,
  ListMusic,
  MicVocal,
  PhoneCall,
  Speaker,
} from "lucide-react";
import Link from "next/link";
export default function Home() {
  return (
    <div className="  bg-gray-950 overflow-x-hidden">
      <div className="w-full h-screen flex justify-center">
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
              <li className="text-gray-300 text-sm  w-full flex justify-between gap-1 text-center px-4 items-center py-3 rounded-full bg-gray-900/20">
                <Guitar className="w-5 h-5 text-orange-400" /> Reparos em
                Instrumentos de Cordas{" "}
                <Ellipsis className="w-5 h-5 text-gray-300" />
              </li>
              <li className="text-gray-300 text-sm  w-full flex justify-between gap-1 text-center px-4 items-center py-3 rounded-full bg-gray-900/20">
                <ListMusic className="w-5 h-5 text-orange-400" /> Reparos em
                Instrumentos de Sopro{" "}
                <Ellipsis className="w-5 h-5 text-gray-300" />
              </li>
              <li className="text-gray-300 text-sm  w-full flex justify-between gap-1 text-center px-4 items-center py-3 rounded-full bg-gray-900/20">
                <KeyboardMusic className="w-5 h-5 text-orange-400" /> Reparos em
                Outros Instrumentos
                <Ellipsis className="w-5 h-5 text-gray-300" />
              </li>
              <li className="text-gray-300 text-sm  w-full flex justify-between gap-1 text-center px-4 items-center py-3 rounded-full bg-gray-900/20">
                <Speaker className="w-5 h-5 text-orange-400" /> Reparos em
                Equipamentos de Áudio ou Eletrônicos
                <Ellipsis className="w-5 h-5 text-gray-300" />
              </li>
              <li className="text-gray-300 text-sm  w-full flex justify-between gap-1 text-center px-4 items-center py-3 rounded-full bg-gray-900/20">
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
      </div>
      <div className="w-full min-h-[80vh] flex justify-center items-center bg-gray-300 px-5">
        <div className="container w-full h-full py-8 max-sm:px-2 flex max-lg:flex-col  gap-4  justify-center items-center">
          <div className="flex flex-col items-center gap-2">
            <h1 className="text-4xl font-bold text-gray-900 flex items-center ">
              Quem somos?
            </h1>
            <Image
              src={About}
              className="w-80 max-lg:w-64"
              alt="Megatom Music"
            />
          </div>

          <div className="w-full flex flex-col gap-4 ">
            <p>
              Na <span className="font-bold">Megatom Music</span>, transformamos
              a experiência musical com serviços especializados em manutenção e
              aprimoramento de instrumentos. Oferecemos reparo de violão,
              guitarra e{" "}
              <span className="font-bold">
                todos os outros instrumentos de cordas
              </span>
              , regulagem de saxofones e{" "}
              <span className="font-bold">
                todos os outros instrumentos de sopro
              </span>
              , manutenção de teclados, e conserto de caixas de som, microfones,
              amplificadores etc, com atenção aos detalhes. Nossa equipe
              qualificada garante que cada instrumento recupere sua qualidade
              sonora e funcionalidade. Com análise detalhada e{" "}
              <span className="font-bold">orçamento gratuito</span>, nossos
              serviços personalizados fazem a diferença na performance e
              durabilidade dos seus equipamentos.
            </p>

            <p>
              Além dos serviços de manutenção, disponibilizamos{" "}
              <span className="font-bold"> aulas de música </span>
              para todos os níveis. Nossos cursos abrangem{" "}
              <span className="font-bold">
                {" "}
                teoria musical, prática instrumental, e treinamento
                personalizado{" "}
              </span>
              , ministrados por instrutores experientes. Ajudamos você a
              desenvolver habilidades musicais com uma abordagem prática e
              envolvente, em um ambiente inspirador e acolhedor.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
