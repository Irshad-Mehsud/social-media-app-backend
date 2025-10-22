"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _joi = _interopRequireDefault(require("joi"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var userValidation = function userValidation(data) {
  var schema = _joi["default"].object({
    name: _joi["default"].string().min(3).max(30).required(),
    email: _joi["default"].string().email().required(),
    password: _joi["default"].string().min(6).required(),
    profilePicture: _joi["default"].string().uri().optional(),
    coverPicture: _joi["default"].string().uri().optional(),
    isAdmin: _joi["default"]["boolean"]().optional(),
    followers: _joi["default"].array().items(_joi["default"].string()).optional(),
    following: _joi["default"].array().items(_joi["default"].string()).optional(),
    stories: _joi["default"].array().items(_joi["default"].string()).optional()
  });
  return schema.validate(data);
};
var _default = exports["default"] = userValidation;