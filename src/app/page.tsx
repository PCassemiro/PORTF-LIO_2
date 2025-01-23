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
import { ThumbsUp } from "lucide-react";
import { Code } from "lucide-react";
import { CodeXml } from "lucide-react";
import React from "react";

import { motion } from "framer-motion";

export default function HomePage() {
  return (
    // Geral
    <div className="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth bg-zinc-800">
      {/* Naver bar */}
      <div className=" h-screen w-60 fixed flex right-0 border-l-1 border-white flex-col px-4 pt-10 gap-5 text-xl items-start">
        <Link href="#section1">
          <Button className="bg-transparent text-white ">01.Topo</Button>
        </Link>
        <Link href="#section2">
          <Button className="bg-transparent text-white ">
            02. Quem sou eu
          </Button>
        </Link>
        <Link href="#section3">
          <Button className="bg-transparent text-white ">
            03. Habilidades
          </Button>
        </Link>

        <Link href="#section4">
          <Button className="bg-transparent text-white ">
            04. Curiosidades
          </Button>
        </Link>
        <Link href="#section5">
          <Button className="bg-transparent text-white ">
            05. Experiência
          </Button>
        </Link>
        <Link href="#section6">
          <Button className="bg-transparent text-white ">
            06. Meus projetos
          </Button>
        </Link>
        <Link href="#section7">
          <Button className="bg-transparent text-white ">
            07. Processo de trabalho
          </Button>
        </Link>
        <Link href="#section8">
          <Button className="bg-transparent text-white ">
            08. Meus Contatos
          </Button>
        </Link>
      </div>
      {/* Geral sections */}
      <div className="container mx-auto pr-60 px-5">
        {/*arrumar paar pegar em qualquer pc */}
        {/* 01.Nome */}
        <section
          id="section1"
          className="h-screen snap-start flex flex-row items-center   text-white "
        >
          {/* Apresentação */}
          <div className=" px-5 pt-5">
            <p className="text-2xl">Ola, sou</p>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {
                  scale: 0.8,
                  opacity: 0,
                },
                visible: {
                  scale: 1,
                  opacity: 1,
                  transition: {
                    delay: 0.5, // Animação do título termina antes das próximas
                  },
                },
              }}
            >
              <h1 className="text-9xl">
                Pedro
                <br />
                de Oliveira
                <br />
                Cassemiro
              </h1>
            </motion.div>
            <p className="text-3xl">
              Desenvolvedor <b className="text-amber-800">frontend</b>
            </p>
            <p className="text-2xl text-blue-500">Buscando evoluir sempre </p>
          </div>
          {/* Imagem */}
          <div className="">
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
              <h1 className=" flex relative top-3 left-3 pb-16    text-blue-500">
                QUEM SOU EU
              </h1>
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
              <div className="border-1 border- mx-36 flex flex-col ">
                <div className="pt-28">
                  <h1 className="text-[248px] flex justify-center text-transparent relative inset-2 -mb-8 text-stroke">
                    1
                  </h1>
                  <h1 className="text-[248px] flex justify-center text-transparent relative inset-1 -mb-8  text-stroke">
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

        {/*03.Habilidades */}
        <section
          id="section3"
          className="h-screen snap-start flex  text-white text-3xl"
        >
          {/* Geral */}

          <motion.div className="flex-col">
            <h1 className=" flex relative top-3 left-3 pb-16 text-blue-500">
              HABILIDADES
            </h1>

            <motion.div
              className="grid grid-cols-2
          "
            >
              {/* Habilidade 1 */}
              <motion.div
                className="flex flex-col h-full gap-48 px-4"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      staggerChildren: 0.2,
                      delayChildren: 0.2,
                    },
                  },
                }}
              >
                {/* Cada filho agora é um motion.div com animações */}
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 50 }, // Começa invisível e deslocado para baixo
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.5 },
                    }, // Anima para visível
                  }}
                >
                  <p className="flex flex-row gap-2 text-orange-500">
                    <Code className="text-white" />
                    Html
                  </p>
                  <p className="text-lg text-orange-500">intermediario</p>
                </motion.div>

                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.5 },
                    },
                  }}
                >
                  <p className="flex flex-row gap-2 text-blue-500">
                    <Code className="text-white" />
                    CSS
                  </p>
                  <p className="text-lg text-blue-500">intermediario</p>
                </motion.div>

                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.5 },
                    },
                  }}
                >
                  <p className="flex flex-row gap-2 text-yellow-300">
                    <Code className="text-white" />
                    Javascript
                  </p>
                  <p className="text-lg text-yellow-300">intermediario</p>
                </motion.div>
              </motion.div>

              {/* Segunda coluna */}
              <motion.div
                className="flex flex-col h-full gap-48 px-4"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      staggerChildren: 0.2,
                      delayChildren: 0.2,
                    },
                  },
                }}
              >
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.5 },
                    },
                  }}
                >
                  <p className="flex flex-row gap-2 text-red-600">
                    <CodeXml className="text-white" />
                    Java
                  </p>
                  <p className="text-lg text-blue-500">intermediario</p>
                </motion.div>

                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.5 },
                    },
                  }}
                >
                  <p className="flex flex-row gap-2 text-blue-500">
                    <CodeXml className="text-white" />
                    Python
                  </p>
                  <p className="text-lg text-yellow-300">intermediario</p>
                </motion.div>

                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.5 },
                    },
                  }}
                >
                  <p className="flex flex-row gap-2 text-orange-500">
                    <CodeXml className="text-white" />
                    SQL
                  </p>
                  <p className="text-lg text-blue-500">intermediario</p>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </section>
        {/*04.Curiosidades */}
        <section
          id="section4"
          className="h-screen snap-start flex  text-white text-3xl"
        >
          <div>
            <h1 className=" flex relative top-3 left-3 pb-20 text-blue-500">
              CURIOSIDADES
            </h1>
            <div className="flex flex-col gap-48 ">
              <div className="flex flex-row justify-end  gap-28">
                <div className="flex flex-col">
                  <p className="border-b-1 text-9xl">1</p>
                  <h1>Projetos finalizados</h1>
                </div>
                <div className="flex flex-col">
                  <p className="border-b-1 ">
                    <ThumbsUp className=" h-32 w-32 text-sm" />
                  </p>
                  <h1>Clientes felizes</h1>
                </div>
              </div>
              <div className="flex flex-row justify-start gap-28">
                <div className="flex flex-col">
                  <p className="border-b-1 text-9xl">200</p>
                  <h1>Horas de trabalho</h1>
                </div>
                <div className="flex flex-col">
                  <p className="border-b-1 text-9xl">800</p>
                  <h1>Horas no spotify</h1>
                </div>
                <div className="flex flex-col">
                  <p className="border-b-1 text-9xl">999+</p>
                  <h1>copos de café tomados</h1>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*05.Experiencia */}
        <section
          id="section5"
          className="h-screen snap-start flex  text-white text-3xl"
        >
          <div className="flex flex-col ">
            <div>
              <h1 className=" flex relative top-3 left-3 pb-10 text-blue-500">
                EXPERIÊNCIAS
              </h1>
            </div>
            <div className="flex flex-col gap-6">
              <div>
                <p className="text-base">(2024-hoje)</p>
                <h1>Estagiario</h1>
                <p>
                  estagiario da prefeitura de cariacica, com atuação na area de
                  desenvolvimento da prefeitura de cariacica
                </p>
              </div>
              <div>
                <p className="text-base">(2019-2020)</p>
                <h1>Menor aprendiz</h1>
                <p>
                  Menora aprendiz da technipFMC, com atuação na area
                  administrativa
                </p>
              </div>
            </div>
          </div>
        </section>
        {/*06.Projetos */}
        <section
          id="section6"
          className="h-screen snap-start flex  text-white text-3xl"
        >
          {/* GERAL */}
          <div className="flex flex-col">
            <div>
              <h1 className=" flex relative top-3 left-3 pb-10 text-blue-500">
                MEUS PROJETOS
              </h1>
            </div>
            {/* Projeto 1 */}
            <div>
              <Image
                alt="NextUI hero Image"
                src="/image/projeto_iamedica.png"
                height={350}
                width={350}
                className="bg-white "
              />
              <h1>IA médica</h1>
              <p className="text-lg">design-frontend</p>
            </div>
          </div>
        </section>
        {/*07.Meu processo de trabalho */}
        <section
          id="section7"
          className="h-screen snap-start flex  text-white text-3xl"
        >
          <div className="flex flex-col">
            <h1 className=" flex relative top-3 left-3 pb-10 text-blue-500">
              PROCESSO DE TRABALHO
            </h1>
            <div className="flex flex-row gap-4">
              <div className=" w-full flex flex-col items-end  text-black">
                <div className="flex flex-row">
                  <p className="w-[80px] h-[80px] bg-white "></p>
                </div>
                <div className="flex flex-row">
                  <p className="w-[80px] h-[80px]   bg-white"></p>
                  <p
                    id="tranparente"
                    className="w-[80px] h-[80px]  bg-transparent"
                  ></p>
                </div>
                <div className="flex flex-row">
                  <p className="w-[80px] h-[80px]  bg-white"></p>
                  <p
                    id="tranparente"
                    className="w-[160px] h-[80px]  bg-transparent"
                  ></p>
                </div>
                <div className="flex flex-row">
                  <p className="w-[80px] h-[80px]  bg-white"></p>
                  <p
                    id="tranparente"
                    className="w-[240px] h-[80px]  bg-transparent"
                  ></p>
                </div>
                <div className="flex flex-row">
                  <p className="w-[80px] h-[80px]   bg-white"></p>
                  <p
                    id="tranparente"
                    className="w-[320px] h-[80px]  bg-transparent"
                  ></p>
                </div>
                <div className="flex flex-row hover:bg-black">
                  <p className="w-[80px] h-[80px] hover:w-[80px]  bg-white"></p>
                  <p
                    id="tranparente"
                    className="w-[400px] h-[80px]  bg-transparent"
                  ></p>
                </div>
              </div>
              <div className="flex flex-col gap-y-12 w-full  text-transparent">
                <p>06. Lançamento</p>
                <p>05. Revisão</p>
                <p>04. Desenvolvimento</p>
                <p>03. Design</p>
                <p>02. Modelagem</p>
                <p>01. Ideia</p>
              </div>
            </div>
          </div>
        </section>
        {/*08*.Contatos */}
        <section
          id="section8"
          className="h-screen snap-start flex  text-white text-3xl"
        >
          <div>
            <h1 className=" flex relative top-3 left-3 bottom-10 pb-10 text-blue-500">
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
                    <h1 className="text-sm flex items-center pr-6">
                      pedro_cassemiro14
                    </h1>
                  </div>
                </div>
                {/* 3 icone */}
                <div className="flex flex-row gap-8 items-center">
                  <Link
                    className=" text-white text-3xl"
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
