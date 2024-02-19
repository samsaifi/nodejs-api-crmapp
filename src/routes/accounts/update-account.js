const Joi = require("joi");
const { Accounts } = require("../../models");

const schema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().required(),
    role: Joi.string().required(),
});


const updateAccount = async (req, res) => {
    const { _id } = req.params;
    const newData = req.body;
    try {


        const validate = await schema.validateAsync(req.body);
        console.log(req.params.id, req.body);

        const { id } = req.params;

        const updatedRecord = await Accounts.findByIdAndUpdate(id, newData, { new: true });

        if (!updatedRecord) {
            return res.status(404).json({ message: 'Record not found' });
        }
        return res.status(200).send({ status: 200, updatedRecord });
    }
    catch (err) {
        return res.status(400).send({ status: 400, err: err.message });
    }

}


module.exports = updateAccount;