import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="py-6 bg-gray-800 text-white text-center">
      <p>
        &copy; {new Date().getFullYear()} Project Name. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
