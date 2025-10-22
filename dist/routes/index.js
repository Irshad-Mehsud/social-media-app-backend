"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _routes = _interopRequireDefault(require("../models/user/routes.js"));
var _routes2 = _interopRequireDefault(require("../models/posts/routes.js"));
var _routes3 = _interopRequireDefault(require("../models/stories/routes.js"));
var _routes4 = _interopRequireDefault(require("../models/uploads/routes.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var router = (0, _express.Router)();
router.use("/auth", _routes["default"]);
router.use("/posts", _routes2["default"]);
router.use("/story", _routes3["default"]);
router.use("/upload", _routes4["default"]);
var _default = exports["default"] = router;