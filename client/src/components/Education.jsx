import React from 'react';

const Education = () => {
  const educationData = [
    {
      type: "University",
      institution: "Lovely Professional University Phagwara, Punjab",
      degree: "Bachelor of Technology (B.Tech)",
      duration: "Aug 2023 – Present",
      grade: "8.19 CGPA",
      desc: "Computer Science and Engineering with a focus on Full Stack Development and competitive programming.",
      color: "#0071e3",
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c0 1.1 2.7 3 6 3s6-1.9 6-3v-5" />
        </svg>
      )
    },
    {
       type: "College",
       institution: "K.K.M College Jamui, Bihar",
       degree: "Intermediate (Class XII)",
       duration: "Mar 2021 – May 2022",
       grade: "83%",
       desc: "Focused on PCM (Physics, Chemistry, Maths) subjects.",
       color: "#ffffff",
       icon: (
         <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
           <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
         </svg>
       )
     },
     {
       type: "Schooling",
       institution: "Nath Public School Lakhisarai, Bihar",
       degree: "Matriculation (Class X)",
       duration: "Mar 2019 – May 2020",
       grade: "79%",
       desc: "Completed secondary education with a strong foundation in general sciences.",
       color: "#39d353",
       icon: (
         <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
           <circle cx="12" cy="12" r="10" /><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" /><line x1="12" y1="17" x2="12.01" y2="17" />
         </svg>
       )
     }
  ];

  return (
    <section id="education" className="py-24 relative overflow-hidden bg-[var(--bg-color)] reveal">
      {/* Background Dots */}
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(var(--text-primary)_0.8px,transparent_0.8px)] [background-size:24px_24px]"></div>

      <div className="max-w-[1240px] mx-auto px-6 relative z-10">
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-[var(--text-primary)] tracking-tight mb-4">Education</h2>
          <div className="h-0.5 w-12 bg-[#0071e3] rounded-full"></div>
        </div>

        <div className="relative border-l border-[var(--border-color)] ml-2 sm:ml-4 md:ml-6 pl-6 sm:pl-10 md:pl-16 space-y-16">
          {educationData.map((item, idx) => (
            <div key={idx} className="group relative">
              {/* Timeline Node */}
              <div 
                className="absolute -left-[31px] sm:-left-[47px] md:-left-[71px] top-2 w-3.5 h-3.5 rounded-full border-2 bg-[var(--bg-color)] transition-all duration-500 group-hover:scale-125"
                style={{ 
                  borderColor: item.color + '80',
                  boxShadow: `0 0 0 0 ${item.color}20` 
                }}
              ></div>
              
              <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-2 mb-4">
                <h3 className="text-xl md:text-2xl font-bold text-[var(--text-primary)] tracking-tight group-hover:text-[#0071e3] transition-colors duration-300">
                  {item.institution}
                </h3>
                <div className="flex items-center gap-4">
                  <span className="text-sm font-bold bg-[var(--bg-secondary)] light-mode:bg-white border border-[var(--border-color)] px-3 py-1 rounded-full text-[var(--text-primary)] shadow-sm">{item.grade}</span>
                  <span className="text-sm text-[var(--text-secondary)] font-bold tracking-widest uppercase">{item.duration}</span>
                </div>
              </div>

              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-[var(--bg-secondary)] border border-[var(--border-color)] text-[var(--text-secondary)]">
                  {item.icon}
                </div>
                <h4 className="text-base text-[var(--text-primary)] opacity-80 font-semibold tracking-tight">
                  {item.degree}
                </h4>
              </div>

              <div className="p-6 rounded-2xl bg-[var(--bg-secondary)] light-mode:bg-[var(--bg-secondary)] border border-[var(--border-color)] group-hover:border-[var(--text-secondary)]/30 transition-all duration-500 shadow-sm">
                <p className="text-[var(--text-tertiary)] text-sm leading-relaxed max-w-3xl">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
