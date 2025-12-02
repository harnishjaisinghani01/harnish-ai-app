import React, { useState, useEffect } from 'react';
import Section from './Section';
import { PROJECTS } from '../constants';
import { ChevronRight, Terminal } from 'lucide-react';

// Utility for Hacker Text Effect
const HackerText = ({ 
    text, 
    active, 
    className = "",
    as: Component = "p",
    speed = 10
}: { 
    text: string; 
    active: boolean; 
    className?: string;
    as?: React.ElementType;
    speed?: number;
}) => {
    const [displayText, setDisplayText] = useState("");
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*[]{}|<>";
    
    useEffect(() => {
        let interval: ReturnType<typeof setInterval> | undefined;
        
        if (active) {
            let iteration = 0;
            // Clear previous text to restart effect
            setDisplayText("");
            
            interval = setInterval(() => {
                setDisplayText(() => 
                    text.split("").map((letter, index) => {
                        if (index < iteration) return text[index];
                        return chars[Math.floor(Math.random() * chars.length)];
                    }).join("")
                );
                
                if (iteration >= text.length) {
                    clearInterval(interval);
                }
                
                iteration += 1; // Reveal speed
            }, speed);
        } else {
            setDisplayText(""); // Reset when inactive so it can re-animate
        }

        return () => {
            if (interval) clearInterval(interval);
        };
    }, [active, text, speed]);

    return <Component className={className}>{displayText}</Component>;
};

const Projects: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    // Handle mobile interaction (tap to toggle)
    const handleInteraction = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <Section id="projects" title="Featured Projects" subtitle="System Architecture">
            {/* 
                Container Height: Fixed height is crucial for the smooth accordion effect.
                Using flex-col ensures items stack and 'minimize' vertically.
            */}
            <div className="flex flex-col h-[700px] lg:h-[600px] gap-2 w-full max-w-6xl mx-auto transition-all duration-500">
                {PROJECTS.map((project, index) => {
                    const isActive = activeIndex === index;
                    // Active item takes significantly more space
                    const flexClass = isActive ? 'flex-[8] lg:flex-[10]' : 'flex-[1]';
                    
                    // Dim inactive items when one is active
                    const isInactive = activeIndex !== null && !isActive;

                    return (
                        <div 
                            key={index}
                            onMouseEnter={() => setActiveIndex(index)}
                            onMouseLeave={() => setActiveIndex(null)}
                            onClick={() => handleInteraction(index)}
                            className={`
                                relative overflow-hidden rounded-xl border transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] cursor-pointer group
                                ${flexClass}
                                ${isActive 
                                    ? 'bg-brand-card border-brand-accent shadow-[0_0_30px_rgba(56,189,248,0.15)]' 
                                    : 'bg-[#0B0F19] border-white/5 hover:bg-[#161B22] hover:border-white/10'
                                }
                                ${isInactive ? 'opacity-40 blur-[1px] hover:blur-0 hover:opacity-80' : 'opacity-100'}
                            `}
                        >
                            {/* Background Grid Pattern for active state */}
                            <div className={`absolute inset-0 transition-opacity duration-500 ${isActive ? 'opacity-[0.05]' : 'opacity-0'}`} 
                                style={{
                                    backgroundImage: 'radial-gradient(circle, #38BDF8 1px, transparent 1px)', 
                                    backgroundSize: '20px 20px'
                                }}
                            />

                            {/* Header Section (Always Visible) */}
                            <div className={`
                                absolute top-0 left-0 w-full p-4 lg:p-6 flex items-center
                                transition-all duration-500 z-20
                                ${isActive ? 'h-auto border-b border-brand-accent/10 bg-brand-card/50 backdrop-blur-sm' : 'h-full'}
                            `}>
                                <div className="flex items-center gap-4 lg:gap-6 w-full">
                                    {/* Project Icon */}
                                    <div className={`
                                        flex-shrink-0 flex items-center justify-center rounded-lg transition-all duration-500
                                        ${isActive 
                                            ? 'w-12 h-12 bg-brand-accent/20 text-brand-accent shadow-[0_0_15px_rgba(56,189,248,0.4)]' 
                                            : 'w-10 h-10 bg-white/5 text-gray-500 group-hover:text-white group-hover:bg-white/10'
                                        }
                                    `}>
                                        <div className={`transition-transform duration-500 ${isActive ? 'scale-110' : 'scale-100'}`}>
                                            {project.icon}
                                        </div>
                                    </div>

                                    {/* Project Title */}
                                    <div className="flex-grow flex justify-between items-center min-w-0">
                                        <h3 className={`
                                            font-bold font-mono transition-all duration-500 truncate
                                            ${isActive ? 'text-xl lg:text-2xl text-white' : 'text-lg text-gray-400 group-hover:text-white'}
                                        `}>
                                            {project.title}
                                        </h3>

                                        {/* Expand Indicator */}
                                        <ChevronRight 
                                            className={`
                                                transition-all duration-500 text-brand-accent
                                                ${isActive ? 'rotate-90 opacity-100' : 'opacity-0 -translate-x-4 group-hover:opacity-50 group-hover:translate-x-0'}
                                            `} 
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Expanded Content Area (Visible only when active) */}
                            <div className={`
                                absolute inset-0 pt-24 px-4 lg:px-6 pb-6
                                flex flex-col
                                transition-all duration-500 delay-75
                                ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}
                            `}>
                                {/* Description Section */}
                                <div className="flex-grow overflow-hidden">
                                    <div className="flex items-center gap-2 mb-3 text-brand-accent/80 font-mono text-xs tracking-wider">
                                        <Terminal size={12} />
                                        <span>SYSTEM_LOGS</span>
                                    </div>
                                    <div className="pl-4 border-l border-brand-accent/20">
                                        <HackerText 
                                            text={project.description} 
                                            active={isActive} 
                                            className="text-gray-300 text-sm lg:text-base leading-relaxed font-light"
                                            speed={5}
                                        />
                                    </div>
                                </div>

                                {/* Tech Stack */}
                                <div className="mt-6">
                                    <div className="flex items-center gap-2 mb-3 text-brand-accent/80 font-mono text-xs tracking-wider">
                                        <Terminal size={12} />
                                        <span>DEPENDENCIES</span>
                                    </div>
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {project.techStack.map((tech, i) => (
                                            <div key={i} className="px-2 py-1 bg-brand-accent/5 border border-brand-accent/20 rounded text-xs text-brand-accent font-mono">
                                                <HackerText text={tech} active={isActive} as="span" speed={20 + i * 5} />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                        </div>
                    );
                })}
            </div>
        </Section>
    );
};

export default Projects;