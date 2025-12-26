
import React, { useState } from 'react';
import { getAIResponse } from '../services/ai';
import { useLanguage } from './LanguageContext';
import { UI_TEXT } from '../constants';

const VisionaryCore: React.FC = () => {
  const { t, lang } = useLanguage();
  const [input, setInput] = useState('');
  const [response, setResponse] = useState(t(UI_TEXT.ai.initial));
  const [loading, setLoading] = useState(false);

  const handleQuery = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || loading) return;

    setLoading(true);
    setResponse(t(UI_TEXT.ai.loading));
    const result = await getAIResponse(input, lang);
    setResponse(result || "Error in synaptic transmission.");
    setLoading(false);
    setInput('');
  };

  return (
    <section id="ai" className="py-48 px-8 relative overflow-hidden bg-black/40">
      <div className="max-w-4xl mx-auto text-center space-y-16 relative z-10">
        <div className="space-y-6">
          <div className="inline-block px-8 py-2 rounded-full border border-[#ff00ff] bg-[#ff00ff]/10 text-[#ff00ff] mono text-xs uppercase tracking-[0.3em] animate-pulse shadow-[0_0_20px_rgba(255,0,255,0.4)]">
            {t(UI_TEXT.ai.badge)}
          </div>
          <h3 className="text-7xl md:text-9xl font-black uppercase tracking-tighter text-white">
            <span className="text-[#00ffff]">NEURAL</span><br/>
            <span className="text-outline">{t(UI_TEXT.ai.title)}</span>
          </h3>
        </div>

        <div className="min-h-[250px] flex items-center justify-center p-12 glass iridescent-border rounded-[40px] relative backdrop-blur-xl">
          <div className="absolute inset-0 bg-gradient-to-br from-[#ff00ff11] to-[#00ffff11] rounded-[40px]" />
          <p className={`relative z-10 text-2xl md:text-4xl font-bold leading-tight ${loading ? 'animate-pulse text-zinc-500' : 'text-white'} italic drop-shadow-lg`}>
            "{response}"
          </p>
        </div>

        <form onSubmit={handleQuery} className="flex flex-col md:flex-row gap-6">
          <input 
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={t(UI_TEXT.ai.placeholder)}
            className="flex-1 bg-transparent border-b-4 border-[#00ffff]/30 py-6 px-4 focus:border-[#ff00ff] transition-all outline-none mono text-lg text-white font-bold"
          />
          <button 
            type="submit"
            disabled={loading}
            className="px-16 py-6 bg-[#bfff00] text-black font-black uppercase tracking-widest hover:scale-105 transition-transform disabled:opacity-50 shadow-[0_0_30px_#bfff00aa]"
          >
            {loading ? '...' : t(UI_TEXT.ai.btn)}
          </button>
        </form>
      </div>
    </section>
  );
};

export default VisionaryCore;
