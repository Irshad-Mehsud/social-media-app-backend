"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _index = require("../user/db/index.js");
var _post = _interopRequireDefault(require("./controllers/post.js"));
var _get = require("./controllers/get.js");
var _update = _interopRequireDefault(require("./controllers/update.js"));
var _delete = _interopRequireDefault(require("./controllers/delete.js"));
var _index2 = require("../../helpers/index.js");
var _login = _interopRequireDefault(require("../user/authcontrollers/login.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var router = (0, _express.Router)();
router.post("/register", _post["default"]);
router.put("/:id/follow", _index2.authentication, _index.followUser);
router.put("/:id/unfollow", _index2.authentication, _index.unfollowUser);
router.get("/", _index2.authentication, _get.getController);
router.get("/:id", _index2.authentication, _get.getCurrentUser);
router.put("/:id", _update["default"]);
router["delete"]("/:id", _delete["default"]);
router.post("/login", _login["default"]);
// router.post("/unfollow", unfollowUser);
var _default = exports["default"] = router;