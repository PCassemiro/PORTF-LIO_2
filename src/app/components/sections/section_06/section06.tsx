"use client";

import { Button } from "@heroui/button";
import {
  IoIosArrowForward,
  IoIosArrowBack,
  IoIosFootball,
} from "react-icons/io";
import { useEffect, useState } from "react";
import { RxLapTimer } from "react-icons/rx";
import { FaHandHoldingMedical } from "react-icons/fa";
import { MdQuiz } from "react-icons/md";
import { ImSpades } from "react-icons/im";
import { FaRegCalendarCheck } from "react-icons/fa6";
import { FaProjectDiagram } from "react-icons/fa";

export default function ComponentSection06() {
  const CardProjet = [
    {
      id: 0,
      icone: <FaHandHoldingMedical className="text-white h-40 w-40" />,
      titulo: "Medic-Ia",
      descricao:
        "Projeto de desenvolvimento de uma plataforma de IA para auxiliar médicos na tomada de decisões e no tratamento de pacientes.",
      linguagem: "html, css e js",
      tempo: "100h",
    },
    {
      id: 1,
      icone: <FaRegCalendarCheck className="text-white h-40 w-40" />,
      titulo: "Calendario",
      descricao:
        "Uma ferramenta intuitiva para organizar vida e compromissos do usuario.",
      linguagem: "react",
      tempo: "60h",
    },
    {
      id: 2,
      icone: <FaProjectDiagram className="text-white h-40 w-40" />,
      titulo: "Finace-Ia",
      descricao:
        "Organize finanças de forma simples e inteligente. Planeje, economize e alcance seus objetivos com nosso app.",
      linguagem: "react, python e cql",
      tempo: "140h",
    },
    {
      id: 3,
      icone: <IoIosFootball className="text-white h-56 w-56" />,
      titulo: "FutRandom",
      descricao:
        "Organize seus campeonatos e jogos com sorteios de times imparciais e transparentes.",
      linguagem: "react",
      tempo: "80h",
    },
    {
      id: 4,
      icone: <RxLapTimer className="text-white h-40 w-40" />,
      titulo: "Cronometro",
      descricao:
        "Ferramenta ideal para monitorar seus tempos em diversas atividades.",
      linguagem: "react e cql",
      tempo: "6h",
    },
    {
      id: 5,
      icone: <MdQuiz className="text-white h-40 w-40" />,
      titulo: "MatemáticQuiz",
      descricao:
        "Aprenda matemática brincando! Um quiz interativo para todas as idades e níveis de conhecimento.",
      linguagem: "react",
      tempo: "10h",
    },
    {
      id: 6,
      icone: <ImSpades className="text-white h-40 w-40" />,
      titulo: "Poker",
      descricao: "Abrace a estratégia, blefe com maestria e conquiste a mesa.",
      linguagem: "JavaScript, React",
      tempo: "50h",
    },
  ];

  const [ElementoEsquerda, setElementoEsquerda] = useState(1);
  const [ElementoMeio, setElementoMeio] = useState(2);
  const [ElementoDireita, setElementoDireita] = useState(3);
  const [isAnimating, setIsAnimating] = useState(false);

  function GirarDireita() {
    if (isAnimating) return;

    setIsAnimating(true);

    // VALOR INICIAL
    setElementoEsquerda((inicial) => (inicial + 1) % CardProjet.length);
    setElementoMeio((inicial) => (inicial + 1) % CardProjet.length);
    setElementoDireita((inicial) => (inicial + 1) % CardProjet.length);

    setTimeout(() => setIsAnimating(false), 300);
  }

  function GirarEsquerda() {
    if (isAnimating) return;

    setIsAnimating(true);

    // VALOR INICIAL
    setElementoEsquerda(
      (inicial) => (inicial - 1 + CardProjet.length) % CardProjet.length
    );
    setElementoMeio(
      (inicial) => (inicial - 1 + CardProjet.length) % CardProjet.length
    );
    setElementoDireita(
      (inicial) => (inicial - 1 + CardProjet.length) % CardProjet.length
    );

    setTimeout(() => setIsAnimating(false), 300);
  }

  // Initialize carousel on mount
  useEffect(() => {
    // Set initial values
    setElementoEsquerda(CardProjet.length - 1);
    setElementoMeio(0);
    setElementoDireita(1);
  }, []);

  return (
    <section
      id="section6"
      className="h-screen snap-start flex flex-col text-white  "
    >
      {/* Header */}
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-500 mb-8 border-b border-blue-500 pb-2 inline-block">
          MEUS PROJETOS
        </h1>

        {/* Main content */}
        <div className="flex flex-col md:flex-row gap-8 ">
          {/* Project details */}
          <div className="md:w-1/3 bg-blue-900/20 rounded-xl p-6 h-[600px] backdrop-blur-sm border border-blue-500/30 shadow-lg">
            <h2 className="text-3xl font-bold mb-6 text-blue-400">
              {CardProjet[ElementoMeio].titulo}
            </h2>

            <div className="space-y-6">
              <div>
                <p className="text-xl font-semibold text-blue-300 mb-2">
                  DESCRIÇÃO:
                </p>
                <p className="text-lg h-32">
                  {CardProjet[ElementoMeio].descricao}
                </p>
              </div>

              <div>
                <p className="text-xl font-semibold text-blue-300 mb-2">
                  TECNOLOGIAS:
                </p>
                <div className="flex flex-wrap gap-2">
                  {CardProjet[ElementoMeio].linguagem ? (
                    CardProjet[ElementoMeio].linguagem
                      .split(", ")
                      .map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-blue-800 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))
                  ) : (
                    <span className="text-gray-400">Em desenvolvimento</span>
                  )}
                </div>
              </div>

              <div>
                <p className="text-xl font-semibold text-blue-300 mb-2">
                  TEMPO DE DESENVOLVIMENTO:
                </p>
                <p className="text-lg flex items-center">
                  <RxLapTimer className="mr-2" />
                  {CardProjet[ElementoMeio].tempo || "Em progresso"}
                </p>
              </div>

              <Button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-all duration-300 w-full">
                Ver Projeto
              </Button>
            </div>
          </div>

          {/* Carousel */}
          <div className="md:w-2/3 flex items-center justify-center h-[600px]">
            <div className="grid grid-cols-3 items-center w-full gap-4">
              {/* Left project */}
              <div className="flex justify-center items-center flex-col">
                <div
                  className={`transition-all duration-300 ${
                    isAnimating ? "opacity-0 scale-95" : "opacity-100 scale-100"
                  }`}
                >
                  <p className="text-center text-xl mb-4 text-blue-300">
                    {CardProjet[ElementoEsquerda].titulo}
                  </p>
                  <Button
                    className="flex flex-col justify-center items-center h-20 w-20 bg-blue-900 hover:bg-blue-800 rounded-full shadow-lg transition-all duration-300 border-2 border-blue-700"
                    onPress={() => GirarEsquerda()}
                  >
                    <IoIosArrowBack className="text-white h-10 w-10" />
                  </Button>
                </div>
              </div>

              {/* Center project */}
              <div className="flex flex-col items-center justify-center">
                <p className="text-center font-mono text-3xl md:text-4xl uppercase mb-6 text-blue-400 font-bold">
                  {CardProjet[ElementoMeio].titulo}
                </p>
                <div
                  className={`flex justify-center items-center h-56 w-56 md:h-72 md:w-72 shadow-xl bg-blue-900 rounded-full border-4 border-blue-700 transition-all duration-300 ${
                    isAnimating ? "scale-90" : "scale-100"
                  }`}
                >
                  <div className="h-full w-full flex justify-center items-center p-4">
                    {CardProjet[ElementoMeio].icone}
                  </div>
                </div>
              </div>

              {/* Right project */}
              <div className="flex justify-center items-center flex-col">
                <div
                  className={`transition-all duration-300 ${
                    isAnimating ? "opacity-0 scale-95" : "opacity-100 scale-100"
                  }`}
                >
                  <p className="text-center text-xl mb-4 text-blue-300">
                    {CardProjet[ElementoDireita].titulo}
                  </p>
                  <Button
                    className="flex flex-col justify-center items-center h-20 w-20 bg-blue-900 hover:bg-blue-800 rounded-full shadow-lg transition-all duration-300 border-2 border-blue-700"
                    onPress={() => GirarDireita()}
                  >
                    <IoIosArrowForward className="text-white h-10 w-10" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Project counter */}
        <div className="mt-8 text-center">
          <p className="text-blue-400">
            {ElementoMeio + 1} / {CardProjet.length}
          </p>
          <div className="flex justify-center mt-2 space-x-1">
            {CardProjet.map((_, index) => (
              <div
                key={index}
                className={`h-2 w-8 rounded-full ${
                  index === ElementoMeio ? "bg-blue-500" : "bg-blue-900"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
