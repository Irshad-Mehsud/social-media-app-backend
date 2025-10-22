"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _index = require("../db/index.js");
var getData = function getData() {
  return (0, _index.getAllPosts)();
};
var _default = exports["default"] = getData;