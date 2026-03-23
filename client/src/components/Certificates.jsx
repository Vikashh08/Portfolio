import React from 'react';

const Certificates = () => {
  const certs = [
    { title: "Node.js (Intermediate)", provider: "HackerRank Certified", date: "Feb 2026", link: "#" },
    { title: "Cloud Computing", provider: "NPTEL", date: "Oct 2025", link: "#" },
    { title: "Programming in Java", provider: "iamneo", date: "May 2025", link: "#" },
    { title: "Data Structures and Algorithms", provider: "iamneo", date: "Dec 2024", link: "#" }
  ];

  return (
    <section id="certificates" className="section bg-[#050505] px-6 py-24 fade-in-up">
      <div className="max-w-[1080px] mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-16 text-[#f5f5f7] border-b border-white/10 pb-8 text-center md:text-left">Licenses & Certifications.</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certs.map((c, i) => (
            <a key={i} href={c.link} className="bg-[#1d1d1f] p-8 rounded-[30px] border border-white/[0.05] flex items-center gap-6 group hover:bg-[#2d2d2f] hover:border-[#0071e3]/30 transition-all hover:-translate-y-1 shadow-md hover:shadow-2xl relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-[#0071e3]/[0.05] rounded-full blur-[40px] group-hover:bg-[#0071e3]/[0.1] transition-colors -translate-y-1/2 translate-x-1/2"></div>
               
               <div className="bg-black/50 p-4 rounded-full border border-white/5 group-hover:scale-110 transition-transform flex-shrink-0 shadow-inner">
                  <svg className="w-8 h-8 text-[#0071e3]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
               </div>
               
               <div className="flex flex-col flex-grow z-10">
                  <h4 className="text-white font-bold text-xl leading-tight mb-2 group-hover:text-[#0071e3] transition-colors">{c.title}</h4>
                  <div className="flex justify-between items-center w-full">
                    <h5 className="text-[#a1a1a6] text-sm font-medium">{c.provider}</h5>
                    <span className="text-[#86868b] text-[10px] uppercase tracking-widest font-bold bg-white/5 border border-white/5 px-3 py-1.5 rounded-full">{c.date}</span>
                  </div>
                  <div className="mt-4 flex items-center text-xs text-[#0071e3] font-medium opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0 duration-300">
                    Verify Credential <span className="ml-1">↗</span>
                  </div>
               </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
