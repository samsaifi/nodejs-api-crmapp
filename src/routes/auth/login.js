const { Users } = require("../../models");
const { getJwtToken } = require("../../utils/jwt");
const { getmatchPassword } = require("../../utils/password");
const { setSessions } = require("../../utils/session");

const loginUser = async (req, res) => {
  try {

    const user = await Users.findOne({ email: req.body.email });

    if (!user) {
      return res.status(401).json({ error: "Invalid Email" });
    }

    getmatchPassword(res, req.body, user);

    setSessions(req, user);
    const token = await getJwtToken(user);
    // console.log(token);
    return res
      .status(200)
      .json({ message: "login successful", token });
  } catch (error) {
    console.error("Error finding user:", error);
    return res
      .status(500)
      .json({ error: "Internal Server Error", message: error.message });
  }
};

module.exports = loginUser;
