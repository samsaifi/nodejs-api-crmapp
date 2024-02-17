const express = require('express');
const router = express.Router();

const addAccount = require('./add-account');
const deleteAccount = require('./delete-account');
const getAccount = require('./get-account');
const updateAccount = require('./update-account');
const manyAccount = require('./many-accounts');


router.get('/get', getAccount);
router.get('/many', manyAccount);
router.post('/add', addAccount);
router.delete('/delete', deleteAccount);
router.put('/update/:id', updateAccount);


module.exports = router;