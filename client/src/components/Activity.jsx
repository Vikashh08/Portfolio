import React, { useState, useEffect } from 'react';

const Activity = () => {
  const [profile, setProfile] = useState(null);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        const profileRes = await fetch('https://api.github.com/users/Vikashh08');
        const profileData = await profileRes.json();
        setProfile(profileData);

        const reposRes = await fetch('https://api.github.com/users/Vikashh08/repos?sort=updated&per_page=6');
        const reposData = await reposRes.json();
        setRepos(reposData);
        
        setLoading(false);
      } catch (error) {
        console.error("Error fetching GitHub data:", error);
        setLoading(false);
      }
    };
    fetchGitHubData();
  }, []);

  return (
    <section id="activity" className="section px-6 py-24 bg-black fade-in-up">
      <div className="text-center mb-20 max-w-[980px] mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-4 text-[#f5f5f7]">Development Activity.</h2>
        <p className="text-xl md:text-2xl text-[#86868b] font-light">Live open-source repositories and algorithmic problem-solving matrices.</p>
      </div>

      <div className="max-w-[1080px] mx-auto flex flex-col gap-8">
        
        {/* Apple-style Widget Card: Live GitHub API */}
        <div className="bg-[#1d1d1f] rounded-[40px] p-8 md:p-12 border border-white/[0.05] flex flex-col relative overflow-hidden group w-full">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/[0.02] rounded-full blur-[80px] group-hover:bg-blue-500/[0.05] transition-colors -translate-y-1/2 translate-x-1/2"></div>
          
          <div className="relative z-10 flex flex-col w-full">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
               <div>
                 <h3 className="text-3xl font-semibold text-[#f5f5f7] mb-2 flex items-center gap-3">
                   <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current text-[#a1a1a6]"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                   <span>GitHub Activity</span>
                 </h3>
                 <p className="text-[#86868b] text-lg">Continuous integration and open-source contributions.</p>
               </div>
               
               <div className="flex gap-4 hidden sm:flex">
                  <div className="bg-black/50 px-6 py-4 rounded-3xl border border-white/5 flex flex-col items-center min-w-[100px] hover:border-white/10 transition-colors">
                     <span className="block text-3xl font-bold text-white mb-1">{profile?.public_repos || 0}</span>
                     <span className="text-[10px] text-[#86868b] uppercase tracking-widest font-semibold">Repos</span>
                  </div>
                  <div className="bg-black/50 px-6 py-4 rounded-3xl border border-white/5 flex flex-col items-center min-w-[100px] hover:border-white/10 transition-colors">
                     <span className="block text-3xl font-bold text-white mb-1">{profile?.followers || 0}</span>
                     <span className="text-[10px] text-[#86868b] uppercase tracking-widest font-semibold">Followers</span>
                  </div>
               </div>
            </div>

            {loading ? (
               <div className="w-full h-64 flex flex-col items-center justify-center space-y-4">
                  <div className="w-8 h-8 border-2 border-white/20 border-t-[#0071e3] rounded-full animate-spin"></div>
                  <div className="text-[#86868b] text-sm animate-pulse">Syncing repositories...</div>
               </div>
            ) : (
               <div className="flex flex-col gap-10">
                  {/* Contribution Graph - Neon Intensity */}
                  <div className="w-full overflow-x-auto rounded-[32px] bg-black/40 border border-white/[0.05] p-6 flex flex-col items-center justify-center hidden md:flex hover:border-white/10 transition-colors">
                    <img 
                      src={`https://ghchart.rshah.org/39d353/Vikashh08`} 
                      alt="GitHub Contribution Graph" 
                      className="w-full max-w-[850px] opacity-100 drop-shadow-[0_0_12px_rgba(57,211,83,0.4)]"
                    />
                  </div>

                  {/* Clean Typography-Driven Repositories Grid - Compact Sizes */}
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <h4 className="text-sm text-[#a1a1a6] font-medium tracking-widest uppercase">Latest Repositories</h4>
                      <a href="https://github.com/Vikashh08?tab=repositories" target="_blank" rel="noopener noreferrer" className="text-[12px] text-white hover:text-[#39d353] font-bold hidden md:flex items-center gap-1 transition-colors">
                        View all <span className="transform transition-transform group-hover:translate-x-1">→</span>
                      </a>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                       {repos.map(repo => {
                          const getLangColor = (lang) => {
                             if (!lang) return "bg-gray-500 shadow-[0_0_6px_rgba(107,114,128,0.5)]";
                             const colorMap = {
                                "JavaScript": "bg-yellow-400 shadow-[0_0_6px_rgba(250,204,21,0.5)]",
                                "C++": "bg-blue-500 shadow-[0_0_6px_rgba(59,130,246,0.5)]",
                                "Java": "bg-orange-500 shadow-[0_0_6px_rgba(249,115,22,0.5)]",
                                "Python": "bg-blue-400 shadow-[0_0_6px_rgba(96,165,250,0.5)]",
                                "HTML": "bg-red-500 shadow-[0_0_6px_rgba(239,68,68,0.5)]",
                                "CSS": "bg-blue-300 shadow-[0_0_6px_rgba(147,197,253,0.5)]"
                             };
                             return colorMap[lang] || "bg-emerald-500 shadow-[0_0_6px_rgba(16,185,129,0.5)]";
                          };

                          return (
                            <a key={repo.id} href={repo.html_url} target="_blank" rel="noopener noreferrer" className="group/card flex flex-col justify-between bg-black/40 hover:bg-[#111111] p-5 rounded-[18px] border border-white/[0.05] hover:border-white/[0.15] transition-all duration-300 hover:-translate-y-1 relative overflow-hidden shadow-lg h-full">
                              
                              {/* Ambient Mesh Glow */}
                              <div className="absolute top-0 right-0 w-24 h-24 bg-white/[0.02] rounded-full blur-[20px] group-hover/card:bg-white/[0.05] transition-colors pointer-events-none -translate-y-1/2 translate-x-1/2"></div>
                              
                              <div className="relative z-10 w-full mb-5">
                                <div className="flex items-start justify-between mb-4">
                                  <div className="flex bg-[#222222] p-2 rounded-xl border border-white/5 group-hover/card:bg-white/10 group-hover/card:scale-105 transition-all duration-300">
                                    <svg className="w-5 h-5 text-[#f5f5f7]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"/></svg>
                                  </div>
                                  <svg className="w-4 h-4 text-[#86868b] group-hover/card:text-white transition-colors transform group-hover/card:translate-x-1 group-hover/card:-translate-y-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
                                </div>
                                
                                <h3 className="text-base font-bold text-[#f5f5f7] mb-2 group-hover/card:text-white tracking-tight line-clamp-1">{repo.name}</h3>
                                <p className="text-[13px] text-[#86868b] leading-relaxed line-clamp-2">{repo.description || 'A highly optimized developer repository.'}</p>
                              </div>
                              
                              <div className="mt-auto flex items-center justify-between border-t border-white/[0.05] pt-4 relative z-10 w-full">
                                <div className="flex items-center gap-2">
                                  <span className={`w-2 h-2 rounded-full ${getLangColor(repo.language)}`}></span>
                                  <span className="text-[10px] font-bold text-[#a1a1a6] tracking-wider uppercase">{repo.language || 'Code'}</span>
                                </div>
                                
                                <div className="flex items-center gap-3 text-[11px] font-bold text-[#a1a1a6]">
                                  <div className="flex items-center gap-1 hover:text-white transition-colors">
                                    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 16 16"><path fillRule="evenodd" d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25z"></path></svg>
                                    <span>{repo.stargazers_count}</span>
                                  </div>
                                  <div className="flex items-center gap-1 hover:text-white transition-colors">
                                    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 16 16"><path fillRule="evenodd" d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z"></path></svg>
                                    <span>{repo.forks_count}</span>
                                  </div>
                                </div>
                              </div>
                            </a>
                          )
                       })}
                    </div>
                    
                    <div className="mt-8 flex justify-center md:hidden">
                       <a href="https://github.com/Vikashh08" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-white bg-[#0071e3] hover:bg-[#0077ED] px-6 py-3 rounded-full font-medium transition-colors text-sm">
                         View Full Profile <span className="ml-2">→</span>
                       </a>
                    </div>
                  </div>
               </div>
            )}
          </div>
        </div>

        {/* Apple-style Widget Card: Leetcode */}
        <div className="bg-[#1d1d1f] rounded-[40px] p-8 md:p-12 border border-white/[0.05] flex flex-col lg:flex-row relative overflow-hidden group w-full gap-10 items-center">
          <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#FFA116]/[0.03] rounded-full blur-[100px] group-hover:bg-[#FFA116]/[0.06] transition-colors -translate-y-1/2 -translate-x-1/4"></div>
          
          <div className="relative z-10 flex-col flex w-full lg:w-5/12 justify-center text-center lg:text-left">
            <h3 className="text-3xl font-semibold text-[#f5f5f7] mb-4 flex items-center justify-center lg:justify-start gap-3">
              <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current text-[#FFA116]"><path d="M16.102 1.325l-9.157 5.286c-.524.303-.524 1.05 0 1.353l9.157 5.286c.524.303 1.18-.075 1.18-.677V2.002c0-.602-.656-.98-1.18-.677zm-9.04 11.2l-3.23 1.864c-.524.303-.524 1.05 0 1.353l9.157 5.286c.524.303 1.18-.075 1.18-.677V18.49l-7.107-4.103c-.524-.303-.524-1.05 0-1.353z"/></svg>
              <span>LeetCode</span>
            </h3>
            <p className="text-[#86868b] text-xl leading-relaxed mb-8 font-light max-w-md mx-auto lg:mx-0">
              Sharpening logic optimization and aggressive computational efficiency. Focusing on elegant solutions.
            </p>
          </div>

          <div className="relative z-10 w-full lg:w-7/12 flex items-center justify-center">
            <div className="grid grid-cols-2 gap-4 w-full h-full max-h-[350px]">
              <div className="bg-gradient-to-br from-black/80 to-[#1a1a1a] p-8 md:p-10 rounded-[32px] border border-white/[0.05] flex flex-col justify-center items-center shadow-lg transform transition-transform group-hover:-translate-y-1 hover:border-[#FFA116]/30">
                <span className="text-5xl md:text-7xl font-bold text-white mb-3">310<span className="text-[#FFA116] text-4xl md:text-6xl">+</span></span>
                <span className="text-[10px] md:text-xs text-[#86868b] uppercase tracking-[0.2em] font-medium text-center">Problems Solved</span>
              </div>
              <div className="bg-gradient-to-br from-black/80 to-[#1a1a1a] p-5 md:p-8 rounded-[32px] border border-white/[0.05] flex flex-col justify-center items-center shadow-lg transform transition-transform group-hover:translate-y-1 hover:border-[#FFA116]/30 text-center gap-1">
                <span className="text-3xl md:text-5xl font-bold text-[#FFA116] leading-tight mb-2 flex items-center gap-2">
                   C++<span className="text-white/20 font-light text-2xl md:text-4xl">&</span>Java
                </span>
                <span className="text-[10px] md:text-xs text-[#86868b] uppercase tracking-[0.2em] font-medium text-center mt-3">Core Stack</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Activity;
