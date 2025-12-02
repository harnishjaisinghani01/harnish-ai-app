import React from 'react';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-black py-8 border-t border-white/5 mt-12 relative z-10">
            <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="text-center md:text-left">
                    <p className="text-white font-medium">&copy; 2025 Harnish Jaisinghani.</p>
                    <p className="text-gray-500 text-sm">Building the future with Artificial Intelligence</p>
                </div>
                
                <div className="flex gap-6">
                    <a href="https://linkedin.com" className="text-gray-400 hover:text-brand-accent transition-colors transform hover:-translate-y-1">
                        <Linkedin size={20} />
                    </a>
                    <a href="https://github.com" className="text-gray-400 hover:text-white transition-colors transform hover:-translate-y-1">
                        <Github size={20} />
                    </a>
                    <a href="https://twitter.com" className="text-gray-400 hover:text-brand-accent transition-colors transform hover:-translate-y-1">
                        <Twitter size={20} />
                    </a>
                    <a href="mailto:harnishjaisinghani01@gmail.com" className="text-gray-400 hover:text-brand-accent transition-colors transform hover:-translate-y-1">
                        <Mail size={20} />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;