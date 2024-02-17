const Joi = require("joi");

const schema = Joi.object({
    _id: Joi.string().required(),
});


const deleteAccount = async (req, res) => {
    const { _id } = req.body;
    try {
        const validate = await schema.validateAsync(req.body);
        const deleteQuery = { _id };
        console.log("delete account successfully", deleteQuery);
        return res.status(200).send({ status: 200, deleteQuery })
    }
    catch (err) {
        return res.status(400).send({ status: 400, err: err.message });
    }

}


module.exports = deleteAccount;