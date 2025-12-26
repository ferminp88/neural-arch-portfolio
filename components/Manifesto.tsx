
import React from 'react';
import { useLanguage } from './LanguageContext';
import { UI_TEXT } from '../constants';

const Manifesto: React.FC = () => {
  // Fix: Destructured lang from useLanguage to resolve "Cannot find name 'lang'" error
  const { t, lang } = useLanguage();
  return (
    <section id="vision" className="py-48 px-8 md:px-24 bg-transparent relative">
      <div className="max-w-7xl mx-auto space-y-32">
        <div className="space-y-6 relative">
          <span className="mono text-xs text-[#ff00ff] uppercase tracking-[1em] block animate-pulse">
            {t(UI_TEXT.manifesto.section)}
          </span>
          <h3 className="text-5xl md:text-8xl font-black leading-tight text-difference mix-blend-difference italic">
             {t(UI_TEXT.manifesto.quote)}
          </h3>
          <div className="absolute -top-20 -left-20 w-64 h-64 bg-[#bfff00]/20 rounded-full blur-[100px] animate-blob" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
          <div className="space-y-12 relative z-10">
            <p className="text-2xl md:text-5xl text-white font-bold leading-tight tracking-tighter uppercase italic">
              {t(UI_TEXT.manifesto.body1)}
            </p>
            <div className="h-px w-full bg-gradient-to-r from-[#00ffff] via-[#ff00ff] to-transparent" />
            <p className="text-zinc-400 text-lg md:text-xl leading-relaxed mono">
              {t(UI_TEXT.manifesto.body2)}
            </p>
          </div>
          
          <div className="relative aspect-square">
            {/* Crazy Generative Visual Component */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-full h-full border-[20px] border-[#ff00ff]/30 animate-spin-slow rounded-[30%_70%_70%_30%/30%_30%_70%_70%]" />
              <div className="absolute w-4/5 h-4/5 border-[10px] border-[#00ffff]/20 animate-reverse-spin rounded-[70%_30%_30%_70%/70%_70%_30%_30%]" />
              <div className="absolute w-1/2 h-1/2 bg-[#bfff00] mix-blend-screen opacity-50 blur-3xl animate-pulse" />
              
              {/* Abstract Symbol */}
              <svg viewBox="0 0 200 200" className="w-full h-full absolute animate-float overflow-visible">
                <defs>
                  <filter id="liquid">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
                    <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="liquid" />
                  </filter>
                </defs>
                <g filter="url(#liquid)">
                   <circle cx="100" cy="100" r="40" fill="#ff00ff" className="animate-morph-1" />
                   <circle cx="120" cy="80" r="30" fill="#00ffff" className="animate-morph-2" />
                   <circle cx="80" cy="120" r="35" fill="#bfff00" className="animate-morph-3" />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll-triggered Meta Question */}
      <div className="mt-64 text-center">
        <div className="inline-block py-20 px-10 border-y border-[#ffffff11] relative group overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#ff00ff05] to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
          <h4 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-outline group-hover:text-white transition-all duration-700">
            {lang === 'es' ? '¿DISEÑAS EL FUTURO OR ÉL TE DISEÑA A TI?' : 'DO YOU DESIGN THE FUTURE OR DOES IT DESIGN YOU?'}
          </h4>
        </div>
      </div>
    </section>
  );
};

const style = document.createElement('style');
style.innerHTML = `
  @keyframes spin-slow { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
  @keyframes reverse-spin { from { transform: rotate(360deg); } to { transform: rotate(0deg); } }
  @keyframes float { 
    0%, 100% { transform: translateY(0) scale(1); }
    50% { transform: translateY(-20px) scale(1.05); }
  }
  @keyframes morph-1 { 0%, 100% { cx: 100; cy: 100; } 50% { cx: 120; cy: 80; } }
  @keyframes morph-2 { 0%, 100% { cx: 120; cy: 80; } 50% { cx: 80; cy: 120; } }
  @keyframes morph-3 { 0%, 100% { cx: 80; cy: 120; } 50% { cx: 100; cy: 100; } }
  
  .animate-spin-slow { animation: spin-slow 12s linear infinite; }
  .animate-reverse-spin { animation: reverse-spin 8s linear infinite; }
  .animate-float { animation: float 6s ease-in-out infinite; }
  .animate-morph-1 { animation: morph-1 10s infinite; }
  .animate-morph-2 { animation: morph-2 8s infinite; }
  .animate-morph-3 { animation: morph-3 12s infinite; }
  .animate-blob { animation: float 10s infinite; filter: blur(80px); }
`;
document.head.appendChild(style);

export default Manifesto;