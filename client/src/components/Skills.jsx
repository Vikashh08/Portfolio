import React from 'react';
import { 
  TbHierarchy, TbCube, TbDatabase, TbApi, TbInfinity, 
  TbBrain, TbBug, TbLayoutDashboard, TbUsers 
} from "react-icons/tb";

const Skills = () => {
  const categories = [
    {
      title: "Programming Languages",
      items: [
        { name: "C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
        { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
        { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
        { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { name: "C", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
        { name: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" }
      ]
    },
    {
      title: "Web Technologies",
      items: [
        { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
        { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
        { name: "React.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
        { name: "Express.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", invert: true },
        { name: "Tailwind", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" }
      ]
    },
    {
      title: "Core CS",
      items: [
        { name: "DSA", ReactIcon: TbHierarchy },
        { name: "OOP", ReactIcon: TbCube },
        { name: "DBMS", ReactIcon: TbDatabase },
        { name: "REST API", ReactIcon: TbApi },
        { name: "SDLC", ReactIcon: TbInfinity }
      ]
    },
    {
      title: "Tools & Technologies",
      items: [
        { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
        { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", invert: true },
        { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
        { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
        { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg", invert: true },
        { name: "Android Studio", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/androidstudio/androidstudio-original.svg" },
        { name: "Postman", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" }
      ]
    },
    {
      title: "Soft Skills",
      items: [
        { name: "Analytical Thinking", ReactIcon: TbBrain },
        { name: "Debugging", ReactIcon: TbBug },
        { name: "Multitasking", ReactIcon: TbLayoutDashboard },
        { name: "Team Player", ReactIcon: TbUsers }
      ]
    }
  ];

  return (
    <section id="skills" className="section px-4 sm:px-6 py-32 bg-[var(--bg-color)] flex justify-center overflow-hidden relative reveal">
      
      {/* Massive Abstract Background Blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[var(--text-primary)]/[0.02] rounded-full blur-[120px] pointer-events-none -z-10"></div>

      <div className="max-w-[1240px] mx-auto px-6 relative z-10">
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-[var(--text-primary)] tracking-tight mb-4">Skills & Technologies</h2>
          <div className="h-0.5 w-12 bg-[#0071e3] rounded-full"></div>
          <p className="text-sm sm:text-base text-[var(--text-secondary)] font-normal leading-relaxed mt-4">
            A comprehensive overview of my technical expertise, programming languages, and industry-standard tools.
          </p>
        </div>

        {/* Categorized Modern Wall (No Wrapping Cards) */}
        <div className="flex flex-col gap-24 w-full max-w-[1080px]">
          {categories.map((cat, idx) => (
            <div key={idx} className="flex flex-col items-center group/section">
              <div className="text-center mb-10">
                <h3 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] mb-2 tracking-tight group-hover/section:text-[var(--accent-color)] transition-colors relative inline-block">
                  {cat.title}
                  <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-8 h-[1px] bg-[var(--border-color)] group-hover/section:bg-[var(--accent-color)] transition-colors duration-500"></span>
                </h3>
              </div>

              <div className="flex flex-wrap justify-center gap-3 sm:gap-6 lg:gap-8 w-full relative">
                {cat.items.map((skill, sIdx) => (
                  <div 
                    key={sIdx} 
                    className="w-[85px] h-[85px] sm:w-[105px] sm:h-[105px] rounded-[1.25rem] sm:rounded-2xl bg-[var(--bg-secondary)] light-mode:bg-white border border-[var(--border-color)] hover:border-[var(--text-secondary)]/30 flex flex-col items-center justify-center gap-2 sm:gap-3 transition-all duration-500 transform hover:-translate-y-3 hover:scale-110 shadow-lg light-mode:shadow-xl hover:shadow-[0_25px_50px_-15px_rgba(0,0,0,0.1)] group cursor-default relative overflow-hidden"
                  >
                    {/* Internal Glassmorphism Aura on Hover */}
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[var(--text-primary)]/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
                    
                    <div className="relative z-10 flex flex-col items-center justify-center gap-2 sm:gap-3 w-full h-full">
                      {skill.icon ? (
                        <img 
                           src={skill.icon} 
                           alt={skill.name} 
                           className={`w-6 h-6 sm:w-8 sm:h-8 object-contain drop-shadow-xl opacity-90 group-hover:opacity-100 transition-all duration-500 group-hover:scale-125 group-hover:rotate-3 ${skill.invert ? 'filter invert opacity-80 group-hover:opacity-100 dark:invert' : ''} light-mode:invert-0`}
                        />
                      ) : skill.ReactIcon ? (
                        <div className="w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center text-[var(--text-primary)] bg-[var(--bg-color)] border border-[var(--border-color)] rounded-full group-hover:bg-[var(--accent-color)] group-hover:text-white group-hover:border-transparent transition-all duration-500 shadow-inner group-hover:scale-125 group-hover:rotate-3">
                          <skill.ReactIcon className="w-4 h-4 sm:w-5 sm:h-5 drop-shadow-md opacity-90 group-hover:opacity-100" />
                        </div>
                      ) : (
                        <div className="w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center text-[var(--text-primary)] font-black text-[9px] sm:text-[11px] tracking-wider bg-[var(--bg-color)] border border-[var(--border-color)] rounded-full group-hover:bg-[var(--accent-color)] group-hover:text-white group-hover:border-transparent transition-all duration-500 shadow-inner group-hover:scale-125 group-hover:rotate-3">
                          {skill.textIcon}
                        </div>
                      )}
                      <span className="text-[9px] sm:text-[10px] font-bold text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] tracking-[0.1em] uppercase transition-colors duration-500 text-center px-1">
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
