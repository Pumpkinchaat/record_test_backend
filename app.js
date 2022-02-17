const express = require("express");
const rateLimit = require("express-rate-limit");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");
const helmet = require("helmet");
const mongoSanitize = require("express-mongo-sanitize");
const xss = require("xss-clean");
const hpp = require("hpp");
const bodyParser = require("body-parser");

const app = express();
app.use(cookieParser(process.env.COOKIE_SECRET));

// error handlers
const AppError = require("./utils/appError");
const globalErrorHandler = require("./controllers/globalErrorController");

// creating middleware
app.use(express.json({ limit: "10kb" }));

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev")); // to enable logging
}

// serving static files
// looks at the root folder of the file structure
// and defines path from that position
app.use(express.static("./public"));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

// for preventing DoS
const limiter = rateLimit({
  max: 100,
  windowMs: 60 * 60 * 1000,
  message: "Too many requests from this IP, please try again in an hour",
});

app.use("/api", limiter);

// for security
app.use(helmet());
app.use(mongoSanitize());
app.use(xss());

// prevent parameter pollution
// from the query
app.use(
  hpp({
    whitelist: ["regno", "branch"],
  })
);

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next(); // to make sure next middleware gets executed
});

//heartbeat route

app.get("/heartbeat", (req, res) => {
  res.status(200).json({ heartbeat: "detected" });
});

// if the above routes don't get triggered, we can fire another middleware
// for catching errors
app.all("*", (req, res, next) => {
  //global error handler

  next(new AppError(`cannot find ${req.originalUrl} on this server!`, 404));
});

// error handling middleware
app.use(globalErrorHandler);

// server
module.exports = app;
