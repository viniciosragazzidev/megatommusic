"use client";
import { Instagram, Menu, NotepadText, Phone, Pin, X } from "lucide-react";
import Link from "next/link";
import React from "react";

const Sidebar = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <span
        onClick={() => setOpen(!open)}
        className="absolute top-0 right-8 py-3 cursor-pointer"
      >
        <Menu className="text-orange-400" />
      </span>

      <div
        className={`fixed w-screen h-screen top-0 left-0  backdrop-blur-sm  bg-black/40 ${
          open ? "block" : "hidden"
        }`}
      >
        <aside
          className={`w-80 h-full border-l-4 border-orange-400 bg-gray-950 shadow-lg shadow-gray-900/50 absolute top-0 right-0 translate-to-0  `}
        >
          <span>
            <X
              className="text-orange-400 absolute right-5 top-2 cursor-pointer"
              onClick={() => setOpen(!open)}
            />
          </span>

          <div className="w-full h-full flex flex-col gap-10 justify-center items-center px-1">
            <ul className="w-full flex flex-col justify-center items-center px-2 gap-5">
              <li className="w-full flex flex-col items-center text-center gap-2">
                <Link
                  href={`https://www.google.com/maps/place/Megatom+Music+-+Luthier+e+Eletr%C3%B4nica+%2F+Aulas+de+Musica+e+Canto/@-22.7610703,-43.4494502,17z/data=!3m1!4b1!4m6!3m5!1s0x9967d4836b7ec3:0x38e88f73e261a805!8m2!3d-22.7610703!4d-43.4468753!16s%2Fg%2F11rnd061kt?entry=ttu&g_ep=EgoyMDI0MDgyOC4wIKXMDSoASAFQAw%3D%3D`}
                  target="_blank"
                  className="text-gray-300 text-sm flex items-center flex-col gap-2"
                >
                  <Pin className="w-6 h-6 text-orange-400" />
                  <span className="text-gray-300 text-sm">
                    R. Cel. Francisco Soares, 70 - Centro, NI - RJ
                  </span>
                </Link>
              </li>
              <li className="w-full flex  flex-col items-center gap-2">
                <Link
                  href={`https://wa.me/5521983373765?text=Olá, Megatom Music! Gostaria de mais informações!`}
                  target="_blank"
                  className="text-gray-300 text-sm flex items-center flex-col gap-2"
                >
                  <Phone className="w-5 h-5 text-orange-400" /> (21) 9 8337-3765
                </Link>
              </li>
              <li className="w-full flex flex-col items-center gap-2">
                <Link
                  href={`https://www.instagram.com/megatommusic/`}
                  target="_blank"
                  className="text-gray-300 text-sm flex items-center flex-col gap-2"
                >
                  <Instagram className="w-5 h-5 text-orange-400" /> megatommusic
                </Link>
              </li>
            </ul>

            <Link
              href="/orcamento"
              className="text-gray-900 font-bold px-3 py-2 flex items-center gap-1 rounded-full text-sm  bg-orange-400 "
            >
              <NotepadText className="w-5 h-5 text-gray-900" /> Faça um
              orçamento
            </Link>
          </div>
        </aside>
      </div>
    </>
  );
};

export default Sidebar;
