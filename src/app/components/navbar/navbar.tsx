"use client";

import { Button, Link } from "@nextui-org/react";
import { useEffect, useState } from "react";

export default function ComponentNavbar() {
  const [activeSection, setActiveSection] = useState("section1");

  useEffect(() => {
    const observerOptions = {
      root: null, // viewport
      rootMargin: "0px",
      threshold: 0.6, // 60% da seção precisa estar visível
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    // Observar todas as seções
    for (let i = 1; i <= 8; i++) {
      const section = document.getElementById(`section${i}`);
      if (section) {
        observer.observe(section);
      }
    }

    return () => {
      // Limpar o observer quando o componente for desmontado
      observer.disconnect();
    };
  }, []);

  // Função para determinar a classe do botão com base na seção ativa
  const getButtonClass = (sectionId) => {
    const baseClass =
      "bg-transparent transition-all duration-300 flex items-center gap-1";
    return activeSection === sectionId
      ? `${baseClass} text-blue-500 font-bold`
      : `${baseClass} text-white`;
  };

  return (
    <div className="flex flex-wrap justify-center gap-2 flex-col">
      <Link href="#section1">
        <Button className={getButtonClass("section1")}>
          <span className="font-mono">
            {activeSection === "section1" ? "</>" : "<>"}
          </span>
          <span>01. Topo</span>
        </Button>
      </Link>

      <Link href="#section2">
        <Button className={getButtonClass("section2")}>
          <span className="font-mono">
            {activeSection === "section2" ? "</>" : "<>"}
          </span>
          <span>02. Quem sou eu</span>
        </Button>
      </Link>

      <Link href="#section3">
        <Button className={getButtonClass("section3")}>
          <span className="font-mono">
            {activeSection === "section3" ? "</>" : "<>"}
          </span>
          <span>03. Habilidades</span>
        </Button>
      </Link>

      <Link href="#section4">
        <Button className={getButtonClass("section4")}>
          <span className="font-mono">
            {activeSection === "section4" ? "</>" : "<>"}
          </span>
          <span>04. Curiosidades</span>
        </Button>
      </Link>

      <Link href="#section5">
        <Button className={getButtonClass("section5")}>
          <span className="font-mono">
            {activeSection === "section5" ? "</>" : "<>"}
          </span>
          <span>05. Experiência</span>
        </Button>
      </Link>

      <Link href="#section6">
        <Button className={getButtonClass("section6")}>
          <span className="font-mono">
            {activeSection === "section6" ? "</>" : "<>"}
          </span>
          <span>06. Meus projetos</span>
        </Button>
      </Link>

      <Link href="#section7">
        <Button className={getButtonClass("section7")}>
          <span className="font-mono">
            {activeSection === "section7" ? "</>" : "<>"}
          </span>
          <span>07. Processo de trabalho</span>
        </Button>
      </Link>

      <Link href="#section8">
        <Button className={getButtonClass("section8")}>
          <span className="font-mono">
            {activeSection === "section8" ? "</>" : "<>"}
          </span>
          <span>08. Meus Contatos</span>
        </Button>
      </Link>
    </div>
  );
}
