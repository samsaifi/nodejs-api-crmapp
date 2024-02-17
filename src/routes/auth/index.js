const exports = require('express');
const router = exports.Router();

const singup = require('./singup');
const login = require('./login');


router.use('login', login);
router.use('signup', singup);

module.exports = router;

