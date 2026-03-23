import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Activity from './components/Activity';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Certificates from './components/Certificates';
import Blogs from './components/Blogs';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Socials from './components/Socials';
import './index.css';

function App() {
  return (
    <div className="font-sans bg-black text-gray-100 antialiased selection:bg-blue-500 selection:text-white">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Activity />
      <Education />
      <Achievements />
      <Certificates />
      <Blogs />
      <Contact />
      <Socials />
      <footer className="py-8 text-center text-sm text-gray-500 bg-[#0a0a0a]">
        <p>&copy; 2026 Vikash Kumar. Engineering the Future.</p>
      </footer>
    </div>
  );
}

export default App;
