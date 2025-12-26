
import React from 'react';
import { useLanguage } from './LanguageContext';
import { UI_TEXT } from '../constants';

const Hero: React.FC = () => {
  const { t } = useLanguage();
  return (
    <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden px-6">
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[50vw] h-[50vw] bg-magenta-500/30 rounded-full blur-[150px] animate-pulse" style={{backgroundColor: '#ff00ff33'}} />
        <div className="absolute bottom-1/4 right-1/4 w-[40vw] h-[40vw] bg-cyan-500/30 rounded-full blur-[150px] animate-pulse" style={{backgroundColor: '#00ffff33', animationDelay: '2s'}} />
      </div>

      <div className="relative z-10 text-center space-y-8 text-difference">
        <p className="mono text-[#bfff00] text-xs tracking-[0.8em] uppercase animate-bounce italic">
          {t(UI_TEXT.hero.tagline)}
        </p>
        
        <h2 className="text-8xl md:text-[14rem] font-black leading-[0.8] tracking-tighter uppercase select-none">
          {t(UI_TEXT.hero.titleMain)}<br/>
          <span className="text-outline hover:text-[#bfff00] transition-all duration-300 cursor-none">
            {t(UI_TEXT.hero.titleSub)}
          </span>
        </h2>

        <div className="flex flex-col md:flex-row items-center justify-center gap-12 pt-20">
          <div className="max-w-[280px] text-white/70 text-sm font-bold leading-relaxed text-left md:text-right uppercase tracking-wider">
            {t(UI_TEXT.hero.descLeft)}
          </div>
          <div className="w-16 h-[2px] bg-gradient-to-r from-[#ff00ff] via-[#00ffff] to-[#bfff00] animate-grow" />
          <div className="max-w-[280px] text-white/70 text-sm font-bold leading-relaxed text-left uppercase tracking-wider">
            {t(UI_TEXT.hero.descRight)}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
