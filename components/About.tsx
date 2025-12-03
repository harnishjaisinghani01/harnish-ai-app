import React from 'react';
import Section from './Section';
import { User } from 'lucide-react';

const About: React.FC = () => {
    return (
        <Section id="about" title="About Me" subtitle="Professional Summary">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="glass-panel p-8 rounded-2xl relative overflow-hidden group">
                    <div className="about-card-icon">
                        <User size={100} className="text-brand-accent" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">AI/ML Innovation Expert</h3>
                    <p className="text-brand-muted leading-relaxed mb-8">
                        With over 2.5 years of experience as an AI Developer, I architect and deploy 
                        scalable AI solutions that drive enterprise-level innovation. My core expertise 
                        is in Agentic AI, LLMs, RAG systems, and Computer Vision, where I leverage MLOps 
                        (Azure), Python, TensorFlow, and PyTorch to boost system performance.
                    </p>
                    
                    <div className="grid grid-cols-3 gap-4">
                        <div className="about-stat-card">
                            <div className="text-3xl font-bold text-brand-accent mb-1">2.5+</div>
                            <div className="text-xs text-gray-400">Years Exp</div>
                        </div>
                        <div className="about-stat-card">
                            <div className="text-3xl font-bold text-brand-accent mb-1">10+</div>
                            <div className="text-xs text-gray-400">Projects</div>
                        </div>
                        <div className="about-stat-card">
                            <div className="text-3xl font-bold text-brand-accent mb-1">10+</div>
                            <div className="text-xs text-gray-400">Models</div>
                        </div>
                    </div>
                </div>

                <div className="flex justify-center relative">
                    {/* Abstract Representation of Profile */}
                    <div className="about-profile-frame">
                        <div className="about-profile-frame-outer"></div>
                        <div className="about-profile-frame-middle"></div>
                        <div className="about-profile-frame-inner">
                             <User size={80} className="text-gray-500" />
                             <div className="about-profile-gradient"></div>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default About;