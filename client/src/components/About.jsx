import React, { useEffect, useRef } from 'react';

const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-[var(--bg-color)] reveal">
      {/* Gradient mesh background */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.4] light-mode:opacity-[0.1]">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[var(--accent-color)]/[0.05] rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-[#a855f7]/[0.03] rounded-full blur-[120px]"></div>
        <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(var(--text-primary)_0.5px,transparent_0.5px)] [background-size:20px_20px]"></div>
      </div>

      <div className="max-w-[1240px] mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="mb-14">
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] tracking-tight mb-4">About Me</h2>
          <div className="h-0.5 w-12 bg-[#0071e3] rounded-full"></div>
        </div>

        <div className="flex flex-col lg:flex-row gap-14 lg:gap-20 items-start">

          {/* Left – Text Content */}
          <div className="lg:w-7/12">
            <div className="space-y-5 text-[var(--text-tertiary)] text-sm md:text-[15px] leading-[1.85]">
              <p>
                I'm <strong className="text-[var(--text-primary)] font-semibold">Vikash Kumar</strong>, a Computer Science student who enjoys building web applications and solving logical problems. I like turning ideas into real projects and learning new technologies along the way. Over time, I have developed a strong interest in <strong className="text-[var(--text-primary)] font-semibold">full-stack development</strong> and <strong className="text-[var(--text-primary)] font-semibold">system design</strong>.
              </p>
              <p>
                I have worked with technologies like <strong className="text-[var(--text-primary)] font-semibold">React, Node.js, MongoDB, C++, and SQL</strong> while creating different academic and personal projects. I also practice competitive programming to improve my problem-solving skills and write better, more efficient code.
              </p>
              <p>
                Apart from development, I am curious about how large-scale systems work and how technology can be used to create meaningful solutions. I am always open to learning, experimenting, and taking up challenges that help me grow as a developer.
              </p>
            </div>

            {/* Quick Stats Row */}
            <div className="mt-10 flex flex-wrap gap-4">
              {[
                { value: '350+', label: 'Problems Solved' },
                { value: 'MERN', label: 'Core Stack' },
                { value: '2027', label: 'Graduating' },
              ].map((stat, i) => (
                <div key={i} className="flex items-center gap-3 px-5 py-3 rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] shadow-sm">
                  <span className="text-lg font-bold text-[var(--text-primary)] tracking-tight">{stat.value}</span>
                  <span className="text-[10px] text-[var(--text-secondary)] font-bold uppercase tracking-[0.15em]">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right – Profile Image + College Card */}
          <div className="lg:w-5/12 w-full flex flex-col gap-5">
            
            {/* Profile Image */}
            <div className="w-full aspect-[4/3] rounded-2xl border border-[var(--border-color)] overflow-hidden bg-[var(--bg-secondary)] shadow-2xl group">
              <img 
                src="/about_tech_art.png" 
                alt="Abstract Developer Art" 
                className="w-full h-full object-cover grayscale brightness-90 contrast-125 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700 dark:brightness-75"
              />
            </div>

            {/* College Info Card */}
            <div className="w-full rounded-2xl border border-[var(--border-color)] bg-[var(--bg-secondary)] p-6 flex items-center gap-6 shadow-sm">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#0071e3]/10 border border-[#0071e3]/20 flex items-center justify-center">
                <svg className="w-6 h-6 text-[#0071e3]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c0 1.1 2.7 3 6 3s6-1.9 6-3v-5" />
                </svg>
              </div>
              <div className="flex-grow">
                <h4 className="text-[var(--text-primary)] text-sm font-bold tracking-tight">Lovely Professional University</h4>
                <p className="text-[var(--text-secondary)] text-xs mt-0.5">Computer Science &middot; B.Tech</p>
              </div>
              <div className="flex-shrink-0 text-right">
                <span className="text-[var(--text-primary)] text-lg font-bold tracking-tight">2027</span>
                <p className="text-[var(--text-secondary)] text-[10px] font-bold uppercase tracking-[0.1em]">Graduation</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
