const jwt = require('jsonwegtoken');

const Config = require('../../config');

const { getDbUserData } = require('../../helper/index');


const tokenVerification = (req, res, next) => {
    let token = req.headers["token"];

    if (!token) {
        return res.status(404).send({ status: 404, message: "no token provided" });
    }
    jwt.verify(token, Config.secret, async (err, decoded) => {
        if (err) {
            return res.status(400).send({ status: 400, message: "token Unauthorized", err: err });

        }

    });
}