const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const dotenv = require("dotenv");

const conenctDB = require("./utils/connectDB");

const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/user");

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

module.exports = app;
