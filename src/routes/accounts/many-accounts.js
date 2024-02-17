
const { Accounts } = require("../../models");
const accountsData = require("../../../data/accounts");



const manyAccount = async (req, res) => {
    try {
        const account = await Accounts.insertMany(accountsData);
        return res.status(200).send({ status: 200, account: accountsData })
    }
    catch (err) {
        return res.status(400).send({ status: 400, err: err.message });
    }

}


module.exports = manyAccount;