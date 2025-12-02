import React, { useRef, useEffect, useState } from 'react';

interface SectionProps {
    id: string;
    title: string;
    subtitle: string;
    children: React.ReactNode;
    className?: string;
}

const Section: React.FC<SectionProps> = ({ id, title, subtitle, children, className = '' }) => {
    const sectionRef = useRef<HTMLElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section 
            id={id} 
            ref={sectionRef}
            className={`py-24 relative ${className} section-fade-in ${isVisible ? 'section-fade-in-visible' : 'section-fade-in-hidden'}`}
        >
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 liquid-gradient section-title-gradient">{title}</h2>
                    <div className="section-divider"></div>
                    <p className="text-brand-muted font-mono">{subtitle}</p>
                </div>
                {children}
            </div>
        </section>
    );
};

export default Section;