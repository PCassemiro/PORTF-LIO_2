import { Button } from "@heroui/button";
import {
  IoIosArrowForward,
  IoIosArrowBack,
  IoIosFootball,
} from "react-icons/io";
// import { IoIosArrowBack } from "react-icons/io";
import React, { useEffect, useState } from "react";
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
      icone: <FaHandHoldingMedical className="text-white h-56 w-56" />,
      titulo: "Medic-Ia",
    },
    {
      id: 1,
      icone: <FaRegCalendarCheck className="text-white h-56 w-56" />,
      titulo: "Calenadio",
    },
    {
      id: 2,
      icone: <FaProjectDiagram className="text-white h-56 w-56" />,
      titulo: "Finace-Ia",
    },
    {
      id: 3,
      icone: <IoIosFootball className="text-white h-56 w-56" />,
      titulo: "FutRandom",
    },
    {
      id: 4,
      icone: <RxLapTimer className="text-white h-56 w-56" />,
      titulo: "Cronometro",
    },
    {
      id: 5,
      icone: <MdQuiz className="text-white h-56 w-56" />,
      titulo: "Quiz",
    },
    {
      id: 6,
      icone: <ImSpades className="text-white h-56 w-56" />,
      titulo: "Poker",
    },
  ];

  /*const Meio = 3 / 2;
  let Mediana = 0;
  //Testador
  function Teste() {
    if (Meio % 2 === 0) {
      console.log("par");
      Mediana = Meio;
    } else {
      console.log("impar");
      Mediana = Meio + 0.5;
    }
    console.log(3, Meio, Mediana);
  }*/
  const [ElementoEsquerda, setElementoEsquerda] = useState(0);
  const [ElementoMeio, setElementoMeio] = useState(1);
  const [ElementoDireita, setElementoDireita] = useState(2);
  function GirarDireita() {
    // VALOR INICIAL
    setElementoEsquerda((inicial) => inicial + 1);
    setElementoMeio((inicial) => inicial + 1);
    setElementoDireita((inicial) => inicial + 1);
    //RENICIO DE VALOR
    if (ElementoEsquerda == CardProjet.length - 1) {
      setElementoEsquerda((inicial) => inicial - CardProjet.length);
    }
    if (ElementoMeio == CardProjet.length - 1) {
      setElementoMeio((inicial) => inicial - CardProjet.length);
    }
    if (ElementoDireita == CardProjet.length - 1) {
      setElementoDireita((inicial) => inicial - CardProjet.length);
    }
  }

  useEffect(() => {
    GirarDireita();
  }, []);

  // function Girar() {}
  return (
    <section
      id="section6"
      className="h-screen snap-start flex  text-white text-3xl"
    >
      {/* GERAL */}
      <div className="flex flex-col w-full">
        <div>
          <h1 className=" flex relative top-3 left-3 pb-10 text-blue-500">
            MEUS PROJETOS
          </h1>
        </div>

        <div className="grid grid-cols-3 items-center h-full w-full justify-center">
          <div className="flex justify-center items-center flex-col">
            <p className="flex items-center justify-center text-white text-xl">
              {CardProjet[ElementoEsquerda].titulo}
            </p>
            <Button className="flex flex-col justify-center items-center h-40 w-40 bg-blue-900 rounded-full shadow-lg">
              <IoIosArrowBack className="text-white h-full w-full" />
            </Button>
          </div>
          <div className="flex flex-col items-center justify-center">
            <p className="flex items-center justify-center font-mono text-5xl uppercase">
              {CardProjet[ElementoMeio].titulo}
            </p>
            <div className="flex justify-center items-center h-96 w-96 shadow-lg bg-blue-900 rounded-full">
              <div className="h-full w-full flex justify-center items-center">
                {CardProjet[ElementoMeio].icone}
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center flex-col">
            <p className="flex items-center justify-center text-white text-xl">
              {CardProjet[ElementoDireita].titulo}
            </p>
            <Button
              className="flex flex-col justify-center items-center h-40 w-40 bg-blue-900 rounded-full shadow-lg"
              onPress={() => GirarDireita()}
            >
              <IoIosArrowForward className="text-white h-full w-full" />
            </Button>
          </div>
          {/* ))} */}
        </div>
      </div>
    </section>
  );
}
