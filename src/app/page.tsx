"use client";
export default function HomePage() {
  return (
    // Geral
    <div className="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth bg-zinc-800">
      {/* Nome */}
      <section className="h-screen snap-start flex  text-white text-3xl">
        <h1 className=" flex relative top-3 left-3">Seção 1</h1>
      </section>
      {/* Quem sou eu */}
      <section className="h-screen snap-start flex   text-white text-3xl">
        <h1 className=" flex relative top-3 left-3">QUEM SOU EU</h1>
      </section>
      {/* Conhecimento */}
      <section className="h-screen snap-start flex  text-white text-3xl">
        <h1 className=" flex relative top-3 left-3">CONHECIMENTOS</h1>
      </section>
      {/* Projetos */}
      <section className="h-screen snap-start flex  text-white text-3xl">
        <h1 className=" flex relative top-3 left-3">PROJETOS</h1>
      </section>
      {/* Contatos */}
      <section className="h-screen snap-start flex  text-white text-3xl">
        <h1 className=" flex relative top-3 left-3">CONTATOS</h1>
      </section>
    </div>
  );
}
