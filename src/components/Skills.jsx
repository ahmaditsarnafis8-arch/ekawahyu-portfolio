import React from 'react';
import { skillsData } from '../data/portfolioData';

export default function Skills() {
  return (
    <section className="relative py-20 px-6 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <span className="text-xs uppercase tracking-widest text-blue-400 font-semibold mb-2 block">
          KEAHLIAN &amp; TEKNOLOGI
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
          Tools &amp; Stack Yang Saya Gunakan
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {skillsData.map((cat, idx) => (
          <div key={idx} className="glass-card p-6 rounded-2xl flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-bold text-white mb-4 pb-3 border-b border-white/10 flex items-center justify-between">
                <span>{cat.category}</span>
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
                  {cat.skills.length} skills
                </span>
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-3 py-1.5 rounded-lg text-xs font-medium bg-white/[0.04] hover:bg-blue-600/20 text-slate-300 hover:text-blue-300 border border-white/5 hover:border-blue-500/30 transition-all duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
