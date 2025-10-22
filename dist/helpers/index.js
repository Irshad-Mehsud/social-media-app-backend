"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.authentication = void 0;
var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));
var _dotenv = _interopRequireDefault(require("dotenv"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
_dotenv["default"].config();
var authentication = exports.authentication = function authentication(req, res, next) {
  try {
    var authorization = req.headers.authorization;
    if (!authorization) {
      return res.status(401).json({
        message: 'No token provided'
      });
    }
    var token = authorization.split(' ')[1];
    if (!token) {
      return res.status(401).json({
        message: 'No token provided'
      });
    }
    _jsonwebtoken["default"].verify(token, process.env.JWT_SECRET, function (err, decoded) {
      if (err) {
        return res.status(403).json({
          status: 403,
          message: 'Unauthorized access'
        });
      }

      // ✅ Attach decoded info (like id) to request
      req.user = decoded;
      next();
    });
  } catch (error) {
    return res.status(500).json({
      status: 500,
      message: 'Internal server error',
      error: error.message
    });
  }
};