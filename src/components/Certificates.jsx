import React, { useState } from 'react';
import { Award, Eye, X } from 'lucide-react';
import { certificatesData } from '../data/portfolioData';

export default function Certificates() {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section className="relative py-20 px-6 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <span className="text-xs uppercase tracking-widest text-blue-400 font-semibold mb-2 block">
          SERTIFIKASI &amp; PRESTASI
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
          Penghargaan &amp; Sertifikat Kompetensi
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {certificatesData.map((cert) => (
          <div
            key={cert.id}
            onClick={() => setSelectedCert(cert)}
            className="glass-card rounded-2xl overflow-hidden cursor-pointer group transition-all duration-300 hover:border-blue-500/40 hover:-translate-y-1"
          >
            <div className="relative h-44 overflow-hidden bg-slate-950">
              <img
                src={cert.img}
                alt={cert.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300 backdrop-blur-[2px]">
                <div className="p-3 rounded-full bg-blue-600/90 text-white shadow-lg">
                  <Eye size={20} />
                </div>
              </div>
            </div>
            <div className="p-4">
              <h4 className="text-sm font-semibold text-white truncate">{cert.title}</h4>
              <p className="text-xs text-blue-400 mt-1">{cert.issuer}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Lightbox */}
      {selectedCert && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in"
          onClick={() => setSelectedCert(null)}
        >
          <div 
            className="relative max-w-3xl w-full bg-slate-900 border border-white/10 rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-4 flex items-center justify-between border-b border-white/10">
              <div>
                <h3 className="text-white font-bold text-base">{selectedCert.title}</h3>
                <p className="text-xs text-blue-400">{selectedCert.issuer}</p>
              </div>
              <button 
                onClick={() => setSelectedCert(null)}
                className="p-1.5 rounded-full hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
              >
                <X size={20} />
              </button>
            </div>
            <div className="p-4 bg-slate-950 flex items-center justify-center max-h-[75vh] overflow-auto">
              <img 
                src={selectedCert.img} 
                alt={selectedCert.title} 
                className="max-w-full max-h-[70vh] object-contain rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
