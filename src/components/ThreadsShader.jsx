const _0x222c3f = null;
import { r as _0xcbdd9a, j as _0x3e3a8a } from "./b9a27LkY.js";
import { c as _0x33236e } from "./B4ex_1wX.js";
import { e as _0x5ef8cb, f as _0x50e63d, u as _0x31a06e, a, g as _0xb04375, h as _0x199a3a } from "./C9OiCWmG.js";
const c = 14, f = 0.95, u = (() => {
  const _0x397054 = Array.from({ length: 256 }, (_0x1e1ed1, _0x56d8f9) => _0x56d8f9);
  let _0x1eb79d = 1013;
  for (let _0x35c764 = 255; _0x35c764 > 0; _0x35c764--) {
    _0x1eb79d = 16807 * _0x1eb79d % 2147483647;
    const _0x809c37 = _0x1eb79d % (_0x35c764 + 1);
    [_0x397054[_0x35c764], _0x397054[_0x809c37]] = [_0x397054[_0x809c37], _0x397054[_0x35c764]];
  }
  return Uint8Array.from([..._0x397054, ..._0x397054]);
})();
function d(_0x5c67dc, _0xb22255) {
  typeof _0x5c67dc.jump == "function" ? _0x5c67dc.jump(_0xb22255) : _0x5c67dc.set(_0xb22255);
}
function p(_0x102a63) {
  return _0x102a63 * _0x102a63 * _0x102a63 * (_0x102a63 * (6 * _0x102a63 - 15) + 10);
}
function h(_0x51dde4, _0x129698, _0x1f3bd0) {
  return _0x51dde4 + (_0x129698 - _0x51dde4) * _0x1f3bd0;
}
function m(_0x5f569f, _0x5373e7, _0x4e7a4b, _0x17d5f3) {
  const _0x3528c3 = 15 & _0x5f569f, _0x16deec = _0x3528c3 < 8 ? _0x5373e7 : _0x4e7a4b, _0x28ad67 = _0x3528c3 < 4 ? _0x4e7a4b : _0x3528c3 === 12 || _0x3528c3 === 14 ? _0x5373e7 : _0x17d5f3;
  return (1 & _0x3528c3 ? -_0x16deec : _0x16deec) + (2 & _0x3528c3 ? -_0x28ad67 : _0x28ad67);
}
function g(_0x23c266, _0x58cae4, _0x3102b4) {
  const _0x4a7eac = u, _0x406a45 = 255 & Math.floor(_0x23c266), _0x3a71d1 = 255 & Math.floor(_0x58cae4), _0x9ef945 = 255 & Math.floor(_0x3102b4);
  _0x23c266 -= Math.floor(_0x23c266), _0x58cae4 -= Math.floor(_0x58cae4), _0x3102b4 -= Math.floor(_0x3102b4);
  const _0x274aab = p(_0x23c266), _0x329f2f = p(_0x58cae4), _0x2c903a = p(_0x3102b4), _0x32b66c = _0x4a7eac[_0x406a45] + _0x3a71d1, _0x1d8b93 = _0x4a7eac[_0x32b66c] + _0x9ef945, _0x3b68ef = _0x4a7eac[_0x32b66c + 1] + _0x9ef945, _0x18a5a4 = _0x4a7eac[_0x406a45 + 1] + _0x3a71d1, _0x371199 = _0x4a7eac[_0x18a5a4] + _0x9ef945, _0x5ac891 = _0x4a7eac[_0x18a5a4 + 1] + _0x9ef945;
  return h(h(h(m(_0x4a7eac[_0x1d8b93], _0x23c266, _0x58cae4, _0x3102b4), m(_0x4a7eac[_0x371199], _0x23c266 - 1, _0x58cae4, _0x3102b4), _0x274aab), h(m(_0x4a7eac[_0x3b68ef], _0x23c266, _0x58cae4 - 1, _0x3102b4), m(_0x4a7eac[_0x5ac891], _0x23c266 - 1, _0x58cae4 - 1, _0x3102b4), _0x274aab), _0x329f2f), h(h(m(_0x4a7eac[_0x1d8b93 + 1], _0x23c266, _0x58cae4, _0x3102b4 - 1), m(_0x4a7eac[_0x371199 + 1], _0x23c266 - 1, _0x58cae4, _0x3102b4 - 1), _0x274aab), h(m(_0x4a7eac[_0x3b68ef + 1], _0x23c266, _0x58cae4 - 1, _0x3102b4 - 1), m(_0x4a7eac[_0x5ac891 + 1], _0x23c266 - 1, _0x58cae4 - 1, _0x3102b4 - 1), _0x274aab), _0x329f2f), _0x2c903a);
}
function v(_0xbad282) {
  return { segments: new Float64Array(0), count: 0, used: new Uint8Array(0), first: new Int32Array(_0xbad282).fill(-1), second: new Int32Array(_0xbad282).fill(-1), points: new Float64Array(0), scratch: new Float64Array(0) };
}
function y(_0x56f4ee, _0x565f96, _0x54d38b, _0x487267, _0x1a2ac3, _0x3bb9ce, _0x1127c5) {
  if (6 * (_0x56f4ee.count + 1) > _0x56f4ee.segments.length) {
    const _0x53a19c = Math.max(256, 2 * _0x56f4ee.count), _0x31a7c1 = new Float64Array(6 * _0x53a19c);
    _0x31a7c1.set(_0x56f4ee.segments), _0x56f4ee.segments = _0x31a7c1, _0x56f4ee.used = new Uint8Array(_0x53a19c), _0x56f4ee.points = new Float64Array(4 * _0x53a19c + 16), _0x56f4ee.scratch = new Float64Array(4 * _0x53a19c + 16);
  }
  const _0x230156 = 6 * _0x56f4ee.count, _0x569b91 = _0x56f4ee.segments;
  _0x569b91[_0x230156] = _0x565f96, _0x569b91[_0x230156 + 1] = _0x54d38b, _0x569b91[_0x230156 + 2] = _0x487267, _0x569b91[_0x230156 + 3] = _0x1a2ac3, _0x569b91[_0x230156 + 4] = _0x3bb9ce, _0x569b91[_0x230156 + 5] = _0x1127c5, _0x56f4ee.count++;
}
function x(_0x307775, _0x3bd450, _0x3feeaf) {
  _0x307775.first[_0x3bd450] < 0 ? _0x307775.first[_0x3bd450] = _0x3feeaf : _0x307775.second[_0x3bd450] = _0x3feeaf;
}
function w(_0x507e2, _0x42339e, _0x3dccf0) {
  const _0x2b6cf4 = _0x507e2.first[_0x42339e], _0x33cfcc = _0x2b6cf4 === _0x3dccf0 ? _0x507e2.second[_0x42339e] : _0x2b6cf4;
  return _0x33cfcc >= 0 && !_0x507e2.used[_0x33cfcc] ? _0x33cfcc : -1;
}
function A(_0x5c0b94, _0x3469a8, _0x100bc5, _0x19236b) {
  return _0x3469a8 + (_0x19236b + _0x100bc5) % _0x100bc5 * 2;
}
function M(_0xf73a08, _0x3ba482, _0x5cb80a, _0x266d32, _0x1f4d4a, _0xbc4ccd) {
  const _0x2aa61f = (_0x266d32 - _0x5cb80a) / 2;
  if (!(_0x2aa61f < 2)) {
    if (_0x2aa61f > 3 && (function(_0x56afc2, _0x2b7f57, _0x98ff20, _0x2927de, _0x3d781d) {
      for (let _0x16f88c = 0; _0x16f88c < 2; _0x16f88c++) {
        _0x3d781d.set(_0x56afc2.subarray(_0x2b7f57, _0x2b7f57 + 2 * _0x98ff20));
        for (let _0x735226 = _0x2927de ? 0 : 1; _0x735226 < (_0x2927de ? _0x98ff20 : _0x98ff20 - 1); _0x735226++) {
          const _0xdd8e80 = (_0x735226 - 1 + _0x98ff20) % _0x98ff20 * 2, _0x1ad0a4 = (_0x735226 + 1) % _0x98ff20 * 2;
          _0x56afc2[_0x2b7f57 + 2 * _0x735226] = (_0x3d781d[_0xdd8e80] + 2 * _0x3d781d[2 * _0x735226] + _0x3d781d[_0x1ad0a4]) / 4, _0x56afc2[_0x2b7f57 + 2 * _0x735226 + 1] = (_0x3d781d[_0xdd8e80 + 1] + 2 * _0x3d781d[2 * _0x735226 + 1] + _0x3d781d[_0x1ad0a4 + 1]) / 4;
        }
      }
    })(_0x3ba482, _0x5cb80a, _0x2aa61f, _0x1f4d4a, _0xbc4ccd), _0x1f4d4a && _0x2aa61f > 2) {
      const _0x410b59 = A(0, _0x5cb80a, _0x2aa61f, -1);
      _0xf73a08.moveTo((_0x3ba482[_0x410b59] + _0x3ba482[_0x5cb80a]) / 2, (_0x3ba482[_0x410b59 + 1] + _0x3ba482[_0x5cb80a + 1]) / 2);
      for (let _0x114629 = 0; _0x114629 < _0x2aa61f; _0x114629++) {
        const _0x1e8f62 = A(0, _0x5cb80a, _0x2aa61f, _0x114629), _0x276130 = A(0, _0x5cb80a, _0x2aa61f, _0x114629 + 1);
        _0xf73a08.quadraticCurveTo(_0x3ba482[_0x1e8f62], _0x3ba482[_0x1e8f62 + 1], (_0x3ba482[_0x1e8f62] + _0x3ba482[_0x276130]) / 2, (_0x3ba482[_0x1e8f62 + 1] + _0x3ba482[_0x276130 + 1]) / 2);
      }
      return;
    }
    _0xf73a08.moveTo(_0x3ba482[_0x5cb80a], _0x3ba482[_0x5cb80a + 1]);
    for (let _0x2782f6 = 1; _0x2782f6 < _0x2aa61f - 1; _0x2782f6++) {
      const _0x52df84 = _0x5cb80a + 2 * _0x2782f6;
      _0xf73a08.quadraticCurveTo(_0x3ba482[_0x52df84], _0x3ba482[_0x52df84 + 1], (_0x3ba482[_0x52df84] + _0x3ba482[_0x52df84 + 2]) / 2, (_0x3ba482[_0x52df84 + 1] + _0x3ba482[_0x52df84 + 3]) / 2);
    }
    _0xf73a08.lineTo(_0x3ba482[_0x266d32 - 2], _0x3ba482[_0x266d32 - 1]);
  }
}
function R(_0xd021cd, _0xb8c62d) {
  const _0x3f5868 = _0xb8c62d.segments, _0x8e0fca = _0xb8c62d.points;
  for (let _0x398b24 = 0; _0x398b24 < _0xb8c62d.count; _0x398b24++) _0xb8c62d.used[_0x398b24] = 0, x(_0xb8c62d, _0x3f5868[6 * _0x398b24], _0x398b24), x(_0xb8c62d, _0x3f5868[6 * _0x398b24 + 3], _0x398b24);
  const _0x1c5e5a = _0x8e0fca.length >> 2 << 1;
  for (let _0x597d57 = 0; _0x597d57 < _0xb8c62d.count; _0x597d57++) {
    if (_0xb8c62d.used[_0x597d57]) continue;
    _0xb8c62d.used[_0x597d57] = 1;
    const _0x1e9944 = 6 * _0x597d57;
    let _0x1222d4 = _0x1c5e5a, _0x113b45 = _0x1c5e5a;
    _0x8e0fca[_0x113b45++] = _0x3f5868[_0x1e9944 + 1], _0x8e0fca[_0x113b45++] = _0x3f5868[_0x1e9944 + 2], _0x8e0fca[_0x113b45++] = _0x3f5868[_0x1e9944 + 4], _0x8e0fca[_0x113b45++] = _0x3f5868[_0x1e9944 + 5];
    let _0x309152 = _0x597d57, _0x4a045e = _0x3f5868[_0x1e9944 + 3];
    for (; ; ) {
      const _0x595043 = w(_0xb8c62d, _0x4a045e, _0x309152);
      if (_0x595043 < 0) break;
      _0xb8c62d.used[_0x595043] = 1;
      const _0x227066 = 6 * _0x595043, _0xf8b584 = _0x3f5868[_0x227066] === _0x4a045e ? 3 : 0;
      _0x8e0fca[_0x113b45++] = _0x3f5868[_0x227066 + _0xf8b584 + 1], _0x8e0fca[_0x113b45++] = _0x3f5868[_0x227066 + _0xf8b584 + 2], _0x4a045e = _0x3f5868[_0x227066 + _0xf8b584], _0x309152 = _0x595043;
    }
    const _0x1532f3 = _0x4a045e === _0x3f5868[_0x1e9944] && _0x113b45 - _0x1222d4 > 6;
    if (_0x1532f3) _0x113b45 -= 2;
    else for (_0x309152 = _0x597d57, _0x4a045e = _0x3f5868[_0x1e9944]; ; ) {
      const _0x115b80 = w(_0xb8c62d, _0x4a045e, _0x309152);
      if (_0x115b80 < 0) break;
      _0xb8c62d.used[_0x115b80] = 1;
      const _0x138a57 = 6 * _0x115b80, _0x42cded = _0x3f5868[_0x138a57] === _0x4a045e ? 3 : 0;
      _0x8e0fca[--_0x1222d4] = _0x3f5868[_0x138a57 + _0x42cded + 2], _0x8e0fca[--_0x1222d4] = _0x3f5868[_0x138a57 + _0x42cded + 1], _0x4a045e = _0x3f5868[_0x138a57 + _0x42cded], _0x309152 = _0x115b80;
    }
    M(_0xd021cd, _0x8e0fca, _0x1222d4, _0x113b45, _0x1532f3, _0xb8c62d.scratch);
  }
  for (let _0x3abebe = 0; _0x3abebe < _0xb8c62d.count; _0x3abebe++) {
    const _0x2c2dec = _0x3f5868[6 * _0x3abebe], _0x19a69d = _0x3f5868[6 * _0x3abebe + 3];
    _0xb8c62d.first[_0x2c2dec] = _0xb8c62d.second[_0x2c2dec] = -1, _0xb8c62d.first[_0x19a69d] = _0xb8c62d.second[_0x19a69d] = -1;
  }
  _0xb8c62d.count = 0;
}
function b(_0x2030ee, _0x3c2951, _0x3567cd) {
  const _0xb07a60 = _0x2030ee.createShader(_0x3c2951);
  return _0xb07a60 ? (_0x2030ee.shaderSource(_0xb07a60, _0x3567cd), _0x2030ee.compileShader(_0xb07a60), _0x2030ee.getShaderParameter(_0xb07a60, _0x2030ee.COMPILE_STATUS) ? _0xb07a60 : null) : null;
}
let z = null;
const F = _0xcbdd9a.forwardRef(function({ lineColor: _0x50c9f7, lineOpacity: _0x883e18 = 1, levels: _0xedb34 = 14, speed: _0x6c0251 = 0.85, scale: _0x233c36 = 1, peak: _0x1c848f = 0.85, interactive: _0x3f86c7 = !0, paused: _0x1831b9 = !1, transition: _0x490903 = { stiffness: 120, damping: 22 }, className: _0x506e12, children: _0x5f2809, ..._0x26fe67 }, _0x1bae1a) {
  const _0x501e27 = _0xcbdd9a.useRef(null), _0x3859d0 = _0xcbdd9a.useRef(null);
  _0xcbdd9a.useImperativeHandle(_0x1bae1a, () => _0x501e27.current);
  const _0x376972 = _0x5ef8cb(_0x501e27, { margin: "0px" }), _0x59d3e1 = (function() {
    const [_0x3eef2f, _0x132639] = _0xcbdd9a.useState(() => typeof document > "u" || document.visibilityState !== "hidden");
    return _0xcbdd9a.useEffect(() => {
      const _0x26b410 = () => _0x132639(document.visibilityState !== "hidden");
      return document.addEventListener("visibilitychange", _0x26b410), () => document.removeEventListener("visibilitychange", _0x26b410);
    }, []), _0x3eef2f;
  })(), _0x12002d = _0x50e63d(), _0x114b5a = _0x376972 && _0x59d3e1 && !_0x12002d && !_0x1831b9, _0x41363e = _0x31a06e(0), _0x42e7c8 = _0x31a06e(0), _0x14b6f9 = _0x31a06e(0), _0x271139 = a(_0x41363e, _0x490903), _0x25a856 = a(_0x42e7c8, _0x490903), _0x140ada = a(_0x14b6f9, { stiffness: 80, damping: 20 }), _0x546512 = _0x31a06e(1), _0x1303a3 = _0xcbdd9a.useRef([]), _0x32be31 = _0xcbdd9a.useRef(() => {
  }), _0x3600c3 = _0xcbdd9a.useRef(0), _0x4f553e = _0xcbdd9a.useRef(!1), _0x2c47b1 = _0xcbdd9a.useRef(!1), _0x26c385 = { lineColor: _0x50c9f7, lineOpacity: _0x883e18, levels: _0xedb34, speed: _0x6c0251, scale: _0x233c36, peak: _0x1c848f }, _0x22a1fe = _0xcbdd9a.useRef(_0x26c385);
  return _0xcbdd9a.useLayoutEffect(() => {
    _0x22a1fe.current = _0x26c385;
  }), _0xcbdd9a.useEffect(() => {
    const _0x9f16cd = _0x3859d0.current, _0x3db070 = _0x501e27.current;
    if (!_0x9f16cd || !_0x3db070) return;
    const _0x28ef19 = _0x9f16cd.getContext("webgl", { premultipliedAlpha: !0, preserveDrawingBuffer: !1, antialias: !1 }), _0x4c355b = _0x28ef19 ? (function(_0x19927d) {
      if (!_0x19927d.getExtension("OES_standard_derivatives")) return null;
      const _0x11e18c = b(_0x19927d, _0x19927d.VERTEX_SHADER, `
attribute vec2 position;
void main() {
  gl_Position = vec4(position, 0.0, 1.0);
}
`), _0x3814d1 = b(_0x19927d, _0x19927d.FRAGMENT_SHADER, `
#extension GL_OES_standard_derivatives : enable
precision highp float;
uniform vec2 size;
uniform float dpr;
uniform float feature;
uniform float z;
uniform float step;
uniform float range;
uniform float amount;
uniform float lift;
uniform float hillRadius;
uniform vec2 hill;
uniform vec4 ripples[4];
uniform float reach;
uniform float rippleWidth;
uniform vec3 color;
uniform float lineOpacity;

vec3 mod289v(vec3 x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

float mod289f(float x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

float perm(float x) {
  return mod289f(((x * 34.0) + 10.0) * x);
}

float grad(float hash, float x, float y, float z) {
  float h = floor(fract(hash * (1.0 / 16.0)) * 16.0);
  float u = h < 8.0 ? x : y;
  float v = h < 4.0 ? y : (h == 12.0 || h == 14.0 ? x : z);
  float s1 = fract(h * 0.5) < 0.25 ? u : -u;
  float s2 = fract(floor(h * 0.5) * 0.5) < 0.25 ? v : -v;
  return s1 + s2;
}

float noise(vec3 p) {
  vec3 cell = mod289v(floor(p));
  vec3 f = fract(p);
  vec3 u = f * f * f * (f * (f * 6.0 - 15.0) + 10.0);
  float A = perm(cell.x) + cell.y;
  float AA = perm(A) + cell.z;
  float AB = perm(A + 1.0) + cell.z;
  float B = perm(cell.x + 1.0) + cell.y;
  float BA = perm(B) + cell.z;
  float BB = perm(B + 1.0) + cell.z;
  return mix(
    mix(
      mix(grad(perm(AA), f.x, f.y, f.z), grad(perm(BA), f.x - 1.0, f.y, f.z), u.x),
      mix(grad(perm(AB), f.x, f.y - 1.0, f.z), grad(perm(BB), f.x - 1.0, f.y - 1.0, f.z), u.x),
      u.y
    ),
    mix(
      mix(grad(perm(AA + 1.0), f.x, f.y, f.z - 1.0), grad(perm(BA + 1.0), f.x - 1.0, f.y, f.z - 1.0), u.x),
      mix(grad(perm(AB + 1.0), f.x, f.y - 1.0, f.z - 1.0), grad(perm(BB + 1.0), f.x - 1.0, f.y - 1.0, f.z - 1.0), u.x),
      u.y
    ),
    u.z
  );
}

void main() {
  vec2 point = vec2(gl_FragCoord.x, size.y - gl_FragCoord.y) / dpr;
  vec2 n = point / feature;
  float value = noise(vec3(n, z)) * 1.1 + noise(vec3(n * 2.1, z * 1.7)) * 0.45;
  if (lift > 0.0) value += lift * exp(-length(point - hill) / hillRadius);
  for (int i = 0; i < 4; i++) {
    vec4 ripple = ripples[i];
    if (ripple.w > 0.5) {
      float d = length(point - ripple.xy) - ripple.z * reach;
      value += 0.9 * (1.0 - ripple.z) * cos(d / rippleWidth * 1.8) * exp(-(d * d) / (2.0 * rippleWidth * rippleWidth));
    }
  }
  value *= amount;
  float level = (value + range) / step;
  float nearest = floor(level + 0.5);
  float slope = length(vec2(dFdx(level), dFdy(level)));
  float pixels = abs(level - nearest) / max(slope, 1e-6);
  bool major = mod(nearest, 5.0) == 0.0;
  float width = max(1.0, (major ? 1.5 : 1.0) * dpr);
  float alpha = slope > 1e-6 ? clamp(width * 0.5 + 0.5 - pixels, 0.0, 1.0) * (major ? 0.85 : 0.4) * lineOpacity : 0.0;
  gl_FragColor = vec4(color * alpha, alpha);
}
`), _0x44cf89 = _0x19927d.createProgram();
      if (!_0x11e18c || !_0x3814d1 || !_0x44cf89 || (_0x19927d.attachShader(_0x44cf89, _0x11e18c), _0x19927d.attachShader(_0x44cf89, _0x3814d1), _0x19927d.linkProgram(_0x44cf89), !_0x19927d.getProgramParameter(_0x44cf89, _0x19927d.LINK_STATUS))) return null;
      _0x19927d.useProgram(_0x44cf89);
      const _0xe0bf5e = _0x19927d.createBuffer();
      _0x19927d.bindBuffer(_0x19927d.ARRAY_BUFFER, _0xe0bf5e), _0x19927d.bufferData(_0x19927d.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), _0x19927d.STATIC_DRAW);
      const _0x49d132 = _0x19927d.getAttribLocation(_0x44cf89, "position");
      _0x19927d.enableVertexAttribArray(_0x49d132), _0x19927d.vertexAttribPointer(_0x49d132, 2, _0x19927d.FLOAT, !1, 0, 0);
      const _0x2475a8 = (_0x5f3755) => _0x19927d.getUniformLocation(_0x44cf89, _0x5f3755), _0x47bdda = { size: _0x2475a8("size"), dpr: _0x2475a8("dpr"), feature: _0x2475a8("feature"), z: _0x2475a8("z"), step: _0x2475a8("step"), range: _0x2475a8("range"), amount: _0x2475a8("amount"), lift: _0x2475a8("lift"), hillRadius: _0x2475a8("hillRadius"), hill: _0x2475a8("hill"), ripples: _0x2475a8("ripples"), reach: _0x2475a8("reach"), rippleWidth: _0x2475a8("rippleWidth"), color: _0x2475a8("color"), lineOpacity: _0x2475a8("lineOpacity") };
      _0x19927d.uniform1f(_0x47bdda.range, f), _0x19927d.uniform1f(_0x47bdda.hillRadius, 90), _0x19927d.uniform1f(_0x47bdda.rippleWidth, 60);
      const _0x4265ac = (_0x437267) => {
        const _0x4194c2 = Math.max(1, Math.round(_0x437267.width * _0x437267.dpr)), _0x2b8d21 = Math.max(1, Math.round(_0x437267.height * _0x437267.dpr));
        _0x19927d.viewport(0, 0, _0x4194c2, _0x2b8d21), _0x19927d.uniform2f(_0x47bdda.size, _0x4194c2, _0x2b8d21), _0x19927d.uniform1f(_0x47bdda.dpr, _0x437267.dpr), _0x19927d.uniform1f(_0x47bdda.feature, _0x437267.feature), _0x19927d.uniform1f(_0x47bdda.z, _0x437267.z), _0x19927d.uniform1f(_0x47bdda.step, _0x437267.step), _0x19927d.uniform1f(_0x47bdda.amount, _0x437267.amount), _0x19927d.uniform1f(_0x47bdda.lift, _0x437267.lift), _0x19927d.uniform2f(_0x47bdda.hill, _0x437267.hill[0], _0x437267.hill[1]), _0x19927d.uniform4fv(_0x47bdda.ripples, _0x437267.ripples), _0x19927d.uniform1f(_0x47bdda.reach, _0x437267.reach), _0x19927d.uniform3f(_0x47bdda.color, _0x437267.color[0], _0x437267.color[1], _0x437267.color[2]), _0x19927d.uniform1f(_0x47bdda.lineOpacity, _0x437267.lineOpacity), _0x19927d.clearColor(0, 0, 0, 0), _0x19927d.clear(_0x19927d.COLOR_BUFFER_BIT), _0x19927d.drawArrays(_0x19927d.TRIANGLES, 0, 3);
      };
      return _0x4265ac.dispose = () => {
        _0x19927d.deleteBuffer(_0xe0bf5e), _0x19927d.deleteProgram(_0x44cf89), _0x19927d.deleteShader(_0x11e18c), _0x19927d.deleteShader(_0x3814d1);
      }, _0x4265ac;
    })(_0x28ef19) : null;
    if (_0x4c355b) {
      _0x4f553e.current = !0;
      let _0x15c8bd = 0, _0x3f8871 = 0, _0x523db2 = 1, _0x3f41ae = 0, _0x1dbd64 = "", _0xf3f2d8 = [0.45, 0.45, 0.45];
      const _0x47534c = new Float32Array(16), _0x4c2b0f = () => {
        const _0x50c0e6 = _0x3db070.getBoundingClientRect();
        _0x15c8bd = _0x50c0e6.width, _0x3f8871 = _0x50c0e6.height, _0x523db2 = 0.85 * Math.min(window.devicePixelRatio || 1, 1), _0x9f16cd.width = Math.max(1, Math.round(_0x15c8bd * _0x523db2)), _0x9f16cd.height = Math.max(1, Math.round(_0x3f8871 * _0x523db2)), _0x9f16cd.style.width = "".concat(_0x15c8bd, "px"), _0x9f16cd.style.height = "".concat(_0x3f8871, "px"), _0x140ada.get() === 0 && (d(_0x41363e, _0x15c8bd / 2), d(_0x42e7c8, _0x3f8871 / 2), d(_0x271139, _0x15c8bd / 2), d(_0x25a856, _0x3f8871 / 2));
      }, _0x29bfbc = (_0x37ef90, _0x2f5de4 = !1) => {
        if (_0x15c8bd === 0 || _0x3f8871 === 0) return;
        const { lineColor: _0x252e0a, lineOpacity: _0xc88b52, levels: _0x48a05d, speed: _0x57976a, scale: _0x46ef75, peak: _0x28793d } = _0x22a1fe.current;
        if (!_0x2f5de4 || _0x3f41ae++ % 30 == 0) {
          const _0x122f69 = _0x252e0a ?? (getComputedStyle(_0x3db070).color || "#737373");
          _0x122f69 !== _0x1dbd64 && (_0x1dbd64 = _0x122f69, _0xf3f2d8 = (function(_0xfa50b2) {
            if (typeof document > "u") return [0.45, 0.45, 0.45];
            if (!z) {
              const _0x377200 = document.createElement("canvas");
              _0x377200.width = 1, _0x377200.height = 1, z = _0x377200.getContext("2d", { willReadFrequently: !0 });
            }
            if (!z) return [0.45, 0.45, 0.45];
            z.clearRect(0, 0, 1, 1), z.fillStyle = _0xfa50b2, z.fillRect(0, 0, 1, 1);
            const _0x334e62 = z.getImageData(0, 0, 1, 1).data;
            return [_0x334e62[0] / 255, _0x334e62[1] / 255, _0x334e62[2] / 255];
          })(_0x122f69));
        }
        _0x47534c.fill(0), _0x1303a3.current.slice(-4).forEach((_0x41dad5, _0x3d12d8) => {
          _0x47534c[4 * _0x3d12d8] = _0x41dad5.x, _0x47534c[4 * _0x3d12d8 + 1] = _0x41dad5.y, _0x47534c[4 * _0x3d12d8 + 2] = _0x41dad5.progress.get(), _0x47534c[4 * _0x3d12d8 + 3] = 1;
        }), _0x4c355b({ width: _0x15c8bd, height: _0x3f8871, dpr: _0x523db2, feature: 280 * _0x46ef75, z: 5e-5 * _0x37ef90 * _0x57976a, step: 1.9 / Math.max(2, Math.round(_0x48a05d)), amount: _0x546512.get(), lift: _0x140ada.get() * _0x28793d * 1.5, hill: [_0x271139.get(), _0x25a856.get()], ripples: _0x47534c, reach: 0.8 * Math.hypot(_0x15c8bd, _0x3f8871), color: _0xf3f2d8, lineOpacity: _0xc88b52 ?? 1 });
      };
      _0x32be31.current = _0x29bfbc, _0x4c2b0f(), _0x29bfbc(_0x3600c3.current);
      const _0x302b79 = new ResizeObserver(() => {
        _0x4c2b0f(), _0x29bfbc(_0x3600c3.current);
      });
      return _0x302b79.observe(_0x3db070), () => {
        var _0x596773;
        _0x302b79.disconnect(), (_0x596773 = _0x4c355b.dispose) == null || _0x596773.call(_0x4c355b), _0x32be31.current = () => {
        };
      };
    }
    _0x4f553e.current = !1;
    const _0x6324e2 = _0x9f16cd.getContext("2d");
    if (!_0x6324e2) return;
    let _0x4340b5 = 0, _0x20da18 = 0, _0xaa64c1 = 1, _0x455076 = 0, _0x2d7844 = 0, _0x156564 = new Float32Array(0), _0x469922 = new Int16Array(0), _0x51b394 = new Int16Array(0), _0x8cec36 = new Int32Array(0), _0x508ab1 = new Int32Array(0), _0x1fbccc = v(0), _0x19f72c = 0, _0xf881ed = "#737373";
    const _0x47b98e = () => {
      const _0x29b2de = _0x3db070.getBoundingClientRect();
      _0x4340b5 = _0x29b2de.width, _0x20da18 = _0x29b2de.height, _0xaa64c1 = Math.max(1, Math.min(window.devicePixelRatio || 1, 1)), _0x9f16cd.width = Math.max(1, Math.round(_0x4340b5 * _0xaa64c1)), _0x9f16cd.height = Math.max(1, Math.round(_0x20da18 * _0xaa64c1)), _0x9f16cd.style.width = "".concat(_0x4340b5, "px"), _0x9f16cd.style.height = "".concat(_0x20da18, "px"), _0x455076 = Math.ceil(_0x4340b5 / c) + 1, _0x2d7844 = Math.ceil(_0x20da18 / c) + 1, _0x156564 = new Float32Array((_0x455076 + 1) * (_0x2d7844 + 1)), _0x469922 = new Int16Array(_0x2d7844 * _0x455076), _0x51b394 = new Int16Array(_0x2d7844 * _0x455076), _0x1fbccc = v(2 * (_0x2d7844 + 1) * (_0x455076 + 1) + 4), _0x140ada.get() === 0 && (d(_0x41363e, _0x4340b5 / 2), d(_0x42e7c8, _0x20da18 / 2), d(_0x271139, _0x4340b5 / 2), d(_0x25a856, _0x20da18 / 2));
    }, _0x46f513 = (_0x371d3a, _0x1bb43a = !1) => {
      if (_0x4340b5 === 0 || _0x20da18 === 0) return;
      const { lineColor: _0x33b607, lineOpacity: _0x1aceba = 1, levels: _0x4bc03b } = _0x22a1fe.current;
      ((_0x446510) => {
        const { speed: _0x1186eb, scale: _0x3b04eb, peak: _0x1d7192 } = _0x22a1fe.current, _0x2cdc59 = 280 * _0x3b04eb, _0x335a29 = 5e-5 * _0x446510 * _0x1186eb, _0x3b7bcb = _0x140ada.get() * _0x1d7192 * 1.5, _0x2f2130 = _0x271139.get(), _0x1ded24 = _0x25a856.get(), _0x2aae4e = _0x1303a3.current, _0x3ff020 = 0.8 * Math.hypot(_0x4340b5, _0x20da18), _0x2ddb31 = _0x546512.get();
        let _0x54e598 = 0;
        for (let _0x30c12c = 0; _0x30c12c <= _0x2d7844; _0x30c12c++) {
          const _0x5158f3 = _0x30c12c * c;
          for (let _0x1493bc = 0; _0x1493bc <= _0x455076; _0x1493bc++) {
            const _0x258b7f = _0x1493bc * c, _0x41ef64 = _0x258b7f / _0x2cdc59, _0x259f83 = _0x5158f3 / _0x2cdc59;
            let _0x45b1bf = 1.1 * g(_0x41ef64, _0x259f83, _0x335a29) + 0.45 * g(2.1 * _0x41ef64, 2.1 * _0x259f83, 1.7 * _0x335a29);
            const _0x4ecf70 = _0x258b7f - _0x2f2130, _0x31c15f = _0x5158f3 - _0x1ded24;
            _0x3b7bcb > 0 && (_0x45b1bf += _0x3b7bcb * Math.exp(-Math.hypot(_0x4ecf70, _0x31c15f) / 90));
            for (const _0x2c8876 of _0x2aae4e) {
              const _0x28bda2 = _0x2c8876.progress.get(), _0x569924 = Math.hypot(_0x258b7f - _0x2c8876.x, _0x5158f3 - _0x2c8876.y) - _0x28bda2 * _0x3ff020;
              _0x45b1bf += 0.9 * (1 - _0x28bda2) * Math.cos(_0x569924 / 60 * 1.8) * Math.exp(-_0x569924 * _0x569924 / 7200);
            }
            _0x156564[_0x54e598++] = _0x45b1bf * _0x2ddb31;
          }
        }
      })(_0x371d3a);
      const _0x192931 = 1.9 / Math.max(2, Math.round(_0x4bc03b)), _0x246852 = new Path2D(), _0x51958a = new Path2D(), _0x2746fa = _0x455076 + 1;
      let _0x3f9cf4 = 1 / 0, _0x1fe200 = -1 / 0;
      for (let _0x24520e = 0; _0x24520e < _0x2d7844; _0x24520e++) for (let _0x4ec3f8 = 0; _0x4ec3f8 < _0x455076; _0x4ec3f8++) {
        const _0x5ad747 = _0x24520e * _0x2746fa + _0x4ec3f8, _0x1db543 = _0x156564[_0x5ad747], _0x28c01b = _0x156564[_0x5ad747 + 1], _0x312e32 = _0x156564[_0x5ad747 + _0x2746fa + 1], _0x25d35c = _0x156564[_0x5ad747 + _0x2746fa], _0x9235f4 = Math.ceil((Math.min(_0x1db543, _0x28c01b, _0x312e32, _0x25d35c) + f) / _0x192931), _0x21e574 = Math.floor((Math.max(_0x1db543, _0x28c01b, _0x312e32, _0x25d35c) + f) / _0x192931);
        _0x469922[_0x24520e * _0x455076 + _0x4ec3f8] = _0x9235f4, _0x51b394[_0x24520e * _0x455076 + _0x4ec3f8] = _0x21e574, _0x9235f4 < _0x3f9cf4 && (_0x3f9cf4 = _0x9235f4), _0x21e574 > _0x1fe200 && (_0x1fe200 = _0x21e574);
      }
      const _0x23f3d2 = _0x1fe200 - _0x3f9cf4 + 1;
      if (_0x23f3d2 <= 0 || !Number.isFinite(_0x23f3d2)) return;
      _0x8cec36.length < _0x23f3d2 + 1 && (_0x8cec36 = new Int32Array(_0x23f3d2 + 1)), _0x8cec36.fill(0, 0, _0x23f3d2 + 1);
      let _0x195844 = 0;
      for (let _0x22f063 = 0; _0x22f063 < _0x2d7844 * _0x455076; _0x22f063++) for (let _0x55d7a1 = _0x469922[_0x22f063]; _0x55d7a1 <= _0x51b394[_0x22f063]; _0x55d7a1++) _0x8cec36[_0x55d7a1 - _0x3f9cf4 + 1]++, _0x195844++;
      for (let _0x1318c5 = 0; _0x1318c5 < _0x23f3d2; _0x1318c5++) _0x8cec36[_0x1318c5 + 1] += _0x8cec36[_0x1318c5];
      _0x508ab1.length < _0x195844 && (_0x508ab1 = new Int32Array(2 * _0x195844));
      const _0x4d33fa = _0x8cec36.slice(0, _0x23f3d2);
      for (let _0x3a4a73 = 0; _0x3a4a73 < _0x2d7844 * _0x455076; _0x3a4a73++) for (let _0x183056 = _0x469922[_0x3a4a73]; _0x183056 <= _0x51b394[_0x3a4a73]; _0x183056++) _0x508ab1[_0x4d33fa[_0x183056 - _0x3f9cf4]++] = _0x3a4a73;
      for (let _0x3f1750 = _0x3f9cf4; _0x3f1750 <= _0x1fe200; _0x3f1750++) {
        const _0x5be6fe = _0x3f1750 * _0x192931 - f, _0x3bd40c = _0x8cec36[_0x3f1750 - _0x3f9cf4 + 1];
        for (let _0x17e891 = _0x8cec36[_0x3f1750 - _0x3f9cf4]; _0x17e891 < _0x3bd40c; _0x17e891++) {
          const _0x4da719 = _0x508ab1[_0x17e891], _0x2de5b8 = _0x4da719 / _0x455076 | 0, _0x55ebd9 = _0x4da719 - _0x2de5b8 * _0x455076, _0x2984a4 = _0x2de5b8 * _0x2746fa + _0x55ebd9, _0x36fbfa = _0x156564[_0x2984a4], _0x50cc95 = _0x156564[_0x2984a4 + 1], _0x14d219 = _0x156564[_0x2984a4 + _0x2746fa + 1], _0x4d545b = _0x156564[_0x2984a4 + _0x2746fa], _0x132a57 = (_0x36fbfa > _0x5be6fe ? 8 : 0) | (_0x50cc95 > _0x5be6fe ? 4 : 0) | (_0x14d219 > _0x5be6fe ? 2 : 0) | (_0x4d545b > _0x5be6fe ? 1 : 0);
          if (_0x132a57 === 0 || _0x132a57 === 15) continue;
          const _0x31ab2e = _0x55ebd9 * c, _0x5cb11e = _0x2de5b8 * c, _0x43aa4e = _0x31ab2e + (_0x5be6fe - _0x36fbfa) / (_0x50cc95 - _0x36fbfa) * c, _0x305792 = _0x5cb11e + (_0x5be6fe - _0x50cc95) / (_0x14d219 - _0x50cc95) * c, _0x12c0f9 = _0x31ab2e + (_0x5be6fe - _0x4d545b) / (_0x14d219 - _0x4d545b) * c, _0x209aab = _0x5cb11e + (_0x5be6fe - _0x36fbfa) / (_0x4d545b - _0x36fbfa) * c, _0x89cd3d = 2 * _0x2984a4, _0x1d00c7 = _0x89cd3d + 2 * _0x2746fa, _0x193515 = _0x89cd3d + 1, _0x4447bc = _0x89cd3d + 3, _0x123e32 = _0x1fbccc;
          switch (_0x132a57) {
            case 1:
            case 14:
              y(_0x123e32, _0x193515, _0x31ab2e, _0x209aab, _0x1d00c7, _0x12c0f9, _0x5cb11e + c);
              break;
            case 2:
            case 13:
              y(_0x123e32, _0x1d00c7, _0x12c0f9, _0x5cb11e + c, _0x4447bc, _0x31ab2e + c, _0x305792);
              break;
            case 3:
            case 12:
              y(_0x123e32, _0x193515, _0x31ab2e, _0x209aab, _0x4447bc, _0x31ab2e + c, _0x305792);
              break;
            case 4:
            case 11:
              y(_0x123e32, _0x89cd3d, _0x43aa4e, _0x5cb11e, _0x4447bc, _0x31ab2e + c, _0x305792);
              break;
            case 6:
            case 9:
              y(_0x123e32, _0x89cd3d, _0x43aa4e, _0x5cb11e, _0x1d00c7, _0x12c0f9, _0x5cb11e + c);
              break;
            case 7:
            case 8:
              y(_0x123e32, _0x193515, _0x31ab2e, _0x209aab, _0x89cd3d, _0x43aa4e, _0x5cb11e);
              break;
            case 5:
            case 10:
              _0x132a57 === 5 == (_0x36fbfa + _0x50cc95 + _0x14d219 + _0x4d545b) / 4 > _0x5be6fe ? (y(_0x123e32, _0x193515, _0x31ab2e, _0x209aab, _0x89cd3d, _0x43aa4e, _0x5cb11e), y(_0x123e32, _0x1d00c7, _0x12c0f9, _0x5cb11e + c, _0x4447bc, _0x31ab2e + c, _0x305792)) : (y(_0x123e32, _0x193515, _0x31ab2e, _0x209aab, _0x1d00c7, _0x12c0f9, _0x5cb11e + c), y(_0x123e32, _0x89cd3d, _0x43aa4e, _0x5cb11e, _0x4447bc, _0x31ab2e + c, _0x305792));
          }
        }
        R(_0x3f1750 % 5 == 0 ? _0x51958a : _0x246852, _0x1fbccc);
      }
      _0x6324e2.setTransform(_0xaa64c1, 0, 0, _0xaa64c1, 0, 0), _0x6324e2.clearRect(0, 0, _0x4340b5, _0x20da18), _0x1bb43a && _0x19f72c++ % 30 != 0 || (_0xf881ed = getComputedStyle(_0x3db070).color || "#737373"), _0x6324e2.strokeStyle = _0x33b607 ?? _0xf881ed, _0x6324e2.lineCap = "round", _0x6324e2.globalAlpha = 0.4 * _0x1aceba, _0x6324e2.lineWidth = 1, _0x6324e2.stroke(_0x246852), _0x6324e2.globalAlpha = 0.85 * _0x1aceba, _0x6324e2.lineWidth = 1.5, _0x6324e2.stroke(_0x51958a), _0x6324e2.globalAlpha = 1;
    };
    _0x32be31.current = _0x46f513, _0x47b98e(), _0x46f513(_0x3600c3.current);
    const _0x42f2d3 = new ResizeObserver(() => {
      _0x47b98e(), _0x46f513(_0x3600c3.current);
    });
    return _0x42f2d3.observe(_0x3db070), () => {
      _0x42f2d3.disconnect(), _0x32be31.current = () => {
      };
    };
  }, [_0x140ada, _0x271139, _0x25a856, _0x41363e, _0x42e7c8, _0x546512]), _0xcbdd9a.useEffect(() => {
    _0x32be31.current(_0x3600c3.current);
  }, [_0x50c9f7, _0x883e18, _0xedb34, _0x233c36, _0x1c848f]), _0xcbdd9a.useEffect(() => {
    if (!_0x114b5a || !_0x3f86c7) return void _0x14b6f9.set(0);
    let _0x111207 = !1, _0x24dd3f = 0, _0xf907f6 = 0, _0x54ce44 = 0;
    const _0x49e2d3 = () => {
      if (_0x54ce44 = 0, !_0x111207 || !_0x501e27.current) return;
      _0x111207 = !1;
      const _0x56c5df = _0x501e27.current.getBoundingClientRect();
      _0x24dd3f >= _0x56c5df.left && _0x24dd3f <= _0x56c5df.right && _0xf907f6 >= _0x56c5df.top && _0xf907f6 <= _0x56c5df.bottom ? (_0x41363e.set(_0x24dd3f - _0x56c5df.left), _0x42e7c8.set(_0xf907f6 - _0x56c5df.top), _0x14b6f9.set(1)) : _0x14b6f9.set(0);
    }, _0x18bc78 = (_0x28937b) => {
      _0x28937b.pointerType !== "touch" && (_0x24dd3f = _0x28937b.clientX, _0xf907f6 = _0x28937b.clientY, _0x111207 = !0, _0x54ce44 || (_0x54ce44 = requestAnimationFrame(_0x49e2d3)));
    }, _0x259c5b = (_0x134317) => {
      var _0x4084f8;
      const _0xe9205b = _0x501e27.current;
      if (!_0xe9205b) return;
      const _0xab5cbe = _0xe9205b.getBoundingClientRect();
      if (_0x134317.clientX < _0xab5cbe.left || _0x134317.clientX > _0xab5cbe.right || _0x134317.clientY < _0xab5cbe.top || _0x134317.clientY > _0xab5cbe.bottom) return;
      const _0x2e490e = _0x134317.clientX - _0xab5cbe.left, _0x2d9d9d = _0x134317.clientY - _0xab5cbe.top;
      _0x41363e.set(_0x2e490e), _0x42e7c8.set(_0x2d9d9d);
      const _0x50478e = { x: _0x2e490e, y: _0x2d9d9d, progress: _0xb04375(0) };
      _0x1303a3.current = [..._0x1303a3.current.slice(-3), _0x50478e];
      const _0x2f4404 = _0x199a3a(_0x50478e.progress, 1, { duration: 2.4, ease: [0.25, 0.4, 0.45, 1] });
      (_0x4084f8 = _0x2f4404.then) == null || _0x4084f8.call(_0x2f4404, () => {
        _0x1303a3.current = _0x1303a3.current.filter((_0x419ead) => _0x419ead !== _0x50478e);
      });
    };
    return window.addEventListener("pointermove", _0x18bc78, { passive: !0 }), window.addEventListener("pointerdown", _0x259c5b, { passive: !0 }), () => {
      _0x54ce44 && cancelAnimationFrame(_0x54ce44), window.removeEventListener("pointermove", _0x18bc78), window.removeEventListener("pointerdown", _0x259c5b);
    };
  }, [_0x114b5a, _0x3f86c7, _0x41363e, _0x42e7c8, _0x14b6f9]), _0xcbdd9a.useEffect(() => {
    if (!_0x114b5a) return;
    let _0x44dd42 = 0, _0x1791c3 = 0, _0x5b0f72 = performance.now(), _0x1e8628 = 0;
    const _0x41407d = () => {
      _0x2c47b1.current = !0, _0x1791c3 && window.clearTimeout(_0x1791c3), _0x1791c3 = window.setTimeout(() => {
        _0x2c47b1.current = !1, _0x5b0f72 = performance.now();
      }, 140);
    };
    window.addEventListener("scroll", _0x41407d, { passive: !0 });
    const _0x5e65f8 = (_0xc4fced) => {
      const _0x504c58 = _0xc4fced - _0x5b0f72;
      _0x5b0f72 = _0xc4fced;
      const _0x4e49d3 = _0x140ada.get() > 0.02 || _0x1303a3.current.length > 0 || _0x546512.get() < 0.99;
      if (_0x2c47b1.current && !_0x4e49d3) return void (_0x44dd42 = requestAnimationFrame(_0x5e65f8));
      _0x1e8628 += _0x504c58;
      const _0x47137e = _0x4f553e.current && _0x4e49d3 ? 16 : 50;
      _0x1e8628 >= _0x47137e && (_0x3600c3.current += Math.min(_0x1e8628, 64), _0x1e8628 = 0, _0x32be31.current(_0x3600c3.current, !0)), _0x44dd42 = requestAnimationFrame(_0x5e65f8);
    };
    return _0x44dd42 = requestAnimationFrame(_0x5e65f8), () => {
      cancelAnimationFrame(_0x44dd42), _0x1791c3 && window.clearTimeout(_0x1791c3), window.removeEventListener("scroll", _0x41407d), _0x2c47b1.current = !1;
    };
  }, [_0x114b5a, _0x140ada, _0x546512]), _0x3e3a8a.jsxs("div", { ref: _0x501e27, "data-slot": "topography-background", className: _0x33236e("relative w-full h-full overflow-hidden", _0x506e12), ..._0x26fe67, children: [_0x3e3a8a.jsx("canvas", { ref: _0x3859d0, "aria-hidden": "true", className: "pointer-events-none absolute inset-0" }), _0x5f2809] });
});
export {
  F as T
};
