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
    speed = 5
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
            <div className="projects-container">
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
                                project-card ${flexClass}
                                ${isActive ? 'project-card-active' : 'project-card-inactive'}
                                ${isInactive ? 'project-card-dimmed' : ''}
                            `}
                        >
                            {/* Background Grid Pattern for active state */}
                            <div className={`project-grid-pattern ${isActive ? 'project-grid-pattern-visible' : 'project-grid-pattern-hidden'}`} />

                            {/* Header Section (Always Visible) */}
                            <div className={`project-header ${isActive ? 'project-header-active' : 'project-header-inactive'}`}>
                                <div className="flex items-center gap-4 lg:gap-6 w-full">
                                    {/* Project Icon */}
                                    <div className={`project-icon-container ${isActive ? 'project-icon-active' : 'project-icon-inactive'}`}>
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
                                            className={`project-expand-icon ${isActive ? 'project-expand-icon-active' : 'project-expand-icon-inactive'}`} 
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Expanded Content Area (Visible only when active) */}
                            <div className={`project-content ${isActive ? 'project-content-visible' : 'project-content-hidden'}`}>
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
                                            <div key={i} className="project-tech-badge">
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