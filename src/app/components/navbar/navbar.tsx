"use client";
import { Button, Link } from "@nextui-org/react";
export default function ComponentNavbar() {
  return (
    <div>
      <Link href="#section1">
        <Button className="bg-transparent text-white ">01. Topo</Button>
      </Link>
      <Link href="#section2">
        <Button className="bg-transparent text-white ">02. Quem sou eu</Button>
      </Link>
      <Link href="#section3">
        <Button className="bg-transparent text-white ">03. Habilidades</Button>
      </Link>

      <Link href="#section4">
        <Button className="bg-transparent text-white ">04. Curiosidades</Button>
      </Link>
      <Link href="#section5">
        <Button className="bg-transparent text-white ">05. Experiência</Button>
      </Link>
      <Link href="#section6">
        <Button className="bg-transparent text-white ">
          06. Meus projetos
        </Button>
      </Link>
      <Link href="#section7">
        <Button className="bg-transparent text-white ">
          07. Processo de trabalho
        </Button>
      </Link>
      <Link href="#section8">
        <Button className="bg-transparent text-white ">
          08. Meus Contatos
        </Button>
      </Link>
    </div>
  );
}
