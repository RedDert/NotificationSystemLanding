import React from "react";
import { strings } from "../data/strings";
const Hero: React.FC = () => {
  return (
    <section className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-white">
      <h1 className="text-5xl font-bold mb-4">{strings.hero.title}</h1>
      <p className="text-xl mb-6">{strings.hero.tagline}</p>
      <a
        href={strings.githubUrl}
        className="bg-white text-blue-500 px-6 py-3 rounded-full font-semibold"
      >
        View on GitHub
      </a>
    </section>
  );
};

export default Hero;
