"use client";
import { FaPython } from "react-icons/fa";
import { Image } from "@heroui/image";
import { motion } from "framer-motion";
import { Code, CodeXml, CheckCircle2 } from "lucide-react";

// Definindo um tipo para as habilidades para melhor organização
type Skill = {
  name: string;
  level: "básico" | "intermediário" | "avançado";
  icon: "code" | "codeXml";
  color: string;
  percentage: number;
};

export default function SkillsSection() {
  // Dados das habilidades organizados em um array para facilitar manutenção
  const leftSkills: Skill[] = [
    {
      name: "HTML",
      level: "intermediário",
      icon: "code",
      color: "text-orange-500",
      percentage: 75,
    },
    {
      name: "CSS",
      level: "intermediário",
      icon: "code",
      color: "text-blue-500",
      percentage: 70,
    },
    {
      name: "JavaScript/TypeScript",
      level: "intermediário",
      icon: "code",
      color: "text-yellow-300",
      percentage: 65,
    },
  ];

  const rightSkills: Skill[] = [
    {
      name: "Java",
      level: "intermediário",
      icon: "codeXml",
      color: "text-red-600",
      percentage: 60,
    },
    {
      name: "Python",
      level: "básico",
      icon: "codeXml",
      color: "text-blue-500",
      percentage: 40,
    },
    {
      name: "SQL",
      level: "intermediário",
      icon: "codeXml",
      color: "text-orange-500",
      percentage: 70,
    },
  ];

  // Variantes de animação reutilizáveis
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  // Componente para renderizar uma habilidade individual
  const SkillItem = ({
    skill,
    index,
    align = "left",
  }: {
    skill: Skill;
    index: number;
    align?: "left" | "right";
  }) => {
    return (
      <motion.div
        variants={itemVariants}
        className={`mb-8 ${align === "right" ? "text-right" : "text-left"}`}
        custom={index}
      >
        <div
          className={`flex items-center gap-2 text-xl font-semibold mb-2 ${
            skill.color
          } ${align === "right" ? "justify-end" : "justify-start"}`}
        >
          {align === "left" &&
            (skill.icon === "code" ? (
              <Code className="text-white" />
            ) : (
              <CodeXml className="text-white" />
            ))}
          {skill.name}
          {align === "right" &&
            (skill.icon === "code" ? (
              <Code className="text-white" />
            ) : (
              <CodeXml className="text-white" />
            ))}
        </div>

        <div className="text-sm mb-2 text-gray-300">{skill.level}</div>

        <div className="w-full bg-gray-700 rounded-full h-2.5">
          <motion.div
            className={`h-2.5 rounded-full ${skill.color.replace(
              "text",
              "bg"
            )}`}
            style={{ width: "0%" }}
            animate={{ width: `${skill.percentage}%` }}
            transition={{ duration: 1, delay: 0.5 + index * 0.2 }}
          />
        </div>
      </motion.div>
    );
  };

  return (
    <section
      id="section3"
      className="min-h-screen snap-start flex items-center text-white py-16"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-blue-500 mb-4 border-b border-blue-500 pb-2 inline-block">
            HABILIDADES
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl">
            Minhas competências técnicas e níveis de proficiência em diferentes
            tecnologias.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Coluna da esquerda - Habilidades Front-end */}
          <motion.div
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div variants={itemVariants} className="mb-6">
              <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                <CheckCircle2 className="text-blue-500" />
                Front-end
              </h3>
            </motion.div>

            {leftSkills.map((skill, index) => (
              <SkillItem key={skill.name} skill={skill} index={index} />
            ))}
          </motion.div>

          {/* Coluna central - Gráfico/Imagem */}
          <motion.div
            className="flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative rounded-lg overflow-hidden border border-gray-700 shadow-xl flex justify-center items-center">
              <FaPython className="w-[500px] h-[500px] object-cover p-20 " />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            </div>
          </motion.div>

          {/* Coluna da direita - Habilidades Back-end */}
          <motion.div
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div variants={itemVariants} className="mb-6 text-right">
              <h3 className="text-2xl font-semibold mb-4 flex items-center justify-end gap-2">
                Back-end
                <CheckCircle2 className="text-red-500" />
              </h3>
            </motion.div>

            {rightSkills.map((skill, index) => (
              <SkillItem
                key={skill.name}
                skill={skill}
                index={index}
                align="right"
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
