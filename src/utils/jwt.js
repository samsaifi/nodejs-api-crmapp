const { log } = require("console");
const jwt = require("jsonwebtoken");

const getJwtToken = (user) => {
  Token;
  const userData = {
    status: true,
    userId: user._id,
    name: user.name,
    email: user.email,
  };
  const token = jwt.sign(userData, process.env.JWT_SECRET_KEY_TYPE, {
    expiresIn: "1h",
  });

  return token;
};
const verifyJwtToken = (req, res, next) => {
  let token = req.header("Authorization");

  if (!token) {
    return res.status(401).json({ errors: "Token must be required" });
  }
  token = token.split(" ");
  const tokenFinal = token[1];
  console.log(tokenFinal);
  jwt.verify(tokenFinal, process.env.JWT_SECRET_KEY_TYPE, (err, decoded) => {
    console.log(decoded);
    if (err) {
      return res.status(401).json({ error: "Invalid token", tokenFinal });
    }

    // If the token is valid, you can access the decoded information
    return res.json({ message: `Welcome, crm app!`, user: decoded });
  });
  //   next();
};

module.exports = {
  getJwtToken,
  verifyJwtToken,
};
