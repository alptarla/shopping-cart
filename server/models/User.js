const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const UserModel = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String,
  birthDate: Date,
  location: {
    countryCode: Number,
    cityCode: Number,
  },
});

UserModel.pre("save", async function () {
  const encodedPassword = bcrypt.hashSync(this.password, 10);
  this.password = encodedPassword;
});

UserModel.methods.checkPassword = function (password) {
  return bcrypt.compareSync(password, this.password);
};

module.exports = mongoose.model("User", UserModel);
