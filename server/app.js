const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const dotenv = require("dotenv");

const conenctDB = require("./utils/connectDB");
const createHttpError = require("http-errors");

const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/user");
const productRoutes = require("./routes/product");
const cartRoutes = require("./routes/cart");

const app = express();

dotenv.config();

conenctDB();

app.use(logger("dev"));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/auth", authRoutes);
app.use("/user", userRoutes);
app.use("/product", productRoutes);
app.use("/cart", cartRoutes);

app.use((req, res, next) => {
  next(createHttpError(404));
});

// eslint-disable-next-line no-unused-vars
app.use((err, req, res, _next) => {
  if (process.env.NODE_ENV !== "production") {
    console.error(err);
  }

  res.status(err.status || 500).json({ error: err.message });
});

module.exports = app;
