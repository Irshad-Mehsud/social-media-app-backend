"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _post = _interopRequireDefault(require("./controllers/post.js"));
var _get = _interopRequireDefault(require("./controllers/get.js"));
var _delete = _interopRequireDefault(require("./controllers/delete.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var router = (0, _express.Router)();
router.post("/", _post["default"]);
router.get("/", _get["default"]);
router["delete"]("/:id", _delete["default"]);
var _default = exports["default"] = router;