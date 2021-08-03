
const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
    name: String,
    email: String,
    password: String,
    registrationDate: String,
    role: String
});

const User = mongoose.model("User", UserScema);

module.exports = User