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
        <nav className={`navbar ${scrolled ? 'navbar-scrolled' : 'navbar-default'}`}>
            <div className={`navbar-container ${scrolled ? 'navbar-container-scrolled' : 'navbar-container-default container mx-auto'}`}>
                {/* Logo */}
                <a 
                    href="#home" 
                    className="navbar-logo"
                    onClick={(e) => handleNavClick(e, '#home')}
                >
                    <span className="liquid-gradient drop-shadow-[0_0_10px_rgba(56,189,248,0.3)]">HJ</span>
                </a>

                {/* Desktop Menu - Bubble Navigation */}
                <div className="hidden md:block relative" ref={navRef}>
                    {/* The Moving Bubble Background */}
                    <div 
                        className="navbar-bubble"
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
                                className={`navbar-link px-4 lg:px-5 ${
                                    activeSection === item.href.substring(1) 
                                    ? 'navbar-link-active' 
                                    : 'navbar-link-inactive'
                                }`}
                            >
                                {item.label}
                            </a>
                        ))}
                    </div>
                </div>

                {/* Mobile Menu Button */}
                <button 
                    className={`md:hidden navbar-mobile-button ${scrolled ? 'navbar-mobile-button-scrolled' : ''}`}
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <div className={`md:hidden navbar-mobile-overlay ${
                isOpen ? 'navbar-mobile-overlay-open' : 'navbar-mobile-overlay-closed'
            }`}>
                
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
                            className={`navbar-mobile-link ${
                                activeSection === item.href.substring(1) 
                                ? 'navbar-mobile-link-active' 
                                : 'navbar-mobile-link-inactive'
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