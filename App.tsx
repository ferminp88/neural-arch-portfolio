
import React from 'react';
import Layout from './components/Layout';
import Hero from './components/Hero';
import Manifesto from './components/Manifesto';
import Skills from './components/Skills';
import VisionaryCore from './components/VisionaryCore';
import Contact from './components/Contact';
import { LanguageProvider } from './components/LanguageContext';

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <Layout>
        <Hero />
        <Manifesto />
        <Skills />
        <VisionaryCore />
        <Contact />
        
        {/* Hidden Easter Egg */}
        <div 
          className="fixed bottom-4 left-4 z-50 opacity-0 hover:opacity-100 transition-opacity cursor-help"
          onClick={() => alert("The future is a hallucination.")}
        >
          <div className="w-2 h-2 bg-[#ff00ff] rounded-full shadow-[0_0_10px_#ff00ff]" />
        </div>
      </Layout>
    </LanguageProvider>
  );
};

export default App;
