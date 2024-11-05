import React from "react";
import { strings } from "../data/strings";

const Features: React.FC = () => {
  return (
    <section className="py-20 bg-gray-100 text-gray-800">
      <h2 className="text-3xl font-bold text-center mb-12"> Features </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {strings.features.map((feature, index) => (
          <div key={index} className="p-6 shadow-md rounded-lg">
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
