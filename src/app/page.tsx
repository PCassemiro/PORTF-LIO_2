"use client";
// import { Image } from "@nextui-org/image";
import Image from "next/image";
export default function HomePage() {
  return (
    // Geral
    <div className="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth bg-zinc-800">
      {/* <header className="h-20 bg-black"></header> */}
      {/* Nome */}
      <section className="h-screen snap-start flex flex-row   text-white ">
        {/* Apresentação */}
        <div className=" px-5 pt-5">
          <p className="">Ola, sou</p>
          <h1 className="text-4xl">
            Pedro de Oliveira
            <br />
            Cassemiro
          </h1>
          <p className="">
            Desenvolvedor <b className="text-amber-800">frontend</b>{" "}
          </p>
          <p className="text-xs">buscando evoluir sempre </p>
        </div>
        {/* Imagem */}
        <div className="x">
          <Image
            alt="NextUI hero Image"
            src="/image/avatar.png"
            height={200}
            width={200}
            className="bg-white rounded-full border-gray-100 border-2"
          />
        </div>
      </section>
      {/* Quem sou eu */}
      <section className="h-screen snap-start flex flex-cols   text-white text-3xl">
        {/* gerak */}
        <div className="px-5 pt-5">
          <div>
            <h1 className=" flex relative top-3 left-3">QUEM SOU EU</h1>
          </div>
          <div className="flex flex-col">
            <li>Meu nome é Pedro de Oliveira Cassemiro;</li>
            <li>
              Estudante de Sistemas de Informação no Centro Universitário FAESA,
              campus Vitória;
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
        </div>
      </section>
      {/* Conhecimento */}
      <section className="h-screen snap-start flex  text-white text-3xl">
        <h1 className=" flex relative top-3 left-3">CONHECIMENTOS</h1>
      </section>
      {/* Projetos */}
      <section className="h-screen snap-start flex  text-white text-3xl">
        <h1 className=" flex relative top-3 left-3">PROJETOS</h1>
      </section>
      {/* Contatos */}
      <section className="h-screen snap-start flex  text-white text-3xl">
        <h1 className=" flex relative top-3 left-3">CONTATOS</h1>
      </section>
    </div>
  );
}
