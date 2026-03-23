import React, { useEffect, useRef } from 'react';

const Achievements = () => {
  return (
    <section id="achievements" className="py-16 bg-[var(--bg-color)] relative overflow-hidden reveal">
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(var(--text-primary)_0.8px,transparent_0.8px)] [background-size:24px_24px]"></div>

      <div className="max-w-3xl mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] tracking-tight">Extracurricular & Achievements</h2>
          <div className="h-0.5 w-12 bg-[#0071e3] mx-auto mt-3 rounded-full"></div>
        </div>

        {/* Problem Solving – text only, no icon */}
        <div className="group mb-8">
          <div className="bg-[var(--bg-secondary)] light-mode:bg-white border border-[var(--border-color)] rounded-lg p-4 md:p-6 hover:border-[var(--text-secondary)]/30 transition-all shadow-sm light-mode:shadow-md">
            <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-2">Problem Solving</h3>
            <p className="text-[var(--text-tertiary)] text-sm mb-1">
              Solved <strong className="text-[var(--text-primary)] font-bold">350+ Data Structures and Algorithms problems</strong> on LeetCode using <strong className="text-[var(--text-primary)] font-bold">C++</strong>, strengthening analytical thinking, coding efficiency, and algorithm design.
            </p>
            <p className="text-[var(--text-tertiary)] text-sm opacity-80">
              Regular practice across arrays, recursion, searching, sorting, and dynamic programming built a structured approach to complex technical challenges.
            </p>
          </div>
        </div>

        {/* Community Outreach – images above, text below, no icon */}
        <div>
          <div className="bg-[var(--bg-secondary)] light-mode:bg-white border border-[var(--border-color)] rounded-lg overflow-hidden hover:border-[var(--text-secondary)]/30 transition-all shadow-sm light-mode:shadow-md">
            {/* Image gallery on top */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-0.5">
              {['/Activity1.jpeg', '/Activity2.jpeg', '/Activity3.jpeg', '/Activity4.jpeg'].map((src, i) => (
                <div key={i} className="overflow-hidden">
                  <img
                    src={src}
                    alt={`Activity ${i + 1}`}
                    className="w-full aspect-[4/3] object-contain bg-[var(--bg-color)]/50"
                  />
                </div>
              ))}
            </div>
            {/* Text below */}
            <div className="p-4 md:p-6">
              <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-2">Community Outreach & Social Contribution</h3>
              <p className="text-[var(--text-tertiary)] text-sm mb-1">
                Actively volunteered, interacting with <strong className="text-[var(--text-primary)] font-bold">350+ children</strong> and <strong className="text-[var(--text-primary)] font-bold">100+ parents & teachers</strong>.
              </p>
              <p className="text-[var(--text-tertiary)] text-sm opacity-80">
                Conducted awareness sessions on the <strong className="text-[var(--text-primary)] font-bold underline decoration-[#39d353]/30">importance of education and child rights</strong>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
