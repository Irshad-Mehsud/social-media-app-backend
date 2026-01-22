"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updatedById = exports.toggleLike = exports.getAllPosts = exports.deleteById = exports.createPost = exports.commentsById = void 0;
var _index = _interopRequireDefault(require("../../posts/models/index.js"));
var _mongoose = _interopRequireDefault(require("mongoose"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
// =================Helper for Post Service=================

var createPost = exports.createPost = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(data) {
    var user, desc, mediaUrl, mediaType, post;
    return _regenerator().w(function (_context) {
      while (1) switch (_context.n) {
        case 0:
          user = data.user, desc = data.desc, mediaUrl = data.mediaUrl, mediaType = data.mediaType;
          console.log("Creating post with data:", data);
          if (!(!user || !desc || !mediaUrl || !mediaType)) {
            _context.n = 1;
            break;
          }
          throw new Error("User ID, description, mediaUrl, and mediaType are required.");
        case 1:
          post = new _index["default"]({
            user: new _mongoose["default"].Types.ObjectId(user),
            // matches schema
            desc: desc,
            // matches schema
            mediaUrl: mediaUrl,
            mediaType: mediaType
          });
          _context.n = 2;
          return post.save();
        case 2:
          return _context.a(2, post);
      }
    }, _callee);
  }));
  return function createPost(_x) {
    return _ref.apply(this, arguments);
  };
}();
var getAllPosts = exports.getAllPosts = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
    var posts;
    return _regenerator().w(function (_context2) {
      while (1) switch (_context2.n) {
        case 0:
          _context2.n = 1;
          return _index["default"].find({}).populate("user", "name email profilePicture") // populate post author
          .populate("likes", "name profilePicture") // populate liked users
          .populate({
            path: "comments.user",
            // nested populate (inside comments array)
            select: "name profilePicture" // only these fields
          }).sort({
            createdAt: -1
          });
        case 1:
          posts = _context2.v;
          return _context2.a(2, posts);
      }
    }, _callee2);
  }));
  return function getAllPosts() {
    return _ref2.apply(this, arguments);
  };
}();
var deleteById = exports.deleteById = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(id) {
    return _regenerator().w(function (_context3) {
      while (1) switch (_context3.n) {
        case 0:
          _context3.n = 1;
          return _index["default"].findByIdAndDelete(id);
        case 1:
          return _context3.a(2, _context3.v);
      }
    }, _callee3);
  }));
  return function deleteById(_x2) {
    return _ref3.apply(this, arguments);
  };
}();
var updatedById = exports.updatedById = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4(id, data) {
    var _t;
    return _regenerator().w(function (_context4) {
      while (1) switch (_context4.p = _context4.n) {
        case 0:
          _context4.p = 0;
          _context4.n = 1;
          return _index["default"].findByIdAndUpdate(id, data, {
            "new": true
          });
        case 1:
          _context4.n = 3;
          break;
        case 2:
          _context4.p = 2;
          _t = _context4.v;
          throw new Error("Error updating post: " + _t.message);
        case 3:
          return _context4.a(2);
      }
    }, _callee4, null, [[0, 2]]);
  }));
  return function updatedById(_x3, _x4) {
    return _ref4.apply(this, arguments);
  };
}();
var toggleLike = exports.toggleLike = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5(req, res) {
    var postId, userId, post, isLiked, updatedPost, _t2;
    return _regenerator().w(function (_context5) {
      while (1) switch (_context5.p = _context5.n) {
        case 0:
          _context5.p = 0;
          postId = req.params.id;
          userId = req.body.userId;
          _context5.n = 1;
          return _index["default"].findById(postId);
        case 1:
          post = _context5.v;
          if (post) {
            _context5.n = 2;
            break;
          }
          return _context5.a(2, res.status(404).json({
            message: "Post not found"
          }));
        case 2:
          // Check if user already liked the post
          isLiked = post.likes.map(function (id) {
            return id.toString();
          }).includes(userId);
          if (isLiked) {
            post.likes.pull(userId); // Unlike
          } else {
            post.likes.push(userId); // Like
          }
          _context5.n = 3;
          return post.save();
        case 3:
          _context5.n = 4;
          return _index["default"].findById(postId).populate("likes", "_id name profilePicture");
        case 4:
          updatedPost = _context5.v;
          res.status(200).json({
            liked: !isLiked,
            likesCount: updatedPost.likes.length,
            post: updatedPost
          });
          _context5.n = 6;
          break;
        case 5:
          _context5.p = 5;
          _t2 = _context5.v;
          console.error(_t2);
          res.status(500).json({
            message: "Error toggling like",
            error: _t2
          });
        case 6:
          return _context5.a(2);
      }
    }, _callee5, null, [[0, 5]]);
  }));
  return function toggleLike(_x5, _x6) {
    return _ref5.apply(this, arguments);
  };
}();

// const commentsById = async (postId, commentData) => {
//   try {
//     const post = await Post.findById(postId);
//     if (!post) {
//       throw new Error("Post not found");
//     } 
//     post.comments.push(commentData);
//     await post.save();
//     return post;
//   } catch (error) {
//     throw new Error("Error adding comment: " + error.message);
//   }
// };

var commentsById = exports.commentsById = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6(postId, commentData) {
    var post, newComment, _t3;
    return _regenerator().w(function (_context6) {
      while (1) switch (_context6.p = _context6.n) {
        case 0:
          _context6.p = 0;
          _context6.n = 1;
          return _index["default"].findById(postId);
        case 1:
          post = _context6.v;
          if (post) {
            _context6.n = 2;
            break;
          }
          throw new Error("Post not found");
        case 2:
          if (!(!commentData.user || !commentData.text)) {
            _context6.n = 3;
            break;
          }
          throw new Error("User ID and comment text are required");
        case 3:
          newComment = {
            user: commentData.user,
            text: commentData.text,
            createdAt: new Date()
          };
          post.comments.push(newComment);
          _context6.n = 4;
          return post.save();
        case 4:
          return _context6.a(2, post);
        case 5:
          _context6.p = 5;
          _t3 = _context6.v;
          throw new Error("Error adding comment: " + _t3.message);
        case 6:
          return _context6.a(2);
      }
    }, _callee6, null, [[0, 5]]);
  }));
  return function commentsById(_x7, _x8) {
    return _ref6.apply(this, arguments);
  };
}();