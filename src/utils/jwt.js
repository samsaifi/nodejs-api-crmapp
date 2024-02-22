const jwt = require('jsonwebtoken');


const getJwtToken = (user) => {
    const userData = {
        status: true,
        userId: user._id,
        name: user.name,
        email: user.email
    }
    const token = jwt.sign(userData, process.env.JWT_SECRET_KEY_TYPE, { expiresIn: '1h' });

    return token;

}
const verifyJwtToken = (req, res, next) => {
    const token = req.header('Authorization');
    if (token) {
        return res.status(401).json({ message: "Token not exits " });
    }

    jwt.verify(token, process.env.JWT_SECRET_KEY_TYPE, (err, decoded) => {
        if (err) {
            return res.status(401).json({ error: 'Invalid token' });
        }

        // If the token is valid, you can access the decoded information
        // res.json({ message: `Welcome, crm app!` });
    });
    // next();
}

module.exports = {
    getJwtToken,
    verifyJwtToken
}