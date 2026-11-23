import React from 'react';
import { Heart } from 'lucide-react';
import { profileData } from '../data/portfolioData';

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-10 px-6 text-center text-slate-500 text-xs">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="flex items-center justify-center gap-1">
          &copy; {new Date().getFullYear()} {profileData.name}. All rights reserved.
        </p>
        <p className="flex items-center justify-center gap-1 text-slate-400">
          Built with React, Vite &amp; Tailwind CSS
        </p>
      </div>
    </footer>
  );
}
