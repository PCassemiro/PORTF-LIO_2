"use client";

import React from "react";

import ComponentSection01 from "./components/sections/section_01/section01";
import ComponentSection02 from "./components/sections/section_02/section02";
import ComponentSection03 from "./components/sections/section_03/section03";
import ComponentSection04 from "./components/sections/section_04/section04";
import { ComponentSection05 } from "./components/sections/section_05/section05";
import ComponentSection06 from "./components/sections/section_06/section06";
import ComponentSection07 from "./components/sections/section_07/section07";
import ComponentSection08 from "./components/sections/section_08/section08";
import ComponentNavbar from "./components/navbar/navbar";

export default function HomePage() {
  return (
    // Geral
    <div className="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth bg-zinc-800">
      {/* Naver bar */}
      <div className=" h-screen w-60 fixed flex right-0 border-l-1 border-white flex-col px-4 pt-10 gap-5 text-xl items-start">
        <ComponentNavbar />
      </div>
      {/* Geral sections */}
      <div className="container mx-auto pr-60 px-5 ">
        {/* 01.Nome */}
        <ComponentSection01 />
        {/* 02.Quem sou eu */}
        <ComponentSection02 />
        {/*03.Habilidades */}
        <ComponentSection03 />
        {/*04.Curiosidades */}
        <ComponentSection04 />
        {/*otimizar o código */}
        {/*05.Experiencia */}
        <ComponentSection05 />
        {/*06.Projetos */}
        <ComponentSection06 />
        {/*07.Meu processo de trabalho */}
        <ComponentSection07 />
        {/*08*.Contatos */}
        <ComponentSection08 />
      </div>
    </div>
  );
}
