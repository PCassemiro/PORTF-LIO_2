import { Image } from "@heroui/image";
import { Typewriter } from "./Typewriter";

export default function ComponentSection01() {
  return (
    <section
      id="section1"
      className="h-screen snap-start flex flex-row items-center   text-white "
    >
      {/* Apresentação */}
      <div className=" px-5 pt-5">
        <p className="text-2xl">Olá, sou</p>

        <div className="text-9xl">
          <Typewriter text={"Pedro de Oliveira Cassemiro"} />
        </div>
        <p className="text-3xl">
          Desenvolvedor <b className="text-amber-800">frontend</b>
        </p>
        <p className="text-2xl text-blue-500">Buscando evoluir sempre </p>
      </div>

      {/* Imagem */}
      <div className="">
        <Image
          /*isBlurred */
          alt="NextUI hero Image"
          src="/image/avatar/avatar.png"
          height={350}
          width={650}
          className="bg-white rounded-full border-gray-100 border-3"
        />
      </div>
    </section>
  );
}
