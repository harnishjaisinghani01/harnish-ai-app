import React from 'react';
import Section from './Section';
import { EDUCATION } from '../constants';
import { GraduationCap } from 'lucide-react';

const Education: React.FC = () => {
    return (
        <Section id="education" title="Education" subtitle="Academic Background">
            <div className="max-w-3xl mx-auto">
                <div className="education-card glass-panel p-8 rounded-2xl flex flex-col md:flex-row gap-6 items-start">
                    <div className="education-icon-container">
                        <GraduationCap size={32} />
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold text-white mb-2">{EDUCATION.degree}</h3>
                        <h4 className="text-brand-accent font-mono mb-4">{EDUCATION.school}</h4>
                        <p className="text-brand-muted mb-4 leading-relaxed">
                            {EDUCATION.description}
                        </p>
                        <div className="education-gpa-badge">
                            CGPA: {EDUCATION.gpa}
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default Education;