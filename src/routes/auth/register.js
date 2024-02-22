
const { Users } = require("../../models");
const { getHashPassword, getSalt } = require("../../utils/password");

const registerUser = async (req, res) => {

    try {
        const newslat = getSalt();
        const hashPassword = await getHashPassword(req.body.password, newslat);


        const userdata = {
            name: req.body.name,
            email: req.body.email,
            password: hashPassword,
            status: false,
            slat: newslat,
        }
        const users = new Users(userdata);
        await users.save();
        return res.status(200).send({ status: 200, userdata })
    }
    catch (err) {
        return res.status(400).send({ status: 400, err: err.message });
    }
};

module.exports = registerUser;
