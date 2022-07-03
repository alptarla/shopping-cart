const Product = require("../models/Product");
const path = require("path");
const fs = require("fs");
const connectDB = require("../utils/connectDB");
const dotenv = require("dotenv");

dotenv.config();
connectDB();

function getProductsData() {
  const dataPath = path.join(__dirname, "../data.json");
  const data = fs.readFileSync(dataPath, "utf8");
  return JSON.parse(data);
}

async function saveToDb() {
  try {
    console.log("process started.....");
    const products = getProductsData();
    await Product.insertMany(products);
    console.log("success");
  } catch (error) {
    console.error(error.message);
  } finally {
    process.exit(1);
  }
}

if (process.argv[2] === "save") {
  saveToDb();
}
