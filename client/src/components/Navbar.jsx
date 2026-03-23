import React, { useState, useEffect } from 'react';

const Navbar = () => {
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
    { name: 'Experience', id: 'experience', href: '#experience' },
    { name: 'Projects', id: 'projects', href: '#projects' },
    { name: 'Skills', id: 'skills', href: '#skills' },
    { name: 'Activity', id: 'activity', href: '#activity' },
    { name: 'Education', id: 'education', href: '#education' },
    { name: 'Achievements', id: 'achievements', href: '#achievements' },
    { name: 'Blogs', id: 'blogs', href: '#blogs' }
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

  return (
    <>
      <div className="fixed top-6 w-full z-50 flex justify-center px-4 md:px-8 pointer-events-none">
        <nav className={`pointer-events-auto flex items-center bg-[#1d1d1f]/65 backdrop-blur-2xl border border-white/[0.08] rounded-full shadow-2xl transition-all duration-[600ms] ease-[cubic-bezier(0.16,1,0.3,1)] hover:border-white/[0.2] hover:bg-[#1d1d1f]/80 ${
          scrolled ? 'px-6 py-2.5 mt-0 gap-6' : 'px-8 py-3.5 mt-2 gap-12'
        }`}>
          
          <a href="#" className="text-[#f5f5f7] hover:text-white font-bold tracking-tight text-base whitespace-nowrap transition-colors flex-shrink-0 z-50">
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
                  className={`px-3.5 py-2 text-[10px] font-bold tracking-widest uppercase rounded-full transition-all duration-500 relative ${
                    isActive 
                      ? 'text-black bg-[#f5f5f7] scale-[1.05] shadow-[0_0_15px_rgba(255,255,255,0.3)] pointer-events-none' 
                      : 'text-[#a1a1a6] hover:text-[#f5f5f7] hover:bg-white/[0.08]'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </div>

          <div className="hidden md:flex items-center z-50 flex-shrink-0 transition-all duration-[600ms]">
            <a href="#contact" className="font-bold tracking-widest uppercase text-white bg-[#0071e3] hover:bg-[#0077ED] rounded-full transition-all duration-300 hover:scale-[1.03] shadow-md shadow-[#0071e3]/20 whitespace-nowrap text-[10px] px-6 py-2.5">
              Contact
            </a>
          </div>

          <div className="xl:hidden flex items-center z-50 flex-shrink-0">
            <button onClick={toggleMenu} className="focus:outline-none p-2.5 text-[#f5f5f7] hover:text-white transition-colors bg-white/5 rounded-full border border-white/10 group">
              <div className="w-4 h-3 flex flex-col justify-between items-center relative">
                <span className={`w-full h-[1.5px] bg-current rounded-full transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-[5.2px]' : ''}`}></span>
                <span className={`w-full h-[1.5px] bg-current rounded-full transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`w-full h-[1.5px] bg-current rounded-full transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-[5.2px]' : ''}`}></span>
              </div>
            </button>
          </div>

        </nav>
      </div>

      <div 
        className={`xl:hidden fixed top-0 left-0 w-full min-h-screen bg-black/95 backdrop-blur-3xl z-40 transition-all duration-500 ease-in-out ${
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
                onClick={toggleMenu} 
                className={`text-2xl sm:text-3xl font-bold tracking-tight text-[#86868b] transition-all duration-500 border-b border-[#424245]/30 py-4 w-full max-w-sm ${
                  mobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                } ${isActive ? 'text-white border-white/40' : 'hover:text-white'}`}
                style={{ transitionDelay: `${idx * 40}ms` }}
              >
                {link.name}
              </a>
            );
          })}
          <a 
            href="#contact" 
            onClick={toggleMenu} 
            className={`mt-12 text-xl font-bold text-[#0071e3] transition-all duration-500 delay-500 py-4 px-8 rounded-full border border-[#0071e3]/30 bg-[#0071e3]/10 inline-block w-fit hover:bg-[#0071e3]/20 hover:text-white hover:scale-105 shadow-[0_0_20px_rgba(0,113,227,0.1)] ${
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
