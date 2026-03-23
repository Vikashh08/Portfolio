import React from 'react';

const Education = () => {
  return (
    <section id="education" className="section px-6 py-24 bg-black fade-in-up">
      <div className="max-w-[980px] mx-auto text-center mb-20">
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-4 text-[#f5f5f7]">Education.</h2>
        <p className="text-xl md:text-2xl text-[#86868b] font-light max-w-2xl mx-auto">A rigorous academic foundation building the next generation of software engineering paradigms.</p>
      </div>

      <div className="max-w-[980px] mx-auto space-y-8">
         <div className="bg-[#1d1d1f] p-8 md:p-12 rounded-[40px] border border-white/[0.05] hover:border-white/[0.2] transition-colors relative overflow-hidden group">
           {/* Abstract minimalist graphic */}
           <div className="absolute top-0 right-0 w-64 h-64 bg-white/[0.02] rounded-full blur-[60px] group-hover:bg-blue-600/[0.05] transition-colors -translate-y-1/2 translate-x-1/3"></div>
           
           <div className="relative z-10">
             <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-4">
               <div>
                  <h3 className="text-3xl font-semibold text-white mb-2">Lovely Professional University</h3>
                  <h4 className="text-xl text-[#0071e3] font-medium">B.Tech in Computer Science and Engineering</h4>
               </div>
               <span className="mt-4 md:mt-0 px-5 py-2 bg-black border border-[#424245] rounded-full text-xs font-semibold tracking-widest uppercase text-[#a1a1a6]">Aug 2023 - Present</span>
             </div>
             <p className="text-[#86868b] text-lg mt-6 border-t border-white/10 pt-6">Maintaining an immaculate academic trajectory with a strict focus on distributed systems and advanced algorithms.</p>
             <div className="mt-8 flex items-center gap-6">
                 <div className="text-left">
                    <span className="block text-4xl font-bold text-white mb-1">8.19</span>
                    <span className="text-xs text-[#a1a1a6] tracking-widest uppercase font-semibold">Current CGPA</span>
                 </div>
             </div>
           </div>
         </div>

         <div className="grid md:grid-cols-2 gap-8 mt-8">
           <div className="bg-[#1d1d1f] p-8 md:p-10 rounded-[40px] border border-white/[0.05] flex flex-col justify-between">
             <div>
               <h3 className="text-2xl font-semibold text-white mb-1">K.K.M College</h3>
               <h4 className="text-[#86868b]">Intermediate PCM</h4>
             </div>
             <div className="mt-12 flex justify-between items-end">
                <div>
                   <span className="block text-3xl font-bold text-white mb-1">83%</span>
                   <span className="text-[10px] text-[#a1a1a6] tracking-widest uppercase font-semibold">Percentage</span>
                </div>
                <span className="text-xs text-[#a1a1a6] uppercase tracking-widest font-medium">Mar 2021 - May 2022</span>
             </div>
           </div>

           <div className="bg-[#1d1d1f] p-8 md:p-10 rounded-[40px] border border-white/[0.05] flex flex-col justify-between">
             <div>
               <h3 className="text-2xl font-semibold text-white mb-1">Nath Public School</h3>
               <h4 className="text-[#86868b]">Matriculation</h4>
             </div>
             <div className="mt-12 flex justify-between items-end">
                <div>
                   <span className="block text-3xl font-bold text-white mb-1">79%</span>
                   <span className="text-[10px] text-[#a1a1a6] tracking-widest uppercase font-semibold">Percentage</span>
                </div>
                <span className="text-xs text-[#a1a1a6] uppercase tracking-widest font-medium">Mar 2019 - May 2020</span>
             </div>
           </div>
         </div>
      </div>
    </section>
  );
};

export default Education;
