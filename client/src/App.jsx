import React, { useEffect, useState } from 'react';
import Lenis from 'lenis';
import Loader from './components/Loader';
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
import Footer from './components/Footer';
import './index.css';

function App() {
  const [loaded, setLoaded] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const saved = localStorage.getItem('theme');
    return saved !== null ? saved === 'dark' : true;
  });

  const toggleTheme = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    localStorage.setItem('theme', newMode ? 'dark' : 'light');
    if (newMode) {
      document.documentElement.classList.remove('light-mode');
    } else {
      document.documentElement.classList.add('light-mode');
    }
  };

  useEffect(() => {
    if (!isDarkMode) {
      document.documentElement.classList.add('light-mode');
    } else {
      document.documentElement.classList.remove('light-mode');
    }
  }, []);

  useEffect(() => {
    if (!loaded) return;
    
    // Global Lenis smooth scroll
    const lenis = new Lenis({
      duration: 1.4,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
      smoothTouch: false,
    });
    window.lenis = lenis;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Global scroll-reveal: animate any element with class 'reveal'
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

    // Initial reveal for Hero and top sections
    setTimeout(() => {
        document.querySelectorAll('.reveal').forEach((el) => {
          const rect = el.getBoundingClientRect();
          if (rect.top < window.innerHeight) {
            el.classList.add('revealed');
          }
        });
    }, 100);

    return () => {
      observer.disconnect();
      lenis.destroy();
    };
  }, [loaded]);

  return (
    <>
      {!loaded && <Loader onComplete={() => setLoaded(true)} />}
      <div className={`font-sans bg-[var(--bg-color)] text-[var(--text-primary)] antialiased selection:bg-blue-500 selection:text-white transition-opacity duration-700 ${loaded ? 'opacity-100' : 'opacity-0'}`}>
        <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certificates />
        <Experience />
        <Achievements />
        <Activity />
        <Blogs />
        <Education />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
