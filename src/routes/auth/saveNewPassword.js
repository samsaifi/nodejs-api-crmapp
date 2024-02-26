
const { getHashPassword, getSalt } = require("../../utils/password");
const { Users } = require("../../models");


const saveNewPassword = async (req, res) => {
    try {
        console.log(req.body);
        const { password, _id } = req.body;
        const newslat = getSalt();
        const hashPassword = await getHashPassword(password, newslat);
        const user = await Users.findByIdAndUpdate(_id, { password: hashPassword });
        if (user) {
            console.log(hashPassword);
            return res.status(200).json({ message: "Password updated successfully", status: true, user });
        }
        return res.status(404).json({ message: "User not found", status: false });
    } catch (error) {
        console.error("Error finding user:", error);
        return res
            .status(500)
            .json({ error: "Internal Server Error", message: error.message });
    }
}

module.exports = { saveNewPassword };