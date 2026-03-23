import React from 'react';
import { SKILLS } from '../constants';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Technical Arsenal</h2>
          <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
            A comprehensive toolbelt focusing on scalability, intelligence, and performance.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SKILLS.map((skill, index) => (
            <div 
              key={index} 
              className="bg-slate-800/50 border border-slate-700/50 p-6 rounded-lg hover:border-accent/50 transition-all duration-300 group"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-slate-900 rounded-lg text-accent group-hover:scale-110 transition-transform duration-300">
                  {skill.icon}
                </div>
                <span className="text-xs font-mono text-slate-500 uppercase tracking-wider">{skill.category}</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{skill.name}</h3>
              <div className="w-full bg-slate-900 rounded-full h-2">
                <div 
                  className="bg-accent h-2 rounded-full transition-all duration-1000 ease-out group-hover:bg-accentHover" 
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
              <div className="mt-2 text-right text-xs text-slate-500 font-mono">
                {skill.level}% Proficiency
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;