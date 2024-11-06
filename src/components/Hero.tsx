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
      {/* Scroll Down Indicator */}
      <div className="absolute bottom-10 flex flex-col items-center animate-bounce">
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
