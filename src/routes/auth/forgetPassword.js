const { Users } = require("../../models");

const forgetPassword = async (req, res) => {
    try {
        const { email } = req.body.email

        const user = await Users.findOne(email);

        if (user) {
            return res
                .status(200)
                .json({ active: true, user });
        }
        return res
            .status(400)
            .json({ error: "Email does't not matched", active: false, email });
    } catch (error) {
        console.error("Error finding user:", error);
        return res
            .status(500)
            .json({ error: "Internal Server Error", message: error.message });
    }
};

module.exports = forgetPassword;
