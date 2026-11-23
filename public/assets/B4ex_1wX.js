const __vite__mapDeps = (i, m = __vite__mapDeps, d = m.f || (m.f = ["assets/BYiQBtNC.js", "assets/b9a27LkY.js", "assets/NGVnNSsi.js", "assets/DvB2Xm2x.css", "assets/DqEEpkFk.js", "assets/CbHExhx7.js", "assets/C9OiCWmG.js", "assets/Hb_jIbwg.js", "assets/CyKCnRV3.js", "assets/KBaaddEt.js", "assets/BsW4WY6-.js", "assets/D0EbkKc2.js", "assets/GAiyaFpy.js", "assets/JNRUI2XI.js", "assets/CPhTRUVQ.js", "assets/Bh7H9k9c.js", "assets/C1ldcDGK.js", "assets/CqrAZGWK.js"])) => i.map((i2) => d[i2]), _0x41c26a = null;
import { r as _0x5c36e6, a as _0x370385, j as _0x93b77c, d as _0x15af74 } from "./b9a27LkY.js";
import { H as _0x1950c0, U as _0x76db04, B as _0x127653, M as _0x574c48, c as _0x29fdf8, _ as _0x2c9fef, A as _0x59fa74, b as _0x263f0d } from "./NGVnNSsi.js";
import { N as _0x5390a0, B as _0x124018, R as _0x47978f, a as _0x3f8aef } from "./Hb_jIbwg.js";
import { m as _0x35c0b8, A as _0x2e7075 } from "./C9OiCWmG.js";
import { t as _0x50933, c as _0x5755c0 } from "./CyKCnRV3.js";
function g(..._0x4a2170) {
  return _0x4a2170.filter(Boolean).join(" ");
}
(function() {
  const _0x15168d = document.createElement("link").relList;
  if (!(_0x15168d && _0x15168d.supports && _0x15168d.supports("modulepreload"))) {
    for (const _0x4b802b of document.querySelectorAll('link[rel="modulepreload"]')) _0x23f6ca(_0x4b802b);
    new MutationObserver((_0xc257fb) => {
      for (const _0x1c5dd3 of _0xc257fb) if (_0x1c5dd3.type === "childList")
        for (const _0x4b39eb of _0x1c5dd3.addedNodes) _0x4b39eb.tagName === "LINK" && _0x4b39eb.rel === "modulepreload" && _0x23f6ca(_0x4b39eb);
    }).observe(document, { childList: !0, subtree: !0 });
  }
  function _0x23f6ca(_0x109592) {
    if (_0x109592.ep) return;
    _0x109592.ep = !0;
    const _0x545adc = (function(_0x3acde5) {
      const _0x4aa1db = {};
      return _0x3acde5.integrity && (_0x4aa1db.integrity = _0x3acde5.integrity), _0x3acde5.referrerPolicy && (_0x4aa1db.referrerPolicy = _0x3acde5.referrerPolicy), _0x3acde5.crossOrigin === "use-credentials" ? _0x4aa1db.credentials = "include" : _0x3acde5.crossOrigin === "anonymous" ? _0x4aa1db.credentials = "omit" : _0x4aa1db.credentials = "same-origin", _0x4aa1db;
    })(_0x109592);
    fetch(_0x109592.href, _0x545adc);
  }
})();
const y = [{ name: "Home", url: "#Home", icon: _0x1950c0 }, { name: "About", url: "#About", icon: _0x76db04 }, { name: "Portfolio", url: "#Portofolio", icon: _0x127653 }, { name: "Contact", url: "#Contact", icon: _0x574c48 }];
function v({ defaultActive: _0x5a5432 = "Home" }) {
  const [_0x50875a, _0x3a595d] = _0x5c36e6.useState(!1), [_0x2c5aa0, _0x30b803] = _0x5c36e6.useState(null), [_0x4ad73f, _0x3c56f9] = _0x5c36e6.useState(_0x5a5432), [_0x223033, _0x76c26a] = _0x5c36e6.useState(!1), _0x2b1606 = _0x370385.useRef(!1);
  return _0x5c36e6.useEffect(() => {
    _0x3a595d(!0);
  }, []), _0x5c36e6.useEffect(() => {
    let _0x387ce5 = 0;
    const _0x499153 = () => {
      _0x387ce5 = 0;
      const _0x3a0d62 = document.getElementById("Portofolio-Gallery"), _0x2fdca3 = document.getElementById("Portofolio");
      let _0x2ec4ab = !1;
      if (_0x3a0d62) {
        const _0x208577 = _0x3a0d62.getBoundingClientRect();
        _0x2ec4ab = (_0x2fdca3 ? parseFloat(_0x2fdca3.dataset.gpProgress || "0") : 0) >= 0.72 || _0x208577.top <= 120;
      }
      if (_0x76c26a((_0x43875a) => _0x43875a !== _0x2ec4ab ? _0x2ec4ab : _0x43875a), _0x2b1606.current) return;
      const _0x21dd0e = 0.38 * window.innerHeight;
      let _0x42474c = y[0].name;
      for (const _0x5f2fd8 of y) {
        const _0x3ba7e4 = document.querySelector(_0x5f2fd8.url);
        _0x3ba7e4 && _0x3ba7e4.getBoundingClientRect().top <= _0x21dd0e && (_0x42474c = _0x5f2fd8.name);
      }
      _0x3c56f9((_0x56bdee) => _0x56bdee !== _0x42474c ? _0x42474c : _0x56bdee);
    }, _0x59b17 = () => {
      _0x387ce5 || (_0x387ce5 = requestAnimationFrame(_0x499153));
    };
    return window.addEventListener("scroll", _0x59b17, { passive: !0 }), window.addEventListener("resize", _0x59b17, { passive: !0 }), _0x499153(), () => {
      _0x387ce5 && cancelAnimationFrame(_0x387ce5), window.removeEventListener("scroll", _0x59b17), window.removeEventListener("resize", _0x59b17);
    };
  }, []), _0x50875a ? _0x93b77c.jsx("div", { className: "fixed top-3 md:top-5 left-0 right-0 z-[9999] pointer-events-none", children: _0x93b77c.jsx("div", { className: "flex justify-center pt-7 md:pt-6 px-3", children: _0x93b77c.jsx(_0x35c0b8.div, { className: g("pointer-events-auto flex items-center gap-1 sm:gap-2.5 py-1.5 sm:py-2 px-2 sm:px-2.5 rounded-full relative backdrop-blur-[1.5px] transition-[background-color,box-shadow] duration-300", _0x223033 ? "bg-white/70 shadow-[inset_0_1px_0_rgba(255,255,255,0.95),0_12px_28px_rgba(15,23,42,0.10),0_2px_8px_rgba(15,23,42,0.05)]" : "bg-slate-950/25 shadow-[inset_0_1px_0_rgba(255,255,255,0.20),0_8px_24px_rgba(0,0,0,0.22)]"), initial: { y: -20, opacity: 0 }, animate: { y: 0, opacity: 1 }, transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] }, children: y.map((_0x33de74) => {
    const _0x10c35f = _0x4ad73f === _0x33de74.name, _0x114277 = _0x2c5aa0 === _0x33de74.name;
    return _0x93b77c.jsxs("a", { href: _0x33de74.url, onClick: (_0x5cd685) => ((_0x56ec8d, _0x4bb7ee, _0x2ace1f) => {
      _0x56ec8d.preventDefault();
      const _0x1530a8 = document.querySelector(_0x4bb7ee);
      if (_0x1530a8) {
        _0x2b1606.current = !0, _0x3c56f9(_0x2ace1f);
        const _0x3de264 = _0x4bb7ee === "#Portofolio" || _0x4bb7ee === "#Home" ? 0 : 60, _0x6fbd91 = Math.max(0, _0x1530a8.getBoundingClientRect().top + window.scrollY - _0x3de264);
        window.lenis ? window.lenis.scrollTo(_0x6fbd91, { duration: 0.9 }) : window.scrollTo({ top: _0x6fbd91, behavior: "smooth" }), setTimeout(() => {
          _0x2b1606.current = !1;
        }, 1e3);
      }
    })(_0x5cd685, _0x33de74.url, _0x33de74.name), onMouseEnter: () => _0x30b803(_0x33de74.name), onMouseLeave: () => _0x30b803(null), className: g("relative cursor-pointer text-xs md:text-sm font-semibold px-3 py-1.5 sm:px-4 sm:py-2 md:px-6 md:py-2.5 rounded-full transition-colors duration-200 whitespace-nowrap", _0x10c35f ? "text-white" : _0x223033 ? "text-zinc-800 hover:text-zinc-950" : "text-white/95 hover:text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.45)]"), children: [_0x10c35f && _0x93b77c.jsx(_0x35c0b8.div, { layoutId: "active-nav-pill", className: "absolute inset-0 rounded-full -z-10 bg-[#2c67ed] shadow-[0_6px_16px_rgba(44,103,237,0.32)]", transition: { type: "spring", stiffness: 320, damping: 32 } }), _0x93b77c.jsx("span", { className: "relative z-10", children: _0x33de74.name }), _0x93b77c.jsx(_0x2e7075, { children: _0x114277 && !_0x10c35f && _0x93b77c.jsx(_0x35c0b8.div, { initial: { opacity: 0, scale: 0.95 }, animate: { opacity: 1, scale: 1 }, exit: { opacity: 0, scale: 0.95 }, className: g("absolute inset-0 rounded-full -z-10", _0x223033 ? "bg-zinc-900/[0.06]" : "bg-white/15") }) }), _0x10c35f && _0x93b77c.jsx(_0x35c0b8.div, { layoutId: "anime-mascot", className: "absolute -top-10 sm:-top-11 md:-top-12 left-1/2 -translate-x-1/2 pointer-events-none", style: { filter: "drop-shadow(0 3px 6px rgba(15, 23, 42, 0.18))" }, initial: !1, transition: { type: "spring", stiffness: 300, damping: 30 }, children: _0x93b77c.jsxs("div", { className: "relative w-12 h-12 scale-[0.82] sm:scale-90 md:scale-100 origin-bottom", children: [_0x93b77c.jsxs(_0x35c0b8.div, { className: "absolute w-10 h-10 bg-white rounded-full left-1/2 -translate-x-1/2", animate: _0x2c5aa0 ? { scale: [1, 1.1, 1], rotate: [0, -5, 5, 0], transition: { duration: 0.5, ease: "easeInOut" } } : { y: [0, -3, 0], transition: { duration: 2, repeat: 1 / 0, ease: "easeInOut" } }, children: [_0x93b77c.jsx(_0x35c0b8.div, { className: "absolute w-2 h-2 bg-black rounded-full", animate: _0x2c5aa0 ? { scaleY: [1, 0.2, 1], transition: { duration: 0.2, times: [0, 0.5, 1] } } : {}, style: { left: "25%", top: "40%" } }), _0x93b77c.jsx(_0x35c0b8.div, { className: "absolute w-2 h-2 bg-black rounded-full", animate: _0x2c5aa0 ? { scaleY: [1, 0.2, 1], transition: { duration: 0.2, times: [0, 0.5, 1] } } : {}, style: { right: "25%", top: "40%" } }), _0x93b77c.jsx(_0x35c0b8.div, { className: "absolute w-2 h-1.5 bg-pink-300 rounded-full", animate: { opacity: _0x2c5aa0 ? 0.8 : 0.6 }, style: { left: "15%", top: "55%" } }), _0x93b77c.jsx(_0x35c0b8.div, { className: "absolute w-2 h-1.5 bg-pink-300 rounded-full", animate: { opacity: _0x2c5aa0 ? 0.8 : 0.6 }, style: { right: "15%", top: "55%" } }), _0x93b77c.jsx(_0x35c0b8.div, { className: "absolute w-4 h-2 border-b-2 border-black rounded-full", animate: _0x2c5aa0 ? { scaleY: 1.5, y: -1 } : { scaleY: 1, y: 0 }, style: { left: "30%", top: "60%" } })] }), _0x93b77c.jsx(_0x35c0b8.div, { className: "absolute -bottom-1 left-1/2 w-4 h-4 -translate-x-1/2", animate: _0x2c5aa0 ? { y: [0, -4, 0], transition: { duration: 0.3, repeat: 1 / 0, repeatType: "reverse" } } : { y: [0, 2, 0], transition: { duration: 1, repeat: 1 / 0, ease: "easeInOut", delay: 0.5 } }, children: _0x93b77c.jsx("div", { className: "w-full h-full bg-white rotate-45 transform origin-center" }) })] }) })] }, _0x33de74.name);
  }) }) }) }) : null;
}
function w(..._0x508f70) {
  return _0x50933(_0x5755c0(_0x508f70));
}
function E({ children: _0xc591a5, className: _0x14f77d, ..._0x1d9c2e }) {
  return _0x93b77c.jsx("div", { "data-slot": "cinematic-dark-background", className: w("fixed inset-0 z-0 overflow-hidden pointer-events-none bg-[#030712]", _0x14f77d), ..._0x1d9c2e, children: _0xc591a5 });
}
const N = ({ light: _0xb55fdb = !1 }) => {
  const _0x17a03 = (/* @__PURE__ */ new Date()).getFullYear();
  return _0x93b77c.jsx("footer", { className: _0xb55fdb ? "relative z-10 bg-transparent pt-2 pb-6" : "", children: _0x93b77c.jsxs("center", { children: [_0x93b77c.jsx("hr", { className: _0xb55fdb ? "mb-4 border-zinc-200 sm:mx-auto lg:mb-6 text-center max-w-6xl" : "my-3 border-gray-400 opacity-15 sm:mx-auto lg:my-6 text-center" }), _0x93b77c.jsxs("span", { className: _0xb55fdb ? "block text-sm pb-2 text-zinc-500 text-center" : "block text-sm pb-4 text-gray-500 text-center dark:text-gray-400", children: ["\xA9 ", _0x17a03, " ", _0x93b77c.jsx("a", { href: "https://ekawahyu-portofolio-eka-wahyu-s-projects.vercel.app", className: _0xb55fdb ? "font-medium text-zinc-700 hover:text-[#2c67ed] hover:underline transition-colors" : "hover:underline", children: "Eka Wahyu\u2122" }), ". All Rights Reserved."] })] }) });
}, z = _0x29fdf8("https://kroqyrpzfahwcasyaotm.supabase.co", "sb_publishable_ZPlu_Itwz5ls8LZMGeE6qA_GwGi5d55");
function k({ children: _0x162c24 }) {
  const [_0x26ec81, _0xbb21bc] = _0x5c36e6.useState(null);
  return _0x5c36e6.useEffect(() => {
    (async () => {
      const { data: { user: _0x276a4c } } = await z.auth.getUser();
      if (!_0x276a4c) return _0xbb21bc(!1);
      const { data: _0xea98ac } = await z.from("profiles").select("role").eq("id", _0x276a4c.id).single();
      _0xbb21bc(_0xea98ac?.role === "admin");
    })();
  }, []), _0x26ec81 === null ? null : _0x26ec81 ? _0x162c24 : _0x93b77c.jsx(_0x5390a0, { to: "/login" });
}
const A = () => _0x2c9fef(() => import("./BYiQBtNC.js"), __vite__mapDeps([0, 1, 2, 3])), I = () => _0x2c9fef(() => import("./DqEEpkFk.js"), __vite__mapDeps([4, 1, 2, 3, 5, 6, 7, 8])), L = () => _0x2c9fef(() => import("./KBaaddEt.js"), __vite__mapDeps([9, 1, 7, 10, 2, 3, 5, 6, 8])), P = () => _0x2c9fef(() => import("./D0EbkKc2.js"), __vite__mapDeps([11, 1, 6, 2, 3, 7, 8])), R = () => _0x2c9fef(() => import("./GAiyaFpy.js"), __vite__mapDeps([12, 1, 2, 3, 6, 7, 8])), O = _0x5c36e6.lazy(A), S = _0x5c36e6.lazy(I), D = _0x5c36e6.lazy(L), T = _0x5c36e6.lazy(P), V = _0x5c36e6.lazy(R), B = _0x5c36e6.lazy(() => _0x2c9fef(() => import("./JNRUI2XI.js"), __vite__mapDeps([13, 1, 2, 3, 10, 7, 6, 8])));
_0x5c36e6.lazy(() => _0x2c9fef(() => import("./CPhTRUVQ.js"), __vite__mapDeps([14, 1, 6, 2, 3])));
const C = _0x5c36e6.lazy(() => _0x2c9fef(() => import("./Bh7H9k9c.js"), __vite__mapDeps([15, 1, 2, 3]))), q = _0x5c36e6.lazy(() => _0x2c9fef(() => import("./C1ldcDGK.js"), __vite__mapDeps([16, 1, 7, 2, 3, 6, 8]))), F = _0x5c36e6.lazy(() => _0x2c9fef(() => import("./CqrAZGWK.js"), __vite__mapDeps([17, 1, 7, 2, 3, 6, 8])));
class M extends _0x370385.Component {
  constructor(_0x2fd50f) {
    super(_0x2fd50f), this.state = { hasError: !1 };
  }
  static getDerivedStateFromError() {
    return { hasError: !0 };
  }
  componentDidCatch(_0x9f397c, _0x143aff) {
  }
  render() {
    return this.state.hasError ? null : this.props.children;
  }
}
const H = () => _0x93b77c.jsxs(_0x93b77c.Fragment, { children: [_0x93b77c.jsx(v, {}), _0x93b77c.jsxs(_0x5c36e6.Suspense, { fallback: _0x93b77c.jsx("div", { className: "h-20" }), children: [_0x93b77c.jsx(O, {}), _0x93b77c.jsx(S, {}), _0x93b77c.jsx(M, { children: _0x93b77c.jsxs(D, { children: [_0x93b77c.jsx(T, {}), _0x93b77c.jsx(V, {}), _0x93b77c.jsx(N, { light: !0 })] }) })] })] }), Y = () => _0x93b77c.jsxs(_0x93b77c.Fragment, { children: [_0x93b77c.jsx(_0x5c36e6.Suspense, { fallback: _0x93b77c.jsx("div", { className: "min-h-screen" }), children: _0x93b77c.jsx(B, {}) }), _0x93b77c.jsx(N, {})] });
function G() {
  return _0x5c36e6.useEffect(() => {
    _0x59fa74.init({ once: !0, offset: 10, duration: 800, mirror: !1 }), A(), I(), L(), P(), R();
  }, []), _0x93b77c.jsxs(_0x263f0d, { children: [_0x93b77c.jsx("div", { className: "pointer-events-none", children: _0x93b77c.jsx(E, {}) }), _0x93b77c.jsx(_0x124018, { children: _0x93b77c.jsxs(_0x47978f, { children: [_0x93b77c.jsx(_0x3f8aef, { path: "/", element: _0x93b77c.jsx(H, {}) }), _0x93b77c.jsx(_0x3f8aef, { path: "/project/:slug", element: _0x93b77c.jsx(Y, {}) }), _0x93b77c.jsx(_0x3f8aef, { path: "/login", element: _0x93b77c.jsx(_0x5c36e6.Suspense, { fallback: _0x93b77c.jsx("div", { className: "min-h-screen bg-[#030712]" }), children: _0x93b77c.jsx(q, {}) }) }), _0x93b77c.jsx(_0x3f8aef, { path: "/dashboard/*", element: _0x93b77c.jsx(k, { children: _0x93b77c.jsx(_0x5c36e6.Suspense, { fallback: _0x93b77c.jsx("div", { className: "min-h-screen bg-[#030712]" }), children: _0x93b77c.jsx(F, {}) }) }) }), _0x93b77c.jsx(_0x3f8aef, { path: "*", element: _0x93b77c.jsx(_0x5c36e6.Suspense, { fallback: null, children: _0x93b77c.jsx(C, {}) }) })] }) })] });
}
_0x15af74.createRoot(document.getElementById("root")).render(_0x93b77c.jsx(_0x370385.StrictMode, { children: _0x93b77c.jsx(G, {}) }));
export {
  w as c,
  z as s
};
