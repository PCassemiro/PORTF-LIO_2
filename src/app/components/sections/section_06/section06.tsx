import { Image } from "@heroui/image";

export default function ComponentSection06() {
  return (
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
            src="/image/projetos/projeto_iamedica.png"
            height={350}
            width={350}
            className="bg-white "
          />
          <h1>IA médica</h1>
          <p className="text-lg">design-frontend</p>
        </div>
      </div>
    </section>
  );
}
