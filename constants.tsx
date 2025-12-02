import React from 'react';
import { 
    Brain, 
    Heart, 
    FileText, 
    Scan, 
    Network, 
    Video, 
    Code, 
    Cpu, 
    Cloud, 
    Database, 
    Wrench,
    Bot
} from 'lucide-react';
import { Project, ExperienceItem, SkillCategory, EducationItem, NavItem } from './types';

export const NAV_ITEMS: NavItem[] = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' },
];

export const TYPING_STRINGS = [
    'Artificial Intelligence Engineer',
    'Agentic AI Specialist',
    'Backend Developer',
    'Generative AI Expert',
    'Computer Vision Engineer'
];

export const PROJECTS: Project[] = [
    {
        title: "Zora-AI Bot",
        description: "LLM-powered RAG chatbot for mental health care which understands users emotionally and responds to them with empathy. Specialized in mental health guidance with follow-up question suggestions.",
        icon: <Brain className="w-8 h-8 text-brand-accent" />,
        techStack: ["FastAPI", "OpenAI", "LangChain", "ChromaDB", "Redis"]
    },
    {
        title: "Safarr Dating App",
        description: "AI-based match algorithm & user face-verification via CNN & Mediapipe. Improved match accuracy by 25% and boosted performance 10x. Available on App Store & Play Store.",
        icon: <Heart className="w-8 h-8 text-brand-accent" />,
        techStack: ["CNN", "Mediapipe", "Python"]
    },
    {
        title: "Bank Reconciliation Tool",
        description: "Document Intelligence with LLM for reading, understanding and reconciliation of bank statements using Azure Document Intelligence & AWS Bedrock. 99.9% accuracy.",
        icon: <FileText className="w-8 h-8 text-brand-accent" />,
        techStack: ["Azure AI", "AWS Bedrock", "Celery", "Gemini"]
    },
    {
        title: "Optical Mark Reader System",
        description: "Deep learning for variable-format OMR with intelligent pixel analysis using OpenCV and CNN via Tensorflow. Processes 10 sheets/sec with 99% accuracy.",
        icon: <Scan className="w-8 h-8 text-brand-accent" />,
        techStack: ["OpenCV", "CNN", "TensorFlow", "OCR"]
    },
    {
        title: "Bill of Quantity Mapper",
        description: "Multi-agent AI system automating material/labor mapping for construction using LangGraph & Neo4j. Maps items to accurate descriptions for construction BOQs.",
        icon: <Network className="w-8 h-8 text-brand-accent" />,
        techStack: ["LangGraph", "Neo4j", "Agentic AI"]
    },
    {
        title: "ZoomBot",
        description: "Custom zoombot enhancing meeting experience with AI capabilities using Zoom SDK, UDP transmission, speech-to-text and GenAI. Unlocks pro-like features.",
        icon: <Video className="w-8 h-8 text-brand-accent" />,
        techStack: ["Zoom SDK", "UDP", "STT", "GenAI"]
    }
];

export const EXPERIENCE: ExperienceItem[] = [
    {
        date: "June 2023 – Present",
        title: "Artificial Intelligence Developer",
        company: "Webelight Solutions",
        description: "Building smart AI solutions and integrating them into applications using optimal backend architectures. Leading a team of engineers.",
        points: [
            "Designed and deployed LLM-based bots with RAG pipelines for mental health applications.",
            "Integrated Azure Document Intelligence with OCR/LLM pipelines for bank reconciliation (99% accuracy).",
            "Built real-time recommendation engine using custom ML models (25% match accuracy increase).",
            "Architected Agentic AI workflows for BOQ mapping using LangGraph, Gemini models and Neo4j.",
            "Developed desktop + web-based OMR systems using CNNs and OCRs."
        ],
        techStack: ["Python", "LLM", "RAG", "Agentic AI", "Azure", "CV", "MLOps"]
    },
    {
        date: "Dec 2022 – May 2023",
        title: "AI Research Intern",
        company: "Indian Space Research Organisation (ISRO)",
        description: "Conducted AI research on 3D satellite data processing.",
        points: [
            "Developed CNN-based models to enhance processing speed of satellite imagery.",
            "Achieved 89% accuracy in modeling and reduced compute time substantially."
        ],
        techStack: ["CNN", "Satellite Imagery", "AI Research"]
    }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
    {
        title: "Languages",
        skills: ["Python", "C++", "C", "TypeScript", "SQL"]
    },
    {
        title: "Frameworks",
        skills: ["FastAPI", "Celery", "Web Sockets", "React", "Node.js"]
    },
    {
        title: "AI/ML Frameworks",
        skills: ["PyTorch", "TensorFlow", "Scikit-learn", "OpenCV", "LangChain", "LangGraph"]
    },
    {
        title: "Generative AI",
        skills: ["OpenAI", "Gemini", "Llama/Mistral", "AWS Bedrock", "HuggingFace"]
    },
    {
        title: "Cloud & MLOps",
        skills: ["Azure MLOps", "AWS", "Docker", "Kubernetes", "CI/CD"]
    },
    {
        title: "Databases",
        skills: ["PostgreSQL", "MongoDB", "Redis", "Neo4j", "Pinecone", "ChromaDB"]
    }
];

export const EDUCATION: EducationItem = {
    degree: "Bachelor of Technology (B.Tech) in Information Technology",
    school: "Indus University, Ahmedabad",
    description: "Strong foundation in computer science fundamentals, algorithms, and software engineering. Focus on data structures, machine learning, and software development methodologies.",
    gpa: "9.1"
};