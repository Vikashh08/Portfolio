import React, { useState, useEffect } from 'react';
import { SiLeetcode, SiCodechef, SiCodeforces, SiHackerrank, SiGeeksforgeeks } from "react-icons/si";

const Activity = () => {
  const [profile, setProfile] = useState(null);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        const profileRes = await fetch('https://api.github.com/users/Vikashh08');
        const profileData = await profileRes.json();
        setProfile(profileData);

        const reposRes = await fetch('https://api.github.com/users/Vikashh08/repos?sort=updated&per_page=3');
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
    <section id="activity" className="py-24 relative overflow-hidden bg-[var(--bg-color)] reveal">
      {/* Background Effect */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.15]">
        <div className="absolute inset-0 bg-[radial-gradient(var(--text-primary)_0.8px,transparent_0.8px)] [background-size:24px_24px]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--bg-color)] via-transparent to-[var(--bg-color)]"></div>
      </div>

      <div className="max-w-[1240px] mx-auto px-6 relative z-10 text-center sm:text-left mb-16">
        <div className="mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-[var(--text-primary)] tracking-tight mb-4">Open Source Contribution</h2>
          <div className="h-0.5 w-12 bg-[#0071e3] rounded-full"></div>
        </div>
        <p className="text-sm sm:text-base text-[var(--text-secondary)] font-normal leading-relaxed max-w-2xl">
          Tracing my engineering footprint and algorithmic growth across the development landscape.
        </p>
      </div>

      <div className="max-w-[1240px] mx-auto px-6 flex flex-col gap-12 relative z-10">
        
        {/* Profile Snapshot Header */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-[var(--border-color)]">
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <div className="w-20 h-20 rounded-3xl overflow-hidden border-2 border-[var(--border-color)] p-1 group-hover:border-[var(--text-secondary)] transition-all duration-500 shadow-2xl bg-[var(--bg-secondary)]">
               <img src={profile?.avatar_url || "/VikashProfile.png"} alt="Profile" className="w-full h-full object-cover rounded-[1.25rem] grayscale" />
            </div>
            <div className="text-center sm:text-left">
               <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-1 tracking-tight">{profile?.name || "Vikash Kumar"}</h3>
               <p className="text-[var(--text-secondary)] text-sm font-medium tracking-wide uppercase">{profile?.bio || "Software Engineer"}</p>
            </div>
          </div>
          <div className="flex items-center gap-3 sm:gap-4 overflow-x-auto w-full md:w-auto justify-center">
             <div className="bg-[var(--bg-secondary)] px-5 sm:px-6 py-4 rounded-3xl border border-[var(--border-color)] flex flex-col items-center min-w-[100px] sm:min-w-[110px] hover:bg-[var(--bg-color)] transition-all shadow-sm">
                <span className="text-2xl font-bold text-[var(--text-primary)] mb-0.5">{profile?.public_repos || 0}</span>
                <span className="text-[10px] text-[var(--text-secondary)] uppercase tracking-[0.2em] font-bold">Projects</span>
             </div>
             <div className="bg-[var(--bg-secondary)] px-5 sm:px-6 py-4 rounded-3xl border border-[var(--border-color)] flex flex-col items-center min-w-[100px] sm:min-w-[110px] hover:bg-[var(--bg-color)] transition-all shadow-sm">
                <span className="text-2xl font-bold text-[var(--text-primary)] mb-0.5">{profile?.followers || 0}</span>
                <span className="text-[10px] text-[var(--text-secondary)] uppercase tracking-[0.2em] font-bold">Network</span>
             </div>
          </div>
        </div>

        {loading ? (
          <div className="w-full h-64 flex flex-col items-center justify-center space-y-4">
             <div className="w-10 h-10 border-2 border-[var(--border-color)] border-t-[var(--accent-color)] rounded-full animate-spin"></div>
             <div className="text-[var(--text-secondary)] text-[10px] font-bold uppercase tracking-[0.3em]">Syncing Activity...</div>
          </div>
        ) : (
          <div className="flex flex-col gap-20">
             
        {/* Contribution Graph */}
             <div className="w-full bg-[var(--bg-secondary)] light-mode:bg-white border border-[var(--border-color)] rounded-[2.5rem] p-8 md:p-14 flex flex-col items-center justify-center hidden md:flex hover:border-[var(--text-secondary)]/30 transition-all duration-700 shadow-xl light-mode:shadow-2xl relative overflow-hidden group/graph backdrop-blur-3xl">
               <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-[var(--text-primary)]/[0.01] to-transparent pointer-events-none"></div>
               <div className="flex items-center justify-between w-full mb-12 px-2">
                 <div className="flex items-center gap-3">
                   <div className="w-2.5 h-2.5 rounded-full bg-[#39d353] shadow-[0_0_15px_#39d353] animate-pulse"></div>
                   <h4 className="text-[11px] text-[var(--text-primary)] font-bold uppercase tracking-[0.4em]">GitHub Activity Graph</h4>
                 </div>
                 <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-[#39d353]/10 border border-[#39d353]/20">
                   <span className="text-[9px] text-[#39d353] font-bold uppercase tracking-widest">Live Flow</span>
                 </div>
               </div>
               <div className="w-full relative flex flex-col items-center">
                  <img 
                    src={`https://ghchart.rshah.org/39d353/Vikashh08`} 
                    alt="GitHub Contribution Graph" 
                    className="w-full max-w-[850px] opacity-100 filter saturate-[1.2] drop-shadow-[0_0_20px_rgba(57,211,83,0.15)] group-hover/graph:scale-[1.01] transition-transform duration-1000"
                  />
                  <div className="w-full max-w-[850px] text-right text-[10px] text-[var(--text-secondary)] font-bold mt-6 tracking-widest uppercase">
                    Active Horizon: January — December
                  </div>
               </div>
             </div>

             {/* Latest Repositories */}
             <div>
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                   <div className="text-left">
                      <h4 className="text-[11px] text-[var(--text-secondary)] font-bold tracking-[0.4em] uppercase mb-3 text-apple-gradient">Engineering Trace</h4>
                      <h3 className="text-2xl font-bold text-[var(--text-primary)] tracking-tight">Latest Repositories</h3>
                   </div>
                   <a href="https://github.com/Vikashh08" target="_blank" rel="noopener noreferrer" className="group/btn inline-flex items-center text-[11px] font-bold text-[var(--text-primary)] tracking-[0.2em] uppercase hover:text-[#0071e3] transition-colors">
                      View all Repos <span className="text-lg ml-2 group-hover/btn:translate-x-1 transition-transform">→</span>
                   </a>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                   {repos.map((repo, idx) => {
                      const getLangColor = (lang) => {
                        if (!lang) return "#888888";
                        const colorMap = {
                          "JavaScript": "#f7df1e", "C++": "#00599c", "Java": "#b07219", "Python": "#3776ab",
                          "HTML": "#e34c26", "CSS": "#264de4", "React": "#61dafb", "TypeScript": "#3178c6"
                        };
                        return colorMap[lang] || "#0071e3";
                      };

                      return (
                        <a 
                          key={repo.id} 
                          href={repo.html_url} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          onMouseEnter={() => setHoveredIndex(idx)}
                          onMouseLeave={() => setHoveredIndex(null)}
                          className="group/glass flex flex-col bg-[var(--bg-secondary)] light-mode:bg-white border border-[var(--border-color)] p-8 rounded-[2.5rem] backdrop-blur-3xl hover:border-[var(--text-secondary)]/30 transition-all duration-500 relative overflow-hidden shadow-xl light-mode:shadow-2xl h-full"
                        >
                          <div className="relative z-10 flex flex-col h-full">
                            <div className="flex items-center justify-between mb-10">
                              <div className="p-3.5 bg-[var(--bg-color)] rounded-2xl border border-[var(--border-color)] group-hover/glass:border-[var(--text-secondary)] transition-all">
                                 <svg className="w-5 h-5 text-[var(--text-secondary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/></svg>
                              </div>
                              <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[var(--bg-color)] border border-[var(--border-color)] text-[10px] font-bold text-[var(--text-secondary)]">
                                <svg className="w-3.5 h-3.5 text-yellow-500/80" fill="currentColor" viewBox="0 0 16 16"><path d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25z"/></svg>
                                <span>{repo.stargazers_count}</span>
                              </div>
                            </div>
                            
                            <h3 className="text-xl font-bold text-[var(--text-primary)] mb-3 tracking-tight group-hover/glass:translate-x-1 transition-transform">{repo.name}</h3>
                            <p className="text-sm text-[var(--text-secondary)] font-normal leading-relaxed mb-10 flex-grow line-clamp-2">
                               {repo.description || "Deploying professional engineering standards for optimized software performance."}
                            </p>
                            
                            <div className="mt-auto flex items-center justify-between pt-6 border-t border-[var(--border-color)]">
                              <div className="flex items-center gap-3">
                                <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: getLangColor(repo.language), boxShadow: `0 0 12px ${getLangColor(repo.language)}44` }}></div>
                                <span className="text-[10px] font-bold text-[var(--text-secondary)] tracking-[0.2em] uppercase">{repo.language || "Stack"}</span>
                              </div>
                              <span className="text-[10px] font-bold text-[var(--text-primary)] opacity-0 group-hover/glass:opacity-100 group-hover/glass:translate-x-1 transition-all">VIEW →</span>
                            </div>
                          </div>
                        </a>
                      );
                   })}
                </div>
             </div>

             {/* CP Platforms Tile */}
             <div className="bg-[var(--bg-secondary)] rounded-[3rem] p-10 md:p-16 border-l-2 border-l-[#0071e3] flex flex-col lg:flex-row relative overflow-hidden group w-full gap-12 items-start lg:items-center shadow-sm backdrop-blur-xl border border-[var(--border-color)]">
               <div className="absolute top-0 right-0 w-80 h-80 bg-[#0071e3]/[0.02] rounded-full blur-[100px] group-hover:bg-[#0071e3]/[0.05] transition-all duration-1000"></div>
               <div className="relative z-10 flex flex-col w-full lg:w-7/12 text-left">
                  <h3 className="text-3xl font-bold text-[var(--text-primary)] mb-6 flex items-center gap-5">
                    <span className="tracking-tight">Competitive Programming</span>
                  </h3>
                  <p className="text-[var(--text-secondary)] text-base leading-relaxed mb-10 font-normal max-w-xl">
                    Demonstrating analytical depth and speed across 350+ solved challenges on the world's most competitive programming architectures.
                  </p>
                  <div className="flex flex-wrap gap-6 sm:gap-10">
                     {[
                        { icon: SiLeetcode, name: "LeetCode", color: "#FFA116" },
                        { icon: SiCodechef, name: "CodeChef", color: "#5B4638" },
                        { icon: SiCodeforces, name: "CodeForces", color: "#1F8ACB" },
                        { icon: SiHackerrank, name: "HackerRank", color: "#00EA64" },
                        { icon: SiGeeksforgeeks, name: "GFG", color: "#2F8D46" }
                     ].map((plat, i) => (
                        <div key={i} className="flex flex-col items-center gap-3 group/icon cursor-default transform hover:-translate-y-2 transition-all">
                           <plat.icon className="w-8 h-8 opacity-60 group-hover/icon:opacity-100 transition-opacity" style={{ color: plat.color }} />
                           <span className="text-[9px] text-[var(--text-secondary)] font-bold tracking-widest uppercase">{plat.name}</span>
                        </div>
                     ))}
                  </div>
               </div>
               <div className="relative z-10 w-full lg:w-5/12 flex items-center">
                  <div className="grid grid-cols-2 gap-10 w-full">
                     <div className="text-left group/stat">
                        <div className="text-5xl font-bold text-[var(--text-primary)] mb-2 leading-none tracking-tighter group-hover/stat:text-[#0071e3] transition-colors">350<span className="text-[#0071e3]">+</span></div>
                        <p className="text-[10px] text-[var(--text-secondary)] font-bold uppercase tracking-[0.2em]">Problems Mastered</p>
                     </div>
                     <div className="text-left group/stat">
                        <div className="text-3xl font-bold text-[var(--text-primary)] opacity-90 mb-2 leading-none tracking-tighter group-hover/stat:text-[#0071e3] transition-colors">C++/JAVA</div>
                        <p className="text-[10px] text-[var(--text-secondary)] font-bold uppercase tracking-[0.2em]">Core Stack</p>
                     </div>
                  </div>
               </div>
             </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Activity;
