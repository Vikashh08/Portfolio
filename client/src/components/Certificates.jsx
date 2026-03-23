import React, { useEffect, useRef } from 'react';

const Certificates = () => {
  const certs = [
    {
      title: "Node.js (Intermediate)",
      provider: "HackerRank",
      date: "Feb 2026",
      link: "https://drive.google.com/file/d/1jU_JDw3oSII_HqbZMJ6WhhYpP_d3658f/view",
      accent: "#68a063",
    },
    {
      title: "Cloud Computing",
      provider: "NPTEL",
      date: "Oct 2025",
      link: "https://drive.google.com/file/d/17oGhr5VUbcgvvkg94W_XsFYu_GWNvnNy/view",
      accent: "#4285f4",
    },
    {
      title: "Programming in Java",
      provider: "iamneo",
      date: "May 2025",
      link: "https://drive.google.com/file/d/1NZ40qvJCKBPzAZX7XjGGOIzauBdGV0si/view",
      accent: "#f89820",
    },
    {
      title: "Data Structures & Algorithms",
      provider: "iamneo",
      date: "Dec 2024",
      link: "https://drive.google.com/file/d/1Cgbs3XOIdXrhytuNnw6HDYWXOyqKOQ_E/view",
      accent: "#a855f7",
    },
  ];

  return (
    <section id="certificates" className="py-24 relative overflow-hidden bg-[var(--bg-color)] reveal">
      {/* Background */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.15]">
        <div className="absolute inset-0 bg-[radial-gradient(var(--text-primary)_0.8px,transparent_0.8px)] [background-size:24px_24px]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--bg-color)] via-transparent to-[var(--bg-color)]"></div>
      </div>

      <div className="max-w-[1240px] mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="mb-16 text-center sm:text-left">
          <h2 className="text-3xl md:text-5xl font-bold text-[var(--text-primary)] tracking-tight mb-4">Certifications</h2>
          
        </div>

        {/* Cert Rows — clean horizontal strips */}
        <div className="flex flex-col gap-4">
          {certs.map((c, i) => (
            <a
              key={i}
              href={c.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group/row transition-all duration-700"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="relative flex items-center gap-6 px-6 md:px-8 py-5 rounded-2xl border border-[var(--border-color)] bg-[var(--bg-secondary)] light-mode:bg-white hover:bg-[var(--bg-color)] hover:border-[var(--text-secondary)]/30 transition-all duration-400 overflow-hidden shadow-sm light-mode:shadow-md">
                {/* Left accent bar */}
                <div className="absolute left-0 top-0 bottom-0 w-[3px] rounded-l-2xl transition-all duration-500 opacity-40 group-hover/row:opacity-100" style={{ backgroundColor: c.accent }}></div>

                {/* Accent dot */}
                <div className="flex-shrink-0 w-3 h-3 rounded-full transition-transform duration-500 group-hover/row:scale-125" style={{ backgroundColor: c.accent, boxShadow: `0 0 12px ${c.accent}55` }}></div>

                {/* Title & Provider */}
                <div className="flex-grow min-w-0">
                  <h3 className="text-base md:text-lg font-bold text-[var(--text-primary)] tracking-tight truncate group-hover/row:translate-x-1 transition-transform duration-400">{c.title}</h3>
                  <p className="text-xs text-[var(--text-secondary)] mt-0.5 font-medium">{c.provider}</p>
                </div>

                {/* Date */}
                <span className="flex-shrink-0 text-[10px] text-[var(--text-secondary)] font-bold uppercase tracking-[0.15em] hidden md:block">{c.date}</span>

                {/* Arrow */}
                <span className="flex-shrink-0 text-sm text-[var(--text-secondary)] group-hover/row:text-[var(--text-primary)] group-hover/row:translate-x-1 transition-all duration-300">↗</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
