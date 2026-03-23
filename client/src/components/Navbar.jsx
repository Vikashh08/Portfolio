import React, { useState, useEffect } from 'react';

const Navbar = ({ isDarkMode, toggleTheme }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    if (!mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  };

  useEffect(() => {
    return () => { document.body.style.overflow = 'unset'; }
  }, []);

  const navLinks = [
    { name: 'About', id: 'about', href: '#about' },
    { name: 'Skills', id: 'skills', href: '#skills' },
    { name: 'Projects', id: 'projects', href: '#projects' },
    { name: 'Certifications', id: 'certificates', href: '#certificates' },
    { name: 'Training', id: 'training', href: '#training' },
    { name: 'Achievements', id: 'achievements', href: '#achievements' },
    { name: 'Activity', id: 'activity', href: '#activity' },
    { name: 'Blogs', id: 'blogs', href: '#blogs' },
    { name: 'Education', id: 'education', href: '#education' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const pageYOffset = window.scrollY;
      
      // Update shrink/grow state
      setScrolled(pageYOffset > 50);

      // ScrollSpy logic
      let newActiveSection = '';
      navLinks.forEach((link) => {
        const section = document.getElementById(link.id);
        if (section) {
          const sectionTop = section.offsetTop - 150;
          const sectionHeight = section.offsetHeight;
          if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
            newActiveSection = link.id;
          }
        }
      });

      setActiveSection(newActiveSection);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavItemClick = (e, targetId) => {
    e.preventDefault();
    if (window.lenis) {
      window.lenis.scrollTo(targetId, {
        offset: -100, // Offset for fixed navbar
        duration: 1.5,
      });
    } else {
      const element = document.querySelector(targetId);
      if (element) {
        window.scrollTo({
          top: element.offsetTop - 100,
          behavior: 'smooth'
        });
      }
    }
    if (mobileMenuOpen) toggleMenu();
  };

  return (
    <>
      <div className="fixed top-6 w-full z-50 flex justify-center px-4 md:px-8 pointer-events-none">
        <nav className={`pointer-events-auto flex items-center bg-[var(--nav-bg)] backdrop-blur-2xl border border-[var(--border-color)] rounded-full shadow-2xl transition-all duration-[600ms] ease-[cubic-bezier(0.16,1,0.3,1)] hover:border-[var(--text-secondary)]/30 ${
          scrolled ? 'px-6 py-2.5 mt-0 gap-6' : 'px-8 py-3.5 mt-2 gap-12'
        }`}>
          
          <a 
            href="#" 
            onClick={(e) => handleNavItemClick(e, '#hero')}
            className="text-[var(--text-primary)] hover:text-[var(--text-secondary)] font-bold tracking-tight text-base whitespace-nowrap transition-colors flex-shrink-0 z-50"
          >
            Vikash Kumar.
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden xl:flex items-center justify-center transition-all duration-[600ms] flex-shrink-0 space-x-1.5">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={(e) => handleNavItemClick(e, link.href)}
                  className={`px-3.5 py-2 text-[10px] font-bold tracking-widest uppercase rounded-full transition-all duration-500 relative ${
                    isActive 
                      ? 'text-[var(--bg-color)] bg-[var(--text-primary)] scale-[1.05] shadow-lg' 
                      : 'text-[var(--text-tertiary)] hover:text-[var(--text-primary)] hover:bg-[var(--text-primary)]/5'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </div>

          <div className="flex items-center gap-4 z-50">
            {/* Theme Toggle */}
            <button 
              onClick={toggleTheme}
              className="p-2.5 rounded-full bg-[var(--text-primary)]/5 border border-[var(--border-color)] text-[var(--text-primary)] hover:bg-[var(--text-primary)]/10 transition-all active:scale-95"
              aria-label="Toggle Theme"
            >
              {isDarkMode ? (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>
              ) : (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
              )}
            </button>

            <div className="hidden md:flex items-center transition-all duration-[600ms]">
              <a 
                href="#contact" 
                onClick={(e) => handleNavItemClick(e, '#contact')}
                className="font-bold tracking-widest uppercase text-white bg-[#0071e3] hover:bg-[#0077ED] rounded-full transition-all duration-300 hover:scale-[1.03] shadow-md shadow-[#0071e3]/20 whitespace-nowrap text-[10px] px-6 py-2.5"
              >
                Contact
              </a>
            </div>

            <div className="xl:hidden flex items-center flex-shrink-0">
              <button onClick={toggleMenu} className="focus:outline-none p-2.5 text-[var(--text-primary)] hover:text-[var(--text-secondary)] transition-colors bg-[var(--text-primary)]/5 rounded-full border border-[var(--border-color)] group">
                <div className="w-4 h-3 flex flex-col justify-between items-center relative">
                  <span className={`w-full h-[1.5px] bg-current rounded-full transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-[5.2px]' : ''}`}></span>
                  <span className={`w-full h-[1.5px] bg-current rounded-full transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
                  <span className={`w-full h-[1.5px] bg-current rounded-full transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-[5.2px]' : ''}`}></span>
                </div>
              </button>
            </div>
          </div>

        </nav>
      </div>

      <div 
        className={`xl:hidden fixed top-0 left-0 w-full min-h-screen bg-[var(--bg-color)]/95 backdrop-blur-3xl z-40 transition-all duration-500 ease-in-out ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto visible' : 'opacity-0 pointer-events-none invisible'
        }`}
      >
        <div className="flex flex-col h-full pt-32 px-8 overflow-y-auto pb-32 items-center text-center">
          {navLinks.map((link, idx) => {
            const isActive = activeSection === link.id;
            return (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={(e) => handleNavItemClick(e, link.href)} 
                className={`text-2xl sm:text-3xl font-bold tracking-tight text-[var(--text-secondary)] transition-all duration-500 border-b border-[var(--border-color)] py-4 w-full max-w-sm ${
                  mobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                } ${isActive ? 'text-[var(--text-primary)] border-[var(--text-primary)]/40' : 'hover:text-[var(--text-primary)]'}`}
                style={{ transitionDelay: `${idx * 40}ms` }}
              >
                {link.name}
              </a>
            );
          })}
          <a 
            href="#contact" 
            onClick={(e) => handleNavItemClick(e, '#contact')} 
            className={`mt-12 text-xl font-bold text-[#0071e3] transition-all duration-500 delay-500 py-4 px-8 rounded-full border border-[#0071e3]/30 bg-[#0071e3]/10 inline-block w-fit hover:bg-[#0071e3]/20 hover:text-[var(--text-primary)] hover:scale-105 shadow-[0_0_20px_rgba(0,113,227,0.1)] ${
              mobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
          >
            Let's Connect →
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
