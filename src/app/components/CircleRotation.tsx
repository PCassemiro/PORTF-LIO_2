import { RefreshCw } from "lucide-react";
import React, { useState } from "react";

const CircleRotation = () => {
  const [rotation, setRotation] = useState(0);
  const numElements = 6;
  const radius = 50; // Raio do círculo

  // Calcula as posições dos elementos na borda do círculo
  const elements = Array.from({ length: numElements }).map((_, i) => {
    const angle = ((i * 360) / numElements) * (Math.PI / 180); // Divide o círculo em 6 partes
    return {
      left: `${50 + radius * Math.cos(angle)}%`,
      top: `${50 + radius * Math.sin(angle)}%`,
      transform: `translate(-50%, -50%)`,
    };
  });

  // Função para girar o círculo ao clicar no botão
  const rotateCircle = () => {
    setRotation((prev) => prev + 45); // Aumenta a rotação em 45 graus a cada clique
  };

  return (
    <div className="relative w-[62vh] h-[62vh] flex items-center justify-center border-2 border-black rounded-full">
      {/* Div que contém os elementos e gira */}
      <div
        className="absolute w-full h-full"
        style={{
          transform: `rotate(${rotation}deg)`,
          transition: "transform 0.5s linear",
        }}
      >
        {elements.map((style, index) => (
          <div
            key={index}
            className="absolute w-10 h-10 bg-blue-500 text-white flex items-center justify-center rounded-full"
            style={style}
          >
            {index + 1}
          </div>
        ))}
      </div>

      {/* Botão no centro do círculo */}
      <button
        onClick={rotateCircle}
        className="absolute w-12 h-12 bg-zinc-900 text-white flex items-center justify-center rounded-full shadow-lg"
      >
        <RefreshCw />
      </button>
    </div>
  );
};

export default CircleRotation;
