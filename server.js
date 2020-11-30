const express = require("express");
const morgan = require("morgan");
const createError = require("http-errors");
require("dotenv").config();
require("./helpers/init_mongodb");
require("./helpers/init_redis");
const { verifyAccessToken } = require("./helpers/jwt_helper");
const AuthRoute = require("./router/Auth.route");

const app = express();
app.use(morgan("dev"));

app.use(express.json());
//app.use(express.urlencoded({ extended: true }));

app.get("/", verifyAccessToken, async (req, res, next) => {
  res.send("Hello from Express");
});

app.use("/auth", AuthRoute);

app.use(async (req, res, next) => {
  // Create Error with out http-error package

  // const error = new Error("Not found");
  // (error.status = 404), next(error);

  // Create Costume message error
  //next(createError.NotFound("This route does not exist"));

  next(createError.NotFound());
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.send({
    error: {
      status: err.status || 500,
      message: err.message,
    },
  });
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server Running on port ${PORT}`));
