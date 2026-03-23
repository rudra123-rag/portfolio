import React from 'react';
import { EXPERIENCE } from '../constants';
import { Calendar, Briefcase } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Professional Journey</h2>
        </div>

        <div className="relative border-l border-slate-700 ml-3 md:ml-6 space-y-12">
          {EXPERIENCE.map((exp, index) => (
            <div key={index} className="relative pl-8 md:pl-12">
              <span className="absolute -left-3 top-0 bg-secondary border border-accent rounded-full p-1.5 ring-4 ring-primary">
                <Briefcase className="w-4 h-4 text-accent" />
              </span>
              
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                <div className="flex items-center text-slate-400 text-sm mt-1 sm:mt-0 font-mono">
                  <Calendar className="w-4 h-4 mr-2" />
                  {exp.period}
                </div>
              </div>
              
              <h4 className="text-lg text-accent mb-4">{exp.company}</h4>
              
              <ul className="space-y-2 text-slate-400 list-disc list-outside ml-4">
                {exp.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;