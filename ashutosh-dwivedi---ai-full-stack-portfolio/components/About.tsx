import React from 'react';
import { EDUCATION } from '../constants';
import { GraduationCap, User, Heart } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-primary relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 right-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">About Me</h2>
          <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
            More than just code — a glimpse into my journey and philosophy.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column: Narrative */}
          <div className="space-y-8">
            <div className="bg-secondary/50 border border-slate-800 p-8 rounded-2xl hover:border-accent/30 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <User className="w-6 h-6 text-accent" />
                <h3 className="text-xl font-bold text-white">My Story</h3>
              </div>
              <p className="text-slate-400 leading-relaxed mb-4">
                I started my coding journey automating simple tasks with Python scripts. That curiosity quickly evolved into a passion for building complex, scalable systems.
              </p>
              <p className="text-slate-400 leading-relaxed">
                Today, I focus on the intersection of traditional software engineering and modern AI. I believe that the best applications are those where AI features are woven seamlessly into robust, user-friendly architectures.
              </p>
            </div>

             <div className="bg-secondary/50 border border-slate-800 p-8 rounded-2xl hover:border-terminal/30 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <Heart className="w-6 h-6 text-terminal" />
                <h3 className="text-xl font-bold text-white">Interests</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {['Open Source', 'NeurIPS Papers', 'Hiking', 'Sci-Fi Novels', 'Chess', 'System Design'].map((interest) => (
                    <span key={interest} className="px-3 py-1 bg-primary border border-slate-700 rounded-full text-sm text-slate-300">
                        {interest}
                    </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Education */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white flex items-center gap-2 mb-6">
              <GraduationCap className="w-6 h-6 text-accent" />
              Education
            </h3>
            
            {EDUCATION.map((edu, idx) => (
              <div key={idx} className="relative pl-8 border-l border-slate-700 group">
                <div className="absolute -left-1.5 top-1.5 w-3 h-3 bg-slate-700 rounded-full border border-primary group-hover:bg-accent transition-colors"></div>
                <div className="bg-secondary/30 p-6 rounded-xl border border-slate-800/50 hover:bg-secondary hover:border-slate-700 transition-all">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-lg font-semibold text-white">{edu.degree}</h4>
                    <span className="text-xs font-mono text-accent bg-accent/10 px-2 py-1 rounded">{edu.year}</span>
                  </div>
                  <p className="text-slate-300 font-medium mb-1">{edu.school}</p>
                  <p className="text-sm text-slate-500">{edu.details}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;