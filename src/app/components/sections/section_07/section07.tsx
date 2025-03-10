"use client";

import type React from "react";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ChevronRight,
  Lightbulb,
  Layers,
  Palette,
  Code,
  ClipboardCheck,
  Handshake,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardFooter } from "../../Cards/card";

interface ProcessStep {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}

export default function ProcessoTrabalho() {
  const [activeStep, setActiveStep] = useState<number>(1);

  const steps: ProcessStep[] = [
    {
      id: 1,
      title: "Ideia",
      description:
        "Brainstorming e concepção do projeto. Nesta fase, capturo a visão do cliente e transformo em conceitos tangíveis.",
      icon: <Lightbulb className="h-8 w-8" />,
      color: "from-emerald-500 to-green-500",
    },
    {
      id: 2,
      title: "Modelagem",
      description:
        "Estruturação do projeto com wireframes e protótipos iniciais para validar a arquitetura da solução.",
      icon: <Layers className="h-8 w-8" />,
      color: "from-green-500 to-lime-500",
    },
    {
      id: 3,
      title: "Design",
      description:
        "Criação da identidade visual e experiência do usuário, com foco em usabilidade e estética.",
      icon: <Palette className="h-8 w-8" />,
      color: "from-lime-500 to-yellow-500",
    },
    {
      id: 4,
      title: "Desenvolvimento",
      description:
        "Implementação técnica do projeto, transformando o design em código funcional e otimizado.",
      icon: <Code className="h-8 w-8" />,
      color: "from-blue-500 to-cyan-500",
    },
    {
      id: 5,
      title: "Revisão",
      description:
        "Testes rigorosos e refinamentos para garantir qualidade e conformidade com os requisitos.",
      icon: <ClipboardCheck className="h-8 w-8" />,
      color: "from-violet-500 to-purple-500",
    },
    {
      id: 6,
      title: "Conclusão",
      description:
        "Entrega final do projeto, documentação e orientações para o cliente sobre a solução implementada.",
      icon: <Handshake className="h-8 w-8" />,
      color: "from-rose-500 to-pink-500",
    },
  ];

  return (
    <section id="section7" className="h-screen snap-start ">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-500 mb-8 border-b border-blue-500 pb-2 inline-block">
          PROCESSO DE TRABALHO
        </h1>
        {/* bg-1 */}
        <div className=" rounded-xl h-full w-full text-white">
          <div className="text-center mb-12 py-16">
            <p className="text-lg text-white dark:text-gray-300 max-w-2xl mx-auto ">
              Minha metodologia estruturada em 6 etapas para entregar projetos
              de alta qualidade e que atendam às suas expectativas.
            </p>
          </div>

          {/* Timeline Desktop */}
          <div className="hidden md:flex justify-between items-center mb-12 relative">
            <div className="absolute h-1 bg-gradient-to-r from-blue-600 to-cyan-500 w-full top-5 z-0"></div>
            {steps.map((step) => (
              <div
                key={step.id}
                className="z-10 flex flex-col items-center cursor-pointer"
                onClick={() => setActiveStep(step.id)}
              >
                <div
                  className={cn(
                    "w-10 h-10 rounded-full flex items-center justify-center mb-2 transition-all duration-300",
                    activeStep === step.id
                      ? `bg-gradient-to-r ${step.color} shadow-lg scale-125`
                      : "bg-white dark:bg-gray-800 border-2 border-blue-500"
                  )}
                >
                  {activeStep === step.id ? (
                    <span className="text-white font-bold">{step.id}</span>
                  ) : (
                    <span className="text-blue-500 dark:text-blue-400 font-medium">
                      {step.id}
                    </span>
                  )}
                </div>
                <span
                  className={cn(
                    "font-medium transition-all duration-300",
                    activeStep === step.id
                      ? "text-blue-600 dark:text-blue-400 scale-105"
                      : "text-gray-100 dark:text-gray-400"
                  )}
                >
                  {step.title}
                </span>
              </div>
            ))}
          </div>

          {/* Steps Mobile */}
          <div className="flex md:hidden overflow-x-auto pb-4 gap-4 mb-8">
            {steps.map((step) => (
              <div
                key={step.id}
                onClick={() => setActiveStep(step.id)}
                className={cn(
                  "flex-shrink-0 px-4 py-2 rounded-full cursor-pointer transition-all duration-300 flex items-center gap-2",
                  activeStep === step.id
                    ? `bg-gradient-to-r ${step.color} text-white`
                    : "bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700"
                )}
              >
                <span>{step.id}.</span>
                <span>{step.title}</span>
              </div>
            ))}
          </div>

          {/* Active Step Card */}
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="border-0 shadow-lg overflow-hidden">
              <div
                className={cn(
                  "h-2 w-full bg-gradient-to-r",
                  steps[activeStep - 1].color
                )}
              />
              <div className="md:flex">
                {/* bg-2 */}
                <div className="md:w-1/3 text-white dark:from-gray-800 dark:to-gray-900 p-8 flex flex-col justify-center items-center">
                  <div
                    className={cn(
                      "w-24 h-24 rounded-full bg-gradient-to-r flex items-center justify-center mb-6 text-white",
                      steps[activeStep - 1].color
                    )}
                  >
                    {steps[activeStep - 1].icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-2 text-center">
                    {activeStep}. {steps[activeStep - 1].title}
                  </h3>
                </div>
                <CardContent className="md:w-2/3 p-8">
                  <p className="text-lg mb-6">
                    {steps[activeStep - 1].description}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[1, 2].map((item) => (
                      <div key={item} className="flex items-start gap-3">
                        <div
                          className={cn(
                            "p-2 rounded-full bg-gradient-to-r mt-1",
                            steps[activeStep - 1].color
                          )}
                        >
                          <ChevronRight className="h-4 w-4 text-white" />
                        </div>
                        <div>
                          <h4 className="font-medium mb-1">
                            Ponto-chave {item}
                          </h4>
                          <p className="text-sm text-white dark:text-gray-400">
                            {activeStep === 1 &&
                              item === 1 &&
                              "Entendimento profundo das necessidades do cliente"}
                            {activeStep === 1 &&
                              item === 2 &&
                              "Pesquisa de mercado e análise de concorrência"}
                            {activeStep === 2 &&
                              item === 1 &&
                              "Criação de wireframes e fluxos de usuário"}
                            {activeStep === 2 &&
                              item === 2 &&
                              "Definição da arquitetura de informação"}
                            {activeStep === 3 &&
                              item === 1 &&
                              "Design visual alinhado com a identidade da marca"}
                            {activeStep === 3 &&
                              item === 2 &&
                              "Prototipagem interativa para validação"}
                            {activeStep === 4 &&
                              item === 1 &&
                              "Codificação limpa e bem documentada"}
                            {activeStep === 4 &&
                              item === 2 &&
                              "Implementação responsiva e otimizada"}
                            {activeStep === 5 &&
                              item === 1 &&
                              "Testes de usabilidade e performance"}
                            {activeStep === 5 &&
                              item === 2 &&
                              "Ajustes finais baseados em feedback"}
                            {activeStep === 6 &&
                              item === 1 &&
                              "Entrega do projeto finalizado"}
                            {activeStep === 6 &&
                              item === 2 &&
                              "Suporte pós-lançamento e orientações"}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </div>
              <CardFooter className=" dark:bg-gray-900 p-4 flex justify-between">
                <button
                  onClick={() =>
                    setActiveStep((prev) =>
                      prev === 1 ? steps.length : prev - 1
                    )
                  }
                  className="text-sm text-gray-100 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Etapa anterior
                </button>
                <div className="flex gap-1">
                  {steps.map((step) => (
                    <div
                      key={step.id}
                      onClick={() => setActiveStep(step.id)}
                      className={cn(
                        "w-2 h-2 rounded-full cursor-pointer transition-all duration-300",
                        activeStep === step.id
                          ? `bg-gradient-to-r ${step.color}`
                          : "bg-gray-300 dark:bg-gray-700"
                      )}
                    />
                  ))}
                </div>
                <button
                  onClick={() =>
                    setActiveStep((prev) =>
                      prev === steps.length ? 1 : prev + 1
                    )
                  }
                  className=" text-sm text-gray-100 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Próxima etapa
                </button>
              </CardFooter>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
