const _0x2c9d19 = null;
import { r as _0x570b46, j as _0x5c5d40 } from "./b9a27LkY.js";
import { A as _0x443296, m as _0xe3233 } from "./C9OiCWmG.js";
import "./NGVnNSsi.js";
const r = ({ hue: _0x2533bb = 230, xOffset: _0x235916 = 0, speed: _0x488f9b = 1, intensity: _0x6bb09b = 1, size: _0x2ecaf6 = 1 }) => {
  const _0x38b999 = _0x570b46.useRef(null);
  return _0x570b46.useEffect(() => {
    const _0x488e66 = _0x38b999.current;
    if (!_0x488e66) return;
    const _0x2cdf27 = window.matchMedia("(max-width: 767px), (pointer: coarse)").matches, _0xbab67c = 1e3 / (_0x2cdf27 ? 30 : 45), _0x82e09e = () => {
      const _0x1eabf2 = Math.min(window.devicePixelRatio || 1, _0x2cdf27 ? 1 : 1.5), _0x42d54d = Math.max(1, Math.floor(_0x488e66.clientWidth * _0x1eabf2)), _0xa513ac = Math.max(1, Math.floor(_0x488e66.clientHeight * _0x1eabf2));
      _0x488e66.width === _0x42d54d && _0x488e66.height === _0xa513ac || (_0x488e66.width = _0x42d54d, _0x488e66.height = _0xa513ac);
    };
    _0x82e09e();
    const _0x19e832 = new ResizeObserver(_0x82e09e);
    _0x19e832.observe(_0x488e66);
    const _0x988f80 = _0x488e66.getContext("webgl");
    if (!_0x988f80) return;
    const _0x2d6944 = (_0x509295, _0x594fbc) => {
      const _0x333c5c = _0x988f80.createShader(_0x594fbc);
      return _0x333c5c ? (_0x988f80.shaderSource(_0x333c5c, _0x509295), _0x988f80.compileShader(_0x333c5c), _0x988f80.getShaderParameter(_0x333c5c, _0x988f80.COMPILE_STATUS) ? _0x333c5c : (_0x988f80.deleteShader(_0x333c5c), null)) : null;
    }, _0x3e74f3 = _0x2d6944(`
      attribute vec2 aPosition;
      void main() {
        gl_Position = vec4(aPosition, 0.0, 1.0);
      }
    `, _0x988f80.VERTEX_SHADER), _0x27dfd8 = _0x2d6944(`
      precision mediump float;
      uniform vec2 iResolution;
      uniform float iTime;
      uniform float uHue;
      uniform float uXOffset;
      uniform float uSpeed;
      uniform float uIntensity;
      uniform float uSize;
      #define OCTAVE_COUNT 10
      vec3 hsv2rgb(vec3 c) {
          vec3 rgb = clamp(abs(mod(c.x * 6.0 + vec3(0.0,4.0,2.0), 6.0) - 3.0) - 1.0, 0.0, 1.0);
          return c.z * mix(vec3(1.0), rgb, c.y);
      }
      float hash11(float p) {
          p = fract(p * .1031);
          p *= p + 33.33;
          p *= p + p;
          return fract(p);
      }
      float hash12(vec2 p) {
          vec3 p3 = fract(vec3(p.xyx) * .1031);
          p3 += dot(p3, p3.yzx + 33.33);
          return fract((p3.x + p3.y) * p3.z);
      }
      mat2 rotate2d(float theta) {
          float c = cos(theta);
          float s = sin(theta);
          return mat2(c, -s, s, c);
      }
      float noise(vec2 p) {
          vec2 ip = floor(p);
          vec2 fp = fract(p);
          float a = hash12(ip);
          float b = hash12(ip + vec2(1.0, 0.0));
          float c = hash12(ip + vec2(0.0, 1.0));
          float d = hash12(ip + vec2(1.0, 1.0));
          vec2 t = smoothstep(0.0, 1.0, fp);
          return mix(mix(a, b, t.x), mix(c, d, t.x), t.y);
      }
      float fbm(vec2 p) {
          float value = 0.0;
          float amplitude = 0.5;
          for (int i = 0; i < OCTAVE_COUNT; ++i) {
              value += amplitude * noise(p);
              p *= rotate2d(0.45);
              p *= 2.0;
              amplitude *= 0.5;
          }
          return value;
      }
      void mainImage( out vec4 fragColor, in vec2 fragCoord ) {
        vec2 uv = fragCoord / iResolution.xy;
        uv = 2.0 * uv - 1.0;
        float aspect = iResolution.x / iResolution.y;
        uv.x *= aspect;
        uv.x += uXOffset;
          
          // 1. Alur Utama (Macroscopic Path)
          // Menggunakan gelombang sinus agar petir meliuk lembut seperti ular ke bawah
          float path = sin(uv.y * 3.0 - iTime * 2.5) * 0.25 
                     + sin(uv.y * 5.0 + iTime * 1.5) * 0.15;
          
          // 2. Detail Kasar (Microscopic Noise)
          // Menggunakan fbm untuk cabang dan pinggiran tajam khas petir
          vec2 noiseUv = uv * uSize * 1.5;
          float n = 2.0 * fbm(noiseUv + 1.2 * iTime * uSpeed) - 1.0;
          
        // Batasi lebar liukan pada layar portrait.
        float scale = aspect < 1.0 ? (aspect * 1.1) : 1.0;
        float center = (path + n * 0.4) * scale;
          
        uv.y += n * 0.2 * scale; // Sedikit distorsi vertikal
          float dist = abs(uv.x - center);
          
          vec3 baseColor = hsv2rgb(vec3(uHue / 360.0, 0.7, 0.8));
          vec3 col = baseColor * pow(mix(0.0, 0.07, hash11(iTime * uSpeed)) / dist, 1.0) * uIntensity;
          float alpha = clamp(max(col.r, max(col.g, col.b)), 0.0, 1.0);
          fragColor = vec4(col, alpha);
      }
      void main() {
          mainImage(gl_FragColor, gl_FragCoord.xy);
      }
    `, _0x988f80.FRAGMENT_SHADER);
    if (!_0x3e74f3 || !_0x27dfd8) return;
    const _0x3adecb = _0x988f80.createProgram();
    if (!_0x3adecb || (_0x988f80.attachShader(_0x3adecb, _0x3e74f3), _0x988f80.attachShader(_0x3adecb, _0x27dfd8), _0x988f80.linkProgram(_0x3adecb), !_0x988f80.getProgramParameter(_0x3adecb, _0x988f80.LINK_STATUS))) return;
    _0x988f80.useProgram(_0x3adecb);
    const _0x29bd72 = new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]), _0x26e02a = _0x988f80.createBuffer();
    _0x988f80.bindBuffer(_0x988f80.ARRAY_BUFFER, _0x26e02a), _0x988f80.bufferData(_0x988f80.ARRAY_BUFFER, _0x29bd72, _0x988f80.STATIC_DRAW);
    const _0x5c4591 = _0x988f80.getAttribLocation(_0x3adecb, "aPosition");
    _0x988f80.enableVertexAttribArray(_0x5c4591), _0x988f80.vertexAttribPointer(_0x5c4591, 2, _0x988f80.FLOAT, !1, 0, 0);
    const _0x43abbf = _0x988f80.getUniformLocation(_0x3adecb, "iResolution"), _0x307f8c = _0x988f80.getUniformLocation(_0x3adecb, "iTime"), _0x729e5f = _0x988f80.getUniformLocation(_0x3adecb, "uHue"), _0x499e46 = _0x988f80.getUniformLocation(_0x3adecb, "uXOffset"), _0x4b2605 = _0x988f80.getUniformLocation(_0x3adecb, "uSpeed"), _0x57d01f = _0x988f80.getUniformLocation(_0x3adecb, "uIntensity"), _0x413446 = _0x988f80.getUniformLocation(_0x3adecb, "uSize");
    let _0x165f62 = 0, _0x1866f8 = 0, _0x354d7c = document.visibilityState !== "hidden";
    const _0x23f343 = performance.now(), _0x2559d9 = (_0x352f4c) => {
      _0x165f62 = 0, _0x354d7c && (_0x352f4c - _0x1866f8 >= _0xbab67c && (_0x1866f8 = _0x352f4c, _0x988f80.viewport(0, 0, _0x488e66.width, _0x488e66.height), _0x988f80.uniform2f(_0x43abbf, _0x488e66.width, _0x488e66.height), _0x988f80.uniform1f(_0x307f8c, (_0x352f4c - _0x23f343) / 1e3), _0x988f80.uniform1f(_0x729e5f, _0x2533bb), _0x988f80.uniform1f(_0x499e46, _0x235916), _0x988f80.uniform1f(_0x4b2605, _0x488f9b), _0x988f80.uniform1f(_0x57d01f, _0x6bb09b), _0x988f80.uniform1f(_0x413446, _0x2ecaf6), _0x988f80.drawArrays(_0x988f80.TRIANGLES, 0, 6)), _0x165f62 = requestAnimationFrame(_0x2559d9));
    }, _0x782af = () => {
      !_0x165f62 && _0x354d7c && (_0x165f62 = requestAnimationFrame(_0x2559d9));
    }, _0x371699 = () => {
      _0x354d7c = document.visibilityState !== "hidden", _0x354d7c && _0x782af();
    };
    return document.addEventListener("visibilitychange", _0x371699), _0x782af(), () => {
      _0x19e832.disconnect(), document.removeEventListener("visibilitychange", _0x371699), _0x165f62 && cancelAnimationFrame(_0x165f62);
    };
  }, [_0x2533bb, _0x235916, _0x488f9b, _0x6bb09b, _0x2ecaf6]), _0x5c5d40.jsx("canvas", { ref: _0x38b999, className: "w-full h-full" });
};
class n {
  constructor() {
    this.pos = { x: 0, y: 0 }, this.vel = { x: 0, y: 0 }, this.acc = { x: 0, y: 0 }, this.target = { x: 0, y: 0 }, this.closeEnoughTarget = 100, this.maxSpeed = 1, this.maxForce = 0.1, this.particleSize = 10, this.isKilled = !1, this.startColor = { r: 0, g: 0, b: 0 }, this.targetColor = { r: 0, g: 0, b: 0 }, this.colorWeight = 0, this.colorBlendRate = 0.01;
  }
  move() {
    let _0x4992cd = 1;
    const _0x41efda = Math.sqrt(Math.pow(this.pos.x - this.target.x, 2) + Math.pow(this.pos.y - this.target.y, 2));
    _0x41efda < this.closeEnoughTarget && (_0x4992cd = _0x41efda / this.closeEnoughTarget);
    const _0x48e841 = { x: this.target.x - this.pos.x, y: this.target.y - this.pos.y }, _0x24b986 = Math.sqrt(_0x48e841.x * _0x48e841.x + _0x48e841.y * _0x48e841.y);
    _0x24b986 > 0 && (_0x48e841.x = _0x48e841.x / _0x24b986 * this.maxSpeed * _0x4992cd, _0x48e841.y = _0x48e841.y / _0x24b986 * this.maxSpeed * _0x4992cd);
    const _0x520500 = { x: _0x48e841.x - this.vel.x, y: _0x48e841.y - this.vel.y }, _0x349a29 = Math.sqrt(_0x520500.x * _0x520500.x + _0x520500.y * _0x520500.y);
    _0x349a29 > 0 && (_0x520500.x = _0x520500.x / _0x349a29 * this.maxForce, _0x520500.y = _0x520500.y / _0x349a29 * this.maxForce), this.acc.x += _0x520500.x, this.acc.y += _0x520500.y, this.vel.x += this.acc.x, this.vel.y += this.acc.y, this.pos.x += this.vel.x, this.pos.y += this.vel.y, this.acc.x = 0, this.acc.y = 0;
  }
  draw(_0xfb4911, _0x513035) {
    this.colorWeight < 1 && (this.colorWeight = Math.min(this.colorWeight + this.colorBlendRate, 1));
    const _0x209c28 = Math.round(this.startColor.r + (this.targetColor.r - this.startColor.r) * this.colorWeight), _0x98d45b = Math.round(this.startColor.g + (this.targetColor.g - this.startColor.g) * this.colorWeight), _0x1980fb = Math.round(this.startColor.b + (this.targetColor.b - this.startColor.b) * this.colorWeight);
    _0xfb4911.fillStyle = "rgb(".concat(_0x209c28, ", ").concat(_0x98d45b, ", ").concat(_0x1980fb, ")"), _0x513035 ? _0xfb4911.fillRect(this.pos.x, this.pos.y, this.particleSize, this.particleSize) : (_0xfb4911.beginPath(), _0xfb4911.arc(this.pos.x, this.pos.y, this.particleSize / 2, 0, 2 * Math.PI), _0xfb4911.fill());
  }
  kill(_0x2bce51, _0x4551e6) {
    if (!this.isKilled) {
      const _0x353cc3 = this.generateRandomPos(_0x2bce51 / 2, _0x4551e6 / 2, (_0x2bce51 + _0x4551e6) / 2, _0x2bce51, _0x4551e6);
      this.target.x = _0x353cc3.x, this.target.y = _0x353cc3.y, this.startColor = { r: this.startColor.r + (this.targetColor.r - this.startColor.r) * this.colorWeight, g: this.startColor.g + (this.targetColor.g - this.startColor.g) * this.colorWeight, b: this.startColor.b + (this.targetColor.b - this.startColor.b) * this.colorWeight }, this.targetColor = { r: 0, g: 0, b: 0 }, this.colorWeight = 0, this.isKilled = !0;
    }
  }
  generateRandomPos(_0x3abf25, _0x3c7541, _0x5dc686, _0x25f841, _0x3915db) {
    const _0x1714cd = { x: Math.random() * _0x25f841 - _0x3abf25, y: Math.random() * _0x3915db - _0x3c7541 }, _0x552c47 = Math.sqrt(_0x1714cd.x * _0x1714cd.x + _0x1714cd.y * _0x1714cd.y);
    return _0x552c47 > 0 && (_0x1714cd.x = _0x1714cd.x / _0x552c47 * _0x5dc686, _0x1714cd.y = _0x1714cd.y / _0x552c47 * _0x5dc686), { x: _0x3abf25 + _0x1714cd.x, y: _0x3c7541 + _0x1714cd.y };
  }
}
function a() {
  const _0x4b0877 = _0x570b46.useRef(null), _0x131a75 = _0x570b46.useRef(), _0x4a8562 = _0x570b46.useRef([]), _0x48371c = _0x570b46.useRef(null), _0x3a0c16 = _0x570b46.useRef(0), _0xb5e584 = (_0x1c0b2d, _0x5c9fe3, _0x729c45, _0x4f83c0, _0x3d74fa) => {
    const _0x11f94d = { x: Math.random() * _0x4f83c0 - _0x1c0b2d, y: Math.random() * _0x3d74fa - _0x5c9fe3 }, _0x42adbf = Math.sqrt(_0x11f94d.x * _0x11f94d.x + _0x11f94d.y * _0x11f94d.y);
    return _0x42adbf > 0 && (_0x11f94d.x = _0x11f94d.x / _0x42adbf * _0x729c45, _0x11f94d.y = _0x11f94d.y / _0x42adbf * _0x729c45), { x: _0x1c0b2d + _0x11f94d.x, y: _0x5c9fe3 + _0x11f94d.y };
  }, _0x40efc6 = () => {
    const _0x24464f = _0x4b0877.current;
    if (!_0x24464f) return;
    if (document.hidden) return void (_0x131a75.current = requestAnimationFrame(_0x40efc6));
    const _0x3ab8bd = _0x24464f.getContext("2d"), _0x287f2e = _0x4a8562.current;
    _0x3ab8bd.clearRect(0, 0, _0x24464f.width, _0x24464f.height), _0x3a0c16.current++;
    let _0x738ab8 = 0;
    _0x3a0c16.current > 90 && (_0x738ab8 = Math.min(1, (_0x3a0c16.current - 90) / 60)), _0x3ab8bd.globalAlpha = 1 - _0x738ab8;
    for (let _0x10c701 = _0x287f2e.length - 1; _0x10c701 >= 0; _0x10c701--) {
      const _0x298bfd = _0x287f2e[_0x10c701];
      _0x298bfd.move(), _0x298bfd.draw(_0x3ab8bd, !1), _0x298bfd.isKilled && (_0x298bfd.pos.x < 0 || _0x298bfd.pos.x > _0x24464f.width || _0x298bfd.pos.y < 0 || _0x298bfd.pos.y > _0x24464f.height) && _0x287f2e.splice(_0x10c701, 1);
    }
    _0x3ab8bd.globalAlpha = 1, _0x48371c.current && _0x738ab8 > 0 && (_0x3ab8bd.globalAlpha = _0x738ab8, _0x3ab8bd.drawImage(_0x48371c.current, 0, 0), _0x3ab8bd.globalAlpha = 1), _0x131a75.current = requestAnimationFrame(_0x40efc6);
  };
  return _0x570b46.useEffect(() => {
    const _0x122ebf = _0x4b0877.current;
    if (!_0x122ebf) return;
    const _0x2f6c7c = () => {
      const _0x223a3a = Math.min(window.devicePixelRatio || 1, 2), _0x2e4f90 = window.innerWidth, _0x1c5bc6 = window.innerHeight;
      _0x122ebf.width = _0x2e4f90 * _0x223a3a, _0x122ebf.height = _0x1c5bc6 * _0x223a3a, _0x122ebf.style.width = "".concat(_0x2e4f90, "px"), _0x122ebf.style.height = "".concat(_0x1c5bc6, "px"), _0x122ebf.getContext("2d").scale(_0x223a3a, _0x223a3a), ((_0x180769, _0x3c9c7c, _0xfccd7a) => {
        _0x3a0c16.current = 0;
        const _0x14c108 = document.createElement("canvas");
        _0x14c108.width = _0x3c9c7c, _0x14c108.height = _0xfccd7a;
        const _0x15dfbc = _0x14c108.getContext("2d", { willReadFrequently: !0 });
        _0x48371c.current = _0x14c108, _0x15dfbc.textAlign = "center", _0x15dfbc.textBaseline = "middle";
        const _0x11cb04 = Math.min(1, _0x3c9c7c / 800), _0x209df7 = 65 * _0x11cb04, _0xd3f3cc = 80 * _0x11cb04;
        _0x15dfbc.font = "bold ".concat(_0x209df7, "px Arial, sans-serif");
        const _0x5b1690 = _0x15dfbc.createLinearGradient(_0x3c9c7c / 2 - 250, 0, _0x3c9c7c / 2 + 250, 0);
        _0x5b1690.addColorStop(0, "#ffffff"), _0x5b1690.addColorStop(0.5, "#dbeafe"), _0x5b1690.addColorStop(1, "#bfdbfe"), _0x15dfbc.fillStyle = _0x5b1690, _0x15dfbc.fillText("Welcome To My", _0x3c9c7c / 2, _0xfccd7a / 2 - 0.7 * _0x209df7), _0x15dfbc.font = "bold ".concat(_0xd3f3cc, "px Arial, sans-serif"), _0x15dfbc.fillStyle = "#2c67ed", _0x15dfbc.fillText("Portofolio Website", _0x3c9c7c / 2, _0xfccd7a / 2 + 0.7 * _0xd3f3cc);
        const _0x414ee7 = _0x15dfbc.getImageData(0, 0, _0x3c9c7c, _0xfccd7a).data, _0x98e77e = _0x4a8562.current;
        let _0x21bde3 = 0;
        const _0x5b2d86 = [];
        for (let _0x7316e = 0; _0x7316e < _0x414ee7.length; _0x7316e += 16) _0x5b2d86.push(_0x7316e);
        for (let _0x1767b0 = _0x5b2d86.length - 1; _0x1767b0 > 0; _0x1767b0--) {
          const _0x467b92 = Math.floor(Math.random() * (_0x1767b0 + 1));
          [_0x5b2d86[_0x1767b0], _0x5b2d86[_0x467b92]] = [_0x5b2d86[_0x467b92], _0x5b2d86[_0x1767b0]];
        }
        for (const _0x2da3e3 of _0x5b2d86) if (_0x414ee7[_0x2da3e3 + 3] > 0) {
          const _0x1e5849 = _0x2da3e3 / 4 % _0x3c9c7c, _0x3e47a8 = Math.floor(_0x2da3e3 / 4 / _0x3c9c7c);
          let _0x4f7963;
          if (_0x21bde3 < _0x98e77e.length) _0x4f7963 = _0x98e77e[_0x21bde3], _0x4f7963.isKilled = !1, _0x21bde3++;
          else {
            _0x4f7963 = new n();
            const _0x5a0a32 = _0xb5e584(_0x3c9c7c / 2, _0xfccd7a / 2, (_0x3c9c7c + _0xfccd7a) / 2, _0x3c9c7c, _0xfccd7a);
            _0x4f7963.pos.x = _0x5a0a32.x, _0x4f7963.pos.y = _0x5a0a32.y, _0x4f7963.maxSpeed = 8 * Math.random() + 8, _0x4f7963.maxForce = 0.1 * _0x4f7963.maxSpeed, _0x4f7963.particleSize = 3, _0x4f7963.colorBlendRate = 0.0275 * Math.random() + 25e-4, _0x98e77e.push(_0x4f7963);
          }
          _0x4f7963.startColor = { r: _0x4f7963.startColor.r + (_0x4f7963.targetColor.r - _0x4f7963.startColor.r) * _0x4f7963.colorWeight, g: _0x4f7963.startColor.g + (_0x4f7963.targetColor.g - _0x4f7963.startColor.g) * _0x4f7963.colorWeight, b: _0x4f7963.startColor.b + (_0x4f7963.targetColor.b - _0x4f7963.startColor.b) * _0x4f7963.colorWeight }, _0x4f7963.targetColor = { r: _0x414ee7[_0x2da3e3], g: _0x414ee7[_0x2da3e3 + 1], b: _0x414ee7[_0x2da3e3 + 2] }, _0x4f7963.colorWeight = 0, _0x4f7963.target.x = _0x1e5849, _0x4f7963.target.y = _0x3e47a8;
        }
        for (let _0x4b6625 = _0x21bde3; _0x4b6625 < _0x98e77e.length; _0x4b6625++) _0x98e77e[_0x4b6625].kill(_0x3c9c7c, _0xfccd7a);
      })(0, _0x2e4f90, _0x1c5bc6);
    };
    return _0x2f6c7c(), _0x40efc6(), window.addEventListener("resize", _0x2f6c7c), () => {
      _0x131a75.current && cancelAnimationFrame(_0x131a75.current), window.removeEventListener("resize", _0x2f6c7c);
    };
  }, []), _0x5c5d40.jsx("div", { className: "absolute inset-0 w-full h-full pointer-events-none z-10 flex items-center justify-center", children: _0x5c5d40.jsx("canvas", { ref: _0x4b0877, className: "block", style: { willChange: "transform" } }) });
}
const s = () => {
  const [_0x1f62e4, _0x5c81eb] = _0x570b46.useState(0);
  return _0x570b46.useEffect(() => {
    let _0x3591b0 = 0;
    const _0x1e2719 = setInterval(() => {
      _0x3591b0++;
      const _0x2bec93 = Math.min(100, Math.round(_0x3591b0 / 100 * 100));
      _0x5c81eb(_0x2bec93), _0x3591b0 >= 100 && clearInterval(_0x1e2719);
    }, 40);
    return () => clearInterval(_0x1e2719);
  }, []), _0x5c5d40.jsxs("div", { className: "w-64 sm:w-80 mx-auto flex flex-col items-center gap-4", children: [_0x5c5d40.jsxs("div", { className: "text-white font-mono text-sm sm:text-base font-bold tracking-widest flex items-center justify-between w-full px-1", children: [_0x5c5d40.jsx("span", { children: "Loading" }), _0x5c5d40.jsxs("span", { children: [_0x1f62e4, "%"] })] }), _0x5c5d40.jsxs("div", { className: "w-full h-[3px] bg-white/10 rounded-full overflow-hidden relative", children: [_0x5c5d40.jsx("div", { className: "absolute top-0 bottom-0 left-0 bg-white/50 blur-[2px] w-full", style: { transform: "translateX(".concat(_0x1f62e4 - 100, "%)"), transition: "transform 0.1s linear" } }), _0x5c5d40.jsx("div", { className: "h-full bg-white shadow-[0_0_15px_rgba(255,255,255,0.5)]", style: { width: "".concat(_0x1f62e4, "%"), transition: "width 0.1s linear" } })] })] });
}, l = ({ onLoadingComplete: _0x7fe816 }) => {
  const [_0x5745c1, _0x587d69] = _0x570b46.useState(!0);
  _0x570b46.useEffect(() => {
    const _0x320752 = setTimeout(() => {
      _0x587d69(!1), setTimeout(() => {
        _0x7fe816?.();
      }, 1e3);
    }, 4500);
    return () => clearTimeout(_0x320752);
  }, [_0x7fe816]);
  const _0x27bd49 = { exit: { y: -20, opacity: 0, transition: { duration: 0.4, ease: "easeInOut" } } };
  return _0x5c5d40.jsx(_0x443296, { children: _0x5745c1 && _0x5c5d40.jsxs(_0xe3233.div, { className: "fixed inset-0 z-50", initial: { opacity: 0 }, animate: { opacity: 1 }, exit: "exit", variants: { exit: { opacity: 0, scale: 1.1, filter: "blur(10px)", transition: { duration: 0.8, ease: "easeInOut", when: "beforeChildren", staggerChildren: 0.1 } } }, children: [_0x5c5d40.jsx("div", { className: "absolute inset-0 z-[1] pointer-events-none", children: _0x5c5d40.jsx(r, { hue: 220, xOffset: 0, speed: 1.6, intensity: 1.2, size: 2 }) }), _0x5c5d40.jsx("div", { className: "relative z-10 min-h-screen flex items-center justify-center px-4", children: _0x5c5d40.jsxs("div", { className: "w-full max-w-4xl mx-auto", children: [_0x5c5d40.jsx(_0xe3233.div, { className: "text-center mb-6 sm:mb-8 md:mb-12 w-full h-[150px] sm:h-[200px] flex justify-center", variants: _0x27bd49, children: _0x5c5d40.jsx(a, {}) }), _0x5c5d40.jsx(_0xe3233.div, { className: "text-center", variants: _0x27bd49, "data-aos": "fade-up", "data-aos-delay": "1200", children: _0x5c5d40.jsx(s, {}) })] }) })] }) });
};
export {
  l as default
};
