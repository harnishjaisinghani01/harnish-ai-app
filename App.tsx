import React from 'react';
import Navbar from './components/Navbar';
import StarryBackground from './components/StarryBackground';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
    return (
        <main className="relative text-white antialiased">
            <StarryBackground />
            <Navbar />
            <Hero />
            <About />
            <Experience />
            <Projects />
            <Skills />
            <Education />
            <Contact />
            <Footer />
        </main>
    );
};

export default App;