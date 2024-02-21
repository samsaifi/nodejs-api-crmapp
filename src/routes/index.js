const express = require('express');
// const { tokenVerifications } = require('../middleware/')
// const auth = require('./auth');
const accounts = require('./accounts');
const auth = require('./auth');
// use router to marger

const router = express.Router();

// router.use("/auth", auth);
router.use("/accounts", accounts);
router.use("/auth", auth);


module.exports = router;