import React, { useState, useEffect, useMemo } from 'react';

const Loader = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);

  const quotes = useMemo(() => [
    "Great things take a moment...",
    "Just a second...",
    "Making things beautiful...",
    "Good things buffering...",
    "Compiling the vision...",
    "Logic in motion...",
    "Crafting your experience...",
    "Almost there..."
  ], []);

  const [randomQuote] = useState(() => 
    quotes[Math.floor(Math.random() * quotes.length)]
  );

  useEffect(() => {
    // 1.2s total duration for a snappy feel
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(() => onComplete?.(), 500); 
    }, 1200);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className={`fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-black transition-opacity duration-500 ease-in-out ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      
      {/* Sleek Minimalist Spinner */}
      <div className="relative w-10 h-10 mb-8">
        <div className="absolute inset-0 border-2 border-white/5 rounded-full"></div>
        <div className="absolute inset-0 border-t-2 border-white rounded-full animate-spin"></div>
      </div>

      {/* Random Quote */}
      <div className="overflow-hidden h-6 flex justify-center items-center px-6 text-center">
        <p 
          className="text-[#a1a1a6] text-[10px] font-bold tracking-[0.2em] uppercase"
          style={{
            animation: 'quoteReveal 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards'
          }}
        >
            {randomQuote}
        </p>
      </div>

      <style>{`
        @keyframes quoteReveal {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default Loader;
