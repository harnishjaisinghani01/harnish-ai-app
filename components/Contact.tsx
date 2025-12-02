import React from 'react';
import Section from './Section';
import { Mail, Linkedin, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert("This is a demo form. In a real app, this would send an email.");
    };

    return (
        <Section id="contact" title="Let's Connect" subtitle="Ready to collaborate?">
            <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                <div className="space-y-8">
                    <div className="contact-card glass-panel p-6 rounded-xl">
                        <div className="contact-icon-container">
                            <Mail size={24} />
                        </div>
                        <div>
                            <h3 className="text-brand-muted text-sm">Email</h3>
                            <a href="mailto:harnishjaisinghani01@gmail.com" className="text-white hover:text-brand-accent transition-colors font-medium">
                                harnishjaisinghani01@gmail.com
                            </a>
                        </div>
                    </div>

                    <div className="contact-card glass-panel p-6 rounded-xl">
                        <div className="contact-icon-container">
                            <Linkedin size={24} />
                        </div>
                        <div>
                            <h3 className="text-brand-muted text-sm">LinkedIn</h3>
                            <a href="https://www.linkedin.com/in/harnish-jaisinghani-9795a423b/" target="_blank" rel="noreferrer" className="text-white hover:text-brand-accent transition-colors font-medium">
                                harnish-jaisinghani-9795a423b
                            </a>
                        </div>
                    </div>

                    <div className="contact-card glass-panel p-6 rounded-xl">
                        <div className="contact-icon-container">
                            <MapPin size={24} />
                        </div>
                        <div>
                            <h3 className="text-brand-muted text-sm">Location</h3>
                            <span className="text-white font-medium">Available for Remote & On-site</span>
                        </div>
                    </div>
                </div>

                <form onSubmit={handleSubmit} className="glass-panel p-8 rounded-2xl space-y-6">
                    <div>
                        <label className="block text-brand-muted text-sm mb-2">Name</label>
                        <input type="text" className="contact-form-input" placeholder="Your Name" />
                    </div>
                    <div>
                        <label className="block text-brand-muted text-sm mb-2">Email</label>
                        <input type="email" className="contact-form-input" placeholder="your@email.com" />
                    </div>
                    <div>
                        <label className="block text-brand-muted text-sm mb-2">Message</label>
                        <textarea rows={4} className="contact-form-input" placeholder="How can I help you?"></textarea>
                    </div>
                    <button type="submit" className="w-full btn-liquid text-white font-bold py-3 rounded-lg flex items-center justify-center gap-2">
                        <Send size={18} />
                        Send Message
                    </button>
                </form>
            </div>
        </Section>
    );
};

export default Contact;