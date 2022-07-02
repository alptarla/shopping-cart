const mongoose = require("mongoose");

async function conenctDB() {
  try {
    const { connection } = await mongoose.connect(process.env.MONGO_URL);
    console.log(`Connected to MongoDB on ${connection.host}`);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

module.exports = conenctDB;
