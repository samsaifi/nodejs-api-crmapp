

const { mongoose } = require("mongoose");

const UsersSchema = mongoose.Schema({
    email: String,
    password: String,
    status: String,
});

module.exports = UsersSchema;