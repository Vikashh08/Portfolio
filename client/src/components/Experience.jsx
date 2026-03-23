import React from 'react';

const Experience = () => {
  const experiences = [
    {
      role: "Android App Dev Trainee",
      company: "Techvanto Academy",
      date: "Jun 2025 - Jul 2025",
      image: "https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?q=80&w=2670&auto=format&fit=crop", 
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
    <section id="training" className="section bg-black px-6 py-32 flex justify-center fade-in-up">
      <div className="max-w-[1040px] w-full mx-auto">
        
        <h2 className="text-[clamp(3rem,6vw,5rem)] font-extrabold tracking-[-0.04em] mb-16 text-[#f5f5f7] leading-none">
          Summer Training.
        </h2>
        
        <div className="space-y-16">
          {experiences.map((exp, idx) => (
            <div key={idx} className="bg-[#050505] rounded-[2.5rem] border border-white/[0.08] p-8 sm:p-12 relative overflow-hidden group hover:border-white/[0.15] hover:bg-[#0a0a0a] transition-all duration-500 shadow-2xl flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
              
              {/* Left Side: Content & Bullets */}
              <div className="lg:w-[55%] flex flex-col w-full order-2 lg:order-1">
                <div className="mb-6">
                  <h4 className="text-[#86868b] text-[11px] font-bold tracking-[0.2em] uppercase mb-4">{exp.date}</h4>
                  <h3 className="text-3xl font-bold text-[#f5f5f7] mb-2 tracking-[-0.02em]">{exp.role}</h3>
                  <h4 className="text-[15px] text-[#a1a1a6] font-semibold tracking-wide uppercase">{exp.company}</h4>
                </div>
                
                {/* Tech Stack Action Pills */}
                <div className="flex flex-wrap gap-3 mb-8">
                  {exp.tech.map((t, i) => (
                    <div key={i} className="flex items-center gap-2 bg-white/[0.03] border border-white/[0.08] px-4 py-2 rounded-full cursor-default backdrop-blur-sm group/tech shadow-md hover:border-white/[0.2] hover:bg-white/[0.05] transition-all duration-300">
                      <img src={t.icon} alt={t.name} className="w-4 h-4 drop-shadow-lg transition-transform duration-300 group-hover/tech:scale-110" />
                      <span className="text-[11px] text-[#86868b] font-bold tracking-[0.1em] group-hover/tech:text-[#f5f5f7] transition-colors uppercase">{t.name}</span>
                    </div>
                  ))}
                </div>

                <ul className="space-y-4">
                  {exp.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start text-base sm:text-[17px] text-[#86868b] font-medium leading-[1.8]">
                      <span className="text-white/20 mr-4 text-xl mt-0.5">•</span>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right Side: High Quality Image Mockup */}
              <div className="lg:w-[45%] w-full order-1 lg:order-2">
                <div className="w-full aspect-[4/3] rounded-[2rem] border border-white/[0.08] overflow-hidden bg-black shadow-2xl relative group-hover:border-white/[0.15] transition-all duration-500">
                  <img 
                    src={exp.image} 
                    alt={exp.role} 
                    className="w-full h-full object-cover grayscale opacity-50 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                  />
                  {/* Subtle gradient overlay to blend into the card naturally */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-black/60 via-transparent to-transparent pointer-events-none"></div>
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
