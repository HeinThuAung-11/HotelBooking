// Import dependencies
var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var cors = require("cors");
const { connectToMongoDB } = require("./config/mongodb");
let auth = require("./middleware/auth");

// Import routers
var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var todosRouter = require("./routes/todos");
let adminRouter = require("./routes/admin");
let roomRouter = require("./routes/room");
let bookingRouter = require("./routes/booking");
// Create the Express.js app
var app = express();

// Set up view engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

// Middleware
app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// Call the connectDB function to connect with mongodb
connectToMongoDB();
// Routes
app.use("/api", indexRouter);
app.use("/api/users", usersRouter);
app.use("/api/todos", auth.verifyUserToken, todosRouter);
app.use("/api/admin", adminRouter);
app.use("/api/rooms", roomRouter);
app.use("/api/bookings", auth.verifyUserToken, bookingRouter);

// Catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// Error handler
app.use(function (err, req, res, next) {
  // Set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // Render the error page
  res.status(err.status || 500);
  res.render("error");
});

// Export the app
module.exports = app;
