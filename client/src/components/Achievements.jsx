import React from 'react';

const Achievements = () => {
  return (
    <section id="achievements" className="section bg-[#0a0a0a] px-6 py-24 fade-in-up">
      <div className="max-w-[880px] mx-auto text-center">
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-16 text-[#f5f5f7] border-b border-white/10 pb-8 md:text-left">Leadership & Extracurriculars.</h2>
        
        <div className="flex flex-col gap-8 text-left">
           <div className="bg-[#1d1d1f] p-10 md:p-12 rounded-[40px] border border-white/[0.05] hover:border-[#39d353]/30 transition-all duration-300 shadow-lg relative overflow-hidden group">
             <div className="absolute top-0 right-0 w-64 h-64 bg-[#39d353]/[0.05] rounded-full blur-[60px] group-hover:bg-[#39d353]/[0.1] transition-colors -translate-y-1/2 translate-x-1/2"></div>
             
             <div className="relative z-10">
               <span className="text-white text-3xl font-bold block mb-4 flex items-center gap-4">
                 <div className="bg-black/50 p-3 rounded-full border border-[#39d353]/20 shadow-inner">
                    <svg className="w-8 h-8 text-[#39d353]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                 </div>
                 Algorithm Training
               </span>
               <p className="text-[#a1a1a6] text-xl leading-relaxed font-light mt-6">
                 Solved <strong className="text-white font-medium">150+ Data Structures and Algorithms problems</strong> on LeetCode using C++, strengthening critical problem-solving paradigms and code efficiency.
               </p>
             </div>
           </div>

           <div className="bg-[#1d1d1f] p-10 md:p-12 rounded-[40px] border border-white/[0.05] hover:border-[#0071e3]/30 transition-all duration-300 shadow-lg relative overflow-hidden group">
             <div className="absolute top-0 left-0 w-64 h-64 bg-[#0071e3]/[0.05] rounded-full blur-[60px] group-hover:bg-[#0071e3]/[0.1] transition-colors -translate-y-1/2 -translate-x-1/2"></div>
             
             <div className="relative z-10">
               <span className="text-white text-3xl font-bold block mb-4 flex items-center gap-4">
                 <div className="bg-black/50 p-3 rounded-full border border-[#0071e3]/20 shadow-inner">
                    <svg className="w-8 h-8 text-[#0071e3]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
                 </div>
                 Community Outreach
               </span>
               <p className="text-[#a1a1a6] text-xl leading-relaxed font-light mt-6">
                 Volunteered in community outreach programs, interacting with <strong className="text-white font-medium">500+ children and 100+ parents</strong>, conducting awareness sessions on education and child rights.
               </p>
             </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
