"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updatedData = void 0;
var _index = require("../db/index.js");
var updatedData = exports.updatedData = function updatedData(id, data) {
  (0, _index.updatedById)(id, data);
};