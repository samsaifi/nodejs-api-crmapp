const mongoose = require('mongoose');

mongoose.Promise = global.Promise;


const db = {}


db.mongoose = mongoose;
db.Accounts = require('./accounts');


module.exports = db;


