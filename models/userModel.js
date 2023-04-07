require("dotenv").config();
const mongoose = require("mongoose");

mongoose
  .connect(process.env.DB)
  .then(() => console.log("Database Connected.."))
  .catch((err) => console.log(err));

const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
});

const User = mongoose.model("users", userSchema);

module.exports = User;
