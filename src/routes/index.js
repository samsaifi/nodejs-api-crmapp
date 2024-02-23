const express = require('express');
// const { tokenVerifications } = require('../middleware/')
// const auth = require('./auth');
const accounts = require('./accounts');
const auth = require('./auth');
const { verifyJwtToken } = require('../utils/jwt');
// use router to marger

const router = express.Router();

// router.use("/auth", auth);
router.use("/accounts", accounts);
router.use("/auth", auth);

router.get('/user/session', (req, res) => {
    // Destroy the session
    return res.json({
        session: req.session
    });
});
router.get('/user/logout', (req, res) => {
    // Destroy the session
    req.session.destroy(() => {
        return res.json({
            message: 'User Logged Out sucessfully'
        });
    });
});

module.exports = router;