import React from 'react';
import Section from './Section';
import { SKILL_CATEGORIES } from '../constants';

const Skills: React.FC = () => {
    return (
        <Section id="skills" title="Technical Skills" subtitle="Technologies & Tools">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {SKILL_CATEGORIES.map((category, index) => (
                    <div key={index} className="glass-panel p-6 rounded-xl hover:bg-white/5 transition-colors">
                        <h3 className="text-lg font-bold text-brand-accent mb-4 border-b border-white/10 pb-2">
                            {category.title}
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {category.skills.map((skill, sIndex) => (
                                <div 
                                    key={sIndex}
                                    className="px-3 py-1.5 bg-brand-card rounded-lg text-sm text-gray-300 border border-white/5 hover:border-brand-accent/50 hover:text-brand-accent transition-all cursor-default"
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