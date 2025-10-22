"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _post = _interopRequireDefault(require("./controllers/post.js"));
var _get = _interopRequireDefault(require("./controllers/get.js"));
var _update = _interopRequireDefault(require("./controllers/update.js"));
var _delete = _interopRequireDefault(require("./controllers/delete.js"));
var _index = require("./db/index.js");
var _comments = _interopRequireDefault(require("./controllers/comments.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var router = (0, _express.Router)();
router.post("/", _post["default"]);
router.get("/", _get["default"]);
router.put("/:id", _update["default"]);
router["delete"]("/:id", _delete["default"]);
router.put("/:id/likes", _index.toggleLike);
router.post("/:id/comments", _comments["default"]);
var _default = exports["default"] = router;