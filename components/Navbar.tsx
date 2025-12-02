import React, { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_ITEMS } from '../constants';

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    
    // Ref for the desktop nav container to measure relative positions
    const navRef = useRef<HTMLDivElement>(null);
    const [bubbleProps, setBubbleProps] = useState({ left: 0, width: 0, opacity: 0 });

    useEffect(() => {
        const handleScroll = () => {
            // Change navbar style on scroll
            setScrolled(window.scrollY > 30);

            // Active section detection
            const sections = NAV_ITEMS.map(item => item.href.substring(1));
            // Trigger active state slightly before the section hits the top
            const scrollPosition = window.scrollY + 250; 

            let current = sections[0];
            for (const section of sections) {
                const element = document.getElementById(section);
                if (element && element.offsetTop <= scrollPosition) {
                    current = section;
                }
            }
            setActiveSection(current);
        };

        window.addEventListener('scroll', handleScroll);
        // Initial check
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Update bubble position whenever activeSection changes
    useEffect(() => {
        if (navRef.current) {
            // Find the link element corresponding to the active section
            const activeLink = navRef.current.querySelector(`[data-nav="${activeSection}"]`) as HTMLElement;
            
            if (activeLink) {
                setBubbleProps({
                    left: activeLink.offsetLeft,
                    width: activeLink.offsetWidth,
                    opacity: 1
                });
            } else {
                // Fallback if no active link found (e.g., initial load)
                setBubbleProps(prev => ({ ...prev, opacity: 0 }));
            }
        }
    }, [activeSection, scrolled]); // Recalculate on scroll state change as layout might shift

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
            const navHeight = 80;
            const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - navHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
            
            setIsOpen(false);
            // Optimistically set active section for immediate feedback
            setActiveSection(targetId);
        }
    };

    return (
        <nav className={`fixed left-0 right-0 z-50 transition-all duration-300 ease-in-out flex justify-center ${
            scrolled ? 'top-4' : 'top-0'
        }`}>
            <div className={`
                transition-all duration-500 ease-in-out
                flex justify-between items-center
                ${scrolled 
                    ? 'w-[90%] max-w-5xl bg-[#0B0F19]/60 backdrop-blur-xl border border-white/10 rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.5)] py-3 px-6' 
                    : 'w-full bg-transparent border-b border-transparent py-6 px-6 container mx-auto'
                }
            `}>
                {/* Logo */}
                <a 
                    href="#home" 
                    className="text-2xl font-bold font-mono tracking-tighter relative z-50 shrink-0"
                    onClick={(e) => handleNavClick(e, '#home')}
                >
                    <span className="liquid-gradient drop-shadow-[0_0_10px_rgba(56,189,248,0.3)]">HJ</span>
                </a>

                {/* Desktop Menu - Bubble Navigation */}
                <div className="hidden md:block relative" ref={navRef}>
                    {/* The Moving Bubble Background */}
                    <div 
                        className="absolute top-0 bottom-0 bg-white/10 border border-white/10 rounded-full backdrop-blur-md transition-all duration-300 cubic-bezier(0.4, 0, 0.2, 1) shadow-[0_0_20px_rgba(56,189,248,0.1)]"
                        style={{ 
                            left: bubbleProps.left, 
                            width: bubbleProps.width,
                            opacity: bubbleProps.opacity,
                        }}
                    />

                    {/* Nav Links */}
                    <div className="flex relative z-10">
                        {NAV_ITEMS.map((item) => (
                            <a
                                key={item.label}
                                href={item.href}
                                data-nav={item.href.substring(1)}
                                onClick={(e) => handleNavClick(e, item.href)}
                                className={`px-4 lg:px-5 py-2 text-sm font-medium rounded-full transition-colors duration-300 ${
                                    activeSection === item.href.substring(1) 
                                    ? 'text-brand-accent drop-shadow-[0_0_5px_rgba(56,189,248,0.5)]' 
                                    : 'text-brand-muted hover:text-white'
                                }`}
                            >
                                {item.label}
                            </a>
                        ))}
                    </div>
                </div>

                {/* Mobile Menu Button */}
                <button 
                    className={`md:hidden p-2 rounded-full transition-colors ${scrolled ? 'bg-white/5 hover:bg-white/10' : ''} text-white hover:text-brand-accent`}
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <div className={`md:hidden fixed inset-0 bg-[#0B0F19]/98 backdrop-blur-2xl z-40 transition-transform duration-500 cubic-bezier(0.4, 0, 0.2, 1) flex items-center justify-center ${
                isOpen ? 'translate-x-0' : 'translate-x-full'
            }`} style={{top: '0'}}>
                
                {/* Close button inside overlay */}
                <button 
                    className="absolute top-8 right-8 text-white/50 hover:text-brand-accent transition-colors"
                    onClick={() => setIsOpen(false)}
                >
                    <X size={32} />
                </button>

                <div className="flex flex-col space-y-6 text-center w-full px-10">
                    {NAV_ITEMS.map((item) => (
                        <a
                            key={item.label}
                            href={item.href}
                            onClick={(e) => handleNavClick(e, item.href)}
                            className={`text-2xl font-medium py-3 rounded-2xl border border-transparent transition-all duration-300 ${
                                activeSection === item.href.substring(1) 
                                ? 'text-brand-accent bg-white/5 border-white/10 shadow-[0_0_30px_rgba(56,189,248,0.1)]' 
                                : 'text-brand-muted hover:text-white'
                            }`}
                        >
                            {item.label}
                        </a>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;