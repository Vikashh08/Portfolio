import React, { useEffect, useState } from 'react';

// Social SVG Icons (Minimalist)
const GithubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const LeetcodeIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
  </svg>
);

const MailIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="M2 4l10 8 10-8" />
  </svg>
);

const socials = [
  { label: 'GitHub', href: 'https://github.com/vikashh08', icon: <GithubIcon /> },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/vikashh-kumar/', icon: <LinkedinIcon /> },
  { label: 'Email', href: 'mailto:vikashroy2333@gmail.com', icon: <MailIcon /> },
  { label: 'LeetCode', href: 'https://leetcode.com', icon: <LeetcodeIcon /> },
];

const techStack = [
  { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
  { name: 'C++', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
  { name: 'SQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
  { name: 'PHP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' }
];

const Hero = () => {
  const [mounted, setMounted] = useState(false);

  // --- STRICT TYPING ANIMATION STATE ---
  const fullName = "Vikash Kumar.";
  const roles = ['Full Stack Developer', 'Competitive Programmer', 'CSE Student'];

  const [typedRole, setTypedRole] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeletingRole, setIsDeletingRole] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 150);
    return () => clearTimeout(timer);
  }, []);

  // Loop Sequence for Roles
  useEffect(() => {
    if (!mounted) return;

    const currentRole = roles[roleIndex];
    let timeout;
    if (!isDeletingRole && typedRole.length < currentRole.length) {
      timeout = setTimeout(() => setTypedRole(currentRole.substring(0, typedRole.length + 1)), 60);
    } else if (!isDeletingRole && typedRole.length === currentRole.length) {
      timeout = setTimeout(() => setIsDeletingRole(true), 2500);
    } else if (isDeletingRole && typedRole.length > 0) {
      timeout = setTimeout(() => setTypedRole(currentRole.substring(0, typedRole.length - 1)), 30);
    } else if (isDeletingRole && typedRole.length === 0) {
      setIsDeletingRole(false);
      setRoleIndex((r) => (r + 1) % roles.length);
    }
    return () => clearTimeout(timeout);
  }, [typedRole, isDeletingRole, roleIndex, mounted, roles]);

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center items-center text-center relative overflow-hidden px-6 bg-[var(--bg-color)] pt-20"
    >
      <div className="relative z-10 max-w-5xl w-full flex flex-col items-center mt-12 sm:mt-20 reveal">

        {/* Name Premium Reveal Animation Container */}
        <div className="mb-4 sm:mb-6 min-h-[1.5em] w-full flex justify-center items-center">
          <h1 className="relative flex items-center justify-center text-[clamp(2.5rem,6vw,7rem)] sm:text-[clamp(3.5rem,8vw,7rem)] font-extrabold tracking-tight leading-none text-[var(--text-primary)]">
            {mounted && fullName.split('').map((char, index) => (
              <span
                key={index}
                className="name-letter whitespace-pre"
                style={{ animationDelay: `${index * 0.06}s` }}
              >
                {char}
              </span>
            ))}
          </h1>
        </div>

        {/* 🌟 Sub-heading (Role with Loop Typing Animation, NO symbols) */}
        <div className={`text-xl sm:text-3xl font-medium tracking-tight mb-6 flex items-center justify-center min-h-[1.5em] transition-opacity duration-1000 delay-300 ${mounted ? 'opacity-100' : 'opacity-0'}`}>
          <span className="text-[var(--text-secondary)] text-center whitespace-nowrap">
            {typedRole}
            {mounted && (
              <span className="inline-block w-[2px] h-[0.8em] bg-[var(--text-secondary)] ml-1.5 animate-pulse align-middle" />
            )}
          </span>
        </div>

        {/* 📝 Short Intro */}
        <p className={`text-base sm:text-xl text-[var(--text-secondary)] font-light max-w-2xl mb-12 leading-relaxed transition-all duration-1000 delay-500 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          Passionate about distributed systems, real-world products and clean UI experiences.
        </p>

        {/* 🚀 CTA Buttons */}
        <div className={`flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 w-full sm:w-auto mb-16 transition-all duration-1000 delay-[700ms] ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <a
            href="#projects"
            onClick={(e) => window.lenis?.scrollTo('#projects')}
            className="group flex items-center justify-center gap-2 bg-[var(--text-primary)] text-[var(--bg-color)] px-8 py-3.5 rounded-full font-semibold text-[15px] tracking-wide hover:scale-[1.03] active:scale-95 transition-all duration-300 w-full sm:w-auto"
          >
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
            View Projects
          </a>
          <a
            href="/Vikash CV.pdf"
            download
            className="group flex items-center justify-center gap-2 bg-[var(--bg-color)] text-[var(--text-primary)] border border-[var(--border-color)] px-8 py-3.5 rounded-full font-semibold text-[15px] tracking-wide hover:border-[var(--text-secondary)] hover:bg-[var(--text-primary)]/5 hover:scale-[1.03] active:scale-95 transition-all duration-300 w-full sm:w-auto"
          >
            <svg className="w-4 h-4 group-hover:-translate-y-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Download Resume
          </a>
          <a
            href="#contact"
            onClick={(e) => window.lenis?.scrollTo('#contact')}
            className="group flex items-center justify-center gap-2 bg-[var(--bg-color)] text-[var(--text-primary)] border border-[var(--border-color)] px-8 py-3.5 rounded-full font-semibold text-[15px] tracking-wide hover:border-[var(--text-secondary)] hover:bg-[var(--text-primary)]/10 hover:scale-[1.03] active:scale-95 transition-all duration-300 w-full sm:w-auto"
          >
            <MailIcon />
            Contact Me
          </a>
        </div>

        {/* 🛠️ Tech Stack Highlight Row (Monochrome Style Icon-Only emphasis) */}
        <div className={`w-full flex flex-col items-center border-t border-[var(--border-color)] pt-10 mb-12 transition-all duration-1000 delay-[900ms] ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--text-secondary)] mb-8">Core Technologies</p>
          <div className="flex flex-wrap justify-center gap-6 sm:gap-8 opacity-90 hover:opacity-100 transition-opacity duration-500">
            {techStack.map(tech => (
              <div key={tech.name} className="flex flex-col items-center gap-2 group cursor-pointer" title={tech.name}>
                <div className="w-14 h-14 rounded-2xl bg-[var(--bg-color)] border border-[var(--border-color)] flex items-center justify-center group-hover:scale-110 group-hover:border-[var(--text-secondary)] transition-all duration-300 shadow-xl">
                  <img src={tech.icon} alt={tech.name} className="w-7 h-7 drop-shadow-lg transition-transform duration-300 group-hover:scale-110" />
                </div>
                <span className="text-[11px] text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] font-medium tracking-wide transition-colors">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 🔗 Social Icons (Monochrome) */}
        <div className={`flex items-center justify-center gap-4 transition-all duration-1000 delay-[1100ms] ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          {socials.map(({ label, href, icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              title={label}
              className={`flex items-center justify-center w-11 h-11 rounded-full border border-[var(--border-color)] bg-[var(--bg-color)] text-[var(--text-secondary)] transition-all duration-300 hover:scale-110 active:scale-95 hover:text-[var(--text-primary)] hover:border-[var(--text-secondary)]`}
            >
              {icon}
            </a>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Hero;
