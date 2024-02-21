const express = require("express");
const router = express.Router();

const login = require('./login');


router.post('/login', (req, res) => {
    console.log(req.body);
});


module.exports = router;

