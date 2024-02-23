const bcrypt = require('bcrypt');
const { Users } = require('../models');
getSalt = () => {
    const saltRounds = 10;
    return bcrypt.genSaltSync(saltRounds);
    bcrypt.genSalt(saltRounds, function (err, salt) {
        bcrypt.hash(myPlaintextPassword, salt, function (err, hash) {
            // Store hash in your password DB.
        });
    });
}
getmatchPassword = async (res, body, user) => {

    return bcrypt.compare(body.password, user.password, (err, result) => {
        if (err) {
            console.error('Error comparing passwords:', err);
            return res.status(500).json({ error: 'Internal Server Error', message: err.message });
        }

        if (!result) {
            // Passwords do not match, authentication failed
            return res.status(401).json({ error: 'Invalid username or password' });
        }
        console.log(result);
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

