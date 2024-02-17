

const { mongoose } = require("mongoose");

const accountsSchema = mongoose.Schema({
    name: String,
    email: String,
    role: String,
});

module.exports = accountsSchema;