"use client";
import Image from "next/image";
import Logo from "../../public/Megatom.svg";
import About from "../../public/about.png";
import {
  ChevronDown,
  Dot,
  Ellipsis,
  Facebook,
  Guitar,
  Instagram,
  KeyboardMusic,
  ListMusic,
  MicVocal,
  NotepadText,
  PhoneCall,
  Speaker,
} from "lucide-react";
import Link from "next/link";
import React from "react";
export default function Home() {
  const [currentItem, setCurrentItem] = React.useState<number>();
  return (
    <div className="  bg-gray-950 overflow-x-hidden">
      <div className="w-full min-h-screen flex justify-center pt-8">
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
              <div
                onClick={() =>
                  currentItem === 0 ? setCurrentItem(8) : setCurrentItem(0)
                }
                className={`relative overflow-hidden h-max ${
                  currentItem === 0 ? "h-36" : "h-max"
                } transition-all`}
              >
                <li className="text-gray-300 text-sm w-full flex cursor-pointer justify-between gap-1 text-center px-4 items-center py-3 rounded-full bg-gray-900/20 hover:bg-gray-900/15 transition-all hover:scale-[0.98]">
                  <Guitar className="w-5 h-5 text-orange-400" /> Reparos em
                  Instrumentos de Cordas
                  <ChevronDown className="w-5 h-5 text-gray-300" />
                </li>
                <span className="text-gray-300 text-sm block py-3 absolute">
                  Realizamos <span className="font-bold">ajustes</span> e{" "}
                  <span className="font-bold">reparos</span> em violões,
                  guitarras, contrabaixos e violinos. De regulagens finas até
                  consertos elétricos ou estruturais, garantimos que seu
                  instrumento esteja em{" "}
                  <span className="font-bold">perfeita condição</span> para um
                  som impecável.
                  <Link
                    href="/cordas"
                    className="text-orange-400 flex items-center gap-1 pt-2 justify-end"
                  >
                    <NotepadText className="w-4 h-4 text-orange-400" /> Faça um
                    orçamento!
                  </Link>
                </span>
              </div>

              <div
                onClick={() =>
                  currentItem === 1 ? setCurrentItem(8) : setCurrentItem(1)
                }
                className={`relative overflow-hidden h-max ${
                  currentItem === 1 ? "h-36" : "h-max"
                } transition-all`}
              >
                <li className="text-gray-300 text-sm w-full flex cursor-pointer justify-between gap-1 text-center px-4 items-center py-3 rounded-full bg-gray-900/20 hover:bg-gray-900/15 transition-all hover:scale-[0.98]">
                  <ListMusic className="w-5 h-5 text-orange-400" /> Reparos em
                  Instrumentos de Sopro
                  <ChevronDown className="w-5 h-5 text-gray-300" />
                </li>
                <span className="text-gray-300 text-sm block py-3 absolute">
                  Fazemos <span className="font-bold">manutenção</span> e{" "}
                  <span className="font-bold">ajustes</span> em flautas,
                  saxofones e trompetes. Nossa equipe cuida da limpeza, troca de
                  peças e ajustes de <span className="font-bold">afinação</span>{" "}
                  para restaurar a{" "}
                  <span className="font-bold">qualidade sonora</span> do seu
                  instrumento.
                  <Link
                    href="/sopro"
                    className="text-orange-400 flex items-center gap-1 pt-2 justify-end"
                  >
                    <NotepadText className="w-4 h-4 text-orange-400" /> Faça um
                    orçamento!
                  </Link>
                </span>
              </div>

              <div
                onClick={() =>
                  currentItem === 2 ? setCurrentItem(8) : setCurrentItem(2)
                }
                className={`relative overflow-hidden h-max ${
                  currentItem === 2 ? "h-36" : "h-max"
                } transition-all`}
              >
                <li className="text-gray-300 text-sm w-full flex cursor-pointer justify-between gap-1 text-center px-4 items-center py-3 rounded-full bg-gray-900/20 hover:bg-gray-900/15 transition-all hover:scale-[0.98]">
                  <KeyboardMusic className="w-5 h-5 text-orange-400" /> Reparos
                  em Outros Instrumentos
                  <ChevronDown className="w-5 h-5 text-gray-300" />
                </li>
                <span className="text-gray-300 text-sm block py-3 absolute">
                  Trabalhamos com teclados e instrumentos de percussão.
                  Oferecemos desde a{" "}
                  <span className="font-bold">substituição de peças</span> até{" "}
                  <span className="font-bold">ajustes detalhados</span>,
                  garantindo que seu equipamento esteja{" "}
                  <span className="font-bold">pronto para uso</span>.
                  <Link
                    href="/outros"
                    className="text-orange-400 flex items-center gap-1 pt-2 justify-end"
                  >
                    <NotepadText className="w-4 h-4 text-orange-400" /> Faça um
                    orçamento!
                  </Link>
                </span>
              </div>

              <div
                onClick={() =>
                  currentItem === 3 ? setCurrentItem(8) : setCurrentItem(3)
                }
                className={`relative overflow-hidden h-max ${
                  currentItem === 3 ? "h-36" : "h-max"
                } transition-all`}
              >
                <li className="text-gray-300 text-sm w-full flex cursor-pointer justify-between gap-1 text-center px-4 items-center py-3 rounded-full bg-gray-900/20 hover:bg-gray-900/15 transition-all hover:scale-[0.98]">
                  <Speaker className="w-5 h-5 text-orange-400" /> Reparos em
                  Equipamentos de Áudio ou Eletrônicos
                  <ChevronDown className="w-5 h-5 text-gray-300" />
                </li>
                <span className="text-gray-300 text-sm block py-3 absolute">
                  Oferecemos reparos em caixas de som, amplificadores e mesas de
                  som. Identificamos problemas, realizamos{" "}
                  <span className="font-bold">soldagens</span> e{" "}
                  <span className="font-bold">trocas de componentes</span>,
                  entregando equipamentos com{" "}
                  <span className="font-bold">som de alta qualidade</span>.
                  <Link
                    href="/audio"
                    className="text-orange-400 flex items-center gap-1 pt-2 justify-end"
                  >
                    <NotepadText className="w-4 h-4 text-orange-400" /> Faça um
                    orçamento!
                  </Link>
                </span>
              </div>

              <div
                onClick={() =>
                  currentItem === 4 ? setCurrentItem(8) : setCurrentItem(4)
                }
                className={`relative overflow-hidden h-max ${
                  currentItem === 4 ? "h-36" : "h-max"
                } transition-all`}
              >
                <li className="text-gray-300 text-sm w-full flex cursor-pointer justify-between gap-1 text-center px-4 items-center py-3 rounded-full bg-gray-900/20 hover:bg-gray-900/15 transition-all hover:scale-[0.98]">
                  <MicVocal className="w-5 h-5 text-orange-400" /> Aulas de
                  Música
                  <ChevronDown className="w-5 h-5 text-gray-300" />
                </li>
                <span className="text-gray-300 text-sm block py-3 absolute">
                  Nossas aulas são{" "}
                  <span className="font-bold">personalizadas</span>, cobrindo{" "}
                  <span className="font-bold">teoria</span> e{" "}
                  <span className="font-bold">prática</span> em diversos
                  instrumentos. Para todos os níveis, focamos no{" "}
                  <span className="font-bold">desenvolvimento musical</span> de
                  forma leve e divertida.
                  <Link
                    href="/aulas"
                    className="text-orange-400 flex items-center gap-1 pt-2 justify-end"
                  >
                    <NotepadText className="w-4 h-4 text-orange-400" /> Saiba
                    mais!
                  </Link>
                </span>
              </div>

              <li className="text-gray-300 text-sm w-full flex cursor-pointer justify-center px-4 gap-5 items-center py-3 rounded-full bg-gray-900/20">
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
