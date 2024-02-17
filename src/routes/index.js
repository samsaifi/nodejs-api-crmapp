const express = require('express');
// const { tokenVerifications } = require('../middleware/')
// const auth = require('./auth');
const accounts = require('./accounts');

// use router to marger

const router = express.Router();

// router.use("/auth", auth);
router.use("/accounts", accounts);


module.exports = router;