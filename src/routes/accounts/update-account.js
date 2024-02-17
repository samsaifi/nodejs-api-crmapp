const Joi = require("joi");

const schema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().required(),
    role: Joi.string().required(),
});


const updateAccount = async (req, res) => {

    try {
        const validate = await schema.validateAsync(req.body);
        console.log("update account successfully", req.body);
        return res.status(200).send({ status: 200, account: req.body })
    }
    catch (err) {
        return res.status(400).send({ status: 400, err: err.message });
    }

}


module.exports = updateAccount;