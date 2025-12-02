import React from 'react';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="text-center md:text-left">
                    <p className="text-white font-medium">&copy; 2025 Harnish Jaisinghani.</p>
                    <p className="text-gray-500 text-sm">Building the future with Artificial Intelligence</p>
                </div>
                
                <div className="flex gap-6">
                    <a href="https://linkedin.com" className="footer-social-link">
                        <Linkedin size={20} />
                    </a>
                    <a href="https://github.com" className="footer-social-link footer-social-link-white">
                        <Github size={20} />
                    </a>
                    <a href="https://twitter.com" className="footer-social-link">
                        <Twitter size={20} />
                    </a>
                    <a href="mailto:harnishjaisinghani01@gmail.com" className="footer-social-link">
                        <Mail size={20} />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;