import React from 'react';

const Blogs = () => {
  return (
    <section id="blogs" className="py-24 relative overflow-hidden bg-[var(--bg-color)] reveal">
      {/* Background */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.15]">
        <div className="absolute inset-0 bg-[radial-gradient(var(--text-primary)_0.8px,transparent_0.8px)] [background-size:24px_24px]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--bg-color)] via-transparent to-[var(--bg-color)]"></div>
      </div>

      <div className="max-w-[1240px] mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="mb-16 text-center sm:text-left">
          <h2 className="text-3xl md:text-5xl font-bold text-[var(--text-primary)] tracking-tight mb-4">Blog & Technical Writing</h2>
          <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed max-w-2xl">
            Documenting my engineering journey — insights into scalable architecture, algorithm optimization, and modern web technologies.
          </p>
        </div>

        {/* Blog CTA Card */}
        <div>
          <a
            href="https://medium.com/@vikashroy2333"
            target="_blank"
            rel="noopener noreferrer"
            className="group/blog block"
          >
            <div className="relative flex flex-col md:flex-row items-center gap-8 md:gap-12 px-8 md:px-12 py-10 md:py-12 rounded-2xl border border-[var(--border-color)] bg-[var(--bg-secondary)] light-mode:bg-white hover:bg-[var(--bg-color)] hover:border-[var(--text-secondary)]/30 transition-all duration-500 overflow-hidden text-center md:text-left shadow-sm light-mode:shadow-md">
              {/* Left accent bar */}
              <div className="absolute left-0 top-0 bottom-0 w-[3px] rounded-l-2xl bg-[#00ab6c] opacity-40 group-hover/blog:opacity-100 transition-opacity duration-500"></div>

              {/* Medium Logo */}
              <div className="flex-shrink-0 w-14 h-14 bg-[var(--text-primary)] rounded-2xl flex items-center justify-center group-hover/blog:scale-110 transition-transform duration-500 shadow-lg">
                <span className="text-[var(--bg-color)] text-2xl font-serif font-bold leading-none">M</span>
              </div>

              {/* Content */}
              <div className="flex-grow">
                <h3 className="text-xl md:text-2xl font-bold text-[var(--text-primary)] tracking-tight mb-2 group-hover/blog:translate-x-1 transition-transform duration-400">
                  Read on Medium
                </h3>
                <p className="text-[var(--text-secondary)] text-sm leading-relaxed max-w-lg">
                  I write about MERN stack architecture, C++ algorithm deep-dives, and practical engineering insights from real-world projects.
                </p>
              </div>

              {/* CTA */}
              <div className="flex-shrink-0 flex items-center gap-3">
                <span className="text-sm font-semibold text-[var(--text-primary)] bg-[var(--bg-color)] border border-[var(--border-color)] px-5 py-2.5 rounded-xl group-hover/blog:bg-[#00ab6c] group-hover/blog:border-[#00ab6c] group-hover/blog:text-white transition-all duration-400">
                  Visit Profile ↗
                </span>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
