import { ThumbsUp, Coffee, Clock, Music, Briefcase } from "lucide-react";

export default function ComponentSection04() {
  return (
    <section
      id="section4"
      className="h-screen  snap-start flex   text-white text-3xl"
    >
      <div>
        <h1 className=" flex relative top-3 left-3 pb-20 text-blue-500">
          CURIOSIDADES
        </h1>
        <div className="flex flex-col justify-center ">
          <div className="flex flex-row justify-center gap-28 h-full w-full">
            <div className="flex flex-col items-center bg-zinc-900 rounded-lg h-64 w-80  justify-center shadow-2xl">
              <Clock size={70} className="text-blue-600" />
              <p className="text-4xl font-bold">200+</p>
              <h1 className="text-zinc-400">Horas de trabalho</h1>
            </div>
            <div className="flex flex-col items-center bg-zinc-900 rounded-lg h-64 w-80 justify-center shadow-2xl">
              <Music size={70} className="text-blue-600" />
              <p className="text-4xl font-bold">800+</p>
              <h1 className="text-zinc-400">Horas no spotify</h1>
            </div>
            <div className="flex flex-col items-center bg-zinc-900 rounded-lg h-64 w-80 justify-center shadow-2xl">
              <Coffee size={70} className="text-blue-600" />
              <p className="text-4xl font-bold">999+</p>
              <h1 className="text-zinc-400">Café tomados</h1>
            </div>
          </div>
          <div className="flex flex-row   gap-28  h-1/3 py-5 justify-center">
            <div className="flex flex-col items-center bg-zinc-900 rounded-lg h-64 w-80 justify-center shadow-2xl">
              <Briefcase size={70} className="text-blue-600" />
              <p className="text-4xl font-bold">1</p>
              <h1 className="text-zinc-400">Projetos finalizados</h1>
            </div>
            <div className="flex flex-col items-center bg-zinc-900 rounded-lg h-64 w-80 justify-center shadow-2xl">
              <ThumbsUp size={70} className="text-blue-600" />
              <p className="text-4xl font-bold">1</p>
              <h1 className="text-zinc-400">Clientes felizes</h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
