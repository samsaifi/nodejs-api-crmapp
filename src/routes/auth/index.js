const express = require("express");
const router = express.Router();
const { userRegistration, userLoginValidation, userForgetPassword, userSaveNewPassword } = require("../../errors/users-errors");
const registerUser = require("./register");
const loginUser = require("./login");
const forgetPassword = require("./forgetPassword");
const { saveNewPassword } = require("./saveNewPassword");



router.post('/login', userLoginValidation, loginUser);
router.post('/register', userRegistration, registerUser);
router.post('/forget-password', userForgetPassword, forgetPassword);
router.post('/save-new-password', userSaveNewPassword, saveNewPassword);


module.exports = router;

