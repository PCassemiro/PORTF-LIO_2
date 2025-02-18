import { ThumbsUp } from "lucide-react";

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
  );
}
