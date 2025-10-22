"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var storySchema = new _mongoose["default"].Schema({
  user: {
    type: _mongoose["default"].Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  image: {
    type: String,
    required: true
  },
  caption: {
    type: String,
    maxLength: 200
  },
  viewers: [{
    type: _mongoose["default"].Schema.Types.ObjectId,
    ref: "User"
  }],
  createdAt: {
    type: Date,
    "default": Date.now,
    expires: '24h' // Story auto-deletes after 24 hours
  }
});
var Story = _mongoose["default"].model("Story", storySchema);
var _default = exports["default"] = Story;