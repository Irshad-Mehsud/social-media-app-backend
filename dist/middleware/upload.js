"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.upload = void 0;
var _multer = _interopRequireDefault(require("multer"));
var _cloudinary = require("cloudinary");
var _multerStorageCloudinary = require("multer-storage-cloudinary");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
_cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});
var storage = new _multerStorageCloudinary.CloudinaryStorage({
  cloudinary: _cloudinary.v2,
  params: {
    folder: 'stories',
    allowed_formats: ['jpg', 'jpeg', 'png', 'gif', 'webp']
  }
});
var fileFilter = function fileFilter(req, file, cb) {
  if (file.mimetype.startsWith('image/')) {
    cb(null, true);
  } else {
    cb(new Error('Only image files are allowed!'), false);
  }
};
var upload = exports.upload = (0, _multer["default"])({
  storage: storage,
  limits: {
    fileSize: 5 * 1024 * 1024
  },
  fileFilter: fileFilter
});