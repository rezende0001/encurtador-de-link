const mongoose = require("mongoose");
const config = require("../config/config");

mongoose.connect(config.mongoConnect);

const db = mongoose.connection;

module.exports = db;
