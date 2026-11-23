import React from 'react';
import { ExternalLink, FolderGit2 } from 'lucide-react';
import { projectsData } from '../data/portfolioData';

export default function Projects() {
  return (
    <section id="portfolio" className="relative py-24 px-6 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <span className="text-xs uppercase tracking-widest text-blue-400 font-semibold mb-2 block">
          SHOWCASE KARYA
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
          Portofolio Proyek Pilihan
        </h2>
        <p className="text-slate-400 text-sm sm:text-base mt-3 max-w-xl mx-auto">
          Berbagai proyek nyata mulai dari platform nasional, aplikasi kesehatan, hingga sistem berbasis kecerdasan buatan.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.map((project) => (
          <div 
            key={project.id}
            className="glass-card rounded-2xl overflow-hidden flex flex-col justify-between group transition-all duration-300 hover:-translate-y-1.5"
          >
            <div>
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden bg-slate-950">
                <img 
                  src={project.img} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    e.target.src = '/default-avatar.jpg';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c1e] via-transparent to-transparent" />
              </div>

              {/* Project Body */}
              <div className="p-6">
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {project.tags.map((tag, tIdx) => (
                    <span 
                      key={tIdx} 
                      className="px-2 py-0.5 rounded text-[11px] font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>

                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed line-clamp-3 font-light">
                  {project.description}
                </p>
              </div>
            </div>

            {/* Project Footer Links */}
            <div className="p-6 pt-0 flex items-center justify-between mt-auto">
              {project.link ? (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-blue-400 hover:text-blue-300 hover:underline transition-colors"
                >
                  <span>Kunjungi Situs</span>
                  <ExternalLink size={14} />
                </a>
              ) : (
                <span className="text-xs text-slate-500 italic">Internal Project / In Development</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
