import React, { useState, useEffect } from 'react';
import { useLanguage } from './LanguageContext';
import { UI_TEXT } from '../constants';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const { lang, setLang, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative w-full min-h-screen">
      <div 
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-[#ff00ff] via-[#00ffff] to-[#bfff00] z-[60] transition-all duration-300 ease-out" 
        style={{ width: `${scrollProgress}%` }}
      />

      <nav className="fixed top-8 left-8 right-8 flex justify-between items-start z-50 pointer-events-none">
        <div className="pointer-events-auto flex items-center gap-6">
          <h1 className="text-2xl font-black tracking-tighter leading-none text-difference">
            NEURAL<br/><span className="text-outline">ARCH</span>
          </h1>
          
          <button 
            onClick={() => setLang(lang === 'es' ? 'en' : 'es')}
            className="pointer-events-auto mono text-[10px] border border-[#ffffff33] px-2 py-1 hover:bg-[#bfff00] hover:text-black transition-all bg-black/50 backdrop-blur-md"
          >
            [{lang.toUpperCase()}]
          </button>
        </div>
        
        <div className="flex flex-col items-end gap-2 pointer-events-auto mono text-[10px] uppercase tracking-widest text-[#ffffff66]">
          <a href="#vision" className="hover:text-[#bfff00] transition-colors">{t(UI_TEXT.nav.manifesto)}</a>
          <a href="#ai" className="hover:text-[#ff00ff] transition-colors">{t(UI_TEXT.nav.ai)}</a>
          <a href="#contact" className="hover:text-[#00ffff] transition-colors">{t(UI_TEXT.nav.contact)}</a>
        </div>
      </nav>

      <main>{children}</main>

      <footer className="p-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 bg-black/80">
        <p className="mono text-[10px] text-zinc-600 tracking-[0.3em]">
          © 2024 {lang === 'es' ? 'REALIDAD RECONSTRUIDA' : 'REALITY RECONSTRUCTED'}
        </p>
        <div className="flex gap-12 text-[#ffffff33] mono text-[10px] uppercase">
          <span className="hover:text-[#ff00ff] cursor-pointer">INSTAGRAM</span>
          <span className="hover:text-[#00ffff] cursor-pointer">BEYANCE</span>
          <span className="hover:text-[#bfff00] cursor-pointer">X-FUTURE</span>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
