const { Accounts } = require("../../models");



const getAccount = async (req, res) => {
    try {
        const accountsData = await Accounts.find({});
        return res.status(200).send(JSON.stringify({ status: 200, accountsData }));
    }
    catch (err) {
        return res.status(400).send({ status: 400, err: err.message });
    }

}


module.exports = getAccount;