const _0x5d7a13 = null;
import { r as _0xdcb2ee, j as _0x59d592 } from "./b9a27LkY.js";
import { s } from "./B4ex_1wX.js";
import { f as _0x2955ff, c as _0x5a8e53, a as _0xed58fa, d as _0x14ac6d, e as _0x441e9c, m as _0x3f9459, u as _0x516dd2 } from "./C9OiCWmG.js";
import "./NGVnNSsi.js";
import "./Hb_jIbwg.js";
import "./CyKCnRV3.js";
const d = [{ src: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80", title: "" }, { src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80", title: "" }, { src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80", title: "" }, { src: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=800&q=80", title: "" }, { src: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80", title: "" }, { src: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80", title: "" }, { src: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80", title: "" }, { src: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=800&q=80", title: "" }, { src: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80", title: "" }], m = { stiffness: 60, damping: 25, mass: 0.5 };
function p({ card: _0x39f3d3, progress: _0x57a887, pointer: _0x21792c, total: _0x68c6fa, stage: _0x3be329 }) {
  const _0x2359a1 = _0x39f3d3.index / _0x68c6fa * 0.44999999999999996, _0x5813af = _0x14ac6d(_0x57a887, [_0x2359a1, _0x2359a1 + 0.55], [0, 1]), _0x544bf5 = _0x3be329.isMobile ? -1200 : -1700, _0x4d0237 = _0x3be329.isMobile ? 350 : 500, _0x52b5d2 = _0x14ac6d(_0x5813af, [0, 1], [_0x544bf5, _0x4d0237]), _0x232b40 = _0x14ac6d(_0x5813af, [0, 0.18, 0.82, 0.98], [0, 1, 1, 0]), _0x5bd718 = _0x14ac6d(_0x5813af, (_0x48fff6) => _0x48fff6 > 0.06 && _0x48fff6 < 0.86 ? "auto" : "none"), _0x41ce74 = _0x3be329.isMobile ? Math.max(135, Math.min(185, 0.38 * _0x3be329.width)) : Math.max(195, Math.min(285, 0.19 * _0x3be329.width)), _0x4eb315 = _0x39f3d3.angleCos * (_0x3be329.width * _0x39f3d3.radiusFactorX), _0x5506ef = _0x39f3d3.angleSin * (_0x3be329.height * _0x39f3d3.radiusFactorY), _0x268918 = _0x3be329.isMobile ? 20 : 45, _0x7b657a = _0x14ac6d([_0x52b5d2, _0x21792c.x, _0x21792c.y], ([_0x4b4711, _0x2d83ce, _0x3e9dd0]) => "translate3d(calc(-50% + ".concat(_0x4eb315 - _0x2d83ce * _0x268918, "px), calc(-50% + ").concat(_0x5506ef - _0x3e9dd0 * _0x268918, "px), ").concat(_0x4b4711, "px) rotateZ(").concat(_0x39f3d3.rotationZ, "deg)"));
  return _0x59d592.jsx(_0x3f9459.div, { style: { width: _0x41ce74, transform: _0x7b657a, opacity: _0x232b40, pointerEvents: _0x5bd718, zIndex: _0x39f3d3.index + 1 }, className: "absolute left-1/2 top-1/2 aspect-[4/5] will-change-transform select-none cursor-pointer", children: _0x59d592.jsxs("div", { className: "group relative h-full w-full overflow-hidden rounded-2xl bg-zinc-100 shadow-[0_8px_20px_rgba(15,23,42,0.14),0_2px_6px_rgba(15,23,42,0.08)] hover:shadow-[0_12px_24px_rgba(15,23,42,0.18)] transition-shadow duration-300", children: [_0x59d592.jsx("div", { className: "h-full w-full transition-transform duration-700 ease-out group-hover:scale-105", children: _0x59d592.jsx("img", { src: _0x39f3d3.item.src, alt: _0x39f3d3.item.title || "Gallery photo", loading: "lazy", decoding: "async", draggable: !1, className: "h-full w-full object-cover" }) }), _0x39f3d3.item.title ? _0x59d592.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent flex items-end p-4 sm:p-5", children: _0x59d592.jsx("span", { className: "text-xs sm:text-sm font-medium text-white drop-shadow-sm", children: _0x39f3d3.item.title }) }) : null] }) });
}
function h({ images: _0x2d87da, loading: _0x623566 = !1, id: _0x12d6af = "Gallery", scrollHeight: _0x46ad77 = "220vh" }) {
  const _0x4d8c85 = _0xdcb2ee.useRef(null), _0x522427 = _0x2955ff(), [_0x2b5798, _0x3b6ba0] = _0xdcb2ee.useState({ width: 1440, height: 900, isMobile: !1 });
  _0xdcb2ee.useEffect(() => {
    const _0x561ec5 = () => {
      _0x3b6ba0({ width: window.innerWidth, height: window.innerHeight, isMobile: window.innerWidth < 768 });
    };
    return _0x561ec5(), window.addEventListener("resize", _0x561ec5), () => window.removeEventListener("resize", _0x561ec5);
  }, []);
  const _0x59c2b9 = _0xdcb2ee.useMemo(() => {
    if (_0x623566) return [];
    let _0x2bc0e6 = Array.isArray(_0x2d87da) && _0x2d87da.length > 0 ? _0x2d87da.map((_0x315c3e) => ({ src: _0x315c3e.src || _0x315c3e.image_url || "", title: _0x315c3e.title || "" })) : d;
    if (_0x2bc0e6.length > 0 && _0x2bc0e6.length < 6) {
      const _0x567c4f = [];
      for (; _0x567c4f.length < 8; ) _0x567c4f.push(..._0x2bc0e6);
      _0x2bc0e6 = _0x567c4f.slice(0, 9);
    }
    return _0x2bc0e6.map((_0x4ca1c5, _0x1e21c1) => {
      const _0x42a90e = 137.5 * _0x1e21c1 * (Math.PI / 180), _0x1fb350 = 0.28 + _0x1e21c1 % 3 * 0.08, _0xe9ecdc = 0.26 + _0x1e21c1 % 2 * 0.09;
      return { item: _0x4ca1c5, angleCos: Math.cos(_0x42a90e), angleSin: Math.sin(_0x42a90e), radiusFactorX: _0x1fb350, radiusFactorY: _0xe9ecdc, rotationZ: (_0x1e21c1 % 2 == 0 ? 1 : -1) * (3 + _0x1e21c1 % 5 * 2), index: _0x1e21c1 };
    });
  }, [_0x2d87da, _0x623566]), { scrollYProgress: _0x474519 } = _0x5a8e53({ target: _0x4d8c85, offset: ["start 30%", "end end"] }), _0x16d74a = _0xed58fa(_0x474519, { stiffness: 80, damping: 30, restDelta: 1e-4 }), _0x6a9bfa = _0x14ac6d(_0x16d74a, [0, 1], [0.14, 1.02]), _0x480b25 = (function(_0x2ab771) {
    const _0x2c9aaf = _0x516dd2(0), _0x37dc67 = _0x516dd2(0), _0x53140c = _0xed58fa(_0x2c9aaf, m), _0x163e3c = _0xed58fa(_0x37dc67, m);
    return _0xdcb2ee.useEffect(() => {
      if (!_0x2ab771) return;
      const _0x1b057a = (_0x563f13) => {
        _0x2c9aaf.set(2 * (_0x563f13.clientX / window.innerWidth - 0.5)), _0x37dc67.set(2 * (_0x563f13.clientY / window.innerHeight - 0.5));
      };
      return window.addEventListener("pointermove", _0x1b057a, { passive: !0 }), () => window.removeEventListener("pointermove", _0x1b057a);
    }, [_0x2ab771, _0x2c9aaf, _0x37dc67]), { x: _0x53140c, y: _0x163e3c };
  })(_0x441e9c(_0x4d8c85, { margin: "250px" }) && !_0x522427), _0x510693 = _0x14ac6d(_0x16d74a, [0, 0.16], [1, 0]);
  return _0x59d592.jsx("section", { id: _0x12d6af, ref: _0x4d8c85, className: "relative z-10 w-full bg-transparent select-none", style: { height: _0x46ad77 }, children: _0x59d592.jsxs("div", { className: "sticky top-0 h-[100svh] w-full overflow-hidden bg-transparent text-zinc-900 flex items-center justify-center", style: { perspective: _0x2b5798.isMobile ? "900px" : "1200px", transformStyle: "preserve-3d" }, children: [_0x59d592.jsx(_0x3f9459.div, { style: { opacity: _0x510693 }, className: "pointer-events-none absolute bottom-8 z-20 flex flex-col items-center gap-2 text-xs font-medium text-zinc-600", children: _0x59d592.jsx("div", { className: "h-5 w-px bg-zinc-300" }) }), _0x59d592.jsx("div", { className: "absolute inset-0 pointer-events-none", style: { transformStyle: "preserve-3d" }, children: _0x59c2b9.map((_0x3fb517, _0x6493a) => _0x59d592.jsx(p, { card: _0x3fb517, progress: _0x6a9bfa, pointer: _0x480b25, total: _0x59c2b9.length, stage: _0x2b5798 }, _0x3fb517.item.src ? "".concat(_0x3fb517.item.src, "-").concat(_0x6493a) : _0x6493a)) })] }) });
}
const f = () => {
  const [_0x341245, _0x33f4cc] = _0xdcb2ee.useState([]), [_0x373877, _0x5b93a3] = _0xdcb2ee.useState(!0);
  _0xdcb2ee.useEffect(() => {
    _0x106044();
  }, []);
  const _0x106044 = async () => {
    try {
      const { data: _0x5b833d, error: _0x112662 } = await s.from("gallery_photos").select("*").order("created_at", { ascending: !1 });
      if (_0x112662) _0x112662.code;
      else if (_0x5b833d) {
        const _0x258541 = _0x5b833d.map((_0x2eac54) => ({ id: _0x2eac54.id, src: _0x2eac54.image_url, title: _0x2eac54.title || "" }));
        _0x33f4cc(_0x258541);
      }
    } catch {
    } finally {
      _0x5b93a3(!1);
    }
  };
  return _0x59d592.jsx(h, { images: _0x341245, loading: _0x373877, id: "Gallery" });
};
export {
  f as default
};
