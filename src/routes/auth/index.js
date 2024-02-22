const express = require("express");
const router = express.Router();
const { userRegistration, userLoginValidation } = require("../../errors/users-errors");
const registerUser = require("./register");
const loginUser = require("./login");



router.post('/login', userLoginValidation, loginUser);
router.post('/register', userRegistration, registerUser);


module.exports = router;

