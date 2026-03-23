import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: "Spixo - Full-Stack Hyperlocal Commerce Platform",
      date: "Dec 2025",
      bullets: [
        "Scalable grocery delivery platform using MERN stack with 30+ RESTful APIs.",
        "Secure role-based JWT authentication for User, Admin, and Delivery Partners.",
        "Atomic operations preventing overselling mapping 200+ products."
      ],
      tech: [
        { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
        { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
        { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
        { name: 'Tailwind', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg'}
      ],
      link: "https://github.com/Vikashho8",
      live: "https://spixouser.vercel.app", 
      image: "/spixo.png"
    },
    {
      title: "Artist Marketplace",
      date: "March 2025",
      bullets: [
        "Full-stack marketplace using PHP and MySQL for 100+ artworks.",
        "Responsive frontend with shopping cart and category filtering."
      ],
      tech: [
        { name: 'PHP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
        { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
        { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' }
      ],
      link: "https://github.com/Vikashho8",
      live: "https://artist-marketplace.vercel.app", 
      image: "/artistry.png"
    },
    {
      title: "Netflix Watch History",
      date: "2024",
      bullets: [
        "Dashboard parsing and visually rendering Netflix user data logs.",
        "Custom charting and insights engine built entirely in React."
      ],
      tech: [
        { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
        { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' }
      ],
      link: "https://github.com/Vikashh08/Netflix-Watch-History",
      live: "#",
      image: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?auto=format&fit=crop&q=80&w=1200"
    },
    {
      title: "Ticket Booking App using Java",
      date: "2024",
      bullets: [
        "Console-based scalable ticket booking logic built purely in Java.",
        "Concurrency handling for persistent seat allocation tracking."
      ],
      tech: [
        { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' }
      ],
      link: "https://github.com/Vikashh08/Ticket-Booking-App-using-Java-",
      live: "#",
      image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&q=80&w=1200"
    },
    {
      title: "Snake Game",
      date: "2024",
      bullets: [
        "Classic Snake game engine demonstrating continuous game loops.",
        "Utilized coordinate array matrices and 2D canvas repainting."
      ],
      tech: [
        { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
        { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' }
      ],
      link: "https://github.com/Vikashh08/Snake-Game",
      live: "#",
      image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=1200"
    }
  ];

  return (
    <section id="projects" className="section bg-[var(--bg-color)] px-6 py-24 flex justify-center reveal">
      <div className="max-w-[980px] w-full mx-auto">
        <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-extrabold tracking-[-0.04em] mb-16 text-[var(--text-primary)] leading-none text-center">
          Featured Projects.
        </h2>

        <div className="flex flex-col gap-16 sm:gap-20">
          {projects.map((proj, idx) => (
            <div key={idx} className={`flex flex-col ${idx % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 md:gap-12 items-center group`}>
              
              {/* Image Section */}
              <div className="w-full md:w-[45%] aspect-[4/3] rounded-[2rem] bg-[var(--bg-secondary)] light-mode:bg-white overflow-hidden relative border border-[var(--border-color)] shadow-xl light-mode:shadow-2xl group-hover:border-[var(--text-secondary)]/30 transition-all duration-500">
                <img src={proj.image} alt={proj.title} className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-in-out opacity-60 group-hover:opacity-100" />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-secondary)] via-transparent to-transparent opacity-80 pointer-events-none"></div>
                
                {/* Floating Date Badge */}
                <h4 className="absolute bottom-5 left-5 text-[10px] text-[var(--text-primary)] font-bold tracking-[0.2em] uppercase bg-[var(--bg-color)]/20 backdrop-blur-xl px-4 py-2 rounded-full border border-[var(--border-color)] shadow-lg">
                  {proj.date}
                </h4>
              </div>
              
              {/* Content Section */}
              <div className="w-full md:w-[55%] flex flex-col justify-center">
                <h3 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)] mb-4 leading-tight tracking-[-0.02em] group-hover:text-[var(--accent-color)] transition-colors">{proj.title}</h3>
                
                {/* Tech Stack Action Pills */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {proj.tech.map((t, i) => (
                    <div key={i} className="flex items-center gap-1.5 bg-[var(--bg-secondary)] light-mode:bg-white border border-[var(--border-color)] px-3 py-1.5 rounded-full backdrop-blur-sm group/tech transition-all duration-300 shadow-sm hover:border-[var(--text-secondary)]/30">
                      <img src={t.icon} alt={t.name} className="w-3.5 h-3.5 drop-shadow-md transition-transform duration-300 group-hover/tech:scale-110" />
                      <span className="text-[10px] text-[var(--text-secondary)] font-bold tracking-[0.1em] group-hover/tech:text-[var(--text-primary)] transition-colors uppercase">{t.name}</span>
                    </div>
                  ))}
                </div>

                {/* Bullets List */}
                <ul className="space-y-3 mb-8">
                  {proj.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start text-[14px] sm:text-[15px] text-[var(--text-tertiary)] font-medium leading-[1.7]">
                      <span className="text-[var(--accent-color)]/40 mr-3 mt-1">•</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
                
                {/* Action Buttons */}
                <div className="flex items-center gap-3 border-t border-[var(--border-color)] pt-6">
                   {proj.live !== "#" ? (
                      <a href={proj.live} target="_blank" rel="noopener noreferrer" className="flex justify-center items-center text-xs font-bold text-white bg-[#0071e3] hover:bg-[#0077ED] px-6 py-3 rounded-full transition-transform hover:scale-[1.03] active:scale-95 shadow-md">
                        Live Demo <span className="ml-1 text-[10px]">↗</span>
                      </a>
                   ) : (
                      <span className="flex justify-center items-center text-[10px] uppercase tracking-widest text-[var(--text-secondary)] font-bold bg-[var(--bg-secondary)] border border-[var(--border-color)] px-5 py-3 rounded-full opacity-60">
                        Console App
                      </span>
                   )}
                   <a href={proj.link} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center text-xs font-bold text-[var(--text-primary)] bg-[var(--bg-secondary)] hover:bg-[var(--bg-color)] px-6 py-3 rounded-full transition-transform hover:scale-[1.03] active:scale-95 border border-[var(--border-color)] shadow-sm group-hover:border-[var(--text-secondary)]">
                     View Source
                     <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 ml-1.5 fill-current opacity-80"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                   </a>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
