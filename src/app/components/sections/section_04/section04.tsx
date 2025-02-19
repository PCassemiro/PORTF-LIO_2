import { ThumbsUp, Coffee, Clock, Music, Briefcase } from "lucide-react";

export default function ComponentSection04() {
  return (
    <section
      id="section4"
      className="h-screen snap-start flex  text-white text-3xl"
    >
      <div>
        <h1 className=" flex relative top-3 left-3 pb-20 text-blue-500">
          CURIOSIDADES
        </h1>
        <div className="flex flex-col   h-full">
          <div className="flex flex-row justify-start gap-28 h-1/3">
            <div className="flex flex-col items-center h-full">
              <Clock size={70} />
              <p className="text-5xl">200+</p>
              <h1>Horas de trabalho</h1>
            </div>
            <div className="flex flex-col  items-center">
              <Music size={70} />
              <p className="text-5xl">800+</p>
              <h1>Horas no spotify</h1>
            </div>
            <div className="flex flex-col  items-center">
              <Coffee size={70} />
              <p className="text-5xl">999+</p>
              <h1>Copos de café tomados</h1>
            </div>
          </div>
          <div className="flex flex-row justify-end  gap-28  h-1/3">
            <div className="flex flex-col  items-center">
              <Briefcase size={70} />
              <p className="text-5xl">1</p>
              <h1>Projetos finalizados</h1>
            </div>
            <div className="flex flex-col  items-center">
              <ThumbsUp size={70} />
              <p className="text-5xl">1</p>
              <h1>Clientes felizes</h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
