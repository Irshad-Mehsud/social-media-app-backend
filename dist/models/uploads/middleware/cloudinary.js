"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _cloudinary = require("cloudinary");
var _fsExtra = _interopRequireDefault(require("fs-extra"));
var _sharp = _interopRequireDefault(require("sharp"));
var _path = _interopRequireDefault(require("path"));
var _dotenv = _interopRequireDefault(require("dotenv"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
_dotenv["default"].config();

// Cloudinary Config
_cloudinary.v2.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET
});
var upLoadToCloudinary = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(filePath, mimeType) {
    var allowedTypes, uploadDir, originalFileName, compressedFileName, compressedPath, result, _uploadDir, _originalFileName, _compressedFileName, _compressedPath, _t;
    return _regenerator().w(function (_context) {
      while (1) switch (_context.p = _context.n) {
        case 0:
          _context.p = 0;
          if (mimeType) {
            _context.n = 1;
            break;
          }
          throw new Error("Could not determine MIME type.");
        case 1:
          allowedTypes = ['image/jpeg', 'image/png', 'image/jpg', 'image/webp'];
          if (allowedTypes.includes(mimeType)) {
            _context.n = 2;
            break;
          }
          throw new Error("Unsupported file type: ".concat(mimeType));
        case 2:
          // Ensure directory exists
          uploadDir = _path["default"].dirname(filePath); // Safely generate compressed file path
          originalFileName = _path["default"].basename(filePath); // e.g. "abc123"
          compressedFileName = originalFileName + '.webp'; // "abc123.webp"
          compressedPath = _path["default"].join(uploadDir, compressedFileName); // uploads/abc123.webp
          // Compress and convert to WebP
          _context.n = 3;
          return (0, _sharp["default"])(filePath).webp({
            quality: 20
          }).toFile(compressedPath);
        case 3:
          console.log("Image compressed and saved as:", compressedPath);

          // Upload to Cloudinary
          _context.n = 4;
          return _cloudinary.v2.uploader.upload(compressedPath, {
            folder: "social-media-app",
            resource_type: "image"
          });
        case 4:
          result = _context.v;
          console.log("Uploaded to Cloudinary:", result.secure_url);

          // Delete original and compressed files
          _context.n = 5;
          return _fsExtra["default"].remove(filePath);
        case 5:
          _context.n = 6;
          return _fsExtra["default"].remove(compressedPath);
        case 6:
          console.log("Local files deleted.");
          return _context.a(2, result.secure_url);
        case 7:
          _context.p = 7;
          _t = _context.v;
          console.error("Upload failed:", _t);

          // Clean up
          _context.n = 8;
          return _fsExtra["default"].pathExists(filePath);
        case 8:
          if (!_context.v) {
            _context.n = 9;
            break;
          }
          _context.n = 9;
          return _fsExtra["default"].remove(filePath);
        case 9:
          _uploadDir = _path["default"].dirname(filePath);
          _originalFileName = _path["default"].basename(filePath);
          _compressedFileName = _originalFileName + '.webp';
          _compressedPath = _path["default"].join(_uploadDir, _compressedFileName);
          _context.n = 10;
          return _fsExtra["default"].pathExists(_compressedPath);
        case 10:
          if (!_context.v) {
            _context.n = 11;
            break;
          }
          _context.n = 11;
          return _fsExtra["default"].remove(_compressedPath);
        case 11:
          throw _t;
        case 12:
          return _context.a(2);
      }
    }, _callee, null, [[0, 7]]);
  }));
  return function upLoadToCloudinary(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
var _default = exports["default"] = upLoadToCloudinary;