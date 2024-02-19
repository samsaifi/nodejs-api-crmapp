const Joi = require("joi");
const { accounts, Accounts } = require("../../models");

const schema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().required(),
    role: Joi.string().required(),
});


const addAccount = async (req, res) => {

    try {
        console.log(req.body);
        const validate = await schema.validateAsync(req.body);

        const account = new Accounts(req.body);
        await account.save();

        return res.status(200).send({ status: 200, account: req.body })
    }
    catch (err) {
        console.log(err.message);
        return res.status(400).send({ status: 400, err: err.message });
    }

}


module.exports = addAccount;