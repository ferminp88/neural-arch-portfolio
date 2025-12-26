
import React from 'react';
import { useLanguage } from './LanguageContext';
import { UI_TEXT } from '../constants';

const Contact: React.FC = () => {
  const { t } = useLanguage();
  return (
    <section id="contact" className="py-48 px-8 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-black to-transparent" />
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 relative z-10">
        <div className="space-y-12">
          <h3 className="text-7xl md:text-9xl font-black tracking-tighter leading-none uppercase text-black italic">
            {t(UI_TEXT.contact.title)}
          </h3>
          <p className="text-xl text-zinc-500 max-w-md font-bold uppercase tracking-widest">
            {t(UI_TEXT.contact.body)}
          </p>
        </div>

        <div className="flex flex-col justify-end space-y-16">
          <div className="space-y-4">
            <span className="mono text-[10px] uppercase text-[#ff00ff] font-black tracking-[0.5em]">{t(UI_TEXT.contact.label)}</span>
            <a href="mailto:hello@neural-arch.com" className="block text-3xl md:text-6xl font-black text-black hover:text-[#00ffff] transition-all break-all underline decoration-[10px] decoration-[#bfff00]">
              VOID@NEURAL.ARCH
            </a>
          </div>

          <div className="space-y-8">
             <div className="grid grid-cols-2 gap-8 border-t border-black/10 pt-8">
               <div>
                 <span className="mono text-[10px] uppercase text-zinc-400 block mb-2">Locus</span>
                 <span className="text-lg font-black text-black">NO-WHERE / ANY-WHERE</span>
               </div>
               <div>
                 <span className="mono text-[10px] uppercase text-zinc-400 block mb-2">Temporal State</span>
                 <span className="text-lg font-black text-black animate-pulse">ERROR_TIME_NOT_FOUND</span>
               </div>
             </div>
             
             <button className="w-full py-10 bg-black text-[#bfff00] text-2xl font-black uppercase tracking-[0.3em] hover:bg-[#ff00ff] hover:text-white transition-all group relative overflow-hidden">
               <span className="relative z-10">{t(UI_TEXT.contact.cta)}</span>
               <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
             </button>
          </div>
        </div>
      </div>
      
      {/* Background crazy shape */}
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-[#bfff00]/20 rounded-full blur-[150px] mix-blend-multiply" />
    </section>
  );
};

export default Contact;