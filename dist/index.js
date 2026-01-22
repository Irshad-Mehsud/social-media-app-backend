"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handler = void 0;
var _express = _interopRequireDefault(require("express"));
var _mongoose = _interopRequireDefault(require("mongoose"));
var _cors = _interopRequireDefault(require("cors"));
var _dotenv = _interopRequireDefault(require("dotenv"));
var _chalk = _interopRequireDefault(require("chalk"));
var _serverlessHttp = _interopRequireDefault(require("serverless-http"));
var _index = _interopRequireDefault(require("./routes/index.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
// import routes from "./src/routes/index.js";

_dotenv["default"].config(); // Make sure this is at the top

var app = (0, _express["default"])();
app.use(_express["default"].json());
app.use((0, _cors["default"])({
  origin: "http://localhost:5173",
  // your frontend origin
  credentials: true
}));
var ENV = process.env;
_mongoose["default"].connect("mongodb+srv://".concat(ENV.DB_USER, ":").concat(ENV.DB_PASSWORD, "@irshadcluster.w5dqwxs.mongodb.net/").concat(ENV.DB_NAME, "?retryWrites=true&w=majority&appName=IrshadCluster")).then(function () {
  return console.log(_chalk["default"].white.bgGreen("------Connected to MongoDB----"));
})["catch"](function (err) {
  return console.error("MongoDB connection error:", err);
});
app.use("/api", _index["default"]);
app.get("/", function (req, res) {
  res.send("Backend is running successfully!");
});

// ✅ Export for Vercel serverless function
// export default app;
var handler = exports.handler = (0, _serverlessHttp["default"])(app);

// ✅ Local server (only runs locally, not on Vercel)
if (process.env.NODE_ENV !== "production") {
  app.listen(5000, function () {
    console.log("Server is running on port 5000");
  });
}