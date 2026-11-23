import React, { useState, useEffect } from 'react';
import { ArrowDown, ExternalLink, Send } from 'lucide-react';
import { profileData } from '../data/portfolioData';

export default function Hero() {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setOffsetY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-between overflow-hidden pt-28 pb-12">
      {/* Background Parallax Multi-layer SVG */}
      <div 
        className="absolute inset-0 pointer-events-none select-none transition-transform duration-75 ease-out"
        style={{ transform: `translateY(${offsetY * 0.15}px)` }}
      >
        <img 
          src="/img10.svg" 
          alt="Parallax layer 1" 
          className="w-full h-full object-cover opacity-60 mix-blend-screen"
        />
      </div>

      <div 
        className="absolute inset-0 pointer-events-none select-none transition-transform duration-75 ease-out"
        style={{ transform: `translateY(${offsetY * 0.28}px)` }}
      >
        <img 
          src="/img20.svg" 
          alt="Parallax layer 2" 
          className="w-full h-full object-cover opacity-50 mix-blend-screen"
        />
      </div>

      <div 
        className="absolute bottom-0 inset-x-0 h-[60vh] pointer-events-none select-none transition-transform duration-75 ease-out"
        style={{ transform: `translateY(${offsetY * 0.42}px)` }}
      >
        <img 
          src="/img30.svg" 
          alt="Parallax layer 3" 
          className="w-full h-full object-cover object-bottom opacity-75"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050510] via-transparent to-transparent" />
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center mt-12 sm:mt-16">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs sm:text-sm font-medium mb-6 backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          Available for innovative projects
        </div>

        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white mb-6 leading-tight">
          Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400">{profileData.name}</span>
        </h1>

        <p className="text-base sm:text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
          {profileData.shortBio}
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="#portfolio"
            className="px-6 py-3.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-medium text-sm sm:text-base flex items-center gap-2 transition-all duration-200 shadow-lg shadow-blue-600/30 hover:scale-105 active:scale-95"
          >
            <span>Lihat Portofolio</span>
            <ExternalLink size={16} />
          </a>
          <a
            href="#contact"
            className="px-6 py-3.5 rounded-full bg-white/5 hover:bg-white/10 text-slate-200 hover:text-white border border-white/10 font-medium text-sm sm:text-base flex items-center gap-2 transition-all duration-200 backdrop-blur-md hover:scale-105 active:scale-95"
          >
            <span>Hubungi Saya</span>
            <Send size={16} />
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="relative z-10 mt-16 flex flex-col items-center gap-2 text-slate-400">
        <span className="text-xs uppercase tracking-widest font-medium">Scroll Down</span>
        <a href="#about" className="p-2 rounded-full border border-white/10 bg-slate-900/40 hover:bg-white/10 transition-colors animate-bounce">
          <ArrowDown size={16} />
        </a>
      </div>
    </section>
  );
}
