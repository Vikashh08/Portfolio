import React from 'react';

const About = () => {
  return (
    <section id="about" className="section px-6 py-32 bg-black flex justify-center fade-in-up">
      <div className="max-w-[1040px] w-full mx-auto flex flex-col lg:flex-row gap-16 lg:gap-20 items-center">
        
        {/* Left Side: Professional Typography */}
        <div className="lg:w-[55%]">
          <h2 className="text-[clamp(3rem,6vw,5rem)] font-extrabold tracking-[-0.04em] mb-10 text-[#f5f5f7] leading-none">
            About Me.
          </h2>
          
          <div className="space-y-6 text-base sm:text-[17px] text-[#86868b] leading-[1.8] font-medium">
            <p>
              I’m Vikash Kumar, a Computer Science student who enjoys building web applications and solving logical problems. I like turning ideas into real projects and learning new technologies along the way. Over time, I have developed a strong interest in full-stack development and system design.

I have worked with technologies like React, Node.js, MongoDB, C++, and SQL while creating different academic and personal projects. I also practice competitive programming to improve my problem-solving skills and write better, more efficient code.

Apart from development, I am curious about how large-scale systems work and how technology can be used to create meaningful solutions. I am always open to learning, experimenting, and taking up challenges that help me grow as a developer.
         </p>
          </div>
        </div>

        {/* Right Side: Profile Card (Image Top, Stats Bottom) */}
        <div className="lg:w-[45%] w-full flex flex-col gap-6">
          
          {/* Top: High-Quality Profile/About Image */}
          <div className="w-full aspect-[4/3] rounded-[2.5rem] border border-white/[0.08] overflow-hidden bg-[#050505] shadow-2xl relative">
            <img 
               src="/about_tech_art.png" 
               alt="Abstract Developer Art" 
               className="w-full h-full object-cover grayscale brightness-90 contrast-125 object-center"
            />
          </div>

          {/* Bottom: College Stats Card */}
          <div className="w-full bg-[#050505] rounded-[2.5rem] border border-white/[0.08] p-8 sm:p-10 relative overflow-hidden shadow-2xl flex flex-col items-center justify-center">
             <div className="text-center mb-6">
                <p className="text-[#86868b] text-[12px] font-bold tracking-[0.2em] uppercase">Computer Science</p>
             </div>
             
             {/* Stats Box (College & Grad Year) */}
             <div className="w-full grid grid-cols-2 gap-4 border-t border-white/[0.08] pt-6">
                <div className="text-center">
                   <span className="block text-3xl font-extrabold text-[#f5f5f7] mb-2 tracking-tight">LPU</span>
                   <span className="text-[10px] text-[#6e6e73] tracking-[0.2em] uppercase font-bold text-balance px-2">Lovely Professional University</span>
                </div>
                <div className="text-center border-l border-white/[0.08]">
                   <span className="block text-3xl font-extrabold text-[#f5f5f7] mb-2 tracking-tight">2027</span>
                   <span className="text-[10px] text-[#6e6e73] tracking-[0.2em] uppercase font-bold">Graduation</span>
                </div>
             </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default About;
