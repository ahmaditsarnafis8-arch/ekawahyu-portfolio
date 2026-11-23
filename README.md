# Eka Wahyu Portfolio - Re-engineered Edition

Website Portofolio interaktif dan modern yang di-reverse engineer dari [ekawahyu-portofolio.vercel.app](https://ekawahyu-portofolio.vercel.app/). Dibuat ulang dalam bentuk **Clean Code** (bebas dari obfuscation) menggunakan **React**, **Vite**, dan **Tailwind CSS**.

---

## ✨ Fitur Utama

- **Interactive Multi-layer Parallax:** Efek grafis kedalaman berbasis SVG layer (`/img10.svg`, `/img20.svg`, `/img30.svg`) yang responsif terhadap scroll.
- **Floating Glassmorphism Navbar:** Menu navigasi melayang modern dengan scroll-spy detection.
- **About Me Section:** Menampilkan profil, statistik pencapaian, dan foto kegiatan.
- **Categorized Skills:** Tampilan skill badges (Frontend, Backend, Tools) dengan aksen glow futuristik.
- **Projects Showcase:** Kartu portofolio proyek terkurasi (HOLOGY 9.0, RujukCepat, RisetIn, Luma APPS, OceanCart, MEETRA).
- **Certificates Lightbox Modal:** Galeri sertifikat interaktif dengan preview modal layar penuh.
- **Working Contact Form:** Terintegrasi dengan FormSubmit API dan SweetAlert2 notifikasi interaktif.
- **Fully Responsive & Dark Aesthetic:** Tema gelap elegan (`#050510`) yang optimal di ponsel, tablet, maupun desktop.

---

## 🛠️ Tech Stack

- **UI Framework:** [React 18](https://react.dev/)
- **Build Tool:** [Vite](https://vitejs.dev/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Alerts:** [SweetAlert2](https://sweetalert2.github.io/)

---

## 🚀 Menjalankan Proyek Secara Lokal

1. **Clone repository ini:**
   ```bash
   git clone https://github.com/ahmaditsarnafis8-arch/ekawahyu-portfolio.git
   cd ekawahyu-portfolio
   ```

2. **Install dependensi:**
   ```bash
   npm install
   ```

3. **Jalankan development server:**
   ```bash
   npm run dev
   ```

4. **Build untuk produksi:**
   ```bash
   npm run build
   ```

---

## 📂 Struktur Direktori

```text
portfolio-project/
├── public/                 # Static assets (images, SVGs, certificates)
│   ├── uploads/            # Project & Certificate images
│   ├── img10.svg           # Parallax Layer 1
│   ├── img20.svg           # Parallax Layer 2
│   └── img30.svg           # Parallax Layer 3
├── src/
│   ├── components/         # Reusable React components
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Certificates.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── data/               # Project data & profile settings
│   │   └── portfolioData.js
│   ├── App.jsx             # Main application layout
│   ├── index.css           # Global Tailwind & glassmorphism styles
│   └── main.jsx            # Entry point
├── index.html
├── package.json
├── tailwind.config.js
└── vite.config.js
```

---

## 👤 Author & Attribution
- Original site: [ekawahyu-portofolio.vercel.app](https://ekawahyu-portofolio.vercel.app/)
- Re-engineered & packaged for [ahmaditsarnafis8-arch](https://github.com/ahmaditsarnafis8-arch)
