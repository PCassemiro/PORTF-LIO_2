import { User, Calendar } from "lucide-react";
export default function ComponentSection02() {
  return (
    <section
      id="section2"
      className="h-screen snap-start flex flex-cols   text-white text-3xl"
    >
      {/* geral */}

      <div>
        <h1 className=" flex relative top-3 left-3 pb-16 text-blue-500">
          QUEM SOU EU
        </h1>

        {/* Geral */}
        <div className="grid grid-cols-2">
          {/* Texto */}
          <div className="space-y-6 text-lg">
            <p>
              Meu nome é Pedro de Oliveira Cassemiro, sou estudante de Sistemas
              de Informação no Centro Universitário FAESA, campus Vitória.
              Atualmente, atuo como estagiário na Prefeitura de Cariacica, onde
              tenho a oportunidade de aplicar e expandir meus conhecimentos na
              área de Tecnologia da Informação.
            </p>
            <p>
              Desde os 16 anos, a tecnologia se tornou uma grande paixão na
              minha vida. O que mais me motiva nessa área é a sua ampla gama de
              oportunidades e as infinitas possibilidades criativas que ela
              proporciona.
            </p>
            <p>
              Acredito que a tecnologia tem um impacto significativo no
              cotidiano das pessoas, tornando-se essencial para a evolução da
              sociedade e a melhoria da qualidade de vida. Estou sempre em busca
              de aprendizado e inovação, explorando novas tendências e desafios
              dentro da TI.
            </p>
            <p>
              Para mim, essa área vai muito além de códigos e sistemas - ela
              representa a construção do futuro e a transformação do mundo ao
              nosso redor.
            </p>
          </div>
          {/* Geral direita */}
          <div className=" mx-36 flex flex-col justify-center h-full ">
            <div className="text-[200px] font-bold text-blue-500 opacity-20 flex justify-center relative ">
              1
            </div>
            <div className="flex justify-center relative text-8xl font-bold bottom-20">
              1
            </div>
            <div className="flex flex-col   text-zinc-400 font-bold text-xl">
              <p className="text-base flex justify-center">
                Ano de experiencia
              </p>
            </div>
            <div className="flex flex-row gap-6 justify-center text-xs">
              <div className="flex flex-row justify-center items-center gap-1">
                <User className="text-blue-600" />
                Estagiario
              </div>
              <div className="flex flex-row justify-center items-center gap-1">
                <Calendar className="text-blue-600" />
                Desde 2024
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
