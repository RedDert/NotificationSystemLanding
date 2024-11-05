import React from "react";

const Demo: React.FC = () => {
  return (
    <section className="py-20 bg-white text-gray-800">
      <h2 className="text-3xl font-bold text-center mb-12">Demo</h2>
      <div className="flex justify-center">
        {/* Replace with your own video or image carousel */}
        <img
          src="/path/to/demo-image.png"
          alt="Demo"
          className="rounded-lg shadow-md"
        />
      </div>
    </section>
  );
};

export default Demo;
