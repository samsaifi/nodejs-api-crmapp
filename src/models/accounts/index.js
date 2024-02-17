const mongoose = require('mongoose');

const accountsSchema = require('./accounts-schema');

const Accounts = mongoose.model('accounts', accountsSchema);



module.exports = Accounts;