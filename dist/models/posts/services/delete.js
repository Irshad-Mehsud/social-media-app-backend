"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _index = require("../db/index.js");
var deletedData = function deletedData(id) {
  (0, _index.deleteById)(id);
};
var _default = exports["default"] = deletedData;