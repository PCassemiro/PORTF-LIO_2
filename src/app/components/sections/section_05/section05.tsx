import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

interface Experience {
  period: string;
  title: string;
  company: string;
  description: string;
}

const experiences: Experience[] = [
  {
    period: "2024 - Presente",
    title: "Estagiário",
    company: "Prefeitura de Cariacica",
    description:
      "Atuação na área de desenvolvimento da prefeitura de Cariacica.",
  },
  {
    period: "2019 - 2020",
    title: "Menor Aprendiz",
    company: "TechnipFMC",
    description: "Atuação na área administrativa.",
  },
];

export function ComponentSection05() {
  return (
    <section id="section5" className="h-screen snap-start ">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-500 mb-8 border-b border-blue-500 pb-2 inline-block">
          EXPERIÊNCIA
        </h1>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="bg-zinc-900 rounded-lg p-6 shadow-lg"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="flex items-center mb-4">
                <Briefcase className="text-blue-500 mr-3" />
                <h3 className="text-xl md:text-2xl font-semibold text-white">
                  {exp.title}
                </h3>
              </div>
              <p className="text-blue-400 text-sm mb-2">{exp.period}</p>
              <p className="text-gray-300 font-medium mb-2">{exp.company}</p>
              <p className="text-gray-400">{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
