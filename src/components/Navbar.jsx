import React, { useState, useEffect } from 'react';
import { Home, User, Briefcase, Mail } from 'lucide-react';

export default function Navbar() {
  const [active, setActive] = useState('Home');
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { name: 'Home', href: '#home', icon: Home },
    { name: 'About', href: '#about', icon: User },
    { name: 'Portofolio', href: '#portfolio', icon: Briefcase },
    { name: 'Contact', href: '#contact', icon: Mail }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
      const sections = ['home', 'about', 'portfolio', 'contact'];
      for (const s of sections) {
        const el = document.getElementById(s);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActive(s.charAt(0).toUpperCase() + s.slice(1));
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-5 inset-x-0 z-50 flex justify-center px-4 pointer-events-none">
      <nav className={`pointer-events-auto flex items-center gap-1.5 p-1.5 rounded-full transition-all duration-300 ${
        scrolled 
          ? 'bg-slate-950/80 backdrop-blur-xl border border-white/10 shadow-2xl shadow-blue-950/30' 
          : 'bg-slate-900/60 backdrop-blur-md border border-white/5'
      }`}>
        {navItems.map((item) => {
          const Icon = item.icon;
          const isCurrent = active === item.name || (active === 'Portfolio' && item.name === 'Portofolio');
          return (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setActive(item.name)}
              className={`relative flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 ${
                isCurrent 
                  ? 'text-white bg-blue-600 shadow-md shadow-blue-500/25' 
                  : 'text-slate-300 hover:text-white hover:bg-white/5'
              }`}
            >
              <Icon size={16} />
              <span>{item.name}</span>
            </a>
          );
        })}
      </nav>
    </header>
  );
}
