const mongoose = require("mongoose");

const uri = process.env.MONGO_URI;

const db = mongoose.connect(uri);

module.exports = db;
