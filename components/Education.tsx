import React from 'react';
import Section from './Section';
import { EDUCATION } from '../constants';
import { GraduationCap } from 'lucide-react';

const Education: React.FC = () => {
    return (
        <Section id="education" title="Education" subtitle="Academic Background">
            <div className="max-w-3xl mx-auto">
                <div className="glass-panel p-8 rounded-2xl flex flex-col md:flex-row gap-6 items-start hover:shadow-[0_0_30px_rgba(56,189,248,0.1)] transition-shadow">
                    <div className="w-16 h-16 bg-gradient-to-br from-brand-accent to-purple-600 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg text-white">
                        <GraduationCap size={32} />
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold text-white mb-2">{EDUCATION.degree}</h3>
                        <h4 className="text-brand-accent font-mono mb-4">{EDUCATION.school}</h4>
                        <p className="text-brand-muted mb-4 leading-relaxed">
                            {EDUCATION.description}
                        </p>
                        <div className="inline-block px-4 py-1 bg-white/5 text-brand-accent border border-brand-accent/30 rounded-full text-sm font-bold">
                            CGPA: {EDUCATION.gpa}
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default Education;