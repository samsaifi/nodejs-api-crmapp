const express = require("express");
const router = express.Router();
const { userRegistration, userLoginValidation, userForgetPassword } = require("../../errors/users-errors");
const registerUser = require("./register");
const loginUser = require("./login");
const forgetPassword = require("./forgetPassword");



router.post('/login', userLoginValidation, loginUser);
router.post('/register', userRegistration, registerUser);
router.post('/forget-password', userForgetPassword, forgetPassword);


module.exports = router;

