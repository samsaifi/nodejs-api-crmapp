const express = require("express");
const router = express.Router();
const { faker } = require("@faker-js/faker");

const addAccount = require("./add-account");
const deleteAccount = require("./delete-account");
const getAccount = require("./get-account");
const updateAccount = require("./update-account");
const manyAccount = require("./many-accounts");
const fakeAccounts = require("./fake-account");
const findAccount = require("./find-account");

router.get("/fake/:num", fakeAccounts);
router.get("/get", getAccount);
router.get("/find/:id", findAccount);
router.get("/many", manyAccount);
router.post("/add", addAccount);
router.delete("/delete", deleteAccount);
router.put("/update/:id", updateAccount);

module.exports = router;
