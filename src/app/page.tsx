"use client";

import { Button, Link } from "@nextui-org/react";
// import { Image } from "@nextui-org/image";
import Image from "next/image";
export default function HomePage() {
  return (
    // Geral
    <div className="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth bg-zinc-800">
      {/* Naver bar */}
      <div className=" h-screen w-60 fixed flex right-0 border-l-2 border-black flex-col px-4 pt-10 gap-5 text-xl text-white items-start">
        <Link href="#section1">
          <Button className="bg-transparent text-white ">01.Topo</Button>
        </Link>
        <Link href="#section2">
          <Button className="bg-transparent text-white ">
            02. Quem sou eu
          </Button>
        </Link>
        <Link href="#section3">
          <Button className="bg-transparent text-white">
            03. Meus serviços
          </Button>
        </Link>
        <Link href="#section4">
          <Button className="bg-transparent text-white ">
            04. Habilidades
          </Button>
        </Link>
        <Link href="#section5">
          <Button className="bg-transparent text-white ">
            05. Curiosidades
          </Button>
        </Link>
        <Link href="#section6">
          <Button className="bg-transparent text-white ">
            06. Experiência
          </Button>
        </Link>
        <Link href="#section7">
          <Button className="bg-transparent text-white ">
            07. Meus projetos
          </Button>
        </Link>
        <Link href="#section8">
          <Button className="bg-transparent text-white ">
            08. Processo de trabalho
          </Button>
        </Link>
        <Link href="#section9">
          <Button className="bg-transparent text-white ">
            09. Meus Contatos
          </Button>
        </Link>
      </div>
      {/* Geral sections */}
      <div className="container mx-auto">
        {/* 01.Nome */}
        <section
          id="section1"
          className="h-screen snap-start flex flex-row items-center   text-white "
        >
          {/* Apresentação */}
          <div className=" px-5 pt-5">
            <p className="text-2xl">Ola, sou</p>
            <h1 className="text-9xl">
              Pedro
              <br />
              de Oliveira
              <br />
              Cassemiro
            </h1>
            <p className="text-3xl">
              Desenvolvedor <b className="text-amber-800">frontend</b>
            </p>
            <p className="text-2xl text-blue-500">Buscando evoluir sempre </p>
          </div>
          {/* Imagem */}
          <div className="x">
            <Image
              alt="NextUI hero Image"
              src="/image/avatar.png"
              height={350}
              width={350}
              className="bg-white rounded-full border-gray-100 border-2"
            />
          </div>
        </section>
        {/* 02.Quem sou eu */}
        <section
          id="section2"
          className="h-screen snap-start flex flex-cols   text-white text-3xl"
        >
          {/* geral */}
          <div className="px-5 pt-5">
            <div>
              <h1 className=" flex relative top-3 left-3">QUEM SOU EU</h1>
              <hr className="border-black my-3" />
            </div>
            {/* Geral */}
            <div className="flex flex-row">
              {/* Texto */}
              <div className="flex flex-col">
                <li>Meu nome é Pedro de Oliveira Cassemiro;</li>
                <li>
                  Estudante de Sistemas de Informação no Centro Universitário
                  FAESA, campus Vitória;
                </li>
                <li>Estagiário na Prefeitura de Cariacica;</li>
                <li>
                  Desde os 16 anos, tenho um profundo interesse pela área de
                  Tecnologia da Informação;
                </li>
                <li>
                  Motivado pela ampla gama de oportunidades e pela infinidade de
                  possibilidades criativas que esta área oferece;
                </li>
                <li>
                  O principal atrativo para min é o impacto significativo que a
                  tecnologia tem no cotidiano das pessoas, evidenciando a sua
                  importância fundamental em nossas vidas.
                </li>
              </div>
              {/* Imagem */}
              <div></div>
            </div>
          </div>
        </section>
        {/* 03.Meus serviços */}
        <section
          id="section3"
          className="h-screen snap-start flex  text-white text-3xl"
        >
          <div>
            <h1 className=" flex relative top-3 left-3">MEUS SERVIÇOS</h1>
            <div className="bg-black my-3 w-full h-[2px]" />
          </div>
        </section>
        {/*04.Habilidades */}
        <section
          id="section4"
          className="h-screen snap-start flex  text-white text-3xl"
        >
          <h1 className=" flex relative top-3 left-3">HABILIDADES</h1>
        </section>
        {/*05.Curiosidades */}
        <section
          id="section5"
          className="h-screen snap-start flex  text-white text-3xl"
        >
          <h1 className=" flex relative top-3 left-3">CURIOSIDADES</h1>
        </section>
        {/*06.Experiencia */}
        <section
          id="section6"
          className="h-screen snap-start flex  text-white text-3xl"
        >
          <h1 className=" flex relative top-3 left-3">EXPERIÊNCIAS</h1>
        </section>
        {/*07.Projetos */}
        <section
          id="section7"
          className="h-screen snap-start flex  text-white text-3xl"
        >
          <h1 className=" flex relative top-3 left-3">MEUS PROJETOS</h1>
        </section>
        {/*08.Meu processo de trabalho */}
        <section
          id="section8"
          className="h-screen snap-start flex  text-white text-3xl"
        >
          <h1 className=" flex relative top-3 left-3">
            MEU PROCESSO DE TRABALHO
          </h1>
        </section>
        {/*09*.Contatos */}
        <section
          id="section9"
          className="h-screen snap-start flex  text-white text-3xl"
        >
          <h1 className=" flex relative top-3 left-3">CONTATOS</h1>
        </section>
      </div>
    </div>
  );
}
