import React from 'react';
import Section from './Section';
import { PROJECTS } from '../constants';
import { ExternalLink, Github } from 'lucide-react';

const Projects: React.FC = () => {
    return (
        <Section id="projects" title="Featured Projects" subtitle="AI/ML Solutions">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {PROJECTS.map((project, index) => (
                    <div key={index} className="glass-panel rounded-2xl overflow-hidden group hover:-translate-y-2 transition-transform duration-300 flex flex-col">
                        <div className="h-48 bg-brand-card flex items-center justify-center relative border-b border-white/5">
                            <div className="absolute inset-0 bg-brand-accent/5 group-hover:bg-brand-accent/10 transition-colors"></div>
                            <div className="transform group-hover:scale-110 transition-transform duration-300">
                                {project.icon}
                            </div>
                        </div>
                        
                        <div className="p-6 flex-1 flex flex-col">
                            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-brand-accent transition-colors">
                                {project.title}
                            </h3>
                            <p className="text-brand-muted text-sm mb-6 line-clamp-4 flex-1">
                                {project.description}
                            </p>
                            
                            <div className="flex flex-wrap gap-2 mb-6">
                                {project.techStack.map(tech => (
                                    <span key={tech} className="text-xs font-mono text-brand-accent bg-brand-accent/10 px-2 py-1 rounded border border-brand-accent/20">
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="flex gap-4 pt-4 border-t border-white/5 mt-auto">
                                <button className="text-gray-400 hover:text-white flex items-center gap-1 text-sm transition-colors" onClick={() => alert("Demo link placeholder")}>
                                    <ExternalLink size={16} /> Demo
                                </button>
                                <button className="text-gray-400 hover:text-white flex items-center gap-1 text-sm transition-colors" onClick={() => alert("Code link placeholder")}>
                                    <Github size={16} /> Code
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
};

export default Projects;