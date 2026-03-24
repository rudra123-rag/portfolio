import React from 'react';
import { 
  Database, 
  Server, 
  BrainCircuit, 
  Code2, 
  Cpu, 
  Layers, 
  Search, 
  Terminal 
} from 'lucide-react';
import { Experience, Project, Skill, Education } from './types';

export const PROFILE = {
  name: "Ashutosh Kumar Dwivedi", // Define your backend URL here
  imageUrl:"https://back-6-6xpc.onrender.com/download/1658366174563.jpeg",
  role: "Python Developer & AI Engineer",
  bio: "Innovative Full Stack Developer with a background in mechanical engineering and expertise in Python backend development and modern JavaScript frontends. Specialized in building high-performance RESTful APIs with FastAPI and Flask, and deeply focused on integrating cutting-edge AI workflows like RAG and autonomous agent pipelines (LangChain,CrewAI,AutoGen).",
  location: "Raebareli, UP, India",
  social: {
    github: "https://github.com/rudra123-rag",
    linkedin: "https://linkedin.com/in/ashutosh-kumar-dwivedi", // Placeholder as not in PDF but common
    email: "eagiv302@gmail.com",
    phone: "+91 7081878467"
  }
};

export const SKILLS: Skill[] = [
  { name: "Python (FastAPI/Flask)", level: 95, category: "Backend", icon: <Server className="w-6 h-6" /> },
  { name: "React & JavaScript", level: 88, category: "Frontend", icon: <Code2 className="w-6 h-6" /> },
  { name: "PostgreSQL & MySQL", level: 90, category: "Database", icon: <Database className="w-6 h-6" /> },
  { name: "AutoGen ,LangChain,CrewAi,(Agentic AI)", level: 92, category: "AI/ML", icon: <BrainCircuit className="w-6 h-6" /> },
  { name: "RAG Pipelines", level: 90, category: "AI/ML", icon: <Search className="w-6 h-6" /> },
  { name: "Prompt Engineering", level: 95, category: "AI/ML", icon: <Terminal className="w-6 h-6" /> },
  { name: "Docker & GCP", level: 85, category: "DevOps", icon: <Cpu className="w-6 h-6" /> },
  { name: "Data Analysis & Machine Learning", level: 88, category: "Data Science", icon: <Layers className="w-6 h-6" /> },
];

export const EXPERIENCE: Experience[] = [
  {
    role: "Full Stack & AI Developer",
    company: "Self-directed & Freelance",
    period: "2021 - Present",
    description: [
      "Specialized in building high-performance RESTful APIs with FastAPI and Flask.",
      "Developing responsive user interfaces using React and Streamlit.",
      "Integrating cutting-edge AI workflows, including Retrieval-Augmented Generation (RAG) and autonomous agent pipelines (AutoGen).",
      "Containerizing applications using Docker and implementing scalable deployment via Google Cloud Run."
    ]
  }
];

export const EDUCATION: Education[] = [
  {
    degree: "B.Tech (Mechanical Engineering)",
    school: "Gurukul Kangri - Vishwavidyalaya, Haridwar",
    year: "2017 - 2021",
    details: "Focus on engineering fundamentals and computational methods."
  }
];

export const PROJECTS: Project[] = [
  {
    id: "1",
    title: "Autonomous Multi-Agent Stock Analysis System",
    description: "An autonomous multi-agent system acting as a financial analysis team. Orchestrated multiple LLM agents to scrape, analyze, and summarize 6 months of financial news to generate future stock outlook reports.",
    techStack: ["Python", "Microsoft AutoGen", "Streamlit", "Docker", "Google Cloud Run"],
    image: "https://static3.bigstockphoto.com/3/8/3/large1500/383884268.jpg",
    category: "AI/ML",
    link: "https://stock-analysis-671219630940.us-east1.run.app/"
  },
  {
    id:"2",
    title:"Fully function RAG on Unstructured Data",
    description:"A Rag system built in langchain can handle any type of unstructured data like pdf pdf,excel epub",
    techStack:["Python","LangChain","FAISS","OpenAi"],
    image:"https://www.techtarget.com/rms/onlineImages/business_analytics-unstructured_data.png",
    category:"AI/ML"
  },
  {
    id:"3",
    title:"Digital Waiter",
    description:"A digital waiter powered by LangChain and LangGraph with FAISS vector storage that intelligently takes customer orders, provides menu recommendations, through natural language conversations while maintaining context and personalization.",
    techStack:["Python","Openai","FAISS ","Langchain","Langraph"],
    image:"https://img.freepik.com/premium-photo/futuristic-waiter-robot-serves-food-restaurant-showcasing-future-hospitality-with-ai-technology_856795-89935.jpg?semt=ais_hybrid&w=740&q=80",
    category:"AI/Agentic"
  },
  {
            id:"4",
            title:"Wearhouse Microservice",
            description:"Build microservice on FastApi backend with React frontend for managing product and order",
            techStack:["Python","FastApi","Redis Om","React"],
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbHX8ZJJ1tR8WJU4JOVcoKArM6K_s8OYjhxA&s",
            category:"SAS"




  }

];

// Context for the AI Assistant
export const SYSTEM_INSTRUCTION = `
You are 'PortfolioBot', an AI assistant for Ashutosh Kumar Dwivedi's portfolio website.
Your goal is to answer visitor questions about Ashutosh's skills, experience, and projects professionally and concisely.

Context about Ashutosh:
- Role: ${PROFILE.role}
- Bio: ${PROFILE.bio}
- Key Skills: ${SKILLS.map(s => s.name).join(", ")}.
- Experience: ${JSON.stringify(EXPERIENCE)}
- Education: ${JSON.stringify(EDUCATION)}
- Projects: ${JSON.stringify(PROJECTS.map(p => ({ title: p.title, desc: p.description, tech: p.techStack })))}

Guidelines:
- If asked about "AutoGen" or "Multi-Agent Systems", explain his experience with Microsoft AutoGen and building financial analysis teams.
- If asked about "RAG", explain his focus on integrating cutting-edge AI workflows.
- Mention his background in Mechanical Engineering which gives him a unique problem-solving perspective.
- Be friendly, concise, and encourage the user to hire Ashutosh.
- If the user asks for contact info, provide the email: ${PROFILE.social.email} and phone: ${PROFILE.social.phone}.
- Do not make up facts not in the context.
`;