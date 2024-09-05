import React from "react";
import LogoSF from "../../../public/logo-sf.png";
import { Guitar } from "lucide-react";
import Image from "next/image";

const Cordas = () => {
  return (
    <div className="w-full h-screen flex justify-center pt-10 ">
      <span>
        <Image
          src={LogoSF}
          className="w-10 fixed top-0 left-7"
          alt="Megatom Music - Luthieria, Eletrônica e Aulas de Musica"
          width={1000}
        />
      </span>
      <div className="container w-full h-full py-8 max-sm:px-2 flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <h3 className="text-xl font-bold flex items-center gap-2 text-orange-400">
            <Guitar className="w-8 h-8 " />{" "}
            <span className="text-gray-300">Instrumentos</span> de Cordas
          </h3>
          <p className="text-gray-300 text-sm ">
            Oferecemos diversos serviços para vários instrumentos de cordas.
            Segue a tabela de preços abaixo:
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cordas;
