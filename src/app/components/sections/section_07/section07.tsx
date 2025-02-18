import CardMusic from "./cardes/cardMusica";
import CardProcess from "./cardes/cardProcesso";

export default function ComponentSection07() {
  return (
    <section
      id="section7"
      className="h-screen snap-start flex  text-white text-3xl"
    >
      <div className="flex flex-col w-full">
        <h1 className=" flex relative top-3 left-3 pb-10 text-blue-500">
          PROCESSO DE TRABALHO
        </h1>

        <div className="flex flex-col justify-center pb-10 gap-6 w-full h-full     ">
          <div className="flex flex-col justify-items-center  ">
            {/* ROW 1 */}
            <div className="flex flex-row justify-between my-8">
              <CardProcess
                titulo="1. Ideia"
                imagem="/image/processoTrabalho/ideia.jpg"
              />
              <CardProcess
                titulo="2. Modelagem"
                imagem="/image/processoTrabalho/modelagem.jpg"
              />
              <CardProcess
                titulo="3. Design"
                imagem="/image/processoTrabalho/design.jpg"
              />
            </div>
            {/* ROW 2 */}
            <div className="flex flex-row justify-between">
              <CardProcess
                titulo="4. Desenvolvimento"
                imagem="/image/processoTrabalho/desenvolvimento.jpg"
              />
              <CardProcess
                titulo="5. Revisão"
                imagem="/image/processoTrabalho/revisao.jpg"
              />
              <CardProcess
                titulo="6. Conclusão"
                imagem="/image/processoTrabalho/conclusao.jpg"
              />
            </div>
          </div>
          {/* musica */}
          <div className="flex flex-col w-full gap-12">
            <CardMusic />
          </div>
        </div>
      </div>
    </section>
  );
}
