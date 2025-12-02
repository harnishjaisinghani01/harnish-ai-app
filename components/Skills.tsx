import React from 'react';
import Section from './Section';
import { SKILL_CATEGORIES } from '../constants';

const Skills: React.FC = () => {
    return (
        <Section id="skills" title="Technical Skills" subtitle="Technologies & Tools">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {SKILL_CATEGORIES.map((category, index) => (
                    <div key={index} className="skill-card glass-panel p-6 rounded-xl">
                        <h3 className="text-lg font-bold text-brand-accent mb-4 border-b border-white/10 pb-2">
                            {category.title}
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {category.skills.map((skill, sIndex) => (
                                <div 
                                    key={sIndex}
                                    className="skill-badge"
                                >
                                    {skill}
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
};

export default Skills;