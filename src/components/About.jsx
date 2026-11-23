const _0x298431 = null;
import { r as _0xa0c7d9, j as _0x949dd5 } from "./b9a27LkY.js";
import { A as _0x38cf72, F as _0x39ed05, C as _0x4c559f } from "./NGVnNSsi.js";
import { T as _0x493b7e } from "./CbHExhx7.js";
import { s as _0x2080b5 } from "./B4ex_1wX.js";
import { u as _0x218d86, a as _0x24eea3, b as _0x4a06f8, m as _0x2c2cef } from "./C9OiCWmG.js";
import "./Hb_jIbwg.js";
import "./CyKCnRV3.js";
const g = { aurora: { style: "streak", colors: ["#f4efe9", "#e9c2b8", "#c2433f", "#2a1e2a", "#22395e", "#6f97c2", "#e5edf4"], scale: 0.7, warp: 1.4, angle: -0.62, gloss: 0.18, veins: 0 }, ember: { style: "marble", colors: ["#07090c", "#16252c", "#3d5f68", "#1a1416", "#a3201a", "#ef4a2b", "#ff8a5c"], scale: 0.62, warp: 3.2, angle: -0.5, gloss: 0.55, veins: 0.6 }, dusk: { style: "marble", colors: ["#120c18", "#3e2850", "#8f6c9c", "#2b1a24", "#b3502f", "#eab08a", "#fbe7d2"], scale: 0.75, warp: 3.6, angle: 0.8, gloss: 0.5, veins: 0.5 }, glacier: { style: "streak", colors: ["#f7f8fa", "#d9e2ea", "#9fb4c7", "#e8edf2", "#bccbd8", "#ffffff"], scale: 0.7, warp: 1.6, angle: 0.35, gloss: 0.25, veins: 0 }, verdant: { style: "marble", colors: ["#070b08", "#173024", "#4f7a5a", "#141812", "#a7843a", "#e9cf87", "#fbf3d6"], scale: 0.7, warp: 3.4, angle: 2.1, gloss: 0.5, veins: 0.5 } };
function f(_0x1d2fbb) {
  let _0x139309 = (_0x1d2fbb || "").trim().replace(/^#/, "");
  _0x139309.length === 3 && (_0x139309 = _0x139309[0] + _0x139309[0] + _0x139309[1] + _0x139309[1] + _0x139309[2] + _0x139309[2]);
  const _0x5c2ed4 = /^[0-9a-f]{6}$/i.test(_0x139309) ? parseInt(_0x139309, 16) : 8421504;
  return [_0x5c2ed4 >> 16 & 255, _0x5c2ed4 >> 8 & 255, 255 & _0x5c2ed4];
}
function p(_0x13a0b8) {
  let _0xae3fd4 = _0x13a0b8 >>> 0;
  return () => {
    _0xae3fd4 = _0xae3fd4 + 1831565813 >>> 0;
    let _0x55bd6a = _0xae3fd4;
    return _0x55bd6a = Math.imul(_0x55bd6a ^ _0x55bd6a >>> 15, 1 | _0x55bd6a), _0x55bd6a ^= _0x55bd6a + Math.imul(_0x55bd6a ^ _0x55bd6a >>> 7, 61 | _0x55bd6a), ((_0x55bd6a ^ _0x55bd6a >>> 14) >>> 0) / 4294967296;
  };
}
function m(_0x31865a) {
  const _0x472a3a = String(_0x31865a || "");
  let _0x524591 = 2166136261;
  for (let _0x1fd2f5 = 0; _0x1fd2f5 < _0x472a3a.length; _0x1fd2f5++) _0x524591 = Math.imul(_0x524591 ^ _0x472a3a.charCodeAt(_0x1fd2f5), 16777619);
  return _0x524591 >>> 0;
}
function u(_0x5a07ef, _0x4224dc, _0xa5300b, _0x3db325) {
  const _0x2a3060 = Math.max(1, Math.round(_0x5a07ef)), _0x2e5293 = Math.max(1, Math.round(_0x4224dc)), _0x1b9a6c = _0xa5300b.colors && _0xa5300b.colors.length >= 2 ? _0xa5300b.colors : ["#111111", "#eeeeee"], _0x5060cf = _0x1b9a6c.map((_0x26ca75, _0x315228) => ({ t: _0x315228 / (_0x1b9a6c.length - 1), c: f(_0x26ca75) })), _0x47cdad = _0xa5300b.scale ?? 0.7, _0x3c8c37 = _0xa5300b.warp ?? 3, _0x5a02d7 = _0xa5300b.gloss ?? 0.4, _0x116093 = _0xa5300b.veins ?? 0, _0x377258 = _0xa5300b.style === "streak", _0x18e442 = (function(_0x1a26a0) {
    const _0x4cdbcd = p(_0x1a26a0), _0xae0b91 = new Uint8Array(512), _0x463630 = new Float32Array(512), _0x2159f7 = [];
    for (let _0x1bf2fa = 0; _0x1bf2fa < 256; _0x1bf2fa++) _0x2159f7.push(_0x1bf2fa);
    for (let _0x23d16f = 255; _0x23d16f > 0; _0x23d16f--) {
      const _0x3be057 = Math.floor(_0x4cdbcd() * (_0x23d16f + 1)), _0x2f594f = _0x2159f7[_0x23d16f];
      _0x2159f7[_0x23d16f] = _0x2159f7[_0x3be057], _0x2159f7[_0x3be057] = _0x2f594f;
    }
    for (let _0x4cac8c = 0; _0x4cac8c < 512; _0x4cac8c++) _0xae0b91[_0x4cac8c] = _0x2159f7[255 & _0x4cac8c];
    for (let _0x10a158 = 0; _0x10a158 < 256; _0x10a158++) {
      const _0x1671df = _0x4cdbcd() * Math.PI * 2;
      _0x463630[2 * _0x10a158] = Math.cos(_0x1671df), _0x463630[2 * _0x10a158 + 1] = Math.sin(_0x1671df);
    }
    const _0x4aa3ed = (_0x38b5aa, _0x51bba7) => {
      const _0x2a825b = Math.floor(_0x38b5aa), _0x4f927f = Math.floor(_0x51bba7), _0x2f3a35 = _0x38b5aa - _0x2a825b, _0x2afccd = _0x51bba7 - _0x4f927f, _0x1f28cb = 255 & _0x2a825b, _0x262875 = 255 & _0x4f927f, _0x462f2a = 2 * _0xae0b91[_0x1f28cb + _0xae0b91[_0x262875]], _0x540769 = 2 * _0xae0b91[_0x1f28cb + 1 + _0xae0b91[_0x262875]], _0x300146 = 2 * _0xae0b91[_0x1f28cb + _0xae0b91[_0x262875 + 1]], _0x5211d4 = 2 * _0xae0b91[_0x1f28cb + 1 + _0xae0b91[_0x262875 + 1]], _0x36fdbe = _0x463630[_0x462f2a] * _0x2f3a35 + _0x463630[_0x462f2a + 1] * _0x2afccd, _0x41e9ee = _0x463630[_0x540769] * (_0x2f3a35 - 1) + _0x463630[_0x540769 + 1] * _0x2afccd, _0x172db1 = _0x463630[_0x300146] * _0x2f3a35 + _0x463630[_0x300146 + 1] * (_0x2afccd - 1), _0x38078b = _0x2f3a35 * _0x2f3a35 * _0x2f3a35 * (_0x2f3a35 * (6 * _0x2f3a35 - 15) + 10);
      return _0x36fdbe + _0x38078b * (_0x41e9ee - _0x36fdbe) + _0x2afccd * _0x2afccd * _0x2afccd * (_0x2afccd * (6 * _0x2afccd - 15) + 10) * (_0x172db1 - _0x36fdbe + _0x38078b * (_0x463630[_0x5211d4] * (_0x2f3a35 - 1) + _0x463630[_0x5211d4 + 1] * (_0x2afccd - 1) - _0x172db1 - _0x41e9ee + _0x36fdbe));
    };
    return (_0x16a07b, _0x26b453, _0x500371) => {
      let _0x37e7e8 = 0, _0x282925 = 0.5;
      for (let _0x2183b5 = 0; _0x2183b5 < _0x500371; _0x2183b5++) {
        _0x37e7e8 += _0x282925 * _0x4aa3ed(_0x16a07b, _0x26b453);
        const _0x271766 = 1.6 * _0x16a07b + 1.2 * _0x26b453 + 7.1;
        _0x26b453 = -1.2 * _0x16a07b + 1.6 * _0x26b453 + 3.3, _0x16a07b = _0x271766, _0x282925 *= 0.5;
      }
      return _0x37e7e8;
    };
  })(977 * _0x3db325 + 13), _0x550ac6 = p(_0x3db325 + 1), _0x18fca6 = 50 * _0x550ac6(), _0x454505 = 50 * _0x550ac6(), _0x5156eb = (_0xa5300b.angle ?? 0) + 0.5 * (_0x550ac6() - 0.5), _0x5e2502 = Math.cos(_0x5156eb), _0x172388 = Math.sin(_0x5156eb), _0x108cdb = Math.min(_0x2a3060, _0x2e5293), _0xd31c01 = Math.ceil(_0x2a3060 / 2) + 3, _0x4e858b = Math.ceil(_0x2e5293 / 2) + 3, _0x228b50 = new Float32Array(_0xd31c01 * _0x4e858b), _0x19cf30 = new Float32Array(_0xd31c01 * _0x4e858b), _0x50e321 = new Float32Array(_0x2a3060 * _0x2e5293), _0x576437 = new Float32Array(_0x2a3060 * _0x2e5293), _0x318dad = new Uint8ClampedArray(_0x2a3060 * _0x2e5293 * 4);
  let _0x17ba3b = 0;
  const _0x2fde77 = (_0x3b96e5) => {
    for (let _0xaff38e = 0; _0xaff38e < _0xd31c01; _0xaff38e++) {
      const _0x135977 = (2 * (_0xaff38e - 1) - _0x2a3060 / 2) / _0x108cdb, _0x22f1ad = (2 * (_0x3b96e5 - 1) - _0x2e5293 / 2) / _0x108cdb;
      let _0x16eef9 = (_0x135977 * _0x5e2502 - _0x22f1ad * _0x172388) * _0x47cdad, _0x2a2eed = (_0x135977 * _0x172388 + _0x22f1ad * _0x5e2502) * _0x47cdad;
      _0x377258 && (_0x16eef9 *= 0.14, _0x2a2eed *= 2.2), _0x16eef9 += _0x18fca6, _0x2a2eed += _0x454505;
      const _0x1e7866 = _0x18e442(_0x16eef9, _0x2a2eed, 3), _0x221b3e = _0x18e442(_0x16eef9 + 5.2, _0x2a2eed + 1.3, 3), _0x246367 = _0x18e442(_0x16eef9 + _0x3c8c37 * _0x1e7866 + 1.7, _0x2a2eed + _0x3c8c37 * _0x221b3e + 9.2, 3), _0x2ed07e = _0x18e442(_0x16eef9 + _0x3c8c37 * _0x1e7866 + 8.3, _0x2a2eed + _0x3c8c37 * _0x221b3e + 2.8, 3);
      _0x228b50[_0x3b96e5 * _0xd31c01 + _0xaff38e] = _0x18e442(_0x16eef9 + _0x3c8c37 * _0x246367, _0x2a2eed + _0x3c8c37 * _0x2ed07e, 4), _0x19cf30[_0x3b96e5 * _0xd31c01 + _0xaff38e] = Math.sqrt(_0x1e7866 * _0x1e7866 + _0x221b3e * _0x221b3e);
    }
  };
  return { width: _0x2a3060, height: _0x2e5293, pixels: _0x318dad, step: (_0x2f26e5) => {
    if (_0x17ba3b >= _0x4e858b) return !0;
    const _0x52a779 = Math.min(_0x4e858b, _0x17ba3b + Math.max(1, _0x2f26e5));
    for (; _0x17ba3b < _0x52a779; ) _0x2fde77(_0x17ba3b++);
    return !(_0x17ba3b < _0x4e858b || ((() => {
      const _0x1c1916 = (_0x2fafe7, _0x5dc838, _0x4b40df, _0x1a543e) => (9 * _0x5dc838 - _0x2fafe7 + 9 * _0x4b40df - _0x1a543e) / 16, _0x2ab1ab = new Float32Array(_0x2a3060 * _0x4e858b);
      for (let _0x235a97 = 0; _0x235a97 < _0x4e858b; _0x235a97++) {
        const _0x5d73fb = _0x235a97 * _0xd31c01;
        for (let _0x5da304 = 0; _0x5da304 < _0x2a3060; _0x5da304++) {
          const _0x4df745 = 1 + (_0x5da304 >> 1);
          _0x2ab1ab[_0x235a97 * _0x2a3060 + _0x5da304] = 1 & _0x5da304 ? _0x1c1916(_0x228b50[_0x5d73fb + _0x4df745 - 1], _0x228b50[_0x5d73fb + _0x4df745], _0x228b50[_0x5d73fb + _0x4df745 + 1], _0x228b50[_0x5d73fb + _0x4df745 + 2]) : _0x228b50[_0x5d73fb + _0x4df745];
        }
      }
      for (let _0x2967c4 = 0; _0x2967c4 < _0x2e5293; _0x2967c4++) {
        const _0x5a382c = 1 + (_0x2967c4 >> 1);
        for (let _0x4823c2 = 0; _0x4823c2 < _0x2a3060; _0x4823c2++) {
          _0x50e321[_0x2967c4 * _0x2a3060 + _0x4823c2] = 1 & _0x2967c4 ? _0x1c1916(_0x2ab1ab[(_0x5a382c - 1) * _0x2a3060 + _0x4823c2], _0x2ab1ab[_0x5a382c * _0x2a3060 + _0x4823c2], _0x2ab1ab[(_0x5a382c + 1) * _0x2a3060 + _0x4823c2], _0x2ab1ab[(_0x5a382c + 2) * _0x2a3060 + _0x4823c2]) : _0x2ab1ab[_0x5a382c * _0x2a3060 + _0x4823c2];
          const _0x201a68 = 1 + (_0x4823c2 >> 1), _0x315335 = _0x19cf30[_0x5a382c * _0xd31c01 + _0x201a68], _0x5e80f1 = 1 & _0x4823c2 ? (_0x315335 + _0x19cf30[_0x5a382c * _0xd31c01 + _0x201a68 + 1]) / 2 : _0x315335, _0x2a2319 = 1 & _0x2967c4 ? 1 & _0x4823c2 ? (_0x19cf30[(_0x5a382c + 1) * _0xd31c01 + _0x201a68] + _0x19cf30[(_0x5a382c + 1) * _0xd31c01 + _0x201a68 + 1]) / 2 : _0x19cf30[(_0x5a382c + 1) * _0xd31c01 + _0x201a68] : _0x5e80f1;
          _0x576437[_0x2967c4 * _0x2a3060 + _0x4823c2] = (_0x5e80f1 + _0x2a2319) / 2;
        }
      }
    })(), (() => {
      const _0x53a6e8 = [], _0x37bedd = Math.max(1, Math.floor(_0x50e321.length / 4096));
      for (let _0x377169 = 0; _0x377169 < _0x50e321.length; _0x377169 += _0x37bedd) _0x53a6e8.push(_0x50e321[_0x377169]);
      _0x53a6e8.sort((_0x46684d, _0x946a67) => _0x46684d - _0x946a67);
      const _0x5650af = _0x53a6e8[Math.floor(0.02 * _0x53a6e8.length)], _0x39b818 = 1 / (_0x53a6e8[Math.floor(0.98 * _0x53a6e8.length)] - _0x5650af || 1), _0x52c37e = _0x39b818 * _0x108cdb * 0.012;
      for (let _0x5f3eb5 = 0; _0x5f3eb5 < _0x2e5293; _0x5f3eb5++) for (let _0xd2d464 = 0; _0xd2d464 < _0x2a3060; _0xd2d464++) {
        const _0x1dde98 = _0x5f3eb5 * _0x2a3060 + _0xd2d464;
        let _0x538246 = (_0x50e321[_0x1dde98] - _0x5650af) * _0x39b818;
        _0x538246 = _0x538246 < 0 ? 0 : _0x538246 > 1 ? 1 : _0x538246;
        let _0x1d22b9 = 1;
        for (; _0x1d22b9 < _0x5060cf.length - 1 && _0x5060cf[_0x1d22b9].t < _0x538246; ) _0x1d22b9++;
        const _0x4a92b7 = _0x5060cf[_0x1d22b9 - 1], _0x26371c = _0x5060cf[_0x1d22b9];
        let _0x3bc6dd = (_0x538246 - _0x4a92b7.t) / (_0x26371c.t - _0x4a92b7.t || 1);
        _0x3bc6dd = _0x3bc6dd < 0 ? 0 : _0x3bc6dd > 1 ? 1 : _0x3bc6dd, _0x3bc6dd = _0x3bc6dd * _0x3bc6dd * (3 - 2 * _0x3bc6dd);
        const _0x265525 = (_0x50e321[_0xd2d464 < _0x2a3060 - 1 ? _0x1dde98 + 1 : _0x1dde98] - _0x50e321[_0xd2d464 > 0 ? _0x1dde98 - 1 : _0x1dde98]) * _0x52c37e, _0x3b4028 = (_0x50e321[_0x5f3eb5 < _0x2e5293 - 1 ? _0x1dde98 + _0x2a3060 : _0x1dde98] - _0x50e321[_0x5f3eb5 > 0 ? _0x1dde98 - _0x2a3060 : _0x1dde98]) * _0x52c37e, _0x4411e6 = (-0.55 * -_0x265525 - -0.65 * _0x3b4028 + 0.52) / Math.sqrt(_0x265525 * _0x265525 + _0x3b4028 * _0x3b4028 + 1), _0x219678 = Math.pow(_0x4411e6 > 0 ? _0x4411e6 : 0, 24) * _0x5a02d7 * 255, _0x29dc27 = (0.82 + 0.28 * _0x4411e6) * (1 + 0.035 * Math.sin(150 * _0x538246 + 24 * _0x576437[_0x1dde98])) * (1 - _0x116093 * Math.max(0, 1 - 14 * Math.abs(_0x576437[_0x1dde98] - 0.42)) * 0.6);
        _0x318dad[4 * _0x1dde98] = (_0x4a92b7.c[0] + (_0x26371c.c[0] - _0x4a92b7.c[0]) * _0x3bc6dd) * _0x29dc27 + _0x219678, _0x318dad[4 * _0x1dde98 + 1] = (_0x4a92b7.c[1] + (_0x26371c.c[1] - _0x4a92b7.c[1]) * _0x3bc6dd) * _0x29dc27 + _0x219678, _0x318dad[4 * _0x1dde98 + 2] = (_0x4a92b7.c[2] + (_0x26371c.c[2] - _0x4a92b7.c[2]) * _0x3bc6dd) * _0x29dc27 + _0x219678, _0x318dad[4 * _0x1dde98 + 3] = 255;
      }
    })(), 0));
  } };
}
const h = /* @__PURE__ */ new Map(), x = [];
let b = !1;
function v({ art: _0x28d5ec, seed: _0x542060, w: _0xcc9ce4, h: _0x350eba, density: _0x1654e4, priority: _0x4503c8, className: _0x4a3080 }) {
  const _0x4a33b4 = _0xa0c7d9.useRef(null), [_0x34fa83, _0x272e58] = _0xa0c7d9.useState(!1), _0x5638d8 = ((_0x2273f9) => typeof _0x2273f9 == "string" ? g[_0x2273f9] : _0x2273f9)(_0x28d5ec), _0x29e475 = JSON.stringify(_0x5638d8), _0x2910ef = Math.round(_0xcc9ce4 * _0x1654e4), _0x311d15 = Math.round(_0x350eba * _0x1654e4);
  return _0xa0c7d9.useEffect(() => {
    let _0x166750 = !0;
    return _0x272e58(!1), (function(_0x572e31, _0x195a60, _0x12fd59, _0x28f2e6, _0x580c4b) {
      const _0x3c00e9 = JSON.stringify([_0x572e31, _0x195a60, _0x12fd59, _0x28f2e6]);
      let _0x3b6ef7 = h.get(_0x3c00e9);
      return _0x3b6ef7 || (_0x3b6ef7 = new Promise((_0x569771) => {
        let _0x2928f2 = x.length;
        for (; _0x2928f2 > 1 && x[_0x2928f2 - 1].priority > _0x580c4b; ) _0x2928f2--;
        x.splice(_0x2928f2, 0, { job: u(_0x12fd59, _0x28f2e6, _0x572e31, _0x195a60), priority: _0x580c4b, done: _0x569771 }), (function() {
          if (b) return;
          b = !0;
          const _0x1a0fdc = () => {
            var _0x179e38;
            const _0x274128 = performance.now() + 7;
            for (; x.length && performance.now() < _0x274128; ) {
              const _0x31c291 = x[0];
              if (_0x31c291.job.step(4)) {
                x.shift();
                const _0x52d7cd = document.createElement("canvas");
                _0x52d7cd.width = _0x31c291.job.width, _0x52d7cd.height = _0x31c291.job.height, (_0x179e38 = _0x52d7cd.getContext("2d")) == null || _0x179e38.putImageData(new ImageData(_0x31c291.job.pixels, _0x52d7cd.width, _0x52d7cd.height), 0, 0), _0x31c291.done(_0x52d7cd);
              }
            }
            x.length ? requestAnimationFrame(_0x1a0fdc) : b = !1;
          };
          requestAnimationFrame(_0x1a0fdc);
        })();
      }), h.set(_0x3c00e9, _0x3b6ef7)), _0x3b6ef7;
    })(JSON.parse(_0x29e475), _0x542060, _0x2910ef, _0x311d15, _0x4503c8).then((_0x21d2fe) => {
      var _0x460a0b;
      const _0x8b230d = _0x4a33b4.current;
      _0x166750 && _0x8b230d && (_0x8b230d.width = _0x21d2fe.width, _0x8b230d.height = _0x21d2fe.height, (_0x460a0b = _0x8b230d.getContext("2d")) == null || _0x460a0b.drawImage(_0x21d2fe, 0, 0), _0x272e58(!0));
    }), () => {
      _0x166750 = !1;
    };
  }, [_0x29e475, _0x542060, _0x2910ef, _0x311d15, _0x4503c8]), _0x949dd5.jsx("canvas", { ref: _0x4a33b4, "aria-hidden": "true", className: _0x4a3080, "data-ready": _0x34fa83 || void 0, style: { width: _0xcc9ce4, height: _0x350eba, maxWidth: "none" } });
}
const y = "M0 56A22 22 0 0 1 22 34L146 34C170 34 172 0 198 0L318 0A22 22 0 0 1 340 22L340 250A22 22 0 0 1 318 272L22 272A22 22 0 0 1 0 250Z", w = "M0 22A22 22 0 0 1 22 0L118 0C144 0 146 32 172 32L318 32A22 22 0 0 1 340 54L340 176A22 22 0 0 1 318 198L22 198A22 22 0 0 1 0 176Z", j = (_0x3af8ed, _0x397ac7, _0x3a0e64) => {
  const _0x550000 = 'url("data:image/svg+xml,'.concat(encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 '.concat(_0x3af8ed, " ").concat(_0x397ac7, '"><path fill="#000" d="').concat(_0x3a0e64, '"/></svg>')), '")');
  return { WebkitMaskImage: _0x550000, maskImage: _0x550000, WebkitMaskSize: "100% 100%", maskSize: "100% 100%", WebkitMaskRepeat: "no-repeat", maskRepeat: "no-repeat" };
}, k = j(340, 272, y), N = j(340, 198, w), M = [{ name: "Cover \u2014 final", meta: "PNG \xB7 4.8 MB", art: "ember" }, { name: "Moodboard", meta: "24 images", art: "dusk" }, { name: "Brief.pdf", meta: "PDF \xB7 1.2 MB" }];
function S({ label: _0x239ce3 = "My Files", meta: _0x2dbc4b, tone: _0x9bb1de = "light", art: _0x31336a = "aurora", seed: _0x3df018 = 3, image: _0x8a22c5, files: _0x5c6919 = M, action: _0x273171 = "add", onAdd: _0x39a921, onFilesChange: _0x1b299c, menu: _0x3837b1 = [], labelPlacement: _0x20371a = "bottom-left", open: _0x161be2, defaultOpen: _0x5216b7 = !1, onOpenChange: _0x5e3303, onFileSelect: _0x41e8f9, width: _0x3bd2ca = 340, appear: _0x3e4a5f = !0, appearDelay: _0x21f5df = 0, className: _0x1903d4, style: _0x59f2f7 }) {
  const _0x5a6f45 = _0xa0c7d9.useId().replace(/:/g, ""), _0x128349 = _0xa0c7d9.useRef(null), _0x9f9da9 = _0xa0c7d9.useRef(null), _0x11e535 = _0xa0c7d9.useRef(null), _0x435dd1 = _0xa0c7d9.useRef(null), _0x19f346 = _0xa0c7d9.useRef(null), [_0x1c9b19, _0x2e3657] = _0xa0c7d9.useState(_0x5c6919), _0x4928e8 = _0xa0c7d9.useRef(_0x5c6919.map((_0x59d56c, _0x3d0991) => _0x3d0991)), _0x775ad9 = _0xa0c7d9.useRef(_0x5c6919.length), [_0x4b701d, _0x1f238e] = _0xa0c7d9.useState(null), [_0x3bb612, _0x448ff4] = _0xa0c7d9.useState(0), [_0x421a35, _0x359792] = _0xa0c7d9.useState(_0x5216b7), _0x144768 = _0x161be2 ?? _0x421a35, _0x4077ab = _0xa0c7d9.useCallback((_0x2c89ff) => {
    _0x161be2 === void 0 && _0x359792(_0x2c89ff), _0x5e3303?.(_0x2c89ff);
  }, [_0x161be2, _0x5e3303]), [_0x17d44a, _0x40a243] = _0xa0c7d9.useState(!1), [_0x5d75dd, _0x53e2ff] = _0xa0c7d9.useState(!_0x3e4a5f);
  _0xa0c7d9.useEffect(() => {
    _0x2e3657(_0x5c6919), _0x4928e8.current = _0x5c6919.map((_0x546e77, _0x2bd725) => _0x2bd725), _0x775ad9.current = _0x5c6919.length;
  }, [_0x5c6919]);
  const _0xffa377 = _0x3bd2ca / 340, _0x4971aa = Math.min(1.5, Math.max(1, typeof window > "u" ? 1 : window.devicePixelRatio || 1)) * _0xffa377;
  _0xa0c7d9.useEffect(() => {
    if (!_0x3e4a5f) return;
    const _0x55837e = _0x128349.current;
    if (!_0x55837e || typeof IntersectionObserver > "u") return void _0x53e2ff(!0);
    let _0x5e8ee6 = 0;
    const _0x48411c = new IntersectionObserver((_0x2f62b) => {
      _0x2f62b.some((_0x49d76b) => _0x49d76b.isIntersecting) && (_0x48411c.disconnect(), _0x5e8ee6 = window.setTimeout(() => _0x53e2ff(!0), _0x21f5df));
    }, { threshold: 0.25 });
    return _0x48411c.observe(_0x55837e), () => {
      _0x48411c.disconnect(), window.clearTimeout(_0x5e8ee6);
    };
  }, [_0x3e4a5f, _0x21f5df]), _0xa0c7d9.useEffect(() => {
    const _0xe708a4 = _0x128349.current;
    if (!_0xe708a4) return;
    let _0x36871f = 0, _0x14dd2c = 0, _0x14e79 = 0, _0x365d45 = null;
    const _0x739d35 = () => {
      _0x36871f = 0, _0xe708a4.style.setProperty("--gf-px", _0x14dd2c.toFixed(3)), _0xe708a4.style.setProperty("--gf-py", _0x14e79.toFixed(3));
    }, _0x37ee87 = (_0x9a033c) => {
      _0x9a033c.pointerType !== "touch" && (_0x365d45 = _0xe708a4.getBoundingClientRect());
    }, _0x5a6905 = (_0x5e7283) => {
      if (_0x5e7283.pointerType === "touch") return;
      const _0x467a58 = _0x365d45 || (_0x365d45 = _0xe708a4.getBoundingClientRect());
      _0x467a58.width && _0x467a58.height && (_0x14dd2c = (_0x5e7283.clientX - _0x467a58.left) / _0x467a58.width * 2 - 1, _0x14e79 = (_0x5e7283.clientY - _0x467a58.top) / _0x467a58.height * 2 - 1, _0x36871f || (_0x36871f = requestAnimationFrame(_0x739d35)));
    }, _0x26592a = () => {
      _0x365d45 = null, _0x14dd2c = 0, _0x14e79 = 0, _0x36871f || (_0x36871f = requestAnimationFrame(_0x739d35));
    };
    return _0xe708a4.addEventListener("pointerenter", _0x37ee87, { passive: !0 }), _0xe708a4.addEventListener("pointermove", _0x5a6905, { passive: !0 }), _0xe708a4.addEventListener("pointerleave", _0x26592a, { passive: !0 }), () => {
      _0xe708a4.removeEventListener("pointerenter", _0x37ee87), _0xe708a4.removeEventListener("pointermove", _0x5a6905), _0xe708a4.removeEventListener("pointerleave", _0x26592a), cancelAnimationFrame(_0x36871f);
    };
  }, []), _0xa0c7d9.useEffect(() => {
    var _0x419cc1;
    (_0x419cc1 = _0x9f9da9.current) == null || _0x419cc1.toggleAttribute("inert", !_0x144768);
  }, [_0x144768]), _0xa0c7d9.useEffect(() => {
    if (!_0x144768 && !_0x17d44a) return;
    const _0x1863af = (_0x294c41) => {
      var _0x83d664, _0xd7408d;
      _0x294c41.key === "Escape" && (_0x17d44a ? (_0x40a243(!1), (_0x83d664 = _0x435dd1.current) == null || _0x83d664.focus()) : (_0x4077ab(!1), (_0xd7408d = _0x11e535.current) == null || _0xd7408d.focus()));
    }, _0x1f98e9 = (_0x354e36) => {
      var _0x3af58b, _0x53a9e7, _0x32d951;
      const _0x3cd6b0 = _0x354e36.target;
      !_0x17d44a || (_0x3af58b = _0x19f346.current) != null && _0x3af58b.contains(_0x3cd6b0) || (_0x53a9e7 = _0x435dd1.current) != null && _0x53a9e7.contains(_0x3cd6b0) || _0x40a243(!1), !_0x144768 || _0x17d44a || (_0x32d951 = _0x128349.current) != null && _0x32d951.contains(_0x3cd6b0) || _0x4077ab(!1);
    };
    return document.addEventListener("keydown", _0x1863af), document.addEventListener("pointerdown", _0x1f98e9), () => {
      document.removeEventListener("keydown", _0x1863af), document.removeEventListener("pointerdown", _0x1f98e9);
    };
  }, [_0x144768, _0x17d44a, _0x4077ab]), _0xa0c7d9.useEffect(() => {
    var _0x1b033b, _0x244959;
    _0x17d44a && ((_0x244959 = (_0x1b033b = _0x19f346.current) == null ? void 0 : _0x1b033b.querySelector("[role=menuitem]")) == null || _0x244959.focus());
  }, [_0x17d44a]);
  const _0x4bbc5b = [{ label: _0x144768 ? "Close folder" : "Open folder", onSelect: () => _0x4077ab(!_0x144768) }, ..._0x3837b1], _0x39da5b = Math.max(0, _0x1c9b19.length - 4), _0xd1471e = _0x1c9b19.slice(_0x39da5b), _0x35730e = _0x1c9b19.length, _0x366def = _0x2dbc4b !== void 0 ? _0x2dbc4b : _0x35730e;
  return _0x949dd5.jsxs("div", { ref: _0x128349, className: "gf-root" + (_0x1903d4 ? " " + _0x1903d4 : ""), "data-tone": _0x9bb1de, "data-open": _0x144768 || void 0, "data-entered": _0x5d75dd || void 0, "data-place": _0x20371a, style: { width: _0x3bd2ca, height: 326 * _0xffa377, ..._0x59f2f7 }, children: [_0x949dd5.jsx(I, {}), _0x949dd5.jsx("div", { className: "gf-stage", style: { transform: "translateY(" + 54 * _0xffa377 + "px) scale(" + _0xffa377 + ")" }, children: _0x949dd5.jsxs("div", { className: "gf-tilt", children: [_0x949dd5.jsx("div", { className: "gf-shadow", "aria-hidden": "true" }), _0x949dd5.jsxs("div", { className: "gf-back", style: k, "aria-hidden": "true", children: [_0x8a22c5 ? _0x949dd5.jsx("img", { className: "gf-art", src: _0x8a22c5, alt: "", width: 364, height: 296, loading: "lazy", decoding: "async", draggable: !1 }) : _0x31336a !== "none" ? _0x949dd5.jsx(v, { className: "gf-art", art: _0x31336a, seed: _0x3df018, w: 364, h: 296, density: _0x4971aa, priority: 0 }) : null, _0x949dd5.jsx("div", { className: "gf-back-sheen" })] }), _0x949dd5.jsx("svg", { className: "gf-rim gf-back-rim", viewBox: "0 0 340 272", "aria-hidden": "true", children: _0x949dd5.jsx("path", { d: y }) }), _0x949dd5.jsxs("div", { className: "gf-front" + (_0x3bb612 ? " gf-front--bump" : ""), style: N, children: [_0x949dd5.jsx("div", { className: "gf-tint", "aria-hidden": "true" }), _0x949dd5.jsx("div", { className: "gf-spec", "aria-hidden": "true" }), _0x949dd5.jsxs("svg", { className: "gf-rim gf-front-rim", viewBox: "0 0 340 198", "aria-hidden": "true", children: [_0x949dd5.jsx("defs", { children: _0x949dd5.jsxs("linearGradient", { id: "gf-rim-" + _0x5a6f45, x1: "0", y1: "0", x2: "0", y2: "1", children: [_0x949dd5.jsx("stop", { offset: "0", stopColor: "#fff", stopOpacity: "0.95" }), _0x949dd5.jsx("stop", { offset: "0.35", stopColor: "#fff", stopOpacity: "0.35" }), _0x949dd5.jsx("stop", { offset: "1", stopColor: "#fff", stopOpacity: "0.12" })] }) }), _0x949dd5.jsx("path", { d: w, stroke: "url(#gf-rim-" + _0x5a6f45 + ")" })] }), _0x949dd5.jsx("button", { ref: _0x11e535, type: "button", className: "gf-hit", "aria-expanded": _0x144768, "aria-label": (_0x144768 ? "Close " : "Open ") + _0x239ce3 + ", " + _0x35730e + (_0x35730e === 1 ? " item" : " items"), onClick: () => {
    _0x40a243(!1), _0x4077ab(!_0x144768);
  } }), _0x949dd5.jsxs("div", { className: "gf-label", children: [_0x366def != null && _0x949dd5.jsx("span", { className: "gf-meta", children: _0x366def }, _0x366def), _0x949dd5.jsx("span", { className: "gf-title", children: _0x239ce3 })] })] }, _0x3bb612), _0x949dd5.jsx("div", { ref: _0x9f9da9, className: "gf-files", role: "list", "aria-label": _0x239ce3 + " contents", children: _0xd1471e.map((_0x1608fd, _0x3b5cab) => {
    const _0x93a429 = _0x4928e8.current[_0x39da5b + _0x3b5cab], _0x3de2a2 = (function(_0x4462cb, _0x4d87cd) {
      return _0x4d87cd <= 1 ? 0 : _0x4462cb / (_0x4d87cd - 1) * 2 - 1;
    })(_0x3b5cab, _0xd1471e.length), _0x4e4faf = p(m(_0x1608fd.name) + _0x93a429), _0x542e98 = !(!_0x1608fd.art && !_0x1608fd.image), _0x542604 = _0x949dd5.jsxs(_0x949dd5.Fragment, { children: [_0x542e98 ? _0x1608fd.image ? _0x949dd5.jsx("img", { className: "gf-sheet-art", src: _0x1608fd.image, alt: "", width: 272, height: 184, loading: "lazy", decoding: "async", draggable: !1 }) : _0x949dd5.jsx(v, { className: "gf-sheet-art", art: _0x1608fd.art, seed: m(_0x1608fd.name) % 997, w: 272, h: 184, density: Math.min(_0x4971aa, 1.25), priority: 1 }) : _0x949dd5.jsxs("span", { className: "gf-lines", "aria-hidden": "true", children: [_0x949dd5.jsx("i", { style: { width: "86%" } }), _0x949dd5.jsx("i", { style: { width: "92%" } }), _0x949dd5.jsx("i", { style: { width: "64%" } }), _0x949dd5.jsx("i", { style: { width: "88%" } }), _0x949dd5.jsx("i", { style: { width: "42%" } })] }), _0x1608fd.name || _0x1608fd.meta ? _0x949dd5.jsxs("span", { className: "gf-sheet-head", children: [_0x1608fd.name ? _0x949dd5.jsx("span", { className: "gf-sheet-name", children: _0x1608fd.name }) : null, _0x1608fd.meta ? _0x949dd5.jsx("span", { className: "gf-sheet-meta", children: _0x1608fd.meta }) : null] }) : null] }), _0xae67c8 = { className: "gf-sheet" + (_0x542e98 ? " gf-sheet--art" : "") + (_0x93a429 === _0x4b701d ? " gf-sheet--drop" : ""), style: { "--gf-slot": _0x3de2a2, "--gf-depth": _0xd1471e.length - 1 - _0x3b5cab, "--gf-jx": (10 * (_0x4e4faf() - 0.5)).toFixed(2) + "px", "--gf-jr": (3.2 * (_0x4e4faf() - 0.5)).toFixed(2) + "deg", zIndex: _0x3b5cab + 1 }, onAnimationEnd: _0x93a429 === _0x4b701d ? () => _0x1f238e(null) : void 0 };
    return _0x949dd5.jsx("div", { role: "listitem", className: "gf-sheet-slot", children: _0x1608fd.href ? _0x949dd5.jsx("a", { ..._0xae67c8, href: _0x1608fd.href, onClick: () => _0x41e8f9?.(_0x1608fd, _0x39da5b + _0x3b5cab), children: _0x542604 }) : _0x949dd5.jsx("button", { ..._0xae67c8, type: "button", onClick: () => _0x41e8f9?.(_0x1608fd, _0x39da5b + _0x3b5cab), children: _0x542604 }) }, _0x93a429);
  }) }), _0x273171 !== "none" ? _0x949dd5.jsx("button", { ref: _0x435dd1, type: "button", className: "gf-key gf-key--" + _0x273171, "aria-label": _0x273171 === "add" ? "Add a file to " + _0x239ce3 : "More options for " + _0x239ce3, "aria-haspopup": _0x273171 === "more" ? "menu" : void 0, "aria-expanded": _0x273171 === "more" ? _0x17d44a : void 0, "aria-controls": _0x273171 === "more" ? "gf-menu-" + _0x5a6f45 : void 0, onClick: () => _0x273171 === "add" ? (() => {
    const _0x17172e = _0x39a921?.(_0x1c9b19) || { name: "Untitled " + (_0x1c9b19.length + 1), meta: "Just now" }, _0x38ce58 = [..._0x1c9b19, _0x17172e], _0x379a1d = _0x775ad9.current++;
    _0x4928e8.current = [..._0x4928e8.current, _0x379a1d], _0x2e3657(_0x38ce58), _0x1f238e(_0x379a1d), _0x448ff4((_0x3fe91f) => _0x3fe91f + 1), _0x1b299c?.(_0x38ce58);
  })() : _0x40a243((_0x65ea36) => !_0x65ea36), children: _0x273171 === "add" ? _0x949dd5.jsx("svg", { className: "gf-glyph gf-glyph--plus", viewBox: "0 0 24 24", "aria-hidden": "true", children: _0x949dd5.jsx("path", { d: "M12 4.5v15M4.5 12h15" }) }, _0x3bb612) : _0x949dd5.jsxs("svg", { className: "gf-glyph gf-glyph--more", viewBox: "0 0 30 12", "aria-hidden": "true", children: [_0x949dd5.jsx("rect", { x: "1", y: "1.5", width: "8", height: "9", rx: "3.4" }), _0x949dd5.jsx("rect", { x: "11", y: "1.5", width: "8", height: "9", rx: "3.4" }), _0x949dd5.jsx("rect", { x: "21", y: "1.5", width: "8", height: "9", rx: "3.4" })] }) }) : null, _0x273171 === "more" ? _0x949dd5.jsx("div", { ref: _0x19f346, id: "gf-menu-" + _0x5a6f45, role: "menu", "aria-label": _0x239ce3 + " options", className: "gf-menu", "data-open": _0x17d44a || void 0, onKeyDown: (_0x2d6bd) => {
    var _0x374dc5;
    const _0x5a9398 = Array.from(((_0x374dc5 = _0x19f346.current) == null ? void 0 : _0x374dc5.querySelectorAll("[role=menuitem]")) ?? []), _0x37f94d = _0x5a9398.indexOf(document.activeElement), _0x1a73d7 = (_0x295a79) => {
      var _0x4412cf;
      _0x2d6bd.preventDefault(), (_0x4412cf = _0x5a9398[(_0x295a79 + _0x5a9398.length) % _0x5a9398.length]) == null || _0x4412cf.focus();
    };
    _0x2d6bd.key === "ArrowDown" ? _0x1a73d7(_0x37f94d + 1) : _0x2d6bd.key === "ArrowUp" ? _0x1a73d7(_0x37f94d - 1) : _0x2d6bd.key === "Home" ? _0x1a73d7(0) : _0x2d6bd.key === "End" ? _0x1a73d7(_0x5a9398.length - 1) : _0x2d6bd.key === "Tab" && _0x40a243(!1);
  }, children: _0x4bbc5b.map((_0x29599e, _0x453854) => _0x949dd5.jsx("button", { type: "button", role: "menuitem", tabIndex: _0x17d44a ? -1 : void 0, disabled: !_0x17d44a, className: "gf-menu-item" + (_0x29599e.danger ? " gf-menu-item--danger" : ""), onClick: () => {
    var _0x574ab6, _0x4ec799;
    _0x40a243(!1), (_0x574ab6 = _0x435dd1.current) == null || _0x574ab6.focus(), (_0x4ec799 = _0x29599e.onSelect) == null || _0x4ec799.call(_0x29599e);
  }, children: _0x29599e.label }, _0x29599e.label + _0x453854)) }) : null] }) })] });
}
let C = !1;
function I() {
  return _0xa0c7d9.useInsertionEffect(() => {
    if (!C && typeof document < "u") {
      if (!document.getElementById("gf-shared-styles")) {
        const _0x591ee5 = document.createElement("style");
        _0x591ee5.id = "gf-shared-styles", _0x591ee5.textContent = z, document.head.appendChild(_0x591ee5);
      }
      C = !0;
    }
  }, []), null;
}
const z = `
.gf-root {
  --gf-px: 0;
  --gf-py: 0;
  --gf-ease: cubic-bezier(.2, .8, .2, 1);
  --gf-spring: cubic-bezier(.22, 1, .36, 1);
  --gf-hinge: 0deg;
  --gf-lift: 42px;
  --gf-spread: 0px;
  --gf-fan: 0deg;
  --gf-stack: 15px;
  --gf-ink: #141416;
  --gf-ink-soft: rgba(20, 20, 22, .55);
  position: relative;
  display: inline-block;
  flex: none;
  vertical-align: top;
  font-family: ui-sans-serif, system-ui, -apple-system, "SF Pro Text", "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -webkit-tap-highlight-color: transparent;
  isolation: isolate;
}
.gf-root[data-tone="dark"] { --gf-ink: #f5f5f7; --gf-ink-soft: rgba(245, 245, 247, .58); }
.gf-root:hover, .gf-root:focus-within { --gf-hinge: -11deg; --gf-lift: -34px; --gf-spread: 8px; --gf-fan: 1.4deg; --gf-stack: 10px; }
.gf-root[data-open] { --gf-hinge: -24deg; --gf-lift: -96px; --gf-spread: 40px; --gf-fan: 5deg; --gf-stack: 30px; }

.gf-stage {
  position: absolute;
  left: 0;
  top: 0;
  width: 340px;
  height: 272px;
  transform-origin: 0 0;
}
.gf-tilt {
  position: absolute;
  inset: 0;
  transform: none;
  transition: transform .18s linear;
}
.gf-root:hover .gf-tilt {
  transform: perspective(1400px) rotateX(calc(var(--gf-py) * -3deg)) rotateY(calc(var(--gf-px) * 4deg));
}

.gf-shadow {
  position: absolute;
  left: 4px;
  right: 4px;
  bottom: -18px;
  height: 84px;
  border-radius: 50%;
  background: radial-gradient(ellipse at center, rgba(16, 18, 24, .36) 0%, rgba(16, 18, 24, 0) 72%);
  transform: translateX(calc(var(--gf-px) * -6px));
  transition: opacity .9s var(--gf-ease);
  pointer-events: none;
}
.gf-root[data-tone="dark"] .gf-shadow {
  background: radial-gradient(ellipse at center, rgba(0, 0, 0, .68) 0%, rgba(0, 0, 0, 0) 72%);
}

.gf-back {
  position: absolute;
  inset: 0;
  overflow: hidden;
  background: linear-gradient(180deg, #f3f3f4 0%, #e3e3e6 100%);
}
.gf-root[data-tone="dark"] .gf-back {
  background: linear-gradient(180deg, rgba(36, 39, 48, 0.92) 0%, rgba(15, 17, 23, 0.96) 100%);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.16), inset 0 0 18px rgba(0, 0, 0, 0.5);
}
.gf-art {
  position: absolute;
  left: -12px;
  top: -12px;
  width: 364px;
  height: 296px;
  max-width: none;
  object-fit: cover;
  transform: translate(calc(var(--gf-px) * -7px), calc(var(--gf-py) * -6px)) scale(1.02);
  transition: transform 1.1s var(--gf-ease), opacity 1.2s var(--gf-ease), filter 1.2s var(--gf-ease);
}
canvas.gf-art { opacity: 0; filter: blur(14px) saturate(.6); }
canvas.gf-art[data-ready] { opacity: 1; filter: none; }
.gf-back-sheen {
  position: absolute;
  inset: 0;
  background:
    linear-gradient(180deg, rgba(255, 255, 255, .15) 0%, rgba(255, 255, 255, 0) 24%),
    radial-gradient(120% 80% at 80% 0%, rgba(255, 255, 255, .12), rgba(255, 255, 255, 0) 60%);
  pointer-events: none;
}

.gf-rim {
  position: absolute;
  left: 0;
  top: 0;
  max-width: none;
  overflow: visible;
  pointer-events: none;
  fill: none;
}
.gf-back-rim { width: 340px; height: 272px; }
.gf-back-rim path { stroke: rgba(255, 255, 255, .45); stroke-width: 1; }
.gf-root[data-tone="dark"] .gf-back-rim path { stroke: rgba(255, 255, 255, .2); stroke-width: 1.5; }

/* ---- files ---------------------------------------------------------------- */
.gf-files {
  position: absolute;
  inset: 0;
  z-index: 5;
  pointer-events: none;
  clip-path: inset(-130px -36px 10px -36px);
}
.gf-sheet-slot { display: contents; }
.gf-sheet {
  all: unset;
  box-sizing: border-box;
  position: absolute;
  left: 34px;
  top: 96px;
  width: 272px;
  height: 184px;
  border-radius: 16px;
  overflow: hidden;
  cursor: pointer;
  pointer-events: auto;
  background: linear-gradient(180deg, #ffffff 0%, #f2f2f0 100%);
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, .9),
    0 0 0 .5px rgba(0, 0, 0, .1),
    0 10px 26px -8px rgba(10, 12, 20, .28);
  transform-origin: 50% 100%;
  transform:
    translate(calc(var(--gf-jx) + var(--gf-slot) * var(--gf-spread)), calc(var(--gf-lift) + var(--gf-depth) * var(--gf-stack) * -1))
    rotate(calc(var(--gf-jr) + var(--gf-slot) * var(--gf-fan)));
  transition:
    transform .75s var(--gf-spring) calc(var(--gf-depth) * 40ms),
    box-shadow .4s var(--gf-ease),
    translate .9s var(--gf-ease),
    opacity .9s var(--gf-ease);
}
.gf-root[data-tone="dark"] .gf-sheet { background: linear-gradient(180deg, #2c2c30 0%, #1c1c1f 100%); box-shadow: inset 0 1px 0 rgba(255, 255, 255, .14), 0 0 0 .5px rgba(255, 255, 255, .08), 0 12px 28px -8px rgba(0, 0, 0, .7); }
.gf-sheet--art { background: #1a1a1d; }
.gf-root[data-open] .gf-sheet:hover,
.gf-root[data-open] .gf-sheet:focus-visible {
  transform:
    translate(calc(var(--gf-jx) + var(--gf-slot) * var(--gf-spread)), calc(var(--gf-lift) + var(--gf-depth) * var(--gf-stack) * -1 - 18px))
    rotate(calc(var(--gf-slot) * var(--gf-fan) * .6));
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, .9), 0 0 0 .5px rgba(0, 0, 0, .1), 0 22px 40px -12px rgba(10, 12, 20, .42);
  transition-delay: 0s;
}
.gf-sheet:focus-visible { outline: 2px solid #4c8dff; outline-offset: 2px; }
.gf-sheet-art {
  position: absolute;
  left: 0;
  top: 0;
  width: 272px;
  height: 184px;
  max-width: none;
  object-fit: cover;
  transition: opacity .9s var(--gf-ease), filter .9s var(--gf-ease);
}
canvas.gf-sheet-art { opacity: 0; filter: blur(10px); }
canvas.gf-sheet-art[data-ready] { opacity: 1; filter: none; }
.gf-sheet--art::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: inherit;
  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, .18), inset 0 1px 0 rgba(255, 255, 255, .25);
  pointer-events: none;
}
.gf-sheet-head {
  position: absolute;
  left: 14px;
  right: 14px;
  top: 11px;
  z-index: 1;
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 10px;
  white-space: nowrap;
}
.gf-sheet-name {
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 12.5px;
  font-weight: 560;
  letter-spacing: -.005em;
  color: #18181b;
}
.gf-sheet-meta {
  flex: none;
  font-family: ui-monospace, "SF Mono", SFMono-Regular, Menlo, Consolas, monospace;
  font-size: 10px;
  letter-spacing: .02em;
  color: rgba(24, 24, 27, .5);
}
.gf-root[data-tone="dark"] .gf-sheet-name, .gf-sheet--art .gf-sheet-name { color: #ffffff; text-shadow: 0 1px 4px rgba(0, 0, 0, 0.9); }
.gf-root[data-tone="dark"] .gf-sheet-meta, .gf-sheet--art .gf-sheet-meta { color: rgba(255, 255, 255, 0.85); text-shadow: 0 1px 4px rgba(0, 0, 0, 0.9); }
.gf-lines {
  position: absolute;
  left: 14px;
  right: 14px;
  top: 40px;
  display: flex;
  flex-direction: column;
  gap: 9px;
}
.gf-lines i {
  display: block;
  height: 5px;
  border-radius: 3px;
  background: rgba(24, 24, 27, .08);
}
.gf-lines i:first-child { height: 9px; margin-bottom: 4px; background: rgba(24, 24, 27, .14); }
.gf-root[data-tone="dark"] .gf-lines i { background: rgba(255, 255, 255, .08); }
.gf-root[data-tone="dark"] .gf-lines i:first-child { background: rgba(255, 255, 255, .16); }

.gf-sheet--drop { animation: gf-drop .65s var(--gf-ease) both; }
@keyframes gf-drop {
  0% { translate: 0 -160px; rotate: -6deg; opacity: 0; }
  40% { opacity: 1; }
  100% { translate: 0 0; rotate: 0deg; opacity: 1; }
}

/* ---- front glass ----------------------------------------------------------- */
.gf-front {
  position: absolute;
  left: 0;
  top: 74px;
  width: 340px;
  height: 198px;
  z-index: 10;
  transform-origin: 50% 100%;
  transform: none;
  transition: transform .8s var(--gf-spring), translate 1s var(--gf-ease), opacity 1s var(--gf-ease);
}
.gf-root:hover .gf-front,
.gf-root:focus-within .gf-front,
.gf-root[data-open] .gf-front {
  transform: perspective(760px) rotateX(var(--gf-hinge));
}
.gf-front--bump { animation: gf-bump .5s var(--gf-ease) .3s both; }
@keyframes gf-bump {
  0% { scale: 1; }
  50% { scale: .99 .985; }
  100% { scale: 1; }
}
.gf-tint {
  position: absolute;
  inset: 0;
  background:
    linear-gradient(180deg, rgba(255, 255, 255, .82) 0%, rgba(248, 248, 250, .93) 46%, rgba(242, 242, 245, .99) 100%);
}
.gf-root[data-tone="dark"] .gf-tint {
  background: linear-gradient(180deg, rgba(36, 40, 50, .86) 0%, rgba(19, 21, 28, .94) 48%, rgba(10, 11, 15, .99) 100%);
}
.gf-spec {
  position: absolute;
  inset: 0;
  background: radial-gradient(260px 200px at calc(50% + var(--gf-px) * 46%) calc(30% + var(--gf-py) * 40%), rgba(255, 255, 255, .36), rgba(255, 255, 255, 0) 70%);
  opacity: .9;
  pointer-events: none;
}
.gf-root[data-tone="dark"] .gf-spec {
  background: radial-gradient(260px 200px at calc(50% + var(--gf-px) * 46%) calc(30% + var(--gf-py) * 40%), rgba(255, 255, 255, .13), rgba(255, 255, 255, 0) 70%);
  opacity: 1;
}
.gf-front-rim { width: 340px; height: 198px; }
.gf-front-rim path { stroke-width: 2.4; transition: stroke-width .3s var(--gf-ease); }
.gf-root[data-tone="dark"] .gf-front-rim { opacity: .55; }

.gf-hit {
  all: unset;
  position: absolute;
  inset: 0;
  z-index: 1;
  cursor: pointer;
}
.gf-hit:focus-visible ~ .gf-label .gf-title { text-decoration: underline; text-decoration-thickness: 1.5px; text-underline-offset: 4px; }
.gf-front:has(.gf-hit:focus-visible) .gf-front-rim path { stroke-width: 5; }

.gf-label {
  position: absolute;
  z-index: 2;
  display: flex;
  flex-direction: column;
  gap: 2px;
  max-width: 200px;
  pointer-events: none;
  color: var(--gf-ink);
}
.gf-root[data-place="bottom-left"] .gf-label { left: 28px; bottom: 28px; }
.gf-root[data-place="top-left"] .gf-label { left: 28px; top: 34px; }
.gf-root[data-place="top-right"] .gf-label { right: 32px; top: 52px; align-items: flex-start; }
.gf-meta {
  font-family: var(--font-display), system-ui, -apple-system, sans-serif;
  font-size: 32px;
  font-weight: 700;
  line-height: 1;
  letter-spacing: -0.02em;
  color: var(--gf-ink);
  white-space: nowrap;
  animation: gf-roll .5s var(--gf-ease) both;
}
.gf-root[data-tone="dark"] .gf-meta {
  color: #ffffff;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
}
.gf-title {
  font-family: var(--font-display), system-ui, -apple-system, sans-serif;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.2;
  letter-spacing: 0.02em;
  color: var(--gf-ink-soft);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.gf-root[data-tone="dark"] .gf-title {
  color: rgba(255, 255, 255, 0.78);
  text-shadow: 0 1px 4px rgba(0, 0, 0, 0.5);
}
@keyframes gf-roll {
  from { opacity: 0; translate: 0 5px; }
  to { opacity: 1; translate: 0 0; }
}

/* ---- the key: + or \xB7\xB7\xB7 ------------------------------------------------------ */
.gf-key {
  all: unset;
  box-sizing: border-box;
  position: absolute;
  right: 22px;
  bottom: 22px;
  z-index: 12;
  width: 58px;
  height: 58px;
  border-radius: 18px;
  display: grid;
  place-items: center;
  cursor: pointer;
  transition: transform .35s var(--gf-spring), box-shadow .35s var(--gf-ease), background .35s var(--gf-ease);
}
.gf-key:hover { transform: translateY(-2px); }
.gf-key:active { transform: translateY(0) scale(.93); transition-duration: .12s; }
.gf-key:focus-visible { outline: 2px solid #4c8dff; outline-offset: 3px; }
.gf-key--add {
  color: #fff;
  background: radial-gradient(120% 90% at 50% 0%, #3a3a3f 0%, #121214 55%, #050506 100%);
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, .22),
    inset 0 -3px 8px rgba(0, 0, 0, .7),
    0 0 0 1px rgba(0, 0, 0, .75),
    0 14px 22px -8px rgba(0, 0, 0, .55),
    0 3px 6px -2px rgba(0, 0, 0, .35);
}
.gf-root[data-tone="dark"] .gf-key--add {
  color: #111113;
  background: radial-gradient(120% 90% at 50% 0%, #ffffff 0%, #ececee 55%, #d2d2d6 100%);
  box-shadow: inset 0 1px 0 #fff, inset 0 -3px 8px rgba(0, 0, 0, .14), 0 0 0 1px rgba(0, 0, 0, .4), 0 14px 22px -8px rgba(0, 0, 0, .7);
}
.gf-key--more {
  color: #111113;
  background: linear-gradient(180deg, rgba(255, 255, 255, .94) 0%, rgba(226, 226, 230, .88) 100%);
  box-shadow:
    inset 0 1px 0 #fff,
    inset 0 -2px 4px rgba(0, 0, 0, .06),
    0 0 0 1px rgba(0, 0, 0, .16),
    0 10px 18px -8px rgba(0, 0, 0, .3);
}
.gf-root[data-tone="dark"] .gf-key--more {
  color: #f5f5f7;
  background: linear-gradient(180deg, rgba(46, 46, 52, .92) 0%, rgba(28, 28, 32, .94) 100%);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, .22), 0 0 0 1px rgba(255, 255, 255, .1), 0 10px 18px -8px rgba(0, 0, 0, .6);
}
.gf-key--more[aria-expanded="true"] { transform: scale(.96); }
.gf-glyph { display: block; max-width: none; fill: none; stroke: currentColor; stroke-linecap: round; }
.gf-glyph--plus { width: 26px; height: 26px; stroke-width: 1.6; animation: gf-turn .6s var(--gf-spring); }
.gf-glyph--more { width: 30px; height: 12px; stroke-width: 1.7; }
@keyframes gf-turn { from { rotate: -90deg; } to { rotate: 0deg; } }

/* ---- menu ------------------------------------------------------------------- */
.gf-menu {
  position: absolute;
  right: 22px;
  bottom: 90px;
  z-index: 20;
  min-width: 176px;
  padding: 6px;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  background: rgba(252, 252, 253, .92);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, .9), 0 0 0 .5px rgba(0, 0, 0, .14), 0 24px 48px -16px rgba(10, 12, 20, .4);
  transform-origin: 100% 100%;
  opacity: 0;
  visibility: hidden;
  transform: translateY(6px) scale(.94);
  transition: opacity .2s var(--gf-ease), transform .32s var(--gf-spring), visibility 0s .32s;
}
.gf-menu[data-open] {
  opacity: 1;
  visibility: visible;
  transform: none;
  transition-delay: 0s;
  -webkit-backdrop-filter: blur(12px);
  backdrop-filter: blur(12px);
}
.gf-root[data-tone="dark"] .gf-menu { background: rgba(28, 28, 32, .94); box-shadow: inset 0 1px 0 rgba(255, 255, 255, .1), 0 0 0 .5px rgba(255, 255, 255, .1), 0 24px 48px -16px rgba(0, 0, 0, .8); }
.gf-menu-item {
  all: unset;
  box-sizing: border-box;
  padding: 9px 12px;
  border-radius: 10px;
  font-size: 13.5px;
  font-weight: 450;
  color: #18181b;
  cursor: pointer;
}
.gf-root[data-tone="dark"] .gf-menu-item { color: #f4f4f5; }
.gf-menu-item:hover, .gf-menu-item:focus-visible { background: rgba(24, 24, 27, .07); }
.gf-root[data-tone="dark"] .gf-menu-item:hover, .gf-root[data-tone="dark"] .gf-menu-item:focus-visible { background: rgba(255, 255, 255, .09); }
.gf-menu-item--danger { color: #d92d20; }
.gf-root[data-tone="dark"] .gf-menu-item--danger { color: #ff6b5e; }

/* ---- entrance: the folder assembles itself ---------------------------------- */
.gf-root:not([data-entered]) .gf-back,
.gf-root:not([data-entered]) .gf-back-rim { translate: 0 22px; opacity: 0; }
.gf-root:not([data-entered]) .gf-sheet { translate: 0 -120px; opacity: 0; }
.gf-root:not([data-entered]) .gf-front { translate: 0 46px; opacity: 0; }
.gf-root:not([data-entered]) .gf-key { opacity: 0; scale: .6; }
.gf-root:not([data-entered]) .gf-shadow { opacity: 0; }
.gf-back, .gf-back-rim { transition: translate 1s var(--gf-ease), opacity .9s var(--gf-ease); }
.gf-root[data-entered] .gf-sheet { transition-delay: calc(var(--gf-depth) * 40ms), 0s, calc(.18s + var(--gf-depth) * 90ms), calc(.18s + var(--gf-depth) * 90ms); }
.gf-root[data-entered] .gf-front { transition-delay: 0s, .42s, .42s; }
.gf-key { transition: transform .35s var(--gf-spring), box-shadow .35s var(--gf-ease), opacity .6s var(--gf-ease) .7s, scale .7s var(--gf-spring) .7s; }

@media (prefers-reduced-motion: reduce) {
  .gf-root *, .gf-root *::before, .gf-root *::after {
    transition-duration: 0s !important;
    transition-delay: 0s !important;
    animation: none !important;
  }
  .gf-tilt { transform: none; }
}
`, A = _0xa0c7d9.memo(() => _0x949dd5.jsx("div", { className: "text-center lg:mb-10 mb-4 sm:mb-8 px-[5%]", children: _0x949dd5.jsx("div", { "data-aos": "fade-up", "data-aos-duration": "600", children: _0x949dd5.jsx("h2", { className: "section-label mx-auto", style: { fontFamily: "var(--font-display)" }, children: "About Me" }) }) })), E = _0xa0c7d9.memo(() => {
  const [_0x26af04, _0x59b850] = _0xa0c7d9.useState(!1), [_0x285891, _0x3d2dfa] = _0xa0c7d9.useState(!1), [_0x5bf93f, _0x23d1b8] = _0xa0c7d9.useState(!1), [_0x268571, _0x281e7d] = _0xa0c7d9.useState(!1), _0x408df3 = _0xa0c7d9.useRef(null), _0x5f3e20 = _0xa0c7d9.useRef(null), _0xc415d2 = _0x218d86(-1e3), _0x3d3da2 = _0x218d86(-1e3), _0x2ce639 = { damping: 25, stiffness: 250, mass: 0.5 }, _0x21afc5 = _0x24eea3(_0xc415d2, _0x2ce639), _0x1b1fec = _0x24eea3(_0x3d3da2, _0x2ce639), _0x1d9399 = _0x4a06f8`radial-gradient(circle 115px at ${_0x21afc5}px ${_0x1b1fec}px, black 58%, transparent 100%)`, _0x2b9489 = _0xa0c7d9.useCallback((_0x2c34d6) => {
    _0x5f3e20.current = _0x2c34d6.currentTarget.getBoundingClientRect(), _0x59b850(!0), _0x281e7d(!0);
  }, []), _0x2cbbb7 = _0xa0c7d9.useCallback((_0x5ebc75) => {
    const _0x3ab9fd = _0x5f3e20.current || (_0x5f3e20.current = _0x5ebc75.currentTarget.getBoundingClientRect());
    _0xc415d2.set(_0x5ebc75.clientX - _0x3ab9fd.left), _0x3d3da2.set(_0x5ebc75.clientY - _0x3ab9fd.top);
  }, [_0xc415d2, _0x3d3da2]), _0x44d697 = _0xa0c7d9.useCallback(() => {
    _0x5f3e20.current = null, _0x59b850(!1), _0xc415d2.set(-1e3), _0x3d3da2.set(-1e3);
  }, [_0xc415d2, _0x3d3da2]);
  return _0xa0c7d9.useEffect(() => {
    _0x3d2dfa(window.matchMedia("(hover: none)").matches);
  }, []), _0xa0c7d9.useEffect(() => {
    const _0x2533f6 = _0x408df3.current;
    if (!_0x2533f6) return;
    const _0x1f528f = new IntersectionObserver(([_0x1f8e37]) => {
      _0x1f8e37.isIntersecting ? _0x23d1b8(!0) : (_0x5f3e20.current = null, _0x59b850(!1), _0xc415d2.set(-1e3), _0x3d3da2.set(-1e3));
    }, { threshold: 0.2 });
    return _0x1f528f.observe(_0x2533f6), () => _0x1f528f.disconnect();
  }, [_0xc415d2, _0x3d3da2]), _0x949dd5.jsx("div", { ref: _0x408df3, className: "flex justify-center items-center w-full max-w-md mx-auto lg:max-w-none", children: _0x949dd5.jsx("div", { className: "relative group flex-shrink-0", "data-aos": "fade-up", "data-aos-duration": "1000", children: _0x949dd5.jsx("div", { className: "relative z-10", style: { WebkitMaskImage: "linear-gradient(to bottom, black 75%, transparent 100%)", maskImage: "linear-gradient(to bottom, black 75%, transparent 100%)", isolation: "isolate" }, children: _0x949dd5.jsxs("div", { className: "w-[min(320px,82vw)] h-[min(320px,82vw)] sm:w-[460px] sm:h-[460px] lg:w-[700px] lg:h-[700px] cursor-none relative", onMouseEnter: _0x2b9489, onMouseMove: _0x2cbbb7, onMouseLeave: _0x44d697, children: [_0x949dd5.jsx("img", { src: "/Photo.webp", alt: "Profile", decoding: "async", className: "absolute inset-0 w-full h-full object-contain object-bottom pointer-events-none", loading: "lazy" }), _0x5bf93f && !_0x268571 && !_0x26af04 && _0x949dd5.jsx("div", { className: "absolute inset-0 pointer-events-none z-10 animate-spiderman-hint", onAnimationEnd: () => _0x281e7d(!0), children: _0x949dd5.jsx("img", { src: "/PhotoSpiderman.webp", alt: "Hint", decoding: "async", className: "w-full h-full object-contain object-bottom" }) }), _0x26af04 && _0x949dd5.jsx(_0x2c2cef.div, { className: "absolute inset-0 pointer-events-none z-10", style: { WebkitMaskImage: _0x1d9399, maskImage: _0x1d9399, WebkitMaskRepeat: "no-repeat", maskRepeat: "no-repeat" }, children: _0x949dd5.jsx("img", { src: "/PhotoSpiderman.webp", alt: "Reveal", decoding: "async", className: "w-full h-full object-contain object-bottom" }) }), !_0x285891 && _0x26af04 && _0x949dd5.jsx(_0x2c2cef.div, { className: "absolute left-0 top-0 w-2.5 h-2.5 -ml-1.25 -mt-1.25 rounded-full pointer-events-none z-50 bg-white shadow-[0_0_0_1.5px_rgba(0,0,0,0.55)]", style: { x: _0x21afc5, y: _0x1b1fec } })] }) }) }) });
}), F = [{ title: "Hology 9.0", category: "Web App", img: "/uploads/proj-hology.jpg" }, { title: "RujukCepat Website", category: "Full Stack", img: "/uploads/proj-rujukcepat.png" }, { title: "RisetIn", category: "UI / UX", img: "/uploads/proj-risetin.png" }, { title: "Luma APPS", category: "Mobile & Web", img: "/uploads/proj-luma.png" }], L = [{ category: "keahlian", img: "/uploads/cert-15-gcloud.webp" }, { category: "keahlian", img: "/uploads/cert-14-055815.png" }, { category: "keahlian", img: "/uploads/cert-13-061803.png" }, { category: "keahlian", img: "/uploads/cert-12-061646.png" }, { category: "keahlian", img: "/uploads/cert-11-061435.png" }, { category: "keahlian", img: "/uploads/cert-10-061109.png" }], P = [{ category: "prestasi", img: "/uploads/cert-16-prestasi.jpeg" }, { category: "prestasi", img: "/uploads/cert-8-rauiux.jpg" }, { category: "prestasi", img: "/uploads/cert-7-finalis.jpg" }, { category: "prestasi", img: "/uploads/cert-6-bronze.jpg" }], B = [{ id: "edu-1", school: "Universitas Brawijaya", degree: "Information Technology Education", faculty: "Faculty of Computer Science (FILKOM UB)", year: "2025 \u2013 Present", tag: "Undergraduate", logo: "/ub.png" }, { id: "edu-2", school: "SMKN WINONGAN", degree: "Teknik Komputer dan Jaringan", faculty: "Vocational High School", year: "2021 \u2013 2024", tag: "TKJ", logo: "/smkn.png" }], O = [{ id: "exp-1", company: "Google Indonesia", role: "Google Student Ambassador", year: "2026", subtitle: "Google Indonesia", tag: "Ambassador", logo: "" }, { id: "exp-2", company: "Google Developer Groups on Campus Brawijaya University", role: "Core Team Member", year: "2025 \u2013 2026", subtitle: "Universitas Brawijaya", tag: "Community", logo: "" }, { id: "exp-3", company: "Hology 9.0", role: "Staff Technology | UI/UX Designer", year: "2026", subtitle: "FILKOM UB", tag: "Committee", logo: "" }, { id: "exp-4", company: "Faculty of Computer Science (FILKOM) UB", role: "Teaching Assistant : Basic Programming of Java", year: "2026", subtitle: "Departemen Sistem Informasi", tag: "Academic", logo: "/ub.png" }, { id: "exp-5", company: "SINAU BARENG DSI", role: "Pemateri Pemrograman Dasar Java", year: "2026", subtitle: "FILKOM UB", tag: "Speaker", logo: "" }, { id: "exp-6", company: "Raion Community", role: "Raion Internship \u2014 UI/UX Designer", year: "2026", subtitle: "Malang", tag: "Internship", logo: "" }, { id: "exp-7", company: "PT Cubiespot Pilar Data Nusantara", role: "Network Management", year: "2023", subtitle: "Pasuruan", tag: "Internship", logo: "" }], R = _0xa0c7d9.memo(({ logo: _0x2901d7, name: _0x54c438 }) => {
  const _0x31dca5 = ((_0x47cd2b, _0x249e0e) => {
    if (_0x47cd2b && !_0x47cd2b.includes("yhbvnhccgdpukbuwsscd")) return _0x47cd2b;
    const _0x502e2d = (_0x249e0e || "").toLowerCase();
    return _0x502e2d.includes("google") && !_0x502e2d.includes("developer") ? "/uploads/exp-gsa.jpg" : _0x502e2d.includes("gdg") || _0x502e2d.includes("developer groups") ? "/uploads/exp-gdgoc.png" : _0x502e2d.includes("hology") ? "/uploads/exp-hology.png" : _0x502e2d.includes("raion") ? "/uploads/exp-raion.png" : _0x502e2d.includes("cubiespot") ? "/uploads/exp-cubie.png" : _0x502e2d.includes("sinau bareng") ? "/uploads/exp-sinau.jpg" : _0x502e2d.includes("brawijaya") || _0x502e2d.includes("filkom") ? "/uploads/exp-filkom.jpg" : "";
  })(_0x2901d7, _0x54c438);
  if (_0x31dca5) return _0x949dd5.jsx("div", { className: "w-10 h-10 rounded-xl bg-white/5 border border-white/10 p-1 flex items-center justify-center flex-shrink-0 overflow-hidden", children: _0x949dd5.jsx("img", { src: _0x31dca5, alt: _0x54c438 || "Logo", width: 40, height: 40, loading: "lazy", className: "w-full h-full object-contain rounded-lg", onError: (_0x30a4b2) => {
    _0x30a4b2.currentTarget.style.display = "none";
  } }) });
  const _0x3f5461 = (_0x54c438 || "").toLowerCase();
  if (_0x3f5461.includes("google")) return _0x949dd5.jsx("div", { className: "w-10 h-10 rounded-xl bg-blue-500/15 border border-blue-500/30 text-blue-400 font-bold flex items-center justify-center flex-shrink-0 text-sm", children: "G" });
  if (_0x3f5461.includes("hology")) return _0x949dd5.jsx("div", { className: "w-10 h-10 rounded-xl bg-purple-500/15 border border-purple-500/30 text-purple-400 font-bold flex items-center justify-center flex-shrink-0 text-xs", children: "</>" });
  if (_0x3f5461.includes("raion")) return _0x949dd5.jsx("div", { className: "w-10 h-10 rounded-xl bg-amber-500/15 border border-amber-500/30 text-amber-400 font-bold flex items-center justify-center flex-shrink-0 text-xs", children: "RN" });
  if (_0x3f5461.includes("brawijaya") || _0x3f5461.includes("filkom")) return _0x949dd5.jsx("div", { className: "w-10 h-10 rounded-xl bg-sky-500/15 border border-sky-500/30 text-sky-400 font-bold flex items-center justify-center flex-shrink-0 text-xs", children: "UB" });
  const _0x124ec3 = (_0x54c438 || "EX").split(" ").filter(Boolean).slice(0, 2).map((_0x1f0429) => _0x1f0429[0]).join("").toUpperCase();
  return _0x949dd5.jsx("div", { className: "w-10 h-10 rounded-xl bg-white/5 border border-white/15 text-zinc-300 font-bold font-mono flex items-center justify-center flex-shrink-0 text-xs tracking-tight", children: _0x124ec3 });
}), U = _0xa0c7d9.memo(() => {
  const [_0x434d98, _0x126f38] = _0xa0c7d9.useState(() => typeof window > "u" || window.matchMedia("(min-width: 1024px)").matches), [_0x207086, _0x1fbf4f] = _0xa0c7d9.useState(() => typeof window < "u" ? Math.min(320, Math.max(260, window.innerWidth - 48)) : 320), [_0x168aba, _0x210f3e] = _0xa0c7d9.useState({ totalProjects: 0, totalCertificates: 0, totalAwards: 0 }), [_0x41a43e, _0x21a617] = _0xa0c7d9.useState(() => {
    try {
      const _0x28dc65 = localStorage.getItem("projects") || "[]";
      if (_0x28dc65.includes("yhbvnhccgdpukbuwsscd")) return localStorage.removeItem("projects"), F;
      const _0x4e5f4e = JSON.parse(_0x28dc65);
      return _0x4e5f4e.length > 0 ? _0x4e5f4e : F;
    } catch {
      return F;
    }
  }), [_0x4c39aa, _0x58cb61] = _0xa0c7d9.useState(() => {
    try {
      const _0x4d8da2 = localStorage.getItem("certificates") || "[]";
      if (_0x4d8da2.includes("yhbvnhccgdpukbuwsscd")) return localStorage.removeItem("certificates"), L;
      const _0x30a793 = JSON.parse(_0x4d8da2).filter((_0x1a890e) => _0x1a890e.category === "keahlian");
      return _0x30a793.length > 0 ? _0x30a793 : L;
    } catch {
      return L;
    }
  }), [_0x2c3ddc, _0x560851] = _0xa0c7d9.useState(() => {
    try {
      const _0x2265b1 = localStorage.getItem("certificates") || "[]";
      if (_0x2265b1.includes("yhbvnhccgdpukbuwsscd")) return P;
      const _0x4e538c = JSON.parse(_0x2265b1).filter((_0x463545) => _0x463545.category === "prestasi");
      return _0x4e538c.length > 0 ? _0x4e538c : P;
    } catch {
      return P;
    }
  });
  _0xa0c7d9.useEffect(() => {
    (async () => {
      var _0x1e84b5, _0x365ff3, _0xd35891;
      try {
        const [_0xb0dccb, _0x2d5f39] = await Promise.all([_0x2080b5.from("projects").select("*").order("id", { ascending: !1 }), _0x2080b5.from("certificates").select("*").order("id", { ascending: !1 })]), _0x309841 = (_0x5bfc15, _0x396c8f) => _0x5bfc15.length === _0x396c8f.length && _0x5bfc15.every((_0x5ad398, _0x411860) => {
          var _0x18e00b;
          return _0x5ad398?.img === ((_0x18e00b = _0x396c8f[_0x411860]) == null ? void 0 : _0x18e00b.img);
        });
        if (_0xb0dccb.data && _0xb0dccb.data.length > 0 && (_0x21a617((_0x495807) => _0x309841(_0x495807, _0xb0dccb.data) ? _0x495807 : _0xb0dccb.data), localStorage.setItem("projects", JSON.stringify(_0xb0dccb.data))), _0x2d5f39.data && _0x2d5f39.data.length > 0) {
          const _0x31bbd4 = _0x2d5f39.data, _0x188e89 = _0x31bbd4.filter((_0x358520) => _0x358520.category === "keahlian"), _0x1e4ae9 = new Set(_0x188e89.map((_0x48119f) => _0x48119f.img)), _0x12b014 = [..._0x188e89, ...L.filter((_0x1d25d1) => !_0x1e4ae9.has(_0x1d25d1.img))], _0xd80060 = _0x31bbd4.filter((_0x4d32fb) => _0x4d32fb.category === "prestasi");
          _0x58cb61((_0x3654a0) => _0x309841(_0x3654a0, _0x12b014) ? _0x3654a0 : _0x12b014), _0x560851((_0x366852) => _0x309841(_0x366852, _0xd80060) ? _0x366852 : _0xd80060), localStorage.setItem("certificates", JSON.stringify([..._0x12b014, ..._0xd80060]));
        }
        const _0x1365e3 = ((_0x1e84b5 = _0xb0dccb.data) == null ? void 0 : _0x1e84b5.length) || _0x41a43e.length, _0x504626 = ((_0x365ff3 = _0x2d5f39.data) == null ? void 0 : _0x365ff3.filter((_0x13ad86) => _0x13ad86.category === "keahlian").length) || 0, _0x148ffb = Math.max(_0x504626, L.length), _0x4ee885 = ((_0xd35891 = _0x2d5f39.data) == null ? void 0 : _0xd35891.filter((_0x259093) => _0x259093.category === "prestasi").length) || _0x2c3ddc.length;
        _0x210f3e({ totalProjects: _0x1365e3, totalCertificates: _0x148ffb, totalAwards: _0x4ee885 });
      } catch {
      }
    })();
  }, []);
  const [_0xe26741, _0x298847] = _0xa0c7d9.useState([]), [_0x2994ff, _0x20d290] = _0xa0c7d9.useState(!0), [_0x474b79, _0x391aa6] = _0xa0c7d9.useState(null), [_0x2db279, _0x5e76c2] = _0xa0c7d9.useState(null), _0x3a275e = _0xa0c7d9.useRef(null), _0x50ceb5 = _0x474b79 !== null ? _0x474b79 : 0, _0x10ccf2 = _0x2db279 !== null ? _0x2db279 : 0, _0x2e27c1 = _0xa0c7d9.useMemo(() => _0xe26741 && _0xe26741.length > 0 ? _0xe26741 : O, [_0xe26741]), _0x35301b = _0xa0c7d9.useCallback(() => {
    if (_0x3a275e.current) {
      const _0xcc3ec5 = _0x3a275e.current;
      _0xcc3ec5.scrollTop + _0xcc3ec5.clientHeight >= _0xcc3ec5.scrollHeight - 25 ? _0xcc3ec5.scrollTo({ top: 0, behavior: "smooth" }) : _0xcc3ec5.scrollTo({ top: _0xcc3ec5.scrollTop + 110, behavior: "smooth" });
    }
  }, []);
  _0xa0c7d9.useEffect(() => {
    const _0x4dc209 = async () => {
      let { data: _0x478351, error: _0xafd421 } = await _0x2080b5.from("experiences").select("*").order("order_index", { ascending: !0, nullsFirst: !1 }).order("created_at", { ascending: !1 });
      !_0xafd421 && _0x478351 || (_0x478351 = (await _0x2080b5.from("experiences").select("*").order("created_at", { ascending: !1 })).data || []), _0x298847(_0x478351 || []), _0x20d290(!1);
    };
    _0x4dc209();
    const _0x13fb2c = _0x2080b5.channel("public:experiences").on("postgres_changes", { event: "*", schema: "public", table: "experiences" }, () => {
      _0x4dc209();
    }).subscribe();
    return () => {
      _0x2080b5.removeChannel(_0x13fb2c);
    };
  }, []);
  const _0x230898 = _0xa0c7d9.useMemo(() => (_0x41a43e.length > 0 ? _0x41a43e : F).slice(0, 4).map((_0x2a7f48, _0x6813ce) => ({ name: "", meta: "", image: _0x2a7f48.img || F[_0x6813ce % F.length].img })), [_0x41a43e]), _0x5583f2 = _0xa0c7d9.useMemo(() => (_0x4c39aa.length > 0 ? _0x4c39aa : L).slice(0, 4).map((_0x30ccac, _0x569275) => ({ name: "", meta: "", image: _0x30ccac.img || L[_0x569275 % L.length].img })), [_0x4c39aa]), _0x545357 = _0xa0c7d9.useMemo(() => (_0x2c3ddc.length > 0 ? _0x2c3ddc : P).slice(0, 4).map((_0x568d08, _0x8317a9) => ({ name: "", meta: "", image: _0x568d08.img || P[_0x8317a9 % P.length].img })), [_0x2c3ddc]);
  _0xa0c7d9.useEffect(() => {
    const _0x4d0fd9 = window.matchMedia("(min-width: 1024px)"), _0x3c4bb9 = (_0x25992e) => _0x126f38(_0x25992e.matches);
    _0x126f38(_0x4d0fd9.matches), _0x4d0fd9.addEventListener("change", _0x3c4bb9);
    const _0x48ad74 = () => {
      const _0x37614a = Math.min(320, Math.max(260, window.innerWidth - 48));
      _0x1fbf4f((_0x39e2fe) => _0x39e2fe !== _0x37614a ? _0x37614a : _0x39e2fe);
    };
    return _0x48ad74(), window.addEventListener("resize", _0x48ad74, { passive: !0 }), () => {
      _0x4d0fd9.removeEventListener("change", _0x3c4bb9), window.removeEventListener("resize", _0x48ad74);
    };
  }, []), _0xa0c7d9.useEffect(() => {
    const _0x7a91e9 = requestAnimationFrame(() => {
      _0x38cf72.refreshHard();
    });
    return () => cancelAnimationFrame(_0x7a91e9);
  }, [_0x434d98]);
  const _0x4cc3bd = _0xa0c7d9.useCallback((_0x4c92a4) => {
    typeof _0x4c92a4 == "number" && window.dispatchEvent(new CustomEvent("changeTab", { detail: { tabIndex: _0x4c92a4 } }));
    const _0x6c2ab6 = document.getElementById("Portofolio");
    if (!_0x6c2ab6) return;
    const _0x1ffb24 = Math.max(0, _0x6c2ab6.getBoundingClientRect().top + window.scrollY);
    window.lenis ? window.lenis.scrollTo(_0x1ffb24, { duration: 0.9 }) : window.scrollTo({ top: _0x1ffb24, behavior: "smooth" });
  }, []);
  return _0x949dd5.jsxs("div", { className: "h-auto pb-16 lg:pb-[10%] text-white px-[5%] sm:px-[5%] lg:px-[10%] pt-16 sm:pt-20 lg:pt-16 bg-[#030712] relative z-10", id: "About", itemScope: !0, itemType: "https://schema.org/Person", children: [_0x949dd5.jsxs("div", { className: "pointer-events-none absolute inset-0 overflow-clip z-0", "aria-hidden": "true", children: [_0x949dd5.jsx("div", { className: "sticky top-0 h-screen w-full", children: _0x949dd5.jsx(_0x493b7e, { className: "h-full w-full bg-[#030712]", lineColor: "#64748b", lineOpacity: 0.38, levels: 12, speed: 0.45, interactive: !1 }) }), _0x949dd5.jsx("div", { className: "absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#030712] to-transparent" }), _0x949dd5.jsx("div", { className: "absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-[#030712] via-[#030712]/90 to-transparent pointer-events-none" })] }), _0x949dd5.jsxs("div", { className: "relative z-10", children: [_0x949dd5.jsx(A, {}), _0x949dd5.jsxs("div", { className: "w-full mx-auto pt-4 sm:pt-10 lg:pt-12 relative", children: [_0x434d98 ? _0x949dd5.jsxs("div", { className: "grid grid-cols-[2.5fr_3fr_2fr] gap-6 items-center", children: [_0x949dd5.jsxs("div", { className: "min-w-0 space-y-6 text-left", "data-aos": "fade-right", "data-aos-duration": "1000", children: [_0x949dd5.jsxs("h3", { className: "text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-tight", style: { fontFamily: "var(--font-display)" }, children: [_0x949dd5.jsx("span", { className: "grad-vi block", children: "Hi, I'm" }), _0x949dd5.jsx("span", { className: "block text-white mt-1 whitespace-nowrap", children: "Eka Wahyu" }), _0x949dd5.jsx("span", { className: "block text-white whitespace-nowrap", children: "Maulidan" })] }), _0x949dd5.jsx("div", { className: "mt-8", children: _0x949dd5.jsx("a", { href: "https://drive.google.com/file/d/1_Isso2Qk9xqHtEG5ac5uCiDjaOsk49Yl/view?usp=drive_link", target: "_blank", rel: "noopener noreferrer", children: _0x949dd5.jsxs("button", { className: "px-6 py-3 rounded-xl font-semibold bg-[#2c67ed] hover:bg-[#1d4ed8] transition-[transform,background-color] duration-200 hover:scale-[1.03] flex items-center gap-2 text-white whitespace-nowrap", style: { fontFamily: "var(--font-display)" }, children: [_0x949dd5.jsx(_0x39ed05, { className: "w-4 h-4" }), " View CV"] }) }) })] }), _0x949dd5.jsx("div", { className: "min-w-0 flex justify-center items-end", children: _0x949dd5.jsx(E, {}) }), _0x949dd5.jsxs("div", { className: "min-w-0 space-y-6 text-left", "data-aos": "fade-left", "data-aos-duration": "1000", children: [_0x949dd5.jsx("div", { className: "text-base sm:text-lg leading-relaxed", style: { color: "var(--col-muted)" }, children: _0x949dd5.jsx("p", { children: "Sebagai mahasiswa Fakultas Ilmu Komputer Universitas Brawijaya, Aku berfokus pada pengembangan teknologi yang tidak hanya fungsional, tetapi juga menghadirkan pengalaman digital yang menarik dan berdampak." }) }), _0x949dd5.jsx("div", { className: "mt-8", children: _0x949dd5.jsx("a", { href: "#Portofolio", onClick: (_0x16998c) => {
    _0x16998c.preventDefault(), _0x4cc3bd();
  }, children: _0x949dd5.jsxs("button", { className: "px-6 py-3 rounded-xl font-semibold bg-[#2c67ed] hover:bg-[#1d4ed8] transition-[transform,background-color] duration-200 hover:scale-[1.03] flex items-center gap-2 text-white whitespace-nowrap", style: { fontFamily: "var(--font-display)" }, children: [_0x949dd5.jsx(_0x4c559f, { className: "w-4 h-4" }), " View Projects"] }) }) })] })] }) : _0x949dd5.jsxs("div", { className: "flex flex-col items-start gap-6", children: [_0x949dd5.jsx("div", { className: "flex justify-center w-full", children: _0x949dd5.jsx(E, {}) }), _0x949dd5.jsxs("h3", { className: "text-3xl sm:text-5xl font-bold tracking-tight leading-tight text-left w-full", style: { fontFamily: "var(--font-display)" }, "data-aos": "fade-up", "data-aos-duration": "1000", children: [_0x949dd5.jsx("span", { className: "grad-vi block", children: "Hi, I'm" }), _0x949dd5.jsx("span", { className: "block text-white mt-1", children: "Eka Wahyu Maulidan" })] }), _0x949dd5.jsx("div", { className: "text-base sm:text-lg leading-relaxed text-left w-full", style: { color: "var(--col-muted)" }, children: _0x949dd5.jsx("p", { children: "Sebagai mahasiswa Fakultas Ilmu Komputer Universitas Brawijaya, Aku berfokus pada pengembangan teknologi yang tidak hanya fungsional, tetapi juga menghadirkan pengalaman digital yang menarik dan berdampak." }) }), _0x949dd5.jsxs("div", { className: "flex flex-col gap-3 w-full", children: [_0x949dd5.jsx("a", { href: "https://drive.google.com/file/d/1_Isso2Qk9xqHtEG5ac5uCiDjaOsk49Yl/view?usp=drive_link", target: "_blank", rel: "noopener noreferrer", className: "w-full", children: _0x949dd5.jsxs("button", { className: "w-full px-6 py-3 rounded-xl font-semibold bg-[#2c67ed] hover:bg-[#1d4ed8] transition-colors duration-200 flex items-center justify-center gap-2 text-white", style: { fontFamily: "var(--font-display)" }, children: [_0x949dd5.jsx(_0x39ed05, { className: "w-4 h-4" }), " View CV"] }) }), _0x949dd5.jsx("a", { href: "#Portofolio", onClick: (_0x5091a9) => {
    _0x5091a9.preventDefault(), _0x4cc3bd();
  }, className: "w-full", children: _0x949dd5.jsxs("button", { className: "w-full px-6 py-3 rounded-xl font-semibold bg-[#2c67ed] hover:bg-[#1d4ed8] transition-colors duration-200 flex items-center justify-center gap-2 text-white", style: { fontFamily: "var(--font-display)" }, children: [_0x949dd5.jsx(_0x4c559f, { className: "w-4 h-4" }), " View Projects"] }) })] })] }), _0x949dd5.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mt-14", "data-aos": "fade-up", "data-aos-duration": "900", children: [_0x949dd5.jsx("div", { className: "flex flex-col justify-between", onMouseLeave: () => _0x391aa6(null), children: _0x949dd5.jsxs("div", { children: [_0x949dd5.jsx("h4", { className: "text-xl font-bold text-white mb-6", style: { fontFamily: "var(--font-display)" }, children: "Education" }), _0x949dd5.jsx("div", { className: "relative pt-2 pb-2 px-2", children: _0x949dd5.jsx("div", { children: B.map((_0x3d434d, _0x2354d3) => {
    const _0x268439 = _0x50ceb5 === _0x2354d3, _0x468709 = _0x2354d3 === B.length - 1;
    return _0x949dd5.jsxs("div", { onMouseEnter: () => _0x391aa6(_0x2354d3), className: "relative flex items-start group transition-all duration-300 cursor-pointer ".concat(_0x468709 ? "pb-1" : "pb-6 sm:pb-7", " ").concat(_0x268439 ? "opacity-100" : "opacity-45 hover:opacity-90"), children: [!_0x468709 && _0x949dd5.jsx("div", { className: "absolute left-[17px] top-9 bottom-0 w-[2px] bg-white/15 z-0", "aria-hidden": "true" }), _0x949dd5.jsx("div", { className: "relative z-10 flex-shrink-0 mr-4 sm:mr-5", children: _0x949dd5.jsx("div", { className: "w-9 h-9 rounded-full flex items-center justify-center text-xs sm:text-sm font-bold transition-all duration-300 " + (_0x268439 ? "bg-white text-zinc-950 shadow-[0_0_20px_rgba(255,255,255,0.35)] ring-4 ring-white/15 scale-105" : "bg-zinc-900/90 text-zinc-400 border border-white/20 group-hover:border-white/40 group-hover:text-zinc-200"), children: _0x2354d3 + 1 }) }), _0x949dd5.jsxs("div", { className: "flex-1 min-w-0 pt-0.5", children: [_0x949dd5.jsxs("div", { className: "flex items-center gap-3", children: [_0x949dd5.jsx(R, { logo: _0x3d434d.logo, name: _0x3d434d.school }), _0x949dd5.jsx("span", { className: "text-sm sm:text-base font-semibold text-zinc-200 truncate", children: _0x3d434d.school }), _0x949dd5.jsx("span", { className: "ml-auto flex-shrink-0 text-xs px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-zinc-400 font-medium", children: _0x3d434d.year })] }), _0x949dd5.jsx("div", { className: "mt-2 flex items-center", children: _0x949dd5.jsx("h5", { className: "text-base sm:text-lg font-bold text-white tracking-tight", children: _0x3d434d.degree }) }), _0x949dd5.jsxs("div", { className: "mt-1 flex items-center gap-2 text-xs text-zinc-400 flex-wrap", children: [_0x949dd5.jsx("span", { children: _0x3d434d.faculty }), _0x949dd5.jsx("span", { className: "text-zinc-600", children: "\u2022" }), _0x949dd5.jsx("span", { className: "px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-zinc-300 font-medium", children: _0x3d434d.tag })] })] })] }, _0x3d434d.id);
  }) }) })] }) }), _0x949dd5.jsxs("div", { className: "flex flex-col justify-between", onMouseLeave: () => _0x5e76c2(null), children: [_0x949dd5.jsxs("div", { children: [_0x949dd5.jsx("h4", { className: "text-xl font-bold text-white mb-6", style: { fontFamily: "var(--font-display)" }, children: "Experience" }), _0x949dd5.jsx("div", { ref: _0x3a275e, "data-lenis-prevent": !0, onWheel: (_0x5e6092) => _0x5e6092.stopPropagation(), className: "relative overflow-y-auto px-2 pt-3.5 pb-2 overscroll-contain", style: { maxHeight: "360px", scrollbarWidth: "none", msOverflowStyle: "none", WebkitOverflowScrolling: "touch" }, children: _0x2e27c1.map((_0x15da29, _0x5f94) => {
    const _0x30b648 = _0x10ccf2 === _0x5f94, _0x3fabce = _0x5f94 === _0x2e27c1.length - 1, _0x3aa004 = ((_0x378ab5) => {
      if (_0x378ab5.subtitle || _0x378ab5.tag || _0x378ab5.location || _0x378ab5.type) return { subtitle: _0x378ab5.subtitle || _0x378ab5.location || "", tag: _0x378ab5.tag || _0x378ab5.type || "" };
      const _0x4ab22c = (_0x378ab5.company || "").toLowerCase(), _0x83dc7b = (_0x378ab5.role || "").toLowerCase();
      return _0x4ab22c.includes("google") && _0x83dc7b.includes("ambassador") ? { subtitle: "Universitas Brawijaya", tag: "Ambassador" } : _0x4ab22c.includes("gdg") || _0x4ab22c.includes("developer groups") ? { subtitle: "Universitas Brawijaya", tag: "Community" } : _0x4ab22c.includes("hology") ? { subtitle: "FILKOM UB", tag: "Committee" } : _0x4ab22c.includes("filkom") || _0x4ab22c.includes("brawijaya") ? { subtitle: "FILKOM UB", tag: "Academic" } : _0x4ab22c.includes("sinau bareng") ? { subtitle: "FILKOM UB", tag: "Speaker" } : _0x4ab22c.includes("raion") ? { subtitle: "Malang", tag: "Internship" } : _0x4ab22c.includes("cubiespot") ? { subtitle: "Pasuruan", tag: "Internship" } : _0x83dc7b.includes("intern") ? { subtitle: "Company", tag: "Internship" } : { subtitle: "", tag: "Experience" };
    })(_0x15da29);
    return _0x949dd5.jsxs("div", { onMouseEnter: () => _0x5e76c2(_0x5f94), className: "relative flex items-start group transition-all duration-300 cursor-pointer ".concat(_0x3fabce ? "pb-2" : "pb-6 sm:pb-7", " ").concat(_0x30b648 ? "opacity-100" : "opacity-45 hover:opacity-90"), children: [!_0x3fabce && _0x949dd5.jsx("div", { className: "absolute left-[17px] top-9 bottom-0 w-[2px] bg-white/15 z-0", "aria-hidden": "true" }), _0x949dd5.jsx("div", { className: "relative z-10 flex-shrink-0 mr-4 sm:mr-5", children: _0x949dd5.jsx("div", { className: "w-9 h-9 rounded-full flex items-center justify-center text-xs sm:text-sm font-bold transition-all duration-300 " + (_0x30b648 ? "bg-white text-zinc-950 shadow-[0_0_20px_rgba(255,255,255,0.35)] ring-4 ring-white/15 scale-105" : "bg-zinc-900/90 text-zinc-400 border border-white/20 group-hover:border-white/40 group-hover:text-zinc-200"), children: _0x5f94 + 1 }) }), _0x949dd5.jsxs("div", { className: "flex-1 min-w-0 pt-0.5", children: [_0x949dd5.jsxs("div", { className: "flex items-center gap-3", children: [_0x949dd5.jsx(R, { logo: _0x15da29.logo, name: _0x15da29.company }), _0x949dd5.jsx("span", { className: "text-sm sm:text-base font-semibold text-zinc-200 truncate", children: _0x15da29.company }), _0x949dd5.jsx("span", { className: "ml-auto flex-shrink-0 text-xs px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-zinc-400 font-medium", children: _0x15da29.year })] }), _0x949dd5.jsx("div", { className: "mt-2 flex items-center", children: _0x949dd5.jsx("h5", { className: "text-base sm:text-lg font-bold text-white tracking-tight", children: _0x15da29.role }) }), (_0x3aa004.subtitle || _0x3aa004.tag) && _0x949dd5.jsxs("div", { className: "mt-1 flex items-center gap-2 text-xs text-zinc-400 flex-wrap", children: [_0x3aa004.subtitle && _0x949dd5.jsx("span", { children: _0x3aa004.subtitle }), _0x3aa004.subtitle && _0x3aa004.tag && _0x949dd5.jsx("span", { className: "text-zinc-600", children: "\u2022" }), _0x3aa004.tag && _0x949dd5.jsx("span", { className: "px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-zinc-300 font-medium", children: _0x3aa004.tag })] })] })] }, _0x15da29.id || _0x5f94);
  }) })] }), _0x949dd5.jsx("div", { className: "relative border-t border-dashed border-white/15 pt-3 mt-4 flex items-center justify-center", children: _0x949dd5.jsx("button", { type: "button", onClick: _0x35301b, className: "text-xs font-mono text-zinc-400 tracking-wider flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer group" }) })] })] }), _0x949dd5.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-y-10 sm:gap-y-12 gap-x-8 mt-10 sm:mt-16 justify-items-center", children: [_0x949dd5.jsx("div", { "data-aos": "fade-right", "data-aos-duration": "800", className: "flex flex-col items-center", children: _0x949dd5.jsx(S, { label: "Projects", meta: _0x168aba.totalProjects || _0x230898.length, tone: "dark", art: "none", action: "more", appearDelay: 0, files: _0x230898, width: _0x207086, menu: [{ label: "Explore All Projects", onSelect: () => _0x4cc3bd(0) }], onFileSelect: () => _0x4cc3bd(0) }) }), _0x949dd5.jsx("div", { "data-aos": "fade-up", "data-aos-duration": "900", className: "flex flex-col items-center", children: _0x949dd5.jsx(S, { label: "Certificates", meta: _0x168aba.totalCertificates || _0x5583f2.length, tone: "dark", art: "none", action: "more", appearDelay: 120, files: _0x5583f2, width: _0x207086, menu: [{ label: "Explore All Certificates", onSelect: () => _0x4cc3bd(1) }], onFileSelect: () => _0x4cc3bd(1) }) }), _0x949dd5.jsx("div", { "data-aos": "fade-left", "data-aos-duration": "800", className: "flex flex-col items-center md:col-span-2 xl:col-span-1", children: _0x949dd5.jsx(S, { label: "Awards", meta: _0x168aba.totalAwards || _0x545357.length, tone: "dark", art: "none", action: "more", appearDelay: 240, files: _0x545357, width: _0x207086, menu: [{ label: "Explore All Awards", onSelect: () => _0x4cc3bd(2) }], onFileSelect: () => _0x4cc3bd(2) }) })] })] })] })] });
});
export {
  U as default
};
