import React from 'react';
import Section from './Section';
import { EXPERIENCE } from '../constants';
import { Calendar, MapPin, Briefcase, Navigation, Target, Flag } from 'lucide-react';

const Experience: React.FC = () => {
    return (
        <Section id="experience" title="Experience" subtitle="Mission History">
            {/* Map Background Pattern */}
            <div className="experience-grid-bg">
                 <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
                            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="1" className="text-white"/>
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>
            </div>

            <div className="relative max-w-6xl mx-auto z-10 pt-10 pb-20 px-4 md:px-0">
                
                {/* Central Timeline Spine (Desktop) */}
                <div className="experience-timeline-desktop hidden md:block"></div>
                
                {/* Mobile Timeline Spine */}
                <div className="experience-timeline-mobile md:hidden"></div>

                {/* Start Marker */}
                <div className="experience-start-marker md:left-1/2 left-8">
                    <div className="experience-start-marker-dot"></div>
                </div>

                <div className="space-y-12 md:space-y-24 mt-12">
                    {EXPERIENCE.map((exp, index) => {
                        const isEven = index % 2 === 0;
                        return (
                            <div key={index} className={`flex flex-col md:flex-row items-center gap-8 md:gap-0 relative group ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                                
                                {/* 
                                    SIDE 1: METADATA & DECORATION 
                                    (This fills the 'empty' column space)
                                */}
                                <div className={`w-full md:w-1/2 pl-16 md:pl-0 ${isEven ? 'md:pr-24 text-right' : 'md:pl-24 text-left'} hidden md:flex flex-col justify-center`}>
                                     {/* Large Date Display */}
                                     <div className={`flex items-center gap-4 mb-2 ${isEven ? 'justify-end' : 'justify-start'}`}>
                                         {isEven && <span className="text-4xl font-black text-white/10 group-hover:text-brand-accent/20 transition-colors duration-500 select-none">0{index + 1}</span>}
                                         <div className="text-brand-accent font-mono text-xl font-bold tracking-wider">{exp.date}</div>
                                         {!isEven && <span className="text-4xl font-black text-white/10 group-hover:text-brand-accent/20 transition-colors duration-500 select-none">0{index + 1}</span>}
                                     </div>
                                     
                                     {/* Location / Meta Badge */}
                                     <div className={`flex items-center gap-2 text-brand-muted text-sm font-mono uppercase tracking-widest ${isEven ? 'justify-end' : 'justify-start'}`}>
                                         <MapPin size={14} className="text-brand-accent/60"/>
                                         {exp.company}
                                     </div>

                                     {/* Decorative Connector Line to center */}
                                     <div className={`h-px bg-gradient-to-r from-transparent via-brand-accent/20 to-transparent w-full mt-4`}></div>
                                </div>

                                {/* CENTER: WAYPOINT NODE */}
                                <div className="experience-timeline-node left-8 md:left-1/2 top-8 md:top-1/2">
                                    <div className="experience-node-outer">
                                        {/* Outer Ring */}
                                        <div className="experience-node-ring"></div>
                                        {/* Inner Circle */}
                                        <div className="experience-node-inner">
                                            {index === 0 ? 
                                                <Flag size={14} className="text-brand-accent" /> : 
                                                <Navigation size={14} className={`text-brand-accent ${!isEven ? 'rotate-180' : ''}`} />
                                            }
                                        </div>
                                    </div>
                                    {/* Vertical connecting line for mobile */}
                                    <div className="md:hidden w-0.5 h-full bg-brand-accent/20 absolute top-12"></div>
                                </div>

                                {/* 
                                    SIDE 2: CONTENT CARD 
                                */}
                                <div className={`w-full md:w-1/2 pl-20 md:pl-0 ${isEven ? 'md:pl-24' : 'md:pr-24'}`}>
                                    
                                    {/* Mobile Date Header */}
                                    <div className="md:hidden mb-3 pl-1">
                                        <span className="text-brand-accent font-mono text-sm font-bold bg-brand-accent/10 px-2 py-1 rounded">
                                            {exp.date}
                                        </span>
                                    </div>

                                    <div className="experience-card glass-panel p-6 md:p-8">
                                        
                                        {/* Technical Corner Markers */}
                                        <div className="experience-corner-marker experience-corner-tl"></div>
                                        <div className="experience-corner-marker experience-corner-tr"></div>
                                        <div className="experience-corner-marker experience-corner-bl"></div>
                                        <div className="experience-corner-marker experience-corner-br"></div>

                                        {/* Header */}
                                        <div className="mb-6">
                                            <div className="flex items-center gap-3 mb-2">
                                                <Briefcase size={18} className="text-brand-accent" />
                                                <h3 className="text-xl md:text-2xl font-bold text-white leading-tight">
                                                    {exp.title}
                                                </h3>
                                            </div>
                                            <div className="text-lg text-brand-muted font-medium flex items-center gap-2">
                                                 <span className="w-1.5 h-1.5 rounded-full bg-brand-accent/50"></span>
                                                 {exp.company}
                                            </div>
                                        </div>

                                        {/* Description */}
                                        <p className="text-gray-400 mb-6 text-sm leading-relaxed border-l-2 border-white/5 pl-4">
                                            {exp.description}
                                        </p>

                                        {/* Bullet Points */}
                                        <ul className="space-y-3 mb-6">
                                            {exp.points.map((point, i) => (
                                                <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
                                                    <Target size={14} className="mt-1 text-brand-accent/60 shrink-0" />
                                                    <span className="opacity-90">{point}</span>
                                                </li>
                                            ))}
                                        </ul>

                                        {/* Tech Stack */}
                                        <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                                            {exp.techStack.map(tech => (
                                                <span key={tech} className="experience-tech-badge">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                            </div>
                        );
                    })}
                </div>

                {/* End Marker */}
                <div className="experience-end-marker md:left-1/2 left-8">
                     <div className="experience-end-marker-dot"></div>
                </div>
            </div>
        </Section>
    );
};

export default Experience;