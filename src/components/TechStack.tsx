import React from "react";
import { techStackData } from "../data/techStackData";

const TechStack: React.FC = () => {
  return (
    <section className="py-20 bg-gray-100 text-gray-800">
      <h2 className="text-3xl font-bold text-center mb-12">Tech Stack</h2>
      <div className="flex justify-center gap-8 flex-wrap">
        {techStackData.map((tech, index) => (
          <a
            key={index}
            href={tech.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center hover:opacity-80 transition duration-200"
          >
            <img
              src={tech.icon}
              alt={`${tech.name} icon`}
              className="w-16 h-16 mb-2"
            />
            <span className="text-xl font-semibold">{tech.name}</span>
          </a>
        ))}
      </div>
    </section>
  );
};

export default TechStack;
