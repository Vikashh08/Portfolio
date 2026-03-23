import React from 'react';

const Experience = () => {
  const experiences = [
    {
      role: "Android App Dev Trainee",
      company: "Techvanto Academy",
      date: "Jun 2025 - Jul 2025",
      image: "/summer_training.png", 
      tech: [
        { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
        { name: 'Android Studio', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/androidstudio/androidstudio-original.svg' },
        { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' }
      ],
      bullets: [
        "Developed a full-stack Android ticket booking application supporting seat selection, secure payments, and e-ticket generation.",
        "Implemented 10+ features using Java, achieving 95%+ crash-free performance during QA testing phases.",
        "Designed a responsive UI using XML layouts and Android Studio IDE, improving navigation efficiency by 40%.",
        "Followed complete SDLC including requirement analysis, iterative development, and testing frameworks."
      ]
    }
  ];

  return (
    <section id="training" className="section bg-[var(--bg-color)] px-6 py-32 flex justify-center reveal">
      <div className="max-w-[1240px] mx-auto px-6 relative z-10">
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-[var(--text-primary)] tracking-tight mb-4">Summer Training</h2>
          <div className="h-0.5 w-12 bg-[#0071e3] rounded-full"></div>
        </div>
        
        <div className="space-y-16">
          {experiences.map((exp, idx) => (
            <div key={idx} className="bg-[var(--bg-secondary)] light-mode:bg-white rounded-[2.5rem] border border-[var(--border-color)] p-8 sm:p-12 relative overflow-hidden group hover:border-[var(--text-secondary)]/30 transition-all duration-500 shadow-2xl light-mode:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.08)] flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
              
              {/* Left Side: Content & Bullets */}
              <div className="lg:w-[55%] flex flex-col w-full order-2 lg:order-1">
                <div className="mb-6">
                  <h4 className="text-[var(--text-secondary)] text-[11px] font-bold tracking-[0.2em] uppercase mb-4">{exp.date}</h4>
                  <h3 className="text-3xl font-bold text-[var(--text-primary)] mb-2 tracking-[-0.02em]">{exp.role}</h3>
                  <h4 className="text-[15px] text-[var(--text-secondary)] font-semibold tracking-wide uppercase">{exp.company}</h4>
                </div>
                
                {/* Tech Stack Action Pills */}
                <div className="flex flex-wrap gap-3 mb-8">
                  {exp.tech.map((t, i) => (
                    <div key={i} className="flex items-center gap-2 bg-[var(--bg-color)] border border-[var(--border-color)] px-4 py-2 rounded-full cursor-default backdrop-blur-sm group/tech shadow-sm hover:border-[var(--text-secondary)] transition-all duration-300">
                      <img src={t.icon} alt={t.name} className="w-4 h-4 drop-shadow-lg transition-transform duration-300 group-hover/tech:scale-110" />
                      <span className="text-[11px] text-[var(--text-secondary)] font-bold tracking-[0.1em] group-hover/tech:text-[var(--text-primary)] transition-colors uppercase">{t.name}</span>
                    </div>
                  ))}
                </div>

                <ul className="space-y-4">
                  {exp.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start text-base sm:text-[17px] text-[var(--text-secondary)] font-medium leading-[1.8]">
                      <span className="text-[var(--accent-color)]/20 mr-4 text-xl mt-0.5">•</span>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right Side: High Quality Image Mockup */}
              <div className="lg:w-[45%] w-full order-1 lg:order-2">
                <div className="w-full aspect-[4/3] rounded-[2rem] border border-[var(--border-color)] overflow-hidden bg-[var(--bg-color)] shadow-2xl relative group-hover:border-[var(--text-secondary)] transition-all duration-500">
                  <img 
                    src={exp.image} 
                    alt={exp.role} 
                    className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105 dark:brightness-90"
                  />
                  {/* Subtle gradient overlay to blend into the card naturally */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-transparent pointer-events-none"></div>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Experience;
