import React from 'react';
import { ArrowRight, Download } from 'lucide-react';
import { PROFILE } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-terminal/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-center gap-12">
        {/* Profile Image Section */}
        <div className="order-2 md:order-1 flex-shrink-0">
          <div className="relative">
            {/* Outer glow effect */}
            <div className="absolute -inset-4 bg-gradient-to-r from-accent to-terminal rounded-full blur-lg opacity-30 animate-pulse"></div>
            
            {/* Profile Image */}
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-slate-800 shadow-2xl">
              <img 
                src={PROFILE.imageUrl || "/profile-image.jpg"} 
                alt={PROFILE.name}
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Decorative dots */}
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-accent rounded-full"></div>
            <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-terminal rounded-full"></div>
          </div>
        </div>

        {/* Text Content Section */}
        <div className="order-1 md:order-2 space-y-6 max-w-2xl">
          <p className="font-mono text-accent text-lg mb-2">Hello, I'm</p>
          <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight">
            {PROFILE.name}
          </h1>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-400">
            {PROFILE.role}
          </h2>
          <p className="text-lg text-slate-400 leading-relaxed max-w-2xl mt-6">
            {PROFILE.bio}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-8">
            <a 
              href="#projects" 
              aria-label="View my projects"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-primary bg-accent hover:bg-accentHover transition-all duration-200"
            >
              View Projects
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
            <a
              href="#contact-form"
              aria-label="Contact me"
              className="inline-flex items-center justify-center px-6 py-3 border border-slate-600 text-base font-medium rounded-md text-slate-300 hover:bg-slate-800 hover:border-slate-500 transition-all duration-200"
            >
              Contact Me
            </a>
          </div>

          <div className="pt-12 font-mono text-sm text-slate-500">
            <p>Stack: Python • React • AutoGen • RAG • Docker • GCP</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
