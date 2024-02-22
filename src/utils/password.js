const bcrypt = require('bcryptjs');
const { Users } = require('../models');
getSalt = () => {
    const saltRounds = 10;
    return bcrypt.genSaltSync(saltRounds);
}
getmatchPassword = async (res, body, user) => {

    if (!user) {
        return res.status(401).json({ error: 'Invalid username or password' });
    }
    bcrypt.compare(body.password, user.password, (err, result) => {
        if (err) {
            console.error('Error comparing passwords:', err);
            return res.status(500).json({ error: 'Internal Server Error', message: err.message });
        }

        if (!result) {
            // Passwords do not match, authentication failed
            return res.status(401).json({ error: 'Invalid username or password' });
        }
    });
}

getHashPassword = async (password, salt) => {
    return bcrypt.hashSync(password, salt, function (err, res) {
        res === true
    });
}

module.exports = {
    getmatchPassword,
    getSalt,
    getHashPassword
}

