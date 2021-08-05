
import mongoose = require("mongoose");

import { Article } from "./article";
import { User } from "./user";

import { MONGO_DB_URI } from "../serviceConfig";
import { Mongoose } from "mongoose";

mongoose.connect(MONGO_DB_URI);

export { User, Article };