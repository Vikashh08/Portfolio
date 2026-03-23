import React from 'react';

const Blogs = () => {
  return (
    <section id="blogs" className="section bg-black px-6 py-24 fade-in-up">
      <div className="max-w-[980px] mx-auto text-center">
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-8 text-[#f5f5f7]">Technical Writing.</h2>
        <p className="text-xl md:text-2xl text-[#86868b] font-light max-w-2xl mx-auto mb-20">Distilling complex software engineering paradigms into readable, high-impact articles.</p>

        <div className="bg-[#1d1d1f] p-10 md:p-16 rounded-[40px] border border-white/[0.05] flex flex-col items-center">
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-6">
             {/* Simple Medium Logo Mock */}
             <span className="text-black text-3xl font-serif font-bold">M</span>
          </div>
          
          <h3 className="text-3xl font-semibold text-white mb-6">Read My Latest Articles on Medium</h3>
          <p className="text-[#86868b] text-lg leading-relaxed mb-10 max-w-2xl">
            I actively document my engineering journey, providing insights into scalable MERN architecture, algorithm optimization in C++, and deep-dives into modern web technologies.
          </p>

          <a href="https://medium.com/@vikashroy2333" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-black bg-white hover:bg-gray-200 px-8 py-4 rounded-full font-medium transition-colors text-lg">
            Visit Medium Profile ↗
          </a>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
