import React from 'react';

export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  link?: string;
  image: string;
  category: 'AI/ML' | 'Full Stack' | 'Data';
}

export interface Skill {
  name: string;
  level: number; // 0-100
  icon: React.ReactNode;
  category: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
  isError?: boolean;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string[];
}

export interface Education {
  degree: string;
  school: string;
  year: string;
  details: string;
}