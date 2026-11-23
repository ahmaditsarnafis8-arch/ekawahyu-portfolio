import React from 'react';
import { Award, Code2, Sparkles, UserCheck } from 'lucide-react';
import { profileData } from '../data/portfolioData';

export default function About() {
  return (
    <section id="about" className="relative py-24 px-6 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <span className="text-xs uppercase tracking-widest text-blue-400 font-semibold mb-2 block">
          TENTANG SAYA
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
          Dedikasi Pada Kualitas &amp; Pengalaman Digital
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        {/* Photo / Card */}
        <div className="lg:col-span-5 relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl blur opacity-30 group-hover:opacity-60 transition duration-500" />
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/60 shadow-2xl">
            <img 
              src={profileData.eventPhoto} 
              alt={profileData.name} 
              className="w-full h-[420px] object-cover object-center group-hover:scale-105 transition duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <p className="text-white font-bold text-lg">{profileData.name}</p>
              <p className="text-blue-400 text-sm">{profileData.role}</p>
            </div>
          </div>
        </div>

        {/* Bio & Highlights */}
        <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
          <p className="text-slate-300 leading-relaxed text-base sm:text-lg font-light">
            {profileData.longBio}
          </p>

          {/* Stats grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
            {profileData.stats.map((stat, i) => (
              <div key={i} className="glass-card p-4 rounded-xl text-center">
                <span className="text-2xl sm:text-3xl font-extrabold text-white block mb-1">
                  {stat.value}
                </span>
                <span className="text-xs text-slate-400 font-medium leading-tight block">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

          {/* Key traits */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white/[0.03] border border-white/5">
              <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400">
                <Code2 size={20} />
              </div>
              <div>
                <h4 className="text-white font-semibold text-sm">Clean &amp; Maintainable</h4>
                <p className="text-slate-400 text-xs">Arsitektur kode terstruktur &amp; standar industri</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white/[0.03] border border-white/5">
              <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400">
                <Sparkles size={20} />
              </div>
              <div>
                <h4 className="text-white font-semibold text-sm">Interactive UI/UX</h4>
                <p className="text-slate-400 text-xs">Desain estetis dengan sentuhan animasi halus</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
