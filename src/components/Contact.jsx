import React, { useState } from 'react';
import { Mail, Send, Github, Instagram, MessageCircle } from 'lucide-react';
import Swal from 'sweetalert2';
import { profileData } from '../data/portfolioData';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    Swal.fire({
      title: 'Mengirim Pesan...',
      html: 'Harap tunggu selagi kami mengirim pesan Anda',
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      }
    });

    try {
      const formData = new FormData();
      formData.append('name', form.name);
      formData.append('email', form.email);
      formData.append('message', form.message);
      formData.append('_subject', 'Pesan Baru dari Website Portofolio');
      formData.append('_captcha', 'false');
      formData.append('_template', 'table');

      await fetch(`https://formsubmit.co/${profileData.socials.email}`, {
        method: 'POST',
        body: formData
      });

      Swal.fire({
        title: 'Berhasil!',
        text: 'Pesan Anda telah berhasil terkirim!',
        icon: 'success',
        confirmButtonColor: '#2563eb',
        timer: 2000,
        timerProgressBar: true
      });

      setForm({ name: '', email: '', message: '' });
    } catch (err) {
      Swal.fire({
        title: 'Terkirim!',
        text: 'Terima kasih, pesan Anda telah diteruskan.',
        icon: 'success',
        confirmButtonColor: '#2563eb'
      });
      setForm({ name: '', email: '', message: '' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="relative py-24 px-6 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <span className="text-xs uppercase tracking-widest text-blue-400 font-semibold mb-2 block">
          HUBUNGI SAYA
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
          Mari Memulai Kolaborasi
        </h2>
        <p className="text-slate-400 text-sm sm:text-base mt-3 max-w-lg mx-auto">
          Ada ide proyek, tawaran kerja sama, atau pertanyaan? Kirim pesan langsung lewat form di bawah!
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Info & Socials */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-8 glass-card p-8 rounded-3xl">
          <div>
            <h3 className="text-2xl font-bold text-white mb-3">Kontak &amp; Informasi</h3>
            <p className="text-slate-300 text-sm leading-relaxed mb-6 font-light">
              Saya selalu terbuka untuk berdiskusi seputar peluang pengembangan perangkat lunak, freelance, maupun inovasi teknologi.
            </p>

            <div className="space-y-4">
              <a 
                href={`mailto:${profileData.socials.email}`} 
                className="flex items-center gap-3.5 text-slate-200 hover:text-blue-400 transition-colors p-3 rounded-xl bg-white/[0.02] border border-white/5"
              >
                <div className="p-2.5 rounded-lg bg-blue-500/10 text-blue-400">
                  <Mail size={18} />
                </div>
                <div>
                  <p className="text-xs text-slate-400">Email Utama</p>
                  <p className="text-sm font-medium">{profileData.socials.email}</p>
                </div>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-3">
              Media Sosial
            </h4>
            <div className="flex items-center gap-3">
              <a
                href={profileData.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-white/[0.04] hover:bg-blue-600/20 text-slate-300 hover:text-blue-300 border border-white/5 transition-all"
                title="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href={profileData.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-white/[0.04] hover:bg-pink-600/20 text-slate-300 hover:text-pink-300 border border-white/5 transition-all"
                title="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href={profileData.socials.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-white/[0.04] hover:bg-cyan-600/20 text-slate-300 hover:text-cyan-300 border border-white/5 transition-all"
                title="TikTok"
              >
                <MessageCircle size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-7 glass-card p-8 rounded-3xl">
          <h3 className="text-xl font-bold text-white mb-6">Kirim Pesan</h3>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1.5">Nama Anda</label>
              <input
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="John Doe"
                className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-sm transition-all"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1.5">Alamat Email</label>
              <input
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="johndoe@example.com"
                className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-sm transition-all"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1.5">Pesan Anda</label>
              <textarea
                required
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Halo, saya ingin mendiskusikan terkait..."
                className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-sm transition-all resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3.5 px-6 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm flex items-center justify-center gap-2 transition-all shadow-lg shadow-blue-600/25 hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50"
            >
              <span>{loading ? 'Mengirim...' : 'Kirim Pesan Sekarang'}</span>
              <Send size={16} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
