import Image from "next/image";
import React from "react";
import LogoImg from "../../../public/Megatom.svg";
import { cn } from "../lib/utils";

const Logo = ({ className }: { className?: string }) => {
  return (
    <Image
      src={LogoImg}
      className={cn("w-64 " + className)}
      alt="Megatom Music - Luthieria, Eletrônica e Aulas de Musica"
      width={1000}
    />
  );
};

export default Logo;
