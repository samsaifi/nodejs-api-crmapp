const { Accounts } = require("../../models");

const findAccount = async (req, res) => {

    try {
        const _id = req.params.id;
        const accountsData = await Accounts.find({ _id });
        return res.status(200).send(JSON.stringify(accountsData));
    } catch (err) {
        return res.status(400).send({ status: 400, err: err.message });
    }
};

module.exports = findAccount;