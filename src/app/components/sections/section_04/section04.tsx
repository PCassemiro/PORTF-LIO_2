import { ThumbsUp, Coffee, Clock, Music, Briefcase } from "lucide-react";
import { FaPython } from "react-icons/fa";

export default function ComponentSection04() {
  const CardCuriosidade = [
    { icone: Clock, tempo: "200+", titulo: "Horas de trabalho" },
    { icone: Music, tempo: "800+", titulo: "Horas no spotify" },
    { icone: Coffee, tempo: "999+", titulo: "Café tomados" },
    { icone: FaPython, tempo: "1", titulo: "Linguagem favorita" },
    { icone: Briefcase, tempo: "1", titulo: "Projetos finalizados" },
    { icone: ThumbsUp, tempo: "1", titulo: "Clientes felizes" },
  ];
  return (
    <section
      id="section4"
      className="h-screen  snap-start flex   text-white text-3xl"
    >
      <div className="w-full ">
        <h1 className=" flex relative top-3 left-3 pb-20 text-blue-500">
          CURIOSIDADES
        </h1>
        <div className="flex flex-col  items-center mx-auto ">
          <div className="flex flex-row">
            <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 ">
              {CardCuriosidade.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center bg-zinc-900 rounded-lg h-64 w-80 transform hover:scale-105 transition-transform duration-300  justify-center shadow-2xl m-6"
                >
                  <item.icone size={70} className="text-blue-600" />
                  <p className="text-4xl font-bold">{item.tempo}</p>
                  <h1 className="text-zinc-400">{item.titulo}</h1>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
