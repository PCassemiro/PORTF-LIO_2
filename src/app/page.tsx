"use client";

import { Button, Link } from "@nextui-org/react";
// import { Image } from "@nextui-org/image";
import Image from "next/image";
import { BsFillTelephoneFill } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { FaInstagram } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io";
import { FaGithub } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
export default function HomePage() {
  return (
    // Geral
    <div className="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth bg-zinc-800">
      {/* Naver bar */}
      <div className=" h-screen w-60 fixed flex right-0 border-l-1 border-white flex-col px-4 pt-10 gap-5 text-xl text-white items-start">
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
      <div className="container mx-auto pr-56">
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
              <h1 className=" flex relative top-3 left-3 pb-10">QUEM SOU EU</h1>
            </div>
            {/* Geral */}
            <div className="grid grid-cols-2">
              {/* Texto */}
              <div className="flex flex-col text-xl">
                <h1>
                  Meu nome é Pedro de Oliveira Cassemiro, sou estudante de
                  Sistemas de Informação no Centro Universitário FAESA, campus
                  Vitória. Atualmente, atuo como estagiário na Prefeitura de
                  Cariacica, onde tenho a oportunidade de aplicar e expandir
                  meus conhecimentos na área de Tecnologia da Informação. Desde
                  os 16 anos, a tecnologia se tornou uma grande paixão na minha
                  vida. O que mais me motiva nessa área é a sua ampla gama de
                  oportunidades e as infinitas possibilidades criativas que ela
                  proporciona. Além disso, acredito que a tecnologia tem um
                  impacto significativo no cotidiano das pessoas, tornando-se
                  essencial para a evolução da sociedade e a melhoria da
                  qualidade de vida. Estou sempre em busca de aprendizado e
                  inovação, explorando novas tendências e desafios dentro da TI.
                  Para mim, essa área vai muito além de códigos e sistemas ela
                  representa a construção do futuro e a transformação do mundo
                  ao nosso redor.
                </h1>
              </div>
              {/* Geral direita */}
              <div className="border-1 border- mx-48 flex flex-col ">
                <div className="pt-28">
                  <h1 className="text-[250px] flex justify-center text-transparent relative inset-2 -mb-8 text-stroke">
                    1
                  </h1>
                  <h1 className="text-[250px] flex justify-center text-transparent relative inset-1 -mb-8  text-stroke">
                    1
                  </h1>
                  <h1 className="text-[250px] flex justify-center text-white relative">
                    1
                  </h1>
                </div>
                <div className="pt-20">
                  <p className="text-sm flex justify-center">
                    Ano de experiencia
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* 03.Meus serviços */}
        <section
          id="section3"
          className="h-screen snap-start flex flex-col  text-white text-3xl"
        >
          {/* Geral */}
          <div className="flex flex-col ">
            <h1 className=" flex relative top-3 left-3 pb-10">MEUS SERVIÇOS</h1>
          </div>
          <div className="grid grid-cols-3 grid-rows gap-14 overflow-x-scroll w-full">
            {/* Carde 1 */}
            <div className="border-1">
              <h1>UI/UX Design</h1>
              <p>fluxo do usuário</p>
              <p>wireframing </p>
              <p>prototipagem</p>
              <p>aplicativo mobile design</p>
            </div>
            {/* Carde 2 */}
            <div className="border-1">
              <h1>UI/UX Design</h1>
              <p>fluxo do usuário</p>
              <p>wireframing </p>
              <p>prototipagem</p>
              <p>aplicativo mobile design</p>
            </div>
            {/* Carde 3 */}
            <div className="border-1">
              <h1>UI/UX Design</h1>
              <p>fluxo do usuário</p>
              <p>wireframing </p>
              <p>prototipagem</p>
              <p>aplicativo mobile design</p>
            </div>
            {/* Carde 4 */}
            <div className="border-1">
              <h1>UI/UX Design</h1>
              <p>fluxo do usuário</p>
              <p>wireframing </p>
              <p>prototipagem</p>
              <p>aplicativo mobile design</p>
            </div>
          </div>
        </section>
        {/*04.Habilidades */}
        <section
          id="section4"
          className="h-screen snap-start flex  text-white text-3xl"
        >
          <h1 className=" flex relative top-3 left-3 pb-10">HABILIDADES</h1>
        </section>
        {/*05.Curiosidades */}
        <section
          id="section5"
          className="h-screen snap-start flex  text-white text-3xl"
        >
          <h1 className=" flex relative top-3 left-3 pb-10">CURIOSIDADES</h1>
        </section>
        {/*06.Experiencia */}
        <section
          id="section6"
          className="h-screen snap-start flex  text-white text-3xl"
        >
          <h1 className=" flex relative top-3 left-3 pb-10">EXPERIÊNCIAS</h1>
        </section>
        {/*07.Projetos */}
        <section
          id="section7"
          className="h-screen snap-start flex  text-white text-3xl"
        >
          <h1 className=" flex relative top-3 left-3 pb-10">MEUS PROJETOS</h1>
        </section>
        {/*08.Meu processo de trabalho */}
        <section
          id="section8"
          className="h-screen snap-start flex  text-white text-3xl"
        >
          <h1 className=" flex relative top-3 left-3 pb-10">
            MEU PROCESSO DE TRABALHO
          </h1>
        </section>
        {/*09*.Contatos */}
        <section
          id="section9"
          className="h-screen snap-start flex  text-white text-3xl"
        >
          <div>
            <h1 className=" flex relative top-3 left-3 bottom-10 pb-10">
              CONTATOS
            </h1>
            {/* Geral */}
            <div>
              {/* Geral 2 */}
              <div className="flex flex-row   ">
                {/* 3 icone + texto */}
                <div className="flex flex-row gap-4 ">
                  <div className="flex flex-row gap-2">
                    <BsFillTelephoneFill className="rounded-full h-14 w-14 border-1 p-4" />
                    <h1 className="text-sm flex items-center">
                      +55 27 99622-4126
                    </h1>
                  </div>

                  <div className="flex flex-row gap-2">
                    <HiOutlineMail className="rounded-full h-14 w-14 border-1 p-4" />
                    <h1 className="text-sm flex items-center">
                      pedrobr2909@gmail.com
                    </h1>
                  </div>
                  <div className="flex flex-row gap-2">
                    <FaInstagram className="rounded-full h-14 w-14 border-1 p-4" />
                    <h1 className="text-sm flex items-center">
                      pedro_cassemiro14
                    </h1>
                  </div>
                </div>
                {/* 3 icone */}
                <div className="flex flex-row gap-8 items-center">
                  <Link
                    className="px-8 text-white text-3xl"
                    href="https://www.linkedin.com/home/?mcid=6821526239111716925&gclid=Cj0KCQiA-aK8BhCDARIsAL_-H9kPmsRUV13X13IHGOB5TZ3cIkJuJJMExjZVcba_6gnM516CXoiIcKYaArmvEALw_wcB&cid=&src=go-pa&gclsrc=aw%2Eds&gad_source=1&trk=sem-ga_campid%2E12619604099_asid%2E149519181115_crid%2E725790844702_kw%2Elinkedin_d%2Ec_tid%2Ekwd-148086543_n%2Eg_mt%2Ee_geo%2E9198492&originalSubdomain=br"
                  >
                    <IoLogoLinkedin />
                  </Link>
                  <Link
                    className="text-white text-3xl"
                    href="https://github.com/"
                  >
                    <FaGithub />
                  </Link>
                  <Link
                    className="text-white text-3xl"
                    href="https://www.facebook.com/login/?next=https%3A%2F%2Fwww.facebook.com%2F%3Flocale%3Dpt_BR"
                  >
                    <FaFacebook />
                  </Link>
                </div>
              </div>
              {/* Contact me */}
              <div>
                {/* Geral */}
                <div>
                  <h1 className="py-14">Envie sua mensagem</h1>
                  {/* Cima */}
                  <div className="grid grid-cols-2 ">
                    <div className="m-2">
                      <h1>Nome</h1>
                      <input
                        type="text"
                        name="nome"
                        id="nome"
                        placeholder="Seu nome"
                        className="bg-transparent text-sm border-b-1 w-full"
                      />
                    </div>
                    <div className="m-2">
                      <h1>E-mail</h1>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Seu e-mail"
                        className="bg-transparent text-sm border-b-1 w-full"
                      />
                    </div>
                  </div>
                  {/* Esquerda */}
                  <div className="m-2">
                    <h1>Mensagem</h1>
                    <input
                      type="text"
                      name="Mensagem"
                      id="Mensagem"
                      placeholder="Sua mensagem"
                      className="bg-transparent text-sm border-b-1 w-full"
                    />
                  </div>
                  {/* Botão */}
                  <div className=" flex justify-center">
                    <Button className="bg-zinc-900 rounded-full h-40 w-40 border-white border-1 mt-14">
                      <h1 className="text-white">ENVIAR</h1>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
