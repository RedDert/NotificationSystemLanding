// src/App.tsx
import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import Demo from './components/Demo';
import TechStack from './components/TechStack';
import Installation from './components/Installation';
import Contributing from './components/Contributing';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="font-sans">
      <Hero />
      <Features />
      <Demo />
      <TechStack />
      <Installation />
      <Contributing />
      <Footer />
    </div>
  );
};

export default App;

