import React from 'react';
import Section from './Section';
import { EXPERIENCE } from '../constants';
import { Calendar, MapPin, Briefcase, Navigation, Target, Flag } from 'lucide-react';

const Experience: React.FC = () => {
    return (
        <Section id="experience" title="Experience" subtitle="Mission History">
            {/* Map Background Pattern */}
            <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none overflow-hidden select-none">
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
                <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-brand-accent/40 to-transparent -translate-x-1/2 hidden md:block border-l-2 border-dashed border-brand-accent/30"></div>
                
                {/* Mobile Timeline Spine */}
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-brand-accent/10 via-brand-accent/30 to-brand-accent/10 md:hidden border-l border-dashed border-brand-accent/30"></div>

                {/* Start Marker */}
                <div className="absolute md:left-1/2 left-8 top-0 transform -translate-x-1/2 -translate-y-1/2 z-20">
                    <div className="w-4 h-4 rounded-full bg-brand-accent shadow-[0_0_15px_rgba(56,189,248,0.8)] animate-pulse"></div>
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
                                <div className="absolute left-8 md:left-1/2 top-8 md:top-1/2 transform -translate-x-1/2 md:-translate-y-1/2 z-20 flex flex-col items-center">
                                    <div className="relative w-12 h-12 flex items-center justify-center">
                                        {/* Outer Ring */}
                                        <div className="absolute inset-0 rounded-full border border-brand-accent/30 group-hover:scale-125 transition-transform duration-500"></div>
                                        {/* Inner Circle */}
                                        <div className="w-8 h-8 bg-[#0B0F19] rounded-full border-2 border-brand-accent flex items-center justify-center shadow-[0_0_15px_rgba(56,189,248,0.4)] z-10">
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

                                    <div className="glass-panel p-6 md:p-8 rounded-xl border border-white/10 relative overflow-hidden group-hover:border-brand-accent/40 transition-all duration-500 hover:shadow-[0_0_30px_rgba(56,189,248,0.1)]">
                                        
                                        {/* Technical Corner Markers */}
                                        <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-brand-accent/50 rounded-tl"></div>
                                        <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-brand-accent/50 rounded-tr"></div>
                                        <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-brand-accent/50 rounded-bl"></div>
                                        <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-brand-accent/50 rounded-br"></div>

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
                                                <span key={tech} className="px-2.5 py-1 text-xs font-mono text-brand-accent bg-brand-accent/5 rounded border border-brand-accent/10 transition-colors hover:bg-brand-accent/10">
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
                <div className="absolute md:left-1/2 left-8 bottom-0 transform -translate-x-1/2 translate-y-1/2 z-20">
                     <div className="w-3 h-3 rounded-full bg-brand-accent/50 ring-4 ring-brand-accent/10"></div>
                </div>
            </div>
        </Section>
    );
};

export default Experience;