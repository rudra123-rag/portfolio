import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { PROFILE } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center">
        
        <div className="flex space-x-8 mb-8">
          <a href={PROFILE.social.github} target="_blank" rel="noreferrer" aria-label="GitHub Profile" className="text-slate-400 hover:text-white transform hover:scale-110 transition-all">
            <Github className="w-8 h-8" />
          </a>
          <a href={PROFILE.social.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn Profile" className="text-slate-400 hover:text-blue-400 transform hover:scale-110 transition-all">
            <Linkedin className="w-8 h-8" />
          </a>
          <a href={`mailto:${PROFILE.social.email}`} aria-label="Send Email" className="text-slate-400 hover:text-accent transform hover:scale-110 transition-all">
            <Mail className="w-8 h-8" />
          </a>
        </div>

        <p className="text-slate-500 text-sm font-mono text-center">
          © {new Date().getFullYear()} AshutoshDev. Built with React, Tailwind & Gemini API.
        </p>
      </div>
    </footer>
  );
};

export default Footer;