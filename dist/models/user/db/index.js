"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updattedById = exports.unfollowUser = exports.getUserById = exports.getAllData = exports.followUser = exports.deleteById = exports.createUser = void 0;
var _bcryptjs = _interopRequireDefault(require("bcryptjs"));
var _index = _interopRequireDefault(require("../models/index.js"));
var _userValidation2 = _interopRequireDefault(require("../validations/userValidation.js"));
var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));
var _mongoose = _interopRequireDefault(require("mongoose"));
var _dotenv = _interopRequireDefault(require("dotenv"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
_dotenv["default"].config();

// const createUser = async (userData) => {
//     const user = new User(userData);
//     await user.save();
//     return user;
// };

var createUser = exports.createUser = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(userData) {
    var _userValidation, error, name, email, password, profilePicture, coverPicture, existingUser, hashedPassword, user, userResponse;
    return _regenerator().w(function (_context) {
      while (1) switch (_context.n) {
        case 0:
          // 1️⃣ Validate user input using Joi
          _userValidation = (0, _userValidation2["default"])(userData), error = _userValidation.error;
          if (!error) {
            _context.n = 1;
            break;
          }
          throw new Error(error.details.map(function (err) {
            return err.message;
          }).join(", "));
        case 1:
          name = userData.name, email = userData.email, password = userData.password, profilePicture = userData.profilePicture, coverPicture = userData.coverPicture; // 2️⃣ Check if user already exists
          _context.n = 2;
          return _index["default"].findOne({
            email: email
          });
        case 2:
          existingUser = _context.v;
          if (!existingUser) {
            _context.n = 3;
            break;
          }
          throw new Error("User already exists");
        case 3:
          _context.n = 4;
          return _bcryptjs["default"].hash(password, 10);
        case 4:
          hashedPassword = _context.v;
          // 4️⃣ Create a new user instance
          user = new _index["default"]({
            name: name,
            email: email,
            password: hashedPassword,
            profilePicture: profilePicture,
            coverPicture: coverPicture
          }); // 5️⃣ Save to database
          _context.n = 5;
          return user.save();
        case 5:
          // 6️⃣ Remove password before returning response
          userResponse = user.toObject();
          delete userResponse.password;
          return _context.a(2, userResponse);
      }
    }, _callee);
  }));
  return function createUser(_x) {
    return _ref.apply(this, arguments);
  };
}();
var getAllData = exports.getAllData = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
    var users;
    return _regenerator().w(function (_context2) {
      while (1) switch (_context2.n) {
        case 0:
          _context2.n = 1;
          return _index["default"].find({}).select("-password").populate("followers", "name email profilePicture").populate("following", "name email profilePicture").populate("stories");
        case 1:
          users = _context2.v;
          return _context2.a(2, users);
      }
    }, _callee2);
  }));
  return function getAllData() {
    return _ref2.apply(this, arguments);
  };
}();
var getUserById = exports.getUserById = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(id) {
    var user;
    return _regenerator().w(function (_context3) {
      while (1) switch (_context3.n) {
        case 0:
          _context3.n = 1;
          return _index["default"].findById(id).select("-password").populate("followers", "name email profilePicture").populate("following", "name email profilePicture").populate("stories");
        case 1:
          user = _context3.v;
          return _context3.a(2, user);
      }
    }, _callee3);
  }));
  return function getUserById(_x2) {
    return _ref3.apply(this, arguments);
  };
}();

// follow user
var followUser = exports.followUser = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4(req, res) {
    var currentUserId, targetUserId, _t;
    return _regenerator().w(function (_context4) {
      while (1) switch (_context4.p = _context4.n) {
        case 0:
          _context4.p = 0;
          currentUserId = req.body.id; // matches frontend
          targetUserId = req.params.id; // console.log(currentUserId, targetUserId);
          if (!(currentUserId === targetUserId)) {
            _context4.n = 1;
            break;
          }
          return _context4.a(2, res.status(400).json({
            message: "You cannot follow yourself"
          }));
        case 1:
          _context4.n = 2;
          return _index["default"].findByIdAndUpdate(currentUserId, {
            $addToSet: {
              following: targetUserId
            }
          });
        case 2:
          _context4.n = 3;
          return _index["default"].findByIdAndUpdate(targetUserId, {
            $addToSet: {
              followers: currentUserId
            }
          });
        case 3:
          res.status(200).json({
            message: "Followed successfully"
          });
          _context4.n = 5;
          break;
        case 4:
          _context4.p = 4;
          _t = _context4.v;
          res.status(500).json({
            message: _t.message
          });
        case 5:
          return _context4.a(2);
      }
    }, _callee4, null, [[0, 4]]);
  }));
  return function followUser(_x3, _x4) {
    return _ref4.apply(this, arguments);
  };
}();

// unfollow user
var unfollowUser = exports.unfollowUser = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5(req, res) {
    var currentUserId, targetUserId, _t2;
    return _regenerator().w(function (_context5) {
      while (1) switch (_context5.p = _context5.n) {
        case 0:
          _context5.p = 0;
          currentUserId = req.body.id; // the user who follows
          targetUserId = req.params.id; // the user to be followed
          if (!(currentUserId === targetUserId)) {
            _context5.n = 1;
            break;
          }
          return _context5.a(2, res.status(400).json({
            message: "You cannot unfollow yourself"
          }));
        case 1:
          _context5.n = 2;
          return _index["default"].findByIdAndUpdate(currentUserId, {
            $pull: {
              following: targetUserId
            }
          });
        case 2:
          _context5.n = 3;
          return _index["default"].findByIdAndUpdate(targetUserId, {
            $pull: {
              followers: currentUserId
            }
          });
        case 3:
          res.status(200).json({
            message: "Unfollowed successfully"
          });
          _context5.n = 5;
          break;
        case 4:
          _context5.p = 4;
          _t2 = _context5.v;
          res.status(500).json({
            message: _t2.message
          });
        case 5:
          return _context5.a(2);
      }
    }, _callee5, null, [[0, 4]]);
  }));
  return function unfollowUser(_x5, _x6) {
    return _ref5.apply(this, arguments);
  };
}();
var updattedById = exports.updattedById = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6(id, data) {
    var _t3;
    return _regenerator().w(function (_context6) {
      while (1) switch (_context6.p = _context6.n) {
        case 0:
          _context6.p = 0;
          _context6.n = 1;
          return _index["default"].findByIdAndUpdate(id, data, {
            "new": true
          });
        case 1:
          _context6.n = 3;
          break;
        case 2:
          _context6.p = 2;
          _t3 = _context6.v;
          throw new Error("Error updating user: " + _t3.message);
        case 3:
          return _context6.a(2);
      }
    }, _callee6, null, [[0, 2]]);
  }));
  return function updattedById(_x7, _x8) {
    return _ref6.apply(this, arguments);
  };
}();
var deleteById = exports.deleteById = /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee7(id) {
    var _t4;
    return _regenerator().w(function (_context7) {
      while (1) switch (_context7.p = _context7.n) {
        case 0:
          _context7.p = 0;
          _context7.n = 1;
          return _index["default"].findByIdAndDelete(id);
        case 1:
          _context7.n = 3;
          break;
        case 2:
          _context7.p = 2;
          _t4 = _context7.v;
          throw new Error("Error deleting user: " + _t4.message);
        case 3:
          return _context7.a(2);
      }
    }, _callee7, null, [[0, 2]]);
  }));
  return function deleteById(_x9) {
    return _ref7.apply(this, arguments);
  };
}();