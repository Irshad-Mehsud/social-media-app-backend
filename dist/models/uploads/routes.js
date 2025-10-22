"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _multer = _interopRequireDefault(require("multer"));
var _upload = _interopRequireDefault(require("./controllers/upload.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var router = (0, _express.Router)();
// Multer configuration
var upload = (0, _multer["default"])({
  dest: "src/modules/uploads/files/"
});
// Destination folder for uploaded files
router.post("/", upload.single("image"), _upload["default"]);
var _default = exports["default"] = router;