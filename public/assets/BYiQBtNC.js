const _0x48c841 = null;
import { r as _0x3e6ae2, j as _0x5d0c52 } from "./b9a27LkY.js";
import { g as _0x217394, S as _0x340d85, L as _0x26d55e, d as _0x104a56 } from "./NGVnNSsi.js";
const o = _0x3e6ae2.memo(() => {
  const _0x4caeaf = _0x3e6ae2.useRef(null), _0x254795 = _0x3e6ae2.useRef(null), _0x553eac = _0x3e6ae2.useRef(null), _0x360049 = _0x3e6ae2.useRef(null), _0x31cb7a = _0x3e6ae2.useRef(null), _0x55db34 = _0x3e6ae2.useRef(null), _0x1f7495 = _0x3e6ae2.useRef(null);
  return _0x3e6ae2.useEffect(() => {
    _0x217394.registerPlugin(_0x340d85);
    const _0x179127 = new _0x26d55e({ duration: 1.1, easing: (_0x8455b5) => Math.min(1, 1.001 - Math.pow(2, -10 * _0x8455b5)), smoothWheel: !0, prevent: (_0x2dea73) => {
      var _0x20da49, _0x368dd, _0x35b7f5, _0x59c999;
      return ((_0x20da49 = _0x2dea73?.hasAttribute) == null ? void 0 : _0x20da49.call(_0x2dea73, "data-lenis-prevent")) || !!((_0x368dd = _0x2dea73?.closest) != null && _0x368dd.call(_0x2dea73, "[data-lenis-prevent]")) || ((_0x35b7f5 = _0x2dea73?.classList) == null ? void 0 : _0x35b7f5.contains("overflow-y-auto")) || !!((_0x59c999 = _0x2dea73?.closest) != null && _0x59c999.call(_0x2dea73, ".overflow-y-auto"));
    } });
    window.lenis = _0x179127, _0x179127.on("scroll", _0x340d85.update);
    const _0x4f4640 = (_0x5b53c0) => {
      _0x179127.raf(1e3 * _0x5b53c0);
    };
    _0x217394.ticker.add(_0x4f4640), _0x217394.ticker.lagSmoothing(0);
    const _0x5394d0 = _0x217394.matchMedia(), _0x5471d5 = _0x217394.context(() => {
      _0x5394d0.add({ isDesktop: "(min-width: 768px)", isMobile: "(max-width: 767px)" }, (_0x5515dd) => {
        const { isMobile: _0x3905ee } = _0x5515dd.conditions, _0x3e5fb9 = _0x217394.timeline({ scrollTrigger: { trigger: _0x4caeaf.current, start: "top top", end: "bottom bottom", scrub: 1 } });
        _0x3e5fb9.to(_0x1f7495.current, { scale: _0x3905ee ? 3.8 : 4.6, opacity: 0, ease: "power2.inOut", duration: 0.22 }, 0), _0x3e5fb9.set(_0x1f7495.current, { display: "none" }, 0.22), _0x3e5fb9.fromTo(_0x31cb7a.current, { opacity: 0, scale: 0.94, y: _0x3905ee ? 16 : 25 }, { opacity: 1, scale: 1, y: 0, ease: "power2.out", duration: 0.12 }, 0.22), _0x3e5fb9.to(_0x553eac.current, { yPercent: _0x3905ee ? -10 : -15, ease: "none", duration: 0.78 }, 0.22), _0x3e5fb9.to(_0x360049.current, { yPercent: _0x3905ee ? -22 : -32, scale: 1.06, ease: "none", duration: 0.78 }, 0.22), _0x3e5fb9.to(_0x31cb7a.current, { yPercent: _0x3905ee ? -24 : -50, ease: "none", duration: 0.78 }, 0.22), _0x3e5fb9.to(_0x55db34.current, { yPercent: _0x3905ee ? -45 : -60, scale: 1.04, ease: "none", duration: 0.78 }, 0.22), _0x3e5fb9.to(_0x31cb7a.current, { opacity: 0, ease: "power1.in", duration: 0.12 }, 0.82);
      }), _0x340d85.create({ trigger: _0x4caeaf.current, start: "top bottom", end: "bottom top", onToggle: (_0x4aa5f0) => {
        _0x254795.current && (_0x254795.current.style.visibility = _0x4aa5f0.isActive ? "visible" : "hidden");
      } });
    }, _0x4caeaf);
    return () => {
      _0x5394d0.revert(), _0x5471d5.revert(), _0x340d85.getAll().forEach((_0x26f888) => _0x26f888.kill()), _0x217394.ticker.remove(_0x4f4640), _0x179127.destroy(), window.lenis = null;
    };
  }, []), _0x5d0c52.jsxs(_0x5d0c52.Fragment, { children: [_0x5d0c52.jsxs(_0x104a56, { children: [_0x5d0c52.jsx("title", { children: "Eka Wahyu Maulidan | Portofolio" }), _0x5d0c52.jsx("meta", { name: "description", content: "Website resmi Eka Wahyu Maulidan. Aku berfokus pada pengembangan teknologi yang tidak hanya fungsional, tetapi juga menghadirkan pengalaman digital yang menarik dan berdampak." }), _0x5d0c52.jsx("meta", { name: "robots", content: "index, follow" }), _0x5d0c52.jsx("link", { rel: "canonical", href: "https://ekawahyu-portofolio-eka-wahyu-s-projects.vercel.app" }), _0x5d0c52.jsx("meta", { property: "og:title", content: "Eka Wahyu Maulidan | Portofolio" }), _0x5d0c52.jsx("meta", { property: "og:description", content: "Website resmi dan portofolio Eka Wahyu Maulidan." }), _0x5d0c52.jsx("meta", { property: "og:url", content: "https://ekawahyu-portofolio-eka-wahyu-s-projects.vercel.app" }), _0x5d0c52.jsx("meta", { property: "og:type", content: "website" }), _0x5d0c52.jsx("script", { type: "application/ld+json", children: `
          {
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Eka Wahyu Maulidan",
            "url": "https://ekawahyu-portofolio-eka-wahyu-s-projects.vercel.app",
            "sameAs": [
              "https://github.com/ekawahyu-project",
              "https://www.linkedin.com/in/eka-wahyu-maulidan-484021315",
              "https://www.instagram.com/eka.wahyu.m"
            ]
          }
        ` })] }), _0x5d0c52.jsx("section", { ref: _0x4caeaf, className: "parallax relative w-full h-[180svh] md:h-[225vh] bg-[#030712]", id: "Home", children: _0x5d0c52.jsx("div", { ref: _0x254795, className: "parallax__visuals sticky top-0 w-full h-[100svh] overflow-clip select-none", children: _0x5d0c52.jsxs("div", { "data-parallax-layers": !0, className: "parallax__layers absolute inset-0 w-full h-full overflow-clip", children: [_0x5d0c52.jsx("div", { ref: _0x553eac, "data-parallax-layer": "1", className: "absolute inset-0 w-full h-full will-change-transform z-[0]", style: { transformOrigin: "center bottom" }, children: _0x5d0c52.jsx("img", { src: "/img10.svg", alt: "Sky and Moon", className: "w-full h-full object-cover", style: { objectPosition: "center 22%" }, loading: "eager", decoding: "async" }) }), _0x5d0c52.jsxs("div", { ref: _0x360049, "data-parallax-layer": "2", className: "absolute inset-0 w-full h-full will-change-transform z-[10]", style: { transformOrigin: "center bottom" }, children: [_0x5d0c52.jsxs("div", { className: "relative w-full h-full overflow-hidden", children: [_0x5d0c52.jsx("img", { src: "/img20.svg", alt: "Mountain Peak", className: "w-full h-full object-cover max-md:scale-[1.12] max-md:origin-[center_26%]", style: { objectPosition: "center 52%" }, loading: "eager", decoding: "async" }), _0x5d0c52.jsx("div", { className: "absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#030712] to-transparent pointer-events-none" })] }), _0x5d0c52.jsx("div", { className: "absolute inset-x-0 top-full h-[40vh] bg-[#030712] pointer-events-none" })] }), _0x5d0c52.jsx("div", { ref: _0x31cb7a, "data-parallax-layer": "3", className: "parallax__layer-title absolute inset-0 flex flex-col items-center justify-center z-[20] pointer-events-none px-4 select-none opacity-0 will-change-[transform,opacity]", style: { transformOrigin: "center center" }, children: _0x5d0c52.jsx("div", { className: "w-full max-w-5xl mx-auto text-center -translate-y-4 sm:-translate-y-10 md:-translate-y-12", children: _0x5d0c52.jsxs("h1", { className: "parallax__title text-[clamp(1.6rem,7.2vw,2.75rem)] sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tight text-white uppercase leading-[1.08] select-none", style: { fontFamily: "var(--font-display)" }, children: [_0x5d0c52.jsx("span", { className: "block whitespace-nowrap", children: "WELCOME TO" }), _0x5d0c52.jsx("span", { className: "block mt-1 whitespace-nowrap", children: "KELOMPOK 3B" })] }) }) }), _0x5d0c52.jsxs("div", { ref: _0x55db34, "data-parallax-layer": "4", className: "absolute inset-0 w-full h-full will-change-transform z-[30]", style: { transformOrigin: "center bottom" }, children: [_0x5d0c52.jsxs("div", { className: "relative w-full h-full overflow-hidden", children: [_0x5d0c52.jsx("img", { src: "/img30.svg", alt: "Eka Wahyu standing on ground ridge", className: "w-full h-full object-cover max-md:scale-[1.22] max-md:origin-[center_18%]", style: { objectPosition: "center 32%" }, loading: "eager", decoding: "async" }), _0x5d0c52.jsx("div", { className: "absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#030712] to-transparent pointer-events-none" })] }), _0x5d0c52.jsx("div", { className: "absolute inset-x-0 top-full h-[68vh] bg-[#030712] pointer-events-none" })] }), _0x5d0c52.jsx("div", { ref: _0x1f7495, className: "absolute inset-0 w-full h-full will-change-transform z-[40] pointer-events-none", style: { transformOrigin: "center 42%" }, children: _0x5d0c52.jsx("img", { src: "/hutan.svg", alt: "Forest Canopy Frame", className: "w-full h-full object-cover object-bottom", loading: "eager" }) }), _0x5d0c52.jsx("div", { className: "parallax__fade absolute inset-x-0 bottom-0 h-28 md:h-44 bg-gradient-to-t from-[#030712] via-[#030712]/90 to-transparent pointer-events-none z-[35]" })] }) }) })] });
});
export {
  o as default
};
