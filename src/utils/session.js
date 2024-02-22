

const setSessions = (req, user) => {
    req.session.status = true;
    req.session.userId = user._id;
    req.session.name = user.name;
    req.session.email = user.email;
    return req;
}


module.exports = {
    setSessions
};