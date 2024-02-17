require('dotenv').config()


const mongoose = require("mongoose");
const { DB_USER, DB_PASS, DB_NAME } = require("../");

const db = mongoose.connect(
    process.env.MONGO_DB_URL
);
// console.log("mongo connection established");
module.exports = db;