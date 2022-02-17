const dotenv = require("dotenv");
const cronJob = require("cron").CronJob;
const axios = require("axios");
dotenv.config({ path: `${__dirname}/config.env` });
const mongoose = require("mongoose");

// global synchronous error handler
process.on("uncaughtException", (err) => {
  console.log(err.name, err.message);
  console.log("unhandled EXCEPTION 💥 shutting down");
  process.exit(1);
});

mongoose
  .connect(process.env.LOCAL_DB_CONNECTION, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then((con) => {
    console.log("db connection successful");
  })
  .catch((err) => console.log("ERROR 💥", err.message));

const app = require("./app");

const port = process.env.PORT;

const server = app.listen(port, () => {
  console.log(`running at port ${port}`);
});

// global unhandledRejection catcher (async code exception handler)
process.on("unhandledRejection", (err) => {
  console.log(err.name, err.message);
  console.log("unhandled REJECTION 💥 shutting down");
  server.close(() => {
    process.exit(1);
  });
});

//This is cron job to keep the server alive
const domain = process.env.DOMAIN || "http://localhost:3000/heartbeat";

const job = new cronJob("0 */20 * * * *", function () {
  axios
    .get(domain) //!change this URL later on in production
    .then((res) => {
      console.log(res.data.heartbeat);
    })
    .catch((err) => {
      console.log("[NO HEARTBEAT DETECTED]", err);
    });
});

job.start();