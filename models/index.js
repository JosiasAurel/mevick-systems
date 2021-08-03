const mongoose = require("mongoose");

const { User } = require("./user");
const { Article } = require("./article");

// export models
module.exports = { User, Article };