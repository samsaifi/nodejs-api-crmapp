
const UsersSchema = require("./users-schema");
const mongoose = require('mongoose');

const Users = mongoose.model('Users', UsersSchema);
module.exports = Users;