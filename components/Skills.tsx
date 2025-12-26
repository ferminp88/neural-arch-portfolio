
import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';
import { SKILLS } from '../constants';
import { useLanguage } from './LanguageContext';

const Skills: React.FC = () => {
  const { lang } = useLanguage();
  return (
    <section id="skills" className="py-48 bg-black/60 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#ff00ff] to-transparent" />
      
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
        <div className="space-y-16">
          <div className="space-y-4">
            <span className="mono text-xs text-[#00ffff] uppercase tracking-widest">{lang === 'es' ? 'MATRIZ DE PODER' : 'POWER MATRIX'}</span>
            <h3 className="text-7xl font-black tracking-tighter uppercase text-white">SYNESTHESIA<br/><span className="text-[#bfff00]">CORE</span></h3>
          </div>
          
          <div className="grid grid-cols-1 gap-10">
            {SKILLS.map(skill => (
              <div key={skill.name} className="space-y-3 group">
                <div className="flex justify-between items-end">
                  <span className="text-sm mono text-white font-bold uppercase tracking-widest">{skill.name}</span>
                  <span className="text-xs mono text-[#ff00ff] font-bold">{skill.level}%</span>
                </div>
                <div className="h-1 w-full bg-white/5 overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-[#00ffff] to-[#ff00ff] group-hover:from-[#bfff00] group-hover:to-[#00ffff] transition-all duration-1000 ease-in-out" 
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="h-[600px] w-full iridescent-border p-12 rounded-full flex items-center justify-center relative overflow-hidden shadow-[0_0_100px_rgba(0,255,255,0.1)]">
          <div className="absolute inset-0 bg-black/40 backdrop-blur-3xl" />
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart cx="50%" cy="50%" outerRadius="80%" data={SKILLS}>
              <PolarGrid stroke="#ff00ff44" />
              <PolarAngleAxis dataKey="name" tick={{ fill: '#00ffff', fontSize: 12, fontWeight: 'bold', fontFamily: 'JetBrains Mono' }} />
              <Radar
                name="Proficiency"
                dataKey="level"
                stroke="#bfff00"
                fill="#bfff00"
                fillOpacity={0.3}
                animationDuration={2000}
              />
            </RadarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </section>
  );
};

export default Skills;