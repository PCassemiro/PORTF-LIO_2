export default function ComponentSection02() {
  return (
    <section
      id="section2"
      className="h-screen snap-start flex flex-cols   text-white text-3xl"
    >
      {/* geral */}
      <div className="px-5 pt-5">
        <div>
          <h1 className=" flex relative top-3 left-3 pb-16    text-blue-500">
            QUEM SOU EU
          </h1>
        </div>
        {/* Geral */}
        <div className="grid grid-cols-2">
          {/* Texto */}
          <div className="flex flex-col text-xl">
            <h1>
              Meu nome é Pedro de Oliveira Cassemiro, sou estudante de Sistemas
              de Informação no Centro Universitário FAESA, campus Vitória.
              Atualmente, atuo como estagiário na Prefeitura de Cariacica, onde
              tenho a oportunidade de aplicar e expandir meus conhecimentos na
              área de Tecnologia da Informação. Desde os 16 anos, a tecnologia
              se tornou uma grande paixão na minha vida. O que mais me motiva
              nessa área é a sua ampla gama de oportunidades e as infinitas
              possibilidades criativas que ela proporciona. Além disso, acredito
              que a tecnologia tem um impacto significativo no cotidiano das
              pessoas, tornando-se essencial para a evolução da sociedade e a
              melhoria da qualidade de vida. Estou sempre em busca de
              aprendizado e inovação, explorando novas tendências e desafios
              dentro da TI. Para mim, essa área vai muito além de códigos e
              sistemas ela representa a construção do futuro e a transformação
              do mundo ao nosso redor.
            </h1>
          </div>
          {/* Geral direita */}
          <div className="border-1 border- mx-36 flex flex-col ">
            <div className="pt-28">
              <h1 className="text-[248px] flex justify-center text-transparent relative inset-2 -mb-8 text-stroke">
                1
              </h1>
              <h1 className="text-[248px] flex justify-center text-transparent relative inset-1 -mb-8  text-stroke">
                1
              </h1>
              <h1 className="text-[250px] flex justify-center text-white relative">
                1
              </h1>
            </div>
            <div className="pt-20">
              <p className="text-sm flex justify-center">Ano de experiencia</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
