const express = require("express");
const router = express.Router();

router.post("/", async (req, res) => {
    try {
        console.log(req.body);
        const data = req.body;
        return res.status(200).send({ message: "login" }, JSON.stringify(data));
    } catch (err) {
        return res.status(400).send({ status: 400, err: err.message });
    }
});





module.exports = router;
