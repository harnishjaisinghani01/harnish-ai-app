import React, { useState, useEffect } from 'react';
import { Download, Rocket, Brain, Code, Database, Globe, Bot, Zap, Cpu } from 'lucide-react';
import { TYPING_STRINGS } from '../constants';

const Hero: React.FC = () => {
    const [text, setText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const [typingSpeed, setTypingSpeed] = useState(150);

    useEffect(() => {
        const handleTyping = () => {
            const i = loopNum % TYPING_STRINGS.length;
            const fullText = TYPING_STRINGS[i];

            setText(isDeleting 
                ? fullText.substring(0, text.length - 1) 
                : fullText.substring(0, text.length + 1)
            );

            setTypingSpeed(isDeleting ? 30 : 150);

            if (!isDeleting && text === fullText) {
                setTimeout(() => setIsDeleting(true), 1500); // Pause at end
            } else if (isDeleting && text === '') {
                setIsDeleting(false);
                setLoopNum(loopNum + 1);
            }
        };

        const timer = setTimeout(handleTyping, typingSpeed);
        return () => clearTimeout(timer);
    }, [text, isDeleting, loopNum, typingSpeed]);

    const handleDownload = (e: React.MouseEvent) => {
        e.preventDefault();
        alert("In a real environment, this would download 'resume.pdf'");
    };

    const scrollToContact = (e: React.MouseEvent) => {
        e.preventDefault();
        const contactSection = document.getElementById('contact');
        if (contactSection) {
             const navHeight = 80;
             const targetPosition = contactSection.getBoundingClientRect().top + window.scrollY - navHeight;
             window.scrollTo({
                 top: targetPosition,
                 behavior: 'smooth'
             });
        }
    };

    return (
        <section id="home" className="min-h-screen flex items-center relative pt-20 overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content - Text & Buttons */}
                    <div className="max-w-2xl">
                        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-white">
                            Hi, I'm <br/>
                            <span className="hero-name-badge">
                                Harnish Jaisinghani
                            </span>
                        </h1>
                        <div className="h-8 md:h-12 mb-8 font-mono text-xl md:text-3xl text-brand-accent font-medium flex items-center">
                            {text}
                            <span className="hero-typing-cursor">|</span>
                        </div>
                        <p className="text-brand-muted text-lg md:text-xl mb-12 max-w-lg leading-relaxed">
                            Passionate Artificial Intelligence Developer crafting intelligent solutions for tomorrow's challenges. 
                            Specializing in Agentic AI, LLMs, RAG systems, and Computer Vision.
                        </p>
                        <div className="flex flex-wrap gap-5">
                            <a 
                                href="#contact" 
                                onClick={scrollToContact}
                                className="btn-liquid px-8 py-4 rounded-full text-white font-semibold flex items-center gap-2 cursor-pointer shadow-lg shadow-brand-accent/20"
                            >
                                <Rocket size={20} />
                                Let's Connect
                            </a>
                            <button 
                                onClick={handleDownload} 
                                className="btn-resume"
                            >
                                <Download size={20} />
                                Resume
                            </button>
                        </div>
                    </div>

                    {/* Right Content - Animated AI Visualization */}
                    <div className="hidden lg:flex justify-center items-center relative perspective-1000">
                        <div className="relative w-[500px] h-[500px] flex items-center justify-center">
                            {/* Glowing Background Orb */}
                            <div className="hero-ai-orb"></div>

                            {/* Outer Ring */}
                            <div className="hero-ring-outer">
                                <div className="hero-ring-outer-dot"></div>
                            </div>
                            
                            {/* Middle Ring (Dashed, Reverse) */}
                            <div className="hero-ring-middle"></div>

                            {/* Inner Ring */}
                            <div className="hero-ring-inner">
                                <div className="hero-ring-inner-dot"></div>
                            </div>

                            {/* Central AI Core */}
                            <div className="hero-ai-core glass-panel group">
                                <div className="hero-ai-core-gradient"></div>
                                <Brain size={64} className="text-brand-accent drop-shadow-[0_0_15px_rgba(56,189,248,0.6)] mb-2" />
                                <div className="px-3 py-1 bg-brand-accent/10 rounded-full border border-brand-accent/20">
                                    <span className="text-xs font-mono text-brand-accent">AI_CORE</span>
                                </div>
                                
                                {/* Hover Effect: Scan line */}
                                <div className="hero-ai-core-scan">
                                    <div className="hero-ai-core-scan-line"></div>
                                </div>
                            </div>

                            {/* Orbiting Tech Nodes */}
                            {/* Node 1: Code */}
                            <div className="absolute top-[15%] right-[20%] animate-[float_4s_ease-in-out_infinite_0s]">
                                <div className="hero-node glass-panel">
                                    <Code size={24} className="text-white" />
                                </div>
                            </div>

                            {/* Node 2: Database */}
                            <div className="absolute bottom-[20%] left-[15%] animate-[float_5s_ease-in-out_infinite_1s]">
                                <div className="hero-node hero-node-purple glass-panel">
                                    <Database size={24} className="text-purple-400" />
                                </div>
                            </div>

                            {/* Node 3: Agent/Bot */}
                            <div className="absolute top-[25%] left-[10%] animate-[float_6s_ease-in-out_infinite_2s]">
                                <div className="hero-node hero-node-green glass-panel">
                                    <Bot size={24} className="text-green-400" />
                                </div>
                            </div>

                            {/* Node 4: Processing/Chip */}
                            <div className="absolute bottom-[10%] right-[25%] animate-[float_7s_ease-in-out_infinite_1.5s]">
                                <div className="hero-node hero-node-orange glass-panel">
                                    <Cpu size={24} className="text-orange-400" />
                                </div>
                            </div>
                            
                            {/* Connecting Lines (Visual decoration) */}
                            <svg className="hero-connecting-lines">
                                <circle cx="50%" cy="50%" r="150" stroke="url(#gradient-line)" strokeWidth="1" strokeDasharray="4 4" fill="none" />
                                <defs>
                                    <linearGradient id="gradient-line" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" stopColor="rgba(56, 189, 248, 0)" />
                                        <stop offset="50%" stopColor="rgba(56, 189, 248, 1)" />
                                        <stop offset="100%" stopColor="rgba(56, 189, 248, 0)" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom bounce arrow */}
            <div className="hero-bounce-arrow">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 13l5 5 5-5M7 6l5 5 5-5"/>
                </svg>
            </div>
        </section>
    );
};

export default Hero;