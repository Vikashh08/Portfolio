import React from 'react';

const Skills = () => {
  const categories = [
    {
      title: "Crafting User Experiences",
      description: "Building responsive, highly interactive frontend applications and interfaces.",
      items: [
        { name: "React.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
        { name: "Tailwind", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
        { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"},
        { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
        { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" }
      ]
    },
    {
      title: "Architecting Core Systems",
      description: "Developing scalable backend architectures, APIs, and high-performance algorithms.",
      items: [
        { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
        { name: "Express.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", invert: true },
        { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
        { name: "C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
        { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { name: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
        { name: "C", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
        { name: "Android", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/androidstudio/androidstudio-original.svg" }
      ]
    },
    {
      title: "Deploying Infrastructure & Data",
      description: "Securing persistent data flow, mapping schemas, and managing cloud environments.",
      items: [
        { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
        { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
        { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
        { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg", invert: true },
        { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
        { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
        { name: "Postman", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" }
      ]
    }
  ];

  return (
    <section id="skills" className="section px-4 sm:px-6 py-32 fade-in-up bg-black flex justify-center overflow-hidden relative">
      
      {/* Massive Abstract Background Blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/[0.02] rounded-full blur-[120px] pointer-events-none -z-10"></div>

      <div className="w-full max-w-[1200px] mx-auto z-10 flex flex-col items-center">
        
        <div className="text-center mb-20 max-w-[980px] mx-auto">
          <h2 className="text-[clamp(3.5rem,6vw,5.5rem)] font-extrabold tracking-[-0.04em] mb-6 text-[#f5f5f7] leading-none">
            Tech Ecosystem.
          </h2>
          <p className="text-[clamp(1.1rem,2vw,1.4rem)] text-[#86868b] font-medium max-w-2xl mx-auto leading-[1.6]">
            A vast, hyper-modern toolkit engineered for scalable infrastructure and premium digital experiences.
          </p>
        </div>

        {/* Categorized Modern Wall */}
        <div className="flex flex-col gap-20 w-full max-w-[1080px]">
          {categories.map((cat, idx) => (
            <div key={idx} className="flex flex-col items-center group/section">
              <div className="text-center mb-10">
                <h3 className="text-2xl sm:text-3xl font-bold text-[#f5f5f7] mb-3 tracking-tight group-hover/section:text-white transition-colors">
                  {cat.title}
                </h3>
                <p className="text-[14px] sm:text-base text-[#86868b] font-medium max-w-lg mx-auto leading-relaxed border-b border-white/10 pb-6">
                  {cat.description}
                </p>
              </div>

              <div className="flex flex-wrap justify-center gap-5 sm:gap-6 lg:gap-8 w-full">
                {cat.items.map((skill, sIdx) => (
                  <div 
                    key={sIdx} 
                    className="w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] rounded-[1.5rem] sm:rounded-3xl bg-white/[0.015] border border-white/[0.08] hover:bg-white/[0.04] hover:border-white/[0.2] flex flex-col items-center justify-center gap-3 sm:gap-4 transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 shadow-xl hover:shadow-[0_20px_40px_-15px_rgba(255,255,255,0.1)] group cursor-default relative overflow-hidden"
                  >
                    {/* Internal Glassmorphism Aura on Hover */}
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/[0.08] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
                    
                    <div className="relative z-10 flex flex-col items-center justify-center gap-3 sm:gap-4">
                      <img 
                         src={skill.icon} 
                         alt={skill.name} 
                         className={`w-9 h-9 sm:w-11 sm:h-11 object-contain drop-shadow-lg opacity-60 grayscale group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-500 scale-95 group-hover:scale-110 ${skill.invert ? 'filter invert opacity-40 group-hover:opacity-100' : ''}`}
                      />
                      <span className="text-[9px] sm:text-[10px] font-bold text-[#86868b] group-hover:text-white tracking-[0.15em] uppercase transition-colors duration-500">
                        {skill.name}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;
